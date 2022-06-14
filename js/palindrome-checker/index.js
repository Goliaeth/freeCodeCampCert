function palindrome(str) {
  const re = /[\W_]/g;
  const preparedStr = str.toLowerCase().replace(re, '');
  const revercedStr = preparedStr.split('').reverse().join('');
  return preparedStr === revercedStr;
}

palindrome("eye");