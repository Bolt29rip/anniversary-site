function startJourney(){

document.getElementById("plane").style.left="110%";

setTimeout(()=>{
document.getElementById("intro").style.display="none";
window.scrollTo(0,0);
},2500);

}


/* SWIPE REVEAL */

let startX=0;

document.addEventListener("touchstart",e=>{
startX=e.touches[0].clientX;
});

document.addEventListener("touchend",e=>{
let endX=e.changedTouches[0].clientX;

if(endX-startX>100){
document.getElementById("secret").style.opacity=1;
}
});