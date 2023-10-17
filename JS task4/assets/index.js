// const btn = document.querySelector("button");
// const alertBox = document.querySelector(".alertBox")
// const container = document.querySelector(".container")
// btn.addEventListener("click" , (e)=> {
// alertBox.style.display = 'flex';
// btn.classList.toggle ('container')
//     console.log(e.target);
// }) 
const alertContainer = document.querySelector(".alert-container");
const containerBody = document.querySelector(".container-body button ");
const okBtn = document.querySelector(".ok");
containerBody.addEventListener("click", () => {
  alertContainer.style.display = "flex";
});
okBtn.addEventListener("click", () => {
  alertContainer.style.display = "none";
});
alertContainer.addEventListener("click", () => {
  alertContainer.style.display = "none";
});
