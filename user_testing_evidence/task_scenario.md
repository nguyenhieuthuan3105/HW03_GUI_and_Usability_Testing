# KỊCH BẢN E2E TEST FLOW & USABILITY SCENARIO - LUỒNG NGƯỜI DÙNG (SCENARIO B)

**Hệ thống (WEB):** `https://promoter-starboard-prude.ngrok-free.dev/`  
**Kịch bản kiểm thử:** Scenario B — User registers to attend an event (Đăng ký tham gia sự kiện)  
**Mã luồng test:** `TC_E2E_USER_SCENARIO_B`  
**Phạm vi màn hình:** Màn hình B1 (Home/List), B2 (Detail), B3 (Registration Form), B4 (My Registrations / QR Ticket)  

---

## I. MỤC TIÊU VÀ ĐƠN VỊ ĐO LƯỜNG (TEST OBJECTIVES & METRICS)

1. **Mục tiêu kiểm thử:**
   * Đánh giá tính tiện dụng (Usability), khả năng khám phá (Discoverability) và trải nghiệm người dùng (User Experience) trên luồng hành trình người dùng đăng ký sự kiện.
   * Đo lường thời gian hoàn thành task, tỷ lệ thành công, số lỗi thao tác/do dự và điểm số System Usability Scale (SUS).

2. **Các chỉ số đo lường cốt lõi (Core Metrics):**
   * **Task Success Rate:** Completed (Hoàn thành tốt) / Partial (Hoàn thành một phần) / Failed (Thất bại).
   * **Time on Task:** Thời gian hoàn thành từ khi bắt đầu tìm kiếm đến khi mở được vé QR (tính bằng giây).
   * **Error & Hesitation Count:** Số lần bấm nhầm nút, quay lui, chọn sai trường hoặc phân vân > 5s.
   * **System Usability Scale (SUS):** Thang điểm đánh giá trải nghiệm 10 câu hỏi chuẩn hóa (thang 0–100).

---

## II. KỊCH BẢN NỔI NGHỆ THUẬT GIAO CHO NGƯỜI DÙNG (USER-FACING SCENARIO PROMPT)

> **Lời thoại giao cho người dùng (Goal-Oriented User Instructions):**  
> *"Bạn là một sinh viên đang tìm kiếm cơ hội tham gia các buổi workshop học thuật để tích lũy điểm rèn luyện. Hãy tưởng tượng bạn vừa thấy thông báo về một buổi **USING AI AGENT CONVERSATION** sắp diễn ra trên trang trường.*  
> *Bạn hãy thực hiện các công việc sau:*  
> 1. Đăng nhập vào hệ thống EMS với tư cách là Sinh viên. Tài khoản được lưu sẵn.
> 2. Tìm kiếm buổi **USING AI AGENT CONVERSATION** đó.
> 3. Xem thông tin chi tiết về thời gian, địa điểm, diễn giả và lịch trình xem có phù hợp không.
> 4. Đăng ký tham gia buổi workshop với vai trò chính là **Sinh viên (Student)** và đăng ký thêm vai trò phụ là **Khách tham quan (Visitor)** nếu có.
> 5. Chờ xác nhận từ admin của hệ thống (Khoảng 1 phút).
> 6. Sau khi đăng ký thành công, hãy tìm cách mở mã **QR cá nhân** trên màn hình thiết bị của bạn để sẵn sàng đưa cho Ban tổ chức quét mã vào cửa."

---

## III. LUỒNG KIỂM THỬ E2E CHI TIẾT DÀNH CHO NGƯỜI QUAN SÁT (EVALUATOR E2E TEST FLOW)

---

### GIAI ĐOẠN 1: KHÁM PHÁ VÀ TÌM KIẾM SỰ KIỆN (MÀN HÌNH B1 - HOME & LISTING)

#### Bước 1: Khám phá Trang chủ & Bộ lọc Tìm kiếm
* **Hành động dự kiến người dùng (Expected User Actions):**
  * Truy cập URL hệ thống $\rightarrow$ Quan sát Banner Carousel các sự kiện nổi bật.
  * Thử nghiệm tính năng chuyển đổi ngôn ngữ (EN/VI) trên thanh Menu Header.
  * Nhập từ khóa *"AI"* hoặc *"Conversation"* trên ô Search Bar.
  * Thao tác chọn danh mục sự kiện (Category) hoặc lọc sự kiện theo khoảng ngày ("Từ ngày" - "Đến ngày").
* **Kết quả mong đợi (Expected Outcomes / Success Criteria):**
  * Giao diện B1 phản hồi tức thì, danh sách card sự kiện được lọc chính xác.
  * Thanh địa chỉ trình duyệt đồng bộ tham số tìm kiếm (Query Parameters).
  * Hình ảnh Thumbnail (4:3) và Banner (24:9) hiển thị sắc nét, không bị bóp méo hay vỡ layout.

---

### GIAI ĐOẠN 2: XEM CHI TIẾT SỰ KIỆN VÀ KIỂM TRA ĐIỀU KIỆN (MÀN HÌNH B2 - EVENT DETAIL)

#### Bước 2: Đọc thông tin Lịch trình & Kích hoạt Đăng ký
* **Hành động dự kiến người dùng (Expected User Actions):**
  * Nhấp vào Card sự kiện **USING AI AGENT CONVERSATION** để chuyển hướng sang trang B2.
  * Đọc thông tin chi tiết: Tiêu đề, Thời gian diễn ra, Địa điểm/Campus, Mô tả sự kiện và Danh sách lịch trình (Schedule).
  * Kiểm tra thông tin các loại vé/vai trò khả dụng (Student, Lecturer, Guest) và số chỗ còn lại (Max Slots/Waitlist).
  * Nhấn vào nút hành động chính **"Đăng ký tham gia" (Register Now)** hoặc **"Lưu sự kiện"**.
* **Kết quả mong đợi (Expected Outcomes / Success Criteria):**
  * Trang B2 hiển thị phân cấp thông tin tiêu đề rõ ràng, các biểu tượng (Icon) căn chỉnh đúng tâm.
  * Nút "Đăng ký tham gia" nổi bật trực quan, kích hoạt mở form đăng ký B3 mượt mà.
  * Nút "Lưu sự kiện" phản hồi Toast thông báo và giữ nguyên trạng thái Đã lưu trên UI.

---

### GIAI ĐOẠN 3: ĐIỀN FORM ĐĂNG KÝ VÀ RÀNG BUỘC VALIDATION (MÀN HÌNH B3 - REGISTRATION FORM)

#### Bước 3: Chọn Vai trò, Nhập Vai trò phụ & Xác nhận Thông tin
* **Hành động dự kiến người dùng (Expected User Actions):**
  * Quan sát các trường nhập liệu trong biểu mẫu đăng ký B3.
  * Lựa chọn vai trò tham dự chính: **Sinh viên (Student)**.
  * Điền/chọn vai trò phụ (Additional Role): **Khách tham quan (Visitor)**.
  * Tích chọn ô xác nhận điều khoản tham gia sự kiện.
  * Kiểm tra các trường bắt buộc (Required Fields `*`) và bấm nút **"Gửi yêu cầu đăng ký" (Submit Registration)**.
* **Kết quả mong đợi (Expected Outcomes / Success Criteria):**
  * Hệ thống kiểm tra validation thời gian thực (Real-time Validation), báo đỏ nếu chưa chọn vai trò hoặc bỏ trống điều khoản.
  * Sau khi gửi thành công, nút Submit chuyển sang trạng thái "Chờ duyệt" hoặc "Đã đăng ký".
  * Thông báo nổi (Toast Notification) xuất hiện ở góc màn hình xác nhận yêu cầu đã được gửi.

---

### GIAI ĐOẠN 4: TRA CỨU VÉ CÁ NHÂN VÀ MÃ CHECK-IN (MÀN HÌNH B4 - MY REGISTRATIONS / TICKET)

#### Bước 4: Hiển thị Vé QR & Kiểm tra Mã vạch
* **Hành động dự kiến người dùng (Expected User Actions):**
  * Mở Menu cá nhân $\rightarrow$ Truy cập mục **"Sự kiện đã đăng ký" (My Registrations)** hoặc xem thông báo.
  * Tìm sự kiện vừa đăng ký thành công và bấm nút **"Xem vé" (View Ticket / Show QR Code)**.
  * Quan sát mã QR Code / Barcode trên màn hình để chuẩn bị đưa cho Admin quét check-in.
* **Kết quả mong đợi (Expected Outcomes / Success Criteria):**
  * Vé cá nhân hiển thị rõ ràng thông tin người đăng ký, tên sự kiện, vai trò đã được duyệt.
  * Mã QR Code/Barcode hiển thị rõ nét, kích thước đủ lớn, sẵn sàng để ứng dụng camera/scanner quét được.

---

## IV. CÂU HỎI THĂM DÒ SAU BUỔI THỬ NGHIỆM (POST-TASK PROBE QUESTIONS)

Sau khi người dùng hoàn thành hoặc dừng cuộc thử nghiệm, Người Quan sát thực hiện phỏng vấn ngắn với 4 câu hỏi mở sau:

1. **Tính rõ ràng (Clarity):**  
   *"Bạn thấy các thông tin về sự kiện (lịch trình, vai trò, số chỗ) trên trang web có dễ tìm và dễ hiểu không? Có chi tiết nào khiến bạn bối rối không?"*
2. **Khắc phục lỗi (Error Recovery):**  
   *"Trong quá trình điền form hay lọc sự kiện, nếu thao tác sai hoặc thiếu thông tin, bạn có nhận biết được lỗi ngay không và hệ thống hỗ trợ bạn sửa như thế nào?"*
3. **Tốc độ & Tính liên tục (Speed & Flow):**  
   *"Bạn đánh giá thế nào về tốc độ phản hồi của trang web khi chuyển từ tìm kiếm sự kiện $\rightarrow$ xem chi tiết $\rightarrow$ đăng ký $\rightarrow$ nhận vé?"*
4. **Mức độ tin tưởng (Trust & Confidence):**  
   *"Bạn có cảm thấy tin tưởng và an tâm khi nhập thông tin cá nhân cũng như nhận vé QR điện tử từ hệ thống này không?"*
