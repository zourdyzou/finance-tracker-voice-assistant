import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./styled";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { FinanceManagementContext } from "../../../contexts/globalContext";

export const Lists = () => {
  const classes = useStyles();
  const { deleteTransaction } = useContext(FinanceManagementContext);
  // const dateNow = new Date();

  //TODO => mock transaction //DELETE later
  const transactions = [
    {
      id: uuidv4(),
      type: "Income",
      category: "Salary",
      amount: 50,
      date: moment().format("LLLL"),
    },
    {
      id: uuidv4(),
      type: "Expense",
      category: "Pets",
      amount: 65,
      date: moment().format("LLLL"),
    },
    {
      id: uuidv4(),
      type: "Expense",
      category: "Laptop Repair",
      amount: 150,
      date: moment().format("LLLL"),
    },
    {
      id: uuidv4(),
      type: "Income",
      category: "Side Job",
      amount: 250,
      date: moment().format("LLLL"),
    },
  ];

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          unmountOnExit
          mountOnEnter
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};
