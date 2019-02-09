
var form = document.getElementById('Add-form');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteItem);
filter.addEventListener('keyup', filterItems);

function addItem(e) {
  e.preventDefault();
  var newItem = document.getElementById('item').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
  var delButton = document.createElement('button');
  delButton.className = 'btn btn-outline-danger float-right btn-sm delete';
  delButton.appendChild(document.createTextNode('X'));
  itemList.appendChild(li);
  li.appendChild(delButton);
}

function deleteItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure you want to delete this ?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none'
    }
  })
}
