const container_preloader = document.querySelector(".container_web_loader");

window.addEventListener("load",function(){
        container_preloader.setAttribute("style","display:none;");
        document.body.removeAttribute("style","overflow: hidden;");
        // animaciones
        let items_header = {
            delay: 350,
            interval: 250,
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
            delay: 1200,
            duration: 1000,
            distance: '50px',
            origin: 'bottom',
        });
        sr.reveal('.container_subtitle_cards', {
            delay: 1000
        });
        sr.reveal('.proyect_card', {
            delay: 900,
            interval: 500,
            distance: '50px',
            origin: 'bottom'
        });
        sr.reveal(".item_menu", items_header);
        sr.reveal(".container_logo", items_header);
        sr.reveal(".container_lateral", laterales);
});
