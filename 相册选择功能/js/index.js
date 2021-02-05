window.onload = function () {
	// 逻辑：将鼠标移动到 small 图片上，big 图片会跟着改变，
	//       最后移出的图片是 big 最终的显示图片

	var big = document.getElementById('big')
	// console.log(big)
	var imgs = document.querySelectorAll('.small img')
	// console.log(imgs)

	for (var i = 0, len = imgs.length; i < len; i++) {
		imgs[i].addEventListener('mouseover', function () {
			big.src = this.src
		})
	}
}
