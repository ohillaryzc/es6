let obj = {
  name: 'lzc'
}
Object.defineProperty(obj, 'name', {
  configurable: true,
  enumerable: true,
  get: function () {
    return '^-^'
  },
  set: function (oldVal) {
    console.log(oldVal)
  }
})

obj.name = 'hhy'
console.log(obj.name)
