let btns=document.querySelectorAll('.iconfont');
let flag=true;
btns.forEach(element=>{
    element.addEventListener('click',()=>{
        element.className=(flag?"icon-guanbi iconfont":"icon-linecar105 iconfont");
        flag=!flag;
    })
})