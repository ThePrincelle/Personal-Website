import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
	  let resumeData = this.props.resumeData;
	  let elements = this.props.elements;

    return (
      <section id="resume" className="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>{elements.titles[2].name}</span></h1>
				</div>

				<div className="nine columns main-col">
					
					<div>
					{
						resumeData.eduDesc && resumeData.eduDesc.map((item, index) => {
							return (
								<p key={index} style={{ marginTop: "1.2rem", marginBottom: "0.2rem", textAlign: "justify" }}>{item}</p>
								)
							}
						)
						}
						</div>
					<hr></hr>
              {
                resumeData.education && resumeData.education.map((item, index)=>{
                  return(
					  <div key={index} style={{paddingBottom: "4rem"}} className="row item">
                       <div className="twelve columns">
                          <h3>{item.name}</h3>
                          <p className="info">
								  <a href={item.locLink} target="_blank" rel="noopener noreferrer">{item.loc}</a>
								  <span>&bull;</span> <em className="date">{item.date}</em>
							  </p>
                          {
							  item.desc && item.desc.map((item, index) => {
								  return (
									  <p key={index} style={{ marginTop: "0.2rem", marginBottom: "0.2rem", textAlign: "justify" }}>{item}</p>
									  )
									}
									)
								}
								<a href={item.link} target="_blank" rel="noopener noreferrer">{resumeData.learnmore}</a>
							  
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
