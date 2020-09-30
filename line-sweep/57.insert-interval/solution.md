- chạy từ đầu interval đến cuối
- mỗi lần đều kiểm tra xem interval có overlap với new interval hay ko. Nếu có sẽ xóa interval ra khỏi list và update lại new interval với độ dài mới sau khi overlap với interval được so sánh.
- khi phát hiện ko còn overlap nữa thì sẽ push new interval vào list ngay vị trí đấy.

độ phức tạp O(n);