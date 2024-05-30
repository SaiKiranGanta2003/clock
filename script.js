const houre=document.getElementById("HOUR");
const mine=document.getElementById("MIN");
const sece=document.getElementById("SEC");
const ampme=document.getElementById("AMPM");
const date1=document.getElementById("DATECON");
const day1=document.getElementById("DAYCON");
function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s=new Date().getSeconds()
    let d=new Date().getDay()
    let d1=new Date().getDate()
    let d2=new Date().getMonth()
    let d3=new Date().getFullYear()
    h=h<10 ? "0"+h:h;
    m=m<10 ? "0"+m:m;
    s=s<10 ? "0"+s:s;
    d2=d2<10 ? "0"+d2:d2;
    d1=d1<10 ? "0"+d1:d1;
    d3=d3<10 ? "0"+d3:d3;
  
    let ampm = "AM"
    if (h>12){
        h=h-12
        ampm="PM"
    }
    switch (d) {
        case 0:
          d = "Sunday";
          break;
        case 1:
          d = "Monday";
          break;
        case 2:
           d = "Tuesday";
          break;
        case 3:
          d = "Wednesday";
          break;
        case 4:
          d = "Thursday";
          break;
        case 5:
          d = "Friday";
          break;
        case 6:
          d = "Saturday";
      }
    day1.innerText=d
    date1.innerText=d1+"-"+d2+"-"+d3
    houre.innerText=h
    mine.innerText=m
    sece.innerText=s
    sece.innerText=s
    ampme.innerText=ampm;
    setTimeout(()=>{
        updateClock()
    },1000)
}
updateClock()