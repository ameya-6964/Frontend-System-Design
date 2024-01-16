const { sortByBiggerAge, sortBySmallerAge } = require("./app");

test("should sort the array by smaller age", () => {
  const users = [
    { firstName: "Ameya", age: 27 },
    { firstName: "Tushar", age: 28 },
    { firstName: "Suraj", age: 21 },
    { firstName: "Deepak", age: 22 },
    { firstName: "Jayesh", age: 24 },
  ];

  const sortedData = sortBySmallerAge(users);
  expect(sortedData[0].age).toBe(21);
  expect(sortedData[sortedData.length - 1].age).toBe(28);
});

test("should sort the array by bigger age", () => {
  const users = [
    { firstName: "Ameya", age: 27 },
    { firstName: "Tushar", age: 28 },
    { firstName: "Suraj", age: 21 },
    { firstName: "Deepak", age: 22 },
    { firstName: "Jayesh", age: 24 },
  ];

  const sortedData = sortByBiggerAge(users);
  expect(sortedData[0].age).toBe(28);
});
