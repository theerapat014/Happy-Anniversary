let text = document.getElementById('text');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    text.style.marginTop = value *2.5 + 'px';
    img1.style.left = value * -1.5 + 'px';
    img2.style.right = value * -1.5 + 'px';
    img3.style.top = value * -1.5 + 'px';
})