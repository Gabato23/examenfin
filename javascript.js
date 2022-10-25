

function login(){
    var loginInput = document.getElementById('loginInput').value;
    if(loginInput == ''){
        alert("Campo Vacio");
    }else{
        document.getElementById('loginUser').innerHTML= loginInput;
    }
}

function convertir(){
    var selectConversor = document.getElementById('selectMonedas').value;

    var convInput = document.getElementById('convInput').value;
    if(convInput == ''){
        alert("Introduzca un numero");
    }else{
        convInput = parseFloat(convInput);
        var salida = 0;
        var titulo = '';
        if(selectConversor == "1"){
            salida = convInput / 6.96;
            salida
            titulo = convInput + ' Bs = '+salida.toFixed(2)+" $";
        }
        if(selectConversor == "2"){
            salida = convInput * 6.96;
            titulo = convInput + ' $ = '+salida.toFixed(2)+" Bs";
        }

        document.getElementById('resultadoConver').innerHTML = titulo;
    }
}

function cambio(){
    var dol = 7; 
    var re ;   
    var pe =parseInt(document.getElementById('pesos').value, 10);
     
    re = pe / dol ;
    document.getElementById('resul').innerHTML= re;
    
    }
    

    function eurosDolares(valNum) {
  document.getElementById("inputDolares").value=valNum*6.96;
}
function dolaresEuros(valNum) {
  document.getElementById("inputEuros").value=valNum/6.83;
}