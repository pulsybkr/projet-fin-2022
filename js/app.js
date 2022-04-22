
 // Js de la bar de navigation collante

 const navbar = document.querySelector(".navbar");

function scrollnavbar () {

    navbar.classList.toggle("scroll", window.pageYOffset > 0);

}

window.addEventListener("scroll", scrollnavbar) ;


// petite animation sur le logo
/*
let sl = ScrollReveal ({
    duration : 1000,
    distance : '50px'
});

 sl.reveal('.milieu', {origin: 'top'});


 let sr = ScrollReveal ({
    duration : 2000,
    distance : '50px'
});
 sr.reveal('.logo', {origin: 'left'}); 

 let sh = ScrollReveal ({
    duration : 2000,
    distance : '50px'
}); */

// ************************** menu burger pour les mobiles ***********************
 
const burger = document.querySelector('#menu');
const showheader = document.querySelector('.show-header');


burger.addEventListener('click', () => {
    showheader.classList.toggle('showw');
    afficheMenu.classList.remove('show-deroule');
    afficheMenu2.classList.remove('show-deroule2');

});


// ******************* menu deroulant 

const deroulMenu = document.querySelector('.deroule');
const afficheMenu = document.querySelector('.deroul-one');

deroulMenu.addEventListener('click', () =>{
    afficheMenu.classList.add('show-deroule');
   
}) 


const retourMenu = document.querySelector('.retour');

retourMenu.addEventListener('click', () => {
   
    afficheMenu.classList.remove('show-deroule');
})

// ******************* menu deroulant 2

const deroulMenu2 = document.querySelector('.deroule2');
const afficheMenu2 = document.querySelector('.deroul-two');

deroulMenu2.addEventListener('click', () =>{

    
   afficheMenu2.classList.add('show-deroule2');
   
}) 



const retourMenu2 = document.querySelector('.retour2');

retourMenu2.addEventListener('click', () => {
   //  console.log('Salut le monde')
    afficheMenu2.classList.remove('show-deroule2');
}) 
