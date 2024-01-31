document.addEventListener('DOMContentLoaded', function () {
    const toggleBoxes = document.querySelectorAll('.toggle-box input[type="checkbox"]');
    const imagePopup = document.getElementById('popupImage');
    const nextButton = document.getElementById('nextButton'); // Assuming you have an element with the ID 'nextButton'

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

    // Next Button Event Listener
    nextButton.addEventListener('click', () => {
        // Add a 3-second delay before redirecting
        setTimeout(() => {
            window.location.href = 'index5.html';
        }, 2000);
    });

    imagePopup.addEventListener('click', () => {
        imagePopup.parentElement.style.display = 'none';
    });
});
