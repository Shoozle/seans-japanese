
// SPEECH SYNTHESIS //

const japaneseTexts = document.getElementsByClassName('japanese');
let voices = []
sentenceArray = [...japaneseTexts]

function populateVoices() {
    voices = this.getVoices();
}

const sayOutLoud = (words) => {
    let robot = new SpeechSynthesisUtterance(words);
    if (speechSynthesis.speaking) speechSynthesis.cancel();
    robot.lang = 'ja-JP';
    robot.rate = 0.8
    speechSynthesis.speak(robot);
}

sentenceArray.forEach((element, index)  => {
    element.addEventListener('click', () => sayOutLoud(element.innerHTML))
});

speechSynthesis.addEventListener('voiceschanged', populateVoices)

// THEME SWITCHER //

// theme = localStorage.getItem('theme') || 'light';

// const loadTheme = (theme) => {

//     var link = document.createElement('link');
//     link.href = `${theme}_theme.css`;
//     link.rel = 'stylesheet';
//     link.type = 'text/css';
//     link.setAttribute('id', 'themesheet');
    
//     document.body.appendChild(link);
// }

// loadTheme(theme);
// if (theme == 'dark') {
//     checkbox = document.getElementById('theme');
//     checkbox.checked = true;
// }

// const toggleTheme = () => {
//     theme == 'light' ? theme = 'dark' : theme = 'light';
//     localStorage.setItem('theme', theme);
//     var oldcss = document.getElementById('themesheet');
//     oldcss.parentNode.removeChild(oldcss); 
//     loadTheme(theme)
// }

