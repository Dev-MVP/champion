import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "../pages/home";
import FighterDetails from "../pages/fighterDetails";

//

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function Routes() {
  return (
    <Router>
      <ScrollToTop />
      {/* /:fightername */}
      <Switch>
        <Route path="/fighter-details/:fightername">
          <FighterDetails />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
