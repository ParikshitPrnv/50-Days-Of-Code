const open = document.querySelector('#open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
open.addEventListener('click', ()=>{
    console.log('Bar clicked')
    container.classList.add('show-nav');

})
close.addEventListener('click',()=>{
    console.log('X clicked')
    container.classList.remove('show-nav');
})