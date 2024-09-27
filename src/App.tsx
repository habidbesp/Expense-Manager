import { useEffect, useMemo } from "react";
import BudgetForm from "./components/BudgetForm";
import { useBudget } from "./hooks/useBudget";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import ExpenseList from "./components/ExpenseList";

function App() {
  const { state } = useBudget();
  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  useEffect(() => {
    localStorage.setItem("budget", state.budget.toString());
    localStorage.setItem("expenses", JSON.stringify(state.expenses));
  }, [state.budget, state.expenses]);

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">
          Expense Manager
        </h1>
      </header>
      {isValidBudget ? (
        <>
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
            <BudgetTracker />
          </div>
          <main className="max-w-3xl mx-auto py-10">
            <ExpenseList />
            <ExpenseModal />
          </main>
        </>
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
          <BudgetForm />
        </div>
      )}
    </>
  );
}

export default App;
