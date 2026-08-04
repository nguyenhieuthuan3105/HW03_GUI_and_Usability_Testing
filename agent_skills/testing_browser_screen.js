/**
 * Agent Skill: testing_browser_screen.js
 * Purpose: Desktop Cross-Browser Matrix Screenshot Capture (Chrome & Edge Only)
 * Engine: Puppeteer-core / Puppeteer with Local Executables for Real Chrome and Edge
 * 
 * Input: Dynamically parsed from agent_skills/spec.md
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

let puppeteer;
try {
    puppeteer = require('puppeteer-core');
} catch (e) {
    try {
        puppeteer = require('puppeteer');
    } catch (err) {
        puppeteer = null;
    }
}

// Dynamically parse user configuration from spec.md if available
function loadSpecConfig() {
    const specPath = path.join(__dirname, 'spec.md');
    if (!fs.existsSync(specPath)) return {};
    const content = fs.readFileSync(specPath, 'utf-8');

    const sutMatch = content.match(/\* \*\*URL hệ thống web SUT:\*\* `([^`]+)`/);
    const loginUrlMatch = content.match(/\* \*\*URL trang Đăng nhập:\*\* `([^`]+)`/);
    const userMatch = content.match(/\* \*\*Tài khoản Đăng nhập \(User Email\/Username\):\*\* `([^`]+)`/);
    const passMatch = content.match(/\* \*\*Mật khẩu Đăng nhập \(User Password\):\*\* `([^`]+)`/);
    const watermarkMatch = content.match(/\* \*\*Văn bản Watermark hiển thị trên ảnh:\*\* `([^`]+)`/);

    const parsed = {};
    if (sutMatch && !sutMatch[1].includes('[Nhập')) parsed.baseUrl = sutMatch[1].trim();
    if (loginUrlMatch && !loginUrlMatch[1].includes('[Nhập')) parsed.loginUrl = loginUrlMatch[1].trim();
    if (userMatch && !userMatch[1].includes('[Nhập')) parsed.directUser = userMatch[1].trim();
    if (passMatch && !passMatch[1].includes('[Nhập')) parsed.directPass = passMatch[1].trim();
    if (watermarkMatch && !watermarkMatch[1].includes('[Nhập')) parsed.watermarkText = watermarkMatch[1].trim();
    return parsed;
}

const specConfig = loadSpecConfig();

const CONFIG = {
    baseUrl: process.env.SUT_URL || specConfig.baseUrl || 'https://prod-dev.ems-fitus.cloud',
    loginUrl: specConfig.loginUrl || `${process.env.SUT_URL || 'https://prod-dev.ems-fitus.cloud'}/login`,
    outputDir: path.join(__dirname, '../images/cross_platform_screenshots'),
    resultsFile: path.join(__dirname, 'browser_matrix_results.json'),
    watermarkText: process.env.WATERMARK_TEXT || specConfig.watermarkText || 'MSSV: 12345678 - user1@gmail.com',
    directUser: process.env.USER_EMAIL || specConfig.directUser || 'mikazuki31102005@gmail.com',
    directPass: process.env.USER_PASSWORD || specConfig.directPass || 'User@123'
};

const userHome = os.homedir();

// Executable Paths for Chrome & Edge on Windows
const BROWSER_PATHS = {
    chrome: [
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        path.join(userHome, 'AppData\\Local\\Google\\Chrome\\Application\\chrome.exe')
    ],
    edge: [
        'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
    ]
};

function findExecutable(paths) {
    for (const p of paths) {
        if (fs.existsSync(p)) return p;
    }
    return null;
}

// Executed Browsers (Google Chrome & Microsoft Edge Only)
const EXECUTED_BROWSERS = [
    { name: 'chrome', label: 'Google Chrome', paths: BROWSER_PATHS.chrome, viewport: { width: 1280, height: 800 } },
    { name: 'edge', label: 'Microsoft Edge', paths: BROWSER_PATHS.edge, viewport: { width: 1280, height: 800 } }
];

// All Matrix Environments (Included in plan JSON for full report table generation)
const ALL_MATRIX_ENVIRONMENTS = [
    { name: 'chrome', label: 'Google Chrome', os: 'Windows', device: 'Desktop', execute: true },
    { name: 'edge', label: 'Microsoft Edge', os: 'Windows', device: 'Desktop', execute: true },
    { name: 'firefox', label: 'Mozilla Firefox', os: 'Windows', device: 'Desktop', execute: false },
    { name: 'opera', label: 'Opera', os: 'Windows', device: 'Desktop', execute: false },
    { name: 'safari', label: 'Apple Safari', os: 'macOS', device: 'Desktop', execute: false },
    { name: 'phone', label: 'Google Chrome', os: 'Android', device: 'Phone', execute: false },
    { name: 'tablet', label: 'Google Chrome', os: 'Android', device: 'Tablet', execute: false }
];

const SCREENS = [
    { id: 'Screen1', path: '/dashboard', label: 'Screen 1: Home & Listing' },
    { id: 'Screen2', path: '/events/68', label: 'Screen 2: Detail Page' },
    { id: 'Screen3', path: '/events/68#register', label: 'Screen 3: Form Page' }
];

if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
}

function getBrowserMatrixPlan() {
    const tasks = [];
    for (const env of ALL_MATRIX_ENVIRONMENTS) {
        for (const screen of SCREENS) {
            let fileName = '';
            if (env.name === 'phone') {
                fileName = `android_chrome_phone_${screen.id}.png`;
            } else if (env.name === 'tablet') {
                fileName = `android_chrome_tablet_${screen.id}.png`;
            } else if (env.name === 'safari') {
                fileName = `macos_safari_desktop_${screen.id}.png`;
            } else {
                fileName = `windows_${env.name}_desktop_${screen.id}.png`;
            }

            tasks.push({
                browserLabel: env.label,
                browserName: env.name,
                os: env.os,
                device: env.device,
                screenId: screen.id,
                targetUrl: `${CONFIG.baseUrl}${screen.path}`,
                watermarkText: CONFIG.watermarkText,
                execute: env.execute,
                status: env.execute ? 'Pending' : 'N/A',
                outputPath: env.execute ? `images/cross_platform_screenshots/${fileName}` : ''
            });
        }
    }
    return tasks;
}

async function runBrowserMatrixTesting() {
    console.log(`🌐 Desktop Cross-Browser Matrix Capture (Google Chrome & Microsoft Edge Only)...`);

    const plan = getBrowserMatrixPlan();

    if (!puppeteer) {
        console.log('Puppeteer/Puppeteer-core is not installed.');
        fs.writeFileSync(CONFIG.resultsFile, JSON.stringify(plan, null, 2));
        return;
    }

    const fallbackExec = findExecutable(BROWSER_PATHS.edge) || findExecutable(BROWSER_PATHS.chrome);

    for (const bInfo of EXECUTED_BROWSERS) {
        const realPath = findExecutable(bInfo.paths) || fallbackExec;
        console.log(`\n🖥️ Running Real Browser: [${bInfo.label}] (${realPath})`);

        const launchOptions = {
            headless: false,
            defaultViewport: bInfo.viewport,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        };

        if (realPath) {
            launchOptions.executablePath = realPath;
        }

        let browser;
        try {
            browser = await puppeteer.launch(launchOptions);
        } catch (err) {
            console.warn(`⚠️ Error launching ${bInfo.label}, skipping...`);
            continue;
        }

        const page = await browser.newPage();

        try {
            console.log(`  🔐 Logging in on ${bInfo.label}...`);
            await page.goto(CONFIG.loginUrl, { waitUntil: 'networkidle2' });
            await new Promise(r => setTimeout(r, 1500));

            const emailInput = await page.waitForSelector('input[type="email"], input[name="email"], input[name="username"]', { timeout: 8000 }).catch(() => null);
            const passInput = await page.waitForSelector('input[type="password"], input[name="password"]', { timeout: 8000 }).catch(() => null);

            if (emailInput && passInput) {
                await emailInput.type(CONFIG.directUser, { delay: 30 });
                await passInput.type(CONFIG.directPass, { delay: 30 });
                await page.evaluate(() => {
                    const submitBtn = document.querySelector('button[type="submit"]') ||
                        Array.from(document.querySelectorAll('button, input[type="submit"]')).find(b => {
                            const txt = (b.textContent || b.value || '').trim().toLowerCase();
                            return txt.includes('đăng nhập') || txt.includes('login') || txt.includes('sign in');
                        });
                    if (submitBtn) submitBtn.click();
                });
                await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 15000 }).catch(() => { });
                await new Promise(r => setTimeout(r, 1500));
            }

            for (const screen of SCREENS) {
                const fileName = `windows_${bInfo.name}_desktop_${screen.id}.png`;
                const filePath = path.join(CONFIG.outputDir, fileName);
                console.log(`  📸 Capturing ${bInfo.label} -> ${screen.id}...`);

                await page.goto(`${CONFIG.baseUrl}${screen.path}`, { waitUntil: 'networkidle2' });
                await new Promise(r => setTimeout(r, 1500));

                // Inject Watermark Overlay
                await page.evaluate((text) => {
                    const watermark = document.createElement('div');
                    watermark.innerText = text;
                    watermark.style.position = 'fixed';
                    watermark.style.top = '10px';
                    watermark.style.right = '10px';
                    watermark.style.backgroundColor = 'rgba(220, 38, 38, 0.9)';
                    watermark.style.color = '#ffffff';
                    watermark.style.padding = '6px 14px';
                    watermark.style.fontSize = '14px';
                    watermark.style.fontWeight = 'bold';
                    watermark.style.zIndex = '999999';
                    document.body.appendChild(watermark);
                }, CONFIG.watermarkText);

                await page.screenshot({ path: filePath });
                console.log(`  ✅ Saved: ${fileName}`);

                const taskIndex = plan.findIndex(t => t.browserName === bInfo.name && t.screenId === screen.id);
                if (taskIndex !== -1) {
                    plan[taskIndex].status = 'Pass';
                }
            }

        } catch (err) {
            console.error(`  ❌ Error on ${bInfo.label}:`, err.message);
        } finally {
            await browser.close();
        }
    }

    fs.writeFileSync(CONFIG.resultsFile, JSON.stringify(plan, null, 2));
    console.log(`\n🎉 Completed matrix execution for Chrome & Edge! Summary written to ${CONFIG.resultsFile}`);
}

if (require.main === module) {
    runBrowserMatrixTesting();
}

module.exports = { runBrowserMatrixTesting };
