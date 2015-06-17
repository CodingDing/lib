## JavaScript封装备忘

> 这是个人在项目中封装的一些函数的备忘，水平有限，欢迎拍砖。(＾－＾)V

#### scrollIntoView(elem)

JavaScript 中是有一个原生的`scrollIntoView`的方法，但是原生的`scrollIntoView`方法有个缺陷，一旦调用该方法，无论目标元素位于何处都会按照给定的规则滚动（当目标元素位于可视区域内时我们更希望他不发生变化避免页面闪动）。如果除去兼容性问题，我们可以考虑用`scrollIntoViewIfNeeded`，从名字可以看出来这个方法实在目标元素被隐藏掉才触发滚动，目前他不兼容IE各个版本。
我实现的这种简单的方法目前只支持让目标元素在其`offsetParent`滚动到可视区域。原生的`scrollIntoView`会检测目标元素的`offsetParent`是否在他的`offsetParent`中的可视区域，如果不在就滚动。
			
