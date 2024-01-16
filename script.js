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

// Agrega y quita la clase 'animate-header' cada 5 segundos
// Este script es opcional, lo utilizo para cambiar la velocidad cada vez que se carga la página
// Este script es opcional, lo utilizo para cambiar la velocidad cada vez que se carga la página
document.addEventListener('DOMContentLoaded', function () {
    var speed = Math.random() * (2 - 1) + 1; // Velocidad aleatoria entre 1 y 2
    document.getElementById('header-lines').style.animationDuration = speed + 's';
});

