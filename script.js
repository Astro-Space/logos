const john = [
  { verse: "In the beginning was the Word...", ref: "John 1:1" },
  { verse: "For God so loved the world...", ref: "John 3:16" },
  { verse: "I am the way and the truth and the life...", ref: "John 14:6" },
];

const matthew = [
  { verse: "Blessed are the meek...", ref: "Matthew 5:5" },
  { verse: "Come to me, all you who are weary...", ref: "Matthew 11:28" },
  { verse: "Go and make disciples of all nations...", ref: "Matthew 28:19" },
];

function getVerseIndex(arr) {
  const now = new Date();
  const day = now.toISOString().split('T')[0];
  const hour = now.getHours();
  let block = 0;
  if (hour >= 6 && hour < 12) block = 1;
  else if (hour >= 12 && hour < 18) block = 2;
  else block = 3;

  const key = `${day}-${block}`;
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash << 5) - hash + key.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % arr.length;
}

function displayVerse(bookArr) {
  const index = getVerseIndex(bookArr);
  const v = bookArr[index];
  document.getElementById("verse").textContent = `"${v.verse}"`;
  document.getElementById("ref").textContent = v.ref;
  document.getElementById("verse-content").style.display = "block";
  document.getElementById("book-select").style.display = "none";
  setRandomGradient();
}



function loadVerse(book) {
  const bookArr = book === 'john' ? john : matthew;
  displayVerse(bookArr);
}

function loadVerseOfTheDay() {
  const allVerses = [...john, ...matthew];
  displayVerse(allVerses);
}

function setRandomGradient() {
  const colors = [
    ['#f6d365', '#fda085'],
    ['#a1c4fd', '#c2e9fb'],
    ['#667eea', '#764ba2'],
    ['#89f7fe', '#66a6ff'],
    ['#ff9a9e', '#fad0c4']
  ];
  const [start, end] = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(to right, ${start}, ${end})`;
}

// Wait for DOM ready before setting background
document.addEventListener("DOMContentLoaded", () => {
  setRandomGradient();
});
