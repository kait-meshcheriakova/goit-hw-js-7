import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector(".gallery");
console.log(container);


function createMarkup( galleryItems){
    
    return  galleryItems.map((img ) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
  </li>`).join("")
}
container.insertAdjacentHTML('beforeend', createMarkup( galleryItems));

container.addEventListener("click ", handlerImageClick);
let instance; 
function handlerImageClick (event){
  event.preventDefault()
 
    if (!event.target.classList.contains("gallery__image")){
       return}
        instance = basicLightbox.create(`
       <img src="${target.getAttribute('data-source')}">
     `, {
           onShow() {
               document.addEventListener('keydown', closeModal);
           },
           onClose() {
               document.removeEventListener('keydown', closeModal);
           },
       });
       instance.show();
   }
   
   
   function closeModal(event) {
       if (event.code === 'Escape') {
           instance.close()
       }
   }


