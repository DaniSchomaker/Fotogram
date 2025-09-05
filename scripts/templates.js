// Photo-Template SMALL --> Die Übersicht
function getPhotoPreviewGalleryTemplate(i) {
  return `
        <div class="photo_preview">
            <img src="${photos[i]}" alt="${photosAlt[i]}" onclick="openLightbox(${i})">
        </div>
    `;
}

// BIG Photo-Template Lightbox
function getHeaderLightboxTemplate(i) {
    return `
        <h2>${photosAlt[i]}</h2>
        <button onclick="closeLightbox()">
        <img src="./assets/icons/Icon_X_ChatGPT.png" alt="Schließen-Button" class="icon_lightbox" />
        </button>
    `;
}



function getPhotoLightboxTemplate(i) {
  return `
        <img src="${photos[i]}" alt="${photosAlt[i]}" class="photo_lightbox">
        
    `;
}

function getFooterLightboxTemplate(i) {
  return `
    <button onclick="showPreviousPhoto()">
        <img
            src="./assets/icons/Icon_Pfeil_links_ChatGPT.png"
            alt="Navigationspfeil: ein Foto zurück"
            class="icon_lightbox"
        />
    </button>
    <span class="photo_number">${i+1}/${photos.length}</span>
    <button onclick="showNextPhoto()">
        <img
            src="./assets/icons/Icon_Pfeil_rechts_ChatGPT.png"
            alt="Navigationspfeil: ein Foto weiter"
            class="icon_lightbox"
        />
    </button> `;
}


