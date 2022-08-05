
git add .

git commit -m ''

git push https://github.com/thunghiemweb/asm4.git master

git clone https://github.com/thunghiemweb/asm4.git asm4

Môn học: RJS101x_01-A_VN_Lập trình web fornt end với react

Bài tập số: 4

Tên dự án: React Component

Tác giả: Vũ Ngọc Trung

Thời gian làm bài dự kiến: 250 phút

Lưu ý: hãy kiểm tra trước khi bắt đầu làm và đảm bảo đáp ứng tiêu chí chấm điểm.

Tổng quan dự án

Bài tập này yêu cầu dựa trên ASM3 và triển khai sử dụng hành động và trình tạo hành động đã được giới thiệu để lấy các dữ liệu từ máy chủ và cập nhật thông tin vào màn hình tương ứng.

Các kịch bản sử dụng và giao diện sẽ được mô tả ở phần các tình huống sử dụng. Bạn có thể sáng tạo thêm giao diện và chức năng để giúp ứng dụng của mình nổi bật hơn.

Tại sao cần làm bài tập này?

Trên thực tế, các ứng dụng full-stack sẽ có mô hình tương tự với bài tập này và thường thì một lập trình viên front-end, bạn sẽ cần tạo được giao diện, giao tiếp được với máy chủ và đối ứng các thay đổi đối với dữ liệu đã nhận được. Ngoài ra bạn sẽ cần gửi dữ liệu lên để thực hiện các thao tác thêm, sửa.

Những gì bạn sẽ học được sau bài tập này?

Sử dụng hành động, trình tạo hành động để cập nhật dữ liệu.
Ứng dụng được hiệu ứng đơn giản.
Hiểu về cách cách hành động Get, Post, Put, Patch... hoạt động.
Bài tập này giúp ích gì cho công việc của bạn?

Làm quen với việc đọc tài liệu mô tả và hoàn thiện front-end của các chức năng.
Hoàn thiện kỹ năng sử dụng Fetch để thực hiện các hành động Get, Post, Put, Patch...
Hiểu được hiệu quả của việc sử dụng hiệu ứng đối với trải nghiệm người dùng.


Các tình huống sử dụng
Tình huống 1: Danh sách nhân viên hiện có trong công ty, hiện log từ middleware Redux Thunk.
Tình huống 2: Danh sách các phòng ban trong công ty
Tình huống 3: Các nhân viên theo từng phòng ban khi bấm vào phòng ban đó trong danh sách ở tình huống 2.
Tình huống 4: Bảng lương của nhân viên
Tình huống 5: Quản lý nhân viên
Thêm nhân viên mới vào công ty sử dụng Post
Cập nhật thông tin nhân viên sử dụng Patch
Xoá nhân viên sử dụng Delete


Lưu ý: Học viên có thể dùng Component class/funcion miễn sao phù hợp với tiêu chí của bài asm đưa ra

Yêu cầu cơ bản

baseUrl 1: https://rjs101xbackend.herokuapp.com/

baseUrl2: https://nodejstesthatn.herokuapp.com/

Học viên vào link baseUrl để kiểm tra tính ổn định của server, sử dụng 1 trong 2 link để giảm thiểu việc nhiều người sử dụng cùng lúc khiến api quá tải.

Trường hợp gặp lỗi học viên làm theo phương án dưới đây:

Phương án 1. Học viên chờ trong khoảng 1 giờ rồi sau đó thử lại.
Phương án 2. Source code BE để học viên tự chạy localhost nếu API trên có vấn đề, khi đó baseUrl sẽ là: http://localhost/8080
Cách chạy:
1, Chọn branch main, clone về máy.
2, Thực hiện command: npm install.
3, Thực hiện command: npm start.

Giao diện thoải mái sáng tạo hoặc giữ nguyên như Project 3.

Tình huống 1: Danh sách nhân viên hiện có trong công ty, hiện log sử dụng Redux Logger.
https://rjs101xbackend.herokuapp.com/staffs

Tình huống 2: Danh sách các phòng ban trong công ty
https://rjs101xbackend.herokuapp.com/departments

Tình huống 3: Các nhân viên theo từng phòng ban
https://rjs101xbackend.herokuapp.com/departments/{id}

Tình huống 4: Bảng lương của nhân viên
https://rjs101xbackend.herokuapp.com/staffsSalary

Tình huống 5: Quản lý nhân viên
Thêm nhân viên mới vào công ty sử dụng Post
https://rjs101xbackend.herokuapp.com/staffs

Cập nhật thông tin nhân viên sử dụng Patch (ngoài Post, Delete, Get.. đã được học, hãy tìm hiểu và sử dụng thêm Patch ở đây) . Tham khảo thêm về sự khác nhau, ý nghĩa sử dụng của các phương thức RESTfull
https://rjs101xbackend.herokuapp.com/staffs
Xoá nhân viên sử dụng Delete
https://rjs101xbackend.herokuapp.com/staffs/{id}
Yêu cầu: Thêm hiệu ứng đơn giản cho trang bảng lương, danh sách nhân viên. (hiệu ứng bất kỳ, bạn nên tìm hiểu thêm về hiệu ứng và áp dụng nếu muốn làm việc sâu về FE sau này).

Yêu cầu nâng cao

Đáp ứng tình huống sử dụng 5:

Thêm nhân viên mới vào công ty thành công
Cập nhật thông tin nhân viên thành công
Xoá nhân viên thành công


Tiêu chí 1: Cập nhật thành công từ dữ liệu lấy được từ máy chủ danh sách nhân viên hiện có trong công ty. Hiện log từ middleware Redux Thunk

Tiêu chí 2: Cập nhật thành công từ dữ liệu lấy được từ máy chủ danh sách các phòng ban trong công ty.

Tiêu chí 3: Các nhân viên theo từng phòng ban khi bấm vào phòng ban đó trong danh sách ở tình huống 2.

Tiêu chí 4: Cập nhật thành công từ dữ liệu lấy được từ máy chủ bảng lương của nhân viên toàn công ty.


Nâng cao 
1. Thêm nhân viên mới vào công ty thành công
2. Cập nhật thông tin nhân viên thành công
3. Xoá nhân viên thành công












Nội dung bài tập tự thực hành 4.1

Bài exercise này không bắt buộc phải làm, tuy nhiên bài assignment được xây dựng dựa trên bài exercise này nên nếu bạn làm sẽ thuận lợi cho quá trình làm assignment của bạn hơn rất nhiều.

Video hướng dẫn: Redux, Client-Server Communication and Fetch
https://www.coursera.org/learn/front-end-react/lecture/FMNv2/assignment-4-redux-client-server-communication-and-fetch


Coursera
https://www.coursera.org/learn/front-end-react/lecture/FMNv2/assignment-4-redux-client-server-communication-and-fetch



Tài liệu hướng dẫn: Redux, Client-Server Communication and Fetch |
https://www.coursera.org/learn/front-end-react/peer/STzhv/redux-client-server-communication-and-fetch

Coursera
https://www.coursera.org/learn/front-end-react/peer/STzhv/redux-client-server-communication-and-fetch


Tài liệu tham khảo: Redux, Client-Server Communication and Fetch: Additional Resources | 
https://www.coursera.org/learn/front-end-react/supplement/u3P1n/assignment-4-redux-client-server-communication-and-fetch-additional-resources


Coursera
https://www.coursera.org/learn/front-end-react/supplement/u3P1n/assignment-4-redux-client-server-communication-and-fetch-additional-resources


Thời gian làm bài dự kiến: 75 phút.

Nội dung bài tập tự thực hành 4.2

Lưu ý: Bài tập này sẽ không yêu cầu bắt buộc học viên phải làm, tuy nhiên học viên nên dành thời gian để tìm hiểu và làm vì yêu cầu của bài Assignment 4 sẽ có yêu cầu nâng cao sử dụng Redux Actions

Hãy làm các bài exercise theo link dưới đây và đảm bảo rằng bạn sẽ không xoá repositories cho đến khi kết thúc môn học. Lưu kết quả bài exercise trên Github.

Học viên vào link Video trên Coursera để xem chi tiết yêu cầu của bài, bản dịch đính kèm chỉ hỗ trợ dịch text.

Lab (tài liệu hướng dẫn):

Lab (Video): Combining Reducers
https://www.coursera.org/learn/front-end-react/lecture/moj5l/exercise-video-combining-reducers

Lab (tài liệu hướng dẫn): Combining Reducers 
https://www.coursera.org/learn/front-end-react/supplement/PYeZk/exercise-instructions-combining-reducers


Lab (Video): Redux Actions
https://www.coursera.org/learn/front-end-react/lecture/Q1cLW/exercise-video-redux-actions


Lab (tài liệu hướng dẫn): Redux Actions 
https://www.coursera.org/learn/front-end-react/supplement/1eC3w/exercise-instructions-redux-actions


Lưu ý, CommentForm nhắc đến trong hướng dẫn chính là Comment Component.
Thời lượng làm bài dự kiến: 100 phút


Nội dung bài tập tự thực hành 4.3

Lưu ý: Bài tập này sẽ không yêu cầu học viên phải làm, tuy nhiên học viên nên dành thời gian để tìm hiểu và làm vì yêu cầu của bài Assignment 4 sẽ có yêu cầu sử dụng Redux Thunk

Hãy làm các bài exercise theo link dưới đây và đảm bảo rằng bạn sẽ không xoá repositories cho đến khi kết thúc môn học. Lưu kết quả bài exercise trên Github.

Học viên vào link Video trên Coursera để xem chi tiết yêu cầu của bài, bản dịch đính kèm chỉ hỗ trợ dịch text.

Lab (Video): Redux Thunk
https://www.coursera.org/learn/front-end-react/lecture/syFjH/exercise-video-redux-thunk

Lab (tài liệu hướng dẫn): Redux Thunk
https://www.coursera.org/learn/front-end-react/supplement/IEFsA/exercise-instructions-redux-thunk

Lab (Video): React-Redux-Form Revisited
https://www.coursera.org/learn/front-end-react/lecture/UINvH/exercise-video-react-redux-form-revisited

Lab (tài liệu hướng dẫn): React-Redux-Form Revisited 
https://www.coursera.org/learn/front-end-react/supplement/kLieG/exercise-instructions-react-redux-form-revisited


Trong tài liệu hướng dẫn có nhầm lẫn, CommentComponent nhắc đến chính là ContactComponent.
Ở ContactComponent, nếu bạn đang sử dụng LocalForm thì hãy sửa lại và sử dụng Form như hướng dẫn.
Thời lượng làm bài dự kiến: 100 phút


Nội dung bài tập thực hành 4.4

Lưu ý: Bài tập này sẽ không yêu cầu học viên phải làm, tuy nhiên học viên nên dành thời gian để tìm hiểu và làm vì Animation sẽ giúp ứng dụng có UI tốt hơn, vậy nên, học viên hãy tích lũy kiến thức về các loại animation và thực hành sử dụng nó. Ngoài ra, cần một chút khiếu thẩm mỹ kết hợp với kinh nghiệm đó để có thể sử dụng phù hợp để tránh ảnh hưởng đến UX (animation rối mắt sẽ khiến người dùng khó sử dụng).

Hãy làm các bài lab theo link dưới đây và đảm bảo rằng bạn sẽ không xoá repositories cho đến khi kết thúc môn học. Lưu kết quả bài Lab trên Githup.

Đặt tên bài lab ở Github theo quy định sau: LAB+number_subnumber. Ví dụ: LAB01_1

Học viên vào link Video trên Coursera để xem chi tiết yêu cầu của bài lab, bản dịch đính kèm chỉ hỗ trợ dịch text.

Lab (Video): React Animations
https://www.coursera.org/learn/front-end-react/lecture/b7D7h/exercise-video-react-animations

Lab (tài liệu hướng dẫn): React Animations 
https://www.coursera.org/learn/front-end-react/supplement/GuH6S/exercise-instructions-react-animations

Tài liệu hướng dẫn thừa ký tự này, xoá đi là được.

Lab (Video): React Animation Components
https://www.coursera.org/learn/front-end-react/lecture/ES04n/exercise-video-react-animation-components

Lab (tài liệu hướng dẫn): React Animation Components
https://www.coursera.org/learn/front-end-react/supplement/RpfBq/exercise-instructions-react-animation-components

Thời lượng làm bài dự kiến: 38 phút



https://youtube.com/playlist?list=PLkY6Xj8Sg8-tmotihDcWZN0LvtXFyxmRZ