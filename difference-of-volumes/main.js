// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.

function findDifference(arr1, arr2) {
    let result1 = arr1.reduce((total, i) => total * i);
    let result2 = arr2.reduce((total, i) => total * i);
    return Math.abs(result1 - result2)
  }

//or could set parameters

function find_difference([a,b,c], [d,e,f]) {
    return Math.abs(a*b*c-d*e*f)
  }