const images = [
  "Dark Star Thresh.jpg",
  "Elemental Lux Light.jpg",
  "Elemental Lux Water.jpg",
  "Star Guardian Jinx Lux Janna Lulu Poppy.jpg",
  "Star Guardian Lux.jpg",
  "League Of Legends Poros.jpg",
  "Poro King.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);