// Bono 1 
// Si se elige el elemento más a la izquierda de la matriz como pivote y la matriz ya está ordenada de menor a mayor, entonces todos los elementos de la matriz estarán a la derecha del pivote y ninguna partición se realizará. Esto significa que se ejecutarán n-1 llamadas recursivas (en cada iteración), y cada una tendrá solo un elemento menos en la matriz. Por lo tanto, el tiempo de ejecución del algoritmo sería cuadrático O(n²).

// Bono 2
// La complejidad del tiempo de QuickSort utilizando la partición de Hoare es de O(n²) en el peor de los casos

// Bono 3
// El Big Omega para hablar sobre el mejor escenario es de O(n log n) y Big Theta para hablar sobre el caso promedio es de tambien es O(n log n)

function partition(arr, left, right){
    var pivot_val = arr[Math.floor((left + right)/2)];
    var i = left;
    var j = right;

    while(i <= j){
        while(arr[i] < pivot_val){
            i++;
        }
        while(arr[j] > pivot_val){
            j--;
        }
        if(i <= j){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            i++;
            j--;
        }
    }
    return i;
}

function quicksort(arr, left, right){
    if (arr.length > 1){
        var partIndex = partition(arr, left, right);

        if (left < partIndex - 1){
            quicksort(arr, left, partIndex - 1);
        }

        if (partIndex < right){
            quicksort(arr, partIndex, right);
        }
    }
    return arr;
}
var myArr = [5,3,7,6,2,9,13,8,1,11,17,4];
var sortedArr = quicksort(myArr, 0, myArr.length - 1);
console.log(sortedArr);