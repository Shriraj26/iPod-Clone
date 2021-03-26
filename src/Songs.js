import React from 'react';
import ls from "./Loversonthesun.jpg";
import sm from "./smackthat.jpg";
import int from "./lpInTheEnd.jpg";

class About extends React.Component{

	render(){
		const props = this.props;
		
		return(
			<div>
				<h1>Songs</h1>
				<ul style={styles.ul}>

					
					<li style={styles.li} style={ props.currSong === 0 ? (styles.liHover):((styles.li2))}>
						<div style={styles.imgDiv}>
							<img alt="Lovers On The Sun" src={ls} style={styles.imgStyle}/>
							<p style={styles.fontP}>Lovers On The Sun </p>
							
						</div>	
						
					</li>
					<li style={styles.li} style={ props.currSong === 1 ? (styles.liHover):((styles.li2))}>
						<div style={styles.imgDiv}>
							<img alt="Smack That" src={sm} style={styles.imgStyle}/>	
							<p style={styles.fontP}>Smack That</p>
						</div>
						
					</li>
					<li style={styles.li} style={ props.currSong === 2 ? (styles.liHover):((styles.li2))}>
						<div style={styles.imgDiv}>
							<img alt="Linkin Park - In The End" src={int} style={styles.imgStyle}/>	
							<p style={styles.fontP}>Linkin Park - In the End</p>
						</div>
						
					</li>					
					<li style={styles.li} style={ props.currSong === 3 ? (styles.liHover):((styles.li2))}>
						<div style={styles.imgDiv}>
							<img alt="Awesome Song" src="https://images.unsplash.com/photo-1505430111830-b998ef798efa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" style={styles.imgStyle}/>	
							<p style={styles.fontP}>Awesome Song</p>
						</div>
					</li>
				</ul>
			</div>
		);
	}

}

const styles = {
	ul:{
		listStyleType: 'none',
		paddingLeft: 0,
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
		marginBottom: 2
	},
	li:{
		
		
	},
	li2:{

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