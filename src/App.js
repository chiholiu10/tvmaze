import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { CatalogPage } from './components/CatalogPage/CatalogPage';
// import EpisodePage from './components/EpisodePage/EpisodePage';
// import "./styles.scss";

export default function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" render={() => <CatalogPage />} />
          {/* <Route path="/EpisodePage" render={() => <EpisodePage />} /> */}
        </Switch>

    </div>
  );
}

