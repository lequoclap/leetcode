[452. Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)

- sắp xếp chuỗi bóng theo thứ tự tăng dần theo tọa độ x[0]
- chạy con trỏ từ quả bóng đầu tiên trở đi
- nhận thấy nếu gặp tọa độ x[1] của quả bóng bất kỳ => 
    với 1 mũi tên nó có thể bắn thủng tất cả những quả bóng con trỏ vừa đi qua + tất cả những quả bóng tiếp theo nếu mép trái của nó trùng với mép phải của quả bóng đang xét 
- với giải thích đấy mình sẽ lưu min_e là tọa độ x[1] nhỏ nhất của những quả bóng con trỏ chạy qua.
- sau khi bắn 1 mũi tên (count + 1) thì tọa độ min_e sẽ được reset lại là tọa độ của quả bóng tiếp theo
