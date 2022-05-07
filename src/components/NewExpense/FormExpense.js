import "./FormExpense.css";

const FormExpense = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label> <input type="text" name="title" id="title" />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input type="number" name="amount" id="amount" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input type="date" name="date" id="date" min="2020-01-01" max="2025-01-01" />
        </div>
        <div className="new-expense__actions">
          <button type="submit"> Add Expense </button>
        </div>
      </div>
    </form>
  );
};

export default FormExpense;
