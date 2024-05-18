const reg = document.querySelector('.registration');
const log = document.querySelector('.authorization');

if (reg) {
  reg.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { name, email, password, rPassword } = event.target;
    const { faculty, group } = event.target.elements;

    try {
      const res = await fetch('/api/auth/sign-up', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value,
          rPassword: rPassword.value,
          faculty: faculty.value,
          group: group.value,
        }),
      });

      const data = await res.json();

      if (data.message === 'success') {
        alert('Регистрация прошла успешно!');
        window.location.assign('/auth/sign-in');
      } else if (data.message === 'error') {
        alert('Пользователь уже существует!');
      } else if (data.message === 'trim') {
        alert('Некорректно введены данные!');
      } else if (data.message === 'password') {
        alert('Пароли не совпадают!');
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  });
}

if (log) {
  log.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { email, password } = event.target;

    try {
      const res = await fetch('/api/auth/sign-in', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ email: email.value, password: password.value }),
      });

      const data = await res.json();

      if (data.message == 'success') {
        window.location.assign('/');
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  });
}
