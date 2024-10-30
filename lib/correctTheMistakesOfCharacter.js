/**
 *Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
 */

export default function correct(string) {
  let stringArray = [...string];

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === "5") stringArray[i] = "S";
    if (stringArray[i] === "0") stringArray[i] = "O";
    if (stringArray[i] === "1") stringArray[i] = "I";
  }

  return stringArray.join("");
}
