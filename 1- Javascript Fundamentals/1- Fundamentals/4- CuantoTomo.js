///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Default Function
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Number.prototype.isPrime = function() {
    for( let i=2; i<this; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`The function "isPrime()" took ${performance.now() - start} milliseconds to run`);
// It took 54376 milliseconds to perform the operation (54.3 seconds aprox)
// La operación tardó 54376 milisegundos (54.3 segundos aprox)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Modified Function "Math.sqrt(this)""
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Number.prototype.newIsPrime = function() {
    for( let i=2; i <= Math.sqrt(this); i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

const newStart = performance.now();
primeCount = 0;
num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.newIsPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`The function "newIsPrime(10.000)" took ${performance.now() - newStart} milliseconds to run`);
// It took 342 milliseconds to perform the operation (0.3 seconds aprox)
// La operación tardó 342 milisegundos (0.3 segundos aprox)

const newStart2 = performance.now();
primeCount = 0;
num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e5 ) {
    if( num.newIsPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 100,000th prime number is ${num-1}`);
console.log(`The function "newIsPrime(100.000)" took ${performance.now() - newStart2} milliseconds to run`);
// It took 10858 milliseconds to perform the operation (10 seconds aprox)
// La operación tardó 10858 milisegundos (10 segundos aprox)

const newStart3 = performance.now();
primeCount = 0;
num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e6 ) {
    if( num.newIsPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 1,000,000th prime number is ${num-1}`);
console.log(`The function "newIsPrime(1.000.000)" took ${performance.now() - newStart3} milliseconds to run`);
// It took 372004 milliseconds to perform the operation (6.2 minutes aprox)
// La operación tardó 372004 milisegundos (6,2 minutos aprox)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// recursive
const newStartrFib = performance.now();
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);
console.log(`The function "rFib()" took ${performance.now() - newStartrFib} milliseconds to run`);
// Above has O(n^2) complexity because each of these calls in turn makes two smaller recursive calls, and so on
// Arriba tiene una complejidad de O(n^2) porque cada una de estas llamadas a su vez realiza dos llamadas recursivas más pequeñas, y así sucesivamente

// iterative
const newStartiFib = performance.now();
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);
console.log(`The function "iFib()" took ${performance.now() - newStartiFib} milliseconds to run`);
// Above has a complexity of O(n) since in each iteration of the while loop, an addition is performed to calculate the next Fibonacci number. As a result, the total number of iterations performed by the loop is equal to n.
// Arriba tiene una complejidad de O(n) ya que en cada iteración del bucle while, se realiza una suma para calcular el siguiente número de Fibonacci. Como resultado, el número total de iteraciones realizadas por el bucle es igual a n.

// The iterative function will complete in less time than the recursive one
// La funcion iterativa se completara en menos tiempo que la recursiva

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const newStartReversed1 = performance.now();
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);
console.log(`The function "reversed1" took ${performance.now() - newStartReversed1} milliseconds to run`);

const newStartReversedString = performance.now();
function reverseString(str){
    let splitStr = str.split("")

    // Cuts the "reversing" of the split string by half the iteration.
    for(let i = 0; i < splitStr.length/2; i++){
        let temp = splitStr[i];
        splitStr[i] = splitStr[splitStr.length - 1 - i];
        splitStr[splitStr.length - 1 - i] = temp;
    }

    return splitStr.join("");
}

console.log(reverseString(story));
console.log(`The function "reverseString(str)" took ${performance.now() - newStartReversedString} milliseconds to run`);