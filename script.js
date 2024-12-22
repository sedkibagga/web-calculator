let input = document.getElementById('affich');
let buttons = document.querySelectorAll('button');
let string = ""; 
let arr = Array.from(buttons);
let sound = new Audio('assests/audio.mp3');

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string); 
                input.value = string;
                sound.play();
            } catch (err) {
                input.value = "Erreur"; 
            }
        } else if (e.target.innerHTML === 'C') {
            string = ""; 
            input.value = "";
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1); 
            input.value = string || ""; 
        } else if (e.target.innerHTML === '+/-') {
            if (string) {
                if (string.startsWith('-')) {
                    string = string.substring(1); 
                } else {
                    string = '-' + string; 
                }
                input.value = string;
            }
        } else if (e.target.innerHTML === '*') {
            string += '*'; 
            input.value = string;
        } else {
            string += e.target.innerHTML; 
            input.value = string;
        }
    });
});

