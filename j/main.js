
const lowRider = document.querySelector('.low-rider');
const leverage = document.querySelector('.leverage');
lowRider.src = "a/money.mp3";
lowRider.load();

lowRider.volume = 0.5;

leverage.volume = 0.5;

document.getElementById('stop').addEventListener('click', (e)=> {
    lowRider.pause();
    lowRider.currentTime = 0;
});