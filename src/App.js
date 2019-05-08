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

function fr() {
  return (<CV resumeData={resumeData_fr} elements={elements_fr}/>);
}

function en() {
  return (<CV resumeData={resumeData_en} elements={elements_en}/>);
}

function App() {
  return (
    <Router>
      <div>
        <Loading/>
		<Switch>
			<Route path="/" exact component={fr} />
			<Route path="/fr/" component={fr} />
			<Route path="/en/" component={en} />
			<Route path="/contact/" component={() => { window.location = 'https://contact.princelle.org'; return null; }} />
			<Route path="/contact.php/" component={() => { window.location = 'https://contact.princelle.org'; return null; }} />
			<Route path="/contact.html/" component={() => { window.location = 'https://contact.princelle.org'; return null; }} />
			<Redirect to="/" />
		</Switch>
      </div>
    </Router>
  );
}

export default App;
