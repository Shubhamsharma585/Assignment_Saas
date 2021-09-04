const playBtn = document.getElementsByClassName("play")[0];
const playIcon = document.getElementById("play_pause")
let isPlaying = false;



//To play music
const playMusic = () => {
   isPlaying = true;
   playIcon.classList.replace("fa-play","fa-pause")
   //console.log("play")
}

//To pause music
const pauseMusic = () => {
    isPlaying = false;
    playIcon.classList.replace("fa-pause","fa-play")
    //console.log("pause")
}


playBtn.addEventListener("click", () => {
    isPlaying? pauseMusic(): playMusic();
});
