var button = document.getElementById('button');

button.addEventListener('click', () => {

// ①セレクターを指定して要素を取得：querySelector()
var input_name = document.querySelector("input[name='input_name']");
console.log(input_name.value);

// ②子要素を取得
var list = document.querySelector('ul');
var child_nodes_count = list.childElementCount; // 子要素の数を取得

for(var i = 0; i < child_nodes_count; i++) {
console.log(list.children[i].textContent);
}

// ③子要素を追加：appendChild()
var li = document.createElement('li')
li.textContent = 'listD';
list.appendChild(li);

// ④属性値の取得と更新：getAttribute()/setAttribute()
var button = document.getElementById('button');
var button_value = button.getAttribute('value');
console.log(button_value);
button.setAttribute('value', 'click me!');

});