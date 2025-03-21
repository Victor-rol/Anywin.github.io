$(document).ready(function(){
    // Inicialización del slider de la página principal
    $('.hero-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
    });

    // Funcionalidad para mostrar/ocultar el menú móvil
    $('.menu-toggle').click(function(){
        $('.main-nav').slideToggle();
    });

    // Funcionalidad para el menú desplegable (mega menú)
    $('.dropdown').hover(function(){
        $(this).find('.mega-menu').stop(true, true).slideDown(200);
    }, function(){
        $(this).find('.mega-menu').stop(true, true).slideUp(200);
    });
});
