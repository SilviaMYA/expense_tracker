import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

//Integer value representing the month, beginning with 0 for January to 11 for December.
const INITIAL_EXPENSES_ARRAY = [
  {
    id: "expense1",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12), // 12-March-2021
  },
  {
    id: "expense2",
    title: "New Phone",
    amount: 299.49,
    date: new Date(2021, 3, 12), // 12-April-2021
  },
  {
    id: "expense3",
    title: "Easter Trip",
    amount: 2015.12,
    date: new Date(2022, 3, 14), // 14-April-2022
  },
  {
    id: "expense4",
    title: "Car Insurance",
    amount: 894.67,
    date: new Date(2022, 4, 2), // 2-May-2022
  },
  {
    id: "expense5",
    title: "Fix Car",
    amount: 450,
    date: new Date(2022, 4, 6), // 6-May-2022
  },
  {
    id: "expense6",
    title: "New Table",
    amount: 1250,
    date: new Date(2022, 4, 6), // 6-May-2022
  },
  {
    id: "expense7",
    title: "New couch",
    amount: 750.22,
    date: new Date(2023, 4, 7), // 7-May-2023
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES_ARRAY);

  const addExpenseDataHandler = (newExpense) => {
    setExpenses((prevExpense) => {
      return [newExpense, ...prevExpense]
    })
    
  };

  return (
    <div>
      <NewExpense addExpenseData={addExpenseDataHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
