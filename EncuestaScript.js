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
    console.log(puntajeTotal);
    mostrarPregunta();
}

function mostrarResultado() {
    const encuesta = document.getElementById('encuesta');
    const resultado = document.getElementById('resultado');
    const elementoPuntaje = document.getElementById('puntaje');
    const rangoElement = document.getElementById('rango');

    encuesta.classList.add('oculto');
    resultado.classList.remove('oculto');

    const rangoArray = obtenerRangoW(puntajeTotal);
    const rango = rangoArray[0];
    rangoElement.innerHTML = '';

    rango.forEach(perro => {
        const perroDiv = document.createElement('div');
        perroDiv.classList.add('divRazaCompatible');
        perroDiv.innerHTML = `<img src="${perro.imgs}" class="imagen-perro" alt="${perro.nombre}"><h3>${perro.nombre}</h3><p>${perro.descripcion}</p>`;
        rangoElement.appendChild(perroDiv);

    });
}
const botonCompatible = document.querySelector('#botonMostrar');
function ocultarRazasCompatibles(){
    document.querySelector('.contenedor').classList.add('oculto')
}
function mostrarPerrosCompatibles(){
    document.querySelector('#perrosCompatibles').classList.remove('oculto')
}
botonCompatible.addEventListener('click',function(){
    ocultarRazasCompatibles();
    mostrarPerrosCompatibles();
    manejoContenedor();
    mandarPaginaAdoptar();
})
function manejoContenedor(){
    const $contenedor = document.querySelector('#rowPerros');
    const rangoArray = obtenerRangoW(puntajeTotal);
    let rangoPerros =  rangoArray[1];
    console.log(rangoPerros);
    rangoPerros.forEach(perros=>{
        const card=  crearCard(perros);
        $contenedor.appendChild(card);
    })

}
function crearCard(perroObj){
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('cartaPerro');
    card.style.width = '18rem';
    const img = document.createElement('img');
    img.src = perroObj.src;
    img.className = 'card-img-top';
    img.alt = perroObj.src;
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.classList.add('nombrePerro');
    cardTitle.textContent = perroObj.nombre;
    const cardText1 = document.createElement('p');
    cardText1.classList.add('card-text');
    cardText1.classList.add('sexoPerro');
    cardText1.textContent = perroObj.sexo;
    const cardText2 = document.createElement('p');
    cardText2.classList.add('card-text');
    cardText1.classList.add('tamanoPerro');
    cardText2.textContent = perroObj.tamano;
    const cardText3 = document.createElement('p');
    cardText3.classList.add('card-text');
    cardText3.classList.add('edadPerro');
    cardText3.textContent = perroObj.edad;
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText1);
    cardBody.appendChild(cardText2);
    cardBody.appendChild(cardText3);
    card.appendChild(img);
    card.appendChild(cardBody);
    return card;
}
function mandarPaginaAdoptar(){
    const perroElegido = document.querySelectorAll('.cartaPerro');
    perroElegido.forEach(perroElegidoClic => {
        perroElegidoClic.addEventListener('click', function() {
            abrirFormulario();
        });
    });
}
function abrirFormulario() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSd8TwbGpfr58wXSMebmt9V-KAn3w5tNZrS2RUTkpu-krPeEzA/viewform?pli=1'; 
}

//Siguiente parte

function obtenerRangoW(ptotal){
    
    if(ptotal>=15 && ptotal<=18){
        return [rango1, prango1];
    }
    else if(ptotal>=19 && ptotal<=25){
        return [rango2, prango2];
    }
    else if(ptotal>=26 && ptotal<=30){
        return [rango3, prango3];
    }
    else if(ptotal>=31 && ptotal<=34){
        return [rango4, prango4];
    }
    else if(ptotal>=35 && ptotal<=40){
        return [rango5, prango5];
    }
    else if(ptotal>=41 && ptotal<=45){
        return [rango6, prango6];
    }
    else if(ptotal>=46 && ptotal<=50){
        return [rango7, prango7];
    }
    else if(ptotal>=51 && ptotal<=55){
        return [rango8, prango8];
    }
    else if(ptotal>=56 && ptotal<=60){
        return [rango9, prango9];
    }
    else if(ptotal>=61 && ptotal<=65){
        return [rango10, prango10];
    }
    else if(ptotal>=66 && ptotal<=70){
        return [rango11, prango11];
    }
    else if(ptotal>=71 && ptotal<=75){
        return [rango12, prango12];
    }
    return [];

}
const today = new Date();

const year = today.getFullYear();
function obtenerEdad(anoNacimiento) {
    const edad = year - anoNacimiento; 
    return `${edad} años`; 
}
function obtenerRango(anoNacimiento){
    const edadRango = year - anoNacimiento; 

    if(edadRango>=1 && edadRango<=3){
        return 2;
    }else{
        return 3;
    }

}

let nombre,descripcion,img;

const BulldogFrances={
    imgs : "img/1.jpg",
    nombre : "Bull Dog Frances",
    descripcion : "Tranquilo, cariñoso y adecuado para espacios pequeños.",
};

const PastorDeKarst={
    imgs : "img/2.jpg",
    nombre : "Pastor de Karst",
    descripcion : "Rústico, leal y protector.",
};


const BichonFrise={
    imgs : "img/3.jpg",
    nombre : "Bichon Frise",
    descripcion : "Amigable, alegre y de tamaño pequeño, perfecto para compañía en interiores.",
};

const ShihTzu={
    imgs : "img/4.jpg",
    nombre : "Shih Tzu",
    descripcion : "Encantador, alerta y afectuoso.",
};

const TerrierAleman={
    imgs : "/img/5.jpg",
    nombre : "Terrir Aleman",
    descripcion : "Valiente, inteligente y lleno de energía.",
};


const CavalierKing={
    imgs : "img/6.jpeg",
    nombre : "Cavalier King Charles Spaniel",
    descripcion : "Gentil, sociable y adaptable, ideal para familias y espacios reducidos.",
}
const LabradorRetriever={
    imgs :"img/7.jpg",
    nombre : "Labrador Retriever",
    descripcion : "Amigable, inteligente y activo, adecuado para familias y estilos de vida activos.",
};


const GoldenRetriever={
    imgs : "img/8.jpeg",
    nombre : "Golden Retriever",
    descripcion : "Amigable, inteligente y activo, adecuado para familias y estilos de vida activos.",
};
const LouisianaCatahoula={
    imgs : "img/9.jpg",
    nombre : "Louisiana Catahoula Leopard Dog",
    descripcion : "Enérgico, leal y con instintos de caza.",
};
const PlottHound={
    imgs : "img/10.jpg",
    nombre : "Cavalier King Charles Spaniel",
    descripcion : "Gentil, sociable y adaptable, ideal para familias y espacios reducidos.",
};


const Beagle={
    imgs : "img/11.jpg",
    nombre : "Beagle",
    descripcion : "Curioso, enérgico y amigable, se adapta bien a una variedad de entornos familiares.",
};
const BlackMouthCur={
    imgs : "img/12.jpg",
    nombre : "Black Mouth Cur",
    descripcion : "Versátil, trabajador y cariñoso.",
};
const PatterdaleTerrier={
    imgs : "img/13.jpg",
    nombre : "Patterdale Terrier",
    descripcion : "Intrépido, robusto y lleno de energía.",
};

const BorderCollie={
    imgs : "img/14.jpg",
    nombre : "Border Collie",
    descripcion : " Inteligente, enérgico y altamente entrenable, perfecto para personas activas y amantes del aire libre.",
};

const BracoAleman={
    imgs : "img/15.jpg",
    nombre : "Braco Aleman",
    descripcion : "Resistente, versátil y obediente",
};
const BulldogAmericano={
    imgs : "img/16.jpeg",
    nombre : "Bulldog Americano",
    descripcion : "Fuerte, leal y protector.",
};
const DogoArgentino={
    imgs : "img/17.webp",
    nombre : "Dogo Argentino",
    descripcion : "Valiente, leal y protector.",
};


const AustralianShepherd={
    imgs : "img/18.jpeg",
    nombre : "Australian Shepherd",
    descripcion : "Trabajador, leal y lleno de energía, necesita mucho ejercicio mental y físico.",
};
const PastorBelga={
    imgs : "img/19.jpg",
    nombre : "Pastor Belga",
    descripcion : "Inteligente, alerta y con gran resistencia.",
};


const Boxer={
    imgs : "img/20.webp",
    nombre : "Boxer",
    descripcion : "Juguetón, protector y enérgico, ideal para familias activas y hogares con niños.",
};
const SpanielTibetano={
    imgs : "img/21.jpg",
    nombre : "Spaniel Tibetano",
    descripcion : "Alegre, leal y con una personalidad única.",
};


const PastorAleman={
    imgs : "img/22.jpeg",
    nombre : "Pastor Aleman",
    descripcion : "Inteligente, leal y atlético, adecuado para personas con experiencia en crianza de perros.",
};

const HuskySiberiano={
    imgs : "img/23.webp",
    nombre : "Husky Siberiano",
    descripcion : "Independiente, enérgico y resistente, necesita mucho ejercicio y estimulación mental.",
};
const PitbullTerrier={
    imgs : "img/24.jpg",
    nombre : "Pitbull Terrier Americano",
    descripcion : "Fuerte, valiente y leal",
};


const DobermanPinscher={
    imgs : "img/25.jpeg",
    nombre : "Doberman Pinscher",
    descripcion : " Valiente, leal y alerta, requiere una mano firme pero amorosa en el entrenamiento.",
};

const RatTerrier={
    imgs : "img/26.webp",
    nombre : "Rat Terrier",
    descripcion : "Activo, inteligente y lleno de energía.",
};

const PinscherAleman={
    imgs : "img/27.webp",
    nombre : "Pinscher Aleman",
    descripcion : "Valiente, alerta y lleno de energía.",
};

const rango1=[BulldogFrances, PastorDeKarst];
const rango2=[BichonFrise, ShihTzu, TerrierAleman];
const rango3=[CavalierKing, LabradorRetriever];
const rango4=[GoldenRetriever, LouisianaCatahoula, PlottHound];
const rango5=[Beagle, BlackMouthCur, PatterdaleTerrier];
const rango6=[BorderCollie];
const rango7=[BracoAleman, BulldogAmericano, DogoArgentino];
const rango8=[AustralianShepherd, PastorBelga];
const rango9=[Boxer, SpanielTibetano];
const rango10=[PastorAleman];
const rango11=[HuskySiberiano, PitbullTerrier];
const rango12=[DobermanPinscher, RatTerrier, PinscherAleman];
//MOSTRAR PERROS COMPATIBLES

const perro2 = {
    nombre: "Thomas",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2019),
    src: "adop/2.png",
    rangoEdad: obtenerRango(2019)
};
const perro26 = {
    nombre: "Clint",
    sexo: "Macho",
    tamano: "Pequeño",
    edad: obtenerEdad(2020),
    src: "adop/26.png",
    rangoEdad: obtenerRango(2020)
};
const perro28 = {
    nombre: "Leo",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2019),
    src: "adop/28.png",
    rangoEdad: obtenerRango(2019)
};
const perro13 = {
    nombre: "Bono",
    sexo: "Macho",
    tamano: "Grande",
    edad: obtenerEdad(2020),
    src: "adop/13.png",
    rangoEdad: obtenerRango(2020)
};
const perro15 = {
    nombre: "Max",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2018),
    src: "adop/15.png",
    rangoEdad: obtenerRango(2018)
};
const perro19 = {
    nombre: "Alfie",
    sexo: "Macho",
    tamano: "Pequeño",
    edad: obtenerEdad(2020),
    src: "adop/19.png",
    rangoEdad: obtenerRango(2020)
};
const perro20 = {
    nombre: "Gringo",
    sexo: "Macho",
    tamano: "Grande",
    edad: obtenerEdad(2020),
    src: "adop/20.png",
    rangoEdad: obtenerRango(2020)
};
const perro30 = {
    nombre: "Tigre",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2021),
    src: "adop/30.png",
    rangoEdad: obtenerRango(2021)
};
const perro36 = {
    nombre: "Romi",
    sexo: "Hembra",
    tamano: "Mediano",
    edad: obtenerEdad(2020),
    src: "adop/36.png",
    rangoEdad: obtenerRango(2020)
};
const perro65 = {
    nombre: "Lauro",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2021),
    src: "adop/65.png",
    rangoEdad: obtenerRango(2021)
};
const perro67 = {
    nombre: "Toño",
    sexo: "Macho",
    tamano: "Mediano",
    edad: "8 meses",
    src: "adop/67.png",
    rangoEdad: 1
};
const perro34 = {
    nombre: "Carmelita",
    sexo: "Hembra",
    tamano: "Mediano",
    edad: obtenerEdad(2020),
    src: "adop/34.png",
    rangoEdad: obtenerRango(2020)
};
const perro25 = {
    nombre: "Tomasita",
    sexo: "Hembra",
    tamano: "Mediano",
    edad: obtenerEdad(2021),
    src: "adop/25.png",
    rangoEdad: obtenerRango(2021)
};
const perro22 = {
    nombre: "Brunito",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2020),
    src: "adop/22.png",
    rangoEdad: obtenerRango(2020)
};
const perro23 = {
    nombre: "Bambi",
    sexo: "Hembra",
    tamano: "Mediano",
    edad: obtenerEdad(2021),
    src: "adop/23.png",
    rangoEdad: obtenerRango(2021)
};
const perro27 = {
    nombre: "Charlie",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2019),
    src: "adop/27.png",
    rangoEdad: obtenerRango(2019)
};
const perro35 = {
    nombre: "Manu",
    sexo: "Macho",
    tamano: "Pequeño",
    edad: obtenerEdad(2021),
    src: "adop/35.png",
    rangoEdad: obtenerRango(2021)
};
const perro11 = {
    nombre: "Soco",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2021),
    src: "adop/11.png",
    rangoEdad: obtenerRango(2021)
};
const perro59 = {
    nombre: "Faber",
    sexo: "Macho",
    tamano: "Grande",
    edad: obtenerEdad(2021),
    src: "adop/59.png",
    rangoEdad: obtenerRango(2021)
};
const perro60 = {
    nombre: "Fabi",
    sexo: "Hembra",
    tamano: "Grande",
    edad: obtenerEdad(2021),
    src: "adop/60.png",
    rangoEdad: obtenerRango(2021)
};
const perro73 = {
    nombre: "Lima",
    sexo: "Hembra",
    tamano: "Mediano",
    edad: obtenerEdad(2021),
    src: "adop/73.png",
    rangoEdad: obtenerRango(2021)
};
const perro51 = {
    nombre: "Tommy",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2023),
    src: "adop/51.png",
    rangoEdad: obtenerRango(2023)
};
const perro53 = {
    nombre: "Jerry",
    sexo: "Macho",
    tamano: "Pequeño",
    edad: obtenerEdad(2020),
    src: "adop/53.png",
    rangoEdad: obtenerRango(2020)
};
const perro12 = {
    nombre: "Bartolito",
    sexo: "Macho",
    tamano: "Grande",
    edad: obtenerEdad(2020),
    src: "adop/12.png",
    rangoEdad: obtenerRango(2020)
};
const perro75 = {
    nombre: "Tina",
    sexo: "Hembra",
    tamano: "Pequeño",
    edad: obtenerEdad(2021),
    src: "adop/75.png",
    rangoEdad: obtenerRango(2021)
};
const perro69 = {
    nombre: "Luna",
    sexo: "Hembra",
    tamano: "Mediana",
    edad: "7 meses",
    src: "adop/69.png",
    rangoEdad: 1
};
const perro10 = {
    nombre: "Roger",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2017),
    src: "adop/10.png",
    rangoEdad: obtenerRango(2017)
};
const perro5 = {
    nombre: "Will",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2021),
    src: "adop/5.png",
    rangoEdad: obtenerRango(2021)
};
const perro14 = {
    nombre: "Pantro",
    sexo: "Macho",
    tamano: "Grande",
    edad: obtenerEdad(2019),
    src: "adop/14.png",
    rangoEdad: obtenerRango(2019)
};
const perro74 = {
    nombre: "Sur",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2018),
    src: "adop/74.png",
    rangoEdad: obtenerRango(2018)
};
const perro29 = {
    nombre: "Dotty",
    sexo: "Hembra",
    tamano: "Mediano",
    edad: obtenerEdad(2020),
    src: "adop/29.png",
    rangoEdad: obtenerRango(2020)
};
const perro31 = {
    nombre: "Lalo",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2021),
    src: "adop/31.png",
    rangoEdad: obtenerRango(2021)
};
const perro37 = {
    nombre: "Joey",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2023),
    src: "adop/37.png",
    rangoEdad: obtenerRango(2023)
};
const perro47 = {
    nombre: "Codi",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2023),
    src: "adop/47.png",
    rangoEdad: obtenerRango(2023)
};
const perro68 = {
    nombre: "Aura",
    sexo: "Hembra",
    tamano: "Mediano",
    edad: "8 meses",
    src: "adop/68.png",
    rangoEdad: 1
};
const prango1=[perro2,perro10];
const prango2=[perro26,perro28];
const prango3=[perro13, perro15, perro19, perro20, perro30, perro36, perro65, perro67];
const prango4=[perro25,perro34,perro37];
const prango5=[perro22, perro27,perro35];
const prango6=[perro11,perro29];
const prango7=[perro59,perro60,perro73];
const prango8=[perro51,perro74,perro47];
const prango9=[perro53,perro31];
const prango10=[perro23,perro68];
const prango11=[perro12,perro14];
const prango12=[perro75,perro69,perro5];
