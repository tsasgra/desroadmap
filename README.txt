ROADMAP 30 NGÀY LÀM CHỦ PHỐI MÀU & LÊN IDEA THIẾT KẾ
=====================================================

Cấu trúc thư mục:
- index.html         : Giao diện chính của ứng dụng
- styles.css         : Tùy chỉnh giao diện bổ sung (thanh trượt HSB, thanh cuộn)
- app.js             : Logic 30 ngày, bài tập, đáp án trực quan, Lab HSB & Tài khoản Email
- server.py          : Máy chủ Python 3 hỗ trợ đăng ký/đăng nhập Email và tự lưu file JSON
- users_db.json      : Cơ sở dữ liệu tài khoản Email (mật khẩu đã mã hóa PBKDF2-SHA256)
- progress_data.json : File JSON lưu trữ trạng thái học tập riêng biệt theo từng Email

Cách chạy trên máy tính:
1. Mở Terminal / Command Prompt tại thư mục này và chạy:
       python3 server.py
   (Hoặc `python server.py` trên Windows).
2. Bấm nút "Đăng nhập" trên góc phải màn hình -> chọn tab "Đăng ký Email" để tạo tài khoản mới.
3. Mọi thao tác tick ngày, ghi chú và Lab HSB sẽ tự động lưu vào `progress_data.json` cho riêng Email đó!
