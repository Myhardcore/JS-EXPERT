'use strict';

let showModalEl = document.querySelectorAll('.show-modal');
let modalEl = document.querySelector('.modal');
let overlayEl = document.querySelector('.overlay');
let btnCloseEl = document.querySelector('.close-modal');

function closeModal () {
    modalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
}
function openModal () {
    modalEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden')
}

for (let i = 0; i < showModalEl.length; i++) {
    showModalEl[i].addEventListener('click', openModal)
};

btnCloseEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
            closeModal();
    }
})