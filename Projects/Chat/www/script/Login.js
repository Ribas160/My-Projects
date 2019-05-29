document.getElementById("triangleStarted").addEventListener('click', enter);
document.getElementById("createAccount").addEventListener('click', function() {
  document.location.href = 'SignUp.html';
});


function enter(e) {
  let form = document.getElementById('form');
  let users = JSON.parse(localStorage.getItem('users'));
  let name = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let user = {
    name: name,
    password: password
  };
  for (let key in users) {
      if ((users[key].name === user.name) && (users[key].password === password)) {
        if (localStorage.getItem("client") === null) {
          let client = [];
          client.push(user.name);
          localStorage.setItem("client", JSON.stringify(client));
          e.preventDefault();
        } else {
          localStorage.removeItem('client');
          let client = [];
          client.push(user.name);
          localStorage.setItem("client", JSON.stringify(client));
          e.preventDefault();
        }
        alert("Добро пожаловать в чат");
        form.reset();
        document.location.href = "profile.html";
        return;
      }
  }
  alert("Вы ввели неверное имя или пароль");
  form.reset();
}
