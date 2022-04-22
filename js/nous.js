// --------------------- Qui sommes nous ----------------------------

const nous = document.querySelector(".title-one-nous");
const ekip = document.querySelector(".title-two-nous");


window.addEventListener('scroll',(e) => {
   // 

    if(window.pageYOffset > 370 )
    {
        // console.log(window.pageYOffset); 
        nous.classList.add('nous')
    } else
    {
        nous.classList.remove('nous')
    }
});

window.addEventListener('scroll',(e) => {
    // 
 
     if(window.pageYOffset > 1170 )
     {
        // console.log(window.pageYOffset); 
         ekip.classList.add('nous')
     } else
     {
         ekip.classList.remove('nous')
     }
 });
 

