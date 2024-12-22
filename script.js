// Sélection de l'écran de la calculatrice
const screen = document.getElementById('screen');

// Sélection de tous les boutons
const buttons = document.querySelectorAll('.buttons button');

// Variables pour stocker les données nécessaires
let currentInput = ''; // Ce que l'utilisateur saisit
let operator = '';     // Opérateur mathématique (+, -, *, /)
let firstOperand = ''; // Premier nombre avant l'opérateur

// Parcourir tous les boutons pour leur ajouter un événement "click"
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent; // Récupérer le texte du bouton cliqué

        // Cas 1 : L'utilisateur clique sur un chiffre
        if (!isNaN(value)) {
            currentInput += value; // Ajouter le chiffre au "currentInput"
            screen.value = currentInput; // Mettre à jour l'écran
        } 
        // Cas 2 : L'utilisateur clique sur un opérateur
        else if (['+', '-', '*', '/'].includes(value)) {
            firstOperand = currentInput; // Enregistrer le premier nombre
            operator = value;            // Enregistrer l'opérateur
            currentInput = '';           // Réinitialiser l'entrée pour le deuxième nombre
        } 
        // Cas 3 : L'utilisateur clique sur "="
        else if (value === '=') {
            if (firstOperand && operator) {
                // Calculer l'expression en utilisant eval()
                try {
                    currentInput = eval(`${firstOperand} ${operator} ${currentInput}`);
                    screen.value = currentInput; // Afficher le résultat
                    firstOperand = '';           // Réinitialiser pour un nouveau calcul
                    operator = '';
                } catch (error) {
                    screen.value = "Erreur"; // Afficher une erreur en cas de problème
                }
            }
        } 
        // Cas 4 : L'utilisateur clique sur "C"
        else if (value === 'C') {
            currentInput = ''; // Réinitialiser toutes les variables
            firstOperand = '';
            operator = '';
            screen.value = ''; // Vider l'écran
        }
    });
});
