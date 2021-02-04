window.onload = function () {
	/* 点击 a 标签，为 codeTxt 产生随机六位数 */
	var btnA = document.querySelector('#btnA')
	var codeTxt = document.querySelector('#codeTxt')
	//将产生验证码封装为一个函数
	function checkNum() {
		// floor 获取整数（向下取整），加空格变为字符串类型
		var num = Math.floor(Math.random() * 1000000) + ''
		//通过 num.length 判断长度，为6时直接输出，小于6时拼对应个数的0
		if (num.length < 6) {
			for (var i = 0, len = 6 - num.length; i < len; i++) {
				num = '0' + num
			}
			codeTxt.value = num
		} else {
			codeTxt.value = num
		}
	}
	checkNum()

	btnA.addEventListener('click', function () {
		checkNum()
	})
	/* 输入验证码，点击确定，如果成功，alert 成功，否则 alert 失败 */
	var inputTxt = document.querySelector('#inputTxt')
	var btn = document.querySelector('button')
	btn.addEventListener('click', function () {
		// 保证 input 中的值为数字
		codeTxt.value = codeTxt.value * 1
		inputTxt.value = inputTxt.value * 1
		if (codeTxt.value == inputTxt.value) {
			alert('验证成功！')
			checkNum()
		} else {
			alert('验证失败！')
			checkNum()
		}
	})
}
