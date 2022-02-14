// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

function addGalleryMarkup(images) {
  const markup = images.map(image => createGalleryMarkup(image)).join('');

  return (galleryRef.innerHTML = markup);
}

function createGalleryMarkup(image) {
  const { original, preview, description } = image;
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}

addGalleryMarkup(galleryItems);

galleryRef.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
}

const gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
