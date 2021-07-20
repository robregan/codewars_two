// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c){
    let max = Math.max(a, b, c);
   let sum = a + b + c;
   return sum - max > max;
 }

 // checking to make sure the sum of two sides are greater than the third bc that is the triangle rule..
 function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
} 
