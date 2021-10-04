/*! For license information please see component---src-pages-index-js-86fedfe88b2f99c15219.js.LICENSE.txt */
(self.webpackChunkrtc_boardgame=self.webpackChunkrtc_boardgame||[]).push([[678],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=a.apply(null,n);l&&e.push(l)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},6187:function(e,t,n){"use strict";var r=n(7462),a=n(5245),o=n(5900),l=n.n(o),i=n(7294),s=n(9541),c=["bsPrefix","fluid","as","className"],u=i.forwardRef((function(e,t){var n=e.bsPrefix,o=e.fluid,u=e.as,p=void 0===u?"div":u,f=e.className,d=(0,a.Z)(e,c),m=(0,s.vE)(n,"container"),h="string"==typeof o?"-"+o:"-fluid";return i.createElement(p,(0,r.Z)({ref:t},d,{className:l()(f,o?""+m+h:m)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.Z=u},994:function(e,t,n){"use strict";var r=n(7462),a=n(5245),o=n(5900),l=n.n(o),i=n(7294),s=n(9541),c=["bsPrefix","className","noGutters","as"],u=["xl","lg","md","sm","xs"],p=i.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,p=e.noGutters,f=e.as,d=void 0===f?"div":f,m=(0,a.Z)(e,c),h=(0,s.vE)(n,"row"),b=h+"-cols",v=[];return u.forEach((function(e){var t,n=m[e];delete m[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&v.push(""+b+r+"-"+t)})),i.createElement(d,(0,r.Z)({ref:t},m,{className:l().apply(void 0,[o,h,p&&"no-gutters"].concat(v))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},t.Z=p},9541:function(e,t,n){"use strict";n.d(t,{vE:function(){return o}});var r=n(7294),a=r.createContext({});a.Consumer,a.Provider;function o(e,t){var n=(0,r.useContext)(a);return e||n[t]||t}},9312:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(1721),a=n(7294),o=n(7462),l=n(5245),i=n(5900),s=n.n(i),c=n(9541),u=["bsPrefix","className","as"],p=["xl","lg","md","sm","xs"],f=a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.as,f=void 0===i?"div":i,d=(0,l.Z)(e,u),m=(0,c.vE)(n,"col"),h=[],b=[];return p.forEach((function(e){var t,n,r,a=d[e];if(delete d[e],"object"==typeof a&&null!=a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var l="xs"!==e?"-"+e:"";t&&h.push(!0===t?""+m+l:""+m+l+"-"+t),null!=r&&b.push("order"+l+"-"+r),null!=n&&b.push("offset"+l+"-"+n)})),h.length||h.push(m),a.createElement(f,(0,o.Z)({},d,{ref:t,className:s().apply(void 0,[r].concat(h,b))}))}));f.displayName="Col";var d=f,m=n(994),h=n(6187),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){return a.createElement(m.Z,null,a.createElement(d,{md:"auto"},a.createElement("div",{style:{borderRight:"1px solid black",textAlign:"center"}},a.createElement("img",{src:this.props.imagePath,style:{width:"30vmin",height:"30vmin"}}),a.createElement("p",null,a.createElement("a",{href:this.props.gameLink},this.props.gameName)))),a.createElement(d,null,this.props.introduction))},t}(a.Component),v=a.createElement("div",null,a.createElement("p",null,"The ultimate-tic-tac-toe game board consists of 3x3 subboards; each subboard is a classical tic-tac-toe board consists of 3x3 grids."),a.createElement("p",null,"You may only play in the subboard that corresponds to the last grid your opponent played."),a.createElement("p",null,"When the a subboard is full or already owned by a player, you can choose freely."),a.createElement("p",null,"When a player win a subboard, this subboard would be owned by this player. When a player owns 3 subboards in a row, column or diagonal, the player wins the game. When all the subboards are owned and no one wins, the game ends with a draw. "),a.createElement("p",null,"Check ",a.createElement("a",{href:"https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe"},"here")," for more information.")),y=a.createElement("div",null,a.createElement("p",null,"The connect-6 game board is a square board made up of 19×19 grid of lines, and the pieces are placed on intersections."),a.createElement("p",null,"Black plays first, putting one black piece on the board. Afterwards, white and black play in turn, and each turn the player places two pieces on two different unoccupied positions."),a.createElement("p",null,"When a player get six or more pieces in a row (horizontally, vertically, or diagonally), he wins. "),a.createElement("p",null,"Check ",a.createElement("a",{href:"https://en.wikipedia.org/wiki/Connect6"},"here")," for more information.")),g=function(){return a.createElement("main",null,a.createElement("title",null,"Games"),a.createElement(h.Z,null,a.createElement("hr",null),a.createElement(b,{gameLink:"ultimate-tic-tac-toe",gameName:"ultimate-tic-tac-toe",imagePath:"/ten.png",introduction:v}),a.createElement("hr",null),a.createElement(b,{gameLink:"connect6",gameName:"connect_6",imagePath:"/c6.png",introduction:y}),a.createElement("hr",null)))}},7462:function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},5245:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-index-js-86fedfe88b2f99c15219.js.map