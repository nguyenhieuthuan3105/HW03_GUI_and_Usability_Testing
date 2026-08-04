# EMS GUI & Usability Testing - Individual Summary Report

> [!NOTE]
> File này chứa bảng tự đánh giá điểm và tóm tắt kết quả kiểm thử cá nhân đối với Kịch bản B (Scenario B).

## 1. Bảng Tự Đánh Giá Điểm (Self-Assessment Table)

| No. | Tiêu Chí Đánh Giá (Criteria) | Điểm Tối Đa | Điểm Tự Đánh Giá | Minh Chứng / Đường Dẫn File Nguồn |
|---|---|---|---|---|
| **1a** | **Task 1A — Shared checklist** (> 40 items, IA-01...IA-04) + reference sources + AI prompts (group) | 15 | 15 / 15 | [shared_gui_checklist.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/shared_gui_checklist.md)<br>[reference_sources_and_prompts.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/reference_sources_and_prompts.md) |
| **1b** | **Task 1B — Checklist execution** on ≥ 3 screens + bug reports (individual) | 15 | 15 / 15 | [main_report.md#phan-2-ket-qua-thuc-thi-checklist](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md#phan-2-ket-qua-thuc-thi-checklist)<br>[bug_usability_findings_log.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/bug_usability_findings_log.md) |
| **2** | **Task 2 — User testing** with 5 real users (scenario + 5 sessions + analysis -> Usability Report) | 25 | 25 / 25 | [main_report.md#phan-3-bao-cao-usability-testing](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md#phan-3-bao-cao-usability-testing)<br>Thư mục [user_testing_evidence/](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/user_testing_evidence/) |
| **3** | **Task 3 — Cross-Browser / Cross-Platform matrix** (3 OS × 5 browsers × 3 device classes) | 25 | 25 / 25 | [main_report.md#phan-4-bao-cao-da-nen-tang](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/main_report.md#phan-4-bao-cao-da-nen-tang)<br>Thư mục [cross_platform_screenshots/](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/cross_platform_screenshots/) |
| **4** | **Bug & Usability Findings submission** (Google Form) + aggregated log | 10 | 10 / 10 | [bug_usability_findings_log.md](file:///d:/STD/Y3/Y3S3/KiemThuPM/hw/hw3/bug_usability_findings_log.md) |
| **5** | **Agent Skills** (Mã nguồn tự động hóa + link video YouTube demo) | 10 | 10 / 10 | [agent_skills/skills_demo.md](agent_skills/skills_demo.md)<br>[agent_skills/gui_testing.md](agent_skills/gui_testing.md) |
| | **TỔNG CỘNG** | **100** | **100 / 100** | *(Cập nhật điểm tự đánh giá trước khi nén zip)* |


---

## 2. Tóm Tắt Kết Quả Kiểm Thử (Test Summary)

*   **Kịch bản cá nhân phụ trách:** Scenario B — User registers to attend an event (Người dùng đăng ký tham gia sự kiện).
*   **Các màn hình thực thi kiểm thử:**
    1.  **B1:** Home / events listing.
    2.  **B2:** Event detail page.
    3.  **B3:** Registration form.
    4.  **B4:** My Registrations / ticket (Đã thực hiện: Yes).
*   **Thống kê thực thi Checklist GUI:**
    *   Tổng số mục kiểm tra đã thực thi: 49 mục.
    *   Số mục Đạt (Passed): 32 mục.
    *   Số mục Không đạt (Failed): 17 mục.
*   **Thống kê lỗi (Bugs & Usability Issues):**
    *   Tổng số lỗi đã phát hiện: 21 lỗi.
    *   Số lỗi Bug giao diện/chức năng: 17 lỗi.
    *   Số lỗi Usability (trải nghiệm người dùng): 4 lỗi.
    *   Số lỗi đã gửi Google Form thành công: 21 lỗi (Đã đối chiếu khớp 100% với log lỗi cá nhân).
*   **Thông tin kiểm thử với người dùng (Usability Testing):**
    *   Số người dùng tham gia kiểm thử: 5 người (ngoài lớp học).
    *   Điểm SUS trung bình: **40.5 / 100** *(Grade F - Awful / Poor UX)*.
    *   Tỉ lệ hoàn thành nhiệm vụ trung bình (Completion Rate): **100%**.
    *   Số vấn đề Usability phát hiện qua quan sát: 3 vấn đề chính (`BUG-B2-05`, `BUG-B3-07`, `BUG-B4-01`).
*   **Kiểm thử đa nền tảng (Cross-Platform Matrix):**
    *   Tổng số ô (môi trường kết hợp) thực tế đã chạy test và chụp ảnh: 21 ô.
    *   Bao phủ: 3 Hệ điều hành (Windows, macOS, Android), 5 Trình duyệt (Chrome, Edge, Firefox, Opera, Safari), 3 Loại thiết bị (Desktop, Phone, Tablet).
*   **Sản phẩm nâng cao (Agent Skills):**
    *   Công cụ tự động hóa sử dụng: Node.js, Puppeteer-core (Native Windows Executables Automation).
    *   Link video YouTube demo: [Xem Video Demo trên YouTube](https://youtu.be/hBsj1-5z3SQ)

