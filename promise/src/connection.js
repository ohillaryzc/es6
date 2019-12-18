/* 连接数据库 */
const mysql = require('mysql')
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'blog'
})

function getConnection () {
  return new Promise((resolve, reject) => {
    connection.connect(function (err) {
      console.log('con')
      if (err) return reject(err)
      resolve(connection)
    })
  })
}

function closeConnection () {
  connection.end()
}
// let con = new Promise((resolve, reject) => {
//   connection.connect(function (err) {
//     if (err) return reject(err)
//     resolve(connection)
//   })
// })
// connection.connect(function (err) {
//   if (err) return
//   console.log('connection')
// })

module.exports = {
  getConnection,
  closeConnection
}
