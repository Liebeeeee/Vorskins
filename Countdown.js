const start = 10;
let time = start * 60;
const count = document.getElementById('countdown');
setInterval(UpCountdown, 1000);

function UpCountdown(){
    const minute = math.floor(time / 60);
    let second = time % 60;

    count.innerHTML = '${minute}:${second}';
    second = second < 10 ? '0' + second : second;

    time--;
}

UpCountdown();