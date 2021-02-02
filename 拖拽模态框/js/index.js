window.onload = function () {
  var login = document.getElementById("login");
  var bg = document.getElementById("bg");
  var link = document.getElementById("link");
  var closeBtn = document.getElementById("closeBtn");
  var title = document.getElementById("title");
  // 封装点击事件
  function myClick(btnStr, fun) {
    btnStr.onclick = fun;
    // console.log(1);
  }
  // 点击弹出
  myClick(link, function () {
    login.style.display = 'flex';
    bg.style.display = 'block';
  })
  // 点击关闭
  myClick(closebtn, function () {
    login.style.display = 'none';
    bg.style.display = 'none';
  })
  //拖拽弹出框 --按下鼠标 移动鼠标 放下鼠标
  // 按下鼠标 mousedown ，事件开始
  title.addEventListener('mousedown', function (e) {
    var x = e.pageX - login.offsetLeft;
    var y = e.pageY - login.offsetTop;
    // 移动鼠标 mousemove ，弹出框跟随移动
    document.addEventListener('mousemove', move);
    function move(e) {
      login.style.left = e.pageX - x + 'px';
      login.style.top = e.pageY - y + 'px';
    }
    // 鼠标弹起 mouseup ,解除弹出框跟随移动
    document.addEventListener('mouseup', function () {
      document.removeEventListener('mousemove', move);
    })

  })

}