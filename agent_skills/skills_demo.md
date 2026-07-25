# Agent Skills Demonstration - Individual Deliverable

> [!NOTE]
> File này chứa thông tin mô tả các Agent Skills tự động hóa bạn đã viết và đường dẫn video chạy thử trên YouTube (chiếm 10% điểm số).

## 1. Mô Tả Tính Năng Của Agent Skill
*   **Công nghệ sử dụng:** [Playwright / Selenium WebDriver / Puppeteer / Cypress...]
*   **Ngôn ngữ lập trình:** [TypeScript / JavaScript / Python...]
*   **Mục tiêu tự động hóa:**
    *   [Tự động chạy và chụp ảnh màn hình theo ma trận tương thích trên các thiết bị emulators]
    *   [Tự động hóa kiểm tra toàn bộ form nhập liệu ở Screen B3 với các kịch bản biên]
    *   [Tự động rà quét kiểm tra mã phản hồi HTTP của các liên kết trên trang chủ B1]

---

## 2. Mã Nguồn Minh Họa (Code Snippet)

```javascript
// Ví dụ mã nguồn script Playwright chạy tự động kiểm tra tương thích của bạn:
const { test, expect } = require('@playwright/test');

test('Check EMS homepage responsiveness', async ({ page }) => {
  // Đi tới trang web EMS
  await page.goto('https://promoter-starboard-prude.ngrok-free.dev/');
  
  // Kiểm tra tiêu đề trang
  await expect(page).toHaveTitle(/Event Management System/i);
  
  // Chụp ảnh màn hình lưu lại
  await page.screenshot({ path: 'cross_platform_screenshots/B1_Desk_Chrome.png' });
});
```

---

## 3. Video Minh Chứng Thực Tế (YouTube Demo Video Link)

Bắt buộc cung cấp đường dẫn video YouTube chứng minh Script tự động chạy trên máy của bạn:
*   **Link Video YouTube:** [Xem video demo chạy Agent Skill trên YouTube](https://youtube.com/...)
*   **Mô tả video:** Video dài ... phút quay lại quá trình khởi chạy script, quá trình trình duyệt tự động mở và tương tác trên trang EMS, kết xuất ra thư mục ảnh tương thích thành công.
