filas = 0;

alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

function addFila() {
    $("#nuevasFilas").append(
       '<tr class="table-active" id="columna'+filas+'">'+
            '<td><input id="xValue'+filas+'" class="form-control" type="number"></td>'+
            '<td><input id="fxValue'+filas+'" class="form-control" type="number"></td>'+
       '</tr>'
    );
    filas++;
    //$('#btnGenAcum').removeAttr('disabled');
}

function graphFX() {
    var ok = false;
    if (filas>0){
        for (var i=0;i<filas;i++){
            if($("#xValue"+i).val()!="" && $("#fxValue"+i).val()!=""){
                ok = true;
            }else{
                ok = false;
                break;
            }
        }
        if (ok) {
            $("#graficaTitle").empty();
            $("#graficaTitle").append("<h1>Grafica F(x)</h1>");
            var data = [];
            var inData = {};
            for (var i=0;i<filas;i++){
                inData = {
                    x: $("#xValue"+i).val(),
                    value: $("#fxValue"+i).val(),
                };
                data.push(inData);
            }
            $("#graficaFX").empty();
            new Morris.Bar({
                element: 'graficaFX',
                data: data,
                xkey: 'x',
                ykeys: ['value'],
                parseTime: false,
                resize: true,
                lineWidth: 1,
                labels: ['Value']
            });
        }
    }
}

function generarAcum() {
    var ok = false;
    if (filas>0){
        for (var i=0;i<filas;i++){
            if($("#xValue"+i).val()!="" && $("#fxValue"+i).val()!=""){
                ok = true;
            }else{
                ok = false;
                break;
            }
        }
    }

    if (ok){
        $("#namesTable").append('<th>f(x) acum</th>');
        var valueAcum = 0;
        for (var i=0;i<filas;i++){
            if (i==0){
                valueAcum = $("#fxValue"+i).val();
                $("#columna"+i).append('<td><input value="'+valueAcum+'" id="fxAcumValue'+i+'" class="form-control" type="number" readonly="true"></td>');
            }else{
                valueAcum = parseFloat($("#fxValue"+i).val()) + parseFloat($("#fxAcumValue"+(i-1)).val());
                $("#columna"+i).append('<td><input value="'+valueAcum+'" id="fxAcumValue'+i+'" class="form-control" type="number" readonly="true"></td>');
            }
        }
        $("#btnAcumGraph").fadeIn();
        $("#btnGenAcum").attr('disabled','disabled');
        $("#btnAdd").attr('disabled','disabled');
    }

}

function graphAcum() {
    var ok = false;
    if (filas>0){
        for (var i=0;i<filas;i++){
            if($("#xValue"+i).val()!="" && $("#fxValue"+i).val()!="" && $("#fxAcumValue"+i).val()!=""){
                ok = true;
            }else{
                ok = false;
                break;
            }
        }
        if (ok) {
            $("#graficaAcumTitle").empty();
            $("#graficaAcumTitle").append("<h1>Grafica F(x) Acumulativa</h1>");
           
            var inData = {};
            var dataKeys = [];
            var stringData = "[";
            for (var i=0;i<filas;i++){
                var name = alfa[i];
                inData['x'] = $("#xValue"+i).val(); 
                inData[name] = $("#fxAcumValue"+i).val(); 
                stringData += JSON.stringify(inData)+",";
                inData = {};
                inData['x'] = $("#xValue"+(i+1)).val(); 
                inData[name] = $("#fxAcumValue"+i).val(); 
                stringData += JSON.stringify(inData)+",";
                inData = {};
                dataKeys.push(alfa[i]);
               
            }
            stringData += "]";
            var data = eval(stringData);

            console.log(data);
            $("#graficaAcum").empty();
            new Morris.Line({
                element: 'graficaAcum',
                data: data,
                xkey: 'x',
                ykeys: dataKeys,
                parseTime: false,
                resize: true,
                lineWidth: 1,
                labels: dataKeys
            });
        }
    }
}