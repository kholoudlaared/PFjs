let currentIndex = 0;
const images = [
    { src: 'image1.png', alt: 'image' },
    { src: 'image2.png', alt: 'image' },
    { src: 'image3.png', alt: 'image' },
    { src: 'image4.png', alt: 'image' },
    { src: 'image5.png', alt: 'image' },
    { src: 'image6.png', alt: 'image' }
];

function openModal(index) {
    currentIndex = index;
    document.getElementById('modalImage').src = images[currentIndex].src;
    document.getElementById('modalImage').alt = images[currentIndex].alt;
    document.getElementById('photoModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('photoModal').style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('modalImage').src = images[currentIndex].src;
    document.getElementById('modalImage').alt = images[currentIndex].alt;
}

// Fonction pour ajouter dynamiquement l'attribut tabindex et gérer les événements
function initializeGallery() {
    console.log("La fonction initializeGallery a été appelée"); // Message pour tester l'événement onload
    const figures = document.querySelectorAll('figure');
    figures.forEach((figure, index) => {
        figure.addEventListener('mouseover', () => showAltText(index));
        figure.addEventListener('mouseleave', resetAltText);
        figure.addEventListener('focus', () => showAltText(index));
        figure.addEventListener('blur', resetAltText);

        figure.addEventListener('click', () => openModal(index));
    });

    // Ajout du tabindex et écouteurs d'événements onfocus/onblur
    const thumbnails = document.querySelectorAll('img');
    thumbnails.forEach((img, index) => {
        img.setAttribute('tabindex', 0);  // Ajout de tabindex à chaque image
        img.addEventListener('focus', () => showAltText(index));  // Ajouter gestion du focus
        img.addEventListener('blur', resetAltText);  // Ajouter gestion du blur
    });
}

function showAltText(index) {
    const figcaption = document.querySelectorAll('figcaption')[index];
    figcaption.style.color = 'red';  // Mettre en surbrillance la légende
}

function resetAltText() {
    const figcaptions = document.querySelectorAll('figcaption');
    figcaptions.forEach(figcaption => figcaption.style.color = '');  // Réinitialiser la couleur de la légende
}
