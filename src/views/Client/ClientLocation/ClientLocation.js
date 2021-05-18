import React from "react";
import {
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
// hook
import { useFetch } from "../../../hooks";
// component
import LocationCard from "./LocationCard";

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

const ClientLocation = () => {
  const classes = useStyles();
  const { data, isLoading } = useFetch("/locations/group");
  const [district, setDistrict] = React.useState("");

  const locationList = data.map((information) => (
    <Grid key={information._id} item xs={12} sm={12} md={12}>
      <LocationCard information={information.data} />
    </Grid>
  ));

  const handleChange = (event) => {
    setDistrict(event.target.value);
  };

  const filterController = (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel id="demo-simple-select-filled-label">District</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={district}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"New Territories"}>New Territories</MenuItem>
        <MenuItem value={"Hong Kong Island"}>Hong Kong Island</MenuItem>
        <MenuItem value={"Kowloon"}>Kowloon</MenuItem>
      </Select>
    </FormControl>
  );

  const filterLocationList = (district) => {
    if (district === "New Territories") {
      return data
        .filter((information) => information._id === "New Territories")
        .map((information) => (
          <Grid key={information._id} item xs={12} sm={12} md={12}>
            <LocationCard information={information.data} district={district} />
          </Grid>
        ));
    } else if (district === "Hong Kong Island") {
      return data
        .filter((information) => information._id === "Hong Kong Island")
        .map((information) => (
          <Grid key={information._id} item xs={12} sm={12} md={12}>
            <LocationCard information={information.data} district={district} />
          </Grid>
        ));
    } else if (district === "Kowloon") {
      return data
        .filter((information) => information._id === "Kowloon")
        .map((information) => (
          <Grid key={information._id} item xs={12} sm={12} md={12}>
            <LocationCard information={information.data} district={district} />
          </Grid>
        ));
    } else if (district === "") {
      return locationList;
    }
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" className={classes.title}>
            Deaf and Dumb People Location
          </Typography>
          <Divider />
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
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
          <Grid item xs={12}>
            {filterLocationList(district)}
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default ClientLocation;
