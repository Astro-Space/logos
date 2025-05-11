const verses = {
  john: [
    { verse: "John 3:16", text: "For God so loved the world that he gave his one and only Son..." },
    { verse: "John 1:1", text: "In the beginning was the Word, and the Word was with God..." },
    { verse: "John 8:12", text: "I am the light of the world. Whoever follows me will never walk in darkness..." }
  ],
  matthew: [
    { verse: "Matthew 5:14", text: "You are the light of the world. A town built on a hill cannot be hidden." },
    { verse: "Matthew 7:7", text: "Ask and it will be given to you; seek and you will find..." },
    { verse: "Matthew 11:28", text: "Come to me, all who are weary and burdened, and I will give you rest." }
  ]
};

function showVerse(book) {
  const randomIndex = Math.floor(Math.random() * verses[book].length);
  const selected = verses[book][randomIndex];

  document.getElementById("verse").innerText = selected.text;
  document.getElementById("ref").innerText = selected.verse;

  document.getElementById("verse-content").style.display = "block";

  // Remove the verse of the day title when selecting a book
  document.getElementById("verse-of-the-day").innerText = "";

  // Hide buttons
  document.getElementById("book-select").style.display = "none";

  // Change background gradient
  setRandomGradient();
}

function setRandomGradient() {
  const color1 = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  const color2 = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  document.body.style.background = `linear-gradient(45deg, #${color1}, #${color2})`;
}

function showVerseOfTheDay() {
  const books = ["john", "matthew"];
  const randomBook = books[Math.floor(Math.random() * books.length)];
  const randomIndex = Math.floor(Math.random() * verses[randomBook].length);
  const selected = verses[randomBook][randomIndex];

  document.getElementById("verse").innerText = selected.text;
  document.getElementById("ref").innerText = selected.verse;
  document.getElementById("verse-content").style.display = "block";

  setRandomGradient();
}

window.onload = function () {
  showVerseOfTheDay();
};
