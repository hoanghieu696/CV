# Báo cáo kiểm thử

- **Dự án:** Portfolio RGB Gaming - Đỗ Minh Hiếu
- **Ngày kiểm thử:** 28/10/2026
- **Phạm vi:** Kiểm tra mã nguồn `index.html`, liên kết điều hướng và ảnh cục bộ; mở trang bằng Google Chrome Headless để chụp giao diện ở kích thước máy tính và điện thoại.
- **Kết quả tổng quan:** Trang tĩnh và các tài nguyên cục bộ hoạt động trong phạm vi đã kiểm tra. Giao diện điện thoại còn tràn ngang; các tiêu chí vận hành, bảo mật và triển khai chỉ được đánh giá ở mức cơ bản, không thay thế kiểm thử chuyên sâu.

## Kết quả theo 6 tiêu chí

| Tiêu chí | Đánh giá | Kết quả kiểm tra và minh chứng |
|---|---|---|
| **Tính đúng đắn** | Đạt trong phạm vi kiểm tra tĩnh | Tám liên kết điều hướng nội bộ đều trỏ đến ID có trong trang. Cả bốn đường dẫn ảnh trong `index.html` đều tồn tại trong repository. Trang gồm các phần Trang chủ, Giới thiệu, Học vấn, Kỹ năng, Dự án, Thư viện hình ảnh, Mục tiêu và Liên hệ. |
| **UI/UX** | Đạt một phần | Đã chụp trang ở viewport 1365 × 900 và 390 × 844 CSS px. Giao diện máy tính hiển thị đúng. Ở chiều rộng điện thoại, menu và nội dung tiêu đề/giới thiệu bị cắt ở mép phải, cho thấy có tràn ngang; cần sửa CSS responsive trước khi xem là đạt. Ảnh tương ứng: [máy tính](docs/screenshots/portfolio-desktop.png) và [điện thoại](docs/screenshots/portfolio-mobile.png). |
| **Khả năng vận hành - xử lý lỗi** | Đạt một phần | Đây là trang tĩnh, không có backend, biểu mẫu hay xử lý dữ liệu. Các ảnh được tham chiếu đều có trong repository. Chưa kiểm thử máy chủ HTTP, tình huống mất mạng, thiếu tệp sau triển khai hoặc thông báo lỗi cho người dùng. |
| **Bảo mật** | Đạt trong phạm vi rà soát cơ bản | Mã trang không có biểu mẫu nhập liệu hoặc xử lý dữ liệu người dùng; hiệu ứng JavaScript cập nhật văn bản bằng `textContent`. Không thực hiện kiểm thử xâm nhập, quét lỗ hổng, kiểm tra cấu hình hosting hay đánh giá bảo mật toàn diện. |
| **Chất lượng mã nguồn** | Đạt một phần | Trang sử dụng các phần tử HTML như `header`, `nav`, `main`, `section`, `footer`; ảnh có văn bản thay thế và CSS hỗ trợ `prefers-reduced-motion`. Tuy nhiên, phần lớn CSS được nhúng trực tiếp trong `index.html`; `assets/css/styles.css` không được trang liên kết sử dụng. Chưa chạy HTML/CSS validator, linter hoặc kiểm thử tự động. |
| **Khả năng triển khai** | Đạt một phần | Trang mở được từ tệp cục bộ và dùng đường dẫn tương đối đến ảnh. Chưa xác minh qua HTTP server, hosting hoặc Docker trong lần kiểm thử này; repository không có Dockerfile hay cấu hình CI/CD. |

## Minh chứng hình ảnh

Ảnh được chụp mới từ phiên bản `index.html` hiện tại bằng Google Chrome Headless và lưu trong `docs/screenshots/`.

### Máy tính — viewport 1365 × 900

![Ảnh chụp giao diện portfolio trên máy tính](docs/screenshots/portfolio-desktop.png)

### Điện thoại — viewport 390 × 844

![Ảnh chụp giao diện portfolio trên điện thoại; thể hiện nội dung bị cắt ngang](docs/screenshots/portfolio-mobile.png)

## Giới hạn và việc cần làm

- Cần khắc phục hiện tượng tràn ngang ở viewport điện thoại, sau đó chụp lại ảnh minh chứng và kiểm tra lại các kích thước nhỏ.
- Chưa kiểm tra trên nhiều trình duyệt/hệ điều hành, chưa chạy validator hoặc bộ kiểm thử tự động.
- Chưa thử nghiệm triển khai qua máy chủ HTTP hay nền tảng hosting; đánh giá bảo mật chỉ là rà soát mã nguồn cơ bản.
