function fullScreen() {
    let image = document.getElementById('home_image_screen');
    image.style.width = window.innerWidth;
    image.style.length = window.innerHeight;
}
 
let { wordNumber, descriptions, currentText, letter, index } = newFunction();

(function typeDescriptions() {

    let timeOutNumber = 250;
    if (wordNumber === descriptions.length) {
        wordNumber = 0;
    }
    currentText = descriptions[wordNumber];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing-effect').textContent = 'Hello, I make ' + letter;

    if (letter.length === currentText.length) {
        wordNumber++;
        index = 0;
        timeOutNumber = 1500;
    }
    setTimeout(typeDescriptions, timeOutNumber);
}());

function newFunction() {
    const descriptions = ['websites', 'desktop apps', 'web apps', '...stuff (not well)'];
    let wordNumber = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    return { wordNumber, descriptions, currentText, letter, index };
}
