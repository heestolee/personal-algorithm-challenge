import { expect, describe, it } from "vitest";
import  greet from "../lib/greet";


describe('greeting', () => {
  it('fixed tests', () => {
    expect(greet('Daniel', 'Daniel')).to.eql('Hello boss');
    expect(greet('Greg', 'Daniel')).to.eql('Hello guest');
  })
})
