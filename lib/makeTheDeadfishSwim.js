/**
 * Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
 */


// Return the output array, and ignore all non-op characters
export default function parse(data) {
  const result = [];
  let initialValue = 0;

  for (let i = 0; i < data.length; i++) {
    makeDeadfish(data[i]);
  }

  function makeDeadfish (string) {
    switch (string) {
      case "i" : {
        initialValue += 1;
        break;
      }
      case "d" : {
        initialValue -= 1;
        break;
      }
      case "s" : {
        initialValue *= initialValue;
        break;
      }
      case "o" : {
        result.push(initialValue);
        break;
      }
      default : {
        break;
      }
    }
  }

  return result;
}
