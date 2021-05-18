import React from "react";
import {
  Grid,
  makeStyles,
  TextField,
  Card,
  Select,
  FormControl,
  InputLabel,
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

const SignLanguageInfo = (props) => {
  const classes = useStyles();
  const {
    states,
    handleOnChange,
    handleImgOnChange,
    handleContentOnChange,
  } = props;
  const [imgBase64, setImgBase64] = React.useState(states.imgURL);

  const handleFileChange = (e) => {
    let file = e.target.files[0];
    convertImgToBase64(file);
  };

  const handleTextOnChange = (value) => {
    handleContentOnChange("description", value);
  };

  const convertImgToBase64 = (imageFile) => {
    if (imageFile) {
      let fileReader = new FileReader();
      fileReader.onload = function (fileLoadedEvent) {
        let srcData = fileLoadedEvent.target.result;
        setImgBase64(srcData.toString());
        handleImgOnChange("imgURL", srcData.toString());
      };
      fileReader.readAsDataURL(imageFile);
    }
  };

  return (
    <Card className={classes.content}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            size="small"
            defaultValue={states.name}
            onChange={handleOnChange("name")}
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
        <Grid item xs={6}>
          <TextField
            label="Gesture"
            size="small"
            fullWidth
            defaultValue={states.gesture}
            onChange={handleOnChange("gesture")}
          />
        </Grid>
        <Grid item xs={6}>
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
              <option value="US">US</option>
              <option value="HongKong">Hong Kong</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" gutterBottom>
            Image of sing language
          </Typography>
          <input type="file" onChange={handleFileChange} />
          <Grid item xs={12}>
            <img src={imgBase64} alt="img" width="200" height="200" />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Video Link"
            size="small"
            fullWidth
            defaultValue={states.videoLink}
            onChange={handleOnChange("videoLink")}
          />
        </Grid>
        <Grid item xs={12}>
          <iframe
            width="750"
            height="400"
            src={states.videoLink}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SignLanguageInfo;
