import { v4 as uuidv4 } from "uuid";
import { DraftExpense, Expense } from "../types";
import { sampleData } from "../helpers";

export type BudgetActions =
  | { type: "add-budget"; payload: { budget: number } }
  | { type: "show-modal" }
  | { type: "close-modal" }
  | { type: "add-expense"; payload: { expense: DraftExpense } }
  | { type: "remove-expense"; payload: { id: Expense["id"] } }
  | { type: "get-expense-by-id"; payload: { id: Expense["id"] } }
  | { type: "update-expense"; payload: { expense: Expense } };

export type BudgetState = {
  budget: number;
  modal: boolean;
  expenses: Expense[];
  editingId: Expense["id"];
};

export const initialState: BudgetState = {
  budget: 0,
  modal: false,
  expenses: sampleData,
  editingId: "",
};

const createExpense = (draftExpense: DraftExpense): Expense => {
  return { ...draftExpense, id: uuidv4() };
};

export const budgetReducer = (
  state: BudgetState = initialState,
  action: BudgetActions
) => {
  switch (action.type) {
    case "add-budget":
      return {
        ...state,
        budget: action.payload.budget,
      };
    case "show-modal":
      return {
        ...state,
        modal: true,
      };
    case "close-modal":
      return {
        ...state,
        modal: false,
        editingId: "",
      };
    case "add-expense":
      const newExpense = createExpense(action.payload.expense);
      return {
        ...state,
        expenses: [...state.expenses, newExpense],
        modal: false,
      };
    case "remove-expense":
      return {
        ...state,
        expenses: state.expenses.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "get-expense-by-id":
      return {
        ...state,
        editingId: action.payload.id,
        modal: true,
      };
    case "update-expense":
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense.id === action.payload.expense.id
            ? action.payload.expense
            : expense
        ),
        modal: false,
        editingId: "",
      };

    default:
      throw new Error("Invalid Action");
  }
};
