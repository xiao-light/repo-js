window.onload = function(){

  //获取按钮
  var btn01 = document.getElementById('btn01');
  var btn02 = document.getElementById('btn02');

  // 获取 img 标签
  var img = document.getElementById('img');

  // 获取 p 标签
  var txt01 = document.getElementById('txt01');
  var txt02 = document.getElementById('txt02');

  // 将 img 路径写到数组里面
  var imgArr = ["img/001img.jpg","img/002img.jpg",
                "img/003img.jpg","img/004img.jpg",
                "img/005img.jpg","img/006img.jpg"];

  // 创建一个索引
  var index = 0;
  txt01.innerText = imgArr.length;
  txt02.innerText = index+1;
  //绑定单击函数
  // btn01 上一张
  btn01.onclick = function(){
    // alert('上');
    index--;
    if(index == -1){
      index = imgArr.length-1;
    };
    img.src = imgArr[index];
    txt02.innerText = index+1;
  };
  // btn02 下一张
  btn02.onclick = function(){
    // alert('下');
    index++;
    if(index == imgArr.length){
      index = 0;
    };
    img.src = imgArr[index];
    txt02.innerText = index+1;
  }; 

};