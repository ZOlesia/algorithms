function rSum(num){
    if (num == 1){
        return 1;
    }
    return num + rSum(num - 1);
}

function rFactorial(num){
    if(num == 1){
        return 1;
    }
    return num * rFactorial(num - 1);
}

function rFib(num){
    if(num == 0){
        return 0;
    }
    if(num == 1 || num == 2){
        return 1;
    }
    return rFib(num-1) + rFib(num-2);
}


function bubbleSort(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(arr[j+1] < arr[j]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
    return arr;
}

function selectionSort(arr){
    for(var i = 0; i < arr.length-1; i++){
        var min = i;
        for(var j = i; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
                console.log('CURRENT MIN IS', min);
            }
        }
        if(i !== min){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
            console.log('array now looks like this', arr);
        } 
    }
    console.log(arr);
    return arr;
}

function insertionSort(arr){
    for(var i = 0; i< arr.length; i++){
        let idx = i+1;
        while(idx > 0){
            if(arr[idx] < arr[idx-1]){
                let temp = arr[idx];
                arr[idx]=arr[idx-1];
                arr[idx-1]=temp;
            }
            idx--;
        }
    }
    console.log(arr);
    return arr;
}
// console.log(rFib(6));
// console.log(rFactorial(5));
// console.log(rSum(5));
// bubbleSort([5, 2, 15, 1, 89, 3, 16]);
// selectionSort([45, 1 ,66, 0, -9]);
insertionSort([5, 4, -3, 2, -1, 0]);
