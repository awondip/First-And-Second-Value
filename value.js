const arr = [1,2,5,6,6,5,4,3,4];
let largestValue = arr[0]
let  secondlargestValue = 0;


function getFirstLargestNumber([]){
for (let i=0; i<arr.length; i++){
  if(arr[i] > largestValue){
      secondlargestValue = largestValue
      largestValue = arr[i];

  }else  if (arr[i] !== largestValue &&  arr[i] > secondlargestValue){
      secondlargestValue = arr[i]

  }
}  

console.log(largestValue)
console.log(secondlargestValue)
} 

getFirstLargestNumber(arr)
