// Get the modal
var modal = document.getElementById('myModal');

var modalseleccionado;

// Get the button that opens the modal
var btn = document.getElementById("MiBoton");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.opacity = 1;
	modal.style.height = "500px";
}

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
  //  modal.style.display = "none";
//}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalseleccionado) {
        modalseleccionado.style.display = "none";
    } else if (event.target == modal) {
        modal.style.display = "none";
    }
}



/****************************************** MODAL GALERIA ***************/


// Get the modal
//var modalarmadura = document.getElementById('modalArmadura');

// Get the button that opens the modal
//var btnarmadura = document.getElementById("CHOOSE00");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
/*btnarmadura.onclick = function() {
    modalarmadura.style.display = "block";
}*/

//modalpez

function abrirGaleria(idgaleria){

	var elemento = document.getElementById(idgaleria);
	elemento.style.display = "block";
	
	modalseleccionado = elemento;	
	
	document.body.style.overflow="hidden";

}


// When the user clicks on <span> (x), close all the modal
function cierraModal() {
	var capasModales = document.getElementsByClassName("modalGaleria");
	//alert("TAMAÑO: " + capasModales.length);
	for(i=0;i<capasModales.length;i++){
		//alert(capasModales[i].id);
		capasModales[i].style.display = 'none';
		
	
	}
	
	document.body.style.overflow="auto";
    //modal.style.display = "none";
}


/*
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalarmadura) {
        modalarmadura.style.display = "none";
    }
}*/
