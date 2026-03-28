// import { getImagesByQuery } from './js/pixabay-api.js';
// import {
//   createGallery,
//   clearGallery,
//   showLoader,
//   hideLoader,
// } from './js/render-functions.js';

// const form = document.querySelector('.form');
// form.addEventListener('submit', handleSubmit);

// async function handleSubmit(e) {
//   e.preventDefault();
//   const searchText = e.target.elements['search-text'];
//   if (searchText.value.trim() === '') {
//     alert('input text mandatory');
//     return;
//   }
//   const data = await getImagesByQuery(searchText);

//   console.log(data);
// }



++++++++++++++++++++++++++++++++++++++++++++

// import { getImagesByQuery } from './js/pixabay-api.js';
// import {
//   createGallery,
//   clearGallery,
//   showLoader,
//   hideLoader,
// } from './js/render-functions.js';

// const form = document.querySelector('.form');
// form.addEventListener('submit', handleSubmit);

// async function handleSubmit(e) {
//   e.preventDefault();

//   const input = e.target.elements['search-text'];
//   const query = input.value.trim();

//   if (query === '') {
//     alert('Please enter a search term');
//     return;
//   }

//   clearGallery(); // Очищаємо перед новим пошуком
//   showLoader(); // Показуємо лоадер

//   try {
//     // Передаємо саме рядок (query), а не весь input
//     const data = await getImagesByQuery(query);

//     if (data.hits.length === 0) {
//       alert('Sorry, no images found.');
//     } else {
//       // ВИКЛИКАЄМО функцію для малювання картинок
//       createGallery(data.hits);
//     }
//   } catch (error) {
//     console.error('Помилка при завантаженні:', error);
//   } finally {
//     hideLoader(); // Приховуємо лоадер у будь-якому випадку
//     form.reset(); // Очищаємо форму
//   }
// }