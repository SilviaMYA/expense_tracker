import "./ExpenseDate.css";

/**
 *
 * @param {object} props the object that contains the date coming from the component ExpenseItem
 * @param {Date} props.dateProp the date coming from the component ExpenseItem
 * @returns
 */
const ExpenseDate = (props) => {
  const month = props.dateProp.toLocaleString("en-AU", { month: "long" });
  const year = props.dateProp.getFullYear();
  const day = props.dateProp.toLocaleString("en-AU", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month"> {month} </div>
      <div className="expense-date__year"> {year} </div>
      <div className="expense-date__day"> {day} </div>
    </div>
  );
};

export default ExpenseDate;
