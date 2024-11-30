function LargestNumber(arr){
    return Math.max(...arr)
}
function SumOfArrays(arr){
    return arr.reduce((sum,num)=>sum+num,0)
}
function DuplicatesOfArray(arr){
    return [...new Set(arr)]
}
function contains(arr,target){
    return arr.includes(target)
}
function intersection(arr1,arr2){
    return arr1.filter(values => arr2.includes(values))
}
function MissingNumber(arr){
    const n  = arr.length+1;
    const expectedSum = (n*(n+1)/2)
const actualSum = arr.reduce((sum,num))    
}