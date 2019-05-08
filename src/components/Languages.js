import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
	  let resumeData = this.props.resumeData;
	  let elements = this.props.elements;

    return (
      <section id="languages" className="resume">

        <div className="row skill">

            <div className="three columns header-col">
               <h1><span>{elements.titles[5].name}</span></h1>
            </div>

				<div className="nine columns">
					
				<p>
               {resumeData.langagesDesc}
					</p>

					<div className="langage-table">
					
          {
            resumeData.langages && resumeData.langages.map((item, index) => {
              return(
                <div key={index} className="langage-item portfolio-item" style={{padding: "15px"}}>
                  <div className="item-wrap">
                    
                      <img src={process.env.PUBLIC_URL + item.icon} alt="Portfolio Media" className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
							<h5>{item.name}</h5>
							{
								item.desc && (<p>{item.desc}</p>)
							}
							{
								item.link && (<a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkTitle}</a>)
							}
                        </div>
                      </div>
                    
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
