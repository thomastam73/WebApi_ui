import React from "react";
import { useParams } from "react-router-dom";
import { Grid, CircularProgress } from "@material-ui/core";
// components
import {
  DashboardContainer,
  LoadingButton,
  DeleteButton,
} from "../../../../components";
import { LocationInfo } from "../components";
// hooks
import { useFetch, usePut, useDelete } from "../../../../hooks";
// config
import dataModel from "../config/data";

const EditLocation = () => {
  const params = useParams();
  const url = `/locations/${params.id}`;
  const { isLoading, data } = useFetch(url);
  const [states, setStates] = React.useState(dataModel);
  const [res, putMethod] = usePut({ url, payload: states });
  const [resDelete, deleteMethod] = useDelete({ url });

  React.useEffect(() => {
    setStates(data);
  }, [data]);

  const handleOnChange = (name) => (e) => {
    setStates({ ...states, [name]: e.target.value });
  };

  const handleContentOnChange = (name, content) => {
    setStates({ ...states, [name]: content });
  };

  return (
    <DashboardContainer title="Edit Location">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={8}>
            <LocationInfo
              states={states}
              handleOnChange={handleOnChange}
              handleContentOnChange={handleContentOnChange}
            />
          </Grid>

          <Grid item xs={12}>
            <LoadingButton
              variant="contained"
              color="primary"
              onClick={putMethod}
              isLoading={res.isLoading}
            >
              Update
            </LoadingButton>{" "}
            <DeleteButton
              variant="outlined"
              color="secondary"
              onClick={deleteMethod}
              isLoading={resDelete.isLoading}
            >
              Delete
            </DeleteButton>
          </Grid>
        </Grid>
      )}
    </DashboardContainer>
  );
};

export default EditLocation;
