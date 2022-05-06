function perimetroCuadrado(){
    var ladoC = document.getElementById("lado1");
    var resultado = ladoC.value * 4;
    var imprimirSquare = document.getElementById("print__square").innerHTML = resultado + "cm.";
}
function areaCuadrado(){
    var ladoC = parseInt(document.getElementById("lado1").value);
    var resultado = Math.pow(ladoC, 2);
    var imprimirSquare = document.getElementById("print__square").innerHTML = resultado + "cm.";
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



