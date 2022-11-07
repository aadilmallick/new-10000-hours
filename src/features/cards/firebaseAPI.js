function getData(data) {
  const temp = [];
  for (const key in data) {
    temp.push(data[key]);
  }
  return temp;
}

export { getData };
