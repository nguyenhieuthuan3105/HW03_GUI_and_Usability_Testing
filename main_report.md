# Báo Cáo Kết Quả Kiểm Thử GUI & Usability (Main Report)
**Họ và tên:** [Tên của bạn]  
**MSSV:** [MSSV của bạn]  
**Kịch bản kiểm thử:** Scenario B — User registers to attend an event

---

## PHẦN 1: GIỚI THIỆU PHẠM VI (Introduction & Scope Selection)

### 1. Kịch Bản Kiểm Thử
Kịch bản B tập trung vào hành trình của một **Người tham gia (Participant)** từ lúc truy cập vào hệ thống Event Management System (EMS) cho đến khi tìm kiếm, xem chi tiết và đăng ký thành công một sự kiện để nhận vé.

### 2. Danh Sách Màn Hình Được Chọn Kiểm Thử
Bạn đã chọn thực hiện chạy test trên các màn hình sau:
1.  **Màn hình B1: Home / events listing**
    *   *Mô tả:* Trang chủ chứa carousel các sự kiện nổi bật (featured carousel), danh sách phân loại sự kiện (categories) và thanh tìm kiếm/lọc sự kiện.
    *   *Lý do chọn:* Đây là điểm chạm đầu tiên của người dùng, quyết định trải nghiệm khám phá và tìm kiếm sự kiện có dễ dàng hay không.
2.  **Màn hình B2: Event detail page**
    *   *Mô tả:* Trang chi tiết hiển thị thông tin đầy đủ về sự kiện bao gồm: ảnh banner chính, lịch trình chi tiết (schedule), thông tin diễn giả, trạng thái đăng ký, số chỗ trống còn lại và nút kích hoạt đăng ký.
    *   *Lý do chọn:* Màn hình này chứa nhiều thông tin phức tạp và các nút hành động cốt lõi quyết định việc người dùng có chuyển đổi sang đăng ký hay không.
3.  **Màn hình B3: Registration form**
    *   *Mô tả:* Form nhập liệu để đăng ký tham gia sự kiện. Chứa các lựa chọn vai trò (Student / Lecturer / Guest), trường nhập vai trò phụ (Additional Role) và các ô check xác nhận thông tin.
    *   *Lý do chọn:* Đây là biểu mẫu tương tác nhập liệu chính của kịch bản B, chứa nhiều logic validation nghiệp vụ phức tạp.
4.  **Màn hình B4 (Dự phòng/Khuyến khích): My Registrations / ticket**
    *   *Mô tả:* Trang danh sách sự kiện đã đăng ký và hiển thị chi tiết vé chứa mã vạch (Barcode) hoặc mã QR (QR Ticket) dùng để quét check-in.
    *   *Lý do chọn:* Đây là màn hình kết thúc luồng của kịch bản B, cung cấp bằng chứng đăng ký thành công và phục vụ trực tiếp cho hoạt động check-in tại sự kiện.

---

## PHẦN 2: KẾT QUẢ THỰC THI CHECKLIST GUI (Checklist Execution Results)

> [!NOTE]
> Bảng kết quả thực hiện chạy checklist GUI của nhóm lên 3-4 màn hình bạn tự đảm nhiệm.

### Bảng Kết Quả Chạy Checklist GUI

| ID Checklist | Khía Cạnh | Tiêu Chí Kiểm Tra | Screen B1 (Pass/Fail/NA) | Screen B2 (Pass/Fail/NA) | Screen B3 (Pass/Fail/NA) | Screen B4 (Pass/Fail/NA) | Ghi Chú Chi Tiết Lỗi / Link Minh Chứng |
|---|---|---|---|---|---|---|---|
| **IA-01** | **General UI** | *General UI Standards* | | | | | |
| IA-01-01 | General UI | Hệ thống lưới và căn lề | | | | | |
| IA-01-02 | General UI | Font chữ và phân cấp văn bản | | | | | |
| IA-01-03 | General UI | Màu sắc nút nhất quán | | | | | |
| IA-01-04 | General UI | Ngôn ngữ EN/VI hiển thị đầy đủ | | | | | |
| IA-01-05 | General UI | Trạng thái rỗng (Empty state) | | | | | |
| IA-01-06 | General UI | Trạng thái đang tải (Loading state) | | | | | |
| IA-01-07 | General UI | Độ phản hồi (Responsive) | | | | | |
| IA-01-08 | General UI | Tỷ lệ ảnh hiển thị tốt | | | | | |
| IA-01-09 | General UI | Căn chỉnh icon và nhãn | | | | | |
| IA-01-10 | General UI | Độ tương phản màu sắc chữ và nền | | | | | |
| **IA-02** | **Forms** | *Form Standards* | | | | | |
| IA-02-01 | Forms | Ký hiệu trường bắt buộc (*) | | | | | |
| IA-02-02 | Forms | Nhãn ô nhập liệu hiển thị tốt | | | | | |
| IA-02-03 | Forms | Validation báo đỏ tại chỗ | | | | | |
| IA-02-04 | Forms | Thông báo lỗi dễ hiểu | | | | | |
| IA-02-05 | Forms | Giới hạn định dạng và dung lượng file | | | | | |
| IA-02-06 | Forms | Trình soạn thảo Rich Text mượt mà | | | | | |
| IA-02-07 | Forms | Điều hướng form bằng phím Tab | | | | | |
| IA-02-08 | Forms | Vô hiệu hóa Submit khi form lỗi | | | | | |
| IA-02-09 | Forms | Định dạng ngày giờ chuẩn | | | | | |
| IA-02-10 | Forms | Nút xóa nhanh/reset hoạt động tốt | | | | | |
| **IA-03** | **Navigation** | *Navigation Standards* | | | | | |
| IA-03-01 | Navigation | Menu chính luôn hiển thị rõ | | | | | |
| IA-03-02 | Navigation | Đánh dấu menu active | | | | | |
| IA-03-03 | Navigation | Nút Back hoạt động tốt | | | | | |
| IA-03-04 | Navigation | Deep link sự kiện hoạt động | | | | | |
| IA-03-05 | Navigation | Breadcrumbs hiển thị đúng | | | | | |
| IA-03-06 | Navigation | Phản hồi kéo thả Reorder mượt | | | | | |
| IA-03-07 | Navigation | Tabs hoạt động độc lập | | | | | |
| IA-03-08 | Navigation | Không có broken link | | | | | |
| IA-03-09 | Navigation | Nút back-to-top hoạt động | | | | | |
| IA-03-10 | Navigation | Sidebar thu mở mượt mà | | | | | |
| **IA-04** | **Feedback** | *Feedback & State Standards* | | | | | |
| IA-04-01 | Feedback | Toasts thông báo tự động tắt | | | | | |
| IA-04-02 | Feedback | Phân biệt màu Toasts thành công/lỗi | | | | | |
| IA-04-03 | Feedback | Dialog xác nhận trước hành động hủy | | | | | |
| IA-04-04 | Feedback | Huy hiệu trạng thái vé chính xác | | | | | |
| IA-04-05 | Feedback | Hiển thị Spinner khi tải dữ liệu | | | | | |
| IA-04-06 | Feedback | Màu trạng thái vé chuẩn ngữ nghĩa | | | | | |
| IA-04-07 | Feedback | Chấm đỏ thông báo động | | | | | |
| IA-04-08 | Feedback | Hộp thoại phóng to ảnh lightbox | | | | | |
| IA-04-09 | Feedback | Cập nhật thời gian thực không reload | | | | | |
| IA-04-10 | Feedback | Thông báo khi ngắt kết nối mạng | | | | | |

*Lưu ý minh chứng lỗi:* Ví dụ `[Xem ảnh lỗi B1-IA-01-07](cross_platform_screenshots/fail_b1_responsive.png)` đối với các mục kiểm tra bị đánh dấu là `Fail`.

---

## PHẦN 3: BÁO CÁO USABILITY TESTING (Usability Report)

### 1. Kịch Bản Nhiệm Vụ (Task Scenario)
*Mô tả kịch bản định hướng mục tiêu giao cho người dùng:*  
> [Nội dung kịch bản cụ thể, ví dụ: Đăng ký tham gia buổi hội thảo AI và mở mã QR vé để sẵn sàng check-in...]

### 2. Danh Sách Người Tham Gia Thử Nghiệm (Participants)
*(5 người dùng thật, thông tin liên lạc được che các chữ số ở giữa)*

| STT | Người dùng (Viết tắt) | Vai trò thực tế | Thông tin liên lạc (Email/Zalo) | Trình độ công nghệ |
|---|---|---|---|---|
| 1 | Nguyễn V. A | Sinh viên FIT | anv***@gmail.com | Trung bình |
| 2 | Trần T. B | Giảng viên | btt***@gmail.com | Trung bình |
| 3 | Lê V. C | Cựu sinh viên | cvl***@gmail.com | Cao |
| 4 | Phạm T. D | Nhân viên VP | dtp***@gmail.com | Cao |
| 5 | Hoàng V. E | Học sinh cấp 3 | evh***@gmail.com | Thấp |

### 3. Bảng Chỉ Số Đo Lường Usability (Metrics Table)

| Người dùng | Hoàn thành (Success / Partial / Failed) | Thời gian (giây) | Số lần do dự / Thao tác lỗi | Điểm SUS / UEQ-S | Ghi chú vấn đề gặp phải |
|---|---|---|---|---|---|
| User 1 | | | | | |
| User 2 | | | | | |
| User 3 | | | | | |
| User 4 | | | | | |
| User 5 | | | | | |
| **Trung bình** | **...%** | **...s** | **... lần** | **... / 100** | |

### 4. Các Vấn Đề Usability Phát Hiện Qua Thực Tế (Usability Findings)
*(Phân loại các vấn đề người dùng gặp phải theo thang độ nghiêm trọng Severity từ 0 đến 4)*

#### Vấn đề 1: [Tên vấn đề Usability]
*   **Mức độ nghiêm trọng (Severity):** [0 - 4]
*   **Mô tả:** [Người dùng bị bối rối ở bước nào, tại sao họ không tìm thấy nút...]
*   **Ảnh chụp minh chứng:** ![Minh chứng lỗi usability](cross_platform_screenshots/usab_finding_01.png)
*   **Đề xuất cải tiến:** [Thay đổi vị trí nút, làm nổi bật nhãn, thêm tooltip hướng dẫn...]

---

## PHẦN 4: BÁO CÁO ĐA NỀN TẢNG (Cross-Browser / Cross-Platform Report)

### 1. Ma Trận Kiểm Thử Tương Thích (Compatibility Matrix)

Bạn cần phân phối kiểm thử sao cho bao phủ:
*   **3 Hệ điều hành:** Windows, macOS, Android hoặc iOS.
*   **5 Trình duyệt:** Chrome, Firefox, Safari, Edge, Opera.
*   **3 Loại thiết bị:** Desktop, Tablet, Phone.

#### Bảng Ghi Nhận Kết Quả Tương Thích (Bao phủ tối thiểu)

| STT | Thiết bị (Device Class) | Hệ điều hành (OS) | Trình duyệt (Browser) | Screen B1 (Pass/Fail) | Screen B2 (Pass/Fail) | Screen B3 (Pass/Fail) | File ảnh minh chứng (Overlay MSSV) |
|---|---|---|---|---|---|---|---|
| 1 | Desktop | Windows 11 | Chrome | | | | `B1_Win_Chrome_Desk.png` |
| 2 | Desktop | macOS | Firefox | | | | `B1_Mac_Firefox_Desk.png` |
| 3 | Phone | iOS | Safari | | | | `B2_iOS_Safari_Mobile.png` |
| 4 | Phone | Android | Edge | | | | `B3_And_Edge_Mobile.png` |
| 5 | Tablet | Android | Opera | | | | `B1_And_Opera_Tab.png` |
| 6 | Tablet | iOS | Chrome | | | | `B2_iOS_Chrome_Tab.png` |

### 2. Đánh Giá Khả Năng Tương Thích (Compatibility Analysis)
*   **Đánh giá Responsive:** [Giao diện co giãn có tốt không? Có hiện tượng chồng chéo chữ trên màn hình nhỏ không?]
*   **Đánh giá Trình duyệt:** [Có trình duyệt nào hiển thị sai lệch font chữ hoặc không thực thi được các hiệu ứng animation không?]
*   **Lỗi tương thích nổi bật:** [Mô tả chi tiết lỗi layout cụ thể kèm đường dẫn ảnh lỗi]
