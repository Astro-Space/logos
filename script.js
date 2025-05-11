// Array of verses for John and Matthew
const verses = {
  john: [
    { verse: "John 1:1", text: "In the beginning was the Word, and the Word was with God, and the Word was God." },
    { verse: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
    { verse: "John 8:12", text: "When Jesus spoke again to the people, he said, 'I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life.'" }
  ],
  matthew: [
    { verse: "Matthew 5:14", text: "You are the light of the world. A town built on a hill cannot be hidden." },
    { verse: "Matthew 6:33", text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well." },
    { verse: "Matthew 7:7", text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you." }
  ]
};

// Select the initial "Verse of the Day"
function loadVerseOfTheDay() {
  const today = new Date();
  const verseOfTheDay = today.getDate() % verses.john.length; // Cycle between available verses
  document.getElementById("verse").textContent = verses.john[verseOfTheDay].text;
  document.getElementById("ref").textContent = verses.john[verseOfTheDay].verse;
}

// Load a random verse from the selected book (John or Matthew)
function loadVerse(book) {
  const verseIndex = Math.floor(Math.random() * verses[book].length);
  const selectedVerse = verses[book][verseIndex];

  // Hide the book selection and show the verse
  document.getElementById("book-select").style.display = 'none';
  document.getElementById("verse-content").style.display = 'block';
  document.getElementById("verse").textContent = selectedVerse.text;
  document.getElementById("ref").textContent = selectedVerse.verse;

  // Update the header to the selected book's title
  document.getElementById("verse-of-the-day").textContent = `Verse from ${book.charAt(0).toUpperCase() + book.slice(1)}`;
  
  // Change the background gradient randomly on book selection
  const colors = ['#FF6F61', '#61FF6F', '#6F61FF', '#FF61C1'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(45deg, ${randomColor}, #fff)`;
}

// On page load, load the verse of the day
window.onload = function() {
  loadVerseOfTheDay();
};
