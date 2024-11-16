// Animation GSAP pour le cycle Rouge-Vert-Refactor
gsap.from(".red-box", {
    duration: 1,
    opacity: 0,
    x: -50,
    ease: "power2.out"
});

gsap.from(".green-box", {
    duration: 1,
    opacity: 0,
    x: 50,
    ease: "power2.out",
    delay: 0.5
});

gsap.from(".refactor-box", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    delay: 1
});

// Initialisation de l'éditeur Ace avec thème et langage
let editor = ace.edit("code-editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

// Chargement du code d'exemple dans l'éditeur
let exampleCode = `
function addition(a, b) {
    return a + b;
}

// Cas de test qui doit échouer au départ (comme exemple)
let result = addition(2, 2);
if (result !== 5) {
    throw new Error('Test échoué : 2 + 2 devrait être égal à 5');
}`;

editor.setValue(exampleCode, 1);  // Charger le code d'exemple dans l'éditeur

// Références aux boutons
let runButton = document.getElementById("run-code");

// Exécuter le test et passer à "Refactor" lorsque le test est réussi
runButton.addEventListener("click", function () {
    let code = editor.getValue();  // Récupérer le code de l'éditeur
    let resultContainer = document.getElementById("result");

    try {
        // Évaluer le code
        eval(code);
        resultContainer.innerHTML = "<p class='text-green-600'>Test Réussi !</p>";

        // Changer le texte du bouton en "Refactor" et modifier sa fonction
        runButton.innerText = "Refactoriser";

        // Supprimer l'ancien événement pour éviter de réexécuter les tests
        runButton.replaceWith(runButton.cloneNode(true));
        runButton = document.getElementById("run-code");

        // Ajouter un nouvel événement pour le refactoring
        runButton.addEventListener("click", function () {
            refactorCode();
        });

    } catch (error) {
        resultContainer.innerHTML = `<p class='text-red-600'>Test Échoué : ${error.message}</p>`;
    }
});

// Fonction pour refactoriser le code et mettre à jour l'éditeur
function refactorCode() {
    let refactoredCode = `
function additionDeuxNombres(premierNombre, deuxiemeNombre) {
    return premierNombre + deuxiemeNombre;
}

// Tester la fonction refactorisée
let result = additionDeuxNombres(2, 2);
if (result !== 4) {
    throw new Error('Test échoué : 2 + 2 devrait être égal à 4');
}`;

    editor.setValue(refactoredCode, 1);  // Charger le code refactorisé dans l'éditeur

    // Mettre à jour le conteneur des résultats pour afficher un message refactorisé
    let resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "<p class='text-blue-600'>Code Refactorisé !</p>";

    // Désactiver le bouton ou le modifier pour d'autres étapes
    runButton.disabled = true;
    runButton.innerText = "Refactorisé";
}

// Section Quiz
document.getElementById("answer1").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect !',
        text: 'Rouge sert à écrire des tests qui échouent !',
        icon: 'error'
    });
});

document.getElementById("answer2").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect !',
        text: 'Vert sert à faire passer le test.',
        icon: 'error'
    });
});

document.getElementById("answer3").addEventListener("click", function () {
    Swal.fire({
        title: 'Correct !',
        text: 'Refactoriser est la bonne réponse !',
        icon: 'success'
    });
});

// Fonctionnalité du menu hamburger
const menuButton = document.getElementById("menu-button");
const navbarMenu = document.getElementById("navbar-menu");

// Basculer la visibilité du menu
menuButton.addEventListener("click", () => {
    navbarMenu.classList.toggle("hidden");
    navbarMenu.classList.toggle("visible");
});

// Ajout d'interactions pour les boîtes Rouge, Vert et Refactoriser
document.querySelector(".red-box").addEventListener("click", () => {
    Swal.fire({
        title: 'Étape Rouge',
        text: 'Écrivez un test qui échoue pour démarrer.',
        icon: 'error'
    });
});

document.querySelector(".green-box").addEventListener("click", () => {
    Swal.fire({
        title: 'Étape Verte',
        text: 'Écrivez du code pour faire passer le test.',
        icon: 'success'
    });
});

document.querySelector(".refactor-box").addEventListener("click", () => {
    Swal.fire({
        title: 'Étape Refactoriser',
        text: 'Réorganisez et améliorez le code.',
        icon: 'info'
    });
});
