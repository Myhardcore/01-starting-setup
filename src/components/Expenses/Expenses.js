import React, { useState } from 'react';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState('2020');
  const expenseFilterHandler = filterData => {
    setSelectedYear(filterData);
  };
  const filtered = props.item.filter(
    exp => exp.date.getFullYear() === +selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onDateChange={expenseFilterHandler}
        />
        <ExpensesList items={filtered} />
      </Card>
    </div>
  );
};

export default Expenses;
