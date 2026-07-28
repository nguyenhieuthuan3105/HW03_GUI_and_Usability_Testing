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
| IA-01-04 | General UI | Đa ngôn ngữ (EN/VI) hoạt động đầy đủ, không bị dịch thiếu hoặc chồng lấp chữ. | Fail | Tiêu đề và mô tả sự kiện không dịch: xem [BUG-B1-01](/bug_usability_findings_log.md) hoặc [Xem ảnh](images/bug_screenshots/Screen_B1_Bug_Da_Ngon_Ngu.png) |
| IA-01-05 | General UI | Trạng thái rỗng (Empty state) được hiển thị rõ ràng khi không có sự kiện/dữ liệu nào. | Pass | |
| IA-01-06 | General UI | Trạng thái đang tải (Loading state/skeleton) hiển thị khi kéo dữ liệu chậm. | Pass | |
| IA-01-07 | General UI | Trang web tương thích tốt và tự động co giãn (Responsive) trên màn hình. | Pass | |
| IA-01-08 | General UI | Các hình ảnh (Thumbnail/Banner) không bị méo tỉ lệ hiển thị (tỷ lệ 4:3 và 24:9) trên các kích thước màn hình khác nhau. | Pass | |
| IA-01-09 | General UI | Các icon được căn chỉnh đúng tâm so với nhãn text bên cạnh. | Pass | |
| IA-01-10 | General UI | Độ tương phản màu sắc giữa văn bản và nền đủ rõ ràng (Accessibility WCAG). | Pass | |
| IA-01-11 | General UI | Các liên kết ngoài (External links) mở ở tab mới, liên kết nội bộ (Internal links) mở ở tab hiện tại. | Pass | |
| IA-01-12 | General UI | Ảnh Thumbnail (4:3) và Banner (24:9) không bị cắt xén mất nội dung quan trọng. | Fail | Ảnh banner bị cắt mất 2 bên: xem [BUG-B1-02](/bug_usability_findings_log.md) hoặc [Xem ảnh](images/bug_screenshots/Screen_B1_Bug_Anh_Mat_Noi_Dung_Quan_Trong.png) |
| **IA-02** | **Forms** | **IA-02: Forms (Labels, Validation, Errors, Required Fields, Rich Text)** | | |
| IA-02-01 | Forms | Các trường bắt buộc nhập (Required fields) được đánh dấu ký hiệu trực quan (ví dụ dấu `*`). | NA | |
| IA-02-02 | Forms | Nhãn (Labels) của trường nhập liệu luôn hiển thị rõ ràng và đi sát với ô nhập liệu. | NA | |
| IA-02-03 | Forms | Validation thời gian thực báo lỗi đỏ trực quan ngay dưới trường nhập liệu bị lỗi. | NA | |
| IA-02-04 | Forms | Thông báo lỗi cụ thể, hướng dẫn cách khắc phục thay vì báo lỗi chung chung. | Fail | Không báo lỗi khi nhập ngày kết thúc trước ngày bắt đầu: xem [BUG-B1-03](/bug_usability_findings_log.md) hoặc [Xem ảnh](images/bug_screenshots/Screen_B1_Bug_Khong_Bao_Loi_Ngay_Khong_Hop_Le.png) |
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
| IA-03-11 | Navigation | Đường dẫn URL trên thanh địa chỉ thay đổi tương ứng khi chuyển đổi qua lại giữa các tab hoặc bộ lọc. | Fail | URL không đồng bộ khi lọc/chuyển tab: xem [BUG-B1-04](/bug_usability_findings_log.md) hoặc [Xem ảnh](images/bug_screenshots/Screen_B1_Bug_Duong_Dan_Khong_Thay_Doi.png) |
| IA-03-12 | Navigation | Giao diện kéo thả (Reorder) hiển thị biểu tượng tay cầm (drag handle) rõ ràng để gợi ý khả năng tương tác. | NA | |
| **IA-04** | **Feedback** | **IA-04: Feedback & State (Toasts, Badges, Confirmations, Progress Bars, Status Colors)** | | |
| IA-04-01 | Feedback | Thông báo nổi (Toasts) xuất hiện ngay sau khi thực hiện hành động và tự động tắt sau 3-5s. | Fail | Click "Lưu" không hiện Toast, trạng thái "Đã lưu" tự reset: xem [BUG-B1-05](/bug_usability_findings_log.md) hoặc [Xem ảnh](images/bug_screenshots/Screen_B1_Bug_Luu_Su_Kien_Khong_Hien_Toast.png), [BUG-B1-06](/bug_usability_findings_log.md) hoặc [Xem ảnh](images/bug_screenshots/Screen_B1_Bug_Bam_Luu_Su_Kien_Khong_Duoc_Giu_Nguyen_Trang_Thai_1.png) và [Xem ảnh](images/bug_screenshots/Screen_B1_Bug_Bam_Luu_Su_Kien_Khong_Duoc_Giu_Nguyen_Trang_Thai_2.png) |
| IA-04-02 | Feedback | Toasts có màu sắc phân biệt rõ ràng: Xanh (Thành công), Đỏ (Lỗi), Vàng (Cảnh báo). | Fail | Không xuất hiện Toast để kiểm tra màu sắc (Lỗi liên đới từ IA-04-01) |
| IA-04-03 | Feedback | Hộp thoại xác nhận (Confirmation dialog) xuất hiện trước các hành động hủy/xóa quan trọng. | NA | |
| IA-04-04 | Feedback | Huy hiệu (Badges) hiển thị chính xác số lượng thông báo; trạng thái vé thay đổi tương ứng khi được phê duyệt/hủy. | Pass | |
| IA-04-05 | Feedback | Thanh tiến trình (Progress bar) hoặc vòng xoay tải (Spinner) xuất hiện khi hệ thống xử lý. | Pass | |
| IA-04-06 | Feedback | Trạng thái hiển thị màu sắc tương thích với ngữ nghĩa (Ví dụ: APPROVED màu xanh lá, REJECTED màu đỏ). | Pass | |
| IA-04-07 | Feedback | Chấm đỏ thông báo (Notification dot) hiển thị động ngay khi có thay đổi trạng thái đăng ký. | Pass | |
| IA-04-08 | Feedback | Hộp thoại chi tiết ảnh (Lightbox) mở rộng mượt mà khi click vào ảnh đính kèm. | NA | |
| IA-04-09 | Feedback | Cập nhật dữ liệu thời gian thực (Real-time update) mà không cần người dùng reload trang. | Pass | |
| IA-04-10 | Feedback | Hiển thị thông báo rõ ràng khi mất kết nối mạng Internet. | Fail | Không cảnh báo khi mất kết nối mạng: xem [BUG-B1-07](/bug_usability_findings_log.md) hoặc [Xem ảnh](images/bug_screenshots/Screen_B1_Bug_Khong_Thong_Bao_Mat_Internet.png) |
| IA-04-11 | Feedback | Hệ thống vô hiệu hóa nút gửi hoặc ngăn chặn gửi dữ liệu trùng lặp khi người dùng click đúp nút Submit. | NA | |
| IA-04-12 | Feedback | Mã QR/Barcode trên vé hiển thị rõ nét (không bị mờ), có kích thước tối thiểu đảm bảo quét được bằng ứng dụng camera thông thường. | NA | |
| IA-04-13 | Feedback | Ô nhập liệu (text box) hiển thị hiệu ứng viền/nổi bật trực quan (focus state) khi nhấp chuột vào để người dùng nhận biết rõ ràng đang thao tác/nhập liệu. | Pass | |

### Màn hình B2
#### Bảng Kết Quả Chạy Checklist GUI

| ID Checklist | Khía Cạnh | Tiêu Chí Kiểm Tra | Screen B2 (Pass/Fail/NA) | Ghi Chú Chi Tiết Lỗi / Link Minh Chứng |
|---|---|---|---|---|
| **IA-01** | **General UI** | **IA-01: General UI Standards (Layout, Typography, Color, Consistency, i18n)** | | |
| IA-01-01 | General UI | Hệ thống lưới và khoảng cách (Grid & Spacing) căn lề nhất quán trên toàn màn hình. | Pass | |
| IA-01-02 | General UI | Font chữ (typography) nhất quán về kích thước, độ dày (bold/regular) và phân cấp tiêu đề. | Pass | |
| IA-01-03 | General UI | Màu sắc của các nút hành động (Primary, Secondary) và trạng thái nhất quán. | Pass | |
| IA-01-04 | General UI | Đa ngôn ngữ (EN/VI) hoạt động đầy đủ, không bị dịch thiếu hoặc chồng lấp chữ. | Fail | Tiêu đề và mô tả sự kiện không dịch: xem [BUG-B2-01](/bug_usability_findings_log.md) hoặc [Xem ảnh](images/bug_screenshots/Screen_B2_Bug_Da_Ngon_Ngu.png) |
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
| IA-04-01 | Feedback | Thông báo nổi (Toasts) xuất hiện ngay sau khi thực hiện hành động và tự động tắt sau 3-5s. | Fail | Click "Lưu" không hiện Toast, trạng thái "Đã lưu" tự reset: xem [BUG-B2-02](/bug_usability_findings_log.md) hoặc [Xem ảnh](images/bug_screenshots/Screen_B2_Bug_Luu_Su_Kien_Khong_Hien_Toast.png), [BUG-B2-03](/bug_usability_findings_log.md) hoặc [Xem ảnh 1](images/bug_screenshots/Screen_B2_Bug_Bam_Luu_Su_Kien_Khong_Duoc_Giu_Nguyen_Trang_Thai_1.png) và [Xem ảnh 2](images/bug_screenshots/Screen_B2_Bug_Bam_Luu_Su_Kien_Khong_Duoc_Giu_Nguyen_Trang_Thai_2.png) |
| IA-04-02 | Feedback | Toasts có màu sắc phân biệt rõ ràng: Xanh (Thành công), Đỏ (Lỗi), Vàng (Cảnh báo). | Fail | Không xuất hiện Toast để kiểm tra màu sắc (Lỗi liên đới từ IA-04-01): xem [BUG-B2-02](/bug_usability_findings_log.md) |
| IA-04-03 | Feedback | Hộp thoại xác nhận (Confirmation dialog) xuất hiện trước các hành động hủy/xóa quan trọng. | NA | |
| IA-04-04 | Feedback | Huy hiệu (Badges) hiển thị chính xác số lượng thông báo; trạng thái vé thay đổi tương ứng khi được phê duyệt/hủy. | Pass | |
| IA-04-05 | Feedback | Thanh tiến trình (Progress bar) hoặc vòng xoay tải (Spinner) xuất hiện khi hệ thống xử lý. | Pass | |
| IA-04-06 | Feedback | Trạng thái hiển thị màu sắc tương thích với ngữ nghĩa (Ví dụ: APPROVED màu xanh lá, REJECTED màu đỏ). | Pass | |
| IA-04-07 | Feedback | Chấm đỏ thông báo (Notification dot) hiển thị động ngay khi có thay đổi trạng thái đăng ký. | Pass | |
| IA-04-08 | Feedback | Hộp thoại chi tiết ảnh (Lightbox) mở rộng mượt mà khi click vào ảnh đính kèm. | NA | |
| IA-04-09 | Feedback | Cập nhật dữ liệu thời gian thực (Real-time update) mà không cần người dùng reload trang. | Pass | |
| IA-04-10 | Feedback | Hiển thị thông báo rõ ràng khi mất kết nối mạng Internet. | Fail | Không cảnh báo khi mất kết nối mạng: xem [BUG-B2-04](/bug_usability_findings_log.md) hoặc [Xem ảnh](images/bug_screenshots/Screen_B2_Bug_Khong_Thong_Bao_Mat_Internet.png) |
| IA-04-11 | Feedback | Hệ thống vô hiệu hóa nút gửi hoặc ngăn chặn gửi dữ liệu trùng lặp khi người dùng click đúp nút Submit. | NA | |
| IA-04-12 | Feedback | Mã QR/Barcode trên vé hiển thị rõ nét (không bị mờ), có kích thước tối thiểu đảm bảo quét được bằng ứng dụng camera thông thường. | NA | |
| IA-04-13 | Feedback | Ô nhập liệu (text box) hiển thị hiệu ứng viền/nổi bật trực quan (focus state) khi nhấp chuột vào để người dùng nhận biết rõ ràng đang thao tác/nhập liệu. | NA | |

### Màn hình B3
#### Bảng Kết Quả Chạy Checklist GUI

| ID Checklist | Khía Cạnh | Tiêu Chí Kiểm Tra | Screen B3 (Pass/Fail/NA) | Ghi Chú Chi Tiết Lỗi / Link Minh Chứng |
|---|---|---|---|---|
| **IA-01** | **General UI** | **IA-01: General UI Standards (Layout, Typography, Color, Consistency, i18n)** | | |
| IA-01-01 | General UI | Hệ thống lưới và khoảng cách (Grid & Spacing) căn lề nhất quán trên toàn màn hình. | Pass | |
| IA-01-02 | General UI | Font chữ (typography) nhất quán về kích thước, độ dày (bold/regular) và phân cấp tiêu đề. | Pass | |
| IA-01-03 | General UI | Màu sắc của các nút hành động (Primary, Secondary) và trạng thái nhất quán. | Pass | |
| IA-01-04 | General UI | Đa ngôn ngữ (EN/VI) hoạt động đầy đủ, không bị dịch thiếu hoặc chồng lấp chữ. | Fail | Tên role tham dự và mô tả role không được dịch: xem [BUG-B3-01](/bug_usability_findings_log.md) hoặc [Xem ảnh](images/bug_screenshots/Screen_B3_Bug_Da_Ngon_Ngu.png) |
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
| IA-04-01 | Feedback | Thông báo nổi (Toasts) xuất hiện ngay sau khi thực hiện hành động và tự động tắt sau 3-5s. | Fail | Bấm đăng ký không hiện Toast: xem [BUG-B3-02](/bug_usability_findings_log.md) hoặc [Xem ảnh](images/bug_screenshots/Screen_B3_Bug_Dang_Ki_Su_Kien_Khong_Hien_Toast.png) |
| IA-04-02 | Feedback | Toasts có màu sắc phân biệt rõ ràng: Xanh (Thành công), Đỏ (Lỗi), Vàng (Cảnh báo). | Fail | Không xuất hiện Toast để kiểm tra màu sắc (Lỗi liên đới từ IA-04-01): xem [BUG-B3-02](/bug_usability_findings_log.md) |
| IA-04-03 | Feedback | Hộp thoại xác nhận (Confirmation dialog) xuất hiện trước các hành động hủy/xóa quan trọng. | Pass | |
| IA-04-04 | Feedback | Huy hiệu (Badges) hiển thị chính xác số lượng thông báo; trạng thái vé thay đổi tương ứng khi được phê duyệt/hủy. | Fail | Tải lại trang hiển thị sai số lượng vai trò đã đăng ký thành công (0/1): xem [BUG-B3-03](/bug_usability_findings_log.md) hoặc [Xem ảnh](images/bug_screenshots/Screen_B3_Bug_Hien_Thi_Sai_So_Luong_Dang_Ky.png) |
| IA-04-05 | Feedback | Thanh tiến trình (Progress bar) hoặc vòng xoay tải (Spinner) xuất hiện khi hệ thống xử lý. | Pass | |
| IA-04-06 | Feedback | Trạng thái hiển thị màu sắc tương thích với ngữ nghĩa (Ví dụ: APPROVED màu xanh lá, REJECTED màu đỏ). | Pass | |
| IA-04-07 | Feedback | Chấm đỏ thông báo (Notification dot) hiển thị động ngay khi có thay đổi trạng thái đăng ký. | Fail | Bấm đăng ký không hiển thị chấm thông báo Noti: xem [BUG-B3-04](/bug_usability_findings_log.md) hoặc [Xem ảnh](images/bug_screenshots/Screen_B3_Bug_Dang_Ki_Su_Kien_Khong_Hien_Thong_Bao_Noti.png) |
| IA-04-08 | Feedback | Hộp thoại chi tiết ảnh (Lightbox) mở rộng mượt mà khi click vào ảnh đính kèm. | NA | |
| IA-04-09 | Feedback | Cập nhật dữ liệu thời gian thực (Real-time update) mà không cần người dùng reload trang. | Fail | Khi được phê duyệt, UI không tự cập nhật trạng thái mà phải F5: xem [BUG-B3-05](/bug_usability_findings_log.md) hoặc [Xem ảnh](images/bug_screenshots/Screen_B3_Bug_Khong_Tu_Cap_Nhat_UI.png) |
| IA-04-10 | Feedback | Hiển thị thông báo rõ ràng khi mất kết nối mạng Internet. | Fail | Không có thông báo gì khi bị ngắt kết nối internet: xem [BUG-B3-06](/bug_usability_findings_log.md) hoặc [Xem ảnh](images/bug_screenshots/Screen_B3_Bug_Khong_Thong_Bao_Mat_Internet.png) |
| IA-04-11 | Feedback | Hệ thống vô hiệu hóa nút gửi hoặc ngăn chặn gửi dữ liệu trùng lặp khi người dùng click đúp nút Submit. | NA | |
| IA-04-12 | Feedback | Mã QR/Barcode trên vé hiển thị rõ nét (không bị mờ), có kích thước tối thiểu đảm bảo quét được bằng ứng dụng camera thông thường. | NA | |
| IA-04-13 | Feedback | Ô nhập liệu (text box) hiển thị hiệu ứng viền/nổi bật trực quan (focus state) khi nhấp chuột vào để người dùng nhận biết rõ ràng đang thao tác/nhập liệu. | Pass | |


---

## PHẦN 3: BÁO CÁO USABILITY TESTING (Usability Report)

### 1. Kịch Bản Nhiệm Vụ (Task Scenario Overview)
*Kịch bản được thiết kế định hướng mục tiêu (Goal-oriented) giao cho người dùng:*  
> **"Bạn là một sinh viên đang tìm kiếm cơ hội tham gia các buổi workshop học thuật để tích lũy điểm rèn luyện. Hãy tưởng tượng bạn vừa thấy thông báo về một buổi USING AI AGENT CONVERSATION sắp diễn ra trên trang web của trường.**  
> **Nhiệm vụ của bạn:** Truy cập EMS $\rightarrow$ Tìm kiếm sự kiện **USING AI AGENT CONVERSATION** $\rightarrow$ Xem lịch trình & thông tin $\rightarrow$ Đăng ký tham gia với vai trò chính là **Sinh viên (Student)** và vai trò phụ **Khách tham quan (Visitor)** $\rightarrow$ Chờ Admin duyệt (khoảng 1 phút) $\rightarrow$ Mở mã **QR vé cá nhân** để sẵn sàng check-in vào cửa."  
> *(Xem kịch bản chi tiết tại file [task_scenario.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/task_scenario.md) và hướng dẫn thử nghiệm tại [test_request.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/test_request.md)).*

### 2. Danh Sách Người Tham Gia Thử Nghiệm (Participants)
*(Thông tin 5 người dùng thật ngoài lớp học, số điện thoại và email được che 4 chữ số ở giữa theo quy định bảo mật)*

| STT | Người dùng (Viết tắt) | Vai trò thực tế | Thông tin liên lạc (SĐT / Email) | Trình độ công nghệ | Môi trường thử nghiệm |
|---|---|---|---|---|---|
| **1** | Nguyễn V. A | Sinh viên FIT | `0912***345` / `anv***@gmail.com` | Trung bình | Desktop (Windows 11 / Chrome) |
| **2** | Trần T. B | Giảng viên | `0903***678` / `btt***@gmail.com` | Trung bình | Desktop (macOS / Safari) |
| **3** | Lê V. C | Cựu sinh viên | `0988***112` / `cvl***@gmail.com` | Cao | Mobile (Android / Chrome) |
| **4** | Phạm T. D | Nhân viên VP | `0977***334` / `dtp***@gmail.com` | Cao | Mobile (iOS / Safari) |
| **5** | Hoàng V. E | Học sinh cấp 3 | `0933***556` / `evh***@gmail.com` | Thấp | Tablet (Android / Chrome) |

### 3. Bảng Chỉ Số Đo Lường Usability (Metrics Table)

| Người dùng | Trạng thái hoàn thành (Completed / Partial / Failed) | Thời gian hoàn thành (giây) | Số lần do dự / Thao tác lỗi | Điểm SUS (/100) | Ghi chú vấn đề chính gặp phải |
|---|---|---|---|---|---|
| **User 1** | `[Completed / Partial / Failed]` | `[...s]` | `[... lần]` | `[... / 100]` | `[Ghi chú...]` |
| **User 2** | `[Completed / Partial / Failed]` | `[...s]` | `[... lần]` | `[... / 100]` | `[Ghi chú...]` |
| **User 3** | `[Completed / Partial / Failed]` | `[...s]` | `[... lần]` | `[... / 100]` | `[Ghi chú...]` |
| **User 4** | `[Completed / Partial / Failed]` | `[...s]` | `[... lần]` | `[... / 100]` | `[Ghi chú...]` |
| **User 5** | `[Completed / Partial / Failed]` | `[...s]` | `[... lần]` | `[... / 100]` | `[Ghi chú...]` |
| **TRUNG BÌNH** | **`[...% Completed]`** | **`[... giây]`** | **`[... lần]`** | **`[... / 100]`** | **Xếp loại UX:** `[Excellent / Good / OK / Poor]` |

*(Chi tiết từng buổi test ghi nhận tại file [observation_notes.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/observation_notes.md) và bảng điểm SUS tại [sus_responses.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/sus_responses.md)).*

### 4. Các Vấn Đề Usability Phát Hiện Qua Thực Tế (Usability Findings & Recommendations)
*(Gom nhóm các điểm đau của người dùng, phân loại theo độ nghiêm trọng Severity từ 0 đến 4 và đưa ra đề xuất cải tiến)*

#### Vấn đề 1: [Tên vấn đề Usability 1 - Ví dụ: Nút Đăng ký tham gia bị chìm so với nền]
* **Mức độ nghiêm trọng (Severity):** `[0 - 4]` *(2: Trung bình / 3: Cao)*
* **Mô tả hành vi người dùng:** `[Người dùng bị khựng lại khoảng 15 giây ở trang chi tiết B2 vì nút Đăng ký tham gia có màu sắc quá tương đồng với màu nền, làm giảm tính nhận diện (Signifier)]`.
* **Minh chứng hình ảnh:** ![Minh chứng lỗi usability 1](images/bug_screenshots/usab_finding_01.png)
* **Đề xuất cải tiến (Recommendation):** `[Chuyển màu nút Đăng ký tham gia sang màu Primary (Xanh nổi bật) và cố định ở thanh dưới cùng di động (Sticky Bottom Bar)]`.

#### Vấn đề 2: [Tên vấn đề Usability 2 - Ví dụ: Thông báo trạng thái duyệt bài không rõ ràng]
* **Mức độ nghiêm trọng (Severity):** `[0 - 4]`
* **Mô tả hành vi người dùng:** `[Người dùng hoang mang sau khi gửi đăng ký ở form B3 vì không có Toast xác nhận và không biết bao giờ mới nhận được vé QR]`.
* **Minh chứng hình ảnh:** ![Minh chứng lỗi usability 2](images/bug_screenshots/usab_finding_02.png)
* **Đề xuất cải tiến (Recommendation):** `[Bổ sung Toast notification ngay sau khi Submit và hiển thị hộp thoại pop-up hướng dẫn người dùng kiểm tra mục Sự kiện của tôi]`.

---

## PHẦN 4: BÁO CÁO ĐA NỀN TẢNG (Cross-Browser / Cross-Platform Report)

### 1. Ma Trận Kiểm Thử Tương Thích (Compatibility Matrix)

* **3 Hệ điều hành (OS):** Windows 11, macOS (Sonoma), Android 14.
* **5 Trình duyệt (Browsers):** Google Chrome, Microsoft Edge, Mozilla Firefox, Opera, Apple Safari.
* **3 Loại thiết bị (Device Classes):** Desktop, Phone, Tablet.
* **Quy định minh chứng:** Tất cả ảnh chụp minh chứng bắt buộc có overlay watermark MSSV (`MSSV: 23127125` / `23127125@student.hcmus.edu.vn`) nằm cạnh thanh địa chỉ URL của hệ thống EMS (`https://promoter-starboard-prude.ngrok-free.dev/`).

#### Bảng Ghi Nhận Kết Quả Tương Thích Đa Nền Tảng (Covering B1, B2, B3)

| STT | Loại thiết bị (Device Class) | Hệ điều hành (OS) | Trình duyệt (Browser) | Screen B1 (Pass/Fail) | Screen B2 (Pass/Fail) | Screen B3 (Pass/Fail) | File ảnh minh chứng (Overlay MSSV) |
|---|---|---|---|---|---|---|---|
| **1** | Desktop | Windows | Google Chrome | Pass | Pass | Pass | [Xem ảnh](images/cross_platform_screenshots/windows_chrome_desktop.png) |
| **2** | Desktop | Windows | Microsoft Edge | Pass | Pass | Pass | [Xem ảnh](images/cross_platform_screenshots/windows_edge_desktop.png) |
| **3** | Desktop | Windows | Mozilla Firefox | Pass | Pass | Pass | [Xem ảnh](images/cross_platform_screenshots/windows_firefox_desktop.png) |
| **4** | Desktop | Windows | Opera | Pass | Pass | Pass | [Xem ảnh](images/cross_platform_screenshots/windows_opera_desktop.png) |
| **5** | Desktop | macOS | Apple Safari | Pass | Pass | Pass | [Xem ảnh](images/cross_platform_screenshots/macos_safari_desktop.png) |
| **6** | Phone | Android | Google Chrome | Pass | Pass | Pass | [Xem ảnh](images/cross_platform_screenshots/android_chrome_phone.png) |
| **7** | Tablet | Android | Google Chrome | Pass | Pass | Pass | [Xem ảnh](images/cross_platform_screenshots/android_chrome_tablet.png) |

---

### 2. Đánh Giá Khả Năng Tương Thích & Lỗi Bố Cục (Compatibility Analysis)

#### A. Đánh giá Khả năng co giãn giao diện (Responsiveness):
* **Desktop (Windows 11 / macOS):** Bố cục hiển thị chuẩn lưới 3-4 (hoặc 2-3 với Edge và Opera) cột tùy vào sidebar có được hiển thị hay không, khoảng cách spacing và font chữ đồng đều trên tất cả các trình duyệt. Carousel sự kiện nổi bật xoay mượt mà.
* **Phone (Android 14):** Giao diện tự động co giãn sang bố cục 1 cột. Tuy nhiên, nút *"Đăng ký tham gia"* ở trang B2 bị đẩy xuống dưới cùng mà không có thanh cố định (Sticky Bar), khiến người dùng phải cuộn hết màn hình mới thấy.
* **Tablet (Android 14):** Giao diện hiển thị ở dạng lưới 2 cột, trải nghiệm tìm kiếm và điền form mượt mà.

#### B. Sự khác biệt giữa các Trình duyệt (Browser Engines):
* **Chromium-based (Chrome, Edge, Opera):** Hiển thị hoàn hảo, hiệu ứng chuyển trang mượt mà, font chữ sắc nét.
* **Gecko (Firefox):** Hiển thị tốt, tuy nhiên ở một số ô input chọn ngày tháng có độ trễ nhẹ khi mở Date Picker.
* **WebKit (Safari trên macOS):** Render font chữ thanh mảnh hơn, giao diện chuẩn không vỡ layout.

#### C. Tổng hợp Lỗi tương thích nổi bật (Cross-Platform Defects):
1. **Lỗi Responsive nút bấm trên Mobile (Android/Chrome):** Nút *"Đăng ký tham gia"* trên trang B2 bị che khuất ở màn hình di động nhỏ, không tự động cố định thanh dưới cùng.
2. **Lỗi cắt ảnh Banner trên màn hình nhỏ:** Ảnh Banner sự kiện 24:9 ngoài danh sách B1 trên di động bị xén mất chữ ở hai biên trái/phải.
