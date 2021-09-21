import * as React from "react"
import Game from '../game_template';
import {Button,ListGroup,Row,Container,Col} from 'react-bootstrap';
import{MinimaxAI} from "./tenAI"


const majorLineStyle={

"stroke":"#FFFFFF",
"strokeWidth":"1"

}

const minorLineStyle={

"stroke":"#EFEFEF",
"strokeWidth":"0.5"

}


var b1=[' ',' ',' ',' ',' ',' ',' ',' ',' '];
var s=[];
for (var i=0;i<9;i++) {s.push(b1.slice());}

var globalGameState={
"gridState":s,
"nextPlayer":"o",
"playerSymbol":"o",
"playerSymbolSelected":false,
"nextSubboard":null,
"subboardState":[' ',' ',' ',' ',' ',' ',' ',' ',' '],  //' ' means can be choosed; 'o' or 'x' mean owned; 'f' means full
"winner":null
}






class InfoBoard extends React.Component{

  constructor(props){
    super(props);

    this.state={
    "gameState":globalGameState,
    "remotePlayerConnected":false,
    "receivedResetRequest":false,
    "sentResetRequest":false
    }

  }
  static getDerivedStateFromProps  (props,state){
    return ({'remotePlayerConnected':props.remotePlayerConnected})
  }
  onMove(move){
    if (move.type==="reset"){
      this.setState({receivedResetRequest:true});
      if(this.state.sentResetRequest){
        this.reset();
      }
    }
  }
  restart(self){
    if (!self.state.remotePlayerConnected){
      self.reset();
      return
    }

    if (self.state.receivedResetRequest){
      self.props.sendMove({type:"reset"});
      self.reset();
    }

    else{
      this.props.sendChat("Restart?");
      this.props.sendMove({type:"reset"});
      this.setState({sentResetRequest:true});
    }

  }
  reset(){
    var b1=[' ',' ',' ',' ',' ',' ',' ',' ',' '];
    var s=[];
    for (var i=0;i<9;i++) {s.push(b1.slice());}

    globalGameState={
    "gridState":s,
    "nextPlayer":"o",
    "playerSymbol":"o",
    "playerSymbolSelected":false,
    "nextSubboard":null,
    "subboardState":[' ',' ',' ',' ',' ',' ',' ',' ',' '],  //' ' means can be choosed; 'o' or 'x' mean owned; 'f' means full
    "winner":null
    }
    this.setState({
    "gameState":globalGameState,
    "receivedResetRequest":false,
    "sentResetRequest":false
    });
    this.props.gameBoardRef.current.setState({"gameState":globalGameState});
    this.props.log("Restarted!");
  }
  AIMove(self){
      var ai=new MinimaxAI(this.state.gameState);
      var aiMove=ai.makeNextMove();
      if (aiMove!=null){
      this.props.gameBoardRef.current.makeMove(aiMove[0],aiMove[1]);
    }
  }
  render(){
    var info="";
    if (this.state.gameState.winner !==null){
      info="Winner: "+this.state.gameState.winner + "!";
    }
    else if (this.state.remotePlayerConnected===true){
      info="Current Player: ";
      if(this.state.gameState.playerSymbolSelected===false){
      info+="local (o)"
      }else{
        if (this.state.gameState.nextPlayer==this.state.gameState.playerSymbol){
          info+= "local (" + this.state.gameState.nextPlayer + ")";
        }else{
          info+= "remote (" + this.state.gameState.nextPlayer + ")";
        }

      }
    }else{
      info="Playing locally.";
    }

    const infoStyle={
      position: 'relative',
      marginTop:"2vh",

    }
    const buttonStyle={
      float:"right"

    }
    return (
      <div style={infoStyle} >
      <Container>
     <span >
       {info}
     </span>
     <Button style={buttonStyle} size="sm" title="Make next move by a minimax AI with search depth = 6" variant="outline-secondary" disabled={this.state.remotePlayerConnected} onClick={()=>this.AIMove(this)}>
       AI 1
     </Button>
     <Button style={buttonStyle} size="sm" variant="outline-primary" onClick={()=>this.restart(this)}>
       Restart
     </Button>
       </Container>
      </div>
    );
  }
}


class Board extends React.Component{
  constructor(props){
    super(props);
    this.paintBox=React.createRef();

    this.state={"width":"100",
    "height":"100",
    "gameState":globalGameState,
    "remotePlayerConnected":false
    }

  }
  static getDerivedStateFromProps  (props,state){
    return ({'remotePlayerConnected':props.remotePlayerConnected})
  }
  onClick(subboard,piece){
    if (this.state.remotePlayerConnected===true){
      if (this.state.gameState.nextPlayer===this.state.gameState.playerSymbol){
        this.makeMove(subboard,piece)
        }
    }else{
      this.makeMove(subboard,piece);
    }
  }


  checkWin(array){ // return the winner ('o' or 'x') or null
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if ((array[a]==="o" || array[a]==="x")  && array[a] === array[b] && array[a] === array[c]) {
      return array[a];
    }
  }
  return null;
  }

  sendMove(state){
    this.props.sendMove({type:"move",newState:state});
  }
  onMove(move){
    if(move.type==="move"){
          var newState=move.newState;
          var s=this.state.gameState;
          if(!s.playerSymbolSelected){
            newState.playerSymbol="x";
            newState.playerSymbolSelected=true;
          }else{
            newState.playerSymbol=s.playerSymbol;
          }


          this.setState({gameState:newState});
          this.props.gameInfoPanelRef.current.setState({gameState:newState});
        }
  }


  makeMove(subboard,piece){
    if (this.state.gameState.winner!==null)return;
    var s=this.state.gameState;


    s.gridState[subboard][piece]=s.nextPlayer;

    var winner =this.checkWin(s.gridState[subboard]);
    if(winner!==null){ // someone win this subboard
      s.subboardState[subboard]=winner;

      winner=this.checkWin(s.subboardState);
      if(winner!==null){
        s.winner=winner

      }
    } else if (!s.gridState[subboard].includes(' ')){  // check if subboard is full
      s.subboardState[subboard]="f";
      }

      s.nextPlayer= s.nextPlayer==="o"?"x":"o";
      s.nextSubboard=s.subboardState[piece]===" "?piece:null;
      if(this.state.remotePlayerConnected && !s.playerSymbolSelected){
        s.playerSymbolSelected=true;
      }

      this.setState({gameState:s});
      this.props.gameInfoPanelRef.current.setState({gameState:s});

      if(this.state.remotePlayerConnected){
        this.sendMove(s);
      }

  }

    componentDidMount() {
      var w=Math.min(this.paintBox.current.offsetWidth,this.paintBox.current.offsetHeight);
      this.setState({"width":w,"height":w})
    }


    render(){
      const boxstyle={
        width:'100%',
        height:'100%',
      }
      var svgstyle={
        margin:"auto",
        display: "block",
        width:this.state.width,
        height:this.state.height,
      }

      var subboard=[];
      for (let i=0;i<9;i++){
        var x=Math.floor(i/3);
        var y=i%3;
        var isNextSubboard =  (this.state.gameState.winner==null)&&
        (this.state.gameState.subboardState[i]===" ") &&
        ((i===this.state.gameState.nextSubboard) ||( this.state.gameState.nextSubboard===null));

        subboard.push(
          <Subboard key={i} x={5+x*30} y={5+y*30}
          ownedStatus={this.state.gameState.subboardState[i]}
          status={this.state.gameState.gridState[i]}
          isNextSubboard={isNextSubboard}
          nextPlayer={this.state.gameState.nextPlayer}
          onClick={(p)=>this.onClick(i,p)}/>);
      }

    return (
      <div ref={this.paintBox} style={boxstyle}>
    <svg viewBox="0 0 100 100" style={svgstyle}>
    <line x1="35" y1="5" x2="35" y2="95" style={majorLineStyle} />
    <line x1="65" y1="5" x2="65" y2="95" style={majorLineStyle} />
    <line x1="5" y1="35" x2="95" y2="35" style={majorLineStyle} />
    <line x1="5" y1="65" x2="95" y2="65" style={majorLineStyle} />

    {subboard}


    </svg>
    </div>
    );

}

}

class Subboard extends React.Component{

  constructor(props){
    super(props);
    this.state={"status":this.props.status}
  }

  static getDerivedStateFromProps  (props,state){
    return ({'status':props.status})
  }
onClick(i){
this.props.onClick(i);
}
render(){

  if (this.props.ownedStatus=='o'){  // is owned by o
  return (<circle cx={this.props.x+15} cy={this.props.y+15} r="14" stroke="red" strokeWidth="1.5" fill="none"/>);
  }
  else if (this.props.ownedStatus=='x'){ //is owned by x
  return (<g>
  <line x1={this.props.x+1} y1={this.props.y+1} x2={this.props.x+29} y2={this.props.y+29} stroke="blue" strokeWidth="1.5"/>;
  <line x1={this.props.x+29} y1={this.props.y+1} x2={this.props.x+1} y2={this.props.y+29} stroke="blue" strokeWidth="1.5"/>;
  </g>);
  }

var center_x=[this.props.x+7,this.props.x+15,this.props.x+23];
var center_y=[this.props.y+7,this.props.y+15,this.props.y+23];

var marker="";


if (this.props.isNextSubboard){
  var color=this.props.nextPlayer==='o'?"red":"blue";
  marker=<rect x= {this.props.x+1} y={this.props.y+1} height="28" width="28"  strokeWidth="0.5" stroke={color} fill="none"/>
}
var grid=[];
for (let i=0;i<9;i++){
  let x=Math.floor(i/3);
  let y=i%3;
  grid.push(  <Grid key={i} x={center_x[x]} y={center_y[y]} status={this.state.status[i]} onClick={()=>this.onClick(i)} isActive={this.props.isNextSubboard}/>);
}
return (

  <g>
  <line x1={this.props.x+11} y1={this.props.y+3} x2={this.props.x+11} y2={this.props.y+27} style={minorLineStyle} />
  <line x1={this.props.x+19} y1={this.props.y+3} x2={this.props.x+19} y2={this.props.y+27} style={minorLineStyle} />
  <line x1={this.props.x+3} y1={this.props.y+11} x2={this.props.x+27} y2={this.props.y+11} style={minorLineStyle} />
  <line x1={this.props.x+3} y1={this.props.y+19} x2={this.props.x+27} y2={this.props.y+19} style={minorLineStyle} />
  {grid}
  {marker}
  </g>
)

}

}


class Grid extends React.Component{
  constructor(props){
    super(props);
    this.state={'status':this.props.status} // " " or "o"(red)  or  "x"(blue)
  }
  static getDerivedStateFromProps  (props,state){
    return ({'status':props.status})
  }
  onClick(self){
    self.props.onClick();
  }

  render(){

    var marker ="";
    if (this.props.isActive){
      marker= <rect x={this.props.x-3} y={this.props.y-3} width="6" height="6" fillOpacity="0"
    onClick={()=>{this.onClick(this)}} />;
  }

    const radius=3;

    if (this.state.status==="o"){
      marker=<circle cx={this.props.x} cy={this.props.y} r={radius} stroke="red" strokeWidth="0.7" fill="none"/>;
    }
    else if (this.state.status==="x"){
      marker=<g>
      <line x1={this.props.x-radius} y1={this.props.y-radius} x2={this.props.x+radius} y2={this.props.y+radius} stroke="blue" strokeWidth="0.7"/>;
      <line x1={this.props.x+radius} y1={this.props.y-radius} x2={this.props.x-radius} y2={this.props.y+radius} stroke="blue" strokeWidth="0.7"/>;

      </g>
    }

    return(

      <g>
      {marker}
      </g>

    );

  }
}




export {Board,InfoBoard}
