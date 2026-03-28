import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

// Додаємо слухача подій
form.addEventListener('submit', handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();

  // Використовуйте ту назву, яка вказана в HTML (name="search-text")
  const query = e.currentTarget.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'Please enter a search term',
      position: 'topRight',
    });
    return;
  }

  clearGallery(); // Очищаємо галерею перед новим пошуком
  showLoader(); // Показуємо лоадер

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong!',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader(); // Приховуємо лоадер
    e.target.reset(); // Очищаємо форму
  }
}
