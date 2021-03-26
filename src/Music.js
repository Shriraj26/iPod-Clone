import React from 'react';
// import ss from './menuSound.wav'
import lsImg from './Loversonthesun.jpg'
import smImg from './smackthat.jpg'
import lpImg from './lpInTheEnd.jpg'

class Music extends React.Component{

	constructor(){
		super();
		this.state = {
			progressBar : '',
			songName: ['Lovers Of The Sun', 'Smack That - Akon', 'In the End - Linkin Park', 'Awesome Song']
		}
	}

	componentDidMount = () => {
		this.state.progressBar = document.querySelector('#progress-bar'); // element where progress bar appears
		setInterval(this.updateProgressBarValue, 500);
	}

	updateProgressBarValue = () => {
		const props = this.props;
		this.state.progressBar.max = props.audio.duration;
		this.state.progressBar.value = props.audio.currentTime;
	}	

	changeProgressBar = () => {
		const progressBar = document.querySelector('#progress-bar');
		//console.log(progressBar);
		this.props.audio.currentTime = progressBar.value;
		this.updateProgressBarValue();
	}

	render(){
		const props = this.props;
		let songImg;
		// console.log(props);
		if(props.currSong === 0){
			songImg = lsImg
		}else if(props.currSong === 1){
			songImg = smImg
		}else if(props.currSong === 2){
			songImg = lpImg
		}else if(props.currSong === 3){
			songImg = "https://images.unsplash.com/photo-1505430111830-b998ef798efa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
		}


		return(
			<div style={props.style} style={styles.div}>
				<audio src="/.menuSound.wav" id="song"></audio>
				{/* <p>jj</p> */}
				<img alt={this.state.songName[props.currSong]} style={styles.imgMusic} src={songImg} id="thumbnail" />
				<p style={styles.pstyle}>{this.state.songName[props.currSong]}</p>
				<input style={styles.input}
					type="range"
					id="progress-bar"
					min="0"
					max=""
					value="0"
					onChange={this.changeProgressBar}
				/>
				
			</div>

			
		);
	}

}

const styles = {
	div:{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#f6fba2',
		backgroundImage: 'linear-gradient(315deg, #f6fba2 0%, #20ded3 74%)',
		height: '100%',
		padding: 10
	},
	imgMusic:{
		height: 200,
		width: 200,
		borderRadius: '10px'
	},
	pstyle:{
		fontSize: 17,
		marginTop: 3,
		fontWeight: 500
	},
	input:{
		marginTop: 5,
		width: 200
	}


}

export default Music;