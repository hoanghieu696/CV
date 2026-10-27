# Portfolio CV - Nguyễn Văn An

Trang portfolio/CV cá nhân giới thiệu Nguyễn Văn An với vai trò Frontend Developer. Dự án là một website tĩnh, trình bày thông tin cá nhân, kỹ năng, các dự án tiêu biểu và kênh liên hệ; giao diện được thiết kế responsive để sử dụng trên máy tính, máy tính bảng và điện thoại.

## Chức năng

- Thanh điều hướng đến các phần Giới thiệu, Kỹ năng, Dự án và Liên hệ.
- Giới thiệu cá nhân, vị trí công việc và ảnh đại diện.
- Hiển thị danh sách kỹ năng và các dự án dưới dạng thẻ.
- Cung cấp các liên kết liên hệ qua email, GitHub và LinkedIn.
- Bố cục responsive, hỗ trợ điều hướng bằng bàn phím và cuộn mượt.

> Đây là trang giới thiệu tĩnh, không có máy chủ ứng dụng, cơ sở dữ liệu hay chức năng gửi biểu mẫu. Các đường dẫn dự án và thông tin liên hệ hiện là nội dung mẫu; hãy cập nhật trước khi phát hành.

## Công nghệ sử dụng

- HTML5: cấu trúc và nội dung trang.
- CSS3: giao diện, responsive, Flexbox và CSS Grid.
- Ảnh đại diện lưu tại `assets/img/avatar.jpg`; stylesheet tại `assets/css/styles.css`.
- Nginx (tùy chọn): phục vụ website khi chạy bằng Docker.

JavaScript được nhắc đến trong danh sách kỹ năng hiển thị trên trang, nhưng hiện không cần JavaScript để chạy website này.

## Yêu cầu môi trường

- Trình duyệt hiện đại như Chrome, Firefox, Edge hoặc Safari.
- Git nếu muốn tải mã nguồn bằng lệnh.
- Python 3 chỉ cần nếu muốn chạy máy chủ HTTP cục bộ theo hướng dẫn bên dưới. Có thể mở trực tiếp `index.html` mà không cần cài Python.
- Docker Desktop trên Windows/macOS hoặc Docker Engine trên Linux nếu chọn cách chạy bằng Docker.
- Không yêu cầu Node.js, npm, cơ sở dữ liệu hoặc tệp cấu hình môi trường.

## Cài đặt mã nguồn

Tải hoặc clone repository về máy, sau đó chuyển vào thư mục dự án:

```bash
git clone <URL-repository>
cd CV
```

Thay `<URL-repository>` bằng địa chỉ Git thực tế. Nếu đã tải mã nguồn dưới dạng ZIP, hãy giải nén và mở thư mục `CV` trong Terminal/PowerShell.

## Cấu hình và tùy chỉnh

Website không cần biến môi trường hay bước cài đặt thư viện. Để cá nhân hóa nội dung:

1. Chỉnh sửa tên, phần giới thiệu, kỹ năng, dự án và thông tin liên hệ trong `index.html`.
2. Thay ảnh `assets/img/avatar.jpg` bằng ảnh của bạn; nên giữ nguyên tên và đường dẫn, hoặc cập nhật thuộc tính `src` trong `index.html`.
3. Chỉnh màu sắc, kiểu chữ và bố cục trong `assets/css/styles.css`.
4. Thay các liên kết mẫu `href="#"`, email `an.nguyen@example.com` và hồ sơ mạng xã hội bằng địa chỉ thật. Những liên kết `#` hiện chưa dẫn đến trang dự án.

Các đường dẫn tài nguyên trong HTML là đường dẫn tương đối. Vì vậy, hãy giữ cấu trúc thư mục `assets/css` và `assets/img` khi sao chép hoặc triển khai website.

## Chạy thử trên máy

### Windows

Mở PowerShell tại thư mục dự án và chạy một trong các cách sau:

- Nhanh nhất: mở `index.html` bằng trình duyệt.
- Dùng máy chủ HTTP cục bộ (Python 3):

```powershell
py -m http.server 8000
```

Nếu lệnh `py` không có nhưng đã cài Python, thử:

```powershell
python -m http.server 8000
```

### macOS

Mở Terminal tại thư mục dự án:

```bash
python3 -m http.server 8000
```

### Linux

Mở Terminal tại thư mục dự án:

```bash
python3 -m http.server 8000
```

Trên Windows, macOS và Linux, sau khi máy chủ khởi động, mở <http://localhost:8000> trong trình duyệt. Dừng máy chủ bằng `Ctrl+C`.

## Chạy bằng Docker

Cần cài và khởi động Docker trước. Các lệnh dưới đây dùng Nginx để phục vụ trực tiếp thư mục dự án, không cần tạo image riêng.

### Windows (PowerShell)

Chạy tại thư mục dự án:

```powershell
docker run --rm --name cv-portfolio -p 8080:80 --mount "type=bind,source=$($PWD.Path),target=/usr/share/nginx/html,readonly" nginx:alpine
```

### Windows (Command Prompt)

Chạy tại thư mục dự án:

```cmd
docker run --rm --name cv-portfolio -p 8080:80 -v "%cd%:/usr/share/nginx/html:ro" nginx:alpine
```

### macOS và Linux

Chạy tại thư mục dự án:

```bash
docker run --rm --name cv-portfolio -p 8080:80 -v "$PWD:/usr/share/nginx/html:ro" nginx:alpine
```

Khi container hoạt động, mở <http://localhost:8080>. Dừng container bằng `Ctrl+C`; tùy chọn `--rm` sẽ tự xóa container sau khi dừng.

## Kiểm tra nhanh

- Trang mở được và không có lỗi tải ảnh đại diện hoặc stylesheet.
- Các mục điều hướng cuộn đến đúng phần nội dung.
- Bố cục hiển thị phù hợp trên màn hình nhỏ và màn hình lớn.
- Kiểm tra lại email, liên kết hồ sơ và các liên kết dự án sau khi thay nội dung mẫu.

## Thông tin liên hệ

Thông tin đang được hiển thị trong trang:

- Tên: Nguyễn Văn An
- Email mẫu: `an.nguyen@example.com`
- GitHub mẫu: `github.com/nguyenvanan`
- LinkedIn mẫu: `linkedin.com/in/nguyenvanan`

Đây là thông tin minh họa trong mã nguồn, không xác nhận là địa chỉ liên hệ thực. Hãy cập nhật thông tin của chủ dự án trong `index.html` trước khi sử dụng hoặc công khai website.