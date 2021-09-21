
const PEER_CONFIG={
  iceServers:[
    {"urls":["stun:stun.l.google.com:19302"]}
  ],
  iceCandidatePoolSize: 10
};



class RTCPeer{
   constructor(config=PEER_CONFIG) {
    this.pc=new RTCPeerConnection(config);
    this.channel=this.pc.createDataChannel("channel");

    // need to create data channel first; otherwise the "ice gathering" would not start???

    this.pc.ondatachannel=(e)=>{
        //console.log(e.channel===this.channel);  False. local channel/remote channel

        e.channel.addEventListener("message",(msg)=>{return this.onmessage(msg.data)});

        e.channel.addEventListener("open",(e)=>{return this.onopen(e)});

        e.channel.addEventListener("close",(e)=>{return this.onclose(e)});

        e.channel.addEventListener("error",(e)=>{return this.onerror(e)});
};




  }

  async setupLocal(){
    var offer=await this.pc.createOffer();
    await this.pc.setLocalDescription(offer);
    return new Promise((resolve,reject)=>{
      setTimeout(()=> {
                if (this.pc.iceGatheringState != "complete") {
                    console.log('GetherTimeout');
                    resolve("timeout");}
                    else{resolve("complete");}
            }, 1000);

    });
  }

   send(msg){
    this.channel.send(msg)
  }

  onopen(e){}
  onclose(e){}
  onerror(err){}
  onmessage(msg){}


  async connectToAnswer(token){
    await this.pc.setRemoteDescription(JSON.parse(token));
  }
  async connectToHost(token){
    token=JSON.parse(token);
    await this.pc.setRemoteDescription(token);
    if (token.type=='offer'){
    var ans= await this.pc.createAnswer();
    await this.pc.setLocalDescription(ans);
    return JSON.stringify(ans);
  }
  }

   get_token(){
     if (this.pc.localDescription==null){
       throw "Not setup yet";
     }
     return  JSON.stringify(this.pc.localDescription);;
  }
}

export default RTCPeer;
