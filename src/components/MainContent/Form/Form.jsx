import React, { useState, useContext, useEffect } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { useSpeechContext } from "@speechly/react-client";
// import moment from "moment";

import useStyles from "./styled";
import { formatDate } from "../../../utils/formatDate";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories";
import { FinanceManagementContext } from "../../../contexts/globalContext";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};

export const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(FinanceManagementContext);
  const { segment } = useSpeechContext();
  const classes = useStyles();

  const createTransaction = () => {
    const transaction = { ...formData, amount: +formData.amount, id: uuidv4() };

    addTransaction(transaction);
    setFormData(initialState);
  };

  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === "add_expense") {
        setFormData({ ...formData, type: "Expense" });
      }

      if (segment.intent.intent === "add_income") {
        setFormData({ ...formData, type: "Income" });
      }

      if (segment.isFinal && segment.intent.intent === "create_transaction") {
        return createTransaction();
      }

      if (segment.isFinal && segment.intent.intent === "cancel_transaction") {
        return setFormData(initialState);
      }

      segment.entities.forEach((entity) => {
        const categoryFix = `${entity.value.charAt(0)}${entity.value
          .slice(1)
          .toLowerCase()}`;
        switch (entity.type) {
          case "amount":
            return setFormData({ ...formData, amount: entity.value });
          case "category":
            if (incomeCategories.map((ic) => ic.type).includes(categoryFix)) {
              return setFormData({
                ...formData,
                type: "Income",
                category: categoryFix,
              });
            } else if (
              expenseCategories.map((ec) => ec.type).includes(categoryFix)
            ) {
              return setFormData({
                ...formData,
                type: "Expense",
                category: categoryFix,
              });
            }
            break;
          case "date":
            return setFormData({ ...formData, date: entity.value });

          default:
            break;
        }
      });

      if (
        segment.isFinal &&
        formData.amount &&
        formData.category &&
        formData.type
      ) {
        console.log("EXISTED!");
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segment]);

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="subtitle2" gutterBottom align="center">
          {segment && segment.words.map((word) => word.value).join(" ")}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={({ target }) =>
              setFormData({ ...formData, type: target.value })
            }
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={({ target }) =>
              setFormData({ ...formData, category: target.value })
            }
          >
            {selectedCategories?.map((category) => (
              <MenuItem key={uuidv4()} value={category.type}>
                {category.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          fullWidth
          value={formData.amount}
          onChange={({ target }) =>
            setFormData({ ...formData, amount: target.value })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="date"
          label="Date"
          fullWidth
          value={formData.date}
          onChange={({ target }) =>
            setFormData({ ...formData, date: formatDate(target.value) })
          }
        />
      </Grid>
      <Button
        variant="outlined"
        className={classes.button}
        color="primary"
        fullWidth
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};
