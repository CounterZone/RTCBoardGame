import './game.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RTCPeer from './RTC'
import React from 'react';
import {Button,Container,Row,InputGroup,FormControl} from 'react-bootstrap';


/*
message API:

message: {
"type":  "chat" or "move",
"content": a string
}
 should be sent in json sting.

*/



class GameBoard extends React.Component{
  onMove(){     // need to implement the move handler!

  }
  render(){
  return ("")
  }
}

class GameInfoPanel extends React.Component{

  onMove(){  // need to implement the move handler!

  }
  render(){
  return ("")
  }

}

class LogPanel extends React.Component{
  constructor(props) {
    super(props);
    this.scrollEndDiv=React.createRef()
  }

  componentDidMount () {
    this.scrollEnd()
  }
  componentDidUpdate () {
    this.scrollEnd()
  }
  scrollEnd () {
    this.scrollEndDiv.current.scrollIntoView()
  }
    render(){
    return (
          <div className="log_panel">
          {this.props.logs.map((log)=>log)}
          <div ref={this.scrollEndDiv}></div>
          </div>)
    }
}


class ControlPanel extends React.Component{
  constructor(props) {
    super(props);
    this.state={'chat_msg':""}

  }

  render(){
    return (
      <div className="control_panel">
      <InputGroup >
      <Button variant="outline-primary" size="sm" onClick={()=>this.props.host()}>Host</Button>
      <Button variant="outline-secondary"  size="sm" onClick={()=>this.props.connect()}>Connect</Button>
        <FormControl
          placeholder="Message"
          value={this.state.chat_msg}
          onChange={e=>{this.setState({'chat_msg':e.target.value})}}
        />
        <Button variant="outline-primary" onClick={()=>{this.props.sendChat(this.state.chat_msg);this.setState({'chat_msg':""})}} disabled={!this.props.channelOpened}>
          Send
        </Button>
      </InputGroup>
      </div>
    )

    }


}

// Everyone can make the first move; afterwards, they play in turn.

//

class Game extends React.Component{
  static defaultProps = {
        gameInfoPanel: GameInfoPanel,
        gameBoard: GameBoard,
        on_move: ()=>{},   // event handler for incoming move
    }
  constructor(props){
    super(props);
    this.peer=new RTCPeer();
    this.log_count=0;
    this.state={"logs":[],"gameState":this.props.initialGameState,channelOpened:false};

    this.peer.onopen=(e)=>{
      this.log(this,"Channel Opened!");
      this.setState({'channelOpened':true})
    }
    this.peer.onclose=(e)=>{
      this.log(this,"Channel closed!");
      this.setState({'channelOpened':false})
    }
    this.peer.onmessage=(e)=>{
      var msg_obj=JSON.parse(e);
      if (msg_obj.type=='chat'){
        this.log(this,"remote player: "+msg_obj.content);
      } else if (msg_obj.type=='move'){
        this.gameBoard.current.onMove(msg_obj.content);
        this.gameInfoPanel.current.onMove(msg_obj.content);
      }
    }

    this.gameBoard=React.createRef();
    this.gameInfoPanel=React.createRef();
  }
    send(msg){
    this.peer.send(msg);
  }



    sendChat(self,msg){
    if (self.state.channelOpened){
    var obj={"type":"chat","content":msg}
    self.send(JSON.stringify(obj));
    this.log(this,'local player: '+msg)
    this.setState({'chat_msg':''});
    }
  }

    sendMove(self,move){
    if (self.state.channelOpened){
    var obj={"type":"move","content":move}
    self.send(JSON.stringify(obj));
    }
  }

    log(self,msg){
      var logs=self.state.logs;
      logs.push(<p key={self.log_count}>{msg}</p>);
      self.log_count+=1;
      self.setState({logs:logs});
    }
    async host(self){
      await self.peer.setupLocal();
      prompt("Please copy the code",self.peer.get_token());
      self.log(self,"Offer generated!");
    };

    async connect(self){
      var token=prompt('Please enter the code from remote peer','');
      if (token==null){return;}
      var ans=await self.peer.connectToHost(token);

      if (ans!==undefined){
      prompt("Please copy the answer code",ans);
      self.log(self,"Answer generated!");
      }
    };
    render(){

    return (
      <div className='game'>
      <Container>
      <Row>

      <div className="game_info_panel">
      <this.props.gameInfoPanel ref={this.gameInfoPanel}
                            log={(msg)=>this.log(this,msg)}
                            sendMove={(move)=>this.sendMove(this,move)}
                            sendChat={(msg)=>this.sendChat(this,msg)}

                            remotePlayerConnected={this.state.channelOpened}
                            gameBoardRef={this.gameBoard}
                            />
      </div>

      </Row>
            <Row>
            <div className="game_board">
            <this.props.gameBoard ref={this.gameBoard}
                                  sendMove={(move)=>this.sendMove(this,move)}
                                  sendChat={(msg)=>this.sendChat(this,msg)}
                                  log={(msg)=>this.log(this,msg)} // data dependency injection bot-top

                                  remotePlayerConnected={this.state.channelOpened} // data pipeline top-bot

                                  gameInfoPanelRef={this.gameInfoPanel}
                                  />
                />
            </div>
            </Row>
            <Row>

            <div className="chat_panel">
              <LogPanel logs={this.state.logs}/>
              <ControlPanel
               sendChat={(msg)=>this.sendChat(this,msg)}
               host={()=>this.host(this)}
               connect={()=>this.connect(this)}
               channelOpened={this.state.channelOpened}

               />
            </div>

            </Row>
      </Container>

</div>)

}

}

export default Game;
