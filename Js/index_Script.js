/*----------Diccionario----------*/
const traducciones ={
    es: {
        sobre_mi:{
            saludo: "Hola, me presentosdsadas",
            descripcion: "oy un entusiasta de la programacion, amo aprender y aplicar ese conocimiento en la solucion de problemas reales.  ZActualmente estudio en el politecnico jaime isaza cadavid en la carrera de ingeniero informatico, disfruto de solucionar problemas o \"chicharrones\""
        },

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
        sobre_mi:{
            saludo: "Hola, me presentosdsadas",
            descripcion: "oy un entusiasta de la programacion, amo aprender y aplicar ese conocimiento en la solucion de problemas reales.  ZActualmente estudio en el politecnico jaime isaza cadavid en la carrera de ingeniero informatico, disfruto de solucionar problemas o \"chicharrones\""
        },
        
        sidebar:{
            sobre: "Sobre mi",
            habilidades: "Habilidades",
            experiencia: "Experiencia",
            contacto: "Contactame",
            titulo: "Titulo",
            tituloHijo: "Ingenieria informatica",
            estado: "en proceso",
            expedicion: "Lugar expedicion",
            firma: "Firma"
        },
         card:{
            edad: "Edad",
            pasatiempo: "pasatiempo",
            pasatiempoHijo: "dsdasds",
            titulo: "Titulo",
            tituloHijo: "Ingenieria informatica",
            estado: "en proceso",
            expedicion: "Lugar expedicion",
            firma: "Firma"
        }
    }
}

/*----------Traduccion----------*/
function traducir() {
    const checkBox = document.getElementById("lang-switch");
    const elementos = document.querySelectorAll('[data-i18n]');
    const idioma = 'en';
    if(checkBox.checked){
        idioma = 'es';
    }
    else{
        idioma = 'en';
    }

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