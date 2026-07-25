# Bug & Usability Findings Log - Aggregated Log

> [!NOTE]
> File nhật ký tổng hợp các lỗi giao diện (Bug) và vấn đề trải nghiệm người dùng (Usability Findings). 
> **Lưu ý:** Các lỗi ghi ở đây phải khớp hoàn toàn 100% với các thông tin bạn đã gửi trên Google Form của môn học.

## Bảng Nhật Ký Lỗi Tổng Hợp (9 Cột Bắt Buộc)

| ID | Scenario/Screen | Type (Bug \| Usability) | Description (Mô tả chi tiết lỗi) | Steps/Heuristic (Các bước tái hiện hoặc Heuristic vi phạm) | Severity (0-4) | Suggested Fix (Đề xuất sửa đổi) | Screenshot Ref (Đường dẫn ảnh lỗi) | Form-Submission Timestamp (Thời gian nộp biểu mẫu) |
|---|---|---|---|---|---|---|---|---|
| **BUG-B1-01** | Screen B1 | Bug | Carousel của sự kiện nổi bật bị vỡ khung khi chuyển sang ngôn ngữ tiếng Anh (EN). | 1. Đăng nhập tài khoản User.<br>2. Ở trang chủ B1, click đổi ngôn ngữ sang EN trên header.<br>3. Quan sát các tiêu đề dài trong carousel bị tràn viền và che khuất nút trượt. | 3 | Set css property `text-overflow: ellipsis` hoặc giảm kích thước chữ tiêu đề trên các thiết bị di động. | `cross_platform_screenshots/fail_b1_en_carousel.png` | 2026-07-25 16:30:00 |
| **USAB-B2-01** | Screen B2 | Usability | Nút đăng ký (Register Button) bị ẩn dưới chân trang, người dùng khó phát hiện. | Vi phạm Heuristic #6: Recognition rather than recall. Người dùng phải cuộn xuống rất sâu mới thấy nút hành động chính. | 2 | Thiết kế nút "Register" ở dạng Sticky Button cố định ở chân màn hình điện thoại khi cuộn trang. | `cross_platform_screenshots/usab_b2_register_sticky.png` | 2026-07-25 16:35:00 |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

---

## Phân loại Mức độ Nghiêm trọng (Severity Guidelines):
*   **0 (Không có):** Vấn đề nhỏ, không ảnh hưởng đến thẩm mỹ hay thao tác.
*   **1 (Thấp):** Lỗi mỹ thuật nhẹ, không cản trở người dùng (ví dụ: căn lề lệch vài pixel).
*   **2 (Trung bình):** Người dùng có thể bối rối hoặc mất thời gian, nhưng vẫn hoàn thành được tác vụ (ví dụ: nút bấm khó thấy).
*   **3 (Cao):** Người dùng gặp khó khăn lớn hoặc không thể hoàn thành tác vụ nếu không có sự trợ giúp (ví dụ: nút bấm bị đơ, validation sai logic chặn lưu form).
*   **4 (Thảm họa):** Hệ thống crash, mất dữ liệu, hoặc chặn đứng hoàn toàn luồng đăng ký của người dùng.
