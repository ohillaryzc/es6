# let 和 const

## let
类似var
区别：
  - var 没有块级作用域，let 具有块级作用域
  ```javascript
    {
      let a = 1
      var b = 2
    }
    a // a is not defined 报错
    b // 2
  ```
  - let 不存在变量提升
    var 声明的变量无论在那个位置，都会提前到该作用域最前面声明，值为 `undefined` ，let 不存在这种情况
    ```javascript
    console.log(i)
    var i = 1
    // undefined 变量提升

    console.log(j)
    let j = 2
    // 报错
    ```
for 循环大括号属于块级作用域
```javascript
for (let i = 0; i < 10; i++) {
  // ...
}
console.log(i) // i uis not defined

var a = []
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}
a[6]() // 10
```
var 声明的变量没有块级作用域，所有i 在全局，每循环一次，i都会变化一次，覆盖之前的值
i 始终都只有一个值，循环完之后就是最后那个值

```javascript
var a = []
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}
a[6]() // 6
```
let 声明的变量有块级作用域，每循环一次，都会多一个i 变量，在不同的作用域里面，因为i被引用了，所有i的值一直存在内存中

for 循环注意
>for设置循环变量的那一部分为一个父级作用域，循环体是他的一个子作用域

```javascript
for (let i = 0; i < 3; i++) {
  let i = 'abc'
  console.log(i)
}
// 输出三次abc
```
说明循环变量里的 i 和 循环体里面的 i 是在不同作用域的 i ，因为let声明重复的变量会报错
> VM211:1 Uncaught SyntaxError: Identifier 'i' has already been declared

## 暂时性死区（temporal dead zone）
只要块级作用域内存在let，他声明的变量就会绑定该作用域，不受外部影响
```javascript
var temp = 1
if (true) {
  temp = 2 // 报错
  let temp = 3
}

```
在 let 和 const 声明变量的作用域内，就会形成封闭区域，在声明这些变量之前使用就会报错
在没有 let 之前 typeof 运算符是百分之百安全的，永远不会报错，但是现在在暂时性死区内就不成立了

```javascript
typeof foo // undefined
var foo = []

typeof bar // 报错，let声明该变量在声明之前使用
let bar = {}
```

## 不允许重复变量(在同一个作用域内，不允许两个相同的变量)
```javascript
function () {
  let a = 0
  let a = 1 // 报错
}

function () {
  var a = 0
  let a = 1 // 报错
}
```

## 块级作用域
```javascript
function fn () {
  let n = 10
  if (true) {
    let n = 5
  }
  console.log(n)
}
fn() // 10
```
let有块级作用域，if条件语句外面不能读取到语句里面的let变量
>es6允许块级作用域的任意嵌套，外面的不能获取里面的，内层作用域可以定义外层作用域的同名变量。

## IIFE
>https://segmentfault.com/a/1190000003985390

## 块级作用域声明函数
  - es5
    es5规定在块级作用域声明是非法的，但是浏览器没有遵守：
  ```javascript
  function fn () {
    console.log('11')
  }
  (function () {
    if (false) {
      function fn () {
        console.log('22')
      }
    }
    fn() // 22
  })()

  // es5中函数声明会提升，上面代码相当于：
  (function () {
    function fn () {
      console.log('22')
    }
    if (false) {}
    fn()
  })()
  ```

  -es6
  允许在块级作用域内声明函数。
  函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
  同时，函数声明还会提升到所在的块级作用域的头部。
  *仅在es6浏览器中有效*
  ```javascript
  function fn () {
    console.log('11')
  }
  (function () {
    if (false) {
      function fn () {
        console.log('22')
      }
    }
    fn() // 报错
  })()

  // 以上代码相当于：
  function fn () {
    console.log('11')
  }
  (function () {
    let fn = undefined
    if (false) {
      fn = function () {
        console.log('22')
      }
    }
    fn() // fn is not a function报错
  })()
  ```
## const关键字
- const声明一个常量，一旦声明，常量的值就不能改变
  ```javascript
  const a = 33
  a = 1 // 报错
  ```
- const声明必须赋值，不能等到之后赋值
- const与let一样只在声明的块级作用域内有效
- const不存在提升，同样存在`暂时性死区`，不能重复声明

### const本质
const实际上保证的不是变量值不能改动，而是变量指向的地址值不改动，对于简单数据类型，const保存的就是指向的内存地址，因此与常量一样，
对于复杂类型（对象，数组），const只保证指针不改变，数据结构改不改变就不完全不可控制了
```javascript
const obj = {age: 18, name: 'jack'}
obj.sex = 'men'
obj.name = 'bob' // 不报错

obj = {} // 报错
// 数组道理一样，可进行一系列操作，就是不能改变地址值
```
要是想冻结一个对象，应该使用对象的冻结方法`Object.freeze({})`
想要彻底冻结一个对象应该自己实现方法：
```javascript
function myFreeze (obj) {
  Object.freeze(obj)
  Object.keys(obj).forEach(key => {
      if (typeof obj[key]==='object') {
          myFreeze(obj[key])
      }
  })
}
```
## es6声明变量方式
- var (es5)
- function (es5)
- let (es6)
- const (es6)
- import (es6)
- class (es6)
*一共六种*

## 顶层对象
浏览器中指`window`，node环境中指`global`
### window
es5中顶层对象与全局变量是一样的，属于顶层对象的属性
```javascript
window.a = 1
a = 4
window.a // 4
```
这样容易造成混乱
es6中，var与function声明的变量是全局变量，let、const、class声明的变量不是全局变量，不属于顶层对象的属性
```javascript
var a = 1
window.a // 1
let b = 2
window.b // undefined
```
### global
浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
Node 里面，顶层对象是global，但其他环境都不支持。
