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
const actualSum = arr.reduce((sum,num)=>sum+num,2) 
return expectedSum-actualSum;   
}
function mergeTwoSorted(arr1,arr2){
    const result =[];
    let i =0,j=0;
    while(i<arr1.length && j<arr.length){
        if(arr1[i] <arr2[j]){
            result.push(arr1[i]);
            i++;
        }
        else{
            result.push(arr2[j]);
            j++;
        }
        return result.concat(arr1.slice(i),arr2.slice(j));
    }
}
function secondLargest(arr){
    let first =-Infinity;
    let second =-Infinity;
    for(num of arr){
        if(num>first){
            second =first;
            first=num;
        }
        else if(num>second && num !==first){
            second = num;
        }

    }
    return second ===-Infinity ?null:second;
}