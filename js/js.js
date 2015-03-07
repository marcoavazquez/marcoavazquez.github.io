 $("#btn-submit").click(function(){
    $("#btn-submit").attr("disabled", "disabled");
    var url = "https://agile-falls-8838.herokuapp.com/send"; // El script a dónde se realizará la petición.
    $.ajax({
           type: "POST",
           url: url,
           data: $("#form-contacto").serialize(), // Adjuntar los campos del formulario enviado.
           success: function(data)
           {
                $("#form-contacto").hide();
                $("#respuesta").html(data); // Mostrar la respuestas del script PHP.
           }
         });

    return false; // Evitar ejecutar el submit del formulario.
 });
