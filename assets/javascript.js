// Inicialização do Swiper (carrossel)
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    });


// Do botão scroll-top
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Evento para determinar o aparecimento do botão scroll-top na página
window.onscroll = function() {
    if (document.documentElement.scrollTop > 50) {
        scrollToTopButton.style.display = "block"; 
    } else {
        scrollToTopButton.style.display = "none"; 
    }
};

// Evento quando clicar botão scroll-top
scrollToTopButton.onclick = function() {
    window.scrollTo({ 
        top: 0,           
        behavior: 'smooth'
    }); 
};


// Seleciona todos os elementos com o atributo data-anime
const targets = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';  // Nome da classe CSS que será adicionada para animar


// Função para verificar se o elemento está visível na tela
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();  // Obtém as coordenadas do elemento em relação à tela
    return (
        rect.top < window.innerHeight && rect.bottom >= 0  // Verifica se o elemento está dentro da tela
    );
}

// Aplica ou remove a classe de animação com base na visibilidade do elemento
function animeScroll() {
    targets.forEach(function(target) {
        if (isElementInViewport(target)) {
            target.classList.add(animationClass);  
        } else {
            target.classList.remove(animationClass); 
        }
    });
}

// Executa a animação ao carregar a página
animeScroll();

// Executa a animação ao rolar a página
if (targets.length) {
    window.addEventListener('scroll', function() {
        animeScroll();
    });
}
