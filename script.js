const PHOTOS = [
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
];

const PHOTOS_ALT = [
  "Friemersheimer Mühle mit Metal-Heads-Logo",
  "Rage against Racism-Festival 2024 in Duisburg",
  "Rage against Racism-Festival 2025 in Duisburg",
  "Olgas Rock-Festival 2025 in Oberhausen",
  "ONYXSIN - Glowing Ember Festival 2023 in Oberhausen",
  "Jakob (ONYXSIN) - Glowing Ember Festival 2023 in Oberhausen",
  "Joan (ONYXSIN) - Glowing Ember Festival 2023 in Oberhausen",
  "Gary (ONYXSIN) - Glowing Ember Festival 2023 in Oberhausen",
  "Chris (ONYXSIN) - Glowing Ember Festival 2023 in Oberhausen",
  "ONYXSIN: Glowing Ember Festival 2023 in Oberhausen",
  "Joan (ONYXSIN) - Glowing Ember Festival 2023 in Oberhausen",
  "ONYXSIN-Crowd - Glowing Ember Festival 2023 in Oberhausen",
];

let currentPhotoIndex = 0; // wird unten für das Durchklicken der Fotos benötigt, der Wert wird später überschrieben

// 
function renderPhotoPreviewGallery() {
  let photoPreviewGallery = document.getElementById("photo_preview_gallery");
  photoPreviewGallery.innerHTML = ""; // brauche ich die Leerung???

  for (let i = 0; i < PHOTOS.length; i++) {
    photoPreviewGallery.innerHTML += getPhotoPreviewGalleryTemplate(i);
  }
}

//////////////////// Lightbox (= Dialog) öffnen/schließen

const lightboxRef = document.getElementById("lightbox"); // das muss eine globale Variable sein, da mehrere Funktionen darauf zugreifen

function openLightbox(i) {
  // const lightboxRef = document.getElementById("lightbox"); // muss das vielleicht eine globale Variable sein? --> JA
  // const photoLightbox = document.getElementById("photo_lightbox");
  // const footerLightbox = document.getElementById("footer_Lightbox");
  currentPhotoIndex = i;
  renderLightbox();

  lightboxRef.showModal(); // .showModal = Dialog/Lightbox wird geöffnet
}

function renderLightbox() {
  const headerLightbox = document.getElementById("header_lightbox");
  const photoLightbox = document.getElementById("photo_lightbox");
  const footerLightbox = document.getElementById("footer_lightbox");

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
    currentPhotoIndex = PHOTOS.length - 1; // zum letzten Bild springen
  }
  renderLightbox();
}

function showNextPhoto() {
  if (currentPhotoIndex < PHOTOS.length - 1) {
    currentPhotoIndex++;
  } else {
    currentPhotoIndex = 0; // zum ersten Bild springen
  }
  renderLightbox();
}
