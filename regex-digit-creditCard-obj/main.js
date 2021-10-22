// Description:
// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |
// Examples
// getIssuer(4111111111111111) == "VISA"
// getIssuer(4111111111111) == "VISA"
// getIssuer(4012888888881881) == "VISA"
// getIssuer(378282246310005) == "AMEX"
// getIssuer(6011111111111117) == "Discover"
// getIssuer(5105105105105100) == "Mastercard"
// getIssuer(5105105105105106) == "Mastercard"
// getIssuer(9111111111111111) == "Unknown"

function getIssuer(number) {
    if(/^3(4|7)[0-9]{13}$/g.test(number)) return 'AMEX' //  /^3(4|7)[0-9]{13}$/ explaination below..
        // ^ asserts position at start of a line
        // 3 matches the character 3 with index 5110 (3316 or 638) literally (case sensitive)
        // 1st Capturing Group (4|7)
        // 1st Alternative 4
        // 4 matches the character 4 with index 5210 (3416 or 648) literally (case sensitive)
        // 2nd Alternative 7
        // 7 matches the character 7 with index 5510 (3716 or 678) literally (case sensitive)
        // Match a single character present in the list below [0-9]
        // {13} matches the previous token exactly 13 times
        // 0-9 matches a single character in the range between 0 (index 48) and 9 (index 57) (case sensitive)
        // $ asserts position at the end of a line
    if(/^6011[0-9]{12}$/g.test(number)) return 'Discover'
    if(/^5[1-5][0-9]{14}$/g.test(number)) return 'Mastercard'
        //     ^ asserts position at start of a line
        // 5 matches the character 5 with index 5310 (3516 or 658) literally (case sensitive)
        // Match a single character present in the list below [1-5]
        // 1-5 matches a single character in the range between 1 (index 49) and 5 (index 53) (case sensitive)
        // Match a single character present in the list below [0-9]
        // {14} matches the previous token exactly 14 times
        // 0-9 matches a single character in the range between 0 (index 48) and 9 (index 57) (case sensitive)
        // $ asserts position at the end of a line
    if(/^4([0-9]{12}|[0-9]{15})$/g.test(number)) return 'VISA'
        //     ^ asserts position at start of a line
        // 4 matches the character 4 with index 5210 (3416 or 648) literally (case sensitive)
        // 1st Capturing Group ([0-9]{12}|[0-9]{15})
        // 1st Alternative [0-9]{12}
        // Match a single character present in the list below [0-9]
        // {12} matches the previous token exactly 12 times
        // 0-9 matches a single character in the range between 0 (index 48) and 9 (index 57) (case sensitive)
        // 2nd Alternative [0-9]{15}
        // Match a single character present in the list below [0-9]
        // {15} matches the previous token exactly 15 times
        // 0-9 matches a single character in the range between 0 (index 48) and 9 (index 57) (case sensitive)
        // $ asserts position at the end of a line
    return 'Unknown'
  }

  // without regex
  const getIssuer = n => {
    let s;
    n = n.toString();
    const l = n.length;
    if (((s = n.slice(0, 2)) == 34 || s == 37) && l === 15) return 'AMEX';
    if (n.slice(0, 4) == 6011 && l === 16) return 'Discover';
    if (50 < (s = +n.slice(0, 2)) && s < 56 && l === 16) return 'Mastercard';
    if (n[0] == 4 && (l === 16 || l === 13)) return 'VISA';
    return 'Unknown';
  }
