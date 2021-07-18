// @ts-nocheck
import React from "react";
import { Card, CardContent, Typography, CardHeader } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./styled";
import { useTransactions } from "../../hooks/useTransactions";

export const Details = ({ title, subheader }) => {
  const classes = useStyles();
  const { chartData, total } = useTransactions(title);
  return (
    <Card className={title === "Income" ? classes.income : classes.expenses}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};
