function perimetroCuadrado(){
    var ladoC = document.getElementById("lado1");
    var resultado = ladoC.value * 4;
    document.getElementById("print__square").innerHTML = resultado + "cm.";
}


function areaCuadrado(){
    var ladoC = parseInt(document.getElementById("lado1").value);
    var resultado = Math.pow(ladoC, 2);
    document.getElementById("print__square").innerHTML = resultado + "cm.";
}


function perimetroTriangulo(){
    if (parseInt(document.getElementById("lado1t").value)  != parseInt(document.getElementById("lado2t").value)){
        alert("No estás colocando un triángulo isóceles")
    }
    else{
        var resultado = parseInt(document.getElementById("lado1t").value) 
        + parseInt(document.getElementById("lado2t").value) 
        + parseInt(document.getElementById("lado3t").value);
        document.getElementById("print__triangle").innerHTML = resultado + "cm.";
    }
}


function alturaTriangulo(){
    if (parseInt(document.getElementById("lado1t").value)  != parseInt(document.getElementById("lado2t").value)){
        alert("No estás colocando un triángulo isóceles")
    }
    else{
        var resultado = Math.sqrt(Math.pow(parseInt(document.getElementById("lado1t").value), 2) - Math.pow((parseInt(document.getElementById("lado3t").value) / 2),2));
        document.getElementById("print__triangle").innerHTML = resultado.toFixed(3) + "cm.";
        return resultado;
    }
}


function areaTriangulo(){
    var alturaTriangle = alturaTriangulo();
    var resultadoArea = (document.getElementById("lado3t").value * alturaTriangle) / 2;
    document.getElementById("print__triangle").innerHTML = resultadoArea.toFixed(3) + "cm.";
}


function diametroCirculo(){
    var resultado = document.getElementById("lado1c").value * 2;
    document.getElementById("print__circle").innerHTML = resultado + "cm.";
    return resultado;
}

function circunferencia(){
    var resultado = diametroCirculo() * Math.PI;
    document.getElementById("print__circle").innerHTML = resultado.toFixed(3) + "cm.";
}

function areaCirculo(){
    var resultado = Math.pow(parseInt(document.getElementById("lado1c").value), 2) * Math.PI;
    document.getElementById("print__circle").innerHTML = resultado.toFixed(3) + "cm.";
}














function triangulo(lado1, lado2, ladoBase){
    const perimetroTriangulo = lado1 + lado2 + ladoBase;
    const altura = Math.sqrt(Math.pow(lado2, 2) - Math.pow((ladoBase / 2), 2));
    console.log(altura);
    const area = (ladoBase * altura) / 2;
}
function circulo(radio){
    const diametro = radio * 2;
    const PI = Math.PI;
    const circunferencia = diametro * PI;
    const areaCirculo = (radio * radio) * PI;
}



