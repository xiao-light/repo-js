window.onload = function () {
	var move = document.getElementById('moveBtn')
	var stop = document.getElementById('stopBtn')
	var box = document.querySelector('.box')
	var num = 10
	var timer
	move.addEventListener('click', function () {
		clearInterval(this.timer)
		if (num == 1000) {
			num = 10
		}
		this.timer = setInterval(() => {
			num++
			box.style.marginLeft = num + 'px'
			if (num == 1000) {
				clearInterval(this.timer)
			}
			stop.addEventListener('click', function () {
				if (move.timer) {
					clearInterval(move.timer)
				} else {
				}
			})
		}, 5)
	})

	stop.addEventListener('click', function () {})
}
