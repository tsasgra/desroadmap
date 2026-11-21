ROADMAP 30 NGÀY LÀM CHỦ PHỐI MÀU & LÊN IDEA THIẾT KẾ
=====================================================

Cấu trúc thư mục:
- index.html         : Giao diện chính của ứng dụng
- styles.css         : Tùy chỉnh giao diện bổ sung (thanh trượt HSB, thanh cuộn)
- app.js             : Logic 30 ngày, bài tập, đáp án trực quan, Lab HSB & lưu trạng thái
- server.py          : Máy chủ Python 3 tự động lưu mọi thao tác vào file progress_data.json
- progress_data.json : File JSON lưu trữ trạng thái hiện tại của website (không bị mất khi tắt tab)

Cách dùng để KHÔNG BAO GIỜ bị mất dữ liệu khi tắt tab:
- Cách 1 (Khuyên dùng - Tự động ghi thẳng vào file progress_data.json):
  Mở Terminal / Command Prompt tại thư mục này và chạy:
      python3 server.py
  (Hoặc `python server.py` trên Windows). Trình duyệt sẽ mở web và mọi thao tác sẽ tự lưu vào `progress_data.json`.

- Cách 2 (Mở trực tiếp file index.html hoặc dùng trên trình duyệt khác):
  Web tự lưu vào bộ nhớ trình duyệt. Trước khi đổi máy hoặc xóa dữ liệu trình duyệt,
  bấm "Xuất .JSON" để tải file `progress_data.json` về, lần sau bấm "Nhập .JSON" để khôi phục 100%.
