const chunkArray = (array, length) => {
  const chunkedArr = [];
  array.forEach((val) => {
    const last = chunkedArr[chunkedArr.length - 1];
    if (!last || last.length === length) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
}

module.exports = chunkArray;
