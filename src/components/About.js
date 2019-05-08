import React, { Component } from 'react';
export default class About extends Component {
  render() {
	  let resumeData = this.props.resumeData;
	  let elements = this.props.elements;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic" src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h1 style={{ color: "#FFF", fontFamily: "'opensans-bold', sans-serif"}}>{elements.titles[1].name}</h1>	
					{
                    resumeData.aboutme && resumeData.aboutme.map((item, index) =>{
						return (
							<p key={index} style={{ marginTop: "0.2rem", marginBottom: "0.2rem", textAlign: "justify", color: "#D3D3D3" }}>{item}</p>
							)
                    	}
                    )
                  }

				  <br/><br/>

					{
                    resumeData.moreme && resumeData.moreme.map((item, index) =>{
                      return(
						  <div key={index}>
							  <span className={item.icon} style={{ color: "#FFF", fontSize: "1.5em", paddingBottom: ".8rem", paddingTop: "1.2rem" }}>
								  <span style={{ paddingLeft: "1.5rem", fontFamily: "'opensans-bold', sans-serif", fontWeight: "normal" }}>{item.name}</span></span>
								<p style={{textAlign: "justify", color: "#D3D3D3"}} >{item.text}</p>
							</div>
						)
                          }
                    )
                  }
                  
            </div>
         </div>
      </section>
    );
  }
}
