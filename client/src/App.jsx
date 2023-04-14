import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import ConcertDetail from "./routes/ConcertDetail";

const App = () => {
    return (
        
          <div className="container">
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/concerts/:id/update"
                  component={UpdatePage}
                />
                <Route
                  exact
                  path="/concerts/:id"
                  component={ConcertDetail}
                />
              </Switch>
            </Router>
          </div>
        
      );
    };

    export default App;