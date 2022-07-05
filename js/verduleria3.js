

// Declaro Arrays

let frutas = [{id:1,descripcion:"manzana",precio:150},
              {id:2,descripcion:"banana",precio:150},
			  {id:3, descripcion:"tomates",precio:150}

];
let carrito=[];

class productoCarrito {
	constructor (id, descripcion,precio,kg ){
	this.id = id;
	this.descripcion = descripcion;
	this.precio = precio;
	this.kg = kg;
	}
}
let mensaje = ("ingrese producto a comprar \n 1- Manzana x kg \n 2 - banana x kg \n 3 - tomate x kg \n 4 -Mostrar Carrito \n 5- Salir");
let mensaje1 = ("ingrese kilos");
let respuesta=0;


function validarPrompt (mensaje){
    var entrada = prompt(mensaje);
	   while (entrada =="" || entrada == null){		
		   alert("No se cargaron datos");
		   entrada= prompt(mensaje);
	   }
	   return respuesta = entrada;
}

function validarMenu (){
	validarPrompt(mensaje); 
	parseInt(respuesta); 
	if ( respuesta == 1 || respuesta == 2 || respuesta == 3){
		cargarProducto();
	} else if ( respuesta == 4 ){
		validarCarrito(); 
	}else if (respuesta == 5) {
		alert(" Gracias por Visitar nuestra web");
	} else {
		alert(" Datos mal ingresados");
		validarMenu();
	}
}

function cargarProducto (){
	let kilos=1;
	frutas.forEach((i) => {
		if (i.id == respuesta){
			const nuevoCarrito  = new productoCarrito (i.id,i.descripcion,i.precio, kilos );
			carrito.push (nuevoCarrito);
		} 
		});
	console.log(carrito);	
	validarMenu();
}
function validarCarrito(){
	if (carrito.length == 0){
		alert("carrito Vacios");
		validarMenu ()
	} else{
		muestroCarrito();
	}
function muestroCarrito(){
	let mostrar="";
	let precioTotal =0;
	carrito.forEach((i) => {
		 mostrar+= ("-" +i.descripcion+ " $ "+ i.precio +" "+i.kg +" Kg " +"\n" );
		 precioTotal += i.precio;

	});
	alert (mostrar + "\n" + " Su precio total a Pagar es " + precioTotal);
     alert ("Gracias por su compra, lo esperamos pronto");
   }	
}

validarMenu();