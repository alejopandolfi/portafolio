//Animación del texto "Sobre mí"
anime({
    targets: '#about-text',
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1000,
    easing: 'easeInOutQuad'
});

// Animación de las habilidades
anime({
    targets: '#skills-list li',
    opacity: [0, 1],
    translateY: [50, 0],
    delay: anime.stagger(100),
    duration: 1000,
    easing: 'easeInOutQuad'
});

// Animación de los proyectos
anime({
    targets: '.proyecto',
    opacity: [0, 1],
    translateY: [50, 0],
    delay: anime.stagger(100),
    duration: 1000,
    easing: 'easeInOutQuad'
});


document.addEventListener('DOMContentLoaded', function () {
    var speed = Math.random() * (2 - 1) + 1; 
    document.getElementById('header-lines').style.animationDuration = speed + 's';
});

