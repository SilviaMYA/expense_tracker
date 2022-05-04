import ExpenseItem from "./components/ExpenseItem";

function App() {
  //Integer value representing the month, beginning with 0 for January to 11 for December.
  const expenses = [
    {
      id: "expense2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2022, 2, 12), // 12-March-2022
    },
    {
      id: "expense1",
      title: "Easter Trip",
      amount: 2015.12,
      date: new Date(2022, 3, 14), // 14-April-2022
    },
    {
      id: "expense3",
      title: "Car Insurance",
      amount: 894.67,
      date: new Date(2022, 4, 2), // 2-May-2022
    },
    {
      id: "expense4",
      title: "Fix Car",
      amount: 450,
      date: new Date(2022, 4, 9), // 6-May-2022
    },
  ];
  return (
    <div>
      <h2>get started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
