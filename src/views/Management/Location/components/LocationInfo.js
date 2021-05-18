import React from "react";
import {
  Grid,
  makeStyles,
  TextField,
  Card,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@material-ui/core";
import dayjs from "dayjs";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

dayjs.locale("zh-hk");
const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: "15px",
  },
}));

const LocationInfo = (props) => {
  const classes = useStyles();
  const { states, handleOnChange, handleContentOnChange } = props;

  const handleTextOnChange = (value) => {
    handleContentOnChange("description", value);
  };

  return (
    <Card className={classes.content}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Building Name"
            size="small"
            fullWidth
            value={states.buildingName}
            onChange={handleOnChange("buildingName")}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel htmlFor="district">District</InputLabel>
            <Select
              native
              value={states.district}
              onChange={handleOnChange("district")}
              inputProps={{
                name: "district",
                id: "district",
              }}
            >
              <option value="Hong Kong Island">Hong Kong Island</option>
              <option value="New Territories">New Territories</option>
              <option value="Kowloon">Kowloon</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            size="small"
            fullWidth
            value={states.address}
            onChange={handleOnChange("address")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone"
            size="small"
            type="number"
            value={states.phone}
            onChange={handleOnChange("phone")}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" gutterBottom>
            Description
          </Typography>
          <ReactQuill
            value={states.description}
            onChange={handleTextOnChange}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default LocationInfo;
