import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

/**
 *
 * @param {Object} props contains items that gets from App.js
 * @returns
 */
const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpensesFilter />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </Card>
  );
};

export default Expenses;
