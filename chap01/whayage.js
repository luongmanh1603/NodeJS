const http = require('http');
const url = require('url');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // Phân tích URL để lấy tham số từ query string
    const queryObject = url.parse(req.url, true).query;

    // Lấy giá trị của tham số 'name' và 'year'
    const name = queryObject.name || 'Unknown';
    const year = queryObject.year;

    // Tính tuổi
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;

    // Tạo chuỗi thông tin theo định dạng yêu cầu
    const info = `${name} is ${age} year olds`;

    // Gửi phản hồi với chuỗi thông tin
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(info);
});

server.listen(port, () =>
    console.log(`App listening on port http://127.0.0.1:${port}`)
);