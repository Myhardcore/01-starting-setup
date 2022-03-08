import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const expenseFilterHandler = (filterData) => {
    setSelectedYear(filterData);
  };
  const filtered = props.item.filter(exp => exp.date.getFullYear() === +selectedYear)
  console.log(filtered)
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onDateChange={expenseFilterHandler}
        />
        {filtered.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;