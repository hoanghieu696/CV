# Portfolio RGB Gaming - Đỗ Minh Hiếu

Website portfolio cá nhân theo phong cách gaming/RGB, giới thiệu Đỗ Minh Hiếu, thông tin học vấn, kỹ năng, dự án, mục tiêu và cách liên hệ. Đây là website tĩnh, có thể mở trực tiếp bằng trình duyệt hoặc phục vụ bằng máy chủ HTTP và Docker.

## Chức năng

- Thanh điều hướng đến Trang chủ, Giới thiệu, Học vấn, Kỹ năng, Dự án, Thư viện hình ảnh, Mục tiêu và Liên hệ.
- Giới thiệu cá nhân, ảnh đại diện, trường học và chuyên ngành.
- Trình bày các kỹ năng, dự án mẫu, hình ảnh và mục tiêu cá nhân.
- Hiển thị hiệu ứng chữ gõ và hiệu ứng xuất hiện nội dung khi cuộn trang.
- Tôn trọng thiết lập giảm chuyển động (`prefers-reduced-motion`) của hệ điều hành.
- Liên kết gửi email qua `mailto:`.

> Đây là dự án frontend tĩnh: không có máy chủ ứng dụng, cơ sở dữ liệu hay biểu mẫu gửi dữ liệu. Một số dự án trong trang là ý tưởng minh họa, không phải liên kết tới ứng dụng đã triển khai.

## Công nghệ

- **HTML5:** cấu trúc và nội dung trang.
- **CSS3:** giao diện, hiệu ứng, chuyển động và bố cục responsive; phần lớn CSS được viết bên trong `index.html`.
- **JavaScript thuần:** hiệu ứng gõ chữ và hiển thị nội dung khi cuộn; không cần thư viện hoặc framework ngoài.
- **Google Chrome Headless:** đã dùng để chụp ảnh minh chứng giao diện trong `docs/screenshots/`.
- **Nginx và Docker (tùy chọn):** phục vụ website trong container.

## Yêu cầu môi trường

Để xem trang:

- Trình duyệt hiện đại như Google Chrome, Microsoft Edge, Firefox hoặc Safari.

Để tải mã nguồn:

- Git, hoặc tải repository dưới dạng tệp ZIP.

Để chạy bằng máy chủ cục bộ:

- Python 3 (tùy chọn). Có thể mở `index.html` trực tiếp mà không cần cài Python.

Để chạy bằng Docker:

- Docker Desktop trên Windows/macOS hoặc Docker Engine trên Linux.
- Kết nối Internet khi cần tải image `nginx:alpine` lần đầu.

Không cần cài Node.js, npm, cơ sở dữ liệu hoặc cấu hình biến môi trường.

## Cài đặt mã nguồn

### Windows — PowerShell

```powershell
git clone https://github.com/hoanghieu696/CV.git
Set-Location CV
```

### Windows — Command Prompt

```cmd
git clone https://github.com/hoanghieu696/CV.git
cd CV
```

### macOS và Linux

Mở Terminal:

```bash
git clone https://github.com/hoanghieu696/CV.git
cd CV
```

Nếu tải repository dưới dạng ZIP, hãy giải nén rồi mở thư mục dự án bằng PowerShell, Command Prompt hoặc Terminal.

## Cấu hình và tùy chỉnh

Website không yêu cầu tệp `.env`, cài đặt thư viện hoặc bước build. Nội dung và kiểu dáng có thể chỉnh trực tiếp trong repository:

1. Mở `index.html` để thay tên, phần giới thiệu, học vấn, kỹ năng, dự án, mục tiêu và thông tin liên hệ.
2. Cập nhật các thẻ `<title>` và `meta description` ở đầu tệp để phù hợp với nội dung mới.
3. Thay ảnh trong `assets/img/` hoặc cập nhật các đường dẫn `src` tương ứng trong `index.html`. Giữ ảnh trong repository và dùng đường dẫn tương đối để trang tải được khi triển khai.
4. Chỉnh CSS trong thẻ `<style>` của `index.html` để thay màu sắc, bố cục và hiệu ứng. Tệp `assets/css/styles.css` hiện không được trang liên kết sử dụng.
5. Nếu sửa các mục điều hướng, bảo đảm giá trị `href="#..."` khớp với `id` của phần nội dung tương ứng.

## Chạy thử

### Mở trực tiếp

Mở tệp `index.html` bằng trình duyệt. Cách này không cần cài đặt thêm, phù hợp để xem nhanh giao diện.

### Chạy máy chủ HTTP cục bộ

Chạy lệnh từ thư mục gốc của dự án, sau đó truy cập <http://localhost:8000>.

#### Windows — PowerShell hoặc Command Prompt

```powershell
py -m http.server 8000
```

Nếu lệnh `py` không có nhưng Python đã được cài đặt:

```powershell
python -m http.server 8000
```

#### macOS

```bash
python3 -m http.server 8000
```

#### Linux

```bash
python3 -m http.server 8000
```

Dừng máy chủ bằng `Ctrl+C`. Nếu cổng `8000` đang được sử dụng, thay `8000` trong lệnh bằng một cổng khác và mở đúng cổng đó trên trình duyệt.

## Chạy bằng Docker

Các lệnh sau chạy Nginx để phục vụ trực tiếp thư mục dự án ở chế độ chỉ đọc. Mở <http://localhost:8080> sau khi container khởi động; dừng bằng `Ctrl+C`. Tùy chọn `--rm` tự xóa container sau khi dừng.

### Windows — PowerShell

Chạy tại thư mục gốc dự án:

```powershell
docker run --rm --name cv-portfolio -p 8080:80 --mount "type=bind,source=$($PWD.Path),target=/usr/share/nginx/html,readonly" nginx:alpine
```

### Windows — Command Prompt

Chạy tại thư mục gốc dự án:

```cmd
docker run --rm --name cv-portfolio -p 8080:80 -v "%cd%:/usr/share/nginx/html:ro" nginx:alpine
```

### macOS

Chạy từ Terminal tại thư mục gốc dự án:

```bash
docker run --rm --name cv-portfolio -p 8080:80 -v "$PWD:/usr/share/nginx/html:ro" nginx:alpine
```

### Linux

Chạy từ Terminal tại thư mục gốc dự án:

```bash
docker run --rm --name cv-portfolio -p 8080:80 -v "$PWD:/usr/share/nginx/html:ro" nginx:alpine
```

Nếu cổng `8080` đang được sử dụng, đổi phần `8080:80` thành một cổng máy khác, ví dụ `8081:80`, rồi mở <http://localhost:8081>.

## Kiểm tra nhanh

- Mở trang và xác nhận các phần nội dung xuất hiện.
- Bấm từng mục trong thanh điều hướng để kiểm tra vị trí đích.
- Xác nhận ảnh tải được và liên kết gửi email mở ứng dụng email.
- Kiểm tra giao diện ở cả máy tính và điện thoại. Báo cáo kiểm thử và ảnh chụp hiện tại nằm trong `test_report.md` và `docs/screenshots/`; báo cáo ghi nhận giao diện điện thoại còn nội dung bị cắt ngang.

## Thông tin liên hệ

- **Tên hiển thị:** Đỗ Minh Hiếu.
- **Email hiển thị trong trang:** [hieuco696@gmail.com](mailto:hieuco696@gmail.com).
- **Mã nguồn dự án:** [github.com/hoanghieu696/CV](https://github.com/hoanghieu696/CV).

Trước khi công khai hoặc sử dụng nội dung cho mục đích khác, hãy xác nhận và cập nhật thông tin liên hệ trong `index.html`.
