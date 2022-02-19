// variables
const container_preloader = document.querySelector(".container_web_loader");

// evento de carga de toda la página
window.addEventListener("load",function(){
    setTimeout(() => {
        // ocultamos el preloader
        container_preloader.setAttribute("style","display:none;");
        setTimeout(() => {
            this.document.body.setAttribute("style","overflow: visible;");
            // animaciones del portafolio
            let items_header = {
                delay: 350,
                interval: 250,
                distance: '10px',
                origin: 'top'
            }
            let logo = {
                delay: 350,
                distance: '10px',
                origin: 'top'
            }
            let laterales = {
                delay: 2000
            }
            // 1. Creamos un objeto scrollReveal
            window.sr = ScrollReveal();
            sr.reveal('.greeting_profile', {
                delay: 1700,
                duration: 500,
                distance: '50px',
                origin: 'bottom',
            });
            sr.reveal('.name_profile', {
                delay: 1800,
                duration: 500,
                distance: '50px',
                origin: 'bottom',
            });
            sr.reveal('.description_profile', {
                delay: 1900,
                duration: 500,
                distance: '50px',
                origin: 'bottom',
            });
            sr.reveal('.container_section_information', {
                delay: 500,
                duration: 1000,
                distance: '50px',
                origin: 'bottom',
            });
            sr.reveal('.conteiner_card_proyect', {
                delay: 1000,
                duration: 1000,
                distance: '50px',
                origin: 'bottom',
            });
            sr.reveal('.container_subtitle_cards', {
                delay: 1000
            });
            sr.reveal('.proyect_card', {
                delay: 500,
                interval: 500,
                distance: '50px',
                origin: 'bottom'
            });
            sr.reveal('.text_footer_author', {
                delay: 1000,
                duration: 1000,
                distance: '20px',
                origin: 'top',
            });
            sr.reveal('.item_link_footer', items_header);
            sr.reveal(".item_menu", items_header);
            sr.reveal('.button_menu',logo);
            sr.reveal(".container_logo", logo);
            sr.reveal(".container_lateral", laterales);

        }, 500);
    }, 500);
});

