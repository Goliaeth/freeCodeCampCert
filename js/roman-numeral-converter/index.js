    function convertToRoman(num) {
      const roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      }
      var convertedNum = '';
      var tempNum = num;
      for (const i of Object.keys(roman)) {
        const q = Math.floor(tempNum / roman[i]);
        tempNum -= q * roman[i];
        convertedNum += i.repeat(q)
      }
      return convertedNum;
     }

     convertToRoman(15);