import React from 'react';
import home from './home.svg';
import songs from './songs.svg';
import music from './music.svg';
import games from './games.svg';
import about from './info.svg';
import homeWall from './g1.jpg';

class Home extends React.Component{

	render(){
		const props = this.props;
		
		return(
			
			<div style={styles.maindiv}>

			
				<div style={styles.homeDiv}>
					{/* */}
					<h2 style={styles.headingFont}>Ipod.JS</h2>
					<ul className="ListClass" style={styles.ul}>
						
						<li id="0" style={ props.homeCurrLink === 0 ? (styles.liHover):((this.props.style)) }>
							<div style={styles.divFlex}>
								<img alt="Home" src={home} style={styles.img}/>	
								<p style={styles.font}>Home</p>
							</div>
						</li>
						<li id="1" style={ props.homeCurrLink === 1 ? (styles.liHover):((this.props.style)) }>
							<div style={styles.divFlex}>
								<img alt="Music" src={songs} style={styles.img}/>	
								<p style={styles.font}>Music</p>
							</div>
						</li>
						<li id="3" style={ props.homeCurrLink === 2 ?  (styles.liHover):(this.props.style)}>
							<div style={styles.divFlex}>
								<img alt="Games" src={games} style={styles.img}/>	
								<p style={styles.font}>Games</p>
							</div>
						</li>

						<li id="2" style={ props.homeCurrLink === 3 ?  (styles.liHover):(this.props.style)}>
							<div style={styles.divFlex}>
								<img alt="Songs" src={music} style={styles.img}/>	
								<p style={styles.font}>Songs</p>
							</div>
						</li>
						
						<li id="4" style={ props.homeCurrLink === 4 ?  (styles.liHover):(this.props.style)}>
							<div style={styles.divFlex}>
								<img alt="About" src={about} style={styles.img}/>	
								<p style={styles.font}>About</p>
							</div>
						</li>
					</ul>
				</div>

				<div style={styles.imgDiv}></div>
			</div>
		);
	};

	
}

const styles = {
	maindiv:{
		display:'flex',
		flexDirection: 'row',
		height: '100%'
	},
	homeDiv:{
		width: '50%'
	},
	imgDiv:{
		width: '50%',
		backgroundImage: `url(${homeWall})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	},
	
	ul:{
		listStyleType: 'none',
	},
	
	liHover:{
		backgroundColor: '#87ceeb'
	},
	img: {
		height: 30,
		width: 30
	},
	divFlex:{
		display: 'flex',
		flexDirection: 'row',
		padding: 6
	},
	font:{
		fontSize: 20,
		marginLeft: 10
	},
	
	headingFont: {
		marginLeft: 5
	}
}



export default Home;