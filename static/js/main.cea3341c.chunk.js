(this["webpackJsonpipod-clone"]=this["webpackJsonpipod-clone"]||[]).push([[0],{14:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var a=i(1),r=i.n(a),n=i(8),s=i.n(n),c=(i(14),i(2)),o=i(3),l=i(5),d=i(4),u=i(6),g=i(9),j=i.n(g),h=i(0),b=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{style:m.divStyle,children:[Object(h.jsx)("h1",{style:m.headingFont,children:"About"}),Object(h.jsxs)("ul",{style:m.ul,children:[Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Device Name:"})," Ipod.JS"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"OS:"})," ReactJS"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Version:"})," 1.0.0.1"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Manufacturer:"})," Shriraj Jahagirdar"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"RAM:"})," 4GB"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Internal Storage:"})," 200 MB"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Resolution:"})," 280 X 280"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Processor:"})," Snapdragon 1000"]})})]})]})}}]),i}(r.a.Component),m={divStyle:{height:"100%"},headingFont:{marginLeft:5},ul:{listStyleType:"none",marginLeft:5,marginTop:10}},p=b,v=i.p+"static/media/home.318214dc.svg",O=i.p+"static/media/songs.ca65cb54.svg",x=i.p+"static/media/music.e3c951a3.svg",y=i.p+"static/media/games.f8d03444.svg",f=i.p+"static/media/info.de844b03.svg",S=i.p+"static/media/g1.f446cefe.jpg",k=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){var e=this.props;return Object(h.jsxs)("div",{style:C.maindiv,children:[Object(h.jsxs)("div",{style:C.homeDiv,children:[Object(h.jsx)("h2",{style:C.headingFont,children:"Ipod.JS"}),Object(h.jsxs)("ul",{className:"ListClass",style:C.ul,children:[Object(h.jsx)("li",{id:"0",style:0===e.homeCurrLink?C.liHover:{},children:Object(h.jsxs)("div",{style:C.divFlex,children:[Object(h.jsx)("img",{alt:"Home",src:v,style:C.img}),Object(h.jsx)("p",{style:C.font,children:"Home"})]})}),Object(h.jsx)("li",{id:"1",style:1===e.homeCurrLink?C.liHover:{},children:Object(h.jsxs)("div",{style:C.divFlex,children:[Object(h.jsx)("img",{alt:"Music",src:O,style:C.img}),Object(h.jsx)("p",{style:C.font,children:"Music"})]})}),Object(h.jsx)("li",{id:"3",style:2===e.homeCurrLink?C.liHover:{},children:Object(h.jsxs)("div",{style:C.divFlex,children:[Object(h.jsx)("img",{alt:"Games",src:y,style:C.img}),Object(h.jsx)("p",{style:C.font,children:"Games"})]})}),Object(h.jsx)("li",{id:"2",style:3===e.homeCurrLink?C.liHover:{},children:Object(h.jsxs)("div",{style:C.divFlex,children:[Object(h.jsx)("img",{alt:"Songs",src:x,style:C.img}),Object(h.jsx)("p",{style:C.font,children:"Songs"})]})}),Object(h.jsx)("li",{id:"4",style:4===e.homeCurrLink?C.liHover:{},children:Object(h.jsxs)("div",{style:C.divFlex,children:[Object(h.jsx)("img",{alt:"About",src:f,style:C.img}),Object(h.jsx)("p",{style:C.font,children:"About"})]})})]})]}),Object(h.jsx)("div",{style:C.imgDiv})]})}}]),i}(r.a.Component),C={maindiv:{display:"flex",flexDirection:"row",height:"100%",borderRadius:5},homeDiv:{width:"50%"},imgDiv:{width:"50%",backgroundImage:"url(".concat(S,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"},ul:{listStyleType:"none"},liHover:{backgroundColor:"#87ceeb"},img:{height:30,width:30},divFlex:{display:"flex",flexDirection:"row",padding:6},font:{fontSize:20,marginLeft:10},headingFont:{marginLeft:5}},L=k,P=i.p+"static/media/Loversonthesun.8da81b0a.jpg",w=i.p+"static/media/smackthat.8ba57521.jpg",M=i.p+"static/media/lpInTheEnd.5cff71b2.jpg",T=i.p+"static/media/awesomeImage.741372d9.jpg",D=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){var e;return Object(c.a)(this,i),(e=t.call(this)).componentDidMount=function(){e.state.progressBar=document.querySelector("#progress-bar"),setInterval(e.updateProgressBarValue,500)},e.updateProgressBarValue=function(){var t=e.props;e.state.progressBar.max=t.audio.duration,e.state.progressBar.value=t.audio.currentTime},e.changeProgressBar=function(){var t=document.querySelector("#progress-bar");e.props.audio.currentTime=t.value,e.updateProgressBarValue()},e.state={progressBar:""},e}return Object(o.a)(i,[{key:"render",value:function(){var e,t=this.props;return 0===t.currSong?e=P:1===t.currSong?e=w:2===t.currSong?e=M:3===t.currSong&&(e=T),Object(h.jsxs)("div",{style:A.div,children:[Object(h.jsx)("audio",{src:"/.menuSound.wav",id:"song"}),Object(h.jsx)("img",{alt:t.songNames[t.currSong],style:A.imgMusic,src:e,id:"thumbnail"}),Object(h.jsx)("p",{style:A.pstyle,children:t.songNames[t.currSong]}),Object(h.jsx)("input",{style:A.input,type:"range",id:"progress-bar",min:"0",max:"",value:"0",onChange:this.changeProgressBar})]})}}]),i}(r.a.Component),A={div:{borderRadius:5,display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#f6fba2",backgroundImage:"linear-gradient(315deg, #f6fba2 0%, #20ded3 74%)",height:"100%",padding:10},imgMusic:{height:200,width:200,borderRadius:"10px"},pstyle:{fontSize:17,marginTop:3,fontWeight:500},input:{marginTop:5,width:200}},F=D,H=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){var e=this.props;return Object(h.jsxs)("div",{style:{height:"100%"},children:[Object(h.jsx)("h1",{style:B.headStyle,children:"Songs"}),Object(h.jsxs)("ul",{style:B.ul,children:[Object(h.jsx)("li",{style:0===e.currSong?B.liHover:{},children:Object(h.jsxs)("div",{style:B.imgDiv,children:[Object(h.jsx)("img",{alt:"Lovers On The Sun",src:P,style:B.imgStyle}),Object(h.jsx)("p",{style:B.fontP,children:"Lovers On The Sun "})]})}),Object(h.jsx)("li",{style:1===e.currSong?B.liHover:{},children:Object(h.jsxs)("div",{style:B.imgDiv,children:[Object(h.jsx)("img",{alt:"Smack That",src:w,style:B.imgStyle}),Object(h.jsx)("p",{style:B.fontP,children:"Smack That"})]})}),Object(h.jsx)("li",{style:2===e.currSong?B.liHover:{},children:Object(h.jsxs)("div",{style:B.imgDiv,children:[Object(h.jsx)("img",{alt:"Linkin Park - In The End",src:M,style:B.imgStyle}),Object(h.jsx)("p",{style:B.fontP,children:"Linkin Park - In the End"})]})}),Object(h.jsx)("li",{style:3===e.currSong?B.liHover:{},children:Object(h.jsxs)("div",{style:B.imgDiv,children:[Object(h.jsx)("img",{alt:"Awesome Songs",src:T,style:B.imgStyle}),Object(h.jsx)("p",{style:B.fontP,children:"Awesome Song"})]})})]})]})}}]),i}(r.a.Component),B={headStyle:{marginLeft:5},ul:{listStyleType:"none",paddingTop:5},imgStyle:{height:50,width:50},imgDiv:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:2,paddingLeft:5},liHover:{backgroundColor:"#7AF7CD"},fontP:{fontSize:20,marginLeft:10}},I=H,N=i.p+"static/media/gta.ed928e8d.gif",R=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(h.jsx)("div",{style:z.div,children:Object(h.jsx)("img",{src:N,style:z.imgStyle,alt:"Funny Game GIF"})})}}]),i}(r.a.Component),z={div:{borderRadius:5,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#111111",height:"100%"},imgStyle:{backgroundSize:"contain",maxHeight:"100%",maxWidth:"100%"}},E=R,G=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(c.a)(this,i);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).getDate=function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),i=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return e=i+"/"+t+"/"+a},e}return Object(o.a)(i,[{key:"render",value:function(){var e=this.props,t=this.getDate();return Object(h.jsxs)("div",{style:J.mainScreen,children:[Object(h.jsxs)("div",{style:J.navbarTop,children:[Object(h.jsxs)("div",{style:J.displayFlex,children:[Object(h.jsx)("i",{className:"fas fa-wifi",style:J.wifi}),Object(h.jsx)("p",{style:{marginLeft:5},children:"5G"}),Object(h.jsx)("i",{className:"fas fa-signal",style:{marginLeft:3}})]}),Object(h.jsxs)("div",{style:J.displayFlex,children:[Object(h.jsx)("p",{style:{marginRight:"5px"},children:t}),Object(h.jsx)("i",{className:"fas fa-battery-three-quarters",style:J.battery})]})]}),"Home"===e.activePage&&Object(h.jsx)(L,{homeCurrLink:e.homeCurrLink}),"Music"===e.activePage&&Object(h.jsx)(F,{audio:e.audio,homeCurrLink:e.homeCurrLink,currSong:e.currSong,playing:e.playing,songNames:e.songNames}),"Songs"===e.activePage&&Object(h.jsx)(I,{currSong:e.currSong,homeCurrLink:e.homeCurrLink}),"About"===e.activePage&&Object(h.jsx)(p,{homeCurrLink:e.homeCurrLink}),"Games"===e.activePage&&Object(h.jsx)(E,{homeCurrLink:e.homeCurrLink})]})}}]),i}(r.a.Component),J={mainScreen:{border:"3px solid black",borderRadius:5,backgroundColor:"white",height:300,width:320,marginTop:"10px",marginBottom:"10px",display:"flex",flexDirection:"column",paddingTop:"0 !important"},navbarTop:{backgroundColor:"#f39f86",backgroundImage:"linear-gradient(315deg, #f5f186 0%, #9dfbc8 74%)",marginTop:0,display:"flex",justifyContent:"space-between",paddingLeft:"5px",paddingRight:"5px",alignItems:"center"},displayFlex:{display:"flex",flexDirection:"row",alignItems:"baseline"},wifi:{color:"#4370FF"},battery:{color:"#2EA44F"}},q=G,V=i.p+"static/media/LoversOfTheSun.3de87a77.mp3",W=i.p+"static/media/SmackThat.a48b6f75.mp3",X=i.p+"static/media/lp_InTheEnd.f600d750.mp3",Y=i.p+"static/media/song.86399a37.mp3",_=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){var e;return Object(c.a)(this,i),(e=t.call(this)).mouseClickRotate=function(t){t.preventDefault();var i=Object(u.a)(e);if("Home"===i.state.activePage||"Songs"===i.state.activePage){i.setState({ctr:i.state.ctr+1});var a=0,r=document.querySelector("#circle"),n=new j.a.Region(r);1===i.state.ctr&&n.bind(r,"rotate",(function(e){e.detail.distanceFromLast>0?15===++a&&(a=0,"Home"===i.state.activePage&&i.state.homeCurrLink<5&&(i.setState({homeCurrLink:i.state.homeCurrLink+1}),5===i.state.homeCurrLink&&i.setState({homeCurrLink:0})),"Songs"===i.state.activePage&&i.state.currSong<4&&(i.setState({currSong:i.state.currSong+1}),4===i.state.currSong&&i.setState({currSong:0}))):15===++a&&(a=0,"Home"===i.state.activePage&&i.state.homeCurrLink>=0&&(i.setState({homeCurrLink:i.state.homeCurrLink-1}),-1===i.state.homeCurrLink&&i.setState({homeCurrLink:4})),"Songs"===i.state.activePage&&i.state.currSong>=0&&(i.setState({currSong:i.state.currSong-1}),-1===i.state.currSong&&i.setState({currSong:3})))}))}},e.songPlayPause=function(){var t=Object(u.a)(e);"Music"===t.state.activePage&&(console.log("Music playing or not - ",t.state.playing),t.state.playing?(t.state.playing=!1,t.state.audio.play()):(t.state.audio.pause(),t.state.playing=!0))},e.nextSong=function(){var t,i=Object(u.a)(e);(console.log(i.state),!1===i.state.playing&&(i.state.audio.pause(),i.state.audio="",i.state.playing=!0),"Music"===i.state.activePage)&&(i.state.currSong<4&&(3===i.state.currSong?(t=0,i.setState({currSong:t,audio:new Audio(i.state.songMapping[t])})):(t=i.state.currSong+1,i.setState({currSong:t,audio:new Audio(i.state.songMapping[t])}))))},e.prevSong=function(){var t,i=Object(u.a)(e);"Music"===i.state.activePage&&(i.state.currSong>-1&&(0===i.state.currSong?(t=3,i.setState({currSong:t,audio:new Audio(i.state.songMapping[t])})):(t=i.state.currSong-1,i.setState({currSong:t,audio:new Audio(i.state.songMapping[t])}))))},e.middleButtonClick=function(t){t.preventDefault();var i=Object(u.a)(e);"Home"===i.state.activePage?0===i.state.homeCurrLink?i.setState({activePage:"Home"}):1===i.state.homeCurrLink?i.setState({activePage:"Music"}):2===i.state.homeCurrLink?i.setState({activePage:"Games"}):3===i.state.homeCurrLink?i.setState({activePage:"Songs"}):4===i.state.homeCurrLink&&i.setState({activePage:"About"}):"Songs"===i.state.activePage&&(0===i.state.currSong?i.setState({audio:new Audio(V),activePage:"Music"}):1===i.state.currSong?i.setState({audio:new Audio(W),activePage:"Music"}):2===i.state.currSong?i.setState({audio:new Audio(X),activePage:"Music"}):3===i.state.currSong&&i.setState({audio:new Audio(Y),activePage:"Music"}))},e.homeClick=function(t){t.preventDefault();var i=Object(u.a)(e);"Home"!==i.state.activePage&&i.setState({currentAngle:0,homeCurrLink:0,activePage:"Home",ctr:4*i.state.ctr})},e.state={currentAngle:0,homeCurrLink:0,activePage:"Home",ctr:0,audio:new Audio(V),currSong:0,playing:!0,songMapping:[V,W,X,Y],songNames:["Lovers Of The Sun","Smack That - Akon","In the End - Linkin Park","Awesome Song"]},e}return Object(o.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"main",style:K.main,children:[Object(h.jsx)(q,{homeCurrLink:this.state.homeCurrLink,activePage:this.state.activePage,audio:this.state.audio,currSong:this.state.currSong,playing:this.state.playing,songNames:this.state.songNames}),Object(h.jsxs)("div",{id:"circle",className:"circle abc",onMouseOver:this.mouseClickRotate,style:K.circleStyle,children:[Object(h.jsx)("div",{id:"up",style:K.up,onClick:this.homeClick,children:Object(h.jsx)("p",{style:{fontWeight:"bold",fontSize:25},children:"HOME"})}),Object(h.jsx)("div",{id:"down",style:K.down,onClick:this.songPlayPause,children:Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{className:"fas fa-play iconSize",style:K.iconSize}),Object(h.jsx)("i",{className:"fas fa-pause iconSize",style:K.iconSize})]})}),Object(h.jsx)("div",{id:"left",style:K.left,onClick:this.prevSong,children:Object(h.jsx)("i",{className:"fas fa-backward iconSize",style:K.iconSize})}),Object(h.jsx)("div",{id:"right",style:K.right,onClick:this.nextSong,children:Object(h.jsx)("i",{className:"fas fa-forward iconSize",style:K.iconSize})}),Object(h.jsx)("div",{className:"middle",id:"middle",style:K.middle,onClick:this.middleButtonClick})]})]})}}]),i}(r.a.Component),K={main:{backgroundColor:"#3f0d12",backgroundImage:"linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)",height:600,width:350,display:"flex",alignItems:"center",flexDirection:"column",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",border:"2px solid black",borderRadius:12,paddingBottom:10,webkitBoxReflect:"below 5px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent) , to(rgba(250, 250, 250, 0.1)))"},circleStyle:{height:280,width:280,backgroundColor:"white",position:"relative",borderRadius:"50%",border:"1px solid black",cursor:"pointer"},up:{marginTop:10,position:"absolute",left:"50%",transform:"translateX(-50%)",fontSize:20,color:"#9F1B2E",cursor:"pointer"},down:{position:"absolute",left:"50%",transform:"translateX(-50%)",bottom:"0",marginBottom:15,color:"#9F1B2E",cursor:"pointer"},left:{marginLeft:15,position:"absolute",top:"50%",transform:"translateY(-50%)",color:"#9F1B2E",cursor:"pointer"},right:{position:"absolute",top:"50%",transform:"translateY(-50%)",right:0,marginRight:15,color:"#9F1B2E",cursor:"pointer"},middle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:120,width:120,backgroundColor:"#3f0d12",backgroundImage:"linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)",borderRadius:"50%",border:"1px solid black",cursor:"pointer"},iconSize:{fontSize:25},ul:{listStyleType:"none"},li:{},liHover:{backgroundColor:"blue"}},Q=_,U=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(Q,{})})}}]),i}(r.a.Component);s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(U,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cea3341c.chunk.js.map