(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{213:function(e,t,n){var i;
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i))e.push(a.apply(null,i));else if("object"===r)for(var o in i)n.call(i,o)&&i[o]&&e.push(o)}}return e.join(" ")}void 0!==e&&e.exports?e.exports=a:void 0===(i=function(){return a}.apply(t,[]))||(e.exports=i)}()},214:function(e,t,n){"use strict";n(121),n(237)},215:function(e,t,n){"use strict";t.__esModule=!0;var i,a=n(120),r=(i=a)&&i.__esModule?i:{default:i};t.default=function(e,t,n){return t in e?(0,r.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},216:function(e,t,n){e.exports={default:n(226),__esModule:!0}},217:function(e,t,n){e.exports={default:n(223),__esModule:!0}},218:function(e,t,n){"use strict";var i=n(33),a=n.n(i),r=n(32),o=n.n(r),s=n(31),c=n.n(s),l=n(30),u=n.n(l),p=n(29),f=n.n(p),h=n(1),d=n.n(h),v=(n(233),function(e){function t(){return o()(this,t),u()(this,(t.__proto__||a()(t)).apply(this,arguments))}return f()(t,e),c()(t,[{key:"render",value:function(){return d.a.createElement("footer",null,d.a.createElement("div",{className:"copyright"},d.a.createElement("div",{className:"copyright-cn"},"众安·体验设计中心"),d.a.createElement("div",{className:"copyright-en"},"Zhongan UX Densign")))}}]),t}(h.Component));t.a=v},219:function(e,t,n){"use strict";var i=n(215),a=n.n(i),r=n(33),o=n.n(r),s=n(32),c=n.n(s),l=n(31),u=n.n(l),p=n(30),f=n.n(p),h=n(29),d=n.n(h),v=n(1),m=n.n(v),g=n(213),y=n.n(g),x=(n(234),function(e){function t(){return c()(this,t),f()(this,(t.__proto__||o()(t)).apply(this,arguments))}return d()(t,e),u()(t,[{key:"componentDidMount",value:function(){if("index-page"===this.props.className){var e=window.sessionStorage[this.props.className];e&&(this.container.scrollTop=e)}}},{key:"componentWillUnmount",value:function(){if("index-page"===this.props.className){var e=this.container.scrollTop;window.sessionStorage[this.props.className]=e}}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,i=t.children,r=y()(a()({"app-container":!0},n,!!n));return m.a.createElement("div",{ref:function(t){e.container=t},className:r,style:{height:window.innerHeight}},m.a.createElement("a",{className:"github",href:"https://github.com/ZhonganTechENG/zarm"},m.a.createElement("svg",{"aria-hidden":"true",version:"1.1",viewBox:"0 0 16 16"},m.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))),i)}}]),t}(v.Component));t.a=x},220:function(e,t,n){"use strict";var i=n(33),a=n.n(i),r=n(32),o=n.n(r),s=n(31),c=n.n(s),l=n(30),u=n.n(l),p=n(29),f=n.n(p),h=n(1),d=n.n(h),v=n(213),m=n.n(v),g=function(e){function t(){return o()(this,t),u()(this,(t.__proto__||a()(t)).apply(this,arguments))}return f()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,i=e.children,a=m()(""+t,n);return d.a.createElement("div",{className:a},i)}}]),t}(h.PureComponent),y=g;g.defaultProps={prefixCls:"za-panel"};var x=function(e){function t(){return o()(this,t),u()(this,(t.__proto__||a()(t)).apply(this,arguments))}return f()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,i=e.title,a=e.more,r=m()(t+"-header",n);return d.a.createElement("div",{className:r},i&&d.a.createElement("div",{className:t+"-title"},i),a&&d.a.createElement("div",{className:t+"-more"},a))}}]),t}(h.PureComponent),E=x;x.defaultProps={prefixCls:"za-panel"};var _=n(216),I=n.n(_),T=n(217),w=n.n(T),D=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof w.a){var a=0;for(i=w()(e);a<i.length;a++)t.indexOf(i[a])<0&&(n[i[a]]=e[i[a]])}return n},P=function(e){function t(){return o()(this,t),u()(this,(t.__proto__||a()(t)).apply(this,arguments))}return f()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,i=e.children,a=D(e,["prefixCls","className","children"]),r=m()(t+"-body",n);return d.a.createElement("div",I()({},a,{className:r}),i)}}]),t}(h.PureComponent),N=P;P.defaultProps={prefixCls:"za-panel"};var b=function(e){function t(){return o()(this,t),u()(this,(t.__proto__||a()(t)).apply(this,arguments))}return f()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,i=e.title,a=e.more,r=m()(t+"-footer",n);return d.a.createElement("div",{className:r},i&&d.a.createElement("div",{className:t+"-title"},i),a&&d.a.createElement("div",{className:t+"-more"},a))}}]),t}(h.PureComponent),C=b;b.defaultProps={prefixCls:"za-panel"},y.Header=E,y.Body=N,y.Footer=C;t.a=y},221:function(e,t,n){"use strict";n(214),n(236)},222:function(e,t,n){"use strict";var i=n(33),a=n.n(i),r=n(32),o=n.n(r),s=n(31),c=n.n(s),l=n(30),u=n.n(l),p=n(29),f=n.n(p),h=n(1),d=n.n(h),v=(n(235),function(e){function t(){return o()(this,t),u()(this,(t.__proto__||a()(t)).apply(this,arguments))}return f()(t,e),c()(t,[{key:"render",value:function(){var e=this.props.title;return d.a.createElement("header",{className:"header"},e)}}]),t}(h.Component));t.a=v},223:function(e,t,n){n(122),e.exports=n(8).Object.getOwnPropertySymbols},224:function(e,t,n){"use strict";var i=n(44),a=n(78),r=n(45),o=n(77),s=n(123),c=Object.assign;e.exports=!c||n(26)(function(){var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach(function(e){t[e]=e}),7!=c({},e)[n]||Object.keys(c({},t)).join("")!=i})?function(e,t){for(var n=o(e),c=arguments.length,l=1,u=a.f,p=r.f;c>l;)for(var f,h=s(arguments[l++]),d=u?i(h).concat(u(h)):i(h),v=d.length,m=0;v>m;)p.call(h,f=d[m++])&&(n[f]=h[f]);return n}:c},225:function(e,t,n){var i=n(16);i(i.S+i.F,"Object",{assign:n(224)})},226:function(e,t,n){n(225),e.exports=n(8).Object.assign},240:function(e,t,n){"use strict";t.a={on:function(e,t,n){e.addEventListener?e.addEventListener(t,n,{passive:!1}):e.attachEvent("on "+t,function(){n.call(e)})},off:function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,{passive:!1}):e.detachEvent("off "+t,n)},once:function(e,t,n){for(var i=t.split(" "),a=function e(t){return t.target.removeEventListener(t.type,e,{passive:!1}),n(t)},r=i.length-1;r>=0;r-=1)this.on(e,i[r],a)}}},251:function(e,t,n){"use strict";var i=n(216),a=n.n(i),r=n(33),o=n.n(r),s=n(32),c=n.n(s),l=n(31),u=n.n(l),p=n(30),f=n.n(p),h=n(29),d=n.n(h),v=n(1),m=function(e){function t(){c()(this,t);var e=f()(this,(t.__proto__||o()(t)).apply(this,arguments));return e.dragState={},e.onTouchStart=function(t){var n=e.dragState,i=t.touches[0];n.startX=i.pageX,n.startY=i.pageY,n.startTime=new Date;var a=e.props.onDragStart;"function"==typeof a&&a(t,n)},e.onTouchMove=function(t){var n=e.dragState,i=t.touches[0],r=i.pageX,o=i.pageY,s=r-n.startX,c=o-n.startY,l=a()({},n,{offsetX:s,offsetY:c,currentX:r,currentY:o}),u=e.props.onDragMove;("function"!=typeof u||u(t,l))&&(e.dragState=l)},e.onTouchEnd=function(t){var n=e.dragState,i=e.props.onDragEnd;"function"==typeof i&&i(t,n),e.dragState={}},e}return d()(t,e),u()(t,[{key:"render",value:function(){var e=this.props.children;return Object(v.cloneElement)(e,{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd})}}]),t}(v.PureComponent);t.a=m},284:function(e,t,n){"use strict";var i=n(215),a=n.n(i),r=n(33),o=n.n(r),s=n(32),c=n.n(s),l=n(31),u=n.n(l),p=n(30),f=n.n(p),h=n(29),d=n.n(h),v=n(1),m=n.n(v),g=n(213),y=n.n(g),x=n(240),E=n(251),_=function(e){function t(e){c()(this,t);var n=f()(this,(t.__proto__||o()(t)).call(this,e));return n.translateX=0,n.translateY=0,n.onSlideTo=function(e){n.onMoveTo(e,n.props.animationDuration)},n.onJumpTo=function(e){n.onMoveTo(e,0)},n.onMoveTo=function(e,t){var i=n.swipeItems;if(i){var a=n.props,r=a.loop,o=a.children.length;n.translateX=-i.offsetWidth*(e+r),n.translateY=-i.offsetHeight*(e+r),n.doTransition({x:n.translateX,y:n.translateY},t),e>o-1?e=0:e<0&&(e=o-1),n.setState({activeIndex:e})}},n.onDragStart=function(){var e=n.state.activeIndex,t=n.props.children.length;e<=0?n.onJumpTo(0):e>=t-1&&n.onJumpTo(t-1),n.pauseAutoPlay()},n.onDragMove=function(e,t){var i=t.offsetX,a=t.offsetY,r=Math.abs(i),o=Math.abs(a);if(n.isDirectionX()&&(r<5||r>=5&&o>=1.73*r))return!1;if(!n.isDirectionX()&&(o<5||o>=5&&r>=1.73*o))return!1;if(!n.props.loop){if(n.isLastIndex()&&(n.isDirectionX()&&i<0||!n.isDirectionX()&&a<0))return!1;if(n.isFirstIndex()&&(n.isDirectionX()&&i>0||!n.isDirectionX()&&a>0))return!1}return e.preventDefault(),n.doTransition({x:n.translateX+i,y:n.translateY+a},0),!0},n.onDragEnd=function(e,i){var a=i.offsetX,r=i.offsetY,o=i.startTime;if(a||r){var s=n.props,c=s.moveDistanceRatio,l=void 0===c?t.defaultProps.moveDistanceRatio:c,u=s.moveTimeSpan,p=void 0===u?t.defaultProps.moveTimeSpan:u,f=s.onChange,h=n.state.activeIndex,d=n.swipeItems,v=(new Date).getTime()-o.getTime();if((n.isDirectionX()?Math.abs(a/d.offsetWidth):Math.abs(r/d.offsetHeight))>=l||v<=p){var m=!(n.isDirectionX()&&a>0||!n.isDirectionX()&&r>0);"function"==typeof f&&f(n.parseActiveIndexParse(m)),h=m?h+1:h-1}n.onSlideTo(h),n.startAutoPlay()}},n.parseActiveIndexParse=function(e){var t=n.props,i=t.loop,a=t.children.length-1,r=n.state.activeIndex;return r=e?r+1>a?i?0:a:r+=1:r-1<0?i?a:0:r-=1},n.startAutoPlay=function(){var e=n.props,t=e.direction,i=void 0===t?"left":t,a=e.loop,r=e.autoPlay,o=e.autoPlayIntervalTime,s=e.children;n.moveInterval=r&&setInterval(function(){var e=n.state.activeIndex,t=s.length;e=["left","top"].indexOf(i)>-1?e+1:e-1,!a&&e>t-1?n.pauseAutoPlay():n.onSlideTo(e)},o)},n.pauseAutoPlay=function(){n.moveInterval&&clearInterval(n.moveInterval)},n.parseItems=function(e){if(0!==e.children.length){var t=[].concat(e.children),i=t[0],r=t[t.length-1];e.loop&&(t.push(i),t.unshift(r));var o=m.a.Children.map(t,function(t,n){var i;return Object(v.cloneElement)(t,{key:n,className:y()((i={},a()(i,e.prefixCls+"-item",!0),a()(i,t.props.className,!!t.props.className),i))})});n.setState({items:o})}},n.resize=function(){n.onJumpTo(n.state.activeIndex)},n.doTransition=function(e,t){var i=n.swipeItems,a=0,r=0;n.isDirectionX()?a=e.x:r=e.y,i.style.WebkitTransformDuration=t+"ms",i.style.transitionDuration=t+"ms",i.style.WebkitTransform="translate3d("+a+"px, "+r+"px, 0)",i.style.transform="translate3d("+a+"px, "+r+"px, 0)"},n.transitionEnd=function(){var e=n.state.activeIndex,t=n.swipeItems;n.translateX=-t.offsetWidth*(e+n.props.loop),n.translateY=-t.offsetHeight*(e+n.props.loop),n.doTransition({x:n.translateX,y:n.translateY},0);var i=n.props.onChangeEnd;"function"==typeof i&&i(e)},n.isLastIndex=function(){return n.state.activeIndex>=n.props.children.length-1},n.isFirstIndex=function(){return n.state.activeIndex<=0},n.isDirectionX=function(){return["left","right"].indexOf(n.props.direction||t.defaultProps.direction)>-1},n.renderPaginationItem=function(e,t){var i={};return n.isDirectionX()&&(i.display="inline-block"),m.a.createElement("li",{role:"tab",key:"pagination-"+t,className:y()({active:t===n.state.activeIndex}),style:i,onClick:function(){return n.onSlideTo(t)}})},n.renderPagination=function(){var e=n.props,t=e.prefixCls,i=e.children;return m.a.createElement("div",{className:t+"-pagination"},m.a.createElement("ul",null,v.Children.map(i,n.renderPaginationItem)))},n.state={items:[],activeIndex:e.activeIndex},n}return d()(t,e),u()(t,[{key:"componentWillMount",value:function(){this.parseItems(this.props),this.startAutoPlay()}},{key:"componentDidMount",value:function(){x.a.on(window,"resize",this.resize),x.a.on(this.swipeItems,"webkitTransitionEnd",this.transitionEnd),x.a.on(this.swipeItems,"transitionend",this.transitionEnd),this.onJumpTo(this.props.activeIndex)}},{key:"componentWillReceiveProps",value:function(e){"children"in e&&this.parseItems(e),"activeIndex"in e&&this.onJumpTo(e.activeIndex)}},{key:"componentWillUnmount",value:function(){this.pauseAutoPlay(),x.a.off(window,"resize",this.resize),x.a.off(this.swipeItems,"webkitTransitionEnd",this.transitionEnd),x.a.off(this.swipeItems,"transitionend",this.transitionEnd)}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,i=t.className,a=t.height,r=t.showPagination,o=y()(""+n,i),s={};return this.isDirectionX()?s.whiteSpace="nowrap":s.height=a,m.a.createElement("div",{className:o},m.a.createElement(E.a,{onDragStart:this.onDragStart,onDragMove:this.onDragMove,onDragEnd:this.onDragEnd},m.a.createElement("div",{ref:function(t){e.swipeItems=t},className:n+"-items",style:s},this.state.items)),r&&this.renderPagination())}}]),t}(v.Component);t.a=_,_.defaultProps={prefixCls:"za-swipe",direction:"left",height:160,loop:!1,activeIndex:0,animationDuration:300,autoPlay:!1,autoPlayIntervalTime:3e3,moveDistanceRatio:.5,moveTimeSpan:300,showPagination:!0}},285:function(e,t,n){"use strict";n(214),n(298)},298:function(e,t,n){}}]);