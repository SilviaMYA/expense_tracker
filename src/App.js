import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  //Integer value representing the month, beginning with 0 for January to 11 for December.
  const expensesArray = [
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
      <NewExpense />
      <Expenses items={expensesArray} />
    </div>
  );
};

export default App;
