import { galleryItems } from './gallery-items.js';
const listEl = document.querySelector('.gallery')

const imgItem =({preview, original, description}) =>(
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}" 
            />
        </a>
    </li>`
    );

imgItem(galleryItems)

const galleryImgArr = galleryItems.map(imgItem)   
listEl.insertAdjacentHTML('beforeend', galleryImgArr.join(''));
  
const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt"
});