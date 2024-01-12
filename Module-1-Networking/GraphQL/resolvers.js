export const resolvers = {
  Query: {
    authors: () => {
      return [
        {
          id: 1,
          name: "Ameya Belvalkar",
        },
      ];
    },
    books: () => {
      return [
        {
          id: 1,
          title: "Namaste Frontend System Design Notes",
          publishedYear: 2024,
        },
      ];
    },
  },
};
