import React, { Component } from 'react';
import Typed from 'react-typed';

export default class Header extends Component {
  render() {
	  let resumeData = this.props.resumeData;
	  let elements = this.props.elements;
	  let visibleHeader = this.props.visibleHeader;

	  let lang = resumeData.lang;
	  let colorNavBar = this.props.colorNavBar;

	  let HomeColor = this.props.HomeColor;
	  let ResumeColor = this.props.ResumeColor;
	  let SkillsColor = this.props.SkillsColor;
	  let LanguagesColor = this.props.LanguagesColor;
	  let ProjectsColor = this.props.ProjectsColor;
	  let ContactColor = this.props.ContactColor;
	  let AwardsColor = this.props.AwardsColor;

	  function menu() {
			return (<nav id="nav-wrap" style={{ backgroundColor: colorNavBar }}>
						<a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
					<a className="mobile-btn" href="#nav-hide" title="Hide navigation">Hide navigation</a>
						<ul id="nav" className="nav">
							<li>
								<a style={{ color: HomeColor }} href={"/" + lang}>{elements.titles[0].name}</a>
							</li>
							<li>
								<a style={{ color: ResumeColor }} href={"/" + lang + "/resume"}>{elements.titles[2].name + " & " + elements.titles[3].name}</a>
							</li>
							<li>
								<a style={{ color: SkillsColor }} href={"/" + lang + "/skills"}>{elements.titles[4].name}</a>
							</li>
							<li>
								<a style={{ color: LanguagesColor }} href={"/" + lang + "/languages"}>{elements.titles[5].name}</a>
							</li>
							<li>
								<a style={{ color: ProjectsColor }} href={"/" + lang + "/projects"}>{elements.titles[6].name}</a>
							</li>
							<li>
								<a style={{ color: AwardsColor }} href={"/" + lang + "/awards"}>{elements.titles[7].name}</a>
							</li>
							<li>
								<a style={{ color: ContactColor }} href={"/" + lang + "/contact"}>{elements.titles[8].name}</a>
							</li>
						</ul>
					</nav>)
	  }

    return (
		<React.Fragment>
      
		{visibleHeader &&
				
			<header id="home">
         
				{menu()}
				
				<div className="row banner">
					<div className="banner-text">
						<h2 style={{ color: '#fff', fontFamily: "'opensans-bold', sans-serif" }} className="responsive-headline">{resumeData.welcome}</h2>
						<h1 style={{ color: '#fff', fontFamily: "'opensans-bold', sans-serif" }} className="responsive-headline">{resumeData.name}</h1>
						
						<h3 style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: "19px" }} className="responsive-headline">
							<Typed 
								strings={resumeData.roleDescription} 
								typeSpeed={50} 
								backSpeed={50}
								loop={true}
							/>
						</h3>
						
						<hr />
						<ul className="social">
							{
								resumeData.socialLinks && resumeData.socialLinks.map(item => {
									return (
										<li key={item.name}>
											<a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
										</li>
									)
								}
								)
							}
						</ul>
					</div>
				</div>

			<p className="scrolldown">
				<a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
			</p>

			</header>}
			
		{!visibleHeader && <div>
         	{
         		menu()
         	}
			</div>}

		
			
      </React.Fragment>
    );
  }
}
