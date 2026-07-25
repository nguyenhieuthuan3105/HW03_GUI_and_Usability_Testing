# Reference Sources & Prompts - Group Deliverable

## 1. Nguồn Tài Liệu Tham Khảo (Reference Sources)

Nhóm đã nghiên cứu và xây dựng bộ checklist GUI dựa trên các tài liệu chính thống sau:
*   **Nielsen's 10 Usability Heuristics for User Interface Design**: [Jakob Nielsen - NN/g](https://www.nngroup.com/articles/ten-usability-heuristics/)
*   **Norman's 6 Design Principles**: Trích từ cuốn sách *The Design of Everyday Things* (Donald Norman) bao gồm: Visibility, Feedback, Constraints, Mapping, Consistency, Affordances.
*   **Shneiderman's Eight Golden Rules of Interface Design**: [Ben Shneiderman](https://www.cs.umd.edu/users/ben/goldenrules.html)
*   **Slide bài giảng môn học**: GUI + Usability + Compatibility Testing (AI-First, Combined) - CS423 FIT HCMUS.
*   **Tài liệu chuẩn mực WCAG 2.2**: Hướng dẫn tiếp cận nội dung web về độ tương phản và hỗ trợ người khuyết tật.

---

## 2. Nhật Ký Prompts Sử Dụng Cho AI (AI Prompts Log)

Dưới đây là các câu lệnh (prompts) được nhóm thiết kế để hướng dẫn AI hỗ trợ tạo lập checklist:

### Prompt 1: Khởi tạo danh sách checklist ban đầu dựa trên Heuristics
*   **Công cụ sử dụng:** ChatGPT (GPT-4o) / Claude 3.5 Sonnet.
*   **Nội dung Prompt:**
    ```text
    Bạn là một kỹ sư kiểm thử phần mềm chuyên nghiệp. Hãy đóng vai trò là trợ lý thiết kế danh sách checklist kiểm thử GUI cho một ứng dụng web Quản lý Sự kiện (Event Management System - EMS).
    Hãy tạo lập một bộ checklist gồm ít nhất 30 mục kiểm tra, phân bố đều vào 4 khía cạnh giao diện sau:
    1. IA-01: General UI standards (Bố cục, căn lề, font chữ, đa ngôn ngữ, trạng thái rỗng/đang tải).
    2. IA-02: Forms (Nhãn, validation lỗi, trường bắt buộc, upload ảnh, rich text).
    3. IA-03: Navigation (Menu, breadcrumbs, sidebar, tabs, reorder kéo thả, nút back).
    4. IA-04: Feedback & State (Toasts, badges, hộp thoại xác nhận, progress bars, màu trạng thái).
    
    Yêu cầu: Mỗi mục kiểm tra phải ánh xạ rõ ràng tới một trong các nguyên tắc Usability nổi tiếng (10 Heuristics của Nielsen, 6 nguyên tắc của Norman, hoặc 8 quy tắc vàng của Shneiderman). Xuất kết quả dạng bảng Markdown có các cột: ID, Khía Cạnh, Mục Kiểm Tra, Ánh Xạ Heuristic.
    ```

### Prompt 2: Tinh chỉnh và bổ sung các kịch bản kiểm thử đặc thù của EMS
*   **Công cụ sử dụng:** Claude 3.5 Sonnet.
*   **Nội dung Prompt:**
    ```text
    Từ bộ checklist GUI đã tạo ở trên, hãy bổ sung các kịch bản kiểm thử nâng cao và thực tế cho hệ thống EMS, cụ thể:
    - Cách thức kiểm duyệt ảnh tải lên với tỷ lệ khung hình cố định (Thumbnail 4:3 và Banner 24:9).
    - Tính năng kéo thả Reorder để sắp xếp thứ tự danh mục hoặc context học thuật (Academic Contexts).
    - Trạng thái phản hồi trực quan khi người dùng nằm trong danh sách chờ (Waitlist) hoặc đăng ký thành công lấy vé QR code.
    - Đảm bảo tổng số mục kiểm tra vượt quá 40 mục và các mục phải cực kỳ cụ thể để kỹ sư test có thể đánh giá Pass/Fail dễ dàng.
    ```

---

## 3. Giải Trình Bổ Sung Đóng Góp Từ Con Người (Human Review Analysis)

> [!IMPORTANT]
> Giải trình chi tiết lý do tại sao AI bỏ sót một số mục kiểm tra quan trọng và cách con người rà soát bổ sung.

Mặc dù AI tạo ra khung checklist rất tốt, nhóm đã phát hiện ra AI thường bỏ sót các điểm kiểm thử có tính chất **ngữ cảnh thực tế cao** hoặc **quy trình nghiệp vụ đặc thù của EMS**. Dưới đây là phân tích chi tiết:

1.  **Lỗi kiểm tra tỷ lệ ảnh (Aspect Ratio Validation):**
    *   *AI bỏ sót vì:* AI thường chỉ đưa ra các quy tắc chung như "kiểm tra ảnh tải lên thành công" hay "kiểm tra dung lượng file".
    *   *Con người bổ sung:* Thêm mục kiểm tra tính năng hiển thị ảnh Thumbnail (4:3) và Banner (24:9) không bị méo lệch tỉ lệ trên các kích thước màn hình khác nhau.
2.  **Trạng thái kéo thả Reorder (Drag & Drop states):**
    *   *AI bỏ sót vì:* AI không hiểu sâu về cách thức tương tác kéo thả cần có phản hồi thị giác (visual feedback) thế nào.
    *   *Con người bổ sung:* Thêm chi tiết khi kéo thả, dòng được chọn phải mờ đi (opacity-50), các nút thao tác khác tạm thời bị khóa để tránh xung đột hành động.
3.  **Hệ thống đa ngôn ngữ EN/VI lưu trữ trạng thái (i18n state persistence):**
    *   *AI bỏ sót vì:* AI coi đa ngôn ngữ là việc dịch text thuần túy.
    *   *Con người bổ sung:* Thêm mục kiểm tra trạng thái ngôn ngữ được lưu lại kể cả khi người dùng tải lại trang hoặc điều hướng sang trang khác.
4.  **Tích hợp vé Barcode/QR Code:**
    *   *AI bỏ sót vì:* Đây là tính năng nghiệp vụ đặc thù của kịch bản B (Participant ticket).
    *   *Con người bổ sung:* Thêm mục kiểm tra chất lượng hiển thị mã QR/Barcode (không bị mờ, quét được bằng camera điện thoại thông thường) và trạng thái hiển thị vé thay đổi tương ứng khi được phê duyệt/hủy.
