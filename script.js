

function init () {
    renderPhotosSmallPreview();
}

function renderPhotosSmallPreview() {
    // let PICTURE = document.getElementById('photo_gallery_small_preview'+indexPhoto);



    for (let indexPhoto = 1; indexPhoto < 14; indexPhoto++) {
        document.getElementById('photo_gallery_small_preview').innerHTML += `<div id="door${indexPhoto}" onclick="changeColor(${indexPhoto})" class="single-door">${indexPhoto}</div>`
    
        // getPhotoTemplate(indexPhoto);
    }
    // let door = document.getElementById('door');
    // door.innerHTML = adventSprueche[i-1];

}



// function changeColor(indexPhoto){
//     let door = document.getElementById('door'+indexPhoto);
//     door.classList.toggle('open-door');
//     door.innerHTML = adventSprueche[i-1];
// }