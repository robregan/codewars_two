// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"

// or match method

function bump(x){
    return x.match(new RegExp("n", "g")).length > 15 ? "Car Dead" : "Woohoo!"
  }

// long boi

const bump = x => {
    let string = ""
    for (let count = 0; count < x.length; count++) {
      if (x[count] == 'n') {
        string += x[count]
      }
    }
    if (string.length > 15) {
      return 'Car Dead'
    } else {
      return 'Woohoo!'
    }
  }