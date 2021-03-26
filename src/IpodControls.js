import React from 'react';
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
			playing: true,
			songMapping: [audio, audio2, audio3, audio4],
			songNames:['Lovers Of The Sun', 'Smack That - Akon', 'In the End - Linkin Park', 'Awesome Song']		
		}
	}
	
	mouseClickRotate = (event) => {
		
		event.preventDefault();

		var obj = this;
		
		if(obj.state.activePage === 'Home' || obj.state.activePage === 'Songs'){
		

			obj.setState({ctr: obj.state.ctr + 1});
			
			var currAngle = 0;
			
			var target = document.querySelector('#circle');
			var region = new ZingTouch.Region(target);

			if(obj.state.ctr ===1){
				region.bind(target, 'rotate', function(event){
				
					
					
					var measuredAng = event.detail.distanceFromLast;

					if(measuredAng > 0){
						
						currAngle ++;
						if(currAngle === 15){
							//console.log('Increase now');
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
						
						currAngle ++;
						if(currAngle === 15){
							//console.log('Decrease now');
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
		

		if(obj.state.activePage === 'Music'){
			
			
			
			console.log('Music playing or not - ',obj.state.playing);
			if(obj.state.playing){
				
				obj.state.playing = false;
				obj.state.audio.play();
				
			}else{
				
				obj.state.audio.pause();
				obj.state.playing = true;
			}
			
		}
	}

	nextSong = () => {
		const obj = this;
		console.log(obj.state);

		if(obj.state.playing === false){
				
			obj.state.audio.pause();
			obj.state.audio = '';
			obj.state.playing = true;
		}

		if(obj.state.activePage === 'Music'){
			let setSong;

			if(obj.state.currSong < 4){
				if(obj.state.currSong === 3){
					setSong = 0
					obj.setState({
						currSong: setSong,
						audio: new Audio(obj.state.songMapping[setSong]),
					});	
				}else{
					setSong = obj.state.currSong + 1;
					obj.setState({
						currSong: setSong,
						audio: new Audio(obj.state.songMapping[setSong]),
						
					});
				}
			}
		}	
	}

	prevSong = () => {
		const obj = this;
		if(obj.state.activePage === 'Music'){
			let setSong;

			if(obj.state.currSong > -1){
				if(obj.state.currSong === 0){
					setSong = 3
					obj.setState({
						currSong: setSong,
						audio: new Audio(obj.state.songMapping[setSong]),
					});	
				}else{
					setSong = obj.state.currSong - 1;
					obj.setState({
						currSong: setSong,
						audio: new Audio(obj.state.songMapping[setSong]),
						
					});
				}
			}
		}	
	}

	middleButtonClick = (event) =>   {

		event.preventDefault();
		
		const obj = this;
		
		
		
		if(obj.state.activePage==='Home'){
			if(obj.state.homeCurrLink===0){
		
				obj.setState({
					activePage: 'Home'
				})
	
				
			}else if(obj.state.homeCurrLink===1){
				
				obj.setState({
					activePage: 'Music'
				})
	
				
			}else if(obj.state.homeCurrLink===2){
				
				obj.setState({
					activePage: 'Games'
				})
	
				
			}else if(obj.state.homeCurrLink===3){
				
				obj.setState({
					activePage: 'Songs'
				})
	
				
			}else if(obj.state.homeCurrLink===4){
				
				obj.setState({
					activePage: 'About'
				})
	
				
			}
			
		
		}else if(obj.state.activePage==='Songs'){
			

			if(obj.state.currSong === 0){
				obj.setState({
					audio: new Audio(audio),
					activePage: 'Music'
				});
				
				
			}else if(obj.state.currSong === 1){
				obj.setState({
					audio: new Audio(audio2),
					activePage: 'Music'
				});
				
			}else if(obj.state.currSong === 2){
				obj.setState({
					audio: new Audio(audio3),
					activePage: 'Music'
				});
				
			}else if(obj.state.currSong === 3){
				obj.setState({
					audio: new Audio(audio4),
					activePage: 'Music'
				});
				
			}
			
		}

		
	}

	homeClick = (event) => {

		event.preventDefault();

		const obj = this;

		

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
					playing= {this.state.playing}
					songNames={this.state.songNames}
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
					<div id="left" style={styles.left} onClick={this.prevSong}>
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
		backgroundColor: '#3f0d12',
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
		border: '1px solid black',
		cursor: 'pointer',
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
		cursor: 'pointer',
	},
	
	right:{
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		right: 0,
		marginRight: 15,
		color: '#9F1B2E',
		cursor: 'pointer',
	},

	middle:{
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		height: 120,
		width: 120,
		backgroundColor: '#3f0d12',
		backgroundImage: 'linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)',
		borderRadius: '50%',
		border: '1px solid black',
		cursor: 'pointer',
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
