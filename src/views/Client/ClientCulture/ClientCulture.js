import React from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  makeStyles,
  Divider,
} from "@material-ui/core";

// hook
import { useFetch } from "../../../hooks";
// components
import CultureList from "./CultureList";

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
  },
});

const ClientCulture = () => {
  const { data, isLoading } = useFetch("/cultures/group");
  const clasess = useStyles();

  return (
    <div>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" className={clasess.title}>
              Deaf and Dumb People Culture
            </Typography>
            <Divider />
          </Grid>

          {isLoading ? (
            <Grid item xs={12}>
              <CircularProgress />
            </Grid>
          ) : (
            [
              <Grid item xs={12}>
                <CultureList data={data} />
              </Grid>,
            ]
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default ClientCulture;
