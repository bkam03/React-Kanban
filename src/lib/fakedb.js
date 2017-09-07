const cards = [
  {
    id: '1',
    title: "test",
    priority: "none",
    status: "Queue",
    createdBy: "me",
    assignedTo: "you"
  },
  {
    id: '2',
    title: "2",
    priority: "low",
    status: "InProgress",
    createdBy: "me",
    assignedTo: "you"
  },
  {
    id: '3',
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
