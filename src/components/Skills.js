import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
	  let resumeData = this.props.resumeData;
	  let elements = this.props.elements;

    return (
      <section id="skills" class="resume">

        <div className="row skills">

            <div className="three columns header-col">
               <h1><span>{elements.titles[4].name}</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
					</p>
					
                {
                  resumeData.skills && resumeData.skills.map((item) => {
					  return (
						<div class="post-container">                
							{
								item.icon && (<div class="post-thumb"><img src={process.env.PUBLIC_URL + item.icon} alt="Skills Media"></img></div>)
							}	
							<div class="post-content">
								<h3 class="post-title">{item.name}</h3>
									{
										item.type && (<p style={{ marginTop: "0.2rem", marginBottom: "0.2rem", textAlign: "justify" }}><b>{item.type}</b></p>)
									}
									{
										item.link && (<a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkText}</a>)
									}
							  		{
										item.text && item.text.map(item => {
											return (
												<p style={{ marginTop: "0.2rem", marginBottom: "0.2rem", textAlign: "justify" }}>{item}</p>
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

      </section>
    );
  }
}
