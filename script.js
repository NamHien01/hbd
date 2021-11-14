const days =document.getElementById('days');
const hours =document.getElementById('hours');
const minutes =document.getElementById('minutes');;
const seconds =document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading =document.getElementById('loading');

const countDownDate = new Date("November 15, 2021 00:25:00").getTime();

//update countdown time
function updateCountdown(){
    const currentTime = new Date().getTime();
    const distance = countDownDate - currentTime;

    const d =Math.floor(distance / 1000 /60 / 60 /24);
    const h =Math.floor(distance /1000 / 60 / 60) % 24;
    const m =Math.floor(distance /1000 / 60) % 60;
    const s =Math.floor(distance /1000) % 60;

    //Add values to Dom
    days.innerHTML =d;
    hours.innerHTML=h<10?'0'+ h  :h;
    minutes.innerHTML=m< 10 ?'0' + m : m;
    seconds.innerHTML=s<10? '0' + s : s;

}
//Show snipper brfeore updateCountdown;
setTimeout(()=>{
    loading.remove(); 
    countdown.style.display= 'flex';
},1000);
//run every 
setInterval(updateCountdown,1000);