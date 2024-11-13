import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Varnasi from "../components/Places/Varnasi";
import TajMahal from "../components/Places/TajMahal";
import Faizmahal from "../components/Places/Faizmahal";
import Shimla from "../components/Places/Shimla";
import Kotdiji from "../components/Places/Kotdiji";
import {
  Faizpalace,
  CityPalace,
  HawaPalace,
  Manali,
  Munnar,
  RedFort,
} from "../components/Places/PlacesComponent";


function PlaceRoutes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/places/kotdiji">
            <Kotdiji />
          </Route>
          <Route exact path="/places/Faizmahal">
            <Faizmahal />
          </Route>
          <Route exact path="/places/shimla">
            <Shimla />
          </Route>
          <Route exact path="/places/manali">
            <Manali />
          </Route>
          <Route exact path="/places/hawa palace ">
            <HawaPalace />
          </Route>
          <Route exact path="/places/faiz mahal"></Route>
          <Route exact path="/places/humayun's tomb"></Route>
          <Route exact path="/places/qutub minar"></Route>
          <Route exact path="/places/city palace"><CityPalace/></Route>
          <Route exact path="/places/red fort">
            <RedFort />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default PlaceRoutes;
