const text = document.querySelector('.text');
const addButton = document.querySelector('.add-button');
const list = document.querySelector('.itemList');
const content = document.querySelector('.itemList').innerHTML.trim();
const listItem = document.querySelector('li');

let data = [];

//資料初始化，建立資料結構
function renderData() {
  let str = '';
  data.forEach(function (item, index) {
    str += `<li class="item">
    <p>${item.content}</p>
    <input type="button" data-num="${index}" value="刪除" class="button delete" id="item">
  </li>`;
  });
  list.innerHTML = str;
}
//renderData();

//新增資料
addButton.addEventListener('click', () => {
  let content = text.value;
  let obj = { content: content };
  if (content == '') {
    alert('請輸入代辦事項');
  }
  data.push(obj);
  renderData();
  text.value = '';
});

//刪除資料
list.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'INPUT') {
    alert('你沒點擊到刪除');
  }
  let targetNum = e.target.getAttribute('data-num');
  data.splice(targetNum, 1);
  renderData();
  // console.log(target, data);
  // console.log(e.target.getAttribute("class"));
});
