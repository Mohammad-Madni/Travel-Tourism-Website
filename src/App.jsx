import "./App.css";
import Login from "./components/Login.jsx";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import ResponsiveAppBar from "./components/Navbar";
import Register from "./components/Register";
import Khairpur from "./components/States/Khairpur.jsx";
import Jamshoro from "./components/States/Jamshoro.jsx";
import Dadu from "./components/States/Dadu.jsx";

import PlaceRoutes from "./routes/PlaceRoutes.jsx";
import Places from "./components/Places";
import SavedPlaces from "./components/SavedPlaces";
import Umarkot from "./components/States/Umarkot.jsx";
import Larkana from "./components/States/Larkana";
import Hyderabad from "./components/States/Hyderabad.jsx";
import Footer from "./components/Footer";
import TestRegister from "./components/TestRegister";
import Map from "./components/Map";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
            <Footer />
          </Route>
          <Route path="/register">
            <ResponsiveAppBar />
            <TestRegister />
          </Route>
          <Route path="/home">
            <ResponsiveAppBar />
            <Route exact path={"/home"}>
              <Home />
              <Footer />
            </Route>

            <Route exact path={"/home/Dadu"}>
              <Dadu />
              <Footer />
            </Route>
            <Route exact path={"/home/Khairpur"}>
              <Khairpur />
              <Footer />
            </Route>
            <Route exact path={"/home/Umarkot"}>
              <Umarkot />
              <Footer />
            </Route>
            <Route exact path={"/home/Larkana"}>
              <Larkana />
              <Footer />
            </Route>
            <Route exact path={"/home/Jamshoro"}>
              <Jamshoro />
              <Footer />
            </Route>
            <Route exact path={"/home/Hyderabad"}>
              <Hyderabad />
              <Footer />
            </Route>
          </Route>
          <Route exact path="/places">
            <ResponsiveAppBar />
            <Places />
            <Footer />
          </Route>
          <Route path="/places/*">
            <ResponsiveAppBar />
            <PlaceRoutes />
            <Footer />
          </Route>
          <Route path="/myplaces">
            <ResponsiveAppBar />
            <SavedPlaces />
            <Footer />
          </Route>
          <Route path="/profile">
            <ResponsiveAppBar />
            <Profile />
            <Footer />
          </Route>
          <Route path="/test"></Route>
          <Route path="/">
            <ResponsiveAppBar />
            <Welcome />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
