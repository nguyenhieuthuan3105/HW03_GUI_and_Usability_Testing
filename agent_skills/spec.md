# Specification & Input Specification Configuration File (spec.md)

> **Mục đích:** File này lưu trữ toàn bộ thông số cấu hình, kịch bản kiểm thử, danh sách màn hình mục tiêu và các ghi chú đặc biệt do người dùng nhập vào. AI Agent và các script tự động sẽ đọc trực tiếp tệp này để thực thi tự động kiểm thử GUI, Usability & Cross-Browser cho bất kỳ ứng dụng web nào.

---

## 1. THÔNG TIN BẢO MẬT & THÔNG TIN SINH VIÊN (EVALUATOR METADATA)

* **Họ và tên sinh viên:** `[Nhập Họ và tên - Ví dụ: NGUYỄN VĂN A]`
* **Mã số sinh viên (MSSV):** `[Nhập MSSV - Ví dụ: 12345678]`
* **Mã nhóm (Group ID):** `[Nhập Mã Nhóm - Ví dụ: NHÓM 01]`
* **Tên kịch bản Scenario:** `[Nhập Tên Scenario - Ví dụ: Scenario A / Scenario B / Scenario C...]`
* **Văn bản Watermark hiển thị trên ảnh:** `[Nhập Watermark - Ví dụ: MSSV: 12345678 - user1@gmail.com]`

---

## 2. THÔNG TIN HỆ THỐNG MỤC TIÊU & QUY TRÌNH ĐĂNG NHẬP (SUT CONFIG)

* **URL hệ thống web SUT:** `[Nhập URL SUT - Ví dụ: https://example-app.com]`
* **URL trang Đăng nhập:** `[Nhập Login URL - Ví dụ: https://example-app.com/login]`
* **Tài khoản Đăng nhập (User Email/Username):** `[Nhập Email/Username]`
* **Mật khẩu Đăng nhập (User Password):** `[Nhập Mật khẩu]`
* **Thư mục chứa ảnh lỗi:** `images/bug_screenshots/`
* **Thư mục chứa ảnh tương thích đa nền tảng:** `images/cross_platform_screenshots/`

---

## 3. GHI CHÚ ĐẶC BIỆT & ĐIỀU CẦN LƯU Ý CHO AI AGENT (SPECIAL NOTES & CONSTRAINTS)

> **Mục này dành cho người dùng cung cấp các thông tin ngữ cảnh đặc biệt, lưu ý bố cục hoặc thao tác đặc thù mà không có cột phù hợp trong bảng:**

* `[Điền ghi chú 1 - Ví dụ: Màn hình Screen 2 và Screen 3 dùng chung 1 đường dẫn URL (/events/1). Trong đó Screen 2 là phần nội dung thông tin phía trên, còn Screen 3 là phần Form đăng ký phía dưới ngay trên footer.]`
* `[Điền ghi chú 2 - Ví dụ: Sau khi bấm nút Submit form ở Screen 3, cần đợi 2 giây để Toast thông báo xuất hiện trước khi chụp ảnh.]`
* `[Điền ghi chú 3 - Ví dụ: Nút đổi ngôn ngữ EN/VI nằm ở góc phải Header trên tất cả các màn hình.]`

---

## 4. ĐẶC TẢ DANH SÁCH MÀN HÌNH MỤC TIÊU (TARGET SCREENS SPECIFICATION)

| Mã Màn hình (Screen ID) | Tên Màn hình (Screen Name) | Đường dẫn tương đối (Relative Path) | Thao tác chính / Yếu tố cần test |
|---|---|---|---|
| `Screen1` | Trang chủ & Danh sách mục tiêu | `/` hoặc `/dashboard` | Lướt banner, tìm kiếm, toggle ngôn ngữ EN/VI, kiểm tra bố cục. |
| `Screen2` | Trang chi tiết thông tin | `/details/1` | Xem thời gian, địa điểm, nội dung mô tả, kiểm tra nút hành động chính. |
| `Screen3` | Form nhập liệu / Đăng ký | `/details/1#form` hoặc `/register` | Điền các trường thông tin, kiểm tra trường `*`, bấm Submit form. |
| `Screen4` *(tùy chọn)* | Trang cá nhân / Kết quả | `/profile` | Kiểm tra kết quả sau thao tác, mã QR hoặc vé thông tin cá nhân. |

---

## 5. KỊCH BẢN USABILITY TESTING CHO 5 NGƯỜI DÙNG (TASK SCENARIO PROMPT)

> **"Bạn là một người dùng đang thực hiện nhiệm vụ trên ứng dụng web.**  
> **Nhiệm vụ của bạn:** Truy cập ứng dụng -> Đăng nhập tài khoản -> Tìm kiếm thông tin mục tiêu -> Xem chi tiết -> Thực hiện hoàn thành form đăng ký/giao dịch -> Kiểm tra kết quả."

---

## 6. DANH SÁCH 5 NGƯỜI DÙNG THỰC THI TEST (PARTICIPANTS DATA)

| STT | Người dùng (Viết tắt) | Vai trò thực tế | Thông tin liên lạc (SĐT / Email) | Trình độ công nghệ | Môi trường thử nghiệm |
|---|---|---|---|---|---|
| **1** | Nguyễn Văn A | Người dùng 1 | `090****123` / `user1@gmail.com` | Cao | Desktop (Windows / Chrome) |
| **2** | Trần Thị B | Người dùng 2 | `091****456` / `user2@gmail.com` | Cao | Desktop (Windows / Chrome) |
| **3** | Lê Văn C | Người dùng 3 | `092****789` / `user3@gmail.com` | Cao | Desktop (Windows / Chrome) |
| **4** | Phạm Thị D | Người dùng 4 | `093****321` / `user4@gmail.com` | Cao | Desktop (Windows / Brave) |
| **5** | Hoàng Văn E | Người dùng 5 | `094****654` / `user5@gmail.com` | Trung bình | Tablet (Android / Chrome) |

---

## 7. THIẾT LẬP TRÌNH DUYỆT CHẠY MA TRẬN TƯƠNG THÍCH (DESKTOP BROWSERS CONFIG)

- [x] Google Chrome (`windows_chrome_desktop_<ScreenID>.png`)
- [x] Microsoft Edge (`windows_edge_desktop_<ScreenID>.png`)
- [x] Mozilla Firefox (`windows_firefox_desktop_<ScreenID>.png`)
- [x] Opera (`windows_opera_desktop_<ScreenID>.png`)
- [x] Apple Safari macOS (`macos_safari_desktop_<ScreenID>.png`)
- [x] Mobile Chrome Android (`android_chrome_phone_<ScreenID>.png`)
- [x] Tablet Chrome Android (`android_chrome_tablet_<ScreenID>.png`)
