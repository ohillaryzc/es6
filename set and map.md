# set and map 数据结构

## set

### set 实例的属性和方法

#### 属性

- new Set([]) 可接收一个数组做为参数
- Set.prototype.size 返回Set实例的成员总数

#### 方法

- add(value) 添加某个值返回Set结构本身
- delete(value) 删除，返回boolean表示是否删除成功
- has(value) 返回boolean，表示是否有该成员
- clear() 清除所有成员，void

#### set和数组

set ==> 数组

~~~ javascript
let set = new Set([1, 2, 3, 4])
let arr = Array.from(set) // [1, 2, 3, 4]
~~~

因为set数据结构中不会出现重复的值，所有可以用来做数组去重

```javascript
// 方法一
[...new Set(arr)]

// 方法二
Array.from(new Set(arr))
```

####  遍历操作

- keys() ：由于set没有键名只有键值，所以keys()的返回值和values()的返回值一直
- values() = keys()
- entries() 返回一个数组，每个元素都是键值组成的数组，两个元素完全一样
- forEach() 与数组的该方法一致

> set集合与数组结合操作很容易找出两个数组的差集
>
> set与filter() 结合使用

#### weakset

- weakset与set的区别：weakset里面只能存放对象

- weakset里面的对象都是弱引用，即垃圾回收器不会考虑该对象还存在weakset中
- weakset没有size属性，因此不能遍历

### map

> Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

map的键可以是任意的类型，包括对象

####  map()

map构造函数可以接收一个二维数组，数组里面的两个元素为键值

```javascript
let items = [
    ['name': 'lzc'],
    ['title': 'nice']
]
let map = new Map(items)

map.size // 2
map.get('title') // nice

// 上面代码相当于
items.forEach(([key, value]) => {
    map.set(key, value)
})

```

Map构造函数的参数不仅仅是数组，任何具有Iterator接口、且每个成员都是一个双元素的数组的数据结构都可以作为Map构造函数的参数，包括set，map

当map构造函数参数是一个map时，就生成了新的对象

```javascript
let map = new Map([[], []])
let newMap = new Map(map)

map === newMap // false
```

map的键为对象时，对应的是对象的引用

只有键名严格相等时，才能取到对应的值，NaN除外



