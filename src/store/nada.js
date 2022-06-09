function findLargest(numbers) {
    // Your code goes here
    let numberlargest=0;
    for (let i=0;i<numbers.length;i++){
        if(numbers[i]>numberlargest){
            numberlargest=numbers[i]
            
        }
        
    }
    return numberlargest

}

console.log(findLargest([7, 17, 13, 19, 5])); // 19