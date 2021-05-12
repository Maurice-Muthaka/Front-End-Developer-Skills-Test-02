import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CourseScreen from "./components/screens/learn/courseScreen";
import HomeScreen from "./components/screens/HomeScreen/HomeScreen";
import IncubatorScreen from "./components/screens/Incubators/incubatorScreen";
import SingleIncubatorScreen from "./components/screens/Incubators/singleIncubatorScreen";
import LearnScreen from "./components/screens/learn/learnScreen";

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/incubators" component={IncubatorScreen} />
        <Route exact path="/incubators/:id" component={SingleIncubatorScreen} />
        <Route exact path="/learn" component={LearnScreen} />
        <Route exact path="/learn/:id" component={CourseScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
