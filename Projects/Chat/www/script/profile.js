let client = JSON.parse(localStorage.getItem('client'));
let name = document.getElementById('user');

name.innerHTML = client;

document.getElementById('chat').addEventListener('click', function() {
  document.location.href = 'chat.html';
});
