// Entrada de Datos//

let Kilos;
let precio_producto = 0;
let precio_total = 0;
let opcion;
let FrutaElegida;
let VerduraElegida;
let ContinuaCiclo = 1;
let AgregarProductos;

// Declaro Arrays

let frutas = [ "Manzanas", "Bananas", "Tomates" ];
let verduras = [ "Boniato", "Cebolla", "Zapallo" ];
const precio_fruta = [ 80, 50, 90 ];
const precio_verdura = [ 60, 45, 50 ];

function elegir() {
    let option = "";
    
    for(let i = 0; i < frutas.int; i++) {
        option += frutas[i].toUpperCase() + " ($" + precio_fruta[i] + ")\n";
    }
    let optionSel = prompt("Elige fruta o verdura que quisieras comprar:\n\n" + option).toLowerCase();

    if(frutas.includes(optionSel)) {
        CompraOptionSel(frutas.indexOf(optionSel));
    } else if(optionSel != null) {
        alert("ERROR: Elije furta o verdura válida!");
        elegir();
    }

}
// Declaracion de Funciones

let nombrePersona = prompt("Ingrese su nombre por favor:");
saludar(nombrePersona);

function saludar(nombre) {
    alert("Hola " + nombre + "\nBienvenido/a a la verduleria San Pedro!");
}

// Intente esto pero no logre reflejarlo en los prompt

/*let Frutas (nombre precio_fruta, kilos) {
        this.nombre = nombre;
        this.precio_fruta = precio_fruta;
        this.kilos = kilos;
    } */
/*let MANZANAS = new Fruta (80, precio_total += Kilos*precio_fruta, Kilos);*/
/*let Bananas = new Fruta (50, precio_total += Kilos*precio_fruta, Kilos);*/
/*let TOMATES = new Fruta (50, precio_total += Kilos*precio_fruta, Kilos);*/


/*let Verduras (nombre, precio_fruta, kilos) {
        this.nombre = nombre;
        this.precio_fruta = precio_fruta;
        this.kilos = kilos;
    } */
/*let Boniatos = new Fruta (60, precio_total += Kilos*precio_fruta, Kilos);*/
/*let Cebollas = new Fruta (45, precio_total += Kilos*precio_fruta, Kilos);*/
/*let Zapallo = new Fruta (50, precio_total += Kilos*precio_fruta, Kilos);*/

function CompraOptionSel /*costoFruta*/ (fruta, Kilos) {        // Funcion para Fruta
    let precio_fruta;
    switch(fruta) {
        case 1:
            precio_fruta = 80;
            precio_total += Kilos*precio_fruta;
            return alert("Precio de tus manzanas: $" + Kilos*precio_fruta);

            
        case 2:
            precio_fruta = 50;
            precio_total += Kilos*precio_fruta;
            return alert("Precio de tus bananas: $" + Kilos*precio_fruta);
            
            
        case 3:
            
            
            let Tomates = { 
                nombre: "Tomates", 
                precio_fruta: 90, 
                Kilos: precio_total += Kilos*precio_fruta
            }
            console.log(Fruta3.nombre)
            console.log(Fruta3.precio_fruta)
            console.log(Fruta3.Kilos) 
            
            /*precio_fruta = 90;
            precio_total += kilos*precio_fruta;
            return alert("Precio de tus tomates: $" + kilos*precio_fruta);*/
    }
}

function costoVerdura(verdura, Kilos) {       // Funcion para Verdura
    let precio_verdura;
    switch(verdura) {
        case 1:
            precio_verdura = 60;
            precio_total += Kilos*precio_verdura;
            return alert("Precio de tus BONIATOS: $" + kilos*precio_verdura);
        case 2:
            precio_verdura = 45;
            precio_total += Kilos*precio_verdura;
            return alert("Precio de tus CEBOLLAS: $" + kilos*precio_verdura);
        case 3:
            precio_verdura = 50;
            precio_total += Kilos*precio_verdura;
            return alert("Precio de tus ZAPALLO: $" + kilos*precio_verdura);
    }
}


// Procesamiento

do {
    opcion = parseInt(prompt("Ingrese una opcion: \n0: Terminar compra \n1: Fruta \n2: Verdura"));

    if(opcion == 1) {
        FrutaElegida = prompt("Que fruta desea llevar? opcion: \n 0: Terminar compra \n 1: Manzanas \n 2: Bananas \n 3 Tomates").toUpperCase();

        switch(FrutaElegida) {
            case "MANZANA": case "MANZANAS": case "1":
                Kilos = parseFloat(prompt("¿Cuantos kilos de manzana desea llevar?"));

                if(isNaN(Kilos) || Kilos < 1)
                {
                    alert("No ingreso Fruta");
                }
                else {
                    costoFruta(1, Kilos);
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
                    alert("Gracias por tu compra! \n Gastaste un total de: $" + precio_total);
                    ContinuaCiclo = 0;
                }

                break;
        }
    } else if(opcion == 2) {
        VerduraElegida = prompt("Que Verdura desea llevar? opcion: \n 0: Terminar compra \n 1: Boniatos \n 2: cebolla \n 3 Zapallo").toUpperCase();

        switch(VerduraElegida) {
            case "BONIATO": case "BONIATOS": case "1":
                kilos = parseFloat(prompt("¿Cuantos kilos de BONIATOS desea llevar?"));

                if(isNaN(kilos) || kilos < 1)
                {
                    alert("No ingreso Verdura");
                }
                else {
                    costoVerdura(1, kilos);
                }
                
                AgregarProductos = parseInt(prompt("¿Desea llevar algo más? \n1. Si \n2. No"));

                if(AgregarProductos == 1)
                {
                    ContinuaCiclo = 1;
                }
                else if (AgregarProductos == 2)
                {
                    alert("Gracias por tu compra! \n Gastaste un total de: $" + precio_total);
                    ContinuaCiclo = 0;
                }

                break;
            case "CEBOLLA": case "CEBOLLAS": case "2":
                kilos = parseFloat(prompt("¿Cuantos kilos de CEBOLLAS desea llevar?"));
                costoVerdura(2, kilos);
                
                AgregarProductos = parseInt(prompt("¿Desea llevar algo más? \n1. Si \n2. No"));

                if(AgregarProductos == 1)
                {
                    ContinuaCiclo = 1;
                }
                else if (AgregarProductos == 2)
                {
                    alert("Gracias por tu compra! \n Gastaste un total de: $" + precio_total);
                    ContinuaCiclo = 0;
                }

                break;
            case "ZAPALLO": case "SAPALLO": case "3":
                kilos = parseFloat(prompt("¿Cuantos kilos de ZAPALLO desea llevar?"));
                costoVerdura(3, kilos);
                
                AgregarProductos = parseInt(prompt("¿Desea llevar algo más? \n1. Si \n2. No"));

                if(AgregarProductos == 1)
                {
                    ContinuaCiclo = 1;
                }
                else if (AgregarProductos == 2)
                {
                    alert("Gracias por tu compra! \n Gastaste un total de: $" + precio_total);
                    ContinuaCiclo = 0;
                }

                break;
        }
    } else if(opcion == 0) {
        alert("Decidiste terminar la compra.");
        ContinuaCiclo = 0;
    } else {
        alert("INGRESA UNA OPCIÓN VALIDA.");
        ContinuaCiclo = 1;
    }
} while (ContinuaCiclo == 1)
