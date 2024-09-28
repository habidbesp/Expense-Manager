import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

export default function ExpenseList() {
  const { state } = useBudget();

  const filteredExpenses = state.currentCategory
    ? state.expenses.filter((item) => item.category === state.currentCategory)
    : state.expenses;

  const isEmpty = useMemo(
    () => filteredExpenses.length === 0,
    [filteredExpenses]
  );
  return (
    <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
      {isEmpty ? (
        <p className="text-gray-600 text-2xl font-bold">
          There are not expenses
        </p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">Your Expenses</p>
          {filteredExpenses.map((item) => (
            <ExpenseDetail key={item.id} expense={item} />
          ))}
        </>
      )}
    </div>
  );
}
