import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const mainContainerGalleryRef = document.querySelector('.gallery');

function createGalleryCardEl(galleres) {
  return galleres
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__item" href="${original}">
                  <img class="gallery__image" src="${preview}" alt="${description}" />
                </a> `;
    })
    .join('');
}

mainContainerGalleryRef.insertAdjacentHTML(
  'beforeend',
  createGalleryCardEl(galleryItems)
);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
