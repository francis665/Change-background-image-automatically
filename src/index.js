import "./styles.css";

let backgroundImages = [
  "https://cdn.pixabay.com/photo/2021/10/21/08/14/italy-6728318_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/03/02/16/54/iceland-2111811_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/10/10/07/48/beach-2836300_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/09/10/00/59/mountains-440520_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/03/02/19/21/nature-3194001_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/02/09/19/57/aurora-1190254_1280.jpg"
];

function changeBackground() {
  let random = Math.floor(Math.random() * backgroundImages.length);

  document.body.style.backgroundImage = "url(" + backgroundImages[random] + ")";
  document.body.style.transition = "1s";
}

setInterval(changeBackground, 3000);
