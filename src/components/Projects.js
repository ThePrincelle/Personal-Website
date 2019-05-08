import React, { Component } from 'react';
export default class Projects extends Component {
  render() {
	  let resumeData = this.props.resumeData;

    return (
      <section id="projects" className="portfolio">
      <div className="projects-page">
        <div>
					<h1>{resumeData.projectTitle}</h1>
          <div className="project-wrapper">
          {
                  resumeData.projects && resumeData.projects.map((item, index) => {
					  return (
						<div key={index} className="project-container">                
							{
								item.imgurl && (<div className="project-thumb"><img src={process.env.PUBLIC_URL + item.imgurl} alt="Skills Media"></img></div>)
							}	
							<div className="project-content">
								<h3 className="project-title">{item.name}</h3>
								  <p style={{ marginBottom: "1rem", textAlign: "justify" }}>{item.date} • {item.desc}</p>
								 	<div className="tag-container">
								  {
									  item.tags && (item.tags.map((tag, index) => {
										  if (tag[1] === "")
											  return (<span key={index} className="tag"><span className="w3-tag w3-blue">{tag[0]}</span></span>)
              
										  return (<span key={index} className="tag"><a href={tag[1]} className="w3-tag w3-blue" target="_blank" rel="noopener noreferrer">{tag[0]}</a></span>)
									  }))
									  }
									  </div> 
								  <hr/>
								  <div className="button_links_container">
									{
										item.link && (<><a className="button_links" href={item.link} target="_blank" rel="noopener noreferrer">{item.linkText}</a></>)
								  }
								  {
										item.git && (<><a className="button_links link_git" href={item.git} target="_blank" rel="noopener noreferrer">{item.gitText}</a></>)
									  }
									  </div>
								  <hr/>
							  		{
										item.text && item.text.map((item, index) => {
											return (
												<p key={index} style={{ marginTop: "0.5rem", marginBottom: "0.5rem", textAlign: "justify" }}>{item}</p>
												)
											}
										)
								  }
								  
							</div>
						</div>
                    )
                  })
                }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
