const boton_menu = document.querySelector(".button_menu");
const header = document.querySelector(".header");
const container_navegation = document.querySelector(".container_navegation");
const body = document.body;


let posActual = 0;
let status_button = true;
// eventos
boton_menu.addEventListener("click",function(){
    container_navegation.classList.toggle("active_button_menu");
    if(status_button){
        body.setAttribute("style","overflow: hidden;");
        header.setAttribute("style","backdrop-filter:none");
        status_button = false;
    }else{
        body.removeAttribute("style","overflow: hidden;");
        header.setAttribute("style","backdrop-filter:blur(10px)");
        status_button = true;
    }
});
window.addEventListener("scroll",function(){
    if(this.window.scrollY > posActual){
        // bajando
        if(status_button){
            header.classList.remove("active_header");
            header.classList.add("desactive_header");
        }
    }else{
        // subiendo
        header.classList.remove("desactive_header");
        header.classList.add("active_header");
    }
    if(this.window.scrollY === 0){
        header.classList.add("ocultar_box_shadow");
    }else{
        header.classList.remove("ocultar_box_shadow");
    }
    posActual = this.window.scrollY;
});