function LargestNumber(arr){
    return Math.max(...arr)
}
function SumOfArrays(arr){
    return arr.reduce((sum,num)=>sum+num,0)
}
function DuplicatesOfArray(arr){
    return [...new Set(arr)]
}
-