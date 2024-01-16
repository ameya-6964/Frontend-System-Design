const sortBySmallerAge = (array) => {
  const newArray = array.sort((a, b) => a.age - b.age);
  return newArray;
};

const sortByBiggerAge = (array) => {
  const newArray = array.sort((a, b) => b.age - a.age);
  return newArray;
};

module.exports = { sortBySmallerAge, sortByBiggerAge };
