// Here you have a connected to a socket, and the data looks very strange. It seems to be separated by a random special character! Oh No! We need your help to find the special character, parse the data, and return it translated! There isn't much time, hurry we need your help!




function wordSplitter(string){
    return string.split(/[^a-z\d.-]/i)
  }

//  regex explanation 
// [^a-z\d.-]
// Match a single character not present in the list below [^a-z\d.-]
// a-z matches a single character in the range between a (index 97) and z (index 122) (case sensitive)
// \d matches a digit (equivalent to [0-9])
// . matches the character . with index 4610 (2E16 or 568) literally (case sensitive)
// - matches the character - with index 4510 (2D16 or 558) literally (case sensitive)
// This hyphen is treated literally, which might be confusing for others. Consider escaping it or placing at the start or end of the class!
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
// m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)
// i will ignore case