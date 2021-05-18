import React from "react";
import { Grid, FormControlLabel, Switch } from "@material-ui/core";

// components
import CultureCard from "./CultureCard";

const ClientCulture = (props) => {
  const { data } = props;
  const [state, setState] = React.useState(data.map((i) => (i = true)));
  const [nameList, setNameList] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [show, setShow] = React.useState(true);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    const newNameList = nameList;
    if (event.target.checked === true) {
      newNameList.push(event.target.name);
      setCount(count + 1);
      setShow(false);
    } else {
      for (let i = 0; i < newNameList.length; i++) {
        if (newNameList[i] === event.target.name) {
          newNameList.splice(i, 1);
        }
      }
      setCount(count - 1);
      if (count === 1) {
        setShow(true);
      }
    }
    setNameList(newNameList);
  };

  const CheckBox = data.map((information) => (
    <FormControlLabel
      control={
        <Switch
          onChange={handleChange}
          checked={state.i}
          name={information._id}
        />
      }
      label={information._id}
    />
  ));

  // eslint-disable-next-line array-callback-return
  const filterLists = data.map((information) => {
    for (let i = 0; i < nameList.length; i++) {
      if (information._id === nameList[i]) {
        return information;
      }
    }
  });

  const cultureList = data.map((information) => {
    return (
      <Grid key={information._id} item xs={12}>
        <CultureCard information={information.data} />
      </Grid>
    );
  });

  const filterCultureList = filterLists.map((information, i) => {
    if (information === undefined) {
      return "";
    } else {
      return (
        <Grid key={information._id} item xs={12}>
          <CultureCard information={information.data} />
        </Grid>
      );
    }
  });

  return [
    <Grid item xs={12}>
      {CheckBox}
    </Grid>,
    <Grid item xs={12}>
      {show ? cultureList : filterCultureList}
    </Grid>,
  ];
};

export default ClientCulture;
