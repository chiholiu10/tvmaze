import React from "react";
import { Router } from "react-router-dom";
import { store } from "./Store";
import { Provider } from "react-redux";
import { App } from "./App";
import history from "./history";
import { shallow } from "enzyme";

test("Router exists", () => {
	shallow(
		<Provider store={store}>
			<Router history={history}>
				<App/>
			</Router>
		</Provider>
	);
});
