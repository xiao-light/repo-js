window.onload = function () {
	var lis = document.getElementsByTagName('li')
	for (var i = 0; i < lis.length; i++) {
		lis[i].addEventListener('click', function () {
			if (this.innerText) {
				this.style.backgroundColor = '#ccc'
				this.innerText = ''
			} else {
				this.style.backgroundColor = '#83FFE6'
				this.innerText = '座位已选'
			}
		})
	}
}
