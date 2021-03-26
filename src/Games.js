import React from 'react';
import gta from './gta.gif';

class Games extends React.Component{

	render(){

		return(
			<div style={styles.div}>
				<img src={gta} style={styles.imgStyle} alt="Funny Game GIF"/>
			</div>

			
		);
	}

}

const styles = {

	div:{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#111111',
		height: '100%'
	},

	imgStyle:{
		backgroundSize: 'contain',
		maxHeight: '100%',
		maxWidth: '100%'
	}

}

export default Games;