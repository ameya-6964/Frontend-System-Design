const users = [
  { firstName: "Ameya", age: 27 },
  { firstName: "Tushar", age: 28 },
  { firstName: "Suraj", age: 21 },
  { firstName: "Deepak", age: 22 },
  { firstName: "Jayesh", age: 24 },
];

const sortBySmallerAge = (array) => {
  const newArray = array.sort((a, b) => a.age - b.age);
  return newArray;
};
const sortByBiggerAge = (array) => {
  const newArray = array.sort((a, b) => b.age - a.age);
  return newArray;
};

console.log(sortBySmallerAge(users));
console.log(sortByBiggerAge(users));
