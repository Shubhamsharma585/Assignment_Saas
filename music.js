const playBtn = document.getElementsByClassName("play")[0];
const playIcon = document.getElementById("play_pause");
const songs = document.getElementById("song");
const seekBtn = document.getElementById("seek");
let isPlaying = false;


//var graphValues = [80,20,30,40,50];
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// var canvas2 = document.getElementById("myCanvas2");
// var ctx2 = canvas2.getContext("2d");

var width = 4;
var X = 0;
var max = 80;
var min = -100;
var h = 0

ctx.beginPath();
for(var i=0; i<=233; i++)
{
    if(i<=25)
    {
       h = h+2;
    }
    else if(i>25 && i<=50)
    {
       h = h-2;
    }
    else if(i>50 && i<=75)
    {
       h = h-2;
    }
    else if(i>75 && i<=100)
    {
       h = h+2;
    }
    else if(i>100 && i<=125)
    {
       h = h+2;
    }
    else if(i>125 && i<=150)
    {
       h = h-2;
    }
    else if(i>150 && i<=175)
    {
       h = h-2;
    }
    else if(i>175 && i<=200)
    {
       h = h+2;
    }
    else if(i>200 && i<=225)
    {
       h = h+2;
    }
    else if(i>225 && i<=250)
    {
       h = h-2;
    }

    //console.log("h",h, "X", X)

    ctx.fillStyle = "gray";
    //console.log("X",X) 
    ctx.fillRect(X,210,width, h);
    X = X + width+2; //Every time bar will move left by 6px;
    //maximum width is 1400 so bars will cover width of (w<=1400)
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
ctx.fillStyle="lightgreen";
ctx.fill();

ctx.beginPath();
ctx.rect(1180, 100, 3, 70);
ctx.rect(1180, 100, 80, 20);
ctx.fillStyle="purple";
ctx.fill();

ctx.beginPath();
ctx.fillStyle="white";
ctx.font = "10pt sans-serif";
ctx.fillText("Introduction", 162, 85);


ctx.beginPath();
ctx.rect(1270, 60, 3, 110);
ctx.rect(1105, 60, 175, 20);
ctx.fillStyle="brown";
ctx.fill();

ctx.beginPath();
ctx.rect(1300, 20, 3, 150);
ctx.rect(1090, 10, 220, 20);
ctx.fillStyle="green";
ctx.fill();

ctx.beginPath();
ctx.arc(201, 178, 8, 0, 2 * Math.PI);
ctx.fillStyle="lightgreen";
ctx.fill();

ctx.beginPath();
ctx.arc(401, 178, 8, 0, 2 * Math.PI);
ctx.fillStyle="lightgreen";
ctx.fill();

ctx.beginPath();
ctx.arc(1101, 178, 8, 0, 2 * Math.PI);
ctx.fillStyle="lightgreen";
ctx.fill();

ctx.beginPath();
ctx.arc(1181, 178, 8, 0, 2 * Math.PI);
ctx.fillStyle="purple";
ctx.fill();

ctx.beginPath();
ctx.arc(1272, 178, 8, 0, 2 * Math.PI);
ctx.fillStyle="brown";
ctx.fill();

ctx.beginPath();
ctx.arc(1301, 178, 8, 0, 2 * Math.PI);
ctx.fillStyle="green";
ctx.fill();


ctx.beginPath();
ctx.fillStyle="white";
ctx.font = "10pt sans-serif";
ctx.fillText("One_six", 370, 45);

ctx.beginPath();
ctx.fillStyle="white";
ctx.font = "10pt sans-serif";
ctx.fillText("Rapport Building - Empathy", 1112, 75);

ctx.beginPath();
ctx.fillStyle="white";
ctx.font = "10pt sans-serif";
ctx.fillText("Rapport Building - Energy", 1100, 25);

ctx.beginPath();
ctx.fillStyle="white";
ctx.font = "10pt sans-serif";
ctx.fillText("Profile", 1200, 115);



console.log(songs.duration)
let Position = 0;






let duration = songs.duration;
var last_pos = -1;
songs.addEventListener('timeupdate', (event) => {
    //console.log(event.srcElement.currentTime)
    current_time = event.srcElement.currentTime;

    Position = Math.floor((current_time*100)/duration);
    //console.log(current_time, duration, Position)
    //console.log("Position",Position)

    if(Position == 100)
    {
        playIcon.classList.replace("fa-pause","fa-play");   
    }
    
    paint(Position)
  });



  function paint(Position)
  {

    console.log("Paint",Position)
    var X1 = 0;
    var h1 = 0;
    for(var l=0; l<233; l++)
    {
    ctx.beginPath();













    
    if(l<(Position*2.33))
    {
        ctx.fillStyle="red";
    }
    else
    {
        ctx.fillStyle="gray";
    }
    ctx.fillRect(X1, 210, width, 70);
    ctx.fill();
    
    X1 = X1 + width+2; 
    }
  }









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
     seekMusic(50)
});

canvas.addEventListener("mousedown", (event) => {
    var total_length = 1400;
    var local_position = event.clientX-18;
    var covered_inper =  Math.floor(((local_position*100)/total_length));
    console.log(local_position, total_length, covered_inper)
    seekMusic(covered_inper)
})


