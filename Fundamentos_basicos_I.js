// Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

function imprimeEnteros(numero) {
    var arreglo = [];
    for (i = 1; i <= numero; i++) {
        arreglo.push(i);
    }
    return arreglo;
}
var resultado = imprimeEnteros(255);
console.log(resultado);

// Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejerci cio. 

function sumaPares(numero) {
    var sumatoria = 0;
    for (var i = 0; i <= numero; i++) {
        if (i % 2 == 0) {
            sumatoria = sumatoria + i;
        }
    }
    return sumatoria;
}
var y = sumaPares(1000)
console.log(y)


// Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
function sumaImpares(numero) {
    var sumatoria = 0;
    for (var i = 0; i <= numero; i++) {
        if (i % 2 == 1) {
            sumatoria = sumatoria + i;
        }
    }
    return sumatoria;
}
var y = sumaImpares(5000);
console.log(y);

// Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
function sumaArreglo(arr) {
    var sumatoria = 0;
    for (var i = 0; i < arr.length; i++) {
        sumatoria = sumatoria + arr[i];
    }
    return sumatoria;
}
var y = sumaArreglo([-5, 2, 5, 12]);

console.log(y);

// Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 

function imprimeMaximo(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i < arr[i]) {
            max = arr[i];
        }

    }
    return max;
}
var y = imprimeMaximo([-5, 2, 5, -12]);

console.log(y);

// Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).

function imprimePromedio(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
var y = imprimePromedio([1, 3, 5, 7, 20]);

console.log(y);

// Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

function arrayImpar(numero) {
    var arreglo = [];
    for (i = 1; i <= numero; i++) {
        if (i % 2 == 1) {
            arreglo.push(i);
        }
    }
    return arreglo;
}
var resultado = arrayImpar(25);
console.log(resultado);


// Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. 
// Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
function cuentaMayores(array, y) {
    var contador = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] > y) {
            contador++;
        }
    }
    return contador;
}
y = cuentaMayores([1, 3, 5, 7], 2);
console.log(y);


// Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

function reemplazaCuadrados(arr) {
    var cuadrado = [];
    for (i = 0; i < arr.length; i++) {
        cuadrado[i] = arr[i] * arr[i];
    }
    return cuadrado;
}
y = reemplazaCuadrados([1, 5, 10, -2]);
console.log(y);

// Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
function reemplazaNegativos(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }
    return array;
}

var y = reemplazaNegativos([1, -5, 10, -2]);
console.log(y);

// Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array 
// que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
function MaxMinAvg(array) {
    var max = 0;
    var min = 0;
    var sum = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
        if (max < array[i]) {
            max = array[i];
        } else if (array[i] < min) {
            min = array[i];
        }
    }
    var newArray = [];
    newArray.push(max);
    newArray.push(min);
    var promedio = sum / array.length;
    newArray.push(promedio);
    return newArray;
}

var resultado = MaxMinAvg([1, 5, 10, -2]);
console.log(resultado);


// Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. 
// La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 

function intercambia(arr) {
    var temp = arr[arr.length - 1];
    arr[arr.length - 1] = arr[0];
    arr[0] = temp;
}
var tester = [1, 4, 10, -2];
intercambia(tester);
console.log(tester);
// De Número a String: Escribe una función que tome un array de números y reemplace cualquier 
// valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].

function reemplazaNegativos(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = "dojo";
        }
    }
    return array;
}

var y = reemplazaNegativos([1, -5, 10, -2]);
console.log(y);