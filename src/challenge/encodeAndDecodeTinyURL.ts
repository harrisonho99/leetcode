import { deepStrictEqual } from 'assert';

const seperator = '_';
function decode(shortUrl: string): string {
  let listChars = shortUrl.split(seperator);
  let result = listChars.map(char => {
    return String.fromCharCode(parseInt(char));
  });

  return result.join('');
}

function encode(longtUrl: string): string {
  const listChars = longtUrl.split('');
  const hashed = listChars.map(char => {
    const newChar = getASSCIICode(char);
    return newChar;
  });

  return hashed.join(seperator);
}

function getASSCIICode(char: string): number {
  return char.charCodeAt(0);
}

function test_encodeAndDecodeTinyURL(): void {
  const input = 'https://leetcode.com/problems/design-tinyurl';
  try {
    let hashedURL = encode(input);
    let url = decode(hashedURL);
    deepStrictEqual(url, input);

    console.log('All tests Passed!');
  } catch (error) {
    console.error(
      'Error :::',
      `${(error as any).actual} !== ${(error as any).expected} \n `,
    );
  }
}
export { test_encodeAndDecodeTinyURL };
