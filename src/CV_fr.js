import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Lang from './components/Lang';
import Languages from './components/Languages';
import Loading from './components/Loading';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Work from './components/Work';

//FR
import resumeData_fr from './lang/fr/resumeData';
import elements_fr from './lang/fr/elements';

export const CV_Holder_fr = ({ match }) => {
	
	return (
		<div>
			<Loading />

			<Switch>
				<Route exact path={`${match.url}/`} component={Home_section}/>
				<Route path={`${match.url}/home`} component={Home_section} />
				<Route path={`${match.url}/resume`} component={Resume_section} />
				<Route path={`${match.url}/languages`} component={Languages_section} />
				<Route path={`${match.url}/projects`} component={Projects_section} />
				<Route path={`${match.url}/skills`} component={Skills_section} />
				<Route path={`${match.url}/contact`} component={Contact_section} />

				<Route exact path={`${match.url}/*`} component={() => <Redirect to="/fr"/>} />
			</Switch>

			<Footer resumeData={resumeData_fr} elements={elements_fr} />
		</div>
  )
};

const Home_section = ({ match }) => (
	<div>
		<Header resumeData={resumeData_fr} elements={elements_fr} visibleHeader={true} HomeColor={"#F06000"} ContactColor={"#FFF"} ProjectsColor={"#FFF"} LanguagesColor={"#FFF"} SkillsColor={"#FFF"} ResumeColor={"#FFF"} />
		<About resumeData={resumeData_fr} elements={elements_fr} />
		<Lang resumeData={resumeData_fr} curr_page={""} />
	</div>
)

const Contact_section = ({ match }) => (
	<div>
		<Header resumeData={resumeData_fr} elements={elements_fr} visibleHeader={false} HomeColor={"#FFF"} ContactColor={"#F06000"} ProjectsColor={"#FFF"} LanguagesColor={"#FFF"} SkillsColor={"#FFF"} ResumeColor={"#FFF"} />
		<Contact resumeData={resumeData_fr} elements={elements_fr} />
		<Lang resumeData={resumeData_fr} curr_page={"contact"} />
	</div>
)

const Projects_section = ({ match }) => (
	<div>
		<Header resumeData={resumeData_fr} elements={elements_fr} visibleHeader={false} colorNavBar={"#333"} HomeColor={"#FFF"} ContactColor={"#FFF"} ProjectsColor={"#F06000"} LanguagesColor={"#FFF"} SkillsColor={"#FFF"} ResumeColor={"#FFF"} />
		<Projects resumeData={resumeData_fr} elements={elements_fr} />
		<Lang resumeData={resumeData_fr} curr_page={"projects"} />
	</div>
)

const Languages_section = ({ match }) => (
	<div>
		<Header resumeData={resumeData_fr} elements={elements_fr} visibleHeader={false} colorNavBar={"#333"} HomeColor={"#FFF"} ContactColor={"#FFF"} ProjectsColor={"#FFF"} LanguagesColor={"#F06000"} SkillsColor={"#FFF"} ResumeColor={"#FFF"} />
		<Languages resumeData={resumeData_fr} elements={elements_fr} />
		<Lang resumeData={resumeData_fr} curr_page={"languages"} />
	</div>
)

const Skills_section = ({ match }) => (
	<div>
		<Header resumeData={resumeData_fr} elements={elements_fr} visibleHeader={false} colorNavBar={"#333"} HomeColor={"#FFF"} ContactColor={"#FFF"} ProjectsColor={"#FFF"} LanguagesColor={"#FFF"} SkillsColor={"#F06000"} ResumeColor={"#FFF"} />
		<Skills resumeData={resumeData_fr} elements={elements_fr} />
		<Lang resumeData={resumeData_fr} curr_page={"skills"} />
	</div>
)

const Resume_section = ({ match }) => (
	<div>
		<Header resumeData={resumeData_fr} elements={elements_fr} visibleHeader={false} colorNavBar={"#333"} HomeColor={"#FFF"} ContactColor={"#FFF"} ProjectsColor={"#FFF"} LanguagesColor={"#FFF"} SkillsColor={"#FFF"} ResumeColor={"#F06000"} />
		<Resume resumeData={resumeData_fr} elements={elements_fr} />
		<Work resumeData={resumeData_fr} elements={elements_fr} />
		<Lang resumeData={resumeData_fr} curr_page={"resume"} />
	</div>
)
