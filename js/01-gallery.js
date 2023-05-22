import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description } = {}) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
};

const galleryItemsArr = galleryItems.map((galleryItem) => {
  return createGalleryItem(galleryItem);
});

galleryEl.insertAdjacentHTML("afterbegin", galleryItemsArr.join(""));

galleryEl.addEventListener("click", onGalleryElClick);

function onGalleryElClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imageOriginalSrc = event.target.dataset.source;
  const imageAlt = event.target.alt;

  createGalleryImageModal({ src: imageOriginalSrc, alt: imageAlt });
}

function createGalleryImageModal({ src, alt }) {
  const galleryImageModal = basicLightbox.create(
    `<img
        src="${src}"
        alt="${alt}"
      />`
  );

  galleryImageModal.show(() => {
    window.addEventListener("keydown", onEscKeyDown);
  });

  function onEscKeyDown(event) {
    if (event.code === "Escape") {
      galleryImageModal.close(() => {
        window.removeEventListener("keydown", onEscKeyDown);
      });
    }
  }
}
