// Introducción de la funcionalidad de la página
alert("Este Programa esta conectado a la red del administratum del Imperio de la Humanidad. Tiene como finalidad, educar a nuevos viajeros que se aventuren en este universo tan basto.");

// Creo una función para que salude al usuario
function saludar(nombre) {
    alert("!Hola¡ "+nombre+" Soy el Tecnomago I171023 a cargo de esta base de datos del administratum");
}
// llamo a la función y le pido información al usuario
saludar(prompt("Primero debe identificarse:"));

// 
let conocimientoprevio = prompt("Antes de comenzar, responda con 'si o no' ¿Posees algún conocimiento sobre este universo?")

// Creo una condición para filtrar a los tipos de usuarios que ingresen a la página
if (conocimientoprevio == "si") {
    alert("Entendido....*modificando respuesta*...Ahora te voy a redirigir hacia la base de datos registrados hasta ahora sobre el Imperio y las razas xenos, pero este último a su debido tiempo.");
} else {
    alert("*Iniciando introducción*......Este universo se encuentra en una guerra constante entre todos los seres que habitan la galaxia, existen distintas facciones, con sus respectivos motivos para hacer lo que hacen, no existe la piedad, misericordia o contemplación de ningún tipo, nadie dudará en sacar ventaja de vos para su propio veneficio, los recursos son escasos y los que posee cada facción están destinados para su propia maquinaria bélica. Con esto deberías ya tener una idea de lo que sucede, ahora serás redirigido a la base de datos del Imperio, para que puedas explorar por tu cuenta esta información.");
}

// creo un array para almacenar datos
const armeriaspacemarine = ["Rifle Bólter", "Lanzallamas", "Pistola Bólter", "Rifle de Fusión", "Rifle de Plasma", "Escopeta", "Rifle de Francotirador"];

// Creo la función para ver los elementos del array
const verarmeria = () => {
    console.log(armeriaspacemarine.join(", "));
}

// creo la función para saltar la soga
function saltarlasoga(tiempo) {
    for (let i = 1 ; i <= tiempo ; i++) {
        alert("El Orko saltó la soga "+i+" vez(ces).");
    }
    alert("El Orko murió de vejez porque no pudo luchar por estar saltando la soga.");
}

// Creo la Variable para pedir los datos y el usuario navegue por el menú
let menu = parseInt(prompt(" Administratum del Imperio de la Humanidad. Seleccione el número del índice de la base de datos a la que quiere acceder. 1- Emperador de la Humanidad.  2- Primarcas.  3- Adeptus Astartes.  4- Adepta Sororita.  5- Armería de los Adeptus Astartes  6-.....*datos corruptos*....Tecnomago I171023: Hay datos que no están completos, se irán actualizando con el tiempo.  7- [Saltar la Soga]  8- Salir. "));

// creo el menú con el ciclo while para que se siga viendo después de entrar en las opciones
while (menu != 8 ) {
    switch (menu) { // uso el switch para crear cada opción para que el usuario navegue
        case 1:
            alert("El Emperador es el supremo líder del Imperio de la Humanidad. Normalmente conocido como «El Dios Emperador de la Humanidad», se trata de un psíquico inmortal de gran poder, el cual, a pesar de estar actualmente en el trono dorado, en un estado intermedio entre la vida y la muerte, ha mantenido al Imperio unido durante aproximadamente diez mil años. Se desconoce tanto su verdadero nombre como el de sus progenitores biológicos.");
            break;
        case 2:
            alert("Los Primarcas son los veinte 'hijos' alterados genéticamente del Emperador. El Emperador empleó su propio ADN en su creación, y fueron diseñados para ser muy superiores al humano medio: inmensamente más grandes, fuertes, resistentes, rápidos e inteligentes. Asimismo, en su mayoría eran increíblemente carismáticos, puesto que su principal misión era dirigir los ejércitos imperiales.");
            break;
        case 3:
            alert("Los Marines Espaciales o Astartes son los mejores guerreros del Imperio, dedicados por completo a defender al Emperador y al Imperio de la Humanidad. Las Legiones Astartes surgieron durante la Gran Cruzada, cada una liderada por un Primarca, con su información genética implantada en sus guerreros. Después de que el Señor de la Guerra Horus se rebelase contra el Emperador, las Legiones fueron divididas en fuerzas de combate más pequeñas integradas por casi mil Hermanos de Batalla, llamadas Capítulos, durante el periodo conocido como la Segunda Fundación.");
            break;
        case 4:
            alert("El Adepta Sororitas es una hermandad de guerreras de élite, conocidas como Hermanas de Batalla, que son criadas desde la infancia para adorar al Emperador de la Humanidad siguiendo el dogma de la Eclesiarquía. Su fanática devoción e inquebrantable pureza son un bastión contra la corrupción, la herejía y los ataques alienígenas, y una vez entran en batalla no se detienen ante nada hasta que sus enemigos hayan sido purgados del Imperio por la santísima trinidad del bólter, el lanzallamas y el rifle de fusión. Asimismo, son la Cámara Militante del Ordo Hereticus de la Inquisición: los temidos Cazadores de Brujas.");
            break
        case 5:
            verarmeria();
            break;
        case 7:
            saltarlasoga(prompt("¿Cuántas veces quiere que el Orko salte la soga?:"));
            break;
        case 8:
            break;
        default:
            alert("Opción seleccionada: Inválida");
            break;
    }
    // llamo a la variable para que pregunte después de que se termine de navegar por el switch
    menu = parseInt(prompt(" Administratum del Imperio de la Humanidad. Seleccione el número del índice de la base de datos a la que quiere acceder. 1- Emperador de la Humanidad.  2- Primarcas.  3- Adeptus Astartes.  4- Adepta Sororita.  5- Armería de los Adeptus Astartes  6-.....*datos corruptos*....Tecnomago I171023: Hay datos que no están completos, se irán actualizando con el tiempo.  7- [Saltar la Soga]  8- Salir. "));
}

