const playBtn = document.getElementsByClassName("play")[0];
const playIcon = document.getElementById("play_pause");
const songs = document.getElementById("song");
const seekBtn = document.getElementById("seek");



//var graphValues = [80,20,30,40,50];
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var width = 4;
var X = 0;
var max = 80;
var min = -100;




for(var i=0; i<=250; i++)
{
    var h = Math.floor(Math.random()* (max-min) + min);
    ctx.fillStyle = "gray";
    if(i<100)
    {
        ctx.fillStyle = "red";
    }else{
        ctx.fillStyle = "gray";
    }
    ctx.fillRect(X,210,width, h);
    X = X + width+2;
}


ctx.beginPath();
ctx.rect(200, 70, 3, 100);
ctx.rect(150, 70, 100, 20);

ctx.rect(400, 40, 3, 140);
ctx.rect(350, 30, 100, 20);
ctx.fillStyle = "lightgreen";
ctx.fill();

ctx.beginPath();
ctx.rect(1100, 20, 3, 150);
ctx.rect(1050, 10, 100, 20);
ctx.fillStyle="green";
ctx.fill();

ctx.beginPath();
ctx.rect(1180, 100, 3, 70);
ctx.rect(1180, 100, 80, 20);
ctx.fillStyle="purple";
ctx.fill();

ctx.beginPath();
ctx.rect(1270, 60, 3, 110);
ctx.rect(1120, 60, 150, 20);
ctx.fillStyle="brown";
ctx.fill();

ctx.beginPath();
ctx.rect(1300, 20, 3, 150);
ctx.rect(1250, 10, 100, 20);
ctx.fillStyle="green";
ctx.fill();




console.log(songs.duration)









let duration = songs.duration;

songs.addEventListener('timeupdate', (event) => {

    console.log(event.srcElement.currentTime)

  });

 





let isPlaying = false;


//To play music
const playMusic = () => {
   isPlaying = true;
   playIcon.classList.replace("fa-play","fa-pause")
   songs.play();
   //console.log("play")
}

//To pause music
const pauseMusic = () => {
    isPlaying = false;
    songs.pause();
    playIcon.classList.replace("fa-pause","fa-play")
    //console.log("pause")
}

const seekMusic = (t) => {
    songs.currentTime = duration*(t/100);
    console.log(songs.currentTime)
}


playBtn.addEventListener("click", () => {
    isPlaying? pauseMusic(): playMusic();
});


seekBtn.addEventListener("click", () => {
     seekMusic(68)
});


