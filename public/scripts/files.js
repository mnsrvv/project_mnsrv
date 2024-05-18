const buttonChange = document.querySelector('.buttonChange');
const buttonDelete = document.querySelector('.buttonDelete');

if (buttonDelete) {
  buttonDelete.addEventListener('click', async (event) => {
    try {
      const messageConfirm = confirm('Удалить данный файл?');

      if (messageConfirm) {
        const id = event.target.closest('.main-stack').dataset.id;
        const res = await fetch(`/api/file/delete/${id}`, {
          method: 'DELETE',
        });

        const data = await res.json();

        if (data.message === 'success') {
          location.href = document.referrer;
        } else {
          alert(data.message);
        }
      }
    } catch (error) {
      alert(error.message);
    }
  });
}
