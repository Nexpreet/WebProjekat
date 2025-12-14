const images = [
  "fotografije/DSC_0412.jpg",
  "fotografije/DSC_0205.jpg",
  "fotografije/DSC_0686.jpg",
  "fotografije/DSC_0013.jpg",
  "fotografije/DSC_0302.jpg",
  "fotografije/DSC_1057.jpg",
  "fotografije/DSC_0278.jpg",
  "fotografije/DSC_0460-Enhanced-NR.jpg",
  "fotografije/DSC_0241.jpg",
  "fotografije/DSC_0670.jpg",
  "fotografije/DSC_0322.jpg",
  "fotografije/DSC_0554.jpg",
  "fotografije/DSC_0286.jpg",
  "fotografije/DSC_0072.jpg",
  "fotografije/DSC_0625.jpg",
  "fotografije/DSC_0261.jpg",
  "fotografije/DSC_1103.jpg",
  "fotografije/DSC_0294.jpg",
  "fotografije/DSC_0206.jpg",
  "fotografije/DSC_0301.jpg",
  "fotografije/Final.jpg",
  "fotografije/DSC_1104.jpg",
  "fotografije/DSC_0291.jpg"
];


const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Fotografija";
    img.onclick = () => openLightbox(src);
    gallery.appendChild(img);
});

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.style.display = "flex";
}

closeBtn.onclick = () => {
    lightbox.style.display = "none";
};

lightbox.onclick = e => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
};
