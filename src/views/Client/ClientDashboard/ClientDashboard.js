import React from "react";
import { Grid, Typography, makeStyles, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ClientDashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" className={classes.title}>
            Deaf and Dumb People Website
          </Typography>
          <Divider />
        </Grid>
      </Grid>
    </div>
  );
};

export default ClientDashboard;
