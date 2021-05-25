// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)


function largestPairSum(numbers){
    numbers.sort(function(a, b){ return b - a })
    return numbers[0] + numbers[1]
  }

  // destructure erupter
  function largestPairSum(numbers) {
    const [a, b] = numbers.sort((a, b) => b - a)
    return a + b
  }





// without using array methods?!
function largestPairSum(numbers)

    {
        // Initialize first and
        // second largest element
        let first, second;
        if (numbers[0] > numbers[1])
        {
            first = numbers[0];
            second = numbers[1];
        }
        else
        {
            first = numbers[1];
            second = numbers[0];
        }
       
        // Traverse remaining array and
        // find first and second largest
        // elements in overall array
        for (let i = 2; i < numbers.length; i ++)
        {
            /* If current element is greater
               than first then update both
               first and second */
            if (numbers[i] > first)
            {
                second = first;
                first = numbers[i];
            }
       
            /* If numbers[i] is in between first
               and second then update second */
            else if (numbers[i] > second &&
                     numbers[i] != first)
                second = numbers[i];
        }
        return (first + second);
    }