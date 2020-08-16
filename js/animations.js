function fullScreen() {
  let image = document.getElementById("home_image_screen");
  image.style.width = window.innerWidth;
  image.style.length = window.innerHeight;
}

let {
  wordNumberForIntro,
  wordNumberForText,
  intros,
  descriptions,
  currentPhraseSelection,
  introText,
  descriptionsText,
  slicedWord,
  index,
  subtractIndex,
} = returnVariables();

(function typeDescriptions() {
  let timeOutNumber = 75;

  if (
    wordNumberForText === descriptions.length &&
    wordNumberForIntro === intros.length
  ) {
    wordNumberForIntro = 0;
    wordNumberForText = 0;
    document.getElementById("view_my_work_button").style.visibility = "visible";
    document.getElementById("view_my_work_button").style.animation =
      "fadeIn 2s";
    document.getElementById("view_my_work_button").style.opacity = "0.7";
    document.getElementById("view_my_work_button").style.animation =
      "blinkFade 2s infinite ease";
    return;
  }

  if (wordNumberForIntro !== intros.length) {
    currentPhraseSelection = intros[wordNumberForIntro];
    slicedWord = currentPhraseSelection.slice(0, ++index);

    document.querySelector(".main_page_name").textContent =
      introText + slicedWord;

    if (slicedWord.length === currentPhraseSelection.length) {
      wordNumberForIntro++;
      index = 0;
      timeOutNumber = 200;
      introText += slicedWord;
      document.querySelector(".main_page_name").textContent = introText;
      if (wordNumberForIntro === intros.length) {
        timeOutNumber = 500;
      }
    }
  } else if (wordNumberForIntro === intros.length) {
    timeOutNumber = 25;
    subtractIndex = introText.length;

    introText = introText.slice(0, --subtractIndex);

    document.querySelector(".main_page_name").textContent = introText;

    if (introText.length === 0) {
      timeOutNumber = 75;
      currentPhraseSelection = descriptions[wordNumberForText];
      slicedWord = currentPhraseSelection.slice(0, ++index);

      document.querySelector(".main_page_name").textContent =
        descriptionsText + slicedWord;

      if (slicedWord.length === currentPhraseSelection.length) {
        wordNumberForText++;
        index = 0;
        timeOutNumber = 200;
        descriptionsText += slicedWord;
        document.querySelector(
          ".main_page_name"
        ).textContent = descriptionsText;
      }
    }
  }
  setTimeout(typeDescriptions, timeOutNumber);
})();

function returnVariables() {
  const intros = [
    "Hello, ",
    "my name is Daniel Jolley, ",
    "and I am a Full Stack Developer.",
  ];
  const descriptions = [
    "I make ",
    "websites, ",
    "desktop apps, ",
    "web apps, ",
    "...and other stuff! ",
    "Let's talk!",
  ];
  let wordNumberForIntro = 0;
  let wordNumberForText = 0;
  let index = 0;
  let subtractIndex = 0;
  let currentPhraseSelection = "";
  let introText = "";
  let descriptionsText = "";
  let slicedWord = "";
  return {
    wordNumberForIntro,
    wordNumberForText,
    intros,
    descriptions,
    currentPhraseSelection,
    introText,
    descriptionsText,
    slicedWord,
    index,
    subtractIndex,
  };
}
