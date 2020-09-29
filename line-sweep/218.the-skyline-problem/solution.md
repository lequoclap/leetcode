[218. The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)

explain:

https://www.youtube.com/watch?v=dyxrN3kWC4k&ab_channel=TheTechGranth


1. Định nghĩa cạnh trái và cạnh phải của từng tòa nhà. gọi -h là chiều cao cạnh trái và h là chiều cao cạnh phải.

    VD: [2,9,10] => [2, -10], [9, 10]

2. Sort lại list các cạnh theo chiều trái sang (tọa độ x tăng dần),
(ưu tiên chiều cao nếu có tọa độ x giống nhau).

    [2,-10],[9,10], [3,-15],[7,15]
    
    => [2,-10],[3,-15],[7,15],[9,10]

3. Lấy ra giá trị cao nhất của những tòa nhà đang overlap. Lưu độ cao của những tòa nhà đang overlap vào priority queue và lấy ra độ cao lớn nhất từ đó (dùng priority queue tốc độ lấy ra giá trị lớn nhất sẽ nhanh hơn O(logn)).
Khi chạy đến cạnh phải của tòa nhà => ra khỏi vùng overlap của tòa nhà đó => remove độ cao của tòa nhà ra khỏi queue.

3. Mỗi lần độ cao lớn nhất thay đổi thì mình sẽ lấy ra được điểm cần lấy.
