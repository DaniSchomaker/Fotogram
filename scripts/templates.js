// Photo-Template SMALL --> Die Übersicht
function getPhotoPreviewGalleryTemplate(i) {
    return `
        <div class="photo_preview">
            <img src="${photos[i]}" alt="${photosAlt[i]}" onclick="openLightbox(${i})">
        </div>
    `;
}

// BIG Photo-Template Lightbox
function getPhotoLightboxTemplate(i) {
    return `
        <img src="${photos[i]}" alt="${photosAlt[i]}" class="photo_lightbox">
    `;
}
