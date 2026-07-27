# Báo Cáo Kết Quả Kiểm Thử GUI & Usability (Main Report)
**Họ và tên:** NGUYỄN HIẾU THUẬN  
**MSSV:** 23127125  
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

---

## PHẦN 2: KẾT QUẢ THỰC THI CHECKLIST GUI (Checklist Execution Results)

### Màn hình B1
#### Bảng Kết Quả Chạy Checklist GUI

| ID Checklist | Khía Cạnh | Tiêu Chí Kiểm Tra | Screen B1 (Pass/Fail/NA) | Ghi Chú Chi Tiết Lỗi / Link Minh Chứng |
|---|---|---|---|---|
| **IA-01** | **General UI** | **IA-01: General UI Standards (Layout, Typography, Color, Consistency, i18n)** | | |
| IA-01-01 | General UI | Hệ thống lưới và khoảng cách (Grid & Spacing) căn lề nhất quán trên toàn màn hình. | Pass | |
| IA-01-02 | General UI | Font chữ (typography) nhất quán về kích thước, độ dày (bold/regular) và phân cấp tiêu đề. | Pass | |
| IA-01-03 | General UI | Màu sắc của các nút hành động (Primary, Secondary) và trạng thái nhất quán. | Pass | |
| IA-01-04 | General UI | Đa ngôn ngữ (EN/VI) hoạt động đầy đủ, không bị dịch thiếu hoặc chồng lấp chữ. | Fail | Tiêu đề và mô tả sự kiện không dịch: xem [BUG-B1-01](/bug_usability_findings_log.md) hoặc [Xem ảnh](cross_platform_screenshots/Screen_B1_Bug_Da_Ngon_Ngu.png) |
| IA-01-05 | General UI | Trạng thái rỗng (Empty state) được hiển thị rõ ràng khi không có sự kiện/dữ liệu nào. | Pass | |
| IA-01-06 | General UI | Trạng thái đang tải (Loading state/skeleton) hiển thị khi kéo dữ liệu chậm. | Pass | |
| IA-01-07 | General UI | Trang web tương thích tốt và tự động co giãn (Responsive) trên màn hình. | Pass | |
| IA-01-08 | General UI | Các hình ảnh (Thumbnail/Banner) không bị méo tỉ lệ hiển thị (tỷ lệ 4:3 và 24:9) trên các kích thước màn hình khác nhau. | Pass | |
| IA-01-09 | General UI | Các icon được căn chỉnh đúng tâm so với nhãn text bên cạnh. | Pass | |
| IA-01-10 | General UI | Độ tương phản màu sắc giữa văn bản và nền đủ rõ ràng (Accessibility WCAG). | Pass | |
| IA-01-11 | General UI | Các liên kết ngoài (External links) mở ở tab mới, liên kết nội bộ (Internal links) mở ở tab hiện tại. | Pass | |
| IA-01-12 | General UI | Ảnh Thumbnail (4:3) và Banner (24:9) không bị cắt xén mất nội dung quan trọng. | Fail | Ảnh banner bị cắt mất 2 bên: xem [BUG-B1-02](/bug_usability_findings_log.md) hoặc [Xem ảnh](cross_platform_screenshots/Screen_B1_Bug_Anh_Mat_Noi_Dung_Quan_Trong.png) |
| **IA-02** | **Forms** | **IA-02: Forms (Labels, Validation, Errors, Required Fields, Rich Text)** | | |
| IA-02-01 | Forms | Các trường bắt buộc nhập (Required fields) được đánh dấu ký hiệu trực quan (ví dụ dấu `*`). | NA | |
| IA-02-02 | Forms | Nhãn (Labels) của trường nhập liệu luôn hiển thị rõ ràng và đi sát với ô nhập liệu. | NA | |
| IA-02-03 | Forms | Validation thời gian thực báo lỗi đỏ trực quan ngay dưới trường nhập liệu bị lỗi. | NA | |
| IA-02-04 | Forms | Thông báo lỗi cụ thể, hướng dẫn cách khắc phục thay vì báo lỗi chung chung. | Fail | Không báo lỗi khi nhập ngày kết thúc trước ngày bắt đầu: xem [BUG-B1-03](/bug_usability_findings_log.md) hoặc [Xem ảnh](cross_platform_screenshots/Screen_B1_Bug_Khong_Bao_Loi_Ngay_Khong_Hop_Le.png) |
| IA-02-05 | Forms | Định dạng tải lên (Upload file/image) kiểm tra đúng định dạng và dung lượng tối đa. | NA | |
| IA-02-06 | Forms | Trình soạn thảo Rich Text hiển thị đầy đủ thanh công cụ và hoạt động mượt mà. | NA | |
| IA-02-07 | Forms | Người dùng có thể nhấn `Tab` để di chuyển tuần tự qua các ô nhập liệu trong form. | Pass | |
| IA-02-08 | Forms | Các nút Submit/Save bị vô hiệu hóa (disabled) khi form chưa điền đủ thông tin hợp lệ. | NA | |
| IA-02-09 | Forms | Định dạng ngày giờ hiển thị theo chuẩn cục bộ dễ đọc đối với người dùng Việt Nam. | Pass | |
| IA-02-10 | Forms | Nút xóa nhanh (clear button) hoặc reset form hoạt động chính xác. | Pass | |
| IA-02-11 | Forms | Trình duyệt hỗ trợ tính năng tự động điền (autofill) cho các trường thông tin cơ bản. | NA | |
| IA-02-12 | Forms | Ô nhập mật khẩu hỗ trợ tính năng toggle ẩn/hiện mật khẩu trực quan bằng biểu tượng con mắt. | NA | |
| **IA-03** | **Navigation** | **IA-03: Navigation (Menus, Breadcrumbs, Sidebar, Tabs, Back actions, Deep links)** | |
| IA-03-01 | Navigation | Menu điều hướng chính luôn cố định hoặc dễ dàng truy cập ở đầu trang/thanh bên. | Pass | |
| IA-03-02 | Navigation | Trạng thái hiện tại của trang (Active state) được làm nổi bật trên menu điều hướng. | Pass | |
| IA-03-03 | Navigation | Nút quay lại (Back/Return action) đưa người dùng về đúng trang trước đó, không mất trạng thái. | NA | |
| IA-03-04 | Navigation | Liên kết sâu (Deep links) dẫn trực tiếp đến trang chi tiết sự kiện mà không bị lỗi 404. | Pass | |
| IA-03-05 | Navigation | Breadcrumbs hiển thị đúng phân cấp thư mục và có thể click để quay về thư mục cha. | NA | |
| IA-03-06 | Navigation | Tính năng kéo thả thay đổi thứ tự (Reorder) hiển thị trực quan (dòng bị kéo mờ opacity-50) và các nút thao tác khác tạm thời bị vô hiệu hóa. | NA | |
| IA-03-07 | Navigation | Các tab chuyển đổi nhanh hoạt động độc lập và tải đúng dữ liệu tương ứng. | Pass | |
| IA-03-08 | Navigation | Không có liên kết nào bị hỏng (Broken links / 404 error) trên toàn giao diện. | Pass | |
| IA-03-09 | Navigation | Nút "Cuộn lên đầu trang" (Back to top) hiển thị khi người dùng cuộn xuống sâu (nếu có). | Pass | |
| IA-03-10 | Navigation | Thanh bên sidebar có thể thu gọn/mở rộng mượt mà và không che khuất nội dung chính. | Pass | |
| IA-03-11 | Navigation | Đường dẫn URL trên thanh địa chỉ thay đổi tương ứng khi chuyển đổi qua lại giữa các tab hoặc bộ lọc. | Fail | URL không đồng bộ khi lọc/chuyển tab: xem [BUG-B1-04](/bug_usability_findings_log.md) hoặc [Xem ảnh](cross_platform_screenshots/Screen_B1_Bug_Duong_Dan_Khong_Thay_Doi.png) |
| IA-03-12 | Navigation | Giao diện kéo thả (Reorder) hiển thị biểu tượng tay cầm (drag handle) rõ ràng để gợi ý khả năng tương tác. | NA | |
| **IA-04** | **Feedback** | **IA-04: Feedback & State (Toasts, Badges, Confirmations, Progress Bars, Status Colors)** | | |
| IA-04-01 | Feedback | Thông báo nổi (Toasts) xuất hiện ngay sau khi thực hiện hành động và tự động tắt sau 3-5s. | Fail | Click "Lưu" không hiện Toast, trạng thái "Đã lưu" tự reset: xem [BUG-B1-05](/bug_usability_findings_log.md) hoặc [Xem ảnh](cross_platform_screenshots/Screen_B1_Bug_Luu_Su_Kien_Khong_Hien_Toast.png), [BUG-B1-06](/bug_usability_findings_log.md) hoặc [Xem ảnh](cross_platform_screenshots/Screen_B1_Bug_Bam_Luu_Su_Kien_Khong_Duoc_Giu_Nguyen_Trang_Thai_1.png) và [Xem ảnh](cross_platform_screenshots/Screen_B1_Bug_Bam_Luu_Su_Kien_Khong_Duoc_Giu_Nguyen_Trang_Thai_2.png) |
| IA-04-02 | Feedback | Toasts có màu sắc phân biệt rõ ràng: Xanh (Thành công), Đỏ (Lỗi), Vàng (Cảnh báo). | Fail | Không xuất hiện Toast để kiểm tra màu sắc (Lỗi liên đới từ IA-04-01) |
| IA-04-03 | Feedback | Hộp thoại xác nhận (Confirmation dialog) xuất hiện trước các hành động hủy/xóa quan trọng. | NA | |
| IA-04-04 | Feedback | Huy hiệu (Badges) hiển thị chính xác số lượng thông báo; trạng thái vé thay đổi tương ứng khi được phê duyệt/hủy. | Pass | |
| IA-04-05 | Feedback | Thanh tiến trình (Progress bar) hoặc vòng xoay tải (Spinner) xuất hiện khi hệ thống xử lý. | Pass | |
| IA-04-06 | Feedback | Trạng thái hiển thị màu sắc tương thích với ngữ nghĩa (Ví dụ: APPROVED màu xanh lá, REJECTED màu đỏ). | Pass | |
| IA-04-07 | Feedback | Chấm đỏ thông báo (Notification dot) hiển thị động ngay khi có thay đổi trạng thái đăng ký. | Pass | |
| IA-04-08 | Feedback | Hộp thoại chi tiết ảnh (Lightbox) mở rộng mượt mà khi click vào ảnh đính kèm. | NA | |
| IA-04-09 | Feedback | Cập nhật dữ liệu thời gian thực (Real-time update) mà không cần người dùng reload trang. | Pass | |
| IA-04-10 | Feedback | Hiển thị thông báo rõ ràng khi mất kết nối mạng Internet. | Fail | Không cảnh báo khi mất kết nối mạng: xem [BUG-B1-07](/bug_usability_findings_log.md) hoặc [Xem ảnh](cross_platform_screenshots/Screen_B1_Bug_Khong_Thong_Bao_Mat_Internet.png) |
| IA-04-11 | Feedback | Hệ thống vô hiệu hóa nút gửi hoặc ngăn chặn gửi dữ liệu trùng lặp khi người dùng click đúp nút Submit. | NA | |
| IA-04-12 | Feedback | Mã QR/Barcode trên vé hiển thị rõ nét (không bị mờ), có kích thước tối thiểu đảm bảo quét được bằng ứng dụng camera thông thường. | NA | |

### Màn hình B2
#### Bảng Kết Quả Chạy Checklist GUI

| ID Checklist | Khía Cạnh | Tiêu Chí Kiểm Tra | Screen B2 (Pass/Fail/NA) | Ghi Chú Chi Tiết Lỗi / Link Minh Chứng |
|---|---|---|---|---|
| **IA-01** | **General UI** | **IA-01: General UI Standards (Layout, Typography, Color, Consistency, i18n)** | | |
| IA-01-01 | General UI | Hệ thống lưới và khoảng cách (Grid & Spacing) căn lề nhất quán trên toàn màn hình. | Pass | |
| IA-01-02 | General UI | Font chữ (typography) nhất quán về kích thước, độ dày (bold/regular) và phân cấp tiêu đề. | Pass | |
| IA-01-03 | General UI | Màu sắc của các nút hành động (Primary, Secondary) và trạng thái nhất quán. | Pass | |
| IA-01-04 | General UI | Đa ngôn ngữ (EN/VI) hoạt động đầy đủ, không bị dịch thiếu hoặc chồng lấp chữ. | Fail | Tiêu đề và mô tả sự kiện không dịch: xem [BUG-B2-01](/bug_usability_findings_log.md) hoặc [Xem ảnh](cross_platform_screenshots/Screen_B2_Bug_Da_Ngon_Ngu.png) |
| IA-01-05 | General UI | Trạng thái rỗng (Empty state) được hiển thị rõ ràng khi không có sự kiện/dữ liệu nào. | Pass | |
| IA-01-06 | General UI | Trạng thái đang tải (Loading state/skeleton) hiển thị khi kéo dữ liệu chậm. | Pass | |
| IA-01-07 | General UI | Trang web tương thích tốt và tự động co giãn (Responsive) trên màn hình. | Pass | |
| IA-01-08 | General UI | Các hình ảnh (Thumbnail/Banner) không bị méo tỉ lệ hiển thị (tỷ lệ 4:3 và 24:9) trên các kích thước màn hình khác nhau. | Pass | |
| IA-01-09 | General UI | Các icon được căn chỉnh đúng tâm so với nhãn text bên cạnh. | Pass | |
| IA-01-10 | General UI | Độ tương phản màu sắc giữa văn bản và nền đủ rõ ràng (Accessibility WCAG). | Pass | |
| IA-01-11 | General UI | Các liên kết ngoài (External links) mở ở tab mới, liên kết nội bộ (Internal links) mở ở tab hiện tại. | Pass | |
| IA-01-12 | General UI | Ảnh Thumbnail (4:3) và Banner (24:9) không bị cắt xén mất nội dung quan trọng. | Pass | |
| **IA-02** | **Forms** | **IA-02: Forms (Labels, Validation, Errors, Required Fields, Rich Text)** | | |
| IA-02-01 | Forms | Các trường bắt buộc nhập (Required fields) được đánh dấu ký hiệu trực quan (ví dụ dấu `*`). | NA | |
| IA-02-02 | Forms | Nhãn (Labels) của trường nhập liệu luôn hiển thị rõ ràng và đi sát với ô nhập liệu. | NA | |
| IA-02-03 | Forms | Validation thời gian thực báo lỗi đỏ trực quan ngay dưới trường nhập liệu bị lỗi. | NA | |
| IA-02-04 | Forms | Thông báo lỗi cụ thể, hướng dẫn cách khắc phục thay vì báo lỗi chung chung. | NA | |
| IA-02-05 | Forms | Định dạng tải lên (Upload file/image) kiểm tra đúng định dạng và dung lượng tối đa. | NA | |
| IA-02-06 | Forms | Trình soạn thảo Rich Text hiển thị đầy đủ thanh công cụ và hoạt động mượt mà. | NA | |
| IA-02-07 | Forms | Người dùng có thể nhấn `Tab` để di chuyển tuần tự qua các ô nhập liệu trong form. | NA | |
| IA-02-08 | Forms | Các nút Submit/Save bị vô hiệu hóa (disabled) khi form chưa điền đủ thông tin hợp lệ. | NA | |
| IA-02-09 | Forms | Định dạng ngày giờ hiển thị theo chuẩn cục bộ dễ đọc đối với người dùng Việt Nam. | Pass | |
| IA-02-10 | Forms | Nút xóa nhanh (clear button) hoặc reset form hoạt động chính xác. | NA | |
| IA-02-11 | Forms | Trình duyệt hỗ trợ tính năng tự động điền (autofill) cho các trường thông tin cơ bản. | NA | |
| IA-02-12 | Forms | Ô nhập mật khẩu hỗ trợ tính năng toggle ẩn/hiện mật khẩu trực quan bằng biểu tượng con mắt. | NA | |
| **IA-03** | **Navigation** | **IA-03: Navigation (Menus, Breadcrumbs, Sidebar, Tabs, Back actions, Deep links)** | | |
| IA-03-01 | Navigation | Menu điều hướng chính luôn cố định hoặc dễ dàng truy cập ở đầu trang/thanh bên. | Pass | |
| IA-03-02 | Navigation | Trạng thái hiện tại của trang (Active state) được làm nổi bật trên menu điều hướng. | Pass | |
| IA-03-03 | Navigation | Nút quay lại (Back/Return action) đưa người dùng về đúng trang trước đó, không mất trạng thái. | Pass | |
| IA-03-04 | Navigation | Liên kết sâu (Deep links) dẫn trực tiếp đến trang chi tiết sự kiện mà không bị lỗi 404. | Pass | |
| IA-03-05 | Navigation | Breadcrumbs hiển thị đúng phân cấp thư mục và có thể click để quay về thư mục cha. | NA | |
| IA-03-06 | Navigation | Tính năng kéo thả thay đổi thứ tự (Reorder) hiển thị trực quan (dòng bị kéo mờ opacity-50) và các nút thao tác khác tạm thời bị vô hiệu hóa. | NA | |
| IA-03-07 | Navigation | Các tab chuyển đổi nhanh hoạt động độc lập và tải đúng dữ liệu tương ứng. | Pass | |
| IA-03-08 | Navigation | Không có liên kết nào bị hỏng (Broken links / 404 error) trên toàn giao diện. | Pass | |
| IA-03-09 | Navigation | Nút "Cuộn lên đầu trang" (Back to top) hiển thị khi người dùng cuộn xuống sâu (nếu có). | Pass | |
| IA-03-10 | Navigation | Thanh bên sidebar có thể thu gọn/mở rộng mượt mà và không che khuất nội dung chính. | NA | |
| IA-03-11 | Navigation | Đường dẫn URL trên thanh địa chỉ thay đổi tương ứng khi chuyển đổi qua lại giữa các tab hoặc bộ lọc. | Pass | |
| IA-03-12 | Navigation | Giao diện kéo thả (Reorder) hiển thị biểu tượng tay cầm (drag handle) rõ ràng để gợi ý khả năng tương tác. | NA | |
| **IA-04** | **Feedback** | **IA-04: Feedback & State (Toasts, Badges, Confirmations, Progress Bars, Status Colors)** | | |
| IA-04-01 | Feedback | Thông báo nổi (Toasts) xuất hiện ngay sau khi thực hiện hành động và tự động tắt sau 3-5s. | Fail | Click "Lưu" không hiện Toast, trạng thái "Đã lưu" tự reset: xem [BUG-B2-02](/bug_usability_findings_log.md) hoặc [Xem ảnh](cross_platform_screenshots/Screen_B2_Bug_Luu_Su_Kien_Khong_Hien_Toast.png), [BUG-B2-03](/bug_usability_findings_log.md) hoặc [Xem ảnh 1](cross_platform_screenshots/Screen_B2_Bug_Bam_Luu_Su_Kien_Khong_Duoc_Giu_Nguyen_Trang_Thai_1.png) và [Xem ảnh 2](cross_platform_screenshots/Screen_B2_Bug_Bam_Luu_Su_Kien_Khong_Duoc_Giu_Nguyen_Trang_Thai_2.png) |
| IA-04-02 | Feedback | Toasts có màu sắc phân biệt rõ ràng: Xanh (Thành công), Đỏ (Lỗi), Vàng (Cảnh báo). | Fail | Không xuất hiện Toast để kiểm tra màu sắc (Lỗi liên đới từ IA-04-01): xem [BUG-B2-02](/bug_usability_findings_log.md) |
| IA-04-03 | Feedback | Hộp thoại xác nhận (Confirmation dialog) xuất hiện trước các hành động hủy/xóa quan trọng. | NA | |
| IA-04-04 | Feedback | Huy hiệu (Badges) hiển thị chính xác số lượng thông báo; trạng thái vé thay đổi tương ứng khi được phê duyệt/hủy. | Pass | |
| IA-04-05 | Feedback | Thanh tiến trình (Progress bar) hoặc vòng xoay tải (Spinner) xuất hiện khi hệ thống xử lý. | Pass | |
| IA-04-06 | Feedback | Trạng thái hiển thị màu sắc tương thích với ngữ nghĩa (Ví dụ: APPROVED màu xanh lá, REJECTED màu đỏ). | Pass | |
| IA-04-07 | Feedback | Chấm đỏ thông báo (Notification dot) hiển thị động ngay khi có thay đổi trạng thái đăng ký. | Pass | |
| IA-04-08 | Feedback | Hộp thoại chi tiết ảnh (Lightbox) mở rộng mượt mà khi click vào ảnh đính kèm. | NA | |
| IA-04-09 | Feedback | Cập nhật dữ liệu thời gian thực (Real-time update) mà không cần người dùng reload trang. | Pass | |
| IA-04-10 | Feedback | Hiển thị thông báo rõ ràng khi mất kết nối mạng Internet. | Fail | Không cảnh báo khi mất kết nối mạng: xem [BUG-B2-04](/bug_usability_findings_log.md) hoặc [Xem ảnh](cross_platform_screenshots/Screen_B2_Bug_Khong_Thong_Bao_Mat_Internet.png) |
| IA-04-11 | Feedback | Hệ thống vô hiệu hóa nút gửi hoặc ngăn chặn gửi dữ liệu trùng lặp khi người dùng click đúp nút Submit. | NA | |
| IA-04-12 | Feedback | Mã QR/Barcode trên vé hiển thị rõ nét (không bị mờ), có kích thước tối thiểu đảm bảo quét được bằng ứng dụng camera thông thường. | NA | |

### Màn hình B3
#### Bảng Kết Quả Chạy Checklist GUI

| ID Checklist | Khía Cạnh | Tiêu Chí Kiểm Tra | Screen B3 (Pass/Fail/NA) | Ghi Chú Chi Tiết Lỗi / Link Minh Chứng |
|---|---|---|---|---|
| **IA-01** | **General UI** | **IA-01: General UI Standards (Layout, Typography, Color, Consistency, i18n)** | | |
| IA-01-01 | General UI | Hệ thống lưới và khoảng cách (Grid & Spacing) căn lề nhất quán trên toàn màn hình. | Pass | |
| IA-01-02 | General UI | Font chữ (typography) nhất quán về kích thước, độ dày (bold/regular) và phân cấp tiêu đề. | Pass | |
| IA-01-03 | General UI | Màu sắc của các nút hành động (Primary, Secondary) và trạng thái nhất quán. | Pass | |
| IA-01-04 | General UI | Đa ngôn ngữ (EN/VI) hoạt động đầy đủ, không bị dịch thiếu hoặc chồng lấp chữ. | Fail | Tên role tham dự và mô tả role không được dịch: xem [BUG-B3-01](/bug_usability_findings_log.md) hoặc [Xem ảnh](cross_platform_screenshots/Screen_B3_Bug_Da_Ngon_Ngu.png) |
| IA-01-05 | General UI | Trạng thái rỗng (Empty state) được hiển thị rõ ràng khi không có sự kiện/dữ liệu nào. | Pass | |
| IA-01-06 | General UI | Trạng thái đang tải (Loading state/skeleton) hiển thị khi kéo dữ liệu chậm. | Pass | |
| IA-01-07 | General UI | Trang web tương thích tốt và tự động co giãn (Responsive) trên màn hình. | Pass | |
| IA-01-08 | General UI | Các hình ảnh (Thumbnail/Banner) không bị méo tỉ lệ hiển thị (tỷ lệ 4:3 và 24:9) trên các kích thước màn hình khác nhau. | NA | |
| IA-01-09 | General UI | Các icon được căn chỉnh đúng tâm so với nhãn text bên cạnh. | Pass | |
| IA-01-10 | General UI | Độ tương phản màu sắc giữa văn bản và nền đủ rõ ràng (Accessibility WCAG). | Pass | |
| IA-01-11 | General UI | Các liên kết ngoài (External links) mở ở tab mới, liên kết nội bộ (Internal links) mở ở tab hiện tại. | NA | |
| IA-01-12 | General UI | Ảnh Thumbnail (4:3) và Banner (24:9) không bị cắt xén mất nội dung quan trọng. | NA | |
| **IA-02** | **Forms** | **IA-02: Forms (Labels, Validation, Errors, Required Fields, Rich Text)** | | |
| IA-02-01 | Forms | Các trường bắt buộc nhập (Required fields) được đánh dấu ký hiệu trực quan (ví dụ dấu `*`). | NA | |
| IA-02-02 | Forms | Nhãn (Labels) của trường nhập liệu luôn hiển thị rõ ràng và đi sát với ô nhập liệu. | Pass | |
| IA-02-03 | Forms | Validation thời gian thực báo lỗi đỏ trực quan ngay dưới trường nhập liệu bị lỗi. | NA | |
| IA-02-04 | Forms | Thông báo lỗi cụ thể, hướng dẫn cách khắc phục thay vì báo lỗi chung chung. | NA | |
| IA-02-05 | Forms | Định dạng tải lên (Upload file/image) kiểm tra đúng định dạng và dung lượng tối đa. | NA | |
| IA-02-06 | Forms | Trình soạn thảo Rich Text hiển thị đầy đủ thanh công cụ và hoạt động mượt mà. | NA | |
| IA-02-07 | Forms | Người dùng có thể nhấn `Tab` để di chuyển tuần tự qua các ô nhập liệu trong form. | Pass | |
| IA-02-08 | Forms | Các nút Submit/Save bị vô hiệu hóa (disabled) khi form chưa điền đủ thông tin hợp lệ. | Pass | |
| IA-02-09 | Forms | Định dạng ngày giờ hiển thị theo chuẩn cục bộ dễ đọc đối với người dùng Việt Nam. | NA | |
| IA-02-10 | Forms | Nút xóa nhanh (clear button) hoặc reset form hoạt động chính xác. | NA | |
| IA-02-11 | Forms | Trình duyệt hỗ trợ tính năng tự động điền (autofill) cho các trường thông tin cơ bản. | NA | |
| IA-02-12 | Forms | Ô nhập mật khẩu hỗ trợ tính năng toggle ẩn/hiện mật khẩu trực quan bằng biểu tượng con mắt. | NA | |
| **IA-03** | **Navigation** | **IA-03: Navigation (Menus, Breadcrumbs, Sidebar, Tabs, Back actions, Deep links)** | | |
| IA-03-01 | Navigation | Menu điều hướng chính luôn cố định hoặc dễ dàng truy cập ở đầu trang/thanh bên. | Pass | |
| IA-03-02 | Navigation | Trạng thái hiện tại của trang (Active state) được làm nổi bật trên menu điều hướng. | Pass | |
| IA-03-03 | Navigation | Nút quay lại (Back/Return action) đưa người dùng về đúng trang trước đó, không mất trạng thái. | Pass | |
| IA-03-04 | Navigation | Liên kết sâu (Deep links) dẫn trực tiếp đến trang chi tiết sự kiện mà không bị lỗi 404. | NA | |
| IA-03-05 | Navigation | Breadcrumbs hiển thị đúng phân cấp thư mục và có thể click để quay về thư mục cha. | NA | |
| IA-03-06 | Navigation | Tính năng kéo thả thay đổi thứ tự (Reorder) hiển thị trực quan (dòng bị kéo mờ opacity-50) và các nút thao tác khác tạm thời bị vô hiệu hóa. | NA | |
| IA-03-07 | Navigation | Các tab chuyển đổi nhanh hoạt động độc lập và tải đúng dữ liệu tương ứng. | Pass | |
| IA-03-08 | Navigation | Không có liên kết nào bị hỏng (Broken links / 404 error) trên toàn giao diện. | Pass | |
| IA-03-09 | Navigation | Nút "Cuộn lên đầu trang" (Back to top) hiển thị khi người dùng cuộn xuống sâu (nếu có). | NA | |
| IA-03-10 | Navigation | Thanh bên sidebar có thể thu gọn/mở rộng mượt mà và không che khuất nội dung chính. | NA | |
| IA-03-11 | Navigation | Đường dẫn URL trên thanh địa chỉ thay đổi tương ứng khi chuyển đổi qua lại giữa các tab hoặc bộ lọc. | NA | |
| IA-03-12 | Navigation | Giao diện kéo thả (Reorder) hiển thị biểu tượng tay cầm (drag handle) rõ ràng để gợi ý khả năng tương tác. | NA | |
| **IA-04** | **Feedback** | **IA-04: Feedback & State (Toasts, Badges, Confirmations, Progress Bars, Status Colors)** | | |
| IA-04-01 | Feedback | Thông báo nổi (Toasts) xuất hiện ngay sau khi thực hiện hành động và tự động tắt sau 3-5s. | Fail | Bấm đăng ký không hiện Toast: xem [BUG-B3-02](/bug_usability_findings_log.md) hoặc [Xem ảnh](cross_platform_screenshots/Screen_B3_Bug_Dang_Ki_Su_Kien_Khong_Hien_Toast.png) |
| IA-04-02 | Feedback | Toasts có màu sắc phân biệt rõ ràng: Xanh (Thành công), Đỏ (Lỗi), Vàng (Cảnh báo). | Fail | Không xuất hiện Toast để kiểm tra màu sắc (Lỗi liên đới từ IA-04-01): xem [BUG-B3-02](/bug_usability_findings_log.md) |
| IA-04-03 | Feedback | Hộp thoại xác nhận (Confirmation dialog) xuất hiện trước các hành động hủy/xóa quan trọng. | Pass | |
| IA-04-04 | Feedback | Huy hiệu (Badges) hiển thị chính xác số lượng thông báo; trạng thái vé thay đổi tương ứng khi được phê duyệt/hủy. | Fail | Tải lại trang hiển thị sai số lượng vai trò đã đăng ký thành công (0/1): xem [BUG-B3-03](/bug_usability_findings_log.md) hoặc [Xem ảnh](cross_platform_screenshots/Screen_B3_Bug_Hien_Thi_Sai_So_Luong_Dang_Ky.png) |
| IA-04-05 | Feedback | Thanh tiến trình (Progress bar) hoặc vòng xoay tải (Spinner) xuất hiện khi hệ thống xử lý. | Pass | |
| IA-04-06 | Feedback | Trạng thái hiển thị màu sắc tương thích với ngữ nghĩa (Ví dụ: APPROVED màu xanh lá, REJECTED màu đỏ). | Pass | |
| IA-04-07 | Feedback | Chấm đỏ thông báo (Notification dot) hiển thị động ngay khi có thay đổi trạng thái đăng ký. | Fail | Bấm đăng ký không hiển thị chấm thông báo Noti: xem [BUG-B3-04](/bug_usability_findings_log.md) hoặc [Xem ảnh](cross_platform_screenshots/Screen_B3_Bug_Dang_Ki_Su_Kien_Khong_Hien_Thong_Bao_Noti.png) |
| IA-04-08 | Feedback | Hộp thoại chi tiết ảnh (Lightbox) mở rộng mượt mà khi click vào ảnh đính kèm. | NA | |
| IA-04-09 | Feedback | Cập nhật dữ liệu thời gian thực (Real-time update) mà không cần người dùng reload trang. | Fail | Khi được phê duyệt, UI không tự cập nhật trạng thái mà phải F5: xem [BUG-B3-05](/bug_usability_findings_log.md) hoặc [Xem ảnh](cross_platform_screenshots/Screen_B3_Bug_Khong_Tu_Cap_Nhat_UI.png) |
| IA-04-10 | Feedback | Hiển thị thông báo rõ ràng khi mất kết nối mạng Internet. | Fail | Không có thông báo gì khi bị ngắt kết nối internet: xem [BUG-B3-06](/bug_usability_findings_log.md) hoặc [Xem ảnh](cross_platform_screenshots/Screen_B3_Bug_Khong_Thong_Bao_Mat_Internet.png) |
| IA-04-11 | Feedback | Hệ thống vô hiệu hóa nút gửi hoặc ngăn chặn gửi dữ liệu trùng lặp khi người dùng click đúp nút Submit. | NA | |
| IA-04-12 | Feedback | Mã QR/Barcode trên vé hiển thị rõ nét (không bị mờ), có kích thước tối thiểu đảm bảo quét được bằng ứng dụng camera thông thường. | NA | |


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
