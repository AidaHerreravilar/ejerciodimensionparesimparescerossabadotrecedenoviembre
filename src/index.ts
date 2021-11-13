//EJERCICIO 2: ALAMACENE EN UN ARREGLO DE DIMENSIÓN N NÚMEROS (LA CANTOIDAD ES INGRESADA POR EL USUARIO).
//MUESTRE CUÁNTOS NÚMEROS SON PARES, CUÁNTOS SON IMPARES Y CUÁNTOS CEROS HAY.

let dimension: number = Number(prompt("ingreso dimension"));
let numerosIngresados: number[] = new Array(dimension);
let cantPares: number = 0;
let cantImpares: number = 0;
let cantCeros: number = 0;

for (let index = 0; index < dimension; index++) {
  numerosIngresados[index]= Number(prompt("ingreseNumeros");
  if (numerosIngresados[index] % 2 === 0) {
    cantPares++;
  } else if (
    numerosIngresados[index] !== 0 &&
    numerosIngresados[index]! % 2 === 0
  ) {
    cantImpares++;
  } else if (numerosIngresados[index] === 0) {
    cantCeros++;
  }
}

console.log("numeros Pares" + cantPares);
console.log("numeros Impares" + cantImpares);
console.log("numeros ceros" + cantCeros);
