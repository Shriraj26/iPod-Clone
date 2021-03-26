import React from 'react';
import ls from "./Loversonthesun.jpg";
import sm from "./smackthat.jpg";
import int from "./lpInTheEnd.jpg";
import aws from "./awesomeImage.jpg";

class About extends React.Component{

	render(){
		const props = this.props;
		
		return(
			<div style={{height: '100%'}}>
				<h1 style={styles.headStyle}>Songs</h1>
				<ul style={styles.ul}>

					
					<li style={ props.currSong === 0 ? (styles.liHover):({})}>
						<div style={styles.imgDiv}>
							<img alt="Lovers On The Sun" src={ls} style={styles.imgStyle}/>
							<p style={styles.fontP}>Lovers On The Sun </p>
							
						</div>	
						
					</li>
					
					<li style={ props.currSong === 1 ? (styles.liHover):({})}>
						<div style={styles.imgDiv}>
							<img alt="Smack That" src={sm} style={styles.imgStyle}/>	
							<p style={styles.fontP}>Smack That</p>
						</div>
						
					</li>
					<li style={ props.currSong === 2 ? (styles.liHover):({})}>
						<div style={styles.imgDiv}>
							<img alt="Linkin Park - In The End" src={int} style={styles.imgStyle}/>	
							<p style={styles.fontP}>Linkin Park - In the End</p>
						</div>
						
					</li>					
					<li style={ props.currSong === 3 ? (styles.liHover):({})}>
						<div style={styles.imgDiv}>
							<img alt="Awesome Songs" src={aws} style={styles.imgStyle}/>	
							<p style={styles.fontP}>Awesome Song</p>
						</div>
					</li>
				</ul>
			</div>
		);
	}

}

const styles = {
	headStyle : {
		marginLeft: 5,
	},
	ul:{
		listStyleType: 'none',
		paddingTop: 5
	},
	imgStyle:{
		height: 50,
		width: 50
	},
	imgDiv:{
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 2,
		paddingLeft: 5
	},
	liHover:{
		backgroundColor: '#7AF7CD'
	},
	fontP:{
		fontSize: 20,
		marginLeft: 10
	}

}

export default About;