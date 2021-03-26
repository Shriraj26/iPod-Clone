import React from 'react';
//import ZingTouch from './ZingLib';
//import ZingTouch from '';
import ZingTouch from 'zingtouch';
import ScreenComponent from './ScreenComponent';
import audio from './LoversOfTheSun.mp3';
import audio2 from './SmackThat.mp3';
import audio3 from './lp_InTheEnd.mp3'
import audio4 from './song.mp3';



class IpodControls extends React.Component {
	
	constructor(){
		super()
		this.state = {
			currentAngle: 0,
			homeCurrLink : 0,
			activePage: 'Home',
			ctr:0,
			audio: new Audio(audio),
			currSong: 0,
			playing: true		
		}
	}
	
	componentDidMount = () => {
		
	}

	mouseClickRotate = (event) => {
		
		event.preventDefault();

		var obj = this;

		


		//For Home Page
		if(obj.state.activePage === 'Home' || obj.state.activePage === 'Songs'){
		

			obj.setState({ctr: obj.state.ctr + 1});
			console.log('Called')
			var currAngle = 0;
			
			var target = document.querySelector('#circle');
			var region = new ZingTouch.Region(target);

			if(obj.state.ctr ===1){
				region.bind(target, 'rotate', function(event){
				
					
					//console.log('Distance From Origin - ', event.detail.distanceFromOrigin);
					var measuredAng = event.detail.distanceFromLast;

					if(measuredAng > 0){
						//console.log(currAngle);
						currAngle ++;
						if(currAngle === 15){
							console.log('Increase now');
							currAngle = 0;
							
							if(obj.state.activePage === 'Home'){
								if(obj.state.homeCurrLink < 5){
									obj.setState({
										homeCurrLink: obj.state.homeCurrLink + 1	
									});
	
									if(obj.state.homeCurrLink === 5){
										obj.setState({
											homeCurrLink: 0	
										});
									}
	
								
								}
							}	

							if(obj.state.activePage === 'Songs'){
								if(obj.state.currSong < 4){
									obj.setState({
										currSong: obj.state.currSong + 1	
									});
	
									if(obj.state.currSong === 4){
										obj.setState({
											currSong: 0	
										});
									}
	
								
								}
							}	
							
						}
					}else{
						//console.log(currAngle);
						currAngle ++;
						if(currAngle === 15){
							console.log('Decrease now');
							currAngle = 0;

							if(obj.state.activePage === 'Home'){
								if(obj.state.homeCurrLink >= 0){
									obj.setState({
										homeCurrLink: obj.state.homeCurrLink - 1	
									});
	
									
	
									if(obj.state.homeCurrLink === -1){
										obj.setState({
											homeCurrLink: 4	
										});
									}
								}	
							}

							if(obj.state.activePage === 'Songs'){
								if(obj.state.currSong >= 0){
									obj.setState({
										currSong: obj.state.currSong - 1	
									});
	
									
	
									if(obj.state.currSong === -1){
										obj.setState({
											currSong: 3	
										});
									}
								}
							}
							
						}	
						

					}
						
					
				});
			}
		}	

	}

	
	songPlayPause = () => {
		const obj = this;
		

		if(obj.state.activePage === 'Music' /*|| obj.state.activePage === 'Songs'*/){
			
			
			
			console.log(obj.state.playing);
			if(obj.state.playing){
				//const song = document.querySelector('#song');
				obj.state.playing = false;
				console.log(obj.state.playing);
				
				//setInterval(this.updateProgressBar, 500);

				//console.log(song);
				obj.state.audio.play();
				
			}else{
				//clearInterval(this.updateProgressBar);
				obj.state.audio.pause();
				obj.state.playing = true;
				

			}
			
		}
	}

	nextSong = () => {
		const obj = this;
		if(obj.state.activePage === 'Music'){
			obj.state.audio.pause();
			
			obj.setState({
				audio: new Audio(audio),
				playing :true
			});
		}	
	}
	middleButtonClick = (event) =>   {

		event.preventDefault();
		
		const obj = this;
		
		
		console.log(obj.state);
		
		if(obj.state.activePage==='Home'){
			if(obj.state.homeCurrLink===0){
				console.log('hrererer');
				obj.setState({
					activePage: 'Home'
				})
	
				
			}else if(obj.state.homeCurrLink===1){
				console.log('hrererer');
				obj.setState({
					activePage: 'Music'
				})
	
				
			}else if(obj.state.homeCurrLink===2){
				// console.log('hrererer');
				obj.setState({
					activePage: 'Games'
				})
	
				
			}else if(obj.state.homeCurrLink===3){
				// console.log('hrererer');
				obj.setState({
					activePage: 'Songs'
				})
	
				
			}else if(obj.state.homeCurrLink===4){
				// console.log('hrererer');
				obj.setState({
					activePage: 'About'
				})
	
				
			}
			console.log(obj.state);
		
		}else if(obj.state.activePage==='Songs'){
			console.log(obj.state.currSong);

			if(obj.state.currSong === 0){
				obj.setState({
					audio: new Audio(audio),
					activePage: 'Music'
				});
				//this.songPlayPause();
				
			}else if(obj.state.currSong === 1){
				obj.setState({
					audio: new Audio(audio2),
					activePage: 'Music'
				});
				this.songPlayPause();
			}else if(obj.state.currSong === 2){
				obj.setState({
					audio: new Audio(audio3),
					activePage: 'Music'
				});
				this.songPlayPause();
			}else if(obj.state.currSong === 3){
				obj.setState({
					audio: new Audio(audio4),
					activePage: 'Music'
				});
				this.songPlayPause();
			}
			
		}

		
	}

	homeClick = (event) => {

		event.preventDefault();

		const obj = this;

		console.log(obj.state.activePage);

		if(obj.state.activePage !== 'Home'){
			obj.setState({
				currentAngle: 0,
				homeCurrLink : 0,
				activePage: 'Home',
				ctr:obj.state.ctr * 4
			});
		}
	}

	render(){
		return (
			
			<div id="main" style= {styles.main}>

				<ScreenComponent
					homeCurrLink={this.state.homeCurrLink}
					activePage= {this.state.activePage}
					audio= {this.state.audio}
					currSong= {this.state.currSong}
				/>

				<div id="circle" 
					className="circle abc" 
					onMouseOver={this.mouseClickRotate} 
					style={styles.circleStyle} 
				>

					<div id="up" style={styles.up} onClick={this.homeClick}>
						<p style={{fontWeight: 'bold', fontSize: 25}}>HOME</p>
					</div>
					<div id="down" style={styles.down} onClick={this.songPlayPause}>
						<div>
							<i className="fas fa-play iconSize" style={styles.iconSize}></i>
							<i className="fas fa-pause iconSize" style={styles.iconSize}></i>
						</div>
						
					</div>
					<div id="left" style={styles.left}>
						<i className="fas fa-backward iconSize" style={styles.iconSize}></i>
					</div>
					<div id="right" style={styles.right} onClick={this.nextSong}>
						
						<i className="fas fa-forward iconSize" style={styles.iconSize}></i>
					</div>
					<div className="middle" id="middle" style={styles.middle} onClick={this.middleButtonClick}>

					</div>
				</div>
				
			</div>
			
		  );
	}

	

	
	
}

const styles = {
	main:{
		backgroundColor: '##3f0d12',
		backgroundImage: 'linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)',
		height: 600,
		width: 350,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		border: '2px solid black',
		borderRadius: 12,
		paddingBottom: 10,
		webkitBoxReflect: 'below 5px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent) , to(rgba(250, 250, 250, 0.1)))'
	},
	
	circleStyle:{
		height: 280,
		width: 280,
		backgroundColor: 'white',
		position:'relative',
		borderRadius: '50%',
		border: '1px solid black'
	},
	
	up:{
		marginTop: 10,
		position: 'absolute',
		left: '50%',
		transform: 'translateX(-50%)',
		fontSize: 20,
		color: '#9F1B2E',
		cursor: 'pointer'
	},
	
	down:{
		
		position: 'absolute',
		left: '50%',
		transform: 'translateX(-50%)',
		bottom: '0',
		marginBottom: 15,
		color: '#9F1B2E',
		cursor: 'pointer'
	},
	
	left:{
		marginLeft: 15,
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		color: '#9F1B2E',
	},
	
	right:{
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		right: 0,
		marginRight: 15,
		color: '#9F1B2E',
	},

	middle:{
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		height: 120,
		width: 120,
		backgroundColor: 'lightgrey',
		backgroundColor: '#3f0d12',
		backgroundImage: 'linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)',
		borderRadius: '50%',
		border: '1px solid black'
	},

	iconSize:{
		fontSize: 25,
	},
	ul:{
		listStyleType: 'none',
		
	},
	li:{
		
	},
	liHover:{
		backgroundColor: 'blue'
	}

}


export default IpodControls;
