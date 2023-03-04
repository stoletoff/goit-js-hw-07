import { galleryItems } from "./gallery-items.js";
// Change code below this line

// preview:
// original:
// description:

// 1. Создание и рендер разметки по массиву данных galleryItems
// и предоставленному шаблону элемента галереи.
// 2. Реализация делегирования на div.gallery и получение url
// большого изображения.
// 3. Подключение скрипта и стилей библиотеки
// модального окна basicLightbox.
// 4. Используй CDN сервис jsdelivr и добавь в проект
// ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи.
// Для этого ознакомься с документацией и примерами.
// 5. Замена значения атрибута src элемента <img>
// в модальном окне перед открытием. Используй
// готовую разметку модального окна с изображением из
// примеров библиотеки basicLightbox.

// ---------  1. Создание ф-ции создающую шаблон разметки

function makeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`;
    })
    .join(" ");
}

// ---------  2. Создание Делегирования событий на div.gallery, получение значения URL

const galleryContainer = document.querySelector(".gallery");
// console.log(galleryContainer);
const galleryMarkup = makeGalleryMarkup(galleryItems);
// console.log(galleryMarkup);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(event.target);
  const currentURL = event.target.dataset.source;
  console.log(currentURL);
  openModalWindow(currentURL);
}

// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

// 4 Открытие модального окна по клику на элементе галереи.
// Замена значения атрибута src элемента <img>
function openModalWindow(URL) {
  window.addEventListener("keydown", onEscKeyDown);
  const modalWindow = basicLightbox.create(
    `<img src="${URL}">`
  );
  modalWindow.show();

  function onEscKeyDown(event) {
    if (event.code === "Escape") {
      modalWindow.close();
    }
    window.removeEventListener("keydown", onEscKeyDown);
  }
}
