/*! For license information please see 1502.dcce95e4.chunk.js.LICENSE.txt */
(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[1502],{1694:(t,e)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=a(t,i(n)))}return t}function i(t){if("string"===typeof t||"number"===typeof t)return t;if("object"!==typeof t)return"";if(Array.isArray(t))return o.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)r.call(t,n)&&t[n]&&(e=a(e,n));return e}function a(t,e){return e?t?t+" "+e:t+e:t}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},1536:(t,e,n)=>{"use strict";n.d(e,{Z:()=>$t});var r=n(1694),o=n.n(r);const i=!("undefined"===typeof window||!window.document||!window.document.createElement);var a=!1,s=!1;try{var c={get passive(){return a=!0},get once(){return s=a=!0}};i&&(window.addEventListener("test",c,c),window.removeEventListener("test",c,!0))}catch(Gt){}const l=function(t,e,n,r){if(r&&"boolean"!==typeof r&&!s){var o=r.once,i=r.capture,c=n;!s&&o&&(c=n.__once||function t(r){this.removeEventListener(e,t,i),n.call(this,r)},n.__once=c),t.addEventListener(e,c,a?r:i)}t.addEventListener(e,n,r)};function u(t){return t&&t.ownerDocument||document}const d=function(t,e,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;t.removeEventListener(e,n,o),n.__once&&t.removeEventListener(e,n.__once,o)};var f;function p(t){if((!f&&0!==f||t)&&i){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),f=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return f}var h=n(2791);const m=function(t){const e=(0,h.useRef)(t);return(0,h.useEffect)((()=>{e.current=t}),[t]),e};function v(t){const e=m(t);return(0,h.useCallback)((function(){return e.current&&e.current(...arguments)}),[e])}const w=t=>t&&"function"!==typeof t?e=>{t.current=e}:t;const g=function(t,e){return(0,h.useMemo)((()=>function(t,e){const n=w(t),r=w(e);return t=>{n&&n(t),r&&r(t)}}(t,e)),[t,e])};function y(t){const e=function(t){const e=(0,h.useRef)(t);return e.current=t,e}(t);(0,h.useEffect)((()=>()=>e.current()),[])}function b(t,e){return function(t){var e=u(t);return e&&e.defaultView||window}(t).getComputedStyle(t,e)}var E=/([A-Z])/g;var x=/^ms-/;function k(t){return function(t){return t.replace(E,"-$1").toLowerCase()}(t).replace(x,"-ms-")}var C=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;const O=function(t,e){var n="",r="";if("string"===typeof e)return t.style.getPropertyValue(k(e))||b(t).getPropertyValue(k(e));Object.keys(e).forEach((function(o){var i=e[o];i||0===i?!function(t){return!(!t||!C.test(t))}(o)?n+=k(o)+": "+i+";":r+=o+"("+i+") ":t.style.removeProperty(k(o))})),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n};const S=function(t,e,n,r){return l(t,e,n,r),function(){d(t,e,n,r)}};function N(t,e,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(t,e,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),t){var o=document.createEvent("HTMLEvents");o.initEvent(e,n,r),t.dispatchEvent(o)}}(t,"transitionend",!0)}),e+n),i=S(t,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),i()}}function R(t,e,n,r){null==n&&(n=function(t){var e=O(t,"transitionDuration")||"",n=-1===e.indexOf("ms")?1e3:1;return parseFloat(e)*n}(t)||0);var o=N(t,n,r),i=S(t,"transitionend",e);return function(){o(),i()}}function j(t){void 0===t&&(t=u());try{var e=t.activeElement;return e&&e.nodeName?e:null}catch(Gt){return t.body}}function T(t,e){return t.contains?t.contains(e):t.compareDocumentPosition?t===e||!!(16&t.compareDocumentPosition(e)):void 0}var D=n(4164);const L=(P="modal-open","".concat("data-rr-ui-").concat(P));var P;const Z=class{constructor(){let{ownerDocument:t,handleContainerOverflow:e=!0,isRTL:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.handleContainerOverflow=e,this.isRTL=n,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const e={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();t.style={overflow:r.style.overflow,[n]:r.style[n]},t.scrollBarWidth&&(e[n]="".concat(parseInt(O(r,n)||"0",10)+t.scrollBarWidth,"px")),r.setAttribute(L,""),O(r,e)}reset(){[...this.modals].forEach((t=>this.remove(t)))}removeContainerStyle(t){const e=this.getElement();e.removeAttribute(L),Object.assign(e.style,t.style)}add(t){let e=this.modals.indexOf(t);return-1!==e?e:(e=this.modals.length,this.modals.push(t),this.setModalAttributes(t),0!==e||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),e)}remove(t){const e=this.modals.indexOf(t);-1!==e&&(this.modals.splice(e,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}},M=(0,h.createContext)(i?window:void 0);M.Provider;function _(){return(0,h.useContext)(M)}const B=(t,e)=>i?null==t?(e||u()).body:("function"===typeof t&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;const A="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,F="undefined"!==typeof document||A?h.useLayoutEffect:h.useEffect;const H=function(t){let{children:e,in:n,onExited:r,mountOnEnter:o,unmountOnExit:i}=t;const a=(0,h.useRef)(null),s=(0,h.useRef)(n),c=v(r);(0,h.useEffect)((()=>{n?s.current=!0:c(a.current)}),[n,c]);const l=g(a,e.ref),u=(0,h.cloneElement)(e,{ref:l});return n?u:i||!s.current&&o?null:u};var W=n(184);function I(t){let{children:e,in:n,onExited:r,onEntered:o,transition:i}=t;const[a,s]=(0,h.useState)(!n);n&&a&&s(!1);const c=function(t){let{in:e,onTransition:n}=t;const r=(0,h.useRef)(null),o=(0,h.useRef)(!0),i=v(n);return F((()=>{if(!r.current)return;let t=!1;return i({in:e,element:r.current,initial:o.current,isStale:()=>t}),()=>{t=!0}}),[e,i]),F((()=>(o.current=!1,()=>{o.current=!0})),[]),r}({in:!!n,onTransition:t=>{Promise.resolve(i(t)).then((()=>{t.isStale()||(t.in?null==o||o(t.element,t.initial):(s(!0),null==r||r(t.element)))}),(e=>{throw t.in||s(!0),e}))}}),l=g(c,e.ref);return a&&!n?null:(0,h.cloneElement)(e,{ref:l})}function z(t,e,n){return t?(0,W.jsx)(t,Object.assign({},n)):e?(0,W.jsx)(I,Object.assign({},n,{transition:e})):(0,W.jsx)(H,Object.assign({},n))}const V=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let U;function q(t){const e=_(),n=t||function(t){return U||(U=new Z({ownerDocument:null==t?void 0:t.document})),U}(e),r=(0,h.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:(0,h.useCallback)((t=>{r.current.dialog=t}),[]),setBackdropRef:(0,h.useCallback)((t=>{r.current.backdrop=t}),[])})}const K=(0,h.forwardRef)(((t,e)=>{let{show:n=!1,role:r="dialog",className:o,style:a,children:s,backdrop:c=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:f,runTransition:p,backdropTransition:m,runBackdropTransition:w,autoFocus:g=!0,enforceFocus:b=!0,restoreFocus:E=!0,restoreFocusOptions:x,renderDialog:k,renderBackdrop:C=(t=>(0,W.jsx)("div",Object.assign({},t))),manager:O,container:N,onShow:R,onHide:L=(()=>{}),onExit:P,onExited:Z,onExiting:M,onEnter:A,onEntering:F,onEntered:H}=t,I=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,V);const U=_(),K=function(t,e){const n=_(),[r,o]=(0,h.useState)((()=>B(t,null==n?void 0:n.document)));if(!r){const e=B(t);e&&o(e)}return(0,h.useEffect)((()=>{e&&r&&e(r)}),[e,r]),(0,h.useEffect)((()=>{const e=B(t);e!==r&&o(e)}),[t,r]),r}(N),X=q(O),$=function(){const t=(0,h.useRef)(!0),e=(0,h.useRef)((()=>t.current));return(0,h.useEffect)((()=>(t.current=!0,()=>{t.current=!1})),[]),e.current}(),G=function(t){const e=(0,h.useRef)(null);return(0,h.useEffect)((()=>{e.current=t})),e.current}(n),[Y,J]=(0,h.useState)(!n),Q=(0,h.useRef)(null);(0,h.useImperativeHandle)(e,(()=>X),[X]),i&&!G&&n&&(Q.current=j(null==U?void 0:U.document)),n&&Y&&J(!1);const tt=v((()=>{if(X.add(),at.current=S(document,"keydown",ot),it.current=S(document,"focus",(()=>setTimeout(nt)),!0),R&&R(),g){var t,e;const n=j(null!=(t=null==(e=X.dialog)?void 0:e.ownerDocument)?t:null==U?void 0:U.document);X.dialog&&n&&!T(X.dialog,n)&&(Q.current=n,X.dialog.focus())}})),et=v((()=>{var t;(X.remove(),null==at.current||at.current(),null==it.current||it.current(),E)&&(null==(t=Q.current)||null==t.focus||t.focus(x),Q.current=null)}));(0,h.useEffect)((()=>{n&&K&&tt()}),[n,K,tt]),(0,h.useEffect)((()=>{Y&&et()}),[Y,et]),y((()=>{et()}));const nt=v((()=>{if(!b||!$()||!X.isTopModal())return;const t=j(null==U?void 0:U.document);X.dialog&&t&&!T(X.dialog,t)&&X.dialog.focus()})),rt=v((t=>{t.target===t.currentTarget&&(null==u||u(t),!0===c&&L())})),ot=v((t=>{l&&function(t){return"Escape"===t.code||27===t.keyCode}(t)&&X.isTopModal()&&(null==d||d(t),t.defaultPrevented||L())})),it=(0,h.useRef)(),at=(0,h.useRef)();if(!K)return null;const st=Object.assign({role:r,ref:X.setDialogRef,"aria-modal":"dialog"===r||void 0},I,{style:a,className:o,tabIndex:-1});let ct=k?k(st):(0,W.jsx)("div",Object.assign({},st,{children:h.cloneElement(s,{role:"document"})}));ct=z(f,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:P,onExiting:M,onExited:function(){J(!0),null==Z||Z(...arguments)},onEnter:A,onEntering:F,onEntered:H,children:ct});let lt=null;return c&&(lt=C({ref:X.setBackdropRef,onClick:rt}),lt=z(m,w,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:lt})),(0,W.jsx)(W.Fragment,{children:D.createPortal((0,W.jsxs)(W.Fragment,{children:[lt,ct]}),K)})}));K.displayName="Modal";const X=Object.assign(K,{Manager:Z});var $=Function.prototype.bind.call(Function.prototype.call,[].slice);function G(t,e){return $(t.querySelectorAll(e))}function Y(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const J=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Q=".sticky-top",tt=".navbar-toggler";class et extends Z{adjustAndStore(t,e,n){const r=e.style[t];e.dataset[t]=r,O(e,{[t]:"".concat(parseFloat(O(e,t))+n,"px")})}restore(t,e){const n=e.dataset[t];void 0!==n&&(delete e.dataset[t],O(e,{[t]:n}))}setContainerStyle(t){super.setContainerStyle(t);const e=this.getElement();var n,r;if(r="modal-open",(n=e).classList?n.classList.add(r):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,r)||("string"===typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)),!t.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";G(e,J).forEach((e=>this.adjustAndStore(o,e,t.scrollBarWidth))),G(e,Q).forEach((e=>this.adjustAndStore(i,e,-t.scrollBarWidth))),G(e,tt).forEach((e=>this.adjustAndStore(i,e,t.scrollBarWidth)))}removeContainerStyle(t){super.removeContainerStyle(t);const e=this.getElement();var n,r;r="modal-open",(n=e).classList?n.classList.remove(r):"string"===typeof n.className?n.className=Y(n.className,r):n.setAttribute("class",Y(n.className&&n.className.baseVal||"",r));const o=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";G(e,J).forEach((t=>this.restore(o,t))),G(e,Q).forEach((t=>this.restore(i,t))),G(e,tt).forEach((t=>this.restore(i,t)))}}let nt;var rt=n(3366),ot=n(1721);const it=!1,at=h.createContext(null);var st="unmounted",ct="exited",lt="entering",ut="entered",dt="exiting",ft=function(t){function e(e,n){var r;r=t.call(this,e,n)||this;var o,i=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?i?(o=ct,r.appearStatus=lt):o=ut:o=e.unmountOnExit||e.mountOnEnter?st:ct,r.state={status:o},r.nextCallback=null,r}(0,ot.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===st?{status:ct}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==lt&&n!==ut&&(e=lt):n!==lt&&n!==ut||(e=dt)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!==typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===lt){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:D.findDOMNode(this);n&&function(t){t.scrollTop}(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ct&&this.setState({status:st})},n.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,o=this.props.nodeRef?[r]:[D.findDOMNode(this),r],i=o[0],a=o[1],s=this.getTimeouts(),c=r?s.appear:s.enter;!t&&!n||it?this.safeSetState({status:ut},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:lt},(function(){e.props.onEntering(i,a),e.onTransitionEnd(c,(function(){e.safeSetState({status:ut},(function(){e.props.onEntered(i,a)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:D.findDOMNode(this);e&&!it?(this.props.onExit(r),this.safeSetState({status:dt},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:ct},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:ct},(function(){t.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:D.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],a=o[1];this.props.addEndListener(i,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===st)return null;var e=this.props,n=e.children,r=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,rt.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return h.createElement(at.Provider,{value:null},"function"===typeof n?n(t,r):h.cloneElement(h.Children.only(n),r))},e}(h.Component);function pt(){}ft.contextType=at,ft.propTypes={},ft.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:pt,onEntering:pt,onEntered:pt,onExit:pt,onExiting:pt,onExited:pt},ft.UNMOUNTED=st,ft.EXITED=ct,ft.ENTERING=lt,ft.ENTERED=ut,ft.EXITING=dt;const ht=ft;function mt(t,e){const n=O(t,e)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function vt(t,e){const n=mt(t,"transitionDuration"),r=mt(t,"transitionDelay"),o=R(t,(n=>{n.target===t&&(o(),e(n))}),n+r)}const wt=h.forwardRef(((t,e)=>{let{onEnter:n,onEntering:r,onEntered:o,onExit:i,onExiting:a,onExited:s,addEndListener:c,children:l,childRef:u,...d}=t;const f=(0,h.useRef)(null),p=g(f,u),m=t=>{var e;p((e=t)&&"setState"in e?D.findDOMNode(e):null!=e?e:null)},v=t=>e=>{t&&f.current&&t(f.current,e)},w=(0,h.useCallback)(v(n),[n]),y=(0,h.useCallback)(v(r),[r]),b=(0,h.useCallback)(v(o),[o]),E=(0,h.useCallback)(v(i),[i]),x=(0,h.useCallback)(v(a),[a]),k=(0,h.useCallback)(v(s),[s]),C=(0,h.useCallback)(v(c),[c]);return(0,W.jsx)(ht,{ref:e,...d,onEnter:w,onEntered:b,onEntering:y,onExit:E,onExited:k,onExiting:x,addEndListener:C,nodeRef:f,children:"function"===typeof l?(t,e)=>l(t,{...e,ref:m}):h.cloneElement(l,{ref:m})})})),gt={[lt]:"show",[ut]:"show"},yt=h.forwardRef(((t,e)=>{let{className:n,children:r,transitionClasses:i={},onEnter:a,...s}=t;const c={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...s},l=(0,h.useCallback)(((t,e)=>{!function(t){t.offsetHeight}(t),null==a||a(t,e)}),[a]);return(0,W.jsx)(wt,{ref:e,addEndListener:vt,...c,onEnter:l,childRef:r.ref,children:(t,e)=>h.cloneElement(r,{...e,className:o()("fade",n,r.props.className,gt[t],i[t])})})}));yt.displayName="Fade";const bt=yt,Et=["xxl","xl","lg","md","sm","xs"],xt="xs",kt=h.createContext({prefixes:{},breakpoints:Et,minBreakpoint:xt}),{Consumer:Ct,Provider:Ot}=kt;function St(t,e){const{prefixes:n}=(0,h.useContext)(kt);return t||n[e]||e}const Nt=h.forwardRef(((t,e)=>{let{className:n,bsPrefix:r,as:i="div",...a}=t;return r=St(r,"modal-body"),(0,W.jsx)(i,{ref:e,className:o()(n,r),...a})}));Nt.displayName="ModalBody";const Rt=Nt,jt=h.createContext({onHide(){}}),Tt=h.forwardRef(((t,e)=>{let{bsPrefix:n,className:r,contentClassName:i,centered:a,size:s,fullscreen:c,children:l,scrollable:u,...d}=t;n=St(n,"modal");const f="".concat(n,"-dialog"),p="string"===typeof c?"".concat(n,"-fullscreen-").concat(c):"".concat(n,"-fullscreen");return(0,W.jsx)("div",{...d,ref:e,className:o()(f,r,s&&"".concat(n,"-").concat(s),a&&"".concat(f,"-centered"),u&&"".concat(f,"-scrollable"),c&&p),children:(0,W.jsx)("div",{className:o()("".concat(n,"-content"),i),children:l})})}));Tt.displayName="ModalDialog";const Dt=Tt,Lt=h.forwardRef(((t,e)=>{let{className:n,bsPrefix:r,as:i="div",...a}=t;return r=St(r,"modal-footer"),(0,W.jsx)(i,{ref:e,className:o()(n,r),...a})}));Lt.displayName="ModalFooter";const Pt=Lt;var Zt=n(2007),Mt=n.n(Zt);const _t={"aria-label":Mt().string,onClick:Mt().func,variant:Mt().oneOf(["white"])},Bt=h.forwardRef(((t,e)=>{let{className:n,variant:r,"aria-label":i="Close",...a}=t;return(0,W.jsx)("button",{ref:e,type:"button",className:o()("btn-close",r&&"btn-close-".concat(r),n),"aria-label":i,...a})}));Bt.displayName="CloseButton",Bt.propTypes=_t;const At=Bt,Ft=h.forwardRef(((t,e)=>{let{closeLabel:n="Close",closeVariant:r,closeButton:o=!1,onHide:i,children:a,...s}=t;const c=(0,h.useContext)(jt),l=v((()=>{null==c||c.onHide(),null==i||i()}));return(0,W.jsxs)("div",{ref:e,...s,children:[a,o&&(0,W.jsx)(At,{"aria-label":n,variant:r,onClick:l})]})})),Ht=h.forwardRef(((t,e)=>{let{bsPrefix:n,className:r,closeLabel:i="Close",closeButton:a=!1,...s}=t;return n=St(n,"modal-header"),(0,W.jsx)(Ft,{ref:e,...s,className:o()(r,n),closeLabel:i,closeButton:a})}));Ht.displayName="ModalHeader";const Wt=Ht,It=(zt="h4",h.forwardRef(((t,e)=>(0,W.jsx)("div",{...t,ref:e,className:o()(t.className,zt)}))));var zt;const Vt=h.forwardRef(((t,e)=>{let{className:n,bsPrefix:r,as:i=It,...a}=t;return r=St(r,"modal-title"),(0,W.jsx)(i,{ref:e,className:o()(n,r),...a})}));Vt.displayName="ModalTitle";const Ut=Vt;function qt(t){return(0,W.jsx)(bt,{...t,timeout:null})}function Kt(t){return(0,W.jsx)(bt,{...t,timeout:null})}const Xt=h.forwardRef(((t,e)=>{let{bsPrefix:n,className:r,style:a,dialogClassName:s,contentClassName:c,children:f,dialogAs:m=Dt,"aria-labelledby":w,"aria-describedby":b,"aria-label":E,show:x=!1,animation:k=!0,backdrop:C=!0,keyboard:O=!0,onEscapeKeyDown:S,onShow:N,onHide:j,container:T,autoFocus:D=!0,enforceFocus:L=!0,restoreFocus:P=!0,restoreFocusOptions:Z,onEntered:M,onExit:_,onExiting:B,onEnter:A,onEntering:F,onExited:H,backdropClassName:I,manager:z,...V}=t;const[U,q]=(0,h.useState)({}),[K,$]=(0,h.useState)(!1),G=(0,h.useRef)(!1),Y=(0,h.useRef)(!1),J=(0,h.useRef)(null),[Q,tt]=(0,h.useState)(null),rt=g(e,tt),ot=v(j),it=function(){const{dir:t}=(0,h.useContext)(kt);return"rtl"===t}();n=St(n,"modal");const at=(0,h.useMemo)((()=>({onHide:ot})),[ot]);function st(){return z||function(t){return nt||(nt=new et(t)),nt}({isRTL:it})}function ct(t){if(!i)return;const e=st().getScrollbarWidth()>0,n=t.scrollHeight>u(t).documentElement.clientHeight;q({paddingRight:e&&!n?p():void 0,paddingLeft:!e&&n?p():void 0})}const lt=v((()=>{Q&&ct(Q.dialog)}));y((()=>{d(window,"resize",lt),null==J.current||J.current()}));const ut=()=>{G.current=!0},dt=t=>{G.current&&Q&&t.target===Q.dialog&&(Y.current=!0),G.current=!1},ft=()=>{$(!0),J.current=R(Q.dialog,(()=>{$(!1)}))},pt=t=>{"static"!==C?Y.current||t.target!==t.currentTarget?Y.current=!1:null==j||j():(t=>{t.target===t.currentTarget&&ft()})(t)},ht=(0,h.useCallback)((t=>(0,W.jsx)("div",{...t,className:o()("".concat(n,"-backdrop"),I,!k&&"show")})),[k,I,n]),mt={...a,...U};mt.display="block";return(0,W.jsx)(jt.Provider,{value:at,children:(0,W.jsx)(X,{show:x,ref:rt,backdrop:C,container:T,keyboard:!0,autoFocus:D,enforceFocus:L,restoreFocus:P,restoreFocusOptions:Z,onEscapeKeyDown:t=>{O?null==S||S(t):(t.preventDefault(),"static"===C&&ft())},onShow:N,onHide:j,onEnter:(t,e)=>{t&&ct(t),null==A||A(t,e)},onEntering:(t,e)=>{null==F||F(t,e),l(window,"resize",lt)},onEntered:M,onExit:t=>{null==J.current||J.current(),null==_||_(t)},onExiting:B,onExited:t=>{t&&(t.style.display=""),null==H||H(t),d(window,"resize",lt)},manager:st(),transition:k?qt:void 0,backdropTransition:k?Kt:void 0,renderBackdrop:ht,renderDialog:t=>(0,W.jsx)("div",{role:"dialog",...t,style:mt,className:o()(r,n,K&&"".concat(n,"-static"),!k&&"show"),onClick:C?pt:void 0,onMouseUp:dt,"aria-label":E,"aria-labelledby":w,"aria-describedby":b,children:(0,W.jsx)(m,{...V,onMouseDown:ut,className:s,contentClassName:c,children:f})})})})}));Xt.displayName="Modal";const $t=Object.assign(Xt,{Body:Rt,Header:Wt,Title:Ut,Footer:Pt,Dialog:Dt,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},3127:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=(0,n(3756).Z)({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"})},9846:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(1583),o=n(2020);const i=(0,n(1217).Z)("facebook",(function(t,e){var n=e.quote,i=e.hashtag;return(0,r.Z)(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+(0,o.Z)({u:t,quote:n,hashtag:i})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400})},3582:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=(0,n(3756).Z)({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"})},2028:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(1583),o=n(2020);const i=(0,n(1217).Z)("linkedin",(function(t,e){var n=e.title,i=e.summary,a=e.source;return(0,r.Z)(t,"linkedin.url"),"https://linkedin.com/shareArticle"+(0,o.Z)({url:t,mini:"true",title:n,summary:i,source:a})}),(function(t){return{title:t.title,summary:t.summary,source:t.source}}),{windowWidth:750,windowHeight:600})},8685:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=(0,n(3756).Z)({color:"#37aee2",networkName:"telegram",path:"m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"})},8414:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(1583),o=n(2020);const i=(0,n(1217).Z)("telegram",(function(t,e){var n=e.title;return(0,r.Z)(t,"telegram.url"),"https://telegram.me/share/url"+(0,o.Z)({url:t,text:n})}),(function(t){return{title:t.title}}),{windowWidth:550,windowHeight:400})},6720:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=(0,n(3756).Z)({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"})},5904:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(1583),o=n(2020);const i=(0,n(1217).Z)("twitter",(function(t,e){var n=e.title,i=e.via,a=e.hashtags,s=void 0===a?[]:a,c=e.related,l=void 0===c?[]:c;return(0,r.Z)(t,"twitter.url"),(0,r.Z)(Array.isArray(s),"twitter.hashtags is not an array"),(0,r.Z)(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+(0,o.Z)({url:t,text:n,via:i,hashtags:s.length>0?s.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(t){return{hashtags:t.hashtags,title:t.title,via:t.via,related:t.related}}),{windowWidth:550,windowHeight:400})},2709:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=(0,n(3756).Z)({color:"#25D366",networkName:"whatsapp",path:"m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"})},6971:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(1583),o=n(2020);const i=(0,n(1217).Z)("whatsapp",(function(t,e){var n=e.title,i=e.separator;return(0,r.Z)(t,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+(0,o.Z)({text:n?n+i+t:t})}),(function(t){return{title:t.title,separator:t.separator||" "}}),{windowWidth:550,windowHeight:400})},3756:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(2791),o=function(){return o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o.apply(this,arguments)},i=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function a(t){var e=function(e){var n=e.bgStyle,a=e.borderRadius,s=e.iconFillColor,c=e.round,l=e.size,u=i(e,["bgStyle","borderRadius","iconFillColor","round","size"]);return r.createElement("svg",o({viewBox:"0 0 64 64",width:l,height:l},u),c?r.createElement("circle",{cx:"32",cy:"32",r:"31",fill:t.color,style:n}):r.createElement("rect",{width:"64",height:"64",rx:a,ry:a,fill:t.color,style:n}),r.createElement("path",{d:t.path,fill:s}))};return e.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},e}},1217:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var r=n(2791),o=n(1694),i=n.n(o),a=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=function(){return s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},s.apply(this,arguments)},c=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(e){i(e)}}function s(t){try{c(r.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))},l=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};const d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var n,r,o=e.props,i=o.onShareWindowClose,a=o.windowHeight,c=void 0===a?400:a,l=o.windowPosition,d=void 0===l?"windowCenter":l,f=o.windowWidth,p=void 0===f?550:f;!function(t,e,n){var r=e.height,o=e.width,i=u(e,["height","width"]),a=s({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),c=window.open(t,"",Object.keys(a).map((function(t){return"".concat(t,"=").concat(a[t])})).join(", "));if(n)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),n(c))}catch(t){console.error(t)}}),1e3)}(t,s({height:c,width:p},"windowCenter"===d?(n=p,r=c,{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-n/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-r/2}):function(t,e){return{top:(window.screen.height-e)/2,left:(window.screen.width-t)/2}}(p,c)),i)},e.handleClick=function(t){return c(e,void 0,void 0,(function(){var e,n,r,o,i,a,s,c,u,d;return l(this,(function(l){switch(l.label){case 0:return e=this.props,n=e.beforeOnClick,r=e.disabled,o=e.networkLink,i=e.onClick,a=e.url,s=e.openShareDialogOnClick,c=e.opts,u=o(a,c),r?[2]:(t.preventDefault(),n?(d=n(),!(f=d)||"object"!==typeof f&&"function"!==typeof f||"function"!==typeof f.then?[3,2]:[4,d]):[3,2]);case 1:l.sent(),l.label=2;case 2:return s&&this.openShareDialog(u),i&&i(t,u),[2]}var f}))}))},e}return a(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),n=t.className,o=t.disabled,a=t.disabledStyle,c=t.forwardedRef,l=(t.networkLink,t.networkName),d=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),f=t.style,p=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,u(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),h=i()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!o,disabled:!!o},n),m=s(s(d?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},f),o&&a);return r.createElement("button",s({},p,{"aria-label":p["aria-label"]||l,className:h,onClick:this.handleClick,ref:c,style:m}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(r.Component);var f=function(){return f=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},f.apply(this,arguments)};const p=function(t,e,n,o){function i(i,a){var s=n(i),c=f({},i);return Object.keys(s).forEach((function(t){delete c[t]})),r.createElement(d,f({},o,c,{forwardedRef:a,networkName:t,networkLink:e,opts:n(i)}))}return i.displayName="ShareButton-".concat(t),(0,r.forwardRef)(i)}},1583:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=function(t){function e(e){var n=t.call(this,e)||this;return n.name="AssertionError",n}return r(e,t),e}(Error);function i(t,e){if(!t)throw new o(e)}},2020:(t,e,n)=>{"use strict";function r(t){var e=Object.entries(t).filter((function(t){var e=t[1];return void 0!==e&&null!==e})).map((function(t){var e=t[0],n=t[1];return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(String(n)))}));return e.length>0?"?".concat(e.join("&")):""}n.d(e,{Z:()=>r})}}]);
//# sourceMappingURL=1502.dcce95e4.chunk.js.map