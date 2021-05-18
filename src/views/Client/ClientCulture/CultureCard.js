import React from "react";
import {
  Grid,
  CardContent,
  Typography,
  Card,
  makeStyles,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 140,
  },
  CardContent: { backgroundColor: "#E5E5E5" },
  CardActions: { backgroundColor: "#934A5F" },
  randonImg: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

const CultureCards = (props) => {
  const classes = useStyles();
  const { information } = props;
  const cultureList = information.map((data) => {
    const url = `/cultures/${data._id}`;
    return (
      <Grid item xs={12} md={12} key={data._id}>
        <Card className={classes.root}>
          <CardActionArea href={url}>
            <CardMedia
              className={classes.media}
              image="https://source.unsplash.com/random"
              title="Contemplative Reptile"
            />
            <CardContent className={classes.CardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {data.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {data.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.CardActions}>
            <Button size="small" color="primary" href={url}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return (
    <Grid container spacing={3}>
      {cultureList}
    </Grid>
  );
};

export default CultureCards;
