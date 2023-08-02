import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector(".gallery");

function createMarkup(galleryItems){
    return  galleryItems.map((img ) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      alt="${img.description}"
    />
  </a>
  </li>`).join("")
}
// const markup = galleryItems.map(image => {
//     return `<li class = "gallery__item" ><a class="gallery__link" href="${image.original}"><img src="${image.preview}"  class="gallery__image" alt ="${image.description}" /></a></li>`
// }).join('');
 container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
// container.insertAdjacentHTML('beforeend', markup)
container.addEventListener("click ", handlerImageClick);
// let lightbox= new SimpleLightbox('.gallery li a', { captionType: 'attr', captionsData: 'alt', captionDelay: 250 });
function handlerImageClick(event) {
    event.preventDefault()
    if (!event.currenTarget.classList.contains("gallery__image")) {
         return
    }
    
 }
 let lightbox= new SimpleLightbox('.gallery li a', { captionType: 'attr', captionsData: 'alt', captionDelay: 250 });
