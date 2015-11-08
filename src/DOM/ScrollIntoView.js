
var Dom = (function(){

/*
*当隐藏元素在其offsetParent中不可见时自动滚动到可见区域
*@parm {string|object} elem 需要被显示的元素
*/
function scrollToView(elem){

		var hide = typeof elem === 'string'
					? document.getElementById(elem)
					: elem;

		var offsetParent = hide.offsetParent;

		var scrollTop = offsetParent.scrollTop; //容器滚动条滚动高度
		var offsetTop = hide.offsetTop; //隐藏元素上边界距offsetParent的高度
		var h = hide.clientHeight; //隐藏元素的高度
		var H = offsetParent.clientHeight; //容器的高度

		if(scrollTop > offsetTop){
		//隐藏区域位于上方
			offsetParent.scrollTop = offsetTop;
		}

		if(scrollTop < offsetTop + h){
		//隐藏区域位于下方
			offsetParent.scrollTop = offsetTop +h - H;
		}

}


return {
	scrollToView: scrollToView
}


})();