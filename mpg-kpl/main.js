// Description:
// Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// Make sure to round off the result to two decimal points. If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5.

// Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres

function converter (mpg) {
    //code to convert miles per imperial gallon to kilometers per liter 
    // 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres
   return +(mpg* 0.3540060435382138).toFixed(2)
  }
  //
  function converter(mpg) {
    return Math.round(mpg * 35.400604353821375031) / 100;
  }
  
// 1 mile       1.609344 kilometres
// ---------- = ---------------------
//  1 gallon     4.54609188 litres
// This is how you convert 1 mile-per-gallon into km-per-litre. Just reduce it down, and you get:

// 1/1 mile/gallon = 1.609344/4.54609188 kilometre/litre
//                 =
// 1 mile/gallon   = .354006044 kilometre/litre
// Given that value, we now can convert any K mpg to km/L by multiplying K by the .3540… value.