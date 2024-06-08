/**
 *
 *Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
 *
 *  */

export default function isValidIP(str) {
  const splitIP = str.split(".");
  let count = 0;

  for (let i = 0; i < splitIP.length; i++) {
    if(splitIP[i].length === 0) {
      return false;
    }
  }

  if(splitIP.length !== 4) {
    return false;
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < splitIP[i].length; j++) {
      if(isNaN(splitIP[i][j]) || splitIP[i][j] === ' ' || splitIP[i][j] === '\n') {
        return false;
      }
    }
  }

  for (const i of splitIP) {
    if(i === '0') {
      continue;
    } else if(i[0] === '0') {
      return false;
    }
  }

  for (let i = 0; i < splitIP.length; i++) {
    if((splitIP[i] <= 255 && splitIP[i] >= 0)) {
      count++;
    }
  }

  return (count === 4);
}


// // Pure function
// function isValidIP(str) {
//   const octets = str.split('.')							// Split into octets
//   return (octets.length === 4) &&						// Ensure str has exactly 4 octets
//   	octets.reduce((acc, octet) =>						// Check all octets
//     	(acc === true) &&												// Ensure prior octets okay
//      	(String(Number(octet)) === octet) &&		// Ensure octet has nothing funky like spaces, leading 0's, ...
//   		(Number(octet) >= 0) &&									// Ensure octet is 0 or more
//    		(Number(octet) <= 255)									// Ensure octet is 255 or less
//   	, true)
// }


// function isValidIP(str) {
//   return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
// }