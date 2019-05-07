import React, { Component } from 'react';
import {
	Preloader,
	Placeholder
} from 'react-preloading-screen';

class Loading extends Component {
	
	render() {	  
    return (
		<Preloader style={{backgroundColor: "#2F2D2E"}} className="loader-container">
			<Placeholder>
				<div className="loader-content">
					<h1 style={{ color: "#FFF", margin: "0px", padding: "0px", paddingBottom: "1rem" }}>Maxime Princelle</h1>
						<div class="loading"></div>
				</div>
			</Placeholder>
		</Preloader>
    );
  }
}

export default Loading;







