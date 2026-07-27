# AI Audit Report & AI Critique - Individual Deliverable

> [!NOTE]
> Tài liệu bắt buộc khai báo minh bạch quá trình sử dụng trí tuệ nhân tạo (AI) hỗ trợ làm bài tập, bao gồm Nhật ký sử dụng AI (AI Audit Log) và Đánh giá phản biện AI (AI Critique).

---

## I. AI AUDIT LOG (NHẬT KÝ SỬ DỤNG AI)

Mỗi phiên tương tác với AI hỗ trợ thực hiện bài tập lớn được ghi lại đầy đủ dưới đây theo thứ tự thời gian.

## Phân tích yêu cầu và cấu trúc thư mục

### Promt 1:
*   **Công cụ AI sử dụng:** Gemini 3.5 Flash (Medium) (Antigravity IDE)
*   **Ngày giờ tương tác:** 15:53 25/07/2026
*   **Câu lệnh đã hỏi (Prompt):**
    ```text
    đây là toàn bộ yêu cầu của bài tập lần này. Tôi sẽ thực hiện phần B, screen 1,2,3 (có thể 4 nếu còn thời gian). Hãy lên 1 phiên bản mô tả chi tiết toàn bộ những gì tôi cần phải làm, các file cần có, ứng với từng file cho biết có bao nhiêu phần, bao nhiêu mục, từng bước phải làm gì. Tất cả xuất ra 1 file guiding.md giúp tôi
    ```

*   **Kết quả phản hồi của AI (Output):** 
    ```text
    AI đã đọc và phân tích 3 file PDF yêu cầu đề bài trong thư mục làm việc, sau đó tạo thành công file [guiding.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/guiding.md) dài 281 dòng chứa toàn bộ hướng dẫn phân công công việc chi tiết, cấu trúc các file deliverables, và các bước thực thi từ chuẩn bị dữ liệu cho đến đóng gói nộp bài.
    ```

### Promt 2:
*   **Công cụ AI sử dụng:** Gemini 3.5 Flash (Medium) (Antigravity IDE)
*   **Ngày giờ tương tác:** 16:08 25/07/2026
*   **Câu lệnh đã hỏi (Prompt):**
    ```text
    ok, bây giờ hãy dựa vào file này, tạo ra cho tôi toàn bộ các file cùng folder cần thiết, mỗi file đều cấu trúc sẵn khung sườn. File commit thì bỏ qua. File AI_Audit_Report, phần Audit_Log ở phía trên chèn lập tức mục đầu tiên: ## Phân tích yêu cầu và cấu trúc thư mục cùng với 2 promt (1 đã hỏi và 1 là promt hiện tại) với đầy đủ thông tin vào luôn
    ```

*   **Kết quả phản hồi của AI (Output):** 
    ```text
    AI đã tự động tạo lập toàn bộ các file khung sườn trong dự án (ngoại trừ file commit) bao gồm:
    *   [shared_gui_checklist.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/shared_gui_checklist.md) (Checklist GUI hơn 40 mục)
    *   [reference_sources_and_prompts.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/reference_sources_and_prompts.md) (Nguồn tham khảo và prompts nhóm)
    *   [README.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/README.md) (Bảng tự đánh giá và tóm tắt kiểm thử)
    *   [main_report.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md) (Khung báo cáo chính)
    *   Thư mục [user_testing_evidence/](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/) chứa [task_scenario.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/task_scenario.md), [observation_notes.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/observation_notes.md), và [sus_responses.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/sus_responses.md).
    *   [bug_usability_findings_log.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/bug_usability_findings_log.md) (Bảng nhật ký lỗi tổng hợp)
    *   Thư mục [cross_platform_screenshots/](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/cross_platform_screenshots/) khởi tạo với file `.gitkeep`.
    *   [ai_audit_report.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/ai_audit_report.md) (File báo cáo nhật ký AI hiện tại).
    *   Thư mục [agent_skills/](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/agent_skills/) với [skills_demo.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/agent_skills/skills_demo.md) (Mẫu mô tả tự động hóa).
    ```

## Checklist GUI và Usability

### Promt 1:
*   **Công cụ AI sử dụng:** Gemini 3.5 Flash (Medium) (Antigravity IDE)
*   **Ngày giờ tương tác:** 16:21 26/07/2026
*   **Câu lệnh đã hỏi (Prompt):**
    ```text
    [shared_gui_checklist.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/shared_gui_checklist.md) [main_report.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md) cập nhật lại bảng checklist mới trong main report ứng với phần checklist chung của nhóm tôi
    ```

*   **Kết quả phản hồi của AI (Output):** 
    ```text
    Tôi đã cập nhật thành công bảng kết quả thực thi checklist GUI trong báo cáo chính main_report.md để đồng bộ hoàn toàn với bảng checklist chung 48 mục mới nhất của nhóm bạn tại shared_gui_checklist.md. Các thay đổi đã thực hiện trong main_report.md:
    Cập nhật cấu trúc bảng thành 7 cột (ID Checklist, Khía Cạnh, Tiêu Chí Kiểm Tra, Screen 1, Screen 2, Screen 3, Ghi Chú Chi Tiết Lỗi / Link Minh Chứng) - loại bỏ Screen B4 (vé) ra khỏi các cột chạy test chính để khớp với lựa chọn 3 màn hình của bạn.
    Thay thế toàn bộ nội dung tiêu chí kiểm tra bằng mô tả chi tiết, rõ ràng của 48 mục kiểm thử tương đương (thay vì các dòng mô tả chung chung trước đó).
    Đồng bộ các cập nhật và bổ sung đặc thù của EMS (tỷ lệ ảnh responsive, vô hiệu hóa nút khi kéo thả reorder, chất lượng mã QR và phòng tránh double-click submit).
    Bây giờ cấu trúc báo cáo của bạn đã hoàn toàn sẵn sàng cho việc điền kết quả đánh giá Pass/Fail thực tế sau khi chạy test!
    ```

### Promt 2:
*   **Công cụ AI sử dụng:** Gemini 3.5 Flash (Medium) (Antigravity IDE)
*   **Ngày giờ tương tác:** 17:33 26/07/2026
*   **Câu lệnh đã hỏi (Prompt):**
    ```text
    ok, tôi đã chạy test xong cho phần IA-01 cho screen B1. Toàn bộ nội dung nằm trong file [run_check.txt](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/run_check.txt) . Bây giờ hãy điền tương ứng vào trong Bảng checklist trong [main_report.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md) 12 test case tương ứng nhé. Đồng thời điền các bug tương ứng vào file [bug_usability_findings_log.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/bug_usability_findings_log.md)
    ```

*   **Kết quả phản hồi của AI (Output):** 
    ```text
    Tôi đã thực hiện điền thông tin chạy kiểm thử IA-01 của Screen B1 từ file run_check.txt vào các tài liệu tương ứng. Cụ thể các thay đổi gồm: Cập nhật bảng checklist trong main_report.md:
    Điền trạng thái kiểm thử (Pass hoặc Fail) cho cả 12 test case tương ứng của khía cạnh IA-01 đối với cột Screen B1. Tại các mục Fail (IA-01-04 và IA-01-12), tôi đã chèn đường dẫn tham chiếu đến mã lỗi và liên kết ảnh chụp màn hình lỗi tương ứng trong thư mục cross_platform_screenshots/. 
    Tạo bản ghi lỗi chi tiết trong bug_usability_findings_log.md:
    Đã thêm hai bản ghi lỗi mới ở các dòng trống trong bảng nhật ký lỗi tổng hợp:
    BUG-B1-02: Lỗi không hỗ trợ dịch đa ngôn ngữ cho tiêu đề và nội dung mô tả của sự kiện khi chuyển đổi ngôn ngữ EN/VI (độ nghiêm trọng: 2).
    BUG-B1-03: Lỗi hiển thị cắt xén tỉ lệ ảnh gốc 24:9 xuống còn 4:3 ngoài trang danh sách gây mất mát thông tin quan trọng ở phần rìa ảnh (độ nghiêm trọng: 2).
    Các file đã được cập nhật thành công và lưu lại an toàn. Bạn có thể mở trực tiếp các file main_report.md và bug_usability_findings_log.md để kiểm tra lại giao diện bảng.
    ```

### Promt 3:
*   **Công cụ AI sử dụng:** Gemini 3.5 Flash (Medium) (Antigravity IDE)
*   **Ngày giờ tương tác:** 22:03 26/07/2026
*   **Câu lệnh đã hỏi (Prompt):**
    ```text
    [main_report.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md) [run_check.txt](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/run_check.txt) [bug_usability_findings_log.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/bug_usability_findings_log.md) tôi đã hoàn thành việc test cho screen B1. Bây giờ hãy hoàn thành GUI Checklist cho B1 trong main report (khong đụng vào file shared_gui_checklist). đồng thời điền tiếp các bug vào file bug_usability giúp tôi.
    ```

*   **Kết quả phản hồi của AI (Output):** 
    ```text
    Tôi đã hoàn thành toàn bộ yêu cầu của bạn:
    GUI Checklist ở Screen B1: Đã điền đầy đủ kết quả kiểm thử (Pass/Fail/NA) và mô tả lỗi liên kết tương ứng cho toàn bộ 48 test case (từ IA-01 đến IA-04) của màn hình B1 vào trong bảng checklist chính của main_report.md.
    Không đụng vào file nhóm: Giữ nguyên trạng thái của file shared_gui_checklist đúng như bạn mong muốn.
    Cập nhật danh sách lỗi: Đã thêm đầy đủ 5 lỗi mới phát hiện ở Screen B1 vào file bug_usability_findings_log.md bao gồm:
    BUG-B1-03: Bộ lọc khoảng ngày không kiểm tra tính hợp lệ.
    BUG-B1-04: URL không đổi/không đồng bộ khi chuyển bộ lọc/tab.
    BUG-B1-05: Lỗi thiếu Toast khi click "Lưu" sự kiện.
    BUG-B1-06: Lỗi không lưu được trạng thái sự kiện khi click "Lưu".
    BUG-B1-07: Lỗi không có cảnh báo/thông báo khi ngắt kết nối Internet (Offline).
    ```

### Promt 4:
*   **Công cụ AI sử dụng:** Gemini 3.5 Flash (Medium) (Antigravity IDE)
*   **Ngày giờ tương tác:** 10:59 27/07/2026
*   **Câu lệnh đã hỏi (Prompt):**
    ```text
    [main_report.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md) [run_check.txt](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/run_check.txt) [bug_usability_findings_log.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/bug_usability_findings_log.md) tôi đã hoàn thành việc test cho screen B2. Bây giờ hãy dựa vào bảng checklist tôi đã hoàn thành cho B1 để tạo GUI Checklist cho B2 (Tạo mới 1 bảng checklist mới với cột screen điền là B2 ngay phía dưới dòng ### Màn hình B2 #### Bảng Kết Quả Chạy Checklist GUI) trong main report (không đụng vào file shared_gui_checklist). đồng thời điền tiếp các bug vào file bug_usability giúp tôi.
    ```

*   **Kết quả phản hồi của AI (Output):** 
    ```text
    Tôi đã hoàn thành toàn bộ yêu cầu kiểm thử cho Screen B2: 
    Tạo bảng GUI Checklist mới cho Màn hình B2:
    Đã chèn một bảng checklist riêng biệt cho B2 ngay bên dưới mục ### Màn hình B2 trong file main_report.md.
    Đã điền đầy đủ kết quả kiểm thử (Pass/Fail/NA) và mô tả chi tiết lỗi kèm đường dẫn ảnh chụp minh chứng cho toàn bộ 48 tiêu chí dựa trên ghi nhận của bạn trong run_check.txt.
    Đã chuẩn bị sẵn phần khung ### Màn hình B3 để bạn dễ dàng làm tiếp màn hình tiếp theo.
    Cập nhật danh sách lỗi tổng hợp:
    Đã thêm 4 bug mới phát hiện ở Screen B2 vào file bug_usability_findings_log.md bao gồm:
    BUG-B2-01: Các phần chi tiết sự kiện không dịch sang tiếng Anh (EN).
    BUG-B2-02: Không hiển thị thông báo Toast xác nhận khi bấm "Lưu sự kiện".
    BUG-B2-03: Nút "Lưu sự kiện" đổi nhãn "Đã lưu" rồi tự động reset về "Lưu sự kiện".
    BUG-B2-04: Không có cảnh báo/thông báo khi ngắt kết nối mạng Internet ở trang B2.
    Giữ nguyên file nhóm: File shared_gui_checklist.md hoàn toàn không bị thay đổi.
    ```
---

## II. AI CRITIQUE (BÀI VIẾT PHÊ PHÁN AI - MANDATORY)
