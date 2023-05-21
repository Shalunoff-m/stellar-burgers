export function sortData(data, dataTypes) {
  const sortedBuffer = {};
  for (let product in dataTypes) {
    const filterList = data.filter((element) => {
      return element.type === product;
    });
    sortedBuffer[product] = filterList;
  }
  return sortedBuffer;
}

export const clearToken = (accToken) => {
  // сщтые;
  let authToken = accToken.split('Bearer ')[1];
  return authToken;
};
