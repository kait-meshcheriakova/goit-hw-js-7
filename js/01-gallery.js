import { galleryItems } from "./gallery-items.js";
// Change code below this line
const container = document.querySelector(".gallery");

container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
container.addEventListener("click", handlerImageClick);

function createMarkup(galleryItems) {
  return galleryItems
    .map(
      (img) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${img.original}">
     <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
     />
   </a>
  </li>`
    )
    .join("");
}

function handlerImageClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}">
`,
    {
      handler: null,
      onShow(instance) {
        this.handler = closeModal.bind(instance);
        document.addEventListener("keydown", this.handler);
      },
      onClose(instance) {
        document.removeEventListener("keydown", this.handler);
      },
    }
  );

  instance.show();
}

function closeModal(event) {
  if (event.code === "Escape") {
    this.close();
  }
}
