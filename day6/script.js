let targets = document.querySelectorAll('.content');
let body = document.querySelector('body');

function isin(target) {
    if (target.getBoundingClientRect().y + 180 < body.clientHeight)
        return true;
}

targets.forEach(target => {
    if (isin(target)) {
        target.className = "content active";
    }
    else {
        target.className = "content";
    }
});

window.addEventListener('scroll', () => {
    targets.forEach(target => {
        if (isin(target)) {
            target.className = "content active";
        }
        else {
            target.className = "content";
        }
    });
})
