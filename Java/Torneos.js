/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


document.addEventListener('DOMContentLoaded', () => {
    // --- ZONA: Declaración de Variables y Constantes ---
    const CORRECT_ANSWERS = {
        pregunta1: "Fortnite", 
        pregunta2: "Sega Genesis" 
    };
    const TOTAL_QUESTIONS = Object.keys(CORRECT_ANSWERS).length;

    // manipulación del DOM 

    // Referencias a elementos del quiz
    const quizForm = document.getElementById('quizForm');
    const quizResultDiv = document.getElementById('quizResult');

    if (quizForm && quizResultDiv) {
        quizForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            let score = 0; 

            const selectedAnswer1 = document.querySelector('input[name="pregunta1"]:checked');
            if (selectedAnswer1 && selectedAnswer1.value === CORRECT_ANSWERS.pregunta1) {
                score++;
            }

            const selectedAnswer2 = document.querySelector('input[name="pregunta2"]:checked');
            if (selectedAnswer2 && selectedAnswer2.value === CORRECT_ANSWERS.pregunta2) {
                score++;
            }

            // Uso de Estructura Condicional (IF-ELSE IF-ELSE)
            let message = '';
            if (score === TOTAL_QUESTIONS) {
                message = `¡Felicidades! Tienes ${score} respuestas correctas de ${TOTAL_QUESTIONS}. ¡Eres un experto en torneos retro!`;
                quizResultDiv.style.color = '#28a745'; // Verde para éxito
            } else if (score > 0) {
                message = `¡Bien hecho! Tienes ${score} respuestas correctas de ${TOTAL_QUESTIONS}. ¡Sigue aprendiendo!`;
                quizResultDiv.style.color = '#ffcc00'; // Amarillo para parcial
            } else {
                message = `Ups. Tienes ${score} respuestas correctas de ${TOTAL_QUESTIONS}. ¡No te rindas, sigue explorando el mundo retro!`;
                quizResultDiv.style.color = '#dc3545'; // Rojo para bajo puntaje
            }

            quizResultDiv.textContent = message;

        });
    }


    // Menú Responsiv
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
});