import React from "react";
import { Switch } from "react-router-dom";

// route layout
import {
  AuthRouteWithLayout,
  RouteWithLayout,
  UserRouteWithLayout,
} from "./components/RouteWithLayout";
// layout
import { Dashboard, Main } from "./layouts";
// components
import {
  // client
  ClientSignIn,
  ClientRegister,
  ClientCulture,
  ClientSignLanguage,
  ClientDashboard,
  ClientLocation,
  ClientListeningAid,
  DeatilCulture,
  DeatilSignLanguage,
  // management
  SignIn,
  Culture,
  AddCulture,
  EditCulture,
  SignLanguage,
  AddSignLanguage,
  EditSignLanguage,
  Location,
  AddLocation,
  EditLocation,
  ListeningAid,
  AddListeningAid,
  EditListeningAid,
} from "./views";

const Routes = () => {
  return (
    <Switch>
      {/* -------------------------- Clients ---------------------------------- */}
      {/* SignIn */}
      <RouteWithLayout
        component={SignIn}
        exact
        layout={Main}
        path="/management/signin"
      />
      <RouteWithLayout
        component={ClientSignIn}
        exact
        layout={Main}
        path="/signin"
      />
      <RouteWithLayout
        component={ClientRegister}
        exact
        layout={Main}
        path="/register"
      />
      {/* Home Dashboard */}
      <UserRouteWithLayout
        component={ClientDashboard}
        exact
        layout={Main}
        path="/"
      />
      <UserRouteWithLayout
        component={ClientDashboard}
        exact
        layout={Main}
        path="/home"
      />
      {/* Cultures */}
      <UserRouteWithLayout
        component={ClientCulture}
        exact
        layout={Main}
        path="/cultures"
      />
      <UserRouteWithLayout
        component={DeatilCulture}
        exact
        layout={Main}
        path="/cultures/:id"
      />
      {/* Sign Languages */}
      <UserRouteWithLayout
        component={ClientSignLanguage}
        exact
        layout={Main}
        path="/signLanguages"
      />
      <UserRouteWithLayout
        component={DeatilSignLanguage}
        exact
        layout={Main}
        path="/signLanguages/:id"
      />
      {/* HighRiskArea */}
      <UserRouteWithLayout
        component={ClientLocation}
        exact
        layout={Main}
        path="/locations"
      />
      {/* Institutions */}
      <UserRouteWithLayout
        component={ClientListeningAid}
        exact
        layout={Main}
        path="/listeningAids"
      />
      {/* -------------------------- Management---------------------------------- */}
      {/* Manage Cultures */}
      <AuthRouteWithLayout
        component={Culture}
        exact
        layout={Dashboard}
        path="/management/cultures"
      />
      <AuthRouteWithLayout
        component={AddCulture}
        exact
        layout={Dashboard}
        path="/management/cultures/add"
      />
      <AuthRouteWithLayout
        component={EditCulture}
        exact
        layout={Dashboard}
        path="/management/cultures/edit/:id"
      />
      {/* Manage Rules */}
      <AuthRouteWithLayout
        component={SignLanguage}
        exact
        layout={Dashboard}
        path="/management/signlanguages"
      />
      <AuthRouteWithLayout
        component={AddSignLanguage}
        exact
        layout={Dashboard}
        path="/management/signlanguages/add"
      />
      <AuthRouteWithLayout
        component={EditSignLanguage}
        exact
        layout={Dashboard}
        path="/management/signlanguages/edit/:id"
      />
      {/* Manage HighRiskArea */}
      <AuthRouteWithLayout
        component={Location}
        exact
        layout={Dashboard}
        path="/management/locations"
      />
      <AuthRouteWithLayout
        component={AddLocation}
        exact
        layout={Dashboard}
        path="/management/locations/add"
      />
      <AuthRouteWithLayout
        component={EditLocation}
        exact
        layout={Dashboard}
        path="/management/locations/edit/:id"
      />
      {/* Manage Institutions */}
      <AuthRouteWithLayout
        component={ListeningAid}
        exact
        layout={Dashboard}
        path="/management/listeningaids"
      />
      <AuthRouteWithLayout
        component={AddListeningAid}
        exact
        layout={Dashboard}
        path="/management/listeningaids/add"
      />
      <AuthRouteWithLayout
        component={EditListeningAid}
        exact
        layout={Dashboard}
        path="/management/listeningaids/edit/:id"
      />
    </Switch>
  );
};

export default Routes;
