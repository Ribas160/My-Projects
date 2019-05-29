let realTime = document.getElementById('real-time');
let client = JSON.parse(localStorage.getItem('client'));
let name = document.getElementById('user');
name.innerHTML = client;
window.onload = function time() {
  (function() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM':'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let time = hours + ':' + minutes + ' ' + ampm;
    realTime.innerHTML = time;
    window.setTimeout(arguments.callee, 1000);
  }) ();
}
document.getElementById('back-arrow').addEventListener('click', link);

function link() {
  document.location.href = 'profile.html';
}
