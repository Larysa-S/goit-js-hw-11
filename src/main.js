import { getImagesByQuery } from './js/pixabay-api.js';
//import moduleName from './js/render-functions.js';

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const searchText = e.target.elements['search-text'];
  if (searchText.value.trim() === '') {
    alert('input text mandatory');
    return;
  }
  const data = getImagesByQuery(searchText);
  console.log(data);
}
