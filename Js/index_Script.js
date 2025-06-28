/*----------Diccionario----------*/
const traducciones ={
    es: {
        sidebar:{
            sobre: "Sobre mi",
            habilidades: "Habilidades",
            experiencia: "Experiencia",
            contacto: "Contactame"
        },

        card:{
            edad: "Edad",
        }
    },

    en:{
        sidebar:{
            sobre: "Sobre mi",
            habilidades: "Habilidades",
            experiencia: "Experiencia",
            contacto: "Contactame"
        },
         card:{
            edad: "Edad",
            pasatiempo: "pasatiempo",
            pasatiempoHijo: "dsdasds",
            titulo: "",
            tituloHijo: "",

            
        }
    }
}

/*----------Traduccion----------*/
function traducir(idioma) {
    const elementos = document.querySelectorAll('[data-i18n]');
    elementos.forEach(el =>{
        const clave = el.dataset.i18n;
        const partes = clave.split('.');
        let texto = traducciones[idioma];

        partes.forEach(parte =>{
            texto = texto?.[parte];
        })

        if(texto) el.textContent = texto;
    })
}