const addBorder = (picture) => {
  let maxLength = 0;
  for (let i = 0; i < picture.length; i++) {
    if (picture[i].length > maxLength) {
      maxLength = picture[i].length;
    }
  }

  let horizontalBorder = "";
  for (let i = 0; i < maxLength + 2; i++) {
    horizontalBorder += "*";
  }

  let borderedPicture = [horizontalBorder];

  for (let i = 0; i < picture.length; i++) {
    let row = picture[i];
    while (row.length < maxLength) {
      row += " ";
    }
    borderedPicture.push("*" + row + "*");
  }

  borderedPicture.push(horizontalBorder);

  return borderedPicture;
};

const result = addBorder(["abcjj", "dedddd"]).forEach((row) => console.log(row));
