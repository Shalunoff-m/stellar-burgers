export function sortData(data, dataTypes) {
  const sortedBuffer = {};
  for (let product in dataTypes) {
    // console.log(product);
    const filterList = data.filter((element) => {
      return element.type === product;
    });
    sortedBuffer[product] = filterList;
  }
  return sortedBuffer;
}
