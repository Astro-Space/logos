// List of verses for the Verse of the Day (example from John and Matthew)
const verses = {
  john: [
    { verse: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
    { verse: "John 1:1", text: "In the beginning was the Word, and the Word was with God, and the Word was God." },
    { verse: "John 8:12", text: "When Jesus spoke again to the people, he said, 'I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life.'" }
  ],
  matthew: [
    { verse: "Matthew 5:14", text: "You are the light of the world. A town built on a hill cannot be hidden." },
    { verse: "Matthew 7:7", text: "'Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.'" },
    { verse: "Matthew 11:28", text: "'Come to me, all you who are weary and burdened, and I will give you rest.'" }
  ]
};

// Function to load a random verse from the selected book
function loadVerse(book) {
  const randomIndex = Math.floor(Math.random() * verses[book].length);
  const selectedVerse = verses[book][randomIndex];
  
  // Display the selected verse
  document.getElementById("verse-of-the-day").innerText = `Verse of the Day: ${selectedVerse.verse}`;
  document.getElementById("verse").innerText = selectedVerse.text;
  document.getElementById("ref").innerText = selectedVerse.verse;
  
  // Hide the book selection after a choice
  document.getElementById("book-select").style.display = "none";
  
  // Show verse content section
  document.getElementById("verse-content").style.display = "block";

  // Update the background gradient to be random
  document.body.classList.remove("gradient-background");
  document.body.classList.add("gradient-background");
}

// Function to change background color (random gradient)
function randomGradient() {
  const color1 = Math.floor(Math.random() * 16777215).toString(16);
  const color2 = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.background = `linear-gradient(45deg, #${color1}, #${color2})`;
}

// Function to show a random Verse of the Day on page load
function showVerseOfTheDay() {
  const books = ['john', 'matthew'];
  const randomBook = books[Math.floor(Math.random() * books.length)];
  loadVerse(randomBook);
}

// Call the random gradient function on page load
window.onload = function() {
  randomGradient();
  showVerseOfTheDay();
}; 
