document.addEventListener("DOMContentLoaded", () => {
    traducir();
    UpdateAge();
});

/*----------Diccionario----------*/
const traducciones ={
    es: {
        sobre_mi:{
            saludo: "Hola, soy",
            descripcion: "Hola, me llamo Santiago Bravo Pareja, soy estudiante de ingeniería informática en el Politécnico Jaime Isaza Cadavid. Soy entusiasta por la programación, me encanta aprender y aplicar mis conocimientos a la resolución de problemas. "
        },

        sidebar:{
            sobre: "Sobre mi",
            habilidades: "Habilidades",
            experiencia: "Experiencia",
            contacto: "Contacto"
        },

        card:{
            edad: "Edad",
            pasatiempo: "Pasatiempo",
            pasatiempoHijo: "Aprender",
            titulo: "Titulo",
            tituloHijo: "Ingenieria informatica",
            estado: "En proceso",
            expedicion: "Lugar de expedicion",
            firma: "Firma"
        },

        experience:{
            main_title: "Proyectos",
            proyect1_description: "Landing page para una empresa especializada en diseñar y hacer carteles. Utilizando HTML, CSS, JavaScript. Para la realización de carruseles se utilizó Bootstrap.",
            proyect2_description: "PastelApp es una aplicación de mi autoría, me encuentro trabajando en ella, está diseñada con Android Studio y Java.",
            proyect3_description: "Mouse of the magus es un pequeño juego producto de un proyecto en conjunto para una asignatura, desarrollada en unity con C# y en conjunto con un equipo de trabajo",
            proyect4_description: "Fary requiem es un demo producto de un proyecto en conjunto para una asignatura, desarrollada en unity con C# y en conjunto con un equipo de trabajo conformado tanto por artistas como por desarrolladores",
            proyect5_description: "Balance es un minijuego 3D desarrollado en Unreal Engine por mí, como único programador, junto a un equipo de artistas encargados en el diseño de personajes y escenario. Dentro del juego, se  implementó un control físico con giroscopio, acompañado de un ESP32 y un módulo MPU5060. Como alternativa a este, se hace también uso de dispositivos móviles, aprovechando el giroscopio y acelerómetro dentro de ellos."
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
            saludo: "Hi, i am",
            descripcion: "Hello, my name is Santiago Bravo Pareja. I am a Computer Engineering student at the Politécnico Jaime Isaza Cadavid. I am enthusiastic about programming, and I find joy learning and applying that knowledge to solve problems."
        },
        
        sidebar:{
            sobre: "About me",
            habilidades: "Skills",
            experiencia: "Experience",
            contacto: "Contact me",
        },

        card:{
            edad: "Age",
            pasatiempo: "Hobby",
            pasatiempoHijo: "Learn",
            titulo: "Title",
            tituloHijo: "Ingenieria informatica",
            estado: "in process",
            expedicion: "place of dispatch",
            firma: "Firm"
        },

        experience:{
            main_title: "Projects",
            proyect1_description: "Landing page for a company specialized in posters, created with HTML, CSS, JavaScript, and Bootstrap for the carousels.",
            proyect2_description: "PastelApp is an application that I am currently developing. Built with Android Studio and Java.",
            proyect3_description: "Mouse of the Magus is a small game, the product of a joint project for a subject, developed in Unity with C# and together with a work team.",
            proyect4_description: "Fary requiem es un demo producto de un proyecto en conjunto para una asignatura, desarrollada en unity con C# y en conjunto con un equipo de trabajo conformado tanto por artistas como por desarrolladores",
            proyect5_description: "Balance is a 3D minigame developed in Unreal Engine by me as the sole programmer, alongside a team of artists responsible for character and environment design. Within the game, gyroscope-based motion controls were implemented using an ESP32 and an MPU5060 module. As an alternative to this control method, the game also supports mobile devices, utilizing their built-in gyroscopes and accelerometers."
        },

        skills:{
            title: "Skills"
        },

        contact:{
            title: "Contact me"
        }
    }
}

/*----------Traduccion----------*/
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

//Update age
function UpdateAge(){
    let birthday = new Date(2003, 2, 12);
    const date = new Date();

    let yearDiff = date.getFullYear() - birthday.getFullYear();
    
    if(date.getMonth() < birthday.getMonth() || (date.getMonth() === birthday.getMonth() && date.getDate() < birthday.getDate())){
        yearDiff--;
    }
    document.getElementById("age").textContent = yearDiff;
}