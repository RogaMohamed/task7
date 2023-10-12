const btn = document.querySelector("button");
const alertBox = document.querySelector(".alertBox")
const container = document.querySelector(".container")
btn.addEventListener("click" , (e)=> {
alertBox.style.display = 'flex';
btn.toggle ('container')
    console.log(e.target);
}) 