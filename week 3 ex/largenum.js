function larg(arr){
    let currentLarg=arr[0];
    for (let i = 1; i < arr.length; i++){
        if(arr[i] > currentLarg){
            currentLarg=arr[i];
        }
     }
     return currentLarg;
}
console.log(larg([1,2,3,4,5]));