let img = document.querySelector('.img');
let text = document.querySelector('.loading');

let num = 0;
text.style.opacity = 1;
let time = setInterval(() => {
    if (num === 100) {
        clearInterval(time);
    }
    text.innerText = `${num}%`;
    text.style.opacity = text.style.opacity - 0.01;
    img.style.filter = `blur(${15 - 0.15 * num}px)`;
    num++;
}, 10);
