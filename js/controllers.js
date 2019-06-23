function ListaComprasController($scope) {

    $scope.item = {};

    $scope.lista = [
        {materia: 'Ciencias naturales', codigo: 'CCNN01', descripcion: 'nn'},
        {materia: 'Matemáticas', codigo: 'MATE01', descripcion: 'nn'},
        {materia: 'Inglés', codigo: 'ENGL01', descripcion: 'nn'},
        {materia: 'Ciencias sociales', codigo: 'CCSS01', descripcion: 'nn'},
        {materia: 'Geometría', codigo: 'MATEG1', descripcion: 'nn'},
        {materia: 'Estadística', codigo: 'ESTD01', descripcion: 'nn'},
        {materia: 'Física', codigo: 'FISIC1', descripcion: 'nn'},
        {materia: 'Físico Química', codigo: 'FISIC2', descripcion: 'nn'},
        {materia: 'Química', codigo: 'CHEMQ1', descripcion: 'nn'}
    ];

    $scope.adicionaItem = function () {
        $scope.lista.push({materia: $scope.item.materia, codigo: $scope.item.codigo, descripcion: $scope.item.descripcion});
        $scope.item.materia = $scope.item.codigo = '';
        toastr.success("Materia agregada con exito");
    };

    $scope.editarItem = function(index){
        $scope.item = $scope.lista[index];
        $scope.edit = true;
    };

    $scope.applyChanges = function(index){
        $scope.item = {};
        $scope.edit = false;
        toastr.success("Se ha modificado exitosamente");
    };

    $scope.deleteItem = function(index){
        $scope.lista.splice(index, 1);
        toastr.success("El ítem se ha removido con exito.");
    };
}