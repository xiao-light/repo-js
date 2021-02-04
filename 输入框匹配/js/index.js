window.onload = function () {
	var arr = [
		'刘备的弟弟叫关羽',
		'关羽的弟弟叫张飞',
		'诸葛老贼',
		'周瑜大都督',
		'曹贼何异',
		'西凉马儿马超',
		'老将黄忠，百步穿杨',
		'吕布赤兔',
		'双戟典韦',
		'卧龙凤雏水镜',
	]
	// 匹配区域的显示和隐藏
	var show = document.querySelector('.show')
	var input = document.querySelector('#input')
	// keyup 是键盘弹起事件
	input.addEventListener('keyup', function () {
		show.style.display = 'block'
		// 字符串匹配 indexOf() 匹配到时，返回对应位置的下标；匹配不到时，返回-1
		var str = ''
		for (var i = 0, len = arr.length; i < len; i++) {
			var res = arr[i].indexOf(input.value)
			if (res != -1) {
				str += '<p>' + arr[i] + '</p>'
			}
		}
		// 如果 input.value 为空或者 str 为假的时候，给用户一个提示
		if (!input.value || !str) {
			show.innerHTML = '<p>' + '暂无匹配项' + '</p>'
		} else {
			show.innerHTML = str
		}
	})
	input.addEventListener('blur', function () {
		show.style.display = 'none'
		input.value = ''
	})
}
