const sumPairs = (numbers, n) => {
    var array = []
    for (let i = numbers.length/2; i < numbers.length; i++) {
      for (let j = numbers.length/2; j < numbers.length ; j++) {
        console.log("j: " + numbers[j])
        if (numbers[i] + numbers[j] == n) {
  
          console.log("encontre: " + numbers[i] + " " + numbers[j])
          array.push(numbers[i])
          array.push(numbers[j])
  
          return array
         
        }
        if(j==numbers.length-1){
          j=0
        }
      }
      console.log("i: " + numbers[i])
      console.log("posision: " + i +"posision: " + numbers.length)
      if(i==numbers.length-1){
          i=0
          console.log("iguales: " + numbers[i])
        }
    }
  }
  
  console.log(sumPairs([10, 5, 2, 3, 7, 5], 0));