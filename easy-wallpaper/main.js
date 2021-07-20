// John wants to decorate a room with wallpaper. He wants a fool-proof method for getting it right.
// John knows that the rectangular room has a length of l meters, a width of w meters, a height of h meters. The standard width of the rolls he wants to buy is 52 centimeters. The length of a roll is 10 meters. He bears in mind however, that it’s best to have an extra length of wallpaper handy in case of mistakes or miscalculations so he wants to buy a length 15% greater than the one he needs.
// Last time he did these calculations he got a headache, so could you help John?
// Task
// Your function wallpaper(l, w, h) should return as a plain English word in lower case the number of rolls he must buy.

// Example:
// wallpaper(4.0, 3.5, 3.0) should return "ten"

// wallpaper(0.0, 3.5, 3.0) should return "zero"




function wallpaper(l, w, h) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five',
                    'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                    'twelve', 'thirteen', 'fourteen', 'fifteen',
                    'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    return w * h * l === 0 ? numbers[0] : numbers[Math.ceil((l * h * 2 + w * h * 2) * 1.15 / 5.2)]
}


