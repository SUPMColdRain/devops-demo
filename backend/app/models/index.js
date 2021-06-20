const {Sequelize} = require('sequelize');

const dbConfig = require('../config/sequelize-automate.config');
// 将连接参数分别传递到 Sequelize 构造函数
const sequelize = new Sequelize(dbConfig.dbOptions.database, dbConfig.dbOptions.user, dbConfig.dbOptions.password, {
    host: dbConfig.dbOptions.host,
    dialect: dbConfig.dbOptions.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.dbOptions.pool.max,
        min: dbConfig.dbOptions.pool.min,
        acquire: dbConfig.dbOptions.pool.acquire,
        idle: dbConfig.dbOptions.pool.idle
    }
});

// 测试数据库连接
sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch(err => {
        console.error("Unable to connect to the database:", err);
    });


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('./s_user.js')(sequelize, Sequelize);

module.exports = db;
