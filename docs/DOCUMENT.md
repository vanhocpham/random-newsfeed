# Document Random Newsfeed

### 1. Thông tin chung ###
- URL: http://...../api/v1/news?size=numsize
- Project cung cấp các uri endpoint cho module tiêm chủng của dự án Mhealth 
- Công nghệ: NodeJS (v10 trở lên)
- Database: MongoDB (v4 trở lên)


### 2. Cấu trúc thư mục ###


```
|-- bin
|   `-- www
|-- controllers
|   |-- account.controller.js
|   |-- import.controller.js
|   |-- newsfeed.controller.js
|   `-- trending.controller.js
|-- db
|-- docs
|-- middlewares
|   `-- cache.middleware.js
|-- models
|   |-- Post.model.js 
|   |-- PostCategory.model.js
|   |-- PostMeta.model.js 
|   `-- User.model.js 
|-- routes
|   `-- index.js
|-- .env
|-- .env.example
|-- .gitignore
|-- cluster.js
|-- index.js
|-- package.json
`-- README.md
```

Mô tả:
- File `bin/www` : file cấu hình môi trường nếu không muốn sử dụng file `.env`
- File `/controller/account.controller.js`: file xử lý logic về user account
- File `/controller/import.controller.js`: file xử lý logic về import database từ MySQL tới MongoDB có xử lý logic bulk
- File `/controller/newsfeed.controller.js`: file xử lý logic thuật toán newsfeed
- File `/controller/trending.controller.js`: file xử lý logic thuật toán trending
- Thư mục `db`: chứa các file database được export từ MySQL với xlsx format
- Thư mục `docs`: chứa các file tài liệu liên quan
- File `/middleware/redis.middleware.js`: file xử lý cache dữ liệu sử dụng redis
- File `/models/Post.model.js`: file xử lý khai báo database tin tức
- File `/models/PostCategory.model.js`: file xử lý khai báo database thể loại tin tức
- File `/models/PostMeta.model.js`: file xử lý khai báo database meta tin tức
- File `/models/User.model.js`: file xử lý khai báo database người sử dụng
- File `/src/routes/index.js`: khai báo tổng hợp chung cho các module endpoint
- File `.env` : file cấu hình môi trường build code
- File `.env.example` : file môi trường nếu muốn sử dụng chứa các thông tin về database, mật khẩu, kết nối hệ thống...
- File `cluster.js` : Khởi tạo server đa nhân ( multi-core ) để tận dụng tối đa tài nguyên hệ thống
- File `index.js` : file chứa các cấu hình khởi tạo serve, kết nối serve với db,...
- File `package.json` : file chứa các định nghĩa module thành phần cài đặt để khởi chạy hệ thống
- File `README.md`: file hướng dẫn cài đặt