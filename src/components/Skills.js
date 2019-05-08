import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
	  let resumeData = this.props.resumeData;
	  let elements = this.props.elements;

    return (
      <section id="skills" className="resume">

        <div className="row skills">

            <div className="three columns header-col">
               <h1><span>{elements.titles[4].name}</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
					</p>
					
                {
                  resumeData.skills && resumeData.skills.map((item, index) => {
					  return (
						<div key={index} className="post-container">                
							{
								item.icon && (<div className="post-thumb"><img src={process.env.PUBLIC_URL + item.icon} alt="Skills Media"></img></div>)
							}	
							<div className="post-content">
								<h3 className="post-title">{item.name}</h3>
									{
										item.type && (<p style={{ marginTop: "0.2rem", marginBottom: "0.2rem", textAlign: "justify" }}><b>{item.type}</b></p>)
									}
									{
										item.link && (<a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkText}</a>)
									}
							  		{
										item.text && item.text.map((item, index) => {
											return (
												<p key={index} style={{ marginTop: "0.2rem", marginBottom: "0.2rem", textAlign: "justify" }}>{item}</p>
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
