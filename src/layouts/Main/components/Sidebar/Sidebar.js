import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Drawer } from "@material-ui/core";
import {
  ImportContacts,
  Public,
  LocationCity,
  Apps,
  Headset,
} from "@material-ui/icons";
import { SidebarNav } from "./components";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up("lg")]: {
      marginTop: 64,
      height: "calc(100% - 64px)",
    },
  },
  root: {
    backgroundColor: "#DDC9BC",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const Sidebar = (props) => {
  const { open, variant, onClose, className, auth, ...rest } = props;
  const classes = useStyles();

  const pages = [
    {
      title: "Translation",
      href: "/home",
      icon: <Apps />,
    },
    {
      title: "Dictionary",
      href: "/signLanguages",
      icon: <ImportContacts />,
    },
    {
      title: "Culture",
      href: "/cultures",
      icon: <Public />,
    },
    {
      title: "Listening Aid",
      href: "/listeningaids",
      icon: <Headset />,
    },
    {
      title: "Location",
      href: "/locations",
      icon: <LocationCity />,
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <SidebarNav className={classes.nav} pages={pages} auth={auth} />
      </div>
    </Drawer>
  );
};

export default Sidebar;
