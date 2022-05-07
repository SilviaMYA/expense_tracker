// allows us to defines values as states where changes to these values should reflect in the component function
import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

/**
 *
 * @param {Object} props contains items from Expenses.js
 * @param {Date} props.date contains the date
 * @param {Double} props.amount contains the cost
 * @param {String} props.title contains the item title
 * @returns
 */
const ExpenseItem = (props) => {
  // return an array with 2 elements (value, updating function to update the value)
  const [title, setTitle] = useState(props.title);

  // fucntion to handle change title button
  const changeTitleHandler = () => {
    setTitle("new title");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate dateProp={props.date} />

      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
      <button onClick={changeTitleHandler}> Change Title </button>
    </Card>
  );
};

export default ExpenseItem;
