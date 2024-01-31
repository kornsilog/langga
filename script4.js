const toggleBoxes = document.querySelectorAll('.toggle-box input[type="checkbox"]');
const imagePopup = document.getElementById('popupImage');

toggleBoxes.forEach((box) => {
    box.addEventListener('change', () => {
        const imageSrc = box.dataset.image;
        imagePopup.src = imageSrc;
        imagePopup.alt = `Image ${box.id}`;
        imagePopup.parentElement.style.display = box.checked ? 'block' : 'none';

        imagePopup.parentElement.classList.add('clicked');

        setTimeout(() => {
            imagePopup.parentElement.classList.remove('clicked');
        }, 100);
    });
});

imagePopup.addEventListener('click', () => {
    imagePopup.parentElement.style.display = 'none';
});
