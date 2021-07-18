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
import useStyles from "./styled";
import moment from "moment";
import { FinanceManagementContext } from "../../../contexts/globalContext";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: moment().locale("de").format("LLLL"),
};

export const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(FinanceManagementContext);
  const classes = useStyles();

  const createTransaction = () => {};

  console.log(formData);

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
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="salary">Salary</MenuItem>
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
            setFormData({ ...formData, date: target.value })
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
