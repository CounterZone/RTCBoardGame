import * as React from "react"
import Game from '../game_template';
import {Button,ListGroup,Row,Container,Col} from 'react-bootstrap';


const majorLineStyle={

"stroke":"#000000",
"strokeWidth":"4"

}

const gameWidth=6;
const gameHeight=5;

var b1=new Array(gameWidth);
var s=[],l=[],g=[];
for (var i=0;i<gameWidth;i++) b1[i]=" ";

for (var i=0;i<19;i++)s.push(b1.slice());

var globalGameState={
"verticalLineState":v,
"horizontalLineState":l,
"gridState":g,
"nextPlayer":"o",    // x-blue, o-red (first move)
"playerSymbol":"o",
"playerSymbolSelected":false,
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
  componentDidMount(){
    this.reset();
  }
  reset(){
    var b1=new Array(19);
    var s=[];

    for (var i=0;i<19;i++) b1[i]=" ";
    for (var i=0;i<19;i++)s.push(b1.slice());

    globalGameState={
    "piecesState":s,
    "nextPlayer":"o",
    "movesLeft":1,
    "playerSymbol":"o",
    "playerSymbolSelected":false,
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

  render(){
    var info="";
    if (this.state.gameState.winner !==null){
      info="Winner: "+(this.state.gameState.winner==="o"?"\u1F7E5":"\u1F7E6") + "!";
    }
    else if (this.state.remotePlayerConnected===true){
      info="Current Player: ";
      if(this.state.gameState.playerSymbolSelected===false){
      info+="local (black)"
      }else{
        if (this.state.gameState.nextPlayer==this.state.gameState.playerSymbol){
          info+= "local (" + (this.state.gameState.nextPlayer==="o"?"\u1F7E5":"\u1F7E6") + ")";
        }else{
          info+= "remote (" + (this.state.gameState.nextPlayer==="o"?"\u1F7E5":"\u1F7E6") + ")";
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
  onClick(x,y){
    if (this.state.remotePlayerConnected===true){
      if (this.state.gameState.nextPlayer===this.state.gameState.playerSymbol){
        this.makeMove(x,y)
        }
    }else{
      this.makeMove(x,y);
    }
  }


  checkWin(lastMove){
    const board=this.state.gameState.piecesState;
    const directions=[[0,1],[1,0],[1,1],[1,-1]];
    for (let direc of directions){
      let [dx,dy]=direc;
      let [x,y]=lastMove;
      let count=1;
      while (x>0 && y>0 && x<19 && y<19 && board[x][y]===board[x-dx][y-dy]){
        x-=dx;
        y-=dy;
        count+=1;
      }
      [x,y]=lastMove;
      while (x>0 && y>0 && x<19-1 && y<19-1 && board[x][y]===board[x+dx][y+dy]){
        x+=dx;
        y+=dy;
        count+=1;
      }
      if (count>=6) {
        return board[x][y];
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


  makeMove(x,y){
    if (this.state.gameState.winner!==null)return;

    var s=this.state.gameState;

    s.piecesState[x][y]=s.nextPlayer;

    var winner =this.checkWin([x,y]);
    if(winner!==null){ // someone win this subboard
        s.winner=winner;
    } else{
      if (s.movesLeft==2){s.movesLeft-=1;}
      else{
      s.movesLeft=2;
      s.nextPlayer= s.nextPlayer==="o"?"x":"o";
      if(this.state.remotePlayerConnected && !s.playerSymbolSelected){
        s.playerSymbolSelected=true;
      }
    }
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
      var pieces=[];
      var lines=[];
      for (let i=0;i<19;i++){
        var pos=5+90*i/18;
        lines.push(
          <line x1={pos} y1="5" x2={pos} y2="95" key={i} style={majorLineStyle} />
        );
        lines.push(
          <line y1={pos} x1="5" y2={pos} x2="95" key={i+19}  style={majorLineStyle} />
        );
      }
      for (let i=0;i<19;i++){
        for (let j=0;j<19;j++){
          pieces.push(
            <Piece x={i} y={j} key={i*19+j} status={this.state.gameState.piecesState[i][j]} onClick={()=>this.onClick(i,j)} />
          );
        }
      }
    return (
      <div ref={this.paintBox} style={boxstyle}>
    <svg viewBox="0 0 100 100" style={svgstyle}>
    {lines}
    {pieces}
    </svg>
    </div>
    );

}

}


class Piece extends React.Component{
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
    const radius=90/18/2.2;
    const rectlength=90/18;
    var marker ="";
    if (this.state.status==="o"){
      marker= <circle cx={5+this.props.x*rectlength} cy={5+this.props.y*rectlength} r={radius} stroke="none"  fill="black" />;
    }else if (this.state.status==="x"){
    marker=<circle  cx={5+this.props.x*rectlength} cy={5+this.props.y*rectlength} r={radius}  stroke="none" fill="white" />;
    }else if  (this.props.status===" "){
    marker= <rect x={5+this.props.x*rectlength-rectlength/2} y={5+this.props.y*rectlength-rectlength/2} width={rectlength} height={rectlength} fillOpacity="0"
    onClick={()=>{this.onClick(this)}} />; // clickbox
}
    return(
      <g>
      {marker}
      </g>

    );

  }
}




export {Board,InfoBoard}
