const john = [
  { verse: "In the beginning was the Word, and the Word was with God, and the Word was God.", ref: "John 1:1" },
  { verse: "For God so loved the world that he gave his one and only Son...", ref: "John 3:16" },
  { verse: "I am the way and the truth and the life. No one comes to the Father except through me.", ref: "John 14:6" }
  // Add more verses as needed
];

const matthew = [
  { verse: "Blessed are the meek, for they will inherit the earth.", ref: "Matthew 5:5" },
  { verse: "But seek first his kingdom and his righteousness...", ref: "Matthew 6:33" },
  { verse: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" }
  // Add more verses as needed
];

function loadVerse(book) {
  document.getElementById("header").textContent = ""; // Clear Verse of the Day header
  if (book === "john") {
    displayVerse(john);
  } else if (book === "matthew") {
    displayVerse(matthew);
  }
}

function displayVerse(bookArr) {
  const index = getVerseIndex(bookArr);
  const v = bookArr[index];
  document.getElementById("verse").textContent = `"${v.verse}"`;
  document.getElementById("ref").textContent = v.ref;
  document.getElementById("verse-content").style.display = "block";
  document.getElementById("book-select").style.display = "none"; // Hide buttons after selection
  setRandomGradient();
}

function getVerseIndex(arr) {
  // Logic for verse of the day with different time slots
  const now = new Date();
  const date = now.toISOString().slice(0, 10); // YYYY-MM-DD
  const hour = now.getHours();
  let slot = 0;

  if (hour >= 12 && hour < 17) slot = 1;
  else if (hour >= 17) slot = 2;

  const seed = date + slot; // Create unique seed for the day + time slot
  const hash = [...seed].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return hash % arr.length; // Cycle through the verses
}

function setRandomGradient() {
  const colors = [
    ['#ff9a9e', '#fad0c4'],
    ['#a18cd1', '#fbc2eb'],
    ['#f6d365', '#fda085'],
    ['#84fab0', '#8fd3f4'],
    ['#a1c4fd', '#c2e9fb'],
    ['#ffecd2', '#fcb69f']
  ];
  const pair = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(135deg, ${pair[0]}, ${pair[1]})`;
}
