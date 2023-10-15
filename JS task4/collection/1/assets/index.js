const imageContainer = document.querySelector('.imageContainer img');
const imageList =document.querySelectorAll('.imageList img');
for (let i = 0; i < imageList.length; i++) {
    imageList[i].addEventListener('click' ,(e)=>{
        const imgSrc = e.target.getAttribute('src');
        imageContainer.setAttribute('src' ,`${imgSrc}`)
        console.log(e.target.getAttribute('src'));
    })
}