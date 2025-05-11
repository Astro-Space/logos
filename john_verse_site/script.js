const verses = [
  {
    reference: "John 1:1-2",
    text: "In the beginning was the Word, and the Word was with God, and the Word was God. He was with God in the beginning."
  },
  {
    reference: "John 1:14",
    text: "The Word became flesh and made his dwelling among us..."
  },
  {
    reference: "John 3:16",
    text: "For God so loved the world that he gave his one and only Son..."
  },
  {
    reference: "John 6:35",
    text: "Then Jesus declared, 'I am the bread of life...'"
  },
  {
    reference: "John 8:12",
    text: "When Jesus spoke again to the people, he said, 'I am the light of the world...'"
  },
  {
    reference: "John 10:10",
    text: "The thief comes only to steal and kill and destroy; I have come that they may have life..."
  },
  {
    reference: "John 11:25-26",
    text: "Jesus said to her, 'I am the resurrection and the life...'"
  },
  {
    reference: "John 13:34-35",
    text: "'A new command I give you: Love one another...'"
  },
  {
    reference: "John 14:6",
    text: "Jesus answered, 'I am the way and the truth and the life...'"
  },
  {
    reference: "John 16:33",
    text: "'I have told you these things, so that in me you may have peace...'"
  }
];

const randomVerse = verses[Math.floor(Math.random() * verses.length)];
document.getElementById('verse').textContent = randomVerse.text;
document.getElementById('ref').textContent = `– ${randomVerse.reference}`;
