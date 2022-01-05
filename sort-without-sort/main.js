// Description:
// You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.

//     diffBig2([10, 5, 2]);
// In this case, the 1st biggest number is 10 and the 2nd biggest number is 5. So, the function returns 5, the result of 10 - 5.

// You can assume that the input array has 2 or more elements.

// The input array has the sort method disabled, so you will have to solve it in another way.


function diffBig2(arr) {
    var largestNum = 0;
    var secondNum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= largestNum) {
          secondNum = largestNum;
          largestNum = arr[i];
        }
        else if (arr[i] > secondNum) {
          secondNum = arr[i];
        }
      }
      
      return largestNum - secondNum;
    }

//
function diffBig2(arr) { 
    var max1 = arr[0], max2 = -1;
    for(var i=1;i<arr.length;i++)
    {
      if(arr[i] > max1)
      {
        max2 = max1;
        max1 = arr[i];
      }
      else
      {
        if(arr[i] > max2)
        {
          max2 = arr[i];
        }
      }    
    }
    return max1 - max2;
  }
//
function diffBig2(arr) {
    var num1 = arr[0];
     
     for (i = 0; i<arr.length;i++){
       if(arr[i]>num1){
         num1 = arr[i];
         }
       }
       
    arr.splice(arr.indexOf(num1),1);
    var num2 = arr[0];
     
     for (i = 0; i<arr.length;i++){
       if(arr[i]>num2){
         num2 = arr[i];
         }
      }
      
    return num1-num2;
    }
