const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', (event) => {
    event.preventDefault();
    dropdown.classList.toggle('active');
  });
});

const submenuItems = dropdown.querySelectorAll('.submenu li');
submenuItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.stopPropagation(); // prevent the dropdown from closing
  });
});
