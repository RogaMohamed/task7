const menu__bar = document.querySelector('.menu__bar')
const menu__List = document.querySelector('.list')
menu__bar.addEventListener('click' ,()=>{
    console.log('works');
    menu__List.classList.toggle(menu__bar)
})