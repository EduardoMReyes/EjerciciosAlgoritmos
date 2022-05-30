// 1. Solicitar 3 números (entre el 1 y el 100)  y definir cual es el mayor
// SOLICITUD AL USUARIO
function Mayor() {
alert ("Elige tres números entre el 1 y el 100!");
num1 = parseFloat(prompt("Ingresa el primer número: "));
num2 = parseFloat(prompt("Ingresa el segundo número: "));
num3 = parseFloat(prompt("Ingresa el tercer número: "));
let mayor;
CONDICION
if(num1>=num2 && num1>=num3 ) {
       mayor = num1;
    }//if
     else if(num2>=num1 && num2>=num3) {
     mayor = num2;
    }//else if
    else {
        mayor = num3;
    }//else
// MUESTRA EL RESULTADO EN CONSOLA 
console.log("El número mayor es: " + mayor);
}//Mayor
// Mayor()

// 2. Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números
function Menor(){
alert ("Elige tres números entre el 1 y el 100!");
num1 = parseFloat(prompt("Ingresa el primer número: "));
num2 = parseFloat(prompt("Ingresa el segundo número: "));
num3 = parseFloat(prompt("Ingresa el tercer número: "));
let menor;
if(num1<=num2 && num1<=num3 ) {
     menor = num1;  
} else if(num2<=num1 && num2<=num3) {
     menor = num2;
}
 else {
     menor = num3;
}
}
console.log("El número menor es: " + menor);
// Menor()

// 3. Realizar un algortimo para adivinar un número entre el 1 y el 100 en el menor número de pasos posibles
function Adivinar() {
    let superior = 100;
    let inferior = 1;
    let noEncontrado = true;
    while (noEncontrado) {
        let mid = parseInt (inferior + ((superior - inferior)/ 2));
        console.log(mid);
        console.log((superior-inferior / 2)<1);
        if (((superior - inferior) /2) < 1){
            noEncontrado=false;
            alert("Tu número es el " + (parseInt(mid)+1));
            break;
        }//if
        let res = confirm("Tu número es menor o igual a " + mid);
        if (res){
            superior = mid;
        } else{
            inferior = mid;
        }//if
        console.log(inferior, superior);
    }//while   
}//Adivinar
// Adivinar()

// 4. Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
function Multiplo(){
alert ("Elige cualquier número entre el 100 y el 200");
let entero = (prompt("Ingresa tu número: " ));

if (entero % 3 == 0){
    console.log("Si es múltiplo de 3 :D");
}//if
   else{
    console.log("No es múltiplo de 3 :(");
}//else
}//Multiplo()
Multiplo()

// 5. Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
function Suma(){
alert ("Elige tres números!");
num1 = parseFloat(prompt("Ingresa el primer número: "));
num2 = parseFloat(prompt("Ingresa el segundo número: "));
num3 = parseFloat(prompt("Ingresa el tercer número: "));

if (num1==(num2 + num3)){
    console.log("El número 1 es igual a la sumatoria del número 2 y el 3!");
} //if
else if (num2 == (num1 + num3)){
    console.log("El número 2 es es igual a la sumatoria del 1 y el 3!");
} // else if 
else if (num3 == (num1 + num2)){
    console.log("El número 3 es igual a la sumatoria del 1 y el 2!");
}//else
else{
    console.log("Ninguno número son sumatoria de los otros dos");
}//else
} //Suma
Suma()

// 6. Elabora un algoritmo para leer un número y determinar si es par o impar
function parImpar(){
let par = (prompt("Ingresa un número: "));
if (par % 2 == 0){
    console.log("SIES PAR");
}
    else {
    console.log();("NOES PAR");
}
}
parImpar()