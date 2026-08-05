# AI Audit Report & AI Critique - Individual Deliverable

> Tài liệu bắt buộc khai báo minh bạch quá trình sử dụng trí tuệ nhân tạo (AI) hỗ trợ làm bài tập, bao gồm Nhật ký sử dụng AI (AI Audit Log) và Báo cáo sử dụng AI (AI Audit Report).

---

## I. AI AUDIT LOG (NHẬT KÝ SỬ DỤNG AI)

Mỗi phiên tương tác với AI hỗ trợ thực hiện bài tập lớn được ghi lại đầy đủ dưới đây theo thứ tự thời gian.

## Phân tích yêu cầu và cấu trúc thư mục

### Promt 1:

- **Công cụ AI sử dụng:** Gemini 3.5 Flash (Medium) (Antigravity IDE)
- **Ngày giờ tương tác:** 15:53 25/07/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  đây là toàn bộ yêu cầu của bài tập lần này. Tôi sẽ thực hiện phần B, screen 1,2,3 (có thể 4 nếu còn thời gian). Hãy lên 1 phiên bản mô tả chi tiết toàn bộ những gì tôi cần phải làm, các file cần có, ứng với từng file cho biết có bao nhiêu phần, bao nhiêu mục, từng bước phải làm gì. Tất cả xuất ra 1 file guiding.md giúp tôi
  ```

- **Kết quả phản hồi của AI (Output):**
  ```text
  AI đã đọc và phân tích 3 file PDF yêu cầu đề bài trong thư mục làm việc, sau đó tạo thành công file [guiding.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/guiding.md) dài 281 dòng chứa toàn bộ hướng dẫn phân công công việc chi tiết, cấu trúc các file deliverables, và các bước thực thi từ chuẩn bị dữ liệu cho đến đóng gói nộp bài.
  ```

### Promt 2:

- **Công cụ AI sử dụng:** Gemini 3.5 Flash (Medium) (Antigravity IDE)
- **Ngày giờ tương tác:** 16:08 25/07/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  ok, bây giờ hãy dựa vào file này, tạo ra cho tôi toàn bộ các file cùng folder cần thiết, mỗi file đều cấu trúc sẵn khung sườn. File commit thì bỏ qua. File AI_Audit_Report, phần Audit_Log ở phía trên chèn lập tức mục đầu tiên: ## Phân tích yêu cầu và cấu trúc thư mục cùng với 2 promt (1 đã hỏi và 1 là promt hiện tại) với đầy đủ thông tin vào luôn
  ```

- **Kết quả phản hồi của AI (Output):**
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

- **Công cụ AI sử dụng:** Gemini 3.5 Flash (Medium) (Antigravity IDE)
- **Ngày giờ tương tác:** 16:21 26/07/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  [shared_gui_checklist.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/shared_gui_checklist.md) [main_report.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md) cập nhật lại bảng checklist mới trong main report ứng với phần checklist chung của nhóm tôi
  ```

- **Kết quả phản hồi của AI (Output):**
  ```text
  Tôi đã cập nhật thành công bảng kết quả thực thi checklist GUI trong báo cáo chính main_report.md để đồng bộ hoàn toàn với bảng checklist chung 48 mục mới nhất của nhóm bạn tại shared_gui_checklist.md. Các thay đổi đã thực hiện trong main_report.md:
  Cập nhật cấu trúc bảng thành 7 cột (ID Checklist, Khía Cạnh, Tiêu Chí Kiểm Tra, Screen 1, Screen 2, Screen 3, Ghi Chú Chi Tiết Lỗi / Link Minh Chứng) - loại bỏ Screen B4 (vé) ra khỏi các cột chạy test chính để khớp với lựa chọn 3 màn hình của bạn.
  Thay thế toàn bộ nội dung tiêu chí kiểm tra bằng mô tả chi tiết, rõ ràng của 48 mục kiểm thử tương đương (thay vì các dòng mô tả chung chung trước đó).
  Đồng bộ các cập nhật và bổ sung đặc thù của EMS (tỷ lệ ảnh responsive, vô hiệu hóa nút khi kéo thả reorder, chất lượng mã QR và phòng tránh double-click submit).
  Bây giờ cấu trúc báo cáo của bạn đã hoàn toàn sẵn sàng cho việc điền kết quả đánh giá Pass/Fail thực tế sau khi chạy test!
  ```

### Promt 2:

- **Công cụ AI sử dụng:** Gemini 3.5 Flash (Medium) (Antigravity IDE)
- **Ngày giờ tương tác:** 17:33 26/07/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  ok, tôi đã chạy test xong cho phần IA-01 cho screen B1. Toàn bộ nội dung nằm trong file [run_check.txt](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/run_check.txt) . Bây giờ hãy điền tương ứng vào trong Bảng checklist trong [main_report.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md) 12 test case tương ứng nhé. Đồng thời điền các bug tương ứng vào file [bug_usability_findings_log.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/bug_usability_findings_log.md)
  ```

- **Kết quả phản hồi của AI (Output):**
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

- **Công cụ AI sử dụng:** Gemini 3.5 Flash (Medium) (Antigravity IDE)
- **Ngày giờ tương tác:** 22:03 26/07/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  [main_report.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md) [run_check.txt](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/run_check.txt) [bug_usability_findings_log.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/bug_usability_findings_log.md) tôi đã hoàn thành việc test cho screen B1. Bây giờ hãy hoàn thành GUI Checklist cho B1 trong main report (khong đụng vào file shared_gui_checklist). đồng thời điền tiếp các bug vào file bug_usability giúp tôi.
  ```

- **Kết quả phản hồi của AI (Output):**
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

- **Công cụ AI sử dụng:** Gemini 3.5 Flash (Medium) (Antigravity IDE)
- **Ngày giờ tương tác:** 10:59 27/07/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  [main_report.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md) [run_check.txt](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/run_check.txt) [bug_usability_findings_log.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/bug_usability_findings_log.md) tôi đã hoàn thành việc test cho screen B2. Bây giờ hãy dựa vào bảng checklist tôi đã hoàn thành cho B1 để tạo GUI Checklist cho B2 (Tạo mới 1 bảng checklist mới với cột screen điền là B2 ngay phía dưới dòng ### Màn hình B2 #### Bảng Kết Quả Chạy Checklist GUI) trong main report (không đụng vào file shared_gui_checklist). đồng thời điền tiếp các bug vào file bug_usability giúp tôi.
  ```

- **Kết quả phản hồi của AI (Output):**
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

### Promt 5:

- **Công cụ AI sử dụng:** Gemini 3.5 Flash (Medium) (Antigravity IDE)
- **Ngày giờ tương tác:** 15:21 27/07/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  [main_report.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md) [run_check.txt](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/run_check.txt) [bug_usability_findings_log.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/bug_usability_findings_log.md) tôi đã hoàn thành việc test cho screen B3. Bây giờ hãy dựa vào bảng checklist tôi đã hoàn thành cho B1 để tạo GUI Checklist cho B3 (Tạo mới 1 bảng checklist mới với cột screen điền là B3 ngay phía dưới dòng ### Màn hình B3 #### Bảng Kết Quả Chạy Checklist GUI) trong main report (không đụng vào file shared_gui_checklist). đồng thời điền tiếp các bug vào file bug_usability giúp tôi.
  ```

- **Kết quả phản hồi của AI (Output):**
  ```text
  Tôi đã hoàn thành toàn bộ công việc kiểm thử GUI Checklist cho Screen B3:
  Tạo bảng GUI Checklist mới cho Màn hình B3:
  Đã chèn bảng checklist riêng biệt cho B3 ngay bên dưới mục ### Màn hình B3 trong file main_report.md.
  Cập nhật đầy đủ kết quả kiểm thử (Pass/Fail/NA) và đường dẫn minh chứng lỗi cho cả 48 test case (từ IA-01 đến IA-04) dựa theo kết quả trong file run_check.txt.
  Cập nhật danh sách lỗi tổng hợp:
  Đã bổ sung 6 bug phát hiện trên Screen B3 vào file bug_usability_findings_log.md bao gồm:
  BUG-B3-01: Tên và mô tả vai trò (role) không dịch sang Tiếng Anh (EN).
  BUG-B3-02: Không hiển thị thông báo Toast xác nhận khi bấm "Đăng ký tham gia".
  BUG-B3-03: Hiển thị sai trạng thái vai trò đã đăng ký thành công (0/1) khi reload trang.
  BUG-B3-04: Không xuất hiện chấm đỏ / thông báo ứng dụng khi gửi yêu cầu đăng ký.
  BUG-B3-05: Giao diện không tự động cập nhật (Real-time update) khi được Admin duyệt (phải F5).
  BUG-B3-06: Không có thông báo/cảnh báo ngắt kết nối mạng Internet ở trang B3.
  Giữ nguyên file nhóm: File shared_gui_checklist.md hoàn toàn không bị đụng đến.
  ```

### Promt 6:

- **Công cụ AI sử dụng:** Gemini 3.5 Flash (Medium) (Antigravity IDE)
- **Ngày giờ tương tác:** 09:44 28/07/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  ok, bấy giờ ta bắt đầu bước sang task 2. Hãy cho tôi biết mình cần phải làm gì? thực hiện trên các file nào nhé. Yêu cầu đề là:
  [guiding.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/support/guiding.md) [main_report.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md) [observation_notes.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/observation_notes.md) [sus_responses.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/sus_responses.md) [task_scenario.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/task_scenario.md) .
  Hãy chỉ trả lời, đừng sửa file gì hết nhé
  ```

- **Kết quả phản hồi của AI (Output):**

  ```text
  Dựa vào yêu cầu đề bài và các file hiện có của bạn, để hoàn thành **Task 2 (User Testing with 5 Real Users → Usability Report)**, chúng ta cần thực hiện các bước theo quy trình như sau:
  ### 1. Mục tiêu của Task 2
  Mục tiêu là khảo sát trải nghiệm thực tế của người dùng khi sử dụng hệ thống, thay vì chỉ đánh giá chủ quan. Quá trình này bao gồm:
  *   Thiết kế kịch bản (Task Scenario).
  *   Thu thập dữ liệu từ 5 người dùng thực tế (ngoài nhóm học phần).
  *   Đánh giá định lượng (SUS/UEQ-S) và định tính (Observation, Open-ended questions).
  *   Phân tích và tổng hợp thành báo cáo (Usability Report).
  ### 2. Các File Cần Thực Hiện Và Mục Đích
  Dưới đây là vai trò của từng file trong Task 2 và hành động cần thực hiện:
  | File | Vai Trò Trong Task 2 |
  |---|---|
  | **[guiding.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/support/guiding.md)** | Hướng dẫn khung và yêu cầu của bài Task 2. Cần đọc kỹ để nắm rõ quy trình làm.
  | **[main_report.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md)** | Báo cáo tổng thể (main report). Sẽ cần tạo thêm các mục mới trong báo cáo này để trình bày kết quả User Testing (Phase 3: Collect, analyse & report).
  | **[observation_notes.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/observation_notes.md)** | Nơi ghi nhận chi tiết quan sát từ 5 phiên thử nghiệm. Cần phải tạo mới (hoặc mở rộng nếu có) để lưu nhật ký quan sát.
  | **[sus_responses.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/sus_responses.md)** | Nơi tổng hợp câu trả lời từ thang đo SUS (System Usability Scale) của 5 người dùng.
  | **[task_scenario.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/task_scenario.md)** | Nơi định nghĩa kịch bản kiểm thử (Phase 1) và có thể ghi nhận kết quả phản hồi liên quan đến kịch bản.
  ### 3. Tóm Tắt Các Bước Cần Làm
  #### **Phase 1 — Design & prepare**
  1.  **Thiết kế kịch bản:** Xác định rõ mục tiêu người dùng cần đạt được (ví dụ: đăng ký sự kiện thành công).
  2.  **Xây dựng bộ câu hỏi:** Chuẩn bị câu hỏi SUS và các câu probe (mở rộng).
  3.  **Tuyển người dùng:** Tìm và liên hệ 5 người dùng thực tế (ngoài lớp).
  4.  **Pilot test:** Chạy thử với 1 người để hoàn thiện kịch bản.
  #### **Phase 2 — Run the 5 sessions**
  Thực hiện ghi hình (screen recording) và ghi chú lại:
  *   Thời gian thực hiện.
  *   Số lỗi hoặc sự do dự gặp phải.
  *   Đánh giá SUS.
  #### **Phase 3 — Collect, analyse & report**
  1.  **Tính toán chỉ số:** Tính SUS score trung bình, tỷ lệ thành công.
  2.  **Phân tích vấn đề:** Nhóm các lỗi gặp phải và xếp hạng mức độ nghiêm trọng.
  3.  **Lập báo cáo:** Cập nhật nội dung vào `main_report.md` và điền đầy đủ thông tin vào các file chứng cứ (Observation Notes, SUS Responses, Task Scenario).

  ```

### Promt 7:

- **Công cụ AI sử dụng:** Gemini 3.5 Flash (Medium) (Antigravity IDE)
- **Ngày giờ tương tác:** 10:22 28/07/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  ok, tuy nhiên để đem đi test thì tôi không thể cho họ coi file này được. Cần 1 file test_request.md riêng để cho họ xem. Bạn hãy làm cho tôi file đó nhé. Nội dung sẽ là các yêu cầu theo bước mà người dùng cần thực hiện trong buổi test. Thêm trực tiếp vào folder user_testing_evidence
  ```

- **Kết quả phản hồi của AI (Output):**
  ```text
  Tôi đã tạo thành công file user_testing_evidence/test_request.md dành riêng để cho 5 người dùng xem trực tiếp trong các buổi test.
  📄 Nội dung file test_request.md được thiết kế gọn gàng & thân thiện:
  Lời chào & Nguyên tắc ứng xử:
  Giải thích rõ: "Đang test trang web, KHÔNG test bạn".
  Đề nghị người dùng phương pháp Think Aloud (Nói ra suy nghĩ).
  Kịch bản Nhiệm vụ (6 bước):
  Đăng nhập tài khoản lưu sẵn.
  Tìm kiếm sự kiện USING AI AGENT CONVERSATION.
  Xem thông tin chi tiết (lịch trình, địa điểm, diễn giả).
  Đăng ký vai trò chính Sinh viên (Student) & vai trò phụ Khách tham quan (Visitor).
  Chờ Admin duyệt (khoảng 1 phút).
  Mở mã QR vé cá nhân để sẵn sàng check-in.
  Lời cảm ơn & Nhắc điền khảo sát ngắn (SUS): Hướng dẫn bước hoàn thành bài test.
  ```

### Promt 8:

- **Công cụ AI sử dụng:** Gemini 3.6 Flash (High) (Antigravity IDE)
- **Ngày giờ tương tác:** 10:25 28/07/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  ok. Bây giờ hãy giúp tôi hoàn thiện hết các phần liên quan còn lại nhé:
  Bạn sẽ làm việc trên 4 file chính nằm trong dự án của bạn:
  user_testing_evidence/task_scenario.md: Chứa kịch bản giao diện cho người dùng (Goal-oriented) và 4 câu hỏi thăm dò (Probe Questions).
  user_testing_evidence/observation_notes.md: Ghi chép nhật ký quan sát thô của 5 người dùng (thời gian, sự khựng lại/hesitations, câu nói/bộc lộ cảm xúc).
  user_testing_evidence/sus_responses.md: Ghi nhận điểm khảo sát 10 câu hỏi System Usability Scale (SUS) và công thức tính điểm SUS của 5 người dùng.
  main_report.md: (Mục PHẦN 3: BÁO CÁO USABILITY TESTING): Nơi bạn tổng hợp báo cáo chính thức gồm: Bảng người tham gia, Bảng chỉ số Usability (Metrics), Các phát hiện Usability (Findings) và Đề xuất cải tiến.
  hãy thiết kế trước các tiêu chí để có thể điền ngay khi có dữ liệu thôi.
  ```

- **Kết quả phản hồi của AI (Output):**
  ```text
  Tôi đã hoàn thiện toàn bộ khung dữ liệu, mẫu biểu và công thức tính toán trên cả 4 file chính của Task 2 để bạn có thể điền số liệu ngay lập tức sau các buổi test với người dùng:
  📑 TÓM TẮT CÁC CẢI TIẾN TRÊN CÁC FILE:
  user_testing_evidence/task_scenario.md:
  Đã hoàn thiện cả Phần kịch bản mục tiêu cho người dùng và luồng E2E chi tiết (Giai đoạn 1 đến Giai đoạn 4) với tên sự kiện thực tế USING AI AGENT CONVERSATION.
  Tích hợp sẵn 4 câu hỏi thăm dò (Probe Questions) về Tính rõ ràng (Clarity), Khắc phục lỗi (Error Recovery), Tốc độ (Speed) và Độ tin tưởng (Trust).
  user_testing_evidence/observation_notes.md:
  Xây dựng sẵn khung ghi chép nhật ký quan sát cho cả 5 người dùng (User 1 đến User 5).
  Phân chia sẵn cấu trúc: Nhật ký thời gian (Timeline log theo từng mốc giây), Phát ngôn cảm xúc (Think Aloud Quotes) và Phần trả lời 4 câu hỏi thăm dò.
  user_testing_evidence/sus_responses.md:
  Cung cấp đầy đủ 10 câu hỏi SUS chuẩn hóa (Song ngữ EN/VI).
  Tích hợp Công thức tính điểm SUS chuẩn hóa:
  Câu lẻ (Q1, Q3, Q5, Q7, Q9): $\text{Điểm quy đổi} = \text{Điểm} - 1$
  Câu chẵn (Q2, Q4, Q6, Q8, Q10): $\text{Điểm quy đổi} = 5 - \text{Điểm}$
  $\text{Điểm SUS} = \text{Tổng điểm quy đổi} \times 2.5$
  Có bảng thang đo xếp loại UX chuẩn ngành (> 80.3: Grade A, > 68: Good, < 51: Grade F).
  main_report.md (Mục Phần 3: Báo Cáo Usability Testing):
  Tóm tắt kịch bản nhiệm vụ định hướng mục tiêu.
  Bảng thông tin 5 người tham gia thử nghiệm (đã che 4 số giữa SĐT/Email theo quy định bảo mật).
  Bảng tổng hợp chỉ số Usability Metrics (Tỷ lệ hoàn thành %, Thời gian trung bình, Số lỗi do dự, Điểm SUS trung bình).
  Khung trình bày các Phát hiện Usability (Findings) kèm mức độ nghiêm trọng (Severity 0-4), hình ảnh minh chứng và Đề xuất cải tiến.
  ```

### Promt 9:

- **Công cụ AI sử dụng:** Gemini 3.6 Flash (High) (Antigravity IDE)
- **Ngày giờ tương tác:** 10:30 28/07/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  ok, dù sao bây giờ tôi cũng ko thể hoàn thành task 2 ngay lập tức được. Ta tạm để đó và xem thử trong task 3 tôi cần phải làm gì nhé. [2026.HW03.GUI%20Usability%20EMS_En.pdf](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/hw_request/2026.HW03.GUI%20Usability%20EMS_En.pdf) [guiding.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/support/guiding.md) [main_report.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md)
  ```

- **Kết quả phản hồi của AI (Output):**
  ```text
  TỔNG QUAN VỀ TASK 3
  Mục tiêu của Task 3 là kiểm thử khả năng hiển thị (Layout, Font, Alignment, Responsiveness) và hoạt động của 3 màn hình (B1, B2, B3) trên các môi trường thiết bị, hệ điều hành và trình duyệt khác nhau.
  📋 YÊU CẦU BẮT BUỘC VỀ ĐỘ PHỦ (COVERAGE REQUIREMENTS)
  Đề bài yêu cầu bạn phải xây dựng một Ma trận tương thích bao phủ 3 chiều:
  3 Hệ điều hành (OS): Windows, macOS, Android (hoặc iOS).
  5 Trình duyệt (Browsers): Chrome, Firefox, Safari, Edge, Opera.
  3 Loại thiết bị (Device Classes): Desktop (Máy tính bàn/Laptop), Tablet (Máy tính bảng), Phone (Điện thoại di động).
  💡 Quy tắc phủ tối thiểu (Minimal Coverage Rule):
  Bạn không cần chạy hết cả $3 \times 5 \times 3 = 45$ trường hợp. Tuy nhiên, danh sách mẫu test của bạn phải đảm bảo:
  Mỗi Hệ điều hành xuất hiện ít nhất 1 lần.
  Mỗi Trình duyệt xuất hiện ít nhất 1 lần.
  Mỗi Loại thiết bị xuất hiện ít nhất 1 lần.
  Áp dụng kiểm thử trên cả 3 màn hình B1, B2, B3.
  🚨 QUY ĐỊNH CHỐNG GIẢ MẠO ẢNH (ANTI-AI-CHEAT REQUIREMENT)
  Chụp minh chứng: Ảnh chụp màn hình từ công cụ giả lập/thiết bị thật (ví dụ: dùng dùng thử BrowserStack / LambdaTest, Chrome DevTools Responsive Mode, hoặc thiết bị thật).
  Bắt buộc có Watermark/Overlay MSSV: Trên mỗi bức ảnh chụp màn hình tương thích, bạn bắt buộc phải có lớp chữ chèn (Overlay text) hiển thị MSSV/Email sinh viên của bạn (Ví dụ: MSSV: 23127125 hoặc 23127125@student.hcmus.edu.vn) nằm cạnh thanh địa chỉ trình duyệt chứa URL hệ thống EMS ngrok.
  Thư mục lưu ảnh: Lưu tất cả ảnh ma trận vào thư mục cross_platform_screenshots/ hoặc images/cross_platform_screenshots/.
  📁 CÁC FILE CẦN THAO TÁC Ở TASK 3
  main_report.md
  (Mục PHẦN 4: BÁO CÁO ĐA NỀN TẢNG):
  Điền Bảng ma trận tương thích cho 3 màn hình B1, B2, B3.
  Đánh giá khả năng co giãn (Responsiveness) và sự khác biệt hiển thị giữa các trình duyệt.
  bug_usability_findings_log.md
  & Google Form:
  Nếu phát hiện lỗi hiển thị/layout bị vỡ trên môi trường nào (ví dụ Safari di động bị vỡ carousel, Firefox bị tràn chữ), bạn log thêm bug đó vào file log lỗi và submit Google Form.
  ```

### Promt 10:

- **Công cụ AI sử dụng:** Gemini 3.6 Flash (High) (Antigravity IDE)
- **Ngày giờ tương tác:** 20:19 28/07/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  hãy tiến hành xây dựng ma trận cho hợp lý đi, sử dụng tối đa window nếu có thể. Màn hình điện thoại thì dùng android
  ```

- **Kết quả phản hồi của AI (Output):**
  ```text
  Tôi đã xây dựng hoàn chỉnh và tối ưu hóa Phần 4: Báo Cáo Đa Nền Tảng (Task 3) trong file main_report.md theo đúng yêu cầu của bạn:
  Tận dụng tối đa Windows 11: Chạy 4 trình duyệt phổ biến nhất trên Windows 11 (Chrome, Edge, Firefox, Opera).
  Điện thoại & Máy tính bảng: Sử dụng Android 14 trên Phone & Tablet theo đúng yêu cầu của bạn.
  Đáp ứng đủ Safari & macOS: Bổ sung 1 mẫu test macOS (Sonoma) + Apple Safari để thỏa mãn đủ tiêu chí 5 Browsers & 3 OS của đề bài.
  ```

### Promt 11:

- **Công cụ AI sử dụng:** Gemini 3.6 Flash (High) (Antigravity IDE)
- **Ngày giờ tương tác:** 10:48 30/07/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  Có vẻ đối với phần ma trận thì mỗi màn hình phải có 1 screen. hãy chỉnh lại thành 3 ma trận cho 3 screen nhé. format tên ảnh sẽ là: images/cross_platform_screenshots/windows_chrome_desktop_B1.png và tương ứng với từng điều kiện và từng screen. [main_report.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md)
  ```

- **Kết quả phản hồi của AI (Output):**
  ```text
  Tôi đã tách và cập nhật hoàn chỉnh 3 Bảng Ma Trận Tương Thích độc lập cho 3 Màn hình (B1, B2, B3) trong file main_report.md theo đúng yêu cầu:
  📊 CẤU TRÚC MA TRẬN ĐÃ TÁCH:
  Màn hình B1 (Home / Events Listing):
  Link ảnh minh chứng: images/cross_platform_screenshots/<dieu_kien>_B1.png
  Màn hình B2 (Event Detail Page):
  Link ảnh minh chứng: images/cross_platform_screenshots/<dieu_kien>_B2.png
  Màn hình B3 (Registration Form):
  Link ảnh minh chứng: images/cross_platform_screenshots/<dieu_kien>_B3.png
  ```

### Promt 12:

- **Công cụ AI sử dụng:** Gemini 3.6 Flash (High) (Antigravity IDE)
- **Ngày giờ tương tác:** 15:03 01/08/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  tôi tính tạo gg form cho 10 câu hỏi điểm số và 4 câu trả lời ngắn để import link cho người dùng khảo sát cho dễ, tôi nên làm thế nào. [sus_responses.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/sus_responses.md) [task_scenario.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/task_scenario.md)
  ```

- **Kết quả phản hồi của AI (Output):**
  ```text
  🛠️ HƯỚNG DẪN TẠO GOOGLE FORM TỪNG BƯỚC
  Bạn truy cập forms.google.com $\rightarrow$ Tạo Biểu mẫu trống mới (Blank Form) và điền thông tin theo các phần sau:
  📌 PHẦN 1: TIÊU ĐỀ & THÔNG TIN DỰ ÁN
  Tiêu đề biểu mẫu (Form Title): Khảo sát Trải nghiệm Người dùng (Usability Survey) - Hệ thống EMS
  Mô tả biểu mẫu (Description):
  "Cảm ơn bạn đã tham gia buổi thử nghiệm hệ thống EMS. Xin vui lòng dành 2 phút điền vào phiếu khảo sát bên dưới để giúp nhóm đánh giá và cải thiện trải nghiệm giao diện hệ thống. Mọi câu trả lời đều mang lại giá trị rất lớn cho bài tập."
  📌 PHẦN 2: THÔNG TIN NGƯỜI THAM GIA (1 Câu)
  Câu hỏi 1: Họ và tên hoặc Email/SĐT của bạn
  Loại câu hỏi: Trả lời ngắn (Short answer)
  Mục đích: Để bạn dễ dàng ánh xạ câu trả lời với User 1, User 2, User 3, User 4, User 5 trong file observation_notes.md.
  📌 PHẦN 3: 10 CÂU HỎI ĐÁNH GIÁ SUS (System Usability Scale)
  TIP
  Cấu hình loại câu hỏi chung cho cả 10 câu:
  Chọn loại câu hỏi: Thang đo tuyến tính (Linear scale)
  Giá trị: Từ 1 đến 5
  Nhãn 1: Rất không đồng ý (Strongly Disagree)
  Nhãn 5: Rất đồng ý (Strongly Agree)
  Bật cờ: Bắt buộc (Required)
  Copy-paste 10 câu hỏi sau vào từng câu trong Form:
  Q1: Tôi nghĩ rằng tôi sẽ thích sử dụng hệ thống này thường xuyên.
  Q2: Tôi thấy hệ thống này phức tạp một cách không cần thiết.
  Q3: Tôi nghĩ hệ thống này dễ sử dụng.
  Q4: Tôi nghĩ rằng tôi cần sự hỗ trợ của một kỹ thuật viên để có thể sử dụng hệ thống này.
  Q5: Tôi thấy các chức năng trong hệ thống này được tích hợp rất tốt.
  Q6: Tôi nghĩ rằng có quá nhiều sự bất nhất trong hệ thống này.
  Q7: Tôi tưởng tượng rằng hầu hết mọi người sẽ học cách sử dụng hệ thống này rất nhanh.
  Q8: Tôi thấy hệ thống rất cồng kềnh/khó sử dụng.
  Q9: Tôi cảm thấy rất tự tin khi sử dụng hệ thống.
  Q10: Tôi cần phải học hỏi nhiều thứ trước khi có thể bắt đầu sử dụng hệ thống này.
  📌 PHẦN 4: 4 CÂU HỎI THĂM DÒ MỞ RỘNG (Probe Questions)
  Cấu hình loại câu hỏi chung cho 4 câu này:
  Chọn loại câu hỏi: Đoạn văn (Paragraph) hoặc Trả lời ngắn (Short answer)
  Câu hỏi 1 (Tính rõ ràng - Clarity):
  Bạn thấy các thông tin về sự kiện (lịch trình, vai trò, số chỗ) trên trang web có dễ tìm và dễ hiểu không? Có chi tiết nào khiến bạn bối rối không?
  Câu hỏi 2 (Khắc phục lỗi - Error Recovery):
  Trong quá trình điền form hay tìm kiếm sự kiện, nếu thao tác sai hoặc thiếu thông tin, bạn có nhận biết được lỗi ngay không và hệ thống hỗ trợ bạn sửa thế nào?
  Câu hỏi 3 (Tốc độ & Tính liên tục - Speed & Flow):
  Bạn đánh giá thế nào về tốc độ phản hồi của trang web khi chuyển từ tìm kiếm sự kiện -> xem chi tiết -> đăng ký -> nhận vé QR?
  Câu hỏi 4 (Độ tin tưởng - Trust):
  Bạn có cảm thấy tin tưởng và an tâm khi nhập thông tin cá nhân cũng như nhận vé QR điện tử từ hệ thống này không?
  ```

### Promt 13:

- **Công cụ AI sử dụng:** Gemini 3.6 Flash (High) (Antigravity IDE)
- **Ngày giờ tương tác:** 10:07 03/08/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  [guiding.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/support/guiding.md) [2026.HW03.GUI%20Usability%20EMS_En.pdf](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/hw_request/2026.HW03.GUI%20Usability%20EMS_En.pdf) [2026.HW03.GUI%20Usability%20EMS_En.pdf](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/hw_request/2026.HW03.GUI%20Usability%20EMS_En.pdf) hãy rà soát lại thật kĩ phần agent_skills và cho tôi biết chính xác phần agent skill này muốn tôi làm gì? đầu vào là gì? đầu ra là gì? gồm các files nào, nội dung ra sao?
  ```

- **Kết quả phản hồi của AI (Output):**
  ```text
  1. PHẦN AGENT SKILL LÀ GÌ? MỤC ĐÍCH ĐỂ LÀM GÌ?
  Bản chất: Đây là Phần làm thêm Nâng cao / Tùy chọn (Advanced Deliverable - Chiếm 10% tổng số điểm bài tập).
  Mục đích: Viết một đoạn mã script tự động hóa (Automation Script / Agent Skill) bằng các công cụ kiểm thử như Playwright, Puppeteer, Selenium hoặc Cypress để tự động hóa các thao tác lặp đi lặp lại trên hệ thống EMS.
  Ví dụ ứng dụng thực tế:
  Tự động mở trình duyệt $\rightarrow$ co giãn kích thước màn hình theo Desktop/Phone/Tablet $\rightarrow$ Chụp ảnh lưu vào thư mục cross_platform_screenshots/.
  Tự động điền dữ liệu test biên vào Form đăng ký B3 và kiểm tra thông báo lỗi.
  📥 2. ĐẦU VÀO (INPUTS)
  Địa chỉ trang web SUT: Link ngrok EMS (https://promoter-starboard-prude.ngrok-free.dev/).
  Kịch bản tự động hóa: Các màn hình (B1, B2, B3) và các thao tác cần tự động (Click, Scroll, Resize, Screenshot, Fill form).
  Thư viện chạy: Node.js + Playwright / Puppeteer.
  📤 3. ĐẦU RA (OUTPUTS)
  Mã nguồn tự động hóa: File script .js hoặc .ts nằm trong thư mục agent_skills/.
  Kết quả đầu ra: Các tệp ảnh chụp màn hình tự động hoặc log kết quả kiểm thử trên Terminal.
  Báo cáo mô tả & Video Demo (skills_demo.md): File Markdown giải thích công nghệ + Đường link Video YouTube quay lại màn hình khi chạy script tự động.
  ```

### Promt 14:

- **Công cụ AI sử dụng:** Gemini 3.6 Flash (High) (Antigravity IDE)
- **Ngày giờ tương tác:** 10:52 03/08/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  tôi muốn bạn tạo cho tôi 1 bản hoàn chỉnh bao gồm:
  * 1 file script testing_screen với toàn bộ các thao tác cần thiết trên màn hình để test, chụp lại các bug và lấy dữ liệu điền được vào gui_checklist (sử dụng puppeteer hay cái /browser có sẵn của antigravity, bạn tôi bảo xài cái /browser chụp ngon hơn pupperteer)
  * 1 file script testing_browser_screen truy cập vào từng browser trên desktop: opera, chrome, edge và firefox để test và chụp màn hình minh chứng từng màn hình yêu cầu (ví dụ màn hình B1, B2, B3 thì chụp mỗi browser 3 màn hình) lấy dữ liệu điền được vào main_report (sử dụng cái /browser có sẵn của antigravity, bạn tôi bảo xài cái /browser chụp ngon hơn pupperteer)
  * 1 file gui_testing.md làm chuẩn, trong đó chứa toàn bộ các cấu trúc mà AI sẽ phải thực hiện, điều phối và cho ra kết quả, cụ thể:
  - Nhận file shared_gui_checklist.md làm chuẩn đầu vào để vẽ bảng 1A cho toàn bộ các màn hình.
  - Nhận file hoặc đặc tả text về scenerio và các màn hình từ user.
  --Trả về các file:
  - File main_report theo đúng cấu trúc của file main report hiện tại, (bạn có thể lấy chính format hiện tại của file main_report hiện tại để ép AI sinh ra format y chang)
  + Tạo ra các bảng phần 1A dựa trên file gui_checklist nhận vào cho từng screen.
  + Chạy file script testing_screen cho phần 1B cho từng màn hình đầu vào (ví dụ có 3 trang B1, B2, B3 thì chạy để test) và điền vào bảng gui_checklist của từng màn hình với status và note đầy đủ, nếu có bug thì nhớ kèm đường dẫn tới ảnh bug và đường dẫn tới file bug_report.md tương ứng.
  + Phần 2. tạo ra kịch bản tương ứng cho scenerio và các màn hình nhận vào, kèm với các cấu trúc thông tin người dùng có sẵn để tiện cho việc điền và triển khai folder user_testing_evidence phía sau.
  + Phần 3. tạo ra các matrix tương ứng (copy format và toàn bộ matrix trong main_report mà tôi sẽ đính kèm) cho từng màn hình. sau đó chạy script testing_browser_screen để điền sẵn 4 browser với desktop windows thông dụng.
  - File bug_report.md để ghi lại các bug đã tìm thấy trong quá trình chạy test, format y hệt file bug_report tôi sẽ gửi kèm cho bạn.
  ok, đây là yêu cầu của tôi, bạn hãy tạo các file tương ứng trong folder agent_skills nhé, các file tham khảo gồm: [main_report.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md) [bug_usability_findings_log.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/bug_usability_findings_log.md) [test_request.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/test_request.md) [task_scenario.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/task_scenario.md) [shared_gui_checklist.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/shared_gui_checklist.md) [observation_notes.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/observation_notes.md) [sus_responses.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/sus_responses.md)
  ```

- **Kết quả phản hồi của AI (Output):**
  ```text
  1. File
  agent_skills/testing_screen.js
  Chức năng: Script tự động hóa kiểm thử các màn hình SUT (B1, B2, B3) với trình duyệt trực quan.
  Thao tác tự động:
  Tự động điều hướng qua Màn hình B1 (Home/List), B2 (Detail), B3 (Registration Form).
  Thực thi kiểm tra các chỉ số IA-01 (Grid, Language), IA-02 (Form validation), IA-03 (Nav), IA-04 (Toast notification khi Save/Mất kết nối mạng).
  Phát hiện lỗi bất thường và tự động chụp ảnh lưu vào images/bug_screenshots/.
  Xuất kết quả kiểm thử dạng dữ liệu JSON để tích hợp vào báo cáo.
  2. File
  agent_skills/testing_browser_screen.js
  Chức năng: Script tự động mở các trình duyệt Desktop (Google Chrome, Microsoft Edge, Mozilla Firefox, Opera).
  Thao tác tự động:
  Lần lượt mở từng trình duyệt, truy cập 3 màn hình B1, B2, B3.
  Tự động chèn lớp phủ Watermark MSSV (MSSV: 23127125 - 23127125@student.hcmus.edu.vn) màu đỏ nổi bật ở góc phải màn hình trước khi chụp ảnh.
  Tự động chụp 12 file ảnh tương thích đặt tên đúng chuẩn (windows_chrome_desktop_B1.png, windows_edge_desktop_B1.png, ...) vào images/cross_platform_screenshots/.
  3. File
  agent_skills/gui_testing.md
  Chức năng: File quy chuẩn Master Orchestration dành cho AI Agent.
  Quy trình điều phối AI:
  Đầu vào: Đọc file shared_gui_checklist.md làm chuẩn để sinh Phần 1A cho toàn bộ màn hình.
  Nhận đặc tả kịch bản Scenario & các màn hình mục tiêu từ người dùng.
  Khởi chạy testing_screen.js để test và điền kết quả Phần 1B (Pass/Fail/NA) kèm đường dẫn tới ảnh bug images/bug_screenshots/... và link tới bug_usability_findings_log.md.
  Khởi chạy testing_browser_screen.js để tự động điền ma trận 4 trình duyệt Desktop trong Phần 4.
  Ép định dạng đầu ra chuẩn 100% theo đúng cấu trúc của  main_report.md và bug_usability_findings_log.md (chuẩn 9 cột).
  4. File
  agent_skills/skills_demo.md
  (Cập nhật hoàn thiện)
  Chức năng: File báo cáo tổng hợp mô tả công nghệ, mục tiêu tự động hóa, code snippet tiêu biểu và khung chèn Link Video YouTube demo lấy trọn 10% điểm cộng của bài tập.
  ```

### Promt 15:

- **Công cụ AI sử dụng:** Gemini 3.6 Flash (High) (Antigravity IDE)
- **Ngày giờ tương tác:** 15:13 04/08/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  trong quá trình thực hiện task 2 và task 3 các user và tôi đã phát hiện ra được thêm các bug sau và có chụp ảnh trong folder bug_screenshots. Tôi muốn bạn cập nhật lại chúng vào trong file main_report.md và bug_usability_findings_log.md nhé, cụ thể như sau:
  - Task 2: 3 bug usability:
  + Screen_B2_Bug_Khong_Co_Thong_Tin_Dien_Gia.png : Không có mục riêng để hiển thị thông tin diễn giả, được phát hiện thông qua quá trình user test ở task 2. Độ quan trọng 1 vì không ảnh hưởng quá nhiều tới trải nghiệm.
  + Screen_B3_Bug_Khong_Co_Navigate_Nhanh_Sang_Trang_QR.png : Không có 1 button hay đường dẫn nhanh nào để mở trực tiếp sang trang QR hoặc trang "Hoạt động của tôi" (B4) nằm trong "Xem hồ sơ", làm thiếu tính mạch lạc và tiện dụng của trang. Độ quan trọng 2 vì là nguyên nhân khá quan trọng cho bug thứ 3 ngay dưới.
  + Screen_B4_QR_O_Vi_Tri_Kho_Tim.png : QR checkin quá khó tìm, như đánh đố người dùng. Từ screen B3 sau khi được admin chấp nhận đăng ký, người dùng không thể navigate trực tiếp mà phải chọn vào icon avatar, chọn "Xem hồ sơ" rồi vào trang hồ sơ cá nhân. Button để mở QR lại nằm cứng ở đầu và không nổi bật, không cuộn theo trang, rất nhiều user thậm chí vào được tới trang này vẫn không tìm ra được QR checkin. Độ quan trọng 3 (hoặc 4) vì gây sự khó chịu lớn cho người dùng.
  - Task 3: 1 bug giao diện:
  + Screen_B3_Bug_android_chrome_phone_4_columns.png : Khi lên android với màn hình nhỏ thì 4 cột thông tin của trang B3 cũng không resize lại khiến phần nội dung hiển thị được bị nhỏ và khó quan sát. Độ quan trọng 1.
  ```

- **Kết quả phản hồi của AI (Output):**
  ```text
  CÁC VỊ TRÍ ĐÃ CẬP NHẬT TRONG TỆP BÁO CÁO:
  bug_usability_findings_log.md:
  Đã bổ sung 4 dòng lỗi chuẩn 9 cột BUG-B2-05, BUG-B3-07, BUG-B4-01, BUG-B3-08 ở cuối bảng log lỗi.
  main_report.md:
  Phần 3 (Usability Findings & Recommendations): Cập nhật chi tiết 3 vấn đề Usability (BUG-B2-05, BUG-B3-07, BUG-B4-01) kèm mô tả hành vi người dùng, mức độ nghiêm trọng, hình ảnh minh chứng và đề xuất thiết kế cải tiến.
  Phần 4.1.C & 4.2.C (Ma trận & Lỗi tương thích nổi bật): Cập nhật trạng thái Fail cho ô Android Chrome Phone tại Màn hình B3 và trích dẫn lỗi responsive 4 cột BUG-B3-08.
  ```

### Promt 16:

- **Công cụ AI sử dụng:** Gemini 3.6 Flash (High) (Antigravity IDE)
- **Ngày giờ tương tác:** 19:52 04/08/2026
- **Câu lệnh đã hỏi (Prompt):**

  ```text
  tôi cần thêm 1 chỗ để nhập link youtube của vid phỏng vấn 5 người (cùng 1 vid) trong main_report và sus_response, hãy chuẩn bị sẵn cho tôi. Sau đó dò lại toàn bộ project hiện tại xem đã đáp ứng được bao nhiêu so với yêu cầu đề bài rồi, có cần chỉnh sửa hay bổ sung gì nữa hay không nhé. [guiding.md](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/support/guiding.md) [2026.HW03.GUI%20Usability%20EMS_En.pdf](file;file:///d%3A/STD/Y3/Y3S3/KiemThuPM/hw/hw3/hw_request/2026.HW03.GUI%20Usability%20EMS_En.pdf)
  ```

- **Kết quả phản hồi của AI (Output):**
  ```text
  Tôi đã bổ sung sẵn vị trí dán Link Video YouTube Phỏng vấn 5 người dùng vào tất cả các tệp báo cáo liên quan, đồng thời thực hiện dò soát toàn bộ dự án đối chiếu 100% với yêu cầu trong file đề bài hw_request/2026.HW03.GUI Usability EMS_En.pdf và support/guiding.md.
  ```

---

## II. AI AUDIT REPORT (BÁO CÁO KIỂM THỬ BỞI AI)

### Sản phẩm 1 (Artifact 1): Tạo lập cấu trúc định dạng chuẩn (Format Template) cho báo cáo `main_report.md`

- **(1) Prompt + Tool:**
  - **Tool:** Gemini 3.6 Flash (Antigravity IDE)
  - **Thời gian:** 25/07/2026 - 27/07/2026
  - **Prompt:** `Xây dựng khung cấu trúc định dạng Markdown chuẩn cho báo cáo main_report.md bám sát barem điểm và yêu cầu 5 phần chính của môn học.`
- **(2) AI output:** AI sinh ra bộ khung cấu trúc báo cáo 5 phần cực kỳ rõ ràng, đầy đủ các mục header, bảng checklist, kịch bản usability, ma trận đa trình duyệt và phụ lục công cụ tự động hóa.
- **(3) Kết luận:** HOÀN THIỆN (VALID)
- **(4) Lý do:** AI phát huy tối đa thế mạnh về định dạng cú pháp Markdown, cấu trúc tài liệu khoa học, đáp ứng 100% yêu cầu barem điểm của đề bài mà không bị hallucination.
- **(5) Chỉnh sửa:** Không cần sửa đổi cấu trúc khung. Giữ nguyên template và chỉ điền các số liệu kiểm thử thực tế vào các bảng.

### Sản phẩm 2 (Artifact 2): Phân tích kịch bản Usability Testing & chỉ số đo lường SUS cho 5 người dùng (Task 2)

- **(1) Prompt + Tool:**
  - **Tool:** Gemini 3.6 Flash (Antigravity IDE)
  - **Thời gian:** 28/07/2026 - 02/08/2026
  - **Prompt:** `Yêu cầu thiết kế kịch bản Usability Testing và tính toán chỉ số đo lường SUS cho 5 người dùng thực hiện nhiệm vụ đăng ký sự kiện.`
- **(2) AI output:** AI phân tích và gợi ý kịch bản test nhưng lại viết theo dạng chỉ dẫn từng nút bấm (Step-by-step UI instruction) thay vì kịch bản hướng tới mục tiêu (Goal-oriented task scenario). Ngoài ra, AI tự động bịa ra điểm số SUS ngẫu nhiên (như 85/100, 90/100) mà không dựa trên dữ liệu khảo sát thực tế.
- **(3) Kết luận:** CHƯA HOÀN THIỆN (INCOMPLETE) & KHÔNG HỢP LỆ (INVALID)
- **(4) Lý do:** AI áp dụng suy đoán lý thuyết rằng hệ thống hoạt động hoàn hảo thay vì phản ánh trải nghiệm bực bội thực tế của người dùng. Việc sinh dữ liệu (Arbitrary Data Generation) không bám vào thực địa khiến điểm SUS không phản ánh đúng các điểm đau như mã QR bị giấu sâu ở Hồ sơ cá nhân B4.
- **(5) Chỉnh sửa:** Chuyển kịch bản thành định dạng Goal-oriented. Cập nhật lại toàn bộ bảng số liệu metrics và điểm SUS tính toán chính xác từ phiếu khảo sát 10 câu của 5 người dùng thật, ghi nhận điểm SUS trung bình thực tế là 40.5/100 (Grade F - Awful UX).

### Sản phẩm 3 (Artifact 3): Thiết lập và thực thi Agent Skills tự động hóa chụp ma trận đa trình duyệt & kiểm thử GUI (Task 3 & Agent Skills)

- **(1) Prompt + Tool:**
  - **Tool:** Agent Skills Script (Node.js & Puppeteer-core)
  - **Thời gian:** 03/08/2026 - 04/08/2026
  - **Prompt:** `Kích hoạt Agent Skill với System Blueprint ép buộc AI dùng đúng định dạng Markdown, không hallucinate luồng SSO Microsoft 4 bước cũ và chạy luồng Đăng nhập Trực tiếp cho ma trận tương thích đa trình duyệt.`
- **(2) AI output:** Tạo ra tài liệu có định dạng cực kỳ chuẩn xác và xuất ma trận kết quả JSON. Tuy nhiên, AI mặc định khởi chạy toàn bộ 7 môi trường bằng engine Chromium giả lập thay vì kiểm tra tệp thực thi trình duyệt thực tế trên Windows, và bỏ qua việc xử lý các vị trí cuộn trang đặc thù của Form B3.
- **(3) Kết luận:** CHƯA HOÀN THIỆN (INCOMPLETE) & KHÔNG HỢP LỆ (INVALID)
- **(4) Lý do:** Mặc dù Agent Skill khắc phục hoàn toàn định dạng báo cáo, bản chất AI vẫn phân tích cục bộ. Sự thiếu nhận thức về môi trường hệ điều hành Windows dẫn đến việc AI không tự tìm đường dẫn file `.exe` của Google Chrome và Microsoft Edge thực tế.
- **(5) Chỉnh sửa:** Tôi trực tiếp bổ sung cơ chế quét đường dẫn binary `.exe` thực tế của Chrome và Edge trên Windows vào `testing_browser_screen.js`. Cấu trúc lại ma trận tương thích để ghi nhận trạng thái Pass cho Chrome/Edge và N/A cho các môi trường không cài đặt.

### Sản phẩm 4 (Artifact 4): Thực hiện Log Bug và điền kết quả kiểm thử vào `main_report.md` & `bug_usability_findings_log.md` từ dữ liệu thực tế (`run_check.txt`)

- **(1) Prompt + Tool:**
  - **Tool:** Gemini 3.6 Flash (Antigravity IDE)
  - **Thời gian:** 26/07/2026 - 04/08/2026
  - **Prompt:** `Đọc dữ liệu ghi chép chạy test thực tế (run_check.txt) do người dùng thực thi và tổng hợp toàn bộ danh sách bug chuẩn 9 cột cùng kết quả thực thi checklist vào main_report.md và bug_usability_findings_log.md.`
- **(2) AI output:** AI tổng hợp chính xác dữ liệu chạy test thực tế từ file ghi chép `run_check.txt` thành bảng kết quả checklist chi tiết cho các màn hình B1, B2, B3 và bảng log lỗi chuẩn 9 cột, tự động ánh xạ Heuristic IDs và chèn link Markdown dẫn tới ảnh minh chứng.
- **(3) Kết luận:** HOÀN THIỆN (VALID)
- **(4) Lý do:** AI phát huy hiệu quả tuyệt đối trong việc tự động hóa ánh xạ chuỗi, xử lý dữ liệu cấu trúc và định dạng bảng khi được cung cấp nguồn dữ liệu kiểm thử thực địa chính xác (Ground Truth từ `run_check.txt`).
- **(5) Chỉnh sửa:** Rà soát lại liên kết các tệp ảnh lỗi và bổ sung thêm các mã lỗi Usability phát sinh từ quá trình User Testing thực tế với 5 người dùng.

### Tổng kết và Kết luận

**1. Tỷ lệ chính xác của AI (AI Accuracy Ratio):**
Dựa trên các Artifacts trong quá trình thực thi HW03:

- **VALID:** ~50% (Sản phẩm 1: Tạo lập format template báo cáo main_report.md & Sản phẩm 4: Log bug và điền kết quả kiểm thử từ file run_check.txt).
- **INVALID:** ~15% (Ảo giác giả lập engine Chromium thay vì mở trình duyệt Windows thực tế và tự bịa điểm số SUS ngẫu nhiên).
- **INCOMPLETE:** ~35% (Kịch bản test ban đầu viết dạng chỉ dẫn từng nút bấm và bỏ sót nhận thức môi trường hệ điều hành Windows).

**2. Kết luận:**
Qua quá trình hợp tác và kiểm toán công cụ Gemini 3.6 Flash và Antigravity IDE, tôi rút ra nguyên tắc sử dụng AI trong công việc QA/QC như sau:

- **KHI NÀO NÊN DÙNG AI:** Sử dụng AI hiệu quả nhất cho các tác vụ tạo cấu trúc định dạng báo cáo (Sản phẩm 1) và xử lý/định dạng lại dữ liệu ghi chép kiểm thử thực tế từ người dùng (Sản phẩm 4), cũng như thiết lập các Agent Skill để tự động hóa các kịch bản chuẩn.
- **KHI NÀO KHÔNG NÊN DÙNG AI:** Không tin tưởng hoàn toàn vào khả năng tự sinh kịch bản hay tự bịa kết quả kiểm thử của AI mà không có dữ liệu thực địa (Ground Truth). Tuyệt đối không để AI tự quyết định dữ liệu điểm SUS hay tự giả lập môi trường đa trình duyệt mà không kiểm tra tệp thực thi thực tế trên OS. Sự kiểm soát thủ công (Human-in-the-loop) là bắt buộc.

---
