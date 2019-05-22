import React, { Component } from 'react';

import { CV_Holder_fr } from './CV_fr';
import { CV_Holder_en } from './CV_en';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {

	render() {

		return (
			<Router>
			<div>
				<Switch>
					<Route exact path="/" component={() => <Redirect to="/fr"/>} />	
					<Route path="/fr" component={CV_Holder_fr} />
					<Route path="/en" component={CV_Holder_en} />
					
					<Route path="/contact/" component={() => { window.location = 'https://contact.princelle.org'; return null; }} />
					<Route path="/contact.php/" component={() => { window.location = 'https://contact.princelle.org'; return null; }} />
					<Route path="/contact.html/" component={() => { window.location = 'https://contact.princelle.org'; return null; }} />
						
					<Route path={"/*"} component={() => <Redirect to="/fr"/>} />
				</Switch>
			</div>
			</Router>
			);
		}
}

export default App;
