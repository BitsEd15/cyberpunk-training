const button = document.querySelectorAll('.button-click')
let popup = document.querySelector('.popup')
function popupOpen() {
    // popup.style.setProperty('visibility','visible'); - вроде так можно, но не работает
    popup.classList.toggle('active-button');
}

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', popupOpen);
}

function close(e) {
    if (e.key === "Escape") {
        popup.classList.remove('active-button');
    }
}
document.addEventListener('keydown', close)