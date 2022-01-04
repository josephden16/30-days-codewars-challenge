function hexStringToRGB(hexString) {
  
  const converToDecimal = (hex) => {
    let decimalNum = 0;
    hex = hex.split("").reverse();
    for (let i = 0; i < hex.length; i++) {
      decimalNum += parseInt(hex[i], 16) * Math.pow(16, i);
    }
    return decimalNum;
  };

  hexString = hexString.replace("#", "");
  let red = converToDecimal(hexString.slice(0, 2));
  let green = converToDecimal(hexString.slice(2, 4));
  let blue = converToDecimal(hexString.slice(4, 6));
  return {
    r: red,
    g: green,
    b: blue,
  };
}

