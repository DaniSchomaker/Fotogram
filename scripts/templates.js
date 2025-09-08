// Photo Preview Gallery

function getPhotoPreviewGalleryTemplate(i) {
  return `
    <button class="photo_preview" onclick="openLightbox(${i})">
      <img 
        src="${PHOTOS[i]}" 
        alt="${PHOTOS_ALT[i]}" 
        class="photo_preview_img"
       />
    </button>`;

    // die Fotos werden als Buttons eingefügt damit man sie per Tab+Enter (ohne Maus) öffnen kann
}

// Lightbox

function getHeaderLightboxTemplate(i) {
  return `
    <h2 id="lightbox_title">${PHOTOS_ALT[i]}</h2>
    <button aria-label="Fotogroßansicht schließen" onclick="closeLightbox(), setFocusOnTop()">
    <img src="./assets/icons/Icon_X_ChatGPT.png" alt="Schließen-Button" class="icon_lightbox" />
    </button>`;
}

function getPhotoLightboxTemplate(i) {
  return `
    <img src="${PHOTOS[i]}" alt="${PHOTOS_ALT[i]}" class="photo_lightbox">`;
}

function getFooterLightboxTemplate(i) {
  return `
    <button aria-label="Navigationspfeil: ein Foto zurück" onclick="showPreviousPhoto()">
    <img
      src="./assets/icons/Icon_Pfeil_links_ChatGPT.png"
      alt="Navigationspfeil: ein Foto zurück"
      class="icon_lightbox"/>
    </button>
    <span class="photo_number">${i + 1}/${PHOTOS.length}</span>
    <button aria-label="Navigationspfeil: ein Foto weiter" onclick="showNextPhoto()">
    <img
      src="./assets/icons/Icon_Pfeil_rechts_ChatGPT.png"
      alt="Navigationspfeil: ein Foto weiter"
      class="icon_lightbox"/>
    </button>`;
}
