import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const[isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }; 
  const starEditing = () =>{
      setIsEditing(true);
      console.log("true");
  };

  const stopEditing = () => {
      setIsEditing(false);
      console.log("false");
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={starEditing}>Add new Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {stopEditing} />}
    </div>
  );
};

export default NewExpense;
