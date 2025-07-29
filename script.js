/*----------Diccionario----------*/
const traducciones ={
    es: {
        sobre_mi:{
            saludo: "Hola, me presento",
            descripcion: "soy un entusiasta de la programacion, amo aprender y aplicar ese conocimiento en la solucion de problemas reales. Actualmente estudio en el politecnico jaime isaza cadavid en la carrera de ingeniero informatico, disfruto de solucionar problemas o \"chicharrones\""
        },

        sidebar:{
            sobre: "Sobre mi",
            habilidades: "Habilidades",
            experiencia: "Experiencia",
            contacto: "Contactame"
        },

        card:{
            edad: "Edad",
        },

        experience:{
            main_title: "Proyectos",
            proyect1_description: "Landing page para una empresa dedicada a carteles, hecha con html, css javascript y para los carruseles bootsrap.",
            proyect2_description: "PastelApp es una aplicacion que estoy desarrollando actualmente, desarrollado con android studio y java."
        },

        skills:{
            title: "habilidades"
        },

        contact:{
            title: "contactame"
        }
        
    },

    en:{
        sobre_mi:{
            saludo: "Hola, me inglich",
            descripcion: "soy un entusiasta de la programacion, amo aprender y aplicar ese conocimiento en la solucion de problemas reales. Actualmente estudio en el politecnico jaime isaza cadavid en la carrera de ingeniero informatico, disfruto de solucionar problemas o \"chicharrones\""
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
            pasatiempoHijo: "aprender",
            titulo: "Titulo",
            tituloHijo: "Ingenieria informatica",
            estado: "en proceso",
            expedicion: "Lugar expedicion",
            firma: "Firma"
        },

        experience:{
            main_title: "Projects",
            proyect1_description: "Landing page para una empresa dedicada a carteles, hecha con html, css javascript y para los carruseles bootsrap.",
            proyect2_description: "PastelApp es una aplicacion que estoy desarrollando actualmente, desarrollado con android studio y java."
        },

        skills:{
            title: "habilidades"
        },

        contact:{
            title: "contactame"
        }
    }
}

/*----------Traduccion----------*/
document.addEventListener("DOMContentLoaded", () => {
    traducir();
});

function traducir() {
    const checkBox = document.getElementById("lang-switch");
    const elementos = document.querySelectorAll('[data-i18n]');
    let idioma = 'en';
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