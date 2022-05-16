import { useState } from "react";
import "./NewExpense.css";
import FormExpense from "./FormExpense";

const NewExpense = (props) => {
  const [isEditingForm, setIsEditingForm] = useState(false);

  /**
   * Function to trigger when form is submited
   * @param {Object} enteredExpenseData 
   */
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseDataObj = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    
    //calling the prop addExpenseData created in parent App.js which hold the function addExpenseDataHandler
    props.addExpenseData(expenseDataObj);

    setIsEditingForm(false);
  };

  /**
   * function to show form when the Add New Expense button is clicked
   */
   const showFormHandler = () =>{
    setIsEditingForm(true);
  };

  /**
   * function to hide form when the cancel button is clicked
   */
   const hideFormHandler = () =>{
     setIsEditingForm(false);
  };


  return (
    <div className="new-expense">
      { isEditingForm &&  <FormExpense onCancel={hideFormHandler} saveExpenseData={saveExpenseDataHandler} /> }
      { !isEditingForm && <button type="button" onClick={showFormHandler}> Add New Expense </button> }
    </div>
  );
};

export default NewExpense;
