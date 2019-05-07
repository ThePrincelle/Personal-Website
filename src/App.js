import React from 'react';

//FR
import resumeData_fr from './lang/fr/resumeData';
import elements_fr from './lang/fr/elements';

//EN
import resumeData_en from './lang/en/resumeData';
import elements_en from './lang/en/elements';

import CV from './CV';
import Loading from './components/Loading';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import ReactPiwik from 'react-piwik';

import {
	createBrowserHistory
} from "history";

const customHistory = createBrowserHistory();

function fr() {
  return (<CV resumeData={resumeData_fr} elements={elements_fr}/>);
}

function en() {
  return (<CV resumeData={resumeData_en} elements={elements_en}/>);
}

const matomo = new ReactPiwik({
	url: 'stats.princelle.org',
	siteId: 2,
	trackErrors: true
});

ReactPiwik.push(['enableHeartBeatTimer'])
ReactPiwik.push(['trackPageView'])

function App() {
  return (
    <Router history={matomo.connectToHistory(customHistory)}>
      <div>
        <Loading/>
		<Switch>
			<Route path="/" exact component={fr} />
			<Route path="/fr/" component={fr} />
			<Route path="/en/" component={en} />
			<Route path="/contact/" component={() => { window.location = 'https://contact.princelle.org'; return null; }} />
			<Redirect to="/" />
		</Switch>
      </div>
    </Router>
  );
}

export default App;
