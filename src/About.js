import React from 'react';

class About extends React.Component{

	render(){

		const props = this.props;
		return(
			<div style={props.style}>
				<h1 style={styles.headingFont}>About</h1>

				<ul style={styles.ul}>
					<li>
						<p>
							<b>Device Name:</b> Ipod.JS
						</p>
					</li>
					<li>
						<p>
							<b>OS:</b> ReactJS
						</p>
					</li>
					<li>
						<p>
							<b>Version:</b> 1.0.0.1
						</p>
					</li>
					<li>
						<p>
							<b>Manufacturer:</b> Shriraj Jahagirdar
						</p>
					</li>
					<li>
						<p>
							<b>RAM:</b> 4GB
						</p>
					</li>
					<li>
						<p>
							<b>Internal Storage:</b> 200 MB
						</p>
					</li>
					<li>
						<p>
							<b>Resolution:</b> 280 X 280
						</p>
					</li>
					<li>
						<p>
							<b>Processor:</b> Snapdragon 1000
						</p>
					</li>
				</ul>
			</div>

			
		);
	}

}

const styles = {

	headingFont:{
		marginLeft: 5
	},
	ul:{
		listStyleType: 'none',
		marginLeft: 5,
		marginTop: 10
	}

}

export default About;