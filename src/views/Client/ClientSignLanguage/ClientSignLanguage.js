import React from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  Divider,
  makeStyles,
  Button,
} from "@material-ui/core";

// hook
import { useFetch } from "../../../hooks";
// component
import SignLanguagCard from "./SignLanguagCard";

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
  button: {
    margin: theme.spacing(1),
  },
}));

const ClientSignLanguages = () => {
  const classes = useStyles();
  const { data, isLoading } = useFetch("/signLanguages/group");
  const [district, setDistrict] = React.useState("US");

  const onClick = (district) => {
    setDistrict(district);
  };

  const filterController = (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        className={classes.button}
        onClick={() => onClick("US")}
      >
        US
      </Button>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={() => onClick("Hong Kong")}
      >
        Hong Kong
      </Button>
    </div>
  );

  const filterSignLanguageList = (district) => {
    if (district === "US") {
      return data
        .filter((information) => information._id === "US")
        .map((information) => (
          <SignLanguagCard information={information.data} />
        ));
    } else if (district === "Hong Kong") {
      return data
        .filter((information) => information._id === "HongKong")
        .map((information) => (
          <SignLanguagCard information={information.data} />
        ));
    }
  };

  return (
    <div>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" className={classes.title}>
          Sign Language Dictionary
        </Typography>
        <Divider />
      </Grid>
      <Grid container spacing={3} flexGrow="1">
        <Grid item xs={12} md={12}>
          {filterController}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" align="center" className={classes.title}>
          {district}
        </Typography>
      </Grid>
      {isLoading ? (
        <Grid item xs={12}>
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {filterSignLanguageList(district)}
        </Grid>
      )}
    </div>
  );
};

export default ClientSignLanguages;
