module.exports = {
  dbOptions: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '12345678',
    dialect: 'mysql',
    database: 'test',
    logging: false,
    pool: {
      // 池中的最大连接数
      max: 10,
      // 池中的最小连接数
      min: 0,
      // 连接释放之前可以空闲的最长时间（以毫秒为单位）
      acquire: 3000,
      // 该池将在抛出错误之前尝试获取连接的最长时间（以毫秒为单位）
      idle: 10000
    }
  },
  options: {
    type: "js",
    dir: "app/models"
  }
}
