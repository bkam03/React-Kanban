const cards = [
  {
    title: "test",
    priority: "none",
    status: "Queue",
    createdBy: "me",
    assignedTo: "you"
  },
  {
    title: "2",
    priority: "low",
    status: "In Progress",
    createdBy: "me",
    assignedTo: "you"
  },
  {
    title: "test3",
    priority: "none",
    status: "Complete",
    createdBy: "me",
    assignedTo: "you"
  }

];

export const getCardsFromDB = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(cards), 500);
});

export const addCardToDB = (card) => new Promise((resolve, reject) => {
  setTimeout(() => {
    card._id = Math.random();
    cards.push(card);
    resolve(cards);
  }, 500);
});
