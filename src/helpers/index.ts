import { Expense } from "../types";

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function formatDate(dateStr: string) {
  const dateObj = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(dateObj);
}

export const sampleData: Expense[] = [
  {
    expenseName: "Toallas de Baño",
    amount: 30,
    category: "3",
    date: new Date(),
    id: "40d71f9c-0130-4e82-b027-115311511381",
  },
  {
    expenseName: "Netflix",
    amount: 10,
    category: "7",
    date: new Date(),
    id: "40d71f9c-0130-4e82-b027-115311511382",
  },
  {
    expenseName: "Vacaciones",
    amount: 100,
    category: "1",
    date: new Date(),
    id: "40d71f9c-0130-4e82-b027-115311511349",
  },
  {
    expenseName: "Tintorería",
    amount: 70,
    category: "4",
    date: new Date(),
    id: "40d71f9c-0130-4e82-b027-1153115174091",
  },
];
