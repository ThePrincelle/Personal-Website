import React, { Component } from 'react';
export default class Projects extends Component {
  render() {
	  let resumeData = this.props.resumeData;

    return (
      <section id="projects" class="portfolio">
      <div className="projects-page">
        <div>
					<h1>{resumeData.projectTitle}</h1>
          <div className="project-wrapper">
          {
                  resumeData.projects && resumeData.projects.map((item) => {
					  return (
						<div class="project-container">                
							{
								item.imgurl && (<div class="project-thumb"><img src={process.env.PUBLIC_URL + item.imgurl} alt="Skills Media"></img></div>)
							}	
							<div class="project-content">
								<h3 class="project-title">{item.name}</h3>
								  <p style={{ marginBottom: "1rem", textAlign: "justify" }}>{item.date} • {item.desc}</p>
								 	<div class="tag-container">
								  {
									  item.tags && (item.tags.map(tag => {
										  if (tag[1] === "")
											  return (<span key={tag[0]} class="tag"><span class="w3-tag w3-blue">{tag[0]}</span></span>)
              
										  return (<span class="tag"><a href={tag[1]} class="w3-tag w3-blue" target="_blank" rel="noopener noreferrer">{tag[0]}</a></span>)
									  }))
									  }
									  </div> 
								  <hr/>
								  <div class="button_links_container">
									{
										item.link && (<><a class="button_links" href={item.link} target="_blank" rel="noopener noreferrer">{item.linkText}</a></>)
								  }
								  {
										item.git && (<><a class="button_links link_git" href={item.git} target="_blank" rel="noopener noreferrer">{item.gitText}</a></>)
									  }
									  </div>
								  <hr/>
							  		{
										item.text && item.text.map(item => {
											return (
												<p style={{ marginTop: "0.5rem", marginBottom: "0.5rem", textAlign: "justify" }}>{item}</p>
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
