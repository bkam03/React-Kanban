const cardsFromFakeDB = [
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
  setTimeout(() => resolve(cardsFromFakeDB), 500);
});

export const addCardToDB = (card) => new Promise((resolve, reject) => {
  setTimeout(() => {
    card._id = Math.random();
    cardsFromFakeDB.push(card);
    resolve(cardsFromFakeDB);
  }, 500);
});
