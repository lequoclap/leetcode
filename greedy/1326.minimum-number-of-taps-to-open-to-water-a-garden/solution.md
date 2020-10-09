- tạo list độ phủ của taps
- sắp xếp thứ tự theo tọa độ trái của độ phủ
- run từ đầu, lưu curr là tọa độ end của độ phủ đang xét
- nếu độ phủ tiếp theo giao với độ phủ đang xét => lưu tọa độ max end
- nếu độ phủ tiếp theo có tọa độ start > max => return -1 (ko giao)
- nếu độ phủ tiếp theo có start > curr => update curr = max và lặp lại quá trình


- 