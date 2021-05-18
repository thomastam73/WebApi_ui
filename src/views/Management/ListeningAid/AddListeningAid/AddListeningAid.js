import React from "react";
import { Grid } from "@material-ui/core";

// components
import { DashboardContainer, LoadingButton } from "../../../../components";
import { ListeningAidInfo } from "../components";
// hooks
import { usePost } from "../../../../hooks";
// config
import dataModel from "../config/data";

const AddListeningAid = () => {
  const [states, setStates] = React.useState(dataModel);
  const [res, postMethod] = usePost({ url: "/listeningaids", payload: states });

  const handleOnChange = (name) => (e) => {
    setStates({ ...states, [name]: e.target.value });
  };
  const handleContentOnChange = (name, content) => {
    setStates({ ...states, [name]: content });
  };

  return (
    <DashboardContainer title="Add a new Listening Aid">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={8}>
          <ListeningAidInfo
            states={states}
            handleOnChange={handleOnChange}
            handleContentOnChange={handleContentOnChange}
          />
        </Grid>

        <Grid item xs={12}>
          <LoadingButton
            variant="contained"
            color="primary"
            onClick={postMethod}
            isLoading={res.isLoading}
          >
            SUBMIT
          </LoadingButton>
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

export default AddListeningAid;
