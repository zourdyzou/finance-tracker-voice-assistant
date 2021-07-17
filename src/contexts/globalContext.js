import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = [];

export const FinanceManagementContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // Action creators
  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });

  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  return (
    <FinanceManagementContext.Provider
      value={{
        appName: "Financial Tracker",
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </FinanceManagementContext.Provider>
  );
};
