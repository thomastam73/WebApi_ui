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

const ListeningAidInfo = (props) => {
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
            value={states.name}
            onChange={handleOnChange("name")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Brand"
            size="small"
            value={states.brand}
            onChange={handleOnChange("brand")}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel htmlFor="type">Type</InputLabel>
            <Select
              native
              value={states.type}
              onChange={handleOnChange("type")}
              inputProps={{
                name: "type",
                id: "type",
              }}
            >
              <option value="BTE">BTE</option>
              <option value="ITE">ITE</option>
              <option value="RIC">RIC</option>
              <option value="RIC">ITC</option>
              <option value="RIC">CIC</option>
              <option value="RIC">IIC</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Price"
            size="small"
            type="number"
            value={states.price}
            onChange={handleOnChange("price")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Mark"
            size="small"
            type="number"
            value={states.mark}
            onChange={handleOnChange("mark")}
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

export default ListeningAidInfo;
