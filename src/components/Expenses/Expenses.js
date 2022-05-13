import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

/**
 *
 * @param {Object} props contains items that gets from App.js
 * @returns
 */

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (yearSelected) => {
    setFilteredYear(yearSelected);
  };

  // filters expenses for the year selected
  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  let filteredContent = <p>No items found</p>;
  if(filteredExpenses.length > 0) {
    filteredContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredContent}
    </Card>
  );
};

export default Expenses;
