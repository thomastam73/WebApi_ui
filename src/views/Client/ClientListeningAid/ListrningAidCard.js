import React from "react";
import { Grid, makeStyles, Typography, Divider } from "@material-ui/core";
import BTE from "./product-bte.png";
import CIC from "./product-cic.png";
import IIC from "./product-iic.png";
import ITC from "./product-itc.png";
import RIC from "./product-ric.png";
import ITE from "./product-ite.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  chip: {
    color: "white",
  },
  mb3: {
    marginBottom: "10px",
  },
  subTitle: {
    fontWeight: "bold",
    fontFamily: theme.typography.fontFamily[6],
  },
}));

const getImg = (type) => {
  switch (type) {
    case "BTE":
      return BTE;
    case "CIC":
      return CIC;
    case "IIC":
      return IIC;
    case "ITC":
      return ITC;
    case "RIC":
      return RIC;
    case "ITE":
      return ITE;
    default:
      return BTE;
  }
};

const ListeningAidCard = (props) => {
  const classes = useStyles();
  const { information, type } = props;
  const list = information.map((information) => (
    <Grid container>
      <Grid item xs={12} md={12} key={information._id}>
        <Typography variant="h3" color="inherit" align="center">
          {information.name}
        </Typography>
        <Divider />
      </Grid>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            className={classes.subTitle}
            variant="h4"
            color="inherit"
            align="left"
            paragraph
          >
            Desription:
          </Typography>
          <div
            dangerouslySetInnerHTML={{
              __html: information.description,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={getImg(type)} alt={information.type} />
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <Grid item xs={12} md={12}>
      {list}
    </Grid>
  );
};
export default ListeningAidCard;
