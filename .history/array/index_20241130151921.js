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
//4-check if element is present in array or not
function contains(arr,target){
    return arr.includes(target)
}
//5-find intersection of two arrays
function IntersectionOfArrays(arr1,arr2){
    return arr1.filter(values  => arr2.includes(values))
}
//6-finding missing number in array
function findMissingNumber(arr){
    const n = arr.length+1;
    const expectedSum=(n*(n+1))/2;
    const actualSum =arr.reduce((sum,num)=>sum+num,0)
return expectedSum-actualSum
}
//7-Find All Pairs in an Array That Sum to a Specific Target
function findPairs(arr,target){
    let pairs=[];
    let seen = new Set();
    for(let num of arr){

    }
}
//8-move all zeros to the end of an array
function moveZeroToEnd(arr){
    let result =arr.filter(num=>num!==0)
}