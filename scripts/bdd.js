// Animation GSAP pour la page BDD
gsap.from("header", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out"
});

// Simulation de Scénario BDD
document.getElementById("run-bdd").addEventListener("click", function () {
    let given = document.getElementById("given").value;
    let when = document.getElementById("when").value;
    let then = document.getElementById("then").value;
    let resultContainer = document.getElementById("bdd-result");

    if (given && when && then) {
        resultContainer.textContent = `Scénario : Donné ${given}, Quand ${when}, Alors ${then}.`;
        Swal.fire({
            title: 'Scénario Exécuté !',
            text: `Donné ${given}, Quand ${when}, Alors ${then}.`,
            icon: 'success'
        });
    } else {
        Swal.fire({
            title: 'Scénario Incomplet !',
            text: 'Veuillez remplir tous les champs.',
            icon: 'error'
        });
        resultContainer.textContent = "Erreur : Veuillez remplir tous les champs.";
    }
});

// Section Quiz
document.getElementById("quiz-answer2").addEventListener("click", function () {
    Swal.fire({
        title: 'Correct !',
        text: '"Donné" représente la condition initiale.',
        icon: 'success'
    });
});

document.getElementById("quiz-answer1").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect !',
        text: '"Donné" ne représente pas une action.',
        icon: 'error'
    });
});

document.getElementById("quiz-answer3").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect !',
        text: '"Donné" représente une condition, pas un résultat.',
        icon: 'error'
    });
});

// Fonctionnalité du menu hamburger
const menuButton = document.getElementById('menu-button');
const navbarMenu = document.getElementById('navbar-menu');

// Basculer la visibilité du menu
menuButton.addEventListener("click", () => {
    navbarMenu.classList.toggle('hidden');
    navbarMenu.classList.toggle('visible');
});
