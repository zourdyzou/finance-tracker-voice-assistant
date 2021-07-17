import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./styled";
import { Form } from "./Form/Form";

export const MainContent = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography variant="h5" align="center">
          Total Balance $100
        </Typography>
        <Typography
          variant="subtitle1"
          style={{
            lineHeight: "1.5rem",
            marginTop: "20px",
          }}
        >
          Try saying: Add income for $100 in Category salary for Monday
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* LIST COMPONENTS //TODO */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
