
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


// ******************************  js de la page brazza 
// ************* menu

var bz2 = document.querySelector('.bz2'); // nav 1
var bz1 = document.querySelector('.bz1'); // nav 2
var bz3 = document.querySelector('.bz3'); // nav 3

 // *  section correspondant à la nav

 var sct2 = document.querySelector('.bzv2');
 var sct1 = document.querySelector('.bzv1');
 var sct3 = document.querySelector('.bzv3');


 // fonction de la section 2
bz2.addEventListener('click', () => {
    console.log('ça marche');
    bz1.classList.remove('actuel');
    bz2.classList.add('actuel');
    bz3.classList.remove('actuel');

    sct2.classList.add('activer');
    sct1.classList.remove('activer');
    sct3.classList.remove('activer');

    sct1.classList.add('no-active');
    sct3.classList.add('no-active');

    sct2.classList.remove('no-active');



})


 // fonction de la section 1
bz1.addEventListener('click', () => {
    console.log('ok');
    bz2.classList.remove('actuel');
    bz1.classList.add('actuel');
    bz3.classList.remove('actuel');

    sct1.classList.add('activer');
    sct2.classList.remove('activer');
    sct3.classList.remove('activer');

    sct2.classList.add('no-active');
    sct3.classList.add('no-active');

    sct1.classList.remove('no-active');

})


 // fonction de la section 3
bz3.addEventListener('click', () => {
    console.log('bien jouer');
    bz2.classList.remove('actuel');
    bz3.classList.add('actuel');
    bz1.classList.remove('actuel');

    sct3.classList.add('activer');
    sct2.classList.remove('activer');
    sct1.classList.remove('activer');
    sct2.classList.add('no-active');
    sct1.classList.add('no-active');
    sct3.classList.remove('no-active');

})