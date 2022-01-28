import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const onClickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>

        <div className="expense-item__price">{props.amount}</div>
        <button onClick={onClickHandler}>Change the title</button>
      </Card>
    </li>
  );
}
export default ExpenseItem;
