const burger=document.querySelector('.burger');
const navBar=document.querySelector('.navBar');


burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navBar.classList.toggle('visibleNavBar');
});






// btn.addEventListener("click", () => {
//     if(getComputedStyle(navBar).display != "block"){
//       navBar.style.display = "block";
//     } else {
//       navBar.style.display = "none";
//     }
//   })