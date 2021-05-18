import React from "react";
import {
  Button,
  makeStyles,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
  CardContent: { backgroundColor: "#E5E5E5" },
  CardActions: { backgroundColor: "#934A5F" },
});

const SignLanguagCard = (props) => {
  const classes = useStyles();
  const { information } = props;
  const list = information.map((information) => {
    const url = `/signlanguages/${information._id}`;
    return (
      <Grid key={information._id} item xs={12} md={4} sm={6}>
        <Card className={classes.root}>
          <CardActionArea href={url}>
            <CardMedia
              className={classes.media}
              image={information.imgURL}
              title="Contemplative Reptile"
            />
            <CardContent className={classes.CardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {information.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {information.description}
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
  return list;
};

export default SignLanguagCard;
