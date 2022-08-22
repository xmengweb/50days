let btn = document.getElementById('btn');
let inputs = document.querySelector('.input-container')
let contents = document.getElementById('inputid');
let s = "https://www.baidu.com/s?wd=";

let flag = false;
btn.addEventListener('click', () => {
    if (!flag)
        inputs.className = 'input-container active';
    else inputs.className = 'input-container';
    flag = !flag;
})


inputs.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        s += contents.value;
        window.open(`${s}`, '_blank');
    }

})
