
var main = document.querySelector(".main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove",function(a){
    // console.log(a.x);
    crsr.style.left = a.x+"px"
    crsr.style.top = a.y+"px"
})
