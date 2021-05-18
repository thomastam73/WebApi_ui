import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
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
import { usePost } from "../../../hooks";

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
  const history = useHistory();
  const classes = useStyles();
  const [states, setStates] = React.useState({
    email: "",
    password: "",
  });
  const [res, postMethod] = usePost({
    url: "/login",
    headers: {},
    payload: states,
  });

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleValuesChange = (prop) => (event) => {
    setStates({ ...states, [prop]: event.target.value });
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    postMethod();
  };

  React.useEffect(() => {
    if (res.data) {
      localStorage.setItem("Token", res.data.token);
      axios.defaults.headers.common = {
        authentication: `Bearer ${res.data.token}`,
      };
      history.push("/signlanguages");
    }
  }, [res]);

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          User Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            onClick={handleSignIn}
            disabled={res.isLoading}
          >
            Sign In
          </Button>
          <Button
            href="/register"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className={classes.submit}
            disabled={res.isLoading}
          >
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ClientSignIn;
