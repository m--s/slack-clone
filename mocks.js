import faker from "faker";
faker.seed(11);

export default {
  currentUser: {
    id: 0,
    name: faker.name.findName(),
    isOnline: true,
    avatar: faker.image.avatar(),
  },
  channels: [
    {
      id: 1,
      name: "general",
      description: "General stuff",
    },
    {
      id: 2,
      name: "help",
      description: "HEEEELP",
    },
    {
      id: 3,
      name: "random",
      description: "Just random stuff",
    },
  ],
  people: [...new Array(12)].map((_, index) => ({
    id: index + 1,
    name: faker.name.findName(),
    isOnline: faker.random.boolean(),
    avatar: faker.image.avatar(),
  })),
};
