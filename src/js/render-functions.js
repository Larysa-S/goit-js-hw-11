import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Знаходимо елементи DOM
const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// Створюємо екземпляр SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" />
          <div class="info">
            <p><b>Likes</b> ${image.likes}</p>
            <p><b>Views</b> ${image.views}</p>
            <p><b>Comments</b> ${image.comments}</p>
            <p><b>Downloads</b> ${image.downloads}</p>
          </div>
        </a>
      </li>
    `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh(); // Обов'язкове оновлення для нових елементів
}

// Очищення галереї
export function clearGallery() {
  galleryContainer.innerHTML = '';
}

// Показ лоадера (додаємо клас, який робить його видимим)
export function showLoader() {
  loader.classList.add('is-visible');
}

// Приховування лоадера (прибираємо клас видимості)
export function hideLoader() {
  loader.classList.remove('is-visible');
}
