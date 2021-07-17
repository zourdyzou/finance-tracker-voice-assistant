// @ts-nocheck
import React from "react";
import { Details, MainContent } from "./components";
import { Grid } from "@material-ui/core";
import useStyles from "./styles/appStyles";

export const App = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        paddingBottom: "100px",
      }}
    >
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={3}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MainContent />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
};
