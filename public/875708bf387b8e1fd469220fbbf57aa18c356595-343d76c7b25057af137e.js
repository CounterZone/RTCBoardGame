/*! For license information please see 875708bf387b8e1fd469220fbbf57aa18c356595-343d76c7b25057af137e.js.LICENSE.txt */
(self.webpackChunkrtc_boardgame=self.webpackChunkrtc_boardgame||[]).push([[596],{7757:function(e,t,n){e.exports=n(5666)},5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},7526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=null;return t.forEach((function(e){if(null==o){var t=e.apply(void 0,n);null!=t&&(o=t)}})),o}return(0,a.default)(r)};var r,o=n(1060),a=(r=o)&&r.__esModule?r:{default:r};e.exports=t.default},1060:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,o,a,i){var c=o||"<<anonymous>>",s=i||r;if(null==n[r])return t?new Error("Required "+a+" `"+s+"` was not specified in `"+c+"`."):null;for(var u=arguments.length,l=Array(u>6?u-6:0),f=6;f<u;f++)l[f-6]=arguments[f];return e.apply(void 0,[n,r,c,a,s].concat(l))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},8199:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7462),o=n(5245),a=n(5900),i=n.n(a),c=n(7294),s=n(9541);var u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}}),null)},l=["as","disabled","onKeyDown"];function f(e){return!e||"#"===e.trim()}var p=c.forwardRef((function(e,t){var n=e.as,a=void 0===n?"a":n,i=e.disabled,s=e.onKeyDown,p=(0,o.Z)(e,l),h=function(e){var t=p.href,n=p.onClick;(i||f(t))&&e.preventDefault(),i?e.stopPropagation():n&&n(e)};return f(p.href)&&(p.role=p.role||"button",p.href=p.href||"#"),i&&(p.tabIndex=-1,p["aria-disabled"]=!0),c.createElement(a,(0,r.Z)({ref:t},p,{onClick:h,onKeyDown:u((function(e){" "===e.key&&(e.preventDefault(),h(e))}),s)}))}));p.displayName="SafeAnchor";var h=p,d=["bsPrefix","variant","size","active","className","block","type","as"],v=c.forwardRef((function(e,t){var n=e.bsPrefix,a=e.variant,u=e.size,l=e.active,f=e.className,p=e.block,v=e.type,m=e.as,y=(0,o.Z)(e,d),g=(0,s.vE)(n,"btn"),w=i()(f,g,l&&"active",a&&g+"-"+a,p&&g+"-block",u&&g+"-"+u);if(y.href)return c.createElement(h,(0,r.Z)({},y,{as:m,ref:t,className:i()(w,y.disabled&&"disabled")}));t&&(y.ref=t),v?y.type=v:m||(y.type="button");var b=m||"button";return c.createElement(b,(0,r.Z)({},y,{className:w}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1};var m=v},6187:function(e,t,n){"use strict";var r=n(7462),o=n(5245),a=n(5900),i=n.n(a),c=n(7294),s=n(9541),u=["bsPrefix","fluid","as","className"],l=c.forwardRef((function(e,t){var n=e.bsPrefix,a=e.fluid,l=e.as,f=void 0===l?"div":l,p=e.className,h=(0,o.Z)(e,u),d=(0,s.vE)(n,"container"),v="string"==typeof a?"-"+a:"-fluid";return c.createElement(f,(0,r.Z)({ref:t},h,{className:i()(p,a?""+d+v:d)}))}));l.displayName="Container",l.defaultProps={fluid:!1},t.Z=l},994:function(e,t,n){"use strict";var r=n(7462),o=n(5245),a=n(5900),i=n.n(a),c=n(7294),s=n(9541),u=["bsPrefix","className","noGutters","as"],l=["xl","lg","md","sm","xs"],f=c.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,f=e.noGutters,p=e.as,h=void 0===p?"div":p,d=(0,o.Z)(e,u),v=(0,s.vE)(n,"row"),m=v+"-cols",y=[];return l.forEach((function(e){var t,n=d[e];delete d[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&y.push(""+m+r+"-"+t)})),c.createElement(h,(0,r.Z)({ref:t},d,{className:i().apply(void 0,[a,v,f&&"no-gutters"].concat(y))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},t.Z=f},9541:function(e,t,n){"use strict";n.d(t,{vE:function(){return a}});var r=n(7294),o=r.createContext({});o.Consumer,o.Provider;function a(e,t){var n=(0,r.useContext)(o);return e||n[t]||t}},237:function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,s,"next",e)}function s(e){r(i,o,a,c,s,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return B}});var a=n(1721),i=n(7757),c=n.n(i),s={iceServers:[{urls:["stun:stun.l.google.com:19302"]}],iceCandidatePoolSize:10},u=function(){function e(e){var t=this;void 0===e&&(e=s),this.pc=new RTCPeerConnection(e),this.channel=this.pc.createDataChannel("channel"),this.pc.ondatachannel=function(e){e.channel.addEventListener("message",(function(e){return t.onmessage(e.data)})),e.channel.addEventListener("open",(function(e){return t.onopen(e)})),e.channel.addEventListener("close",(function(e){return t.onclose(e)})),e.channel.addEventListener("error",(function(e){return t.onerror(e)}))}}var t=e.prototype;return t.setupLocal=function(){var e=o(c().mark((function e(){var t,n=this;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.pc.createOffer();case 2:return t=e.sent,e.next=5,this.pc.setLocalDescription(t);case 5:return e.abrupt("return",new Promise((function(e,t){setTimeout((function(){"complete"!=n.pc.iceGatheringState?(console.log("GetherTimeout"),e("timeout")):e("complete")}),1e3)})));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t.send=function(e){this.channel.send(e)},t.onopen=function(e){},t.onclose=function(e){},t.onerror=function(e){},t.onmessage=function(e){},t.connectToAnswer=function(){var e=o(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.pc.setRemoteDescription(JSON.parse(t));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.connectToHost=function(){var e=o(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(t),e.next=3,this.pc.setRemoteDescription(t);case 3:if("offer"!=t.type){e.next=10;break}return e.next=6,this.pc.createAnswer();case 6:return n=e.sent,e.next=9,this.pc.setLocalDescription(n);case 9:return e.abrupt("return",JSON.stringify(n));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.get_token=function(){if(null==this.pc.localDescription)throw"Not setup yet";return JSON.stringify(this.pc.localDescription)},e}(),l=u,f=n(7294),p=n(5245),h=n(7462),d=n(5900),v=n.n(d),m=/-(.)/g;var y=n(9541),g=["className","bsPrefix","as"],w=function(e){return e[0].toUpperCase()+(t=e,t.replace(m,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function b(e,t){var n=void 0===t?{}:t,r=n.displayName,o=void 0===r?w(e):r,a=n.Component,i=n.defaultProps,c=f.forwardRef((function(t,n){var r=t.className,o=t.bsPrefix,i=t.as,c=void 0===i?a||"div":i,s=(0,p.Z)(t,g),u=(0,y.vE)(o,e);return f.createElement(c,(0,h.Z)({ref:n,className:v()(r,u)},s))}));return c.defaultProps=i,c.displayName=o,c}var x=["bsPrefix","size","hasValidation","className","as"],E=b("input-group-append"),N=b("input-group-prepend"),P=b("input-group-text",{Component:"span"}),O=f.forwardRef((function(e,t){var n=e.bsPrefix,r=e.size,o=e.hasValidation,a=e.className,i=e.as,c=void 0===i?"div":i,s=(0,p.Z)(e,x);return n=(0,y.vE)(n,"input-group"),f.createElement(c,(0,h.Z)({ref:t},s,{className:v()(a,n,r&&n+"-"+r,o&&"has-validation")}))}));O.displayName="InputGroup";var C=(0,h.Z)({},O,{Text:P,Radio:function(e){return f.createElement(P,null,f.createElement("input",(0,h.Z)({type:"radio"},e)))},Checkbox:function(e){return f.createElement(P,null,f.createElement("input",(0,h.Z)({type:"checkbox"},e)))},Append:E,Prepend:N}),_=(n(7526),n(2473),["as","className","type","tooltip"]),Z=f.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,o=e.className,a=e.type,i=void 0===a?"valid":a,c=e.tooltip,s=void 0!==c&&c,u=(0,p.Z)(e,_);return f.createElement(r,(0,h.Z)({},u,{ref:t,className:v()(o,i+"-"+(s?"tooltip":"feedback"))}))}));Z.displayName="Feedback";var k=Z,L=f.createContext({controlId:void 0}),S=["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"],R=f.forwardRef((function(e,t){var n,r,o=e.bsPrefix,a=e.bsCustomPrefix,i=e.type,c=e.size,s=e.htmlSize,u=e.id,l=e.className,d=e.isValid,m=void 0!==d&&d,g=e.isInvalid,w=void 0!==g&&g,b=e.plaintext,x=e.readOnly,E=e.custom,N=e.as,P=void 0===N?"input":N,O=(0,p.Z)(e,S),C=(0,f.useContext)(L).controlId,_=E?[a,"custom"]:[o,"form-control"],Z=_[0],k=_[1];if(o=(0,y.vE)(Z,k),b)(r={})[o+"-plaintext"]=!0,n=r;else if("file"===i){var R;(R={})[o+"-file"]=!0,n=R}else if("range"===i){var j;(j={})[o+"-range"]=!0,n=j}else if("select"===P&&E){var D;(D={})[o+"-select"]=!0,D[o+"-select-"+c]=c,n=D}else{var I;(I={})[o]=!0,I[o+"-"+c]=c,n=I}return f.createElement(P,(0,h.Z)({},O,{type:i,size:s,ref:t,readOnly:x,id:u||C,className:v()(l,n,m&&"is-valid",w&&"is-invalid")}))}));R.displayName="FormControl";var j=Object.assign(R,{Feedback:k}),D=n(8199),I=n(6187),A=n(994),G=function(e){function t(){return e.apply(this,arguments)||this}(0,a.Z)(t,e);var n=t.prototype;return n.onMove=function(){},n.render=function(){return""},t}(f.Component),M=function(e){function t(){return e.apply(this,arguments)||this}(0,a.Z)(t,e);var n=t.prototype;return n.onMove=function(){},n.render=function(){return""},t}(f.Component),T=function(e){function t(t){var n;return(n=e.call(this,t)||this).scrollEndDiv=f.createRef(),n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.scrollEnd()},n.componentDidUpdate=function(){this.scrollEnd()},n.scrollEnd=function(){this.scrollEndDiv.current.scrollIntoView()},n.render=function(){return f.createElement("div",{className:"log_panel"},this.props.logs.map((function(e){return e})),f.createElement("div",{ref:this.scrollEndDiv}))},t}(f.Component),z=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={chat_msg:""},n}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this;return f.createElement("div",{className:"control_panel"},f.createElement(C,null,f.createElement(D.Z,{variant:"outline-primary",size:"sm",onClick:function(){return e.props.host()}},"Host"),f.createElement(D.Z,{variant:"outline-secondary",size:"sm",onClick:function(){return e.props.connect()}},"Connect"),f.createElement(j,{placeholder:"Message",value:this.state.chat_msg,onChange:function(t){e.setState({chat_msg:t.target.value})}}),f.createElement(D.Z,{variant:"outline-primary",onClick:function(){e.props.sendChat(e.state.chat_msg),e.setState({chat_msg:""})},disabled:!this.props.channelOpened},"Send")))},t}(f.Component),F=function(e){function t(t){var n;return(n=e.call(this,t)||this).log_count=0,n.state={logs:[],gameState:n.props.initialGameState,channelOpened:!1},n.gameBoard=f.createRef(),n.gameInfoPanel=f.createRef(),n}(0,a.Z)(t,e);var n=t.prototype;return n.send=function(e){this.peer.send(e)},n.componentDidMount=function(){var e=this;this.peer=new l,this.peer.onopen=function(t){e.log(e,"Channel Opened!"),e.setState({channelOpened:!0})},this.peer.onclose=function(t){e.log(e,"Channel closed!"),e.setState({channelOpened:!1})},this.peer.onmessage=function(t){var n=JSON.parse(t);"chat"==n.type?e.log(e,"remote player: "+n.content):"move"==n.type&&(e.gameBoard.current.onMove(n.content),e.gameInfoPanel.current.onMove(n.content))}},n.sendChat=function(e,t){if(e.state.channelOpened){var n={type:"chat",content:t};e.send(JSON.stringify(n)),this.log(this,"local player: "+t),this.setState({chat_msg:""})}},n.sendMove=function(e,t){if(e.state.channelOpened){var n={type:"move",content:t};e.send(JSON.stringify(n))}},n.log=function(e,t){var n=e.state.logs;n.push(f.createElement("p",{key:e.log_count},t)),e.log_count+=1,e.setState({logs:n})},n.host=function(){var e=o(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.peer.setupLocal();case 2:prompt("Please copy the code and send to the remote player",t.peer.get_token()),t.log(t,"Offer generated!");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.connect=function(){var e=o(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(n=prompt("Please enter the code from the remote peer",""))){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t.peer.connectToHost(n);case 5:void 0!==(r=e.sent)&&(prompt("Please copy the answer code from the remote peer",r),t.log(t,"Answer generated!"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.render=function(){var e=this;return f.createElement("div",{className:"game"},f.createElement(I.Z,null,f.createElement(A.Z,null,f.createElement("div",{className:"game_info_panel"},f.createElement(this.props.gameInfoPanel,{ref:this.gameInfoPanel,log:function(t){return e.log(e,t)},sendMove:function(t){return e.sendMove(e,t)},sendChat:function(t){return e.sendChat(e,t)},remotePlayerConnected:this.state.channelOpened,gameBoardRef:this.gameBoard}))),f.createElement(A.Z,null,f.createElement("div",{className:"game_board"},f.createElement(this.props.gameBoard,{ref:this.gameBoard,sendMove:function(t){return e.sendMove(e,t)},sendChat:function(t){return e.sendChat(e,t)},log:function(t){return e.log(e,t)},remotePlayerConnected:this.state.channelOpened,gameInfoPanelRef:this.gameInfoPanel}),"/>")),f.createElement(A.Z,null,f.createElement("div",{className:"chat_panel"},f.createElement(T,{logs:this.state.logs}),f.createElement(z,{sendChat:function(t){return e.sendChat(e,t)},host:function(){return e.host(e)},connect:function(){return e.connect(e)},channelOpened:this.state.channelOpened})))))},t}(f.Component);F.defaultProps={gameInfoPanel:M,gameBoard:G,on_move:function(){}};var B=F},5666:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(S){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new Z(r||[]);return a._invoke=function(e,t,n){var r=f;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return L()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=l(e,t,n);if("normal"===s.type){if(r=n.done?d:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}(e,n,i),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function m(){}function y(){}function g(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(k([])));x&&x!==n&&r.call(x,a)&&(w=x);var E=g.prototype=m.prototype=Object.create(w);function N(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function P(e,t){function n(o,a,i,c){var s=l(e[o],e,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function O(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function Z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function k(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:L}}function L(){return{value:t,done:!0}}return y.prototype=g,s(E,"constructor",g),s(g,"constructor",y),y.displayName=s(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},N(P.prototype),s(P.prototype,i,(function(){return this})),e.AsyncIterator=P,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new P(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},N(E),s(E,c,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,Z.prototype={constructor:Z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:k(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=t}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},2473:function(e){"use strict";var t=function(){};e.exports=t},7462:function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},5245:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=875708bf387b8e1fd469220fbbf57aa18c356595-343d76c7b25057af137e.js.map