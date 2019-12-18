# 测试HTML

超文本标记语言，[标准通用标记语言](https://baike.baidu.com/item/%E6%A0%87%E5%87%86%E9%80%9A%E7%94%A8%E6%A0%87%E8%AE%B0%E8%AF%AD%E8%A8%80/6805073)下的一个应用。是 网页制作必备的编程语言

**“**[超文本](https://baike.baidu.com/item/%E8%B6%85%E6%96%87%E6%9C%AC/2832422)**”**就是指页面内可以包含图片、[链接](https://baike.baidu.com/item/%E9%93%BE%E6%8E%A5/2665501)，甚至音乐、[程序](https://baike.baidu.com/item/%E7%A8%8B%E5%BA%8F/71525)等非文字元素。

超文本标记语言的结构包括**“**头”部分（英语：Head）、和“主体”部分（英语：Body），其中“头”部提供关于网页的信息，“主体”部分提供网页的[具体](https://baike.baidu.com/item/%E5%85%B7%E4%BD%93/4577821)内容。

## 由来

[万维网](https://baike.baidu.com/item/%E4%B8%87%E7%BB%B4%E7%BD%91)（world wide web）上的一个[超媒体](https://baike.baidu.com/item/%E8%B6%85%E5%AA%92%E4%BD%93)文档称之为一个[页面](https://baike.baidu.com/item/%E9%A1%B5%E9%9D%A2)（[外语](https://baike.baidu.com/item/%E5%A4%96%E8%AF%AD)：page）。作为一个组织或者个人在[万维网](https://baike.baidu.com/item/%E4%B8%87%E7%BB%B4%E7%BD%91)上放置开始点的[页面](https://baike.baidu.com/item/%E9%A1%B5%E9%9D%A2)称为[主页](https://baike.baidu.com/item/%E4%B8%BB%E9%A1%B5)（外语：Homepage）或首页，主页中通常包括有指向其他相关页面或其他节点的[指针](https://baike.baidu.com/item/%E6%8C%87%E9%92%88)（[超级链接](https://baike.baidu.com/item/%E8%B6%85%E7%BA%A7%E9%93%BE%E6%8E%A5)），所谓[超级链接](https://baike.baidu.com/item/%E8%B6%85%E7%BA%A7%E9%93%BE%E6%8E%A5)，就是一种[统一资源定位器](https://baike.baidu.com/item/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%AE%9A%E4%BD%8D%E5%99%A8)（Uniform Resource Locator，[外语](https://baike.baidu.com/item/%E5%A4%96%E8%AF%AD)[缩写](https://baike.baidu.com/item/%E7%BC%A9%E5%86%99)：[URL](https://baike.baidu.com/item/URL)）指针，通过激活（点击）它，可使[浏览器](https://baike.baidu.com/item/%E6%B5%8F%E8%A7%88%E5%99%A8)方便地获取新的网页。这也是HTML获得广泛应用的最重要的原因之一。在逻辑上将视为一个整体的一系列[页面](https://baike.baidu.com/item/%E9%A1%B5%E9%9D%A2)的有机集合称为[网站](https://baike.baidu.com/item/%E7%BD%91%E7%AB%99)（[Website](https://baike.baidu.com/item/Website)或Site）。超级文本标记语言（英文缩写：HTML）是为“[网页](https://baike.baidu.com/item/%E7%BD%91%E9%A1%B5)创建和其它可在[网页浏览器](https://baike.baidu.com/item/%E7%BD%91%E9%A1%B5%E6%B5%8F%E8%A7%88%E5%99%A8)中看到的信息”设计的一种[标记语言](https://baike.baidu.com/item/%E6%A0%87%E8%AE%B0%E8%AF%AD%E8%A8%80)。

网页的本质就是超级文本标记语言，通过结合使用其他的[Web技术](https://baike.baidu.com/item/Web%E6%8A%80%E6%9C%AF)（如：[脚本语言](https://baike.baidu.com/item/%E8%84%9A%E6%9C%AC%E8%AF%AD%E8%A8%80)、[公共网关接口](https://baike.baidu.com/item/%E5%85%AC%E5%85%B1%E7%BD%91%E5%85%B3%E6%8E%A5%E5%8F%A3)、[组件](https://baike.baidu.com/item/%E7%BB%84%E4%BB%B6)等），可以创造出功能强大的网页。因而，超级文本标记语言是万维网（[Web](https://baike.baidu.com/item/Web)）编程的基础，也就是说[万维网](https://baike.baidu.com/item/%E4%B8%87%E7%BB%B4%E7%BD%91)是建立在超文本基础之上的。超级文本标记语言之所以称为超文本标记[语言](https://baike.baidu.com/item/%E8%AF%AD%E8%A8%80)，是因为文本中包含了所谓“[超级链接](https://baike.baidu.com/item/%E8%B6%85%E7%BA%A7%E9%93%BE%E6%8E%A5)”点。 [1] 

## 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{block 'title'}}index{{/block}}</title>
    <link rel="stylesheet" href="/public/css/base.css">
    <link rel="stylesheet" href="/public/css/index.css">
    {{block 'style'}}
    {{/block}}
</head>
<body>
<div class="wrap">
    <!-- 头部 -->
    <div class="header">
        <div class="logo">
            <p>O`HILLARY`S BLOG</p>
            <P>take notes for my life</P>
        </div>
        <div class="search" id="search">
            <i id="close-search">X</i>
            <input type="text" name="searchKey" placeholder="输入你想要的分类、标签、内容检索">
            <i>search</i>
        </div>
        <div class="nav">
            <div class="nav-item" id="search-btn">search</div>
            <div class="nav-item">Blog</div>
            <div class="nav-item hover-down">
                <span>分类</span>
                <!-- 向上箭头 -->
                <div class="arrow"></div>
                <div class="down">
                    <div class="down-content">
                        <p class="down-item"><a href="javascript:;">vue</a></p>
                        <p class="down-item"><a href="javascript:;">node</a></p>
                        <p class="down-item"><a href="javascript:;">jQuery</a></p>
                        <p class="down-item"><a href="javascript:;">javascript</a></p>
                    </div>
                </div>
            </div>
            <div class="nav-item">关于</div>
        </div>
    </div>

    {{block 'content'}}
    {{/block}}

    <!-- 尾部 -->
    <div class="footer">Copyright © 2019-2019 O`HILLARY`S BLOG</div>

    <!-- back to top -->
    <div class="toTop hidden" id="toTop">to top</div>
</div>
<script src="/public/js/jquery-3.3.1.min.js"></script>
<script src="/public/js/common.js"></script>
{{block 'script'}}
{{/block}}
</body>
</html>
```

