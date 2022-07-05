// Entrada de Datos//
let kilos;
let precio_total = 0;
let opcion;
let FrutaElegida;
let VerduraElegida;
let ContinuaCiclo = 1;
let AgregarProductos;

let nombrePersona = prompt("Ingrese su nombre por favor:");
saludar(nombrePersona);

function saludar(nombre) {
    alert("Hola " + nombre + "\nBienvenido/a a la verduleria San Pedro!");
}

function costoFruta(fruta, kilos) {
    let precio_fruta;

    switch(fruta) {
        case 1:
            precio_fruta = 80;
            precio_total += kilos*precio_fruta;
            return alert("Precio de tus manzanas: $" + kilos*precio_fruta);
        case 2:
            precio_fruta = 50;
            precio_total += kilos*precio_fruta;
            return alert("Precio de tus bananas: $" + kilos*precio_fruta);
        case 3:
            precio_fruta = 90;
            precio_total += kilos*precio_fruta;
            return alert("Precio de tus tomates: $" + kilos*precio_fruta);
    }
}

// Procesamiento
do {
    opcion = parseInt(prompt("Ingrese una opcion: \n1: Fruta \n2. Verdura \n0. Terminar compra"));

    if(opcion == 1) {
        FrutaElegida = prompt("Que fruta desea llevar? opcion: \n 0: terminar compra \n 1: Manzanas \n 2: Bananas \n 3 Tomates").toUpperCase();

        switch(FrutaElegida) {
            case "MANZANA": case "MANZANAS": case "1":
                kilos = parseFloat(prompt("¿Cuantos kilos de manzana desea llevar?"));

                if(isNaN(kilos) || kilos < 1)
                {
                    alert("No ingresaste un carajo");
                }
                else {
                    costoFruta(1, kilos);
                }
                
                AgregarProductos = parseInt(prompt("¿Desea llevar algo más? \n1. Si \n2. No"));

                if(AgregarProductos == 1)
                {
                    ContinuaCiclo = 1;
                }
                else if (AgregarProductos == 2)
                {
                    alert("Gracias por tu compra! \nGastaste un total de: $" + precio_total);
                    ContinuaCiclo = 0;
                }

                break;
            case "BANANA": case "BANANAS": case "2":
                kilos = parseFloat(prompt("¿Cuantos kilos de banana desea llevar?"));
                costoFruta(2, kilos);
                
                AgregarProductos = parseInt(prompt("¿Desea llevar algo más? \n1. Si \n2. No"));

                if(AgregarProductos == 1)
                {
                    ContinuaCiclo = 1;
                }
                else if (AgregarProductos == 2)
                {
                    alert("Gracias por tu compra! \nGastaste un total de: $" + precio_total);
                    ContinuaCiclo = 0;
                }

                break;
            case "TOMATE": case "TOMATES": case "3":
                kilos = parseFloat(prompt("¿Cuantos kilos de tomate desea llevar?"));
                costoFruta(3, kilos);
                
                AgregarProductos = parseInt(prompt("¿Desea llevar algo más? \n1. Si \n2. No"));

                if(AgregarProductos == 1)
                {
                    ContinuaCiclo = 1;
                }
                else if (AgregarProductos == 2)
                {
                    alert("Gracias por tu compra! \nGastaste un total de: $" + precio_total);
                    ContinuaCiclo = 0;
                }

                break;
        }
    } else if(opcion == 2) {
        VerduraElegida = prompt("Que Verdura desea llevar? opcion: \n 0: terminar compra \n 1: Boniatos \n 2: cebolla \n 3 Zapallo");
    } else if(opcion == 0) {
        alert("Decidiste terminar la compra.");
        ContinuaCiclo = 0;
    } else {
        alert("INGRESA UNA OPCIÓN VALIDA.");
        ContinuaCiclo = 1;
    }
} while (ContinuaCiclo == 1)
