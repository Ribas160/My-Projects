document.getElementById('nextStep').addEventListener('click', login);
document.getElementById('icon-Back').addEventListener('click', function() {
  document.location.href = 'Login.html';
})

function login(e) {
  let form = document.getElementById('form');
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let phone = document.getElementById('phone').value;


  let user = {
    name: name,
    email: email,
    password: password,
    phone: phone
  };

  if (name && email && password && phone != 0) {
    if (localStorage.getItem('users') === null) {
      let users = [];
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      alert("Вы успешно зарегестрированны!");
      form.reset();
      document.location.href = 'Login.html';
      e.preventDefault();
    } else {
      let users = JSON.parse(localStorage.getItem('users'));
      for (let key in users) {
        if (users[key].email === user.email) {
          alert("Данный Email уже зарегестрирован");
          form.reset();
          exit();
        } else if (users[key].phone === user.phone) {
          alert("Данный номер телефона уже используется");
          form.reset();
          exit();
        }
      }
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      alert("Вы успешно зарегестрированны!");
      form.reset();
      document.location.href = 'Login.html';
    }
  } else if (name == 0) {
    alert("Введите свое имя");
  } else if (email == 0) {
    alert("Введите свой email")
  } else if (password == 0) {
    alert("Введите свой пароль")
  } else {
    alert("Введите номер вашего телефона")
  }
  e.preventDefault();
}
