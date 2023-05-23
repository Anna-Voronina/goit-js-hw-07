import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description } = {}) => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
};

const galleryItemsArr = galleryItems.map((galleryItem) => {
  return createGalleryItem(galleryItem);
});

galleryEl.insertAdjacentHTML("afterbegin", galleryItemsArr.join(""));

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
