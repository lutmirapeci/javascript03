const isValidAddress = (ipAddress) => {
  let ipAddressElements = ipAddress.split(".");

  if (ipAddressElements.length !== 4) {
    return false;
  }

  for (let i = 0; i < ipAddressElements.length; i++) {
    const element = ipAddressElements[i];

    if (isNaN(element) || element === "") {
      return false;
    }

    if (Number(element) < 0 || Number(element) > 255) {
      return false;
    }

    if (ipAddressElements[0] === "0") {
      return false;
    }
  }

  return true;
};

console.log(isValidAddress("192.168.1.1"));
console.log(isValidAddress("255.255.255.255"));
console.log(isValidAddress("0.0.0.0"));
console.log(isValidAddress("1.1.1.1"));
console.log(isValidAddress("256.256.256.256"));
console.log(isValidAddress("192.168.1"));
