const transferFullName = (value) => {
  let ho;
  let dem;
  let ten;
  let reverseConCat;
  const splitName = value.split(" ");
  //   console.log("splitName", splitName);
  if (splitName.length > 2) {
    //ten co 2 chuoi tro len
    ho = splitName[0].charAt(0).toUpperCase();
    ten = splitName[splitName.length - 1];

    splitName.shift(); // one' will delete from array
    splitName.pop(); // last will delete from array
    splitName.forEach((item) => {
      dem = item.charAt(0).toUpperCase();
    });

    reverseConCat = ten + ho + dem;
  } else {
    ho = splitName[0].charAt(0).toUpperCase();
    ten = splitName[1];
    reverseConCat = ten + ho;
  }
  //   console.log(ho, dem, ten);
  //   console.log("concat", reverseConCat);

  return reverseConCat;
};

export default transferFullName;
