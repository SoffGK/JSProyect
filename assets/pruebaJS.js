let monto_minimo = 1000;
let cliente = prompt("¡Hola! Ingresa tu nombre")
let monto = prompt(" Ingresa el monto que te gustaria financiar.");
let cuotas = prompt("Ingresa en cuantas cuotas te gustaria pagarlo (3,6,12)");
let calculo = monto * interes();
let clientes_rechazados = ["Juan", "Raul"];



function interes() {
    while (cuotas == 3 || 6) {
        return 1.4
    };
    return 1.8
};


function listadeclientesrechazados() {
    console.log (clientes_pobres)
    if (monto > monto_minimo) {
        clientes_rechazados.push(cliente)
     }
};



function financiacion() {
    if (monto >= monto_minimo) {
        return alert("El valor a devolver es de" + " " + calculo + " " + "en" + " " + cuotas + " " + "de" + " " + calculo / cuotas)
    } else {
        return alert("Lo sentimos, el monto que ingresaste no cumple con el valor minimo de financiación")
    }
};

financiacion();


listadeclientesrechazados();
