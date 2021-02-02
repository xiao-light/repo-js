// 删除 tr 的响应函数
function delA() {
  // 获取 tr
  var tr = this.parentNode.parentNode;
  // 获取要删除的名字
  var name = tr.getElementsByTagName('td')[0].innerHTML;
  // 删除之前，先提示
  var flag = confirm("确认删除" + name + "吗？");
  if (flag) {
    // 删除 tr
    tr.parentNode.removeChild(tr);
  }
  // 阻止超链接的跳转
  return false;
}

window.onload = function () {

  // 点击 delete ，删除员工，即删除 a 标签的父亲的父亲（tr 标签）
  var allA = document.getElementsByTagName('a');
  for (var i = 0; i < allA.length; i++) {
    allA[i].onclick = delA;
  }
  // 点击提交按钮，添加员工信息
  var btn = document.getElementById('btn');
  btn.onclick = function () {
    // 获取输入框内容
    // #empName 输入框 name
    var empName = document.getElementById('empName').value;
    // #empEmail 输入框 email
    var empEmail = document.getElementById('empEmail').value;
    // #empSalary 输入框 salary
    var empSalary = document.getElementById('empSalary').value;

    // ---------创建结构：------------
    /*
    *<tr>
    *  <td>tom</td>
    *  <td>tom@tom.com</td>
    *  <td>1000</td>
    *  <td><a href="deleteEmp?id=001">delete</a></td>
    *</tr>
    */

    // 创建 tr
    var tr = document.createElement('tr');
    // 创建4个 td
    var nametd = document.createElement('td');
    var emailtd = document.createElement('td');
    var salarytd = document.createElement('td');
    var atd = document.createElement('td');
    // 创建一个 a 元素
    var a = document.createElement('a');
    // 创建文本节点
    var nameText = document.createTextNode(empName);
    var emailText = document.createTextNode(empEmail);
    var salaryText = document.createTextNode(empSalary);
    var delText = document.createTextNode("delete");

    // 将文本添加到 td 中
    nametd.appendChild(nameText);
    emailtd.appendChild(emailText);
    salarytd.appendChild(salaryText);

    // 将文本添加到 a 标签中
    a.appendChild(delText);
    // 将 a 标签添加到 td 中
    atd.appendChild(a);

    // 将 td 添加到 tr 中
    tr.appendChild(nametd);
    tr.appendChild(emailtd);
    tr.appendChild(salarytd);
    tr.appendChild(atd);

    // 向 a 标签添加一个 href 属性
    a.href = "javascript:;";
    /*
    *为新添加的 a 标签添加一个单击响应函数
    *--原来的单击事件，是在页面加载完成，就加载好了
    *--现在的新的标签，是页面加载之后添加的
    *--所以需要重新绑定单击响应函数
    */
    a.onclick = delA;

    /*----------创建结构02：--------
    *
    *--创建一个 tr 标签
    * var tr = document.createElement("tr");
    *--设置 tr 中的内容
    * tr.innerHTML = "<td>" + empName + "</td>" +
    *                "<td>" + empEmail + "</td>" +
    *                "<td>" + empSalary + "</td>" +
    *                "<td><a href='javascript:;'>delete</a></td>";
    *--为新添加的 a 标签绑定单击响应函数
    * var a = tr.getElementsByTagName("a")[0];
    * a.onclick = delA;
    */

    // 将 tr 添加到 table 中
    // 获取 tab01
    var tab01 = document.getElementById("tab01");
    // 获取 tab01 中的 tbody
    /*
    *--table 的现有标签，是放到 tbody 中，
    *--后面添加的所有标签，在 tbody 的外面
    *--导致循环遍历找不到，无法实现 delete 的功能
    */
    var tbody = tab01.getElementsByTagName("tbody")[0];

    tbody.appendChild(tr);
  }


};