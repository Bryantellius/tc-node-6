export const renderOptions = (arr, prop) => {
  let list = [];
  for (let item of arr) {
    list.push(...item[prop]);
  }
  return [...new Set(list)];
};
