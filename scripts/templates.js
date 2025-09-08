// Photo Preview Gallery

function getPhotoPreviewGalleryTemplate(i) {
  return `
    <div class="photo_preview">
      <img src="${PHOTOS[i]}" alt="${PHOTOS_ALT[i]}" onclick="openLightbox(${i})">
    </div>`;
}

// Lightbox

function getHeaderLightboxTemplate(i) {
  return `
    <h2>${PHOTOS_ALT[i]}</h2>
    <button onclick="closeLightbox()">
    <img src="./assets/icons/Icon_X_ChatGPT.png" alt="Schließen-Button" class="icon_lightbox" />
    </button>`;
}

function getPhotoLightboxTemplate(i) {
  return `
    <img src="${PHOTOS[i]}" alt="${PHOTOS_ALT[i]}" class="photo_lightbox">`;
}

function getFooterLightboxTemplate(i) {
  return `
    <button onclick="showPreviousPhoto()">
    <img
      src="./assets/icons/Icon_Pfeil_links_ChatGPT.png"
      alt="Navigationspfeil: ein Foto zurück"
      class="icon_lightbox"/>
    </button>
    <span class="photo_number">${i + 1}/${PHOTOS.length}</span>
    <button onclick="showNextPhoto()">
    <img
      src="./assets/icons/Icon_Pfeil_rechts_ChatGPT.png"
      alt="Navigationspfeil: ein Foto weiter"
      class="icon_lightbox"/>
    </button>`;
}
