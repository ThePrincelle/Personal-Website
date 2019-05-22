import React, { Component } from 'react';
import FormContact from './FormContact';

export default class Contact extends Component {
  render() {
	  let resumeData = this.props.resumeData;
	  let elements = this.props.elements;
	  
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
					<h1>{elements.titles[7].name}</h1>
					<h2 style={{color:"#FFF" }}>{resumeData.contactDesc}</h2>
            </div>
          </div>
          <div className="row to-contact">
        
		<FormContact resumeData={resumeData}/>
				
		<div className="contact-info-container">
              	<div className="contact-info">
						<h3 style={{ color: "#FFF" }}>{resumeData.contactWhere}</h3>
					<a style={{color: "#D3D3D3"}} href={resumeData.adressGMAPS} target="_blank" rel="noopener noreferrer">{
					resumeData.adress.map(item => {
						return (
							<p key={item} style={{marginTop: "0.5rem", marginBottom: "0.5rem", textAlign: "justify" }}>{item}</p>
							)
						}
					)
					}
					</a>
				</div>
					
				<div className="contact-info">
					<h3 style={{ color:"#FFF" }}>{resumeData.contactOther}</h3>
						<p style={{marginTop: "0.5rem", marginBottom: "0.5rem", color: "#D3D3D3" }}>{resumeData.mail}</p>
						<a style={{ color: "#D3D3D3" }} href={resumeData.phoneLink} target="_blank" rel="noopener noreferrer">{resumeData.phone}</a>
				</div>
					
				<div className="contact-info">	
					<a className="button_cv w3-large" href={process.env.PUBLIC_URL + resumeData.cvPDF_File} target="_blank" rel="noopener noreferrer">{resumeData.cvPDF_Msg}</a>
				</div>
				

			</div>



			</div>

		
				
        </section>
        );
  }
}
