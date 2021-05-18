import React from "react";
import dayjs from "dayjs";
import {
  Grid,
  makeStyles,
  CardHeader,
  Card,
  CardContent,
  Typography,
  Divider,
  Avatar,
} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";

dayjs.locale("zh-hk");

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  mb3: {
    marginBottom: "10px",
  },
  avatar: {
    backgroundColor: "white",
    color: "black",
  },
});

function getDistrictColour(district) {
  if (district === "New Territories") {
    return "green";
  } else if (district === "Hong Kong Island") {
    return "#E0FFFF";
  } else if (district === "Kowloon") {
    return "red";
  } else return "#B71C1C";
}
function getTextColour(district) {
  if (district === "New Territories") {
    return "white";
  } else if (district === "Hong Kong Island") {
    return "black";
  } else if (district === "Kowloon") {
    return "white";
  } else return "white";
}
const LocationCard = (props) => {
  const classes = useStyles();
  const { information, district } = props;
  const list = information.map((information) => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <Card className={classes.root}>
            <CardHeader
              titleTypographyProps={{ variant: "h6" }}
              style={{
                backgroundColor: getDistrictColour(district),
                color: getTextColour(district),
              }}
              title={information.buildingName}
              avatar={
                <Avatar alt="" className={classes.avatar}>
                  <AssignmentIcon />
                </Avatar>
              }
            />
            <Divider />
            <CardContent>
              <Grid
                container
                spacing={2}
                className={classes.mb3}
                key={information.buildingName}
              >
                <Grid item xs={12}>
                  <Divider />
                  <Typography variant="body" component="h2">
                    {information.address}
                  </Typography>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: information.description,
                    }}
                  />
                  <Typography variant="h6" align="right">
                    {information.phone}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  });

  return list;
};

export default LocationCard;
