const displayWord = document.getElementById("displayWord");
const generatorButton = document.getElementById("generatorButton");

const words = ['Bimpe', 'like', 'Bicycle', 'Yam', 'Generous', 'Happy', 'Contentment', 'lamentable', 'share', 'undesirable', 'face', 'consen', 'conquer',
'Apparel', 'Tender', 'Economic', 'Trick', 'Charming', 'Violate', 'Slope', 'Lead', 'Sound', 'Enchanted',
'Shelf', 'Hilarious', 'Ordinary', 'Sweet', 'Gaze', 'Odd', 'Behold', 'Gold', 'Boundless'];

function generateRandomNum(max) {
    return Math.floor(Math.random() * Math.floor(max));

}

function buttonHandler(event) {
    const index = generateRandomNum(words.length);
    

    const word = words[index];

    displayWord.innerText = word;
}

generatorButton.addEventListener('click', buttonHandler)
