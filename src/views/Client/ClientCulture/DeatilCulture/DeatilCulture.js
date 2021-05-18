import React from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  CircularProgress,
  Typography,
  Paper,
  makeStyles,
  Divider,
} from "@material-ui/core";

// hooks
import { useFetch } from "../../../../hooks";

const DeatilCulture = () => {
  const params = useParams();
  const url = `/cultures/${params.id}`;
  const { isLoading, data } = useFetch(url);

  const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      position: "relative",
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundImage: "url(https://source.unsplash.com/random)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    overlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,.3)",
    },
    mainFeaturedPostContent: {
      position: "relative",
      padding: theme.spacing(3),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
  }));
  const classes = useStyles();

  return (
    <Grid item xs={12} md={12} key={data._id}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Paper className={classes.mainFeaturedPost}>
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={12}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  {data.name}
                </Typography>
                <Divider />
                <Grid item md={6}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.description,
                    }}
                  />
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default DeatilCulture;
