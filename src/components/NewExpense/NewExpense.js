import "./NewExpense.css";
import FormExpense from "./FormExpense";

const NewExpense = (props) => {
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
  };


  return (
    <div className="new-expense">
      <FormExpense saveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
