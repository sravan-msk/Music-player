let audio = document.getElementById("audio");
let img = document.getElementById("img");
let songName = document.getElementById("songName");
let artistName = document.getElementById("artistName");
let range = document.getElementById("range");
let currentTime = document.getElementById("currenttime");
let durationTime = document.getElementById("durationtime");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let play = document.querySelector(".fa-play");

let songs = [
  {
    fileName: "Telusa Telusa-My3Songs.in",
    fileArtist: "Zubin Nautiyal",
    filePath: "assets/1.mp3",
    fileImg: "assets/1.jpg",
  },
  {
    fileName: "Niharika-My3Songs.in",
    fileArtist: "Vijay Prakash",
    filePath: "assets/2.mp3",
    fileImg: "assets/2.jpg",
  },
  {
    fileName: "Manasu Maree-My3Songs.in",
    fileArtist: "Amit Trivedi",
    filePath: "assets/3.mp3",
    fileImg: "assets/3.jpg",
  },
  {
    fileName: "Nenu Nuvvantu-My3Songs.in",
    fileArtist: "Naresh Lyer",
    filePath: "assets/4.mp3",
    fileImg: "assets/4.jpg",
  },
  {
    fileName: "Em Cheppanu-My3Songs.in",
    fileArtist: "Karthik",
    filePath: "assets/5.mp3",
    fileImg: "assets/5.jpg",
  },
];

//play and pause
play.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
  } else {
    audio.pause();
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
  }
});

//creating a function clicking on next and previous buttons the img,songName,articestName changes.
function loadSong(index) {
  audio.src = songs[index].filePath;
  img.src = songs[index].fileImg;
  songName.textContent = songs[index].fileName;
  artistName.textContent = songs[index].fileArtist;
}

//previous button
let currentSong = 0;

previous.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
  play.classList.remove("fa-play");
  play.classList.add("fa-pause");
});

//next button
next.addEventListener("click", () => {
  currentSong = (currentSong + 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
  play.classList.remove("fa-play");
  play.classList.add("fa-pause");
});

//setting time formate function
function timeFormate(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 100)
    .toString()
    .padStart(2, "0");
  return `${min}:${sec}`;
}

//update the progressbar
audio.addEventListener("timeupdate", () => {
  range.value = parseInt((audio.currentTime / audio.duration) * 100);
  currentTime.textContent = timeFormate(audio.currentTime);
  durationTime.textContent = timeFormate(audio.duration);
});

//change the progressbar time
range.addEventListener("change", () => {
  audio.currentTime = (range.value * audio.duration) / 100;
});

//loadsong function calling
loadSong(currentSong)
