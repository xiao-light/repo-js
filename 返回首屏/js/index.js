window.onload = function () {
	var backBtn = document.querySelector('.back')
	window.onscroll = function () {
		var res = document.body.scrollTop || document.documentElement.scrollTop
		if (res >= 300) {
			backBtn.style.display = 'block'
		} else {
			backBtn.style.display = 'none'
		}
	}
	backBtn.addEventListener('click', function () {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	})
}
