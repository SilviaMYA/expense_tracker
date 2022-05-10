// allows us to defines values as states where changes to these values should reflect in the component function
import { useState } from "react";

import "./FormExpense.css";

const FormExpense = (props) => {
  // return an array with 2 elements (value, updating function to update the value)
  const [titleEntered, setTitle] = useState('');
  const [amountEntered, setAmount] = useState('');
  const [dateEntered, setDate] = useState('');

  // const [userInputs, setUserInputs] = useState({
  //   titleEntered: "",
  //   amountEntered: "",
  //   dateEntered: "",
  // });

  const titleHandler = (event) => {
    //this approach doesn't work if our state depends on the previous state
    // setUserInputs({
    //   ...userInputs,
    //   titleEntered: event.target.value,
    // });
    // instead it should receive a function with the previous state as param
    // setUserInputs((prevState) => {
    //   return {...prevState, titleEntered: event.target.value};
    // })
    setTitle(event.target.value)
  };

  const amountHandler = (event) => {
    // setAmount(event.target.value);
    // setUserInputs({
    //   ...userInputs,
    //   amountEntered: event.target.value,
    // });
    setAmount(event.target.value)
  };

  const dateHandler = (event) => {
    // setDate(event.target.value);
    // setUserInputs({
    //   ...userInputs,
    //   dataEntered: event.target.value,
    // });
    setDate(event.target.value)
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titleEntered,
      amount: amountEntered,
      date: new Date(dateEntered)
    }

    //calling the prop saveExpenseData created in parent NewExpense which hold the function saveExpenseDataHandler
    //here is called Lifting State Up, passing our child object to the parent component
    props.saveExpenseData(expenseData);

    //once the form is submited we should clear the inputs
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input type="text" onChange={titleHandler} value={titleEntered} name="title" id="title" />
        </div>

        <div className="new-expense__control">
          <label> Amount </label>
          <input type="number" onChange={amountHandler} value={amountEntered} name="amount" id="amount" min="0.01" step="0.01" />
        </div>

        <div className="new-expense__control">
          <label> Date </label>
          <input type="date" onChange={dateHandler} value={dateEntered} name="date" id="date" min="2020-01-01" max="2025-01-01" />
        </div>

        <div className="new-expense__actions">
          <button type="submit"> Add Expense </button>
        </div>
      </div>
    </form>
  );
};

export default FormExpense;
