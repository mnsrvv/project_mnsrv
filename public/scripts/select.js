const select = document.getElementById('facultySelect');

if (select) {
  select.addEventListener('change', function () {
    try {
      const faculty = this.value;
      const groupSelect = document.getElementById('groupSelect');
      while (groupSelect.firstChild) {
        groupSelect.removeChild(groupSelect.firstChild);
      }
      let groups;
      switch (faculty) {
        case '1':
          groups = ['20490', '20491'];
          break;
        case '2':
          groups = ['3470', '3471'];
          break;
        default:
          groups = [];
      }
      groups.forEach(function (group) {
        const option = document.createElement('option');
        option.text = group;
        option.value = group;
        groupSelect.add(option);
      });
    } catch (error) {
      alert(error.message);
    }
  });
}

const sortSelect = document.getElementById('sortSelect');
const sortOrder = document.getElementById('sortOrder');
const ascendingRadio = document.getElementById('ascending');
const descendingRadio = document.getElementById('descending');

if (sortSelect && sortOrder && ascendingRadio && descendingRadio) {
  sortSelect.addEventListener('change', () => {
    if (
      sortSelect.value === '1' ||
      sortSelect.value === '2' ||
      sortSelect.value === '3'
    ) {
      sortOrder.style.display = 'block';
    } else {
      sortOrder.style.display = 'none';
    }

    ascendingRadio.checked = false;
    descendingRadio.checked = false;
  });
}
