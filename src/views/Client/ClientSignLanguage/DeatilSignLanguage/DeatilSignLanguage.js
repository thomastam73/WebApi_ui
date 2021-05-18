import React from "react";
import { useParams } from "react-router-dom";
import { Grid, CircularProgress, Typography } from "@material-ui/core";

// hooks
import { useFetch } from "../../../../hooks";

const DeatilCulture = () => {
  const params = useParams();
  const url = `/signlanguages/${params.id}`;
  const { isLoading, data } = useFetch(url);

  return (
    <Grid item xs={12} md={12} key={data._id}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container>
          <Grid item md={12}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              {data.name}
            </Typography>
            <Grid container justify="center">
              <iframe
                width="1000"
                height="600"
                src={data.videoLink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default DeatilCulture;
