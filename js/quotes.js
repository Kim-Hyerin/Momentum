const quotes = [
 {
  quote: "A man's character is his fate.",
  author: "Heraclitus",
 },
 {
  quote: "Great minds have purposes, others have wishes.",
  author: "Washington Irving",
 },
 {
  quote: "Love has taught us that love does not consist in gazing at each other but in looking outward together in the same direction.",
  author: "Antoine de Saint-Exupery",
 },
 {
  quote: "The future depends on what we do in the present.",
  author: "Mahatma Gandhi",
 },
 {
  quote: "While there's life, there's hope.",
  author: "Cicero",
 },
 {
  quote: "Laughter is the tonic, the relief, the surcease for pain.",
  author: "Charlie Chaplin",
 },
 {
  quote: "Risk comes from not knowing what you're doing.",
  author: "Warren Buffett",
 },
 {
  quote: "Obstacles don't have to stop you. If you run into a wall, don't turn around and give up. Figure out how to climb it, go through it, or work around it.",
  author: "Michael Jordan",
 },
 {
  quote: "Great ability develops and reveals itself increasingly with every new assignment.",
  author: "Baltasar Gracian",
 },
 {
  quote: "Every time you state what you want or believe, you're the first to hear it. It's a message to both you and others about what you think is possible. Don't put a ceiling on yourself.",
  author: "Oprah Winfrey",
 }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerHTML = `<br>- ${todaysQuote.author} -`;