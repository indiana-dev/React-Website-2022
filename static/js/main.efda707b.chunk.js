/*! For license information please see main.efda707b.chunk.js.LICENSE.txt */
(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{24:function(e,t,n){!function(e){"use strict";var t="";function n(){return String.fromCharCode.apply(null,arguments)}function i(e){return v.getComputedStyle(e)}function r(e,t){var n;return w(e)?e:"string"==(n=typeof e)&&!t&&e?O.call(m.querySelectorAll(e),0):e&&"object"==n&&"length"in e?O.call(e,0):e?[e]:[]}function s(e){return"absolute"===e.position||!0===e.absolute}function o(e,t){for(var n,i=t.length;-1<--i;)if(n=t[i],e.substr(0,n.length)===n)return n.length}function a(e,t){void 0===e&&(e="");var n=~e.indexOf("++"),i=1;return n&&(e=e.split("++").join("")),function(){return"<"+t+" style='position:relative;display:inline-block;'"+(e?" class='"+e+(n?i++:"")+"'>":">")}}function c(e,t,n){var i=e.nodeType;if(1===i||9===i||11===i)for(e=e.firstChild;e;e=e.nextSibling)c(e,t,n);else 3!==i&&4!==i||(e.nodeValue=e.nodeValue.split(t).join(n))}function l(e,t){for(var n=t.length;-1<--n;)e.push(t[n])}function d(e,t,n){for(var i;e&&e!==t;){if(i=e._next||e.nextSibling)return i.textContent.charAt(0)===n;e=e.parentNode||e._parent}}function u(e){var t,n,i=r(e.childNodes),s=i.length;for(t=0;t<s;t++)(n=i[t])._isSplit?u(n):(t&&3===n.previousSibling.nodeType?n.previousSibling.nodeValue+=3===n.nodeType?n.nodeValue:n.firstChild.nodeValue:3!==n.nodeType&&e.insertBefore(n.firstChild,n),e.removeChild(n))}function h(e,t){return parseFloat(t[e])||0}function p(e,t,n,r,o,a,p){var f,g,v,x,b,j,y,w,O,C,S,N,T=i(e),_=h("paddingLeft",T),A=-999,M=h("borderBottomWidth",T)+h("borderTopWidth",T),R=h("borderLeftWidth",T)+h("borderRightWidth",T),z=h("paddingTop",T)+h("paddingBottom",T),D=h("paddingLeft",T)+h("paddingRight",T),E=.2*h("fontSize",T),L=T.textAlign,P=[],H=[],V=[],X=t.wordDelimiter||" ",k=t.tag?t.tag:t.span?"span":"div",F=t.type||t.split||"chars,words,lines",W=o&&~F.indexOf("lines")?[]:null,B=~F.indexOf("words"),Y=~F.indexOf("chars"),q=s(t),I=t.linesClass,U=~(I||"").indexOf("++"),G=[];for(U&&(I=I.split("++").join("")),v=(g=e.getElementsByTagName("*")).length,b=[],f=0;f<v;f++)b[f]=g[f];if(W||q)for(f=0;f<v;f++)((j=(x=b[f]).parentNode===e)||q||Y&&!B)&&(N=x.offsetTop,W&&j&&Math.abs(N-A)>E&&("BR"!==x.nodeName||0===f)&&(y=[],W.push(y),A=N),q&&(x._x=x.offsetLeft,x._y=N,x._w=x.offsetWidth,x._h=x.offsetHeight),W&&((x._isSplit&&j||!Y&&j||B&&j||!B&&x.parentNode.parentNode===e&&!x.parentNode._isSplit)&&(y.push(x),x._x-=_,d(x,e,X)&&(x._wordEnd=!0)),"BR"===x.nodeName&&(x.nextSibling&&"BR"===x.nextSibling.nodeName||0===f)&&W.push([])));for(f=0;f<v;f++)j=(x=b[f]).parentNode===e,"BR"!==x.nodeName?(q&&(O=x.style,B||j||(x._x+=x.parentNode._x,x._y+=x.parentNode._y),O.left=x._x+"px",O.top=x._y+"px",O.position="absolute",O.display="block",O.width=x._w+1+"px",O.height=x._h+"px"),!B&&Y?x._isSplit?(x._next=x.nextSibling,x.parentNode.appendChild(x)):x.parentNode._isSplit?(x._parent=x.parentNode,!x.previousSibling&&x.firstChild&&(x.firstChild._isFirst=!0),x.nextSibling&&" "===x.nextSibling.textContent&&!x.nextSibling.nextSibling&&G.push(x.nextSibling),x._next=x.nextSibling&&x.nextSibling._isFirst?null:x.nextSibling,x.parentNode.removeChild(x),b.splice(f--,1),v--):j||(N=!x.nextSibling&&d(x.parentNode,e,X),x.parentNode._parent&&x.parentNode._parent.appendChild(x),N&&x.parentNode.appendChild(m.createTextNode(" ")),"span"===k&&(x.style.display="inline"),P.push(x)):x.parentNode._isSplit&&!x._isSplit&&""!==x.innerHTML?H.push(x):Y&&!x._isSplit&&("span"===k&&(x.style.display="inline"),P.push(x))):W||q?(x.parentNode&&x.parentNode.removeChild(x),b.splice(f--,1),v--):B||e.appendChild(x);for(f=G.length;-1<--f;)G[f].parentNode.removeChild(G[f]);if(W){for(q&&(C=m.createElement(k),e.appendChild(C),S=C.offsetWidth+"px",N=C.offsetParent===e?0:e.offsetLeft,e.removeChild(C)),O=e.style.cssText,e.style.cssText="display:none;";e.firstChild;)e.removeChild(e.firstChild);for(w=" "===X&&(!q||!B&&!Y),f=0;f<W.length;f++){for(y=W[f],(C=m.createElement(k)).style.cssText="display:block;text-align:"+L+";position:"+(q?"absolute;":"relative;"),I&&(C.className=I+(U?f+1:"")),V.push(C),v=y.length,g=0;g<v;g++)"BR"!==y[g].nodeName&&(x=y[g],C.appendChild(x),w&&x._wordEnd&&C.appendChild(m.createTextNode(" ")),q&&(0===g&&(C.style.top=x._y+"px",C.style.left=_+N+"px"),x.style.top="0px",N&&(x.style.left=x._x-N+"px")));0===v?C.innerHTML="&nbsp;":B||Y||(u(C),c(C,String.fromCharCode(160)," ")),q&&(C.style.width=S,C.style.height=x._h+"px"),e.appendChild(C)}e.style.cssText=O}q&&(p>e.clientHeight&&(e.style.height=p-z+"px",e.clientHeight<p&&(e.style.height=p+M+"px")),a>e.clientWidth&&(e.style.width=a-D+"px",e.clientWidth<a&&(e.style.width=a+R+"px"))),l(n,P),B&&l(r,H),l(o,V)}function f(e,n,i,r){var a,l,d,u,h,p,f,g,v=n.tag?n.tag:n.span?"span":"div",x=~(n.type||n.split||"chars,words,lines").indexOf("chars"),y=s(n),w=n.wordDelimiter||" ",O=" "!==w?"":y?"&#173; ":" ",C="</"+v+">",S=1,N=n.specialChars?"function"==typeof n.specialChars?n.specialChars:o:null,T=m.createElement("div"),_=e.parentNode;for(_.insertBefore(T,e),T.textContent=e.nodeValue,_.removeChild(e),f=-1!==(a=function e(t){var n=t.nodeType,i="";if(1===n||9===n||11===n){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=e(t)}else if(3===n||4===n)return t.nodeValue;return i}(e=T)).indexOf("<"),!1!==n.reduceWhiteSpace&&(a=a.replace(j," ").replace(b,"")),f&&(a=a.split("<").join("{{LT}}")),h=a.length,l=(" "===a.charAt(0)?O:"")+i(),d=0;d<h;d++)if(p=a.charAt(d),N&&(g=N(a.substr(d),n.specialChars)))p=a.substr(d,g||1),l+=x&&" "!==p?r()+p+"</"+v+">":p,d+=g-1;else if(p===w&&a.charAt(d-1)!==w&&d){for(l+=S?C:"",S=0;a.charAt(d+1)===w;)l+=O,d++;d===h-1?l+=O:")"!==a.charAt(d+1)&&(l+=O+i(),S=1)}else"{"===p&&"{{LT}}"===a.substr(d,6)?(l+=x?r()+"{{LT}}</"+v+">":"{{LT}}",d+=5):55296<=p.charCodeAt(0)&&p.charCodeAt(0)<=56319||65024<=a.charCodeAt(d+1)&&a.charCodeAt(d+1)<=65039?(u=((a.substr(d,12).split(t)||[])[1]||"").length||2,l+=x&&" "!==p?r()+a.substr(d,u)+"</"+v+">":a.substr(d,u),d+=u-1):l+=x&&" "!==p?r()+p+"</"+v+">":p;e.outerHTML=l+(S?C:""),f&&c(_,"{{LT}}","<")}function g(e,t,n,o){var a,c,l=r(e.childNodes),d=l.length,u=s(t);if(3!==e.nodeType||1<d){for(t.absolute=!1,a=0;a<d;a++)3===(c=l[a]).nodeType&&!/\S+/.test(c.nodeValue)||(u&&3!==c.nodeType&&"inline"===i(c).display&&(c.style.display="inline-block",c.style.position="relative"),c._isSplit=!0,g(c,t,n,o));return t.absolute=u,void(e._isSplit=!0)}f(e,t,n,o)}var m,v,x,b=/(?:\r|\n|\t\t)/g,j=/(?:\s\s+)/g,y=(n(103,114,101,101,110,115,111,99,107,46,99,111,109),!0),w=Array.isArray,O=[].slice,C=function(){function e(e,t){x||(m=document,v=window,x=1),this.elements=r(e),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=t||{},y&&this.split(t)}var t=e.prototype;return t.split=function(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var t,n,i,r=this.elements.length,s=e.tag?e.tag:e.span?"span":"div",o=a(e.wordsClass,s),c=a(e.charsClass,s);-1<--r;)i=this.elements[r],this._originals[r]=i.innerHTML,t=i.clientHeight,n=i.clientWidth,g(i,e,o,c),p(i,e,this.chars,this.words,this.lines,n,t);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},t.revert=function(){var e=this._originals;if(!e)throw"revert() call wasn't scoped properly.";return this.elements.forEach((function(t,n){return t.innerHTML=e[n]})),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},e.create=function(t,n){return new e(t,n)},e}();C.version="3.0.0",e.SplitText=C,e.default=C,Object.defineProperty(e,"__esModule",{value:!0})}(t)},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var i=n(6),r=n.n(i),s=n(37),o=n.n(s),a=(n(54),n(55),n(12)),c=n(36),l=n(18),d=n(24),u=n(21),h=(n(56),n(7)),p={trigger:"#name",start:0,end:800,scrub:2};function f(){var e=Object(i.useRef)();return a.a.registerPlugin(c.a),Object(i.useEffect)((function(){var t=new d.SplitText("#name"),n=new d.SplitText("#lastname"),i=t.chars,r=n.chars.reverse();a.a.fromTo(r,{opacity:0,x:-500},{opacity:1,x:0,stagger:.02}),a.a.fromTo(i,{opacity:0,x:500},{opacity:1,x:0,stagger:.02,ease:"circ",onComplete:function(){a.a.to(i,{scrollTrigger:p,stagger:.02,x:-window.innerWidth,opacity:0}),a.a.to(r,{scrollTrigger:p,stagger:.02,x:window.innerWidth,opacity:0})}}),a.a.to("#title",{scrollTrigger:{trigger:"#title",start:0,end:"top top",scrub:2},left:0}),l.a.create({trigger:".content",start:"top top",end:"+=7000",pin:!0,anticipatePin:!0}),a.a.to(e.current,{scrollTrigger:{start:0,end:"+=500",scrub:1},autoAlpha:0,letterSpacing:"0.3vw"})})),Object(h.jsxs)("div",{className:"top",children:[Object(h.jsx)("div",{className:"name",id:"name",children:"Alexandre"}),Object(h.jsx)("div",{className:"name",id:"lastname",children:"Bizord"}),Object(h.jsx)("div",{className:"title",id:"title",children:"Digital Artist & Developer"}),Object(h.jsxs)("div",{className:"show-projects",ref:e,children:[Object(h.jsx)("p",{onClick:function(){a.a.to(window,{duration:.75,scrollTo:{y:"#content",offsetY:-300},ease:"power2"})},children:"Scroll to see my projects"}),Object(h.jsx)(u.a,{style:{transform:"scaleX(1.5)"}})]})]})}n(58);function g(){var e=r.a.useRef(null),t=r.a.useRef(null),n=r.a.useRef({mouseX:0,mouseY:0,destinationX:0,destinationY:0,distanceX:0,distanceY:0,key:-1});return r.a.useEffect((function(){return document.addEventListener("mousemove",(function(i){var r=i.clientX,s=i.clientY;n.current.mouseX=r-e.current.clientWidth/2,n.current.mouseY=s-e.current.clientHeight/2,t.current.style.transform="translate3d(".concat(r-t.current.clientWidth/2,"px, ").concat(s-t.current.clientHeight/2,"px, 0)")})),function(){}}),[]),r.a.useEffect((function(){!function t(){n.current.key=requestAnimationFrame(t);var i=n.current,r=i.mouseX,s=i.mouseY,o=i.destinationX,a=i.destinationY,c=i.distanceX,l=i.distanceY;o&&a?(n.current.distanceX=.1*(r-o),n.current.distanceY=.1*(s-a),Math.abs(n.current.distanceX)+Math.abs(n.current.distanceY)<.1?(n.current.destinationX=r,n.current.destinationY=s):(n.current.destinationX+=c,n.current.destinationY+=l)):(n.current.destinationX=r,n.current.destinationY=s),e.current.style.transform="translate3d(".concat(o,"px, ").concat(a,"px, 0)")}()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"main-cursor",ref:t,children:Object(h.jsx)("div",{className:"main-cursor-background"})}),Object(h.jsx)("div",{className:"secondary-cursor",ref:e,children:Object(h.jsx)("div",{className:"cursor-background"})})]})}var m=[{name:"Concentricated",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",imagesPath:"concentricated",imagesCount:6},{name:"Digital Noodles",description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur but also Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",imagesPath:"noodles",imagesCount:8},{name:"Luminous Fantasy",description:"Small Desc",imagesPath:"luminous",imagesCount:8},{name:"22222 Fantasy",description:"Small Desc",imagesPath:"luminous",imagesCount:8}];n(59);function v(e){var t=e.direction,n=e.horizontal_align,r=e.containerRef,s=e.offset,o=e.project,c=window.innerHeight,l=Object(i.useRef)();return Object(i.useEffect)((function(){var e=l.current.clientHeight;a.a.timeline({scrollTrigger:{trigger:r.current,start:s?window.innerHeight/2+s:"top top",scrub:.5,end:"+="+(2e3-c)}}).fromTo(l.current,{autoAlpha:0},{autoAlpha:1}).from(l.current,{y:"up"===t?c:-e,ease:"none"},"<").to(l.current,{y:"up"===t?-e:c,ease:"none"}).set(l.current,{autoAlpha:0})})),Object(h.jsx)("div",{className:"image-slider",ref:l,style:"left"===n?{left:"2vw"}:{right:"2vw"},children:function(){for(var e=[],t=0;t<o.imagesCount/2;t++){var i="assets/images/"+o.imagesPath+"/"+("left"===n?t:o.imagesCount-t-1)+".png";e.push(Object(h.jsx)("img",{src:i,alt:""},i))}return e}()})}n(60);function x(e){var t=e.first,n=void 0!==t&&t,r=e.offset,s=void 0===r?0:r,o=e.project,c=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)();return Object(i.useEffect)((function(){var e=new d.SplitText(l.current).chars;new a.a.timeline({scrollTrigger:{trigger:".content",start:window.innerHeight/2+s-300,end:"+=1800",scrub:1}}).fromTo(e,{autoAlpha:0,y:100},{stagger:.02,autoAlpha:1,y:0}).to(e,{stagger:.02,autoAlpha:0,y:-100},"+=2"),new a.a.timeline({scrollTrigger:{trigger:".content",start:s?window.innerHeight/2+s-300:"top center",end:"+=2000",scrub:1}}).fromTo(u.current,{y:300,autoAlpha:0},{y:0,autoAlpha:1,ease:"power1",duration:2}).to(u.current,{autoAlpha:0,scale:.5})})),Object(h.jsxs)("div",{className:"project-container"+(n?"":" absolute-container"),ref:c,children:[Object(h.jsxs)("div",{className:"project-pictures",children:[Object(h.jsx)(v,{direction:"up",horizontal_align:"left",containerRef:c,offset:s,project:o}),Object(h.jsx)(v,{direction:"down",horizontal_align:"right",containerRef:c,offset:s,project:o})]}),Object(h.jsxs)("div",{className:"project-infos",children:[Object(h.jsx)("div",{className:"project-name",ref:l,children:o.name}),Object(h.jsx)("div",{className:"project-desc",ref:u,children:o.description})]})]})}n(61);function b(){return Object(h.jsx)("div",{className:"content",id:"content",children:m.map((function(e,t){return Object(h.jsx)(x,{first:0===t,offset:2e3*t-300*(t-1),project:e},t)}))})}n(62);function j(){var e=Object(i.useRef)(),t=Object(i.useRef)(),n=Object(i.useRef)();return Object(i.useEffect)((function(){a.a.to(t.current,{scrollTrigger:{trigger:".content",start:0,end:"+=500",scrub:1},scale:.7,paddingRight:"2vw",paddingTop:"2vh"}),a.a.fromTo(n.current,{autoAlpha:0},{scrollTrigger:{start:window.innerHeight/2,end:"+=500",scrub:1},autoAlpha:1})})),Object(h.jsxs)("div",{className:"header",ref:e,children:[Object(h.jsxs)("div",{className:"header-name",ref:n,children:["Alexandre",Object(h.jsx)("br",{}),"Bizord"]}),Object(h.jsxs)("div",{className:"header-icons",ref:t,children:[Object(h.jsx)(u.c,{size:40}),Object(h.jsx)(u.d,{size:40}),Object(h.jsx)(u.e,{size:40}),Object(h.jsx)(u.b,{size:40})]})]})}var y=n(11),w=n(0),O=n(1),C=n(69),S=n(70),N=n(17),T=n(9);n(63);function _(e){return e*Math.PI/180}var A=function(){function e(){Object(w.a)(this,e),this.pos=new T.Vector3(-1,1,1),this.vel=new T.Vector3(0,0,.02),this.yaw=-90,this.pitch=0,this.speed=1,this.rotationSpeed=1,this.updateViewMatrix()}return Object(O.a)(e,[{key:"updateViewMatrix",value:function(){this.front=new T.Vector3(Math.cos(_(this.pitch))*Math.cos(_(this.yaw)),Math.sin(_(this.pitch)),Math.cos(_(this.pitch))*Math.sin(_(this.yaw))).normalize(),this.right=this.front.clone().cross(new T.Vector3(0,1,0)).normalize(),this.up=this.right.clone().cross(this.front).normalize(),this.viewMatrix=function(e,t,n){if(e.equals(t))return new T.Matrix4;var i=t.sub(e).normalize(),r=i.clone().cross(n).normalize(),s=r.clone().cross(i).normalize();i.negate();var o=new T.Matrix4;return o.set(r.x,r.y,r.z,-r.dot(e),s.x,s.y,s.z,-s.dot(e),i.x,i.y,i.z,-i.dot(e),0,0,0,1),o}(this.pos.clone(),this.pos.clone().add(this.front),this.up.clone()).transpose()}}]),e}(),M=Object(C.a)({time:0,color:new T.Color(.2,0,.1),view_matrix:void 0,camPos:[1.4,1.5,1.6],uResolution:void 0},"\n      varying vec2 vUv;\n      void main() {\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n        vUv = uv;\n      }\n    ","\n      uniform float time;\n      uniform vec3 color;\n      uniform vec2 uResolution;\n      uniform vec3 camPos;\n      uniform mat4 view_matrix;\n      varying vec2 vUv;\n\n      // DISTANCE FUNCTIONS\n\n    float fRepeatedSphere(vec3 p, float r) {\n        vec3 c = vec3(10.);\n        vec3 q = mod(p+0.5*c,c)-0.5*c;\n        return length(q) - r;\n    }\n\n    // SCENE\n\n    float sceneSDF(vec3 p) {\n        return fRepeatedSphere(p, 1.);\n    }\n      // RAYMARCH FUNCTIONS\n\n      const float EPSILON = 0.01;\n    const float MAX_DIST = 1000.;\n    const int MAX_MARCHING_STEPS = 1000;\n\n    vec3 rayDirection(float fieldOfView, vec2 size, vec2 fragCoord) {\n        vec2 xy = fragCoord - size / 2.0;\n        float z = size.y / tan(radians(fieldOfView) / 2.0);\n        return normalize(vec3(xy, -z));\n    }\n\n    vec2 shortestDistanceToSurface(vec3 eye, vec3 marchingDirection, float start, float end) {\n        float depth = start;\n        for (int i = 0; i < MAX_MARCHING_STEPS; i++) {\n            vec3 point = eye + depth * marchingDirection;\n            float dist = min(point.y, sceneSDF(point));\n\n            if (point.y < EPSILON) {\n                return vec2(depth, 1.);\n            }\n            \n            if (dist < EPSILON) {\n                return vec2(depth, 0.);\n            }\n            \n            depth += dist;\n            if (depth >= end) {\n                return vec2(end, -2.);\n            }\n        }\n        return vec2(end, -1.);\n    }\n\n      void main() {\n        vec3 viewDir = rayDirection(60., uResolution, vUv*uResolution);\n        vec3 worldDir = (view_matrix * vec4(viewDir, 0.)).xyz;\n        vec2 result = shortestDistanceToSurface(camPos, worldDir, 0., MAX_DIST);\n        float dist = result.x;\n        float type = result.y;\n        vec3 p = camPos + dist * worldDir;\n\n        // Didn't hit anything\n        if (type < 0.) {\n            gl_FragColor = vec4(0.,0.,0.,1.);//vec4(.2, .2, .2, 1.);\n            return;\n        }\n        \n        float d = dist/((sin(time)+1.)*250.+200.) + 0.5/dist;\n        vec3 finalColor = mix(vec3(d, 0., 0.), vec3(0.), dist/800.);\n        gl_FragColor = vec4(finalColor, 1.);\n      }\n    ");function R(){var e=new T.Vector2(window.innerWidth,window.innerHeight),t=Object(i.useState)(new A),n=Object(y.a)(t,2),r=n[0],s=(n[1],Object(i.useRef)(null));return Object(N.c)((function(e){var t=e.clock;s.current.time=t.getElapsedTime(),r.pos.sub(r.vel),Math.abs(r.vel.z)>.02&&(r.vel.z*=.98)})),Object(i.useEffect)((function(){l.a.create({onUpdate:function(e){var t=e.getVelocity();t=Math.sqrt(Math.abs(t))*Math.sign(t)*5e-4,r.vel.z=Math.max(Math.min(r.vel.z+t,3),-3)}})})),Object(h.jsx)(S.a,{makeDefault:!0,args:[-1,1,1,-1,0,1],onClick:function(){},children:Object(h.jsxs)("mesh",{children:[Object(h.jsx)("planeBufferGeometry",{args:[window.innerWidth,window.innerHeight]}),Object(h.jsx)("colorShiftMaterial",{attach:"material",color:"hotpink",camPos:r.pos,time:0,view_matrix:r.viewMatrix,uResolution:e,ref:s})]})})}function z(){return Object(h.jsx)("div",{className:"bg",children:Object(h.jsx)(N.a,{children:Object(h.jsx)(R,{})})})}Object(N.b)({ColorShiftMaterial:M});var D=function(){return a.a.registerPlugin(l.a),Object(h.jsxs)("div",{children:[Object(h.jsx)(z,{}),Object(h.jsx)("div",{id:"viewport",children:Object(h.jsxs)("div",{id:"content-scroll",children:[Object(h.jsx)(g,{}),Object(h.jsx)(f,{}),Object(h.jsx)(b,{}),Object(h.jsx)(j,{})]})})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),s(e),o(e)}))};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root")),E()}},[[67,1,2]]]);
//# sourceMappingURL=main.efda707b.chunk.js.map