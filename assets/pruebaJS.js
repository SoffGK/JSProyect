let monto_minimo = 1000;
let cliente = document.getElementById("inNombre");
let monto = document.getElementById("inMonto.value");
let cuotas = document.getElementById("cuotas.value");
let calculo = monto * interesAplicado();
let clientes_rechazados = ["Juan", "Raul"];
let interes = [1.3, 1.5, 1.7, 1.9]

function interesAplicado() {
    if (document.getElementById("3c")) {
        return interes[0]
    } else if (document.getElementById("6c")) {
        return interes[1]
    } else if (document.getElementById("12c")) {
        return interes[2]
    } else(document.getElementById("18c")); {
        return interes[3]
    }
};


function listadeclientesrechazados() {
    if (monto < monto_minimo) {
        clientes_rechazados.push(cliente)
    }
};



function financiacion() {
    let formulario = document.forms['formulario'];

    let monto = formulario['monto'];
    if (monto.value >= monto_minimo) {
       document.getElementById("financia").innerHTML = "El valor a devolver es de" + " " + calculo + " " + "en" + " " + cuotas + " " + "de" + " " + calculo / cuotas;
    } else {
        document.getElementById("rechaza").innerHTML = "Lo sentimos, el monto que ingresaste no cumple con el valor minimo de financiación";
    }
};



const personas = [
    new Persona("Juana Pascua")
];

function clienteRechazado() {
    let texto = "";
    for (let persona of personas) {
        texto += `<li> ${persona.nombre}</li>`;
    }
    document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {

    const forma = document.forms["formulario"];
    const nombre = formulario["inNombre"];
    const persona = new Persona(inNombre.value);

    if (monto < monto_minimo) {
        personas.push(persona);
        clienteRechazado();
    }
};

financiacion();

agregarPersona()

listadeclientesrechazados();


/**if (monto > monto_minimo) {
    clientes_rechazados.push(cliente)
 }
 else {
    alert(clientes_rechazados.toString())
 } */