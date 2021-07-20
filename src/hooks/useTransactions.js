import { useContext } from "react";
import { FinanceManagementContext } from "../contexts/globalContext";

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "../constants/categories";

export const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(FinanceManagementContext);
  const transactionsType = transactions.filter((t) => t.type === title);
  const total = transactionsType.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );

  const categories = title === "Income" ? incomeCategories : expenseCategories;

  // console.log({
  //   transactionsType,
  //   total,
  //   categories,
  // });

  transactionsType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  // only return if amount is not 0
  const filteredCategories = categories.filter(
    (category) => category.amount > 0
  );

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };

  return { filteredCategories, chartData, total };
};
