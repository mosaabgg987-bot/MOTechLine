let data = JSON.parse(localStorage.getItem("videos")) || [];

function save(){
localStorage.setItem("videos", JSON.stringify(data));
}

function addVideo(){
let video = {
title: document.getElementById("title").value,
youtube: document.getElementById("youtube").value,
views: parseInt(document.getElementById("views").value),
thumb: document.getElementById("thumb").value,
desc: document.getElementById("desc").value
};
data.push(video);
save();
alert("تمت الإضافة");
}

function updateSubs(){
localStorage.setItem("subs", document.getElementById("subsInput").value);
}

if(document.getElementById("videoList")){
fetchVideos();
}

function fetchVideos(){
let list = document.getElementById("videoList");
let top = document.getElementById("topVideos");

data.sort((a,b)=>b.views-a.views);

data.forEach((v,i)=>{
let card = `
<div class="card" onclick="openVideo(${i})">
<img src="${v.thumb}">
<h3>${v.title}</h3>
<p>${v.views} مشاهدة (من يوتيوب)</p>
</div>`;
list.innerHTML += card;

if(i<3) top.innerHTML += card;
});

document.getElementById("subs").innerText = localStorage.getItem("subs") || 0;
}

function openVideo(i){
localStorage.setItem("current", JSON.stringify(data[i]));
window.location="video.html";
}

if(document.getElementById("player")){
let video = JSON.parse(localStorage.getItem("current"));
document.getElementById("player").src = video.youtube;
document.getElementById("title").innerText = video.title;
document.getElementById("description").innerText = video.desc;
}