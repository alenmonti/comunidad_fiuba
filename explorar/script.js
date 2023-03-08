const select = document.querySelector('#category');
const search = document.querySelector('#search');
const contents = document.querySelectorAll('.content');

function filterContents() {
  const category = select.value.toLowerCase();
  const keyword = search.value.trim().toLowerCase();

  for (const content of contents) {
    const contentCategory = content.classList[1];

    if ((category === '' || contentCategory === category) &&
        (keyword === '' || content.textContent.toLowerCase().includes(keyword))) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  }
}

select.addEventListener('change', filterContents);
search.addEventListener('input', filterContents);
