Lấy ý tưởng từ bài skyline

- tách hình chữ nhật thành 2 cạnh trên và dưới.
- sort từ trên xuống dưới (có tọa độ y2 lớn nhất) và từ trái sang ( tọa độ x1 bé nhất). dùng boolean để định nghĩa cạnh trên và cạnh dưới
  khi gặp cạnh trên sẽ cho vào list, gặp cạnh dưới sẽ remove hình chữ nhật ra khỏi list.

- sweep line từ trên xuống dưới, khi độ cao thay đổi thì sẽ bắt đầu check xem các hình chữ nhật trong list có perfect hay ko.