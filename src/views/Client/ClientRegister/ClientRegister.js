import React from "react";
import {
  Avatar,
  Button,
  TextField,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
// hooks
import { registerUsePost } from "../../../hooks";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ClientSignIn = () => {
  const classes = useStyles();
  const [states, setStates] = React.useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    status: 0,
  });

  const [res, postMethod] = registerUsePost({
    url: "/register",
    payload: states,
  });

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleValuesChange = (prop) => (event) => {
    setStates({ ...states, [prop]: event.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={states.name}
            onChange={handleValuesChange("name")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={states.email}
            onChange={handleValuesChange("email")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={states.password}
            onChange={handleValuesChange("password")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="repeatPassword"
            label="Repeat Password"
            type="password"
            id="repeatPassword"
            autoComplete="current-password"
            value={states.repeatPassword}
            onChange={handleValuesChange("repeatPassword")}
          />
          {res.error && (
            <Typography style={{ color: "#DC3544" }}>
              {res.error.message}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className={classes.submit}
            onClick={postMethod}
            disabled={res.isLoading}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ClientSignIn;
