function rot13(str) {
  let strArray = str.split("");

  for (let i = 0; i < strArray.length; i++) {
    let code = strArray[i].charCodeAt(0);
    strArray[i] =
      code < 65 || code > 90
        ? strArray[i]
        : code >= 78 && code <= 90
        ? String.fromCharCode(code - 13)
        : String.fromCharCode(code + 13);
  }

  return strArray.join("");
}

rot13("E");
