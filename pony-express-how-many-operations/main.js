// It reduced the time for messages to travel between the Atlantic and Pacific coasts to about 10 days, before it was made obsolete by the transcontinental telegraph.

// How it worked
// There were a number of stations, where:

// The rider switched to a fresh horse and carried on, or
// The mail bag was handed over to the next rider
// Kata Task
// stations is a list/array of distances (miles) from one station to the next along the Pony Express route.

// Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.

// NOTE: Each rider travels as far as he can, but never more than 100 miles.




// almost 26% slower then the map solution!
function riders(stations) {
    let rider_s = 1
    let sum = 0
    for(let i=0; i<stations.length; i++){
      sum += stations[i]
      if (sum > 100){
        sum = stations[i]
        rider_s ++
      }
    }
    return rider_s
  }
// w reduce() around 19% slower
const riders = stations =>
  stations.reduce(([dist, rid], val) => val + dist > 100 ? [val, ++rid] : [dist + val, rid], [0, 1])[1]

// w map, the most time efficient of the three 
function riders(st, n = 100) {
    return st.map( el => n+el > 100 ? [100, n = el][0] : [0, n += el]).filter(e => e >= 100).length
  }
