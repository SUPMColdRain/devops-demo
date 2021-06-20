'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
// const $sql = require('./app/dao/userSqlMap');
const port = process.env.PORT || 8080;
const host = process.env.PORT || 'localhost';

let corsOptions = {
    origin: 'http://localhost:3000'
}
app.use(cors(corsOptions))

// 跨域访问
app.enable('trust proxy');
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// 解析 application/x-www-form-urlencoded 类型数据

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

require("./app/routes/user.route")(app);
require("./app/routes/user.sign")(app);

// 监听REST API端口
app.listen(port, host, () => {
    console.log(`The machine is listening on http://${host}:${port}`);
});
