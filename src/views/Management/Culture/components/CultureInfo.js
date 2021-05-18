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

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: "15px",
  },
}));

const CultureInfo = (props) => {
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
            label="Name"
            size="small"
            fullWidth
            value={states.name}
            onChange={handleOnChange("name")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Report Date"
            size="small"
            fullWidth
            type="date"
            value={dayjs(states.reportDate).format("YYYY-MM-DD")}
            onChange={handleOnChange("reportDate")}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel htmlFor="countrySource">Country Source</InputLabel>
            <Select
              native
              value={states.countrySource}
              onChange={handleOnChange("countrySource")}
              inputProps={{
                name: "countrySource",
                id: "countrySource",
              }}
            >
              <option value="US">US</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="KR">KR</option>
            </Select>
          </FormControl>
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

export default CultureInfo;
