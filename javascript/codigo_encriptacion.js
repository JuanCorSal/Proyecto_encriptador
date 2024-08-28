
const encryptButton = document.querySelector(".btn-encriptar");
const decryptButton = document.querySelector(".btn-desencriptar");
const inputText = document.querySelector(".encriptar");
const notification = document.querySelector(".texto-aviso");
const outputText = document.querySelector(".evaluar");
const cardContent = document.querySelector(".tarjeta-contenedor");
const copyButton = document.querySelector(".btn-copiar");




encryptButton.addEventListener("click", e => {
    e.preventDefault();
    let text = inputText.value;
    let sanitizedText = text.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if (text === "") {
        notification.style.background = "#0A3871";
        notification.style.color = "#FFFF";
        notification.style.fontWeight = "800";
        notification.textContent = "El campo de texto no debe estar vacío";
        
        setTimeout(() => {
            notification.removeAttribute("style");
        }, 1500);
    } else if (text !== sanitizedText) {
        notification.style.background = "#0A3871";
        notification.style.color = "#FFFF";
        notification.style.fontWeight = "800";
        notification.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(() => {
            notification.removeAttribute("style");
        }, 1500);
    } else if (text !== text.toLowerCase()) {
        notification.style.background = "#0A3871";
        notification.style.color = "#FFFF";
        notification.style.fontWeight = "800";
        notification.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(() => {
            notification.removeAttribute("style");
        }, 1500);
    } else {
        text = text.replace(/e/mg, "enter");
        text = text.replace(/i/mg, "imes");
        text = text.replace(/a/mg, "ai");
        text = text.replace(/o/mg, "ober");
        text = text.replace(/u/mg, "ufat");

        outputText.innerHTML = text;
        copyButton.style.visibility = "inherit";
        cardContent.remove(); 
    }
});





decryptButton.addEventListener("click", e => {
    e.preventDefault();
    let text = inputText.value;
    let sanitizedText = text.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if (text === "") {
        notification.style.background = "#0A3871";
        notification.style.color = "#FFFF";
        notification.style.fontWeight = "800";
        notification.textContent = "El campo de texto no debe estar vacío";
        
        setTimeout(() => {
            notification.removeAttribute("style");
        }, 1500);
    } else if (text !== sanitizedText) {
        notification.style.background = "#0A3871";
        notification.style.color = "#FFFF";
        notification.style.fontWeight = "800";
        notification.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(() => {
            notification.removeAttribute("style");
        }, 1500);
    } else if (text !== text.toLowerCase()) {
        notification.style.background = "#0A3871";
        notification.style.color = "#FFFF";
        notification.style.fontWeight = "800";
        notification.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(() => {
            notification.removeAttribute("style");
        }, 1500);
    } else {
        text = text.replace(/enter/mg, "e");
        text = text.replace(/imes/mg, "i");
        text = text.replace(/ai/mg, "a");
        text = text.replace(/ober/mg, "o");
        text = text.replace(/ufat/mg, "u");

        outputText.innerHTML = text;
        copyButton.style.visibility = "inherit";
        cardContent.remove(); 
    }
});





copyButton.addEventListener("click", e => {
    e.preventDefault();
    let textToCopy = outputText;
    textToCopy.select();
    document.execCommand("copy"); 
});
