
var openPoemId = null;

function togglePoem(poemId) {
    var poem = document.getElementById(poemId);

    if (poem.style.display === "none" || openPoemId !== poemId) {
        closeOpenPoem();
        poem.style.display = "block";
        poem.classList.add("open");
        openPoemId = poemId;
    } else {
        closeOpenPoem();
    }
}

function closeOpenPoem() {
    if (openPoemId !== null) {
        var openPoem = document.getElementById(openPoemId);
        openPoem.style.display = "none";
        openPoem.classList.remove("open");
        openPoemId = null;
    }
}

document.getElementById('backButton').addEventListener('click', () => {
    // Add a 3-second delay before redirecting (adjust as needed)
    setTimeout(() => {
        window.location.href = 'index4.html'; // Replace with your desired HTML page
    }, 2000);
});
