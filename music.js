const playBtn = document.getElementsByClassName("play")[0];
const playIcon = document.getElementById("play_pause");
const songs = document.getElementById("song");



//var graphValues = [80,20,30,40,50];
var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d");

var width = 4;
var X = 50;
var max = 80;
var min = -100;

ctx.fillStyle = "gray";

for(var i=0; i<=220; i++)
{
    var h = Math.floor(Math.random()* (max-min) + min);
    ctx.fillRect(X,160,width, h);
    X = X + width+2;
}

//ctx.beginPath();
ctx.rect(200, 30, 3, 100);
ctx.rect(150, 30, 100, 20);

ctx.rect(400, 20, 3, 100);
ctx.rect(350, 10, 100, 20);
ctx.fillStyle = "lightgreen";
ctx.fill();


ctx.rect(1100, 20, 3, 130);
ctx.rect(1050, 10, 100, 20);

ctx.rect(1300, 20, 3, 130);
ctx.rect(1250, 10, 100, 20);
ctx.fill();


ctx.rect(1180, 100, 3, 50);
ctx.rect(1180, 100, 80, 20);
ctx.fill();

ctx.rect(1270, 60, 3, 90);
ctx.rect(1120, 60, 150, 20);
ctx.fill();














let isPlaying = false;

console.log(songs)

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


playBtn.addEventListener("click", () => {
    isPlaying? pauseMusic(): playMusic();
});
