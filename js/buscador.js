$("#inputBuscar").keyup(function () {
  var consulta = $('#searchTabla').DataTable();
  consulta.search($(this).val()).draw();
	if ($("#inputBuscar").val()==""){
		$("#busqueda").hide();
	} else {
		$("#busqueda").fadeIn("fast");
  }
});
