(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Xe=(e,t)=>e===t,ae=Symbol("solid-proxy"),z={equals:Xe};let Je=ke;const q=1,X=2,_e={owned:null,cleanups:null,context:null,owner:null};var m=null;let se=null,Qe=null,b=null,x=null,D=null,Z=0;function Se(e,t){const n=b,s=m,r=e.length===0,o=t===void 0?s:t,l=r?_e:{owned:null,cleanups:null,context:o?o.context:null,owner:o},i=r?e:()=>e(()=>O(()=>te(l)));m=l,b=null;try{return T(i,!0)}finally{b=n,m=s}}function G(e,t){t=t?Object.assign({},z,t):z;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),Le(n,r));return[Ce.bind(n),s]}function M(e,t,n){const s=Re(e,t,!1,q);ee(s)}function A(e,t,n){n=n?Object.assign({},z,n):z;const s=Re(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,ee(s),Ce.bind(s)}function Ye(e){return T(e,!1)}function O(e){if(b===null)return e();const t=b;b=null;try{return e()}finally{b=t}}function he(e,t,n){const s=Array.isArray(e);let r,o=n&&n.defer;return l=>{let i;if(s){i=Array(e.length);for(let a=0;a<e.length;a++)i[a]=e[a]()}else i=e();if(o)return o=!1,l;const c=O(()=>t(i,r,l));return r=i,c}}function Ae(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function xe(){return m}function Ee(e,t){const n=m,s=b;m=e,b=null;try{return T(t,!0)}catch(r){pe(r)}finally{m=n,b=s}}function Ze(e){const t=b,n=m;return Promise.resolve().then(()=>{b=t,m=n;let s;return T(e,!1),b=m=null,s?s.done:void 0})}function $e(e,t){const n=Symbol("context");return{id:n,Provider:rt(n),defaultValue:e}}function Pe(e){return m&&m.context&&m.context[e.id]!==void 0?m.context[e.id]:e.defaultValue}function de(e){const t=A(e),n=A(()=>ce(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function Ce(){if(this.sources&&this.state)if(this.state===q)ee(this);else{const e=x;x=null,T(()=>J(this),!1),x=e}if(b){const e=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(e)):(b.sources=[this],b.sourceSlots=[e]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}function Le(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&T(()=>{for(let r=0;r<e.observers.length;r+=1){const o=e.observers[r],l=se&&se.running;l&&se.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?x.push(o):D.push(o),o.observers&&Ue(o)),l||(o.state=q)}if(x.length>1e6)throw x=[],new Error},!1)),t}function ee(e){if(!e.fn)return;te(e);const t=Z;et(e,e.value,t)}function et(e,t,n){let s;const r=m,o=b;b=m=e;try{s=e.fn(t)}catch(l){return e.pure&&(e.state=q,e.owned&&e.owned.forEach(te),e.owned=null),e.updatedAt=n+1,pe(l)}finally{b=o,m=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Le(e,s):e.value=s,e.updatedAt=n)}function Re(e,t,n,s=q,r){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:m?m.context:null,pure:n};return m===null||m!==_e&&(m.owned?m.owned.push(o):m.owned=[o]),o}function Oe(e){if(e.state===0)return;if(e.state===X)return J(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Z);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===q)ee(e);else if(e.state===X){const s=x;x=null,T(()=>J(e,t[0]),!1),x=s}}function T(e,t){if(x)return e();let n=!1;t||(x=[]),D?n=!0:D=[],Z++;try{const s=e();return tt(n),s}catch(s){n||(D=null),x=null,pe(s)}}function tt(e){if(x&&(ke(x),x=null),e)return;const t=D;D=null,t.length&&T(()=>Je(t),!1)}function ke(e){for(let t=0;t<e.length;t++)Oe(e[t])}function J(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const r=s.state;r===q?s!==t&&(!s.updatedAt||s.updatedAt<Z)&&Oe(s):r===X&&J(s,t)}}}function Ue(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=X,n.pure?x.push(n):D.push(n),n.observers&&Ue(n))}}function te(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),l=n.observerSlots.pop();s<r.length&&(o.sourceSlots[l]=s,r[s]=o,n.observerSlots[s]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)te(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function nt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function pe(e,t=m){throw nt(e)}function ce(e){if(typeof e=="function"&&!e.length)return ce(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=ce(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function rt(e,t){return function(s){let r;return M(()=>r=O(()=>(m.context={...m.context,[e]:s.value},de(()=>s.children))),void 0),r}}function S(e,t){return O(()=>e(t||{}))}function H(){return!0}const st={get(e,t,n){return t===ae?n:e.get(t)},has(e,t){return t===ae?!0:e.has(t)},set:H,deleteProperty:H,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:H,deleteProperty:H}},ownKeys(e){return e.keys()}};function oe(e){return(e=typeof e=="function"?e():e)?e:{}}function ot(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function it(...e){let t=!1;for(let l=0;l<e.length;l++){const i=e[l];t=t||!!i&&ae in i,e[l]=typeof i=="function"?(t=!0,A(i)):i}if(t)return new Proxy({get(l){for(let i=e.length-1;i>=0;i--){const c=oe(e[i])[l];if(c!==void 0)return c}},has(l){for(let i=e.length-1;i>=0;i--)if(l in oe(e[i]))return!0;return!1},keys(){const l=[];for(let i=0;i<e.length;i++)l.push(...Object.keys(oe(e[i])));return[...new Set(l)]}},st);const n={},s=Object.create(null);for(let l=e.length-1;l>=0;l--){const i=e[l];if(!i)continue;const c=Object.getOwnPropertyNames(i);for(let a=c.length-1;a>=0;a--){const u=c[a];if(u==="__proto__"||u==="constructor")continue;const d=Object.getOwnPropertyDescriptor(i,u);if(!s[u])s[u]=d.get?{enumerable:!0,configurable:!0,get:ot.bind(n[u]=[d.get.bind(i)])}:d.value!==void 0?d:void 0;else{const p=n[u];p&&(d.get?p.push(d.get.bind(i)):d.value!==void 0&&p.push(()=>d.value))}}}const r={},o=Object.keys(s);for(let l=o.length-1;l>=0;l--){const i=o[l],c=s[i];c&&c.get?Object.defineProperty(r,i,c):r[i]=c?c.value:void 0}return r}const lt=e=>`Stale read from <${e}>.`;function Te(e){const t=e.keyed,n=A(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return A(()=>{const s=n();if(s){const r=e.children;return typeof r=="function"&&r.length>0?O(()=>r(t?s:()=>{if(!O(n))throw lt("Show");return e.when})):r}return e.fallback},void 0,void 0)}function at(e,t,n){let s=n.length,r=t.length,o=s,l=0,i=0,c=t[r-1].nextSibling,a=null;for(;l<r||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[r-1]===n[o-1];)r--,o--;if(r===l){const u=o<s?i?n[i-1].nextSibling:n[o-i]:c;for(;i<o;)e.insertBefore(n[i++],u)}else if(o===i)for(;l<r;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[r-1]){const u=t[--r].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],u),t[r]=n[o]}else{if(!a){a=new Map;let d=i;for(;d<o;)a.set(n[d],d++)}const u=a.get(t[l]);if(u!=null)if(i<u&&u<o){let d=l,p=1,g;for(;++d<r&&d<o&&!((g=a.get(t[d]))==null||g!==u+p);)p++;if(p>u-i){const E=t[l];for(;i<u;)e.insertBefore(n[i++],E)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const we="_$DX_DELEGATE";function ct(e,t,n,s={}){let r;return Se(o=>{r=o,t===document?e():Q(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function C(e,t,n){let s;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},o=()=>(s||(s=r())).cloneNode(!0);return o.cloneNode=o,o}function ut(e,t=window.document){const n=t[we]||(t[we]=new Set);for(let s=0,r=e.length;s<r;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,ht))}}function ft(e,t,n){e.setAttribute(t,n)}function j(e,t){t==null?e.removeAttribute("class"):e.className=t}function Q(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return Y(e,t,s,n);M(r=>Y(e,t(),r,n),s)}function ht(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Y(e,t,n,s,r){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===n))return n;if(l){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=I(e,n,s,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean")n=I(e,n,s);else{if(o==="function")return M(()=>{let i=t();for(;typeof i=="function";)i=i();n=Y(e,i,n,s)}),()=>n;if(Array.isArray(t)){const i=[],c=n&&Array.isArray(n);if(ue(i,t,n,r))return M(()=>n=Y(e,i,n,s,!0)),()=>n;if(i.length===0){if(n=I(e,n,s),l)return n}else c?n.length===0?ve(e,i,s):at(e,n,i):(n&&I(e),ve(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=I(e,n,s,t);I(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ue(e,t,n,s){let r=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],c=n&&n[e.length],a;if(!(i==null||i===!0||i===!1))if((a=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))r=ue(e,i,c)||r;else if(a==="function")if(s){for(;typeof i=="function";)i=i();r=ue(e,Array.isArray(i)?i:[i],Array.isArray(c)?c:[c])||r}else e.push(i),r=!0;else{const u=String(i);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return r}function ve(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function I(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(r!==i){const c=i.parentNode===e;!o&&!l?c?e.replaceChild(r,i):e.insertBefore(r,n):c&&i.remove()}else o=!0}}else e.insertBefore(r,n);return[r]}const dt=!1;function Ne(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,o){if(n)return!(n=!1);const l={to:r,options:o,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:c=>{c&&(n=!0),i.navigate(r,{...o,resolve:!1})}});return!l.defaultPrevented}return{subscribe:t,confirm:s}}let fe;function me(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),fe=window.history.state._depth}me();function pt(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function mt(e,t){let n=!1;return()=>{const s=fe;me();const r=s==null?null:fe-s;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const gt=/^(?:[a-z0-9]+:)?\/\//i,yt=/^\/+|(\/)\/+$/g,Be="http://sr";function K(e,t=!1){const n=e.replace(yt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function V(e,t,n){if(gt.test(t))return;const s=K(e),r=n&&K(n);let o="";return!r||t.startsWith("/")?o=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?o=s+r:o=r,(o||"/")+K(t,!o)}function wt(e,t){if(e==null)throw new Error(t);return e}function vt(e,t){return K(e).replace(/\/*(\*.*)?$/g,"")+K(t)}function De(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function bt(e,t,n){const[s,r]=e.split("/*",2),o=s.split("/").filter(Boolean),l=o.length;return i=>{const c=i.split("/").filter(Boolean),a=c.length-l;if(a<0||a>0&&r===void 0&&!t)return null;const u={path:l?"":"/",params:{}},d=p=>n===void 0?void 0:n[p];for(let p=0;p<l;p++){const g=o[p],E=c[p],h=g[0]===":",f=h?g.slice(1):g;if(h&&ie(E,d(f)))u.params[f]=E;else if(h||!ie(E,g))return null;u.path+=`/${E}`}if(r){const p=a?c.slice(-a).join("/"):"";if(ie(p,d(r)))u.params[r]=p;else return null}return u}}function ie(e,t){const n=s=>s.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function _t(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,o)=>r+(o.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function qe(e){const t=new Map,n=xe();return new Proxy({},{get(s,r){return t.has(r)||Ee(n,()=>t.set(r,A(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Fe(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return Fe(s).reduce((o,l)=>[...o,...r.map(i=>i+l)],[])}const St=100,je=$e(),Ie=$e(),At=()=>wt(Pe(je),"<A> and 'use' router primitives can be only used inside a Route."),xt=()=>At().location;function Et(e,t=""){const{component:n,load:s,children:r,info:o}=e,l=!r||Array.isArray(r)&&!r.length,i={key:e,component:n,load:s,info:o};return Me(e.path).reduce((c,a)=>{for(const u of Fe(a)){const d=vt(t,u);let p=l?d:d.split("/*",1)[0];p=p.split("/").map(g=>g.startsWith(":")||g.startsWith("*")?g:encodeURIComponent(g)).join("/"),c.push({...i,originalPath:a,pattern:p,matcher:bt(p,!l,e.matchFilters)})}return c},[])}function $t(e,t=0){return{routes:e,score:_t(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const o=e[r],l=o.matcher(n);if(!l)return null;s.unshift({...l,route:o})}return s}}}function Me(e){return Array.isArray(e)?e:[e]}function Ge(e,t="",n=[],s=[]){const r=Me(e);for(let o=0,l=r.length;o<l;o++){const i=r[o];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const c=Et(i,t);for(const a of c){n.push(a);const u=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!u)Ge(i.children,a.pattern,n,s);else{const d=$t([...n],s.length);s.push(d)}n.pop()}}}return n.length?s:s.sort((o,l)=>l.score-o.score)}function le(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Pt(e,t){const n=new URL(Be),s=A(c=>{const a=e();try{return new URL(a,n)}catch{return console.error(`Invalid path ${a}`),c}},n,{equals:(c,a)=>c.href===a.href}),r=A(()=>s().pathname),o=A(()=>s().search,!0),l=A(()=>s().hash),i=()=>"";return{get pathname(){return r()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return i()},query:qe(he(o,()=>De(s())))}}let B;function Ct(){return B}function Lt(e,t,n,s={}){const{signal:[r,o],utils:l={}}=e,i=l.parsePath||(v=>v),c=l.renderPath||(v=>v),a=l.beforeLeave||Ne(),u=V("",s.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!r().value&&o({value:u,replace:!0,scroll:!1});const[d,p]=G(!1);let g;const E=(v,_)=>{_.value===h()&&_.state===w()||(g===void 0&&p(!0),B=v,g=_,Ze(()=>{g===_&&(f(g.value),y(g.state),L[1]([]))}).finally(()=>{g===_&&Ye(()=>{B=void 0,v==="navigate"&&Ve(g),p(!1),g=void 0})}))},[h,f]=G(r().value),[w,y]=G(r().state),R=Pt(h,w),$=[],L=G([]),k=A(()=>typeof s.transformUrl=="function"?le(t(),s.transformUrl(R.pathname)):le(t(),R.pathname)),Ke=qe(()=>{const v=k(),_={};for(let P=0;P<v.length;P++)Object.assign(_,v[P].params);return _}),ge={pattern:u,path:()=>u,outlet:()=>null,resolvePath(v){return V(u,v)}};return M(he(r,v=>E("native",v),{defer:!0})),{base:ge,location:R,params:Ke,isRouting:d,renderPath:c,parsePath:i,navigatorFactory:He,matches:k,beforeLeave:a,preloadRoute:ze,singleFlight:s.singleFlight===void 0?!0:s.singleFlight,submissions:L};function We(v,_,P){O(()=>{if(typeof _=="number"){_&&(l.go?l.go(_):console.warn("Router integration does not support relative routing"));return}const{replace:ne,resolve:re,scroll:F,state:W}={replace:!1,resolve:!0,scroll:!0,...P},N=re?v.resolvePath(_):V("",_);if(N===void 0)throw new Error(`Path '${_}' is not a routable path`);if($.length>=St)throw new Error("Too many redirects");const ye=h();(N!==ye||W!==w())&&(dt||a.confirm(N,P)&&($.push({value:ye,replace:ne,scroll:F,state:w()}),E("navigate",{value:N,state:W})))})}function He(v){return v=v||Pe(Ie)||ge,(_,P)=>We(v,_,P)}function Ve(v){const _=$[0];_&&(o({...v,replace:_.replace,scroll:_.scroll}),$.length=0)}function ze(v,_={}){const P=le(t(),v.pathname),ne=B;B="preload";for(let re in P){const{route:F,params:W}=P[re];F.component&&F.component.preload&&F.component.preload();const{load:N}=F;_.preloadData&&N&&Ee(n(),()=>N({params:W,location:{pathname:v.pathname,search:v.search,hash:v.hash,query:De(v),state:null,key:""},intent:"preload"}))}B=ne}}function Rt(e,t,n,s){const{base:r,location:o,params:l}=e,{pattern:i,component:c,load:a}=s().route,u=A(()=>s().path);c&&c.preload&&c.preload();const d=a?a({params:l,location:o,intent:B||"initial"}):void 0;return{parent:t,pattern:i,path:u,outlet:()=>c?S(c,{params:l,location:o,data:d,get children(){return n()}}):n(),resolvePath(g){return V(r.path(),g,u())}}}const Ot=e=>t=>{const{base:n}=t,s=de(()=>t.children),r=A(()=>Ge(s(),t.base||""));let o;const l=Lt(e,r,()=>o,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(l),S(je.Provider,{value:l,get children(){return S(kt,{routerState:l,get root(){return t.root},get load(){return t.rootLoad},get children(){return[A(()=>(o=xe())&&null),S(Ut,{routerState:l,get branches(){return r()}})]}})}})};function kt(e){const t=e.routerState.location,n=e.routerState.params,s=A(()=>e.load&&O(()=>{e.load({params:n,location:t,intent:Ct()||"initial"})}));return S(Te,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>S(r,{params:n,location:t,get data(){return s()},get children(){return e.children}})})}function Ut(e){const t=[];let n;const s=A(he(e.routerState.matches,(r,o,l)=>{let i=o&&r.length===o.length;const c=[];for(let a=0,u=r.length;a<u;a++){const d=o&&o[a],p=r[a];l&&d&&p.route.key===d.route.key?c[a]=l[a]:(i=!1,t[a]&&t[a](),Se(g=>{t[a]=g,c[a]=Rt(e.routerState,c[a-1]||e.routerState.base,be(()=>s()[a+1]),()=>e.routerState.matches()[a])}))}return t.splice(r.length).forEach(a=>a()),l&&i?l:(n=c[0],c)}));return be(()=>s()&&n)()}const be=e=>()=>S(Te,{get when(){return e()},keyed:!0,children:t=>S(Ie.Provider,{value:t,get children(){return t.outlet()}})}),U=e=>{const t=de(()=>e.children);return it(e,{get children(){return t()}})};function Tt([e,t],n,s){return[e,s?r=>t(s(r)):t]}function Nt(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function Bt(e){let t=!1;const n=r=>typeof r=="string"?{value:r}:r,s=Tt(G(n(e.get()),{equals:(r,o)=>r.value===o.value&&r.state===o.state}),void 0,r=>(!t&&e.set(r),r));return e.init&&Ae(e.init((r=e.get())=>{t=!0,s[1](n(r)),t=!1})),Ot({signal:s,create:e.create,utils:e.utils})}function Dt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function qt(e,t){const n=Nt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const Ft=new Map;function jt(e=!0,t=!1,n="/_server",s){return r=>{const o=r.base.path(),l=r.navigatorFactory(r.base);let i={};function c(h){return h.namespaceURI==="http://www.w3.org/2000/svg"}function a(h){if(h.defaultPrevented||h.button!==0||h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)return;const f=h.composedPath().find(k=>k instanceof Node&&k.nodeName.toUpperCase()==="A");if(!f||t&&!f.hasAttribute("link"))return;const w=c(f),y=w?f.href.baseVal:f.href;if((w?f.target.baseVal:f.target)||!y&&!f.hasAttribute("state"))return;const $=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||$&&$.includes("external"))return;const L=w?new URL(y,document.baseURI):new URL(y);if(!(L.origin!==window.location.origin||o&&L.pathname&&!L.pathname.toLowerCase().startsWith(o.toLowerCase())))return[f,L]}function u(h){const f=a(h);if(!f)return;const[w,y]=f,R=r.parsePath(y.pathname+y.search+y.hash),$=w.getAttribute("state");h.preventDefault(),l(R,{resolve:!1,replace:w.hasAttribute("replace"),scroll:!w.hasAttribute("noscroll"),state:$&&JSON.parse($)})}function d(h){const f=a(h);if(!f)return;const[w,y]=f;typeof s=="function"&&(y.pathname=s(y.pathname)),i[y.pathname]||r.preloadRoute(y,{preloadData:w.getAttribute("preload")!=="false"})}function p(h){const f=a(h);if(!f)return;const[w,y]=f;typeof s=="function"&&(y.pathname=s(y.pathname)),!i[y.pathname]&&(i[y.pathname]=setTimeout(()=>{r.preloadRoute(y,{preloadData:w.getAttribute("preload")!=="false"}),delete i[y.pathname]},200))}function g(h){const f=a(h);if(!f)return;const[,w]=f;typeof s=="function"&&(w.pathname=s(w.pathname)),i[w.pathname]&&(clearTimeout(i[w.pathname]),delete i[w.pathname])}function E(h){if(h.defaultPrevented)return;let f=h.submitter&&h.submitter.hasAttribute("formaction")?h.submitter.getAttribute("formaction"):h.target.getAttribute("action");if(!f)return;if(!f.startsWith("https://action/")){const y=new URL(f,Be);if(f=r.parsePath(y.pathname+y.search),!f.startsWith(n))return}if(h.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const w=Ft.get(f);if(w){h.preventDefault();const y=new FormData(h.target);h.submitter&&h.submitter.name&&y.append(h.submitter.name,h.submitter.value),w.call({r,f:h.target},y)}}ut(["click","submit"]),document.addEventListener("click",u),e&&(document.addEventListener("mouseover",p),document.addEventListener("mouseout",g),document.addEventListener("focusin",d),document.addEventListener("touchstart",d)),document.addEventListener("submit",E),Ae(()=>{document.removeEventListener("click",u),e&&(document.removeEventListener("mouseover",p),document.removeEventListener("mouseout",g),document.removeEventListener("focusin",d),document.removeEventListener("touchstart",d)),document.removeEventListener("submit",E)})}}function It(e){const t=()=>{const s=window.location.pathname+window.location.search;return{value:e.transformUrl?e.transformUrl(s)+window.location.hash:s+window.location.hash,state:window.history.state}},n=Ne();return Bt({get:t,set({value:s,replace:r,scroll:o,state:l}){r?window.history.replaceState(pt(l),"",s):window.history.pushState(l,"",s),qt(decodeURIComponent(window.location.hash.slice(1)),o),me()},init:s=>Dt(window,"popstate",mt(s,r=>{if(r&&r<0)return!n.confirm(r);{const o=t();return!n.confirm(o.value,{state:o.state})}})),create:jt(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:s=>window.history.go(s),beforeLeave:n}})(e)}const Mt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20166%20155.3'%3e%3cpath%20d='M163%2035S110-4%2069%205l-3%201c-6%202-11%205-14%209l-2%203-15%2026%2026%205c11%207%2025%2010%2038%207l46%209%2018-30z'%20fill='%2376b3e1'/%3e%3clinearGradient%20id='a'%20gradientUnits='userSpaceOnUse'%20x1='27.5'%20y1='3'%20x2='152'%20y2='63.5'%3e%3cstop%20offset='.1'%20stop-color='%2376b3e1'/%3e%3cstop%20offset='.3'%20stop-color='%23dcf2fd'/%3e%3cstop%20offset='1'%20stop-color='%2376b3e1'/%3e%3c/linearGradient%3e%3cpath%20d='M163%2035S110-4%2069%205l-3%201c-6%202-11%205-14%209l-2%203-15%2026%2026%205c11%207%2025%2010%2038%207l46%209%2018-30z'%20opacity='.3'%20fill='url(%23a)'/%3e%3cpath%20d='M52%2035l-4%201c-17%205-22%2021-13%2035%2010%2013%2031%2020%2048%2015l62-21S92%2026%2052%2035z'%20fill='%23518ac8'/%3e%3clinearGradient%20id='b'%20gradientUnits='userSpaceOnUse'%20x1='95.8'%20y1='32.6'%20x2='74'%20y2='105.2'%3e%3cstop%20offset='0'%20stop-color='%2376b3e1'/%3e%3cstop%20offset='.5'%20stop-color='%234377bb'/%3e%3cstop%20offset='1'%20stop-color='%231f3b77'/%3e%3c/linearGradient%3e%3cpath%20d='M52%2035l-4%201c-17%205-22%2021-13%2035%2010%2013%2031%2020%2048%2015l62-21S92%2026%2052%2035z'%20opacity='.3'%20fill='url(%23b)'/%3e%3clinearGradient%20id='c'%20gradientUnits='userSpaceOnUse'%20x1='18.4'%20y1='64.2'%20x2='144.3'%20y2='149.8'%3e%3cstop%20offset='0'%20stop-color='%23315aa9'/%3e%3cstop%20offset='.5'%20stop-color='%23518ac8'/%3e%3cstop%20offset='1'%20stop-color='%23315aa9'/%3e%3c/linearGradient%3e%3cpath%20d='M134%2080a45%2045%200%2000-48-15L24%2085%204%20120l112%2019%2020-36c4-7%203-15-2-23z'%20fill='url(%23c)'/%3e%3clinearGradient%20id='d'%20gradientUnits='userSpaceOnUse'%20x1='75.2'%20y1='74.5'%20x2='24.4'%20y2='260.8'%3e%3cstop%20offset='0'%20stop-color='%234377bb'/%3e%3cstop%20offset='.5'%20stop-color='%231a336b'/%3e%3cstop%20offset='1'%20stop-color='%231a336b'/%3e%3c/linearGradient%3e%3cpath%20d='M114%20115a45%2045%200%2000-48-15L4%20120s53%2040%2094%2030l3-1c17-5%2023-21%2013-34z'%20fill='url(%23d)'/%3e%3c/svg%3e";var Gt=C("<nav class=nav><ul class=nav__list><li class=nav__list-item><a href=/software>ПО</a></li><li class=nav__list-item><a href=/technical-means>Технические средства</a></li><li class=nav__list-item><a href=/request>Заявки</a></li><li class=nav__list-item><a href=/building>Помещение</a></li><li class=nav__list-item><a href=/employees>Сотрудники</a></li><li class=nav__list-item><a href=/disciplines>Назначения");function Kt(){const e=xt(),t=n=>e.pathname===n;return(()=>{var n=Gt(),s=n.firstChild,r=s.firstChild,o=r.firstChild,l=r.nextSibling,i=l.firstChild,c=l.nextSibling,a=c.firstChild,u=c.nextSibling,d=u.firstChild,p=u.nextSibling,g=p.firstChild,E=p.nextSibling,h=E.firstChild;return M(f=>{var w=`nav__link link ${t("/software")?"link_active":""}`,y=`nav__link link ${t("/technical-means")?"link_active":""}`,R=`nav__link link ${t("/request")?"link_active":""}`,$=`nav__link link ${t("/building")?"link_active":""}`,L=`nav__link link ${t("/employees")?"link_active":""}`,k=`nav__link link ${t("/disciplines")?"link_active":""}`;return w!==f.e&&j(o,f.e=w),y!==f.t&&j(i,f.t=y),R!==f.a&&j(a,f.a=R),$!==f.o&&j(d,f.o=$),L!==f.i&&j(g,f.i=L),k!==f.n&&j(h,f.n=k),f},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),n})()}var Wt=C('<header class=header><a class="header__link link"href=/><img alt=Логотип class=header__logo>');function Ht(){return(()=>{var e=Wt(),t=e.firstChild,n=t.firstChild;return ft(n,"src",Mt),Q(e,S(Kt,{}),null),e})()}var Vt=C("<div class=page><main class=main>");function zt(e){return(()=>{var t=Vt(),n=t.firstChild;return Q(t,S(Ht,{}),n),Q(n,()=>e.children),t})()}var Xt=C('<section class=building><h1 class="building__title title">Помещение');function Jt(){return Xt()}var Qt=C('<section class=home><h1 class="home__title title">Домашняя страница');function Yt(){return Qt()}var Zt=C('<section class=disciplines><h1 class="disciplines__title title">Назначения');function en(){return Zt()}var tn=C('<section class=employees><h1 class="employees__title title">Сотрудники');function nn(){return tn()}var rn=C('<section class=request><h1 class="request__title title">Заявки');function sn(){return rn()}var on=C('<section class=software><h1 class="software__title title">Программное обеспечение');function ln(){return on()}var an=C('<section class=technical-means><h1 class="technical-means__title title">Технические средства');function cn(){return an()}var un=C('<section class=not-found><h1 class="not-found__title title">Страница не найдена</h1><h2 class="not-found__subtitle title">404');function fn(){return un()}document.getElementById("root");ct(()=>S(It,{root:zt,get base(){return"/summer-practise-2024/"},get children(){return[S(U,{path:"/",component:Yt}),S(U,{path:"/building",component:Jt}),S(U,{path:"/disciplines",component:en}),S(U,{path:"/employees",component:nn}),S(U,{path:"/request",component:sn}),S(U,{path:"/software",component:ln}),S(U,{path:"/technical-means",component:cn}),S(U,{path:"/*",component:fn})]}}),document.getElementById("root"));
