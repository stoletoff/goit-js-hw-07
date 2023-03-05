import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

function makeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
     `;
    })
    .join(" ");
}
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = makeGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
// const lightbox = $('.gallery > a').simpleLightbox({
//   captionDelay: 250,captionsData: "alt",
//
// });

const lightbox = new SimpleLightbox(".gallery > a", {
  captionDelay: 250,
  captionsData: "alt",
});
