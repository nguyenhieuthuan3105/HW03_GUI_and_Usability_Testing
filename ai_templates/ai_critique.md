# AI CRITIQUE

```text
Sau khi sử dụng Gemini 3.6 Flash và Antigravity IDE trong quá trình thực hiện bài tập HW03 - EMS GUI & Usability Testing, tôi nhận thấy rằng việc áp dụng AI mang lại hiệu quả rất cao ở các tác vụ tạo cấu trúc định dạng báo cáo chuẩn (như Sản phẩm 1) và tự động hóa xử lý dữ liệu kiểm thử thực tế từ người dùng (như Sản phẩm 4), nhưng cũng bộc lộ nhiều hạn chế và xuất hiện tình trạng hallucination khi yêu cầu AI tự sinh kịch bản kiểm thử độc lập.

Điểm mạnh nổi bật của AI là khả năng thiết lập cấu trúc tài liệu khoa học, chuẩn hóa bảng biểu Markdown và ánh xạ nhanh các chuỗi dữ liệu ghi chép thực địa (`run_check.txt`) sang danh mục Heuristics chuẩn 9 cột. Nhờ AI, việc tổng hợp báo cáo và đối chiếu các liên kết ảnh được thực hiện cực kỳ chính xác và tiết kiệm thời gian.

Tuy nhiên, điểm yếu lớn nhất của AI là xu hướng áp đặt kiến thức chung (general knowledge) và tự bịa dữ liệu khi thiếu ngữ cảnh thực địa. Tại Task 2 Usability Testing, AI vội vàng bịa ra điểm số SUS ngẫu nhiên cao ngất ngưởng (85-90/100) thay vì phản ánh đúng sự bực bội thực tế của 5 người dùng khi phải loay hoay tìm mã QR bị giấu sâu ở Hồ sơ cá nhân B4. Ngoài ra, AI tỏ ra thiếu hụt nhận thức về môi trường hệ điều hành Windows khi giả lập mọi môi trường trên 1 engine Chromium thay vì mở ứng dụng Google Chrome và Microsoft Edge thực tế cài sẵn trên máy.

Cuối cùng, nếu không bị ép buộc bằng dữ liệu thực tế hoặc các định dạng Agent Skill nghiêm ngặt, AI thường dùng dữ liệu giả định không thực tế (như `user@example.com`) và viết kịch bản dạng chỉ dẫn từng nút bấm thay vì kịch bản hướng tới mục tiêu.

Tóm lại, AI là một trợ lý đắc lực để thiết lập template báo cáo và xử lý dữ liệu kiểm thử thực tế, nhưng Tester bắt buộc phải cung cấp dữ liệu thực tế chính xác, thực nghiệm trực tiếp với người dùng thật và duy trì sự kiểm duyệt thủ công xuyên suốt quá trình làm bài.
```