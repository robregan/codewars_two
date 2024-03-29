// Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.

// Your job is to help her out.

// Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

// If the event is in the past, return "The day is in the past!"
// If the event is today, return "Today is the day!"
// Else, return "x days"

function countDays(d){
    let time = d
    let today=new Date()
    let todayCheck= time.getFullYear()===today.getFullYear()&&time.getMonth()===today.getMonth()&&time.getDay()===today.getDay()
    if (todayCheck) return "Today is the day!"
    let past = today.getTime()>time.getTime()
    if (past) return 'The day is in the past!'
    return `${Math.round((time.getTime()-today.getTime())/1000/60/60/24)} days`
  }

// 
function countDays(date) {
    var today = new Date();
    var one_day = 1000 * 60 * 60 * 24;
    var daysFromToday = Math.round((date.getTime() - today.getTime()) / one_day);
  
    if (daysFromToday < 0) {
      return 'The day is in the past!';
    }
    if (daysFromToday == 0) {
      return 'Today is the day!';
    }
    return `${daysFromToday} days`;
    
  }
  