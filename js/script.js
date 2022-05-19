const interval =setInterval(()=>{
const deadtime=new Date(2022, 5, 15, 12, 00, 00);
const current=new Date();
const diff=deadtime-current;
const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + "";
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24) + "";
const minutes = Math.floor((diff / (1000 * 60)) % 60) + "";
const seconds = Math.floor((diff / 1000) % 60) + "";



console.log(seconds);
var a=document.getElementsByClassName("text-box");
var b=document.getElementsByClassName("wait");

a[0].innerHTML=days.length == 1 ? `0${days}` : days;   //+"<br>day"
a[1].innerHTML=hours.length == 1 ? `0${hours}` : hours;//"<br>hour";
a[2].innerHTML=minutes.length == 1 ? `0${minutes}` : minutes; //+"<br>minut";
a[3].innerHTML=seconds.length == 1 ? `0${seconds}` : seconds; //+"<br>second";

if (diff< 0) {
    clearInterval(interval);
  b[0].innerHTML = "<h1>Here We Go!!!</h1>";
  const divs = document.querySelectorAll(".boxes .text-box");

  divs.forEach((div) => {
    div.innerHTML = "00";
  });
  }

  
  document.querySelector(".reset").addEventListener("click", () => {
    clearInterval(interval);

    const divs = document.querySelectorAll(".boxes .text-box");

    divs.forEach((div) => {
      div.innerHTML = "00";
    });
    b[0].innerHTML = "<h1>Here We Go!!!</h1>";

  });


},1000)


