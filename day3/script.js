let open_btn = document.getElementById('open');
let close_btn = document.getElementById('close');
let container = document.querySelector('.container')

open_btn.addEventListener('click', () => {
    container.className = 'container active';
})

close_btn.addEventListener('click', () => {
    container.className = 'container';
})