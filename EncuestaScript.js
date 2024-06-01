const preguntas = [
    {
        pregunta: "1. A grandes rasgos me considero una persona bastante activa.",
        respuestas: [
            { texto: "Totalmente de Acuerdo", puntaje: 5 },
            { texto: "De acuerdo", puntaje: 4 },
            { texto: "Ni de acuerdo ni en desacuerdo", puntaje: 3 },
            { texto: "En desacuerdo", puntaje: 2 },
            { texto: "Totalmente en desacuerdo", puntaje: 1 }
        ]
    },
    {
        pregunta: "2. Me considero una persona que valora más el tiempo con uno mismo.",
        respuestas: [
            { texto: "Totalmente de Acuerdo", puntaje: 1 },
            { texto: "De acuerdo", puntaje: 2 },
            { texto: "Ni de acuerdo ni en desacuerdo", puntaje: 3 },
            { texto: "En desacuerdo", puntaje: 4 },
            { texto: "Totalmente en desacuerdo", puntaje: 5 }
        ]
    },
    {
        pregunta: "3. En líneas generales considero que me siento más cómodo en espacios donde hay muchas personas.",
        respuestas: [
            { texto: "Totalmente de Acuerdo", puntaje: 5 },
            { texto: "De acuerdo", puntaje: 4 },
            { texto: "Ni de acuerdo ni en desacuerdo", puntaje: 3 },
            { texto: "En desacuerdo", puntaje: 2 },
            { texto: "Totalmente en desacuerdo", puntaje: 1 }
        ]
    },
    {
        pregunta: "4. Por lo general, suelo tener un buen manejo de las emociones ante situaciones que me generan estrés.",
        respuestas: [
            { texto: "Totalmente de Acuerdo", puntaje: 5 },
            { texto: "De acuerdo", puntaje: 4 },
            { texto: "Ni de acuerdo ni en desacuerdo", puntaje: 3 },
            { texto: "En desacuerdo", puntaje: 2 },
            { texto: "Totalmente en desacuerdo", puntaje: 1 }
        ]
    },
    {
        pregunta: "5. Para mí, es esencial preservar la armonía en mis relaciones personales",
        respuestas: [
            { texto: "Totalmente de Acuerdo", puntaje: 5 },
            { texto: "De acuerdo", puntaje: 4 },
            { texto: "Ni de acuerdo ni en desacuerdo", puntaje: 3 },
            { texto: "En desacuerdo", puntaje: 2 },
            { texto: "Totalmente en desacuerdo", puntaje: 1 }
        ]
    },
    {
        pregunta: "6. Poseo una notable capacidad de adaptación y flexibilidad ante diversas situaciones, lo que me permite enfrentar los desafíos con eficacia y encontrar soluciones efectivas",
        respuestas: [
            { texto: "Totalmente de Acuerdo", puntaje: 5 },
            { texto: "De acuerdo", puntaje: 4 },
            { texto: "Ni de acuerdo ni en desacuerdo", puntaje: 3 },
            { texto: "En desacuerdo", puntaje: 2 },
            { texto: "Totalmente en desacuerdo", puntaje: 1 }
        ]
    },
    {
        pregunta: "7. Valoro altamente la autenticidad como un aspecto crucial en mis relaciones personales.",
        respuestas: [
            { texto: "Totalmente de Acuerdo", puntaje: 5 },
            { texto: "De acuerdo", puntaje: 4 },
            { texto: "Ni de acuerdo ni en desacuerdo", puntaje: 3 },
            { texto: "En desacuerdo", puntaje: 2 },
            { texto: "Totalmente en desacuerdo", puntaje: 1 }
        ]
    },
    {
        pregunta: "8. Me considero una persona que piensa mucho antes de tomar una decisión.",
        respuestas: [
            { texto: "Totalmente de Acuerdo", puntaje: 1 },
            { texto: "De acuerdo", puntaje: 2 },
            { texto: "Ni de acuerdo ni en desacuerdo", puntaje: 3 },
            { texto: "En desacuerdo", puntaje: 4 },
            { texto: "Totalmente en desacuerdo", puntaje: 5 }
        ]
    },
    {
        pregunta: "9. Me considero una persona que maneja sus conflictos de una forma constructiva y comunicativa.",
        respuestas: [
            { texto: "Totalmente de Acuerdo", puntaje: 5 },
            { texto: "De acuerdo", puntaje: 4 },
            { texto: "Ni de acuerdo ni en desacuerdo", puntaje: 3 },
            { texto: "En desacuerdo", puntaje: 2 },
            { texto: "Totalmente en desacuerdo", puntaje: 1 }
        ]
    },
    {
        pregunta: "10. Me considero una persona abierta a explorar nuevos mundos, me es fácil salir de mi zona de confort.",
        respuestas: [
            { texto: "Totalmente de Acuerdo", puntaje: 5 },
            { texto: "De acuerdo", puntaje: 4 },
            { texto: "Ni de acuerdo ni en desacuerdo", puntaje: 3 },
            { texto: "En desacuerdo", puntaje: 2 },
            { texto: "Totalmente en desacuerdo", puntaje: 1 }
        ]
    },
    {
        pregunta: "11. Considero que una competencia fuerte mía es el liderazgo en los grupos de trabajo.",
        respuestas: [
            { texto: "Totalmente de Acuerdo", puntaje: 5 },
            { texto: "De acuerdo", puntaje: 4 },
            { texto: "Ni de acuerdo ni en desacuerdo", puntaje: 3 },
            { texto: "En desacuerdo", puntaje: 2 },
            { texto: "Totalmente en desacuerdo", puntaje: 1 }
        ]
    },
    {
        pregunta: "12. Considero que mantengo un nivel de paciencia adecuado en diversas situaciones que me resultan estresantes.",
        respuestas: [
            { texto: "Totalmente de Acuerdo", puntaje: 5 },
            { texto: "De acuerdo", puntaje: 4 },
            { texto: "Ni de acuerdo ni en desacuerdo", puntaje: 3 },
            { texto: "En desacuerdo", puntaje: 2 },
            { texto: "Totalmente en desacuerdo", puntaje: 1 }
        ]
    },
    {
        pregunta: "13. Por lo general, soy una persona que planifica las actividades del día o de la semana con anticipación.",
        respuestas: [
            { texto: "Totalmente de Acuerdo", puntaje: 1 },
            { texto: "De acuerdo", puntaje: 2 },
            { texto: "Ni de acuerdo ni en desacuerdo", puntaje: 3 },
            { texto: "En desacuerdo", puntaje: 4 },
            { texto: "Totalmente en desacuerdo", puntaje: 5 }
        ]
    },
    {
        pregunta: "14. Me siento cómodo/a con un cierto grado de imperfección en mis actividades y relaciones, en lugar de buscar la perfección absoluta.",
        respuestas: [
            { texto: "Totalmente de Acuerdo", puntaje: 5 },
            { texto: "De acuerdo", puntaje: 4 },
            { texto: "Ni de acuerdo ni en desacuerdo", puntaje: 3 },
            { texto: "En desacuerdo", puntaje: 2 },
            { texto: "Totalmente en desacuerdo", puntaje: 1 }
        ]
    },
    {
        pregunta: "15. Me considero una persona bastante comprometida con mis responsabilidades.",
        respuestas: [
            { texto: "Totalmente de Acuerdo", puntaje: 5 },
            { texto: "De acuerdo", puntaje: 4 },
            { texto: "Ni de acuerdo ni en desacuerdo", puntaje: 3 },
            { texto: "En desacuerdo", puntaje: 2 },
            { texto: "Totalmente en desacuerdo", puntaje: 1 }
        ]
    },
];

let indicePreguntaActual = 0;
let puntajeTotal = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('boton-comenzar').addEventListener('click', comenzarEncuesta);
    mostrarPregunta();
});

function comenzarEncuesta() {
    document.getElementById('introduccion').classList.add('oculto');
    document.getElementById('encuesta').classList.remove('oculto');
}

function mostrarPregunta() {
    const contenedorPregunta = document.getElementById('contenedor-pregunta');
    contenedorPregunta.innerHTML = '';

    if (indicePreguntaActual >= preguntas.length) {
        mostrarResultado();
        return;
    }

    const pregunta = preguntas[indicePreguntaActual];
    const elementoPregunta = document.createElement('div');

    const textoPregunta = document.createElement('h3');
    textoPregunta.textContent = pregunta.pregunta;
    elementoPregunta.appendChild(textoPregunta);

    pregunta.respuestas.forEach(respuesta => {
        const botonRespuesta = document.createElement('button');
        botonRespuesta.textContent = respuesta.texto;
        botonRespuesta.classList.add('boton-respuesta');
        botonRespuesta.addEventListener('click', () => seleccionarRespuesta(respuesta.puntaje));
        elementoPregunta.appendChild(botonRespuesta);
    });

    contenedorPregunta.appendChild(elementoPregunta);
}

function seleccionarRespuesta(puntaje) {
    puntajeTotal += puntaje;
    indicePreguntaActual++;
    mostrarPregunta();
}

function mostrarResultado() {
    const encuesta = document.getElementById('encuesta');
    const resultado = document.getElementById('resultado');
    const elementoPuntaje = document.getElementById('puntaje');
    const rangoElement = document.getElementById('rango');

    encuesta.classList.add('oculto');
    resultado.classList.remove('oculto');

    //elementoPuntaje.textContent = `Tu puntaje total es: ${puntajeTotal}`;
    //rango.textContent = `Tu rango es: ${obtenerRango(puntajeTotal)}`;
    /*obtenerRango(puntajeTotal);
    console.log(obtenerRango(puntajeTotal));
    */
    const rango = obtenerRango(puntajeTotal);
    rangoElement.innerHTML = '';

    rango.forEach(perro => {
        const perroDiv = document.createElement('div');
        let imagenesHtml = ''
        perro.imgs.forEach(img => {
            imagenesHtml += `<img src="${img}" alt="${perro.nombre}" class="imagen-perro">`;
        });
        perroDiv.innerHTML = `${imagenesHtml}<h3>${perro.nombre}</h3><p>${perro.descripcion}</p>`;
        rangoElement.appendChild(perroDiv);

    });
}

//Siguiente parte

function obtenerRango(ptotal){
    
    if(ptotal>=15 && ptotal<=18){
        return rango1;
    }
    if(ptotal>=19 && ptotal<=25){
        return rango2;
    }
    if(ptotal>=26 && ptotal<=30){
        return rango3;
    }
    if(ptotal>=31 && ptotal<=34){
        return rango4;
    }
    if(ptotal>=35 && ptotal<=40){
        return rango5;
    }
    if(ptotal>=41 && ptotal<=45){
        return rango6;
    }
    if(ptotal>=46 && ptotal<=50){
        return rango7;
    }
    if(ptotal>=51 && ptotal<=55){
        return rango8;
    }
    if(ptotal>=56 && ptotal<=60){
        return rango9;
    }
    if(ptotal>=61 && ptotal<=65){
        return rango10;
    }
    if(ptotal>=66 && ptotal<=70){
        return rango11;
    }
    if(ptotal>=71 && ptotal<=75){
        return rango12;
    }
    return[];

}

let nombre,descripcion,img;

const BulldogFrances={
    imgs : ["/img/bulldogfranc.jpg"],
    nombre : "Bull Dog Frances",
    descripcion : "Tranquilo, cariñoso y adecuado para espacios pequeños.",
};

const PastorDeKarst={
    imgs : ["/img/grande/2.jpg"],
    nombre : "Pastor de Karst",
    descripcion : "Rústico, leal y protector.",
};


const BichonFrise={
    imgs : ["/img/bichonfrise.jpg"],
    nombre : "Bichon Frise",
    descripcion : "Amigable, alegre y de tamaño pequeño, perfecto para compañía en interiores.",
};

const ShihTzu={
    imgs : ["/img/mediano/26.jpg"],
    nombre : "Shih Tzu",
    descripcion : "Encantador, alerta y afectuoso.",
};

const TerrierAleman={
    imgs : ["/img/mediano/28.jpg"],
    nombre : "Terrir Aleman",
    descripcion : "Valiente, inteligente y lleno de energía.",
};


const CavalierKing={
    imgs : ["/img/cavalierking.jpeg"],
    nombre : "Cavalier King Charles Spaniel",
    descripcion : "Gentil, sociable y adaptable, ideal para familias y espacios reducidos.",
}
const LabradorRetriever={
    imgs :["/img/mediano/11.jpg",
    "/img/mediano/13.jpg",
    "img/pequeño/15.webp",
    "img/pequeño/19.jpeg",
    "img/pequeño/20.jpg",
    "img/pequeño/30.png",
    "img/mediano/36.png"],
    nombre : "Labrador Retriever",
    descripcion : "Amigable, inteligente y activo, adecuado para familias y estilos de vida activos.",
};


const GoldenRetriever={
    imgs : ["/img/goldenretr.jpeg"],
    nombre : "Golden Retriever",
    descripcion : "Amigable, inteligente y activo, adecuado para familias y estilos de vida activos.",
};
const LouisianaCatahoula={
    imgs : ["/img/mediano/34.jpg"],
    nombre : "Louisiana Catahoula Leopard Dog",
    descripcion : "Enérgico, leal y con instintos de caza.",
};
const PlottHound={
    imgs : ["/img/mediano/25.jpeg"],
    nombre : "Cavalier King Charles Spaniel",
    descripcion : "Gentil, sociable y adaptable, ideal para familias y espacios reducidos.",
};


const Beagle={
    imgs : ["/img/beagle.jpg"],
    nombre : "Beagle",
    descripcion : "Curioso, enérgico y amigable, se adapta bien a una variedad de entornos familiares.",
};
const BlackMouthCur={
    imgs : ["/img/pequeño/22.jpg",
    "/img/pequeño/23.jpg",
    "img/pequeño/27.jpg"],
    nombre : "Black Mouth Cur",
    descripcion : "Versátil, trabajador y cariñoso.",
};
const PatterdaleTerrier={
    imgs : ["/img/grande/35.webp"],
    nombre : "Patterdale Terrier",
    descripcion : "Intrépido, robusto y lleno de energía.",
};

const BorderCollie={
    imgs : ["/img/bordercoll.jpg"],
    nombre : "Border Collie",
    descripcion : " Inteligente, enérgico y altamente entrenable, perfecto para personas activas y amantes del aire libre.",
};

const BracoAleman={
    imgs : ["/img/bracoAlem.jpg"],
    nombre : "Braco Aleman",
    descripcion : "Resistente, versátil y obediente",
};
const BulldogAmericano={
    imgs : ["/img/bulldogAmer.jpeg"],
    nombre : "Bulldog Americano",
    descripcion : "Fuerte, leal y protector.",
};
const DogoArgentino={
    imgs : ["/img/dogoArg.webp"],
    nombre : "Dogo Argentino",
    descripcion : "Valiente, leal y protector.",
};


const AustralianShepherd={
    imgs : ["/img/australianShepherd.jpeg"],
    nombre : "Australian Shepherd",
    descripcion : "Trabajador, leal y lleno de energía, necesita mucho ejercicio mental y físico.",
};
const PastorBelga={
    imgs : ["/img/pastorBelgaMalinois.jpg"],
    nombre : "Pastor Belga",
    descripcion : "Inteligente, alerta y con gran resistencia.",
};


const Boxer={
    imgs : ["/img/boxer.webp"],
    nombre : "Boxer",
    descripcion : "Juguetón, protector y enérgico, ideal para familias activas y hogares con niños.",
};
const SpanielTibetano={
    imgs : ["/img/spanielTibetano.jpg"],
    nombre : "Spaniel Tibetano",
    descripcion : "Alegre, leal y con una personalidad única.",
};


const PastorAleman={
    imgs : ["/img/pastorAleman.jpeg"],
    nombre : "Pastor Aleman",
    descripcion : "Inteligente, leal y atlético, adecuado para personas con experiencia en crianza de perros.",
};

const HuskySiberiano={
    imgs : ["/img/huskySiberiano.webp"],
    nombre : "Husky Siberiano",
    descripcion : "Independiente, enérgico y resistente, necesita mucho ejercicio y estimulación mental.",
};
const PitbullTerrier={
    imgs : ["/img/mediano/12.jpg  "],
    nombre : "Pitbull Terrier Americano",
    descripcion : "Fuerte, valiente y leal",
};


const DobermanPinscher={
    imgs : ["/img/dobermanPinscher.jpeg"],
    nombre : "Doberman Pinscher",
    descripcion : " Valiente, leal y alerta, requiere una mano firme pero amorosa en el entrenamiento.",
};

const RatTerrier={
    imgs : ["/img/ratTerrier.avif"],
    nombre : "Rat Terrier",
    descripcion : "Activo, inteligente y lleno de energía.",
};

const PinscherAleman={
    imgs : ["/img/pinscherAleman.webp"],
    nombre : "Pinscher Aleman",
    descripcion : "Valiente, alerta y lleno de energía.",
};

rango1=[BulldogFrances, PastorDeKarst];
rango2=[BichonFrise, ShihTzu, TerrierAleman];
rango3=[CavalierKing, LabradorRetriever];
rango4=[GoldenRetriever, LouisianaCatahoula, PlottHound];
rango5=[Beagle, BlackMouthCur, PatterdaleTerrier];
rango6=[BorderCollie];
rango7=[BracoAleman, BulldogAmericano, DogoArgentino];
rango8=[AustralianShepherd, PastorBelga];
rango9=[Boxer, SpanielTibetano];
rango10=[PastorAleman];
rango11=[HuskySiberiano, PitbullTerrier];
rango12=[DobermanPinscher, RatTerrier, PinscherAleman];