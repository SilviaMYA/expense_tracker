import "./ExpenseDate.css";

function ExpenseDate(props) {
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
}

export default ExpenseDate;
