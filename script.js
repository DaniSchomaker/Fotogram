const photos = [
  "./assets/img/IMG_20240601_160539226_HDR.jpg",
  "./assets/img/IMG_20240601_161104620_HDR.jpg",
  "./assets/img/IMG_20250621_173857854_HDR.jpg",
  "./assets/img/IMG_20250809_144251419.jpg",
  "./assets/img/IMG-20230416-WA0015.jpg",
  "./assets/img/IMG-20230423-WA0026.jpg",
  "./assets/img/IMG-20230423-WA0027.jpg",
  "./assets/img/IMG-20230423-WA0028.jpg",
  "./assets/img/IMG-20230423-WA0035.jpg",
  "./assets/img/IMG-20230423-WA0036.jpg",
  "./assets/img/IMG-20230423-WA0039.jpg",
  "./assets/img/IMG-20230423-WA0044.jpg",
  "./assets/img/IMG-20230423-WA0045.jpg",
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
  "Alt14",
];

function init() {
  renderPhotosSmallPreview();
}

function renderPhotosSmallPreview() {
  let gallery = document.getElementById("photo_gallery_small_preview");
  gallery.innerHTML = ""; // brauche ich die Leerung???

  for (let i = 0; i < photos.length; i++) {
    gallery.innerHTML += getPhotoTemplate(i);
  }
}
