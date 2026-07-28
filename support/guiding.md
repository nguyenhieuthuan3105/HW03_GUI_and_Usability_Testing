# HƯỚNG DẪN CHI TIẾT LÀM BÀI TẬP HW03 - EMS (GUI & USABILITY TESTING)
## DÀNH CHO KỊCH BẢN B (SCREEN B1, B2, B3 VÀ B4)

Tài liệu này được biên soạn chi tiết dựa trên các yêu cầu từ ba file:
1. `2026.HW03.GUI Usability EMS_En.pdf` (Yêu cầu bài tập)
2. `HW03_EMS_Intro_EN.pdf` (Slide giới thiệu và chấm điểm)
3. `Kịch-bản-E2E-Test-Flow-Luồng-Admin.pdf` (Kịch bản E2E kiểm thử Admin)

---

## TỔNG QUAN VỀ LỰA CHỌN CỦA BẠN
*   **Kịch bản đã chọn (Scenario B):** User registers to attend an event (Người dùng đăng ký tham gia sự kiện).
*   **Các màn hình thực hiện kiểm thử (Screens):**
    1.  **Screen 1 (B1):** Home / events listing (Trang chủ / Danh sách sự kiện - bao gồm carousel sự kiện nổi bật, danh mục, tìm kiếm/lọc).
    2.  **Screen 2 (B2):** Event detail page (Trang chi tiết sự kiện - bao gồm banner, lịch trình, nút đăng ký, thông báo hàng chờ/waitlist).
    3.  **Screen 3 (B3):** Registration form (Form đăng ký - bao gồm chọn vai trò, vai trò phụ, xác nhận thông tin).
    4.  **Screen 4 (B4 - Dự phòng/Khuyến khích làm nếu kịp):** My Registrations / ticket (Đăng ký của tôi / Vé - hiển thị trạng thái vé và mã vạch/QR).
*   **Hệ thống cần kiểm thử (SUT):** `https://promoter-starboard-prude.ngrok-free.dev/`
*   **Tài khoản người dùng:** Đăng ký tài khoản cá nhân mới (Student / Lecturer / Guest) qua luồng sign-up trên web. *Lưu ý: Không dùng chung tài khoản với các thành viên khác trong nhóm.*
*   **Tài khoản Admin (dùng để tạo dữ liệu test):** `admin@gmail.com` | Mật khẩu: `Admin@123`.

---

## PHẦN I: TỔNG HỢP CÁC FILE CẦN NỘP (DELIVERABLES)

Cấu trúc thư mục nộp bài của bạn phải chứa đầy đủ các file sau. Định dạng file nén cuối cùng: `<MSSV>_HW03_AI_GUIUsability_EMS_<SelfAssessedGrade>.zip` (Ví dụ: `21120000_HW03_AI_GUIUsability_EMS_095.zip`).

### A. Tài liệu Nhóm (Group-level Artifacts) - *Nộp 1 bản chung cho cả nhóm, nhưng mỗi cá nhân đều phải giữ 1 bản copy trong thư mục nộp*
1.  **`shared_gui_checklist.xlsx` hoặc `.md`**: File checklist GUI dùng chung của nhóm (> 40 mục kiểm thử).
2.  **`reference_sources_and_prompts.md`**: Danh sách nguồn tham khảo và các câu lệnh AI (prompts) được nhóm sử dụng để thiết kế checklist.

### B. Tài liệu Cá nhân (Individual Artifacts) - *Nén trong file .zip cá nhân*
3.  **`README.md`**: File tóm tắt kiểm thử và bảng tự đánh giá điểm (Self-assessment).
4.  **`main_report.md` (và bản xuất ra `main_report.pdf`)**: Báo cáo chính gồm mô tả kịch bản, lý do chọn màn hình, kết quả chạy checklist trên từng màn hình, báo cáo Usability Testing và báo cáo Cross-platform.
5.  **Thư mục `user_testing_evidence/`**: Chứa minh chứng kiểm thử với 5 người dùng (Kịch bản task, thông tin người dùng, ghi chú buổi test, điểm SUS/UEQ-S, bảng số liệu và link video quay màn hình nếu có).
6.  **`bug_usability_findings_log.xlsx` hoặc `.csv` / `.md`**: File nhật ký lỗi và đề xuất Usability đã tổng hợp (phải khớp hoàn toàn với Google Form đã submit).
7.  **Thư mục `cross_platform_screenshots/`**: Ảnh chụp màn hình tương thích trên các thiết bị, OS, trình duyệt khác nhau (bắt buộc có hình ảnh overlay MSSV của bạn).
8.  **`ai_audit_report.md` (và bản xuất ra `ai_audit_report.pdf`)**: Nhật ký sử dụng AI và bài viết tự sự phê phán AI (AI Critique).
9.  **`git_commit_log.txt`**: File log lịch sử Git cho thấy bạn commit qua từng bước thực hiện bài tập.
10. **Thư mục `agent_skills/`**: Mã nguồn Agent Skills được viết (nếu có) + file văn bản chứa link video demo chạy thử trên YouTube.

---

## PHẦN II: CHI TIẾT TỪNG FILE & HƯỚNG DẪN THỰC HIỆN BƯỚC-BY-BƯỚC

### 1. FILE `shared_gui_checklist` (Tài liệu nhóm - 15% số điểm)
*   **Hình thức:** File Excel (`xlsx`) hoặc Markdown (`.md`).
*   **Số lượng phần & mục bắt buộc:**
    *   Phải có **tối thiểu 40 items (mục kiểm tra)**.
    *   Phân chia đều vào **4 khía cạnh giao diện (Interface Aspects - IA)**:
        *   **IA-01: General UI standards** (Layout, căn lề, font chữ, màu sắc, tính nhất quán, đa ngôn ngữ EN/VI, trạng thái trống/đang tải).
        *   **IA-02: Forms** (Nhãn, validation, vị trí hiển thị lỗi, xử lý trường bắt buộc, upload ảnh/file, trình soạn thảo rich-text).
        *   **IA-03: Navigation** (Menu, breadcrumbs, tab, thanh bên sidebar, kéo thả đổi thứ tự reorder, nút quay lại/back, liên kết sâu deep links).
        *   **IA-04: Feedback / State** (Thông báo toasts, huy hiệu badges, hộp thoại xác nhận confirmation dialogs, thanh tiến trình progress bars, màu sắc trạng thái, cập nhật thời gian thực).
*   **Các bước thực hiện:**
    1.  Cả nhóm cùng thảo luận và sử dụng AI (ChatGPT/Claude/Gemini/Cursor) để draft ra danh sách checklist ban đầu dựa trên:
        *   10 Heuristics của Nielsen.
        *   6 Nguyên tắc thiết kế của Norman.
        *   8 Quy tắc vàng của Shneiderman.
    2.  **Rà soát thủ công (Human Review):** Nhóm bổ sung thêm các mục kiểm tra thực tế phù hợp với hệ thống EMS (Ví dụ: kiểm tra kéo thả cấu trúc danh mục, kiểm tra định dạng vé QR, kiểm tra upload ảnh tỉ lệ 4:3 và 24:9).
    3.  Lưu lại toàn bộ prompts đã hỏi AI và ghi chú các nguồn tài liệu đã tham khảo để đưa vào file tiếp theo.

### 2. FILE `reference_sources_and_prompts.md` (Tài liệu nhóm)
*   **Hình thức:** File Markdown.
*   **Cấu trúc file (Gồm 3 phần):**
    *   **Phần 1: Danh sách nguồn tài liệu tham khảo** (Tên sách, link bài viết, tài liệu môn học...).
    *   **Phần 2: Nhật ký Prompts AI** (Ghi lại chi tiết các câu lệnh dùng để gen và tinh chỉnh checklist).
    *   **Phần 3: Giải trình bổ sung (Crucial)**: Đối với các mục kiểm tra do thành viên nhóm tự bổ sung thêm ngoài output của AI, giải thích rõ **tại sao AI lại bỏ sót** mục đó (do hạn chế prompt, giới hạn của model hay do đặc thù riêng của EMS như đa ngôn ngữ EN/VI, phím tắt điều hướng...).

---

### 3. FILE `README.md` (Cá nhân - Tóm tắt kiểm thử & Tự đánh giá)
*   **Hình thức:** File Markdown.
*   **Cấu trúc file (Gồm 2 phần chính):**
    *   **Phần 1: Bảng tự chấm điểm (Self-Assessment Table)** dựa trên barem điểm của môn học:
        | No. | Criteria | Max Grade | Self-Assessed Grade | Ghi chú / Minh chứng |
        |---|---|---|---|---|
        | 1a | Task 1A - Shared checklist + Sources + Prompts | 15 | | *Nộp chung với nhóm* |
        | 1b | Task 1B - Checklist execution (>=3 screens) + Bug reports | 15 | | *Xem chi tiết tại main_report.md và bug log* |
        | 2 | Task 2 - User testing with 5 real users | 25 | | *Báo cáo tại main_report.md và thư mục user_testing_evidence* |
        | 3 | Task 3 - Cross-Browser / Cross-Platform matrix | 25 | | *Xem ma trận và ảnh chụp minh chứng* |
        | 4 | Task 4 - Bug & Usability Findings submission | 10 | | *Đã submit Form và tổng hợp file log* |
        | 5 | Agent Skills (nếu có làm) | 10 | | *Mã nguồn & Link video chạy thử* |
        | | **Tổng cộng** | **100** | | |
    *   **Phần 2: Tóm tắt kết quả kiểm thử (Test Summary):**
        *   Kịch bản đã chọn: Scenario B.
        *   Các màn hình đã test: B1, B2, B3 (và B4 nếu có).
        *   Thống kê checklist: Tổng số mục đã chạy | Số mục Đạt (Passed) | Số mục Không đạt (Failed).
        *   Tổng số bug phát hiện.
        *   Thông tin User Testing: Số người tham gia (5) | Số lỗi usability phát hiện phân theo mức độ nghiêm trọng (Severity 0-4).
        *   Cross-platform: Số lượng ô ma trận (môi trường máy) đã thực hiện kiểm thử thành công.
        *   Đường dẫn tới video demo Agent Skills (nếu có).

---

### 4. FILE `main_report.md` (Báo cáo chính cá nhân - Chiếm phần lớn điểm số)
*   **Hình thức:** File Markdown (sau đó xuất thêm 1 bản định dạng PDF để nộp song song).
*   **Cấu trúc file (Gồm 4 Phần lớn):**
    *   **PHẦN 1: GIỚI THIỆU PHẠM VI (Introduction & Scope Selection)**
        *   Mô tả chi tiết kịch bản B: Người dùng khám phá và đăng ký tham gia sự kiện.
        *   Liệt kê rõ các màn hình đã kiểm thử: B1, B2, B3 (và B4).
        *   Giải thích ngắn gọn lý do vì sao chọn các màn hình này (ví dụ: đây là luồng hành trình liên tục từ lúc tìm kiếm sự kiện -> xem chi tiết sự kiện -> điền form đăng ký -> nhận vé).
    *   **PHẦN 2: KẾT QUẢ THỰC THI CHECKLIST (Checklist Execution Results)**
        *   Xây dựng bảng kết quả chạy checklist cho từng màn hình B1, B2, B3 (và B4):
            | ID Checklist | Nội dung kiểm tra | IA Aspect | Screen B1 (Pass/Fail) | Screen B2 (Pass/Fail) | Screen B3 (Pass/Fail) | Ghi chú lỗi (Notes) / Link ảnh chụp |
            |---|---|---|---|---|---|---|
            | IA-01-01 | Giao diện căn lề nhất quán... | IA-01 | Pass | Pass | Fail | Nút Submit bị lệch dòng |
        *   *Lưu ý:* Đối với tất cả những mục đánh dấu **Fail**, bắt buộc phải ghi rõ lý do và chèn ảnh chụp màn hình minh chứng bị lỗi (nêu rõ hành vi không đạt chuẩn).
    *   **PHẦN 3: BÁO CÁO USABILITY TESTING (Usability Report - Task 2 - 25%)**
        *   *Mục 1: Kịch bản thử nghiệm (Task Scenario):* Viết một kịch bản hướng tới mục tiêu thực tế (Goal-oriented), tuyệt đối không viết kiểu chỉ dẫn từng nút bấm.
            *   *Ví dụ đúng:* "Bạn là sinh viên muốn đăng ký tham gia buổi Workshop AI vào thứ 7 tuần này. Hãy tìm kiếm sự kiện đó trên hệ thống, thực hiện đăng ký với vai trò là Sinh viên, chọn thêm vai trò phụ là Người hỗ trợ nếu có, và mở mã QR vé của bạn sau khi đăng ký thành công."
        *   *Mục 2: Bảng thông tin người tham gia (Participant Table):* Thông tin của 5 người dùng thật ngoài lớp học (đã ẩn 4 số giữa của số điện thoại/Zalo để bảo mật):
            | Tên viết tắt | Vai trò thực tế | Thông tin liên lạc (Zalo/SĐT/Email) | Trình độ công nghệ (Thấp/Trung bình/Cao) |
            |---|---|---|---|
            | Nguyễn V. A | Sinh viên | 0912***345 / anv@gmail.com | Trung bình |
        *   *Mục 3: Bảng chỉ số Usability (Metrics Table):*
            | Người dùng | Trạng thái hoàn thành (Success/Partial/Failed) | Thời gian hoàn thành (giây) | Số lần do dự / Thao tác sai | Điểm SUS hoặc UEQ-S | Ghi chú nhanh |
            |---|---|---|---|---|---|
            | User 1 | Success | 120s | 2 | 80 | Nhầm lẫn ở bước chọn vai trò phụ |
            | **Trung bình** | **X% Success** | **Y giây** | **Z lần** | **Score trung bình** | |
        *   *Mục 4: Phân tích phát hiện Usability (Usability Findings):* Nhóm các điểm đau (pain points) của người dùng thành các lỗi hệ thống, phân loại theo độ nghiêm trọng từ **0 (Không ảnh hưởng)** đến **4 (Thảm họa - chặn người dùng hoàn thành task)**. Đưa ra đề xuất cải tiến cho từng lỗi kèm screenshot.
    *   **PHẦN 5: BÁO CÁO ĐA NỀN TẢNG (Cross-Browser / Cross-Platform Report - Task 3 - 25%)**
        *   *Mục 1: Ma trận tương thích (Compatibility Matrix) cho mỗi màn hình:*
            Thiết lập bảng kết hợp 3 Hệ điều hành (Windows, macOS, Android/iOS) x 5 Trình duyệt (Chrome, Firefox, Safari, Edge, Opera) x 3 Loại thiết bị (Desktop, Tablet, Mobile).
            *Quy tắc phủ tối thiểu:* Bạn không cần chạy hết cả 45 trường hợp phối hợp, nhưng mỗi OS phải được test ít nhất 1 lần, mỗi Browser ít nhất 1 lần, và mỗi Device Class ít nhất 1 lần cho cả 3 màn hình.
            Ví dụ ma trận cho Screen B1:
            | Thiết bị (Device Class) | Hệ điều hành (OS) | Trình duyệt (Browser) | Kết quả (Pass/Fail) | Ghi chú lỗi hiển thị / Bố cục |
            |---|---|---|---|---|
            | Desktop | Windows 11 | Google Chrome | Pass | Mượt mà |
            | Mobile | iOS | Safari | Fail | Carousel bị vỡ khung hình, tràn viền |
            | Tablet | Android | Firefox | Pass | Hiển thị tốt |
        *   *Mục 2: Đánh giá tổng quan:* Nhận xét về khả năng đáp ứng (responsiveness) và các vấn đề vỡ khung hình (layout breakage) trên thiết bị di động hoặc các trình duyệt khác nhau.

---

### 5. THƯ MỤC `user_testing_evidence/` (Cá nhân - Minh chứng Usability Testing)
*   **Mục đích:** Cung cấp bằng chứng thực tế là bạn đã thực sự chạy test với 5 người dùng thật, chống gian lận AI.
*   **Các mục cần có trong thư mục này:**
    *   **`task_scenario.md`**: Bản mô tả kịch bản test chi tiết đã gửi cho người dùng.
    *   **`observation_notes.md`**: Bản ghi chép thô trong quá trình quan sát từng người dùng (User 1 đến User 5). Phải ghi lại cụ thể: họ gặp khó khăn ở giây thứ mấy, họ lầm bầm bực bội ở nút nào, họ bấm nhầm vào đâu.
    *   **`sus_responses.xlsx` hoặc `.pdf`**: Bản trả lời SUS/UEQ-S của 5 người dùng sau khi test xong (bảng khảo sát 10 câu hỏi SUS hoặc 8 câu UEQ-S).
    *   **Thư mục video (Khuyên dùng):** Nếu được, hãy quay lại màn hình (và giọng nói think-aloud) của các buổi test, tải lên Google Drive hoặc YouTube và chèn link vào file `README.md` hoặc báo cáo.

---

### 6. FILE `bug_usability_findings_log` (Cá nhân - Nhật ký lỗi tổng hợp - 10% số điểm)
*   **Hình thức:** File Excel (`xlsx`) hoặc CSV (`csv`) hoặc Markdown (`.md`).
*   **Cấu trúc bảng bắt buộc (Gồm 9 cột):**
    1.  **ID:** Mã định danh lỗi (ví dụ: `BUG-B-01`, `USAB-B-01`).
    2.  **Scenario/Screen:** Tên màn hình xảy ra lỗi (B1, B2, B3 hoặc B4).
    3.  **Type:** Phân loại lỗi (`Bug` - Lỗi chức năng/giao diện vỡ, hoặc `Usability` - Trải nghiệm người dùng kém).
    4.  **Description:** Mô tả chi tiết hành vi lỗi.
    5.  **Steps/Heuristic:** Các bước tái hiện lỗi (nếu là Bug) hoặc Heuristics bị vi phạm (nêu rõ số Heuristic vi phạm nếu là lỗi Usability).
    6.  **Severity:** Độ nghiêm trọng (thang điểm từ 0 đến 4).
    7.  **Suggested fix:** Đề xuất phương án sửa lỗi hoặc cải tiến trải nghiệm.
    8.  **Screenshot ref:** Tên file ảnh minh chứng lỗi tương ứng (ví dụ: `screenshots/bug_b1_carousel.png`).
    9.  **Form-submission timestamp:** Khoảng thời gian bạn gửi lỗi này lên Google Form (dùng để đối chiếu chéo).
*   **Các bước thực hiện:**
    1.  Mỗi khi tìm thấy một Bug hoặc một Usability Pain Point trong các Task 1, 2, 3:
        *   **Bước A:** Điền ngay vào Google Form chính thức: `https://forms.gle/CJQFQCAXcsDbXDMM9` (dùng email MSSV).
        *   **Bước B:** Ghi nhận thông tin lỗi đó vào file log này.
    2.  Đảm bảo số lượng và thông tin lỗi trong file log cá nhân này khớp 100% với dữ liệu bạn đã submit trên Google Form.

---

### 7. THƯ MỤC `cross_platform_screenshots/` (Cá nhân - Ảnh minh chứng đa nền tảng)
*   **Yêu cầu kỹ thuật chống gian lận (Crucial):**
    *   Mỗi bức ảnh chụp màn hình tương thích trong ma trận chạy test phải **có overlay MSSV của bạn** (Ví dụ: `MSSV: 21120000` hiển thị dạng watermark hoặc text chèn trực tiếp trên màn hình, nằm cạnh thanh địa chỉ chứa URL của EMS).
    *   Ảnh phải hiển thị rõ thông tin về: Trình duyệt đang dùng, Hệ điều hành và Thiết bị (nếu dùng các công cụ cloud như BrowserStack / LambdaTest, thông số này thường hiển thị ở thanh công cụ phía trên).
*   **Quy định đặt tên ảnh:** Nên đặt tên rõ ràng để dễ chấm điểm, ví dụ:
    *   `B1_Windows_Chrome_Desktop.png`
    *   `B2_iOS_Safari_Mobile.png`
    *   `B3_Android_Firefox_Tablet.png`

---

### 8. FILE `ai_audit_report.md` (Cá nhân - Nhật ký AI & Bài viết tự sự phê phán)
*   **Hình thức:** File Markdown.
*   **Cấu trúc file (Gồm 2 phần bắt buộc):**
    *   **PHẦN 1: NHẬT KÝ SỬ DỤNG AI (AI Audit Log - Appendix):**
        *   Nếu bạn sử dụng bất kỳ AI nào (ChatGPT, Claude, Gemini, Cursor) để làm checklist, viết báo cáo hoặc viết code Agent Skill, bạn phải khai báo:
            > "Tôi sử dụng các công cụ AI cho các tác vụ sau:"
        *   Với mỗi phiên tương tác với AI, ghi lại:
            1.  Tên công cụ AI.
            2.  Ngày giờ tương tác.
            3.  Prompt đầy đủ bạn đã dùng.
            4.  Phản hồi (Output) của AI (có thể tóm tắt nếu quá dài).
        *   Nếu không dùng AI cho bất kỳ phần nào (không khuyến khích vì đề bài là AI-first), bạn phải khai báo tường minh câu sau:
            > "Tôi không sử dụng bất kỳ sự trợ giúp nào từ AI trong bài tập này."
    *   **PHẦN 2: BÀI PHÊ PHÁN AI (AI Critique - 200 đến 300 từ):**
        *   Viết một đoạn văn ngắn đánh giá nghiêm túc về AI.
        *   Nội dung cần trả lời các ý: AI đã đưa ra thông tin sai lệch, phiến diện hoặc thiếu sót ở điểm nào trong quá trình làm bài? Tại sao AI lại không phát hiện ra lỗi giao diện thực tế của EMS? Bạn đã rút ra bài học hoặc nguyên tắc gì khi làm việc phối hợp với AI (Collaborate with AI) ở bài tập này?

---

### 9. FILE `git_commit_log.txt` (Cá nhân - Lịch sử Git)
*   **Hình thức:** File text thô chứa kết quả xuất ra từ lệnh `git log`.
*   **Quy định commit:**
    *   Bạn cần khởi tạo một git repository cục bộ cho phần bài làm của mình.
    *   Tạo commit mới cho **mỗi bước thực hiện**. Không commit gộp tất cả vào một lần duy nhất vào cuối buổi.
    *   *Các mốc commit gợi ý:*
        *   `Commit 1: Init repository and folder structure`
        *   `Commit 2: Group shared checklist design and prompts documentation`
        *   `Commit 3: Executed GUI checklist on Screen B1`
        *   `Commit 4: Executed GUI checklist on Screen B2`
        *   `Commit 5: Executed GUI checklist on Screen B3`
        *   `Commit 6: Logged bugs and usability findings from checklist execution`
        *   `Commit 7: Designed task scenario and prepared user testing protocol`
        *   `Commit 8: Conducted user testing sessions and analyzed metrics`
        *   `Commit 9: Completed cross-platform and cross-browser testing matrix`
        *   `Commit 10: Finalized main report and self-assessment README`
*   **Lệnh xuất file:** Chạy lệnh sau trong Terminal tại thư mục dự án để xuất file:
    `git log --oneline --graph --all > git_commit_log.txt`

---

### 10. THƯ MỤC `agent_skills/` (Cá nhân - Tùy chọn nâng cao - 10% số điểm)
*   **Mục đích:** Phát triển các đoạn code tự động hóa (Agent Skills) hỗ trợ thực thi checklist giao diện, đánh giá usability theo heuristic hoặc tự động chạy chụp ảnh ma trận tương thích.
*   **Cấu trúc thư mục:**
    *   Chứa mã nguồn các script tự động hóa (ví dụ sử dụng Playwright, Selenium, hoặc Puppeteer viết bằng JS/Python).
    *   File `skills_demo.md`: Mô tả tính năng của agent skill và bắt buộc kèm **đường link video YouTube demo** quá trình chạy tự động hóa từ đầu đến cuối trên một màn hình thực tế.

---

## PHẦN III: KẾ HOẠCH HÀNH TRÌNH TỪNG BƯỚC THỰC HIỆN

### BƯỚC 1: THIẾT LẬP DỮ LIỆU ĐỂ TEST (PRE-TESTING SETUP)
*   **Vấn đề:** Để test luồng đăng ký sự kiện của User (Scenario B), bạn cần phải có các sự kiện đang mở đăng ký trên hệ thống. Tuy nhiên dữ liệu ngrok có thể bị reset định kỳ.
*   **Hành động cần làm:**
    1. Đăng nhập tài khoản Admin (`admin@gmail.com` | `Admin@123`).
    2. Thực hiện theo **Giai đoạn 3 (Bước 4, 5, 6) trong file Kịch bản Admin E2E**:
       * Tạo ít nhất 2-3 sự kiện thử nghiệm mới.
       * Upload đầy đủ ảnh Thumbnail (tỷ lệ 4:3) và Banner (tỷ lệ 24:9).
       * Soạn nội dung mô tả sự kiện bằng trình soạn thảo rich text.
       * Định cấu hình thời gian hợp lệ (ngày mở đăng ký, ngày kết thúc).
       * Cấu hình đăng ký (cho phép Student/Lecturer/Guest đăng ký, bật Waitlist, cấu hình Max Slots giới hạn số lượng đăng ký để test trường hợp hàng chờ).
       * Chuyển trạng thái sự kiện sang **PUBLISHED**.
    3. Đăng xuất tài khoản Admin. Đăng ký một tài khoản User cá nhân mới thông qua luồng Sign-up để bắt đầu kiểm thử.

### BƯỚC 2: THIẾT KẾ CHECKLIST GUI CÙNG NHÓM (TASK 1A)
*   Phối hợp với nhóm để hoàn thành file `shared_gui_checklist` và tài liệu prompts. Lưu lại bản copy của 2 file này vào thư mục làm việc cá nhân của bạn.

### BƯỚC 3: KIỂM THỬ CHECKLIST TRÊN CÁC MÀN HÌNH B1, B2, B3, B4 (TASK 1B)
*   Đăng nhập tài khoản User cá nhân vừa tạo.
*   Truy cập lần lượt trang chủ (B1), trang chi tiết sự kiện đã tạo ở Bước 1 (B2), bấm nút đăng ký để mở form đăng ký (B3) và xem trang vé của tôi (B4 - nếu thực hiện).
*   Chạy từng mục trong checklist chung lên các màn hình này.
*   **Chụp ảnh và log lỗi ngay lập tức:**
    *   Mỗi khi phát hiện lỗi (GUI vỡ, lỗi font, không hỗ trợ đổi ngôn ngữ tức thì, form không báo đỏ khi thiếu trường bắt buộc...): Chụp ảnh màn hình lỗi, đặt tên ảnh và lưu lại.
    *   Truy cập Google Form để gửi báo cáo lỗi.
    *   Thêm dòng lỗi đó vào file `bug_usability_findings_log` cá nhân của bạn.

### BƯỚC 4: THỰC HIỆN USABILITY TESTING VỚI 5 NGƯỜI DÙNG THẬT (TASK 2)
*   **Thiết kế:** Viết kịch bản test thực tế, chuẩn bị bảng khảo sát SUS/UEQ-S bản cứng hoặc Google Form riêng để người dùng điền sau test.
*   **Tuyển người:** Nhờ 5 người bạn ngoài lớp học tham gia.
*   **Thực hiện session:**
    *   Yêu cầu người dùng vừa làm vừa nói ra suy nghĩ (Think Aloud).
    *   Ghi chép tỉ mỉ thời gian hoàn thành task của từng người và các điểm họ bị khựng lại hoặc thao tác sai.
    *   Yêu cầu họ làm khảo sát SUS/UEQ-S sau khi xong.
*   **Tổng hợp:** Tính điểm trung bình SUS/UEQ-S, tổng hợp bảng số liệu metrics, phân loại lỗi usability theo độ nghiêm trọng từ 0-4 và đưa vào báo cáo chính.

### BƯỚC 5: KIỂM THỬ ĐA NỀN TẢNG & TRÌNH DUYỆT (TASK 3)
*   Sử dụng tài khoản BrowserStack hoặc LambdaTest dùng thử (hoặc dùng các thiết bị thật có sẵn).
*   Chạy 3 màn hình (B1, B2, B3) trên các thiết bị, trình duyệt, OS khác nhau theo quy tắc phủ tối thiểu của ma trận tương thích.
*   **Chụp ảnh lưu chứng cứ:** Bắt buộc chèn overlay MSSV của bạn trên mỗi ảnh chụp màn hình tương thích.
*   Nếu phát hiện lỗi hiển thị hoặc vỡ layout trên trình duyệt/OS nào đó: Đưa lỗi này vào Google Form và file log lỗi.

### BƯỚC 6: HOÀN THIỆN TOÀN BỘ HỒ SƠ NỘP BÀI (COMPILATION)
*   Xuất file `git_commit_log.txt`.
*   Viết phần AI Audit Report và AI Critique.
*   Viết báo cáo chính `main_report.md` và xuất ra PDF.
*   Viết file `README.md` tự đánh giá điểm.
*   Thu gom tất cả các file vào đúng cấu trúc thư mục, kiểm tra tính đầy đủ của ảnh lỗi và ảnh đa nền tảng.
*   Nén thư mục thành file `.zip` theo đúng định dạng tên yêu cầu và nộp lên Moodle trước hạn chót.

---
> [!IMPORTANT]
> **Quy định quan trọng chống gian lận:**
> 1. Không bịa đặt kết quả kiểm thử đa nền tảng. Ảnh chụp màn hình tương thích phải hiển thị rõ MSSV của bạn bên cạnh URL của hệ thống EMS.
> 2. Không bịa đặt thông tin của 5 người dùng thử nghiệm Usability. Trợ giảng (TA) sẽ gọi điện ngẫu nhiên cho 2 trong số 5 người tham gia để xác thực thông tin. Nếu phát hiện giả mạo, phần Usability Testing (25% số điểm) sẽ bị nhận điểm 0.
> 3. Không sao chép các prompts AI hoặc nội dung báo cáo với các sinh viên khác ngoài nhóm của mình. Mọi hành vi sao chép prompts hoặc báo cáo đều dẫn đến điểm 0 cho cả hai bên.
