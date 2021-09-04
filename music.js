const playBtn = document.getElementsByClassName("play")[0];
const playIcon = document.getElementById("play_pause");
const songs = document.getElementById("song");



//var graphValues = [80,20,30,40,50];
var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d");

var width = 5;
var X = 50;
var max = 100;
var min = -100;

ctx.fillStyle = "#008080";

for(var i=0; i<=200; i++)
{
    var h = Math.floor(Math.random()* (max-min) + min);
    ctx.fillRect(X,90,width, h);
    X = X + width+5;
}
















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
