/*! For license information please see component---src-pages-index-js-3f241da24e26c97aeb26.js.LICENSE.txt */
(self.webpackChunkrtc_boardgame=self.webpackChunkrtc_boardgame||[]).push([[678],{5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&e.push(o)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},6187:function(e,t,r){"use strict";var n=r(7462),a=r(5245),s=r(5900),o=r.n(s),i=r(7294),u=r(9541),l=["bsPrefix","fluid","as","className"],c=i.forwardRef((function(e,t){var r=e.bsPrefix,s=e.fluid,c=e.as,f=void 0===c?"div":c,p=e.className,m=(0,a.Z)(e,l),d=(0,u.vE)(r,"container"),v="string"==typeof s?"-"+s:"-fluid";return i.createElement(f,(0,n.Z)({ref:t},m,{className:o()(p,s?""+d+v:d)}))}));c.displayName="Container",c.defaultProps={fluid:!1},t.Z=c},994:function(e,t,r){"use strict";var n=r(7462),a=r(5245),s=r(5900),o=r.n(s),i=r(7294),u=r(9541),l=["bsPrefix","className","noGutters","as"],c=["xl","lg","md","sm","xs"],f=i.forwardRef((function(e,t){var r=e.bsPrefix,s=e.className,f=e.noGutters,p=e.as,m=void 0===p?"div":p,d=(0,a.Z)(e,l),v=(0,u.vE)(r,"row"),h=v+"-cols",g=[];return c.forEach((function(e){var t,r=d[e];delete d[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"==typeof r?r.cols:r)&&g.push(""+h+n+"-"+t)})),i.createElement(m,(0,n.Z)({ref:t},d,{className:o().apply(void 0,[s,v,f&&"no-gutters"].concat(g))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},t.Z=f},9541:function(e,t,r){"use strict";r.d(t,{vE:function(){return s}});var n=r(7294),a=n.createContext({});a.Consumer,a.Provider;function s(e,t){var r=(0,n.useContext)(a);return e||r[t]||t}},9312:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(1721),a=r(7294),s=r(7462),o=r(5245),i=r(5900),u=r.n(i),l=r(9541),c=["bsPrefix","className","as"],f=["xl","lg","md","sm","xs"],p=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,i=e.as,p=void 0===i?"div":i,m=(0,o.Z)(e,c),d=(0,l.vE)(r,"col"),v=[],h=[];return f.forEach((function(e){var t,r,n,a=m[e];if(delete m[e],"object"==typeof a&&null!=a){var s=a.span;t=void 0===s||s,r=a.offset,n=a.order}else t=a;var o="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+d+o:""+d+o+"-"+t),null!=n&&h.push("order"+o+"-"+n),null!=r&&h.push("offset"+o+"-"+r)})),v.length||v.push(d),a.createElement(p,(0,s.Z)({},m,{ref:t,className:u().apply(void 0,[n].concat(v,h))}))}));p.displayName="Col";var m=p,d=r(994),v=r(6187),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return a.createElement(d.Z,null,a.createElement(m,null,a.createElement("img",{src:this.props.imagePath,style:{width:"30vmin",height:"30vmin"}}),a.createElement("p",null,this.props.gameName)),a.createElement(m,null,this.props.introduction))},t}(a.Component),g=function(){return a.createElement("main",null,a.createElement("title",null,"Games"),a.createElement(v.Z,null,a.createElement(h,{gameName:"ultimate-tic-tac-toe",imagePath:"/ten.png",introduction:"asdgasfgasdf"})))}},7462:function(e,t,r){"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return n}})},5245:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=component---src-pages-index-js-3f241da24e26c97aeb26.js.map