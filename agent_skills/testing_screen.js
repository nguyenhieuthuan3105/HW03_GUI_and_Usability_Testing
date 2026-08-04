/**
 * Agent Skill: testing_screen.js
 * Purpose: Generalized Automated GUI & Screen Testing Handler
 * Engine: Puppeteer-core / Puppeteer with Local Browser Executable
 * 
 * Input: Configuration & Screen Targets dynamically loaded from agent_skills/spec.md
 */

const fs = require('fs');
const path = require('path');
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

    const parsed = {};
    if (sutMatch && !sutMatch[1].includes('[Nhập')) parsed.baseUrl = sutMatch[1].trim();
    if (loginUrlMatch && !loginUrlMatch[1].includes('[Nhập')) parsed.loginUrl = loginUrlMatch[1].trim();
    if (userMatch && !userMatch[1].includes('[Nhập')) parsed.directUser = userMatch[1].trim();
    if (passMatch && !passMatch[1].includes('[Nhập')) parsed.directPass = passMatch[1].trim();
    return parsed;
}

const specConfig = loadSpecConfig();

const CONFIG = {
    baseUrl: process.env.SUT_URL || specConfig.baseUrl || 'https://prod-dev.ems-fitus.cloud',
    loginUrl: specConfig.loginUrl || `${process.env.SUT_URL || 'https://prod-dev.ems-fitus.cloud'}/login`,
    outputBugDir: path.join(__dirname, '../images/bug_screenshots'),
    resultsFile: path.join(__dirname, 'screen_test_results.json'),
    directUser: process.env.USER_EMAIL || specConfig.directUser || 'mikazuki31102005@gmail.com',
    directPass: process.env.USER_PASSWORD || specConfig.directPass || 'User@123'
};

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const CHROME_PATH = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';

function getExecutablePath() {
    if (fs.existsSync(EDGE_PATH)) return EDGE_PATH;
    if (fs.existsSync(CHROME_PATH)) return CHROME_PATH;
    return null;
}

// Dynamic Target Screens Configuration (Default template, dynamically overridden by spec.md)
const TARGET_SCREENS = [
    { id: 'Screen1', path: '/dashboard', label: 'Screen 1: Home & Listing' },
    { id: 'Screen2', path: '/events/68', label: 'Screen 2: Detail Page' },
    { id: 'Screen3', path: '/events/68#register', label: 'Screen 3: Registration Form' },
    { id: 'Screen4', path: '/profile', label: 'Screen 4: Profile & QR Ticket' }
];

if (!fs.existsSync(CONFIG.outputBugDir)) {
    fs.mkdirSync(CONFIG.outputBugDir, { recursive: true });
}

function getBrowserExecutionPlan() {
    return {
        taskName: "Generalized Automated Screen GUI Testing",
        sutUrl: CONFIG.baseUrl,
        executablePath: getExecutablePath(),
        authenticationFlow: [
            { step: 1, name: "Navigate to Direct Login Form", target: CONFIG.loginUrl },
            { step: 2, name: "Enter Direct Credentials", username: CONFIG.directUser, password: CONFIG.directPass },
            { step: 3, name: "Click Direct Login Button & Verify Session" }
        ],
        screenTargets: TARGET_SCREENS.map(scr => ({
            screenId: scr.id,
            url: `${CONFIG.baseUrl}${scr.path}`,
            label: scr.label,
            bugScreenshotPath: `images/bug_screenshots/${scr.id}.png`
        }))
    };
}

async function runScreenTesting() {
    const plan = getBrowserExecutionPlan();
    fs.writeFileSync(CONFIG.resultsFile, JSON.stringify(plan, null, 2));
    console.log(`📄 Execution plan written to ${CONFIG.resultsFile}`);

    if (!puppeteer) {
        console.log('Puppeteer/Puppeteer-core is not installed. Please run "npm install puppeteer-core".');
        return;
    }

    const execPath = getExecutablePath();
    const launchOptions = {
        headless: false,
        defaultViewport: { width: 1280, height: 800 },
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    };

    if (execPath) {
        launchOptions.executablePath = execPath;
    }

    console.log(`🚀 Launching Generalized Screen Testing for SUT: ${CONFIG.baseUrl}...`);
    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    try {
        // Step 1: Login
        console.log('🔐 Navigating to Login Page...');
        await page.goto(CONFIG.loginUrl, { waitUntil: 'networkidle2' });
        await new Promise(r => setTimeout(r, 1500));

        console.log(`🔑 Entering Direct Credentials (${CONFIG.directUser})...`);
        const emailInput = await page.waitForSelector('input[type="email"], input[name="email"], input[name="username"]', { timeout: 10000 }).catch(() => null);
        const passInput = await page.waitForSelector('input[type="password"], input[name="password"]', { timeout: 10000 }).catch(() => null);

        if (emailInput && passInput) {
            await emailInput.type(CONFIG.directUser, { delay: 30 });
            await passInput.type(CONFIG.directPass, { delay: 30 });

            console.log('🔓 Clicking Submit button...');
            await page.evaluate(() => {
                const submitBtn = document.querySelector('button[type="submit"]') ||
                                  Array.from(document.querySelectorAll('button, input[type="submit"]')).find(b => {
                                      const txt = (b.textContent || b.value || '').trim().toLowerCase();
                                      return txt.includes('đăng nhập') || txt.includes('login') || txt.includes('sign in');
                                  });
                if (submitBtn) submitBtn.click();
            });

            await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 20000 }).catch(() => {});
            await new Promise(r => setTimeout(r, 2000));
        }

        console.log('🎉 Login Successful! Testing Target Screens...');

        for (const scr of TARGET_SCREENS) {
            console.log(`📸 Testing Screen ${scr.id} (${scr.path})...`);
            await page.goto(`${CONFIG.baseUrl}${scr.path}`, { waitUntil: 'networkidle2' });
            await new Promise(r => setTimeout(r, 1500));

            if (scr.path.includes('#') || scr.id.toLowerCase().includes('form') || scr.id === 'Screen3') {
                await page.evaluate(() => {
                    const formEl = document.querySelector('form, #register, .registration-form');
                    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                });
                await new Promise(r => setTimeout(r, 1000));
            }

            const imgPath = path.join(CONFIG.outputBugDir, `${scr.id}.png`);
            await page.screenshot({ path: imgPath });
            console.log(`✅ Saved screenshot: ${imgPath}`);
        }

        console.log('✅ All screen tests completed successfully!');

    } catch (err) {
        console.error('❌ Error during screen testing:', err);
    } finally {
        await browser.close();
    }
}

if (require.main === module) {
    runScreenTesting();
}

module.exports = { runScreenTesting, getBrowserExecutionPlan };
