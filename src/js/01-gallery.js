// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery')
const galeryList = galleryItems.map(item => {
    return `
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>`
}).join(' ');
gallery.insertAdjacentHTML('beforeend', galeryList)

const lightbox = new SimpleLightbox('.gallery a', {  captionsData: 'alt',  captionDelay: 250,});

