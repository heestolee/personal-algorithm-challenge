/**
 *The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
 */

export default function rgb(r, g, b) {
  let result = "";

  const R = convertRgbToHexCode(r);
  const G = convertRgbToHexCode(g);
  const B = convertRgbToHexCode(b);

  return result = R + G + B;

  function convertRgbToHexCode (number) {
    let copied = number;
    if (copied > 255) {
      copied = 255;
    } else if ( copied < 0) {
      copied = 0;
    }

    const hexCode = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    const first = hexCode[parseInt(copied / 16)];
    const second = hexCode[parseInt(copied % 16)];

    return first + second;
  }

}
