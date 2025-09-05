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

// Lightbox (= Dialog) öffnen/schließen

const lightboxRef = document.getElementById("lightbox");

function openLightbox(i) {
  const lightboxRef = document.getElementById("lightbox");
  const photoLightbox = document.getElementById("photoLightbox");

  // Statt Inline-HTML jetzt Template verwenden
  photoLightbox.innerHTML = getPhotoLightboxTemplate(i);

  lightboxRef.showModal(); // .showModal = Dialog/Lightbox wird geöffnet
}

function closeLightbox() {
  lightboxRef.close();
}

function closeLightboxBubblingProtection(event) { 
  event.stopPropagation(); // bei den Event "click" wird der Bubbling-Effekt (also das Durchgreifen auf die unteren Ebenen) vermieden
}
