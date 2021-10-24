// Description:
// Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

// Input:
// Array of file sizes (0 <= s <= 100)
// Capacity of the HD (0 <= c <= 500)
// Output:
// Number of files that can be fully saved in the HD.
// Examples:
// save([4,4,4,3,3], 12) -> 3
// # 4+4+4 <= 12, but 4+4+4+3 > 12
// save([4,4,4,3,3], 11) -> 2
// # 4+4 <= 11, but 4+4+4 > 11
// Do not expect any negative or invalid inputs.

function save(sizes, hd) {
    let newArr = []
    let count = 0
    for(let i = 0; i < sizes.length; i++){
      count += sizes[i]
      if(count <= hd){
        newArr.push(sizes[i])
      }
    } return newArr.length
   }

// with for of loop 
function save(fileSizes, spaceRemaining) {
    let numFilesSaved = 0;
  
    for (let fileSize of fileSizes) {
      if (spaceRemaining < fileSize) break;
      numFilesSaved += 1;
      spaceRemaining -= fileSize;
    }
  
    return numFilesSaved;
  }
