# Agent Skills Demonstration - Individual Deliverable

> File này chứa thông tin mô tả bộ Agent Skills tự động hóa kiểm thử GUI, Usability & Cross-Browser được phát triển cho bài tập kiểm thử ứng dụng web, có khả năng tái sử dụng đại trà cho nhiều Scenario và danh sách màn hình khác nhau dựa theo đặc tả trong `spec.md`.

---

## 1. Danh Sách Bộ Agent Skills Đã Phát Triển

### Skill 1: `testing_screen.js` (Tự Động Đăng Nhập & Chụp Ảnh Kiểm Thử Màn Hình)
* **File:** [agent_skills/testing_screen.js](/agent_skills/testing_screen.js)
* **Công nghệ:** Node.js, Puppeteer-core / Puppeteer (Windows Native Automation Engine).
* **Mục tiêu tự động hóa:**
  * Tự động đọc URL SUT, thông tin đăng nhập và danh sách màn hình mục tiêu (`Screen 1`, `Screen 2`, ... `Screen N`) từ file `spec.md`.
  * Thực hiện luồng Đăng nhập Trực tiếp (Direct Form Login) hoặc SSO theo đặc tả.
  * Tự động điều hướng qua các màn hình mục tiêu theo danh sách yêu cầu.
  * Thực thi kiểm tra các chỉ số Heuristics và chụp ảnh bug lưu vào `images/bug_screenshots/`.

### Skill 2: `testing_browser_screen.js` (Tự Động Chụp Ma Trận Cho Chrome & Edge)
* **File:** [agent_skills/testing_browser_screen.js](/agent_skills/testing_browser_screen.js)
* **Công nghệ:** Node.js, Puppeteer-core / Puppeteer (Native Windows Executables).
* **Mục tiêu tự động hóa:**
  * Khởi chạy trực tiếp 2 trình duyệt thực tế sẵn có trên Windows: **Google Chrome** và **Microsoft Edge**.
  * Tự động đăng nhập phiên làm việc theo tham số cấu hình.
  * Chụp ảnh các màn hình mục tiêu cho Chrome & Edge có chèn Watermark MSSV (`MSSV: 12345678 - user1@gmail.com`) lưu vào `images/cross_platform_screenshots/`.
  * Các môi trường còn lại (Firefox, Opera, Safari, Mobile) được tạo dòng khung bảng với trạng thái `N/A`.

### Skill 3: `gui_testing.md` (Quy Chuẩn Điều Phối AI Agent Master Orchestration)
* **File:** [agent_skills/gui_testing.md](/agent_skills/gui_testing.md)
* **Mục tiêu:** Định nghĩa quy trình để AI Agent tự động đọc [shared_gui_checklist.md](/shared_gui_checklist.md) (sao chép nguyên văn 100% đủ 49 tiêu chí), đọc đặc tả và **Mục 3: Ghi chú đặc biệt** từ [spec.md](/agent_skills/spec.md), tiếp nhận kết quả kiểm thử và sinh file [main_report.md](/main_report.md) & [bug_usability_findings_log.md](/bug_usability_findings_log.md).

---

## 2. Mã Nguồn Minh Họa (Code Snippets)

### A. Tự động Đăng nhập & Chụp ảnh Kiểm thử Màn hình (`testing_screen.js`)
```javascript
// Tự động đọc cấu hình linh hoạt từ spec.md
const config = loadUserSpecConfig();

await page.goto(config.loginUrl);
await page.type('input[type="email"]', config.username);
await page.type('input[type="password"]', config.password);
await page.click('button[type="submit"]');

// Chụp ảnh màn hình cho từng màn hình yêu cầu (Screen 1, 2, ... N)
for (const screen of config.targetScreens) {
    await page.goto(screen.url);
    await page.screenshot({ path: `images/bug_screenshots/${screen.id}.png` });
}
```

### B. Tự động chèn Watermark & Chụp ảnh Ma trận Chrome & Edge (`testing_browser_screen.js`)
```javascript
// Tự động chèn Watermark MSSV tổng quát và chụp ảnh tương thích Chrome & Edge
await page.evaluate((text) => {
    const watermark = document.createElement('div');
    watermark.innerText = text;
    watermark.style.position = 'fixed';
    watermark.style.top = '10px';
    watermark.style.right = '10px';
    watermark.style.backgroundColor = 'rgba(220, 38, 38, 0.9)';
    watermark.style.color = '#ffffff';
    watermark.style.padding = '6px 14px';
    watermark.style.fontWeight = 'bold';
    watermark.style.zIndex = '999999';
    document.body.appendChild(watermark);
}, 'MSSV: 12345678 - user1@gmail.com');

await page.screenshot({ path: `images/cross_platform_screenshots/windows_chrome_desktop_Screen1.png` });
```

---

## 3. Hướng Dẫn Khởi Chạy Skill (User Guide)

### Bước 1: Cài đặt thư viện phụ thuộc (1 lần duy nhất)
Mở Terminal trong thư mục dự án trên Windows và chạy lệnh:
```bash
npm install puppeteer-core
```

### Bước 2: Cấu hình thông tin test trong file `spec.md`
Mở file [agent_skills/spec.md](/agent_skills/spec.md) và cấu hình các tham số:
* **Họ tên & MSSV:** Điền thông tin cá nhân.
* **URL hệ thống web SUT & Tài khoản:** Điền link trang web và tài khoản đăng nhập.
* **Mục 3 (Ghi chú đặc biệt):** Nhập các thông tin bổ sung hoặc lưu ý thao tác cho AI Agent.
* **Bảng danh sách màn hình:** Nhập $N$ màn hình cần kiểm thử (`Screen1`, `Screen2`, ... `ScreenN`).

### Bước 3: Khởi chạy Script

#### Cách A: Chạy trực tiếp qua Terminal (Quay video demo)
1. Chạy script kiểm thử GUI & chụp ảnh Bug:
   ```bash
   node agent_skills/testing_screen.js
   ```
2. Chạy script chụp Ma trận đa trình duyệt cho Chrome & Edge:
   ```bash
   node agent_skills/testing_browser_screen.js
   ```

#### Cách B: Ra lệnh cho AI Agent tự động điều phối
Dán câu lệnh sau vào ô Chat với AI Agent:
> *"Hãy đọc file shared_gui_checklist.md, agent_skills/spec.md và agent_skills/gui_testing.md, thực thi kiểm thử và tổng hợp dữ liệu thành 2 báo cáo main_report.md và bug_usability_findings_log.md theo đúng format mẫu chuẩn cho tôi."*

---

## 4. Video Minh Chứng Thực Tế (YouTube Demo Video Link)

* **Link Video YouTube:** [Xem video demo chạy Agent Skill trên YouTube](https://youtu.be/hBsj1-5z3SQ)
* **Mô tả video:** Video quay lại toàn bộ màn hình khi khởi chạy `node agent_skills/testing_screen.js` và `node agent_skills/testing_browser_screen.js`. Trình duyệt tự động mở Google Chrome và Microsoft Edge thực tế, đăng nhập tài khoản từ `spec.md`, tự động điều hướng qua các màn hình yêu cầu, chèn watermark MSSV và xuất tệp ảnh minh chứng.
