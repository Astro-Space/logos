const verses = [
  {
    reference: "John 1:1-2",
    text: "In the beginning was the Word, and the Word was with God, and the Word was God. He was with God in the beginning."
  },
  {
    reference: "John 1:14",
    text: "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth."
  },
  {
    reference: "John 3:16",
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
  },
  {
    reference: "John 6:35",
    text: "Then Jesus declared, 'I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty.'"
  },
  {
    reference: "John 8:12",
    text: "When Jesus spoke again to the people, he said, 'I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life.'"
  },
  {
    reference: "John 10:10",
    text: "The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full."
  },
  {
    reference: "John 11:25-26",
    text: "Jesus said to her, 'I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die. Do you believe this?'"
  },
  {
    reference: "John 13:34-35",
    text: "'A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples, if you love one another.'"
  },
  {
    reference: "John 14:6",
    text: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'"
  },
  {
    reference: "John 16:33",
    text: "'I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.'"
  }
];

const gradients = [
  "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
  "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
  "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  "linear-gradient(135deg, #fdfdca 0%, #f1eec1 100%)",
  "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
  "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
];

const v = verses[Math.floor(Math.random() * verses.length)];
const g = gradients[Math.floor(Math.random() * gradients.length)];

document.body.style.background = g;
document.getElementById('verse').textContent = v.text;
document.getElementById('ref').textContent = `– ${v.reference}`;
