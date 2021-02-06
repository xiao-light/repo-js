window.onload = function () {
	var area = document.querySelector('#area')
	var sub = document.querySelector('#sub')
	var res = document.querySelector('#res')
	var reg = /B|妈的|狗|卧槽/g

	sub.addEventListener('click', function () {
		// 逻辑：如果用户输入的值和正则表达式匹配，则用 * 进行替换
		// 过滤词语：B 妈的 狗 卧槽
		var msg = area.value.replace(reg, '*')
		res.innerHTML = msg
	})
}
