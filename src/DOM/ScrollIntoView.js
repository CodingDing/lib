
var Core = (function(){


function scrollToView(elem){

		var offsetParent = elem.offsetParent;

		var scrollTop = offsetParent.scrollTop; //容器滚动条滚动高度
		var offsetTop = elem.offsetTop; //隐藏元素上边界距offsetParent的高度
		var h = elem.clientHeight; //隐藏元素的高度
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