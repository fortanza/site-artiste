const burger=document.querySelector('.burger');
const navBar=document.querySelector('.navBar')
const btn=document.querySelector('.btn')


burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    
    
});




// btn.addEventListener("click", () => {
//     if(getComputedStyle(navBar).display != "block"){
//       navBar.style.display = "block";
//     } else {
//       navBar.style.display = "none";
//     }
//   })