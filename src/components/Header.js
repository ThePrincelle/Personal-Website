import React, { Component } from 'react';
export default class Header extends Component {
  render() {
	  let resumeData = this.props.resumeData;
	  let elements = this.props.elements;

    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#nav-hide" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
				<li className="current"><a className="smoothscroll" href={ elements.titles[0].id }>{ elements.titles[0].name }</a></li>
				<li><a className="smoothscroll" href={ elements.titles[1].id }>{ elements.titles[1].name }</a></li>
				<li><a className="smoothscroll" href={ elements.titles[2].id }>{ elements.titles[2].name }</a></li>
				<li><a className="smoothscroll" href={ elements.titles[3].id }>{ elements.titles[3].name }</a></li>
				<li><a className="smoothscroll" href={ elements.titles[4].id }>{ elements.titles[4].name }</a></li>
				<li><a className="smoothscroll" href={elements.titles[5].id}>{elements.titles[5].name}</a></li>
				<li><a className="smoothscroll" href={elements.titles[6].id}>{elements.titles[6].name}</a></li>
				<li><a className="smoothscroll" href={elements.titles[7].id}>{elements.titles[7].name}</a></li>
            </ul>
         </nav>

         <div className="row banner">
			<div className="banner-text">
						<h2 style={{ color: '#fff', fontFamily: "'opensans-bold', sans-serif"}} className="responsive-headline">{resumeData.welcome}</h2>
				<h1 style={{ color: '#fff', fontFamily: "'opensans-bold', sans-serif" }} className="responsive-headline">{resumeData.name}</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif'}} className="responsive-headline">{resumeData.roleDescription}</h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
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

      </header>
      </React.Fragment>
    );
  }
}
