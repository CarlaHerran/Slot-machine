// Cuando el documento esté listo, se va a hacer algo.
$(document).ready(function() {
	// Con el id del formulario, cuando le den submit, se va a detener la acción del formulario.
  $('#formulario').submit(function(event){
  	event.preventDefault();
  	// Se hace un POST al método (o ruta) /rolls que regresa el div con los dados (die). 
  	$.post("/rolls", function(data){
  		console.log(data);
  		// EL resultado lo sustituyes en el div die. 
  		$('#die').html(data);
  	});

  });

});
