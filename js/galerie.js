// *********************************** Js de la galerie

var slide = document.querySelectorAll('.image');
var image = document.querySelector('.mixe');


slide.forEach(item => item.addEventListener("click", () => {
  // image.classList.add("open");
  console.log(item)
}))

image.addEventListener("click", () =>{
  image.classList.remove("open")
})
