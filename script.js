const verses = {
  john: [
    { reference: "John 1:1-2", text: "In the beginning was the Word, and the Word was with God, and the Word was God. He was with God in the beginning." },
    { reference: "John 1:14", text: "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son..." },
    { reference: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
    { reference: "John 6:35", text: "Then Jesus declared, 'I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty.'" },
    { reference: "John 8:12", text: "When Jesus spoke again to the people, he said, 'I am the light of the world. Whoever follows me will never walk in darkness...'" }
  ],
  matthew: [
    { reference: "Matthew 5:14", text: "You are the light of the world. A town built on a hill cannot be hidden." },
    { reference: "Matthew 6:33", text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well." },
    { reference: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
    { reference: "Matthew 28:19-20", text: "Therefore go and make disciples of all nations... And surely I am with you always, to the very end of the age." }
  ]
};

const gradients = [
  "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
  "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
  "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  "linear-gradient(135deg, #fdfdca 0%, #f1eec1 100%)",
  "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
  "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
];

function loadVerse(book) {
  const vlist = verses[book];
  const v = vlist[Math.floor(Math.random() * vlist.length)];
  const g = gradients[Math.floor(Math.random() * gradients.length)];

  document.body.style.background = g;
  document.getElementById('verse').textContent = v.text;
  document.getElementById('ref').textContent = `– ${v.reference}`;
  document.getElementById('book-select').style.display = 'none';
  document.getElementById('verse-content').style.display = 'block';
}
