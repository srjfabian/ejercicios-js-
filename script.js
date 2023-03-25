/*function clima (estaLloviendo){
    if(estaLloviendo){
        console.log("si esta lloviendo")
    }
    else{
        console.log("no esta lloviendo")
    }
}
clima(false)
function calcular(num1,num2,num3){
    let sumar = num1 + num2;
    let resultado = sumar + num3;
    return resultado
}
console.log(calcular(2,3,4))

function triangulo (base,altura){
    let multiplicacion = base * altura
    let resultado = multiplicacion / 2
    return resultado
}
console.log(triangulo(2,2))


let base = parseInt(prompt("ingrese base"));
let altura = parseInt(prompt("ingrese altura"));
let area
area = (base*altura)/2;
document.write("el resultado del area del triangulo es: "+area)


let nota1 = parseInt(prompt("ingresela primer nota"));
let nota2 = parseInt(prompt("ingrese la segunda nota"));
let nota3 = parseInt(prompt("ingrese la tercer nota"));
nota = (nota1+nota2+nota3)/3;
document.write("la nota es: ",nota)
if(nota>=3){
    console.log("aprobo")
}
else{
    console.log("no aprobo")
}

//crea un funcion llamada calculadoraquereciba3parametrosunstringllamadoopeaciony2numeros llamados (num1 y num2)elstring nos debe indicar qeu tipo eoperacion se llevara a cabo entre num1 y num2 hacer suma resta divicion multiplicacion y exponente


function calculadora(){
    let num1 =parseInt(prompt("ingrese el primer numero"))
    let num2 =parseInt(prompt("ingrese el segundo numero"))
    let operacion = prompt("ingrese el tipo de operacion que desea realizar (suma,resta,multiplicacion,division,exponente)")
 switch(operacion){
    case "suma":
        resultado = num1 + num2
        document.write("la suma de los numeros es: " +resultado)
    case "resta":
        resultado = num1 - num2
        document.write("la resta de los numeros es: " +resultado)
    case "multiplicacion":
        resultado = num1 * num2
        document.write("la multiplicacion de los numeros es: " +resultado)
    case "division":
        resultado = num1 / num2
        document.write("la division de los numeros es: " +resultado)
    case "exponente":
        resultado = num1 ** num2
        document.write("El exponente de los numeros es: " +resultado)
    
}            
}
console.log(calculadora())

//crea un funcion llamada calculadoraquereciba3parametrosunstringllamadoopeaciony2numeros llamados (num1 y num2)elstring nos debe indicar qeu tipo eoperacion se llevara a cabo entre num1 y num2 hacer suma resta divicion multiplicacion y exponente*/


function calculadora(operacion, num1, num2) {
    let resultado = 0;
    switch(operacion) {
      case "suma":
        resultado = num1 + num2;
        break;
      case "resta":
        resultado = num1 - num2;
        break;
      case "multiplicacion":
        resultado = num1 * num2;
        break;
      case "division":
        if (num2 !== 0) {
          resultado = num1 / num2;
        } else {
          console.log("No se puede dividir entre cero");
        }
        break;
      case "exponente":
        resultado = num1 ** num2;
        break;
      default:
        console.log("Operación no válida");
    }
    return resultado;
  }


