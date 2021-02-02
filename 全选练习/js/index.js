window.onload = function () {
  // 获取四个多选框
  var items = document.getElementsByName('items');
  // 获取全选按钮
  var checkall = document.getElementById('checkall');
  // #allbtn 全选按钮
  var allbtn = document.getElementById('allbtn');
  allbtn.onclick = function () {
    var items = document.getElementsByName('items');
    for (var i = 0; i < items.length; i++) {
      items[i].checked = true;
    }
    checkall.checked = true;
  }
  // #nonebtn 全不选按钮
  var nonebtn = document.getElementById('nonebtn');
  nonebtn.onclick = function () {
    for (var i = 0; i < items.length; i++) {
      items[i].checked = false;
    }
    checkall.checked = false;
  }
  // #choicebtn 反选按钮 已经选中的变为未选中，未选中的变为选中
  var choicebtn = document.getElementById('choicebtn');
  choicebtn.onclick = function () {

    checkall.checked = true;
    for (var i = 0; i < items.length; i++) {
      // 当 items 出现 false 情况，全选按钮取消

      if (items[i].checked) {
        items[i].checked = false;
      } else {
        items[i].checked = true;
      }
      if (!items[i].checked) {
        checkall.checked = false;
      }
    }
  }
  // #submitbtn 提交按钮
  var submitbtn = document.getElementById('submitbtn');
  submitbtn.onclick = function () {
    for (var i = 0; i < items.length; i++) {
      if (items[i].checked) {
        alert(items[i].value);
      }
    }
  }

  // #checkall 全选/全不选
  var checkall = document.getElementById('checkall');
  checkall.onclick = function () {
    for (var i = 0; i < items.length; i++) {
      items[i].checked = checkall.checked;
    }
  }

  // 当手动更改 items ，全选/全不选按钮也会有相应的反应
  // --items 全部手动选中，全选按钮也选中
  // --items 有未选中，全选按钮取消
  for (var i = 0; i < items.length; i++) {
    items[i].onclick = function () {
      checkall.checked = true;
      for (var j = 0; j < items.length; j++) {
        // 当 items 出现 false 情况，全选按钮取消
        if (!items[j].checked) {
          checkall.checked = false;
          break;
        }
      }
    }
  }
};