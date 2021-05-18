import React from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  makeStyles,
  Divider,
  ButtonBase,
} from "@material-ui/core";
// hook
import { useFetch } from "../../../hooks";
// components
import ListrningAidCard from "./ListrningAidCard";
import bte from "./product-bte.png";
import cic from "./product-cic.png";
import iic from "./product-iic.png";
import itc from "./product-itc.png";
import ric from "./product-ric.png";
import ite from "./product-ite.png";

const images = [
  {
    url: bte,
    title: "BTE",
    width: "15%",
  },
  {
    url: cic,
    title: "CIC",
    width: "15%",
  },
  {
    url: iic,
    title: "IIC",
    width: "15%",
  },
  {
    url: itc,
    title: "ITC",
    width: "15%",
  },
  {
    url: ite,
    title: "ITE",
    width: "15%",
  },
  {
    url: ric,
    title: "RIC",
    width: "15%",
  },
];

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 300,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center  100% ",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#FFDC9F",
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    color: "black",
    fontWeight: "bold",
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: "black",
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const ClientListeningAid = () => {
  const { data, isLoading } = useFetch("/listeningaids/group");
  const classes = useStyles();
  const [list, setList] = React.useState([]);

  const onClick = (name) => {
    const newList = data
      .filter((information) => name === information._id)
      .map((information) => {
        console.log(information.data);
        return (
          <Grid item xs={12} md={12} key={information._id}>
            <ListrningAidCard
              information={information.data}
              type={information._id}
            />
          </Grid>
        );
      });
    setList(newList);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" className={classes.title}>
          Listening Aid
        </Typography>
        <Divider />
      </Grid>
      <div className={classes.root}>
        <Grid container justify="center" spacing={3}>
          {images.map((image) => (
            <ButtonBase
              focusRipple
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              onClick={() => onClick(image.title)}
              style={{
                width: image.width,
              }}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="h5"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          ))}
        </Grid>
      </div>
      <div>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={3}>
            {list}
          </Grid>
        )}
      </div>
    </Grid>
  );
};

export default ClientListeningAid;
