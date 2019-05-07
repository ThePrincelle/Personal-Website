import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import {
	Preloader,
	Placeholder
} from 'react-preloading-screen';

class Loading extends Component {
	
	render() {	  
    return (
		<Preloader style={{backgroundColor: "#2F2D2E"}} className="loader-container">
			<Placeholder>
				<h1 style={{ color: "#FFF", padding: "0px", paddingBottom: ".5rem"}}>Maxime Princelle</h1>
					<Loader
						type="RevolvingDot"
						color = "#FFF"
						height = "60"
						width="60"
					/>
			</Placeholder>
		</Preloader>
    );
  }
}

export default Loading;







