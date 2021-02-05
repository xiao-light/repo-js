window.onload = function () {
	var btns = document.getElementsByTagName('button')
	var img = document.getElementsByTagName('img')
	// 需求：将鼠标移到 btns 上，对应的 img 会显示出来，其余时候 img 都不显示
	// 1、隐藏 img
	for (var i = 0; i < img.length; i++) {
		img[i].style.display = 'none'
	}
	// 2、为 btns 绑定 mouseover 和 mouseleave 事件
	for (var i = 0; i < btns.length; i++) {
		btns[i].index = i

		btns[i].addEventListener('mouseover', function () {
			img[this.index].style.display = 'block'
		})
		btns[i].addEventListener('mouseleave', function () {
			img[this.index].style.display = 'none'
		})
	}
}
