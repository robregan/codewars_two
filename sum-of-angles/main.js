// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

const angle = n => (n-2) * 180

/* It happens because we can triangulate any shape
   and get n - 2 triangles. Sum of angles in each is 180 deg.

   There are n sides in the polygon and therefore n straight angles.

   Sum of interior angles + sum of exterior angles = n x 180°
   Sum of interior angles + 360°= n x 180°
   Sum of interior angles = n x 180°- 360°  = (n-2) x 180°
   
*/