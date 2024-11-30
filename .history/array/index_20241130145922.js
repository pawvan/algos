let arr=[1,2,3,4]
//accessing elements
console.log(arr[0])
//different-data-types in array
let mixedArr= [1,true,{
    name:"pawan",
    age:20
},[1,2,3,4],"hello"]
//how to find the length of array
console.log(arr.length)
//adding elements at the end
arr.push(8)
console.log(arr)
//how to remove the last element
arr.pop() 
console.log(arr)
//remove first element in the array
arr.shift()
console.log(arr);
//add element at the starting
arr.unshift()
console.log(arr)
//find the element in the array
console.log(arr.indexOf(1))
console.log(arr.indexOf(2))
//array iteration (forEach)
arr.forEach(function(element){
console.log(element)
});
//transforming of arrays using map 
let doubled = arr.map((ar)=>ar*2)
console.log(doubled);
let result = arr.find((ar)=>ar>0)
console.log(result)
//finding an element using (find)
//filtering array using (filter)
let oddNumbers  = arr.filter((ar)=>ar%2!==0);
console.log(oddNumbers)
console.log(arr.find((ar)=>ar<0));
//joining array of elements using (join)
let resultOfJoin  = arr.join(",")
console.log(resultOfJoin);
console.log(arr.splice(2,1,"a","b"))
let newArr = arr.slice(1,4)
console.log(newArr);
//advent of code 
//1 - find the largest number in the array
function LargestNumber(arr){
    return Math.max(...arr)
}
//2-find the sum of all elements in an array
function sumArray(arr){
    return arr.reduce((sum,num)=>sum+num,0)
}
//3-remove duplicates from an array
function removeDuplicates(arr){
    return [...new Set(arr)]
}
//check if element is present in array or not
function containse(arr,target){
    
}