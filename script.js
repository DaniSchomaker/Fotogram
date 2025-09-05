const photos = [
  "./assets/img/IMG_20240601_160539226_HDR.jpg",
  "./assets/img/IMG_20240601_161104620_HDR.jpg",
  "./assets/img/IMG_20250621_173857854_HDR.jpg",
  "./assets/img/IMG_20250809_144251419.jpg",
  "./assets/img/IMG-20230423-WA0026.jpg",
  "./assets/img/IMG-20230423-WA0045.jpg",
  "./assets/img/IMG-20230423-WA0028.jpg",
  "./assets/img/IMG-20230423-WA0039.jpg",
  "./assets/img/IMG-20230423-WA0044.jpg",
  "./assets/img/IMG-20230423-WA0036.jpg",
  "./assets/img/IMG-20230423-WA0027.jpg",
  "./assets/img/IMG-20230416-WA0015.jpg",
  "./assets/img/IMG-20230424-WA0005.jpg",
];

const photosAlt = [
  "Friemersheimer Mühle mit Metal Heads-Logo",
  "Alt2",
  "Alt3",
  "Alt4",
  "Alt5",
  "Alt6",
  "Alt7",
  "Alt8",
  "Alt9",
  "Alt10",
  "Alt11",
  "Alt12",
  "Alt13",
];

let currentPhotoIndex = 0; // wird unten für das Durchklicken der Fotos benötigt, der Wert wird später überschrieben

function init() {
  renderPhotoPreviewGallery();
}

function renderPhotoPreviewGallery() {
  let photoPreviewGallery = document.getElementById("photoPreviewGallery");
  photoPreviewGallery.innerHTML = ""; // brauche ich die Leerung???

  for (let i = 0; i < photos.length; i++) {
    photoPreviewGallery.innerHTML += getPhotoPreviewGalleryTemplate(i);
  }
}

//////////////////// Lightbox (= Dialog) öffnen/schließen

const lightboxRef = document.getElementById("lightbox"); // das muss eine globale Variable sein, da mehrere Funktionen darauf zugreifen

function openLightbox(i) {
  // const lightboxRef = document.getElementById("lightbox"); // muss das vielleicht eine globale Variable sein? --> JA
  // const photoLightbox = document.getElementById("photoLightbox");
  // const footerLightbox = document.getElementById("footerLightbox");
  currentPhotoIndex = i;
  renderLightbox();

  lightboxRef.showModal(); // .showModal = Dialog/Lightbox wird geöffnet
}

function renderLightbox() {
  const headerLightbox = document.getElementById("headerLightbox");
  const photoLightbox = document.getElementById("photoLightbox");
  const footerLightbox = document.getElementById("footerLightbox");

  headerLightbox.innerHTML = getHeaderLightboxTemplate(currentPhotoIndex);
  photoLightbox.innerHTML = getPhotoLightboxTemplate(currentPhotoIndex);
  footerLightbox.innerHTML = getFooterLightboxTemplate(currentPhotoIndex);
}

function closeLightbox() {
  lightboxRef.close();
}

function closeLightboxBubblingProtection(event) {
  event.stopPropagation(); // bei den Event "click" wird der Bubbling-Effekt (also das Durchgreifen auf die unteren Ebenen) vermieden
}

// Buttons vorheriges bzw. nächstes Foto

function showPreviousPhoto() {
  if (currentPhotoIndex > 0) {
    currentPhotoIndex--;
  } else {
    currentPhotoIndex = photos.length - 1; // zum letzten Bild springen
  }
  renderLightbox();
}

function showNextPhoto() {
  if (currentPhotoIndex < photos.length - 1) {
    currentPhotoIndex++;
  } else {
    currentPhotoIndex = 0; // zum ersten Bild springen
  }
  renderLightbox();
}
