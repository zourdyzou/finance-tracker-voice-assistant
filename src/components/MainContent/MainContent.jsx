import React, { useContext } from "react";
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
import { Lists } from "./List/List";
import { FinanceManagementContext } from "../../contexts/globalContext";
import { InfoCard } from "../index";

export const MainContent = () => {
  const classes = useStyles();

  const { balance } = useContext(FinanceManagementContext);

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography variant="h5" align="center">
          Total Balance ${balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{
            lineHeight: "1.5rem",
            marginTop: "20px",
          }}
        >
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Lists />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
