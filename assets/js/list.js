var li=document.querySelectorAll('.xxk-one li');
var div=document.querySelectorAll('.content div');
var len=li.length;
for(var i=0; i<len; i++){

	li[i].onmouseover=function(){
		
		console.log('你好!');
	// 统一将所有的div隐藏,鼠标移入的时候,不管当前是谁显示着,直接全部隐藏(所有的div全部隐藏)
		for (var j = 0; j < len; j++) {
			div[j].className = 'hide';
			// 去掉所有的li的背景颜色
			li[j].className = '';
		}

		// 获取鼠标移入到第几个li
		var index = this.getAttribute('data-index');

		// 让对应的div显示
		div[index].className = '';
		// 对应的li的背景色改变
		li[index].className = 'active';


	}
}