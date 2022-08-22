let next = document.getElementById('next');
let prev = document.getElementById('prev');
let pos = 0;
let circles = document.querySelectorAll('.circle');
let progress = document.querySelector('#progress');
prev.disabled = true;

next.addEventListener('click', () => {

    circles[pos + 1].className = 'circle active';
    progress.style.width = `${(pos + 1) / 3 * 100}%`;
    pos++;
    console.log(`触发点${pos + 1}`);
    if (pos === 3) {
        next.disabled = true;
    }
    if (pos !== 0)
        prev.disabled = false;
})

prev.addEventListener('click', () => {
    if (pos === 3) {
        next.disabled = false;
    }
    if (pos === 1)
        prev.disabled = true;
    console.log(`触发点${pos}`);
    circles[pos].className = 'circle';
    pos--;
    progress.style.width = `${(pos) / 3 * 100}%`;
})

