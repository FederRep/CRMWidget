(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function z_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ud={exports:{}},Zo={};var Sv;function Jy(){if(Sv)return Zo;Sv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Zo.Fragment=e,Zo.jsx=i,Zo.jsxs=i,Zo}var yv;function $y(){return yv||(yv=1,Ud.exports=Jy()),Ud.exports}var g=$y(),Ld={exports:{}},ft={};var Mv;function eM(){if(Mv)return ft;Mv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function E(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,S={};function y(F,te,Te){this.props=F,this.context=te,this.refs=S,this.updater=Te||T}y.prototype.isReactComponent={},y.prototype.setState=function(F,te){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,te,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function N(){}N.prototype=y.prototype;function U(F,te,Te){this.props=F,this.context=te,this.refs=S,this.updater=Te||T}var L=U.prototype=new N;L.constructor=U,R(L,y.prototype),L.isPureReactComponent=!0;var j=Array.isArray;function P(){}var I={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function z(F,te,Te){var Ce=Te.ref;return{$$typeof:r,type:F,key:te,ref:Ce!==void 0?Ce:null,props:Te}}function K(F,te){return z(F.type,te,F.props)}function G(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function k(F){var te={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Te){return te[Te]})}var se=/\/+/g;function ce(F,te){return typeof F=="object"&&F!==null&&F.key!=null?k(""+F.key):te.toString(36)}function Y(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(P,P):(F.status="pending",F.then(function(te){F.status==="pending"&&(F.status="fulfilled",F.value=te)},function(te){F.status==="pending"&&(F.status="rejected",F.reason=te)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function O(F,te,Te,Ce,Le){var ie=typeof F;(ie==="undefined"||ie==="boolean")&&(F=null);var Re=!1;if(F===null)Re=!0;else switch(ie){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(F.$$typeof){case r:case e:Re=!0;break;case x:return Re=F._init,O(Re(F._payload),te,Te,Ce,Le)}}if(Re)return Le=Le(F),Re=Ce===""?"."+ce(F,0):Ce,j(Le)?(Te="",Re!=null&&(Te=Re.replace(se,"$&/")+"/"),O(Le,te,Te,"",function(Ze){return Ze})):Le!=null&&(G(Le)&&(Le=K(Le,Te+(Le.key==null||F&&F.key===Le.key?"":(""+Le.key).replace(se,"$&/")+"/")+Re)),te.push(Le)),1;Re=0;var Ae=Ce===""?".":Ce+":";if(j(F))for(var Be=0;Be<F.length;Be++)Ce=F[Be],ie=Ae+ce(Ce,Be),Re+=O(Ce,te,Te,ie,Le);else if(Be=E(F),typeof Be=="function")for(F=Be.call(F),Be=0;!(Ce=F.next()).done;)Ce=Ce.value,ie=Ae+ce(Ce,Be++),Re+=O(Ce,te,Te,ie,Le);else if(ie==="object"){if(typeof F.then=="function")return O(Y(F),te,Te,Ce,Le);throw te=String(F),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return Re}function H(F,te,Te){if(F==null)return F;var Ce=[],Le=0;return O(F,Ce,"","",function(ie){return te.call(Te,ie,Le++)}),Ce}function re(F){if(F._status===-1){var te=F._result;te=te(),te.then(function(Te){(F._status===0||F._status===-1)&&(F._status=1,F._result=Te)},function(Te){(F._status===0||F._status===-1)&&(F._status=2,F._result=Te)}),F._status===-1&&(F._status=0,F._result=te)}if(F._status===1)return F._result.default;throw F._result}var _e=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},ye={map:H,forEach:function(F,te,Te){H(F,function(){te.apply(this,arguments)},Te)},count:function(F){var te=0;return H(F,function(){te++}),te},toArray:function(F){return H(F,function(te){return te})||[]},only:function(F){if(!G(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return ft.Activity=v,ft.Children=ye,ft.Component=y,ft.Fragment=i,ft.Profiler=l,ft.PureComponent=U,ft.StrictMode=s,ft.Suspense=m,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ft.__COMPILER_RUNTIME={__proto__:null,c:function(F){return I.H.useMemoCache(F)}},ft.cache=function(F){return function(){return F.apply(null,arguments)}},ft.cacheSignal=function(){return null},ft.cloneElement=function(F,te,Te){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Ce=R({},F.props),Le=F.key;if(te!=null)for(ie in te.key!==void 0&&(Le=""+te.key),te)!A.call(te,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&te.ref===void 0||(Ce[ie]=te[ie]);var ie=arguments.length-2;if(ie===1)Ce.children=Te;else if(1<ie){for(var Re=Array(ie),Ae=0;Ae<ie;Ae++)Re[Ae]=arguments[Ae+2];Ce.children=Re}return z(F.type,Le,Ce)},ft.createContext=function(F){return F={$$typeof:f,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},ft.createElement=function(F,te,Te){var Ce,Le={},ie=null;if(te!=null)for(Ce in te.key!==void 0&&(ie=""+te.key),te)A.call(te,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Le[Ce]=te[Ce]);var Re=arguments.length-2;if(Re===1)Le.children=Te;else if(1<Re){for(var Ae=Array(Re),Be=0;Be<Re;Be++)Ae[Be]=arguments[Be+2];Le.children=Ae}if(F&&F.defaultProps)for(Ce in Re=F.defaultProps,Re)Le[Ce]===void 0&&(Le[Ce]=Re[Ce]);return z(F,ie,Le)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(F){return{$$typeof:p,render:F}},ft.isValidElement=G,ft.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:re}},ft.memo=function(F,te){return{$$typeof:h,type:F,compare:te===void 0?null:te}},ft.startTransition=function(F){var te=I.T,Te={};I.T=Te;try{var Ce=F(),Le=I.S;Le!==null&&Le(Te,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(P,_e)}catch(ie){_e(ie)}finally{te!==null&&Te.types!==null&&(te.types=Te.types),I.T=te}},ft.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ft.use=function(F){return I.H.use(F)},ft.useActionState=function(F,te,Te){return I.H.useActionState(F,te,Te)},ft.useCallback=function(F,te){return I.H.useCallback(F,te)},ft.useContext=function(F){return I.H.useContext(F)},ft.useDebugValue=function(){},ft.useDeferredValue=function(F,te){return I.H.useDeferredValue(F,te)},ft.useEffect=function(F,te){return I.H.useEffect(F,te)},ft.useEffectEvent=function(F){return I.H.useEffectEvent(F)},ft.useId=function(){return I.H.useId()},ft.useImperativeHandle=function(F,te,Te){return I.H.useImperativeHandle(F,te,Te)},ft.useInsertionEffect=function(F,te){return I.H.useInsertionEffect(F,te)},ft.useLayoutEffect=function(F,te){return I.H.useLayoutEffect(F,te)},ft.useMemo=function(F,te){return I.H.useMemo(F,te)},ft.useOptimistic=function(F,te){return I.H.useOptimistic(F,te)},ft.useReducer=function(F,te,Te){return I.H.useReducer(F,te,Te)},ft.useRef=function(F){return I.H.useRef(F)},ft.useState=function(F){return I.H.useState(F)},ft.useSyncExternalStore=function(F,te,Te){return I.H.useSyncExternalStore(F,te,Te)},ft.useTransition=function(){return I.H.useTransition()},ft.version="19.2.6",ft}var Ev;function vp(){return Ev||(Ev=1,Ld.exports=eM()),Ld.exports}var q=vp();const Li=z_(q);var Od={exports:{}},Ko={},Pd={exports:{}},Id={};var bv;function tM(){return bv||(bv=1,(function(r){function e(O,H){var re=O.length;O.push(H);e:for(;0<re;){var _e=re-1>>>1,ye=O[_e];if(0<l(ye,H))O[_e]=H,O[re]=ye,re=_e;else break e}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var H=O[0],re=O.pop();if(re!==H){O[0]=re;e:for(var _e=0,ye=O.length,F=ye>>>1;_e<F;){var te=2*(_e+1)-1,Te=O[te],Ce=te+1,Le=O[Ce];if(0>l(Te,re))Ce<ye&&0>l(Le,Te)?(O[_e]=Le,O[Ce]=re,_e=Ce):(O[_e]=Te,O[te]=re,_e=te);else if(Ce<ye&&0>l(Le,re))O[_e]=Le,O[Ce]=re,_e=Ce;else break e}}return H}function l(O,H){var re=O.sortIndex-H.sortIndex;return re!==0?re:O.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],h=[],x=1,v=null,_=3,E=!1,T=!1,R=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function L(O){for(var H=i(h);H!==null;){if(H.callback===null)s(h);else if(H.startTime<=O)s(h),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(h)}}function j(O){if(R=!1,L(O),!T)if(i(m)!==null)T=!0,P||(P=!0,k());else{var H=i(h);H!==null&&Y(j,H.startTime-O)}}var P=!1,I=-1,A=5,z=-1;function K(){return S?!0:!(r.unstable_now()-z<A)}function G(){if(S=!1,P){var O=r.unstable_now();z=O;var H=!0;try{e:{T=!1,R&&(R=!1,N(I),I=-1),E=!0;var re=_;try{t:{for(L(O),v=i(m);v!==null&&!(v.expirationTime>O&&K());){var _e=v.callback;if(typeof _e=="function"){v.callback=null,_=v.priorityLevel;var ye=_e(v.expirationTime<=O);if(O=r.unstable_now(),typeof ye=="function"){v.callback=ye,L(O),H=!0;break t}v===i(m)&&s(m),L(O)}else s(m);v=i(m)}if(v!==null)H=!0;else{var F=i(h);F!==null&&Y(j,F.startTime-O),H=!1}}break e}finally{v=null,_=re,E=!1}H=void 0}}finally{H?k():P=!1}}}var k;if(typeof U=="function")k=function(){U(G)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ce=se.port2;se.port1.onmessage=G,k=function(){ce.postMessage(null)}}else k=function(){y(G,0)};function Y(O,H){I=y(function(){O(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(O){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var re=_;_=H;try{return O()}finally{_=re}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var re=_;_=O;try{return H()}finally{_=re}},r.unstable_scheduleCallback=function(O,H,re){var _e=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?_e+re:_e):re=_e,O){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=re+ye,O={id:x++,callback:H,priorityLevel:O,startTime:re,expirationTime:ye,sortIndex:-1},re>_e?(O.sortIndex=re,e(h,O),i(m)===null&&O===i(h)&&(R?(N(I),I=-1):R=!0,Y(j,re-_e))):(O.sortIndex=ye,e(m,O),T||E||(T=!0,P||(P=!0,k()))),O},r.unstable_shouldYield=K,r.unstable_wrapCallback=function(O){var H=_;return function(){var re=_;_=H;try{return O.apply(this,arguments)}finally{_=re}}}})(Id)),Id}var Tv;function nM(){return Tv||(Tv=1,Pd.exports=tM()),Pd.exports}var Fd={exports:{}},On={};var Av;function iM(){if(Av)return On;Av=1;var r=vp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:h,implementation:x}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,x)},On.flushSync=function(m){var h=f.T,x=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=h,s.p=x,s.d.f()}},On.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,v=p(x,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:E}):x==="script"&&s.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},On.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},On.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,v=p(x,h.crossOrigin);s.d.L(m,x,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},On.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,h){return m(h)},On.useFormState=function(m,h,x){return f.H.useFormState(m,h,x)},On.useFormStatus=function(){return f.H.useHostTransitionStatus()},On.version="19.2.6",On}var Rv;function aM(){if(Rv)return Fd.exports;Rv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Fd.exports=iM(),Fd.exports}var Cv;function sM(){if(Cv)return Ko;Cv=1;var r=nM(),e=vp(),i=aM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var M=!1,D=u.child;D;){if(D===a){M=!0,a=u,o=d;break}if(D===o){M=!0,o=u,a=d;break}D=D.sibling}if(!M){for(D=d.child;D;){if(D===a){M=!0,a=d,o=u;break}if(D===o){M=!0,o=d,a=u;break}D=D.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),U=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case j:return"Suspense";case P:return"SuspenseList";case z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case U:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:ce(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return ce(t(n))}catch{}}return null}var Y=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},_e=[],ye=-1;function F(t){return{current:t}}function te(t){0>ye||(t.current=_e[ye],_e[ye]=null,ye--)}function Te(t,n){ye++,_e[ye]=t.current,t.current=n}var Ce=F(null),Le=F(null),ie=F(null),Re=F(null);function Ae(t,n){switch(Te(ie,n),Te(Le,t),Te(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?kg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=kg(n),t=jg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(Ce),Te(Ce,t)}function Be(){te(Ce),te(Le),te(ie)}function Ze(t){t.memoizedState!==null&&Te(Re,t);var n=Ce.current,a=jg(n,t.type);n!==a&&(Te(Le,t),Te(Ce,a))}function Ke(t){Le.current===t&&(te(Ce),te(Le)),Re.current===t&&(te(Re),Xo._currentValue=re)}var bt,rt;function ct(t){if(bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);bt=n&&n[1]||"",rt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bt+t+rt}var xt=!1;function $e(t,n){if(!t||xt)return"";xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(ve){var pe=ve}Reflect.construct(t,[],be)}else{try{be.call()}catch(ve){pe=ve}t.call(be.prototype)}}else{try{throw Error()}catch(ve){pe=ve}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(ve){if(ve&&pe&&typeof ve.stack=="string")return[ve.stack,pe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],D=d[1];if(M&&D){var X=M.split(`
`),le=D.split(`
`);for(u=o=0;o<X.length&&!X[o].includes("DetermineComponentFrameRoot");)o++;for(;u<le.length&&!le[u].includes("DetermineComponentFrameRoot");)u++;if(o===X.length||u===le.length)for(o=X.length-1,u=le.length-1;1<=o&&0<=u&&X[o]!==le[u];)u--;for(;1<=o&&0<=u;o--,u--)if(X[o]!==le[u]){if(o!==1||u!==1)do if(o--,u--,0>u||X[o]!==le[u]){var Se=`
`+X[o].replace(" at new "," at ");return t.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",t.displayName)),Se}while(1<=o&&0<=u);break}}}finally{xt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ct(a):""}function Pt(t,n){switch(t.tag){case 26:case 27:case 5:return ct(t.type);case 16:return ct("Lazy");case 13:return t.child!==n&&n!==null?ct("Suspense Fallback"):ct("Suspense");case 19:return ct("SuspenseList");case 0:case 15:return $e(t.type,!1);case 11:return $e(t.type.render,!1);case 1:return $e(t.type,!0);case 31:return ct("Activity");default:return""}}function vt(t){try{var n="",a=null;do n+=Pt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var $t=Object.prototype.hasOwnProperty,J=r.unstable_scheduleCallback,Tt=r.unstable_cancelCallback,ut=r.unstable_shouldYield,Xe=r.unstable_requestPaint,B=r.unstable_now,Oe=r.unstable_getCurrentPriorityLevel,C=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,$=r.unstable_NormalPriority,W=r.unstable_LowPriority,ge=r.unstable_IdlePriority,me=r.log,De=r.unstable_setDisableYieldValue,V=null,ae=null;function xe(t){if(typeof me=="function"&&De(t),ae&&typeof ae.setStrictMode=="function")try{ae.setStrictMode(V,t)}catch{}}var we=Math.clz32?Math.clz32:at,Ne=Math.log,Pe=Math.LN2;function at(t){return t>>>=0,t===0?32:31-(Ne(t)/Pe|0)|0}var lt=256,St=262144,Z=4194304;function Ie(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Me(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var D=o&134217727;return D!==0?(o=D&~d,o!==0?u=Ie(o):(M&=D,M!==0?u=Ie(M):a||(a=D&~t,a!==0&&(u=Ie(a))))):(D=o&~d,D!==0?u=Ie(D):M!==0?u=Ie(M):a||(a=o&~t,a!==0&&(u=Ie(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ge(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Fe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ue(){var t=Z;return Z<<=1,(Z&62914560)===0&&(Z=4194304),t}function Qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ot(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function sn(t,n,a,o,u,d){var M=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var D=t.entanglements,X=t.expirationTimes,le=t.hiddenUpdates;for(a=M&~a;0<a;){var Se=31-we(a),be=1<<Se;D[Se]=0,X[Se]=-1;var pe=le[Se];if(pe!==null)for(le[Se]=null,Se=0;Se<pe.length;Se++){var ve=pe[Se];ve!==null&&(ve.lane&=-536870913)}a&=~be}o!==0&&It(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(M&~n))}function It(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-we(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ui(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-we(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Zn(t,n){var a=n&-n;return a=(a&42)!==0?1:ms(a),(a&(t.suspendedLanes|n))!==0?0:a}function ms(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function no(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function io(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:hv(t.type))}function ao(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var Un=Math.random().toString(36).slice(2),cn="__reactFiber$"+Un,An="__reactProps$"+Un,na="__reactContainer$"+Un,Da="__reactEvents$"+Un,_l="__reactListeners$"+Un,Qs="__reactHandles$"+Un,so="__reactResources$"+Un,Na="__reactMarker$"+Un;function ro(t){delete t[cn],delete t[An],delete t[Da],delete t[_l],delete t[Qs]}function Ua(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[na]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Qg(t);t!==null;){if(a=t[cn])return a;t=Qg(t)}return n}t=a,a=t.parentNode}return null}function La(t){if(t=t[cn]||t[na]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function gs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Oa(t){var n=t[so];return n||(n=t[so]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(t){t[Na]=!0}var xl=new Set,w={};function ee(t,n){he(t,n),he(t+"Capture",n)}function he(t,n){for(w[t]=n,t=0;t<n.length;t++)xl.add(n[t])}var ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fe={},He={};function je(t){return $t.call(He,t)?!0:$t.call(fe,t)?!1:ue.test(t)?He[t]=!0:(fe[t]=!0,!1)}function ze(t,n,a){if(je(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function qe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function We(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function et(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,d.call(this,M)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ut(t){if(!t._valueTracker){var n=pt(t)?"checked":"value";t._valueTracker=et(t,n,""+t[n])}}function en(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=pt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ht=/[\n"\\]/g;function Gt(t){return t.replace(Ht,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ke(t,n,a,o,u,d,M,D){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+tt(n)):t.value!==""+tt(n)&&(t.value=""+tt(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?yt(t,M,tt(n)):a!=null?yt(t,M,tt(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?t.name=""+tt(D):t.removeAttribute("name")}function Ln(t,n,a,o,u,d,M,D){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ut(t);return}a=a!=null?""+tt(a):"",n=n!=null?""+tt(n):a,D||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=D?t.checked:!!o,t.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),Ut(t)}function yt(t,n,a){n==="number"&&Zt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Sn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+tt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Kn(t,n,a){if(n!=null&&(n=""+tt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+tt(a):""}function Ti(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Y(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=tt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ut(t)}function Qn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Vt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Vt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ai(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&tn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&tn(t,d,n[d])}function zt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vs(t){return Pa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ia(){}var Cu=null;function wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Js=null,$s=null;function Vp(t){var n=La(t);if(n&&(t=n.stateNode)){var a=t[An]||null;e:switch(t=n.stateNode,n.type){case"input":if(ke(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Gt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[An]||null;if(!u)throw Error(s(90));ke(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&en(o)}break e;case"textarea":Kn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Sn(t,!!a.multiple,n,!1)}}}var Du=!1;function kp(t,n,a){if(Du)return t(n,a);Du=!0;try{var o=t(n);return o}finally{if(Du=!1,(Js!==null||$s!==null)&&(rc(),Js&&(n=Js,t=$s,$s=Js=null,Vp(n),t)))for(n=0;n<t.length;n++)Vp(t[n])}}function oo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=!1;if(aa)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Nu=!1}var Ia=null,Uu=null,Sl=null;function jp(){if(Sl)return Sl;var t,n=Uu,a=n.length,o,u="value"in Ia?Ia.value:Ia.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var M=a-t;for(o=1;o<=M&&n[a-o]===u[d-o];o++);return Sl=u.slice(t,1<o?1-o:void 0)}function yl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ml(){return!0}function Xp(){return!1}function Hn(t){function n(a,o,u,d,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(d):d[D]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ml:Xp,this.isPropagationStopped=Xp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),n}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=Hn(_s),co=v({},_s,{view:0,detail:0}),Kx=Hn(co),Lu,Ou,uo,bl=v({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Iu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Lu=t.screenX-uo.screenX,Ou=t.screenY-uo.screenY):Ou=Lu=0,uo=t),Lu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),Wp=Hn(bl),Qx=v({},bl,{dataTransfer:0}),Jx=Hn(Qx),$x=v({},co,{relatedTarget:0}),Pu=Hn($x),eS=v({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),tS=Hn(eS),nS=v({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iS=Hn(nS),aS=v({},_s,{data:0}),qp=Hn(aS),sS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=oS[t])?!!n[t]:!1}function Iu(){return lS}var cS=v({},co,{key:function(t){if(t.key){var n=sS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Iu,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uS=Hn(cS),fS=v({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yp=Hn(fS),dS=v({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Iu}),hS=Hn(dS),pS=v({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=Hn(pS),gS=v({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vS=Hn(gS),_S=v({},_s,{newState:0,oldState:0}),xS=Hn(_S),SS=[9,13,27,32],Fu=aa&&"CompositionEvent"in window,fo=null;aa&&"documentMode"in document&&(fo=document.documentMode);var yS=aa&&"TextEvent"in window&&!fo,Zp=aa&&(!Fu||fo&&8<fo&&11>=fo),Kp=" ",Qp=!1;function Jp(t,n){switch(t){case"keyup":return SS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var er=!1;function MS(t,n){switch(t){case"compositionend":return $p(n);case"keypress":return n.which!==32?null:(Qp=!0,Kp);case"textInput":return t=n.data,t===Kp&&Qp?null:t;default:return null}}function ES(t,n){if(er)return t==="compositionend"||!Fu&&Jp(t,n)?(t=jp(),Sl=Uu=Ia=null,er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zp&&n.locale!=="ko"?null:n.data;default:return null}}var bS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function em(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!bS[t.type]:n==="textarea"}function tm(t,n,a,o){Js?$s?$s.push(o):$s=[o]:Js=o,n=hc(n,"onChange"),0<n.length&&(a=new El("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ho=null,po=null;function TS(t){Fg(t,0)}function Tl(t){var n=gs(t);if(en(n))return t}function nm(t,n){if(t==="change")return n}var im=!1;if(aa){var Bu;if(aa){var zu="oninput"in document;if(!zu){var am=document.createElement("div");am.setAttribute("oninput","return;"),zu=typeof am.oninput=="function"}Bu=zu}else Bu=!1;im=Bu&&(!document.documentMode||9<document.documentMode)}function sm(){ho&&(ho.detachEvent("onpropertychange",rm),po=ho=null)}function rm(t){if(t.propertyName==="value"&&Tl(po)){var n=[];tm(n,po,t,wu(t)),kp(TS,n)}}function AS(t,n,a){t==="focusin"?(sm(),ho=n,po=a,ho.attachEvent("onpropertychange",rm)):t==="focusout"&&sm()}function RS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(po)}function CS(t,n){if(t==="click")return Tl(n)}function wS(t,n){if(t==="input"||t==="change")return Tl(n)}function DS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Jn=typeof Object.is=="function"?Object.is:DS;function mo(t,n){if(Jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!$t.call(n,u)||!Jn(t[u],n[u]))return!1}return!0}function om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lm(t,n){var a=om(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=om(a)}}function cm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?cm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function um(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Zt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Zt(t.document)}return n}function Hu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var NS=aa&&"documentMode"in document&&11>=document.documentMode,tr=null,Gu=null,go=null,Vu=!1;function fm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vu||tr==null||tr!==Zt(o)||(o=tr,"selectionStart"in o&&Hu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),go&&mo(go,o)||(go=o,o=hc(Gu,"onSelect"),0<o.length&&(n=new El("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=tr)))}function xs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var nr={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionrun:xs("Transition","TransitionRun"),transitionstart:xs("Transition","TransitionStart"),transitioncancel:xs("Transition","TransitionCancel"),transitionend:xs("Transition","TransitionEnd")},ku={},dm={};aa&&(dm=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function Ss(t){if(ku[t])return ku[t];if(!nr[t])return t;var n=nr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in dm)return ku[t]=n[a];return t}var hm=Ss("animationend"),pm=Ss("animationiteration"),mm=Ss("animationstart"),US=Ss("transitionrun"),LS=Ss("transitionstart"),OS=Ss("transitioncancel"),gm=Ss("transitionend"),vm=new Map,ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ju.push("scrollEnd");function Ri(t,n){vm.set(t,n),ee(n,[t])}var Al=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fi=[],ir=0,Xu=0;function Rl(){for(var t=ir,n=Xu=ir=0;n<t;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var d=fi[n];if(fi[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&_m(a,u,d)}}function Cl(t,n,a,o){fi[ir++]=t,fi[ir++]=n,fi[ir++]=a,fi[ir++]=o,Xu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Wu(t,n,a,o){return Cl(t,n,a,o),wl(t)}function ys(t,n){return Cl(t,null,null,n),wl(t)}function _m(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-we(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function wl(t){if(50<Bo)throw Bo=0,nd=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ar={};function PS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,n,a,o){return new PS(t,n,a,o)}function qu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sa(t,n){var a=t.alternate;return a===null?(a=$n(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function xm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Dl(t,n,a,o,u,d){var M=0;if(o=t,typeof t=="function")qu(t)&&(M=1);else if(typeof t=="string")M=Hy(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case z:return t=$n(31,a,n,u),t.elementType=z,t.lanes=d,t;case R:return Ms(a.children,u,d,n);case S:M=8,u|=24;break;case y:return t=$n(12,a,n,u|2),t.elementType=y,t.lanes=d,t;case j:return t=$n(13,a,n,u),t.elementType=j,t.lanes=d,t;case P:return t=$n(19,a,n,u),t.elementType=P,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:M=10;break e;case N:M=9;break e;case L:M=11;break e;case I:M=14;break e;case A:M=16,o=null;break e}M=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=$n(M,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Ms(t,n,a,o){return t=$n(7,t,o,n),t.lanes=a,t}function Yu(t,n,a){return t=$n(6,t,null,n),t.lanes=a,t}function Sm(t){var n=$n(18,null,null,0);return n.stateNode=t,n}function Zu(t,n,a){return n=$n(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ym=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var a=ym.get(t);return a!==void 0?a:(n={value:t,source:n,stack:vt(n)},ym.set(t,n),n)}return{value:t,source:n,stack:vt(n)}}var sr=[],rr=0,Nl=null,vo=0,hi=[],pi=0,Fa=null,ki=1,ji="";function ra(t,n){sr[rr++]=vo,sr[rr++]=Nl,Nl=t,vo=n}function Mm(t,n,a){hi[pi++]=ki,hi[pi++]=ji,hi[pi++]=Fa,Fa=t;var o=ki;t=ji;var u=32-we(o)-1;o&=~(1<<u),a+=1;var d=32-we(n)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,ki=1<<32-we(n)+u|a<<u|o,ji=d+t}else ki=1<<d|a<<u|o,ji=t}function Ku(t){t.return!==null&&(ra(t,1),Mm(t,1,0))}function Qu(t){for(;t===Nl;)Nl=sr[--rr],sr[rr]=null,vo=sr[--rr],sr[rr]=null;for(;t===Fa;)Fa=hi[--pi],hi[pi]=null,ji=hi[--pi],hi[pi]=null,ki=hi[--pi],hi[pi]=null}function Em(t,n){hi[pi++]=ki,hi[pi++]=ji,hi[pi++]=Fa,ki=n.id,ji=n.overflow,Fa=t}var Rn=null,Qt=null,Ct=!1,Ba=null,mi=!1,Ju=Error(s(519));function za(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _o(di(n,t)),Ju}function bm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[An]=o,a){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(a=0;a<Ho.length;a++)Et(Ho[a],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Ti(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Gg(n.textContent,a)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=ia),n=!0):n=!1,n||za(t,!0)}function Tm(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Rn=Rn.return}}function or(t){if(t!==Rn)return!1;if(!Ct)return Tm(t),Ct=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vd(t.type,t.memoizedProps)),a=!a),a&&Qt&&za(t),Tm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qt=Kg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qt=Kg(t)}else n===27?(n=Qt,$a(t.type)?(t=Md,Md=null,Qt=t):Qt=n):Qt=Rn?vi(t.stateNode.nextSibling):null;return!0}function Es(){Qt=Rn=null,Ct=!1}function $u(){var t=Ba;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),Ba=null),t}function _o(t){Ba===null?Ba=[t]:Ba.push(t)}var ef=F(null),bs=null,oa=null;function Ha(t,n,a){Te(ef,n._currentValue),n._currentValue=a}function la(t){t._currentValue=ef.current,te(ef)}function tf(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function nf(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;e:for(;d!==null;){var D=d;d=u;for(var X=0;X<n.length;X++)if(D.context===n[X]){d.lanes|=a,D=d.alternate,D!==null&&(D.lanes|=a),tf(d.return,a,t),o||(M=null);break e}d=D.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),tf(M,a,t),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===t){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function lr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var D=u.type;Jn(u.pendingProps.value,M.value)||(t!==null?t.push(D):t=[D])}}else if(u===Re.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Xo):t=[Xo])}u=u.return}t!==null&&nf(n,t,a,o),n.flags|=262144}function Ul(t){for(t=t.firstContext;t!==null;){if(!Jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ts(t){bs=t,oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Am(bs,t)}function Ll(t,n){return bs===null&&Ts(t),Am(t,n)}function Am(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},oa===null){if(t===null)throw Error(s(308));oa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else oa=oa.next=n;return a}var IS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},FS=r.unstable_scheduleCallback,BS=r.unstable_NormalPriority,hn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function af(){return{controller:new IS,data:new Map,refCount:0}}function xo(t){t.refCount--,t.refCount===0&&FS(BS,function(){t.controller.abort()})}var So=null,sf=0,cr=0,ur=null;function zS(t,n){if(So===null){var a=So=[];sf=0,cr=ld(),ur={status:"pending",value:void 0,then:function(o){a.push(o)}}}return sf++,n.then(Rm,Rm),n}function Rm(){if(--sf===0&&So!==null){ur!==null&&(ur.status="fulfilled");var t=So;So=null,cr=0,ur=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function HS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Cm=O.S;O.S=function(t,n){fg=B(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&zS(t,n),Cm!==null&&Cm(t,n)};var As=F(null);function rf(){var t=As.current;return t!==null?t:Kt.pooledCache}function Ol(t,n){n===null?Te(As,As.current):Te(As,n.pool)}function wm(){var t=rf();return t===null?null:{parent:hn._currentValue,pool:t}}var fr=Error(s(460)),of=Error(s(474)),Pl=Error(s(542)),Il={then:function(){}};function Dm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Nm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ia,ia),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Lm(t),t;default:if(typeof n.status=="string")n.then(ia,ia);else{if(t=Kt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Lm(t),t}throw Cs=n,fr}}function Rs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cs=a,fr):a}}var Cs=null;function Um(){if(Cs===null)throw Error(s(459));var t=Cs;return Cs=null,t}function Lm(t){if(t===fr||t===Pl)throw Error(s(483))}var dr=null,yo=0;function Fl(t){var n=yo;return yo+=1,dr===null&&(dr=[]),Nm(dr,t,n)}function Mo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Bl(t,n){throw n.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Om(t){function n(ne,Q){if(t){var oe=ne.deletions;oe===null?(ne.deletions=[Q],ne.flags|=16):oe.push(Q)}}function a(ne,Q){if(!t)return null;for(;Q!==null;)n(ne,Q),Q=Q.sibling;return null}function o(ne){for(var Q=new Map;ne!==null;)ne.key!==null?Q.set(ne.key,ne):Q.set(ne.index,ne),ne=ne.sibling;return Q}function u(ne,Q){return ne=sa(ne,Q),ne.index=0,ne.sibling=null,ne}function d(ne,Q,oe){return ne.index=oe,t?(oe=ne.alternate,oe!==null?(oe=oe.index,oe<Q?(ne.flags|=67108866,Q):oe):(ne.flags|=67108866,Q)):(ne.flags|=1048576,Q)}function M(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function D(ne,Q,oe,Ee){return Q===null||Q.tag!==6?(Q=Yu(oe,ne.mode,Ee),Q.return=ne,Q):(Q=u(Q,oe),Q.return=ne,Q)}function X(ne,Q,oe,Ee){var nt=oe.type;return nt===R?Se(ne,Q,oe.props.children,Ee,oe.key):Q!==null&&(Q.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===A&&Rs(nt)===Q.type)?(Q=u(Q,oe.props),Mo(Q,oe),Q.return=ne,Q):(Q=Dl(oe.type,oe.key,oe.props,null,ne.mode,Ee),Mo(Q,oe),Q.return=ne,Q)}function le(ne,Q,oe,Ee){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==oe.containerInfo||Q.stateNode.implementation!==oe.implementation?(Q=Zu(oe,ne.mode,Ee),Q.return=ne,Q):(Q=u(Q,oe.children||[]),Q.return=ne,Q)}function Se(ne,Q,oe,Ee,nt){return Q===null||Q.tag!==7?(Q=Ms(oe,ne.mode,Ee,nt),Q.return=ne,Q):(Q=u(Q,oe),Q.return=ne,Q)}function be(ne,Q,oe){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=Yu(""+Q,ne.mode,oe),Q.return=ne,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:return oe=Dl(Q.type,Q.key,Q.props,null,ne.mode,oe),Mo(oe,Q),oe.return=ne,oe;case T:return Q=Zu(Q,ne.mode,oe),Q.return=ne,Q;case A:return Q=Rs(Q),be(ne,Q,oe)}if(Y(Q)||k(Q))return Q=Ms(Q,ne.mode,oe,null),Q.return=ne,Q;if(typeof Q.then=="function")return be(ne,Fl(Q),oe);if(Q.$$typeof===U)return be(ne,Ll(ne,Q),oe);Bl(ne,Q)}return null}function pe(ne,Q,oe,Ee){var nt=Q!==null?Q.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return nt!==null?null:D(ne,Q,""+oe,Ee);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case E:return oe.key===nt?X(ne,Q,oe,Ee):null;case T:return oe.key===nt?le(ne,Q,oe,Ee):null;case A:return oe=Rs(oe),pe(ne,Q,oe,Ee)}if(Y(oe)||k(oe))return nt!==null?null:Se(ne,Q,oe,Ee,null);if(typeof oe.then=="function")return pe(ne,Q,Fl(oe),Ee);if(oe.$$typeof===U)return pe(ne,Q,Ll(ne,oe),Ee);Bl(ne,oe)}return null}function ve(ne,Q,oe,Ee,nt){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number"||typeof Ee=="bigint")return ne=ne.get(oe)||null,D(Q,ne,""+Ee,nt);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case E:return ne=ne.get(Ee.key===null?oe:Ee.key)||null,X(Q,ne,Ee,nt);case T:return ne=ne.get(Ee.key===null?oe:Ee.key)||null,le(Q,ne,Ee,nt);case A:return Ee=Rs(Ee),ve(ne,Q,oe,Ee,nt)}if(Y(Ee)||k(Ee))return ne=ne.get(oe)||null,Se(Q,ne,Ee,nt,null);if(typeof Ee.then=="function")return ve(ne,Q,oe,Fl(Ee),nt);if(Ee.$$typeof===U)return ve(ne,Q,oe,Ll(Q,Ee),nt);Bl(Q,Ee)}return null}function Ye(ne,Q,oe,Ee){for(var nt=null,Lt=null,Je=Q,gt=Q=0,Rt=null;Je!==null&&gt<oe.length;gt++){Je.index>gt?(Rt=Je,Je=null):Rt=Je.sibling;var Ot=pe(ne,Je,oe[gt],Ee);if(Ot===null){Je===null&&(Je=Rt);break}t&&Je&&Ot.alternate===null&&n(ne,Je),Q=d(Ot,Q,gt),Lt===null?nt=Ot:Lt.sibling=Ot,Lt=Ot,Je=Rt}if(gt===oe.length)return a(ne,Je),Ct&&ra(ne,gt),nt;if(Je===null){for(;gt<oe.length;gt++)Je=be(ne,oe[gt],Ee),Je!==null&&(Q=d(Je,Q,gt),Lt===null?nt=Je:Lt.sibling=Je,Lt=Je);return Ct&&ra(ne,gt),nt}for(Je=o(Je);gt<oe.length;gt++)Rt=ve(Je,ne,gt,oe[gt],Ee),Rt!==null&&(t&&Rt.alternate!==null&&Je.delete(Rt.key===null?gt:Rt.key),Q=d(Rt,Q,gt),Lt===null?nt=Rt:Lt.sibling=Rt,Lt=Rt);return t&&Je.forEach(function(as){return n(ne,as)}),Ct&&ra(ne,gt),nt}function it(ne,Q,oe,Ee){if(oe==null)throw Error(s(151));for(var nt=null,Lt=null,Je=Q,gt=Q=0,Rt=null,Ot=oe.next();Je!==null&&!Ot.done;gt++,Ot=oe.next()){Je.index>gt?(Rt=Je,Je=null):Rt=Je.sibling;var as=pe(ne,Je,Ot.value,Ee);if(as===null){Je===null&&(Je=Rt);break}t&&Je&&as.alternate===null&&n(ne,Je),Q=d(as,Q,gt),Lt===null?nt=as:Lt.sibling=as,Lt=as,Je=Rt}if(Ot.done)return a(ne,Je),Ct&&ra(ne,gt),nt;if(Je===null){for(;!Ot.done;gt++,Ot=oe.next())Ot=be(ne,Ot.value,Ee),Ot!==null&&(Q=d(Ot,Q,gt),Lt===null?nt=Ot:Lt.sibling=Ot,Lt=Ot);return Ct&&ra(ne,gt),nt}for(Je=o(Je);!Ot.done;gt++,Ot=oe.next())Ot=ve(Je,ne,gt,Ot.value,Ee),Ot!==null&&(t&&Ot.alternate!==null&&Je.delete(Ot.key===null?gt:Ot.key),Q=d(Ot,Q,gt),Lt===null?nt=Ot:Lt.sibling=Ot,Lt=Ot);return t&&Je.forEach(function(Qy){return n(ne,Qy)}),Ct&&ra(ne,gt),nt}function Yt(ne,Q,oe,Ee){if(typeof oe=="object"&&oe!==null&&oe.type===R&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case E:e:{for(var nt=oe.key;Q!==null;){if(Q.key===nt){if(nt=oe.type,nt===R){if(Q.tag===7){a(ne,Q.sibling),Ee=u(Q,oe.props.children),Ee.return=ne,ne=Ee;break e}}else if(Q.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===A&&Rs(nt)===Q.type){a(ne,Q.sibling),Ee=u(Q,oe.props),Mo(Ee,oe),Ee.return=ne,ne=Ee;break e}a(ne,Q);break}else n(ne,Q);Q=Q.sibling}oe.type===R?(Ee=Ms(oe.props.children,ne.mode,Ee,oe.key),Ee.return=ne,ne=Ee):(Ee=Dl(oe.type,oe.key,oe.props,null,ne.mode,Ee),Mo(Ee,oe),Ee.return=ne,ne=Ee)}return M(ne);case T:e:{for(nt=oe.key;Q!==null;){if(Q.key===nt)if(Q.tag===4&&Q.stateNode.containerInfo===oe.containerInfo&&Q.stateNode.implementation===oe.implementation){a(ne,Q.sibling),Ee=u(Q,oe.children||[]),Ee.return=ne,ne=Ee;break e}else{a(ne,Q);break}else n(ne,Q);Q=Q.sibling}Ee=Zu(oe,ne.mode,Ee),Ee.return=ne,ne=Ee}return M(ne);case A:return oe=Rs(oe),Yt(ne,Q,oe,Ee)}if(Y(oe))return Ye(ne,Q,oe,Ee);if(k(oe)){if(nt=k(oe),typeof nt!="function")throw Error(s(150));return oe=nt.call(oe),it(ne,Q,oe,Ee)}if(typeof oe.then=="function")return Yt(ne,Q,Fl(oe),Ee);if(oe.$$typeof===U)return Yt(ne,Q,Ll(ne,oe),Ee);Bl(ne,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,Q!==null&&Q.tag===6?(a(ne,Q.sibling),Ee=u(Q,oe),Ee.return=ne,ne=Ee):(a(ne,Q),Ee=Yu(oe,ne.mode,Ee),Ee.return=ne,ne=Ee),M(ne)):a(ne,Q)}return function(ne,Q,oe,Ee){try{yo=0;var nt=Yt(ne,Q,oe,Ee);return dr=null,nt}catch(Je){if(Je===fr||Je===Pl)throw Je;var Lt=$n(29,Je,null,ne.mode);return Lt.lanes=Ee,Lt.return=ne,Lt}}}var ws=Om(!0),Pm=Om(!1),Ga=!1;function lf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ka(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ft&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=wl(t),_m(t,null,a),n}return Cl(t,o,n,a),wl(t)}function Eo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ui(t,a)}}function uf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var ff=!1;function bo(){if(ff){var t=ur;if(t!==null)throw t}}function To(t,n,a,o){ff=!1;var u=t.updateQueue;Ga=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var X=D,le=X.next;X.next=null,M===null?d=le:M.next=le,M=X;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,D=Se.lastBaseUpdate,D!==M&&(D===null?Se.firstBaseUpdate=le:D.next=le,Se.lastBaseUpdate=X))}if(d!==null){var be=u.baseState;M=0,Se=le=X=null,D=d;do{var pe=D.lane&-536870913,ve=pe!==D.lane;if(ve?(At&pe)===pe:(o&pe)===pe){pe!==0&&pe===cr&&(ff=!0),Se!==null&&(Se=Se.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var Ye=t,it=D;pe=n;var Yt=a;switch(it.tag){case 1:if(Ye=it.payload,typeof Ye=="function"){be=Ye.call(Yt,be,pe);break e}be=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=it.payload,pe=typeof Ye=="function"?Ye.call(Yt,be,pe):Ye,pe==null)break e;be=v({},be,pe);break e;case 2:Ga=!0}}pe=D.callback,pe!==null&&(t.flags|=64,ve&&(t.flags|=8192),ve=u.callbacks,ve===null?u.callbacks=[pe]:ve.push(pe))}else ve={lane:pe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Se===null?(le=Se=ve,X=be):Se=Se.next=ve,M|=pe;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;ve=D,D=ve.next,ve.next=null,u.lastBaseUpdate=ve,u.shared.pending=null}}while(!0);Se===null&&(X=be),u.baseState=X,u.firstBaseUpdate=le,u.lastBaseUpdate=Se,d===null&&(u.shared.lanes=0),Ya|=M,t.lanes=M,t.memoizedState=be}}function Im(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Fm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Im(a[t],n)}var hr=F(null),zl=F(0);function Bm(t,n){t=va,Te(zl,t),Te(hr,n),va=t|n.baseLanes}function df(){Te(zl,va),Te(hr,hr.current)}function hf(){va=zl.current,te(hr),te(zl)}var ei=F(null),gi=null;function ja(t){var n=t.alternate;Te(un,un.current&1),Te(ei,t),gi===null&&(n===null||hr.current!==null||n.memoizedState!==null)&&(gi=t)}function pf(t){Te(un,un.current),Te(ei,t),gi===null&&(gi=t)}function zm(t){t.tag===22?(Te(un,un.current),Te(ei,t),gi===null&&(gi=t)):Xa()}function Xa(){Te(un,un.current),Te(ei,ei.current)}function ti(t){te(ei),gi===t&&(gi=null),te(un)}var un=F(0);function Hl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Sd(a)||yd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ca=0,mt=null,Wt=null,pn=null,Gl=!1,pr=!1,Ds=!1,Vl=0,Ao=0,mr=null,GS=0;function rn(){throw Error(s(321))}function mf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Jn(t[a],n[a]))return!1;return!0}function gf(t,n,a,o,u,d){return ca=d,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?M0:Nf,Ds=!1,d=a(o,u),Ds=!1,pr&&(d=Gm(n,a,o,u)),Hm(t),d}function Hm(t){O.H=wo;var n=Wt!==null&&Wt.next!==null;if(ca=0,pn=Wt=mt=null,Gl=!1,Ao=0,mr=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&Ul(t)&&(mn=!0))}function Gm(t,n,a,o){mt=t;var u=0;do{if(pr&&(mr=null),Ao=0,pr=!1,25<=u)throw Error(s(301));if(u+=1,pn=Wt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=E0,d=n(a,o)}while(pr);return d}function VS(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?Ro(n):n,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(mt.flags|=1024),n}function vf(){var t=Vl!==0;return Vl=0,t}function _f(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function xf(t){if(Gl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Gl=!1}ca=0,pn=Wt=mt=null,pr=!1,Ao=Vl=0,mr=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?mt.memoizedState=pn=t:pn=pn.next=t,pn}function fn(){if(Wt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var n=pn===null?mt.memoizedState:pn.next;if(n!==null)pn=n,Wt=t;else{if(t===null)throw mt.alternate===null?Error(s(467)):Error(s(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},pn===null?mt.memoizedState=pn=t:pn=pn.next=t}return pn}function kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(t){var n=Ao;return Ao+=1,mr===null&&(mr=[]),t=Nm(mr,t,n),n=mt,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?M0:Nf),t}function jl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ro(t);if(t.$$typeof===U)return Cn(t)}throw Error(s(438,String(t)))}function Sf(t){var n=null,a=mt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=kl(),mt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=K;return n.index++,a}function ua(t,n){return typeof n=="function"?n(t):n}function Xl(t){var n=fn();return yf(n,Wt,t)}function yf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var D=M=null,X=null,le=n,Se=!1;do{var be=le.lane&-536870913;if(be!==le.lane?(At&be)===be:(ca&be)===be){var pe=le.revertLane;if(pe===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),be===cr&&(Se=!0);else if((ca&pe)===pe){le=le.next,pe===cr&&(Se=!0);continue}else be={lane:0,revertLane:le.revertLane,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},X===null?(D=X=be,M=d):X=X.next=be,mt.lanes|=pe,Ya|=pe;be=le.action,Ds&&a(d,be),d=le.hasEagerState?le.eagerState:a(d,be)}else pe={lane:be,revertLane:le.revertLane,gesture:le.gesture,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},X===null?(D=X=pe,M=d):X=X.next=pe,mt.lanes|=be,Ya|=be;le=le.next}while(le!==null&&le!==n);if(X===null?M=d:X.next=D,!Jn(d,t.memoizedState)&&(mn=!0,Se&&(a=ur,a!==null)))throw a;t.memoizedState=d,t.baseState=M,t.baseQueue=X,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Mf(t){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do d=t(d,M.action),M=M.next;while(M!==u);Jn(d,n.memoizedState)||(mn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Vm(t,n,a){var o=mt,u=fn(),d=Ct;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!Jn((Wt||u).memoizedState,a);if(M&&(u.memoizedState=a,mn=!0),u=u.queue,Tf(Xm.bind(null,o,u,t),[t]),u.getSnapshot!==n||M||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,gr(9,{destroy:void 0},jm.bind(null,o,u,a,n),null),Kt===null)throw Error(s(349));d||(ca&127)!==0||km(o,n,a)}return a}function km(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=mt.updateQueue,n===null?(n=kl(),mt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function jm(t,n,a,o){n.value=a,n.getSnapshot=o,Wm(n)&&qm(t)}function Xm(t,n,a){return a(function(){Wm(n)&&qm(t)})}function Wm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Jn(t,a)}catch{return!0}}function qm(t){var n=ys(t,2);n!==null&&Xn(n,t,2)}function Ef(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),Ds){xe(!0);try{a()}finally{xe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},n}function Ym(t,n,a,o){return t.baseState=a,yf(t,Wt,typeof o=="function"?o:ua)}function kS(t,n,a,o,u){if(Yl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};O.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Zm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Zm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=O.T,M={};O.T=M;try{var D=a(u,o),X=O.S;X!==null&&X(M,D),Km(t,n,D)}catch(le){bf(t,n,le)}finally{d!==null&&M.types!==null&&(d.types=M.types),O.T=d}}else try{d=a(u,o),Km(t,n,d)}catch(le){bf(t,n,le)}}function Km(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Qm(t,n,o)},function(o){return bf(t,n,o)}):Qm(t,n,a)}function Qm(t,n,a){n.status="fulfilled",n.value=a,Jm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Zm(t,a)))}function bf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Jm(n),n=n.next;while(n!==o)}t.action=null}function Jm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function $m(t,n){return n}function e0(t,n){if(Ct){var a=Kt.formState;if(a!==null){e:{var o=mt;if(Ct){if(Qt){t:{for(var u=Qt,d=mi;u.nodeType!==8;){if(!d){u=null;break t}if(u=vi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Qt=vi(u.nextSibling),o=u.data==="F!";break e}}za(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$m,lastRenderedState:n},a.queue=o,a=x0.bind(null,mt,o),o.dispatch=a,o=Ef(!1),d=Df.bind(null,mt,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=kS.bind(null,mt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function t0(t){var n=fn();return n0(n,Wt,t)}function n0(t,n,a){if(n=yf(t,n,$m)[0],t=Xl(ua)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ro(n)}catch(M){throw M===fr?Pl:M}else o=n;n=fn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(mt.flags|=2048,gr(9,{destroy:void 0},jS.bind(null,u,a),null)),[o,d,t]}function jS(t,n){t.action=n}function i0(t){var n=fn(),a=Wt;if(a!==null)return n0(n,a,t);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function gr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=mt.updateQueue,n===null&&(n=kl(),mt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function a0(){return fn().memoizedState}function Wl(t,n,a,o){var u=Fn();mt.flags|=t,u.memoizedState=gr(1|n,{destroy:void 0},a,o===void 0?null:o)}function ql(t,n,a,o){var u=fn();o=o===void 0?null:o;var d=u.memoizedState.inst;Wt!==null&&o!==null&&mf(o,Wt.memoizedState.deps)?u.memoizedState=gr(n,d,a,o):(mt.flags|=t,u.memoizedState=gr(1|n,d,a,o))}function s0(t,n){Wl(8390656,8,t,n)}function Tf(t,n){ql(2048,8,t,n)}function XS(t){mt.flags|=4;var n=mt.updateQueue;if(n===null)n=kl(),mt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function r0(t){var n=fn().memoizedState;return XS({ref:n,nextImpl:t}),function(){if((Ft&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function o0(t,n){return ql(4,2,t,n)}function l0(t,n){return ql(4,4,t,n)}function c0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function u0(t,n,a){a=a!=null?a.concat([t]):null,ql(4,4,c0.bind(null,n,t),a)}function Af(){}function f0(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&mf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function d0(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&mf(n,o[1]))return o[0];if(o=t(),Ds){xe(!0);try{t()}finally{xe(!1)}}return a.memoizedState=[o,n],o}function Rf(t,n,a){return a===void 0||(ca&1073741824)!==0&&(At&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=hg(),mt.lanes|=t,Ya|=t,a)}function h0(t,n,a,o){return Jn(a,n)?a:hr.current!==null?(t=Rf(t,a,o),Jn(t,n)||(mn=!0),t):(ca&42)===0||(ca&1073741824)!==0&&(At&261930)===0?(mn=!0,t.memoizedState=a):(t=hg(),mt.lanes|=t,Ya|=t,n)}function p0(t,n,a,o,u){var d=H.p;H.p=d!==0&&8>d?d:8;var M=O.T,D={};O.T=D,Df(t,!1,n,a);try{var X=u(),le=O.S;if(le!==null&&le(D,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var Se=HS(X,o);Co(t,n,Se,ai(t))}else Co(t,n,o,ai(t))}catch(be){Co(t,n,{then:function(){},status:"rejected",reason:be},ai())}finally{H.p=d,M!==null&&D.types!==null&&(M.types=D.types),O.T=M}}function WS(){}function Cf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=m0(t).queue;p0(t,u,n,re,a===null?WS:function(){return g0(t),a(o)})}function m0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:re},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function g0(t){var n=m0(t);n.next===null&&(n=t.alternate.memoizedState),Co(t,n.next.queue,{},ai())}function wf(){return Cn(Xo)}function v0(){return fn().memoizedState}function _0(){return fn().memoizedState}function qS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();t=Va(a);var o=ka(n,t,a);o!==null&&(Xn(o,n,a),Eo(o,n,a)),n={cache:af()},t.payload=n;return}n=n.return}}function YS(t,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Yl(t)?S0(n,a):(a=Wu(t,n,a,o),a!==null&&(Xn(a,t,o),y0(a,n,o)))}function x0(t,n,a){var o=ai();Co(t,n,a,o)}function Co(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yl(t))S0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,D=d(M,a);if(u.hasEagerState=!0,u.eagerState=D,Jn(D,M))return Cl(t,n,u,0),Kt===null&&Rl(),!1}catch{}if(a=Wu(t,n,u,o),a!==null)return Xn(a,t,o),y0(a,n,o),!0}return!1}function Df(t,n,a,o){if(o={lane:2,revertLane:ld(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Yl(t)){if(n)throw Error(s(479))}else n=Wu(t,a,o,2),n!==null&&Xn(n,t,2)}function Yl(t){var n=t.alternate;return t===mt||n!==null&&n===mt}function S0(t,n){pr=Gl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function y0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ui(t,a)}}var wo={readContext:Cn,use:jl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};wo.useEffectEvent=rn;var M0={readContext:Cn,use:jl,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:s0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Wl(4194308,4,c0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Wl(4194308,4,t,n)},useInsertionEffect:function(t,n){Wl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var o=t();if(Ds){xe(!0);try{t()}finally{xe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Fn();if(a!==void 0){var u=a(n);if(Ds){xe(!0);try{a(n)}finally{xe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=YS.bind(null,mt,t),[o.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ef(t);var n=t.queue,a=x0.bind(null,mt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Af,useDeferredValue:function(t,n){var a=Fn();return Rf(a,t,n)},useTransition:function(){var t=Ef(!1);return t=p0.bind(null,mt,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=mt,u=Fn();if(Ct){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Kt===null)throw Error(s(349));(At&127)!==0||km(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,s0(Xm.bind(null,o,d,t),[t]),o.flags|=2048,gr(9,{destroy:void 0},jm.bind(null,o,d,a,n),null),a},useId:function(){var t=Fn(),n=Kt.identifierPrefix;if(Ct){var a=ji,o=ki;a=(o&~(1<<32-we(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Vl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=GS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:wf,useFormState:e0,useActionState:e0,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Df.bind(null,mt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Sf,useCacheRefresh:function(){return Fn().memoizedState=qS.bind(null,mt)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Ft&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Nf={readContext:Cn,use:jl,useCallback:f0,useContext:Cn,useEffect:Tf,useImperativeHandle:u0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:d0,useReducer:Xl,useRef:a0,useState:function(){return Xl(ua)},useDebugValue:Af,useDeferredValue:function(t,n){var a=fn();return h0(a,Wt.memoizedState,t,n)},useTransition:function(){var t=Xl(ua)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Ro(t),n]},useSyncExternalStore:Vm,useId:v0,useHostTransitionStatus:wf,useFormState:t0,useActionState:t0,useOptimistic:function(t,n){var a=fn();return Ym(a,Wt,t,n)},useMemoCache:Sf,useCacheRefresh:_0};Nf.useEffectEvent=r0;var E0={readContext:Cn,use:jl,useCallback:f0,useContext:Cn,useEffect:Tf,useImperativeHandle:u0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:d0,useReducer:Mf,useRef:a0,useState:function(){return Mf(ua)},useDebugValue:Af,useDeferredValue:function(t,n){var a=fn();return Wt===null?Rf(a,t,n):h0(a,Wt.memoizedState,t,n)},useTransition:function(){var t=Mf(ua)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Ro(t),n]},useSyncExternalStore:Vm,useId:v0,useHostTransitionStatus:wf,useFormState:i0,useActionState:i0,useOptimistic:function(t,n){var a=fn();return Wt!==null?Ym(a,Wt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Sf,useCacheRefresh:_0};E0.useEffectEvent=r0;function Uf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Lf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ai(),u=Va(o);u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,o),n!==null&&(Xn(n,t,o),Eo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ai(),u=Va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,o),n!==null&&(Xn(n,t,o),Eo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ai(),o=Va(a);o.tag=2,n!=null&&(o.callback=n),n=ka(t,o,a),n!==null&&(Xn(n,t,a),Eo(n,t,a))}};function b0(t,n,a,o,u,d,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,M):n.prototype&&n.prototype.isPureReactComponent?!mo(a,o)||!mo(u,d):!0}function T0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Lf.enqueueReplaceState(n,n.state,null)}function Ns(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function A0(t){Al(t)}function R0(t){console.error(t)}function C0(t){Al(t)}function Zl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function w0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Of(t,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){Zl(t,n)},a}function D0(t){return t=Va(t),t.tag=3,t}function N0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){w0(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){w0(n,a,o),typeof u!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var D=o.stack;this.componentDidCatch(o.value,{componentStack:D!==null?D:""})})}function ZS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&lr(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?oc():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Il?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),sd(t,o,u)),!1;case 22:return a.flags|=65536,o===Il?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),sd(t,o,u)),!1}throw Error(s(435,a.tag))}return sd(t,o,u),oc(),!1}if(Ct)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ju&&(t=Error(s(422),{cause:o}),_o(di(t,a)))):(o!==Ju&&(n=Error(s(423),{cause:o}),_o(di(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=di(o,a),u=Of(t.stateNode,o,u),uf(t,u),on!==4&&(on=2)),!1;var d=Error(s(520),{cause:o});if(d=di(d,a),Fo===null?Fo=[d]:Fo.push(d),on!==4&&(on=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Of(a.stateNode,o,t),uf(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Za===null||!Za.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=D0(u),N0(u,t,a,o),uf(a,u),!1}a=a.return}while(a!==null);return!1}var Pf=Error(s(461)),mn=!1;function wn(t,n,a,o){n.child=t===null?Pm(n,null,a,o):ws(n,t.child,a,o)}function U0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var M={};for(var D in o)D!=="ref"&&(M[D]=o[D])}else M=o;return Ts(n),o=gf(t,n,a,M,d,u),D=vf(),t!==null&&!mn?(_f(t,n,u),fa(t,n,u)):(Ct&&D&&Ku(n),n.flags|=1,wn(t,n,o,u),n.child)}function L0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!qu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,O0(t,n,d,o,u)):(t=Dl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!kf(t,u)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:mo,a(M,o)&&t.ref===n.ref)return fa(t,n,u)}return n.flags|=1,t=sa(d,o),t.ref=n.ref,t.return=n,n.child=t}function O0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(mo(d,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=d,kf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,fa(t,n,u)}return If(t,n,a,o,u)}function P0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return I0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ol(n,d!==null?d.cachePool:null),d!==null?Bm(n,d):df(),zm(n);else return o=n.lanes=536870912,I0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Ol(n,d.cachePool),Bm(n,d),Xa(),n.memoizedState=null):(t!==null&&Ol(n,null),df(),Xa());return wn(t,n,u,a),n.child}function Do(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function I0(t,n,a,o,u){var d=rf();return d=d===null?null:{parent:hn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Ol(n,null),df(),zm(n),t!==null&&lr(t,n,o,!0),n.childLanes=u,null}function Kl(t,n){return n=Jl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function F0(t,n,a){return ws(n,t.child,null,a),t=Kl(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function KS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ct){if(o.mode==="hidden")return t=Kl(n,o),n.lanes=536870912,Do(null,t);if(pf(n),(t=Qt)?(t=Zg(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:ki,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},a=Sm(t),a.return=n,n.child=a,Rn=n,Qt=null)):t=null,t===null)throw za(n);return n.lanes=536870912,null}return Kl(n,o)}var d=t.memoizedState;if(d!==null){var M=d.dehydrated;if(pf(n),u)if(n.flags&256)n.flags&=-257,n=F0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||lr(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(o=Kt,o!==null&&(M=Zn(o,a),M!==0&&M!==d.retryLane))throw d.retryLane=M,ys(t,M),Xn(o,t,M),Pf;oc(),n=F0(t,n,a)}else t=d.treeContext,Qt=vi(M.nextSibling),Rn=n,Ct=!0,Ba=null,mi=!1,t!==null&&Em(n,t),n=Kl(n,o),n.flags|=4096;return n}return t=sa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ql(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function If(t,n,a,o,u){return Ts(n),a=gf(t,n,a,o,void 0,u),o=vf(),t!==null&&!mn?(_f(t,n,u),fa(t,n,u)):(Ct&&o&&Ku(n),n.flags|=1,wn(t,n,a,u),n.child)}function B0(t,n,a,o,u,d){return Ts(n),n.updateQueue=null,a=Gm(n,o,a,u),Hm(t),o=vf(),t!==null&&!mn?(_f(t,n,d),fa(t,n,d)):(Ct&&o&&Ku(n),n.flags|=1,wn(t,n,a,d),n.child)}function z0(t,n,a,o,u){if(Ts(n),n.stateNode===null){var d=ar,M=a.contextType;typeof M=="object"&&M!==null&&(d=Cn(M)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Lf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},lf(n),M=a.contextType,d.context=typeof M=="object"&&M!==null?Cn(M):ar,d.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Uf(n,a,M,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&Lf.enqueueReplaceState(d,d.state,null),To(n,o,d,u),bo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var D=n.memoizedProps,X=Ns(a,D);d.props=X;var le=d.context,Se=a.contextType;M=ar,typeof Se=="object"&&Se!==null&&(M=Cn(Se));var be=a.getDerivedStateFromProps;Se=typeof be=="function"||typeof d.getSnapshotBeforeUpdate=="function",D=n.pendingProps!==D,Se||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(D||le!==M)&&T0(n,d,o,M),Ga=!1;var pe=n.memoizedState;d.state=pe,To(n,o,d,u),bo(),le=n.memoizedState,D||pe!==le||Ga?(typeof be=="function"&&(Uf(n,a,be,o),le=n.memoizedState),(X=Ga||b0(n,a,X,o,pe,le,M))?(Se||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=le),d.props=o,d.state=le,d.context=M,o=X):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,cf(t,n),M=n.memoizedProps,Se=Ns(a,M),d.props=Se,be=n.pendingProps,pe=d.context,le=a.contextType,X=ar,typeof le=="object"&&le!==null&&(X=Cn(le)),D=a.getDerivedStateFromProps,(le=typeof D=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==be||pe!==X)&&T0(n,d,o,X),Ga=!1,pe=n.memoizedState,d.state=pe,To(n,o,d,u),bo();var ve=n.memoizedState;M!==be||pe!==ve||Ga||t!==null&&t.dependencies!==null&&Ul(t.dependencies)?(typeof D=="function"&&(Uf(n,a,D,o),ve=n.memoizedState),(Se=Ga||b0(n,a,Se,o,pe,ve,X)||t!==null&&t.dependencies!==null&&Ul(t.dependencies))?(le||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ve,X),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ve,X)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ve),d.props=o,d.state=ve,d.context=X,o=Se):(typeof d.componentDidUpdate!="function"||M===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Ql(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=ws(n,t.child,null,u),n.child=ws(n,null,a,u)):wn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=fa(t,n,u),t}function H0(t,n,a,o){return Es(),n.flags|=256,wn(t,n,a,o),n.child}var Ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bf(t){return{baseLanes:t,cachePool:wm()}}function zf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function G0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ct){if(u?ja(n):Xa(),(t=Qt)?(t=Zg(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:ki,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},a=Sm(t),a.return=n,n.child=a,Rn=n,Qt=null)):t=null,t===null)throw za(n);return yd(t)?n.lanes=32:n.lanes=536870912,null}var D=o.children;return o=o.fallback,u?(Xa(),u=n.mode,D=Jl({mode:"hidden",children:D},u),o=Ms(o,u,a,null),D.return=n,o.return=n,D.sibling=o,n.child=D,o=n.child,o.memoizedState=Bf(a),o.childLanes=zf(t,M,a),n.memoizedState=Ff,Do(null,o)):(ja(n),Hf(n,D))}var X=t.memoizedState;if(X!==null&&(D=X.dehydrated,D!==null)){if(d)n.flags&256?(ja(n),n.flags&=-257,n=Gf(t,n,a)):n.memoizedState!==null?(Xa(),n.child=t.child,n.flags|=128,n=null):(Xa(),D=o.fallback,u=n.mode,o=Jl({mode:"visible",children:o.children},u),D=Ms(D,u,a,null),D.flags|=2,o.return=n,D.return=n,o.sibling=D,n.child=o,ws(n,t.child,null,a),o=n.child,o.memoizedState=Bf(a),o.childLanes=zf(t,M,a),n.memoizedState=Ff,n=Do(null,o));else if(ja(n),yd(D)){if(M=D.nextSibling&&D.nextSibling.dataset,M)var le=M.dgst;M=le,o=Error(s(419)),o.stack="",o.digest=M,_o({value:o,source:null,stack:null}),n=Gf(t,n,a)}else if(mn||lr(t,n,a,!1),M=(a&t.childLanes)!==0,mn||M){if(M=Kt,M!==null&&(o=Zn(M,a),o!==0&&o!==X.retryLane))throw X.retryLane=o,ys(t,o),Xn(M,t,o),Pf;Sd(D)||oc(),n=Gf(t,n,a)}else Sd(D)?(n.flags|=192,n.child=t.child,n=null):(t=X.treeContext,Qt=vi(D.nextSibling),Rn=n,Ct=!0,Ba=null,mi=!1,t!==null&&Em(n,t),n=Hf(n,o.children),n.flags|=4096);return n}return u?(Xa(),D=o.fallback,u=n.mode,X=t.child,le=X.sibling,o=sa(X,{mode:"hidden",children:o.children}),o.subtreeFlags=X.subtreeFlags&65011712,le!==null?D=sa(le,D):(D=Ms(D,u,a,null),D.flags|=2),D.return=n,o.return=n,o.sibling=D,n.child=o,Do(null,o),o=n.child,D=t.child.memoizedState,D===null?D=Bf(a):(u=D.cachePool,u!==null?(X=hn._currentValue,u=u.parent!==X?{parent:X,pool:X}:u):u=wm(),D={baseLanes:D.baseLanes|a,cachePool:u}),o.memoizedState=D,o.childLanes=zf(t,M,a),n.memoizedState=Ff,Do(t.child,o)):(ja(n),a=t.child,t=a.sibling,a=sa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=a,n.memoizedState=null,a)}function Hf(t,n){return n=Jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Jl(t,n){return t=$n(22,t,null,n),t.lanes=0,t}function Gf(t,n,a){return ws(n,t.child,null,a),t=Hf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function V0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),tf(t.return,n,a)}function Vf(t,n,a,o,u,d){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=a,M.tailMode=u,M.treeForkCount=d)}function k0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var M=un.current,D=(M&2)!==0;if(D?(M=M&1|2,n.flags|=128):M&=1,Te(un,M),wn(t,n,o,a),o=Ct?vo:0,!D&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&V0(t,a,n);else if(t.tag===19)V0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Hl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Vf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Hl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Vf(n,!0,a,null,d,o);break;case"together":Vf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function fa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(lr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=sa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=sa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function kf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ul(t)))}function QS(t,n,a){switch(n.tag){case 3:Ae(n,n.stateNode.containerInfo),Ha(n,hn,t.memoizedState.cache),Es();break;case 27:case 5:Ze(n);break;case 4:Ae(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,pf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ja(n),n.flags|=128,null):(a&n.child.childLanes)!==0?G0(t,n,a):(ja(n),t=fa(t,n,a),t!==null?t.sibling:null);ja(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(lr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return k0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Te(un,un.current),o)break;return null;case 22:return n.lanes=0,P0(t,n,a,n.pendingProps);case 24:Ha(n,hn,t.memoizedState.cache)}return fa(t,n,a)}function j0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!kf(t,a)&&(n.flags&128)===0)return mn=!1,QS(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Ct&&(n.flags&1048576)!==0&&Mm(n,vo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Rs(n.elementType),n.type=t,typeof t=="function")qu(t)?(o=Ns(t,o),n.tag=1,n=z0(null,n,t,o,a)):(n.tag=0,n=If(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===L){n.tag=11,n=U0(null,n,t,o,a);break e}else if(u===I){n.tag=14,n=L0(null,n,t,o,a);break e}}throw n=ce(t)||t,Error(s(306,n,""))}}return n;case 0:return If(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ns(o,n.pendingProps),z0(t,n,o,u,a);case 3:e:{if(Ae(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,cf(t,n),To(n,o,null,a);var M=n.memoizedState;if(o=M.cache,Ha(n,hn,o),o!==d.cache&&nf(n,[hn],a,!0),bo(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=H0(t,n,o,a);break e}else if(o!==u){u=di(Error(s(424)),n),_o(u),n=H0(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Qt=vi(t.firstChild),Rn=n,Ct=!0,Ba=null,mi=!0,a=Pm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Es(),o===u){n=fa(t,n,a);break e}wn(t,n,o,a)}n=n.child}return n;case 26:return Ql(t,n),t===null?(a=tv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ct||(a=n.type,t=n.pendingProps,o=pc(ie.current).createElement(a),o[cn]=n,o[An]=t,Dn(o,a,t),dn(o),n.stateNode=o):n.memoizedState=tv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ze(n),t===null&&Ct&&(o=n.stateNode=Jg(n.type,n.pendingProps,ie.current),Rn=n,mi=!0,u=Qt,$a(n.type)?(Md=u,Qt=vi(o.firstChild)):Qt=u),wn(t,n,n.pendingProps.children,a),Ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ct&&((u=o=Qt)&&(o=Ry(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Rn=n,Qt=vi(o.firstChild),mi=!1,u=!0):u=!1),u||za(n)),Ze(n),u=n.type,d=n.pendingProps,M=t!==null?t.memoizedProps:null,o=d.children,vd(u,d)?o=null:M!==null&&vd(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=gf(t,n,VS,null,null,a),Xo._currentValue=u),Ql(t,n),wn(t,n,o,a),n.child;case 6:return t===null&&Ct&&((t=a=Qt)&&(a=Cy(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Rn=n,Qt=null,t=!0):t=!1),t||za(n)),null;case 13:return G0(t,n,a);case 4:return Ae(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=ws(n,null,o,a):wn(t,n,o,a),n.child;case 11:return U0(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ha(n,n.type,o.value),wn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ts(n),u=Cn(u),o=o(u),n.flags|=1,wn(t,n,o,a),n.child;case 14:return L0(t,n,n.type,n.pendingProps,a);case 15:return O0(t,n,n.type,n.pendingProps,a);case 19:return k0(t,n,a);case 31:return KS(t,n,a);case 22:return P0(t,n,a,n.pendingProps);case 24:return Ts(n),o=Cn(hn),t===null?(u=rf(),u===null&&(u=Kt,d=af(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},lf(n),Ha(n,hn,u)):((t.lanes&a)!==0&&(cf(t,n),To(n,null,null,a),bo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,hn,o)):(o=d.cache,Ha(n,hn,o),o!==u.cache&&nf(n,[hn],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function da(t){t.flags|=4}function jf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(vg())t.flags|=8192;else throw Cs=Il,of}else t.flags&=-16777217}function X0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!rv(n))if(vg())t.flags|=8192;else throw Cs=Il,of}function $l(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ue():536870912,t.lanes|=n,Sr|=n)}function No(t,n){if(!Ct)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function JS(t,n,a){var o=n.pendingProps;switch(Qu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),la(hn),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(or(n)?da(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,$u())),Jt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(da(n),d!==null?(Jt(n),X0(n,d)):(Jt(n),jf(n,u,null,o,a))):d?d!==t.memoizedState?(da(n),Jt(n),X0(n,d)):(Jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&da(n),Jt(n),jf(n,u,t,o,a)),null;case 27:if(Ke(n),a=ie.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Jt(n),null}t=Ce.current,or(n)?bm(n):(t=Jg(u,o,a),n.stateNode=t,da(n))}return Jt(n),null;case 5:if(Ke(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Jt(n),null}if(d=Ce.current,or(n))bm(n);else{var M=pc(ie.current);switch(d){case 1:d=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=M.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?M.createElement(u,{is:o.is}):M.createElement(u)}}d[cn]=n,d[An]=o;e:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)d.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break e;for(;M.sibling===null;){if(M.return===null||M.return===n)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=d;e:switch(Dn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&da(n)}}return Jt(n),jf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&da(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ie.current,or(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Gg(t.nodeValue,a)),t||za(n,!0)}else t=pc(t).createTextNode(o),t[cn]=n,n.stateNode=t}return Jt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=or(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[cn]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),t=!1}else a=$u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=or(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),u=!1}else u=$u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),$l(n,n.updateQueue),Jt(n),null);case 4:return Be(),t===null&&dd(n.stateNode.containerInfo),Jt(n),null;case 10:return la(n.type),Jt(n),null;case 19:if(te(un),o=n.memoizedState,o===null)return Jt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)No(o,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Hl(t),d!==null){for(n.flags|=128,No(o,!1),t=d.updateQueue,n.updateQueue=t,$l(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)xm(a,t),a=a.sibling;return Te(un,un.current&1|2),Ct&&ra(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&B()>ac&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304)}else{if(!u)if(t=Hl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,$l(n,t),No(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Ct)return Jt(n),null}else 2*B()-o.renderingStartTime>ac&&a!==536870912&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=B(),t.sibling=null,a=un.current,Te(un,u?a&1|2:a&1),Ct&&ra(n,o.treeForkCount),t):(Jt(n),null);case 22:case 23:return ti(n),hf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),a=n.updateQueue,a!==null&&$l(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&te(As),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),la(hn),Jt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function $S(t,n){switch(Qu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return la(hn),Be(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ke(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return te(un),null;case 4:return Be(),null;case 10:return la(n.type),null;case 22:case 23:return ti(n),hf(),t!==null&&te(As),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return la(hn),null;case 25:return null;default:return null}}function W0(t,n){switch(Qu(n),n.tag){case 3:la(hn),Be();break;case 26:case 27:case 5:Ke(n);break;case 4:Be();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:te(un);break;case 10:la(n.type);break;case 22:case 23:ti(n),hf(),t!==null&&te(As);break;case 24:la(hn)}}function Uo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==u)}}catch(D){jt(n,n.return,D)}}function Wa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var M=o.inst,D=M.destroy;if(D!==void 0){M.destroy=void 0,u=n;var X=a,le=D;try{le()}catch(Se){jt(u,X,Se)}}}o=o.next}while(o!==d)}}catch(Se){jt(n,n.return,Se)}}function q0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Fm(n,a)}catch(o){jt(t,t.return,o)}}}function Y0(t,n,a){a.props=Ns(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){jt(t,n,o)}}function Lo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){jt(t,n,u)}}function Xi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){jt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){jt(t,n,u)}else a.current=null}function Z0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){jt(t,t.return,u)}}function Xf(t,n,a){try{var o=t.stateNode;yy(o,t.type,a,n),o[An]=n}catch(u){jt(t,t.return,u)}}function K0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function Wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||K0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ia));else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(qf(t,n,a),t=t.sibling;t!==null;)qf(t,n,a),t=t.sibling}function ec(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ec(t,n,a),t=t.sibling;t!==null;)ec(t,n,a),t=t.sibling}function Q0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[cn]=t,n[An]=a}catch(d){jt(t,t.return,d)}}var ha=!1,gn=!1,Yf=!1,J0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function ey(t,n){if(t=t.containerInfo,md=yc,t=um(t),Hu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var M=0,D=-1,X=-1,le=0,Se=0,be=t,pe=null;t:for(;;){for(var ve;be!==a||u!==0&&be.nodeType!==3||(D=M+u),be!==d||o!==0&&be.nodeType!==3||(X=M+o),be.nodeType===3&&(M+=be.nodeValue.length),(ve=be.firstChild)!==null;)pe=be,be=ve;for(;;){if(be===t)break t;if(pe===a&&++le===u&&(D=M),pe===d&&++Se===o&&(X=M),(ve=be.nextSibling)!==null)break;be=pe,pe=be.parentNode}be=ve}a=D===-1||X===-1?null:{start:D,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(gd={focusedElem:t,selectionRange:a},yc=!1,bn=n;bn!==null;)if(n=bn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,bn=t;else for(;bn!==null;){switch(n=bn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Ye=Ns(a.type,u);t=o.getSnapshotBeforeUpdate(Ye,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(it){jt(a,a.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)xd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":xd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,bn=t;break}bn=n.return}}function $0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ma(t,a),o&4&&Uo(5,a);break;case 1:if(ma(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(M){jt(a,a.return,M)}else{var u=Ns(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){jt(a,a.return,M)}}o&64&&q0(a),o&512&&Lo(a,a.return);break;case 3:if(ma(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Fm(t,n)}catch(M){jt(a,a.return,M)}}break;case 27:n===null&&o&4&&Q0(a);case 26:case 5:ma(t,a),n===null&&o&4&&Z0(a),o&512&&Lo(a,a.return);break;case 12:ma(t,a);break;case 31:ma(t,a),o&4&&ng(t,a);break;case 13:ma(t,a),o&4&&ig(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=cy.bind(null,a),wy(t,a))));break;case 22:if(o=a.memoizedState!==null||ha,!o){n=n!==null&&n.memoizedState!==null||gn,u=ha;var d=gn;ha=o,(gn=n)&&!d?ga(t,a,(a.subtreeFlags&8772)!==0):ma(t,a),ha=u,gn=d}break;case 30:break;default:ma(t,a)}}function eg(t){var n=t.alternate;n!==null&&(t.alternate=null,eg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ro(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,Gn=!1;function pa(t,n,a){for(a=a.child;a!==null;)tg(t,n,a),a=a.sibling}function tg(t,n,a){if(ae&&typeof ae.onCommitFiberUnmount=="function")try{ae.onCommitFiberUnmount(V,a)}catch{}switch(a.tag){case 26:gn||Xi(a,n),pa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||Xi(a,n);var o=nn,u=Gn;$a(a.type)&&(nn=a.stateNode,Gn=!1),pa(t,n,a),Vo(a.stateNode),nn=o,Gn=u;break;case 5:gn||Xi(a,n);case 6:if(o=nn,u=Gn,nn=null,pa(t,n,a),nn=o,Gn=u,nn!==null)if(Gn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode)}catch(d){jt(a,n,d)}else try{nn.removeChild(a.stateNode)}catch(d){jt(a,n,d)}break;case 18:nn!==null&&(Gn?(t=nn,qg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Cr(t)):qg(nn,a.stateNode));break;case 4:o=nn,u=Gn,nn=a.stateNode.containerInfo,Gn=!0,pa(t,n,a),nn=o,Gn=u;break;case 0:case 11:case 14:case 15:Wa(2,a,n),gn||Wa(4,a,n),pa(t,n,a);break;case 1:gn||(Xi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Y0(a,n,o)),pa(t,n,a);break;case 21:pa(t,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,pa(t,n,a),gn=o;break;default:pa(t,n,a)}}function ng(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Cr(t)}catch(a){jt(n,n.return,a)}}}function ig(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Cr(t)}catch(a){jt(n,n.return,a)}}function ty(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new J0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new J0),n;default:throw Error(s(435,t.tag))}}function tc(t,n){var a=ty(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=uy.bind(null,t,o);o.then(u,u)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,M=n,D=M;e:for(;D!==null;){switch(D.tag){case 27:if($a(D.type)){nn=D.stateNode,Gn=!1;break e}break;case 5:nn=D.stateNode,Gn=!1;break e;case 3:case 4:nn=D.stateNode.containerInfo,Gn=!0;break e}D=D.return}if(nn===null)throw Error(s(160));tg(d,M,u),nn=null,Gn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ag(n,t),n=n.sibling}var Ci=null;function ag(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),o&4&&(Wa(3,t,t.return),Uo(3,t),Wa(5,t,t.return));break;case 1:Vn(n,t),kn(t),o&512&&(gn||a===null||Xi(a,a.return)),o&64&&ha&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ci;if(Vn(n,t),kn(t),o&512&&(gn||a===null||Xi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Na]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Dn(d,o,a),d[cn]=t,dn(d),o=d;break e;case"link":var M=av("link","href",u).get(o+(a.href||""));if(M){for(var D=0;D<M.length;D++)if(d=M[D],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(D,1);break t}}d=u.createElement(o),Dn(d,o,a),u.head.appendChild(d);break;case"meta":if(M=av("meta","content",u).get(o+(a.content||""))){for(D=0;D<M.length;D++)if(d=M[D],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(D,1);break t}}d=u.createElement(o),Dn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[cn]=t,dn(d),o=d}t.stateNode=o}else sv(u,t.type,t.stateNode);else t.stateNode=iv(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?sv(u,t.type,t.stateNode):iv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Xf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),o&512&&(gn||a===null||Xi(a,a.return)),a!==null&&o&4&&Xf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),o&512&&(gn||a===null||Xi(a,a.return)),t.flags&32){u=t.stateNode;try{Qn(u,"")}catch(Ye){jt(t,t.return,Ye)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Xf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Yf=!0);break;case 6:if(Vn(n,t),kn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ye){jt(t,t.return,Ye)}}break;case 3:if(vc=null,u=Ci,Ci=mc(n.containerInfo),Vn(n,t),Ci=u,kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Cr(n.containerInfo)}catch(Ye){jt(t,t.return,Ye)}Yf&&(Yf=!1,sg(t));break;case 4:o=Ci,Ci=mc(t.stateNode.containerInfo),Vn(n,t),kn(t),Ci=o;break;case 12:Vn(n,t),kn(t);break;case 31:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,tc(t,o)));break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ic=B()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,tc(t,o)));break;case 22:u=t.memoizedState!==null;var X=a!==null&&a.memoizedState!==null,le=ha,Se=gn;if(ha=le||u,gn=Se||X,Vn(n,t),gn=Se,ha=le,kn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||X||ha||gn||Us(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){X=a=n;try{if(d=X.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{D=X.stateNode;var be=X.memoizedProps.style,pe=be!=null&&be.hasOwnProperty("display")?be.display:null;D.style.display=pe==null||typeof pe=="boolean"?"":(""+pe).trim()}}catch(Ye){jt(X,X.return,Ye)}}}else if(n.tag===6){if(a===null){X=n;try{X.stateNode.nodeValue=u?"":X.memoizedProps}catch(Ye){jt(X,X.return,Ye)}}}else if(n.tag===18){if(a===null){X=n;try{var ve=X.stateNode;u?Yg(ve,!0):Yg(X.stateNode,!1)}catch(Ye){jt(X,X.return,Ye)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,tc(t,a))));break;case 19:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,tc(t,o)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(K0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Wf(t);ec(t,d,u);break;case 5:var M=a.stateNode;a.flags&32&&(Qn(M,""),a.flags&=-33);var D=Wf(t);ec(t,D,M);break;case 3:case 4:var X=a.stateNode.containerInfo,le=Wf(t);qf(t,le,X);break;default:throw Error(s(161))}}catch(Se){jt(t,t.return,Se)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function sg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ma(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)$0(t,n.alternate,n),n=n.sibling}function Us(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Wa(4,n,n.return),Us(n);break;case 1:Xi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Y0(n,n.return,a),Us(n);break;case 27:Vo(n.stateNode);case 26:case 5:Xi(n,n.return),Us(n);break;case 22:n.memoizedState===null&&Us(n);break;case 30:Us(n);break;default:Us(n)}t=t.sibling}}function ga(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:ga(u,d,a),Uo(4,d);break;case 1:if(ga(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(le){jt(o,o.return,le)}if(o=d,u=o.updateQueue,u!==null){var D=o.stateNode;try{var X=u.shared.hiddenCallbacks;if(X!==null)for(u.shared.hiddenCallbacks=null,u=0;u<X.length;u++)Im(X[u],D)}catch(le){jt(o,o.return,le)}}a&&M&64&&q0(d),Lo(d,d.return);break;case 27:Q0(d);case 26:case 5:ga(u,d,a),a&&o===null&&M&4&&Z0(d),Lo(d,d.return);break;case 12:ga(u,d,a);break;case 31:ga(u,d,a),a&&M&4&&ng(u,d);break;case 13:ga(u,d,a),a&&M&4&&ig(u,d);break;case 22:d.memoizedState===null&&ga(u,d,a),Lo(d,d.return);break;case 30:break;default:ga(u,d,a)}n=n.sibling}}function Zf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&xo(a))}function Kf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xo(t))}function wi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)rg(t,n,a,o),n=n.sibling}function rg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(t,n,a,o),u&2048&&Uo(9,n);break;case 1:wi(t,n,a,o);break;case 3:wi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xo(t)));break;case 12:if(u&2048){wi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,M=d.id,D=d.onPostCommit;typeof D=="function"&&D(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(X){jt(n,n.return,X)}}else wi(t,n,a,o);break;case 31:wi(t,n,a,o);break;case 13:wi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?wi(t,n,a,o):Oo(t,n):d._visibility&2?wi(t,n,a,o):(d._visibility|=2,vr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Zf(M,n);break;case 24:wi(t,n,a,o),u&2048&&Kf(n.alternate,n);break;default:wi(t,n,a,o)}}function vr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,M=n,D=a,X=o,le=M.flags;switch(M.tag){case 0:case 11:case 15:vr(d,M,D,X,u),Uo(8,M);break;case 23:break;case 22:var Se=M.stateNode;M.memoizedState!==null?Se._visibility&2?vr(d,M,D,X,u):Oo(d,M):(Se._visibility|=2,vr(d,M,D,X,u)),u&&le&2048&&Zf(M.alternate,M);break;case 24:vr(d,M,D,X,u),u&&le&2048&&Kf(M.alternate,M);break;default:vr(d,M,D,X,u)}n=n.sibling}}function Oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Oo(a,o),u&2048&&Zf(o.alternate,o);break;case 24:Oo(a,o),u&2048&&Kf(o.alternate,o);break;default:Oo(a,o)}n=n.sibling}}var Po=8192;function _r(t,n,a){if(t.subtreeFlags&Po)for(t=t.child;t!==null;)og(t,n,a),t=t.sibling}function og(t,n,a){switch(t.tag){case 26:_r(t,n,a),t.flags&Po&&t.memoizedState!==null&&Gy(a,Ci,t.memoizedState,t.memoizedProps);break;case 5:_r(t,n,a);break;case 3:case 4:var o=Ci;Ci=mc(t.stateNode.containerInfo),_r(t,n,a),Ci=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Po,Po=16777216,_r(t,n,a),Po=o):_r(t,n,a));break;default:_r(t,n,a)}}function lg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Io(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,ug(o,t)}lg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cg(t),t=t.sibling}function cg(t){switch(t.tag){case 0:case 11:case 15:Io(t),t.flags&2048&&Wa(9,t,t.return);break;case 3:Io(t);break;case 12:Io(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,nc(t)):Io(t);break;default:Io(t)}}function nc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,ug(o,t)}lg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Wa(8,n,n.return),nc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,nc(n));break;default:nc(n)}t=t.sibling}}function ug(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:xo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,bn=o;else e:for(a=t;bn!==null;){o=bn;var u=o.sibling,d=o.return;if(eg(o),o===a){bn=null;break e}if(u!==null){u.return=d,bn=u;break e}bn=d}}}var ny={getCacheForType:function(t){var n=Cn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(hn).controller.signal}},iy=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Kt=null,Mt=null,At=0,kt=0,ni=null,qa=!1,xr=!1,Qf=!1,va=0,on=0,Ya=0,Ls=0,Jf=0,ii=0,Sr=0,Fo=null,jn=null,$f=!1,ic=0,fg=0,ac=1/0,sc=null,Za=null,yn=0,Ka=null,yr=null,_a=0,ed=0,td=null,dg=null,Bo=0,nd=null;function ai(){return(Ft&2)!==0&&At!==0?At&-At:O.T!==null?ld():io()}function hg(){if(ii===0)if((At&536870912)===0||Ct){var t=St;St<<=1,(St&3932160)===0&&(St=262144),ii=t}else ii=536870912;return t=ei.current,t!==null&&(t.flags|=32),ii}function Xn(t,n,a){(t===Kt&&(kt===2||kt===9)||t.cancelPendingCommit!==null)&&(Mr(t,0),Qa(t,At,ii,!1)),ot(t,a),((Ft&2)===0||t!==Kt)&&(t===Kt&&((Ft&2)===0&&(Ls|=a),on===4&&Qa(t,At,ii,!1)),Wi(t))}function pg(t,n,a){if((Ft&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ge(t,n),u=o?ry(t,n):ad(t,n,!0),d=o;do{if(u===0){xr&&!o&&Qa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!ay(a)){u=ad(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var D=t;u=Fo;var X=D.current.memoizedState.isDehydrated;if(X&&(Mr(D,M).flags|=256),M=ad(D,M,!1),M!==2){if(Qf&&!X){D.errorRecoveryDisabledLanes|=d,Ls|=d,u=4;break e}d=jn,jn=u,d!==null&&(jn===null?jn=d:jn.push.apply(jn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){Mr(t,0),Qa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Qa(o,n,ii,!qa);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ic+300-B(),10<u)){if(Qa(o,n,ii,!qa),Me(o,0,!0)!==0)break e;_a=n,o.timeoutHandle=Xg(mg.bind(null,o,a,jn,sc,$f,n,ii,Ls,Sr,qa,d,"Throttled",-0,0),u);break e}mg(o,a,jn,sc,$f,n,ii,Ls,Sr,qa,d,null,-0,0)}}break}while(!0);Wi(t)}function mg(t,n,a,o,u,d,M,D,X,le,Se,be,pe,ve){if(t.timeoutHandle=-1,be=n.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ia},og(n,d,be);var Ye=(d&62914560)===d?ic-B():(d&4194048)===d?fg-B():0;if(Ye=Vy(be,Ye),Ye!==null){_a=d,t.cancelPendingCommit=Ye(Eg.bind(null,t,n,d,a,o,u,M,D,X,Se,be,null,pe,ve)),Qa(t,d,M,!le);return}}Eg(t,n,d,a,o,u,M,D,X)}function ay(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Jn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(t,n,a,o){n&=~Jf,n&=~Ls,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-we(u),M=1<<d;o[d]=-1,u&=~M}a!==0&&It(t,a,n)}function rc(){return(Ft&6)===0?(zo(0),!1):!0}function id(){if(Mt!==null){if(kt===0)var t=Mt.return;else t=Mt,oa=bs=null,xf(t),dr=null,yo=0,t=Mt;for(;t!==null;)W0(t.alternate,t),t=t.return;Mt=null}}function Mr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,by(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),_a=0,id(),Kt=t,Mt=a=sa(t.current,null),At=n,kt=0,ni=null,qa=!1,xr=Ge(t,n),Qf=!1,Sr=ii=Jf=Ls=Ya=on=0,jn=Fo=null,$f=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-we(o),d=1<<u;n|=t[u],o&=~d}return va=n,Rl(),a}function gg(t,n){mt=null,O.H=wo,n===fr||n===Pl?(n=Um(),kt=3):n===of?(n=Um(),kt=4):kt=n===Pf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,Mt===null&&(on=1,Zl(t,di(n,t.current)))}function vg(){var t=ei.current;return t===null?!0:(At&4194048)===At?gi===null:(At&62914560)===At||(At&536870912)!==0?t===gi:!1}function _g(){var t=O.H;return O.H=wo,t===null?wo:t}function xg(){var t=O.A;return O.A=ny,t}function oc(){on=4,qa||(At&4194048)!==At&&ei.current!==null||(xr=!0),(Ya&134217727)===0&&(Ls&134217727)===0||Kt===null||Qa(Kt,At,ii,!1)}function ad(t,n,a){var o=Ft;Ft|=2;var u=_g(),d=xg();(Kt!==t||At!==n)&&(sc=null,Mr(t,n)),n=!1;var M=on;e:do try{if(kt!==0&&Mt!==null){var D=Mt,X=ni;switch(kt){case 8:id(),M=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var le=kt;if(kt=0,ni=null,Er(t,D,X,le),a&&xr){M=0;break e}break;default:le=kt,kt=0,ni=null,Er(t,D,X,le)}}sy(),M=on;break}catch(Se){gg(t,Se)}while(!0);return n&&t.shellSuspendCounter++,oa=bs=null,Ft=o,O.H=u,O.A=d,Mt===null&&(Kt=null,At=0,Rl()),M}function sy(){for(;Mt!==null;)Sg(Mt)}function ry(t,n){var a=Ft;Ft|=2;var o=_g(),u=xg();Kt!==t||At!==n?(sc=null,ac=B()+500,Mr(t,n)):xr=Ge(t,n);e:do try{if(kt!==0&&Mt!==null){n=Mt;var d=ni;t:switch(kt){case 1:kt=0,ni=null,Er(t,n,d,1);break;case 2:case 9:if(Dm(d)){kt=0,ni=null,yg(n);break}n=function(){kt!==2&&kt!==9||Kt!==t||(kt=7),Wi(t)},d.then(n,n);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:Dm(d)?(kt=0,ni=null,yg(n)):(kt=0,ni=null,Er(t,n,d,7));break;case 5:var M=null;switch(Mt.tag){case 26:M=Mt.memoizedState;case 5:case 27:var D=Mt;if(M?rv(M):D.stateNode.complete){kt=0,ni=null;var X=D.sibling;if(X!==null)Mt=X;else{var le=D.return;le!==null?(Mt=le,lc(le)):Mt=null}break t}}kt=0,ni=null,Er(t,n,d,5);break;case 6:kt=0,ni=null,Er(t,n,d,6);break;case 8:id(),on=6;break e;default:throw Error(s(462))}}oy();break}catch(Se){gg(t,Se)}while(!0);return oa=bs=null,O.H=o,O.A=u,Ft=a,Mt!==null?0:(Kt=null,At=0,Rl(),on)}function oy(){for(;Mt!==null&&!ut();)Sg(Mt)}function Sg(t){var n=j0(t.alternate,t,va);t.memoizedProps=t.pendingProps,n===null?lc(t):Mt=n}function yg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=B0(a,n,n.pendingProps,n.type,void 0,At);break;case 11:n=B0(a,n,n.pendingProps,n.type.render,n.ref,At);break;case 5:xf(n);default:W0(a,n),n=Mt=xm(n,va),n=j0(a,n,va)}t.memoizedProps=t.pendingProps,n===null?lc(t):Mt=n}function Er(t,n,a,o){oa=bs=null,xf(n),dr=null,yo=0;var u=n.return;try{if(ZS(t,u,n,a,At)){on=1,Zl(t,di(a,t.current)),Mt=null;return}}catch(d){if(u!==null)throw Mt=u,d;on=1,Zl(t,di(a,t.current)),Mt=null;return}n.flags&32768?(Ct||o===1?t=!0:xr||(At&536870912)!==0?t=!1:(qa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),Mg(n,t)):lc(n)}function lc(t){var n=t;do{if((n.flags&32768)!==0){Mg(n,qa);return}t=n.return;var a=JS(n.alternate,n,va);if(a!==null){Mt=a;return}if(n=n.sibling,n!==null){Mt=n;return}Mt=n=t}while(n!==null);on===0&&(on=5)}function Mg(t,n){do{var a=$S(t.alternate,t);if(a!==null){a.flags&=32767,Mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=a}while(t!==null);on=6,Mt=null}function Eg(t,n,a,o,u,d,M,D,X){t.cancelPendingCommit=null;do cc();while(yn!==0);if((Ft&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Xu,sn(t,a,d,M,D,X),t===Kt&&(Mt=Kt=null,At=0),yr=n,Ka=t,_a=a,ed=d,td=u,dg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fy($,function(){return Cg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=H.p,H.p=2,M=Ft,Ft|=4;try{ey(t,n,a)}finally{Ft=M,H.p=u,O.T=o}}yn=1,bg(),Tg(),Ag()}}function bg(){if(yn===1){yn=0;var t=Ka,n=yr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var u=Ft;Ft|=4;try{ag(n,t);var d=gd,M=um(t.containerInfo),D=d.focusedElem,X=d.selectionRange;if(M!==D&&D&&D.ownerDocument&&cm(D.ownerDocument.documentElement,D)){if(X!==null&&Hu(D)){var le=X.start,Se=X.end;if(Se===void 0&&(Se=le),"selectionStart"in D)D.selectionStart=le,D.selectionEnd=Math.min(Se,D.value.length);else{var be=D.ownerDocument||document,pe=be&&be.defaultView||window;if(pe.getSelection){var ve=pe.getSelection(),Ye=D.textContent.length,it=Math.min(X.start,Ye),Yt=X.end===void 0?it:Math.min(X.end,Ye);!ve.extend&&it>Yt&&(M=Yt,Yt=it,it=M);var ne=lm(D,it),Q=lm(D,Yt);if(ne&&Q&&(ve.rangeCount!==1||ve.anchorNode!==ne.node||ve.anchorOffset!==ne.offset||ve.focusNode!==Q.node||ve.focusOffset!==Q.offset)){var oe=be.createRange();oe.setStart(ne.node,ne.offset),ve.removeAllRanges(),it>Yt?(ve.addRange(oe),ve.extend(Q.node,Q.offset)):(oe.setEnd(Q.node,Q.offset),ve.addRange(oe))}}}}for(be=[],ve=D;ve=ve.parentNode;)ve.nodeType===1&&be.push({element:ve,left:ve.scrollLeft,top:ve.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<be.length;D++){var Ee=be[D];Ee.element.scrollLeft=Ee.left,Ee.element.scrollTop=Ee.top}}yc=!!md,gd=md=null}finally{Ft=u,H.p=o,O.T=a}}t.current=n,yn=2}}function Tg(){if(yn===2){yn=0;var t=Ka,n=yr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var u=Ft;Ft|=4;try{$0(t,n.alternate,n)}finally{Ft=u,H.p=o,O.T=a}}yn=3}}function Ag(){if(yn===4||yn===3){yn=0,Xe();var t=Ka,n=yr,a=_a,o=dg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?yn=5:(yn=0,yr=Ka=null,Rg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Za=null),no(a),n=n.stateNode,ae&&typeof ae.onCommitFiberRoot=="function")try{ae.onCommitFiberRoot(V,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=H.p,H.p=2,O.T=null;try{for(var d=t.onRecoverableError,M=0;M<o.length;M++){var D=o[M];d(D.value,{componentStack:D.stack})}}finally{O.T=n,H.p=u}}(_a&3)!==0&&cc(),Wi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===nd?Bo++:(Bo=0,nd=t):Bo=0,zo(0)}}function Rg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,xo(n)))}function cc(){return bg(),Tg(),Ag(),Cg()}function Cg(){if(yn!==5)return!1;var t=Ka,n=ed;ed=0;var a=no(_a),o=O.T,u=H.p;try{H.p=32>a?32:a,O.T=null,a=td,td=null;var d=Ka,M=_a;if(yn=0,yr=Ka=null,_a=0,(Ft&6)!==0)throw Error(s(331));var D=Ft;if(Ft|=4,cg(d.current),rg(d,d.current,M,a),Ft=D,zo(0,!1),ae&&typeof ae.onPostCommitFiberRoot=="function")try{ae.onPostCommitFiberRoot(V,d)}catch{}return!0}finally{H.p=u,O.T=o,Rg(t,n)}}function wg(t,n,a){n=di(a,n),n=Of(t.stateNode,n,2),t=ka(t,n,2),t!==null&&(ot(t,2),Wi(t))}function jt(t,n,a){if(t.tag===3)wg(t,t,a);else for(;n!==null;){if(n.tag===3){wg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Za===null||!Za.has(o))){t=di(a,t),a=D0(2),o=ka(n,a,2),o!==null&&(N0(a,o,n,t),ot(o,2),Wi(o));break}}n=n.return}}function sd(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new iy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Qf=!0,u.add(a),t=ly.bind(null,t,n,a),n.then(t,t))}function ly(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Kt===t&&(At&a)===a&&(on===4||on===3&&(At&62914560)===At&&300>B()-ic?(Ft&2)===0&&Mr(t,0):Jf|=a,Sr===At&&(Sr=0)),Wi(t)}function Dg(t,n){n===0&&(n=Ue()),t=ys(t,n),t!==null&&(ot(t,n),Wi(t))}function cy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Dg(t,a)}function uy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Dg(t,a)}function fy(t,n){return J(t,n)}var uc=null,br=null,rd=!1,fc=!1,od=!1,Ja=0;function Wi(t){t!==br&&t.next===null&&(br===null?uc=br=t:br=br.next=t),fc=!0,rd||(rd=!0,hy())}function zo(t,n){if(!od&&fc){od=!0;do for(var a=!1,o=uc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,D=o.pingedLanes;d=(1<<31-we(42|t)+1)-1,d&=u&~(M&~D),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Og(o,d))}else d=At,d=Me(o,o===Kt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ge(o,d)||(a=!0,Og(o,d));o=o.next}while(a);od=!1}}function dy(){Ng()}function Ng(){fc=rd=!1;var t=0;Ja!==0&&Ey()&&(t=Ja);for(var n=B(),a=null,o=uc;o!==null;){var u=o.next,d=Ug(o,n);d===0?(o.next=null,a===null?uc=u:a.next=u,u===null&&(br=a)):(a=o,(t!==0||(d&3)!==0)&&(fc=!0)),o=u}yn!==0&&yn!==5||zo(t),Ja!==0&&(Ja=0)}function Ug(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var M=31-we(d),D=1<<M,X=u[M];X===-1?((D&a)===0||(D&o)!==0)&&(u[M]=Fe(D,n)):X<=n&&(t.expiredLanes|=D),d&=~D}if(n=Kt,a=At,a=Me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(kt===2||kt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Tt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ge(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Tt(o),no(a)){case 2:case 8:a=b;break;case 32:a=$;break;case 268435456:a=ge;break;default:a=$}return o=Lg.bind(null,t),a=J(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Tt(o),t.callbackPriority=2,t.callbackNode=null,2}function Lg(t,n){if(yn!==0&&yn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(cc()&&t.callbackNode!==a)return null;var o=At;return o=Me(t,t===Kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(pg(t,o,n),Ug(t,B()),t.callbackNode!=null&&t.callbackNode===a?Lg.bind(null,t):null)}function Og(t,n){if(cc())return null;pg(t,n,!0)}function hy(){Ty(function(){(Ft&6)!==0?J(C,dy):Ng()})}function ld(){if(Ja===0){var t=cr;t===0&&(t=lt,lt<<=1,(lt&261888)===0&&(lt=256)),Ja=t}return Ja}function Pg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:vs(""+t)}function Ig(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function py(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Pg((u[An]||null).action),M=o.submitter;M&&(n=(n=M[An]||null)?Pg(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var D=new El("action","action",null,o,u);t.push({event:D,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var X=M?Ig(u,M):new FormData(u);Cf(a,{pending:!0,data:X,method:u.method,action:d},null,X)}}else typeof d=="function"&&(D.preventDefault(),X=M?Ig(u,M):new FormData(u),Cf(a,{pending:!0,data:X,method:u.method,action:d},d,X))},currentTarget:u}]})}}for(var cd=0;cd<ju.length;cd++){var ud=ju[cd],my=ud.toLowerCase(),gy=ud[0].toUpperCase()+ud.slice(1);Ri(my,"on"+gy)}Ri(hm,"onAnimationEnd"),Ri(pm,"onAnimationIteration"),Ri(mm,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(US,"onTransitionRun"),Ri(LS,"onTransitionStart"),Ri(OS,"onTransitionCancel"),Ri(gm,"onTransitionEnd"),he("onMouseEnter",["mouseout","mouseover"]),he("onMouseLeave",["mouseout","mouseover"]),he("onPointerEnter",["pointerout","pointerover"]),he("onPointerLeave",["pointerout","pointerover"]),ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function Fg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var M=o.length-1;0<=M;M--){var D=o[M],X=D.instance,le=D.currentTarget;if(D=D.listener,X!==d&&u.isPropagationStopped())break e;d=D,u.currentTarget=le;try{d(u)}catch(Se){Al(Se)}u.currentTarget=null,d=X}else for(M=0;M<o.length;M++){if(D=o[M],X=D.instance,le=D.currentTarget,D=D.listener,X!==d&&u.isPropagationStopped())break e;d=D,u.currentTarget=le;try{d(u)}catch(Se){Al(Se)}u.currentTarget=null,d=X}}}}function Et(t,n){var a=n[Da];a===void 0&&(a=n[Da]=new Set);var o=t+"__bubble";a.has(o)||(Bg(n,t,2,!1),a.add(o))}function fd(t,n,a){var o=0;n&&(o|=4),Bg(a,t,o,n)}var dc="_reactListening"+Math.random().toString(36).slice(2);function dd(t){if(!t[dc]){t[dc]=!0,xl.forEach(function(a){a!=="selectionchange"&&(vy.has(a)||fd(a,!1,t),fd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[dc]||(n[dc]=!0,fd("selectionchange",!1,n))}}function Bg(t,n,a,o){switch(hv(n)){case 2:var u=Xy;break;case 8:u=Wy;break;default:u=Rd}a=u.bind(null,n,a,t),u=void 0,!Nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function hd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var D=o.stateNode.containerInfo;if(D===u)break;if(M===4)for(M=o.return;M!==null;){var X=M.tag;if((X===3||X===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;D!==null;){if(M=Ua(D),M===null)return;if(X=M.tag,X===5||X===6||X===26||X===27){o=d=M;continue e}D=D.parentNode}}o=o.return}kp(function(){var le=d,Se=wu(a),be=[];e:{var pe=vm.get(t);if(pe!==void 0){var ve=El,Ye=t;switch(t){case"keypress":if(yl(a)===0)break e;case"keydown":case"keyup":ve=uS;break;case"focusin":Ye="focus",ve=Pu;break;case"focusout":Ye="blur",ve=Pu;break;case"beforeblur":case"afterblur":ve=Pu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=Jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=hS;break;case hm:case pm:case mm:ve=tS;break;case gm:ve=mS;break;case"scroll":case"scrollend":ve=Kx;break;case"wheel":ve=vS;break;case"copy":case"cut":case"paste":ve=iS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=Yp;break;case"toggle":case"beforetoggle":ve=xS}var it=(n&4)!==0,Yt=!it&&(t==="scroll"||t==="scrollend"),ne=it?pe!==null?pe+"Capture":null:pe;it=[];for(var Q=le,oe;Q!==null;){var Ee=Q;if(oe=Ee.stateNode,Ee=Ee.tag,Ee!==5&&Ee!==26&&Ee!==27||oe===null||ne===null||(Ee=oo(Q,ne),Ee!=null&&it.push(Go(Q,Ee,oe))),Yt)break;Q=Q.return}0<it.length&&(pe=new ve(pe,Ye,null,a,Se),be.push({event:pe,listeners:it}))}}if((n&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",ve=t==="mouseout"||t==="pointerout",pe&&a!==Cu&&(Ye=a.relatedTarget||a.fromElement)&&(Ua(Ye)||Ye[na]))break e;if((ve||pe)&&(pe=Se.window===Se?Se:(pe=Se.ownerDocument)?pe.defaultView||pe.parentWindow:window,ve?(Ye=a.relatedTarget||a.toElement,ve=le,Ye=Ye?Ua(Ye):null,Ye!==null&&(Yt=c(Ye),it=Ye.tag,Ye!==Yt||it!==5&&it!==27&&it!==6)&&(Ye=null)):(ve=null,Ye=le),ve!==Ye)){if(it=Wp,Ee="onMouseLeave",ne="onMouseEnter",Q="mouse",(t==="pointerout"||t==="pointerover")&&(it=Yp,Ee="onPointerLeave",ne="onPointerEnter",Q="pointer"),Yt=ve==null?pe:gs(ve),oe=Ye==null?pe:gs(Ye),pe=new it(Ee,Q+"leave",ve,a,Se),pe.target=Yt,pe.relatedTarget=oe,Ee=null,Ua(Se)===le&&(it=new it(ne,Q+"enter",Ye,a,Se),it.target=oe,it.relatedTarget=Yt,Ee=it),Yt=Ee,ve&&Ye)t:{for(it=_y,ne=ve,Q=Ye,oe=0,Ee=ne;Ee;Ee=it(Ee))oe++;Ee=0;for(var nt=Q;nt;nt=it(nt))Ee++;for(;0<oe-Ee;)ne=it(ne),oe--;for(;0<Ee-oe;)Q=it(Q),Ee--;for(;oe--;){if(ne===Q||Q!==null&&ne===Q.alternate){it=ne;break t}ne=it(ne),Q=it(Q)}it=null}else it=null;ve!==null&&zg(be,pe,ve,it,!1),Ye!==null&&Yt!==null&&zg(be,Yt,Ye,it,!0)}}e:{if(pe=le?gs(le):window,ve=pe.nodeName&&pe.nodeName.toLowerCase(),ve==="select"||ve==="input"&&pe.type==="file")var Lt=nm;else if(em(pe))if(im)Lt=wS;else{Lt=RS;var Je=AS}else ve=pe.nodeName,!ve||ve.toLowerCase()!=="input"||pe.type!=="checkbox"&&pe.type!=="radio"?le&&zt(le.elementType)&&(Lt=nm):Lt=CS;if(Lt&&(Lt=Lt(t,le))){tm(be,Lt,a,Se);break e}Je&&Je(t,pe,le),t==="focusout"&&le&&pe.type==="number"&&le.memoizedProps.value!=null&&yt(pe,"number",pe.value)}switch(Je=le?gs(le):window,t){case"focusin":(em(Je)||Je.contentEditable==="true")&&(tr=Je,Gu=le,go=null);break;case"focusout":go=Gu=tr=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,fm(be,a,Se);break;case"selectionchange":if(NS)break;case"keydown":case"keyup":fm(be,a,Se)}var gt;if(Fu)e:{switch(t){case"compositionstart":var Rt="onCompositionStart";break e;case"compositionend":Rt="onCompositionEnd";break e;case"compositionupdate":Rt="onCompositionUpdate";break e}Rt=void 0}else er?Jp(t,a)&&(Rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Rt="onCompositionStart");Rt&&(Zp&&a.locale!=="ko"&&(er||Rt!=="onCompositionStart"?Rt==="onCompositionEnd"&&er&&(gt=jp()):(Ia=Se,Uu="value"in Ia?Ia.value:Ia.textContent,er=!0)),Je=hc(le,Rt),0<Je.length&&(Rt=new qp(Rt,t,null,a,Se),be.push({event:Rt,listeners:Je}),gt?Rt.data=gt:(gt=$p(a),gt!==null&&(Rt.data=gt)))),(gt=yS?MS(t,a):ES(t,a))&&(Rt=hc(le,"onBeforeInput"),0<Rt.length&&(Je=new qp("onBeforeInput","beforeinput",null,a,Se),be.push({event:Je,listeners:Rt}),Je.data=gt)),py(be,t,le,a,Se)}Fg(be,n)})}function Go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function hc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=oo(t,a),u!=null&&o.unshift(Go(t,u,d)),u=oo(t,n),u!=null&&o.push(Go(t,u,d))),t.tag===3)return o;t=t.return}return[]}function _y(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function zg(t,n,a,o,u){for(var d=n._reactName,M=[];a!==null&&a!==o;){var D=a,X=D.alternate,le=D.stateNode;if(D=D.tag,X!==null&&X===o)break;D!==5&&D!==26&&D!==27||le===null||(X=le,u?(le=oo(a,d),le!=null&&M.unshift(Go(a,le,X))):u||(le=oo(a,d),le!=null&&M.push(Go(a,le,X)))),a=a.return}M.length!==0&&t.push({event:n,listeners:M})}var xy=/\r\n?/g,Sy=/\u0000|\uFFFD/g;function Hg(t){return(typeof t=="string"?t:""+t).replace(xy,`
`).replace(Sy,"")}function Gg(t,n){return n=Hg(n),Hg(t)===n}function qt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Qn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Qn(t,""+o);break;case"className":qe(t,"class",o);break;case"tabIndex":qe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":qe(t,a,o);break;case"style":Ai(t,o,d);break;case"data":if(n!=="object"){qe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=vs(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&qt(t,n,"name",u.name,u,null),qt(t,n,"formEncType",u.formEncType,u,null),qt(t,n,"formMethod",u.formMethod,u,null),qt(t,n,"formTarget",u.formTarget,u,null)):(qt(t,n,"encType",u.encType,u,null),qt(t,n,"method",u.method,u,null),qt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=vs(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ia);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=vs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Et("beforetoggle",t),Et("toggle",t),ze(t,"popover",o);break;case"xlinkActuate":We(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":We(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":We(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":We(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":We(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":We(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":We(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":We(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":We(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ze(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vi.get(a)||a,ze(t,a,o))}}function pd(t,n,a,o,u,d){switch(a){case"style":Ai(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Qn(t,o):(typeof o=="number"||typeof o=="bigint")&&Qn(t,""+o);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ia);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[An]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ze(t,a,o)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(t,n,d,M,a,null)}}u&&qt(t,n,"srcSet",a.srcSet,a,null),o&&qt(t,n,"src",a.src,a,null);return;case"input":Et("invalid",t);var D=d=M=u=null,X=null,le=null;for(o in a)if(a.hasOwnProperty(o)){var Se=a[o];if(Se!=null)switch(o){case"name":u=Se;break;case"type":M=Se;break;case"checked":X=Se;break;case"defaultChecked":le=Se;break;case"value":d=Se;break;case"defaultValue":D=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(s(137,n));break;default:qt(t,n,o,Se,a,null)}}Ln(t,d,D,X,le,M,u,!1);return;case"select":Et("invalid",t),o=M=d=null;for(u in a)if(a.hasOwnProperty(u)&&(D=a[u],D!=null))switch(u){case"value":d=D;break;case"defaultValue":M=D;break;case"multiple":o=D;default:qt(t,n,u,D,a,null)}n=d,a=M,t.multiple=!!o,n!=null?Sn(t,!!o,n,!1):a!=null&&Sn(t,!!o,a,!0);return;case"textarea":Et("invalid",t),d=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(D=a[M],D!=null))switch(M){case"value":o=D;break;case"defaultValue":u=D;break;case"children":d=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(91));break;default:qt(t,n,M,D,a,null)}Ti(t,o,u,d);return;case"option":for(X in a)a.hasOwnProperty(X)&&(o=a[X],o!=null)&&(X==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":qt(t,n,X,o,a,null));return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(o=0;o<Ho.length;o++)Et(Ho[o],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(le in a)if(a.hasOwnProperty(le)&&(o=a[le],o!=null))switch(le){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(t,n,le,o,a,null)}return;default:if(zt(n)){for(Se in a)a.hasOwnProperty(Se)&&(o=a[Se],o!==void 0&&pd(t,n,Se,o,a,void 0));return}}for(D in a)a.hasOwnProperty(D)&&(o=a[D],o!=null&&qt(t,n,D,o,a,null))}function yy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,D=null,X=null,le=null,Se=null;for(ve in a){var be=a[ve];if(a.hasOwnProperty(ve)&&be!=null)switch(ve){case"checked":break;case"value":break;case"defaultValue":X=be;default:o.hasOwnProperty(ve)||qt(t,n,ve,null,o,be)}}for(var pe in o){var ve=o[pe];if(be=a[pe],o.hasOwnProperty(pe)&&(ve!=null||be!=null))switch(pe){case"type":d=ve;break;case"name":u=ve;break;case"checked":le=ve;break;case"defaultChecked":Se=ve;break;case"value":M=ve;break;case"defaultValue":D=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(s(137,n));break;default:ve!==be&&qt(t,n,pe,ve,o,be)}}ke(t,M,D,X,le,Se,d,u);return;case"select":ve=M=D=pe=null;for(d in a)if(X=a[d],a.hasOwnProperty(d)&&X!=null)switch(d){case"value":break;case"multiple":ve=X;default:o.hasOwnProperty(d)||qt(t,n,d,null,o,X)}for(u in o)if(d=o[u],X=a[u],o.hasOwnProperty(u)&&(d!=null||X!=null))switch(u){case"value":pe=d;break;case"defaultValue":D=d;break;case"multiple":M=d;default:d!==X&&qt(t,n,u,d,o,X)}n=D,a=M,o=ve,pe!=null?Sn(t,!!a,pe,!1):!!o!=!!a&&(n!=null?Sn(t,!!a,n,!0):Sn(t,!!a,a?[]:"",!1));return;case"textarea":ve=pe=null;for(D in a)if(u=a[D],a.hasOwnProperty(D)&&u!=null&&!o.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:qt(t,n,D,null,o,u)}for(M in o)if(u=o[M],d=a[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":pe=u;break;case"defaultValue":ve=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&qt(t,n,M,u,o,d)}Kn(t,pe,ve);return;case"option":for(var Ye in a)pe=a[Ye],a.hasOwnProperty(Ye)&&pe!=null&&!o.hasOwnProperty(Ye)&&(Ye==="selected"?t.selected=!1:qt(t,n,Ye,null,o,pe));for(X in o)pe=o[X],ve=a[X],o.hasOwnProperty(X)&&pe!==ve&&(pe!=null||ve!=null)&&(X==="selected"?t.selected=pe&&typeof pe!="function"&&typeof pe!="symbol":qt(t,n,X,pe,o,ve));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)pe=a[it],a.hasOwnProperty(it)&&pe!=null&&!o.hasOwnProperty(it)&&qt(t,n,it,null,o,pe);for(le in o)if(pe=o[le],ve=a[le],o.hasOwnProperty(le)&&pe!==ve&&(pe!=null||ve!=null))switch(le){case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:qt(t,n,le,pe,o,ve)}return;default:if(zt(n)){for(var Yt in a)pe=a[Yt],a.hasOwnProperty(Yt)&&pe!==void 0&&!o.hasOwnProperty(Yt)&&pd(t,n,Yt,void 0,o,pe);for(Se in o)pe=o[Se],ve=a[Se],!o.hasOwnProperty(Se)||pe===ve||pe===void 0&&ve===void 0||pd(t,n,Se,pe,o,ve);return}}for(var ne in a)pe=a[ne],a.hasOwnProperty(ne)&&pe!=null&&!o.hasOwnProperty(ne)&&qt(t,n,ne,null,o,pe);for(be in o)pe=o[be],ve=a[be],!o.hasOwnProperty(be)||pe===ve||pe==null&&ve==null||qt(t,n,be,pe,o,ve)}function Vg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function My(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,M=u.initiatorType,D=u.duration;if(d&&D&&Vg(M)){for(M=0,D=u.responseEnd,o+=1;o<a.length;o++){var X=a[o],le=X.startTime;if(le>D)break;var Se=X.transferSize,be=X.initiatorType;Se&&Vg(be)&&(X=X.responseEnd,M+=Se*(X<D?1:(D-le)/(X-le)))}if(--o,n+=8*(d+M)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var md=null,gd=null;function pc(t){return t.nodeType===9?t:t.ownerDocument}function kg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var _d=null;function Ey(){var t=window.event;return t&&t.type==="popstate"?t===_d?!1:(_d=t,!0):(_d=null,!1)}var Xg=typeof setTimeout=="function"?setTimeout:void 0,by=typeof clearTimeout=="function"?clearTimeout:void 0,Wg=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof Wg<"u"?function(t){return Wg.resolve(null).then(t).catch(Ay)}:Xg;function Ay(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function qg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Cr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Vo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Vo(a);for(var d=a.firstChild;d;){var M=d.nextSibling,D=d.nodeName;d[Na]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=M}}else a==="body"&&Vo(t.ownerDocument.body);a=u}while(a);Cr(n)}function Yg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function xd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xd(a),ro(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ry(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Na])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function Cy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function Zg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function Sd(t){return t.data==="$?"||t.data==="$~"}function yd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function wy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Md=null;function Kg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Qg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Jg(t,n,a){switch(n=pc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Vo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ro(t)}var _i=new Map,$g=new Set;function mc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var xa=H.d;H.d={f:Dy,r:Ny,D:Uy,C:Ly,L:Oy,m:Py,X:Fy,S:Iy,M:By};function Dy(){var t=xa.f(),n=rc();return t||n}function Ny(t){var n=La(t);n!==null&&n.tag===5&&n.type==="form"?g0(n):xa.r(t)}var Tr=typeof document>"u"?null:document;function ev(t,n,a){var o=Tr;if(o&&typeof n=="string"&&n){var u=Gt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),$g.has(u)||($g.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",t),dn(n),o.head.appendChild(n)))}}function Uy(t){xa.D(t),ev("dns-prefetch",t,null)}function Ly(t,n){xa.C(t,n),ev("preconnect",t,n)}function Oy(t,n,a){xa.L(t,n,a);var o=Tr;if(o&&t&&n){var u='link[rel="preload"][as="'+Gt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Gt(a.imageSizes)+'"]')):u+='[href="'+Gt(t)+'"]';var d=u;switch(n){case"style":d=Ar(t);break;case"script":d=Rr(t)}_i.has(d)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),_i.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(ko(d))||n==="script"&&o.querySelector(jo(d))||(n=o.createElement("link"),Dn(n,"link",t),dn(n),o.head.appendChild(n)))}}function Py(t,n){xa.m(t,n);var a=Tr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Gt(o)+'"][href="'+Gt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Rr(t)}if(!_i.has(d)&&(t=v({rel:"modulepreload",href:t},n),_i.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(jo(d)))return}o=a.createElement("link"),Dn(o,"link",t),dn(o),a.head.appendChild(o)}}}function Iy(t,n,a){xa.S(t,n,a);var o=Tr;if(o&&t){var u=Oa(o).hoistableStyles,d=Ar(t);n=n||"default";var M=u.get(d);if(!M){var D={loading:0,preload:null};if(M=o.querySelector(ko(d)))D.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=_i.get(d))&&Ed(t,a);var X=M=o.createElement("link");dn(X),Dn(X,"link",t),X._p=new Promise(function(le,Se){X.onload=le,X.onerror=Se}),X.addEventListener("load",function(){D.loading|=1}),X.addEventListener("error",function(){D.loading|=2}),D.loading|=4,gc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:D},u.set(d,M)}}}function Fy(t,n){xa.X(t,n);var a=Tr;if(a&&t){var o=Oa(a).hoistableScripts,u=Rr(t),d=o.get(u);d||(d=a.querySelector(jo(u)),d||(t=v({src:t,async:!0},n),(n=_i.get(u))&&bd(t,n),d=a.createElement("script"),dn(d),Dn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function By(t,n){xa.M(t,n);var a=Tr;if(a&&t){var o=Oa(a).hoistableScripts,u=Rr(t),d=o.get(u);d||(d=a.querySelector(jo(u)),d||(t=v({src:t,async:!0,type:"module"},n),(n=_i.get(u))&&bd(t,n),d=a.createElement("script"),dn(d),Dn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function tv(t,n,a,o){var u=(u=ie.current)?mc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ar(a.href),a=Oa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ar(a.href);var d=Oa(u).hoistableStyles,M=d.get(t);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,M),(d=u.querySelector(ko(t)))&&!d._p&&(M.instance=d,M.state.loading=5),_i.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(t,a),d||zy(u,t,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Rr(a),a=Oa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ar(t){return'href="'+Gt(t)+'"'}function ko(t){return'link[rel="stylesheet"]['+t+"]"}function nv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function zy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),dn(n),t.head.appendChild(n))}function Rr(t){return'[src="'+Gt(t)+'"]'}function jo(t){return"script[async]"+t}function iv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Gt(a.href)+'"]');if(o)return n.instance=o,dn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),dn(o),Dn(o,"style",u),gc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Ar(a.href);var d=t.querySelector(ko(u));if(d)return n.state.loading|=4,n.instance=d,dn(d),d;o=nv(a),(u=_i.get(u))&&Ed(o,u),d=(t.ownerDocument||t).createElement("link"),dn(d);var M=d;return M._p=new Promise(function(D,X){M.onload=D,M.onerror=X}),Dn(d,"link",o),n.state.loading|=4,gc(d,a.precedence,t),n.instance=d;case"script":return d=Rr(a.src),(u=t.querySelector(jo(d)))?(n.instance=u,dn(u),u):(o=a,(u=_i.get(d))&&(o=v({},a),bd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),dn(u),Dn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,gc(o,a.precedence,t));return n.instance}function gc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var D=o[M];if(D.dataset.precedence===n)d=D;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Ed(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function bd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var vc=null;function av(t,n,a){if(vc===null){var o=new Map,u=vc=new Map;u.set(a,o)}else u=vc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Na]||d[cn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=t+M;var D=o.get(M);D?D.push(d):o.set(M,[d])}}return o}function sv(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Hy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function rv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Gy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ar(o.href),d=n.querySelector(ko(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=_c.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,dn(d);return}d=n.ownerDocument||n,o=nv(o),(u=_i.get(u))&&Ed(o,u),d=d.createElement("link"),dn(d);var M=d;M._p=new Promise(function(D,X){M.onload=D,M.onerror=X}),Dn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=_c.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Td=0;function Vy(t,n){return t.stylesheets&&t.count===0&&Sc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&Td===0&&(Td=62500*My());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Td?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function _c(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Sc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var xc=null;function Sc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,xc=new Map,n.forEach(ky,t),xc=null,_c.call(t))}function ky(t,n){if(!(n.state.loading&4)){var a=xc.get(t);if(a)var o=a.get(null);else{a=new Map,xc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,u),a.set(M,u),this.count++,o=_c.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Xo={$$typeof:U,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function jy(t,n,a,o,u,d,M,D,X){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function ov(t,n,a,o,u,d,M,D,X,le,Se,be){return t=new jy(t,n,a,M,X,le,Se,be,D),n=1,d===!0&&(n|=24),d=$n(3,null,null,n),t.current=d,d.stateNode=t,n=af(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},lf(d),t}function lv(t){return t?(t=ar,t):ar}function cv(t,n,a,o,u,d){u=lv(u),o.context===null?o.context=u:o.pendingContext=u,o=Va(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ka(t,o,n),a!==null&&(Xn(a,t,n),Eo(a,t,n))}function uv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Ad(t,n){uv(t,n),(t=t.alternate)&&uv(t,n)}function fv(t){if(t.tag===13||t.tag===31){var n=ys(t,67108864);n!==null&&Xn(n,t,67108864),Ad(t,67108864)}}function dv(t){if(t.tag===13||t.tag===31){var n=ai();n=ms(n);var a=ys(t,n);a!==null&&Xn(a,t,n),Ad(t,n)}}var yc=!0;function Xy(t,n,a,o){var u=O.T;O.T=null;var d=H.p;try{H.p=2,Rd(t,n,a,o)}finally{H.p=d,O.T=u}}function Wy(t,n,a,o){var u=O.T;O.T=null;var d=H.p;try{H.p=8,Rd(t,n,a,o)}finally{H.p=d,O.T=u}}function Rd(t,n,a,o){if(yc){var u=Cd(o);if(u===null)hd(t,n,o,Mc,a),pv(t,o);else if(Yy(u,t,n,a,o))o.stopPropagation();else if(pv(t,o),n&4&&-1<qy.indexOf(t)){for(;u!==null;){var d=La(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=Ie(d.pendingLanes);if(M!==0){var D=d;for(D.pendingLanes|=2,D.entangledLanes|=2;M;){var X=1<<31-we(M);D.entanglements[1]|=X,M&=~X}Wi(d),(Ft&6)===0&&(ac=B()+500,zo(0))}}break;case 31:case 13:D=ys(d,2),D!==null&&Xn(D,d,2),rc(),Ad(d,2)}if(d=Cd(o),d===null&&hd(t,n,o,Mc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else hd(t,n,o,null,a)}}function Cd(t){return t=wu(t),wd(t)}var Mc=null;function wd(t){if(Mc=null,t=Ua(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Mc=t,null}function hv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Oe()){case C:return 2;case b:return 8;case $:case W:return 32;case ge:return 268435456;default:return 32}default:return 32}}var Dd=!1,es=null,ts=null,ns=null,Wo=new Map,qo=new Map,is=[],qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pv(t,n){switch(t){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":Wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(n.pointerId)}}function Yo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=La(n),n!==null&&fv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Yy(t,n,a,o,u){switch(n){case"focusin":return es=Yo(es,t,n,a,o,u),!0;case"dragenter":return ts=Yo(ts,t,n,a,o,u),!0;case"mouseover":return ns=Yo(ns,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Wo.set(d,Yo(Wo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,qo.set(d,Yo(qo.get(d)||null,t,n,a,o,u)),!0}return!1}function mv(t){var n=Ua(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,ao(t.priority,function(){dv(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,ao(t.priority,function(){dv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ec(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Cd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Cu=o,a.target.dispatchEvent(o),Cu=null}else return n=La(a),n!==null&&fv(n),t.blockedOn=a,!1;n.shift()}return!0}function gv(t,n,a){Ec(t)&&a.delete(n)}function Zy(){Dd=!1,es!==null&&Ec(es)&&(es=null),ts!==null&&Ec(ts)&&(ts=null),ns!==null&&Ec(ns)&&(ns=null),Wo.forEach(gv),qo.forEach(gv)}function bc(t,n){t.blockedOn===n&&(t.blockedOn=null,Dd||(Dd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Zy)))}var Tc=null;function vv(t){Tc!==t&&(Tc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Tc===t&&(Tc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(wd(o||a)===null)continue;break}var d=La(a);d!==null&&(t.splice(n,3),n-=3,Cf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Cr(t){function n(X){return bc(X,t)}es!==null&&bc(es,t),ts!==null&&bc(ts,t),ns!==null&&bc(ns,t),Wo.forEach(n),qo.forEach(n);for(var a=0;a<is.length;a++){var o=is[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<is.length&&(a=is[0],a.blockedOn===null);)mv(a),a.blockedOn===null&&is.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],M=u[An]||null;if(typeof d=="function")M||vv(a);else if(M){var D=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[An]||null)D=M.formAction;else if(wd(u)!==null)continue}else D=M.action;typeof D=="function"?a[o+1]=D:(a.splice(o,3),o-=3),vv(a)}}}function _v(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Nd(t){this._internalRoot=t}Ac.prototype.render=Nd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ai();cv(a,o,t,n,null,null)},Ac.prototype.unmount=Nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;cv(t.current,2,null,t,null,null),rc(),n[na]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var n=io();t={blockedOn:null,target:t,priority:n};for(var a=0;a<is.length&&n!==0&&n<is[a].priority;a++);is.splice(a,0,t),a===0&&mv(t)}};var xv=e.version;if(xv!=="19.2.6")throw Error(s(527,xv,"19.2.6"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Ky={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{V=Rc.inject(Ky),ae=Rc}catch{}}return Ko.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=A0,d=R0,M=C0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=ov(t,1,!1,null,null,a,o,null,u,d,M,_v),t[na]=n.current,dd(t),new Nd(n)},Ko.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=A0,M=R0,D=C0,X=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(D=a.onRecoverableError),a.formState!==void 0&&(X=a.formState)),n=ov(t,1,!0,n,a??null,o,u,X,d,M,D,_v),n.context=lv(null),a=n.current,o=ai(),o=ms(o),u=Va(o),u.callback=null,ka(a,u,o),a=o,n.current.lanes=a,ot(n,a),Wi(n),t[na]=n.current,dd(t),new Ac(n)},Ko.version="19.2.6",Ko}var wv;function rM(){if(wv)return Od.exports;wv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Od.exports=sM(),Od.exports}var oM=rM();const lM=z_(oM);var Dv="popstate";function Nv(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function cM(r={}){function e(s,l){let c=l.state?.masked,{pathname:f,search:p,hash:m}=c||s.location;return Mh("",{pathname:f,search:p,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",c?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function i(s,l){return typeof l=="string"?l:cl(l)}return fM(e,i,null,r)}function an(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function bi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function uM(){return Math.random().toString(36).substring(2,10)}function Uv(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Mh(r,e,i=null,s,l){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Kr(e):e,state:i,key:e&&e.key||s||uM(),mask:l}}function cl({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Kr(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function fM(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,p="POP",m=null,h=x();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function x(){return(f.state||{idx:null}).idx}function v(){p="POP";let S=x(),y=S==null?null:S-h;h=S,m&&m({action:p,location:R.location,delta:y})}function _(S,y){p="PUSH";let N=Nv(S)?S:Mh(R.location,S,y);h=x()+1;let U=Uv(N,h),L=R.createHref(N.mask||N);try{f.pushState(U,"",L)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;l.location.assign(L)}c&&m&&m({action:p,location:R.location,delta:1})}function E(S,y){p="REPLACE";let N=Nv(S)?S:Mh(R.location,S,y);h=x();let U=Uv(N,h),L=R.createHref(N.mask||N);f.replaceState(U,"",L),c&&m&&m({action:p,location:R.location,delta:0})}function T(S){return dM(S)}let R={get action(){return p},get location(){return r(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Dv,v),m=S,()=>{l.removeEventListener(Dv,v),m=null}},createHref(S){return e(l,S)},createURL:T,encodeLocation(S){let y=T(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:_,replace:E,go(S){return f.go(S)}};return R}function dM(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),an(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:cl(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function H_(r,e,i="/"){return hM(r,e,i,!1)}function hM(r,e,i,s,l){let c=typeof e=="string"?Kr(e):e,f=Ca(c.pathname||"/",i);if(f==null)return null;let p=pM(r),m=null,h=AM(f);for(let x=0;m==null&&x<p.length;++x)m=bM(p[x],h,s);return m}function pM(r){let e=G_(r);return mM(e),e}function G_(r,e=[],i=[],s="",l=!1){let c=(f,p,m=l,h)=>{let x={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&m)return;an(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let v=Fi([s,x.relativePath]),_=i.concat(x);f.children&&f.children.length>0&&(an(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),G_(f.children,e,_,v,m)),!(f.path==null&&!f.index)&&e.push({path:v,score:MM(v,f.index),routesMeta:_})};return r.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))c(f,p);else for(let m of V_(f.path))c(f,p,!0,m)}),e}function V_(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=V_(s.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function mM(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:EM(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var gM=/^:[\w-]+$/,vM=3,_M=2,xM=1,SM=10,yM=-2,Lv=r=>r==="*";function MM(r,e){let i=r.split("/"),s=i.length;return i.some(Lv)&&(s+=yM),e&&(s+=_M),i.filter(l=>!Lv(l)).reduce((l,c)=>l+(gM.test(c)?vM:c===""?xM:SM),s)}function EM(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function bM(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let p=0;p<s.length;++p){let m=s[p],h=p===s.length-1,x=c==="/"?e:e.slice(c.length)||"/",v=lu({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},x),_=m.route;if(!v&&h&&i&&!s[s.length-1].route.index&&(v=lu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},x)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:Fi([c,v.pathname]),pathnameBase:DM(Fi([c,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(c=Fi([c,v.pathnameBase]))}return f}function lu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=TM(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:s.reduce((h,{paramName:x,isOptional:v},_)=>{if(x==="*"){let T=p[_]||"";f=c.slice(0,c.length-T.length).replace(/(.)\/+$/,"$1")}const E=p[_];return v&&!E?h[x]=void 0:h[x]=(E||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:r}}function TM(r,e=!1,i=!0){bi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m,h,x)=>{if(s.push({paramName:p,isOptional:m!=null}),m){let v=x.charAt(h+f.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function AM(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Ca(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var RM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function CM(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Kr(r):r,c;return i?(i=k_(i),i.startsWith("/")?c=Ov(i.substring(1),"/"):c=Ov(i,e)):c=e,{pathname:c,search:NM(s),hash:UM(l)}}function Ov(r,e){let i=cu(e).split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Bd(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wM(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function _p(r){let e=wM(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function yu(r,e,i,s=!1){let l;typeof r=="string"?l=Kr(r):(l={...r},an(!l.pathname||!l.pathname.includes("?"),Bd("?","pathname","search",l)),an(!l.pathname||!l.pathname.includes("#"),Bd("#","pathname","hash",l)),an(!l.search||!l.search.includes("#"),Bd("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let v=e.length-1;if(!s&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),v-=1;l.pathname=_.join("/")}p=v>=0?e[v]:"/"}let m=CM(l,p),h=f&&f!=="/"&&f.endsWith("/"),x=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||x)&&(m.pathname+="/"),m}var k_=r=>r.replace(/\/\/+/g,"/"),Fi=r=>k_(r.join("/")),cu=r=>r.replace(/\/+$/,""),DM=r=>cu(r).replace(/^\/*/,"/"),NM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,UM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,LM=class{constructor(r,e,i,s=!1){this.status=r,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function OM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function PM(r){let e=r.map(i=>i.route.path).filter(Boolean);return Fi(e)||"/"}var j_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function X_(r,e){let i=r;if(typeof i!="string"||!RM.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(j_)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),p=Ca(f.pathname,e);f.origin===c.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{bi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var W_=["POST","PUT","PATCH","DELETE"];new Set(W_);var IM=["GET",...W_];new Set(IM);var Qr=q.createContext(null);Qr.displayName="DataRouter";var Mu=q.createContext(null);Mu.displayName="DataRouterState";var q_=q.createContext(!1);function FM(){return q.useContext(q_)}var Y_=q.createContext({isTransitioning:!1});Y_.displayName="ViewTransition";var BM=q.createContext(new Map);BM.displayName="Fetchers";var zM=q.createContext(null);zM.displayName="Await";var li=q.createContext(null);li.displayName="Navigation";var dl=q.createContext(null);dl.displayName="Location";var ta=q.createContext({outlet:null,matches:[],isDataRoute:!1});ta.displayName="Route";var xp=q.createContext(null);xp.displayName="RouteError";var Z_="REACT_ROUTER_ERROR",HM="REDIRECT",GM="ROUTE_ERROR_RESPONSE";function VM(r){if(r.startsWith(`${Z_}:${HM}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function kM(r){if(r.startsWith(`${Z_}:${GM}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new LM(e.status,e.statusText,e.data)}catch{}}function jM(r,{relative:e}={}){an(Jr(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=q.useContext(li),{hash:l,pathname:c,search:f}=hl(r,{relative:e}),p=c;return i!=="/"&&(p=c==="/"?i:Fi([i,c])),s.createHref({pathname:p,search:f,hash:l})}function Jr(){return q.useContext(dl)!=null}function ci(){return an(Jr(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(dl).location}var K_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Q_(r){q.useContext(li).static||q.useLayoutEffect(r)}function $r(){let{isDataRoute:r}=q.useContext(ta);return r?i1():XM()}function XM(){an(Jr(),"useNavigate() may be used only in the context of a <Router> component.");let r=q.useContext(Qr),{basename:e,navigator:i}=q.useContext(li),{matches:s}=q.useContext(ta),{pathname:l}=ci(),c=JSON.stringify(_p(s)),f=q.useRef(!1);return Q_(()=>{f.current=!0}),q.useCallback((m,h={})=>{if(bi(f.current,K_),!f.current)return;if(typeof m=="number"){i.go(m);return}let x=yu(m,JSON.parse(c),l,h.relative==="path");r==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:Fi([e,x.pathname])),(h.replace?i.replace:i.push)(x,h.state,h)},[e,i,c,l,r])}q.createContext(null);function hl(r,{relative:e}={}){let{matches:i}=q.useContext(ta),{pathname:s}=ci(),l=JSON.stringify(_p(i));return q.useMemo(()=>yu(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function WM(r,e){return J_(r,e)}function J_(r,e,i){an(Jr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=q.useContext(li),{matches:l}=q.useContext(ta),c=l[l.length-1],f=c?c.params:{},p=c?c.pathname:"/",m=c?c.pathnameBase:"/",h=c&&c.route;{let S=h&&h.path||"";ex(p,!h||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let x=ci(),v;if(e){let S=typeof e=="string"?Kr(e):e;an(m==="/"||S.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${S.pathname}" was given in the \`location\` prop.`),v=S}else v=x;let _=v.pathname||"/",E=_;if(m!=="/"){let S=m.replace(/^\//,"").split("/");E="/"+_.replace(/^\//,"").split("/").slice(S.length).join("/")}let T=i&&i.state.matches.length?i.state.matches.map(S=>Object.assign(S,{route:i.manifest[S.route.id]||S.route})):H_(r,{pathname:E});bi(h||T!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),bi(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=QM(T&&T.map(S=>Object.assign({},S,{params:Object.assign({},f,S.params),pathname:Fi([m,s.encodeLocation?s.encodeLocation(S.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?m:Fi([m,s.encodeLocation?s.encodeLocation(S.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),l,i);return e&&R?q.createElement(dl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},R):R}function qM(){let r=n1(),e=OM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:c},"ErrorBoundary")," or"," ",q.createElement("code",{style:c},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),i?q.createElement("pre",{style:l},i):null,f)}var YM=q.createElement(qM,null),$_=class extends q.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=kM(r.digest);i&&(r=i)}let e=r!==void 0?q.createElement(ta.Provider,{value:this.props.routeContext},q.createElement(xp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?q.createElement(ZM,{error:r},e):e}};$_.contextType=q_;var zd=new WeakMap;function ZM({children:r,error:e}){let{basename:i}=q.useContext(li);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=VM(e.digest);if(s){let l=zd.get(e);if(l)throw l;let c=X_(s.location,i);if(j_&&!zd.get(e))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw zd.set(e,f),f}return q.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function KM({routeContext:r,match:e,children:i}){let s=q.useContext(Qr);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),q.createElement(ta.Provider,{value:r},i)}function QM(r,e=[],i){let s=i?.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let l=r,c=s?.errors;if(c!=null){let x=l.findIndex(v=>v.route.id&&c?.[v.route.id]!==void 0);an(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,x+1))}let f=!1,p=-1;if(i&&s){f=s.renderFallback;for(let x=0;x<l.length;x++){let v=l[x];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=x),v.route.id){let{loaderData:_,errors:E}=s,T=v.route.loader&&!_.hasOwnProperty(v.route.id)&&(!E||E[v.route.id]===void 0);if(v.route.lazy||T){i.isStatic&&(f=!0),p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}}let m=i?.onError,h=s&&m?(x,v)=>{m(x,{location:s.location,params:s.matches?.[0]?.params??{},pattern:PM(s.matches),errorInfo:v})}:void 0;return l.reduceRight((x,v,_)=>{let E,T=!1,R=null,S=null;s&&(E=c&&v.route.id?c[v.route.id]:void 0,R=v.route.errorElement||YM,f&&(p<0&&_===0?(ex("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,S=null):p===_&&(T=!0,S=v.route.hydrateFallbackElement||null)));let y=e.concat(l.slice(0,_+1)),N=()=>{let U;return E?U=R:T?U=S:v.route.Component?U=q.createElement(v.route.Component,null):v.route.element?U=v.route.element:U=x,q.createElement(KM,{match:v,routeContext:{outlet:x,matches:y,isDataRoute:s!=null},children:U})};return s&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?q.createElement($_,{location:s.location,revalidation:s.revalidation,component:R,error:E,children:N(),routeContext:{outlet:null,matches:y,isDataRoute:!0},onError:h}):N()},null)}function Sp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function JM(r){let e=q.useContext(Qr);return an(e,Sp(r)),e}function $M(r){let e=q.useContext(Mu);return an(e,Sp(r)),e}function e1(r){let e=q.useContext(ta);return an(e,Sp(r)),e}function yp(r){let e=e1(r),i=e.matches[e.matches.length-1];return an(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function t1(){return yp("useRouteId")}function n1(){let r=q.useContext(xp),e=$M("useRouteError"),i=yp("useRouteError");return r!==void 0?r:e.errors?.[i]}function i1(){let{router:r}=JM("useNavigate"),e=yp("useNavigate"),i=q.useRef(!1);return Q_(()=>{i.current=!0}),q.useCallback(async(l,c={})=>{bi(i.current,K_),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var Pv={};function ex(r,e,i){!e&&!Pv[r]&&(Pv[r]=!0,bi(!1,i))}q.memo(a1);function a1({routes:r,manifest:e,future:i,state:s,isStatic:l,onError:c}){return J_(r,void 0,{manifest:e,state:s,isStatic:l,onError:c})}function tx({to:r,replace:e,state:i,relative:s}){an(Jr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=q.useContext(li);bi(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=q.useContext(ta),{pathname:f}=ci(),p=$r(),m=yu(r,_p(c),f,s==="path"),h=JSON.stringify(m);return q.useEffect(()=>{p(JSON.parse(h),{replace:e,state:i,relative:s})},[p,h,s,e,i]),null}function Bs(r){an(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function s1({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,useTransitions:f}){an(!Jr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=r.replace(/^\/*/,"/"),m=q.useMemo(()=>({basename:p,navigator:l,static:c,useTransitions:f,future:{}}),[p,l,c,f]);typeof i=="string"&&(i=Kr(i));let{pathname:h="/",search:x="",hash:v="",state:_=null,key:E="default",mask:T}=i,R=q.useMemo(()=>{let S=Ca(h,p);return S==null?null:{location:{pathname:S,search:x,hash:v,state:_,key:E,mask:T},navigationType:s}},[p,h,x,v,_,E,s,T]);return bi(R!=null,`<Router basename="${p}"> is not able to match the URL "${h}${x}${v}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:q.createElement(li.Provider,{value:m},q.createElement(dl.Provider,{children:e,value:R}))}function r1({children:r,location:e}){return WM(Eh(r),e)}function Eh(r,e=[]){let i=[];return q.Children.forEach(r,(s,l)=>{if(!q.isValidElement(s))return;let c=[...e,l];if(s.type===q.Fragment){i.push.apply(i,Eh(s.props.children,c));return}an(s.type===Bs,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),an(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Eh(s.props.children,c)),i.push(f)}),i}var eu="get",tu="application/x-www-form-urlencoded";function Eu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function o1(r){return Eu(r)&&r.tagName.toLowerCase()==="button"}function l1(r){return Eu(r)&&r.tagName.toLowerCase()==="form"}function c1(r){return Eu(r)&&r.tagName.toLowerCase()==="input"}function u1(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function f1(r,e){return r.button===0&&(!e||e==="_self")&&!u1(r)}function bh(r=""){return new URLSearchParams(typeof r=="string"||Array.isArray(r)||r instanceof URLSearchParams?r:Object.keys(r).reduce((e,i)=>{let s=r[i];return e.concat(Array.isArray(s)?s.map(l=>[i,l]):[[i,s]])},[]))}function d1(r,e){let i=bh(r);return e&&e.forEach((s,l)=>{i.has(l)||e.getAll(l).forEach(c=>{i.append(l,c)})}),i}var Cc=null;function h1(){if(Cc===null)try{new FormData(document.createElement("form"),0),Cc=!1}catch{Cc=!0}return Cc}var p1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hd(r){return r!=null&&!p1.has(r)?(bi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tu}"`),null):r}function m1(r,e){let i,s,l,c,f;if(l1(r)){let p=r.getAttribute("action");s=p?Ca(p,e):null,i=r.getAttribute("method")||eu,l=Hd(r.getAttribute("enctype"))||tu,c=new FormData(r)}else if(o1(r)||c1(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?Ca(m,e):null,i=r.getAttribute("formmethod")||p.getAttribute("method")||eu,l=Hd(r.getAttribute("formenctype"))||Hd(p.getAttribute("enctype"))||tu,c=new FormData(p,r),!h1()){let{name:h,type:x,value:v}=r;if(x==="image"){let _=h?`${h}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else h&&c.append(h,v)}}else{if(Eu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=eu,s=null,l=tu,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Mp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function nx(r,e,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&Ca(l.pathname,e)==="/"?l.pathname=`${cu(e)}/_root.${s}`:l.pathname=`${cu(l.pathname)}.${s}`,l}async function g1(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function v1(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function _1(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await g1(c,i);return f.links?f.links():[]}return[]}));return M1(s.flat(1).filter(v1).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Iv(r,e,i,s,l,c){let f=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,p=(m,h)=>i[h].pathname!==m.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,h)=>f(m,h)||p(m,h)):c==="data"?e.filter((m,h)=>{let x=s.routes[m.route.id];if(!x||!x.hasLoader)return!1;if(f(m,h)||p(m,h))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function x1(r,e,{includeHydrateFallback:i}={}){return S1(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function S1(r){return[...new Set(r)]}function y1(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function M1(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(y1(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function Ep(){let r=q.useContext(Qr);return Mp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function E1(){let r=q.useContext(Mu);return Mp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var bp=q.createContext(void 0);bp.displayName="FrameworkContext";function Tp(){let r=q.useContext(bp);return Mp(r,"You must render this element inside a <HydratedRouter> element"),r}function b1(r,e){let i=q.useContext(bp),[s,l]=q.useState(!1),[c,f]=q.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:h,onMouseLeave:x,onTouchStart:v}=e,_=q.useRef(null);q.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let R=y=>{y.forEach(N=>{f(N.isIntersecting)})},S=new IntersectionObserver(R,{threshold:.5});return _.current&&S.observe(_.current),()=>{S.disconnect()}}},[r]),q.useEffect(()=>{if(s){let R=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(R)}}},[s]);let E=()=>{l(!0)},T=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,_,{}]:[c,_,{onFocus:Qo(p,E),onBlur:Qo(m,T),onMouseEnter:Qo(h,E),onMouseLeave:Qo(x,T),onTouchStart:Qo(v,E)}]:[!1,_,{}]}function Qo(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function T1({page:r,...e}){let i=FM(),{router:s}=Ep(),l=q.useMemo(()=>H_(s.routes,r,s.basename),[s.routes,r,s.basename]);return l?i?q.createElement(R1,{page:r,matches:l,...e}):q.createElement(C1,{page:r,matches:l,...e}):null}function A1(r){let{manifest:e,routeModules:i}=Tp(),[s,l]=q.useState([]);return q.useEffect(()=>{let c=!1;return _1(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function R1({page:r,matches:e,...i}){let s=ci(),{future:l}=Tp(),{basename:c}=Ep(),f=q.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let p=nx(r,c,l.unstable_trailingSlashAwareDataRequests,"rsc"),m=!1,h=[];for(let x of e)typeof x.route.shouldRevalidate=="function"?m=!0:h.push(x.route.id);return m&&h.length>0&&p.searchParams.set("_routes",h.join(",")),[p.pathname+p.search]},[c,l.unstable_trailingSlashAwareDataRequests,r,s,e]);return q.createElement(q.Fragment,null,f.map(p=>q.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...i})))}function C1({page:r,matches:e,...i}){let s=ci(),{future:l,manifest:c,routeModules:f}=Tp(),{basename:p}=Ep(),{loaderData:m,matches:h}=E1(),x=q.useMemo(()=>Iv(r,e,h,c,s,"data"),[r,e,h,c,s]),v=q.useMemo(()=>Iv(r,e,h,c,s,"assets"),[r,e,h,c,s]),_=q.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let R=new Set,S=!1;if(e.forEach(N=>{let U=c.routes[N.route.id];!U||!U.hasLoader||(!x.some(L=>L.route.id===N.route.id)&&N.route.id in m&&f[N.route.id]?.shouldRevalidate||U.hasClientLoader?S=!0:R.add(N.route.id))}),R.size===0)return[];let y=nx(r,p,l.unstable_trailingSlashAwareDataRequests,"data");return S&&R.size>0&&y.searchParams.set("_routes",e.filter(N=>R.has(N.route.id)).map(N=>N.route.id).join(",")),[y.pathname+y.search]},[p,l.unstable_trailingSlashAwareDataRequests,m,s,c,x,e,r,f]),E=q.useMemo(()=>x1(v,c),[v,c]),T=A1(v);return q.createElement(q.Fragment,null,_.map(R=>q.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...i})),E.map(R=>q.createElement("link",{key:R,rel:"modulepreload",href:R,...i})),T.map(({key:R,link:S})=>q.createElement("link",{key:R,nonce:i.nonce,...S,crossOrigin:S.crossOrigin??i.crossOrigin})))}function w1(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var D1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{D1&&(window.__reactRouterVersion="7.15.0")}catch{}function N1({basename:r,children:e,useTransitions:i,window:s}){let l=q.useRef();l.current==null&&(l.current=cM({window:s,v5Compat:!0}));let c=l.current,[f,p]=q.useState({action:c.action,location:c.location}),m=q.useCallback(h=>{i===!1?p(h):q.startTransition(()=>p(h))},[i]);return q.useLayoutEffect(()=>c.listen(m),[c,m]),q.createElement(s1,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:c,useTransitions:i})}var ix=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vs=q.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,mask:p,state:m,target:h,to:x,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:E,...T},R){let{basename:S,navigator:y,useTransitions:N}=q.useContext(li),U=typeof x=="string"&&ix.test(x),L=X_(x,S);x=L.to;let j=jM(x,{relative:l}),P=ci(),I=null;if(p){let Y=yu(p,[],P.mask?P.mask.pathname:"/",!0);S!=="/"&&(Y.pathname=Y.pathname==="/"?S:Fi([S,Y.pathname])),I=y.createHref(Y)}let[A,z,K]=b1(s,T),G=P1(x,{replace:f,mask:p,state:m,target:h,preventScrollReset:v,relative:l,viewTransition:_,defaultShouldRevalidate:E,useTransitions:N});function k(Y){e&&e(Y),Y.defaultPrevented||G(Y)}let se=!(L.isExternal||c),ce=q.createElement("a",{...T,...K,href:(se?I:void 0)||L.absoluteURL||j,onClick:se?k:e,ref:w1(R,z),target:h,"data-discover":!U&&i==="render"?"true":void 0});return A&&!U?q.createElement(q.Fragment,null,ce,q.createElement(T1,{page:j})):ce});Vs.displayName="Link";var U1=q.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...h},x){let v=hl(f,{relative:h.relative}),_=ci(),E=q.useContext(Mu),{navigator:T,basename:R}=q.useContext(li),S=E!=null&&G1(v)&&p===!0,y=T.encodeLocation?T.encodeLocation(v).pathname:v.pathname,N=_.pathname,U=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(N=N.toLowerCase(),U=U?U.toLowerCase():null,y=y.toLowerCase()),U&&R&&(U=Ca(U,R)||U);const L=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let j=N===y||!l&&N.startsWith(y)&&N.charAt(L)==="/",P=U!=null&&(U===y||!l&&U.startsWith(y)&&U.charAt(y.length)==="/"),I={isActive:j,isPending:P,isTransitioning:S},A=j?e:void 0,z;typeof s=="function"?z=s(I):z=[s,j?"active":null,P?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let K=typeof c=="function"?c(I):c;return q.createElement(Vs,{...h,"aria-current":A,className:z,ref:x,style:K,to:f,viewTransition:p},typeof m=="function"?m(I):m)});U1.displayName="NavLink";var L1=q.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=eu,action:p,onSubmit:m,relative:h,preventScrollReset:x,viewTransition:v,defaultShouldRevalidate:_,...E},T)=>{let{useTransitions:R}=q.useContext(li),S=z1(),y=H1(p,{relative:h}),N=f.toLowerCase()==="get"?"get":"post",U=typeof p=="string"&&ix.test(p),L=j=>{if(m&&m(j),j.defaultPrevented)return;j.preventDefault();let P=j.nativeEvent.submitter,I=P?.getAttribute("formmethod")||f,A=()=>S(P||j.currentTarget,{fetcherKey:e,method:I,navigate:i,replace:l,state:c,relative:h,preventScrollReset:x,viewTransition:v,defaultShouldRevalidate:_});R&&i!==!1?q.startTransition(()=>A()):A()};return q.createElement("form",{ref:T,method:N,action:y,onSubmit:s?m:L,...E,"data-discover":!U&&r==="render"?"true":void 0})});L1.displayName="Form";function O1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ax(r){let e=q.useContext(Qr);return an(e,O1(r)),e}function P1(r,{target:e,replace:i,mask:s,state:l,preventScrollReset:c,relative:f,viewTransition:p,defaultShouldRevalidate:m,useTransitions:h}={}){let x=$r(),v=ci(),_=hl(r,{relative:f});return q.useCallback(E=>{if(f1(E,e)){E.preventDefault();let T=i!==void 0?i:cl(v)===cl(_),R=()=>x(r,{replace:T,mask:s,state:l,preventScrollReset:c,relative:f,viewTransition:p,defaultShouldRevalidate:m});h?q.startTransition(()=>R()):R()}},[v,x,_,i,s,l,e,r,c,f,p,m,h])}function I1(r){bi(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let e=q.useRef(bh(r)),i=q.useRef(!1),s=ci(),l=q.useMemo(()=>d1(s.search,i.current?null:e.current),[s.search]),c=$r(),f=q.useCallback((p,m)=>{const h=bh(typeof p=="function"?p(new URLSearchParams(l)):p);i.current=!0,c("?"+h,m)},[c,l]);return[l,f]}var F1=0,B1=()=>`__${String(++F1)}__`;function z1(){let{router:r}=ax("useSubmit"),{basename:e}=q.useContext(li),i=t1(),s=r.fetch,l=r.navigate;return q.useCallback(async(c,f={})=>{let{action:p,method:m,encType:h,formData:x,body:v}=m1(c,e);if(f.navigate===!1){let _=f.fetcherKey||B1();await s(_,i,f.action||p,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:x,body:v,formMethod:f.method||m,formEncType:f.encType||h,flushSync:f.flushSync})}else await l(f.action||p,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:x,body:v,formMethod:f.method||m,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function H1(r,{relative:e}={}){let{basename:i}=q.useContext(li),s=q.useContext(ta);an(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...hl(r||".",{relative:e})},f=ci();if(r==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(x=>x==="")){p.delete("index"),m.filter(v=>v).forEach(v=>p.append("index",v));let x=p.toString();c.search=x?`?${x}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Fi([i,c.pathname])),cl(c)}function G1(r,{relative:e}={}){let i=q.useContext(Y_);an(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=ax("useViewTransitionState"),l=hl(r,{relative:e});if(!i.isTransitioning)return!1;let c=Ca(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Ca(i.nextLocation.pathname,s)||i.nextLocation.pathname;return lu(l.pathname,f)!=null||lu(l.pathname,c)!=null}const sx=q.createContext();function Ws(){return q.useContext(sx)}function V1({children:r}){const[e,i]=q.useState(null),[s,l]=q.useState(!0);q.useEffect(()=>{const h=localStorage.getItem("auth_user");if(h)try{i(JSON.parse(h))}catch{localStorage.removeItem("auth_user")}l(!1)},[]);const m={user:e,loading:s,register:(h,x,v)=>{const _=JSON.parse(localStorage.getItem("registered_users")||"[]");if(_.find(S=>S.email===h))throw new Error("Пользователь с таким email уже существует");const E={id:Date.now().toString(),email:h,name:v,password:btoa(x)};_.push(E),localStorage.setItem("registered_users",JSON.stringify(_));const{password:T,...R}=E;return i(R),localStorage.setItem("auth_user",JSON.stringify(R)),localStorage.getItem(`integrations_${E.id}`)||localStorage.setItem(`integrations_${E.id}`,JSON.stringify([])),localStorage.getItem(`employees_${E.id}`)||localStorage.setItem(`employees_${E.id}`,JSON.stringify([])),R},login:(h,x)=>{const _=JSON.parse(localStorage.getItem("registered_users")||"[]").find(R=>R.email===h&&R.password===btoa(x));if(!_)throw new Error("Неверный email или пароль");const{password:E,...T}=_;return i(T),localStorage.setItem("auth_user",JSON.stringify(T)),T},logout:()=>{i(null),localStorage.removeItem("auth_user")},isAuthenticated:!!e};return g.jsx(sx.Provider,{value:m,children:r})}const rx=q.createContext(),Ap=()=>{const r=q.useContext(rx);if(!r)throw new Error("useTheme must be used within ThemeProvider");return r},k1=({children:r})=>{const[e,i]=q.useState(()=>localStorage.getItem("theme")==="dark");q.useEffect(()=>{localStorage.setItem("theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]);const s=()=>{i(l=>!l)};return g.jsx(rx.Provider,{value:{isDark:e,toggleTheme:s},children:r})},j1="/assets/logo-B0MSavEX.png";const Rp="184",X1=0,Fv=1,W1=2,nu=1,q1=2,rl=3,ps=0,qn=1,Ta=2,Aa=0,jr=1,Th=2,Bv=3,zv=4,Y1=5,Hs=100,Z1=101,K1=102,Q1=103,J1=104,$1=200,eE=201,tE=202,nE=203,Ah=204,Rh=205,iE=206,aE=207,sE=208,rE=209,oE=210,lE=211,cE=212,uE=213,fE=214,Ch=0,wh=1,Dh=2,Wr=3,Nh=4,Uh=5,Lh=6,Oh=7,ox=0,dE=1,hE=2,Qi=0,lx=1,cx=2,ux=3,fx=4,dx=5,hx=6,px=7,mx=300,qs=301,qr=302,Gd=303,Vd=304,bu=306,Ph=1e3,oi=1001,Ih=1002,Nn=1003,pE=1004,wc=1005,_n=1006,kd=1007,ks=1008,yi=1009,gx=1010,vx=1011,ul=1012,Cp=1013,Ji=1014,Ii=1015,$i=1016,wp=1017,Dp=1018,fl=1020,_x=35902,xx=35899,Sx=1021,yx=1022,Mi=1023,wa=1026,js=1027,Mx=1028,Np=1029,Ys=1030,Up=1031,Lp=1033,iu=33776,au=33777,su=33778,ru=33779,Fh=35840,Bh=35841,zh=35842,Hh=35843,Gh=36196,Vh=37492,kh=37496,jh=37488,Xh=37489,uu=37490,Wh=37491,qh=37808,Yh=37809,Zh=37810,Kh=37811,Qh=37812,Jh=37813,$h=37814,ep=37815,tp=37816,np=37817,ip=37818,ap=37819,sp=37820,rp=37821,op=36492,lp=36494,cp=36495,up=36283,fp=36284,fu=36285,dp=36286,mE=3200,Hv=0,gE=1,fs="",Si="srgb",du="srgb-linear",hu="linear",Xt="srgb",wr=7680,Gv=519,vE=512,_E=513,xE=514,Op=515,SE=516,yE=517,Pp=518,ME=519,Vv=35044,kv="300 es",Ki=2e3,pu=2001;function EE(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function mu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bE(){const r=mu("canvas");return r.style.display="block",r}const jv={};function Xv(...r){const e="THREE."+r.shift();console.log(e,...r)}function Ex(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function st(...r){r=Ex(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Nt(...r){r=Ex(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function hp(...r){const e=r.join(" ");e in jv||(jv[e]=!0,st(...r))}function TE(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const AE={[Ch]:wh,[Dh]:Lh,[Nh]:Oh,[Wr]:Uh,[wh]:Ch,[Lh]:Dh,[Oh]:Nh,[Uh]:Wr};class Ks{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jd=Math.PI/180,pp=180/Math.PI;function pl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Dt(r,e,i){return Math.max(e,Math.min(i,r))}function RE(r,e){return(r%e+e)%e}function Xd(r,e,i){return(1-i)*r+i*e}function Jo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Fp=class Fp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Dt(this.x,e.x,i.x),this.y=Dt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Dt(this.x,e,i),this.y=Dt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Dt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fp.prototype.isVector2=!0;let ht=Fp;class eo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,p){let m=s[l+0],h=s[l+1],x=s[l+2],v=s[l+3],_=c[f+0],E=c[f+1],T=c[f+2],R=c[f+3];if(v!==R||m!==_||h!==E||x!==T){let S=m*_+h*E+x*T+v*R;S<0&&(_=-_,E=-E,T=-T,R=-R,S=-S);let y=1-p;if(S<.9995){const N=Math.acos(S),U=Math.sin(N);y=Math.sin(y*N)/U,p=Math.sin(p*N)/U,m=m*y+_*p,h=h*y+E*p,x=x*y+T*p,v=v*y+R*p}else{m=m*y+_*p,h=h*y+E*p,x=x*y+T*p,v=v*y+R*p;const N=1/Math.sqrt(m*m+h*h+x*x+v*v);m*=N,h*=N,x*=N,v*=N}}e[i]=m,e[i+1]=h,e[i+2]=x,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,f){const p=s[l],m=s[l+1],h=s[l+2],x=s[l+3],v=c[f],_=c[f+1],E=c[f+2],T=c[f+3];return e[i]=p*T+x*v+m*E-h*_,e[i+1]=m*T+x*_+h*v-p*E,e[i+2]=h*T+x*E+p*_-m*v,e[i+3]=x*T-p*v-m*_-h*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(s/2),x=p(l/2),v=p(c/2),_=m(s/2),E=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=_*x*v+h*E*T,this._y=h*E*v-_*x*T,this._z=h*x*T+_*E*v,this._w=h*x*v-_*E*T;break;case"YXZ":this._x=_*x*v+h*E*T,this._y=h*E*v-_*x*T,this._z=h*x*T-_*E*v,this._w=h*x*v+_*E*T;break;case"ZXY":this._x=_*x*v-h*E*T,this._y=h*E*v+_*x*T,this._z=h*x*T+_*E*v,this._w=h*x*v-_*E*T;break;case"ZYX":this._x=_*x*v-h*E*T,this._y=h*E*v+_*x*T,this._z=h*x*T-_*E*v,this._w=h*x*v+_*E*T;break;case"YZX":this._x=_*x*v+h*E*T,this._y=h*E*v+_*x*T,this._z=h*x*T-_*E*v,this._w=h*x*v-_*E*T;break;case"XZY":this._x=_*x*v-h*E*T,this._y=h*E*v-_*x*T,this._z=h*x*T+_*E*v,this._w=h*x*v+_*E*T;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],x=i[6],v=i[10],_=s+p+v;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(x-m)*E,this._y=(c-h)*E,this._z=(f-l)*E}else if(s>p&&s>v){const E=2*Math.sqrt(1+s-p-v);this._w=(x-m)/E,this._x=.25*E,this._y=(l+f)/E,this._z=(c+h)/E}else if(p>v){const E=2*Math.sqrt(1+p-s-v);this._w=(c-h)/E,this._x=(l+f)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+v-s-p);this._w=(f-l)/E,this._x=(c+h)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=s*x+f*p+l*h-c*m,this._y=l*x+f*m+c*p-s*h,this._z=c*x+f*h+s*m-l*p,this._w=f*x-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bp=class Bp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Wv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Wv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*s),x=2*(p*i-c*l),v=2*(c*s-f*i);return this.x=i+m*h+f*v-p*x,this.y=s+m*x+p*h-c*v,this.z=l+m*v+c*x-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Dt(this.x,e.x,i.x),this.y=Dt(this.y,e.y,i.y),this.z=Dt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Dt(this.x,e,i),this.y=Dt(this.y,e,i),this.z=Dt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Wd.copy(this).projectOnVector(e),this.sub(Wd)}reflect(e){return this.sub(Wd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Dt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bp.prototype.isVector3=!0;let de=Bp;const Wd=new de,Wv=new eo,zp=class zp{constructor(e,i,s,l,c,f,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h)}set(e,i,s,l,c,f,p,m,h){const x=this.elements;return x[0]=e,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=f,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],h=s[1],x=s[4],v=s[7],_=s[2],E=s[5],T=s[8],R=l[0],S=l[3],y=l[6],N=l[1],U=l[4],L=l[7],j=l[2],P=l[5],I=l[8];return c[0]=f*R+p*N+m*j,c[3]=f*S+p*U+m*P,c[6]=f*y+p*L+m*I,c[1]=h*R+x*N+v*j,c[4]=h*S+x*U+v*P,c[7]=h*y+x*L+v*I,c[2]=_*R+E*N+T*j,c[5]=_*S+E*U+T*P,c[8]=_*y+E*L+T*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],x=e[8];return i*f*x-i*p*h-s*c*x+s*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],x=e[8],v=x*f-p*h,_=p*m-x*c,E=h*c-f*m,T=i*v+s*_+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=v*R,e[1]=(l*h-x*s)*R,e[2]=(p*s-l*f)*R,e[3]=_*R,e[4]=(x*i-l*m)*R,e[5]=(l*c-p*i)*R,e[6]=E*R,e[7]=(s*m-h*i)*R,e[8]=(f*i-s*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(qd.makeScale(e,i)),this}rotate(e){return this.premultiply(qd.makeRotation(-e)),this}translate(e,i){return this.premultiply(qd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zp.prototype.isMatrix3=!0;let dt=zp;const qd=new dt,qv=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yv=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CE(){const r={enabled:!0,workingColorSpace:du,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Xt&&(l.r=Ra(l.r),l.g=Ra(l.g),l.b=Ra(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Xt&&(l.r=Xr(l.r),l.g=Xr(l.g),l.b=Xr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fs?hu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return hp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return hp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[du]:{primaries:e,whitePoint:s,transfer:hu,toXYZ:qv,fromXYZ:Yv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:s,transfer:Xt,toXYZ:qv,fromXYZ:Yv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const wt=CE();function Ra(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Dr;class wE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Dr===void 0&&(Dr=mu("canvas")),Dr.width=e.width,Dr.height=e.height;const l=Dr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Dr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=mu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ra(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ra(i[s]/255)*255):i[s]=Ra(i[s]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DE=0;class Ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=pl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Yd(l[f].image)):c.push(Yd(l[f]))}else c=Yd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Yd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let NE=0;const Zd=new de;class zn extends Ks{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=oi,l=oi,c=_n,f=ks,p=Mi,m=yi,h=zn.DEFAULT_ANISOTROPY,x=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=pl(),this.name="",this.source=new Ip(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zd).x}get height(){return this.source.getSize(Zd).y}get depth(){return this.source.getSize(Zd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ph:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ph:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=mx;zn.DEFAULT_ANISOTROPY=1;const Hp=class Hp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],x=m[4],v=m[8],_=m[1],E=m[5],T=m[9],R=m[2],S=m[6],y=m[10];if(Math.abs(x-_)<.01&&Math.abs(v-R)<.01&&Math.abs(T-S)<.01){if(Math.abs(x+_)<.1&&Math.abs(v+R)<.1&&Math.abs(T+S)<.1&&Math.abs(h+E+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(h+1)/2,L=(E+1)/2,j=(y+1)/2,P=(x+_)/4,I=(v+R)/4,A=(T+S)/4;return U>L&&U>j?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=P/s,c=I/s):L>j?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=P/l,c=A/l):j<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(j),s=I/c,l=A/c),this.set(s,l,c,i),this}let N=Math.sqrt((S-T)*(S-T)+(v-R)*(v-R)+(_-x)*(_-x));return Math.abs(N)<.001&&(N=1),this.x=(S-T)/N,this.y=(v-R)/N,this.z=(_-x)/N,this.w=Math.acos((h+E+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Dt(this.x,e.x,i.x),this.y=Dt(this.y,e.y,i.y),this.z=Dt(this.z,e.z,i.z),this.w=Dt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Dt(this.x,e,i),this.y=Dt(this.y,e,i),this.z=Dt(this.z,e,i),this.w=Dt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hp.prototype.isVector4=!0;let ln=Hp;class UE extends Ks{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new zn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Ip(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends UE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class bx extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LE extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Su=class Su{constructor(e,i,s,l,c,f,p,m,h,x,v,_,E,T,R,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h,x,v,_,E,T,R,S)}set(e,i,s,l,c,f,p,m,h,x,v,_,E,T,R,S){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=p,y[13]=m,y[2]=h,y[6]=x,y[10]=v,y[14]=_,y[3]=E,y[7]=T,y[11]=R,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Su().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Nr.setFromMatrixColumn(e,0).length(),c=1/Nr.setFromMatrixColumn(e,1).length(),f=1/Nr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),x=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const _=f*x,E=f*v,T=p*x,R=p*v;i[0]=m*x,i[4]=-m*v,i[8]=h,i[1]=E+T*h,i[5]=_-R*h,i[9]=-p*m,i[2]=R-_*h,i[6]=T+E*h,i[10]=f*m}else if(e.order==="YXZ"){const _=m*x,E=m*v,T=h*x,R=h*v;i[0]=_+R*p,i[4]=T*p-E,i[8]=f*h,i[1]=f*v,i[5]=f*x,i[9]=-p,i[2]=E*p-T,i[6]=R+_*p,i[10]=f*m}else if(e.order==="ZXY"){const _=m*x,E=m*v,T=h*x,R=h*v;i[0]=_-R*p,i[4]=-f*v,i[8]=T+E*p,i[1]=E+T*p,i[5]=f*x,i[9]=R-_*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const _=f*x,E=f*v,T=p*x,R=p*v;i[0]=m*x,i[4]=T*h-E,i[8]=_*h+R,i[1]=m*v,i[5]=R*h+_,i[9]=E*h-T,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const _=f*m,E=f*h,T=p*m,R=p*h;i[0]=m*x,i[4]=R-_*v,i[8]=T*v+E,i[1]=v,i[5]=f*x,i[9]=-p*x,i[2]=-h*x,i[6]=E*v+T,i[10]=_-R*v}else if(e.order==="XZY"){const _=f*m,E=f*h,T=p*m,R=p*h;i[0]=m*x,i[4]=-v,i[8]=h*x,i[1]=_*v+R,i[5]=f*x,i[9]=E*v-T,i[2]=T*v-E,i[6]=p*x,i[10]=R*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OE,e,PE)}lookAt(e,i,s){const l=this.elements;return si.subVectors(e,i),si.lengthSq()===0&&(si.z=1),si.normalize(),ss.crossVectors(s,si),ss.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),ss.crossVectors(s,si)),ss.normalize(),Dc.crossVectors(si,ss),l[0]=ss.x,l[4]=Dc.x,l[8]=si.x,l[1]=ss.y,l[5]=Dc.y,l[9]=si.y,l[2]=ss.z,l[6]=Dc.z,l[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],h=s[12],x=s[1],v=s[5],_=s[9],E=s[13],T=s[2],R=s[6],S=s[10],y=s[14],N=s[3],U=s[7],L=s[11],j=s[15],P=l[0],I=l[4],A=l[8],z=l[12],K=l[1],G=l[5],k=l[9],se=l[13],ce=l[2],Y=l[6],O=l[10],H=l[14],re=l[3],_e=l[7],ye=l[11],F=l[15];return c[0]=f*P+p*K+m*ce+h*re,c[4]=f*I+p*G+m*Y+h*_e,c[8]=f*A+p*k+m*O+h*ye,c[12]=f*z+p*se+m*H+h*F,c[1]=x*P+v*K+_*ce+E*re,c[5]=x*I+v*G+_*Y+E*_e,c[9]=x*A+v*k+_*O+E*ye,c[13]=x*z+v*se+_*H+E*F,c[2]=T*P+R*K+S*ce+y*re,c[6]=T*I+R*G+S*Y+y*_e,c[10]=T*A+R*k+S*O+y*ye,c[14]=T*z+R*se+S*H+y*F,c[3]=N*P+U*K+L*ce+j*re,c[7]=N*I+U*G+L*Y+j*_e,c[11]=N*A+U*k+L*O+j*ye,c[15]=N*z+U*se+L*H+j*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],x=e[2],v=e[6],_=e[10],E=e[14],T=e[3],R=e[7],S=e[11],y=e[15],N=m*E-h*_,U=p*E-h*v,L=p*_-m*v,j=f*E-h*x,P=f*_-m*x,I=f*v-p*x;return i*(R*N-S*U+y*L)-s*(T*N-S*j+y*P)+l*(T*U-R*j+y*I)-c*(T*L-R*P+S*I)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],x=e[8],v=e[9],_=e[10],E=e[11],T=e[12],R=e[13],S=e[14],y=e[15],N=i*p-s*f,U=i*m-l*f,L=i*h-c*f,j=s*m-l*p,P=s*h-c*p,I=l*h-c*m,A=x*R-v*T,z=x*S-_*T,K=x*y-E*T,G=v*S-_*R,k=v*y-E*R,se=_*y-E*S,ce=N*se-U*k+L*G+j*K-P*z+I*A;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/ce;return e[0]=(p*se-m*k+h*G)*Y,e[1]=(l*k-s*se-c*G)*Y,e[2]=(R*I-S*P+y*j)*Y,e[3]=(_*P-v*I-E*j)*Y,e[4]=(m*K-f*se-h*z)*Y,e[5]=(i*se-l*K+c*z)*Y,e[6]=(S*L-T*I-y*U)*Y,e[7]=(x*I-_*L+E*U)*Y,e[8]=(f*k-p*K+h*A)*Y,e[9]=(s*K-i*k-c*A)*Y,e[10]=(T*P-R*L+y*N)*Y,e[11]=(v*L-x*P-E*N)*Y,e[12]=(p*z-f*G-m*A)*Y,e[13]=(i*G-s*z+l*A)*Y,e[14]=(R*U-T*j-S*N)*Y,e[15]=(x*j-v*U+_*N)*Y,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,p=e.y,m=e.z,h=c*f,x=c*p;return this.set(h*f+s,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+s,x*m-l*f,0,h*m-l*p,x*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,x=f+f,v=p+p,_=c*h,E=c*x,T=c*v,R=f*x,S=f*v,y=p*v,N=m*h,U=m*x,L=m*v,j=s.x,P=s.y,I=s.z;return l[0]=(1-(R+y))*j,l[1]=(E+L)*j,l[2]=(T-U)*j,l[3]=0,l[4]=(E-L)*P,l[5]=(1-(_+y))*P,l[6]=(S+N)*P,l[7]=0,l[8]=(T+U)*I,l[9]=(S-N)*I,l[10]=(1-(_+R))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Nr.set(l[0],l[1],l[2]).length();const p=Nr.set(l[4],l[5],l[6]).length(),m=Nr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Di.copy(this);const h=1/f,x=1/p,v=1/m;return Di.elements[0]*=h,Di.elements[1]*=h,Di.elements[2]*=h,Di.elements[4]*=x,Di.elements[5]*=x,Di.elements[6]*=x,Di.elements[8]*=v,Di.elements[9]*=v,Di.elements[10]*=v,i.setFromRotationMatrix(Di),s.x=f,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,f,p=Ki,m=!1){const h=this.elements,x=2*c/(i-e),v=2*c/(s-l),_=(i+e)/(i-e),E=(s+l)/(s-l);let T,R;if(m)T=c/(f-c),R=f*c/(f-c);else if(p===Ki)T=-(f+c)/(f-c),R=-2*f*c/(f-c);else if(p===pu)T=-f/(f-c),R=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,f,p=Ki,m=!1){const h=this.elements,x=2/(i-e),v=2/(s-l),_=-(i+e)/(i-e),E=-(s+l)/(s-l);let T,R;if(m)T=1/(f-c),R=f/(f-c);else if(p===Ki)T=-2/(f-c),R=-(f+c)/(f-c);else if(p===pu)T=-1/(f-c),R=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=v,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=T,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Su.prototype.isMatrix4=!0;let xn=Su;const Nr=new de,Di=new xn,OE=new de(0,0,0),PE=new de(1,1,1),ss=new de,Dc=new de,si=new de,Zv=new xn,Kv=new eo;class Zs{constructor(e=0,i=0,s=0,l=Zs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],x=l[9],v=l[2],_=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Dt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Dt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,E),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Zv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Kv.setFromEuler(this),this.setFromQuaternion(Kv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zs.DEFAULT_ORDER="XYZ";class Tx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IE=0;const Qv=new de,Ur=new eo,Sa=new xn,Nc=new de,$o=new de,FE=new de,BE=new eo,Jv=new de(1,0,0),$v=new de(0,1,0),e_=new de(0,0,1),t_={type:"added"},zE={type:"removed"},Lr={type:"childadded",child:null},Kd={type:"childremoved",child:null};class Yn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const e=new de,i=new Zs,s=new eo,l=new de(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new xn},normalMatrix:{value:new dt}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ur.setFromAxisAngle(e,i),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,i){return Ur.setFromAxisAngle(e,i),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(Jv,e)}rotateY(e){return this.rotateOnAxis($v,e)}rotateZ(e){return this.rotateOnAxis(e_,e)}translateOnAxis(e,i){return Qv.copy(e).applyQuaternion(this.quaternion),this.position.add(Qv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Jv,e)}translateY(e){return this.translateOnAxis($v,e)}translateZ(e){return this.translateOnAxis(e_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Nc.copy(e):Nc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt($o,Nc,this.up):Sa.lookAt(Nc,$o,this.up),this.quaternion.setFromRotationMatrix(Sa),l&&(Sa.extractRotation(l.matrixWorld),Ur.setFromRotationMatrix(Sa),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(t_),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(zE),Kd.child=e,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(t_),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,FE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,BE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const v=m[h];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),x=f(e.images),v=f(e.shapes),_=f(e.skeletons),E=f(e.animations),T=f(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),x.length>0&&(s.images=x),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Yn.DEFAULT_UP=new de(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Uc extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HE={type:"move"};class Qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const R of e.hand.values()){const S=i.getJointPose(R,s),y=this._getHandJoint(h,R);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const x=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=x.position.distanceTo(v.position),E=.02,T=.005;h.inputState.pinching&&_>E+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=E-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(HE)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Uc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Jd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Bt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=wt.workingColorSpace){return this.r=e,this.g=i,this.b=s,wt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=wt.workingColorSpace){if(e=RE(e,1),i=Dt(i,0,1),s=Dt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Jd(f,c,e+1/3),this.g=Jd(f,c,e),this.b=Jd(f,c,e-1/3)}return wt.colorSpaceToWorking(this,l),this}setStyle(e,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Si){const s=Ax[e.toLowerCase()];return s!==void 0?this.setHex(s,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}copyLinearToSRGB(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return wt.workingToColorSpace(In.copy(this),e),Math.round(Dt(In.r*255,0,255))*65536+Math.round(Dt(In.g*255,0,255))*256+Math.round(Dt(In.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=wt.workingColorSpace){wt.workingToColorSpace(In.copy(this),i);const s=In.r,l=In.g,c=In.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const x=(p+f)/2;if(p===f)m=0,h=0;else{const v=f-p;switch(h=x<=.5?v/(f+p):v/(2-f-p),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=x,e}getRGB(e,i=wt.workingColorSpace){return wt.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Si){wt.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b;return e!==Si?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+i,rs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(rs),e.getHSL(Lc);const s=Xd(rs.h,Lc.h,i),l=Xd(rs.s,Lc.s,i),c=Xd(rs.l,Lc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Bt;Bt.NAMES=Ax;class n_ extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zs,this.environmentIntensity=1,this.environmentRotation=new Zs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ni=new de,ya=new de,$d=new de,Ma=new de,Or=new de,Pr=new de,i_=new de,eh=new de,th=new de,nh=new de,ih=new ln,ah=new ln,sh=new ln;class Pi{constructor(e=new de,i=new de,s=new de){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ni.subVectors(e,i),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ni.subVectors(l,i),ya.subVectors(s,i),$d.subVectors(e,i);const f=Ni.dot(Ni),p=Ni.dot(ya),m=Ni.dot($d),h=ya.dot(ya),x=ya.dot($d),v=f*h-p*p;if(v===0)return c.set(0,0,0),null;const _=1/v,E=(h*m-p*x)*_,T=(f*x-p*m)*_;return c.set(1-E-T,T,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(e,i,s,l,c,f,p,m){return this.getBarycoord(e,i,s,l,Ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ma.x),m.addScaledVector(f,Ma.y),m.addScaledVector(p,Ma.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return ih.setScalar(0),ah.setScalar(0),sh.setScalar(0),ih.fromBufferAttribute(e,i),ah.fromBufferAttribute(e,s),sh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(ih,c.x),f.addScaledVector(ah,c.y),f.addScaledVector(sh,c.z),f}static isFrontFacing(e,i,s,l){return Ni.subVectors(s,i),ya.subVectors(e,i),Ni.cross(ya).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Ni.cross(ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Pi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,p;Or.subVectors(l,s),Pr.subVectors(c,s),eh.subVectors(e,s);const m=Or.dot(eh),h=Pr.dot(eh);if(m<=0&&h<=0)return i.copy(s);th.subVectors(e,l);const x=Or.dot(th),v=Pr.dot(th);if(x>=0&&v<=x)return i.copy(l);const _=m*v-x*h;if(_<=0&&m>=0&&x<=0)return f=m/(m-x),i.copy(s).addScaledVector(Or,f);nh.subVectors(e,c);const E=Or.dot(nh),T=Pr.dot(nh);if(T>=0&&E<=T)return i.copy(c);const R=E*h-m*T;if(R<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(s).addScaledVector(Pr,p);const S=x*T-E*v;if(S<=0&&v-x>=0&&E-T>=0)return i_.subVectors(c,l),p=(v-x)/(v-x+(E-T)),i.copy(l).addScaledVector(i_,p);const y=1/(S+R+_);return f=R*y,p=_*y,i.copy(s).addScaledVector(Or,f).addScaledVector(Pr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ml{constructor(e=new de(1/0,1/0,1/0),i=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Ui):Ui.fromBufferAttribute(c,f),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Oc.copy(s.boundingBox)),Oc.applyMatrix4(e.matrixWorld),this.union(Oc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),Pc.subVectors(this.max,el),Ir.subVectors(e.a,el),Fr.subVectors(e.b,el),Br.subVectors(e.c,el),os.subVectors(Fr,Ir),ls.subVectors(Br,Fr),Os.subVectors(Ir,Br);let i=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Os.z,Os.y,os.z,0,-os.x,ls.z,0,-ls.x,Os.z,0,-Os.x,-os.y,os.x,0,-ls.y,ls.x,0,-Os.y,Os.x,0];return!rh(i,Ir,Fr,Br,Pc)||(i=[1,0,0,0,1,0,0,0,1],!rh(i,Ir,Fr,Br,Pc))?!1:(Ic.crossVectors(os,ls),i=[Ic.x,Ic.y,Ic.z],rh(i,Ir,Fr,Br,Pc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ea),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ea=[new de,new de,new de,new de,new de,new de,new de,new de],Ui=new de,Oc=new ml,Ir=new de,Fr=new de,Br=new de,os=new de,ls=new de,Os=new de,el=new de,Pc=new de,Ic=new de,Ps=new de;function rh(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ps.fromArray(r,c);const p=l.x*Math.abs(Ps.x)+l.y*Math.abs(Ps.y)+l.z*Math.abs(Ps.z),m=e.dot(Ps),h=i.dot(Ps),x=s.dot(Ps);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const vn=new de,Fc=new ht;let GE=0;class zi extends Ks{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Vv,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Fc.fromBufferAttribute(this,i),Fc.applyMatrix3(e),this.setXY(i,Fc.x,Fc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Jo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Wn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Jo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Jo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Jo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Jo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Rx extends zi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Cx extends zi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Hi extends zi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const VE=new ml,tl=new de,oh=new de;class Tu{constructor(e=new de,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):VE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tl.subVectors(e,this.center);const i=tl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(tl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tl.copy(e.center).add(oh)),this.expandByPoint(tl.copy(e.center).sub(oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let kE=0;const xi=new xn,lh=new Yn,zr=new de,ri=new ml,nl=new ml,Tn=new de;class Gi extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=pl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(EE(e)?Cx:Rx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new dt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,s){return xi.makeTranslation(e,i,s),this.applyMatrix4(xi),this}scale(e,i,s){return xi.makeScale(e,i,s),this.applyMatrix4(xi),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Hi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];nl.setFromBufferAttribute(p),this.morphTargetsRelative?(Tn.addVectors(ri.min,nl.min),ri.expandByPoint(Tn),Tn.addVectors(ri.max,nl.max),ri.expandByPoint(Tn)):(ri.expandByPoint(nl.min),ri.expandByPoint(nl.max))}ri.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Tn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Tn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)Tn.fromBufferAttribute(p,h),m&&(zr.fromBufferAttribute(e,h),Tn.add(zr)),l=Math.max(l,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let A=0;A<s.count;A++)p[A]=new de,m[A]=new de;const h=new de,x=new de,v=new de,_=new ht,E=new ht,T=new ht,R=new de,S=new de;function y(A,z,K){h.fromBufferAttribute(s,A),x.fromBufferAttribute(s,z),v.fromBufferAttribute(s,K),_.fromBufferAttribute(c,A),E.fromBufferAttribute(c,z),T.fromBufferAttribute(c,K),x.sub(h),v.sub(h),E.sub(_),T.sub(_);const G=1/(E.x*T.y-T.x*E.y);isFinite(G)&&(R.copy(x).multiplyScalar(T.y).addScaledVector(v,-E.y).multiplyScalar(G),S.copy(v).multiplyScalar(E.x).addScaledVector(x,-T.x).multiplyScalar(G),p[A].add(R),p[z].add(R),p[K].add(R),m[A].add(S),m[z].add(S),m[K].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let A=0,z=N.length;A<z;++A){const K=N[A],G=K.start,k=K.count;for(let se=G,ce=G+k;se<ce;se+=3)y(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const U=new de,L=new de,j=new de,P=new de;function I(A){j.fromBufferAttribute(l,A),P.copy(j);const z=p[A];U.copy(z),U.sub(j.multiplyScalar(j.dot(z))).normalize(),L.crossVectors(P,z);const G=L.dot(m[A])<0?-1:1;f.setXYZW(A,U.x,U.y,U.z,G)}for(let A=0,z=N.length;A<z;++A){const K=N[A],G=K.start,k=K.count;for(let se=G,ce=G+k;se<ce;se+=3)I(e.getX(se+0)),I(e.getX(se+1)),I(e.getX(se+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new zi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,E=s.count;_<E;_++)s.setXYZ(_,0,0,0);const l=new de,c=new de,f=new de,p=new de,m=new de,h=new de,x=new de,v=new de;if(e)for(let _=0,E=e.count;_<E;_+=3){const T=e.getX(_+0),R=e.getX(_+1),S=e.getX(_+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,S),x.subVectors(f,c),v.subVectors(l,c),x.cross(v),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,R),h.fromBufferAttribute(s,S),p.add(x),m.add(x),h.add(x),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,E=i.count;_<E;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),x.subVectors(f,c),v.subVectors(l,c),x.cross(v),s.setXYZ(_+0,x.x,x.y,x.z),s.setXYZ(_+1,x.x,x.y,x.z),s.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Tn.fromBufferAttribute(e,i),Tn.normalize(),e.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(p,m){const h=p.array,x=p.itemSize,v=p.normalized,_=new h.constructor(m.length*x);let E=0,T=0;for(let R=0,S=m.length;R<S;R++){p.isInterleavedBufferAttribute?E=m[R]*p.data.stride+p.offset:E=m[R]*x;for(let y=0;y<x;y++)_[T++]=h[E++]}return new zi(_,x,v)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Gi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let x=0,v=h.length;x<v;x++){const _=h[x],E=e(_,s);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let v=0,_=h.length;v<_;v++){const E=h[v];x.push(E.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=e.morphAttributes;for(const h in c){const x=[],v=c[h];for(let _=0,E=v.length;_<E;_++)x.push(v[_].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,x=f.length;h<x;h++){const v=f[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let jE=0;class gl extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=pl(),this.name="",this.type="Material",this.blending=jr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Rh,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(s.blending=this.blending),this.side!==ps&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ah&&(s.blendSrc=this.blendSrc),this.blendDst!==Rh&&(s.blendDst=this.blendDst),this.blendEquation!==Hs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ba=new de,ch=new de,Bc=new de,cs=new de,uh=new de,zc=new de,fh=new de;class wx{constructor(e=new de,i=new de(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ba)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ba.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ba.copy(this.origin).addScaledVector(this.direction,i),ba.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){ch.copy(e).add(i).multiplyScalar(.5),Bc.copy(i).sub(e).normalize(),cs.copy(this.origin).sub(ch);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Bc),p=cs.dot(this.direction),m=-cs.dot(Bc),h=cs.lengthSq(),x=Math.abs(1-f*f);let v,_,E,T;if(x>0)if(v=f*m-p,_=f*p-m,T=c*x,v>=0)if(_>=-T)if(_<=T){const R=1/x;v*=R,_*=R,E=v*(v+f*_+2*p)+_*(f*v+_+2*m)+h}else _=c,v=Math.max(0,-(f*_+p)),E=-v*v+_*(_+2*m)+h;else _=-c,v=Math.max(0,-(f*_+p)),E=-v*v+_*(_+2*m)+h;else _<=-T?(v=Math.max(0,-(-f*c+p)),_=v>0?-c:Math.min(Math.max(-c,-m),c),E=-v*v+_*(_+2*m)+h):_<=T?(v=0,_=Math.min(Math.max(-c,-m),c),E=_*(_+2*m)+h):(v=Math.max(0,-(f*c+p)),_=v>0?c:Math.min(Math.max(-c,-m),c),E=-v*v+_*(_+2*m)+h);else _=f>0?-c:c,v=Math.max(0,-(f*_+p)),E=-v*v+_*(_+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(ch).addScaledVector(Bc,_),E}intersectSphere(e,i){ba.subVectors(e.center,this.origin);const s=ba.dot(this.direction),l=ba.dot(ba)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,p,m;const h=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(s=(e.min.x-_.x)*h,l=(e.max.x-_.x)*h):(s=(e.max.x-_.x)*h,l=(e.min.x-_.x)*h),x>=0?(c=(e.min.y-_.y)*x,f=(e.max.y-_.y)*x):(c=(e.max.y-_.y)*x,f=(e.min.y-_.y)*x),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(p=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(p=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ba)!==null}intersectTriangle(e,i,s,l,c){uh.subVectors(i,e),zc.subVectors(s,e),fh.crossVectors(uh,zc);let f=this.direction.dot(fh),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;cs.subVectors(this.origin,e);const m=p*this.direction.dot(zc.crossVectors(cs,zc));if(m<0)return null;const h=p*this.direction.dot(uh.cross(cs));if(h<0||m+h>f)return null;const x=-p*cs.dot(fh);return x<0?null:this.at(x/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dx extends gl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zs,this.combine=ox,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const a_=new xn,Is=new wx,Hc=new Tu,s_=new de,Gc=new de,Vc=new de,kc=new de,dh=new de,jc=new de,r_=new de,Xc=new de;class Ei extends Yn{constructor(e=new Gi,i=new Dx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){jc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=p[m],v=c[m];x!==0&&(dh.fromBufferAttribute(v,e),f?jc.addScaledVector(dh,x):jc.addScaledVector(dh.sub(i),x))}i.add(jc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(c),Is.copy(e.ray).recast(e.near),!(Hc.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Hc,s_)===null||Is.origin.distanceToSquared(s_)>(e.far-e.near)**2))&&(a_.copy(c).invert(),Is.copy(e.ray).applyMatrix4(a_),!(s.boundingBox!==null&&Is.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Is)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,v=c.attributes.normal,_=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(f))for(let T=0,R=_.length;T<R;T++){const S=_[T],y=f[S.materialIndex],N=Math.max(S.start,E.start),U=Math.min(p.count,Math.min(S.start+S.count,E.start+E.count));for(let L=N,j=U;L<j;L+=3){const P=p.getX(L),I=p.getX(L+1),A=p.getX(L+2);l=Wc(this,y,e,s,h,x,v,P,I,A),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),R=Math.min(p.count,E.start+E.count);for(let S=T,y=R;S<y;S+=3){const N=p.getX(S),U=p.getX(S+1),L=p.getX(S+2);l=Wc(this,f,e,s,h,x,v,N,U,L),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,R=_.length;T<R;T++){const S=_[T],y=f[S.materialIndex],N=Math.max(S.start,E.start),U=Math.min(m.count,Math.min(S.start+S.count,E.start+E.count));for(let L=N,j=U;L<j;L+=3){const P=L,I=L+1,A=L+2;l=Wc(this,y,e,s,h,x,v,P,I,A),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),R=Math.min(m.count,E.start+E.count);for(let S=T,y=R;S<y;S+=3){const N=S,U=S+1,L=S+2;l=Wc(this,f,e,s,h,x,v,N,U,L),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function XE(r,e,i,s,l,c,f,p){let m;if(e.side===qn?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,e.side===ps,p),m===null)return null;Xc.copy(p),Xc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Xc);return h<i.near||h>i.far?null:{distance:h,point:Xc.clone(),object:r}}function Wc(r,e,i,s,l,c,f,p,m,h){r.getVertexPosition(p,Gc),r.getVertexPosition(m,Vc),r.getVertexPosition(h,kc);const x=XE(r,e,i,s,Gc,Vc,kc,r_);if(x){const v=new de;Pi.getBarycoord(r_,Gc,Vc,kc,v),l&&(x.uv=Pi.getInterpolatedAttribute(l,p,m,h,v,new ht)),c&&(x.uv1=Pi.getInterpolatedAttribute(c,p,m,h,v,new ht)),f&&(x.normal=Pi.getInterpolatedAttribute(f,p,m,h,v,new de),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const _={a:p,b:m,c:h,normal:new de,materialIndex:0};Pi.getNormal(Gc,Vc,kc,_.normal),x.face=_,x.barycoord=v}return x}class Nx extends zn{constructor(e=null,i=1,s=1,l,c,f,p,m,h=Nn,x=Nn,v,_){super(null,f,p,m,h,x,l,c,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hh=new de,WE=new de,qE=new dt;class zs{constructor(e=new de(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=hh.subVectors(s,i).cross(WE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(hh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||qE.getNormalMatrix(e),l=this.coplanarPoint(hh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new Tu,YE=new ht(.5,.5),qc=new de;class Ux{constructor(e=new zs,i=new zs,s=new zs,l=new zs,c=new zs,f=new zs){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ki,s=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],x=c[4],v=c[5],_=c[6],E=c[7],T=c[8],R=c[9],S=c[10],y=c[11],N=c[12],U=c[13],L=c[14],j=c[15];if(l[0].setComponents(h-f,E-x,y-T,j-N).normalize(),l[1].setComponents(h+f,E+x,y+T,j+N).normalize(),l[2].setComponents(h+p,E+v,y+R,j+U).normalize(),l[3].setComponents(h-p,E-v,y-R,j-U).normalize(),s)l[4].setComponents(m,_,S,L).normalize(),l[5].setComponents(h-m,E-_,y-S,j-L).normalize();else if(l[4].setComponents(h-m,E-_,y-S,j-L).normalize(),i===Ki)l[5].setComponents(h+m,E+_,y+S,j+L).normalize();else if(i===pu)l[5].setComponents(m,_,S,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);const i=YE.distanceTo(e.center);return Fs.radius=.7071067811865476+i,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(qc.x=l.normal.x>0?e.max.x:e.min.x,qc.y=l.normal.y>0?e.max.y:e.min.y,qc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ZE extends gl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gu=new de,vu=new de,o_=new xn,il=new wx,Yc=new Tu,ph=new de,l_=new de;class KE extends Yn{constructor(e=new Gi,i=new ZE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)gu.fromBufferAttribute(i,l-1),vu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=gu.distanceTo(vu);e.setAttribute("lineDistance",new Hi(s,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Yc.copy(s.boundingSphere),Yc.applyMatrix4(l),Yc.radius+=c,e.ray.intersectsSphere(Yc)===!1)return;o_.copy(l).invert(),il.copy(e.ray).applyMatrix4(o_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,x=s.index,_=s.attributes.position;if(x!==null){const E=Math.max(0,f.start),T=Math.min(x.count,f.start+f.count);for(let R=E,S=T-1;R<S;R+=h){const y=x.getX(R),N=x.getX(R+1),U=Zc(this,e,il,m,y,N,R);U&&i.push(U)}if(this.isLineLoop){const R=x.getX(T-1),S=x.getX(E),y=Zc(this,e,il,m,R,S,T-1);y&&i.push(y)}}else{const E=Math.max(0,f.start),T=Math.min(_.count,f.start+f.count);for(let R=E,S=T-1;R<S;R+=h){const y=Zc(this,e,il,m,R,R+1,R);y&&i.push(y)}if(this.isLineLoop){const R=Zc(this,e,il,m,T-1,E,T-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Zc(r,e,i,s,l,c,f){const p=r.geometry.attributes.position;if(gu.fromBufferAttribute(p,l),vu.fromBufferAttribute(p,c),i.distanceSqToSegment(gu,vu,ph,l_)>s)return;ph.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(ph);if(!(h<e.near||h>e.far))return{distance:h,point:l_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const c_=new de,u_=new de;class QE extends KE{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)c_.fromBufferAttribute(i,l),u_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+c_.distanceTo(u_);e.setAttribute("lineDistance",new Hi(s,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lx extends zn{constructor(e=[],i=qs,s,l,c,f,p,m,h,x){super(e,i,s,l,c,f,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yr extends zn{constructor(e,i,s=Ji,l,c,f,p=Nn,m=Nn,h,x=wa,v=1){if(x!==wa&&x!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,l,c,f,p,m,x,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ip(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class JE extends Yr{constructor(e,i=Ji,s=qs,l,c,f=Nn,p=Nn,m,h=wa){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,i,s,l,c,f,p,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ox extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vl extends Gi{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],x=[],v=[];let _=0,E=0;T("z","y","x",-1,-1,s,i,e,f,c,0),T("z","y","x",1,-1,s,i,-e,f,c,1),T("x","z","y",1,1,e,s,i,l,f,2),T("x","z","y",1,-1,e,s,-i,l,f,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Hi(h,3)),this.setAttribute("normal",new Hi(x,3)),this.setAttribute("uv",new Hi(v,2));function T(R,S,y,N,U,L,j,P,I,A,z){const K=L/I,G=j/A,k=L/2,se=j/2,ce=P/2,Y=I+1,O=A+1;let H=0,re=0;const _e=new de;for(let ye=0;ye<O;ye++){const F=ye*G-se;for(let te=0;te<Y;te++){const Te=te*K-k;_e[R]=Te*N,_e[S]=F*U,_e[y]=ce,h.push(_e.x,_e.y,_e.z),_e[R]=0,_e[S]=0,_e[y]=P>0?1:-1,x.push(_e.x,_e.y,_e.z),v.push(te/I),v.push(1-ye/A),H+=1}}for(let ye=0;ye<A;ye++)for(let F=0;F<I;F++){const te=_+F+Y*ye,Te=_+F+Y*(ye+1),Ce=_+(F+1)+Y*(ye+1),Le=_+(F+1)+Y*ye;m.push(te,Te,Le),m.push(Te,Ce,Le),re+=6}p.addGroup(E,re,z),E+=re,_+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xs extends Gi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,x=m+1,v=e/p,_=i/m,E=[],T=[],R=[],S=[];for(let y=0;y<x;y++){const N=y*_-f;for(let U=0;U<h;U++){const L=U*v-c;T.push(L,-N,0),R.push(0,0,1),S.push(U/p),S.push(1-y/m)}}for(let y=0;y<m;y++)for(let N=0;N<p;N++){const U=N+h*y,L=N+h*(y+1),j=N+1+h*(y+1),P=N+1+h*y;E.push(U,L,P),E.push(L,j,P)}this.setIndex(E),this.setAttribute("position",new Hi(T,3)),this.setAttribute("normal",new Hi(R,3)),this.setAttribute("uv",new Hi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.widthSegments,e.heightSegments)}}function Zr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(f_(l))l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(f_(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Bn(r){const e={};for(let i=0;i<r.length;i++){const s=Zr(r[i]);for(const l in s)e[l]=s[l]}return e}function f_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function $E(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Px(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const eb={clone:Zr,merge:Bn};var tb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends gl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tb,this.fragmentShader=nb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=$E(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ol extends ea{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ib extends gl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ab extends gl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kc=new de,Qc=new eo,qi=new de;class _u extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kc,Qc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Qc,qi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Kc,Qc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Qc,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const us=new de,d_=new ht,h_=new ht;class Oi extends _u{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=pp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pp*2*Math.atan(Math.tan(jd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,i){return this.getViewBounds(e,d_,h_),i.subVectors(h_,d_)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(jd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/h,l*=f.width/m,s*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Ix extends _u{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Hr=-90,Gr=1;class sb extends Yn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Oi(Hr,Gr,e,i);l.layers=this.layers,this.add(l);const c=new Oi(Hr,Gr,e,i);c.layers=this.layers,this.add(c);const f=new Oi(Hr,Gr,e,i);f.layers=this.layers,this.add(f);const p=new Oi(Hr,Gr,e,i);p.layers=this.layers,this.add(p);const m=new Oi(Hr,Gr,e,i);m.layers=this.layers,this.add(m);const h=new Oi(Hr,Gr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===Ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===pu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,x]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(v,_,E),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class rb extends Oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ob{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,st("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Gp=class Gp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Gp.prototype.isMatrix2=!0;let p_=Gp;function m_(r,e,i,s){const l=lb(s);switch(i){case Sx:return r*e;case Mx:return r*e/l.components*l.byteLength;case Np:return r*e/l.components*l.byteLength;case Ys:return r*e*2/l.components*l.byteLength;case Up:return r*e*2/l.components*l.byteLength;case yx:return r*e*3/l.components*l.byteLength;case Mi:return r*e*4/l.components*l.byteLength;case Lp:return r*e*4/l.components*l.byteLength;case iu:case au:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case su:case ru:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bh:case Hh:return Math.max(r,16)*Math.max(e,8)/4;case Fh:case zh:return Math.max(r,8)*Math.max(e,8)/2;case Gh:case Vh:case jh:case Xh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kh:case uu:case Wh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $h:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ep:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case tp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case np:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ip:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ap:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case sp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case rp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case op:case lp:case cp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case up:case fp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case fu:case dp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lb(r){switch(r){case yi:case gx:return{byteLength:1,components:1};case ul:case vx:case $i:return{byteLength:2,components:1};case wp:case Dp:return{byteLength:2,components:4};case Ji:case Cp:case Ii:return{byteLength:4,components:1};case _x:case xx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rp}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rp);function Fx(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function cb(r){const e=new WeakMap;function i(p,m){const h=p.array,x=p.usage,v=h.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,h,x),p.onUploadCallback();let E;if(h instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=r.SHORT;else if(h instanceof Uint32Array)E=r.UNSIGNED_INT;else if(h instanceof Int32Array)E=r.INT;else if(h instanceof Int8Array)E=r.BYTE;else if(h instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function s(p,m,h){const x=m.array,v=m.updateRanges;if(r.bindBuffer(h,p),v.length===0)r.bufferSubData(h,0,x);else{v.sort((E,T)=>E.start-T.start);let _=0;for(let E=1;E<v.length;E++){const T=v[_],R=v[E];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++_,v[_]=R)}v.length=_+1;for(let E=0,T=v.length;E<T;E++){const R=v[E];r.bufferSubData(h,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=e.get(p);(!x||x.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var ub=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,db=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_b=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Eb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Lb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ob=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ib=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$b=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,n2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,i2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,l2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,c2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,u2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,h2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,R2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,w2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,O2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,H2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,q2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Y2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Z2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,K2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,J2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_T=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:ub,alphahash_pars_fragment:fb,alphamap_fragment:db,alphamap_pars_fragment:hb,alphatest_fragment:pb,alphatest_pars_fragment:mb,aomap_fragment:gb,aomap_pars_fragment:vb,batching_pars_vertex:_b,batching_vertex:xb,begin_vertex:Sb,beginnormal_vertex:yb,bsdfs:Mb,iridescence_fragment:Eb,bumpmap_pars_fragment:bb,clipping_planes_fragment:Tb,clipping_planes_pars_fragment:Ab,clipping_planes_pars_vertex:Rb,clipping_planes_vertex:Cb,color_fragment:wb,color_pars_fragment:Db,color_pars_vertex:Nb,color_vertex:Ub,common:Lb,cube_uv_reflection_fragment:Ob,defaultnormal_vertex:Pb,displacementmap_pars_vertex:Ib,displacementmap_vertex:Fb,emissivemap_fragment:Bb,emissivemap_pars_fragment:zb,colorspace_fragment:Hb,colorspace_pars_fragment:Gb,envmap_fragment:Vb,envmap_common_pars_fragment:kb,envmap_pars_fragment:jb,envmap_pars_vertex:Xb,envmap_physical_pars_fragment:n2,envmap_vertex:Wb,fog_vertex:qb,fog_pars_vertex:Yb,fog_fragment:Zb,fog_pars_fragment:Kb,gradientmap_pars_fragment:Qb,lightmap_pars_fragment:Jb,lights_lambert_fragment:$b,lights_lambert_pars_fragment:e2,lights_pars_begin:t2,lights_toon_fragment:i2,lights_toon_pars_fragment:a2,lights_phong_fragment:s2,lights_phong_pars_fragment:r2,lights_physical_fragment:o2,lights_physical_pars_fragment:l2,lights_fragment_begin:c2,lights_fragment_maps:u2,lights_fragment_end:f2,lightprobes_pars_fragment:d2,logdepthbuf_fragment:h2,logdepthbuf_pars_fragment:p2,logdepthbuf_pars_vertex:m2,logdepthbuf_vertex:g2,map_fragment:v2,map_pars_fragment:_2,map_particle_fragment:x2,map_particle_pars_fragment:S2,metalnessmap_fragment:y2,metalnessmap_pars_fragment:M2,morphinstance_vertex:E2,morphcolor_vertex:b2,morphnormal_vertex:T2,morphtarget_pars_vertex:A2,morphtarget_vertex:R2,normal_fragment_begin:C2,normal_fragment_maps:w2,normal_pars_fragment:D2,normal_pars_vertex:N2,normal_vertex:U2,normalmap_pars_fragment:L2,clearcoat_normal_fragment_begin:O2,clearcoat_normal_fragment_maps:P2,clearcoat_pars_fragment:I2,iridescence_pars_fragment:F2,opaque_fragment:B2,packing:z2,premultiplied_alpha_fragment:H2,project_vertex:G2,dithering_fragment:V2,dithering_pars_fragment:k2,roughnessmap_fragment:j2,roughnessmap_pars_fragment:X2,shadowmap_pars_fragment:W2,shadowmap_pars_vertex:q2,shadowmap_vertex:Y2,shadowmask_pars_fragment:Z2,skinbase_vertex:K2,skinning_pars_vertex:Q2,skinning_vertex:J2,skinnormal_vertex:$2,specularmap_fragment:eT,specularmap_pars_fragment:tT,tonemapping_fragment:nT,tonemapping_pars_fragment:iT,transmission_fragment:aT,transmission_pars_fragment:sT,uv_pars_fragment:rT,uv_pars_vertex:oT,uv_vertex:lT,worldpos_vertex:cT,background_vert:uT,background_frag:fT,backgroundCube_vert:dT,backgroundCube_frag:hT,cube_vert:pT,cube_frag:mT,depth_vert:gT,depth_frag:vT,distance_vert:_T,distance_frag:xT,equirect_vert:ST,equirect_frag:yT,linedashed_vert:MT,linedashed_frag:ET,meshbasic_vert:bT,meshbasic_frag:TT,meshlambert_vert:AT,meshlambert_frag:RT,meshmatcap_vert:CT,meshmatcap_frag:wT,meshnormal_vert:DT,meshnormal_frag:NT,meshphong_vert:UT,meshphong_frag:LT,meshphysical_vert:OT,meshphysical_frag:PT,meshtoon_vert:IT,meshtoon_frag:FT,points_vert:BT,points_frag:zT,shadow_vert:HT,shadow_frag:GT,sprite_vert:VT,sprite_frag:kT},Ve={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new de},probesMax:{value:new de},probesResolution:{value:new de}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Zi={basic:{uniforms:Bn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Bn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Bn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Bn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Bn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Bt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Bn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Bn([Ve.points,Ve.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Bn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Bn([Ve.common,Ve.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Bn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Bn([Ve.sprite,Ve.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Bn([Ve.common,Ve.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Bn([Ve.lights,Ve.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Zi.physical={uniforms:Bn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Jc={r:0,b:0,g:0},jT=new xn,Bx=new dt;Bx.set(-1,0,0,0,1,0,0,0,1);function XT(r,e,i,s,l,c){const f=new Bt(0);let p=l===!0?0:1,m,h,x=null,v=0,_=null;function E(N){let U=N.isScene===!0?N.background:null;if(U&&U.isTexture){const L=N.backgroundBlurriness>0;U=e.get(U,L)}return U}function T(N){let U=!1;const L=E(N);L===null?S(f,p):L&&L.isColor&&(S(L,1),U=!0);const j=r.xr.getEnvironmentBlendMode();j==="additive"?i.buffers.color.setClear(0,0,0,1,c):j==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||U)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(N,U){const L=E(U);L&&(L.isCubeTexture||L.mapping===bu)?(h===void 0&&(h=new Ei(new vl(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:Zr(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(j,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=L,h.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jT.makeRotationFromEuler(U.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Bx),h.material.toneMapped=wt.getTransfer(L.colorSpace)!==Xt,(x!==L||v!==L.version||_!==r.toneMapping)&&(h.material.needsUpdate=!0,x=L,v=L.version,_=r.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Ei(new Xs(2,2),new ea({name:"BackgroundMaterial",uniforms:Zr(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=wt.getTransfer(L.colorSpace)!==Xt,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||v!==L.version||_!==r.toneMapping)&&(m.material.needsUpdate=!0,x=L,v=L.version,_=r.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function S(N,U){N.getRGB(Jc,Px(r)),i.buffers.color.setClear(Jc.r,Jc.g,Jc.b,U,c)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(N,U=1){f.set(N),p=U,S(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,S(f,p)},render:T,addToRenderList:R,dispose:y}}function WT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,f=!1;function p(G,k,se,ce,Y){let O=!1;const H=v(G,ce,se,k);c!==H&&(c=H,h(c.object)),O=E(G,ce,se,Y),O&&T(G,ce,se,Y),Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,L(G,k,se,ce),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function m(){return r.createVertexArray()}function h(G){return r.bindVertexArray(G)}function x(G){return r.deleteVertexArray(G)}function v(G,k,se,ce){const Y=ce.wireframe===!0;let O=s[k.id];O===void 0&&(O={},s[k.id]=O);const H=G.isInstancedMesh===!0?G.id:0;let re=O[H];re===void 0&&(re={},O[H]=re);let _e=re[se.id];_e===void 0&&(_e={},re[se.id]=_e);let ye=_e[Y];return ye===void 0&&(ye=_(m()),_e[Y]=ye),ye}function _(G){const k=[],se=[],ce=[];for(let Y=0;Y<i;Y++)k[Y]=0,se[Y]=0,ce[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:se,attributeDivisors:ce,object:G,attributes:{},index:null}}function E(G,k,se,ce){const Y=c.attributes,O=k.attributes;let H=0;const re=se.getAttributes();for(const _e in re)if(re[_e].location>=0){const F=Y[_e];let te=O[_e];if(te===void 0&&(_e==="instanceMatrix"&&G.instanceMatrix&&(te=G.instanceMatrix),_e==="instanceColor"&&G.instanceColor&&(te=G.instanceColor)),F===void 0||F.attribute!==te||te&&F.data!==te.data)return!0;H++}return c.attributesNum!==H||c.index!==ce}function T(G,k,se,ce){const Y={},O=k.attributes;let H=0;const re=se.getAttributes();for(const _e in re)if(re[_e].location>=0){let F=O[_e];F===void 0&&(_e==="instanceMatrix"&&G.instanceMatrix&&(F=G.instanceMatrix),_e==="instanceColor"&&G.instanceColor&&(F=G.instanceColor));const te={};te.attribute=F,F&&F.data&&(te.data=F.data),Y[_e]=te,H++}c.attributes=Y,c.attributesNum=H,c.index=ce}function R(){const G=c.newAttributes;for(let k=0,se=G.length;k<se;k++)G[k]=0}function S(G){y(G,0)}function y(G,k){const se=c.newAttributes,ce=c.enabledAttributes,Y=c.attributeDivisors;se[G]=1,ce[G]===0&&(r.enableVertexAttribArray(G),ce[G]=1),Y[G]!==k&&(r.vertexAttribDivisor(G,k),Y[G]=k)}function N(){const G=c.newAttributes,k=c.enabledAttributes;for(let se=0,ce=k.length;se<ce;se++)k[se]!==G[se]&&(r.disableVertexAttribArray(se),k[se]=0)}function U(G,k,se,ce,Y,O,H){H===!0?r.vertexAttribIPointer(G,k,se,Y,O):r.vertexAttribPointer(G,k,se,ce,Y,O)}function L(G,k,se,ce){R();const Y=ce.attributes,O=se.getAttributes(),H=k.defaultAttributeValues;for(const re in O){const _e=O[re];if(_e.location>=0){let ye=Y[re];if(ye===void 0&&(re==="instanceMatrix"&&G.instanceMatrix&&(ye=G.instanceMatrix),re==="instanceColor"&&G.instanceColor&&(ye=G.instanceColor)),ye!==void 0){const F=ye.normalized,te=ye.itemSize,Te=e.get(ye);if(Te===void 0)continue;const Ce=Te.buffer,Le=Te.type,ie=Te.bytesPerElement,Re=Le===r.INT||Le===r.UNSIGNED_INT||ye.gpuType===Cp;if(ye.isInterleavedBufferAttribute){const Ae=ye.data,Be=Ae.stride,Ze=ye.offset;if(Ae.isInstancedInterleavedBuffer){for(let Ke=0;Ke<_e.locationSize;Ke++)y(_e.location+Ke,Ae.meshPerAttribute);G.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ke=0;Ke<_e.locationSize;Ke++)S(_e.location+Ke);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Ke=0;Ke<_e.locationSize;Ke++)U(_e.location+Ke,te/_e.locationSize,Le,F,Be*ie,(Ze+te/_e.locationSize*Ke)*ie,Re)}else{if(ye.isInstancedBufferAttribute){for(let Ae=0;Ae<_e.locationSize;Ae++)y(_e.location+Ae,ye.meshPerAttribute);G.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ae=0;Ae<_e.locationSize;Ae++)S(_e.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Ae=0;Ae<_e.locationSize;Ae++)U(_e.location+Ae,te/_e.locationSize,Le,F,te*ie,te/_e.locationSize*Ae*ie,Re)}}else if(H!==void 0){const F=H[re];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(_e.location,F);break;case 3:r.vertexAttrib3fv(_e.location,F);break;case 4:r.vertexAttrib4fv(_e.location,F);break;default:r.vertexAttrib1fv(_e.location,F)}}}}N()}function j(){z();for(const G in s){const k=s[G];for(const se in k){const ce=k[se];for(const Y in ce){const O=ce[Y];for(const H in O)x(O[H].object),delete O[H];delete ce[Y]}}delete s[G]}}function P(G){if(s[G.id]===void 0)return;const k=s[G.id];for(const se in k){const ce=k[se];for(const Y in ce){const O=ce[Y];for(const H in O)x(O[H].object),delete O[H];delete ce[Y]}}delete s[G.id]}function I(G){for(const k in s){const se=s[k];for(const ce in se){const Y=se[ce];if(Y[G.id]===void 0)continue;const O=Y[G.id];for(const H in O)x(O[H].object),delete O[H];delete Y[G.id]}}}function A(G){for(const k in s){const se=s[k],ce=G.isInstancedMesh===!0?G.id:0,Y=se[ce];if(Y!==void 0){for(const O in Y){const H=Y[O];for(const re in H)x(H[re].object),delete H[re];delete Y[O]}delete se[ce],Object.keys(se).length===0&&delete s[k]}}}function z(){K(),f=!0,c!==l&&(c=l,h(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:z,resetDefaultState:K,dispose:j,releaseStatesOfGeometry:P,releaseStatesOfObject:A,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:S,disableUnusedAttributes:N}}function qT(r,e,i){let s;function l(m){s=m}function c(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function f(m,h,x){x!==0&&(r.drawArraysInstanced(s,m,h,x),i.update(h,s,x))}function p(m,h,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,x);let _=0;for(let E=0;E<x;E++)_+=h[E];i.update(_,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function YT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Mi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const A=I===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==yi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ii&&!A)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(st("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),j=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:L,maxSamples:j,samples:P}}function ZT(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new zs,p=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const E=v.length!==0||_||s!==0||l;return l=_,s=v.length,E},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){i=x(v,_,0)},this.setState=function(v,_,E){const T=v.clippingPlanes,R=v.clipIntersection,S=v.clipShadows,y=r.get(v);if(!l||T===null||T.length===0||c&&!S)c?x(null):h();else{const N=c?0:s,U=N*4;let L=y.clippingState||null;m.value=L,L=x(T,_,U,E);for(let j=0;j!==U;++j)L[j]=i[j];y.clippingState=L,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(v,_,E,T){const R=v!==null?v.length:0;let S=null;if(R!==0){if(S=m.value,T!==!0||S===null){const y=E+R*4,N=_.matrixWorldInverse;p.getNormalMatrix(N),(S===null||S.length<y)&&(S=new Float32Array(y));for(let U=0,L=E;U!==R;++U,L+=4)f.copy(v[U]).applyMatrix4(N,p),f.normal.toArray(S,L),S[L+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}const ds=4,g_=[.125,.215,.35,.446,.526,.582],Gs=20,KT=256,al=new Ix,v_=new Bt;let mh=null,gh=0,vh=0,_h=!1;const QT=new de;class __{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=QT}=c;mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mh,gh,vh),this._renderer.xr.enabled=_h,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===qs||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:$i,format:Mi,colorSpace:du,depthBuffer:!1},l=x_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=x_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=JT(c)),this._blurMaterial=eA(c,e,i),this._ggxMaterial=$T(c,e,i)}return l}_compileMaterial(e){const i=new Ei(new Gi,e);this._renderer.compile(i,al)}_sceneToCubeUV(e,i,s,l,c){const m=new Oi(90,1,i,s),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,E=v.toneMapping;v.getClearColor(v_),v.toneMapping=Qi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ei(new vl,new Dx({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let y=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,y=!0):(S.color.copy(v_),y=!0);for(let U=0;U<6;U++){const L=U%3;L===0?(m.up.set(0,h[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[U],c.y,c.z)):L===1?(m.up.set(0,0,h[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[U],c.z)):(m.up.set(0,h[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[U]));const j=this._cubeSize;Vr(l,L*j,U>2?j:0,j,j),v.setRenderTarget(l),y&&v.render(R,m),v.render(e,m)}v.toneMapping=E,v.autoClear=_,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===qs||e.mapping===qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Vr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,al)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,h=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-x*x),_=0+h*1.25,E=v*_,{_lodMax:T}=this,R=this._sizeLods[s],S=3*R*(s>T-ds?s-T+ds:0),y=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=T-i,Vr(c,S,y,3*R,2*R),l.setRenderTarget(c),l.render(p,al),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Vr(e,S,y,3*R,2*R),l.setRenderTarget(e),l.render(p,al)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[l];v.material=h;const _=h.uniforms,E=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Gs-1),R=c/T,S=isFinite(c)?1+Math.floor(x*R):Gs;S>Gs&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Gs}`);const y=[];let N=0;for(let I=0;I<Gs;++I){const A=I/R,z=Math.exp(-A*A/2);y.push(z),I===0?N+=z:I<S&&(N+=2*z)}for(let I=0;I<y.length;I++)y[I]=y[I]/N;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=f==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:U}=this;_.dTheta.value=T,_.mipInt.value=U-s;const L=this._sizeLods[l],j=3*L*(l>U-ds?l-U+ds:0),P=4*(this._cubeSize-L);Vr(i,j,P,3*L,2*L),m.setRenderTarget(i),m.render(v,al)}}function JT(r){const e=[],i=[],s=[];let l=r;const c=r-ds+1+g_.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>r-ds?m=g_[f-r+ds-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,v=1+h,_=[x,x,v,x,v,v,x,x,v,v,x,v],E=6,T=6,R=3,S=2,y=1,N=new Float32Array(R*T*E),U=new Float32Array(S*T*E),L=new Float32Array(y*T*E);for(let P=0;P<E;P++){const I=P%3*2/3-1,A=P>2?0:-1,z=[I,A,0,I+2/3,A,0,I+2/3,A+1,0,I,A,0,I+2/3,A+1,0,I,A+1,0];N.set(z,R*T*P),U.set(_,S*T*P);const K=[P,P,P,P,P,P];L.set(K,y*T*P)}const j=new Gi;j.setAttribute("position",new zi(N,R)),j.setAttribute("uv",new zi(U,S)),j.setAttribute("faceIndex",new zi(L,y)),s.push(new Ei(j,null)),l>ds&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function x_(r,e,i){const s=new Bi(r,e,i);return s.texture.mapping=bu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Vr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function $T(r,e,i){return new ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:KT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Au(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function eA(r,e,i){const s=new Float32Array(Gs),l=new de(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function S_(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function y_(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class zx extends Bi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Lx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new vl(5,5,5),c=new ea({name:"CubemapFromEquirect",uniforms:Zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:Aa});c.uniforms.tEquirect.value=i;const f=new Ei(l,c),p=i.minFilter;return i.minFilter===ks&&(i.minFilter=_n),new sb(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function tA(r){let e=new WeakMap,i=new WeakMap,s=null;function l(_,E=!1){return _==null?null:E?f(_):c(_)}function c(_){if(_&&_.isTexture){const E=_.mapping;if(E===Gd||E===Vd)if(e.has(_)){const T=e.get(_).texture;return p(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const R=new zx(T.height);return R.fromEquirectangularTexture(r,_),e.set(_,R),_.addEventListener("dispose",h),p(R.texture,_.mapping)}else return null}}return _}function f(_){if(_&&_.isTexture){const E=_.mapping,T=E===Gd||E===Vd,R=E===qs||E===qr;if(T||R){let S=i.get(_);const y=S!==void 0?S.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return s===null&&(s=new __(r)),S=T?s.fromEquirectangular(_,S):s.fromCubemap(_,S),S.texture.pmremVersion=_.pmremVersion,i.set(_,S),S.texture;if(S!==void 0)return S.texture;{const N=_.image;return T&&N&&N.height>0||R&&N&&m(N)?(s===null&&(s=new __(r)),S=T?s.fromEquirectangular(_):s.fromCubemap(_),S.texture.pmremVersion=_.pmremVersion,i.set(_,S),_.addEventListener("dispose",x),S.texture):null}}}return _}function p(_,E){return E===Gd?_.mapping=qs:E===Vd&&(_.mapping=qr),_}function m(_){let E=0;const T=6;for(let R=0;R<T;R++)_[R]!==void 0&&E++;return E===T}function h(_){const E=_.target;E.removeEventListener("dispose",h);const T=e.get(E);T!==void 0&&(e.delete(E),T.dispose())}function x(_){const E=_.target;E.removeEventListener("dispose",x);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function nA(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&hp("WebGLRenderer: "+s+" extension not supported."),l}}}function iA(r,e,i,s){const l={},c=new WeakMap;function f(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);_.removeEventListener("dispose",f),delete l[_.id];const E=c.get(_);E&&(e.remove(E),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(v,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const E in _)e.update(_[E],r.ARRAY_BUFFER)}function h(v){const _=[],E=v.index,T=v.attributes.position;let R=0;if(T===void 0)return;if(E!==null){const N=E.array;R=E.version;for(let U=0,L=N.length;U<L;U+=3){const j=N[U+0],P=N[U+1],I=N[U+2];_.push(j,P,P,I,I,j)}}else{const N=T.array;R=T.version;for(let U=0,L=N.length/3-1;U<L;U+=3){const j=U+0,P=U+1,I=U+2;_.push(j,P,P,I,I,j)}}const S=new(T.count>=65535?Cx:Rx)(_,1);S.version=R;const y=c.get(v);y&&e.remove(y),c.set(v,S)}function x(v){const _=c.get(v);if(_){const E=v.index;E!==null&&_.version<E.version&&h(v)}else h(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:x}}function aA(r,e,i){let s;function l(v){s=v}let c,f;function p(v){c=v.type,f=v.bytesPerElement}function m(v,_){r.drawElements(s,_,c,v*f),i.update(_,s,1)}function h(v,_,E){E!==0&&(r.drawElementsInstanced(s,_,c,v*f,E),i.update(_,s,E))}function x(v,_,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,c,v,0,E);let R=0;for(let S=0;S<E;S++)R+=_[S];i.update(R,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x}function sA(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Nt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function rA(r,e,i){const s=new WeakMap,l=new ln;function c(f,p,m){const h=f.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=x!==void 0?x.length:0;let _=s.get(p);if(_===void 0||_.count!==v){let K=function(){A.dispose(),s.delete(p),p.removeEventListener("dispose",K)};var E=K;_!==void 0&&_.texture.dispose();const T=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],N=p.morphAttributes.normal||[],U=p.morphAttributes.color||[];let L=0;T===!0&&(L=1),R===!0&&(L=2),S===!0&&(L=3);let j=p.attributes.position.count*L,P=1;j>e.maxTextureSize&&(P=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const I=new Float32Array(j*P*4*v),A=new bx(I,j,P,v);A.type=Ii,A.needsUpdate=!0;const z=L*4;for(let G=0;G<v;G++){const k=y[G],se=N[G],ce=U[G],Y=j*P*4*G;for(let O=0;O<k.count;O++){const H=O*z;T===!0&&(l.fromBufferAttribute(k,O),I[Y+H+0]=l.x,I[Y+H+1]=l.y,I[Y+H+2]=l.z,I[Y+H+3]=0),R===!0&&(l.fromBufferAttribute(se,O),I[Y+H+4]=l.x,I[Y+H+5]=l.y,I[Y+H+6]=l.z,I[Y+H+7]=0),S===!0&&(l.fromBufferAttribute(ce,O),I[Y+H+8]=l.x,I[Y+H+9]=l.y,I[Y+H+10]=l.z,I[Y+H+11]=ce.itemSize===4?l.w:1)}}_={count:v,texture:A,size:new ht(j,P)},s.set(p,_),p.addEventListener("dispose",K)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let T=0;for(let S=0;S<h.length;S++)T+=h[S];const R=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function oA(r,e,i,s,l){let c=new WeakMap;function f(h){const x=l.render.frame,v=h.geometry,_=e.get(h,v);if(c.get(_)!==x&&(e.update(_),c.set(_,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==x&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const E=h.skeleton;c.get(E)!==x&&(E.update(),c.set(E,x))}return _}function p(){c=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:f,dispose:p}}const lA={[lx]:"LINEAR_TONE_MAPPING",[cx]:"REINHARD_TONE_MAPPING",[ux]:"CINEON_TONE_MAPPING",[fx]:"ACES_FILMIC_TONE_MAPPING",[hx]:"AGX_TONE_MAPPING",[px]:"NEUTRAL_TONE_MAPPING",[dx]:"CUSTOM_TONE_MAPPING"};function cA(r,e,i,s,l){const c=new Bi(e,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Yr(e,i):void 0}),f=new Bi(e,i,{type:$i,depthBuffer:!1,stencilBuffer:!1}),p=new Gi;p.setAttribute("position",new Hi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Hi([0,2,0,0,2,0],2));const m=new ol({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ei(p,m),x=new Ix(-1,1,1,-1,0,1);let v=null,_=null,E=!1,T,R=null,S=[],y=!1;this.setSize=function(N,U){c.setSize(N,U),f.setSize(N,U);for(let L=0;L<S.length;L++){const j=S[L];j.setSize&&j.setSize(N,U)}},this.setEffects=function(N){S=N,y=S.length>0&&S[0].isRenderPass===!0;const U=c.width,L=c.height;for(let j=0;j<S.length;j++){const P=S[j];P.setSize&&P.setSize(U,L)}},this.begin=function(N,U){if(E||N.toneMapping===Qi&&S.length===0)return!1;if(R=U,U!==null){const L=U.width,j=U.height;(c.width!==L||c.height!==j)&&this.setSize(L,j)}return y===!1&&N.setRenderTarget(c),T=N.toneMapping,N.toneMapping=Qi,!0},this.hasRenderPass=function(){return y},this.end=function(N,U){N.toneMapping=T,E=!0;let L=c,j=f;for(let P=0;P<S.length;P++){const I=S[P];if(I.enabled!==!1&&(I.render(N,j,L,U),I.needsSwap!==!1)){const A=L;L=j,j=A}}if(v!==N.outputColorSpace||_!==N.toneMapping){v=N.outputColorSpace,_=N.toneMapping,m.defines={},wt.getTransfer(v)===Xt&&(m.defines.SRGB_TRANSFER="");const P=lA[_];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,N.setRenderTarget(R),N.render(h,x),R=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const Hx=new zn,mp=new Yr(1,1),Gx=new bx,Vx=new LE,kx=new Lx,M_=[],E_=[],b_=new Float32Array(16),T_=new Float32Array(9),A_=new Float32Array(4);function to(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=M_[l];if(c===void 0&&(c=new Float32Array(l),M_[l]=c),e!==0){s.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function Mn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function En(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Ru(r,e){let i=E_[e];i===void 0&&(i=new Int32Array(e),E_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function uA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function fA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;r.uniform2fv(this.addr,e),En(i,e)}}function dA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;r.uniform3fv(this.addr,e),En(i,e)}}function hA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;r.uniform4fv(this.addr,e),En(i,e)}}function pA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,s))return;A_.set(s),r.uniformMatrix2fv(this.addr,!1,A_),En(i,s)}}function mA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,s))return;T_.set(s),r.uniformMatrix3fv(this.addr,!1,T_),En(i,s)}}function gA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,s))return;b_.set(s),r.uniformMatrix4fv(this.addr,!1,b_),En(i,s)}}function vA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function _A(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;r.uniform2iv(this.addr,e),En(i,e)}}function xA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;r.uniform3iv(this.addr,e),En(i,e)}}function SA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;r.uniform4iv(this.addr,e),En(i,e)}}function yA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function MA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;r.uniform2uiv(this.addr,e),En(i,e)}}function EA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;r.uniform3uiv(this.addr,e),En(i,e)}}function bA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;r.uniform4uiv(this.addr,e),En(i,e)}}function TA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(mp.compareFunction=i.isReversedDepthBuffer()?Pp:Op,c=mp):c=Hx,i.setTexture2D(e||c,l)}function AA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Vx,l)}function RA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||kx,l)}function CA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Gx,l)}function wA(r){switch(r){case 5126:return uA;case 35664:return fA;case 35665:return dA;case 35666:return hA;case 35674:return pA;case 35675:return mA;case 35676:return gA;case 5124:case 35670:return vA;case 35667:case 35671:return _A;case 35668:case 35672:return xA;case 35669:case 35673:return SA;case 5125:return yA;case 36294:return MA;case 36295:return EA;case 36296:return bA;case 35678:case 36198:case 36298:case 36306:case 35682:return TA;case 35679:case 36299:case 36307:return AA;case 35680:case 36300:case 36308:case 36293:return RA;case 36289:case 36303:case 36311:case 36292:return CA}}function DA(r,e){r.uniform1fv(this.addr,e)}function NA(r,e){const i=to(e,this.size,2);r.uniform2fv(this.addr,i)}function UA(r,e){const i=to(e,this.size,3);r.uniform3fv(this.addr,i)}function LA(r,e){const i=to(e,this.size,4);r.uniform4fv(this.addr,i)}function OA(r,e){const i=to(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function PA(r,e){const i=to(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function IA(r,e){const i=to(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function FA(r,e){r.uniform1iv(this.addr,e)}function BA(r,e){r.uniform2iv(this.addr,e)}function zA(r,e){r.uniform3iv(this.addr,e)}function HA(r,e){r.uniform4iv(this.addr,e)}function GA(r,e){r.uniform1uiv(this.addr,e)}function VA(r,e){r.uniform2uiv(this.addr,e)}function kA(r,e){r.uniform3uiv(this.addr,e)}function jA(r,e){r.uniform4uiv(this.addr,e)}function XA(r,e,i){const s=this.cache,l=e.length,c=Ru(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=mp:f=Hx;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function WA(r,e,i){const s=this.cache,l=e.length,c=Ru(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Vx,c[f])}function qA(r,e,i){const s=this.cache,l=e.length,c=Ru(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||kx,c[f])}function YA(r,e,i){const s=this.cache,l=e.length,c=Ru(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Gx,c[f])}function ZA(r){switch(r){case 5126:return DA;case 35664:return NA;case 35665:return UA;case 35666:return LA;case 35674:return OA;case 35675:return PA;case 35676:return IA;case 5124:case 35670:return FA;case 35667:case 35671:return BA;case 35668:case 35672:return zA;case 35669:case 35673:return HA;case 5125:return GA;case 36294:return VA;case 36295:return kA;case 36296:return jA;case 35678:case 36198:case 36298:case 36306:case 35682:return XA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return qA;case 36289:case 36303:case 36311:case 36292:return YA}}class KA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=wA(i.type)}}class QA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ZA(i.type)}}class JA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const xh=/(\w+)(\])?(\[|\.)?/g;function R_(r,e){r.seq.push(e),r.map[e.id]=e}function $A(r,e,i){const s=r.name,l=s.length;for(xh.lastIndex=0;;){const c=xh.exec(s),f=xh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){R_(i,h===void 0?new KA(p,r,e):new QA(p,r,e));break}else{let v=i.map[p];v===void 0&&(v=new JA(p),R_(i,v)),i=v}}}class ou{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);$A(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function C_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const e3=37297;let t3=0;function n3(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const w_=new dt;function i3(r){wt._getMatrix(w_,wt.workingColorSpace,r);const e=`mat3( ${w_.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(r)){case hu:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function D_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+n3(r.getShaderSource(e),p)}else return c}function a3(r,e){const i=i3(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const s3={[lx]:"Linear",[cx]:"Reinhard",[ux]:"Cineon",[fx]:"ACESFilmic",[hx]:"AgX",[px]:"Neutral",[dx]:"Custom"};function r3(r,e){const i=s3[e];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const $c=new de;function o3(){wt.getLuminanceCoefficients($c);const r=$c.x.toFixed(4),e=$c.y.toFixed(4),i=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l3(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function c3(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function u3(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function ll(r){return r!==""}function N_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function U_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f3=/^[ \t]*#include +<([\w\d./]+)>/gm;function gp(r){return r.replace(f3,h3)}const d3=new Map;function h3(r,e){let i=_t[e];if(i===void 0){const s=d3.get(e);if(s!==void 0)i=_t[s],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return gp(i)}const p3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L_(r){return r.replace(p3,m3)}function m3(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function O_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const g3={[nu]:"SHADOWMAP_TYPE_PCF",[rl]:"SHADOWMAP_TYPE_VSM"};function v3(r){return g3[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _3={[qs]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE",[bu]:"ENVMAP_TYPE_CUBE_UV"};function x3(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":_3[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const S3={[qr]:"ENVMAP_MODE_REFRACTION"};function y3(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":S3[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const M3={[ox]:"ENVMAP_BLENDING_MULTIPLY",[dE]:"ENVMAP_BLENDING_MIX",[hE]:"ENVMAP_BLENDING_ADD"};function E3(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":M3[r.combine]||"ENVMAP_BLENDING_NONE"}function b3(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function T3(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=v3(i),h=x3(i),x=y3(i),v=E3(i),_=b3(i),E=l3(i),T=c3(c),R=l.createProgram();let S,y,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ll).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ll).join(`
`),y.length>0&&(y+=`
`)):(S=[O_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),y=[O_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qi?"#define TONE_MAPPING":"",i.toneMapping!==Qi?_t.tonemapping_pars_fragment:"",i.toneMapping!==Qi?r3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,a3("linearToOutputTexel",i.outputColorSpace),o3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ll).join(`
`)),f=gp(f),f=N_(f,i),f=U_(f,i),p=gp(p),p=N_(p,i),p=U_(p,i),f=L_(f),p=L_(p),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",i.glslVersion===kv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===kv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=N+S+f,L=N+y+p,j=C_(l,l.VERTEX_SHADER,U),P=C_(l,l.FRAGMENT_SHADER,L);l.attachShader(R,j),l.attachShader(R,P),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function I(G){if(r.debug.checkShaderErrors){const k=l.getProgramInfoLog(R)||"",se=l.getShaderInfoLog(j)||"",ce=l.getShaderInfoLog(P)||"",Y=k.trim(),O=se.trim(),H=ce.trim();let re=!0,_e=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(re=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,j,P);else{const ye=D_(l,j,"vertex"),F=D_(l,P,"fragment");Nt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Y+`
`+ye+`
`+F)}else Y!==""?st("WebGLProgram: Program Info Log:",Y):(O===""||H==="")&&(_e=!1);_e&&(G.diagnostics={runnable:re,programLog:Y,vertexShader:{log:O,prefix:S},fragmentShader:{log:H,prefix:y}})}l.deleteShader(j),l.deleteShader(P),A=new ou(l,R),z=u3(l,R)}let A;this.getUniforms=function(){return A===void 0&&I(this),A};let z;this.getAttributes=function(){return z===void 0&&I(this),z};let K=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=l.getProgramParameter(R,e3)),K},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=t3++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=j,this.fragmentShader=P,this}let A3=0;class R3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new C3(e),i.set(e,s)),s}}class C3{constructor(e){this.id=A3++,this.code=e,this.usedTimes=0}}function w3(r){return r===Ys||r===uu||r===fu}function D3(r,e,i,s,l,c){const f=new Tx,p=new R3,m=new Set,h=[],x=new Map,v=s.logarithmicDepthBuffer;let _=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return m.add(A),A===0?"uv":`uv${A}`}function R(A,z,K,G,k,se){const ce=G.fog,Y=k.geometry,O=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,H=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,re=e.get(A.envMap||O,H),_e=re&&re.mapping===bu?re.image.height:null,ye=E[A.type];A.precision!==null&&(_=s.getMaxPrecision(A.precision),_!==A.precision&&st("WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const F=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,te=F!==void 0?F.length:0;let Te=0;Y.morphAttributes.position!==void 0&&(Te=1),Y.morphAttributes.normal!==void 0&&(Te=2),Y.morphAttributes.color!==void 0&&(Te=3);let Ce,Le,ie,Re;if(ye){const ot=Zi[ye];Ce=ot.vertexShader,Le=ot.fragmentShader}else Ce=A.vertexShader,Le=A.fragmentShader,p.update(A),ie=p.getVertexShaderID(A),Re=p.getFragmentShaderID(A);const Ae=r.getRenderTarget(),Be=r.state.buffers.depth.getReversed(),Ze=k.isInstancedMesh===!0,Ke=k.isBatchedMesh===!0,bt=!!A.map,rt=!!A.matcap,ct=!!re,xt=!!A.aoMap,$e=!!A.lightMap,Pt=!!A.bumpMap,vt=!!A.normalMap,$t=!!A.displacementMap,J=!!A.emissiveMap,Tt=!!A.metalnessMap,ut=!!A.roughnessMap,Xe=A.anisotropy>0,B=A.clearcoat>0,Oe=A.dispersion>0,C=A.iridescence>0,b=A.sheen>0,$=A.transmission>0,W=Xe&&!!A.anisotropyMap,ge=B&&!!A.clearcoatMap,me=B&&!!A.clearcoatNormalMap,De=B&&!!A.clearcoatRoughnessMap,V=C&&!!A.iridescenceMap,ae=C&&!!A.iridescenceThicknessMap,xe=b&&!!A.sheenColorMap,we=b&&!!A.sheenRoughnessMap,Ne=!!A.specularMap,Pe=!!A.specularColorMap,at=!!A.specularIntensityMap,lt=$&&!!A.transmissionMap,St=$&&!!A.thicknessMap,Z=!!A.gradientMap,Ie=!!A.alphaMap,Me=A.alphaTest>0,Ge=!!A.alphaHash,Fe=!!A.extensions;let Ue=Qi;A.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Ue=r.toneMapping);const Qe={shaderID:ye,shaderType:A.type,shaderName:A.name,vertexShader:Ce,fragmentShader:Le,defines:A.defines,customVertexShaderID:ie,customFragmentShaderID:Re,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:Ke,batchingColor:Ke&&k._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&k.instanceColor!==null,instancingMorph:Ze&&k.morphTexture!==null,outputColorSpace:Ae===null?r.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:bt,matcap:rt,envMap:ct,envMapMode:ct&&re.mapping,envMapCubeUVHeight:_e,aoMap:xt,lightMap:$e,bumpMap:Pt,normalMap:vt,displacementMap:$t,emissiveMap:J,normalMapObjectSpace:vt&&A.normalMapType===gE,normalMapTangentSpace:vt&&A.normalMapType===Hv,packedNormalMap:vt&&A.normalMapType===Hv&&w3(A.normalMap.format),metalnessMap:Tt,roughnessMap:ut,anisotropy:Xe,anisotropyMap:W,clearcoat:B,clearcoatMap:ge,clearcoatNormalMap:me,clearcoatRoughnessMap:De,dispersion:Oe,iridescence:C,iridescenceMap:V,iridescenceThicknessMap:ae,sheen:b,sheenColorMap:xe,sheenRoughnessMap:we,specularMap:Ne,specularColorMap:Pe,specularIntensityMap:at,transmission:$,transmissionMap:lt,thicknessMap:St,gradientMap:Z,opaque:A.transparent===!1&&A.blending===jr&&A.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Me,alphaHash:Ge,combine:A.combine,mapUv:bt&&T(A.map.channel),aoMapUv:xt&&T(A.aoMap.channel),lightMapUv:$e&&T(A.lightMap.channel),bumpMapUv:Pt&&T(A.bumpMap.channel),normalMapUv:vt&&T(A.normalMap.channel),displacementMapUv:$t&&T(A.displacementMap.channel),emissiveMapUv:J&&T(A.emissiveMap.channel),metalnessMapUv:Tt&&T(A.metalnessMap.channel),roughnessMapUv:ut&&T(A.roughnessMap.channel),anisotropyMapUv:W&&T(A.anisotropyMap.channel),clearcoatMapUv:ge&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:me&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:we&&T(A.sheenRoughnessMap.channel),specularMapUv:Ne&&T(A.specularMap.channel),specularColorMapUv:Pe&&T(A.specularColorMap.channel),specularIntensityMapUv:at&&T(A.specularIntensityMap.channel),transmissionMapUv:lt&&T(A.transmissionMap.channel),thicknessMapUv:St&&T(A.thicknessMap.channel),alphaMapUv:Ie&&T(A.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(vt||Xe),vertexNormals:!!Y.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(bt||Ie),fog:!!ce,useFog:A.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||Y.attributes.normal===void 0&&vt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Be,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Te,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&K.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ue,decodeVideoTexture:bt&&A.map.isVideoTexture===!0&&wt.getTransfer(A.map.colorSpace)===Xt,decodeVideoTextureEmissive:J&&A.emissiveMap.isVideoTexture===!0&&wt.getTransfer(A.emissiveMap.colorSpace)===Xt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ta,flipSided:A.side===qn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Fe&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&A.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Qe.vertexUv1s=m.has(1),Qe.vertexUv2s=m.has(2),Qe.vertexUv3s=m.has(3),m.clear(),Qe}function S(A){const z=[];if(A.shaderID?z.push(A.shaderID):(z.push(A.customVertexShaderID),z.push(A.customFragmentShaderID)),A.defines!==void 0)for(const K in A.defines)z.push(K),z.push(A.defines[K]);return A.isRawShaderMaterial===!1&&(y(z,A),N(z,A),z.push(r.outputColorSpace)),z.push(A.customProgramCacheKey),z.join()}function y(A,z){A.push(z.precision),A.push(z.outputColorSpace),A.push(z.envMapMode),A.push(z.envMapCubeUVHeight),A.push(z.mapUv),A.push(z.alphaMapUv),A.push(z.lightMapUv),A.push(z.aoMapUv),A.push(z.bumpMapUv),A.push(z.normalMapUv),A.push(z.displacementMapUv),A.push(z.emissiveMapUv),A.push(z.metalnessMapUv),A.push(z.roughnessMapUv),A.push(z.anisotropyMapUv),A.push(z.clearcoatMapUv),A.push(z.clearcoatNormalMapUv),A.push(z.clearcoatRoughnessMapUv),A.push(z.iridescenceMapUv),A.push(z.iridescenceThicknessMapUv),A.push(z.sheenColorMapUv),A.push(z.sheenRoughnessMapUv),A.push(z.specularMapUv),A.push(z.specularColorMapUv),A.push(z.specularIntensityMapUv),A.push(z.transmissionMapUv),A.push(z.thicknessMapUv),A.push(z.combine),A.push(z.fogExp2),A.push(z.sizeAttenuation),A.push(z.morphTargetsCount),A.push(z.morphAttributeCount),A.push(z.numDirLights),A.push(z.numPointLights),A.push(z.numSpotLights),A.push(z.numSpotLightMaps),A.push(z.numHemiLights),A.push(z.numRectAreaLights),A.push(z.numDirLightShadows),A.push(z.numPointLightShadows),A.push(z.numSpotLightShadows),A.push(z.numSpotLightShadowsWithMaps),A.push(z.numLightProbes),A.push(z.shadowMapType),A.push(z.toneMapping),A.push(z.numClippingPlanes),A.push(z.numClipIntersection),A.push(z.depthPacking)}function N(A,z){f.disableAll(),z.instancing&&f.enable(0),z.instancingColor&&f.enable(1),z.instancingMorph&&f.enable(2),z.matcap&&f.enable(3),z.envMap&&f.enable(4),z.normalMapObjectSpace&&f.enable(5),z.normalMapTangentSpace&&f.enable(6),z.clearcoat&&f.enable(7),z.iridescence&&f.enable(8),z.alphaTest&&f.enable(9),z.vertexColors&&f.enable(10),z.vertexAlphas&&f.enable(11),z.vertexUv1s&&f.enable(12),z.vertexUv2s&&f.enable(13),z.vertexUv3s&&f.enable(14),z.vertexTangents&&f.enable(15),z.anisotropy&&f.enable(16),z.alphaHash&&f.enable(17),z.batching&&f.enable(18),z.dispersion&&f.enable(19),z.batchingColor&&f.enable(20),z.gradientMap&&f.enable(21),z.packedNormalMap&&f.enable(22),z.vertexNormals&&f.enable(23),A.push(f.mask),f.disableAll(),z.fog&&f.enable(0),z.useFog&&f.enable(1),z.flatShading&&f.enable(2),z.logarithmicDepthBuffer&&f.enable(3),z.reversedDepthBuffer&&f.enable(4),z.skinning&&f.enable(5),z.morphTargets&&f.enable(6),z.morphNormals&&f.enable(7),z.morphColors&&f.enable(8),z.premultipliedAlpha&&f.enable(9),z.shadowMapEnabled&&f.enable(10),z.doubleSided&&f.enable(11),z.flipSided&&f.enable(12),z.useDepthPacking&&f.enable(13),z.dithering&&f.enable(14),z.transmission&&f.enable(15),z.sheen&&f.enable(16),z.opaque&&f.enable(17),z.pointsUvs&&f.enable(18),z.decodeVideoTexture&&f.enable(19),z.decodeVideoTextureEmissive&&f.enable(20),z.alphaToCoverage&&f.enable(21),z.numLightProbeGrids>0&&f.enable(22),A.push(f.mask)}function U(A){const z=E[A.type];let K;if(z){const G=Zi[z];K=eb.clone(G.uniforms)}else K=A.uniforms;return K}function L(A,z){let K=x.get(z);return K!==void 0?++K.usedTimes:(K=new T3(r,z,A,l),h.push(K),x.set(z,K)),K}function j(A){if(--A.usedTimes===0){const z=h.indexOf(A);h[z]=h[h.length-1],h.pop(),x.delete(A.cacheKey),A.destroy()}}function P(A){p.remove(A)}function I(){p.dispose()}return{getParameters:R,getProgramCacheKey:S,getUniforms:U,acquireProgram:L,releaseProgram:j,releaseShaderCache:P,programs:h,dispose:I}}function N3(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function U3(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function P_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function I_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function p(_,E,T,R,S,y){let N=r[e];return N===void 0?(N={id:_.id,object:_,geometry:E,material:T,materialVariant:f(_),groupOrder:R,renderOrder:_.renderOrder,z:S,group:y},r[e]=N):(N.id=_.id,N.object=_,N.geometry=E,N.material=T,N.materialVariant=f(_),N.groupOrder=R,N.renderOrder=_.renderOrder,N.z=S,N.group=y),e++,N}function m(_,E,T,R,S,y){const N=p(_,E,T,R,S,y);T.transmission>0?s.push(N):T.transparent===!0?l.push(N):i.push(N)}function h(_,E,T,R,S,y){const N=p(_,E,T,R,S,y);T.transmission>0?s.unshift(N):T.transparent===!0?l.unshift(N):i.unshift(N)}function x(_,E){i.length>1&&i.sort(_||U3),s.length>1&&s.sort(E||P_),l.length>1&&l.sort(E||P_)}function v(){for(let _=e,E=r.length;_<E;_++){const T=r[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:v,sort:x}}function L3(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new I_,r.set(s,[f])):l>=c.length?(f=new I_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function O3(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new de,color:new Bt};break;case"SpotLight":i={position:new de,direction:new de,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new de,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new de,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":i={color:new Bt,position:new de,halfWidth:new de,halfHeight:new de};break}return r[e.id]=i,i}}}function P3(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let I3=0;function F3(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function B3(r){const e=new O3,i=P3(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new de);const l=new de,c=new xn,f=new xn;function p(h){let x=0,v=0,_=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let E=0,T=0,R=0,S=0,y=0,N=0,U=0,L=0,j=0,P=0,I=0;h.sort(F3);for(let z=0,K=h.length;z<K;z++){const G=h[z],k=G.color,se=G.intensity,ce=G.distance;let Y=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Ys?Y=G.shadow.map.texture:Y=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)x+=k.r*se,v+=k.g*se,_+=k.b*se;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],se);I++}else if(G.isDirectionalLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,re=i.get(G);re.shadowIntensity=H.intensity,re.shadowBias=H.bias,re.shadowNormalBias=H.normalBias,re.shadowRadius=H.radius,re.shadowMapSize=H.mapSize,s.directionalShadow[E]=re,s.directionalShadowMap[E]=Y,s.directionalShadowMatrix[E]=G.shadow.matrix,N++}s.directional[E]=O,E++}else if(G.isSpotLight){const O=e.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(k).multiplyScalar(se),O.distance=ce,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[R]=O;const H=G.shadow;if(G.map&&(s.spotLightMap[j]=G.map,j++,H.updateMatrices(G),G.castShadow&&P++),s.spotLightMatrix[R]=H.matrix,G.castShadow){const re=i.get(G);re.shadowIntensity=H.intensity,re.shadowBias=H.bias,re.shadowNormalBias=H.normalBias,re.shadowRadius=H.radius,re.shadowMapSize=H.mapSize,s.spotShadow[R]=re,s.spotShadowMap[R]=Y,L++}R++}else if(G.isRectAreaLight){const O=e.get(G);O.color.copy(k).multiplyScalar(se),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[S]=O,S++}else if(G.isPointLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const H=G.shadow,re=i.get(G);re.shadowIntensity=H.intensity,re.shadowBias=H.bias,re.shadowNormalBias=H.normalBias,re.shadowRadius=H.radius,re.shadowMapSize=H.mapSize,re.shadowCameraNear=H.camera.near,re.shadowCameraFar=H.camera.far,s.pointShadow[T]=re,s.pointShadowMap[T]=Y,s.pointShadowMatrix[T]=G.shadow.matrix,U++}s.point[T]=O,T++}else if(G.isHemisphereLight){const O=e.get(G);O.skyColor.copy(G.color).multiplyScalar(se),O.groundColor.copy(G.groundColor).multiplyScalar(se),s.hemi[y]=O,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=v,s.ambient[2]=_;const A=s.hash;(A.directionalLength!==E||A.pointLength!==T||A.spotLength!==R||A.rectAreaLength!==S||A.hemiLength!==y||A.numDirectionalShadows!==N||A.numPointShadows!==U||A.numSpotShadows!==L||A.numSpotMaps!==j||A.numLightProbes!==I)&&(s.directional.length=E,s.spot.length=R,s.rectArea.length=S,s.point.length=T,s.hemi.length=y,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=L+j-P,s.spotLightMap.length=j,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=I,A.directionalLength=E,A.pointLength=T,A.spotLength=R,A.rectAreaLength=S,A.hemiLength=y,A.numDirectionalShadows=N,A.numPointShadows=U,A.numSpotShadows=L,A.numSpotMaps=j,A.numLightProbes=I,s.version=I3++)}function m(h,x){let v=0,_=0,E=0,T=0,R=0;const S=x.matrixWorldInverse;for(let y=0,N=h.length;y<N;y++){const U=h[y];if(U.isDirectionalLight){const L=s.directional[v];L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),v++}else if(U.isSpotLight){const L=s.spot[E];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),E++}else if(U.isRectAreaLight){const L=s.rectArea[T];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(S),f.identity(),c.copy(U.matrixWorld),c.premultiply(S),f.extractRotation(c),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),T++}else if(U.isPointLight){const L=s.point[_];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(S),_++}else if(U.isHemisphereLight){const L=s.hemi[R];L.direction.setFromMatrixPosition(U.matrixWorld),L.direction.transformDirection(S),R++}}}return{setup:p,setupView:m,state:s}}function F_(r){const e=new B3(r),i=[],s=[],l=[];function c(_){v.camera=_,i.length=0,s.length=0,l.length=0}function f(_){i.push(_)}function p(_){s.push(_)}function m(_){l.push(_)}function h(){e.setup(i)}function x(_){e.setupView(i,_)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:h,setupLightsView:x,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function z3(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new F_(r),e.set(l,[p])):c>=f.length?(p=new F_(r),f.push(p)):p=f[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const H3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,V3=[new de(1,0,0),new de(-1,0,0),new de(0,1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1)],k3=[new de(0,-1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1),new de(0,-1,0),new de(0,-1,0)],B_=new xn,sl=new de,Sh=new de;function j3(r,e,i){let s=new Ux;const l=new ht,c=new ht,f=new ln,p=new ib,m=new ab,h={},x=i.maxTextureSize,v={[ps]:qn,[qn]:ps,[Ta]:Ta},_=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:H3,fragmentShader:G3}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const T=new Gi;T.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ei(T,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let y=this.type;this.render=function(P,I,A){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===q1&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nu);const z=r.getRenderTarget(),K=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Aa),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const se=y!==this.type;se&&I.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(Y=>Y.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,Y=P.length;ce<Y;ce++){const O=P[ce],H=O.shadow;if(H===void 0){st("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const re=H.getFrameExtents();l.multiply(re),c.copy(H.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/re.x),l.x=c.x*re.x,H.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/re.y),l.y=c.y*re.y,H.mapSize.y=c.y));const _e=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=_e,H.map===null||se===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===rl){if(O.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Bi(l.x,l.y,{format:Ys,type:$i,minFilter:_n,magFilter:_n,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new Yr(l.x,l.y,Ii),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=wa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn}else O.isPointLight?(H.map=new zx(l.x),H.map.depthTexture=new JE(l.x,Ji)):(H.map=new Bi(l.x,l.y),H.map.depthTexture=new Yr(l.x,l.y,Ji)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=wa,this.type===nu?(H.map.depthTexture.compareFunction=_e?Pp:Op,H.map.depthTexture.minFilter=_n,H.map.depthTexture.magFilter=_n):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn);H.camera.updateProjectionMatrix()}const ye=H.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<ye;F++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,F),r.clear();else{F===0&&(r.setRenderTarget(H.map),r.clear());const te=H.getViewport(F);f.set(c.x*te.x,c.y*te.y,c.x*te.z,c.y*te.w),k.viewport(f)}if(O.isPointLight){const te=H.camera,Te=H.matrix,Ce=O.distance||te.far;Ce!==te.far&&(te.far=Ce,te.updateProjectionMatrix()),sl.setFromMatrixPosition(O.matrixWorld),te.position.copy(sl),Sh.copy(te.position),Sh.add(V3[F]),te.up.copy(k3[F]),te.lookAt(Sh),te.updateMatrixWorld(),Te.makeTranslation(-sl.x,-sl.y,-sl.z),B_.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),H._frustum.setFromProjectionMatrix(B_,te.coordinateSystem,te.reversedDepth)}else H.updateMatrices(O);s=H.getFrustum(),L(I,A,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===rl&&N(H,A),H.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(z,K,G)};function N(P,I){const A=e.update(R);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Bi(l.x,l.y,{format:Ys,type:$i})),_.uniforms.shadow_pass.value=P.map.depthTexture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(I,null,A,_,R,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value=P.mapSize,E.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(I,null,A,E,R,null)}function U(P,I,A,z){let K=null;const G=A.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)K=G;else if(K=A.isPointLight===!0?m:p,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const k=K.uuid,se=I.uuid;let ce=h[k];ce===void 0&&(ce={},h[k]=ce);let Y=ce[se];Y===void 0&&(Y=K.clone(),ce[se]=Y,I.addEventListener("dispose",j)),K=Y}if(K.visible=I.visible,K.wireframe=I.wireframe,z===rl?K.side=I.shadowSide!==null?I.shadowSide:I.side:K.side=I.shadowSide!==null?I.shadowSide:v[I.side],K.alphaMap=I.alphaMap,K.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,K.map=I.map,K.clipShadows=I.clipShadows,K.clippingPlanes=I.clippingPlanes,K.clipIntersection=I.clipIntersection,K.displacementMap=I.displacementMap,K.displacementScale=I.displacementScale,K.displacementBias=I.displacementBias,K.wireframeLinewidth=I.wireframeLinewidth,K.linewidth=I.linewidth,A.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const k=r.properties.get(K);k.light=A}return K}function L(P,I,A,z,K){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&K===rl)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,P.matrixWorld);const se=e.update(P),ce=P.material;if(Array.isArray(ce)){const Y=se.groups;for(let O=0,H=Y.length;O<H;O++){const re=Y[O],_e=ce[re.materialIndex];if(_e&&_e.visible){const ye=U(P,_e,z,K);P.onBeforeShadow(r,P,I,A,se,ye,re),r.renderBufferDirect(A,null,se,ye,P,re),P.onAfterShadow(r,P,I,A,se,ye,re)}}}else if(ce.visible){const Y=U(P,ce,z,K);P.onBeforeShadow(r,P,I,A,se,Y,null),r.renderBufferDirect(A,null,se,Y,P,null),P.onAfterShadow(r,P,I,A,se,Y,null)}}const k=P.children;for(let se=0,ce=k.length;se<ce;se++)L(k[se],I,A,z,K)}function j(P){P.target.removeEventListener("dispose",j);for(const A in h){const z=h[A],K=P.target.uuid;K in z&&(z[K].dispose(),delete z[K])}}}function X3(r,e){function i(){let Z=!1;const Ie=new ln;let Me=null;const Ge=new ln(0,0,0,0);return{setMask:function(Fe){Me!==Fe&&!Z&&(r.colorMask(Fe,Fe,Fe,Fe),Me=Fe)},setLocked:function(Fe){Z=Fe},setClear:function(Fe,Ue,Qe,ot,sn){sn===!0&&(Fe*=ot,Ue*=ot,Qe*=ot),Ie.set(Fe,Ue,Qe,ot),Ge.equals(Ie)===!1&&(r.clearColor(Fe,Ue,Qe,ot),Ge.copy(Ie))},reset:function(){Z=!1,Me=null,Ge.set(-1,0,0,0)}}}function s(){let Z=!1,Ie=!1,Me=null,Ge=null,Fe=null;return{setReversed:function(Ue){if(Ie!==Ue){const Qe=e.get("EXT_clip_control");Ue?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ie=Ue;const ot=Fe;Fe=null,this.setClear(ot)}},getReversed:function(){return Ie},setTest:function(Ue){Ue?Ae(r.DEPTH_TEST):Be(r.DEPTH_TEST)},setMask:function(Ue){Me!==Ue&&!Z&&(r.depthMask(Ue),Me=Ue)},setFunc:function(Ue){if(Ie&&(Ue=AE[Ue]),Ge!==Ue){switch(Ue){case Ch:r.depthFunc(r.NEVER);break;case wh:r.depthFunc(r.ALWAYS);break;case Dh:r.depthFunc(r.LESS);break;case Wr:r.depthFunc(r.LEQUAL);break;case Nh:r.depthFunc(r.EQUAL);break;case Uh:r.depthFunc(r.GEQUAL);break;case Lh:r.depthFunc(r.GREATER);break;case Oh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ge=Ue}},setLocked:function(Ue){Z=Ue},setClear:function(Ue){Fe!==Ue&&(Fe=Ue,Ie&&(Ue=1-Ue),r.clearDepth(Ue))},reset:function(){Z=!1,Me=null,Ge=null,Fe=null,Ie=!1}}}function l(){let Z=!1,Ie=null,Me=null,Ge=null,Fe=null,Ue=null,Qe=null,ot=null,sn=null;return{setTest:function(It){Z||(It?Ae(r.STENCIL_TEST):Be(r.STENCIL_TEST))},setMask:function(It){Ie!==It&&!Z&&(r.stencilMask(It),Ie=It)},setFunc:function(It,ui,Zn){(Me!==It||Ge!==ui||Fe!==Zn)&&(r.stencilFunc(It,ui,Zn),Me=It,Ge=ui,Fe=Zn)},setOp:function(It,ui,Zn){(Ue!==It||Qe!==ui||ot!==Zn)&&(r.stencilOp(It,ui,Zn),Ue=It,Qe=ui,ot=Zn)},setLocked:function(It){Z=It},setClear:function(It){sn!==It&&(r.clearStencil(It),sn=It)},reset:function(){Z=!1,Ie=null,Me=null,Ge=null,Fe=null,Ue=null,Qe=null,ot=null,sn=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,h=new WeakMap;let x={},v={},_={},E=new WeakMap,T=[],R=null,S=!1,y=null,N=null,U=null,L=null,j=null,P=null,I=null,A=new Bt(0,0,0),z=0,K=!1,G=null,k=null,se=null,ce=null,Y=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,re=0;const _e=r.getParameter(r.VERSION);_e.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(_e)[1]),H=re>=1):_e.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),H=re>=2);let ye=null,F={};const te=r.getParameter(r.SCISSOR_BOX),Te=r.getParameter(r.VIEWPORT),Ce=new ln().fromArray(te),Le=new ln().fromArray(Te);function ie(Z,Ie,Me,Ge){const Fe=new Uint8Array(4),Ue=r.createTexture();r.bindTexture(Z,Ue),r.texParameteri(Z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<Me;Qe++)Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?r.texImage3D(Ie,0,r.RGBA,1,1,Ge,0,r.RGBA,r.UNSIGNED_BYTE,Fe):r.texImage2D(Ie+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Fe);return Ue}const Re={};Re[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),Re[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Re[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Ae(r.DEPTH_TEST),f.setFunc(Wr),Pt(!1),vt(Fv),Ae(r.CULL_FACE),xt(Aa);function Ae(Z){x[Z]!==!0&&(r.enable(Z),x[Z]=!0)}function Be(Z){x[Z]!==!1&&(r.disable(Z),x[Z]=!1)}function Ze(Z,Ie){return _[Z]!==Ie?(r.bindFramebuffer(Z,Ie),_[Z]=Ie,Z===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ie),Z===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Ke(Z,Ie){let Me=T,Ge=!1;if(Z){Me=E.get(Ie),Me===void 0&&(Me=[],E.set(Ie,Me));const Fe=Z.textures;if(Me.length!==Fe.length||Me[0]!==r.COLOR_ATTACHMENT0){for(let Ue=0,Qe=Fe.length;Ue<Qe;Ue++)Me[Ue]=r.COLOR_ATTACHMENT0+Ue;Me.length=Fe.length,Ge=!0}}else Me[0]!==r.BACK&&(Me[0]=r.BACK,Ge=!0);Ge&&r.drawBuffers(Me)}function bt(Z){return R!==Z?(r.useProgram(Z),R=Z,!0):!1}const rt={[Hs]:r.FUNC_ADD,[Z1]:r.FUNC_SUBTRACT,[K1]:r.FUNC_REVERSE_SUBTRACT};rt[Q1]=r.MIN,rt[J1]=r.MAX;const ct={[$1]:r.ZERO,[eE]:r.ONE,[tE]:r.SRC_COLOR,[Ah]:r.SRC_ALPHA,[oE]:r.SRC_ALPHA_SATURATE,[sE]:r.DST_COLOR,[iE]:r.DST_ALPHA,[nE]:r.ONE_MINUS_SRC_COLOR,[Rh]:r.ONE_MINUS_SRC_ALPHA,[rE]:r.ONE_MINUS_DST_COLOR,[aE]:r.ONE_MINUS_DST_ALPHA,[lE]:r.CONSTANT_COLOR,[cE]:r.ONE_MINUS_CONSTANT_COLOR,[uE]:r.CONSTANT_ALPHA,[fE]:r.ONE_MINUS_CONSTANT_ALPHA};function xt(Z,Ie,Me,Ge,Fe,Ue,Qe,ot,sn,It){if(Z===Aa){S===!0&&(Be(r.BLEND),S=!1);return}if(S===!1&&(Ae(r.BLEND),S=!0),Z!==Y1){if(Z!==y||It!==K){if((N!==Hs||j!==Hs)&&(r.blendEquation(r.FUNC_ADD),N=Hs,j=Hs),It)switch(Z){case jr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Th:r.blendFunc(r.ONE,r.ONE);break;case Bv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case zv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Nt("WebGLState: Invalid blending: ",Z);break}else switch(Z){case jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Th:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Bv:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zv:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",Z);break}U=null,L=null,P=null,I=null,A.set(0,0,0),z=0,y=Z,K=It}return}Fe=Fe||Ie,Ue=Ue||Me,Qe=Qe||Ge,(Ie!==N||Fe!==j)&&(r.blendEquationSeparate(rt[Ie],rt[Fe]),N=Ie,j=Fe),(Me!==U||Ge!==L||Ue!==P||Qe!==I)&&(r.blendFuncSeparate(ct[Me],ct[Ge],ct[Ue],ct[Qe]),U=Me,L=Ge,P=Ue,I=Qe),(ot.equals(A)===!1||sn!==z)&&(r.blendColor(ot.r,ot.g,ot.b,sn),A.copy(ot),z=sn),y=Z,K=!1}function $e(Z,Ie){Z.side===Ta?Be(r.CULL_FACE):Ae(r.CULL_FACE);let Me=Z.side===qn;Ie&&(Me=!Me),Pt(Me),Z.blending===jr&&Z.transparent===!1?xt(Aa):xt(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),f.setFunc(Z.depthFunc),f.setTest(Z.depthTest),f.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const Ge=Z.stencilWrite;p.setTest(Ge),Ge&&(p.setMask(Z.stencilWriteMask),p.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),p.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),J(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?Ae(r.SAMPLE_ALPHA_TO_COVERAGE):Be(r.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(Z){G!==Z&&(Z?r.frontFace(r.CW):r.frontFace(r.CCW),G=Z)}function vt(Z){Z!==X1?(Ae(r.CULL_FACE),Z!==k&&(Z===Fv?r.cullFace(r.BACK):Z===W1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Be(r.CULL_FACE),k=Z}function $t(Z){Z!==se&&(H&&r.lineWidth(Z),se=Z)}function J(Z,Ie,Me){Z?(Ae(r.POLYGON_OFFSET_FILL),(ce!==Ie||Y!==Me)&&(ce=Ie,Y=Me,f.getReversed()&&(Ie=-Ie),r.polygonOffset(Ie,Me))):Be(r.POLYGON_OFFSET_FILL)}function Tt(Z){Z?Ae(r.SCISSOR_TEST):Be(r.SCISSOR_TEST)}function ut(Z){Z===void 0&&(Z=r.TEXTURE0+O-1),ye!==Z&&(r.activeTexture(Z),ye=Z)}function Xe(Z,Ie,Me){Me===void 0&&(ye===null?Me=r.TEXTURE0+O-1:Me=ye);let Ge=F[Me];Ge===void 0&&(Ge={type:void 0,texture:void 0},F[Me]=Ge),(Ge.type!==Z||Ge.texture!==Ie)&&(ye!==Me&&(r.activeTexture(Me),ye=Me),r.bindTexture(Z,Ie||Re[Z]),Ge.type=Z,Ge.texture=Ie)}function B(){const Z=F[ye];Z!==void 0&&Z.type!==void 0&&(r.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Oe(){try{r.compressedTexImage2D(...arguments)}catch(Z){Nt("WebGLState:",Z)}}function C(){try{r.compressedTexImage3D(...arguments)}catch(Z){Nt("WebGLState:",Z)}}function b(){try{r.texSubImage2D(...arguments)}catch(Z){Nt("WebGLState:",Z)}}function $(){try{r.texSubImage3D(...arguments)}catch(Z){Nt("WebGLState:",Z)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(Z){Nt("WebGLState:",Z)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(Z){Nt("WebGLState:",Z)}}function me(){try{r.texStorage2D(...arguments)}catch(Z){Nt("WebGLState:",Z)}}function De(){try{r.texStorage3D(...arguments)}catch(Z){Nt("WebGLState:",Z)}}function V(){try{r.texImage2D(...arguments)}catch(Z){Nt("WebGLState:",Z)}}function ae(){try{r.texImage3D(...arguments)}catch(Z){Nt("WebGLState:",Z)}}function xe(Z){return v[Z]!==void 0?v[Z]:r.getParameter(Z)}function we(Z,Ie){v[Z]!==Ie&&(r.pixelStorei(Z,Ie),v[Z]=Ie)}function Ne(Z){Ce.equals(Z)===!1&&(r.scissor(Z.x,Z.y,Z.z,Z.w),Ce.copy(Z))}function Pe(Z){Le.equals(Z)===!1&&(r.viewport(Z.x,Z.y,Z.z,Z.w),Le.copy(Z))}function at(Z,Ie){let Me=h.get(Ie);Me===void 0&&(Me=new WeakMap,h.set(Ie,Me));let Ge=Me.get(Z);Ge===void 0&&(Ge=r.getUniformBlockIndex(Ie,Z.name),Me.set(Z,Ge))}function lt(Z,Ie){const Ge=h.get(Ie).get(Z);m.get(Ie)!==Ge&&(r.uniformBlockBinding(Ie,Ge,Z.__bindingPointIndex),m.set(Ie,Ge))}function St(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),x={},v={},ye=null,F={},_={},E=new WeakMap,T=[],R=null,S=!1,y=null,N=null,U=null,L=null,j=null,P=null,I=null,A=new Bt(0,0,0),z=0,K=!1,G=null,k=null,se=null,ce=null,Y=null,Ce.set(0,0,r.canvas.width,r.canvas.height),Le.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:Ae,disable:Be,bindFramebuffer:Ze,drawBuffers:Ke,useProgram:bt,setBlending:xt,setMaterial:$e,setFlipSided:Pt,setCullFace:vt,setLineWidth:$t,setPolygonOffset:J,setScissorTest:Tt,activeTexture:ut,bindTexture:Xe,unbindTexture:B,compressedTexImage2D:Oe,compressedTexImage3D:C,texImage2D:V,texImage3D:ae,pixelStorei:we,getParameter:xe,updateUBOMapping:at,uniformBlockBinding:lt,texStorage2D:me,texStorage3D:De,texSubImage2D:b,texSubImage3D:$,compressedTexSubImage2D:W,compressedTexSubImage3D:ge,scissor:Ne,viewport:Pe,reset:St}}function W3(r,e,i,s,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ht,x=new WeakMap,v=new Set;let _;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(C,b){return T?new OffscreenCanvas(C,b):mu("canvas")}function S(C,b,$){let W=1;const ge=Oe(C);if((ge.width>$||ge.height>$)&&(W=$/Math.max(ge.width,ge.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const me=Math.floor(W*ge.width),De=Math.floor(W*ge.height);_===void 0&&(_=R(me,De));const V=b?R(me,De):_;return V.width=me,V.height=De,V.getContext("2d").drawImage(C,0,0,me,De),st("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+me+"x"+De+")."),V}else return"data"in C&&st("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),C;return C}function y(C){return C.generateMipmaps}function N(C){r.generateMipmap(C)}function U(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(C,b,$,W,ge,me=!1){if(C!==null){if(r[C]!==void 0)return r[C];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let De;W&&(De=e.get("EXT_texture_norm16"),De||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=b;if(b===r.RED&&($===r.FLOAT&&(V=r.R32F),$===r.HALF_FLOAT&&(V=r.R16F),$===r.UNSIGNED_BYTE&&(V=r.R8),$===r.UNSIGNED_SHORT&&De&&(V=De.R16_EXT),$===r.SHORT&&De&&(V=De.R16_SNORM_EXT)),b===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(V=r.R8UI),$===r.UNSIGNED_SHORT&&(V=r.R16UI),$===r.UNSIGNED_INT&&(V=r.R32UI),$===r.BYTE&&(V=r.R8I),$===r.SHORT&&(V=r.R16I),$===r.INT&&(V=r.R32I)),b===r.RG&&($===r.FLOAT&&(V=r.RG32F),$===r.HALF_FLOAT&&(V=r.RG16F),$===r.UNSIGNED_BYTE&&(V=r.RG8),$===r.UNSIGNED_SHORT&&De&&(V=De.RG16_EXT),$===r.SHORT&&De&&(V=De.RG16_SNORM_EXT)),b===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(V=r.RG8UI),$===r.UNSIGNED_SHORT&&(V=r.RG16UI),$===r.UNSIGNED_INT&&(V=r.RG32UI),$===r.BYTE&&(V=r.RG8I),$===r.SHORT&&(V=r.RG16I),$===r.INT&&(V=r.RG32I)),b===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(V=r.RGB8UI),$===r.UNSIGNED_SHORT&&(V=r.RGB16UI),$===r.UNSIGNED_INT&&(V=r.RGB32UI),$===r.BYTE&&(V=r.RGB8I),$===r.SHORT&&(V=r.RGB16I),$===r.INT&&(V=r.RGB32I)),b===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(V=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(V=r.RGBA16UI),$===r.UNSIGNED_INT&&(V=r.RGBA32UI),$===r.BYTE&&(V=r.RGBA8I),$===r.SHORT&&(V=r.RGBA16I),$===r.INT&&(V=r.RGBA32I)),b===r.RGB&&($===r.UNSIGNED_SHORT&&De&&(V=De.RGB16_EXT),$===r.SHORT&&De&&(V=De.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(V=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(V=r.R11F_G11F_B10F)),b===r.RGBA){const ae=me?hu:wt.getTransfer(ge);$===r.FLOAT&&(V=r.RGBA32F),$===r.HALF_FLOAT&&(V=r.RGBA16F),$===r.UNSIGNED_BYTE&&(V=ae===Xt?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&De&&(V=De.RGBA16_EXT),$===r.SHORT&&De&&(V=De.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(V=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(V=r.RGB5_A1)}return(V===r.R16F||V===r.R32F||V===r.RG16F||V===r.RG32F||V===r.RGBA16F||V===r.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function j(C,b){let $;return C?b===null||b===Ji||b===fl?$=r.DEPTH24_STENCIL8:b===Ii?$=r.DEPTH32F_STENCIL8:b===ul&&($=r.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ji||b===fl?$=r.DEPTH_COMPONENT24:b===Ii?$=r.DEPTH_COMPONENT32F:b===ul&&($=r.DEPTH_COMPONENT16),$}function P(C,b){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==Nn&&C.minFilter!==_n?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function I(C){const b=C.target;b.removeEventListener("dispose",I),z(b),b.isVideoTexture&&x.delete(b),b.isHTMLTexture&&v.delete(b)}function A(C){const b=C.target;b.removeEventListener("dispose",A),G(b)}function z(C){const b=s.get(C);if(b.__webglInit===void 0)return;const $=C.source,W=E.get($);if(W){const ge=W[b.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&K(C),Object.keys(W).length===0&&E.delete($)}s.remove(C)}function K(C){const b=s.get(C);r.deleteTexture(b.__webglTexture);const $=C.source,W=E.get($);delete W[b.__cacheKey],f.memory.textures--}function G(C){const b=s.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),s.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(b.__webglFramebuffer[W]))for(let ge=0;ge<b.__webglFramebuffer[W].length;ge++)r.deleteFramebuffer(b.__webglFramebuffer[W][ge]);else r.deleteFramebuffer(b.__webglFramebuffer[W]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[W])}else{if(Array.isArray(b.__webglFramebuffer))for(let W=0;W<b.__webglFramebuffer.length;W++)r.deleteFramebuffer(b.__webglFramebuffer[W]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let W=0;W<b.__webglColorRenderbuffer.length;W++)b.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[W]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=C.textures;for(let W=0,ge=$.length;W<ge;W++){const me=s.get($[W]);me.__webglTexture&&(r.deleteTexture(me.__webglTexture),f.memory.textures--),s.remove($[W])}s.remove(C)}let k=0;function se(){k=0}function ce(){return k}function Y(C){k=C}function O(){const C=k;return C>=l.maxTextures&&st("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l.maxTextures),k+=1,C}function H(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function re(C,b){const $=s.get(C);if(C.isVideoTexture&&Xe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&$.__version!==C.version){const W=C.image;if(W===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Be($,C,b);return}}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+b)}function _e(C,b){const $=s.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){Be($,C,b);return}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+b)}function ye(C,b){const $=s.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){Be($,C,b);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+b)}function F(C,b){const $=s.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&$.__version!==C.version){Ze($,C,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+b)}const te={[Ph]:r.REPEAT,[oi]:r.CLAMP_TO_EDGE,[Ih]:r.MIRRORED_REPEAT},Te={[Nn]:r.NEAREST,[pE]:r.NEAREST_MIPMAP_NEAREST,[wc]:r.NEAREST_MIPMAP_LINEAR,[_n]:r.LINEAR,[kd]:r.LINEAR_MIPMAP_NEAREST,[ks]:r.LINEAR_MIPMAP_LINEAR},Ce={[vE]:r.NEVER,[ME]:r.ALWAYS,[_E]:r.LESS,[Op]:r.LEQUAL,[xE]:r.EQUAL,[Pp]:r.GEQUAL,[SE]:r.GREATER,[yE]:r.NOTEQUAL};function Le(C,b){if(b.type===Ii&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===_n||b.magFilter===kd||b.magFilter===wc||b.magFilter===ks||b.minFilter===_n||b.minFilter===kd||b.minFilter===wc||b.minFilter===ks)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,te[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,te[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,te[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,Te[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,Te[b.minFilter]),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nn||b.minFilter!==wc&&b.minFilter!==ks||b.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function ie(C,b){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",I));const W=b.source;let ge=E.get(W);ge===void 0&&(ge={},E.set(W,ge));const me=H(b);if(me!==C.__cacheKey){ge[me]===void 0&&(ge[me]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,$=!0),ge[me].usedTimes++;const De=ge[C.__cacheKey];De!==void 0&&(ge[C.__cacheKey].usedTimes--,De.usedTimes===0&&K(b)),C.__cacheKey=me,C.__webglTexture=ge[me].texture}return $}function Re(C,b,$){return Math.floor(Math.floor(C/$)/b)}function Ae(C,b,$,W){const me=C.updateRanges;if(me.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,$,W,b.data);else{me.sort((we,Ne)=>we.start-Ne.start);let De=0;for(let we=1;we<me.length;we++){const Ne=me[De],Pe=me[we],at=Ne.start+Ne.count,lt=Re(Pe.start,b.width,4),St=Re(Ne.start,b.width,4);Pe.start<=at+1&&lt===St&&Re(Pe.start+Pe.count-1,b.width,4)===lt?Ne.count=Math.max(Ne.count,Pe.start+Pe.count-Ne.start):(++De,me[De]=Pe)}me.length=De+1;const V=i.getParameter(r.UNPACK_ROW_LENGTH),ae=i.getParameter(r.UNPACK_SKIP_PIXELS),xe=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let we=0,Ne=me.length;we<Ne;we++){const Pe=me[we],at=Math.floor(Pe.start/4),lt=Math.ceil(Pe.count/4),St=at%b.width,Z=Math.floor(at/b.width),Ie=lt,Me=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,St),i.pixelStorei(r.UNPACK_SKIP_ROWS,Z),i.texSubImage2D(r.TEXTURE_2D,0,St,Z,Ie,Me,$,W,b.data)}C.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,V),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),i.pixelStorei(r.UNPACK_SKIP_ROWS,xe)}}function Be(C,b,$){let W=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(W=r.TEXTURE_3D);const ge=ie(C,b),me=b.source;i.bindTexture(W,C.__webglTexture,r.TEXTURE0+$);const De=s.get(me);if(me.version!==De.__version||ge===!0){if(i.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const Me=wt.getPrimaries(wt.workingColorSpace),Ge=b.colorSpace===fs?null:wt.getPrimaries(b.colorSpace),Fe=b.colorSpace===fs||Me===Ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let ae=S(b.image,!1,l.maxTextureSize);ae=B(b,ae);const xe=c.convert(b.format,b.colorSpace),we=c.convert(b.type);let Ne=L(b.internalFormat,xe,we,b.normalized,b.colorSpace,b.isVideoTexture);Le(W,b);let Pe;const at=b.mipmaps,lt=b.isVideoTexture!==!0,St=De.__version===void 0||ge===!0,Z=me.dataReady,Ie=P(b,ae);if(b.isDepthTexture)Ne=j(b.format===js,b.type),St&&(lt?i.texStorage2D(r.TEXTURE_2D,1,Ne,ae.width,ae.height):i.texImage2D(r.TEXTURE_2D,0,Ne,ae.width,ae.height,0,xe,we,null));else if(b.isDataTexture)if(at.length>0){lt&&St&&i.texStorage2D(r.TEXTURE_2D,Ie,Ne,at[0].width,at[0].height);for(let Me=0,Ge=at.length;Me<Ge;Me++)Pe=at[Me],lt?Z&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,xe,we,Pe.data):i.texImage2D(r.TEXTURE_2D,Me,Ne,Pe.width,Pe.height,0,xe,we,Pe.data);b.generateMipmaps=!1}else lt?(St&&i.texStorage2D(r.TEXTURE_2D,Ie,Ne,ae.width,ae.height),Z&&Ae(b,ae,xe,we)):i.texImage2D(r.TEXTURE_2D,0,Ne,ae.width,ae.height,0,xe,we,ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){lt&&St&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Ne,at[0].width,at[0].height,ae.depth);for(let Me=0,Ge=at.length;Me<Ge;Me++)if(Pe=at[Me],b.format!==Mi)if(xe!==null)if(lt){if(Z)if(b.layerUpdates.size>0){const Fe=m_(Pe.width,Pe.height,b.format,b.type);for(const Ue of b.layerUpdates){const Qe=Pe.data.subarray(Ue*Fe/Pe.data.BYTES_PER_ELEMENT,(Ue+1)*Fe/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,Ue,Pe.width,Pe.height,1,xe,Qe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,ae.depth,xe,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,Ne,Pe.width,Pe.height,ae.depth,0,Pe.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?Z&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,ae.depth,xe,we,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Me,Ne,Pe.width,Pe.height,ae.depth,0,xe,we,Pe.data)}else{lt&&St&&i.texStorage2D(r.TEXTURE_2D,Ie,Ne,at[0].width,at[0].height);for(let Me=0,Ge=at.length;Me<Ge;Me++)Pe=at[Me],b.format!==Mi?xe!==null?lt?Z&&i.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,xe,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,Me,Ne,Pe.width,Pe.height,0,Pe.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?Z&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,xe,we,Pe.data):i.texImage2D(r.TEXTURE_2D,Me,Ne,Pe.width,Pe.height,0,xe,we,Pe.data)}else if(b.isDataArrayTexture)if(lt){if(St&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Ne,ae.width,ae.height,ae.depth),Z)if(b.layerUpdates.size>0){const Me=m_(ae.width,ae.height,b.format,b.type);for(const Ge of b.layerUpdates){const Fe=ae.data.subarray(Ge*Me/ae.data.BYTES_PER_ELEMENT,(Ge+1)*Me/ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ge,ae.width,ae.height,1,xe,we,Fe)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,xe,we,ae.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,ae.width,ae.height,ae.depth,0,xe,we,ae.data);else if(b.isData3DTexture)lt?(St&&i.texStorage3D(r.TEXTURE_3D,Ie,Ne,ae.width,ae.height,ae.depth),Z&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,xe,we,ae.data)):i.texImage3D(r.TEXTURE_3D,0,Ne,ae.width,ae.height,ae.depth,0,xe,we,ae.data);else if(b.isFramebufferTexture){if(St)if(lt)i.texStorage2D(r.TEXTURE_2D,Ie,Ne,ae.width,ae.height);else{let Me=ae.width,Ge=ae.height;for(let Fe=0;Fe<Ie;Fe++)i.texImage2D(r.TEXTURE_2D,Fe,Ne,Me,Ge,0,xe,we,null),Me>>=1,Ge>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const Me=r.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),ae.parentNode!==Me){Me.appendChild(ae),v.add(b),Me.onpaint=ot=>{const sn=ot.changedElements;for(const It of v)sn.includes(It.image)&&(It.needsUpdate=!0)},Me.requestPaint();return}const Ge=0,Fe=r.RGBA,Ue=r.RGBA,Qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Ge,Fe,Ue,Qe,ae),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(at.length>0){if(lt&&St){const Me=Oe(at[0]);i.texStorage2D(r.TEXTURE_2D,Ie,Ne,Me.width,Me.height)}for(let Me=0,Ge=at.length;Me<Ge;Me++)Pe=at[Me],lt?Z&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,xe,we,Pe):i.texImage2D(r.TEXTURE_2D,Me,Ne,xe,we,Pe);b.generateMipmaps=!1}else if(lt){if(St){const Me=Oe(ae);i.texStorage2D(r.TEXTURE_2D,Ie,Ne,Me.width,Me.height)}Z&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,xe,we,ae)}else i.texImage2D(r.TEXTURE_2D,0,Ne,xe,we,ae);y(b)&&N(W),De.__version=me.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ze(C,b,$){if(b.image.length!==6)return;const W=ie(C,b),ge=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+$);const me=s.get(ge);if(ge.version!==me.__version||W===!0){i.activeTexture(r.TEXTURE0+$);const De=wt.getPrimaries(wt.workingColorSpace),V=b.colorSpace===fs?null:wt.getPrimaries(b.colorSpace),ae=b.colorSpace===fs||De===V?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const xe=b.isCompressedTexture||b.image[0].isCompressedTexture,we=b.image[0]&&b.image[0].isDataTexture,Ne=[];for(let Ue=0;Ue<6;Ue++)!xe&&!we?Ne[Ue]=S(b.image[Ue],!0,l.maxCubemapSize):Ne[Ue]=we?b.image[Ue].image:b.image[Ue],Ne[Ue]=B(b,Ne[Ue]);const Pe=Ne[0],at=c.convert(b.format,b.colorSpace),lt=c.convert(b.type),St=L(b.internalFormat,at,lt,b.normalized,b.colorSpace),Z=b.isVideoTexture!==!0,Ie=me.__version===void 0||W===!0,Me=ge.dataReady;let Ge=P(b,Pe);Le(r.TEXTURE_CUBE_MAP,b);let Fe;if(xe){Z&&Ie&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,St,Pe.width,Pe.height);for(let Ue=0;Ue<6;Ue++){Fe=Ne[Ue].mipmaps;for(let Qe=0;Qe<Fe.length;Qe++){const ot=Fe[Qe];b.format!==Mi?at!==null?Z?Me&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe,0,0,ot.width,ot.height,at,ot.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe,St,ot.width,ot.height,0,ot.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe,0,0,ot.width,ot.height,at,lt,ot.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe,St,ot.width,ot.height,0,at,lt,ot.data)}}}else{if(Fe=b.mipmaps,Z&&Ie){Fe.length>0&&Ge++;const Ue=Oe(Ne[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,St,Ue.width,Ue.height)}for(let Ue=0;Ue<6;Ue++)if(we){Z?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,Ne[Ue].width,Ne[Ue].height,at,lt,Ne[Ue].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,St,Ne[Ue].width,Ne[Ue].height,0,at,lt,Ne[Ue].data);for(let Qe=0;Qe<Fe.length;Qe++){const sn=Fe[Qe].image[Ue].image;Z?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe+1,0,0,sn.width,sn.height,at,lt,sn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe+1,St,sn.width,sn.height,0,at,lt,sn.data)}}else{Z?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,at,lt,Ne[Ue]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,St,at,lt,Ne[Ue]);for(let Qe=0;Qe<Fe.length;Qe++){const ot=Fe[Qe];Z?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe+1,0,0,at,lt,ot.image[Ue]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe+1,St,at,lt,ot.image[Ue])}}}y(b)&&N(r.TEXTURE_CUBE_MAP),me.__version=ge.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ke(C,b,$,W,ge,me){const De=c.convert($.format,$.colorSpace),V=c.convert($.type),ae=L($.internalFormat,De,V,$.normalized,$.colorSpace),xe=s.get(b),we=s.get($);if(we.__renderTarget=b,!xe.__hasExternalTextures){const Ne=Math.max(1,b.width>>me),Pe=Math.max(1,b.height>>me);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?i.texImage3D(ge,me,ae,Ne,Pe,b.depth,0,De,V,null):i.texImage2D(ge,me,ae,Ne,Pe,0,De,V,null)}i.bindFramebuffer(r.FRAMEBUFFER,C),ut(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,ge,we.__webglTexture,0,Tt(b)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,ge,we.__webglTexture,me),i.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(C,b,$){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer){const W=b.depthTexture,ge=W&&W.isDepthTexture?W.type:null,me=j(b.stencilBuffer,ge),De=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ut(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Tt(b),me,b.width,b.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Tt(b),me,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,me,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,De,r.RENDERBUFFER,C)}else{const W=b.textures;for(let ge=0;ge<W.length;ge++){const me=W[ge],De=c.convert(me.format,me.colorSpace),V=c.convert(me.type),ae=L(me.internalFormat,De,V,me.normalized,me.colorSpace);ut(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Tt(b),ae,b.width,b.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Tt(b),ae,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ae,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function rt(C,b,$){const W=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(b.depthTexture);if(ge.__renderTarget=b,(!ge.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),ge.__webglTexture===void 0){ge.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),Le(r.TEXTURE_CUBE_MAP,b.depthTexture);const xe=c.convert(b.depthTexture.format),we=c.convert(b.depthTexture.type);let Ne;b.depthTexture.format===wa?Ne=r.DEPTH_COMPONENT24:b.depthTexture.format===js&&(Ne=r.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ne,b.width,b.height,0,xe,we,null)}}else re(b.depthTexture,0);const me=ge.__webglTexture,De=Tt(b),V=W?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,ae=b.depthTexture.format===js?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===wa)ut(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,V,me,0,De):r.framebufferTexture2D(r.FRAMEBUFFER,ae,V,me,0);else if(b.depthTexture.format===js)ut(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,V,me,0,De):r.framebufferTexture2D(r.FRAMEBUFFER,ae,V,me,0);else throw new Error("Unknown depthTexture format")}function ct(C){const b=s.get(C),$=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const W=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),W){const ge=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,W.removeEventListener("dispose",ge)};W.addEventListener("dispose",ge),b.__depthDisposeCallback=ge}b.__boundDepthTexture=W}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if($)for(let W=0;W<6;W++)rt(b.__webglFramebuffer[W],C,W);else{const W=C.texture.mipmaps;W&&W.length>0?rt(b.__webglFramebuffer[0],C,0):rt(b.__webglFramebuffer,C,0)}else if($){b.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[W]),b.__webglDepthbuffer[W]===void 0)b.__webglDepthbuffer[W]=r.createRenderbuffer(),bt(b.__webglDepthbuffer[W],C,!1);else{const ge=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=b.__webglDepthbuffer[W];r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,me)}}else{const W=C.texture.mipmaps;if(W&&W.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),bt(b.__webglDepthbuffer,C,!1);else{const ge=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,me)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function xt(C,b,$){const W=s.get(C);b!==void 0&&Ke(W.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&ct(C)}function $e(C){const b=C.texture,$=s.get(C),W=s.get(b);C.addEventListener("dispose",A);const ge=C.textures,me=C.isWebGLCubeRenderTarget===!0,De=ge.length>1;if(De||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=b.version,f.memory.textures++),me){$.__webglFramebuffer=[];for(let V=0;V<6;V++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[V]=[];for(let ae=0;ae<b.mipmaps.length;ae++)$.__webglFramebuffer[V][ae]=r.createFramebuffer()}else $.__webglFramebuffer[V]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let V=0;V<b.mipmaps.length;V++)$.__webglFramebuffer[V]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(De)for(let V=0,ae=ge.length;V<ae;V++){const xe=s.get(ge[V]);xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture(),f.memory.textures++)}if(C.samples>0&&ut(C)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let V=0;V<ge.length;V++){const ae=ge[V];$.__webglColorRenderbuffer[V]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[V]);const xe=c.convert(ae.format,ae.colorSpace),we=c.convert(ae.type),Ne=L(ae.internalFormat,xe,we,ae.normalized,ae.colorSpace,C.isXRRenderTarget===!0),Pe=Tt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,Ne,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.RENDERBUFFER,$.__webglColorRenderbuffer[V])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),bt($.__webglDepthRenderbuffer,C,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(me){i.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),Le(r.TEXTURE_CUBE_MAP,b);for(let V=0;V<6;V++)if(b.mipmaps&&b.mipmaps.length>0)for(let ae=0;ae<b.mipmaps.length;ae++)Ke($.__webglFramebuffer[V][ae],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ae);else Ke($.__webglFramebuffer[V],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);y(b)&&N(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let V=0,ae=ge.length;V<ae;V++){const xe=ge[V],we=s.get(xe);let Ne=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ne=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ne,we.__webglTexture),Le(Ne,xe),Ke($.__webglFramebuffer,C,xe,r.COLOR_ATTACHMENT0+V,Ne,0),y(xe)&&N(Ne)}i.unbindTexture()}else{let V=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(V=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(V,W.__webglTexture),Le(V,b),b.mipmaps&&b.mipmaps.length>0)for(let ae=0;ae<b.mipmaps.length;ae++)Ke($.__webglFramebuffer[ae],C,b,r.COLOR_ATTACHMENT0,V,ae);else Ke($.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,V,0);y(b)&&N(V),i.unbindTexture()}C.depthBuffer&&ct(C)}function Pt(C){const b=C.textures;for(let $=0,W=b.length;$<W;$++){const ge=b[$];if(y(ge)){const me=U(C),De=s.get(ge).__webglTexture;i.bindTexture(me,De),N(me),i.unbindTexture()}}}const vt=[],$t=[];function J(C){if(C.samples>0){if(ut(C)===!1){const b=C.textures,$=C.width,W=C.height;let ge=r.COLOR_BUFFER_BIT;const me=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=s.get(C),V=b.length>1;if(V)for(let xe=0;xe<b.length;xe++)i.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const ae=C.texture.mipmaps;ae&&ae.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let xe=0;xe<b.length;xe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),V){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,De.__webglColorRenderbuffer[xe]);const we=s.get(b[xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,we,0)}r.blitFramebuffer(0,0,$,W,0,0,$,W,ge,r.NEAREST),m===!0&&(vt.length=0,$t.length=0,vt.push(r.COLOR_ATTACHMENT0+xe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(vt.push(me),$t.push(me),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,$t)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,vt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),V)for(let xe=0;xe<b.length;xe++){i.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,De.__webglColorRenderbuffer[xe]);const we=s.get(b[xe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,we,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&m){const b=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Tt(C){return Math.min(l.maxSamples,C.samples)}function ut(C){const b=s.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xe(C){const b=f.render.frame;x.get(C)!==b&&(x.set(C,b),C.update())}function B(C,b){const $=C.colorSpace,W=C.format,ge=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||$!==du&&$!==fs&&(wt.getTransfer($)===Xt?(W!==Mi||ge!==yi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",$)),b}function Oe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=Y,this.setTexture2D=re,this.setTexture2DArray=_e,this.setTexture3D=ye,this.setTextureCube=F,this.rebindTextures=xt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function q3(r,e){function i(s,l=fs){let c;const f=wt.getTransfer(l);if(s===yi)return r.UNSIGNED_BYTE;if(s===wp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Dp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===_x)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===xx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===gx)return r.BYTE;if(s===vx)return r.SHORT;if(s===ul)return r.UNSIGNED_SHORT;if(s===Cp)return r.INT;if(s===Ji)return r.UNSIGNED_INT;if(s===Ii)return r.FLOAT;if(s===$i)return r.HALF_FLOAT;if(s===Sx)return r.ALPHA;if(s===yx)return r.RGB;if(s===Mi)return r.RGBA;if(s===wa)return r.DEPTH_COMPONENT;if(s===js)return r.DEPTH_STENCIL;if(s===Mx)return r.RED;if(s===Np)return r.RED_INTEGER;if(s===Ys)return r.RG;if(s===Up)return r.RG_INTEGER;if(s===Lp)return r.RGBA_INTEGER;if(s===iu||s===au||s===su||s===ru)if(f===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===iu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===iu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===su)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ru)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fh||s===Bh||s===zh||s===Hh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Fh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gh||s===Vh||s===kh||s===jh||s===Xh||s===uu||s===Wh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Gh||s===Vh)return f===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===kh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===jh)return c.COMPRESSED_R11_EAC;if(s===Xh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===uu)return c.COMPRESSED_RG11_EAC;if(s===Wh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===qh||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===ep||s===tp||s===np||s===ip||s===ap||s===sp||s===rp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===qh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jh)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$h)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ep)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===tp)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===np)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ip)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ap)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sp)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rp)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===op||s===lp||s===cp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===op)return f===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===lp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===cp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===up||s===fp||s===fu||s===dp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===up)return c.COMPRESSED_RED_RGTC1_EXT;if(s===fp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const Y3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class K3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Ox(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ea({vertexShader:Y3,fragmentShader:Z3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ei(new Xs(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q3 extends Ks{constructor(e,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,x=null,v=null,_=null,E=null,T=null;const R=typeof XRWebGLBinding<"u",S=new K3,y={},N=i.getContextAttributes();let U=null,L=null;const j=[],P=[],I=new ht;let A=null;const z=new Oi;z.viewport=new ln;const K=new Oi;K.viewport=new ln;const G=[z,K],k=new rb;let se=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let Re=j[ie];return Re===void 0&&(Re=new Qd,j[ie]=Re),Re.getTargetRaySpace()},this.getControllerGrip=function(ie){let Re=j[ie];return Re===void 0&&(Re=new Qd,j[ie]=Re),Re.getGripSpace()},this.getHand=function(ie){let Re=j[ie];return Re===void 0&&(Re=new Qd,j[ie]=Re),Re.getHandSpace()};function Y(ie){const Re=P.indexOf(ie.inputSource);if(Re===-1)return;const Ae=j[Re];Ae!==void 0&&(Ae.update(ie.inputSource,ie.frame,h||f),Ae.dispatchEvent({type:ie.type,data:ie.inputSource}))}function O(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",H);for(let ie=0;ie<j.length;ie++){const Re=P[ie];Re!==null&&(P[ie]=null,j[ie].disconnect(Re))}se=null,ce=null,S.reset();for(const ie in y)delete y[ie];e.setRenderTarget(U),E=null,_=null,v=null,l=null,L=null,Le.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,s.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){p=ie,s.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(ie){h=ie},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",O),l.addEventListener("inputsourceschange",H),N.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Be=null,Ze=null;N.depth&&(Ze=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ae=N.stencil?js:wa,Be=N.stencil?fl:Ji);const Ke={colorFormat:i.RGBA8,depthFormat:Ze,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(Ke),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new Bi(_.textureWidth,_.textureHeight,{format:Mi,type:yi,depthTexture:new Yr(_.textureWidth,_.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ae={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Ae),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),L=new Bi(E.framebufferWidth,E.framebufferHeight,{format:Mi,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),Le.setContext(l),Le.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(ie){for(let Re=0;Re<ie.removed.length;Re++){const Ae=ie.removed[Re],Be=P.indexOf(Ae);Be>=0&&(P[Be]=null,j[Be].disconnect(Ae))}for(let Re=0;Re<ie.added.length;Re++){const Ae=ie.added[Re];let Be=P.indexOf(Ae);if(Be===-1){for(let Ke=0;Ke<j.length;Ke++)if(Ke>=P.length){P.push(Ae),Be=Ke;break}else if(P[Ke]===null){P[Ke]=Ae,Be=Ke;break}if(Be===-1)break}const Ze=j[Be];Ze&&Ze.connect(Ae)}}const re=new de,_e=new de;function ye(ie,Re,Ae){re.setFromMatrixPosition(Re.matrixWorld),_e.setFromMatrixPosition(Ae.matrixWorld);const Be=re.distanceTo(_e),Ze=Re.projectionMatrix.elements,Ke=Ae.projectionMatrix.elements,bt=Ze[14]/(Ze[10]-1),rt=Ze[14]/(Ze[10]+1),ct=(Ze[9]+1)/Ze[5],xt=(Ze[9]-1)/Ze[5],$e=(Ze[8]-1)/Ze[0],Pt=(Ke[8]+1)/Ke[0],vt=bt*$e,$t=bt*Pt,J=Be/(-$e+Pt),Tt=J*-$e;if(Re.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Tt),ie.translateZ(J),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ze[10]===-1)ie.projectionMatrix.copy(Re.projectionMatrix),ie.projectionMatrixInverse.copy(Re.projectionMatrixInverse);else{const ut=bt+J,Xe=rt+J,B=vt-Tt,Oe=$t+(Be-Tt),C=ct*rt/Xe*ut,b=xt*rt/Xe*ut;ie.projectionMatrix.makePerspective(B,Oe,C,b,ut,Xe),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function F(ie,Re){Re===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(Re.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let Re=ie.near,Ae=ie.far;S.texture!==null&&(S.depthNear>0&&(Re=S.depthNear),S.depthFar>0&&(Ae=S.depthFar)),k.near=K.near=z.near=Re,k.far=K.far=z.far=Ae,(se!==k.near||ce!==k.far)&&(l.updateRenderState({depthNear:k.near,depthFar:k.far}),se=k.near,ce=k.far),k.layers.mask=ie.layers.mask|6,z.layers.mask=k.layers.mask&-5,K.layers.mask=k.layers.mask&-3;const Be=ie.parent,Ze=k.cameras;F(k,Be);for(let Ke=0;Ke<Ze.length;Ke++)F(Ze[Ke],Be);Ze.length===2?ye(k,z,K):k.projectionMatrix.copy(z.projectionMatrix),te(ie,k,Be)};function te(ie,Re,Ae){Ae===null?ie.matrix.copy(Re.matrixWorld):(ie.matrix.copy(Ae.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(Re.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(Re.projectionMatrix),ie.projectionMatrixInverse.copy(Re.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=pp*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(ie){m=ie,_!==null&&(_.fixedFoveation=ie),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ie)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(k)},this.getCameraTexture=function(ie){return y[ie]};let Te=null;function Ce(ie,Re){if(x=Re.getViewerPose(h||f),T=Re,x!==null){const Ae=x.views;E!==null&&(e.setRenderTargetFramebuffer(L,E.framebuffer),e.setRenderTarget(L));let Be=!1;Ae.length!==k.cameras.length&&(k.cameras.length=0,Be=!0);for(let rt=0;rt<Ae.length;rt++){const ct=Ae[rt];let xt=null;if(E!==null)xt=E.getViewport(ct);else{const Pt=v.getViewSubImage(_,ct);xt=Pt.viewport,rt===0&&(e.setRenderTargetTextures(L,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(L))}let $e=G[rt];$e===void 0&&($e=new Oi,$e.layers.enable(rt),$e.viewport=new ln,G[rt]=$e),$e.matrix.fromArray(ct.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(ct.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(xt.x,xt.y,xt.width,xt.height),rt===0&&(k.matrix.copy($e.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Be===!0&&k.cameras.push($e)}const Ze=l.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){v=s.getBinding();const rt=v.getDepthInformation(Ae[0]);rt&&rt.isValid&&rt.texture&&S.init(rt,l.renderState)}if(Ze&&Ze.includes("camera-access")&&R){e.state.unbindTexture(),v=s.getBinding();for(let rt=0;rt<Ae.length;rt++){const ct=Ae[rt].camera;if(ct){let xt=y[ct];xt||(xt=new Ox,y[ct]=xt);const $e=v.getCameraImage(ct);xt.sourceTexture=$e}}}}for(let Ae=0;Ae<j.length;Ae++){const Be=P[Ae],Ze=j[Ae];Be!==null&&Ze!==void 0&&Ze.update(Be,Re,h||f)}Te&&Te(ie,Re),Re.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Re}),T=null}const Le=new Fx;Le.setAnimationLoop(Ce),this.setAnimationLoop=function(ie){Te=ie},this.dispose=function(){}}}const J3=new xn,jx=new dt;jx.set(-1,0,0,0,1,0,0,0,1);function $3(r,e){function i(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function s(S,y){y.color.getRGB(S.fogColor.value,Px(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function l(S,y,N,U,L){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),v(S,y)):y.isMeshPhongMaterial?(c(S,y),x(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),_(S,y),y.isMeshPhysicalMaterial&&E(S,y,L)):y.isMeshMatcapMaterial?(c(S,y),T(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),R(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(f(S,y),y.isLineDashedMaterial&&p(S,y)):y.isPointsMaterial?m(S,y,N,U):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,i(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===qn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,i(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===qn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,i(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,i(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const N=e.get(y),U=N.envMap,L=N.envMapRotation;U&&(S.envMap.value=U,S.envMapRotation.value.setFromMatrix4(J3.makeRotationFromEuler(L)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(jx),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,S.aoMapTransform))}function f(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform))}function p(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function m(S,y,N,U){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*N,S.scale.value=U*.5,y.map&&(S.map.value=y.map,i(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function x(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function E(S,y,N){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===qn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,y){y.matcap&&(S.matcap.value=y.matcap)}function R(S,y){const N=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function eR(r,e,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,U){const L=U.program;s.uniformBlockBinding(N,L)}function h(N,U){let L=l[N.id];L===void 0&&(T(N),L=x(N),l[N.id]=L,N.addEventListener("dispose",S));const j=U.program;s.updateUBOMapping(N,j);const P=e.render.frame;c[N.id]!==P&&(_(N),c[N.id]=P)}function x(N){const U=v();N.__bindingPointIndex=U;const L=r.createBuffer(),j=N.__size,P=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,j,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,L),L}function v(){for(let N=0;N<p;N++)if(f.indexOf(N)===-1)return f.push(N),N;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const U=l[N.id],L=N.uniforms,j=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let P=0,I=L.length;P<I;P++){const A=Array.isArray(L[P])?L[P]:[L[P]];for(let z=0,K=A.length;z<K;z++){const G=A[z];if(E(G,P,z,j)===!0){const k=G.__offset,se=Array.isArray(G.value)?G.value:[G.value];let ce=0;for(let Y=0;Y<se.length;Y++){const O=se[Y],H=R(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,k+ce,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):ArrayBuffer.isView(O)?G.__data.set(new O.constructor(O.buffer,O.byteOffset,G.__data.length)):(O.toArray(G.__data,ce),ce+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(N,U,L,j){const P=N.value,I=U+"_"+L;if(j[I]===void 0)return typeof P=="number"||typeof P=="boolean"?j[I]=P:ArrayBuffer.isView(P)?j[I]=P.slice():j[I]=P.clone(),!0;{const A=j[I];if(typeof P=="number"||typeof P=="boolean"){if(A!==P)return j[I]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(A.equals(P)===!1)return A.copy(P),!0}}return!1}function T(N){const U=N.uniforms;let L=0;const j=16;for(let I=0,A=U.length;I<A;I++){const z=Array.isArray(U[I])?U[I]:[U[I]];for(let K=0,G=z.length;K<G;K++){const k=z[K],se=Array.isArray(k.value)?k.value:[k.value];for(let ce=0,Y=se.length;ce<Y;ce++){const O=se[ce],H=R(O),re=L%j,_e=re%H.boundary,ye=re+_e;L+=_e,ye!==0&&j-ye<H.storage&&(L+=j-ye),k.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=L,L+=H.storage}}}const P=L%j;return P>0&&(L+=j-P),N.__size=L,N.__cache={},this}function R(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(U.boundary=16,U.storage=N.byteLength):st("WebGLRenderer: Unsupported uniform value type.",N),U}function S(N){const U=N.target;U.removeEventListener("dispose",S);const L=f.indexOf(U.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function y(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:m,update:h,dispose:y}}const tR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function nR(){return Yi===null&&(Yi=new Nx(tR,16,16,Ys,$i),Yi.name="DFG_LUT",Yi.minFilter=_n,Yi.magFilter=_n,Yi.wrapS=oi,Yi.wrapT=oi,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class iR{constructor(e={}){const{canvas:i=bE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:E=yi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=f;const R=E,S=new Set([Lp,Up,Np]),y=new Set([yi,Ji,ul,fl,wp,Dp]),N=new Uint32Array(4),U=new Int32Array(4),L=new de;let j=null,P=null;const I=[],A=[];let z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const K=this;let G=!1,k=null;this._outputColorSpace=Si;let se=0,ce=0,Y=null,O=-1,H=null;const re=new ln,_e=new ln;let ye=null;const F=new Bt(0);let te=0,Te=i.width,Ce=i.height,Le=1,ie=null,Re=null;const Ae=new ln(0,0,Te,Ce),Be=new ln(0,0,Te,Ce);let Ze=!1;const Ke=new Ux;let bt=!1,rt=!1;const ct=new xn,xt=new de,$e=new ln,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function $t(){return Y===null?Le:1}let J=s;function Tt(w,ee){return i.getContext(w,ee)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rp}`),i.addEventListener("webglcontextlost",Ue,!1),i.addEventListener("webglcontextrestored",Qe,!1),i.addEventListener("webglcontextcreationerror",ot,!1),J===null){const ee="webgl2";if(J=Tt(ee,w),J===null)throw Tt(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Nt("WebGLRenderer: "+w.message),w}let ut,Xe,B,Oe,C,b,$,W,ge,me,De,V,ae,xe,we,Ne,Pe,at,lt,St,Z,Ie,Me;function Ge(){ut=new nA(J),ut.init(),Z=new q3(J,ut),Xe=new YT(J,ut,e,Z),B=new X3(J,ut),Xe.reversedDepthBuffer&&_&&B.buffers.depth.setReversed(!0),Oe=new sA(J),C=new N3,b=new W3(J,ut,B,C,Xe,Z,Oe),$=new tA(K),W=new cb(J),Ie=new WT(J,W),ge=new iA(J,W,Oe,Ie),me=new oA(J,ge,W,Ie,Oe),at=new rA(J,Xe,b),we=new ZT(C),De=new D3(K,$,ut,Xe,Ie,we),V=new $3(K,C),ae=new L3,xe=new z3(ut),Pe=new XT(K,$,B,me,T,m),Ne=new j3(K,me,Xe),Me=new eR(J,Oe,Xe,B),lt=new qT(J,ut,Oe),St=new aA(J,ut,Oe),Oe.programs=De.programs,K.capabilities=Xe,K.extensions=ut,K.properties=C,K.renderLists=ae,K.shadowMap=Ne,K.state=B,K.info=Oe}Ge(),R!==yi&&(z=new cA(R,i.width,i.height,l,c));const Fe=new Q3(K,J);this.xr=Fe,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const w=ut.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ut.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(w){w!==void 0&&(Le=w,this.setSize(Te,Ce,!1))},this.getSize=function(w){return w.set(Te,Ce)},this.setSize=function(w,ee,he=!0){if(Fe.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=w,Ce=ee,i.width=Math.floor(w*Le),i.height=Math.floor(ee*Le),he===!0&&(i.style.width=w+"px",i.style.height=ee+"px"),z!==null&&z.setSize(i.width,i.height),this.setViewport(0,0,w,ee)},this.getDrawingBufferSize=function(w){return w.set(Te*Le,Ce*Le).floor()},this.setDrawingBufferSize=function(w,ee,he){Te=w,Ce=ee,Le=he,i.width=Math.floor(w*he),i.height=Math.floor(ee*he),this.setViewport(0,0,w,ee)},this.setEffects=function(w){if(R===yi){Nt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let ee=0;ee<w.length;ee++)if(w[ee].isOutputPass===!0){st("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(re)},this.getViewport=function(w){return w.copy(Ae)},this.setViewport=function(w,ee,he,ue){w.isVector4?Ae.set(w.x,w.y,w.z,w.w):Ae.set(w,ee,he,ue),B.viewport(re.copy(Ae).multiplyScalar(Le).round())},this.getScissor=function(w){return w.copy(Be)},this.setScissor=function(w,ee,he,ue){w.isVector4?Be.set(w.x,w.y,w.z,w.w):Be.set(w,ee,he,ue),B.scissor(_e.copy(Be).multiplyScalar(Le).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(w){B.setScissorTest(Ze=w)},this.setOpaqueSort=function(w){ie=w},this.setTransparentSort=function(w){Re=w},this.getClearColor=function(w){return w.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(w=!0,ee=!0,he=!0){let ue=0;if(w){let fe=!1;if(Y!==null){const He=Y.texture.format;fe=S.has(He)}if(fe){const He=Y.texture.type,je=y.has(He),ze=Pe.getClearColor(),qe=Pe.getClearAlpha(),We=ze.r,tt=ze.g,pt=ze.b;je?(N[0]=We,N[1]=tt,N[2]=pt,N[3]=qe,J.clearBufferuiv(J.COLOR,0,N)):(U[0]=We,U[1]=tt,U[2]=pt,U[3]=qe,J.clearBufferiv(J.COLOR,0,U))}else ue|=J.COLOR_BUFFER_BIT}ee&&(ue|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ue|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&J.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),k=w},this.dispose=function(){i.removeEventListener("webglcontextlost",Ue,!1),i.removeEventListener("webglcontextrestored",Qe,!1),i.removeEventListener("webglcontextcreationerror",ot,!1),Pe.dispose(),ae.dispose(),xe.dispose(),C.dispose(),$.dispose(),me.dispose(),Ie.dispose(),Me.dispose(),De.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",io),Fe.removeEventListener("sessionend",ao),Un.stop()};function Ue(w){w.preventDefault(),Xv("WebGLRenderer: Context Lost."),G=!0}function Qe(){Xv("WebGLRenderer: Context Restored."),G=!1;const w=Oe.autoReset,ee=Ne.enabled,he=Ne.autoUpdate,ue=Ne.needsUpdate,fe=Ne.type;Ge(),Oe.autoReset=w,Ne.enabled=ee,Ne.autoUpdate=he,Ne.needsUpdate=ue,Ne.type=fe}function ot(w){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function sn(w){const ee=w.target;ee.removeEventListener("dispose",sn),It(ee)}function It(w){ui(w),C.remove(w)}function ui(w){const ee=C.get(w).programs;ee!==void 0&&(ee.forEach(function(he){De.releaseProgram(he)}),w.isShaderMaterial&&De.releaseShaderCache(w))}this.renderBufferDirect=function(w,ee,he,ue,fe,He){ee===null&&(ee=Pt);const je=fe.isMesh&&fe.matrixWorld.determinant()<0,ze=Ua(w,ee,he,ue,fe);B.setMaterial(ue,je);let qe=he.index,We=1;if(ue.wireframe===!0){if(qe=ge.getWireframeAttribute(he),qe===void 0)return;We=2}const tt=he.drawRange,pt=he.attributes.position;let et=tt.start*We,Ut=(tt.start+tt.count)*We;He!==null&&(et=Math.max(et,He.start*We),Ut=Math.min(Ut,(He.start+He.count)*We)),qe!==null?(et=Math.max(et,0),Ut=Math.min(Ut,qe.count)):pt!=null&&(et=Math.max(et,0),Ut=Math.min(Ut,pt.count));const en=Ut-et;if(en<0||en===1/0)return;Ie.setup(fe,ue,ze,he,qe);let Zt,Ht=lt;if(qe!==null&&(Zt=W.get(qe),Ht=St,Ht.setIndex(Zt)),fe.isMesh)ue.wireframe===!0?(B.setLineWidth(ue.wireframeLinewidth*$t()),Ht.setMode(J.LINES)):Ht.setMode(J.TRIANGLES);else if(fe.isLine){let Gt=ue.linewidth;Gt===void 0&&(Gt=1),B.setLineWidth(Gt*$t()),fe.isLineSegments?Ht.setMode(J.LINES):fe.isLineLoop?Ht.setMode(J.LINE_LOOP):Ht.setMode(J.LINE_STRIP)}else fe.isPoints?Ht.setMode(J.POINTS):fe.isSprite&&Ht.setMode(J.TRIANGLES);if(fe.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))Ht.renderMultiDraw(fe._multiDrawStarts,fe._multiDrawCounts,fe._multiDrawCount);else{const Gt=fe._multiDrawStarts,ke=fe._multiDrawCounts,Ln=fe._multiDrawCount,yt=qe?W.get(qe).bytesPerElement:1,Sn=C.get(ue).currentProgram.getUniforms();for(let Kn=0;Kn<Ln;Kn++)Sn.setValue(J,"_gl_DrawID",Kn),Ht.render(Gt[Kn]/yt,ke[Kn])}else if(fe.isInstancedMesh)Ht.renderInstances(et,en,fe.count);else if(he.isInstancedBufferGeometry){const Gt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,ke=Math.min(he.instanceCount,Gt);Ht.renderInstances(et,en,ke)}else Ht.render(et,en)};function Zn(w,ee,he){w.transparent===!0&&w.side===Ta&&w.forceSinglePass===!1?(w.side=qn,w.needsUpdate=!0,Qs(w,ee,he),w.side=ps,w.needsUpdate=!0,Qs(w,ee,he),w.side=Ta):Qs(w,ee,he)}this.compile=function(w,ee,he=null){he===null&&(he=w),P=xe.get(he),P.init(ee),A.push(P),he.traverseVisible(function(fe){fe.isLight&&fe.layers.test(ee.layers)&&(P.pushLight(fe),fe.castShadow&&P.pushShadow(fe))}),w!==he&&w.traverseVisible(function(fe){fe.isLight&&fe.layers.test(ee.layers)&&(P.pushLight(fe),fe.castShadow&&P.pushShadow(fe))}),P.setupLights();const ue=new Set;return w.traverse(function(fe){if(!(fe.isMesh||fe.isPoints||fe.isLine||fe.isSprite))return;const He=fe.material;if(He)if(Array.isArray(He))for(let je=0;je<He.length;je++){const ze=He[je];Zn(ze,he,fe),ue.add(ze)}else Zn(He,he,fe),ue.add(He)}),P=A.pop(),ue},this.compileAsync=function(w,ee,he=null){const ue=this.compile(w,ee,he);return new Promise(fe=>{function He(){if(ue.forEach(function(je){C.get(je).currentProgram.isReady()&&ue.delete(je)}),ue.size===0){fe(w);return}setTimeout(He,10)}ut.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let ms=null;function no(w){ms&&ms(w)}function io(){Un.stop()}function ao(){Un.start()}const Un=new Fx;Un.setAnimationLoop(no),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(w){ms=w,Fe.setAnimationLoop(w),w===null?Un.stop():Un.start()},Fe.addEventListener("sessionstart",io),Fe.addEventListener("sessionend",ao),this.render=function(w,ee){if(ee!==void 0&&ee.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;k!==null&&k.renderStart(w,ee);const he=Fe.enabled===!0&&Fe.isPresenting===!0,ue=z!==null&&(Y===null||he)&&z.begin(K,Y);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(ee),ee=Fe.getCamera()),w.isScene===!0&&w.onBeforeRender(K,w,ee,Y),P=xe.get(w,A.length),P.init(ee),P.state.textureUnits=b.getTextureUnits(),A.push(P),ct.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Ke.setFromProjectionMatrix(ct,Ki,ee.reversedDepth),rt=this.localClippingEnabled,bt=we.init(this.clippingPlanes,rt),j=ae.get(w,I.length),j.init(),I.push(j),Fe.enabled===!0&&Fe.isPresenting===!0){const je=K.xr.getDepthSensingMesh();je!==null&&cn(je,ee,-1/0,K.sortObjects)}cn(w,ee,0,K.sortObjects),j.finish(),K.sortObjects===!0&&j.sort(ie,Re),vt=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,vt&&Pe.addToRenderList(j,w),this.info.render.frame++,bt===!0&&we.beginShadows();const fe=P.state.shadowsArray;if(Ne.render(fe,w,ee),bt===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ue&&z.hasRenderPass())===!1){const je=j.opaque,ze=j.transmissive;if(P.setupLights(),ee.isArrayCamera){const qe=ee.cameras;if(ze.length>0)for(let We=0,tt=qe.length;We<tt;We++){const pt=qe[We];na(je,ze,w,pt)}vt&&Pe.render(w);for(let We=0,tt=qe.length;We<tt;We++){const pt=qe[We];An(j,w,pt,pt.viewport)}}else ze.length>0&&na(je,ze,w,ee),vt&&Pe.render(w),An(j,w,ee)}Y!==null&&ce===0&&(b.updateMultisampleRenderTarget(Y),b.updateRenderTargetMipmap(Y)),ue&&z.end(K),w.isScene===!0&&w.onAfterRender(K,w,ee),Ie.resetDefaultState(),O=-1,H=null,A.pop(),A.length>0?(P=A[A.length-1],b.setTextureUnits(P.state.textureUnits),bt===!0&&we.setGlobalState(K.clippingPlanes,P.state.camera)):P=null,I.pop(),I.length>0?j=I[I.length-1]:j=null,k!==null&&k.renderEnd()};function cn(w,ee,he,ue){if(w.visible===!1)return;if(w.layers.test(ee.layers)){if(w.isGroup)he=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(ee);else if(w.isLightProbeGrid)P.pushLightProbeGrid(w);else if(w.isLight)P.pushLight(w),w.castShadow&&P.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ke.intersectsSprite(w)){ue&&$e.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ct);const je=me.update(w),ze=w.material;ze.visible&&j.push(w,je,ze,he,$e.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ke.intersectsObject(w))){const je=me.update(w),ze=w.material;if(ue&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),$e.copy(w.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),$e.copy(je.boundingSphere.center)),$e.applyMatrix4(w.matrixWorld).applyMatrix4(ct)),Array.isArray(ze)){const qe=je.groups;for(let We=0,tt=qe.length;We<tt;We++){const pt=qe[We],et=ze[pt.materialIndex];et&&et.visible&&j.push(w,je,et,he,$e.z,pt)}}else ze.visible&&j.push(w,je,ze,he,$e.z,null)}}const He=w.children;for(let je=0,ze=He.length;je<ze;je++)cn(He[je],ee,he,ue)}function An(w,ee,he,ue){const{opaque:fe,transmissive:He,transparent:je}=w;P.setupLightsView(he),bt===!0&&we.setGlobalState(K.clippingPlanes,he),ue&&B.viewport(re.copy(ue)),fe.length>0&&Da(fe,ee,he),He.length>0&&Da(He,ee,he),je.length>0&&Da(je,ee,he),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function na(w,ee,he,ue){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ue.id]===void 0){const et=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ue.id]=new Bi(1,1,{generateMipmaps:!0,type:et?$i:yi,minFilter:ks,samples:Math.max(4,Xe.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const He=P.state.transmissionRenderTarget[ue.id],je=ue.viewport||re;He.setSize(je.z*K.transmissionResolutionScale,je.w*K.transmissionResolutionScale);const ze=K.getRenderTarget(),qe=K.getActiveCubeFace(),We=K.getActiveMipmapLevel();K.setRenderTarget(He),K.getClearColor(F),te=K.getClearAlpha(),te<1&&K.setClearColor(16777215,.5),K.clear(),vt&&Pe.render(he);const tt=K.toneMapping;K.toneMapping=Qi;const pt=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),P.setupLightsView(ue),bt===!0&&we.setGlobalState(K.clippingPlanes,ue),Da(w,he,ue),b.updateMultisampleRenderTarget(He),b.updateRenderTargetMipmap(He),ut.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ut=0,en=ee.length;Ut<en;Ut++){const Zt=ee[Ut],{object:Ht,geometry:Gt,material:ke,group:Ln}=Zt;if(ke.side===Ta&&Ht.layers.test(ue.layers)){const yt=ke.side;ke.side=qn,ke.needsUpdate=!0,_l(Ht,he,ue,Gt,ke,Ln),ke.side=yt,ke.needsUpdate=!0,et=!0}}et===!0&&(b.updateMultisampleRenderTarget(He),b.updateRenderTargetMipmap(He))}K.setRenderTarget(ze,qe,We),K.setClearColor(F,te),pt!==void 0&&(ue.viewport=pt),K.toneMapping=tt}function Da(w,ee,he){const ue=ee.isScene===!0?ee.overrideMaterial:null;for(let fe=0,He=w.length;fe<He;fe++){const je=w[fe],{object:ze,geometry:qe,group:We}=je;let tt=je.material;tt.allowOverride===!0&&ue!==null&&(tt=ue),ze.layers.test(he.layers)&&_l(ze,ee,he,qe,tt,We)}}function _l(w,ee,he,ue,fe,He){w.onBeforeRender(K,ee,he,ue,fe,He),w.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),fe.onBeforeRender(K,ee,he,ue,w,He),fe.transparent===!0&&fe.side===Ta&&fe.forceSinglePass===!1?(fe.side=qn,fe.needsUpdate=!0,K.renderBufferDirect(he,ee,ue,fe,w,He),fe.side=ps,fe.needsUpdate=!0,K.renderBufferDirect(he,ee,ue,fe,w,He),fe.side=Ta):K.renderBufferDirect(he,ee,ue,fe,w,He),w.onAfterRender(K,ee,he,ue,fe,He)}function Qs(w,ee,he){ee.isScene!==!0&&(ee=Pt);const ue=C.get(w),fe=P.state.lights,He=P.state.shadowsArray,je=fe.state.version,ze=De.getParameters(w,fe.state,He,ee,he,P.state.lightProbeGridArray),qe=De.getProgramCacheKey(ze);let We=ue.programs;ue.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?ee.environment:null,ue.fog=ee.fog;const tt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ue.envMap=$.get(w.envMap||ue.environment,tt),ue.envMapRotation=ue.environment!==null&&w.envMap===null?ee.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",sn),We=new Map,ue.programs=We);let pt=We.get(qe);if(pt!==void 0){if(ue.currentProgram===pt&&ue.lightsStateVersion===je)return Na(w,ze),pt}else ze.uniforms=De.getUniforms(w),k!==null&&w.isNodeMaterial&&k.build(w,he,ze),w.onBeforeCompile(ze,K),pt=De.acquireProgram(ze,qe),We.set(qe,pt),ue.uniforms=ze.uniforms;const et=ue.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(et.clippingPlanes=we.uniform),Na(w,ze),ue.needsLights=gs(w),ue.lightsStateVersion=je,ue.needsLights&&(et.ambientLightColor.value=fe.state.ambient,et.lightProbe.value=fe.state.probe,et.directionalLights.value=fe.state.directional,et.directionalLightShadows.value=fe.state.directionalShadow,et.spotLights.value=fe.state.spot,et.spotLightShadows.value=fe.state.spotShadow,et.rectAreaLights.value=fe.state.rectArea,et.ltc_1.value=fe.state.rectAreaLTC1,et.ltc_2.value=fe.state.rectAreaLTC2,et.pointLights.value=fe.state.point,et.pointLightShadows.value=fe.state.pointShadow,et.hemisphereLights.value=fe.state.hemi,et.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,et.spotLightMatrix.value=fe.state.spotLightMatrix,et.spotLightMap.value=fe.state.spotLightMap,et.pointShadowMatrix.value=fe.state.pointShadowMatrix),ue.lightProbeGrid=P.state.lightProbeGridArray.length>0,ue.currentProgram=pt,ue.uniformsList=null,pt}function so(w){if(w.uniformsList===null){const ee=w.currentProgram.getUniforms();w.uniformsList=ou.seqWithValue(ee.seq,w.uniforms)}return w.uniformsList}function Na(w,ee){const he=C.get(w);he.outputColorSpace=ee.outputColorSpace,he.batching=ee.batching,he.batchingColor=ee.batchingColor,he.instancing=ee.instancing,he.instancingColor=ee.instancingColor,he.instancingMorph=ee.instancingMorph,he.skinning=ee.skinning,he.morphTargets=ee.morphTargets,he.morphNormals=ee.morphNormals,he.morphColors=ee.morphColors,he.morphTargetsCount=ee.morphTargetsCount,he.numClippingPlanes=ee.numClippingPlanes,he.numIntersection=ee.numClipIntersection,he.vertexAlphas=ee.vertexAlphas,he.vertexTangents=ee.vertexTangents,he.toneMapping=ee.toneMapping}function ro(w,ee){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;L.setFromMatrixPosition(ee.matrixWorld);for(let he=0,ue=w.length;he<ue;he++){const fe=w[he];if(fe.texture!==null&&fe.boundingBox.containsPoint(L))return fe}return null}function Ua(w,ee,he,ue,fe){ee.isScene!==!0&&(ee=Pt),b.resetTextureUnits();const He=ee.fog,je=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?ee.environment:null,ze=Y===null?K.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:wt.workingColorSpace,qe=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,We=$.get(ue.envMap||je,qe),tt=ue.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pt=!!he.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),et=!!he.morphAttributes.position,Ut=!!he.morphAttributes.normal,en=!!he.morphAttributes.color;let Zt=Qi;ue.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Zt=K.toneMapping);const Ht=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Gt=Ht!==void 0?Ht.length:0,ke=C.get(ue),Ln=P.state.lights;if(bt===!0&&(rt===!0||w!==H)){const zt=w===H&&ue.id===O;we.setState(ue,w,zt)}let yt=!1;ue.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ln.state.version||ke.outputColorSpace!==ze||fe.isBatchedMesh&&ke.batching===!1||!fe.isBatchedMesh&&ke.batching===!0||fe.isBatchedMesh&&ke.batchingColor===!0&&fe.colorTexture===null||fe.isBatchedMesh&&ke.batchingColor===!1&&fe.colorTexture!==null||fe.isInstancedMesh&&ke.instancing===!1||!fe.isInstancedMesh&&ke.instancing===!0||fe.isSkinnedMesh&&ke.skinning===!1||!fe.isSkinnedMesh&&ke.skinning===!0||fe.isInstancedMesh&&ke.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&ke.instancingColor===!1&&fe.instanceColor!==null||fe.isInstancedMesh&&ke.instancingMorph===!0&&fe.morphTexture===null||fe.isInstancedMesh&&ke.instancingMorph===!1&&fe.morphTexture!==null||ke.envMap!==We||ue.fog===!0&&ke.fog!==He||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==we.numPlanes||ke.numIntersection!==we.numIntersection)||ke.vertexAlphas!==tt||ke.vertexTangents!==pt||ke.morphTargets!==et||ke.morphNormals!==Ut||ke.morphColors!==en||ke.toneMapping!==Zt||ke.morphTargetsCount!==Gt||!!ke.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,ke.__version=ue.version);let Sn=ke.currentProgram;yt===!0&&(Sn=Qs(ue,ee,fe),k&&ue.isNodeMaterial&&k.onUpdateProgram(ue,Sn,ke));let Kn=!1,Ti=!1,Qn=!1;const Vt=Sn.getUniforms(),tn=ke.uniforms;if(B.useProgram(Sn.program)&&(Kn=!0,Ti=!0,Qn=!0),ue.id!==O&&(O=ue.id,Ti=!0),ke.needsLights){const zt=ro(P.state.lightProbeGridArray,fe);ke.lightProbeGrid!==zt&&(ke.lightProbeGrid=zt,Ti=!0)}if(Kn||H!==w){B.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Vt.setValue(J,"projectionMatrix",w.projectionMatrix),Vt.setValue(J,"viewMatrix",w.matrixWorldInverse);const Vi=Vt.map.cameraPosition;Vi!==void 0&&Vi.setValue(J,xt.setFromMatrixPosition(w.matrixWorld)),Xe.logarithmicDepthBuffer&&Vt.setValue(J,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Vt.setValue(J,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,Ti=!0,Qn=!0)}if(ke.needsLights&&(Ln.state.directionalShadowMap.length>0&&Vt.setValue(J,"directionalShadowMap",Ln.state.directionalShadowMap,b),Ln.state.spotShadowMap.length>0&&Vt.setValue(J,"spotShadowMap",Ln.state.spotShadowMap,b),Ln.state.pointShadowMap.length>0&&Vt.setValue(J,"pointShadowMap",Ln.state.pointShadowMap,b)),fe.isSkinnedMesh){Vt.setOptional(J,fe,"bindMatrix"),Vt.setOptional(J,fe,"bindMatrixInverse");const zt=fe.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Vt.setValue(J,"boneTexture",zt.boneTexture,b))}fe.isBatchedMesh&&(Vt.setOptional(J,fe,"batchingTexture"),Vt.setValue(J,"batchingTexture",fe._matricesTexture,b),Vt.setOptional(J,fe,"batchingIdTexture"),Vt.setValue(J,"batchingIdTexture",fe._indirectTexture,b),Vt.setOptional(J,fe,"batchingColorTexture"),fe._colorsTexture!==null&&Vt.setValue(J,"batchingColorTexture",fe._colorsTexture,b));const Ai=he.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&at.update(fe,he,Sn),(Ti||ke.receiveShadow!==fe.receiveShadow)&&(ke.receiveShadow=fe.receiveShadow,Vt.setValue(J,"receiveShadow",fe.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&ee.environment!==null&&(tn.envMapIntensity.value=ee.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=nR()),Ti){if(Vt.setValue(J,"toneMappingExposure",K.toneMappingExposure),ke.needsLights&&La(tn,Qn),He&&ue.fog===!0&&V.refreshFogUniforms(tn,He),V.refreshMaterialUniforms(tn,ue,Le,Ce,P.state.transmissionRenderTarget[w.id]),ke.needsLights&&ke.lightProbeGrid){const zt=ke.lightProbeGrid;tn.probesSH.value=zt.texture,tn.probesMin.value.copy(zt.boundingBox.min),tn.probesMax.value.copy(zt.boundingBox.max),tn.probesResolution.value.copy(zt.resolution)}ou.upload(J,so(ke),tn,b)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(ou.upload(J,so(ke),tn,b),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Vt.setValue(J,"center",fe.center),Vt.setValue(J,"modelViewMatrix",fe.modelViewMatrix),Vt.setValue(J,"normalMatrix",fe.normalMatrix),Vt.setValue(J,"modelMatrix",fe.matrixWorld),ue.uniformsGroups!==void 0){const zt=ue.uniformsGroups;for(let Vi=0,Pa=zt.length;Vi<Pa;Vi++){const vs=zt[Vi];Me.update(vs,Sn),Me.bind(vs,Sn)}}return Sn}function La(w,ee){w.ambientLightColor.needsUpdate=ee,w.lightProbe.needsUpdate=ee,w.directionalLights.needsUpdate=ee,w.directionalLightShadows.needsUpdate=ee,w.pointLights.needsUpdate=ee,w.pointLightShadows.needsUpdate=ee,w.spotLights.needsUpdate=ee,w.spotLightShadows.needsUpdate=ee,w.rectAreaLights.needsUpdate=ee,w.hemisphereLights.needsUpdate=ee}function gs(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(w,ee,he){const ue=C.get(w);ue.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),C.get(w.texture).__webglTexture=ee,C.get(w.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:he,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,ee){const he=C.get(w);he.__webglFramebuffer=ee,he.__useDefaultFramebuffer=ee===void 0};const Oa=J.createFramebuffer();this.setRenderTarget=function(w,ee=0,he=0){Y=w,se=ee,ce=he;let ue=null,fe=!1,He=!1;if(w){const ze=C.get(w);if(ze.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(J.FRAMEBUFFER,ze.__webglFramebuffer),re.copy(w.viewport),_e.copy(w.scissor),ye=w.scissorTest,B.viewport(re),B.scissor(_e),B.setScissorTest(ye),O=-1;return}else if(ze.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(ze.__hasExternalTextures)b.rebindTextures(w,C.get(w.texture).__webglTexture,C.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const tt=w.depthTexture;if(ze.__boundDepthTexture!==tt){if(tt!==null&&C.has(tt)&&(w.width!==tt.image.width||w.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const qe=w.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(He=!0);const We=C.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[ee])?ue=We[ee][he]:ue=We[ee],fe=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?ue=C.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?ue=We[he]:ue=We,re.copy(w.viewport),_e.copy(w.scissor),ye=w.scissorTest}else re.copy(Ae).multiplyScalar(Le).floor(),_e.copy(Be).multiplyScalar(Le).floor(),ye=Ze;if(he!==0&&(ue=Oa),B.bindFramebuffer(J.FRAMEBUFFER,ue)&&B.drawBuffers(w,ue),B.viewport(re),B.scissor(_e),B.setScissorTest(ye),fe){const ze=C.get(w.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ze.__webglTexture,he)}else if(He){const ze=ee;for(let qe=0;qe<w.textures.length;qe++){const We=C.get(w.textures[qe]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+qe,We.__webglTexture,he,ze)}}else if(w!==null&&he!==0){const ze=C.get(w.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,ze.__webglTexture,he)}O=-1},this.readRenderTargetPixels=function(w,ee,he,ue,fe,He,je,ze=0){if(!(w&&w.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=C.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&je!==void 0&&(qe=qe[je]),qe){B.bindFramebuffer(J.FRAMEBUFFER,qe);try{const We=w.textures[ze],tt=We.format,pt=We.type;if(w.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+ze),!Xe.textureFormatReadable(tt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(pt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=w.width-ue&&he>=0&&he<=w.height-fe&&J.readPixels(ee,he,ue,fe,Z.convert(tt),Z.convert(pt),He)}finally{const We=Y!==null?C.get(Y).__webglFramebuffer:null;B.bindFramebuffer(J.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(w,ee,he,ue,fe,He,je,ze=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=C.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&je!==void 0&&(qe=qe[je]),qe)if(ee>=0&&ee<=w.width-ue&&he>=0&&he<=w.height-fe){B.bindFramebuffer(J.FRAMEBUFFER,qe);const We=w.textures[ze],tt=We.format,pt=We.type;if(w.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+ze),!Xe.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,et),J.bufferData(J.PIXEL_PACK_BUFFER,He.byteLength,J.STREAM_READ),J.readPixels(ee,he,ue,fe,Z.convert(tt),Z.convert(pt),0);const Ut=Y!==null?C.get(Y).__webglFramebuffer:null;B.bindFramebuffer(J.FRAMEBUFFER,Ut);const en=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await TE(J,en,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,et),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,He),J.deleteBuffer(et),J.deleteSync(en),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,ee=null,he=0){const ue=Math.pow(2,-he),fe=Math.floor(w.image.width*ue),He=Math.floor(w.image.height*ue),je=ee!==null?ee.x:0,ze=ee!==null?ee.y:0;b.setTexture2D(w,0),J.copyTexSubImage2D(J.TEXTURE_2D,he,0,0,je,ze,fe,He),B.unbindTexture()};const dn=J.createFramebuffer(),xl=J.createFramebuffer();this.copyTextureToTexture=function(w,ee,he=null,ue=null,fe=0,He=0){let je,ze,qe,We,tt,pt,et,Ut,en;const Zt=w.isCompressedTexture?w.mipmaps[He]:w.image;if(he!==null)je=he.max.x-he.min.x,ze=he.max.y-he.min.y,qe=he.isBox3?he.max.z-he.min.z:1,We=he.min.x,tt=he.min.y,pt=he.isBox3?he.min.z:0;else{const tn=Math.pow(2,-fe);je=Math.floor(Zt.width*tn),ze=Math.floor(Zt.height*tn),w.isDataArrayTexture?qe=Zt.depth:w.isData3DTexture?qe=Math.floor(Zt.depth*tn):qe=1,We=0,tt=0,pt=0}ue!==null?(et=ue.x,Ut=ue.y,en=ue.z):(et=0,Ut=0,en=0);const Ht=Z.convert(ee.format),Gt=Z.convert(ee.type);let ke;ee.isData3DTexture?(b.setTexture3D(ee,0),ke=J.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(b.setTexture2DArray(ee,0),ke=J.TEXTURE_2D_ARRAY):(b.setTexture2D(ee,0),ke=J.TEXTURE_2D),B.activeTexture(J.TEXTURE0),B.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ee.flipY),B.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),B.pixelStorei(J.UNPACK_ALIGNMENT,ee.unpackAlignment);const Ln=B.getParameter(J.UNPACK_ROW_LENGTH),yt=B.getParameter(J.UNPACK_IMAGE_HEIGHT),Sn=B.getParameter(J.UNPACK_SKIP_PIXELS),Kn=B.getParameter(J.UNPACK_SKIP_ROWS),Ti=B.getParameter(J.UNPACK_SKIP_IMAGES);B.pixelStorei(J.UNPACK_ROW_LENGTH,Zt.width),B.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Zt.height),B.pixelStorei(J.UNPACK_SKIP_PIXELS,We),B.pixelStorei(J.UNPACK_SKIP_ROWS,tt),B.pixelStorei(J.UNPACK_SKIP_IMAGES,pt);const Qn=w.isDataArrayTexture||w.isData3DTexture,Vt=ee.isDataArrayTexture||ee.isData3DTexture;if(w.isDepthTexture){const tn=C.get(w),Ai=C.get(ee),zt=C.get(tn.__renderTarget),Vi=C.get(Ai.__renderTarget);B.bindFramebuffer(J.READ_FRAMEBUFFER,zt.__webglFramebuffer),B.bindFramebuffer(J.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Pa=0;Pa<qe;Pa++)Qn&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,C.get(w).__webglTexture,fe,pt+Pa),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,C.get(ee).__webglTexture,He,en+Pa)),J.blitFramebuffer(We,tt,je,ze,et,Ut,je,ze,J.DEPTH_BUFFER_BIT,J.NEAREST);B.bindFramebuffer(J.READ_FRAMEBUFFER,null),B.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(fe!==0||w.isRenderTargetTexture||C.has(w)){const tn=C.get(w),Ai=C.get(ee);B.bindFramebuffer(J.READ_FRAMEBUFFER,dn),B.bindFramebuffer(J.DRAW_FRAMEBUFFER,xl);for(let zt=0;zt<qe;zt++)Qn?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,tn.__webglTexture,fe,pt+zt):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,tn.__webglTexture,fe),Vt?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Ai.__webglTexture,He,en+zt):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ai.__webglTexture,He),fe!==0?J.blitFramebuffer(We,tt,je,ze,et,Ut,je,ze,J.COLOR_BUFFER_BIT,J.NEAREST):Vt?J.copyTexSubImage3D(ke,He,et,Ut,en+zt,We,tt,je,ze):J.copyTexSubImage2D(ke,He,et,Ut,We,tt,je,ze);B.bindFramebuffer(J.READ_FRAMEBUFFER,null),B.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Vt?w.isDataTexture||w.isData3DTexture?J.texSubImage3D(ke,He,et,Ut,en,je,ze,qe,Ht,Gt,Zt.data):ee.isCompressedArrayTexture?J.compressedTexSubImage3D(ke,He,et,Ut,en,je,ze,qe,Ht,Zt.data):J.texSubImage3D(ke,He,et,Ut,en,je,ze,qe,Ht,Gt,Zt):w.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,He,et,Ut,je,ze,Ht,Gt,Zt.data):w.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,He,et,Ut,Zt.width,Zt.height,Ht,Zt.data):J.texSubImage2D(J.TEXTURE_2D,He,et,Ut,je,ze,Ht,Gt,Zt);B.pixelStorei(J.UNPACK_ROW_LENGTH,Ln),B.pixelStorei(J.UNPACK_IMAGE_HEIGHT,yt),B.pixelStorei(J.UNPACK_SKIP_PIXELS,Sn),B.pixelStorei(J.UNPACK_SKIP_ROWS,Kn),B.pixelStorei(J.UNPACK_SKIP_IMAGES,Ti),He===0&&ee.generateMipmaps&&J.generateMipmap(ke),B.unbindTexture()},this.initRenderTarget=function(w){C.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),B.unbindTexture()},this.resetState=function(){se=0,ce=0,Y=null,B.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),i.unpackColorSpace=wt._getUnpackColorSpace()}}function Xx({mouseForce:r=20,cursorSize:e=100,isViscous:i=!1,viscous:s=30,iterationsViscous:l=32,iterationsPoisson:c=32,dt:f=.014,BFECC:p=!0,resolution:m=.5,isBounce:h=!1,colors:x=["#5227FF","#FF9FFC","#B497CF"],style:v={},className:_="",autoDemo:E=!0,autoSpeed:T=.5,autoIntensity:R=2.2,takeoverDuration:S=.25,autoResumeDelay:y=1e3,autoRampDuration:N=.6}){const U=q.useRef(null),L=q.useRef(null),j=q.useRef(null),P=q.useRef(null),I=q.useRef(null),A=q.useRef(!0),z=q.useRef(null);return q.useEffect(()=>{if(!U.current)return;function K(Xe){let B;Array.isArray(Xe)&&Xe.length>0?Xe.length===1?B=[Xe[0],Xe[0]]:B=Xe:B=["#ffffff","#ffffff"];const Oe=B.length,C=new Uint8Array(Oe*4);for(let $=0;$<Oe;$++){const W=new Bt(B[$]);C[$*4+0]=Math.round(W.r*255),C[$*4+1]=Math.round(W.g*255),C[$*4+2]=Math.round(W.b*255),C[$*4+3]=255}const b=new Nx(C,Oe,1,Mi);return b.magFilter=_n,b.minFilter=_n,b.wrapS=oi,b.wrapT=oi,b.generateMipmaps=!1,b.needsUpdate=!0,b}const G=K(x),k=new ln(0,0,0,0);class se{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(B){this.container=B,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new iR({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Bt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new ob,this.clock.start()}resize(){if(!this.container)return;const B=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(B.width)),this.height=Math.max(1,Math.floor(B.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ce=new se;class Y{constructor(){this.mouseMoved=!1,this.coords=new ht,this.coords_old=new ht,this.diff=new ht,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ht,this.takeoverTo=new ht,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(B){this.container=B,this.docTarget=B.ownerDocument||null;const Oe=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);Oe&&(this.listenerTarget=Oe,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(B,Oe){if(!this.container)return!1;const C=this.container.getBoundingClientRect();return C.width===0||C.height===0?!1:B>=C.left&&B<=C.right&&Oe>=C.top&&Oe<=C.bottom}updateHoverState(B,Oe){return this.isHoverInside=this.isPointInside(B,Oe),this.isHoverInside}setCoords(B,Oe){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const C=this.container.getBoundingClientRect();if(C.width===0||C.height===0)return;const b=(B-C.left)/C.width,$=(Oe-C.top)/C.height;this.coords.set(b*2-1,-($*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(B,Oe){this.coords.set(B,Oe),this.mouseMoved=!0}onDocumentMouseMove(B){if(this.updateHoverState(B.clientX,B.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const Oe=this.container.getBoundingClientRect();if(Oe.width===0||Oe.height===0)return;const C=(B.clientX-Oe.left)/Oe.width,b=(B.clientY-Oe.top)/Oe.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(C*2-1,-(b*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(B.clientX,B.clientY),this.hasUserControl=!0}}onDocumentTouchStart(B){if(B.touches.length!==1)return;const Oe=B.touches[0];this.updateHoverState(Oe.clientX,Oe.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(Oe.clientX,Oe.clientY),this.hasUserControl=!0)}onDocumentTouchMove(B){if(B.touches.length!==1)return;const Oe=B.touches[0];this.updateHoverState(Oe.clientX,Oe.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(Oe.clientX,Oe.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const B=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(B>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const Oe=B*B*(3-2*B);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,Oe)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const O=new Y;class H{constructor(B,Oe,C){this.mouse=B,this.manager=Oe,this.enabled=C.enabled,this.speed=C.speed,this.resumeDelay=C.resumeDelay||3e3,this.rampDurationMs=(C.rampDuration||0)*1e3,this.active=!1,this.current=new ht(0,0),this.target=new ht,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ht,this.pickNewTarget()}pickNewTarget(){const B=Math.random;this.target.set((B()*2-1)*(1-this.margin),(B()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const B=performance.now();if(B-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=B,this.activationTime=B),!this.active)return;this.mouse.isAutoActive=!0;let C=(B-this.lastTime)/1e3;this.lastTime=B,C>.2&&(C=.016);const b=this._tmpDir.subVectors(this.target,this.current),$=b.length();if($<.01){this.pickNewTarget();return}b.normalize();let W=1;if(this.rampDurationMs>0){const De=Math.min(1,(B-this.activationTime)/this.rampDurationMs);W=De*De*(3-2*De)}const ge=this.speed*C*W,me=Math.min(ge,$);this.current.addScaledVector(b,me),this.mouse.setNormalized(this.current.x,this.current.y)}}const re=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,_e=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,ye=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,F=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,te=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,Te=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Ce=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Le=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,ie=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,Re=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Ae{constructor(B){this.props=B||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new n_,this.camera=new _u,this.uniforms&&(this.material=new ol(this.props.material),this.geometry=new Xs(2,2),this.plane=new Ei(this.geometry,this.material),this.scene.add(this.plane))}update(){ce.renderer.setRenderTarget(this.props.output||null),ce.renderer.render(this.scene,this.camera),ce.renderer.setRenderTarget(null)}}class Be extends Ae{constructor(B){super({material:{vertexShader:re,fragmentShader:F,uniforms:{boundarySpace:{value:B.cellScale},px:{value:B.cellScale},fboSize:{value:B.fboSize},velocity:{value:B.src.texture},dt:{value:B.dt},isBFECC:{value:!0}}},output:B.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const B=new Gi,Oe=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);B.setAttribute("position",new zi(Oe,3));const C=new ol({vertexShader:_e,fragmentShader:F,uniforms:this.uniforms});this.line=new QE(B,C),this.scene.add(this.line)}update({dt:B,isBounce:Oe,BFECC:C}){this.uniforms.dt.value=B,this.line.visible=Oe,this.uniforms.isBFECC.value=C,super.update()}}class Ze extends Ae{constructor(B){super({output:B.dst}),this.init(B)}init(B){super.init();const Oe=new Xs(1,1),C=new ol({vertexShader:ye,fragmentShader:Ce,blending:Th,depthWrite:!1,uniforms:{px:{value:B.cellScale},force:{value:new ht(0,0)},center:{value:new ht(0,0)},scale:{value:new ht(B.cursor_size,B.cursor_size)}}});this.mouse=new Ei(Oe,C),this.scene.add(this.mouse)}update(B){const Oe=O.diff.x/2*B.mouse_force,C=O.diff.y/2*B.mouse_force,b=B.cursor_size*B.cellScale.x,$=B.cursor_size*B.cellScale.y,W=Math.min(Math.max(O.coords.x,-1+b+B.cellScale.x*2),1-b-B.cellScale.x*2),ge=Math.min(Math.max(O.coords.y,-1+$+B.cellScale.y*2),1-$-B.cellScale.y*2),me=this.mouse.material.uniforms;me.force.value.set(Oe,C),me.center.value.set(W,ge),me.scale.value.set(B.cursor_size,B.cursor_size),super.update()}}class Ke extends Ae{constructor(B){super({material:{vertexShader:re,fragmentShader:Re,uniforms:{boundarySpace:{value:B.boundarySpace},velocity:{value:B.src.texture},velocity_new:{value:B.dst_.texture},v:{value:B.viscous},px:{value:B.cellScale},dt:{value:B.dt}}},output:B.dst,output0:B.dst_,output1:B.dst}),this.init()}update({viscous:B,iterations:Oe,dt:C}){let b,$;this.uniforms.v.value=B;for(let W=0;W<Oe;W++)W%2===0?(b=this.props.output0,$=this.props.output1):(b=this.props.output1,$=this.props.output0),this.uniforms.velocity_new.value=b.texture,this.props.output=$,this.uniforms.dt.value=C,super.update();return $}}class bt extends Ae{constructor(B){super({material:{vertexShader:re,fragmentShader:Te,uniforms:{boundarySpace:{value:B.boundarySpace},velocity:{value:B.src.texture},px:{value:B.cellScale},dt:{value:B.dt}}},output:B.dst}),this.init()}update({vel:B}){this.uniforms.velocity.value=B.texture,super.update()}}class rt extends Ae{constructor(B){super({material:{vertexShader:re,fragmentShader:Le,uniforms:{boundarySpace:{value:B.boundarySpace},pressure:{value:B.dst_.texture},divergence:{value:B.src.texture},px:{value:B.cellScale}}},output:B.dst,output0:B.dst_,output1:B.dst}),this.init()}update({iterations:B}){let Oe,C;for(let b=0;b<B;b++)b%2===0?(Oe=this.props.output0,C=this.props.output1):(Oe=this.props.output1,C=this.props.output0),this.uniforms.pressure.value=Oe.texture,this.props.output=C,super.update();return C}}class ct extends Ae{constructor(B){super({material:{vertexShader:re,fragmentShader:ie,uniforms:{boundarySpace:{value:B.boundarySpace},pressure:{value:B.src_p.texture},velocity:{value:B.src_v.texture},px:{value:B.cellScale},dt:{value:B.dt}}},output:B.dst}),this.init()}update({vel:B,pressure:Oe}){this.uniforms.velocity.value=B.texture,this.uniforms.pressure.value=Oe.texture,super.update()}}class xt{constructor(B){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...B},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ht,this.cellScale=new ht,this.boundarySpace=new ht,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?$i:Ii}createAllFBO(){const Oe={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:_n,magFilter:_n,wrapS:oi,wrapT:oi};for(let C in this.fbos)this.fbos[C]=new Bi(this.fboSize.x,this.fboSize.y,Oe)}createShaderPass(){this.advection=new Be({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ze({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new Ke({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new bt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new rt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new ct({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const B=Math.max(1,Math.round(this.options.resolution*ce.width)),Oe=Math.max(1,Math.round(this.options.resolution*ce.height)),C=1/B,b=1/Oe;this.cellScale.set(C,b),this.fboSize.set(B,Oe)}resize(){this.calcSize();for(let B in this.fbos)this.fbos[B].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let B=this.fbos.vel_1;this.options.isViscous&&(B=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:B});const Oe=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:B,pressure:Oe})}}class $e{constructor(){this.init()}init(){this.simulation=new xt,this.scene=new n_,this.camera=new _u,this.output=new Ei(new Xs(2,2),new ol({vertexShader:re,fragmentShader:te,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ht},palette:{value:G},bgColor:{value:k}}})),this.scene.add(this.output)}addScene(B){this.scene.add(B)}resize(){this.simulation.resize()}render(){ce.renderer.setRenderTarget(null),ce.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Pt{constructor(B){this.props=B,ce.init(B.$wrapper),O.init(B.$wrapper),O.autoIntensity=B.autoIntensity,O.takeoverDuration=B.takeoverDuration,this.lastUserInteraction=performance.now(),O.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new H(O,this,{enabled:B.autoDemo,speed:B.autoSpeed,resumeDelay:B.autoResumeDelay,rampDuration:B.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():A.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ce.renderer.domElement),this.output=new $e}resize(){ce.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),O.update(),ce.update(),this.output.update()}loop(){this.running&&(this.render(),P.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,P.current&&(cancelAnimationFrame(P.current),P.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),O.dispose(),ce.renderer){const B=ce.renderer.domElement;B&&B.parentNode&&B.parentNode.removeChild(B),ce.renderer.dispose(),ce.renderer.forceContextLoss()}}catch{}}}const vt=U.current;vt.style.position=vt.style.position||"relative",vt.style.overflow=vt.style.overflow||"hidden";const $t=new Pt({$wrapper:vt,autoDemo:E,autoSpeed:T,autoIntensity:R,takeoverDuration:S,autoResumeDelay:y,autoRampDuration:N});L.current=$t,(()=>{if(!L.current)return;const Xe=L.current.output?.simulation;if(!Xe)return;const B=Xe.options.resolution;Object.assign(Xe.options,{mouse_force:r,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:f,BFECC:p,resolution:m,isBounce:h}),m!==B&&Xe.resize()})(),$t.start();const Tt=new IntersectionObserver(Xe=>{const B=Xe[0],Oe=B.isIntersecting&&B.intersectionRatio>0;A.current=Oe,L.current&&(Oe&&!document.hidden?L.current.start():L.current.pause())},{threshold:[0,.01,.1]});Tt.observe(vt),I.current=Tt;const ut=new ResizeObserver(()=>{L.current&&(z.current&&cancelAnimationFrame(z.current),z.current=requestAnimationFrame(()=>{L.current&&L.current.resize()}))});return ut.observe(vt),j.current=ut,()=>{if(P.current&&cancelAnimationFrame(P.current),j.current)try{j.current.disconnect()}catch{}if(I.current)try{I.current.disconnect()}catch{}L.current&&L.current.dispose(),L.current=null}},[p,e,f,h,i,c,l,r,m,s,x,E,T,R,S,y,N]),q.useEffect(()=>{const K=L.current;if(!K)return;const G=K.output?.simulation;if(!G)return;const k=G.options.resolution;Object.assign(G.options,{mouse_force:r,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:f,BFECC:p,resolution:m,isBounce:h}),K.autoDriver&&(K.autoDriver.enabled=E,K.autoDriver.speed=T,K.autoDriver.resumeDelay=y,K.autoDriver.rampDurationMs=N*1e3,K.autoDriver.mouse&&(K.autoDriver.mouse.autoIntensity=R,K.autoDriver.mouse.takeoverDuration=S)),m!==k&&G.resize()},[r,e,i,s,l,c,f,p,m,h,E,T,R,S,y,N]),g.jsx("div",{ref:U,className:`liquid-ether-container ${_||""}`,style:v})}function aR(){const[r,e]=q.useState(!0),[i,s]=q.useState(""),[l,c]=q.useState(""),[f,p]=q.useState(""),[m,h]=q.useState(""),[x,v]=q.useState(!1),{login:_,register:E}=Ws(),T=$r(),{isDark:R}=Ap(),S=async y=>{y.preventDefault(),h(""),v(!0);try{if(r)await _(i,l),T("/dashboard");else{if(!f.trim())throw new Error("Введите имя");if(l.length<6)throw new Error("Пароль должен быть минимум 6 символов");await E(i,l,f),T("/dashboard")}}catch(N){h(N.message)}finally{v(!1)}};return g.jsxs("div",{className:"auth-page",children:[g.jsx("div",{className:"liquid-ether-background",children:g.jsx(Xx,{colors:R?["#2f00ed","#0011ff","#0044FF"]:["#2f00ed","#0011ff","#0044FF"],mouseForce:40,cursorSize:80,isViscous:!0,viscous:30,iterationsViscous:16,iterationsPoisson:8,resolution:.4,isBounce:!1,autoDemo:!0,autoSpeed:.2,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),g.jsxs("div",{className:"auth-card",children:[g.jsxs("div",{className:"auth-header",children:[g.jsx("h2",{children:r?"Вход в аккаунт":"Регистрация"}),g.jsxs("p",{children:[r?"Нет аккаунта?":"Уже есть аккаунт?"," ",g.jsx("button",{type:"button",className:"auth-switch",onClick:()=>{e(!r),h(""),s(""),c(""),p("")},children:r?"Зарегистрироваться":"Войти"})]})]}),g.jsxs("form",{onSubmit:S,className:"auth-form",children:[!r&&g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"name",children:"Имя"}),g.jsx("input",{type:"text",id:"name",value:f,onChange:y=>p(y.target.value),placeholder:"Введите ваше имя",required:!r})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"email",children:"Email"}),g.jsx("input",{type:"email",id:"email",value:i,onChange:y=>s(y.target.value),placeholder:"example@mail.com",required:!0})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"password",children:"Пароль"}),g.jsx("input",{type:"password",id:"password",value:l,onChange:y=>c(y.target.value),placeholder:"Минимум 6 символов",required:!0,minLength:6})]}),m&&g.jsx("div",{className:"auth-error",children:m}),g.jsx("button",{type:"submit",className:"auth-submit",disabled:x,children:x?"Загрузка...":r?"Войти":"Зарегистрироваться"})]}),r&&g.jsxs("div",{className:"auth-demo",children:[g.jsx("p",{children:"Демо-аккаунт:"}),g.jsx("code",{children:"demo@example.com"}),g.jsx("code",{children:"пароль: 123456"}),g.jsx("button",{type:"button",className:"demo-btn",onClick:()=>{s("demo@example.com"),c("123456")},children:"Заполнить демо"})]})]})]})}const Wx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='16'%20cy='16'%20r='14'%20fill='url(%23paint0_linear_87_7225)'/%3e%3cpath%20d='M22.9866%2010.2088C23.1112%209.40332%2022.3454%208.76755%2021.6292%209.082L7.36482%2015.3448C6.85123%2015.5703%206.8888%2016.3483%207.42147%2016.5179L10.3631%2017.4547C10.9246%2017.6335%2011.5325%2017.541%2012.0228%2017.2023L18.655%2012.6203C18.855%2012.4821%2019.073%2012.7665%2018.9021%2012.9426L14.1281%2017.8646C13.665%2018.3421%2013.7569%2019.1512%2014.314%2019.5005L19.659%2022.8523C20.2585%2023.2282%2021.0297%2022.8506%2021.1418%2022.1261L22.9866%2010.2088Z'%20fill='white'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_7225'%20x1='16'%20y1='2'%20x2='16'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2337BBFE'/%3e%3cstop%20offset='1'%20stop-color='%23007DBB'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",qx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20version='1.1'%20id='Icons'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2032%2032'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FFFFFF;}%20.st1{fill:%233A559F;}%20.st2{fill:%23F4F4F4;}%20.st3{fill:%23FF0084;}%20.st4{fill:%230063DB;}%20.st5{fill:%2300ACED;}%20.st6{fill:%23FFEC06;}%20.st7{fill:%23FF0000;}%20.st8{fill:%2325D366;}%20.st9{fill:%230088FF;}%20.st10{fill:%23314358;}%20.st11{fill:%23EE6996;}%20.st12{fill:%2301AEF3;}%20.st13{fill:%23FFFEFF;}%20.st14{fill:%23F06A35;}%20.st15{fill:%2300ADEF;}%20.st16{fill:%231769FF;}%20.st17{fill:%231AB7EA;}%20.st18{fill:%236001D1;}%20.st19{fill:%23E41214;}%20.st20{fill:%2305CE78;}%20.st21{fill:%237B519C;}%20.st22{fill:%23FF4500;}%20.st23{fill:%2300F076;}%20.st24{fill:%23FFC900;}%20.st25{fill:%2300D6FF;}%20.st26{fill:%23FF3A44;}%20.st27{fill:%23FF6A36;}%20.st28{fill:%230061FE;}%20.st29{fill:%23F7981C;}%20.st30{fill:%23EE1B22;}%20.st31{fill:%23EF3561;}%20.st32{fill:none;stroke:%23FFFFFF;stroke-width:2;stroke-miterlimit:10;}%20.st33{fill:%230097D3;}%20.st34{fill:%2301308A;}%20.st35{fill:%23019CDE;}%20.st36{fill:%23FFD049;}%20.st37{fill:%2316A05D;}%20.st38{fill:%234486F4;}%20.st39{fill:none;}%20.st40{fill:%2334A853;}%20.st41{fill:%234285F4;}%20.st42{fill:%23FBBC05;}%20.st43{fill:%23EA4335;}%20%3c/style%3e%3cpath%20class='st8'%20d='M17,0C8.7,0,2,6.7,2,15c0,3.4,1.1,6.6,3.2,9.2l-2.1,6.4c-0.1,0.4,0,0.8,0.3,1.1C3.5,31.9,3.8,32,4,32%20c0.1,0,0.3,0,0.4-0.1l6.9-3.1C13.1,29.6,15,30,17,30c8.3,0,15-6.7,15-15S25.3,0,17,0z'/%3e%3cpath%20class='st0'%20d='M25.7,20.5c-0.4,1.2-1.9,2.2-3.2,2.4C22.2,23,21.9,23,21.5,23c-0.8,0-2-0.2-4.1-1.1c-2.4-1-4.8-3.1-6.7-5.8%20L10.7,16C10.1,15.1,9,13.4,9,11.6c0-2.2,1.1-3.3,1.5-3.8c0.5-0.5,1.2-0.8,2-0.8c0.2,0,0.3,0,0.5,0c0.7,0,1.2,0.2,1.7,1.2l0.4,0.8%20c0.3,0.8,0.7,1.7,0.8,1.8c0.3,0.6,0.3,1.1,0,1.6c-0.1,0.3-0.3,0.5-0.5,0.7c-0.1,0.2-0.2,0.3-0.3,0.3c-0.1,0.1-0.1,0.1-0.2,0.2%20c0.3,0.5,0.9,1.4,1.7,2.1c1.2,1.1,2.1,1.4,2.6,1.6l0,0c0.2-0.2,0.4-0.6,0.7-0.9l0.1-0.2c0.5-0.7,1.3-0.9,2.1-0.6%20c0.4,0.2,2.6,1.2,2.6,1.2l0.2,0.1c0.3,0.2,0.7,0.3,0.9,0.7C26.2,18.5,25.9,19.8,25.7,20.5z'/%3e%3c/svg%3e",Yx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%201024%201024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='512'%20cy='512'%20r='512'%20style='fill:%232787f5'/%3e%3cpath%20d='M585.83%20271.5H438.17c-134.76%200-166.67%2031.91-166.67%20166.67v147.66c0%20134.76%2031.91%20166.67%20166.67%20166.67h147.66c134.76%200%20166.67-31.91%20166.67-166.67V438.17c0-134.76-32.25-166.67-166.67-166.67zm74%20343.18h-35c-13.24%200-17.31-10.52-41.07-34.62-20.71-20-29.87-22.74-35-22.74-7.13%200-9.17%202-9.17%2011.88v31.57c0%208.49-2.72%2013.58-25.12%2013.58-37%200-78.07-22.4-106.93-64.16-43.45-61.1-55.33-106.93-55.33-116.43%200-5.09%202-9.84%2011.88-9.84h35c8.83%200%2012.22%204.07%2015.61%2013.58%2017.31%2049.9%2046.17%2093.69%2058%2093.69%204.41%200%206.45-2%206.45-13.24v-51.6c-1.36-23.76-13.92-25.8-13.92-34.28%200-4.07%203.39-8.15%208.83-8.15h55c7.47%200%2010.18%204.07%2010.18%2012.9v69.58c0%207.47%203.39%2010.18%205.43%2010.18%204.41%200%208.15-2.72%2016.29-10.86%2025.12-28.17%2043.11-71.62%2043.11-71.62%202.38-5.09%206.45-9.84%2015.28-9.84h35c10.52%200%2012.9%205.43%2010.52%2012.9-4.41%2020.37-47.18%2080.79-47.18%2080.79-3.73%206.11-5.09%208.83%200%2015.61%203.73%205.09%2016%2015.61%2024.1%2025.12%2014.94%2017%2026.48%2031.23%2029.53%2041.07%203.45%209.84-1.65%2014.93-11.49%2014.93z'%20style='fill:%23fff'/%3e%3c/svg%3e",hs="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%20192%20192'%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%3e%3cg%20style='stroke-width:.903553'%3e%3cg%20style='stroke-width:1.22576'%3e%3cpath%20d='M6%20104V56h34.856M6%2080h21.855'%20class='a'%20style='fill:none;stroke:%23000000;stroke-width:14.7089;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none'%20transform='matrix(.79792%200%200%20.83414%2017.08%2029.264)'/%3e%3c/g%3e%3cg%20style='stroke-width:2.24031;stroke-dasharray:none'%3e%3cpath%20d='M14.665%2015.027V7.109h2.574a2.672%202.672%200%201%201%200%205.345h-2.574m5.245%202.573-2.483-2.582'%20class='a'%20style='fill:none;stroke:%23000000;stroke-width:2.24031;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none'%20transform='matrix(5.56244%200%200%205.15795%20-16.54%2038.912)'/%3e%3c/g%3e%3cg%20style='stroke-width:1.03392'%3e%3cpath%20d='M6%206h28v0M6%2024h28v0M6%2042h28v0'%20style='fill:none;stroke:%23000000;stroke-width:12.4073;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1;stroke-dasharray:none;paint-order:stroke%20fill%20markers'%20transform='matrix(.86732%200%200%201.07855%20141.13%2070.11)'/%3e%3c/g%3e%3cg%20style='stroke-width:1.03392'%3e%3cpath%20d='M6%206h28v0M6%2024h28v0M6%2042h28v0'%20style='fill:none;stroke:%23000000;stroke-width:12.4073;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1;stroke-dasharray:none;paint-order:stroke%20fill%20markers'%20transform='matrix(.86732%200%200%201.07855%20103.848%2070.12)'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",yh="data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20id='Main'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle/%3e%3cpath%20d='M20,5H15V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V17a2,2,0,0,0,2,2H9v1a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2V7A2,2,0,0,0,20,5ZM4,17V4h9V5H11A2,2,0,0,0,9,7H6A1,1,0,0,0,6,9H9v1H6a1,1,0,0,0,0,2H9v1H6a1,1,0,0,0,0,2H9v2Zm7,3V7h9V20Z'/%3e%3cpath%20d='M18.45,8.11a1,1,0,0,0-1.34.44L14.88,13l-1.05-1.56a1,1,0,1,0-1.66,1.1l2,3A1,1,0,0,0,15,16h.06a1,1,0,0,0,.83-.55l3-6A1,1,0,0,0,18.45,8.11Z'/%3e%3c/svg%3e",kr=({src:r,alt:e,className:i,size:s=24})=>g.jsx("img",{src:r,alt:e,className:i,style:{width:`${s}px`,height:`${s}px`,objectFit:"contain"}});function sR({integrations:r}){const e=c=>({Telegram:Wx,WhatsApp:qx,VKontakte:Yx,MAX:hs,Instagram:hs,Avito:hs})[c]||hs,i=c=>({active:"Активна",expired:"Истекла",pending:"На рассмотрении"})[c]||"Неизвестно",s=c=>({active:"subscription-active",expired:"subscription-expired",pending:"subscription-pending"})[c]||"",l=c=>({lite:"Lite",pro:"Pro",max:"MAX"})[c]||"Lite";return g.jsxs("div",{className:"dashboard-section",children:[g.jsx("div",{className:"section-header",children:g.jsx("h3",{children:"Управление подписками"})}),r.length===0?g.jsx("div",{className:"empty-state",children:g.jsx("p",{children:"Нет активных подписок"})}):g.jsxs("div",{className:"subscriptions-table",children:[g.jsxs("div",{className:"table-header",children:[g.jsx("div",{className:"col-integration",children:"Интеграция"}),g.jsx("div",{className:"col-tariff",children:"Тариф"}),g.jsx("div",{className:"col-status",children:"Статус"}),g.jsx("div",{className:"col-date",children:"Дата окончания"})]}),r.map(c=>g.jsxs("div",{className:"table-row",children:[g.jsxs("div",{className:"col-integration",children:[g.jsx(kr,{src:e(c.type),alt:c.type,size:20}),g.jsx("span",{className:"integration-name",children:c.name})]}),g.jsx("div",{className:"col-tariff",children:g.jsx("span",{className:"tariff-badge",children:l(c.tariff)})}),g.jsx("div",{className:"col-status",children:g.jsx("span",{className:`subscription-status ${s(c.subscriptionStatus)}`,children:i(c.subscriptionStatus)})}),g.jsx("div",{className:"col-date",children:c.endDate||"Не указана"})]},c.id))]})]})}function rR({user:r,integrations:e,employees:i,updateEmployeeRoles:s,showMessage:l,setIntegrations:c,openAddModalFromPricing:f,preselectedTariff:p,setOpenAddModalFromPricing:m}){const[h,x]=q.useState(null),[v,_]=q.useState(!1),[E,T]=q.useState({}),[R,S]=q.useState(!1),[y,N]=q.useState("single"),[U,L]=q.useState("monthly"),[j,P]=q.useState({type:"",tariff:""}),[I,A]=q.useState([{id:1,type:"",tariff:""}]),[z,K]=q.useState(!1),[G,k]=q.useState(!1),[se,ce]=q.useState(localStorage.getItem("telegram_subdomain")||r?.amo_subdomain||""),[Y,O]=q.useState(null),[H,re]=q.useState(null),[_e,ye]=q.useState(""),[F,te]=q.useState(!1),[Te,Ce]=q.useState(!1),[Le,ie]=q.useState(""),[Re,Ae]=q.useState(!1),[Be,Ze]=q.useState("");q.useEffect(()=>{f&&(S(!0),N("single"),L("monthly"),P({type:"",tariff:p||""}),A([{id:1,type:"",tariff:p||""}]),m(!1))},[f,p,m]);const Ke=[{id:"analyst",name:"Аналитик"},{id:"manager",name:"Менеджер"},{id:"director",name:"Руководитель"}],bt=[{id:"Telegram",name:"Telegram"},{id:"MAX",name:"MAX"},{id:"Instagram",name:"Instagram"},{id:"Avito",name:"Avito"},{id:"VKontakte",name:"VKontakte"},{id:"WhatsApp",name:"WhatsApp"}],rt=[{id:"lite",name:"Lite",pricing:{monthly:{price:720,period:"месяц"},"6months":{price:649,period:"месяц (скидка 10%)",original:720},"12months":{price:579,period:"месяц (скидка 20%)",original:720}}},{id:"pro",name:"Pro",pricing:{monthly:{price:1140,period:"месяц"},"6months":{price:1026,period:"месяц (скидка 10%)",original:1140},"12months":{price:912,period:"месяц (скидка 20%)",original:1140}}},{id:"max",name:"MAX",pricing:{monthly:{price:2899,period:"месяц"},"6months":{price:2609,period:"месяц (скидка 10%)",original:2899},"12months":{price:2319,period:"месяц (скидка 20%)",original:2899}}}];q.useEffect(()=>{se&&localStorage.setItem("telegram_subdomain",se)},[se]),q.useEffect(()=>{if(!H)return;const V=setInterval(async()=>{try{const xe=await(await fetch(`/api/auth/telegram/device/${H}`)).json();xe.status==="authorized"?(ye("Подключено. Telegram аккаунт авторизован ✅"),k(!0),te(!1),Ce(!1),ie(""),clearInterval(V)):xe.status==="password_needed"?(Ce(!0),Ze(xe.passwordHint||""),ye("Введите облачный пароль Telegram (2FA), если включен.")):xe.status==="pending_scan"?(xe.qrImage&&O(xe.qrImage),ye("Откройте Telegram → Настройки → Устройства → Связать устройство и сканируйте QR.")):xe.status==="error"?(ye(xe.error||"Ошибка подключения Telegram"),te(!1),Ce(!1),clearInterval(V)):ye("Подключение...")}catch{ye("Ошибка проверки статуса QR-сессии")}},2500);return()=>clearInterval(V)},[H]);const ct=async()=>{try{const V=se.trim().toLowerCase();if(!V){ye("Укажите поддомен amoCRM перед подключением Telegram.");return}te(!0),ye("Готовим QR..."),O(null),re(null),Ce(!1),ie(""),Ze("");const xe=await(await fetch("/api/auth/telegram/device/start",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subdomain:V})})).json();if(!xe.sessionId)throw new Error(xe.error||"Не удалось запустить сессию");re(xe.sessionId),ye("Подключаемся к Telegram... QR появится через пару секунд.")}catch(V){te(!1),ye(V?.message||"Не удалось создать QR. Проверьте backend.")}},xt=async()=>{if(!(!H||!Le.trim())){Ae(!0);try{await fetch(`/api/auth/telegram/device/${H}/password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:Le.trim()})}),ie(""),Ce(!1),ye("Проверяем пароль...")}catch{ye("Не удалось отправить пароль 2FA.")}finally{Ae(!1)}}},$e=V=>{P(ae=>({...ae,type:V}))},Pt=()=>{S(!0),N("single"),L("monthly"),P({type:"",tariff:""}),A([{id:1,type:"",tariff:""}]),k(!1),O(null),re(null),ye(""),Ce(!1),ie(""),Ze("")},vt=()=>{S(!1)},$t=(V,ae)=>{P(xe=>({...xe,[V]:ae})),ae&&j.type==="Telegram"&&!G&&(K(!0),O(null),re(null),ye(""),Ce(!1),ie(""),Ze(""),ct())},J=(V,ae,xe)=>{if(A(we=>we.map(Ne=>Ne.id===V?{...Ne,[ae]:xe}:Ne)),!G){const we=I.find(Ne=>Ne.id===V);if(we){const Ne=ae==="type"?xe:we.type,Pe=ae==="tariff"?xe:we.tariff;Ne==="Telegram"&&Pe&&(K(!0),O(null),re(null),ye(""),Ce(!1),ie(""),Ze(""),ct())}}},Tt=()=>{A(V=>[...V,{id:Date.now(),type:"",tariff:""}])},ut=V=>{I.length>1&&A(ae=>ae.filter(xe=>xe.id!==V))},Xe=()=>{const V=U==="monthly"?1:U==="6months"?6:12;if(y==="single"){const ae=rt.find(we=>we.id===j.tariff),xe=ae?ae.pricing[U]:null;return xe?xe.price*V:0}else return I.reduce((ae,xe)=>{const we=rt.find(Pe=>Pe.id===xe.tariff),Ne=we?we.pricing[U]:null;return ae+(Ne?Ne.price*V:0)},0)},B=()=>{const V=I.some(ae=>ae.type==="Telegram"&&ae.tariff);return y==="single"?!(!j.type||!j.tariff||j.type==="Telegram"&&!G):!(!I.every(ae=>ae.type&&ae.tariff)||V&&!G)},Oe=()=>{const V=[],xe=(()=>{const we=new Date,Ne=new Date(we.toLocaleString("en-US",{timeZone:"Europe/Moscow"})),Pe=U==="monthly"?1:U==="6months"?6:12,at=new Date(Ne);return at.setMonth(at.getMonth()+Pe),at.toISOString().split("T")[0]})();y==="single"?j.type&&j.tariff&&V.push({id:Date.now(),type:j.type,name:j.type==="Telegram"?"Telegram аккаунт":`${j.type} канал`,status:"active",subscriptionStatus:"active",tariff:j.tariff,channelsCount:1,endDate:xe,employeeRoles:{}}):I.forEach((we,Ne)=>{we.type&&we.tariff&&V.push({id:Date.now()+Ne,type:we.type,name:we.type==="Telegram"?`Telegram аккаунт ${Ne+1}`:`${we.type} канал ${Ne+1}`,status:"active",subscriptionStatus:"active",tariff:we.tariff,channelsCount:1,endDate:xe,employeeRoles:{}})}),V.length>0&&(c(we=>[...we,...V]),l(`${V.length} интеграций добавлено`,"success"),S(!1))},C=V=>{x(V),T(V.employeeRoles||{}),_(!0)},b=(V,ae)=>{const xe=E[V]||[],we=xe.includes(ae)?xe.filter(Ne=>Ne!==ae):[...xe,ae];T({...E,[V]:we})},$=()=>{h&&(Object.keys(E).forEach(V=>{s(h.id,V,E[V])}),l("Роли успешно обновлены","success"),_(!1))},W=V=>({Telegram:Wx,WhatsApp:qx,VKontakte:Yx,MAX:hs,Instagram:hs,Avito:hs})[V]||hs,ge=V=>V==="active"?"Активен":V==="inactive"?"Не в подписке":"Неизвестно",me=V=>V==="active"?"status-active":"status-inactive",De=V=>({lite:"Lite",pro:"Pro",max:"MAX"})[V]||"Lite";return g.jsxs("div",{className:"dashboard-section",children:[g.jsxs("div",{className:"section-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px"},children:[g.jsxs("div",{children:[g.jsx("h3",{children:"Список интеграций"}),g.jsx("p",{className:"section-description",children:"Нажмите на интеграцию, чтобы назначить роли сотрудникам"})]}),g.jsx("button",{className:"btn-add-integration",onClick:Pt,children:"+ Добавить интеграцию"})]}),e.length===0?g.jsx("div",{className:"empty-state",children:g.jsx("p",{children:"У вас пока нет интеграций"})}):g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"integrations-table",children:[g.jsxs("div",{className:"table-header",children:[g.jsx("div",{className:"col-type",children:"Тип канала"}),g.jsx("div",{className:"col-name",children:"Название"}),g.jsx("div",{className:"col-tariff",children:"Тариф"}),g.jsx("div",{className:"col-status",children:"Статус"})]}),e.map(V=>g.jsxs("div",{className:"table-row",onClick:()=>C(V),style:{cursor:"pointer"},children:[g.jsxs("div",{className:"col-type",children:[g.jsx("span",{className:"integration-icon",children:g.jsx(kr,{src:W(V.type),alt:V.type})}),g.jsx("span",{children:V.type})]}),g.jsx("div",{className:"col-name",children:V.name}),g.jsx("div",{className:"col-tariff",children:g.jsx("span",{className:"tariff-badge",children:De(V.tariff)})}),g.jsx("div",{className:"col-status",children:g.jsx("span",{className:`status-badge ${me(V.status)}`,children:ge(V.status)})})]},V.id))]}),v&&h&&g.jsx("div",{className:"modal-overlay",onClick:()=>_(!1),children:g.jsxs("div",{className:"modal-content",onClick:V=>V.stopPropagation(),children:[g.jsxs("div",{className:"modal-header",children:[g.jsxs("h3",{children:["Роли: ",h.name]}),g.jsx("button",{className:"modal-close",onClick:()=>_(!1),children:"×"})]}),g.jsx("div",{className:"modal-body",children:i.length===0?g.jsx("p",{className:"empty-hint",children:"Сначала добавьте сотрудников во вкладке «Сотрудники»"}):i.map(V=>g.jsxs("div",{className:"modal-employee-row",children:[g.jsxs("div",{className:"emp-name",children:[V.name," ",g.jsx("span",{style:{fontWeight:400,fontSize:"0.85rem",color:"#666"},children:V.email})]}),g.jsx("div",{className:"emp-roles",children:Ke.map(ae=>g.jsxs("label",{className:"role-checkbox-inline",children:[g.jsx("input",{type:"checkbox",checked:(E[V.id]||[]).includes(ae.id),onChange:()=>b(V.id,ae.id)}),ae.name]},ae.id))})]},V.id))}),g.jsxs("div",{className:"modal-footer",children:[g.jsx("button",{className:"modal-cancel",onClick:()=>_(!1),children:"Отмена"}),g.jsx("button",{className:"modal-save",onClick:$,children:"Сохранить"})]})]})})]}),R&&g.jsx("div",{className:"modal-overlay",onClick:vt,children:g.jsxs("div",{className:"modal-content add-integration-modal",onClick:V=>V.stopPropagation(),children:[g.jsxs("div",{className:"modal-header",children:[g.jsx("h3",{children:"Добавить интеграцию"}),g.jsx("button",{className:"modal-close",onClick:vt,children:"×"})]}),g.jsxs("div",{className:"modal-tabs",children:[g.jsx("button",{className:`modal-tab ${y==="single"?"active":""}`,onClick:()=>N("single"),children:"Одна интеграция"}),g.jsx("button",{className:`modal-tab ${y==="multiple"?"active":""}`,onClick:()=>N("multiple"),children:"Несколько интеграций"})]}),g.jsxs("div",{className:"billing-toggle",children:[g.jsx("button",{className:`toggle-btn ${U==="monthly"?"active":""}`,onClick:()=>L("monthly"),children:"Помесячно"}),g.jsxs("button",{className:`toggle-btn ${U==="6months"?"active":""}`,onClick:()=>L("6months"),children:["6 месяцев",g.jsx("span",{className:"badge",children:"-10%"})]}),g.jsxs("button",{className:`toggle-btn ${U==="12months"?"active":""}`,onClick:()=>L("12months"),children:["12 месяцев",g.jsx("span",{className:"badge",children:"-20%"})]})]}),g.jsx("div",{className:"modal-body",children:y==="single"?g.jsxs("div",{className:"single-integration-form",children:[g.jsxs("div",{className:"form-group",children:[g.jsx("label",{children:"Выберите мессенджер"}),g.jsx("div",{className:"messenger-grid",children:bt.map(V=>{const ae=V.id==="Telegram"&&G,xe=j.type===V.id;return g.jsxs("button",{type:"button",className:`messenger-card${xe?" selected":""}${ae?" connected":""}`,onClick:()=>$e(V.id),children:[ae&&g.jsx("span",{className:"messenger-badge",children:g.jsx(kr,{src:yh,alt:"✓",size:16})}),g.jsx(kr,{src:W(V.id),alt:V.name}),g.jsx("span",{className:"messenger-card-name",children:V.name})]},V.id)})})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{children:"Тариф"}),g.jsxs("select",{className:"modal-select",value:j.tariff,onChange:V=>$t("tariff",V.target.value),children:[g.jsx("option",{value:"",children:"Выберите тариф"}),rt.map(V=>{const ae=V.pricing[U];return g.jsxs("option",{value:V.id,children:[V.name," - ",ae.price," ₽/",U==="monthly"?"месяц":U==="6months"?"мес (6 мес)":"мес (12 мес)"]},V.id)})]})]})]}):g.jsxs("div",{className:"multiple-integrations-form",children:[I.map((V,ae)=>g.jsx("div",{className:`integration-row${V.type==="Telegram"&&G?" tg-row-connected":""}`,children:g.jsxs("div",{className:"form-group",children:[g.jsxs("label",{children:["Интеграция #",ae+1,V.type==="Telegram"&&G&&g.jsx(kr,{src:yh,alt:"✓",size:16,className:"tg-row-badge"})]}),g.jsxs("div",{className:"integration-row-inputs",children:[g.jsxs("select",{className:"modal-select",value:V.type,onChange:xe=>J(V.id,"type",xe.target.value),children:[g.jsx("option",{value:"",children:"Тип"}),bt.map(xe=>g.jsx("option",{value:xe.id,children:xe.name},xe.id))]}),g.jsxs("select",{className:"modal-select",value:V.tariff,onChange:xe=>J(V.id,"tariff",xe.target.value),children:[g.jsx("option",{value:"",children:"Тариф"}),rt.map(xe=>{const we=xe.pricing[U];return g.jsxs("option",{value:xe.id,children:[xe.name," - ",we.price," ₽"]},xe.id)})]}),I.length>1&&g.jsx("button",{className:"btn-remove-row",onClick:()=>ut(V.id),children:"×"})]})]})},V.id)),g.jsx("button",{className:"btn-add-row",onClick:Tt,children:"+ Добавить еще интеграцию"})]})}),g.jsxs("div",{className:"modal-footer",children:[g.jsxs("div",{className:"total-price",children:["Итого: ",Xe().toLocaleString("ru-RU")," ₽",g.jsx("span",{className:"total-period",children:U==="monthly"?"/месяц":U==="6months"?"(за 6 месяцев)":"(за 12 месяцев)"})]}),g.jsx("button",{className:"modal-cancel",onClick:vt,children:"Отмена"}),B()&&g.jsx("button",{className:"modal-pay",onClick:Oe,children:"Оплатить"})]})]})}),z&&g.jsx("div",{className:"modal-overlay tg-setup-overlay",onClick:()=>K(!1),children:g.jsxs("div",{className:"modal-content tg-setup-modal",onClick:V=>V.stopPropagation(),children:[g.jsxs("div",{className:"modal-header",children:[g.jsx("h3",{children:"Подключить Telegram"}),g.jsx("button",{className:"modal-close",onClick:()=>K(!1),children:"×"})]}),g.jsx("div",{className:"modal-body",children:g.jsx("div",{className:"tg-account-section",children:G&&_e.includes("✅")?g.jsxs("div",{className:"tg-success-state",children:[g.jsx("div",{className:"tg-success-icon",children:g.jsx(kr,{src:yh,alt:"Успех",size:48})}),g.jsx("p",{className:"tg-success-title",children:"Telegram подключен. Можно приступать к работе ✅"}),g.jsx("button",{className:"modal-save",onClick:()=>K(!1),children:"Готово"})]}):g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"form-group",children:[g.jsx("label",{children:"Поддомен amoCRM"}),g.jsx("input",{className:"modal-input",value:se,onChange:V=>ce(V.target.value),placeholder:"mycompany"})]}),g.jsxs("p",{className:"tg-section-hint",children:["1) Откройте Telegram → Настройки → Устройства → Связать устройство",g.jsx("br",{}),"2) Сканируйте QR-код ниже"]}),!Y&&g.jsxs("div",{className:"tg-progress-wrap",children:[g.jsx("div",{className:"tg-progress-bar",children:g.jsx("div",{className:"tg-progress-fill"})}),g.jsx("span",{className:"tg-progress-label",children:"Готовим QR-код..."})]}),Y&&g.jsx("div",{className:"telegram-qr-wrap",children:g.jsx("img",{src:Y,alt:"Telegram QR"})}),_e&&g.jsx("div",{className:`telegram-status${_e.toLowerCase().includes("ошибка")?" tg-status-error":""}`,children:_e}),Te&&g.jsxs("div",{className:"tg-section-actions",style:{flexDirection:"column",alignItems:"stretch",gap:"10px"},children:[g.jsx("input",{type:"password",className:"tg-token-input",placeholder:Be?`2FA пароль (подсказка: ${Be})`:"2FA пароль Telegram",value:Le,onChange:V=>ie(V.target.value)}),g.jsx("button",{className:"modal-save",disabled:!Le.trim()||Re,onClick:xt,children:Re?"Отправка...":"Подтвердить 2FA пароль"})]}),g.jsxs("div",{className:"tg-section-actions",children:[g.jsx("button",{className:"tg-cancel-btn",onClick:()=>{re(null),O(null),ye(""),te(!1),Ce(!1),ie(""),Ze(""),K(!1)},children:"Отмена"}),g.jsx("button",{className:"btn-add-integration",onClick:ct,children:"Обновить QR-код"})]})]})})})]})})]})}function oR({employees:r,setEmployees:e,showMessage:i}){const[s,l]=q.useState(!1),[c,f]=q.useState(""),[p,m]=q.useState(""),h=()=>{if(c.trim()&&p.trim()){const v={id:Date.now(),name:c.trim(),email:p.trim()};e(_=>{const E=[..._,v],{user:T}=Ws();return T&&localStorage.setItem(`employees_${T.id}`,JSON.stringify(E)),E}),f(""),m(""),l(!1),i(`Сотрудник ${v.name} добавлен`,"success")}},x=(v,_)=>{e(E=>{const T=E.filter(S=>S.id!==v),{user:R}=Ws();return R&&localStorage.setItem(`employees_${R.id}`,JSON.stringify(T)),T}),i(`Сотрудник ${_} удален`,"success")};return g.jsxs("div",{className:"dashboard-section",children:[g.jsxs("div",{className:"section-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px"},children:[g.jsxs("div",{children:[g.jsx("h3",{children:"Управление сотрудниками"}),g.jsx("p",{className:"section-description",children:"Добавляйте и удаляйте сотрудников для доступа к интеграциям"})]}),g.jsx("button",{className:"btn-add-emp",onClick:()=>l(!0),children:"+ Добавить сотрудника"})]}),r.length===0?g.jsx("div",{className:"empty-state",children:g.jsx("p",{children:"Нет добавленных сотрудников"})}):g.jsx("div",{className:"employees-list",children:r.map(v=>g.jsxs("div",{className:"employee-card",children:[g.jsx("div",{className:"emp-avatar",children:v.name.charAt(0).toUpperCase()}),g.jsxs("div",{className:"emp-info",children:[g.jsx("h4",{children:v.name}),g.jsx("p",{children:v.email})]}),g.jsx("button",{className:"btn-delete-emp",onClick:()=>x(v.id,v.name),children:"Удалить"})]},v.id))}),s&&g.jsx("div",{className:"modal-overlay",onClick:()=>l(!1),children:g.jsxs("div",{className:"modal-content",onClick:v=>v.stopPropagation(),children:[g.jsxs("div",{className:"modal-header",children:[g.jsx("h3",{children:"Добавить сотрудника"}),g.jsx("button",{className:"modal-close",onClick:()=>l(!1),children:"×"})]}),g.jsxs("div",{className:"modal-body",children:[g.jsx("input",{className:"modal-input",placeholder:"ФИО",value:c,onChange:v=>f(v.target.value)}),g.jsx("input",{className:"modal-input",placeholder:"Email",type:"email",value:p,onChange:v=>m(v.target.value)})]}),g.jsxs("div",{className:"modal-footer",children:[g.jsx("button",{className:"modal-cancel",onClick:()=>l(!1),children:"Отмена"}),g.jsx("button",{className:"modal-save",onClick:h,children:"Добавить"})]})]})})]})}function lR(){const{user:r,logout:e}=Ws(),{isDark:i,toggleTheme:s}=Ap(),l=$r(),c=ci(),[f,p]=q.useState("integrations"),[m,h]=q.useState([]),[x,v]=q.useState([]),[_,E]=q.useState({text:"",type:""}),[T,R]=q.useState(!1),[S,y]=q.useState(null),N=Li.useCallback(()=>[],[]);q.useEffect(()=>{if(!r){l("/auth");return}localStorage.removeItem(`integrations_${r.id}`),h(N());const I=localStorage.getItem(`employees_${r.id}`);v(I?JSON.parse(I):[]),c.state?.openAddIntegrationModal&&(R(!0),y(c.state.selectedTariff||null),window.history.replaceState({},document.title))},[r,l,N,c.state]);const U=I=>{h(I),r&&localStorage.setItem(`integrations_${r.id}`,JSON.stringify(I))},L=(I,A,z)=>{U(m.map(K=>K.id===I?{...K,employeeRoles:{...K.employeeRoles,[A]:z}}:K))},j=(I,A="success")=>{E({text:I,type:A}),setTimeout(()=>E({text:"",type:""}),3e3)},P=[{id:"integrations",label:"Интеграции"},{id:"subscriptions",label:"Подписки"},{id:"employees",label:"Сотрудники"},{id:"notes",label:"Заметки"}];return r?g.jsxs("div",{className:"dashboard-container",children:[g.jsxs("div",{className:"dashboard-topbar",children:[g.jsxs("div",{className:"user-info",children:[g.jsx("div",{className:"user-avatar",children:r?.name?.charAt(0)?.toUpperCase()||"U"}),g.jsxs("div",{children:[g.jsxs("h3",{children:["Добро пожаловать, ",r?.name,"!"]}),g.jsx("p",{className:"user-email",children:r?.email})]})]}),g.jsxs("div",{className:"topbar-actions",children:[g.jsxs("div",{className:"theme-toggle",onClick:s,children:[g.jsx("div",{className:`toggle-switch ${i?"active":""}`,children:g.jsx("div",{className:"toggle-slider"})}),g.jsx("span",{className:"theme-label",children:i?"Темная":"Светлая"})]}),g.jsx("button",{onClick:()=>{e(),l("/auth")},className:"logout-btn",children:"Выйти"})]})]}),g.jsx("div",{className:"dashboard-tabs",children:P.map(I=>g.jsx("button",{className:`tab-button ${f===I.id?"active":""}`,onClick:()=>p(I.id),children:I.label},I.id))}),g.jsxs("div",{className:"dashboard-content",children:[_.text&&g.jsx("div",{className:`dashboard-message ${_.type}`,children:_.text}),f==="integrations"&&g.jsx(rR,{user:r,integrations:m,employees:x,updateEmployeeRoles:L,showMessage:j,setIntegrations:h,openAddModalFromPricing:T,preselectedTariff:S,setOpenAddModalFromPricing:R}),f==="subscriptions"&&g.jsx(sR,{integrations:m}),f==="employees"&&g.jsx(oR,{employees:x,setEmployees:v,showMessage:j}),f==="notes"&&g.jsx(cR,{user:r,showMessage:j})]})]}):null}function cR({user:r,showMessage:e}){const[i,s]=Li.useState([]),[l,c]=Li.useState(!1),[f,p]=Li.useState(null),[m,h]=Li.useState(""),[x,v]=Li.useState(""),[_,E]=Li.useState([]),[T,R]=Li.useState(null),[S,y]=Li.useState(null);Li.useEffect(()=>{if(!r)return;const k=localStorage.getItem(`notes_${r.id}`);s(k?JSON.parse(k):[])},[r]);const N=k=>{s(k),r&&localStorage.setItem(`notes_${r.id}`,JSON.stringify(k))},U=()=>{p(null),h(""),v(""),E([]),c(!0)},L=k=>new Promise((se,ce)=>{const Y=new FileReader;Y.onload=()=>se(Y.result),Y.onerror=ce,Y.readAsDataURL(k)}),j=async k=>{const se=Array.from(k||[]),ce=await Promise.all(se.map(Y=>L(Y)));E(Y=>[...Y,...ce])},P=k=>{E(se=>se.filter((ce,Y)=>Y!==k))},I=()=>{if(!m.trim()&&!x.trim()){e("Нельзя сохранить пустую заметку","error");return}if(f){const k=i.map(se=>se.id===f.id?{...se,title:m,body:x,images:_,updatedAt:Date.now()}:se);N(k),e("Заметка обновлена","success")}else{const se=[{id:Date.now(),title:m,body:x,images:_,createdAt:Date.now()},...i];N(se),e("Заметка сохранена","success")}c(!1)},A=k=>{p(k),h(k.title),v(k.body),E(k.images||[]),c(!0)},z=k=>{const se=i.filter(ce=>ce.id!==k);N(se),e("Заметка удалена","success")},K=k=>{y(k)},G=k=>new Date(k).toLocaleDateString("ru-RU",{day:"numeric",month:"short",year:"numeric"});return g.jsxs("div",{className:"dashboard-section notes-section",children:[g.jsxs("div",{className:"section-header notes-header",children:[g.jsxs("div",{className:"notes-title-group",children:[g.jsx("div",{className:"notes-icon-wrapper",children:g.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[g.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),g.jsx("polyline",{points:"14 2 14 8 20 8"}),g.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),g.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),g.jsx("polyline",{points:"10 9 9 9 8 9"})]})}),g.jsxs("div",{children:[g.jsx("h3",{children:"Заметки"}),g.jsx("p",{className:"section-description",children:"Создавайте заметки и прикрепляйте изображения"})]})]}),g.jsxs("button",{className:"btn-add btn-new-note",onClick:U,children:[g.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[g.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),g.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Новая заметка"]})]}),g.jsxs("div",{className:"notes-content",children:[g.jsxs("div",{className:"column-header",children:[g.jsxs("h4",{children:[g.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),g.jsx("polyline",{points:"14 2 14 8 20 8"})]}),"Мои заметки"]}),g.jsx("span",{className:"notes-count",children:i.length})]}),i.length===0?g.jsxs("div",{className:"empty-state notes-empty",children:[g.jsx("div",{className:"empty-illustration",children:g.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[g.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),g.jsx("polyline",{points:"14 2 14 8 20 8"}),g.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"12"}),g.jsx("line",{x1:"9",y1:"15",x2:"15",y2:"15"})]})}),g.jsx("p",{children:"Пока нет заметок"}),g.jsx("span",{children:"Создайте первую заметку, чтобы начать"})]}):g.jsx("div",{className:"notes-list",children:i.map((k,se)=>g.jsxs("div",{className:"note-card",style:{animationDelay:`${se*60}ms`},onClick:()=>K(k),children:[g.jsx("div",{className:"note-card-accent"}),g.jsxs("div",{className:"note-card-content",children:[g.jsxs("div",{className:"note-card-header",children:[g.jsxs("div",{className:"note-title-group",children:[g.jsx("h5",{children:k.title||"Без заголовка"}),g.jsxs("div",{className:"note-meta",children:[g.jsxs("span",{className:"note-date",children:[g.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),g.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),g.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),g.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),G(k.createdAt)]}),k.images&&k.images.length>0&&g.jsxs("span",{className:"note-attachments",children:[g.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),g.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),g.jsx("polyline",{points:"21 15 16 10 5 21"})]}),k.images.length]})]})]}),g.jsxs("div",{className:"note-actions",onClick:ce=>ce.stopPropagation(),children:[g.jsx("button",{onClick:()=>A(k),className:"note-btn edit",title:"Редактировать",children:g.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),g.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),g.jsx("button",{onClick:()=>z(k.id),className:"note-btn delete",title:"Удалить",children:g.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("polyline",{points:"3 6 5 6 21 6"}),g.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})})]})]}),g.jsx("div",{className:"note-card-body",children:g.jsx("p",{children:k.body})}),k.images&&k.images.length>0&&g.jsxs("div",{className:"note-images-preview",children:[k.images.slice(0,3).map((ce,Y)=>g.jsx("div",{className:"note-thumb",onClick:O=>{O.stopPropagation(),R(ce)},children:g.jsx("img",{src:ce,alt:""})},Y)),k.images.length>3&&g.jsx("div",{className:"note-thumb more",onClick:ce=>ce.stopPropagation(),children:g.jsxs("span",{children:["+",k.images.length-3]})})]})]})]},k.id))})]}),l&&g.jsx("div",{className:"modal-overlay note-modal-overlay",onClick:()=>c(!1),children:g.jsxs("div",{className:"modal-content note-modal",onClick:k=>k.stopPropagation(),children:[g.jsxs("div",{className:"modal-header note-modal-header",children:[g.jsxs("div",{className:"modal-title-group",children:[g.jsx("div",{className:"modal-icon note-modal-icon",children:g.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),g.jsx("polyline",{points:"14 2 14 8 20 8"})]})}),g.jsx("h3",{children:f?"Редактировать заметку":"Новая заметка"})]}),g.jsx("button",{className:"modal-close",onClick:()=>c(!1),children:g.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),g.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),g.jsxs("div",{className:"modal-body note-modal-body",children:[g.jsxs("div",{className:"note-input-group",children:[g.jsx("label",{className:"note-input-label",children:"Заголовок"}),g.jsx("input",{className:"modal-input note-title-input",placeholder:"Введите заголовок...",value:m,onChange:k=>h(k.target.value)})]}),g.jsxs("div",{className:"note-input-group",children:[g.jsx("label",{className:"note-input-label",children:"Текст заметки"}),g.jsx("textarea",{className:"modal-input note-body-input",placeholder:"Введите текст заметки...",value:x,onChange:k=>v(k.target.value),rows:6})]}),g.jsxs("div",{className:"image-upload-section",children:[g.jsxs("label",{className:"image-upload-btn",children:[g.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),g.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),g.jsx("polyline",{points:"21 15 16 10 5 21"})]}),"Добавить изображения",g.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:k=>j(k.target.files),hidden:!0})]}),_.length>0&&g.jsx("div",{className:"image-preview-grid",children:_.map((k,se)=>g.jsxs("div",{className:"image-preview-item",children:[g.jsx("img",{src:k,alt:""}),g.jsx("button",{className:"remove-image-btn",onClick:()=>P(se),title:"Удалить",children:g.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),g.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},se))})]})]}),g.jsxs("div",{className:"modal-footer note-modal-footer",children:[g.jsx("button",{className:"modal-cancel",onClick:()=>c(!1),children:"Отмена"}),g.jsxs("button",{className:"modal-save",onClick:I,children:[g.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:g.jsx("polyline",{points:"20 6 9 17 4 12"})}),f?"Сохранить изменения":"Создать заметку"]})]})]})}),T&&g.jsx("div",{className:"modal-overlay image-preview-overlay",onClick:()=>R(null),children:g.jsxs("div",{className:"image-preview-modal",onClick:k=>k.stopPropagation(),children:[g.jsx("button",{className:"modal-close image-preview-close",onClick:()=>R(null),children:"×"}),g.jsx("img",{src:T,alt:"Preview"})]})}),S&&g.jsx("div",{className:"modal-overlay note-view-overlay",onClick:()=>y(null),children:g.jsxs("div",{className:"modal-content note-view-modal",onClick:k=>k.stopPropagation(),children:[g.jsxs("div",{className:"modal-header note-view-header",children:[g.jsxs("div",{className:"modal-title-group",children:[g.jsx("div",{className:"modal-icon note-view-icon",children:g.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),g.jsx("polyline",{points:"14 2 14 8 20 8"})]})}),g.jsx("h3",{children:S.title||"Без заголовка"})]}),g.jsx("button",{className:"modal-close",onClick:()=>y(null),children:g.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),g.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),g.jsxs("div",{className:"modal-body note-view-body",children:[g.jsxs("div",{className:"note-view-meta",children:[g.jsxs("div",{className:"note-view-date",children:[g.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),g.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),g.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),g.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),G(S.createdAt)]}),S.images&&S.images.length>0&&g.jsxs("div",{className:"note-view-attachments",children:[g.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),g.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),g.jsx("polyline",{points:"21 15 16 10 5 21"})]}),S.images.length," ",S.images.length===1?"изображение":S.images.length<5?"изображения":"изображений"]})]}),g.jsx("div",{className:"note-view-text",children:S.body}),S.images&&S.images.length>0&&g.jsx("div",{className:"note-view-images",children:S.images.map((k,se)=>g.jsxs("div",{className:"note-view-image-wrapper",onClick:()=>R(k),children:[g.jsx("img",{src:k,alt:""}),g.jsx("div",{className:"image-overlay",children:g.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:[g.jsx("circle",{cx:"11",cy:"11",r:"8"}),g.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),g.jsx("line",{x1:"11",y1:"8",x2:"11",y2:"14"}),g.jsx("line",{x1:"8",y1:"11",x2:"14",y2:"11"})]})})]},se))})]}),g.jsxs("div",{className:"modal-footer note-view-footer",children:[g.jsx("button",{className:"modal-cancel",onClick:()=>y(null),children:"Закрыть"}),g.jsxs("button",{className:"modal-save",onClick:()=>{y(null),A(S)},children:[g.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),g.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),"Редактировать"]})]})]})})]})}function uR(){const[r]=I1(),e=r.get("embedded")==="1",i=(r.get("subdomain")||"").trim(),[s,l]=q.useState(i),[c,f]=q.useState(null),[p,m]=q.useState([]),[h,x]=q.useState(""),[v,_]=q.useState(null),[E,T]=q.useState(null),[R,S]=q.useState(""),[y,N]=q.useState(!1),[U,L]=q.useState(null),[j,P]=q.useState([]),[I,A]=q.useState(""),[z,K]=q.useState(!1),[G,k]=q.useState(""),[se,ce]=q.useState(!1),[Y,O]=q.useState(""),[H,re]=q.useState(!1),[_e,ye]=q.useState([]),[F,te]=q.useState(null),[Te,Ce]=q.useState(null),[Le,ie]=q.useState(""),[Re,Ae]=q.useState(!1),[Be,Ze]=q.useState(!1),[Ke,bt]=q.useState(""),[rt,ct]=q.useState(!1);q.useEffect(()=>{i&&l(i)},[i]);const xt=q.useCallback(async()=>{const W=s.trim().toLowerCase();if(!W){f(null);return}try{const me=await(await fetch(`/api/auth/status?subdomain=${encodeURIComponent(W)}`)).json();f(!!me.authorized)}catch{f(!1)}},[s]),$e=q.useCallback(async()=>{const W=s.trim().toLowerCase();if(x(""),!W){m([]);return}try{const ge=new URLSearchParams({subdomain:W,limit:"25"});Y.trim()&&ge.set("q",Y.trim()),H&&ge.set("unreadOnly","1");const me=await fetch(`/api/telegram/conversations?${ge.toString()}`);if(!me.ok){const V=await me.json().catch(()=>({}));throw new Error(V.error||me.statusText)}const De=await me.json();m(De.conversations||[])}catch(ge){x(ge.message||"Не удалось загрузить чаты"),m([])}},[s,Y,H]),Pt=q.useCallback(async W=>{const ge=s.trim().toLowerCase();if(!W||!ge){P([]),A("");return}K(!0),A("");try{const me=await fetch(`/api/telegram/conversations/${W}/messages?subdomain=${encodeURIComponent(ge)}&limit=100`);if(!me.ok){const V=await me.json().catch(()=>({}));throw new Error(V.error||me.statusText)}const De=await me.json();P(De.messages||[])}catch(me){A(me.message||"Не удалось загрузить сообщения"),P([])}finally{K(!1)}},[s]);q.useEffect(()=>{xt()},[xt]),q.useEffect(()=>{$e()},[$e]),q.useEffect(()=>{const W=setInterval(()=>{$e()},5e3);return()=>clearInterval(W)},[$e]),q.useEffect(()=>{U&&Pt(U)},[U,Pt]),q.useEffect(()=>{if(!U)return;const W=setInterval(()=>{Pt(U)},3e3);return()=>clearInterval(W)},[U,Pt]),q.useEffect(()=>{if(!E)return;const W=setInterval(async()=>{try{const ge=await fetch(`/api/auth/telegram/qr/${E}`);if(!ge.ok)return;const me=await ge.json();me.status==="authorized"?(S("Telegram (бот) подключён ✅ Обновляем список…"),_(null),T(null),N(!1),$e()):me.status==="expired"&&(S("Сессия QR истекла. Создайте новый код."),_(null),T(null),N(!1))}catch{}},2500);return()=>clearInterval(W)},[E,$e]),q.useEffect(()=>{if(!F)return;const W=setInterval(async()=>{try{const ge=await fetch(`/api/auth/telegram/device/${F}`);if(!ge.ok)return;const me=await ge.json();if(me.qrImage&&Ce(me.qrImage),me.status==="password_needed"&&(Ze(!0),ie(me.passwordHint?`2FA: подсказка «${me.passwordHint}»`:"Введите пароль двухфакторной аутентификации Telegram")),me.status==="pending_scan"&&!Be&&ie("Откройте Telegram → Настройки → Устройства → Связать устройство → отсканируйте QR."),me.status==="authorized"&&(ie(`Аккаунт Telegram подключён (устройство) ✅ ${me.username?"@"+me.username:""}`),Ce(null),te(null),Ae(!1),Ze(!1),$e()),me.status==="error"&&(me.reason==="qridle"?ie((me.error||"Сессия не удержалась по сети.")+" Нажмите кнопку ещё раз, чтобы пересоздать QR."):ie(me.error||"Ошибка авторизации"),Ce(null),Ae(!1),Ze(!1),te(null)),me.status==="starting")if(me.retryAfterMs){const De=Math.max(1,Math.round(me.retryAfterMs/1e3));ie(`Подключаемся к Telegram… сеть нестабильна, автоповтор через ${De}с.`)}else ie("Подключаемся к Telegram…")}catch{}},2e3);return()=>clearInterval(W)},[F,Be,$e]);const vt=async()=>{const W=s.trim().toLowerCase();if(!W){S("Укажите поддомен amoCRM (например company из company.amocrm.ru)");return}N(!0),S("Готовим QR…"),_(null),T(null);try{const me=await(await fetch(`/api/auth/telegram/qr?subdomain=${encodeURIComponent(W)}`,{method:"GET"})).json();if(!me.sessionId||!me.qrImage)throw new Error("Некорректный ответ сервера");_(me.qrImage),T(me.sessionId),S("Откройте Telegram → сканируйте QR → нажмите Start у бота.")}catch(ge){S(ge.message||"Не удалось создать QR. Проверьте TELEGRAM_BOT_USERNAME и токен бота на сервере."),N(!1)}},$t=async()=>{const W=s.trim().toLowerCase();if(!W){ie("Укажите поддомен amoCRM");return}Ae(!0),ie("Запуск MTProto-сессии…"),Ce(null),te(null),Ze(!1),bt("");try{const me=await(await fetch("/api/auth/telegram/device/start",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subdomain:W})})).json();if(!me.sessionId)throw new Error(me.error||"Не удалось начать сессию");te(me.sessionId),ie("Подключение… через пару секунд появится QR.")}catch(ge){ie(ge.message||"Ошибка. Задайте на сервере TELEGRAM_API_ID и TELEGRAM_API_HASH (my.telegram.org)."),Ae(!1)}},J=async()=>{if(!(!F||!Ke.trim())){ct(!0);try{const W=await fetch(`/api/auth/telegram/device/${F}/password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:Ke})}),ge=await W.json().catch(()=>({}));if(!W.ok||ge.ok===!1)throw new Error(ge.error||"Сервер не принял пароль 2FA");Ze(!1),bt(""),ie("Проверка пароля…")}catch(W){ie(W.message||"Не удалось отправить пароль")}finally{ct(!1)}}},Tt=s.trim().toLowerCase(),ut=Tt?`/oauth?subdomain=${encodeURIComponent(Tt)}`:"/oauth",Xe=p.find(W=>W.id===U)||null,B=q.useCallback(async W=>{if(!(!W||!Tt))try{await fetch(`/api/telegram/conversations/${W}/read`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subdomain:Tt})}),$e()}catch{}},[Tt,$e]),Oe=W=>{L(W),B(W)},C=W=>new Promise((ge,me)=>{const De=new FileReader;De.onload=()=>{const V=typeof De.result=="string"?De.result:"";ge({name:W.name,mime:W.type||"application/octet-stream",base64:V})},De.onerror=me,De.readAsDataURL(W)}),b=async W=>{const ge=Array.from(W||[]).slice(0,5);if(ge.length!==0)try{const me=await Promise.all(ge.map(C));ye(De=>[...De,...me].slice(0,5))}catch{A("Не удалось прочитать вложения")}},$=async()=>{if(!Xe||se)return;const W=!!G.trim(),ge=_e.length>0;if(!(!W&&!ge)){ce(!0),A("");try{const me=await fetch(`/api/telegram/conversations/${Xe.id}/messages`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subdomain:Tt,text:G.trim(),attachments:_e})});if(!me.ok){const De=await me.json().catch(()=>({}));throw new Error(De.error||me.statusText)}k(""),ye([]),await Pt(Xe.id),await $e()}catch(me){A(me.message||"Не удалось отправить сообщение")}finally{ce(!1)}}};return g.jsxs("div",{className:`amo-hub ${e?"amo-hub--embedded":""}`,children:[!e&&g.jsx("h1",{className:"amo-hub__title",children:"Corsa · Telegram и amoCRM"}),g.jsxs("p",{className:"amo-hub__lead",children:["Два способа: ",g.jsx("strong",{children:"бот"})," (QR со ссылкой на бота) или ",g.jsx("strong",{children:"связанные устройства"})," (официальный QR аккаунта Telegram). Для записей в amoCRM нужен OAuth и привязка чата к сделке/контакту."]}),g.jsxs("section",{className:"amo-hub__card",children:[g.jsx("h2",{children:"Поддомен amoCRM"}),g.jsxs("p",{className:"amo-hub__muted",children:["Только имя аккаунта: для ",g.jsx("code",{children:"mycompany.amocrm.ru"})," введите ",g.jsx("code",{children:"mycompany"})]}),g.jsxs("div",{className:"amo-hub__row",children:[g.jsx("input",{className:"amo-hub__input",value:s,onChange:W=>l(W.target.value),placeholder:"mycompany"}),g.jsx("button",{type:"button",className:"amo-hub__btn",onClick:()=>{xt(),$e()},children:"Обновить"})]})]}),g.jsxs("section",{className:"amo-hub__card",children:[g.jsx("h2",{children:"1. Доступ к API amoCRM"}),c===null&&g.jsx("p",{className:"amo-hub__muted",children:"Проверяем…"}),c===!0&&g.jsx("p",{className:"amo-hub__ok",children:"OAuth активен — можно синхронизировать сообщения в карточки."}),c===!1&&g.jsx("p",{className:"amo-hub__warn",children:"Интеграция с API amoCRM не авторизована. Нажмите и разрешите доступ в новом окне, затем вернитесь сюда и нажмите «Обновить»."}),Tt?g.jsx("a",{className:"amo-hub__btn amo-hub__btn--primary",href:ut,target:"_blank",rel:"noreferrer",children:"Подключить amoCRM (OAuth)"}):g.jsx("p",{className:"amo-hub__muted",children:"Укажите поддомен выше, затем откройте OAuth."})]}),g.jsxs("section",{className:"amo-hub__card",children:[g.jsx("h2",{children:"2. Telegram через бота (QR)"}),g.jsxs("p",{className:"amo-hub__muted",children:["На сервере: ",g.jsx("code",{children:"TELEGRAM_TOKEN"})," и ",g.jsx("code",{children:"TELEGRAM_BOT_USERNAME"})," (без @)."]}),g.jsx("button",{type:"button",className:"amo-hub__btn amo-hub__btn--primary",disabled:y,onClick:vt,children:y&&E?"Ожидание…":"QR для бота"}),v&&g.jsx("div",{className:"amo-hub__qr",children:g.jsx("img",{src:v,alt:"QR для бота",width:220,height:220})}),R&&g.jsx("p",{className:"amo-hub__hint",children:R})]}),g.jsxs("section",{className:"amo-hub__card amo-hub__card--accent",children:[g.jsx("h2",{children:"3. Telegram «Связанные устройства» (MTProto)"}),g.jsxs("p",{className:"amo-hub__muted",children:["Официальный сценарий: QR с префиксом ",g.jsx("code",{children:"tg://login"}),". В приложении Telegram:"," ",g.jsx("strong",{children:"Настройки → Устройства → Связать устройство"})," → наведите камеру на QR с экрана. На сервере нужны ",g.jsx("code",{children:"TELEGRAM_API_ID"})," и ",g.jsx("code",{children:"TELEGRAM_API_HASH"})," с"," ",g.jsx("a",{href:"https://my.telegram.org",target:"_blank",rel:"noreferrer",children:"my.telegram.org"}),"."]}),g.jsx("button",{type:"button",className:"amo-hub__btn amo-hub__btn--primary",disabled:Re,onClick:$t,children:Re&&F?"Ожидание сканирования…":"Показать QR (связать устройство)"}),Te&&g.jsx("div",{className:"amo-hub__qr",children:g.jsx("img",{src:Te,alt:"QR связать устройство Telegram",width:220,height:220})}),Be&&g.jsxs("div",{className:"amo-hub__row amo-hub__row--stack",children:[g.jsx("input",{type:"password",className:"amo-hub__input",placeholder:"Облачный пароль / 2FA",value:Ke,onChange:W=>bt(W.target.value)}),g.jsx("button",{type:"button",className:"amo-hub__btn amo-hub__btn--primary",disabled:rt||!Ke.trim(),onClick:J,children:rt?"…":"Отправить пароль"})]}),Le&&g.jsx("p",{className:"amo-hub__hint",children:Le})]}),g.jsxs("section",{className:"amo-hub__card",children:[g.jsx("h2",{children:"Недавние диалоги (до 25)"}),g.jsx("p",{className:"amo-hub__muted",children:"После режима «Связанные устройства» подтягиваются последние диалоги из вашего аккаунта в список связей Corsa. Входящие сообщения уходят в amoCRM как примечание, если чат привязан к карточке."}),g.jsxs("div",{className:"amo-hub__row",children:[g.jsx("input",{className:"amo-hub__input",value:Y,onChange:W=>O(W.target.value),placeholder:"Поиск по chat id или тексту"}),g.jsxs("label",{className:"amo-hub__checkbox",children:[g.jsx("input",{type:"checkbox",checked:H,onChange:W=>re(W.target.checked)}),"Только непрочитанные"]})]}),h&&g.jsx("p",{className:"amo-hub__err",children:h}),!h&&p.length===0&&g.jsx("p",{className:"amo-hub__muted",children:"Пока пусто — выполните один из шагов с QR."}),g.jsx("ul",{className:"amo-hub__chat-list",children:p.map(W=>g.jsxs("li",{className:`amo-hub__chat-item ${U===W.id?"amo-hub__chat-item--active":""}`,onClick:()=>Oe(W.id),children:[g.jsx("span",{className:"amo-hub__chat-title",children:W.title}),W.lastMessageText&&g.jsx("span",{className:"amo-hub__chat-preview",children:W.lastMessageText}),g.jsxs("span",{className:"amo-hub__chat-meta",children:[W.channel,W.amoLeadId?` · сделка #${W.amoLeadId}`:"",W.amoContactId?` · контакт #${W.amoContactId}`:"",!W.amoLeadId&&!W.amoContactId?" · не привязано к карточке":"",W.unreadCount>0?` · непрочитано: ${W.unreadCount}`:""]})]},W.id))})]}),g.jsxs("section",{className:"amo-hub__card",children:[g.jsx("h2",{children:"Диалог"}),!Xe&&g.jsx("p",{className:"amo-hub__muted",children:"Выберите чат выше, чтобы открыть переписку и ответить клиенту."}),Xe&&g.jsxs(g.Fragment,{children:[g.jsxs("p",{className:"amo-hub__muted",children:[g.jsx("strong",{children:Xe.title})," · ",Xe.channel]}),z&&g.jsx("p",{className:"amo-hub__muted",children:"Загружаем сообщения…"}),I&&g.jsx("p",{className:"amo-hub__err",children:I}),!z&&!I&&j.length===0&&g.jsx("p",{className:"amo-hub__muted",children:"История пуста. Отправьте первое сообщение."}),g.jsx("div",{className:"amo-hub__messages",children:j.map(W=>g.jsxs("div",{className:`amo-hub__msg ${W.direction==="outgoing"?"amo-hub__msg--out":"amo-hub__msg--in"}`,children:[g.jsx("div",{className:"amo-hub__msg-text",children:W.text}),g.jsxs("div",{className:"amo-hub__msg-time",children:[W.createdAt?new Date(W.createdAt).toLocaleString():"",W.senderName?` · ${W.senderName}`:"",W.direction==="outgoing"&&g.jsx("span",{className:`amo-hub__msg-status amo-hub__msg-status--${W.status||"sent"}`,children:W.status==="failed"?" · не доставлено":" · доставлено"})]}),W.direction==="outgoing"&&W.status==="failed"&&W.errorText&&g.jsx("div",{className:"amo-hub__msg-error",children:W.errorText})]},W.id))}),g.jsxs("div",{className:"amo-hub__composer",children:[g.jsxs("div",{className:"amo-hub__row",children:[g.jsxs("label",{className:"amo-hub__btn",children:["Добавить файлы",g.jsx("input",{type:"file",multiple:!0,onChange:W=>b(W.target.files),style:{display:"none"}})]}),_e.length>0&&g.jsx("button",{type:"button",className:"amo-hub__btn",onClick:()=>ye([]),children:"Очистить вложения"})]}),_e.length>0&&g.jsx("div",{className:"amo-hub__attachments",children:_e.map((W,ge)=>g.jsx("span",{className:"amo-hub__attachment-chip",children:W.name},`${W.name}-${ge}`))}),g.jsx("textarea",{className:"amo-hub__textarea",value:G,onChange:W=>k(W.target.value),placeholder:"Введите сообщение клиенту…",rows:3}),g.jsx("button",{type:"button",className:"amo-hub__btn amo-hub__btn--primary",onClick:$,disabled:se||!G.trim()&&_e.length===0,children:se?"Отправка…":"Отправить"})]})]})]})]})}function fR(){const r=$r(),[e,i]=q.useState("monthly"),s=p=>{r("/dashboard",{state:{openAddIntegrationModal:!0,selectedTariff:p}})},l=[{id:"lite",name:"Lite",description:"Для начинающих",features:[{text:"100 диалогов",included:!0},{text:"Нельзя писать первым",included:!1}],pricing:{monthly:{price:720,period:"месяц"},"6months":{price:649,period:"месяц (скидка 10%)",original:720},"12months":{price:579,period:"месяц (скидка 20%)",original:720}},color:"lite",popular:!1},{id:"pro",name:"Pro",description:"Для растущих компаний",features:[{text:"500 диалогов",included:!0},{text:"Можно писать первым",included:!0}],pricing:{monthly:{price:1140,period:"месяц"},"6months":{price:1026,period:"месяц (скидка 10%)",original:1140},"12months":{price:912,period:"месяц (скидка 20%)",original:1140}},color:"pro",popular:!0},{id:"max",name:"MAX",description:"Для профессионалов",features:[{text:"1000 диалогов",included:!0},{text:"Можно писать первым",included:!0},{text:"Расшифровка аудиосообщений",included:!0}],pricing:{monthly:{price:2899,period:"месяц"},"6months":{price:2609,period:"месяц (скидка 10%)",original:2899},"12months":{price:2319,period:"месяц (скидка 20%)",original:2899}},color:"max",popular:!1}],c=p=>p.pricing[e],f=p=>{const m=c(p);return m.original?Math.round(m.original-m.price):0};return g.jsxs("div",{className:"pricing-container",children:[g.jsxs("div",{className:"pricing-header",children:[g.jsx("h1",{children:"Выберите подходящий тариф"}),g.jsx("p",{children:"Гибкое ценообразование для вашего бизнеса"}),g.jsxs("div",{className:"billing-toggle",children:[g.jsx("button",{className:`toggle-btn ${e==="monthly"?"active":""}`,onClick:()=>i("monthly"),children:"Помесячно"}),g.jsxs("button",{className:`toggle-btn ${e==="6months"?"active":""}`,onClick:()=>i("6months"),children:["6 месяцев",g.jsx("span",{className:"badge",children:"-10%"})]}),g.jsxs("button",{className:`toggle-btn ${e==="12months"?"active":""}`,onClick:()=>i("12months"),children:["12 месяцев",g.jsx("span",{className:"badge",children:"-20%"})]})]})]}),g.jsx("div",{className:"pricing-cards",children:l.map(p=>{const m=c(p),h=f(p);return g.jsxs("div",{className:`pricing-card pricing-card-${p.color}`,children:[g.jsxs("div",{className:"card-header",children:[g.jsx("h2",{children:p.name}),g.jsx("p",{className:"plan-description",children:p.description})]}),g.jsxs("div",{className:"pricing-section",children:[g.jsxs("div",{className:"price",children:[g.jsx("span",{className:"currency",children:"₽"}),g.jsx("span",{className:"amount",children:m.price}),g.jsxs("span",{className:"period",children:["/",m.period]})]}),h>0&&g.jsxs("div",{className:"savings",children:["Экономия: ",h,"₽/месяц"]}),e!=="monthly"&&m.original&&g.jsxs("div",{className:"price-breakdown",children:[e==="6months"&&`Всего: ${(m.price*6).toLocaleString("ru-RU")}₽`,e==="12months"&&`Всего: ${(m.price*12).toLocaleString("ru-RU")}₽`]})]}),g.jsxs("button",{className:`cta-button cta-${p.color}`,onClick:()=>s(p.id),children:["Начать с ",p.name]}),g.jsxs("div",{className:"features-list",children:[g.jsx("h3",{children:"Возможности:"}),p.features.map((x,v)=>g.jsxs("div",{className:"feature-item",children:[g.jsx("div",{className:`feature-check ${x.included?"included":"excluded"}`,children:x.included?"✓":"—"}),g.jsx("span",{className:x.included?"feature-text":"feature-text disabled",children:x.text})]},v))]})]},p.id)})})]})}function Zx(){const[r,e]=q.useState(!1),i=()=>{e(!0)},s=()=>{e(!1)};return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"support-section",children:g.jsxs("div",{className:"support-container",children:[g.jsx("button",{className:"support-btn",onClick:i,children:"Техническая поддержка"}),g.jsxs("div",{className:"social-icons",children:[g.jsx("a",{href:"https://t.me/corsa_sup",className:"icon-link",target:"_blank",rel:"noopener noreferrer",title:"Telegram поддержка",children:g.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:g.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.09-.04-.13-.05-.04-.13-.02-.18-.01-.08.02-1.32.84-3.73 2.47-.35.24-.67.36-.96.35-.32-.01-.93-.18-1.38-.33-.56-.18-1-.28-.96-.6.02-.17.25-.34.69-.51 2.7-1.18 4.56-1.96 5.59-2.33 2.66-1.01 3.21-1.18 3.57-1.19.08 0 .26.02.38.13.1.09.13.21.14.33-.01.1-.05.26-.09.44z"})})}),g.jsx("a",{href:"mailto:Corsa.integration@yandex.ru",className:"icon-link",target:"_blank",rel:"noopener noreferrer",title:"Написать письмо",children:g.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:g.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})})})]})]})}),r&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"modal-overlay",onClick:s}),g.jsxs("div",{className:"support-modal",children:[g.jsx("button",{className:"modal-close",onClick:s,children:"✕"}),g.jsx("h2",{children:"Техническая поддержка"}),g.jsx("p",{className:"modal-description",children:"Выберите удобный способ связи"}),g.jsxs("div",{className:"modal-contacts",children:[g.jsxs("a",{href:"https://t.me/corsa_sup",className:"contact-card telegram",target:"_blank",rel:"noopener noreferrer",children:[g.jsx("div",{className:"contact-icon",children:g.jsx("svg",{viewBox:"0 0 24 24",width:"40",height:"40",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:g.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.09-.04-.13-.05-.04-.13-.02-.18-.01-.08.02-1.32.84-3.73 2.47-.35.24-.67.36-.96.35-.32-.01-.93-.18-1.38-.33-.56-.18-1-.28-.96-.6.02-.17.25-.34.69-.51 2.7-1.18 4.56-1.96 5.59-2.33 2.66-1.01 3.21-1.18 3.57-1.19.08 0 .26.02.38.13.1.09.13.21.14.33-.01.1-.05.26-.09.44z"})})}),g.jsxs("div",{className:"contact-info",children:[g.jsx("h3",{children:"Telegram"}),g.jsx("p",{children:"@corsa_sup"}),g.jsx("span",{className:"contact-link",children:"Перейти в чат →"})]})]}),g.jsxs("a",{href:"mailto:Corsa.integration@yandex.ru",className:"contact-card email",children:[g.jsx("div",{className:"contact-icon",children:g.jsx("svg",{viewBox:"0 0 24 24",width:"40",height:"40",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:g.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})})}),g.jsxs("div",{className:"contact-info",children:[g.jsx("h3",{children:"Email"}),g.jsx("p",{children:"Corsa.integration@yandex.ru"}),g.jsx("span",{className:"contact-link",children:"Отправить письмо →"})]})]})]})]})]})]})}function xu({children:r}){const{isAuthenticated:e}=Ws(),{isDark:i}=Ap(),s=ci(),l=c=>s.pathname===c;return g.jsxs("div",{className:"app",children:[g.jsx("div",{className:"liquid-ether-background",children:g.jsx(Xx,{colors:i?["#2f00ed","#0044ff","#00aaff","#7fd4ff"]:["#0044ff","#0044ff","#0044ff","#0044ff"],mouseForce:40,cursorSize:80,isViscous:!0,viscous:30,iterationsViscous:16,iterationsPoisson:8,resolution:.4,isBounce:!1,autoDemo:!0,autoSpeed:.2,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),g.jsxs("header",{className:"header",children:[g.jsx("h2",{children:"Corsa Messenger Integrator"}),g.jsxs("nav",{className:"nav",children:[g.jsx(Vs,{to:"/",className:`nav-link ${l("/")?"active":""}`,children:"Главная"}),g.jsx(Vs,{to:"/privacy",className:`nav-link ${l("/privacy")?"active":""}`,children:"Политика и реквизиты"}),g.jsx(Vs,{to:"/pricing",className:`nav-link ${l("/pricing")?"active":""}`,children:"Тарифы"}),g.jsx(Vs,{to:e?"/dashboard":"/auth",className:`nav-link ${l("/auth")||l("/dashboard")?"active":""}`,children:e?"Личный кабинет":"Авторизация"})]})]}),g.jsx("div",{className:"content",children:r}),g.jsx("footer",{className:"footer",children:"© 2026 Corsa Messenger Integrator. All rights reserved."})]})}function dR(){return g.jsxs(xu,{children:[g.jsx("h1",{children:"Интеграция Мессенджеров ↔ amoCRM"}),g.jsx("div",{className:"logo-wrap",children:g.jsx("img",{src:j1,alt:"Corsa Messenger Integrator"})}),g.jsx("p",{className:"description",children:"Безопасная интеграция для обмена сообщениями между Мессенджерами и CRM системой."}),g.jsxs("div",{className:"features",children:[g.jsx("div",{className:"feature",children:"1. Установите виджет в аккаунте amoCRM"}),g.jsx("div",{className:"feature",children:"2. Авторизуйся в Corsa"}),g.jsx("div",{className:"feature",children:"3. Выбери каналы связи"}),g.jsx("div",{className:"feature",children:"4. Выбери тарифный план и тестируй в течении 3 дней"})]}),g.jsx("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:g.jsx(Vs,{to:"/auth",className:"btn-support",children:"Начать работу"})}),g.jsx(Zx,{})]})}function hR(){return g.jsxs(xu,{children:[g.jsx("h1",{children:"Политика конфиденциальности и реквизиты"}),g.jsxs("div",{className:"features",children:[g.jsxs("div",{className:"feature",children:[g.jsx("strong",{children:"Политика конфиденциальности:"})," Мы не передаём персональные данные третьим лицам. Данные используются исключительно для работы интеграции."]}),g.jsx("div",{className:"feature",children:"Хранятся только OAuth токены и ID чатов Мессенджеров."}),g.jsxs("div",{className:"feature",children:[g.jsx("strong",{children:"Название:"}),'"Corsa Messenger"']}),g.jsxs("div",{className:"feature",children:[g.jsx("strong",{children:"ИНН:"})," 7701234567"]}),g.jsxs("div",{className:"feature",children:[g.jsx("strong",{children:"Email:"})," Corsa.integration@yandex.ru"]})]}),g.jsx(Zx,{})]})}function pR({children:r}){const{isAuthenticated:e,loading:i}=Ws();return i?g.jsx("div",{className:"loading",children:"Загрузка..."}):e?r:g.jsx(tx,{to:"/auth"})}function mR(){const{loading:r,isAuthenticated:e}=Ws();return r?g.jsx("div",{className:"app",children:g.jsx("div",{className:"content",style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"},children:g.jsx("p",{children:"Загрузка..."})})}):g.jsxs(r1,{children:[g.jsx(Bs,{path:"/widget-page",element:g.jsx(uR,{})}),g.jsx(Bs,{path:"/",element:g.jsx(dR,{})}),g.jsx(Bs,{path:"/privacy",element:g.jsx(hR,{})}),g.jsx(Bs,{path:"/pricing",element:g.jsx(xu,{children:g.jsx(fR,{})})}),g.jsx(Bs,{path:"/auth",element:e?g.jsx(tx,{to:"/dashboard"}):g.jsx(aR,{})}),g.jsx(Bs,{path:"/dashboard",element:g.jsx(pR,{children:g.jsx(xu,{children:g.jsx(lR,{})})})})]})}function gR(){return g.jsx(mR,{})}lM.createRoot(document.getElementById("root")).render(g.jsx(Li.StrictMode,{children:g.jsx(N1,{children:g.jsx(k1,{children:g.jsx(V1,{children:g.jsx(gR,{})})})})}));
