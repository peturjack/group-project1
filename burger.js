const burger = document.querySelector("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4");
const sidebar = document.querySelector(".sidebarmenu");
console.log(sidebar)
burger.addEventListener("click", ()=>{
   burger.classList.toggle("open")
   sidebar.classList.toggle("show-side")
})
