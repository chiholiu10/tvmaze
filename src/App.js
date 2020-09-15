import * as React from "react";
import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import { CatalogPage } from "./components/CatalogPage/CatalogPage";
import { DetailPage } from "./components/DetailPage/DetailPage";

export const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" render={() => <CatalogPage />} />
				<Route path="/DetailPage" render={() => <DetailPage />} />
				<Route path="*" render={() => <Redirect to={{path: "/"}} />}/>
			</Switch>
		</div>
	);
};
