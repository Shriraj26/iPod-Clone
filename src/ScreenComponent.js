import React from 'react';
import About from './About';
import Home from './Home';
import Music from './Music';
import Songs from './Songs';
import Games from './Games';

class ScreenComponent extends React.Component{

	
	render(){
		const props = this.props;
		const obj = this;
		const date = this.getDate();
		
		
		
		return(
			<div style={styles.mainScreen}>
				<div style= {styles.navbarTop}>
					<div style={styles.displayFlex}>
						<i className="fas fa-wifi" style={styles.wifi}></i>	
						<p style={{marginLeft: 5}} >5G</p>
						<i className="fas fa-signal" style={{marginLeft: 3}}></i>
					</div>
					
					<div style={styles.displayFlex}>
						<p style={{marginRight:'5px'}}>{date}</p>
						<i className="fas fa-battery-three-quarters" style={styles.battery}></i>
					</div>
				</div>

				{props.activePage === 'Home' && <Home homeCurrLink={props.homeCurrLink}/>}
				{props.activePage === 'Music' && <Music 
													audio={props.audio} 
													homeCurrLink={props.homeCurrLink}
													currSong= {props.currSong}
													playing= {props.playing}
													songNames={props.songNames}
												/>}
												
				{props.activePage === 'Songs' && <Songs 
													currSong= {props.currSong} 
													homeCurrLink={props.homeCurrLink}
												/>}
				{props.activePage === 'About' && <About homeCurrLink={props.homeCurrLink}/>}
				{props.activePage === 'Games' && <Games homeCurrLink={props.homeCurrLink}/>}
				
				
			</div>
			);

		
	}	
	
	getDate = () => {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
		today = mm + '/' + dd + '/' + yyyy;
		return today;
	}
	

}

const styles = {
	mainScreen : {
		border: '3px solid black',
		borderRadius: 5,
		backgroundColor: 'white',
		height: 300,
		width: 320,
		marginTop: '10px',
		marginBottom: '10px',
		display: 'flex',
		flexDirection: 'column',
		paddingTop: '0 !important'
	},
	navbarTop:{
		backgroundColor: '#f39f86',
		backgroundImage: 'linear-gradient(315deg, #f5f186 0%, #9dfbc8 74%)',
		marginTop: 0,
		display: 'flex',
		justifyContent: 'space-between',
		paddingLeft: '5px',
		paddingRight: '5px',
		alignItems: 'center'

	},
	displayFlex:{
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'baseline'	
	},
	wifi:{
		color: '#4370FF'
	},
	battery:{
		color: '#2EA44F'
	}
}

export default ScreenComponent;