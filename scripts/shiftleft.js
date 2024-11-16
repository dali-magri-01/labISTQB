// Animation GSAP pour la page Shift Left
gsap.from("header", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out"
});

// Exemple 1 : Simulation d'Analyse Statique
document.getElementById("run-static-analysis").addEventListener("click", function () {
    let logContainer = document.getElementById("static-analysis-log");
    logContainer.style.display = "block";
    logContainer.textContent = "Début de l'analyse statique sur main.js...\n";

    setTimeout(() => {
        logContainer.textContent += "Analyse du fichier : main.js...\n";
    }, 1000);

    setTimeout(() => {
        logContainer.textContent += "Vérification des erreurs de syntaxe...\n";
    }, 2000);

    setTimeout(() => {
        logContainer.textContent += "Recherche des mauvaises pratiques...\n";
    }, 3000);

    setTimeout(() => {
        logContainer.textContent += "Aucun problème détecté. Analyse statique réussie.\n";
    }, 4000);
});

// Exemple 2 : Simulation de Tests Unitaires
document.getElementById("run-unit-tests").addEventListener("click", function () {
    let logContainer = document.getElementById("unit-tests-log");
    logContainer.style.display = "block";
    logContainer.textContent = "Début des tests unitaires sur les fonctions add() et subtract()...\n";

    setTimeout(() => {
        logContainer.textContent += "Exécution du test : shouldAddTwoNumbers...\n";
    }, 1000);

    setTimeout(() => {
        logContainer.textContent += "✔ Test réussi : add(2, 2) = 4\n";
    }, 2000);

    setTimeout(() => {
        logContainer.textContent += "Exécution du test : shouldSubtractTwoNumbers...\n";
    }, 3000);

    setTimeout(() => {
        logContainer.textContent += "✔ Test réussi : subtract(5, 2) = 3\n";
    }, 4000);

    setTimeout(() => {
        logContainer.textContent += "Tous les tests unitaires sont passés.\n";
    }, 5000);
});

// Section Quiz
document.getElementById("quiz-answer2").addEventListener("click", function () {
    Swal.fire({
        title: 'Correct !',
        text: 'Le test en Shift Left signifie commencer les tests plus tôt dans le processus de développement.',
        icon: 'success'
    });
});

document.getElementById("quiz-answer1").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect !',
        text: 'Le test en Shift Left consiste à tester plus tôt, pas à retarder les tests.',
        icon: 'error'
    });
});

document.getElementById("quiz-answer3").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect !',
        text: 'Le test en Shift Left n\'est pas limité à la dernière phase.',
        icon: 'error'
    });
});

document.getElementById("quiz-answer4").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect !',
        text: 'Le test en Shift Left vise à améliorer l\'efficacité, pas à réduire les efforts.',
        icon: 'error'
    });
});
