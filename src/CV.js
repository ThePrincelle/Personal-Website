import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Work from './components/Work';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class CV extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			btnLangMenu: false,
			langMenu: false,
			langMenuFocus: false
		};
	}

	handleFocusLang(focus) {
		this.setState({
			langMenuFocus: focus,
			btnLangMenu: focus
		})
	}

	async handleLangBtn() {
		var menu;
		if (this.state.langMenu) {
			menu = false;
		} else {
			menu = true;
		}
		await this.setState({
			langMenu: menu,
			btnLangMenu: menu
		})
		await this.timeoutLangMenu()
	}

	async timeoutLangMenu() {
		if (this.state.langMenu) {
			setTimeout(() => {
				if (this.state.langMenuFocus) {
					this.timeoutLangMenu()
				} else {
					this.setState({
						langMenu: false,
						btnLangMenu: false
					})
				}
			}, 3500);
		}
	}
	
	render() {
	  
		let resumeData = this.props.resumeData;
		let elements = this.props.elements;

    return (
      <div className="App">
		<Header resumeData={resumeData} elements={elements}/>
        <About resumeData={resumeData} elements={elements}/>
		<Resume resumeData={resumeData} elements={elements} />
		<Work resumeData={resumeData} elements={elements}/>
		<Skills resumeData={resumeData} elements={elements} />
		<Languages resumeData={resumeData} elements={elements}/>
        <Projects resumeData={resumeData} elements={elements}/>
        <Contact resumeData={resumeData} elements={elements}/>
        <Footer resumeData={resumeData} elements={elements}/>
		
			<Alert stack={{ limit: 3 }} />
			
			<div className="lang-button-container">
				<div className="dropup">
				<button className={this.state.langMenu ? 'dropbtn dropbtn-zoom' : 'dropbtn'} onClick={() => this.handleLangBtn()}>{resumeData.changeLang}</button>
					<div className={this.state.langMenu ? 'dropup-content langDisp' : 'dropup-content'} onMouseOver={() => this.handleFocusLang(true)} onMouseLeave={() => this.handleFocusLang(false)}>
						{
							resumeData.langs.map(lang => {
								return (<a key={lang[1]} href={lang[0]}>{lang[1]}</a>)
							})
						}
				</div>
				</div>
			</div>
      </div>
    );
  }
}

export default CV;
