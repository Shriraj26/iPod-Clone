import React from 'react';
import About from './About';
import Home from './Home';
import Music from './Music';
import Songs from './Songs';
import Games from './Games';
// import About from './About';

class ScreenComponent extends React.Component{

	
	render(){
		const props = this.props;
		const obj = this;
		const date = this.getDate();
		//console.log('Props from the Main page',obj.props);
		//console.log(obj.props.activePage);
		
		
		return(
			<div style={styles.mainScreen}>
				<div style= {styles.navbarTop}>
					<i className="fas fa-wifi"></i>	
					<div style={styles.displayFlex}>
						<p style={{marginRight:'5px'}}>{date}</p>
						<i className="fas fa-battery-three-quarters"></i>
					</div>
				</div>

				{props.activePage === 'Home' && <Home homeCurrLink={obj.props.homeCurrLink}/>}
				{props.activePage === 'Music' && <Music 
													audio={this.props.audio} 
													homeCurrLink={obj.props.homeCurrLink}
													currSong= {this.props.currSong}
												/>}
				{props.activePage === 'Songs' && <Songs 
													currSong= {this.props.currSong} 
													homeCurrLink={obj.props.homeCurrLink}
												/>}
				{props.activePage === 'About' && <About homeCurrLink={obj.props.homeCurrLink}/>}
				{props.activePage === 'Games' && <Games homeCurrLink={obj.props.homeCurrLink}/>}
				
				{/* if(props.activePage === 'Home'){
					<Home homeCurrLink={obj.props.homeCurrLink}/>
				}else if(props.activePage === 'Music'){
					<Music style={styles.mainScreen}/>
				}else if(props.activePage === 'Games'){
					<Games style={styles.mainScreen}/>
				}else if(props.activePage === 'About'){
					<About style={styles.mainScreen}/>
				}else if(props.activePage === 'Songs'){
					<Songs style={styles.mainScreen}/>
				} */}
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
		border: '1px solid black',
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
		// backgroundColor: 'yellow',
		backgroundColor: '#f39f86',
		// backgroundImage: 'linear-gradient(315deg, #f39f86 0%, #f9d976 74%)',
		// backgroundColor: '#f5f186',
		backgroundImage: 'linear-gradient(315deg, #f5f186 0%, #9dfbc8 74%)',

		marginTop: 0,
		display: 'flex',
		justifyContent: 'space-between',
		paddingLeft: '5px',
		paddingRight: '5px',
		alignItems: 'center'

	},
	ul:{
		listStyleType: 'none',

		
	},
	li:{
		
	},
	liHover:{
		backgroundColor: 'blue'
	},
	displayFlex:{
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'baseline'	
	}
}

export default ScreenComponent;