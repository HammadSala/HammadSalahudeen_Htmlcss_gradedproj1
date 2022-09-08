
var navbar = document.getElementsByClassName("navvbar");
var cartButtons = document.getElementsByClassName("add-cart");
console.log(navbar);
var sticky = navbar[0].offsetTop;
console.log(sticky + window.scrollY);


function navbarScroll() {
    // console.log( window.screenY + " " + sticky)
    if (window.scrollY >= sticky) {
        navbar[0].classList.add("sticky");
    } else {
        navbar[0].classList.remove("sticky");
    }
}

window.addEventListener('scroll', navbarScroll);
const imageRepo = ["./Images/Animation/ani1.jpg", "./Images/Animation/ani2.png",
    "./Images/Animation/ani3.jpg", "./Images/Animation/ani4.jpg"]

var imageEl = document.getElementsByClassName("image");
console.log(imageEl[0].innerHTML);
var i = 0;
function imageChange(item) {
    imageEl[0].innerHTML = `<img src=${imageRepo[item]} alt="">`;
    console.log(item);
}
var interval = setInterval(function () {
    if (i < 4) {
        imageChange(i);
        i++;
    } else {
        i = 0;
        imageChange(i)
    }
}, 3000)

function changeBgColor() {
    console.log(this.innerHTML);
    this.style.backgroundColor = 'rgb(250, 234, 230)'
    this.style.borderColor = 'rgb(0, 255, 76)';

}

var cartButtonsArr = Array.from(cartButtons);
console.log(cartButtonsArr);
cartButtonsArr.forEach(item => {
    item.addEventListener('click', changeBgColor);
})


