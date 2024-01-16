const users = [
  { firstName: "Ameya", age: 27 },
  { firstName: "Tushar", age: 28 },
  { firstName: "Suraj", age: 21 },
  { firstName: "Deepak", age: 22 },
  { firstName: "Jayesh", age: 24 },
];

const sortAge = (array) => {
  const newArray = array.sort((a, b) => a.age - b.age);
  return newArray;
};

console.log(sortAge(users));
