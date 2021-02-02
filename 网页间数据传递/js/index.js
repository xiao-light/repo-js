window.onload = function () {
  // ?uname=133233
  // 第一步 去掉 ？ substr('起始的位置'，截取几个字符);
  var params = location.search.substr(1);// uname=133233

  // 第二步 利用 = 把字符串分割 split('=');
  var arr = params.split('=');// [uname,133233]

  // 第三步 把数据写入页面
  var msg = document.getElementById("msg");
  msg.innerHTML = '你好' + arr[1] + '，欢迎登陆！';

};