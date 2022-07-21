export function generateID(length = 11) {
  function* alphaIterator(start = 65, end = 90, step = 1) {
    let count = 0;

    for (let i = start; i <= end; i += step) {
      count++;
      yield String.fromCharCode(i);
    }
    return count;
  }

  function makeDigit() {
    // 0 - 9
    return String(Math.floor(Math.random() * 10));
  }

  const alphabet = [...alphaIterator()];

  let ID = "";
  for (let i = 0; i < length; i++) {
    let letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    let digit = makeDigit();
    ID += letter + digit;
  }

  return ID;
}
