/*! For license information please see main.565cfc5f.chunk.js.LICENSE.txt */
(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],[,,,,,function(e,t,n){!function(e){"use strict";var t="";function n(){return String.fromCharCode.apply(null,arguments)}function i(e){return b.getComputedStyle(e)}function r(e,t){var n;return w(e)?e:"string"==(n=typeof e)&&!t&&e?O.call(m.querySelectorAll(e),0):e&&"object"==n&&"length"in e?O.call(e,0):e?[e]:[]}function s(e){return"absolute"===e.position||!0===e.absolute}function o(e,t){for(var n,i=t.length;-1<--i;)if(n=t[i],e.substr(0,n.length)===n)return n.length}function a(e,t){void 0===e&&(e="");var n=~e.indexOf("++"),i=1;return n&&(e=e.split("++").join("")),function(){return"<"+t+" style='position:relative;display:inline-block;'"+(e?" class='"+e+(n?i++:"")+"'>":">")}}function c(e,t,n){var i=e.nodeType;if(1===i||9===i||11===i)for(e=e.firstChild;e;e=e.nextSibling)c(e,t,n);else 3!==i&&4!==i||(e.nodeValue=e.nodeValue.split(t).join(n))}function l(e,t){for(var n=t.length;-1<--n;)e.push(t[n])}function d(e,t,n){for(var i;e&&e!==t;){if(i=e._next||e.nextSibling)return i.textContent.charAt(0)===n;e=e.parentNode||e._parent}}function u(e){var t,n,i=r(e.childNodes),s=i.length;for(t=0;t<s;t++)(n=i[t])._isSplit?u(n):(t&&3===n.previousSibling.nodeType?n.previousSibling.nodeValue+=3===n.nodeType?n.nodeValue:n.firstChild.nodeValue:3!==n.nodeType&&e.insertBefore(n.firstChild,n),e.removeChild(n))}function p(e,t){return parseFloat(t[e])||0}function h(e,t,n,r,o,a,h){var f,g,b,x,j,v,y,w,O,T,C,N,S=i(e),_=p("paddingLeft",S),A=-999,L=p("borderBottomWidth",S)+p("borderTopWidth",S),R=p("borderLeftWidth",S)+p("borderRightWidth",S),H=p("paddingTop",S)+p("paddingBottom",S),E=p("paddingLeft",S)+p("paddingRight",S),B=.2*p("fontSize",S),W=S.textAlign,X=[],Y=[],k=[],P=t.wordDelimiter||" ",q=t.tag?t.tag:t.span?"span":"div",z=t.type||t.split||"chars,words,lines",M=o&&~z.indexOf("lines")?[]:null,D=~z.indexOf("words"),F=~z.indexOf("chars"),V=s(t),I=t.linesClass,J=~(I||"").indexOf("++"),U=[];for(J&&(I=I.split("++").join("")),b=(g=e.getElementsByTagName("*")).length,j=[],f=0;f<b;f++)j[f]=g[f];if(M||V)for(f=0;f<b;f++)((v=(x=j[f]).parentNode===e)||V||F&&!D)&&(N=x.offsetTop,M&&v&&Math.abs(N-A)>B&&("BR"!==x.nodeName||0===f)&&(y=[],M.push(y),A=N),V&&(x._x=x.offsetLeft,x._y=N,x._w=x.offsetWidth,x._h=x.offsetHeight),M&&((x._isSplit&&v||!F&&v||D&&v||!D&&x.parentNode.parentNode===e&&!x.parentNode._isSplit)&&(y.push(x),x._x-=_,d(x,e,P)&&(x._wordEnd=!0)),"BR"===x.nodeName&&(x.nextSibling&&"BR"===x.nextSibling.nodeName||0===f)&&M.push([])));for(f=0;f<b;f++)v=(x=j[f]).parentNode===e,"BR"!==x.nodeName?(V&&(O=x.style,D||v||(x._x+=x.parentNode._x,x._y+=x.parentNode._y),O.left=x._x+"px",O.top=x._y+"px",O.position="absolute",O.display="block",O.width=x._w+1+"px",O.height=x._h+"px"),!D&&F?x._isSplit?(x._next=x.nextSibling,x.parentNode.appendChild(x)):x.parentNode._isSplit?(x._parent=x.parentNode,!x.previousSibling&&x.firstChild&&(x.firstChild._isFirst=!0),x.nextSibling&&" "===x.nextSibling.textContent&&!x.nextSibling.nextSibling&&U.push(x.nextSibling),x._next=x.nextSibling&&x.nextSibling._isFirst?null:x.nextSibling,x.parentNode.removeChild(x),j.splice(f--,1),b--):v||(N=!x.nextSibling&&d(x.parentNode,e,P),x.parentNode._parent&&x.parentNode._parent.appendChild(x),N&&x.parentNode.appendChild(m.createTextNode(" ")),"span"===q&&(x.style.display="inline"),X.push(x)):x.parentNode._isSplit&&!x._isSplit&&""!==x.innerHTML?Y.push(x):F&&!x._isSplit&&("span"===q&&(x.style.display="inline"),X.push(x))):M||V?(x.parentNode&&x.parentNode.removeChild(x),j.splice(f--,1),b--):D||e.appendChild(x);for(f=U.length;-1<--f;)U[f].parentNode.removeChild(U[f]);if(M){for(V&&(T=m.createElement(q),e.appendChild(T),C=T.offsetWidth+"px",N=T.offsetParent===e?0:e.offsetLeft,e.removeChild(T)),O=e.style.cssText,e.style.cssText="display:none;";e.firstChild;)e.removeChild(e.firstChild);for(w=" "===P&&(!V||!D&&!F),f=0;f<M.length;f++){for(y=M[f],(T=m.createElement(q)).style.cssText="display:block;text-align:"+W+";position:"+(V?"absolute;":"relative;"),I&&(T.className=I+(J?f+1:"")),k.push(T),b=y.length,g=0;g<b;g++)"BR"!==y[g].nodeName&&(x=y[g],T.appendChild(x),w&&x._wordEnd&&T.appendChild(m.createTextNode(" ")),V&&(0===g&&(T.style.top=x._y+"px",T.style.left=_+N+"px"),x.style.top="0px",N&&(x.style.left=x._x-N+"px")));0===b?T.innerHTML="&nbsp;":D||F||(u(T),c(T,String.fromCharCode(160)," ")),V&&(T.style.width=C,T.style.height=x._h+"px"),e.appendChild(T)}e.style.cssText=O}V&&(h>e.clientHeight&&(e.style.height=h-H+"px",e.clientHeight<h&&(e.style.height=h+L+"px")),a>e.clientWidth&&(e.style.width=a-E+"px",e.clientWidth<a&&(e.style.width=a+R+"px"))),l(n,X),D&&l(r,Y),l(o,k)}function f(e,n,i,r){var a,l,d,u,p,h,f,g,b=n.tag?n.tag:n.span?"span":"div",x=~(n.type||n.split||"chars,words,lines").indexOf("chars"),y=s(n),w=n.wordDelimiter||" ",O=" "!==w?"":y?"&#173; ":" ",T="</"+b+">",C=1,N=n.specialChars?"function"==typeof n.specialChars?n.specialChars:o:null,S=m.createElement("div"),_=e.parentNode;for(_.insertBefore(S,e),S.textContent=e.nodeValue,_.removeChild(e),f=-1!==(a=function e(t){var n=t.nodeType,i="";if(1===n||9===n||11===n){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=e(t)}else if(3===n||4===n)return t.nodeValue;return i}(e=S)).indexOf("<"),!1!==n.reduceWhiteSpace&&(a=a.replace(v," ").replace(j,"")),f&&(a=a.split("<").join("{{LT}}")),p=a.length,l=(" "===a.charAt(0)?O:"")+i(),d=0;d<p;d++)if(h=a.charAt(d),N&&(g=N(a.substr(d),n.specialChars)))h=a.substr(d,g||1),l+=x&&" "!==h?r()+h+"</"+b+">":h,d+=g-1;else if(h===w&&a.charAt(d-1)!==w&&d){for(l+=C?T:"",C=0;a.charAt(d+1)===w;)l+=O,d++;d===p-1?l+=O:")"!==a.charAt(d+1)&&(l+=O+i(),C=1)}else"{"===h&&"{{LT}}"===a.substr(d,6)?(l+=x?r()+"{{LT}}</"+b+">":"{{LT}}",d+=5):55296<=h.charCodeAt(0)&&h.charCodeAt(0)<=56319||65024<=a.charCodeAt(d+1)&&a.charCodeAt(d+1)<=65039?(u=((a.substr(d,12).split(t)||[])[1]||"").length||2,l+=x&&" "!==h?r()+a.substr(d,u)+"</"+b+">":a.substr(d,u),d+=u-1):l+=x&&" "!==h?r()+h+"</"+b+">":h;e.outerHTML=l+(C?T:""),f&&c(_,"{{LT}}","<")}function g(e,t,n,o){var a,c,l=r(e.childNodes),d=l.length,u=s(t);if(3!==e.nodeType||1<d){for(t.absolute=!1,a=0;a<d;a++)3===(c=l[a]).nodeType&&!/\S+/.test(c.nodeValue)||(u&&3!==c.nodeType&&"inline"===i(c).display&&(c.style.display="inline-block",c.style.position="relative"),c._isSplit=!0,g(c,t,n,o));return t.absolute=u,void(e._isSplit=!0)}f(e,t,n,o)}var m,b,x,j=/(?:\r|\n|\t\t)/g,v=/(?:\s\s+)/g,y=(n(103,114,101,101,110,115,111,99,107,46,99,111,109),!0),w=Array.isArray,O=[].slice,T=function(){function e(e,t){x||(m=document,b=window,x=1),this.elements=r(e),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=t||{},y&&this.split(t)}var t=e.prototype;return t.split=function(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var t,n,i,r=this.elements.length,s=e.tag?e.tag:e.span?"span":"div",o=a(e.wordsClass,s),c=a(e.charsClass,s);-1<--r;)i=this.elements[r],this._originals[r]=i.innerHTML,t=i.clientHeight,n=i.clientWidth,g(i,e,o,c),h(i,e,this.chars,this.words,this.lines,n,t);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},t.revert=function(){var e=this._originals;if(!e)throw"revert() call wasn't scoped properly.";return this.elements.forEach((function(t,n){return t.innerHTML=e[n]})),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},e.create=function(t,n){return new e(t,n)},e}();T.version="3.0.0",e.SplitText=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})}(t)},,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),s=n(8),o=n.n(s),a=(n(20),n(21),n(2)),c=n(7),l=n(4),d=n(5),u=n(3),p=(n(22),n(0)),h={trigger:"#name",start:0,end:800,scrub:2};function f(){var e=Object(i.useRef)();return a.a.registerPlugin(c.a),Object(i.useEffect)((function(){var t=new d.SplitText("#name"),n=new d.SplitText("#lastname"),i=t.chars,r=n.chars.reverse();a.a.fromTo(r,{opacity:0,x:-500},{opacity:1,x:0,stagger:.02}),a.a.fromTo(i,{opacity:0,x:500},{opacity:1,x:0,stagger:.02,ease:"circ",onComplete:function(){a.a.to(i,{scrollTrigger:h,stagger:.02,x:-window.innerWidth,opacity:0}),a.a.to(r,{scrollTrigger:h,stagger:.02,x:window.innerWidth,opacity:0})}}),a.a.to("#title",{scrollTrigger:{trigger:"#title",start:0,end:"top top",scrub:2},left:0}),l.a.create({trigger:".content",start:"top top",end:"+=10000",pin:!0,anticipatePin:!0}),a.a.to(e.current,{scrollTrigger:{start:0,end:"+=500",scrub:1},autoAlpha:0,letterSpacing:"0.3vw"})})),Object(p.jsxs)("div",{className:"top",children:[Object(p.jsx)("div",{className:"name",id:"name",children:"Alexandre"}),Object(p.jsx)("div",{className:"name",id:"lastname",children:"Bizord"}),Object(p.jsx)("div",{className:"title",id:"title",children:"Digital Artist & Developer"}),Object(p.jsxs)("div",{className:"show-projects",ref:e,children:[Object(p.jsx)("p",{onClick:function(){a.a.to(window,{duration:.75,scrollTo:{y:"#content",offsetY:-300},ease:"power2"})},children:"Scroll to see my projects"}),Object(p.jsx)(u.a,{style:{transform:"scaleX(1.5)"}})]})]})}n(24);function g(){var e=r.a.useRef(null),t=r.a.useRef(null),n=r.a.useRef({mouseX:0,mouseY:0,destinationX:0,destinationY:0,distanceX:0,distanceY:0,key:-1});return r.a.useEffect((function(){return document.addEventListener("mousemove",(function(i){var r=i.clientX,s=i.clientY;n.current.mouseX=r-e.current.clientWidth/2,n.current.mouseY=s-e.current.clientHeight/2,t.current.style.transform="translate3d(".concat(r-t.current.clientWidth/2,"px, ").concat(s-t.current.clientHeight/2,"px, 0)")})),function(){}}),[]),r.a.useEffect((function(){!function t(){n.current.key=requestAnimationFrame(t);var i=n.current,r=i.mouseX,s=i.mouseY,o=i.destinationX,a=i.destinationY,c=i.distanceX,l=i.distanceY;o&&a?(n.current.distanceX=.1*(r-o),n.current.distanceY=.1*(s-a),Math.abs(n.current.distanceX)+Math.abs(n.current.distanceY)<.1?(n.current.destinationX=r,n.current.destinationY=s):(n.current.destinationX+=c,n.current.destinationY+=l)):(n.current.destinationX=r,n.current.destinationY=s),e.current.style.transform="translate3d(".concat(o,"px, ").concat(a,"px, 0)")}()}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"main-cursor",ref:t,children:Object(p.jsx)("div",{className:"main-cursor-background"})}),Object(p.jsx)("div",{className:"secondary-cursor",ref:e,children:Object(p.jsx)("div",{className:"cursor-background"})})]})}var m=[{name:"Concentricated",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",imagesPath:"concentricated",imagesCount:6},{name:"Digital Noodles",description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur but also Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",imagesPath:"noodles",imagesCount:8},{name:"Luminous Fantasy",description:"Small Desc",imagesPath:"luminous",imagesCount:8}];n(25);function b(e){var t=e.direction,n=e.horizontal_align,r=e.containerRef,s=e.offset,o=e.project,c=window.innerHeight,l=Object(i.useRef)();return Object(i.useEffect)((function(){var e=l.current.clientHeight;a.a.timeline({scrollTrigger:{trigger:r.current,start:s?window.innerHeight/2+s-300:"top top",scrub:.5,end:"+="+(2e3-c)}}).fromTo(l.current,{autoAlpha:0},{autoAlpha:1}).from(l.current,{y:"up"===t?c:-e,ease:"none"},"<").to(l.current,{y:"up"===t?-e:c,ease:"none"}).set(l.current,{autoAlpha:0})})),Object(p.jsx)("div",{className:"image-slider",ref:l,style:"left"===n?{left:"2vw"}:{right:"2vw"},children:function(){for(var e=[],t=0;t<o.imagesCount/2;t++){var i="assets/images/"+o.imagesPath+"/"+("left"===n?t:o.imagesCount-t-1)+".png";e.push(Object(p.jsx)("img",{src:i,alt:""},i))}return e}()})}n(26);function x(e){var t=e.first,n=void 0!==t&&t,r=e.offset,s=void 0===r?0:r,o=e.project,c=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)();return Object(i.useEffect)((function(){var e=new d.SplitText(l.current).chars;n?a.a.fromTo(l.current,{y:500,autoAlpha:0},{scrollTrigger:{trigger:".content",start:"top bottom",end:"top top",scrub:1,onLeave:function(){a.a.fromTo(e,{autoAlpha:1},{scrollTrigger:{trigger:".content",start:window.innerHeight/2+s+2e3-300,end:"+=100",scrub:1},stagger:.02,autoAlpha:0,y:-100})}},y:0,autoAlpha:1}):a.a.fromTo(e,{autoAlpha:0,y:100},{scrollTrigger:{trigger:".content",start:window.innerHeight/2+s-300,end:"+=100",scrub:1,onLeave:function(){a.a.fromTo(e,{autoAlpha:1},{scrollTrigger:{trigger:".content",start:window.innerHeight/2+s+1700-300,end:"+=100",scrub:1},stagger:.02,autoAlpha:0,y:-100})}},stagger:.02,autoAlpha:1,y:0}),new a.a.timeline({scrollTrigger:{trigger:".content",start:s?window.innerHeight/2+s-300:"top center",end:"+=2000",scrub:1}}).fromTo(u.current,{y:300,autoAlpha:0},{y:0,autoAlpha:1,ease:"power1",duration:2}).to(u.current,{autoAlpha:0,scale:.5})})),Object(p.jsxs)("div",{className:"project-container"+(n?"":" absolute-container"),ref:c,children:[Object(p.jsxs)("div",{className:"project-pictures",children:[Object(p.jsx)(b,{direction:"up",horizontal_align:"left",containerRef:c,offset:s,project:o}),Object(p.jsx)(b,{direction:"down",horizontal_align:"right",containerRef:c,offset:s,project:o})]}),Object(p.jsxs)("div",{className:"project-infos",children:[Object(p.jsx)("div",{className:"project-name",ref:l,children:o.name}),Object(p.jsx)("div",{className:"project-desc",ref:u,children:o.description})]})]})}function j(){return Object(p.jsx)("div",{className:"content",id:"content",children:m.map((function(e,t){return Object(p.jsx)(x,{first:0===t,offset:0===t?0:2e3*t-300*(t-1),project:e},t)}))})}n(27);function v(){var e=Object(i.useRef)(),t=Object(i.useRef)(),n=Object(i.useRef)();return Object(i.useEffect)((function(){a.a.to(t.current,{scrollTrigger:{trigger:".content",start:0,end:"+=500",scrub:1},scale:.7,paddingRight:"2vw",paddingTop:"2vh"}),a.a.fromTo(n.current,{autoAlpha:0},{scrollTrigger:{start:window.innerHeight/2,end:"+=500",scrub:1},autoAlpha:1})})),Object(p.jsxs)("div",{className:"header",ref:e,children:[Object(p.jsxs)("div",{className:"header-name",ref:n,children:["Alexandre",Object(p.jsx)("br",{}),"Bizord"]}),Object(p.jsxs)("div",{className:"header-icons",ref:t,children:[Object(p.jsx)(u.c,{size:40}),Object(p.jsx)(u.d,{size:40}),Object(p.jsx)(u.e,{size:40}),Object(p.jsx)(u.b,{size:40})]})]})}var y=function(){return a.a.registerPlugin(l.a),Object(p.jsx)("div",{children:Object(p.jsx)("div",{id:"viewport",children:Object(p.jsxs)("div",{id:"content-scroll",children:[Object(p.jsx)(g,{}),Object(p.jsx)(f,{}),Object(p.jsx)(j,{}),Object(p.jsx)(v,{})]})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),s(e),o(e)}))};o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),w()}],[[28,1,2]]]);
//# sourceMappingURL=main.565cfc5f.chunk.js.map