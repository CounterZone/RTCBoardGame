/*! For license information please see component---src-pages-ultimate-tic-tac-toe-js-e16753ce8b354aee392b.js.LICENSE.txt */
(self.webpackChunkrtc_boardgame=self.webpackChunkrtc_boardgame||[]).push([[906],{7757:function(e,t,r){e.exports=r(5666)},5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},7526:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];function n(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var o=null;return t.forEach((function(e){if(null==o){var t=e.apply(void 0,r);null!=t&&(o=t)}})),o}return(0,a.default)(n)};var n,o=r(1060),a=(n=o)&&n.__esModule?n:{default:n};e.exports=t.default},1060:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,r,n,o,a,i){var s=o||"<<anonymous>>",c=i||n;if(null==r[n])return t?new Error("Required "+a+" `"+c+"` was not specified in `"+s+"`."):null;for(var u=arguments.length,l=Array(u>6?u-6:0),p=6;p<u;p++)l[p-6]=arguments[p];return e.apply(void 0,[r,n,s,a,c].concat(l))}var r=t.bind(null,!1);return r.isRequired=t.bind(null,!0),r},e.exports=t.default},6187:function(e,t,r){"use strict";var n=r(7462),o=r(5245),a=r(5900),i=r.n(a),s=r(7294),c=r(9541),u=["bsPrefix","fluid","as","className"],l=s.forwardRef((function(e,t){var r=e.bsPrefix,a=e.fluid,l=e.as,p=void 0===l?"div":l,h=e.className,f=(0,o.Z)(e,u),d=(0,c.vE)(r,"container"),m="string"==typeof a?"-"+a:"-fluid";return s.createElement(p,(0,n.Z)({ref:t},f,{className:i()(h,a?""+d+m:d)}))}));l.displayName="Container",l.defaultProps={fluid:!1},t.Z=l},994:function(e,t,r){"use strict";var n=r(7462),o=r(5245),a=r(5900),i=r.n(a),s=r(7294),c=r(9541),u=["bsPrefix","className","noGutters","as"],l=["xl","lg","md","sm","xs"],p=s.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,p=e.noGutters,h=e.as,f=void 0===h?"div":h,d=(0,o.Z)(e,u),m=(0,c.vE)(r,"row"),v=m+"-cols",y=[];return l.forEach((function(e){var t,r=d[e];delete d[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"==typeof r?r.cols:r)&&y.push(""+v+n+"-"+t)})),s.createElement(f,(0,n.Z)({ref:t},d,{className:i().apply(void 0,[a,m,p&&"no-gutters"].concat(y))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},t.Z=p},9541:function(e,t,r){"use strict";r.d(t,{vE:function(){return a}});var n=r(7294),o=n.createContext({});o.Consumer,o.Provider;function a(e,t){var r=(0,n.useContext)(o);return e||r[t]||t}},4630:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return me}});var n=r(7294);function o(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,o)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function s(e){o(i,n,a,s,c,"next",e)}function c(e){o(i,n,a,s,c,"throw",e)}s(void 0)}))}}var i=r(1721),s=r(7757),c=r.n(s),u={iceServers:[{urls:["stun:stun.l.google.com:19302"]}],iceCandidatePoolSize:10},l=function(){function e(e){var t=this;void 0===e&&(e=u),this.pc=new RTCPeerConnection(e),this.channel=this.pc.createDataChannel("channel"),this.pc.ondatachannel=function(e){e.channel.addEventListener("message",(function(e){return t.onmessage(e.data)})),e.channel.addEventListener("open",(function(e){return t.onopen(e)})),e.channel.addEventListener("close",(function(e){return t.onclose(e)})),e.channel.addEventListener("error",(function(e){return t.onerror(e)}))}}var t=e.prototype;return t.setupLocal=function(){var e=a(c().mark((function e(){var t,r=this;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.pc.createOffer();case 2:return t=e.sent,e.next=5,this.pc.setLocalDescription(t);case 5:return e.abrupt("return",new Promise((function(e,t){setTimeout((function(){"complete"!=r.pc.iceGatheringState?(console.log("GetherTimeout"),e("timeout")):e("complete")}),1e3)})));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t.send=function(e){this.channel.send(e)},t.onopen=function(e){},t.onclose=function(e){},t.onerror=function(e){},t.onmessage=function(e){},t.connectToAnswer=function(){var e=a(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.pc.setRemoteDescription(JSON.parse(t));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.connectToHost=function(){var e=a(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(t),e.next=3,this.pc.setRemoteDescription(t);case 3:if("offer"!=t.type){e.next=10;break}return e.next=6,this.pc.createAnswer();case 6:return r=e.sent,e.next=9,this.pc.setLocalDescription(r);case 9:return e.abrupt("return",JSON.stringify(r));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.get_token=function(){if(null==this.pc.localDescription)throw"Not setup yet";return JSON.stringify(this.pc.localDescription)},e}(),p=l,h=r(5245),f=r(7462),d=r(5900),m=r.n(d),v=/-(.)/g;var y=r(9541),g=["className","bsPrefix","as"],S=function(e){return e[0].toUpperCase()+(t=e,t.replace(v,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function b(e,t){var r=void 0===t?{}:t,o=r.displayName,a=void 0===o?S(e):o,i=r.Component,s=r.defaultProps,c=n.forwardRef((function(t,r){var o=t.className,a=t.bsPrefix,s=t.as,c=void 0===s?i||"div":s,u=(0,h.Z)(t,g),l=(0,y.vE)(a,e);return n.createElement(c,(0,f.Z)({ref:r,className:m()(o,l)},u))}));return c.defaultProps=s,c.displayName=a,c}var x=["bsPrefix","size","hasValidation","className","as"],w=b("input-group-append"),E=b("input-group-prepend"),P=b("input-group-text",{Component:"span"}),k=n.forwardRef((function(e,t){var r=e.bsPrefix,o=e.size,a=e.hasValidation,i=e.className,s=e.as,c=void 0===s?"div":s,u=(0,h.Z)(e,x);return r=(0,y.vE)(r,"input-group"),n.createElement(c,(0,f.Z)({ref:t},u,{className:m()(i,r,o&&r+"-"+o,a&&"has-validation")}))}));k.displayName="InputGroup";var C=(0,f.Z)({},k,{Text:P,Radio:function(e){return n.createElement(P,null,n.createElement("input",(0,f.Z)({type:"radio"},e)))},Checkbox:function(e){return n.createElement(P,null,n.createElement("input",(0,f.Z)({type:"checkbox"},e)))},Append:w,Prepend:E});var N=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];e.apply(this,n),t.apply(this,n)}}),null)},L=["as","disabled","onKeyDown"];function O(e){return!e||"#"===e.trim()}var R=n.forwardRef((function(e,t){var r=e.as,o=void 0===r?"a":r,a=e.disabled,i=e.onKeyDown,s=(0,h.Z)(e,L),c=function(e){var t=s.href,r=s.onClick;(a||O(t))&&e.preventDefault(),a?e.stopPropagation():r&&r(e)};return O(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),a&&(s.tabIndex=-1,s["aria-disabled"]=!0),n.createElement(o,(0,f.Z)({ref:t},s,{onClick:c,onKeyDown:N((function(e){" "===e.key&&(e.preventDefault(),c(e))}),i)}))}));R.displayName="SafeAnchor";var M=R,_=["bsPrefix","variant","size","active","className","block","type","as"],Z=n.forwardRef((function(e,t){var r=e.bsPrefix,o=e.variant,a=e.size,i=e.active,s=e.className,c=e.block,u=e.type,l=e.as,p=(0,h.Z)(e,_),d=(0,y.vE)(r,"btn"),v=m()(s,d,i&&"active",o&&d+"-"+o,c&&d+"-block",a&&d+"-"+a);if(p.href)return n.createElement(M,(0,f.Z)({},p,{as:l,ref:t,className:m()(v,p.disabled&&"disabled")}));t&&(p.ref=t),u?p.type=u:l||(p.type="button");var g=l||"button";return n.createElement(g,(0,f.Z)({},p,{className:v}))}));Z.displayName="Button",Z.defaultProps={variant:"primary",active:!1,disabled:!1};var I=Z,A=(r(7526),r(2473),["as","className","type","tooltip"]),j=n.forwardRef((function(e,t){var r=e.as,o=void 0===r?"div":r,a=e.className,i=e.type,s=void 0===i?"valid":i,c=e.tooltip,u=void 0!==c&&c,l=(0,h.Z)(e,A);return n.createElement(o,(0,f.Z)({},l,{ref:t,className:m()(a,s+"-"+(u?"tooltip":"feedback"))}))}));j.displayName="Feedback";var D=j,F=n.createContext({controlId:void 0}),B=["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"],T=n.forwardRef((function(e,t){var r,o,a=e.bsPrefix,i=e.bsCustomPrefix,s=e.type,c=e.size,u=e.htmlSize,l=e.id,p=e.className,d=e.isValid,v=void 0!==d&&d,g=e.isInvalid,S=void 0!==g&&g,b=e.plaintext,x=e.readOnly,w=e.custom,E=e.as,P=void 0===E?"input":E,k=(0,h.Z)(e,B),C=(0,n.useContext)(F).controlId,N=w?[i,"custom"]:[a,"form-control"],L=N[0],O=N[1];if(a=(0,y.vE)(L,O),b)(o={})[a+"-plaintext"]=!0,r=o;else if("file"===s){var R;(R={})[a+"-file"]=!0,r=R}else if("range"===s){var M;(M={})[a+"-range"]=!0,r=M}else if("select"===P&&w){var _;(_={})[a+"-select"]=!0,_[a+"-select-"+c]=c,r=_}else{var Z;(Z={})[a]=!0,Z[a+"-"+c]=c,r=Z}return n.createElement(P,(0,f.Z)({},k,{type:s,size:u,ref:t,readOnly:x,id:l||C,className:m()(p,r,v&&"is-valid",S&&"is-invalid")}))}));T.displayName="FormControl";var W=Object.assign(T,{Feedback:D}),G=r(6187),z=r(994),q=function(e){function t(){return e.apply(this,arguments)||this}(0,i.Z)(t,e);var r=t.prototype;return r.onMove=function(){},r.render=function(){return""},t}(n.Component),H=function(e){function t(){return e.apply(this,arguments)||this}(0,i.Z)(t,e);var r=t.prototype;return r.onMove=function(){},r.render=function(){return""},t}(n.Component),J=function(e){function t(t){var r;return(r=e.call(this,t)||this).scrollEndDiv=n.createRef(),r}(0,i.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.scrollEnd()},r.componentDidUpdate=function(){this.scrollEnd()},r.scrollEnd=function(){this.scrollEndDiv.current.scrollIntoView()},r.render=function(){return n.createElement("div",{className:"log_panel"},this.props.logs.map((function(e){return e})),n.createElement("div",{ref:this.scrollEndDiv}))},t}(n.Component),U=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={chat_msg:""},r}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this;return n.createElement("div",{className:"control_panel"},n.createElement(C,null,n.createElement(I,{variant:"outline-primary",size:"sm",onClick:function(){return e.props.host()}},"Host"),n.createElement(I,{variant:"outline-secondary",size:"sm",onClick:function(){return e.props.connect()}},"Connect"),n.createElement(W,{placeholder:"Message",value:this.state.chat_msg,onChange:function(t){e.setState({chat_msg:t.target.value})}}),n.createElement(I,{variant:"outline-primary",onClick:function(){e.props.sendChat(e.state.chat_msg),e.setState({chat_msg:""})},disabled:!this.props.channelOpened},"Send")))},t}(n.Component),V=function(e){function t(t){var r;return(r=e.call(this,t)||this).log_count=0,r.state={logs:[],gameState:r.props.initialGameState,channelOpened:!1},r.gameBoard=n.createRef(),r.gameInfoPanel=n.createRef(),r}(0,i.Z)(t,e);var r=t.prototype;return r.send=function(e){this.peer.send(e)},r.componentDidMount=function(){var e=this;this.peer=new p,this.peer.onopen=function(t){e.log(e,"Channel Opened!"),e.setState({channelOpened:!0})},this.peer.onclose=function(t){e.log(e,"Channel closed!"),e.setState({channelOpened:!1})},this.peer.onmessage=function(t){var r=JSON.parse(t);"chat"==r.type?e.log(e,"remote player: "+r.content):"move"==r.type&&(e.gameBoard.current.onMove(r.content),e.gameInfoPanel.current.onMove(r.content))}},r.sendChat=function(e,t){if(e.state.channelOpened){var r={type:"chat",content:t};e.send(JSON.stringify(r)),this.log(this,"local player: "+t),this.setState({chat_msg:""})}},r.sendMove=function(e,t){if(e.state.channelOpened){var r={type:"move",content:t};e.send(JSON.stringify(r))}},r.log=function(e,t){var r=e.state.logs;r.push(n.createElement("p",{key:e.log_count},t)),e.log_count+=1,e.setState({logs:r})},r.host=function(){var e=a(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.peer.setupLocal();case 2:prompt("Please copy the code",t.peer.get_token()),t.log(t,"Offer generated!");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.connect=function(){var e=a(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(r=prompt("Please enter the code from remote peer",""))){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t.peer.connectToHost(r);case 5:void 0!==(n=e.sent)&&(prompt("Please copy the answer code",n),t.log(t,"Answer generated!"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.render=function(){var e=this;return n.createElement("div",{className:"game"},n.createElement(G.Z,null,n.createElement(z.Z,null,n.createElement("div",{className:"game_info_panel"},n.createElement(this.props.gameInfoPanel,{ref:this.gameInfoPanel,log:function(t){return e.log(e,t)},sendMove:function(t){return e.sendMove(e,t)},sendChat:function(t){return e.sendChat(e,t)},remotePlayerConnected:this.state.channelOpened,gameBoardRef:this.gameBoard}))),n.createElement(z.Z,null,n.createElement("div",{className:"game_board"},n.createElement(this.props.gameBoard,{ref:this.gameBoard,sendMove:function(t){return e.sendMove(e,t)},sendChat:function(t){return e.sendChat(e,t)},log:function(t){return e.log(e,t)},remotePlayerConnected:this.state.channelOpened,gameInfoPanelRef:this.gameInfoPanel}),"/>")),n.createElement(z.Z,null,n.createElement("div",{className:"chat_panel"},n.createElement(J,{logs:this.state.logs}),n.createElement(U,{sendChat:function(t){return e.sendChat(e,t)},host:function(){return e.host(e)},connect:function(){return e.connect(e)},channelOpened:this.state.channelOpened})))))},t}(n.Component);V.defaultProps={gameInfoPanel:H,gameBoard:q,on_move:function(){}};var K=V;function Y(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}for(var Q=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],X=[" "," "," "," "," "," "," "," "," "],ee=[],te=0;te<9;te++)ee.push(X.slice());for(var re={gridState:ee,nextPlayer:"o",nextSubboard:null,subboardState:[" "," "," "," "," "," "," "," "," "],winner:null},ne=function(){function e(e){void 0===e&&(e=re),this.gameState=e}var t=e.prototype;return t.copyGameState=function(){return{}},t.checkWin=function(e){for(var t=0;t<Q.length;t++){var r=Q[t],n=r[0],o=r[1],a=r[2];if(("o"===e[n]||"x"===e[n])&&e[n]===e[o]&&e[n]===e[a])return e[n]}return" "},t.updateSubboardStatus=function(e){var t=this.checkWin(this.gameState.gridState[e]);return t!==this.gameState.subboardState[e]&&(this.gameState.subboardState[e]=t,!0)},t.collectNextMoves=function(){var e=[];if(null===this.gameState.nextSubboard){for(var t=0;t<9;t+=1)if(" "===this.gameState.subboardState[t])for(var r=0;r<9;r+=1)" "==this.gameState.gridState[t][r]&&e.push([t,r])}else for(var n=0;n<9;n+=1)" "===this.gameState.gridState[this.gameState.nextSubboard][n]&&e.push([this.gameState.nextSubboard,n]);return e},e}(),oe=function(e){function t(t,r){var n;return void 0===t&&(t=re),void 0===r&&(r=6),(n=e.call(this,t)||this).maxDepth=r,n.gameState.nextSubboardHistory=[],n.subboardLineScore=[0,0,0,0,0,0,0,0,0],n.totalScore=0,n.boardLineScore=0,n.updateScore(),n}(0,i.Z)(t,e);var r=t.prototype;return r.updateScore=function(){for(var e=0;e<9;e+=1)this.updateSubboardLineScore(e);this.updateBoardLineScore()},r.calculateLineScore=function(e){e.sort();var t={"  o":1," oo":10,"  x":-1," xx":-10}[e=e.join("")];return void 0===t?0:t},r.updateSubboardLineScore=function(e){for(var t,r=this,n=0,o=function(){var o=t.value;i=r.gameState.gridState[e].filter((function(e,t){return o.includes(t)})),n+=r.calculateLineScore(i)},a=Y(Q);!(t=a()).done;){var i;o()}this.totalScore-=this.subboardLineScore[e],this.subboardLineScore[e]=n,this.totalScore+=n},r.updateBoardLineScore=function(){var e=this,t=0,r=this.checkWin(this.gameState.subboardState);if(" "!==r)return this.boardLineScore="o"==r?1e4:-1e4,void(this.totalScore=50*this.boardLineScore);for(var n,o=function(){var r=n.value;i=e.gameState.subboardState.filter((function(e,t){return r.includes(t)})),t+=e.calculateLineScore(i)},a=Y(Q);!(n=a()).done;){var i;o()}this.totalScore-=50*this.boardLineScore,this.boardLineScore=t,this.totalScore+=50*t},r.doMove=function(e,t){this.gameState.gridState[e][t]=this.gameState.nextPlayer,this.updateSubboardStatus(e)&&this.updateBoardLineScore(),this.updateSubboardLineScore(e),this.gameState.nextPlayer="o"===this.gameState.nextPlayer?"x":"o",this.gameState.nextSubboardHistory.push(this.gameState.nextSubboard),this.gameState.nextSubboard=" "===this.gameState.subboardState[t]?t:null},r.undoMove=function(e,t){this.gameState.nextPlayer="o"===this.gameState.nextPlayer?"x":"o",this.gameState.gridState[e][t]=" ",this.updateSubboardStatus(e)&&this.updateBoardLineScore(),this.updateSubboardLineScore(e),this.gameState.nextSubboard=this.gameState.nextSubboardHistory.pop()},r.minimax=function(e,t,r,n){var o=this.collectNextMoves(),a=0,i=null;if(0===o.length||e===this.maxDepth)return{score:a="o"===n?this.totalScore:-this.totalScore,move:null};for(var s,c=Y(o);!(s=c()).done;){var u=s.value;if(this.doMove(u[0],u[1]),a=this.minimax(e+1,t,r,n).score,this.undoMove(u[0],u[1]),this.gameState.nextPlayer===n?t<a&&(t=a,i=u):r>a&&(r=a,i=u),t>=r)break}return{score:this.gameState.nextPlayer===n?t:r,move:i}},r.makeNextMove=function(){return this.minimax(0,-1e5,1e5,this.gameState.nextPlayer).move},t}(ne),ae={stroke:"#FFFFFF",strokeWidth:"1"},ie={stroke:"#EFEFEF",strokeWidth:"0.5"},se=[" "," "," "," "," "," "," "," "," "],ce=[],ue=0;ue<9;ue++)ce.push(se.slice());var le={gridState:ce,nextPlayer:"o",playerSymbol:"o",playerSymbolSelected:!1,nextSubboard:null,subboardState:[" "," "," "," "," "," "," "," "," "],winner:null},pe=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={gameState:le,remotePlayerConnected:!1,receivedResetRequest:!1,sentResetRequest:!1},r}(0,i.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return{remotePlayerConnected:e.remotePlayerConnected}};var r=t.prototype;return r.onMove=function(e){"reset"===e.type&&(this.setState({receivedResetRequest:!0}),this.state.sentResetRequest&&this.reset())},r.restart=function(e){e.state.remotePlayerConnected?e.state.receivedResetRequest?(e.props.sendMove({type:"reset"}),e.reset()):(this.props.sendChat("Restart?"),this.props.sendMove({type:"reset"}),this.setState({sentResetRequest:!0})):e.reset()},r.reset=function(){for(var e=[" "," "," "," "," "," "," "," "," "],t=[],r=0;r<9;r++)t.push(e.slice());le={gridState:t,nextPlayer:"o",playerSymbol:"o",playerSymbolSelected:!1,nextSubboard:null,subboardState:[" "," "," "," "," "," "," "," "," "],winner:null},this.setState({gameState:le,receivedResetRequest:!1,sentResetRequest:!1}),this.props.gameBoardRef.current.setState({gameState:le}),this.props.log("Restarted!")},r.AIMove=function(e){var t=new oe(this.state.gameState).makeNextMove();null!=t&&this.props.gameBoardRef.current.makeMove(t[0],t[1])},r.render=function(){var e=this,t="";null!==this.state.gameState.winner?t="Winner: "+this.state.gameState.winner+"!":!0===this.state.remotePlayerConnected?(t="Current Player: ",!1===this.state.gameState.playerSymbolSelected?t+="local (o)":this.state.gameState.nextPlayer==this.state.gameState.playerSymbol?t+="local ("+this.state.gameState.nextPlayer+")":t+="remote ("+this.state.gameState.nextPlayer+")"):t="Playing locally.";var r={float:"right"};return n.createElement("div",{style:{position:"relative",marginTop:"2vh"}},n.createElement(G.Z,null,n.createElement("span",null,t),n.createElement(I,{style:r,size:"sm",title:"Make next move by a minimax AI with search depth = 6",variant:"outline-secondary",disabled:this.state.remotePlayerConnected,onClick:function(){return e.AIMove(e)}},"AI 1"),n.createElement(I,{style:r,size:"sm",variant:"outline-primary",onClick:function(){return e.restart(e)}},"Restart")))},t}(n.Component),he=function(e){function t(t){var r;return(r=e.call(this,t)||this).paintBox=n.createRef(),r.state={width:"100",height:"100",gameState:le,remotePlayerConnected:!1},r}(0,i.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return{remotePlayerConnected:e.remotePlayerConnected}};var r=t.prototype;return r.onClick=function(e,t){!0===this.state.remotePlayerConnected?this.state.gameState.nextPlayer===this.state.gameState.playerSymbol&&this.makeMove(e,t):this.makeMove(e,t)},r.checkWin=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=t[r],o=n[0],a=n[1],i=n[2];if(("o"===e[o]||"x"===e[o])&&e[o]===e[a]&&e[o]===e[i])return e[o]}return null},r.sendMove=function(e){this.props.sendMove({type:"move",newState:e})},r.onMove=function(e){if("move"===e.type){var t=e.newState,r=this.state.gameState;r.playerSymbolSelected?t.playerSymbol=r.playerSymbol:(t.playerSymbol="x",t.playerSymbolSelected=!0),this.setState({gameState:t}),this.props.gameInfoPanelRef.current.setState({gameState:t})}},r.makeMove=function(e,t){if(null===this.state.gameState.winner){var r=this.state.gameState;r.gridState[e][t]=r.nextPlayer;var n=this.checkWin(r.gridState[e]);null!==n?(r.subboardState[e]=n,null!==(n=this.checkWin(r.subboardState))&&(r.winner=n)):r.gridState[e].includes(" ")||(r.subboardState[e]="f"),r.nextPlayer="o"===r.nextPlayer?"x":"o",r.nextSubboard=" "===r.subboardState[t]?t:null,this.state.remotePlayerConnected&&!r.playerSymbolSelected&&(r.playerSymbolSelected=!0),this.setState({gameState:r}),this.props.gameInfoPanelRef.current.setState({gameState:r}),this.state.remotePlayerConnected&&this.sendMove(r)}},r.componentDidMount=function(){var e=Math.min(this.paintBox.current.offsetWidth,this.paintBox.current.offsetHeight);this.setState({width:e,height:e})},r.render=function(){for(var e=this,t={margin:"auto",display:"block",width:this.state.width,height:this.state.height},r=[],o=function(t){i=Math.floor(t/3),s=t%3,c=null==e.state.gameState.winner&&" "===e.state.gameState.subboardState[t]&&(t===e.state.gameState.nextSubboard||null===e.state.gameState.nextSubboard),r.push(n.createElement(fe,{key:t,x:5+30*i,y:5+30*s,ownedStatus:e.state.gameState.subboardState[t],status:e.state.gameState.gridState[t],isNextSubboard:c,nextPlayer:e.state.gameState.nextPlayer,onClick:function(r){return e.onClick(t,r)}}))},a=0;a<9;a++){var i,s,c;o(a)}return n.createElement("div",{ref:this.paintBox,style:{width:"100%",height:"100%"}},n.createElement("svg",{viewBox:"0 0 100 100",style:t},n.createElement("line",{x1:"35",y1:"5",x2:"35",y2:"95",style:ae}),n.createElement("line",{x1:"65",y1:"5",x2:"65",y2:"95",style:ae}),n.createElement("line",{x1:"5",y1:"35",x2:"95",y2:"35",style:ae}),n.createElement("line",{x1:"5",y1:"65",x2:"95",y2:"65",style:ae}),r))},t}(n.Component),fe=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={status:r.props.status},r}(0,i.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return{status:e.status}};var r=t.prototype;return r.onClick=function(e){this.props.onClick(e)},r.render=function(){var e=this;if("o"==this.props.ownedStatus)return n.createElement("circle",{cx:this.props.x+15,cy:this.props.y+15,r:"14",stroke:"red",strokeWidth:"1.5",fill:"none"});if("x"==this.props.ownedStatus)return n.createElement("g",null,n.createElement("line",{x1:this.props.x+1,y1:this.props.y+1,x2:this.props.x+29,y2:this.props.y+29,stroke:"blue",strokeWidth:"1.5"}),";",n.createElement("line",{x1:this.props.x+29,y1:this.props.y+1,x2:this.props.x+1,y2:this.props.y+29,stroke:"blue",strokeWidth:"1.5"}),";");var t=[this.props.x+7,this.props.x+15,this.props.x+23],r=[this.props.y+7,this.props.y+15,this.props.y+23],o="";if(this.props.isNextSubboard){var a="o"===this.props.nextPlayer?"red":"blue";o=n.createElement("rect",{x:this.props.x+1,y:this.props.y+1,height:"28",width:"28",strokeWidth:"0.5",stroke:a,fill:"none"})}for(var i=[],s=function(o){var a=Math.floor(o/3),s=o%3;i.push(n.createElement(de,{key:o,x:t[a],y:r[s],status:e.state.status[o],onClick:function(){return e.onClick(o)},isActive:e.props.isNextSubboard}))},c=0;c<9;c++)s(c);return n.createElement("g",null,n.createElement("line",{x1:this.props.x+11,y1:this.props.y+3,x2:this.props.x+11,y2:this.props.y+27,style:ie}),n.createElement("line",{x1:this.props.x+19,y1:this.props.y+3,x2:this.props.x+19,y2:this.props.y+27,style:ie}),n.createElement("line",{x1:this.props.x+3,y1:this.props.y+11,x2:this.props.x+27,y2:this.props.y+11,style:ie}),n.createElement("line",{x1:this.props.x+3,y1:this.props.y+19,x2:this.props.x+27,y2:this.props.y+19,style:ie}),i,o)},t}(n.Component),de=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={status:r.props.status},r}(0,i.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return{status:e.status}};var r=t.prototype;return r.onClick=function(e){e.props.onClick()},r.render=function(){var e=this,t="";this.props.isActive&&(t=n.createElement("rect",{x:this.props.x-3,y:this.props.y-3,width:"6",height:"6",fillOpacity:"0",onClick:function(){e.onClick(e)}}));return"o"===this.state.status?t=n.createElement("circle",{cx:this.props.x,cy:this.props.y,r:3,stroke:"red",strokeWidth:"0.7",fill:"none"}):"x"===this.state.status&&(t=n.createElement("g",null,n.createElement("line",{x1:this.props.x-3,y1:this.props.y-3,x2:this.props.x+3,y2:this.props.y+3,stroke:"blue",strokeWidth:"0.7"}),";",n.createElement("line",{x1:this.props.x+3,y1:this.props.y-3,x2:this.props.x-3,y2:this.props.y+3,stroke:"blue",strokeWidth:"0.7"}),";")),n.createElement("g",null,t)},t}(n.Component),me=function(){return n.createElement("main",null,n.createElement("title",null,"Ultimate tic-tac-toe"),n.createElement(K,{gameBoard:he,gameInfoPanel:pe}))}},5666:function(e){var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(M){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(e,t,r){var n=p;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return R()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?d:h,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(M){return{type:"throw",arg:M}}}e.wrap=u;var p="suspendedStart",h="suspendedYield",f="executing",d="completed",m={};function v(){}function y(){}function g(){}var S={};c(S,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(O([])));x&&x!==r&&n.call(x,a)&&(S=x);var w=g.prototype=v.prototype=Object.create(S);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function P(e,t){function r(o,a,i,s){var c=l(e[o],e,a);if("throw"!==c.type){var u=c.arg,p=u.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(p).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,s)}))}s(c.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function k(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function O(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:R}}function R(){return{value:t,done:!0}}return y.prototype=g,c(w,"constructor",g),c(g,"constructor",y),y.displayName=c(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},E(P.prototype),c(P.prototype,i,(function(){return this})),e.AsyncIterator=P,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new P(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(w),c(w,s,"Generator"),c(w,a,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},2473:function(e){"use strict";var t=function(){};e.exports=t},7462:function(e,t,r){"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return n}})},5245:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=component---src-pages-ultimate-tic-tac-toe-js-e16753ce8b354aee392b.js.map