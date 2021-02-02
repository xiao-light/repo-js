 // 参数：
  // --idstr 要绑定的 id 值
  // --fun   绑定的回调函数
  function myClick(idstr,fun){
    var idstr = document.getElementById(idstr);
    idstr.onclick = fun;
  };
window.onload = function(){
  //查找 #bj 节点
  var btn01 = document.getElementById('btn01');
  btn01.onclick = function(){
    var bj = document.getElementById('bj')
    alert(bj.innerText);
  };

  //查找所有 li 节点
  var btn02 = document.getElementById('btn02');
  btn02.onclick = function(){
    var lis = document.getElementsByTagName('li');
    for(var i=0 ; i < lis.length ; i++){
      alert(lis[i].innerHTML);
    };
  };
  
  //查找 name=gender 的所有节点
  // 读取 class 属性，可以用：元素.className
  var btn03 = document.getElementById('btn03');
  btn03.onclick = function(){
    var inputs = document.getElementsByName('gender');
    for(var i=0 ; i<inputs.length ; i++){
      alert(inputs[i].value);
    };
  };
  //查找 #city 下所有 li 节点
  var btn04 = document.getElementById('btn04');
  btn04.onclick = function(){
    var city = document.getElementById('city');
    var liss = city.getElementsByTagName('li');
    for(var i=0 ; i<liss.length ; i++){
      alert(liss[i].innerHTML);
    }
  };

  //返回 #city 的所有子节点
  // --在大部分浏览器中，空白也会被认定为是一个 text 节点（IE8 及以下不会认定空白为节点）
  // --使用 innerHTML 输出时，会显示 undefined
  var btn05 = document.getElementById('btn05');
  btn05.onclick = function(){
    var city = document.getElementById('city');
    // 元素.children 可以获取当前元素的子元素
    var cens = city.children;
    // alert(city.childElementCount);
    for( var i=0 ; i<city.childNodes.length ; i++){
      alert(city.children[i].innerText);
      // alert(city.childNodes[i].innerText);
    }
  };

  //返回 #phone 的第一个子节点
  // 有空白，返回 [object text] 
  var btn06 = document.getElementById('btn06');
  btn06.onclick = function(){
    var phone = document.getElementById('phone');
    // alert(phone.firstChild);
    // 返回子元素，（IE8 及以下不兼容）
    alert(phone.firstElementChild.innerText);
  }

  //返回 #bj 的父节点
  var btn07 = document.getElementById('btn07');
  btn07.onclick = function(){
    var bj = document.getElementById('bj');
    // innerText --> 获取元素内部的文本内容
    // innerHTML --> 获取元素的整个内容（包括标签）
    alert(bj.parentNode.innerText);
  }

  //返回 #android 的前一个兄弟节点
  myClick("btn08",function(){
    var andr = document.getElementById('android');
    // 返回了一个空白对象
    // previousElementSibling 返回前一个（不包括空白的兄弟节点），IE8 及以下不支持
    alert(andr.previousSibling); 
  })
  
  //返回 #username 的 value 属性值
  myClick("btn09",function(){
    var username = document.getElementById('username');
    alert(username.value);
  })

  //设置 #username 的 value 属性值
  myClick("btn10",function(){
    var uname = document.getElementById('username');
    uname.value = "今天天气不错！";
  })

  //返回 #bj 的文本值
  myClick("btn11",function(){
    var bj = document.getElementById('bj');
    alert(bj.innerText);
  })
};