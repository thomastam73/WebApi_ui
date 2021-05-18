import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles(() => ({
  root: {},
  content: {},
}));

const DashboardContainer = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { title, children } = props;

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12}>
        <Button color="primary" aria-label="back" onClick={() => history.goBack()}>
          <ArrowBackIosIcon /> Back
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default DashboardContainer;
