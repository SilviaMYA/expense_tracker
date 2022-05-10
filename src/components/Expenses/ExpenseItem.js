
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

/**
 *
 * @param {Object} props contains items from Expenses.js
 * @param {Date} props.date contains the date coming from Expenses
 * @param {Double} props.amount contains the cost
 * @param {String} props.title contains the item title
 * @returns
 */
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate dateProp={props.date} />

      <div className="expense-item__description">
        <h2> {props.title} </h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
