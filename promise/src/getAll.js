/* promise.all() */
const {getConnection, closeConnection} = require('./connection')

let databasePromise = getConnection()
let classify = databasePromise.then(getClassify)
let tags = databasePromise.then(getTags)

function getClassify (con) {
  return new Promise((resolve, reject) => {
    con.query('SELECT * FROM classify', (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}

function getTags (con) {
  return new Promise((resolve, reject) => {
    con.query('SELECT * FROM tag', (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}

// let classify = new Promise((resolve, reject) => {
//   connection.query('SELECT * FROM classify', (err, result) => {
//     if (err) return reject(err)
//     resolve(result)
//   })
// })
//
// let tag = new Promise((resolve, reject) => {
//   connection.query('SELECT * FROM tag', (err, result) => {
//     if (err) return reject(err)
//     resolve(result)
//   })
// })

Promise.all([
  classify,
  tags
]).then(([clazz, tags]) => {
  closeConnection()
  console.log(clazz, tags)
}).catch(err => {
  console.log(err)
})
