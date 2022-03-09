import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
 const editingHandler = () => {
  setIsEditing(true);
 }
const stopEditingHandler = () => {
  setIsEditing(false)
}
  return (
    <div className="new-expense">
      
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEditing={stopEditingHandler}/>}
      
      
    </div>
  );
};

export default NewExpense;
