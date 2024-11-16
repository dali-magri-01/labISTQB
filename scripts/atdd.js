// Animation GSAP pour la page
gsap.from("header", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out"
});

// Test interactif ATDD pour la création de compte utilisateur
document.getElementById("create-account").addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let resultContainer = document.getElementById("account-result");

    // Validation simple
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!emailRegex.test(email)) {
        Swal.fire({
            title: 'Email invalide !',
            text: 'Veuillez entrer une adresse email valide.',
            icon: 'error'
        });
        resultContainer.textContent = "La validation de l'email a échoué.";
        return;
    }

    if (!passwordRegex.test(password)) {
        Swal.fire({
            title: 'Mot de passe invalide !',
            text: 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.',
            icon: 'error'
        });
        resultContainer.textContent = "La validation du mot de passe a échoué.";
        return;
    }

    if (name.trim() === "") {
        Swal.fire({
            title: 'Nom requis !',
            text: 'Veuillez entrer votre nom.',
            icon: 'error'
        });
        resultContainer.textContent = "La validation du nom a échoué.";
        return;
    }

    // Simuler la réussite de la création de compte
    Swal.fire({
        title: 'Compte créé !',
        text: 'Votre compte a été créé avec succès.',
        icon: 'success'
    });
    resultContainer.textContent = "Votre compte a été créé avec succès.";
});

// Section Quiz
document.getElementById("quiz-answer4").addEventListener("click", function () {
    Swal.fire({
        title: 'Correct !',
        text: 'Tous les champs sont obligatoires pour créer un compte.',
        icon: 'success'
    });
});

document.getElementById("quiz-answer1").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect !',
        text: 'Bien que le mot de passe soit obligatoire, tous les champs sont requis.',
        icon: 'error'
    });
});

document.getElementById("quiz-answer2").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect !',
        text: 'Le nom est obligatoire, mais tous les champs sont requis.',
        icon: 'error'
    });
});

document.getElementById("quiz-answer3").addEventListener("click", function () {
    Swal.fire({
        title: 'Incorrect !',
        text: "L'email est obligatoire, mais tous les champs sont requis.",
        icon: 'error'
    });
});

// Fonctionnalité du menu hamburger
const menuButton = document.getElementById('menu-button');
const navbarMenu = document.getElementById('navbar-menu');

// Basculer la visibilité du menu
menuButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('hidden');
    navbarMenu.classList.toggle('visible');
});
