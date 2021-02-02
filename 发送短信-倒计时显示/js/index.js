window.onload = function(){
	var btn = document.getElementById("btn");
	var time = 3;
	btn.addEventListener("click",function(){
		var timer = setInterval(function(){
			btn.disabled = false;
			if(time == 0){
				clearInterval(timer);
				btn.innerHTML = '发送';
				time = 3;
			}else{
				btn.disabled = true
				btn.innerHTML = '请等待'+ time +'秒';
				
			}
			time--;
		},1000)
	})
}