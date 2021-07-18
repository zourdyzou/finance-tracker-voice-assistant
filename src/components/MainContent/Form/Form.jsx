import React, { useState, useContext } from "react";
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
  const classes = useStyles();

  const createTransaction = () => {
    const transaction = { ...formData, amount: +formData.amount, id: uuidv4() };

    addTransaction(transaction);
    setFormData(initialState);
  };

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="subtitle2" gutterBottom align="center">
          ...
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
