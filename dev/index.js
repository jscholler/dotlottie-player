(function (exports) {
	'use strict';

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const t$1=window,e$4=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$5=new WeakMap;let o$4 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$5.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$4("string"==typeof t?t:t+"",void 0,s$3),i$5=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$4(n,t,s$3)},S$1=(s,n)=>{e$4?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */var s$2;const e$3=window,r$1=e$3.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$3=e$3.reactiveElementPolyfillSupport,n$4={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$4,reflect:!1,hasChanged:a$1},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$4).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$4;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$3||o$3({ReactiveElement:u$1}),(null!==(s$2=e$3.reactiveElementVersions)&&void 0!==s$2?s$2:e$3.reactiveElementVersions=[]).push("1.6.2");

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	var t;const i$4=window,s$1=i$4.trustedTypes,e$2=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$2="$lit$",n$3=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$3,h=`<${l$1}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x$1=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$2?e$2.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$2+s.slice(v)+n$3+w):s+n$3+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$2)||i.startsWith(n$3)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$2).split(n$3),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$3),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$3,t+1));)v.push({type:7,index:r}),t+=n$3.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$4.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t=i$4.litHtmlVersions)&&void 0!==t?t:i$4.litHtmlVersions=[]).push("2.7.5");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */var l,o$1;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o$1=globalThis.litElementVersions)&&void 0!==o$1?o$1:globalThis.litElementVersions=[]).push("3.3.2");

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const e$1=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const i$3=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$1(n){return (t,o)=>void 0!==o?e(n,t,o):i$3(n,t)}

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const o=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */function i$2(i,n){return o({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

	/**
	 * @license
	 * Copyright 2021 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var lottie = {exports: {}};

	(function (module, exports) {
		(typeof navigator !== "undefined") && (function (global, factory) {
		  module.exports = factory() ;
		})(commonjsGlobal, (function () {
		  var svgNS = 'http://www.w3.org/2000/svg';
		  var locationHref = '';
		  var _useWebWorker = false;
		  var initialDefaultFrame = -999999;

		  var setWebWorker = function setWebWorker(flag) {
		    _useWebWorker = !!flag;
		  };

		  var getWebWorker = function getWebWorker() {
		    return _useWebWorker;
		  };

		  var setLocationHref = function setLocationHref(value) {
		    locationHref = value;
		  };

		  var getLocationHref = function getLocationHref() {
		    return locationHref;
		  };

		  function createTag(type) {
		    // return {appendChild:function(){},setAttribute:function(){},style:{}}
		    return document.createElement(type);
		  }

		  function extendPrototype(sources, destination) {
		    var i;
		    var len = sources.length;
		    var sourcePrototype;

		    for (i = 0; i < len; i += 1) {
		      sourcePrototype = sources[i].prototype;

		      for (var attr in sourcePrototype) {
		        if (Object.prototype.hasOwnProperty.call(sourcePrototype, attr)) destination.prototype[attr] = sourcePrototype[attr];
		      }
		    }
		  }

		  function getDescriptor(object, prop) {
		    return Object.getOwnPropertyDescriptor(object, prop);
		  }

		  function createProxyFunction(prototype) {
		    function ProxyFunction() {}

		    ProxyFunction.prototype = prototype;
		    return ProxyFunction;
		  }

		  // import Howl from '../../3rd_party/howler';
		  var audioControllerFactory = function () {
		    function AudioController(audioFactory) {
		      this.audios = [];
		      this.audioFactory = audioFactory;
		      this._volume = 1;
		      this._isMuted = false;
		    }

		    AudioController.prototype = {
		      addAudio: function addAudio(audio) {
		        this.audios.push(audio);
		      },
		      pause: function pause() {
		        var i;
		        var len = this.audios.length;

		        for (i = 0; i < len; i += 1) {
		          this.audios[i].pause();
		        }
		      },
		      resume: function resume() {
		        var i;
		        var len = this.audios.length;

		        for (i = 0; i < len; i += 1) {
		          this.audios[i].resume();
		        }
		      },
		      setRate: function setRate(rateValue) {
		        var i;
		        var len = this.audios.length;

		        for (i = 0; i < len; i += 1) {
		          this.audios[i].setRate(rateValue);
		        }
		      },
		      createAudio: function createAudio(assetPath) {
		        if (this.audioFactory) {
		          return this.audioFactory(assetPath);
		        }

		        if (window.Howl) {
		          return new window.Howl({
		            src: [assetPath]
		          });
		        }

		        return {
		          isPlaying: false,
		          play: function play() {
		            this.isPlaying = true;
		          },
		          seek: function seek() {
		            this.isPlaying = false;
		          },
		          playing: function playing() {},
		          rate: function rate() {},
		          setVolume: function setVolume() {}
		        };
		      },
		      setAudioFactory: function setAudioFactory(audioFactory) {
		        this.audioFactory = audioFactory;
		      },
		      setVolume: function setVolume(value) {
		        this._volume = value;

		        this._updateVolume();
		      },
		      mute: function mute() {
		        this._isMuted = true;

		        this._updateVolume();
		      },
		      unmute: function unmute() {
		        this._isMuted = false;

		        this._updateVolume();
		      },
		      getVolume: function getVolume() {
		        return this._volume;
		      },
		      _updateVolume: function _updateVolume() {
		        var i;
		        var len = this.audios.length;

		        for (i = 0; i < len; i += 1) {
		          this.audios[i].volume(this._volume * (this._isMuted ? 0 : 1));
		        }
		      }
		    };
		    return function () {
		      return new AudioController();
		    };
		  }();

		  var createTypedArray = function () {
		    function createRegularArray(type, len) {
		      var i = 0;
		      var arr = [];
		      var value;

		      switch (type) {
		        case 'int16':
		        case 'uint8c':
		          value = 1;
		          break;

		        default:
		          value = 1.1;
		          break;
		      }

		      for (i = 0; i < len; i += 1) {
		        arr.push(value);
		      }

		      return arr;
		    }

		    function createTypedArrayFactory(type, len) {
		      if (type === 'float32') {
		        return new Float32Array(len);
		      }

		      if (type === 'int16') {
		        return new Int16Array(len);
		      }

		      if (type === 'uint8c') {
		        return new Uint8ClampedArray(len);
		      }

		      return createRegularArray(type, len);
		    }

		    if (typeof Uint8ClampedArray === 'function' && typeof Float32Array === 'function') {
		      return createTypedArrayFactory;
		    }

		    return createRegularArray;
		  }();

		  function createSizedArray(len) {
		    return Array.apply(null, {
		      length: len
		    });
		  }

		  function _typeof$6(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$6 = function _typeof(obj) { return typeof obj; }; } else { _typeof$6 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$6(obj); }
		  var subframeEnabled = true;
		  var expressionsPlugin = null;
		  var expressionsInterfaces = null;
		  var idPrefix$1 = '';
		  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
		  var bmPow = Math.pow;
		  var bmSqrt = Math.sqrt;
		  var bmFloor = Math.floor;
		  var bmMax = Math.max;
		  var bmMin = Math.min;
		  var BMMath = {};

		  (function () {
		    var propertyNames = ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'atan2', 'ceil', 'cbrt', 'expm1', 'clz32', 'cos', 'cosh', 'exp', 'floor', 'fround', 'hypot', 'imul', 'log', 'log1p', 'log2', 'log10', 'max', 'min', 'pow', 'random', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc', 'E', 'LN10', 'LN2', 'LOG10E', 'LOG2E', 'PI', 'SQRT1_2', 'SQRT2'];
		    var i;
		    var len = propertyNames.length;

		    for (i = 0; i < len; i += 1) {
		      BMMath[propertyNames[i]] = Math[propertyNames[i]];
		    }
		  })();

		  BMMath.random = Math.random;

		  BMMath.abs = function (val) {
		    var tOfVal = _typeof$6(val);

		    if (tOfVal === 'object' && val.length) {
		      var absArr = createSizedArray(val.length);
		      var i;
		      var len = val.length;

		      for (i = 0; i < len; i += 1) {
		        absArr[i] = Math.abs(val[i]);
		      }

		      return absArr;
		    }

		    return Math.abs(val);
		  };

		  var defaultCurveSegments = 150;
		  var degToRads = Math.PI / 180;
		  var roundCorner = 0.5519;

		  function styleDiv(element) {
		    element.style.position = 'absolute';
		    element.style.top = 0;
		    element.style.left = 0;
		    element.style.display = 'block';
		    element.style.transformOrigin = '0 0';
		    element.style.webkitTransformOrigin = '0 0';
		    element.style.backfaceVisibility = 'visible';
		    element.style.webkitBackfaceVisibility = 'visible';
		    element.style.transformStyle = 'preserve-3d';
		    element.style.webkitTransformStyle = 'preserve-3d';
		    element.style.mozTransformStyle = 'preserve-3d';
		  }

		  function BMEnterFrameEvent(type, currentTime, totalTime, frameMultiplier) {
		    this.type = type;
		    this.currentTime = currentTime;
		    this.totalTime = totalTime;
		    this.direction = frameMultiplier < 0 ? -1 : 1;
		  }

		  function BMCompleteEvent(type, frameMultiplier) {
		    this.type = type;
		    this.direction = frameMultiplier < 0 ? -1 : 1;
		  }

		  function BMCompleteLoopEvent(type, totalLoops, currentLoop, frameMultiplier) {
		    this.type = type;
		    this.currentLoop = currentLoop;
		    this.totalLoops = totalLoops;
		    this.direction = frameMultiplier < 0 ? -1 : 1;
		  }

		  function BMSegmentStartEvent(type, firstFrame, totalFrames) {
		    this.type = type;
		    this.firstFrame = firstFrame;
		    this.totalFrames = totalFrames;
		  }

		  function BMDestroyEvent(type, target) {
		    this.type = type;
		    this.target = target;
		  }

		  function BMRenderFrameErrorEvent(nativeError, currentTime) {
		    this.type = 'renderFrameError';
		    this.nativeError = nativeError;
		    this.currentTime = currentTime;
		  }

		  function BMConfigErrorEvent(nativeError) {
		    this.type = 'configError';
		    this.nativeError = nativeError;
		  }

		  var createElementID = function () {
		    var _count = 0;
		    return function createID() {
		      _count += 1;
		      return idPrefix$1 + '__lottie_element_' + _count;
		    };
		  }();

		  function HSVtoRGB(h, s, v) {
		    var r;
		    var g;
		    var b;
		    var i;
		    var f;
		    var p;
		    var q;
		    var t;
		    i = Math.floor(h * 6);
		    f = h * 6 - i;
		    p = v * (1 - s);
		    q = v * (1 - f * s);
		    t = v * (1 - (1 - f) * s);

		    switch (i % 6) {
		      case 0:
		        r = v;
		        g = t;
		        b = p;
		        break;

		      case 1:
		        r = q;
		        g = v;
		        b = p;
		        break;

		      case 2:
		        r = p;
		        g = v;
		        b = t;
		        break;

		      case 3:
		        r = p;
		        g = q;
		        b = v;
		        break;

		      case 4:
		        r = t;
		        g = p;
		        b = v;
		        break;

		      case 5:
		        r = v;
		        g = p;
		        b = q;
		        break;
		    }

		    return [r, g, b];
		  }

		  function RGBtoHSV(r, g, b) {
		    var max = Math.max(r, g, b);
		    var min = Math.min(r, g, b);
		    var d = max - min;
		    var h;
		    var s = max === 0 ? 0 : d / max;
		    var v = max / 255;

		    switch (max) {
		      case min:
		        h = 0;
		        break;

		      case r:
		        h = g - b + d * (g < b ? 6 : 0);
		        h /= 6 * d;
		        break;

		      case g:
		        h = b - r + d * 2;
		        h /= 6 * d;
		        break;

		      case b:
		        h = r - g + d * 4;
		        h /= 6 * d;
		        break;
		    }

		    return [h, s, v];
		  }

		  function addSaturationToRGB(color, offset) {
		    var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
		    hsv[1] += offset;

		    if (hsv[1] > 1) {
		      hsv[1] = 1;
		    } else if (hsv[1] <= 0) {
		      hsv[1] = 0;
		    }

		    return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
		  }

		  function addBrightnessToRGB(color, offset) {
		    var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
		    hsv[2] += offset;

		    if (hsv[2] > 1) {
		      hsv[2] = 1;
		    } else if (hsv[2] < 0) {
		      hsv[2] = 0;
		    }

		    return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
		  }

		  function addHueToRGB(color, offset) {
		    var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
		    hsv[0] += offset / 360;

		    if (hsv[0] > 1) {
		      hsv[0] -= 1;
		    } else if (hsv[0] < 0) {
		      hsv[0] += 1;
		    }

		    return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
		  }

		  var rgbToHex = function () {
		    var colorMap = [];
		    var i;
		    var hex;

		    for (i = 0; i < 256; i += 1) {
		      hex = i.toString(16);
		      colorMap[i] = hex.length === 1 ? '0' + hex : hex;
		    }

		    return function (r, g, b) {
		      if (r < 0) {
		        r = 0;
		      }

		      if (g < 0) {
		        g = 0;
		      }

		      if (b < 0) {
		        b = 0;
		      }

		      return '#' + colorMap[r] + colorMap[g] + colorMap[b];
		    };
		  }();

		  var setSubframeEnabled = function setSubframeEnabled(flag) {
		    subframeEnabled = !!flag;
		  };

		  var getSubframeEnabled = function getSubframeEnabled() {
		    return subframeEnabled;
		  };

		  var setExpressionsPlugin = function setExpressionsPlugin(value) {
		    expressionsPlugin = value;
		  };

		  var getExpressionsPlugin = function getExpressionsPlugin() {
		    return expressionsPlugin;
		  };

		  var setExpressionInterfaces = function setExpressionInterfaces(value) {
		    expressionsInterfaces = value;
		  };

		  var getExpressionInterfaces = function getExpressionInterfaces() {
		    return expressionsInterfaces;
		  };

		  var setDefaultCurveSegments = function setDefaultCurveSegments(value) {
		    defaultCurveSegments = value;
		  };

		  var getDefaultCurveSegments = function getDefaultCurveSegments() {
		    return defaultCurveSegments;
		  };

		  var setIdPrefix = function setIdPrefix(value) {
		    idPrefix$1 = value;
		  };

		  function createNS(type) {
		    // return {appendChild:function(){},setAttribute:function(){},style:{}}
		    return document.createElementNS(svgNS, type);
		  }

		  function _typeof$5(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$5 = function _typeof(obj) { return typeof obj; }; } else { _typeof$5 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$5(obj); }

		  var dataManager = function () {
		    var _counterId = 1;
		    var processes = [];
		    var workerFn;
		    var workerInstance;
		    var workerProxy = {
		      onmessage: function onmessage() {},
		      postMessage: function postMessage(path) {
		        workerFn({
		          data: path
		        });
		      }
		    };
		    var _workerSelf = {
		      postMessage: function postMessage(data) {
		        workerProxy.onmessage({
		          data: data
		        });
		      }
		    };

		    function createWorker(fn) {
		      if (window.Worker && window.Blob && getWebWorker()) {
		        var blob = new Blob(['var _workerSelf = self; self.onmessage = ', fn.toString()], {
		          type: 'text/javascript'
		        }); // var blob = new Blob(['self.onmessage = ', fn.toString()], { type: 'text/javascript' });

		        var url = URL.createObjectURL(blob);
		        return new Worker(url);
		      }

		      workerFn = fn;
		      return workerProxy;
		    }

		    function setupWorker() {
		      if (!workerInstance) {
		        workerInstance = createWorker(function workerStart(e) {
		          function dataFunctionManager() {
		            function completeLayers(layers, comps) {
		              var layerData;
		              var i;
		              var len = layers.length;
		              var j;
		              var jLen;
		              var k;
		              var kLen;

		              for (i = 0; i < len; i += 1) {
		                layerData = layers[i];

		                if ('ks' in layerData && !layerData.completed) {
		                  layerData.completed = true;

		                  if (layerData.hasMask) {
		                    var maskProps = layerData.masksProperties;
		                    jLen = maskProps.length;

		                    for (j = 0; j < jLen; j += 1) {
		                      if (maskProps[j].pt.k.i) {
		                        convertPathsToAbsoluteValues(maskProps[j].pt.k);
		                      } else {
		                        kLen = maskProps[j].pt.k.length;

		                        for (k = 0; k < kLen; k += 1) {
		                          if (maskProps[j].pt.k[k].s) {
		                            convertPathsToAbsoluteValues(maskProps[j].pt.k[k].s[0]);
		                          }

		                          if (maskProps[j].pt.k[k].e) {
		                            convertPathsToAbsoluteValues(maskProps[j].pt.k[k].e[0]);
		                          }
		                        }
		                      }
		                    }
		                  }

		                  if (layerData.ty === 0) {
		                    layerData.layers = findCompLayers(layerData.refId, comps);
		                    completeLayers(layerData.layers, comps);
		                  } else if (layerData.ty === 4) {
		                    completeShapes(layerData.shapes);
		                  } else if (layerData.ty === 5) {
		                    completeText(layerData);
		                  }
		                }
		              }
		            }

		            function completeChars(chars, assets) {
		              if (chars) {
		                var i = 0;
		                var len = chars.length;

		                for (i = 0; i < len; i += 1) {
		                  if (chars[i].t === 1) {
		                    // var compData = findComp(chars[i].data.refId, assets);
		                    chars[i].data.layers = findCompLayers(chars[i].data.refId, assets); // chars[i].data.ip = 0;
		                    // chars[i].data.op = 99999;
		                    // chars[i].data.st = 0;
		                    // chars[i].data.sr = 1;
		                    // chars[i].w = compData.w;
		                    // chars[i].data.ks = {
		                    //   a: { k: [0, 0, 0], a: 0 },
		                    //   p: { k: [0, -compData.h, 0], a: 0 },
		                    //   r: { k: 0, a: 0 },
		                    //   s: { k: [100, 100], a: 0 },
		                    //   o: { k: 100, a: 0 },
		                    // };

		                    completeLayers(chars[i].data.layers, assets);
		                  }
		                }
		              }
		            }

		            function findComp(id, comps) {
		              var i = 0;
		              var len = comps.length;

		              while (i < len) {
		                if (comps[i].id === id) {
		                  return comps[i];
		                }

		                i += 1;
		              }

		              return null;
		            }

		            function findCompLayers(id, comps) {
		              var comp = findComp(id, comps);

		              if (comp) {
		                if (!comp.layers.__used) {
		                  comp.layers.__used = true;
		                  return comp.layers;
		                }

		                return JSON.parse(JSON.stringify(comp.layers));
		              }

		              return null;
		            }

		            function completeShapes(arr) {
		              var i;
		              var len = arr.length;
		              var j;
		              var jLen;

		              for (i = len - 1; i >= 0; i -= 1) {
		                if (arr[i].ty === 'sh') {
		                  if (arr[i].ks.k.i) {
		                    convertPathsToAbsoluteValues(arr[i].ks.k);
		                  } else {
		                    jLen = arr[i].ks.k.length;

		                    for (j = 0; j < jLen; j += 1) {
		                      if (arr[i].ks.k[j].s) {
		                        convertPathsToAbsoluteValues(arr[i].ks.k[j].s[0]);
		                      }

		                      if (arr[i].ks.k[j].e) {
		                        convertPathsToAbsoluteValues(arr[i].ks.k[j].e[0]);
		                      }
		                    }
		                  }
		                } else if (arr[i].ty === 'gr') {
		                  completeShapes(arr[i].it);
		                }
		              }
		            }

		            function convertPathsToAbsoluteValues(path) {
		              var i;
		              var len = path.i.length;

		              for (i = 0; i < len; i += 1) {
		                path.i[i][0] += path.v[i][0];
		                path.i[i][1] += path.v[i][1];
		                path.o[i][0] += path.v[i][0];
		                path.o[i][1] += path.v[i][1];
		              }
		            }

		            function checkVersion(minimum, animVersionString) {
		              var animVersion = animVersionString ? animVersionString.split('.') : [100, 100, 100];

		              if (minimum[0] > animVersion[0]) {
		                return true;
		              }

		              if (animVersion[0] > minimum[0]) {
		                return false;
		              }

		              if (minimum[1] > animVersion[1]) {
		                return true;
		              }

		              if (animVersion[1] > minimum[1]) {
		                return false;
		              }

		              if (minimum[2] > animVersion[2]) {
		                return true;
		              }

		              if (animVersion[2] > minimum[2]) {
		                return false;
		              }

		              return null;
		            }

		            var checkText = function () {
		              var minimumVersion = [4, 4, 14];

		              function updateTextLayer(textLayer) {
		                var documentData = textLayer.t.d;
		                textLayer.t.d = {
		                  k: [{
		                    s: documentData,
		                    t: 0
		                  }]
		                };
		              }

		              function iterateLayers(layers) {
		                var i;
		                var len = layers.length;

		                for (i = 0; i < len; i += 1) {
		                  if (layers[i].ty === 5) {
		                    updateTextLayer(layers[i]);
		                  }
		                }
		              }

		              return function (animationData) {
		                if (checkVersion(minimumVersion, animationData.v)) {
		                  iterateLayers(animationData.layers);

		                  if (animationData.assets) {
		                    var i;
		                    var len = animationData.assets.length;

		                    for (i = 0; i < len; i += 1) {
		                      if (animationData.assets[i].layers) {
		                        iterateLayers(animationData.assets[i].layers);
		                      }
		                    }
		                  }
		                }
		              };
		            }();

		            var checkChars = function () {
		              var minimumVersion = [4, 7, 99];
		              return function (animationData) {
		                if (animationData.chars && !checkVersion(minimumVersion, animationData.v)) {
		                  var i;
		                  var len = animationData.chars.length;

		                  for (i = 0; i < len; i += 1) {
		                    var charData = animationData.chars[i];

		                    if (charData.data && charData.data.shapes) {
		                      completeShapes(charData.data.shapes);
		                      charData.data.ip = 0;
		                      charData.data.op = 99999;
		                      charData.data.st = 0;
		                      charData.data.sr = 1;
		                      charData.data.ks = {
		                        p: {
		                          k: [0, 0],
		                          a: 0
		                        },
		                        s: {
		                          k: [100, 100],
		                          a: 0
		                        },
		                        a: {
		                          k: [0, 0],
		                          a: 0
		                        },
		                        r: {
		                          k: 0,
		                          a: 0
		                        },
		                        o: {
		                          k: 100,
		                          a: 0
		                        }
		                      };

		                      if (!animationData.chars[i].t) {
		                        charData.data.shapes.push({
		                          ty: 'no'
		                        });
		                        charData.data.shapes[0].it.push({
		                          p: {
		                            k: [0, 0],
		                            a: 0
		                          },
		                          s: {
		                            k: [100, 100],
		                            a: 0
		                          },
		                          a: {
		                            k: [0, 0],
		                            a: 0
		                          },
		                          r: {
		                            k: 0,
		                            a: 0
		                          },
		                          o: {
		                            k: 100,
		                            a: 0
		                          },
		                          sk: {
		                            k: 0,
		                            a: 0
		                          },
		                          sa: {
		                            k: 0,
		                            a: 0
		                          },
		                          ty: 'tr'
		                        });
		                      }
		                    }
		                  }
		                }
		              };
		            }();

		            var checkPathProperties = function () {
		              var minimumVersion = [5, 7, 15];

		              function updateTextLayer(textLayer) {
		                var pathData = textLayer.t.p;

		                if (typeof pathData.a === 'number') {
		                  pathData.a = {
		                    a: 0,
		                    k: pathData.a
		                  };
		                }

		                if (typeof pathData.p === 'number') {
		                  pathData.p = {
		                    a: 0,
		                    k: pathData.p
		                  };
		                }

		                if (typeof pathData.r === 'number') {
		                  pathData.r = {
		                    a: 0,
		                    k: pathData.r
		                  };
		                }
		              }

		              function iterateLayers(layers) {
		                var i;
		                var len = layers.length;

		                for (i = 0; i < len; i += 1) {
		                  if (layers[i].ty === 5) {
		                    updateTextLayer(layers[i]);
		                  }
		                }
		              }

		              return function (animationData) {
		                if (checkVersion(minimumVersion, animationData.v)) {
		                  iterateLayers(animationData.layers);

		                  if (animationData.assets) {
		                    var i;
		                    var len = animationData.assets.length;

		                    for (i = 0; i < len; i += 1) {
		                      if (animationData.assets[i].layers) {
		                        iterateLayers(animationData.assets[i].layers);
		                      }
		                    }
		                  }
		                }
		              };
		            }();

		            var checkColors = function () {
		              var minimumVersion = [4, 1, 9];

		              function iterateShapes(shapes) {
		                var i;
		                var len = shapes.length;
		                var j;
		                var jLen;

		                for (i = 0; i < len; i += 1) {
		                  if (shapes[i].ty === 'gr') {
		                    iterateShapes(shapes[i].it);
		                  } else if (shapes[i].ty === 'fl' || shapes[i].ty === 'st') {
		                    if (shapes[i].c.k && shapes[i].c.k[0].i) {
		                      jLen = shapes[i].c.k.length;

		                      for (j = 0; j < jLen; j += 1) {
		                        if (shapes[i].c.k[j].s) {
		                          shapes[i].c.k[j].s[0] /= 255;
		                          shapes[i].c.k[j].s[1] /= 255;
		                          shapes[i].c.k[j].s[2] /= 255;
		                          shapes[i].c.k[j].s[3] /= 255;
		                        }

		                        if (shapes[i].c.k[j].e) {
		                          shapes[i].c.k[j].e[0] /= 255;
		                          shapes[i].c.k[j].e[1] /= 255;
		                          shapes[i].c.k[j].e[2] /= 255;
		                          shapes[i].c.k[j].e[3] /= 255;
		                        }
		                      }
		                    } else {
		                      shapes[i].c.k[0] /= 255;
		                      shapes[i].c.k[1] /= 255;
		                      shapes[i].c.k[2] /= 255;
		                      shapes[i].c.k[3] /= 255;
		                    }
		                  }
		                }
		              }

		              function iterateLayers(layers) {
		                var i;
		                var len = layers.length;

		                for (i = 0; i < len; i += 1) {
		                  if (layers[i].ty === 4) {
		                    iterateShapes(layers[i].shapes);
		                  }
		                }
		              }

		              return function (animationData) {
		                if (checkVersion(minimumVersion, animationData.v)) {
		                  iterateLayers(animationData.layers);

		                  if (animationData.assets) {
		                    var i;
		                    var len = animationData.assets.length;

		                    for (i = 0; i < len; i += 1) {
		                      if (animationData.assets[i].layers) {
		                        iterateLayers(animationData.assets[i].layers);
		                      }
		                    }
		                  }
		                }
		              };
		            }();

		            var checkShapes = function () {
		              var minimumVersion = [4, 4, 18];

		              function completeClosingShapes(arr) {
		                var i;
		                var len = arr.length;
		                var j;
		                var jLen;

		                for (i = len - 1; i >= 0; i -= 1) {
		                  if (arr[i].ty === 'sh') {
		                    if (arr[i].ks.k.i) {
		                      arr[i].ks.k.c = arr[i].closed;
		                    } else {
		                      jLen = arr[i].ks.k.length;

		                      for (j = 0; j < jLen; j += 1) {
		                        if (arr[i].ks.k[j].s) {
		                          arr[i].ks.k[j].s[0].c = arr[i].closed;
		                        }

		                        if (arr[i].ks.k[j].e) {
		                          arr[i].ks.k[j].e[0].c = arr[i].closed;
		                        }
		                      }
		                    }
		                  } else if (arr[i].ty === 'gr') {
		                    completeClosingShapes(arr[i].it);
		                  }
		                }
		              }

		              function iterateLayers(layers) {
		                var layerData;
		                var i;
		                var len = layers.length;
		                var j;
		                var jLen;
		                var k;
		                var kLen;

		                for (i = 0; i < len; i += 1) {
		                  layerData = layers[i];

		                  if (layerData.hasMask) {
		                    var maskProps = layerData.masksProperties;
		                    jLen = maskProps.length;

		                    for (j = 0; j < jLen; j += 1) {
		                      if (maskProps[j].pt.k.i) {
		                        maskProps[j].pt.k.c = maskProps[j].cl;
		                      } else {
		                        kLen = maskProps[j].pt.k.length;

		                        for (k = 0; k < kLen; k += 1) {
		                          if (maskProps[j].pt.k[k].s) {
		                            maskProps[j].pt.k[k].s[0].c = maskProps[j].cl;
		                          }

		                          if (maskProps[j].pt.k[k].e) {
		                            maskProps[j].pt.k[k].e[0].c = maskProps[j].cl;
		                          }
		                        }
		                      }
		                    }
		                  }

		                  if (layerData.ty === 4) {
		                    completeClosingShapes(layerData.shapes);
		                  }
		                }
		              }

		              return function (animationData) {
		                if (checkVersion(minimumVersion, animationData.v)) {
		                  iterateLayers(animationData.layers);

		                  if (animationData.assets) {
		                    var i;
		                    var len = animationData.assets.length;

		                    for (i = 0; i < len; i += 1) {
		                      if (animationData.assets[i].layers) {
		                        iterateLayers(animationData.assets[i].layers);
		                      }
		                    }
		                  }
		                }
		              };
		            }();

		            function completeData(animationData) {
		              if (animationData.__complete) {
		                return;
		              }

		              checkColors(animationData);
		              checkText(animationData);
		              checkChars(animationData);
		              checkPathProperties(animationData);
		              checkShapes(animationData);
		              completeLayers(animationData.layers, animationData.assets);
		              completeChars(animationData.chars, animationData.assets);
		              animationData.__complete = true;
		            }

		            function completeText(data) {
		              if (data.t.a.length === 0 && !('m' in data.t.p)) ;
		            }

		            var moduleOb = {};
		            moduleOb.completeData = completeData;
		            moduleOb.checkColors = checkColors;
		            moduleOb.checkChars = checkChars;
		            moduleOb.checkPathProperties = checkPathProperties;
		            moduleOb.checkShapes = checkShapes;
		            moduleOb.completeLayers = completeLayers;
		            return moduleOb;
		          }

		          if (!_workerSelf.dataManager) {
		            _workerSelf.dataManager = dataFunctionManager();
		          }

		          if (!_workerSelf.assetLoader) {
		            _workerSelf.assetLoader = function () {
		              function formatResponse(xhr) {
		                // using typeof doubles the time of execution of this method,
		                // so if available, it's better to use the header to validate the type
		                var contentTypeHeader = xhr.getResponseHeader('content-type');

		                if (contentTypeHeader && xhr.responseType === 'json' && contentTypeHeader.indexOf('json') !== -1) {
		                  return xhr.response;
		                }

		                if (xhr.response && _typeof$5(xhr.response) === 'object') {
		                  return xhr.response;
		                }

		                if (xhr.response && typeof xhr.response === 'string') {
		                  return JSON.parse(xhr.response);
		                }

		                if (xhr.responseText) {
		                  return JSON.parse(xhr.responseText);
		                }

		                return null;
		              }

		              function loadAsset(path, fullPath, callback, errorCallback) {
		                var response;
		                var xhr = new XMLHttpRequest(); // set responseType after calling open or IE will break.

		                try {
		                  // This crashes on Android WebView prior to KitKat
		                  xhr.responseType = 'json';
		                } catch (err) {} // eslint-disable-line no-empty


		                xhr.onreadystatechange = function () {
		                  if (xhr.readyState === 4) {
		                    if (xhr.status === 200) {
		                      response = formatResponse(xhr);
		                      callback(response);
		                    } else {
		                      try {
		                        response = formatResponse(xhr);
		                        callback(response);
		                      } catch (err) {
		                        if (errorCallback) {
		                          errorCallback(err);
		                        }
		                      }
		                    }
		                  }
		                };

		                try {
		                  // Hack to workaround banner validation
		                  xhr.open(['G', 'E', 'T'].join(''), path, true);
		                } catch (error) {
		                  // Hack to workaround banner validation
		                  xhr.open(['G', 'E', 'T'].join(''), fullPath + '/' + path, true);
		                }

		                xhr.send();
		              }

		              return {
		                load: loadAsset
		              };
		            }();
		          }

		          if (e.data.type === 'loadAnimation') {
		            _workerSelf.assetLoader.load(e.data.path, e.data.fullPath, function (data) {
		              _workerSelf.dataManager.completeData(data);

		              _workerSelf.postMessage({
		                id: e.data.id,
		                payload: data,
		                status: 'success'
		              });
		            }, function () {
		              _workerSelf.postMessage({
		                id: e.data.id,
		                status: 'error'
		              });
		            });
		          } else if (e.data.type === 'complete') {
		            var animation = e.data.animation;

		            _workerSelf.dataManager.completeData(animation);

		            _workerSelf.postMessage({
		              id: e.data.id,
		              payload: animation,
		              status: 'success'
		            });
		          } else if (e.data.type === 'loadData') {
		            _workerSelf.assetLoader.load(e.data.path, e.data.fullPath, function (data) {
		              _workerSelf.postMessage({
		                id: e.data.id,
		                payload: data,
		                status: 'success'
		              });
		            }, function () {
		              _workerSelf.postMessage({
		                id: e.data.id,
		                status: 'error'
		              });
		            });
		          }
		        });

		        workerInstance.onmessage = function (event) {
		          var data = event.data;
		          var id = data.id;
		          var process = processes[id];
		          processes[id] = null;

		          if (data.status === 'success') {
		            process.onComplete(data.payload);
		          } else if (process.onError) {
		            process.onError();
		          }
		        };
		      }
		    }

		    function createProcess(onComplete, onError) {
		      _counterId += 1;
		      var id = 'processId_' + _counterId;
		      processes[id] = {
		        onComplete: onComplete,
		        onError: onError
		      };
		      return id;
		    }

		    function loadAnimation(path, onComplete, onError) {
		      setupWorker();
		      var processId = createProcess(onComplete, onError);
		      workerInstance.postMessage({
		        type: 'loadAnimation',
		        path: path,
		        fullPath: window.location.origin + window.location.pathname,
		        id: processId
		      });
		    }

		    function loadData(path, onComplete, onError) {
		      setupWorker();
		      var processId = createProcess(onComplete, onError);
		      workerInstance.postMessage({
		        type: 'loadData',
		        path: path,
		        fullPath: window.location.origin + window.location.pathname,
		        id: processId
		      });
		    }

		    function completeAnimation(anim, onComplete, onError) {
		      setupWorker();
		      var processId = createProcess(onComplete, onError);
		      workerInstance.postMessage({
		        type: 'complete',
		        animation: anim,
		        id: processId
		      });
		    }

		    return {
		      loadAnimation: loadAnimation,
		      loadData: loadData,
		      completeAnimation: completeAnimation
		    };
		  }();

		  var ImagePreloader = function () {
		    var proxyImage = function () {
		      var canvas = createTag('canvas');
		      canvas.width = 1;
		      canvas.height = 1;
		      var ctx = canvas.getContext('2d');
		      ctx.fillStyle = 'rgba(0,0,0,0)';
		      ctx.fillRect(0, 0, 1, 1);
		      return canvas;
		    }();

		    function imageLoaded() {
		      this.loadedAssets += 1;

		      if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
		        if (this.imagesLoadedCb) {
		          this.imagesLoadedCb(null);
		        }
		      }
		    }

		    function footageLoaded() {
		      this.loadedFootagesCount += 1;

		      if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
		        if (this.imagesLoadedCb) {
		          this.imagesLoadedCb(null);
		        }
		      }
		    }

		    function getAssetsPath(assetData, assetsPath, originalPath) {
		      var path = '';

		      if (assetData.e) {
		        path = assetData.p;
		      } else if (assetsPath) {
		        var imagePath = assetData.p;

		        if (imagePath.indexOf('images/') !== -1) {
		          imagePath = imagePath.split('/')[1];
		        }

		        path = assetsPath + imagePath;
		      } else {
		        path = originalPath;
		        path += assetData.u ? assetData.u : '';
		        path += assetData.p;
		      }

		      return path;
		    }

		    function testImageLoaded(img) {
		      var _count = 0;
		      var intervalId = setInterval(function () {
		        var box = img.getBBox();

		        if (box.width || _count > 500) {
		          this._imageLoaded();

		          clearInterval(intervalId);
		        }

		        _count += 1;
		      }.bind(this), 50);
		    }

		    function createImageData(assetData) {
		      var path = getAssetsPath(assetData, this.assetsPath, this.path);
		      var img = createNS('image');

		      if (isSafari) {
		        this.testImageLoaded(img);
		      } else {
		        img.addEventListener('load', this._imageLoaded, false);
		      }

		      img.addEventListener('error', function () {
		        ob.img = proxyImage;

		        this._imageLoaded();
		      }.bind(this), false);
		      img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path);

		      if (this._elementHelper.append) {
		        this._elementHelper.append(img);
		      } else {
		        this._elementHelper.appendChild(img);
		      }

		      var ob = {
		        img: img,
		        assetData: assetData
		      };
		      return ob;
		    }

		    function createImgData(assetData) {
		      var path = getAssetsPath(assetData, this.assetsPath, this.path);
		      var img = createTag('img');
		      img.crossOrigin = 'anonymous';
		      img.addEventListener('load', this._imageLoaded, false);
		      img.addEventListener('error', function () {
		        ob.img = proxyImage;

		        this._imageLoaded();
		      }.bind(this), false);
		      img.src = path;
		      var ob = {
		        img: img,
		        assetData: assetData
		      };
		      return ob;
		    }

		    function createFootageData(data) {
		      var ob = {
		        assetData: data
		      };
		      var path = getAssetsPath(data, this.assetsPath, this.path);
		      dataManager.loadData(path, function (footageData) {
		        ob.img = footageData;

		        this._footageLoaded();
		      }.bind(this), function () {
		        ob.img = {};

		        this._footageLoaded();
		      }.bind(this));
		      return ob;
		    }

		    function loadAssets(assets, cb) {
		      this.imagesLoadedCb = cb;
		      var i;
		      var len = assets.length;

		      for (i = 0; i < len; i += 1) {
		        if (!assets[i].layers) {
		          if (!assets[i].t || assets[i].t === 'seq') {
		            this.totalImages += 1;
		            this.images.push(this._createImageData(assets[i]));
		          } else if (assets[i].t === 3) {
		            this.totalFootages += 1;
		            this.images.push(this.createFootageData(assets[i]));
		          }
		        }
		      }
		    }

		    function setPath(path) {
		      this.path = path || '';
		    }

		    function setAssetsPath(path) {
		      this.assetsPath = path || '';
		    }

		    function getAsset(assetData) {
		      var i = 0;
		      var len = this.images.length;

		      while (i < len) {
		        if (this.images[i].assetData === assetData) {
		          return this.images[i].img;
		        }

		        i += 1;
		      }

		      return null;
		    }

		    function destroy() {
		      this.imagesLoadedCb = null;
		      this.images.length = 0;
		    }

		    function loadedImages() {
		      return this.totalImages === this.loadedAssets;
		    }

		    function loadedFootages() {
		      return this.totalFootages === this.loadedFootagesCount;
		    }

		    function setCacheType(type, elementHelper) {
		      if (type === 'svg') {
		        this._elementHelper = elementHelper;
		        this._createImageData = this.createImageData.bind(this);
		      } else {
		        this._createImageData = this.createImgData.bind(this);
		      }
		    }

		    function ImagePreloaderFactory() {
		      this._imageLoaded = imageLoaded.bind(this);
		      this._footageLoaded = footageLoaded.bind(this);
		      this.testImageLoaded = testImageLoaded.bind(this);
		      this.createFootageData = createFootageData.bind(this);
		      this.assetsPath = '';
		      this.path = '';
		      this.totalImages = 0;
		      this.totalFootages = 0;
		      this.loadedAssets = 0;
		      this.loadedFootagesCount = 0;
		      this.imagesLoadedCb = null;
		      this.images = [];
		    }

		    ImagePreloaderFactory.prototype = {
		      loadAssets: loadAssets,
		      setAssetsPath: setAssetsPath,
		      setPath: setPath,
		      loadedImages: loadedImages,
		      loadedFootages: loadedFootages,
		      destroy: destroy,
		      getAsset: getAsset,
		      createImgData: createImgData,
		      createImageData: createImageData,
		      imageLoaded: imageLoaded,
		      footageLoaded: footageLoaded,
		      setCacheType: setCacheType
		    };
		    return ImagePreloaderFactory;
		  }();

		  function BaseEvent() {}

		  BaseEvent.prototype = {
		    triggerEvent: function triggerEvent(eventName, args) {
		      if (this._cbs[eventName]) {
		        var callbacks = this._cbs[eventName];

		        for (var i = 0; i < callbacks.length; i += 1) {
		          callbacks[i](args);
		        }
		      }
		    },
		    addEventListener: function addEventListener(eventName, callback) {
		      if (!this._cbs[eventName]) {
		        this._cbs[eventName] = [];
		      }

		      this._cbs[eventName].push(callback);

		      return function () {
		        this.removeEventListener(eventName, callback);
		      }.bind(this);
		    },
		    removeEventListener: function removeEventListener(eventName, callback) {
		      if (!callback) {
		        this._cbs[eventName] = null;
		      } else if (this._cbs[eventName]) {
		        var i = 0;
		        var len = this._cbs[eventName].length;

		        while (i < len) {
		          if (this._cbs[eventName][i] === callback) {
		            this._cbs[eventName].splice(i, 1);

		            i -= 1;
		            len -= 1;
		          }

		          i += 1;
		        }

		        if (!this._cbs[eventName].length) {
		          this._cbs[eventName] = null;
		        }
		      }
		    }
		  };

		  var markerParser = function () {
		    function parsePayloadLines(payload) {
		      var lines = payload.split('\r\n');
		      var keys = {};
		      var line;
		      var keysCount = 0;

		      for (var i = 0; i < lines.length; i += 1) {
		        line = lines[i].split(':');

		        if (line.length === 2) {
		          keys[line[0]] = line[1].trim();
		          keysCount += 1;
		        }
		      }

		      if (keysCount === 0) {
		        throw new Error();
		      }

		      return keys;
		    }

		    return function (_markers) {
		      var markers = [];

		      for (var i = 0; i < _markers.length; i += 1) {
		        var _marker = _markers[i];
		        var markerData = {
		          time: _marker.tm,
		          duration: _marker.dr
		        };

		        try {
		          markerData.payload = JSON.parse(_markers[i].cm);
		        } catch (_) {
		          try {
		            markerData.payload = parsePayloadLines(_markers[i].cm);
		          } catch (__) {
		            markerData.payload = {
		              name: _markers[i].cm
		            };
		          }
		        }

		        markers.push(markerData);
		      }

		      return markers;
		    };
		  }();

		  var ProjectInterface = function () {
		    function registerComposition(comp) {
		      this.compositions.push(comp);
		    }

		    return function () {
		      function _thisProjectFunction(name) {
		        var i = 0;
		        var len = this.compositions.length;

		        while (i < len) {
		          if (this.compositions[i].data && this.compositions[i].data.nm === name) {
		            if (this.compositions[i].prepareFrame && this.compositions[i].data.xt) {
		              this.compositions[i].prepareFrame(this.currentFrame);
		            }

		            return this.compositions[i].compInterface;
		          }

		          i += 1;
		        }

		        return null;
		      }

		      _thisProjectFunction.compositions = [];
		      _thisProjectFunction.currentFrame = 0;
		      _thisProjectFunction.registerComposition = registerComposition;
		      return _thisProjectFunction;
		    };
		  }();

		  var renderers = {};

		  var registerRenderer = function registerRenderer(key, value) {
		    renderers[key] = value;
		  };

		  function getRenderer(key) {
		    return renderers[key];
		  }

		  function getRegisteredRenderer() {
		    // Returns canvas by default for compatibility
		    if (renderers.canvas) {
		      return 'canvas';
		    } // Returns any renderer that is registered


		    for (var key in renderers) {
		      if (renderers[key]) {
		        return key;
		      }
		    }

		    return '';
		  }

		  function _typeof$4(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

		  var AnimationItem = function AnimationItem() {
		    this._cbs = [];
		    this.name = '';
		    this.path = '';
		    this.isLoaded = false;
		    this.currentFrame = 0;
		    this.currentRawFrame = 0;
		    this.firstFrame = 0;
		    this.totalFrames = 0;
		    this.frameRate = 0;
		    this.frameMult = 0;
		    this.playSpeed = 1;
		    this.playDirection = 1;
		    this.playCount = 0;
		    this.animationData = {};
		    this.assets = [];
		    this.isPaused = true;
		    this.autoplay = false;
		    this.loop = true;
		    this.renderer = null;
		    this.animationID = createElementID();
		    this.assetsPath = '';
		    this.timeCompleted = 0;
		    this.segmentPos = 0;
		    this.isSubframeEnabled = getSubframeEnabled();
		    this.segments = [];
		    this._idle = true;
		    this._completedLoop = false;
		    this.projectInterface = ProjectInterface();
		    this.imagePreloader = new ImagePreloader();
		    this.audioController = audioControllerFactory();
		    this.markers = [];
		    this.configAnimation = this.configAnimation.bind(this);
		    this.onSetupError = this.onSetupError.bind(this);
		    this.onSegmentComplete = this.onSegmentComplete.bind(this);
		    this.drawnFrameEvent = new BMEnterFrameEvent('drawnFrame', 0, 0, 0);
		    this.expressionsPlugin = getExpressionsPlugin();
		  };

		  extendPrototype([BaseEvent], AnimationItem);

		  AnimationItem.prototype.setParams = function (params) {
		    if (params.wrapper || params.container) {
		      this.wrapper = params.wrapper || params.container;
		    }

		    var animType = 'svg';

		    if (params.animType) {
		      animType = params.animType;
		    } else if (params.renderer) {
		      animType = params.renderer;
		    }

		    var RendererClass = getRenderer(animType);
		    this.renderer = new RendererClass(this, params.rendererSettings);
		    this.imagePreloader.setCacheType(animType, this.renderer.globalData.defs);
		    this.renderer.setProjectInterface(this.projectInterface);
		    this.animType = animType;

		    if (params.loop === '' || params.loop === null || params.loop === undefined || params.loop === true) {
		      this.loop = true;
		    } else if (params.loop === false) {
		      this.loop = false;
		    } else {
		      this.loop = parseInt(params.loop, 10);
		    }

		    this.autoplay = 'autoplay' in params ? params.autoplay : true;
		    this.name = params.name ? params.name : '';
		    this.autoloadSegments = Object.prototype.hasOwnProperty.call(params, 'autoloadSegments') ? params.autoloadSegments : true;
		    this.assetsPath = params.assetsPath;
		    this.initialSegment = params.initialSegment;

		    if (params.audioFactory) {
		      this.audioController.setAudioFactory(params.audioFactory);
		    }

		    if (params.animationData) {
		      this.setupAnimation(params.animationData);
		    } else if (params.path) {
		      if (params.path.lastIndexOf('\\') !== -1) {
		        this.path = params.path.substr(0, params.path.lastIndexOf('\\') + 1);
		      } else {
		        this.path = params.path.substr(0, params.path.lastIndexOf('/') + 1);
		      }

		      this.fileName = params.path.substr(params.path.lastIndexOf('/') + 1);
		      this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf('.json'));
		      dataManager.loadAnimation(params.path, this.configAnimation, this.onSetupError);
		    }
		  };

		  AnimationItem.prototype.onSetupError = function () {
		    this.trigger('data_failed');
		  };

		  AnimationItem.prototype.setupAnimation = function (data) {
		    dataManager.completeAnimation(data, this.configAnimation);
		  };

		  AnimationItem.prototype.setData = function (wrapper, animationData) {
		    if (animationData) {
		      if (_typeof$4(animationData) !== 'object') {
		        animationData = JSON.parse(animationData);
		      }
		    }

		    var params = {
		      wrapper: wrapper,
		      animationData: animationData
		    };
		    var wrapperAttributes = wrapper.attributes;
		    params.path = wrapperAttributes.getNamedItem('data-animation-path') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-animation-path').value : wrapperAttributes.getNamedItem('data-bm-path') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-bm-path').value : wrapperAttributes.getNamedItem('bm-path') ? wrapperAttributes.getNamedItem('bm-path').value : '';
		    params.animType = wrapperAttributes.getNamedItem('data-anim-type') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-anim-type').value : wrapperAttributes.getNamedItem('data-bm-type') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-bm-type').value : wrapperAttributes.getNamedItem('bm-type') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('bm-type').value : wrapperAttributes.getNamedItem('data-bm-renderer') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-bm-renderer').value : wrapperAttributes.getNamedItem('bm-renderer') ? wrapperAttributes.getNamedItem('bm-renderer').value : getRegisteredRenderer() || 'canvas';
		    var loop = wrapperAttributes.getNamedItem('data-anim-loop') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-anim-loop').value : wrapperAttributes.getNamedItem('data-bm-loop') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-bm-loop').value : wrapperAttributes.getNamedItem('bm-loop') ? wrapperAttributes.getNamedItem('bm-loop').value : '';

		    if (loop === 'false') {
		      params.loop = false;
		    } else if (loop === 'true') {
		      params.loop = true;
		    } else if (loop !== '') {
		      params.loop = parseInt(loop, 10);
		    }

		    var autoplay = wrapperAttributes.getNamedItem('data-anim-autoplay') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-anim-autoplay').value : wrapperAttributes.getNamedItem('data-bm-autoplay') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-bm-autoplay').value : wrapperAttributes.getNamedItem('bm-autoplay') ? wrapperAttributes.getNamedItem('bm-autoplay').value : true;
		    params.autoplay = autoplay !== 'false';
		    params.name = wrapperAttributes.getNamedItem('data-name') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-name').value : wrapperAttributes.getNamedItem('data-bm-name') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-bm-name').value : wrapperAttributes.getNamedItem('bm-name') ? wrapperAttributes.getNamedItem('bm-name').value : '';
		    var prerender = wrapperAttributes.getNamedItem('data-anim-prerender') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-anim-prerender').value : wrapperAttributes.getNamedItem('data-bm-prerender') // eslint-disable-line no-nested-ternary
		    ? wrapperAttributes.getNamedItem('data-bm-prerender').value : wrapperAttributes.getNamedItem('bm-prerender') ? wrapperAttributes.getNamedItem('bm-prerender').value : '';

		    if (prerender === 'false') {
		      params.prerender = false;
		    }

		    if (!params.path) {
		      this.trigger('destroy');
		    } else {
		      this.setParams(params);
		    }
		  };

		  AnimationItem.prototype.includeLayers = function (data) {
		    if (data.op > this.animationData.op) {
		      this.animationData.op = data.op;
		      this.totalFrames = Math.floor(data.op - this.animationData.ip);
		    }

		    var layers = this.animationData.layers;
		    var i;
		    var len = layers.length;
		    var newLayers = data.layers;
		    var j;
		    var jLen = newLayers.length;

		    for (j = 0; j < jLen; j += 1) {
		      i = 0;

		      while (i < len) {
		        if (layers[i].id === newLayers[j].id) {
		          layers[i] = newLayers[j];
		          break;
		        }

		        i += 1;
		      }
		    }

		    if (data.chars || data.fonts) {
		      this.renderer.globalData.fontManager.addChars(data.chars);
		      this.renderer.globalData.fontManager.addFonts(data.fonts, this.renderer.globalData.defs);
		    }

		    if (data.assets) {
		      len = data.assets.length;

		      for (i = 0; i < len; i += 1) {
		        this.animationData.assets.push(data.assets[i]);
		      }
		    }

		    this.animationData.__complete = false;
		    dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
		  };

		  AnimationItem.prototype.onSegmentComplete = function (data) {
		    this.animationData = data;
		    var expressionsPlugin = getExpressionsPlugin();

		    if (expressionsPlugin) {
		      expressionsPlugin.initExpressions(this);
		    }

		    this.loadNextSegment();
		  };

		  AnimationItem.prototype.loadNextSegment = function () {
		    var segments = this.animationData.segments;

		    if (!segments || segments.length === 0 || !this.autoloadSegments) {
		      this.trigger('data_ready');
		      this.timeCompleted = this.totalFrames;
		      return;
		    }

		    var segment = segments.shift();
		    this.timeCompleted = segment.time * this.frameRate;
		    var segmentPath = this.path + this.fileName + '_' + this.segmentPos + '.json';
		    this.segmentPos += 1;
		    dataManager.loadData(segmentPath, this.includeLayers.bind(this), function () {
		      this.trigger('data_failed');
		    }.bind(this));
		  };

		  AnimationItem.prototype.loadSegments = function () {
		    var segments = this.animationData.segments;

		    if (!segments) {
		      this.timeCompleted = this.totalFrames;
		    }

		    this.loadNextSegment();
		  };

		  AnimationItem.prototype.imagesLoaded = function () {
		    this.trigger('loaded_images');
		    this.checkLoaded();
		  };

		  AnimationItem.prototype.preloadImages = function () {
		    this.imagePreloader.setAssetsPath(this.assetsPath);
		    this.imagePreloader.setPath(this.path);
		    this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
		  };

		  AnimationItem.prototype.configAnimation = function (animData) {
		    if (!this.renderer) {
		      return;
		    }

		    try {
		      this.animationData = animData;

		      if (this.initialSegment) {
		        this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]);
		        this.firstFrame = Math.round(this.initialSegment[0]);
		      } else {
		        this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
		        this.firstFrame = Math.round(this.animationData.ip);
		      }

		      this.renderer.configAnimation(animData);

		      if (!animData.assets) {
		        animData.assets = [];
		      }

		      this.assets = this.animationData.assets;
		      this.frameRate = this.animationData.fr;
		      this.frameMult = this.animationData.fr / 1000;
		      this.renderer.searchExtraCompositions(animData.assets);
		      this.markers = markerParser(animData.markers || []);
		      this.trigger('config_ready');
		      this.preloadImages();
		      this.loadSegments();
		      this.updaFrameModifier();
		      this.waitForFontsLoaded();

		      if (this.isPaused) {
		        this.audioController.pause();
		      }
		    } catch (error) {
		      this.triggerConfigError(error);
		    }
		  };

		  AnimationItem.prototype.waitForFontsLoaded = function () {
		    if (!this.renderer) {
		      return;
		    }

		    if (this.renderer.globalData.fontManager.isLoaded) {
		      this.checkLoaded();
		    } else {
		      setTimeout(this.waitForFontsLoaded.bind(this), 20);
		    }
		  };

		  AnimationItem.prototype.checkLoaded = function () {
		    if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== 'canvas') && this.imagePreloader.loadedFootages()) {
		      this.isLoaded = true;
		      var expressionsPlugin = getExpressionsPlugin();

		      if (expressionsPlugin) {
		        expressionsPlugin.initExpressions(this);
		      }

		      this.renderer.initItems();
		      setTimeout(function () {
		        this.trigger('DOMLoaded');
		      }.bind(this), 0);
		      this.gotoFrame();

		      if (this.autoplay) {
		        this.play();
		      }
		    }
		  };

		  AnimationItem.prototype.resize = function (width, height) {
		    // Adding this validation for backwards compatibility in case an event object was being passed down
		    var _width = typeof width === 'number' ? width : undefined;

		    var _height = typeof height === 'number' ? height : undefined;

		    this.renderer.updateContainerSize(_width, _height);
		  };

		  AnimationItem.prototype.setSubframe = function (flag) {
		    this.isSubframeEnabled = !!flag;
		  };

		  AnimationItem.prototype.gotoFrame = function () {
		    this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame; // eslint-disable-line no-bitwise

		    if (this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted) {
		      this.currentFrame = this.timeCompleted;
		    }

		    this.trigger('enterFrame');
		    this.renderFrame();
		    this.trigger('drawnFrame');
		  };

		  AnimationItem.prototype.renderFrame = function () {
		    if (this.isLoaded === false || !this.renderer) {
		      return;
		    }

		    try {
		      if (this.expressionsPlugin) {
		        this.expressionsPlugin.resetFrame();
		      }

		      this.renderer.renderFrame(this.currentFrame + this.firstFrame);
		    } catch (error) {
		      this.triggerRenderFrameError(error);
		    }
		  };

		  AnimationItem.prototype.play = function (name) {
		    if (name && this.name !== name) {
		      return;
		    }

		    if (this.isPaused === true) {
		      this.isPaused = false;
		      this.trigger('_play');
		      this.audioController.resume();

		      if (this._idle) {
		        this._idle = false;
		        this.trigger('_active');
		      }
		    }
		  };

		  AnimationItem.prototype.pause = function (name) {
		    if (name && this.name !== name) {
		      return;
		    }

		    if (this.isPaused === false) {
		      this.isPaused = true;
		      this.trigger('_pause');
		      this._idle = true;
		      this.trigger('_idle');
		      this.audioController.pause();
		    }
		  };

		  AnimationItem.prototype.togglePause = function (name) {
		    if (name && this.name !== name) {
		      return;
		    }

		    if (this.isPaused === true) {
		      this.play();
		    } else {
		      this.pause();
		    }
		  };

		  AnimationItem.prototype.stop = function (name) {
		    if (name && this.name !== name) {
		      return;
		    }

		    this.pause();
		    this.playCount = 0;
		    this._completedLoop = false;
		    this.setCurrentRawFrameValue(0);
		  };

		  AnimationItem.prototype.getMarkerData = function (markerName) {
		    var marker;

		    for (var i = 0; i < this.markers.length; i += 1) {
		      marker = this.markers[i];

		      if (marker.payload && marker.payload.name === markerName) {
		        return marker;
		      }
		    }

		    return null;
		  };

		  AnimationItem.prototype.goToAndStop = function (value, isFrame, name) {
		    if (name && this.name !== name) {
		      return;
		    }

		    var numValue = Number(value);

		    if (isNaN(numValue)) {
		      var marker = this.getMarkerData(value);

		      if (marker) {
		        this.goToAndStop(marker.time, true);
		      }
		    } else if (isFrame) {
		      this.setCurrentRawFrameValue(value);
		    } else {
		      this.setCurrentRawFrameValue(value * this.frameModifier);
		    }

		    this.pause();
		  };

		  AnimationItem.prototype.goToAndPlay = function (value, isFrame, name) {
		    if (name && this.name !== name) {
		      return;
		    }

		    var numValue = Number(value);

		    if (isNaN(numValue)) {
		      var marker = this.getMarkerData(value);

		      if (marker) {
		        if (!marker.duration) {
		          this.goToAndStop(marker.time, true);
		        } else {
		          this.playSegments([marker.time, marker.time + marker.duration], true);
		        }
		      }
		    } else {
		      this.goToAndStop(numValue, isFrame, name);
		    }

		    this.play();
		  };

		  AnimationItem.prototype.advanceTime = function (value) {
		    if (this.isPaused === true || this.isLoaded === false) {
		      return;
		    }

		    var nextValue = this.currentRawFrame + value * this.frameModifier;
		    var _isComplete = false; // Checking if nextValue > totalFrames - 1 for addressing non looping and looping animations.
		    // If animation won't loop, it should stop at totalFrames - 1. If it will loop it should complete the last frame and then loop.

		    if (nextValue >= this.totalFrames - 1 && this.frameModifier > 0) {
		      if (!this.loop || this.playCount === this.loop) {
		        if (!this.checkSegments(nextValue > this.totalFrames ? nextValue % this.totalFrames : 0)) {
		          _isComplete = true;
		          nextValue = this.totalFrames - 1;
		        }
		      } else if (nextValue >= this.totalFrames) {
		        this.playCount += 1;

		        if (!this.checkSegments(nextValue % this.totalFrames)) {
		          this.setCurrentRawFrameValue(nextValue % this.totalFrames);
		          this._completedLoop = true;
		          this.trigger('loopComplete');
		        }
		      } else {
		        this.setCurrentRawFrameValue(nextValue);
		      }
		    } else if (nextValue < 0) {
		      if (!this.checkSegments(nextValue % this.totalFrames)) {
		        if (this.loop && !(this.playCount-- <= 0 && this.loop !== true)) {
		          // eslint-disable-line no-plusplus
		          this.setCurrentRawFrameValue(this.totalFrames + nextValue % this.totalFrames);

		          if (!this._completedLoop) {
		            this._completedLoop = true;
		          } else {
		            this.trigger('loopComplete');
		          }
		        } else {
		          _isComplete = true;
		          nextValue = 0;
		        }
		      }
		    } else {
		      this.setCurrentRawFrameValue(nextValue);
		    }

		    if (_isComplete) {
		      this.setCurrentRawFrameValue(nextValue);
		      this.pause();
		      this.trigger('complete');
		    }
		  };

		  AnimationItem.prototype.adjustSegment = function (arr, offset) {
		    this.playCount = 0;

		    if (arr[1] < arr[0]) {
		      if (this.frameModifier > 0) {
		        if (this.playSpeed < 0) {
		          this.setSpeed(-this.playSpeed);
		        } else {
		          this.setDirection(-1);
		        }
		      }

		      this.totalFrames = arr[0] - arr[1];
		      this.timeCompleted = this.totalFrames;
		      this.firstFrame = arr[1];
		      this.setCurrentRawFrameValue(this.totalFrames - 0.001 - offset);
		    } else if (arr[1] > arr[0]) {
		      if (this.frameModifier < 0) {
		        if (this.playSpeed < 0) {
		          this.setSpeed(-this.playSpeed);
		        } else {
		          this.setDirection(1);
		        }
		      }

		      this.totalFrames = arr[1] - arr[0];
		      this.timeCompleted = this.totalFrames;
		      this.firstFrame = arr[0];
		      this.setCurrentRawFrameValue(0.001 + offset);
		    }

		    this.trigger('segmentStart');
		  };

		  AnimationItem.prototype.setSegment = function (init, end) {
		    var pendingFrame = -1;

		    if (this.isPaused) {
		      if (this.currentRawFrame + this.firstFrame < init) {
		        pendingFrame = init;
		      } else if (this.currentRawFrame + this.firstFrame > end) {
		        pendingFrame = end - init;
		      }
		    }

		    this.firstFrame = init;
		    this.totalFrames = end - init;
		    this.timeCompleted = this.totalFrames;

		    if (pendingFrame !== -1) {
		      this.goToAndStop(pendingFrame, true);
		    }
		  };

		  AnimationItem.prototype.playSegments = function (arr, forceFlag) {
		    if (forceFlag) {
		      this.segments.length = 0;
		    }

		    if (_typeof$4(arr[0]) === 'object') {
		      var i;
		      var len = arr.length;

		      for (i = 0; i < len; i += 1) {
		        this.segments.push(arr[i]);
		      }
		    } else {
		      this.segments.push(arr);
		    }

		    if (this.segments.length && forceFlag) {
		      this.adjustSegment(this.segments.shift(), 0);
		    }

		    if (this.isPaused) {
		      this.play();
		    }
		  };

		  AnimationItem.prototype.resetSegments = function (forceFlag) {
		    this.segments.length = 0;
		    this.segments.push([this.animationData.ip, this.animationData.op]);

		    if (forceFlag) {
		      this.checkSegments(0);
		    }
		  };

		  AnimationItem.prototype.checkSegments = function (offset) {
		    if (this.segments.length) {
		      this.adjustSegment(this.segments.shift(), offset);
		      return true;
		    }

		    return false;
		  };

		  AnimationItem.prototype.destroy = function (name) {
		    if (name && this.name !== name || !this.renderer) {
		      return;
		    }

		    this.renderer.destroy();
		    this.imagePreloader.destroy();
		    this.trigger('destroy');
		    this._cbs = null;
		    this.onEnterFrame = null;
		    this.onLoopComplete = null;
		    this.onComplete = null;
		    this.onSegmentStart = null;
		    this.onDestroy = null;
		    this.renderer = null;
		    this.expressionsPlugin = null;
		    this.imagePreloader = null;
		    this.projectInterface = null;
		  };

		  AnimationItem.prototype.setCurrentRawFrameValue = function (value) {
		    this.currentRawFrame = value;
		    this.gotoFrame();
		  };

		  AnimationItem.prototype.setSpeed = function (val) {
		    this.playSpeed = val;
		    this.updaFrameModifier();
		  };

		  AnimationItem.prototype.setDirection = function (val) {
		    this.playDirection = val < 0 ? -1 : 1;
		    this.updaFrameModifier();
		  };

		  AnimationItem.prototype.setLoop = function (isLooping) {
		    this.loop = isLooping;
		  };

		  AnimationItem.prototype.setVolume = function (val, name) {
		    if (name && this.name !== name) {
		      return;
		    }

		    this.audioController.setVolume(val);
		  };

		  AnimationItem.prototype.getVolume = function () {
		    return this.audioController.getVolume();
		  };

		  AnimationItem.prototype.mute = function (name) {
		    if (name && this.name !== name) {
		      return;
		    }

		    this.audioController.mute();
		  };

		  AnimationItem.prototype.unmute = function (name) {
		    if (name && this.name !== name) {
		      return;
		    }

		    this.audioController.unmute();
		  };

		  AnimationItem.prototype.updaFrameModifier = function () {
		    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
		    this.audioController.setRate(this.playSpeed * this.playDirection);
		  };

		  AnimationItem.prototype.getPath = function () {
		    return this.path;
		  };

		  AnimationItem.prototype.getAssetsPath = function (assetData) {
		    var path = '';

		    if (assetData.e) {
		      path = assetData.p;
		    } else if (this.assetsPath) {
		      var imagePath = assetData.p;

		      if (imagePath.indexOf('images/') !== -1) {
		        imagePath = imagePath.split('/')[1];
		      }

		      path = this.assetsPath + imagePath;
		    } else {
		      path = this.path;
		      path += assetData.u ? assetData.u : '';
		      path += assetData.p;
		    }

		    return path;
		  };

		  AnimationItem.prototype.getAssetData = function (id) {
		    var i = 0;
		    var len = this.assets.length;

		    while (i < len) {
		      if (id === this.assets[i].id) {
		        return this.assets[i];
		      }

		      i += 1;
		    }

		    return null;
		  };

		  AnimationItem.prototype.hide = function () {
		    this.renderer.hide();
		  };

		  AnimationItem.prototype.show = function () {
		    this.renderer.show();
		  };

		  AnimationItem.prototype.getDuration = function (isFrame) {
		    return isFrame ? this.totalFrames : this.totalFrames / this.frameRate;
		  };

		  AnimationItem.prototype.updateDocumentData = function (path, documentData, index) {
		    try {
		      var element = this.renderer.getElementByPath(path);
		      element.updateDocumentData(documentData, index);
		    } catch (error) {// TODO: decide how to handle catch case
		    }
		  };

		  AnimationItem.prototype.trigger = function (name) {
		    if (this._cbs && this._cbs[name]) {
		      switch (name) {
		        case 'enterFrame':
		          this.triggerEvent(name, new BMEnterFrameEvent(name, this.currentFrame, this.totalFrames, this.frameModifier));
		          break;

		        case 'drawnFrame':
		          this.drawnFrameEvent.currentTime = this.currentFrame;
		          this.drawnFrameEvent.totalTime = this.totalFrames;
		          this.drawnFrameEvent.direction = this.frameModifier;
		          this.triggerEvent(name, this.drawnFrameEvent);
		          break;

		        case 'loopComplete':
		          this.triggerEvent(name, new BMCompleteLoopEvent(name, this.loop, this.playCount, this.frameMult));
		          break;

		        case 'complete':
		          this.triggerEvent(name, new BMCompleteEvent(name, this.frameMult));
		          break;

		        case 'segmentStart':
		          this.triggerEvent(name, new BMSegmentStartEvent(name, this.firstFrame, this.totalFrames));
		          break;

		        case 'destroy':
		          this.triggerEvent(name, new BMDestroyEvent(name, this));
		          break;

		        default:
		          this.triggerEvent(name);
		      }
		    }

		    if (name === 'enterFrame' && this.onEnterFrame) {
		      this.onEnterFrame.call(this, new BMEnterFrameEvent(name, this.currentFrame, this.totalFrames, this.frameMult));
		    }

		    if (name === 'loopComplete' && this.onLoopComplete) {
		      this.onLoopComplete.call(this, new BMCompleteLoopEvent(name, this.loop, this.playCount, this.frameMult));
		    }

		    if (name === 'complete' && this.onComplete) {
		      this.onComplete.call(this, new BMCompleteEvent(name, this.frameMult));
		    }

		    if (name === 'segmentStart' && this.onSegmentStart) {
		      this.onSegmentStart.call(this, new BMSegmentStartEvent(name, this.firstFrame, this.totalFrames));
		    }

		    if (name === 'destroy' && this.onDestroy) {
		      this.onDestroy.call(this, new BMDestroyEvent(name, this));
		    }
		  };

		  AnimationItem.prototype.triggerRenderFrameError = function (nativeError) {
		    var error = new BMRenderFrameErrorEvent(nativeError, this.currentFrame);
		    this.triggerEvent('error', error);

		    if (this.onError) {
		      this.onError.call(this, error);
		    }
		  };

		  AnimationItem.prototype.triggerConfigError = function (nativeError) {
		    var error = new BMConfigErrorEvent(nativeError, this.currentFrame);
		    this.triggerEvent('error', error);

		    if (this.onError) {
		      this.onError.call(this, error);
		    }
		  };

		  var animationManager = function () {
		    var moduleOb = {};
		    var registeredAnimations = [];
		    var initTime = 0;
		    var len = 0;
		    var playingAnimationsNum = 0;
		    var _stopped = true;
		    var _isFrozen = false;

		    function removeElement(ev) {
		      var i = 0;
		      var animItem = ev.target;

		      while (i < len) {
		        if (registeredAnimations[i].animation === animItem) {
		          registeredAnimations.splice(i, 1);
		          i -= 1;
		          len -= 1;

		          if (!animItem.isPaused) {
		            subtractPlayingCount();
		          }
		        }

		        i += 1;
		      }
		    }

		    function registerAnimation(element, animationData) {
		      if (!element) {
		        return null;
		      }

		      var i = 0;

		      while (i < len) {
		        if (registeredAnimations[i].elem === element && registeredAnimations[i].elem !== null) {
		          return registeredAnimations[i].animation;
		        }

		        i += 1;
		      }

		      var animItem = new AnimationItem();
		      setupAnimation(animItem, element);
		      animItem.setData(element, animationData);
		      return animItem;
		    }

		    function getRegisteredAnimations() {
		      var i;
		      var lenAnims = registeredAnimations.length;
		      var animations = [];

		      for (i = 0; i < lenAnims; i += 1) {
		        animations.push(registeredAnimations[i].animation);
		      }

		      return animations;
		    }

		    function addPlayingCount() {
		      playingAnimationsNum += 1;
		      activate();
		    }

		    function subtractPlayingCount() {
		      playingAnimationsNum -= 1;
		    }

		    function setupAnimation(animItem, element) {
		      animItem.addEventListener('destroy', removeElement);
		      animItem.addEventListener('_active', addPlayingCount);
		      animItem.addEventListener('_idle', subtractPlayingCount);
		      registeredAnimations.push({
		        elem: element,
		        animation: animItem
		      });
		      len += 1;
		    }

		    function loadAnimation(params) {
		      var animItem = new AnimationItem();
		      setupAnimation(animItem, null);
		      animItem.setParams(params);
		      return animItem;
		    }

		    function setSpeed(val, animation) {
		      var i;

		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.setSpeed(val, animation);
		      }
		    }

		    function setDirection(val, animation) {
		      var i;

		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.setDirection(val, animation);
		      }
		    }

		    function play(animation) {
		      var i;

		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.play(animation);
		      }
		    }

		    function resume(nowTime) {
		      var elapsedTime = nowTime - initTime;
		      var i;

		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.advanceTime(elapsedTime);
		      }

		      initTime = nowTime;

		      if (playingAnimationsNum && !_isFrozen) {
		        window.requestAnimationFrame(resume);
		      } else {
		        _stopped = true;
		      }
		    }

		    function first(nowTime) {
		      initTime = nowTime;
		      window.requestAnimationFrame(resume);
		    }

		    function pause(animation) {
		      var i;

		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.pause(animation);
		      }
		    }

		    function goToAndStop(value, isFrame, animation) {
		      var i;

		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.goToAndStop(value, isFrame, animation);
		      }
		    }

		    function stop(animation) {
		      var i;

		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.stop(animation);
		      }
		    }

		    function togglePause(animation) {
		      var i;

		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.togglePause(animation);
		      }
		    }

		    function destroy(animation) {
		      var i;

		      for (i = len - 1; i >= 0; i -= 1) {
		        registeredAnimations[i].animation.destroy(animation);
		      }
		    }

		    function searchAnimations(animationData, standalone, renderer) {
		      var animElements = [].concat([].slice.call(document.getElementsByClassName('lottie')), [].slice.call(document.getElementsByClassName('bodymovin')));
		      var i;
		      var lenAnims = animElements.length;

		      for (i = 0; i < lenAnims; i += 1) {
		        if (renderer) {
		          animElements[i].setAttribute('data-bm-type', renderer);
		        }

		        registerAnimation(animElements[i], animationData);
		      }

		      if (standalone && lenAnims === 0) {
		        if (!renderer) {
		          renderer = 'svg';
		        }

		        var body = document.getElementsByTagName('body')[0];
		        body.innerText = '';
		        var div = createTag('div');
		        div.style.width = '100%';
		        div.style.height = '100%';
		        div.setAttribute('data-bm-type', renderer);
		        body.appendChild(div);
		        registerAnimation(div, animationData);
		      }
		    }

		    function resize() {
		      var i;

		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.resize();
		      }
		    }

		    function activate() {
		      if (!_isFrozen && playingAnimationsNum) {
		        if (_stopped) {
		          window.requestAnimationFrame(first);
		          _stopped = false;
		        }
		      }
		    }

		    function freeze() {
		      _isFrozen = true;
		    }

		    function unfreeze() {
		      _isFrozen = false;
		      activate();
		    }

		    function setVolume(val, animation) {
		      var i;

		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.setVolume(val, animation);
		      }
		    }

		    function mute(animation) {
		      var i;

		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.mute(animation);
		      }
		    }

		    function unmute(animation) {
		      var i;

		      for (i = 0; i < len; i += 1) {
		        registeredAnimations[i].animation.unmute(animation);
		      }
		    }

		    moduleOb.registerAnimation = registerAnimation;
		    moduleOb.loadAnimation = loadAnimation;
		    moduleOb.setSpeed = setSpeed;
		    moduleOb.setDirection = setDirection;
		    moduleOb.play = play;
		    moduleOb.pause = pause;
		    moduleOb.stop = stop;
		    moduleOb.togglePause = togglePause;
		    moduleOb.searchAnimations = searchAnimations;
		    moduleOb.resize = resize; // moduleOb.start = start;

		    moduleOb.goToAndStop = goToAndStop;
		    moduleOb.destroy = destroy;
		    moduleOb.freeze = freeze;
		    moduleOb.unfreeze = unfreeze;
		    moduleOb.setVolume = setVolume;
		    moduleOb.mute = mute;
		    moduleOb.unmute = unmute;
		    moduleOb.getRegisteredAnimations = getRegisteredAnimations;
		    return moduleOb;
		  }();

		  /* eslint-disable */
		  var BezierFactory = function () {
		    /**
		       * BezierEasing - use bezier curve for transition easing function
		       * by Gaëtan Renaudeau 2014 - 2015 – MIT License
		       *
		       * Credits: is based on Firefox's nsSMILKeySpline.cpp
		       * Usage:
		       * var spline = BezierEasing([ 0.25, 0.1, 0.25, 1.0 ])
		       * spline.get(x) => returns the easing value | x must be in [0, 1] range
		       *
		       */
		    var ob = {};
		    ob.getBezierEasing = getBezierEasing;
		    var beziers = {};

		    function getBezierEasing(a, b, c, d, nm) {
		      var str = nm || ('bez_' + a + '_' + b + '_' + c + '_' + d).replace(/\./g, 'p');

		      if (beziers[str]) {
		        return beziers[str];
		      }

		      var bezEasing = new BezierEasing([a, b, c, d]);
		      beziers[str] = bezEasing;
		      return bezEasing;
		    } // These values are established by empiricism with tests (tradeoff: performance VS precision)


		    var NEWTON_ITERATIONS = 4;
		    var NEWTON_MIN_SLOPE = 0.001;
		    var SUBDIVISION_PRECISION = 0.0000001;
		    var SUBDIVISION_MAX_ITERATIONS = 10;
		    var kSplineTableSize = 11;
		    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
		    var float32ArraySupported = typeof Float32Array === 'function';

		    function A(aA1, aA2) {
		      return 1.0 - 3.0 * aA2 + 3.0 * aA1;
		    }

		    function B(aA1, aA2) {
		      return 3.0 * aA2 - 6.0 * aA1;
		    }

		    function C(aA1) {
		      return 3.0 * aA1;
		    } // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.


		    function calcBezier(aT, aA1, aA2) {
		      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
		    } // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.


		    function getSlope(aT, aA1, aA2) {
		      return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
		    }

		    function binarySubdivide(aX, aA, aB, mX1, mX2) {
		      var currentX,
		          currentT,
		          i = 0;

		      do {
		        currentT = aA + (aB - aA) / 2.0;
		        currentX = calcBezier(currentT, mX1, mX2) - aX;

		        if (currentX > 0.0) {
		          aB = currentT;
		        } else {
		          aA = currentT;
		        }
		      } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

		      return currentT;
		    }

		    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
		      for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
		        var currentSlope = getSlope(aGuessT, mX1, mX2);
		        if (currentSlope === 0.0) return aGuessT;
		        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
		        aGuessT -= currentX / currentSlope;
		      }

		      return aGuessT;
		    }
		    /**
		       * points is an array of [ mX1, mY1, mX2, mY2 ]
		       */


		    function BezierEasing(points) {
		      this._p = points;
		      this._mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
		      this._precomputed = false;
		      this.get = this.get.bind(this);
		    }

		    BezierEasing.prototype = {
		      get: function get(x) {
		        var mX1 = this._p[0],
		            mY1 = this._p[1],
		            mX2 = this._p[2],
		            mY2 = this._p[3];
		        if (!this._precomputed) this._precompute();
		        if (mX1 === mY1 && mX2 === mY2) return x; // linear
		        // Because JavaScript number are imprecise, we should guarantee the extremes are right.

		        if (x === 0) return 0;
		        if (x === 1) return 1;
		        return calcBezier(this._getTForX(x), mY1, mY2);
		      },
		      // Private part
		      _precompute: function _precompute() {
		        var mX1 = this._p[0],
		            mY1 = this._p[1],
		            mX2 = this._p[2],
		            mY2 = this._p[3];
		        this._precomputed = true;

		        if (mX1 !== mY1 || mX2 !== mY2) {
		          this._calcSampleValues();
		        }
		      },
		      _calcSampleValues: function _calcSampleValues() {
		        var mX1 = this._p[0],
		            mX2 = this._p[2];

		        for (var i = 0; i < kSplineTableSize; ++i) {
		          this._mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
		        }
		      },

		      /**
		           * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
		           */
		      _getTForX: function _getTForX(aX) {
		        var mX1 = this._p[0],
		            mX2 = this._p[2],
		            mSampleValues = this._mSampleValues;
		        var intervalStart = 0.0;
		        var currentSample = 1;
		        var lastSample = kSplineTableSize - 1;

		        for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
		          intervalStart += kSampleStepSize;
		        }

		        --currentSample; // Interpolate to provide an initial guess for t

		        var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]);
		        var guessForT = intervalStart + dist * kSampleStepSize;
		        var initialSlope = getSlope(guessForT, mX1, mX2);

		        if (initialSlope >= NEWTON_MIN_SLOPE) {
		          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
		        }

		        if (initialSlope === 0.0) {
		          return guessForT;
		        }

		        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
		      }
		    };
		    return ob;
		  }();

		  var pooling = function () {
		    function _double(arr) {
		      return arr.concat(createSizedArray(arr.length));
		    }

		    return {
		      "double": _double
		    };
		  }();

		  var poolFactory = function () {
		    return function (initialLength, _create, _release) {
		      var _length = 0;
		      var _maxLength = initialLength;
		      var pool = createSizedArray(_maxLength);
		      var ob = {
		        newElement: newElement,
		        release: release
		      };

		      function newElement() {
		        var element;

		        if (_length) {
		          _length -= 1;
		          element = pool[_length];
		        } else {
		          element = _create();
		        }

		        return element;
		      }

		      function release(element) {
		        if (_length === _maxLength) {
		          pool = pooling["double"](pool);
		          _maxLength *= 2;
		        }

		        if (_release) {
		          _release(element);
		        }

		        pool[_length] = element;
		        _length += 1;
		      }

		      return ob;
		    };
		  }();

		  var bezierLengthPool = function () {
		    function create() {
		      return {
		        addedLength: 0,
		        percents: createTypedArray('float32', getDefaultCurveSegments()),
		        lengths: createTypedArray('float32', getDefaultCurveSegments())
		      };
		    }

		    return poolFactory(8, create);
		  }();

		  var segmentsLengthPool = function () {
		    function create() {
		      return {
		        lengths: [],
		        totalLength: 0
		      };
		    }

		    function release(element) {
		      var i;
		      var len = element.lengths.length;

		      for (i = 0; i < len; i += 1) {
		        bezierLengthPool.release(element.lengths[i]);
		      }

		      element.lengths.length = 0;
		    }

		    return poolFactory(8, create, release);
		  }();

		  function bezFunction() {
		    var math = Math;

		    function pointOnLine2D(x1, y1, x2, y2, x3, y3) {
		      var det1 = x1 * y2 + y1 * x3 + x2 * y3 - x3 * y2 - y3 * x1 - x2 * y1;
		      return det1 > -0.001 && det1 < 0.001;
		    }

		    function pointOnLine3D(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
		      if (z1 === 0 && z2 === 0 && z3 === 0) {
		        return pointOnLine2D(x1, y1, x2, y2, x3, y3);
		      }

		      var dist1 = math.sqrt(math.pow(x2 - x1, 2) + math.pow(y2 - y1, 2) + math.pow(z2 - z1, 2));
		      var dist2 = math.sqrt(math.pow(x3 - x1, 2) + math.pow(y3 - y1, 2) + math.pow(z3 - z1, 2));
		      var dist3 = math.sqrt(math.pow(x3 - x2, 2) + math.pow(y3 - y2, 2) + math.pow(z3 - z2, 2));
		      var diffDist;

		      if (dist1 > dist2) {
		        if (dist1 > dist3) {
		          diffDist = dist1 - dist2 - dist3;
		        } else {
		          diffDist = dist3 - dist2 - dist1;
		        }
		      } else if (dist3 > dist2) {
		        diffDist = dist3 - dist2 - dist1;
		      } else {
		        diffDist = dist2 - dist1 - dist3;
		      }

		      return diffDist > -0.0001 && diffDist < 0.0001;
		    }

		    var getBezierLength = function () {
		      return function (pt1, pt2, pt3, pt4) {
		        var curveSegments = getDefaultCurveSegments();
		        var k;
		        var i;
		        var len;
		        var ptCoord;
		        var perc;
		        var addedLength = 0;
		        var ptDistance;
		        var point = [];
		        var lastPoint = [];
		        var lengthData = bezierLengthPool.newElement();
		        len = pt3.length;

		        for (k = 0; k < curveSegments; k += 1) {
		          perc = k / (curveSegments - 1);
		          ptDistance = 0;

		          for (i = 0; i < len; i += 1) {
		            ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * pt3[i] + 3 * (1 - perc) * bmPow(perc, 2) * pt4[i] + bmPow(perc, 3) * pt2[i];
		            point[i] = ptCoord;

		            if (lastPoint[i] !== null) {
		              ptDistance += bmPow(point[i] - lastPoint[i], 2);
		            }

		            lastPoint[i] = point[i];
		          }

		          if (ptDistance) {
		            ptDistance = bmSqrt(ptDistance);
		            addedLength += ptDistance;
		          }

		          lengthData.percents[k] = perc;
		          lengthData.lengths[k] = addedLength;
		        }

		        lengthData.addedLength = addedLength;
		        return lengthData;
		      };
		    }();

		    function getSegmentsLength(shapeData) {
		      var segmentsLength = segmentsLengthPool.newElement();
		      var closed = shapeData.c;
		      var pathV = shapeData.v;
		      var pathO = shapeData.o;
		      var pathI = shapeData.i;
		      var i;
		      var len = shapeData._length;
		      var lengths = segmentsLength.lengths;
		      var totalLength = 0;

		      for (i = 0; i < len - 1; i += 1) {
		        lengths[i] = getBezierLength(pathV[i], pathV[i + 1], pathO[i], pathI[i + 1]);
		        totalLength += lengths[i].addedLength;
		      }

		      if (closed && len) {
		        lengths[i] = getBezierLength(pathV[i], pathV[0], pathO[i], pathI[0]);
		        totalLength += lengths[i].addedLength;
		      }

		      segmentsLength.totalLength = totalLength;
		      return segmentsLength;
		    }

		    function BezierData(length) {
		      this.segmentLength = 0;
		      this.points = new Array(length);
		    }

		    function PointData(partial, point) {
		      this.partialLength = partial;
		      this.point = point;
		    }

		    var buildBezierData = function () {
		      var storedData = {};
		      return function (pt1, pt2, pt3, pt4) {
		        var bezierName = (pt1[0] + '_' + pt1[1] + '_' + pt2[0] + '_' + pt2[1] + '_' + pt3[0] + '_' + pt3[1] + '_' + pt4[0] + '_' + pt4[1]).replace(/\./g, 'p');

		        if (!storedData[bezierName]) {
		          var curveSegments = getDefaultCurveSegments();
		          var k;
		          var i;
		          var len;
		          var ptCoord;
		          var perc;
		          var addedLength = 0;
		          var ptDistance;
		          var point;
		          var lastPoint = null;

		          if (pt1.length === 2 && (pt1[0] !== pt2[0] || pt1[1] !== pt2[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt1[0] + pt3[0], pt1[1] + pt3[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt2[0] + pt4[0], pt2[1] + pt4[1])) {
		            curveSegments = 2;
		          }

		          var bezierData = new BezierData(curveSegments);
		          len = pt3.length;

		          for (k = 0; k < curveSegments; k += 1) {
		            point = createSizedArray(len);
		            perc = k / (curveSegments - 1);
		            ptDistance = 0;

		            for (i = 0; i < len; i += 1) {
		              ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * (pt1[i] + pt3[i]) + 3 * (1 - perc) * bmPow(perc, 2) * (pt2[i] + pt4[i]) + bmPow(perc, 3) * pt2[i];
		              point[i] = ptCoord;

		              if (lastPoint !== null) {
		                ptDistance += bmPow(point[i] - lastPoint[i], 2);
		              }
		            }

		            ptDistance = bmSqrt(ptDistance);
		            addedLength += ptDistance;
		            bezierData.points[k] = new PointData(ptDistance, point);
		            lastPoint = point;
		          }

		          bezierData.segmentLength = addedLength;
		          storedData[bezierName] = bezierData;
		        }

		        return storedData[bezierName];
		      };
		    }();

		    function getDistancePerc(perc, bezierData) {
		      var percents = bezierData.percents;
		      var lengths = bezierData.lengths;
		      var len = percents.length;
		      var initPos = bmFloor((len - 1) * perc);
		      var lengthPos = perc * bezierData.addedLength;
		      var lPerc = 0;

		      if (initPos === len - 1 || initPos === 0 || lengthPos === lengths[initPos]) {
		        return percents[initPos];
		      }

		      var dir = lengths[initPos] > lengthPos ? -1 : 1;
		      var flag = true;

		      while (flag) {
		        if (lengths[initPos] <= lengthPos && lengths[initPos + 1] > lengthPos) {
		          lPerc = (lengthPos - lengths[initPos]) / (lengths[initPos + 1] - lengths[initPos]);
		          flag = false;
		        } else {
		          initPos += dir;
		        }

		        if (initPos < 0 || initPos >= len - 1) {
		          // FIX for TypedArrays that don't store floating point values with enough accuracy
		          if (initPos === len - 1) {
		            return percents[initPos];
		          }

		          flag = false;
		        }
		      }

		      return percents[initPos] + (percents[initPos + 1] - percents[initPos]) * lPerc;
		    }

		    function getPointInSegment(pt1, pt2, pt3, pt4, percent, bezierData) {
		      var t1 = getDistancePerc(percent, bezierData);
		      var u1 = 1 - t1;
		      var ptX = math.round((u1 * u1 * u1 * pt1[0] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[0] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[0] + t1 * t1 * t1 * pt2[0]) * 1000) / 1000;
		      var ptY = math.round((u1 * u1 * u1 * pt1[1] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[1] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[1] + t1 * t1 * t1 * pt2[1]) * 1000) / 1000;
		      return [ptX, ptY];
		    }

		    var bezierSegmentPoints = createTypedArray('float32', 8);

		    function getNewSegment(pt1, pt2, pt3, pt4, startPerc, endPerc, bezierData) {
		      if (startPerc < 0) {
		        startPerc = 0;
		      } else if (startPerc > 1) {
		        startPerc = 1;
		      }

		      var t0 = getDistancePerc(startPerc, bezierData);
		      endPerc = endPerc > 1 ? 1 : endPerc;
		      var t1 = getDistancePerc(endPerc, bezierData);
		      var i;
		      var len = pt1.length;
		      var u0 = 1 - t0;
		      var u1 = 1 - t1;
		      var u0u0u0 = u0 * u0 * u0;
		      var t0u0u0_3 = t0 * u0 * u0 * 3; // eslint-disable-line camelcase

		      var t0t0u0_3 = t0 * t0 * u0 * 3; // eslint-disable-line camelcase

		      var t0t0t0 = t0 * t0 * t0; //

		      var u0u0u1 = u0 * u0 * u1;
		      var t0u0u1_3 = t0 * u0 * u1 + u0 * t0 * u1 + u0 * u0 * t1; // eslint-disable-line camelcase

		      var t0t0u1_3 = t0 * t0 * u1 + u0 * t0 * t1 + t0 * u0 * t1; // eslint-disable-line camelcase

		      var t0t0t1 = t0 * t0 * t1; //

		      var u0u1u1 = u0 * u1 * u1;
		      var t0u1u1_3 = t0 * u1 * u1 + u0 * t1 * u1 + u0 * u1 * t1; // eslint-disable-line camelcase

		      var t0t1u1_3 = t0 * t1 * u1 + u0 * t1 * t1 + t0 * u1 * t1; // eslint-disable-line camelcase

		      var t0t1t1 = t0 * t1 * t1; //

		      var u1u1u1 = u1 * u1 * u1;
		      var t1u1u1_3 = t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1; // eslint-disable-line camelcase

		      var t1t1u1_3 = t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1; // eslint-disable-line camelcase

		      var t1t1t1 = t1 * t1 * t1;

		      for (i = 0; i < len; i += 1) {
		        bezierSegmentPoints[i * 4] = math.round((u0u0u0 * pt1[i] + t0u0u0_3 * pt3[i] + t0t0u0_3 * pt4[i] + t0t0t0 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase

		        bezierSegmentPoints[i * 4 + 1] = math.round((u0u0u1 * pt1[i] + t0u0u1_3 * pt3[i] + t0t0u1_3 * pt4[i] + t0t0t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase

		        bezierSegmentPoints[i * 4 + 2] = math.round((u0u1u1 * pt1[i] + t0u1u1_3 * pt3[i] + t0t1u1_3 * pt4[i] + t0t1t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase

		        bezierSegmentPoints[i * 4 + 3] = math.round((u1u1u1 * pt1[i] + t1u1u1_3 * pt3[i] + t1t1u1_3 * pt4[i] + t1t1t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
		      }

		      return bezierSegmentPoints;
		    }

		    return {
		      getSegmentsLength: getSegmentsLength,
		      getNewSegment: getNewSegment,
		      getPointInSegment: getPointInSegment,
		      buildBezierData: buildBezierData,
		      pointOnLine2D: pointOnLine2D,
		      pointOnLine3D: pointOnLine3D
		    };
		  }

		  var bez = bezFunction();

		  var initFrame = initialDefaultFrame;
		  var mathAbs = Math.abs;

		  function interpolateValue(frameNum, caching) {
		    var offsetTime = this.offsetTime;
		    var newValue;

		    if (this.propType === 'multidimensional') {
		      newValue = createTypedArray('float32', this.pv.length);
		    }

		    var iterationIndex = caching.lastIndex;
		    var i = iterationIndex;
		    var len = this.keyframes.length - 1;
		    var flag = true;
		    var keyData;
		    var nextKeyData;
		    var keyframeMetadata;

		    while (flag) {
		      keyData = this.keyframes[i];
		      nextKeyData = this.keyframes[i + 1];

		      if (i === len - 1 && frameNum >= nextKeyData.t - offsetTime) {
		        if (keyData.h) {
		          keyData = nextKeyData;
		        }

		        iterationIndex = 0;
		        break;
		      }

		      if (nextKeyData.t - offsetTime > frameNum) {
		        iterationIndex = i;
		        break;
		      }

		      if (i < len - 1) {
		        i += 1;
		      } else {
		        iterationIndex = 0;
		        flag = false;
		      }
		    }

		    keyframeMetadata = this.keyframesMetadata[i] || {};
		    var k;
		    var kLen;
		    var perc;
		    var jLen;
		    var j;
		    var fnc;
		    var nextKeyTime = nextKeyData.t - offsetTime;
		    var keyTime = keyData.t - offsetTime;
		    var endValue;

		    if (keyData.to) {
		      if (!keyframeMetadata.bezierData) {
		        keyframeMetadata.bezierData = bez.buildBezierData(keyData.s, nextKeyData.s || keyData.e, keyData.to, keyData.ti);
		      }

		      var bezierData = keyframeMetadata.bezierData;

		      if (frameNum >= nextKeyTime || frameNum < keyTime) {
		        var ind = frameNum >= nextKeyTime ? bezierData.points.length - 1 : 0;
		        kLen = bezierData.points[ind].point.length;

		        for (k = 0; k < kLen; k += 1) {
		          newValue[k] = bezierData.points[ind].point[k];
		        } // caching._lastKeyframeIndex = -1;

		      } else {
		        if (keyframeMetadata.__fnct) {
		          fnc = keyframeMetadata.__fnct;
		        } else {
		          fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y, keyData.n).get;
		          keyframeMetadata.__fnct = fnc;
		        }

		        perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
		        var distanceInLine = bezierData.segmentLength * perc;
		        var segmentPerc;
		        var addedLength = caching.lastFrame < frameNum && caching._lastKeyframeIndex === i ? caching._lastAddedLength : 0;
		        j = caching.lastFrame < frameNum && caching._lastKeyframeIndex === i ? caching._lastPoint : 0;
		        flag = true;
		        jLen = bezierData.points.length;

		        while (flag) {
		          addedLength += bezierData.points[j].partialLength;

		          if (distanceInLine === 0 || perc === 0 || j === bezierData.points.length - 1) {
		            kLen = bezierData.points[j].point.length;

		            for (k = 0; k < kLen; k += 1) {
		              newValue[k] = bezierData.points[j].point[k];
		            }

		            break;
		          } else if (distanceInLine >= addedLength && distanceInLine < addedLength + bezierData.points[j + 1].partialLength) {
		            segmentPerc = (distanceInLine - addedLength) / bezierData.points[j + 1].partialLength;
		            kLen = bezierData.points[j].point.length;

		            for (k = 0; k < kLen; k += 1) {
		              newValue[k] = bezierData.points[j].point[k] + (bezierData.points[j + 1].point[k] - bezierData.points[j].point[k]) * segmentPerc;
		            }

		            break;
		          }

		          if (j < jLen - 1) {
		            j += 1;
		          } else {
		            flag = false;
		          }
		        }

		        caching._lastPoint = j;
		        caching._lastAddedLength = addedLength - bezierData.points[j].partialLength;
		        caching._lastKeyframeIndex = i;
		      }
		    } else {
		      var outX;
		      var outY;
		      var inX;
		      var inY;
		      var keyValue;
		      len = keyData.s.length;
		      endValue = nextKeyData.s || keyData.e;

		      if (this.sh && keyData.h !== 1) {
		        if (frameNum >= nextKeyTime) {
		          newValue[0] = endValue[0];
		          newValue[1] = endValue[1];
		          newValue[2] = endValue[2];
		        } else if (frameNum <= keyTime) {
		          newValue[0] = keyData.s[0];
		          newValue[1] = keyData.s[1];
		          newValue[2] = keyData.s[2];
		        } else {
		          var quatStart = createQuaternion(keyData.s);
		          var quatEnd = createQuaternion(endValue);
		          var time = (frameNum - keyTime) / (nextKeyTime - keyTime);
		          quaternionToEuler(newValue, slerp(quatStart, quatEnd, time));
		        }
		      } else {
		        for (i = 0; i < len; i += 1) {
		          if (keyData.h !== 1) {
		            if (frameNum >= nextKeyTime) {
		              perc = 1;
		            } else if (frameNum < keyTime) {
		              perc = 0;
		            } else {
		              if (keyData.o.x.constructor === Array) {
		                if (!keyframeMetadata.__fnct) {
		                  keyframeMetadata.__fnct = [];
		                }

		                if (!keyframeMetadata.__fnct[i]) {
		                  outX = keyData.o.x[i] === undefined ? keyData.o.x[0] : keyData.o.x[i];
		                  outY = keyData.o.y[i] === undefined ? keyData.o.y[0] : keyData.o.y[i];
		                  inX = keyData.i.x[i] === undefined ? keyData.i.x[0] : keyData.i.x[i];
		                  inY = keyData.i.y[i] === undefined ? keyData.i.y[0] : keyData.i.y[i];
		                  fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
		                  keyframeMetadata.__fnct[i] = fnc;
		                } else {
		                  fnc = keyframeMetadata.__fnct[i];
		                }
		              } else if (!keyframeMetadata.__fnct) {
		                outX = keyData.o.x;
		                outY = keyData.o.y;
		                inX = keyData.i.x;
		                inY = keyData.i.y;
		                fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
		                keyData.keyframeMetadata = fnc;
		              } else {
		                fnc = keyframeMetadata.__fnct;
		              }

		              perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
		            }
		          }

		          endValue = nextKeyData.s || keyData.e;
		          keyValue = keyData.h === 1 ? keyData.s[i] : keyData.s[i] + (endValue[i] - keyData.s[i]) * perc;

		          if (this.propType === 'multidimensional') {
		            newValue[i] = keyValue;
		          } else {
		            newValue = keyValue;
		          }
		        }
		      }
		    }

		    caching.lastIndex = iterationIndex;
		    return newValue;
		  } // based on @Toji's https://github.com/toji/gl-matrix/


		  function slerp(a, b, t) {
		    var out = [];
		    var ax = a[0];
		    var ay = a[1];
		    var az = a[2];
		    var aw = a[3];
		    var bx = b[0];
		    var by = b[1];
		    var bz = b[2];
		    var bw = b[3];
		    var omega;
		    var cosom;
		    var sinom;
		    var scale0;
		    var scale1;
		    cosom = ax * bx + ay * by + az * bz + aw * bw;

		    if (cosom < 0.0) {
		      cosom = -cosom;
		      bx = -bx;
		      by = -by;
		      bz = -bz;
		      bw = -bw;
		    }

		    if (1.0 - cosom > 0.000001) {
		      omega = Math.acos(cosom);
		      sinom = Math.sin(omega);
		      scale0 = Math.sin((1.0 - t) * omega) / sinom;
		      scale1 = Math.sin(t * omega) / sinom;
		    } else {
		      scale0 = 1.0 - t;
		      scale1 = t;
		    }

		    out[0] = scale0 * ax + scale1 * bx;
		    out[1] = scale0 * ay + scale1 * by;
		    out[2] = scale0 * az + scale1 * bz;
		    out[3] = scale0 * aw + scale1 * bw;
		    return out;
		  }

		  function quaternionToEuler(out, quat) {
		    var qx = quat[0];
		    var qy = quat[1];
		    var qz = quat[2];
		    var qw = quat[3];
		    var heading = Math.atan2(2 * qy * qw - 2 * qx * qz, 1 - 2 * qy * qy - 2 * qz * qz);
		    var attitude = Math.asin(2 * qx * qy + 2 * qz * qw);
		    var bank = Math.atan2(2 * qx * qw - 2 * qy * qz, 1 - 2 * qx * qx - 2 * qz * qz);
		    out[0] = heading / degToRads;
		    out[1] = attitude / degToRads;
		    out[2] = bank / degToRads;
		  }

		  function createQuaternion(values) {
		    var heading = values[0] * degToRads;
		    var attitude = values[1] * degToRads;
		    var bank = values[2] * degToRads;
		    var c1 = Math.cos(heading / 2);
		    var c2 = Math.cos(attitude / 2);
		    var c3 = Math.cos(bank / 2);
		    var s1 = Math.sin(heading / 2);
		    var s2 = Math.sin(attitude / 2);
		    var s3 = Math.sin(bank / 2);
		    var w = c1 * c2 * c3 - s1 * s2 * s3;
		    var x = s1 * s2 * c3 + c1 * c2 * s3;
		    var y = s1 * c2 * c3 + c1 * s2 * s3;
		    var z = c1 * s2 * c3 - s1 * c2 * s3;
		    return [x, y, z, w];
		  }

		  function getValueAtCurrentTime() {
		    var frameNum = this.comp.renderedFrame - this.offsetTime;
		    var initTime = this.keyframes[0].t - this.offsetTime;
		    var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;

		    if (!(frameNum === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= endTime && frameNum >= endTime || this._caching.lastFrame < initTime && frameNum < initTime))) {
		      if (this._caching.lastFrame >= frameNum) {
		        this._caching._lastKeyframeIndex = -1;
		        this._caching.lastIndex = 0;
		      }

		      var renderResult = this.interpolateValue(frameNum, this._caching);
		      this.pv = renderResult;
		    }

		    this._caching.lastFrame = frameNum;
		    return this.pv;
		  }

		  function setVValue(val) {
		    var multipliedValue;

		    if (this.propType === 'unidimensional') {
		      multipliedValue = val * this.mult;

		      if (mathAbs(this.v - multipliedValue) > 0.00001) {
		        this.v = multipliedValue;
		        this._mdf = true;
		      }
		    } else {
		      var i = 0;
		      var len = this.v.length;

		      while (i < len) {
		        multipliedValue = val[i] * this.mult;

		        if (mathAbs(this.v[i] - multipliedValue) > 0.00001) {
		          this.v[i] = multipliedValue;
		          this._mdf = true;
		        }

		        i += 1;
		      }
		    }
		  }

		  function processEffectsSequence() {
		    if (this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) {
		      return;
		    }

		    if (this.lock) {
		      this.setVValue(this.pv);
		      return;
		    }

		    this.lock = true;
		    this._mdf = this._isFirstFrame;
		    var i;
		    var len = this.effectsSequence.length;
		    var finalValue = this.kf ? this.pv : this.data.k;

		    for (i = 0; i < len; i += 1) {
		      finalValue = this.effectsSequence[i](finalValue);
		    }

		    this.setVValue(finalValue);
		    this._isFirstFrame = false;
		    this.lock = false;
		    this.frameId = this.elem.globalData.frameId;
		  }

		  function addEffect(effectFunction) {
		    this.effectsSequence.push(effectFunction);
		    this.container.addDynamicProperty(this);
		  }

		  function ValueProperty(elem, data, mult, container) {
		    this.propType = 'unidimensional';
		    this.mult = mult || 1;
		    this.data = data;
		    this.v = mult ? data.k * mult : data.k;
		    this.pv = data.k;
		    this._mdf = false;
		    this.elem = elem;
		    this.container = container;
		    this.comp = elem.comp;
		    this.k = false;
		    this.kf = false;
		    this.vel = 0;
		    this.effectsSequence = [];
		    this._isFirstFrame = true;
		    this.getValue = processEffectsSequence;
		    this.setVValue = setVValue;
		    this.addEffect = addEffect;
		  }

		  function MultiDimensionalProperty(elem, data, mult, container) {
		    this.propType = 'multidimensional';
		    this.mult = mult || 1;
		    this.data = data;
		    this._mdf = false;
		    this.elem = elem;
		    this.container = container;
		    this.comp = elem.comp;
		    this.k = false;
		    this.kf = false;
		    this.frameId = -1;
		    var i;
		    var len = data.k.length;
		    this.v = createTypedArray('float32', len);
		    this.pv = createTypedArray('float32', len);
		    this.vel = createTypedArray('float32', len);

		    for (i = 0; i < len; i += 1) {
		      this.v[i] = data.k[i] * this.mult;
		      this.pv[i] = data.k[i];
		    }

		    this._isFirstFrame = true;
		    this.effectsSequence = [];
		    this.getValue = processEffectsSequence;
		    this.setVValue = setVValue;
		    this.addEffect = addEffect;
		  }

		  function KeyframedValueProperty(elem, data, mult, container) {
		    this.propType = 'unidimensional';
		    this.keyframes = data.k;
		    this.keyframesMetadata = [];
		    this.offsetTime = elem.data.st;
		    this.frameId = -1;
		    this._caching = {
		      lastFrame: initFrame,
		      lastIndex: 0,
		      value: 0,
		      _lastKeyframeIndex: -1
		    };
		    this.k = true;
		    this.kf = true;
		    this.data = data;
		    this.mult = mult || 1;
		    this.elem = elem;
		    this.container = container;
		    this.comp = elem.comp;
		    this.v = initFrame;
		    this.pv = initFrame;
		    this._isFirstFrame = true;
		    this.getValue = processEffectsSequence;
		    this.setVValue = setVValue;
		    this.interpolateValue = interpolateValue;
		    this.effectsSequence = [getValueAtCurrentTime.bind(this)];
		    this.addEffect = addEffect;
		  }

		  function KeyframedMultidimensionalProperty(elem, data, mult, container) {
		    this.propType = 'multidimensional';
		    var i;
		    var len = data.k.length;
		    var s;
		    var e;
		    var to;
		    var ti;

		    for (i = 0; i < len - 1; i += 1) {
		      if (data.k[i].to && data.k[i].s && data.k[i + 1] && data.k[i + 1].s) {
		        s = data.k[i].s;
		        e = data.k[i + 1].s;
		        to = data.k[i].to;
		        ti = data.k[i].ti;

		        if (s.length === 2 && !(s[0] === e[0] && s[1] === e[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], s[0] + to[0], s[1] + to[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], e[0] + ti[0], e[1] + ti[1]) || s.length === 3 && !(s[0] === e[0] && s[1] === e[1] && s[2] === e[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], s[0] + to[0], s[1] + to[1], s[2] + to[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], e[0] + ti[0], e[1] + ti[1], e[2] + ti[2])) {
		          data.k[i].to = null;
		          data.k[i].ti = null;
		        }

		        if (s[0] === e[0] && s[1] === e[1] && to[0] === 0 && to[1] === 0 && ti[0] === 0 && ti[1] === 0) {
		          if (s.length === 2 || s[2] === e[2] && to[2] === 0 && ti[2] === 0) {
		            data.k[i].to = null;
		            data.k[i].ti = null;
		          }
		        }
		      }
		    }

		    this.effectsSequence = [getValueAtCurrentTime.bind(this)];
		    this.data = data;
		    this.keyframes = data.k;
		    this.keyframesMetadata = [];
		    this.offsetTime = elem.data.st;
		    this.k = true;
		    this.kf = true;
		    this._isFirstFrame = true;
		    this.mult = mult || 1;
		    this.elem = elem;
		    this.container = container;
		    this.comp = elem.comp;
		    this.getValue = processEffectsSequence;
		    this.setVValue = setVValue;
		    this.interpolateValue = interpolateValue;
		    this.frameId = -1;
		    var arrLen = data.k[0].s.length;
		    this.v = createTypedArray('float32', arrLen);
		    this.pv = createTypedArray('float32', arrLen);

		    for (i = 0; i < arrLen; i += 1) {
		      this.v[i] = initFrame;
		      this.pv[i] = initFrame;
		    }

		    this._caching = {
		      lastFrame: initFrame,
		      lastIndex: 0,
		      value: createTypedArray('float32', arrLen)
		    };
		    this.addEffect = addEffect;
		  }

		  var PropertyFactory = function () {
		    function getProp(elem, data, type, mult, container) {
		      if (data.sid) {
		        data = elem.globalData.slotManager.getProp(data);
		      }

		      var p;

		      if (!data.k.length) {
		        p = new ValueProperty(elem, data, mult, container);
		      } else if (typeof data.k[0] === 'number') {
		        p = new MultiDimensionalProperty(elem, data, mult, container);
		      } else {
		        switch (type) {
		          case 0:
		            p = new KeyframedValueProperty(elem, data, mult, container);
		            break;

		          case 1:
		            p = new KeyframedMultidimensionalProperty(elem, data, mult, container);
		            break;
		        }
		      }

		      if (p.effectsSequence.length) {
		        container.addDynamicProperty(p);
		      }

		      return p;
		    }

		    var ob = {
		      getProp: getProp
		    };
		    return ob;
		  }();

		  function DynamicPropertyContainer() {}

		  DynamicPropertyContainer.prototype = {
		    addDynamicProperty: function addDynamicProperty(prop) {
		      if (this.dynamicProperties.indexOf(prop) === -1) {
		        this.dynamicProperties.push(prop);
		        this.container.addDynamicProperty(this);
		        this._isAnimated = true;
		      }
		    },
		    iterateDynamicProperties: function iterateDynamicProperties() {
		      this._mdf = false;
		      var i;
		      var len = this.dynamicProperties.length;

		      for (i = 0; i < len; i += 1) {
		        this.dynamicProperties[i].getValue();

		        if (this.dynamicProperties[i]._mdf) {
		          this._mdf = true;
		        }
		      }
		    },
		    initDynamicPropertyContainer: function initDynamicPropertyContainer(container) {
		      this.container = container;
		      this.dynamicProperties = [];
		      this._mdf = false;
		      this._isAnimated = false;
		    }
		  };

		  var pointPool = function () {
		    function create() {
		      return createTypedArray('float32', 2);
		    }

		    return poolFactory(8, create);
		  }();

		  function ShapePath() {
		    this.c = false;
		    this._length = 0;
		    this._maxLength = 8;
		    this.v = createSizedArray(this._maxLength);
		    this.o = createSizedArray(this._maxLength);
		    this.i = createSizedArray(this._maxLength);
		  }

		  ShapePath.prototype.setPathData = function (closed, len) {
		    this.c = closed;
		    this.setLength(len);
		    var i = 0;

		    while (i < len) {
		      this.v[i] = pointPool.newElement();
		      this.o[i] = pointPool.newElement();
		      this.i[i] = pointPool.newElement();
		      i += 1;
		    }
		  };

		  ShapePath.prototype.setLength = function (len) {
		    while (this._maxLength < len) {
		      this.doubleArrayLength();
		    }

		    this._length = len;
		  };

		  ShapePath.prototype.doubleArrayLength = function () {
		    this.v = this.v.concat(createSizedArray(this._maxLength));
		    this.i = this.i.concat(createSizedArray(this._maxLength));
		    this.o = this.o.concat(createSizedArray(this._maxLength));
		    this._maxLength *= 2;
		  };

		  ShapePath.prototype.setXYAt = function (x, y, type, pos, replace) {
		    var arr;
		    this._length = Math.max(this._length, pos + 1);

		    if (this._length >= this._maxLength) {
		      this.doubleArrayLength();
		    }

		    switch (type) {
		      case 'v':
		        arr = this.v;
		        break;

		      case 'i':
		        arr = this.i;
		        break;

		      case 'o':
		        arr = this.o;
		        break;

		      default:
		        arr = [];
		        break;
		    }

		    if (!arr[pos] || arr[pos] && !replace) {
		      arr[pos] = pointPool.newElement();
		    }

		    arr[pos][0] = x;
		    arr[pos][1] = y;
		  };

		  ShapePath.prototype.setTripleAt = function (vX, vY, oX, oY, iX, iY, pos, replace) {
		    this.setXYAt(vX, vY, 'v', pos, replace);
		    this.setXYAt(oX, oY, 'o', pos, replace);
		    this.setXYAt(iX, iY, 'i', pos, replace);
		  };

		  ShapePath.prototype.reverse = function () {
		    var newPath = new ShapePath();
		    newPath.setPathData(this.c, this._length);
		    var vertices = this.v;
		    var outPoints = this.o;
		    var inPoints = this.i;
		    var init = 0;

		    if (this.c) {
		      newPath.setTripleAt(vertices[0][0], vertices[0][1], inPoints[0][0], inPoints[0][1], outPoints[0][0], outPoints[0][1], 0, false);
		      init = 1;
		    }

		    var cnt = this._length - 1;
		    var len = this._length;
		    var i;

		    for (i = init; i < len; i += 1) {
		      newPath.setTripleAt(vertices[cnt][0], vertices[cnt][1], inPoints[cnt][0], inPoints[cnt][1], outPoints[cnt][0], outPoints[cnt][1], i, false);
		      cnt -= 1;
		    }

		    return newPath;
		  };

		  ShapePath.prototype.length = function () {
		    return this._length;
		  };

		  var shapePool = function () {
		    function create() {
		      return new ShapePath();
		    }

		    function release(shapePath) {
		      var len = shapePath._length;
		      var i;

		      for (i = 0; i < len; i += 1) {
		        pointPool.release(shapePath.v[i]);
		        pointPool.release(shapePath.i[i]);
		        pointPool.release(shapePath.o[i]);
		        shapePath.v[i] = null;
		        shapePath.i[i] = null;
		        shapePath.o[i] = null;
		      }

		      shapePath._length = 0;
		      shapePath.c = false;
		    }

		    function clone(shape) {
		      var cloned = factory.newElement();
		      var i;
		      var len = shape._length === undefined ? shape.v.length : shape._length;
		      cloned.setLength(len);
		      cloned.c = shape.c;

		      for (i = 0; i < len; i += 1) {
		        cloned.setTripleAt(shape.v[i][0], shape.v[i][1], shape.o[i][0], shape.o[i][1], shape.i[i][0], shape.i[i][1], i);
		      }

		      return cloned;
		    }

		    var factory = poolFactory(4, create, release);
		    factory.clone = clone;
		    return factory;
		  }();

		  function ShapeCollection() {
		    this._length = 0;
		    this._maxLength = 4;
		    this.shapes = createSizedArray(this._maxLength);
		  }

		  ShapeCollection.prototype.addShape = function (shapeData) {
		    if (this._length === this._maxLength) {
		      this.shapes = this.shapes.concat(createSizedArray(this._maxLength));
		      this._maxLength *= 2;
		    }

		    this.shapes[this._length] = shapeData;
		    this._length += 1;
		  };

		  ShapeCollection.prototype.releaseShapes = function () {
		    var i;

		    for (i = 0; i < this._length; i += 1) {
		      shapePool.release(this.shapes[i]);
		    }

		    this._length = 0;
		  };

		  var shapeCollectionPool = function () {
		    var ob = {
		      newShapeCollection: newShapeCollection,
		      release: release
		    };
		    var _length = 0;
		    var _maxLength = 4;
		    var pool = createSizedArray(_maxLength);

		    function newShapeCollection() {
		      var shapeCollection;

		      if (_length) {
		        _length -= 1;
		        shapeCollection = pool[_length];
		      } else {
		        shapeCollection = new ShapeCollection();
		      }

		      return shapeCollection;
		    }

		    function release(shapeCollection) {
		      var i;
		      var len = shapeCollection._length;

		      for (i = 0; i < len; i += 1) {
		        shapePool.release(shapeCollection.shapes[i]);
		      }

		      shapeCollection._length = 0;

		      if (_length === _maxLength) {
		        pool = pooling["double"](pool);
		        _maxLength *= 2;
		      }

		      pool[_length] = shapeCollection;
		      _length += 1;
		    }

		    return ob;
		  }();

		  var ShapePropertyFactory = function () {
		    var initFrame = -999999;

		    function interpolateShape(frameNum, previousValue, caching) {
		      var iterationIndex = caching.lastIndex;
		      var keyPropS;
		      var keyPropE;
		      var isHold;
		      var j;
		      var k;
		      var jLen;
		      var kLen;
		      var perc;
		      var vertexValue;
		      var kf = this.keyframes;

		      if (frameNum < kf[0].t - this.offsetTime) {
		        keyPropS = kf[0].s[0];
		        isHold = true;
		        iterationIndex = 0;
		      } else if (frameNum >= kf[kf.length - 1].t - this.offsetTime) {
		        keyPropS = kf[kf.length - 1].s ? kf[kf.length - 1].s[0] : kf[kf.length - 2].e[0];
		        /* if(kf[kf.length - 1].s){
		                  keyPropS = kf[kf.length - 1].s[0];
		              }else{
		                  keyPropS = kf[kf.length - 2].e[0];
		              } */

		        isHold = true;
		      } else {
		        var i = iterationIndex;
		        var len = kf.length - 1;
		        var flag = true;
		        var keyData;
		        var nextKeyData;
		        var keyframeMetadata;

		        while (flag) {
		          keyData = kf[i];
		          nextKeyData = kf[i + 1];

		          if (nextKeyData.t - this.offsetTime > frameNum) {
		            break;
		          }

		          if (i < len - 1) {
		            i += 1;
		          } else {
		            flag = false;
		          }
		        }

		        keyframeMetadata = this.keyframesMetadata[i] || {};
		        isHold = keyData.h === 1;
		        iterationIndex = i;

		        if (!isHold) {
		          if (frameNum >= nextKeyData.t - this.offsetTime) {
		            perc = 1;
		          } else if (frameNum < keyData.t - this.offsetTime) {
		            perc = 0;
		          } else {
		            var fnc;

		            if (keyframeMetadata.__fnct) {
		              fnc = keyframeMetadata.__fnct;
		            } else {
		              fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y).get;
		              keyframeMetadata.__fnct = fnc;
		            }

		            perc = fnc((frameNum - (keyData.t - this.offsetTime)) / (nextKeyData.t - this.offsetTime - (keyData.t - this.offsetTime)));
		          }

		          keyPropE = nextKeyData.s ? nextKeyData.s[0] : keyData.e[0];
		        }

		        keyPropS = keyData.s[0];
		      }

		      jLen = previousValue._length;
		      kLen = keyPropS.i[0].length;
		      caching.lastIndex = iterationIndex;

		      for (j = 0; j < jLen; j += 1) {
		        for (k = 0; k < kLen; k += 1) {
		          vertexValue = isHold ? keyPropS.i[j][k] : keyPropS.i[j][k] + (keyPropE.i[j][k] - keyPropS.i[j][k]) * perc;
		          previousValue.i[j][k] = vertexValue;
		          vertexValue = isHold ? keyPropS.o[j][k] : keyPropS.o[j][k] + (keyPropE.o[j][k] - keyPropS.o[j][k]) * perc;
		          previousValue.o[j][k] = vertexValue;
		          vertexValue = isHold ? keyPropS.v[j][k] : keyPropS.v[j][k] + (keyPropE.v[j][k] - keyPropS.v[j][k]) * perc;
		          previousValue.v[j][k] = vertexValue;
		        }
		      }
		    }

		    function interpolateShapeCurrentTime() {
		      var frameNum = this.comp.renderedFrame - this.offsetTime;
		      var initTime = this.keyframes[0].t - this.offsetTime;
		      var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
		      var lastFrame = this._caching.lastFrame;

		      if (!(lastFrame !== initFrame && (lastFrame < initTime && frameNum < initTime || lastFrame > endTime && frameNum > endTime))) {
		        /// /
		        this._caching.lastIndex = lastFrame < frameNum ? this._caching.lastIndex : 0;
		        this.interpolateShape(frameNum, this.pv, this._caching); /// /
		      }

		      this._caching.lastFrame = frameNum;
		      return this.pv;
		    }

		    function resetShape() {
		      this.paths = this.localShapeCollection;
		    }

		    function shapesEqual(shape1, shape2) {
		      if (shape1._length !== shape2._length || shape1.c !== shape2.c) {
		        return false;
		      }

		      var i;
		      var len = shape1._length;

		      for (i = 0; i < len; i += 1) {
		        if (shape1.v[i][0] !== shape2.v[i][0] || shape1.v[i][1] !== shape2.v[i][1] || shape1.o[i][0] !== shape2.o[i][0] || shape1.o[i][1] !== shape2.o[i][1] || shape1.i[i][0] !== shape2.i[i][0] || shape1.i[i][1] !== shape2.i[i][1]) {
		          return false;
		        }
		      }

		      return true;
		    }

		    function setVValue(newPath) {
		      if (!shapesEqual(this.v, newPath)) {
		        this.v = shapePool.clone(newPath);
		        this.localShapeCollection.releaseShapes();
		        this.localShapeCollection.addShape(this.v);
		        this._mdf = true;
		        this.paths = this.localShapeCollection;
		      }
		    }

		    function processEffectsSequence() {
		      if (this.elem.globalData.frameId === this.frameId) {
		        return;
		      }

		      if (!this.effectsSequence.length) {
		        this._mdf = false;
		        return;
		      }

		      if (this.lock) {
		        this.setVValue(this.pv);
		        return;
		      }

		      this.lock = true;
		      this._mdf = false;
		      var finalValue;

		      if (this.kf) {
		        finalValue = this.pv;
		      } else if (this.data.ks) {
		        finalValue = this.data.ks.k;
		      } else {
		        finalValue = this.data.pt.k;
		      }

		      var i;
		      var len = this.effectsSequence.length;

		      for (i = 0; i < len; i += 1) {
		        finalValue = this.effectsSequence[i](finalValue);
		      }

		      this.setVValue(finalValue);
		      this.lock = false;
		      this.frameId = this.elem.globalData.frameId;
		    }

		    function ShapeProperty(elem, data, type) {
		      this.propType = 'shape';
		      this.comp = elem.comp;
		      this.container = elem;
		      this.elem = elem;
		      this.data = data;
		      this.k = false;
		      this.kf = false;
		      this._mdf = false;
		      var pathData = type === 3 ? data.pt.k : data.ks.k;
		      this.v = shapePool.clone(pathData);
		      this.pv = shapePool.clone(this.v);
		      this.localShapeCollection = shapeCollectionPool.newShapeCollection();
		      this.paths = this.localShapeCollection;
		      this.paths.addShape(this.v);
		      this.reset = resetShape;
		      this.effectsSequence = [];
		    }

		    function addEffect(effectFunction) {
		      this.effectsSequence.push(effectFunction);
		      this.container.addDynamicProperty(this);
		    }

		    ShapeProperty.prototype.interpolateShape = interpolateShape;
		    ShapeProperty.prototype.getValue = processEffectsSequence;
		    ShapeProperty.prototype.setVValue = setVValue;
		    ShapeProperty.prototype.addEffect = addEffect;

		    function KeyframedShapeProperty(elem, data, type) {
		      this.propType = 'shape';
		      this.comp = elem.comp;
		      this.elem = elem;
		      this.container = elem;
		      this.offsetTime = elem.data.st;
		      this.keyframes = type === 3 ? data.pt.k : data.ks.k;
		      this.keyframesMetadata = [];
		      this.k = true;
		      this.kf = true;
		      var len = this.keyframes[0].s[0].i.length;
		      this.v = shapePool.newElement();
		      this.v.setPathData(this.keyframes[0].s[0].c, len);
		      this.pv = shapePool.clone(this.v);
		      this.localShapeCollection = shapeCollectionPool.newShapeCollection();
		      this.paths = this.localShapeCollection;
		      this.paths.addShape(this.v);
		      this.lastFrame = initFrame;
		      this.reset = resetShape;
		      this._caching = {
		        lastFrame: initFrame,
		        lastIndex: 0
		      };
		      this.effectsSequence = [interpolateShapeCurrentTime.bind(this)];
		    }

		    KeyframedShapeProperty.prototype.getValue = processEffectsSequence;
		    KeyframedShapeProperty.prototype.interpolateShape = interpolateShape;
		    KeyframedShapeProperty.prototype.setVValue = setVValue;
		    KeyframedShapeProperty.prototype.addEffect = addEffect;

		    var EllShapeProperty = function () {
		      var cPoint = roundCorner;

		      function EllShapePropertyFactory(elem, data) {
		        this.v = shapePool.newElement();
		        this.v.setPathData(true, 4);
		        this.localShapeCollection = shapeCollectionPool.newShapeCollection();
		        this.paths = this.localShapeCollection;
		        this.localShapeCollection.addShape(this.v);
		        this.d = data.d;
		        this.elem = elem;
		        this.comp = elem.comp;
		        this.frameId = -1;
		        this.initDynamicPropertyContainer(elem);
		        this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
		        this.s = PropertyFactory.getProp(elem, data.s, 1, 0, this);

		        if (this.dynamicProperties.length) {
		          this.k = true;
		        } else {
		          this.k = false;
		          this.convertEllToPath();
		        }
		      }

		      EllShapePropertyFactory.prototype = {
		        reset: resetShape,
		        getValue: function getValue() {
		          if (this.elem.globalData.frameId === this.frameId) {
		            return;
		          }

		          this.frameId = this.elem.globalData.frameId;
		          this.iterateDynamicProperties();

		          if (this._mdf) {
		            this.convertEllToPath();
		          }
		        },
		        convertEllToPath: function convertEllToPath() {
		          var p0 = this.p.v[0];
		          var p1 = this.p.v[1];
		          var s0 = this.s.v[0] / 2;
		          var s1 = this.s.v[1] / 2;

		          var _cw = this.d !== 3;

		          var _v = this.v;
		          _v.v[0][0] = p0;
		          _v.v[0][1] = p1 - s1;
		          _v.v[1][0] = _cw ? p0 + s0 : p0 - s0;
		          _v.v[1][1] = p1;
		          _v.v[2][0] = p0;
		          _v.v[2][1] = p1 + s1;
		          _v.v[3][0] = _cw ? p0 - s0 : p0 + s0;
		          _v.v[3][1] = p1;
		          _v.i[0][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
		          _v.i[0][1] = p1 - s1;
		          _v.i[1][0] = _cw ? p0 + s0 : p0 - s0;
		          _v.i[1][1] = p1 - s1 * cPoint;
		          _v.i[2][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
		          _v.i[2][1] = p1 + s1;
		          _v.i[3][0] = _cw ? p0 - s0 : p0 + s0;
		          _v.i[3][1] = p1 + s1 * cPoint;
		          _v.o[0][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
		          _v.o[0][1] = p1 - s1;
		          _v.o[1][0] = _cw ? p0 + s0 : p0 - s0;
		          _v.o[1][1] = p1 + s1 * cPoint;
		          _v.o[2][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
		          _v.o[2][1] = p1 + s1;
		          _v.o[3][0] = _cw ? p0 - s0 : p0 + s0;
		          _v.o[3][1] = p1 - s1 * cPoint;
		        }
		      };
		      extendPrototype([DynamicPropertyContainer], EllShapePropertyFactory);
		      return EllShapePropertyFactory;
		    }();

		    var StarShapeProperty = function () {
		      function StarShapePropertyFactory(elem, data) {
		        this.v = shapePool.newElement();
		        this.v.setPathData(true, 0);
		        this.elem = elem;
		        this.comp = elem.comp;
		        this.data = data;
		        this.frameId = -1;
		        this.d = data.d;
		        this.initDynamicPropertyContainer(elem);

		        if (data.sy === 1) {
		          this.ir = PropertyFactory.getProp(elem, data.ir, 0, 0, this);
		          this.is = PropertyFactory.getProp(elem, data.is, 0, 0.01, this);
		          this.convertToPath = this.convertStarToPath;
		        } else {
		          this.convertToPath = this.convertPolygonToPath;
		        }

		        this.pt = PropertyFactory.getProp(elem, data.pt, 0, 0, this);
		        this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
		        this.r = PropertyFactory.getProp(elem, data.r, 0, degToRads, this);
		        this.or = PropertyFactory.getProp(elem, data.or, 0, 0, this);
		        this.os = PropertyFactory.getProp(elem, data.os, 0, 0.01, this);
		        this.localShapeCollection = shapeCollectionPool.newShapeCollection();
		        this.localShapeCollection.addShape(this.v);
		        this.paths = this.localShapeCollection;

		        if (this.dynamicProperties.length) {
		          this.k = true;
		        } else {
		          this.k = false;
		          this.convertToPath();
		        }
		      }

		      StarShapePropertyFactory.prototype = {
		        reset: resetShape,
		        getValue: function getValue() {
		          if (this.elem.globalData.frameId === this.frameId) {
		            return;
		          }

		          this.frameId = this.elem.globalData.frameId;
		          this.iterateDynamicProperties();

		          if (this._mdf) {
		            this.convertToPath();
		          }
		        },
		        convertStarToPath: function convertStarToPath() {
		          var numPts = Math.floor(this.pt.v) * 2;
		          var angle = Math.PI * 2 / numPts;
		          /* this.v.v.length = numPts;
		                  this.v.i.length = numPts;
		                  this.v.o.length = numPts; */

		          var longFlag = true;
		          var longRad = this.or.v;
		          var shortRad = this.ir.v;
		          var longRound = this.os.v;
		          var shortRound = this.is.v;
		          var longPerimSegment = 2 * Math.PI * longRad / (numPts * 2);
		          var shortPerimSegment = 2 * Math.PI * shortRad / (numPts * 2);
		          var i;
		          var rad;
		          var roundness;
		          var perimSegment;
		          var currentAng = -Math.PI / 2;
		          currentAng += this.r.v;
		          var dir = this.data.d === 3 ? -1 : 1;
		          this.v._length = 0;

		          for (i = 0; i < numPts; i += 1) {
		            rad = longFlag ? longRad : shortRad;
		            roundness = longFlag ? longRound : shortRound;
		            perimSegment = longFlag ? longPerimSegment : shortPerimSegment;
		            var x = rad * Math.cos(currentAng);
		            var y = rad * Math.sin(currentAng);
		            var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
		            var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
		            x += +this.p.v[0];
		            y += +this.p.v[1];
		            this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);
		            /* this.v.v[i] = [x,y];
		                      this.v.i[i] = [x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir];
		                      this.v.o[i] = [x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir];
		                      this.v._length = numPts; */

		            longFlag = !longFlag;
		            currentAng += angle * dir;
		          }
		        },
		        convertPolygonToPath: function convertPolygonToPath() {
		          var numPts = Math.floor(this.pt.v);
		          var angle = Math.PI * 2 / numPts;
		          var rad = this.or.v;
		          var roundness = this.os.v;
		          var perimSegment = 2 * Math.PI * rad / (numPts * 4);
		          var i;
		          var currentAng = -Math.PI * 0.5;
		          var dir = this.data.d === 3 ? -1 : 1;
		          currentAng += this.r.v;
		          this.v._length = 0;

		          for (i = 0; i < numPts; i += 1) {
		            var x = rad * Math.cos(currentAng);
		            var y = rad * Math.sin(currentAng);
		            var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
		            var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
		            x += +this.p.v[0];
		            y += +this.p.v[1];
		            this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);
		            currentAng += angle * dir;
		          }

		          this.paths.length = 0;
		          this.paths[0] = this.v;
		        }
		      };
		      extendPrototype([DynamicPropertyContainer], StarShapePropertyFactory);
		      return StarShapePropertyFactory;
		    }();

		    var RectShapeProperty = function () {
		      function RectShapePropertyFactory(elem, data) {
		        this.v = shapePool.newElement();
		        this.v.c = true;
		        this.localShapeCollection = shapeCollectionPool.newShapeCollection();
		        this.localShapeCollection.addShape(this.v);
		        this.paths = this.localShapeCollection;
		        this.elem = elem;
		        this.comp = elem.comp;
		        this.frameId = -1;
		        this.d = data.d;
		        this.initDynamicPropertyContainer(elem);
		        this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
		        this.s = PropertyFactory.getProp(elem, data.s, 1, 0, this);
		        this.r = PropertyFactory.getProp(elem, data.r, 0, 0, this);

		        if (this.dynamicProperties.length) {
		          this.k = true;
		        } else {
		          this.k = false;
		          this.convertRectToPath();
		        }
		      }

		      RectShapePropertyFactory.prototype = {
		        convertRectToPath: function convertRectToPath() {
		          var p0 = this.p.v[0];
		          var p1 = this.p.v[1];
		          var v0 = this.s.v[0] / 2;
		          var v1 = this.s.v[1] / 2;
		          var round = bmMin(v0, v1, this.r.v);
		          var cPoint = round * (1 - roundCorner);
		          this.v._length = 0;

		          if (this.d === 2 || this.d === 1) {
		            this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, 0, true);
		            this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, p0 + v0, p1 + v1 - round, 1, true);

		            if (round !== 0) {
		              this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, 2, true);
		              this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0 + round, p1 + v1, 3, true);
		              this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, 4, true);
		              this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1 + round, 5, true);
		              this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, 6, true);
		              this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, p0 + v0 - round, p1 - v1, 7, true);
		            } else {
		              this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0, p1 + v1, 2);
		              this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1, 3);
		            }
		          } else {
		            this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, p0 + v0, p1 - v1 + round, 0, true);

		            if (round !== 0) {
		              this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, 1, true);
		              this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0 + round, p1 - v1, 2, true);
		              this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, 3, true);
		              this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1 - round, 4, true);
		              this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, 5, true);
		              this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0 - round, p1 + v1, 6, true);
		              this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, 7, true);
		            } else {
		              this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0, p1 - v1, 1, true);
		              this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1, 2, true);
		              this.v.setTripleAt(p0 + v0, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0, p1 + v1, 3, true);
		            }
		          }
		        },
		        getValue: function getValue() {
		          if (this.elem.globalData.frameId === this.frameId) {
		            return;
		          }

		          this.frameId = this.elem.globalData.frameId;
		          this.iterateDynamicProperties();

		          if (this._mdf) {
		            this.convertRectToPath();
		          }
		        },
		        reset: resetShape
		      };
		      extendPrototype([DynamicPropertyContainer], RectShapePropertyFactory);
		      return RectShapePropertyFactory;
		    }();

		    function getShapeProp(elem, data, type) {
		      var prop;

		      if (type === 3 || type === 4) {
		        var dataProp = type === 3 ? data.pt : data.ks;
		        var keys = dataProp.k;

		        if (keys.length) {
		          prop = new KeyframedShapeProperty(elem, data, type);
		        } else {
		          prop = new ShapeProperty(elem, data, type);
		        }
		      } else if (type === 5) {
		        prop = new RectShapeProperty(elem, data);
		      } else if (type === 6) {
		        prop = new EllShapeProperty(elem, data);
		      } else if (type === 7) {
		        prop = new StarShapeProperty(elem, data);
		      }

		      if (prop.k) {
		        elem.addDynamicProperty(prop);
		      }

		      return prop;
		    }

		    function getConstructorFunction() {
		      return ShapeProperty;
		    }

		    function getKeyframedConstructorFunction() {
		      return KeyframedShapeProperty;
		    }

		    var ob = {};
		    ob.getShapeProp = getShapeProp;
		    ob.getConstructorFunction = getConstructorFunction;
		    ob.getKeyframedConstructorFunction = getKeyframedConstructorFunction;
		    return ob;
		  }();

		  /*!
		   Transformation Matrix v2.0
		   (c) Epistemex 2014-2015
		   www.epistemex.com
		   By Ken Fyrstenberg
		   Contributions by leeoniya.
		   License: MIT, header required.
		   */

		  /**
		   * 2D transformation matrix object initialized with identity matrix.
		   *
		   * The matrix can synchronize a canvas context by supplying the context
		   * as an argument, or later apply current absolute transform to an
		   * existing context.
		   *
		   * All values are handled as floating point values.
		   *
		   * @param {CanvasRenderingContext2D} [context] - Optional context to sync with Matrix
		   * @prop {number} a - scale x
		   * @prop {number} b - shear y
		   * @prop {number} c - shear x
		   * @prop {number} d - scale y
		   * @prop {number} e - translate x
		   * @prop {number} f - translate y
		   * @prop {CanvasRenderingContext2D|null} [context=null] - set or get current canvas context
		   * @constructor
		   */

		  var Matrix = function () {
		    var _cos = Math.cos;
		    var _sin = Math.sin;
		    var _tan = Math.tan;
		    var _rnd = Math.round;

		    function reset() {
		      this.props[0] = 1;
		      this.props[1] = 0;
		      this.props[2] = 0;
		      this.props[3] = 0;
		      this.props[4] = 0;
		      this.props[5] = 1;
		      this.props[6] = 0;
		      this.props[7] = 0;
		      this.props[8] = 0;
		      this.props[9] = 0;
		      this.props[10] = 1;
		      this.props[11] = 0;
		      this.props[12] = 0;
		      this.props[13] = 0;
		      this.props[14] = 0;
		      this.props[15] = 1;
		      return this;
		    }

		    function rotate(angle) {
		      if (angle === 0) {
		        return this;
		      }

		      var mCos = _cos(angle);

		      var mSin = _sin(angle);

		      return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		    }

		    function rotateX(angle) {
		      if (angle === 0) {
		        return this;
		      }

		      var mCos = _cos(angle);

		      var mSin = _sin(angle);

		      return this._t(1, 0, 0, 0, 0, mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1);
		    }

		    function rotateY(angle) {
		      if (angle === 0) {
		        return this;
		      }

		      var mCos = _cos(angle);

		      var mSin = _sin(angle);

		      return this._t(mCos, 0, mSin, 0, 0, 1, 0, 0, -mSin, 0, mCos, 0, 0, 0, 0, 1);
		    }

		    function rotateZ(angle) {
		      if (angle === 0) {
		        return this;
		      }

		      var mCos = _cos(angle);

		      var mSin = _sin(angle);

		      return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		    }

		    function shear(sx, sy) {
		      return this._t(1, sy, sx, 1, 0, 0);
		    }

		    function skew(ax, ay) {
		      return this.shear(_tan(ax), _tan(ay));
		    }

		    function skewFromAxis(ax, angle) {
		      var mCos = _cos(angle);

		      var mSin = _sin(angle);

		      return this._t(mCos, mSin, 0, 0, -mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, _tan(ax), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); // return this._t(mCos, mSin, -mSin, mCos, 0, 0)._t(1, 0, _tan(ax), 1, 0, 0)._t(mCos, -mSin, mSin, mCos, 0, 0);
		    }

		    function scale(sx, sy, sz) {
		      if (!sz && sz !== 0) {
		        sz = 1;
		      }

		      if (sx === 1 && sy === 1 && sz === 1) {
		        return this;
		      }

		      return this._t(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1);
		    }

		    function setTransform(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
		      this.props[0] = a;
		      this.props[1] = b;
		      this.props[2] = c;
		      this.props[3] = d;
		      this.props[4] = e;
		      this.props[5] = f;
		      this.props[6] = g;
		      this.props[7] = h;
		      this.props[8] = i;
		      this.props[9] = j;
		      this.props[10] = k;
		      this.props[11] = l;
		      this.props[12] = m;
		      this.props[13] = n;
		      this.props[14] = o;
		      this.props[15] = p;
		      return this;
		    }

		    function translate(tx, ty, tz) {
		      tz = tz || 0;

		      if (tx !== 0 || ty !== 0 || tz !== 0) {
		        return this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1);
		      }

		      return this;
		    }

		    function transform(a2, b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2) {
		      var _p = this.props;

		      if (a2 === 1 && b2 === 0 && c2 === 0 && d2 === 0 && e2 === 0 && f2 === 1 && g2 === 0 && h2 === 0 && i2 === 0 && j2 === 0 && k2 === 1 && l2 === 0) {
		        // NOTE: commenting this condition because TurboFan deoptimizes code when present
		        // if(m2 !== 0 || n2 !== 0 || o2 !== 0){
		        _p[12] = _p[12] * a2 + _p[15] * m2;
		        _p[13] = _p[13] * f2 + _p[15] * n2;
		        _p[14] = _p[14] * k2 + _p[15] * o2;
		        _p[15] *= p2; // }

		        this._identityCalculated = false;
		        return this;
		      }

		      var a1 = _p[0];
		      var b1 = _p[1];
		      var c1 = _p[2];
		      var d1 = _p[3];
		      var e1 = _p[4];
		      var f1 = _p[5];
		      var g1 = _p[6];
		      var h1 = _p[7];
		      var i1 = _p[8];
		      var j1 = _p[9];
		      var k1 = _p[10];
		      var l1 = _p[11];
		      var m1 = _p[12];
		      var n1 = _p[13];
		      var o1 = _p[14];
		      var p1 = _p[15];
		      /* matrix order (canvas compatible):
		           * ace
		           * bdf
		           * 001
		           */

		      _p[0] = a1 * a2 + b1 * e2 + c1 * i2 + d1 * m2;
		      _p[1] = a1 * b2 + b1 * f2 + c1 * j2 + d1 * n2;
		      _p[2] = a1 * c2 + b1 * g2 + c1 * k2 + d1 * o2;
		      _p[3] = a1 * d2 + b1 * h2 + c1 * l2 + d1 * p2;
		      _p[4] = e1 * a2 + f1 * e2 + g1 * i2 + h1 * m2;
		      _p[5] = e1 * b2 + f1 * f2 + g1 * j2 + h1 * n2;
		      _p[6] = e1 * c2 + f1 * g2 + g1 * k2 + h1 * o2;
		      _p[7] = e1 * d2 + f1 * h2 + g1 * l2 + h1 * p2;
		      _p[8] = i1 * a2 + j1 * e2 + k1 * i2 + l1 * m2;
		      _p[9] = i1 * b2 + j1 * f2 + k1 * j2 + l1 * n2;
		      _p[10] = i1 * c2 + j1 * g2 + k1 * k2 + l1 * o2;
		      _p[11] = i1 * d2 + j1 * h2 + k1 * l2 + l1 * p2;
		      _p[12] = m1 * a2 + n1 * e2 + o1 * i2 + p1 * m2;
		      _p[13] = m1 * b2 + n1 * f2 + o1 * j2 + p1 * n2;
		      _p[14] = m1 * c2 + n1 * g2 + o1 * k2 + p1 * o2;
		      _p[15] = m1 * d2 + n1 * h2 + o1 * l2 + p1 * p2;
		      this._identityCalculated = false;
		      return this;
		    }

		    function multiply(matrix) {
		      var matrixProps = matrix.props;
		      return this.transform(matrixProps[0], matrixProps[1], matrixProps[2], matrixProps[3], matrixProps[4], matrixProps[5], matrixProps[6], matrixProps[7], matrixProps[8], matrixProps[9], matrixProps[10], matrixProps[11], matrixProps[12], matrixProps[13], matrixProps[14], matrixProps[15]);
		    }

		    function isIdentity() {
		      if (!this._identityCalculated) {
		        this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1);
		        this._identityCalculated = true;
		      }

		      return this._identity;
		    }

		    function equals(matr) {
		      var i = 0;

		      while (i < 16) {
		        if (matr.props[i] !== this.props[i]) {
		          return false;
		        }

		        i += 1;
		      }

		      return true;
		    }

		    function clone(matr) {
		      var i;

		      for (i = 0; i < 16; i += 1) {
		        matr.props[i] = this.props[i];
		      }

		      return matr;
		    }

		    function cloneFromProps(props) {
		      var i;

		      for (i = 0; i < 16; i += 1) {
		        this.props[i] = props[i];
		      }
		    }

		    function applyToPoint(x, y, z) {
		      return {
		        x: x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12],
		        y: x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13],
		        z: x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]
		      };
		      /* return {
		           x: x * me.a + y * me.c + me.e,
		           y: x * me.b + y * me.d + me.f
		           }; */
		    }

		    function applyToX(x, y, z) {
		      return x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12];
		    }

		    function applyToY(x, y, z) {
		      return x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13];
		    }

		    function applyToZ(x, y, z) {
		      return x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14];
		    }

		    function getInverseMatrix() {
		      var determinant = this.props[0] * this.props[5] - this.props[1] * this.props[4];
		      var a = this.props[5] / determinant;
		      var b = -this.props[1] / determinant;
		      var c = -this.props[4] / determinant;
		      var d = this.props[0] / determinant;
		      var e = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / determinant;
		      var f = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / determinant;
		      var inverseMatrix = new Matrix();
		      inverseMatrix.props[0] = a;
		      inverseMatrix.props[1] = b;
		      inverseMatrix.props[4] = c;
		      inverseMatrix.props[5] = d;
		      inverseMatrix.props[12] = e;
		      inverseMatrix.props[13] = f;
		      return inverseMatrix;
		    }

		    function inversePoint(pt) {
		      var inverseMatrix = this.getInverseMatrix();
		      return inverseMatrix.applyToPointArray(pt[0], pt[1], pt[2] || 0);
		    }

		    function inversePoints(pts) {
		      var i;
		      var len = pts.length;
		      var retPts = [];

		      for (i = 0; i < len; i += 1) {
		        retPts[i] = inversePoint(pts[i]);
		      }

		      return retPts;
		    }

		    function applyToTriplePoints(pt1, pt2, pt3) {
		      var arr = createTypedArray('float32', 6);

		      if (this.isIdentity()) {
		        arr[0] = pt1[0];
		        arr[1] = pt1[1];
		        arr[2] = pt2[0];
		        arr[3] = pt2[1];
		        arr[4] = pt3[0];
		        arr[5] = pt3[1];
		      } else {
		        var p0 = this.props[0];
		        var p1 = this.props[1];
		        var p4 = this.props[4];
		        var p5 = this.props[5];
		        var p12 = this.props[12];
		        var p13 = this.props[13];
		        arr[0] = pt1[0] * p0 + pt1[1] * p4 + p12;
		        arr[1] = pt1[0] * p1 + pt1[1] * p5 + p13;
		        arr[2] = pt2[0] * p0 + pt2[1] * p4 + p12;
		        arr[3] = pt2[0] * p1 + pt2[1] * p5 + p13;
		        arr[4] = pt3[0] * p0 + pt3[1] * p4 + p12;
		        arr[5] = pt3[0] * p1 + pt3[1] * p5 + p13;
		      }

		      return arr;
		    }

		    function applyToPointArray(x, y, z) {
		      var arr;

		      if (this.isIdentity()) {
		        arr = [x, y, z];
		      } else {
		        arr = [x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12], x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13], x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]];
		      }

		      return arr;
		    }

		    function applyToPointStringified(x, y) {
		      if (this.isIdentity()) {
		        return x + ',' + y;
		      }

		      var _p = this.props;
		      return Math.round((x * _p[0] + y * _p[4] + _p[12]) * 100) / 100 + ',' + Math.round((x * _p[1] + y * _p[5] + _p[13]) * 100) / 100;
		    }

		    function toCSS() {
		      // Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.

		      /* if(this.isIdentity()) {
		              return '';
		          } */
		      var i = 0;
		      var props = this.props;
		      var cssValue = 'matrix3d(';
		      var v = 10000;

		      while (i < 16) {
		        cssValue += _rnd(props[i] * v) / v;
		        cssValue += i === 15 ? ')' : ',';
		        i += 1;
		      }

		      return cssValue;
		    }

		    function roundMatrixProperty(val) {
		      var v = 10000;

		      if (val < 0.000001 && val > 0 || val > -0.000001 && val < 0) {
		        return _rnd(val * v) / v;
		      }

		      return val;
		    }

		    function to2dCSS() {
		      // Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.

		      /* if(this.isIdentity()) {
		              return '';
		          } */
		      var props = this.props;

		      var _a = roundMatrixProperty(props[0]);

		      var _b = roundMatrixProperty(props[1]);

		      var _c = roundMatrixProperty(props[4]);

		      var _d = roundMatrixProperty(props[5]);

		      var _e = roundMatrixProperty(props[12]);

		      var _f = roundMatrixProperty(props[13]);

		      return 'matrix(' + _a + ',' + _b + ',' + _c + ',' + _d + ',' + _e + ',' + _f + ')';
		    }

		    return function () {
		      this.reset = reset;
		      this.rotate = rotate;
		      this.rotateX = rotateX;
		      this.rotateY = rotateY;
		      this.rotateZ = rotateZ;
		      this.skew = skew;
		      this.skewFromAxis = skewFromAxis;
		      this.shear = shear;
		      this.scale = scale;
		      this.setTransform = setTransform;
		      this.translate = translate;
		      this.transform = transform;
		      this.multiply = multiply;
		      this.applyToPoint = applyToPoint;
		      this.applyToX = applyToX;
		      this.applyToY = applyToY;
		      this.applyToZ = applyToZ;
		      this.applyToPointArray = applyToPointArray;
		      this.applyToTriplePoints = applyToTriplePoints;
		      this.applyToPointStringified = applyToPointStringified;
		      this.toCSS = toCSS;
		      this.to2dCSS = to2dCSS;
		      this.clone = clone;
		      this.cloneFromProps = cloneFromProps;
		      this.equals = equals;
		      this.inversePoints = inversePoints;
		      this.inversePoint = inversePoint;
		      this.getInverseMatrix = getInverseMatrix;
		      this._t = this.transform;
		      this.isIdentity = isIdentity;
		      this._identity = true;
		      this._identityCalculated = false;
		      this.props = createTypedArray('float32', 16);
		      this.reset();
		    };
		  }();

		  function _typeof$3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }
		  var lottie = {};

		  function setLocation(href) {
		    setLocationHref(href);
		  }

		  function searchAnimations() {
		    {
		      animationManager.searchAnimations();
		    }
		  }

		  function setSubframeRendering(flag) {
		    setSubframeEnabled(flag);
		  }

		  function setPrefix(prefix) {
		    setIdPrefix(prefix);
		  }

		  function loadAnimation(params) {

		    return animationManager.loadAnimation(params);
		  }

		  function setQuality(value) {
		    if (typeof value === 'string') {
		      switch (value) {
		        case 'high':
		          setDefaultCurveSegments(200);
		          break;

		        default:
		        case 'medium':
		          setDefaultCurveSegments(50);
		          break;

		        case 'low':
		          setDefaultCurveSegments(10);
		          break;
		      }
		    } else if (!isNaN(value) && value > 1) {
		      setDefaultCurveSegments(value);
		    }
		  }

		  function inBrowser() {
		    return typeof navigator !== 'undefined';
		  }

		  function installPlugin(type, plugin) {
		    if (type === 'expressions') {
		      setExpressionsPlugin(plugin);
		    }
		  }

		  function getFactory(name) {
		    switch (name) {
		      case 'propertyFactory':
		        return PropertyFactory;

		      case 'shapePropertyFactory':
		        return ShapePropertyFactory;

		      case 'matrix':
		        return Matrix;

		      default:
		        return null;
		    }
		  }

		  lottie.play = animationManager.play;
		  lottie.pause = animationManager.pause;
		  lottie.setLocationHref = setLocation;
		  lottie.togglePause = animationManager.togglePause;
		  lottie.setSpeed = animationManager.setSpeed;
		  lottie.setDirection = animationManager.setDirection;
		  lottie.stop = animationManager.stop;
		  lottie.searchAnimations = searchAnimations;
		  lottie.registerAnimation = animationManager.registerAnimation;
		  lottie.loadAnimation = loadAnimation;
		  lottie.setSubframeRendering = setSubframeRendering;
		  lottie.resize = animationManager.resize; // lottie.start = start;

		  lottie.goToAndStop = animationManager.goToAndStop;
		  lottie.destroy = animationManager.destroy;
		  lottie.setQuality = setQuality;
		  lottie.inBrowser = inBrowser;
		  lottie.installPlugin = installPlugin;
		  lottie.freeze = animationManager.freeze;
		  lottie.unfreeze = animationManager.unfreeze;
		  lottie.setVolume = animationManager.setVolume;
		  lottie.mute = animationManager.mute;
		  lottie.unmute = animationManager.unmute;
		  lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations;
		  lottie.useWebWorker = setWebWorker;
		  lottie.setIDPrefix = setPrefix;
		  lottie.__getFactory = getFactory;
		  lottie.version = '5.12.2';

		  function checkReady() {
		    if (document.readyState === 'complete') {
		      clearInterval(readyStateCheckInterval);
		      searchAnimations();
		    }
		  }

		  function getQueryVariable(variable) {
		    var vars = queryString.split('&');

		    for (var i = 0; i < vars.length; i += 1) {
		      var pair = vars[i].split('=');

		      if (decodeURIComponent(pair[0]) == variable) {
		        // eslint-disable-line eqeqeq
		        return decodeURIComponent(pair[1]);
		      }
		    }

		    return null;
		  }

		  var queryString = '';

		  {
		    var scripts = document.getElementsByTagName('script');
		    var index = scripts.length - 1;
		    var myScript = scripts[index] || {
		      src: ''
		    };
		    queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, '') : ''; // eslint-disable-line no-useless-escape

		    getQueryVariable('renderer');
		  }

		  var readyStateCheckInterval = setInterval(checkReady, 100); // this adds bodymovin to the window object for backwards compatibility

		  try {
		    if (!(('object' === "undefined" ? "undefined" : _typeof$3(exports)) === 'object' && 'object' !== 'undefined') && !(typeof undefined === 'function' && undefined.amd) // eslint-disable-line no-undef
		    ) {
		      window.bodymovin = lottie;
		    }
		  } catch (err) {//
		  }

		  var ShapeModifiers = function () {
		    var ob = {};
		    var modifiers = {};
		    ob.registerModifier = registerModifier;
		    ob.getModifier = getModifier;

		    function registerModifier(nm, factory) {
		      if (!modifiers[nm]) {
		        modifiers[nm] = factory;
		      }
		    }

		    function getModifier(nm, elem, data) {
		      return new modifiers[nm](elem, data);
		    }

		    return ob;
		  }();

		  function ShapeModifier() {}

		  ShapeModifier.prototype.initModifierProperties = function () {};

		  ShapeModifier.prototype.addShapeToModifier = function () {};

		  ShapeModifier.prototype.addShape = function (data) {
		    if (!this.closed) {
		      // Adding shape to dynamic properties. It covers the case where a shape has no effects applied, to reset it's _mdf state on every tick.
		      data.sh.container.addDynamicProperty(data.sh);
		      var shapeData = {
		        shape: data.sh,
		        data: data,
		        localShapeCollection: shapeCollectionPool.newShapeCollection()
		      };
		      this.shapes.push(shapeData);
		      this.addShapeToModifier(shapeData);

		      if (this._isAnimated) {
		        data.setAsAnimated();
		      }
		    }
		  };

		  ShapeModifier.prototype.init = function (elem, data) {
		    this.shapes = [];
		    this.elem = elem;
		    this.initDynamicPropertyContainer(elem);
		    this.initModifierProperties(elem, data);
		    this.frameId = initialDefaultFrame;
		    this.closed = false;
		    this.k = false;

		    if (this.dynamicProperties.length) {
		      this.k = true;
		    } else {
		      this.getValue(true);
		    }
		  };

		  ShapeModifier.prototype.processKeys = function () {
		    if (this.elem.globalData.frameId === this.frameId) {
		      return;
		    }

		    this.frameId = this.elem.globalData.frameId;
		    this.iterateDynamicProperties();
		  };

		  extendPrototype([DynamicPropertyContainer], ShapeModifier);

		  function TrimModifier() {}

		  extendPrototype([ShapeModifier], TrimModifier);

		  TrimModifier.prototype.initModifierProperties = function (elem, data) {
		    this.s = PropertyFactory.getProp(elem, data.s, 0, 0.01, this);
		    this.e = PropertyFactory.getProp(elem, data.e, 0, 0.01, this);
		    this.o = PropertyFactory.getProp(elem, data.o, 0, 0, this);
		    this.sValue = 0;
		    this.eValue = 0;
		    this.getValue = this.processKeys;
		    this.m = data.m;
		    this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
		  };

		  TrimModifier.prototype.addShapeToModifier = function (shapeData) {
		    shapeData.pathsData = [];
		  };

		  TrimModifier.prototype.calculateShapeEdges = function (s, e, shapeLength, addedLength, totalModifierLength) {
		    var segments = [];

		    if (e <= 1) {
		      segments.push({
		        s: s,
		        e: e
		      });
		    } else if (s >= 1) {
		      segments.push({
		        s: s - 1,
		        e: e - 1
		      });
		    } else {
		      segments.push({
		        s: s,
		        e: 1
		      });
		      segments.push({
		        s: 0,
		        e: e - 1
		      });
		    }

		    var shapeSegments = [];
		    var i;
		    var len = segments.length;
		    var segmentOb;

		    for (i = 0; i < len; i += 1) {
		      segmentOb = segments[i];

		      if (!(segmentOb.e * totalModifierLength < addedLength || segmentOb.s * totalModifierLength > addedLength + shapeLength)) {
		        var shapeS;
		        var shapeE;

		        if (segmentOb.s * totalModifierLength <= addedLength) {
		          shapeS = 0;
		        } else {
		          shapeS = (segmentOb.s * totalModifierLength - addedLength) / shapeLength;
		        }

		        if (segmentOb.e * totalModifierLength >= addedLength + shapeLength) {
		          shapeE = 1;
		        } else {
		          shapeE = (segmentOb.e * totalModifierLength - addedLength) / shapeLength;
		        }

		        shapeSegments.push([shapeS, shapeE]);
		      }
		    }

		    if (!shapeSegments.length) {
		      shapeSegments.push([0, 0]);
		    }

		    return shapeSegments;
		  };

		  TrimModifier.prototype.releasePathsData = function (pathsData) {
		    var i;
		    var len = pathsData.length;

		    for (i = 0; i < len; i += 1) {
		      segmentsLengthPool.release(pathsData[i]);
		    }

		    pathsData.length = 0;
		    return pathsData;
		  };

		  TrimModifier.prototype.processShapes = function (_isFirstFrame) {
		    var s;
		    var e;

		    if (this._mdf || _isFirstFrame) {
		      var o = this.o.v % 360 / 360;

		      if (o < 0) {
		        o += 1;
		      }

		      if (this.s.v > 1) {
		        s = 1 + o;
		      } else if (this.s.v < 0) {
		        s = 0 + o;
		      } else {
		        s = this.s.v + o;
		      }

		      if (this.e.v > 1) {
		        e = 1 + o;
		      } else if (this.e.v < 0) {
		        e = 0 + o;
		      } else {
		        e = this.e.v + o;
		      }

		      if (s > e) {
		        var _s = s;
		        s = e;
		        e = _s;
		      }

		      s = Math.round(s * 10000) * 0.0001;
		      e = Math.round(e * 10000) * 0.0001;
		      this.sValue = s;
		      this.eValue = e;
		    } else {
		      s = this.sValue;
		      e = this.eValue;
		    }

		    var shapePaths;
		    var i;
		    var len = this.shapes.length;
		    var j;
		    var jLen;
		    var pathsData;
		    var pathData;
		    var totalShapeLength;
		    var totalModifierLength = 0;

		    if (e === s) {
		      for (i = 0; i < len; i += 1) {
		        this.shapes[i].localShapeCollection.releaseShapes();
		        this.shapes[i].shape._mdf = true;
		        this.shapes[i].shape.paths = this.shapes[i].localShapeCollection;

		        if (this._mdf) {
		          this.shapes[i].pathsData.length = 0;
		        }
		      }
		    } else if (!(e === 1 && s === 0 || e === 0 && s === 1)) {
		      var segments = [];
		      var shapeData;
		      var localShapeCollection;

		      for (i = 0; i < len; i += 1) {
		        shapeData = this.shapes[i]; // if shape hasn't changed and trim properties haven't changed, cached previous path can be used

		        if (!shapeData.shape._mdf && !this._mdf && !_isFirstFrame && this.m !== 2) {
		          shapeData.shape.paths = shapeData.localShapeCollection;
		        } else {
		          shapePaths = shapeData.shape.paths;
		          jLen = shapePaths._length;
		          totalShapeLength = 0;

		          if (!shapeData.shape._mdf && shapeData.pathsData.length) {
		            totalShapeLength = shapeData.totalShapeLength;
		          } else {
		            pathsData = this.releasePathsData(shapeData.pathsData);

		            for (j = 0; j < jLen; j += 1) {
		              pathData = bez.getSegmentsLength(shapePaths.shapes[j]);
		              pathsData.push(pathData);
		              totalShapeLength += pathData.totalLength;
		            }

		            shapeData.totalShapeLength = totalShapeLength;
		            shapeData.pathsData = pathsData;
		          }

		          totalModifierLength += totalShapeLength;
		          shapeData.shape._mdf = true;
		        }
		      }

		      var shapeS = s;
		      var shapeE = e;
		      var addedLength = 0;
		      var edges;

		      for (i = len - 1; i >= 0; i -= 1) {
		        shapeData = this.shapes[i];

		        if (shapeData.shape._mdf) {
		          localShapeCollection = shapeData.localShapeCollection;
		          localShapeCollection.releaseShapes(); // if m === 2 means paths are trimmed individually so edges need to be found for this specific shape relative to whoel group

		          if (this.m === 2 && len > 1) {
		            edges = this.calculateShapeEdges(s, e, shapeData.totalShapeLength, addedLength, totalModifierLength);
		            addedLength += shapeData.totalShapeLength;
		          } else {
		            edges = [[shapeS, shapeE]];
		          }

		          jLen = edges.length;

		          for (j = 0; j < jLen; j += 1) {
		            shapeS = edges[j][0];
		            shapeE = edges[j][1];
		            segments.length = 0;

		            if (shapeE <= 1) {
		              segments.push({
		                s: shapeData.totalShapeLength * shapeS,
		                e: shapeData.totalShapeLength * shapeE
		              });
		            } else if (shapeS >= 1) {
		              segments.push({
		                s: shapeData.totalShapeLength * (shapeS - 1),
		                e: shapeData.totalShapeLength * (shapeE - 1)
		              });
		            } else {
		              segments.push({
		                s: shapeData.totalShapeLength * shapeS,
		                e: shapeData.totalShapeLength
		              });
		              segments.push({
		                s: 0,
		                e: shapeData.totalShapeLength * (shapeE - 1)
		              });
		            }

		            var newShapesData = this.addShapes(shapeData, segments[0]);

		            if (segments[0].s !== segments[0].e) {
		              if (segments.length > 1) {
		                var lastShapeInCollection = shapeData.shape.paths.shapes[shapeData.shape.paths._length - 1];

		                if (lastShapeInCollection.c) {
		                  var lastShape = newShapesData.pop();
		                  this.addPaths(newShapesData, localShapeCollection);
		                  newShapesData = this.addShapes(shapeData, segments[1], lastShape);
		                } else {
		                  this.addPaths(newShapesData, localShapeCollection);
		                  newShapesData = this.addShapes(shapeData, segments[1]);
		                }
		              }

		              this.addPaths(newShapesData, localShapeCollection);
		            }
		          }

		          shapeData.shape.paths = localShapeCollection;
		        }
		      }
		    } else if (this._mdf) {
		      for (i = 0; i < len; i += 1) {
		        // Releasign Trim Cached paths data when no trim applied in case shapes are modified inbetween.
		        // Don't remove this even if it's losing cached info.
		        this.shapes[i].pathsData.length = 0;
		        this.shapes[i].shape._mdf = true;
		      }
		    }
		  };

		  TrimModifier.prototype.addPaths = function (newPaths, localShapeCollection) {
		    var i;
		    var len = newPaths.length;

		    for (i = 0; i < len; i += 1) {
		      localShapeCollection.addShape(newPaths[i]);
		    }
		  };

		  TrimModifier.prototype.addSegment = function (pt1, pt2, pt3, pt4, shapePath, pos, newShape) {
		    shapePath.setXYAt(pt2[0], pt2[1], 'o', pos);
		    shapePath.setXYAt(pt3[0], pt3[1], 'i', pos + 1);

		    if (newShape) {
		      shapePath.setXYAt(pt1[0], pt1[1], 'v', pos);
		    }

		    shapePath.setXYAt(pt4[0], pt4[1], 'v', pos + 1);
		  };

		  TrimModifier.prototype.addSegmentFromArray = function (points, shapePath, pos, newShape) {
		    shapePath.setXYAt(points[1], points[5], 'o', pos);
		    shapePath.setXYAt(points[2], points[6], 'i', pos + 1);

		    if (newShape) {
		      shapePath.setXYAt(points[0], points[4], 'v', pos);
		    }

		    shapePath.setXYAt(points[3], points[7], 'v', pos + 1);
		  };

		  TrimModifier.prototype.addShapes = function (shapeData, shapeSegment, shapePath) {
		    var pathsData = shapeData.pathsData;
		    var shapePaths = shapeData.shape.paths.shapes;
		    var i;
		    var len = shapeData.shape.paths._length;
		    var j;
		    var jLen;
		    var addedLength = 0;
		    var currentLengthData;
		    var segmentCount;
		    var lengths;
		    var segment;
		    var shapes = [];
		    var initPos;
		    var newShape = true;

		    if (!shapePath) {
		      shapePath = shapePool.newElement();
		      segmentCount = 0;
		      initPos = 0;
		    } else {
		      segmentCount = shapePath._length;
		      initPos = shapePath._length;
		    }

		    shapes.push(shapePath);

		    for (i = 0; i < len; i += 1) {
		      lengths = pathsData[i].lengths;
		      shapePath.c = shapePaths[i].c;
		      jLen = shapePaths[i].c ? lengths.length : lengths.length + 1;

		      for (j = 1; j < jLen; j += 1) {
		        currentLengthData = lengths[j - 1];

		        if (addedLength + currentLengthData.addedLength < shapeSegment.s) {
		          addedLength += currentLengthData.addedLength;
		          shapePath.c = false;
		        } else if (addedLength > shapeSegment.e) {
		          shapePath.c = false;
		          break;
		        } else {
		          if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + currentLengthData.addedLength) {
		            this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[j], shapePaths[i].v[j], shapePath, segmentCount, newShape);
		            newShape = false;
		          } else {
		            segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[j], shapePaths[i].o[j - 1], shapePaths[i].i[j], (shapeSegment.s - addedLength) / currentLengthData.addedLength, (shapeSegment.e - addedLength) / currentLengthData.addedLength, lengths[j - 1]);
		            this.addSegmentFromArray(segment, shapePath, segmentCount, newShape); // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);

		            newShape = false;
		            shapePath.c = false;
		          }

		          addedLength += currentLengthData.addedLength;
		          segmentCount += 1;
		        }
		      }

		      if (shapePaths[i].c && lengths.length) {
		        currentLengthData = lengths[j - 1];

		        if (addedLength <= shapeSegment.e) {
		          var segmentLength = lengths[j - 1].addedLength;

		          if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + segmentLength) {
		            this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[0], shapePaths[i].v[0], shapePath, segmentCount, newShape);
		            newShape = false;
		          } else {
		            segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[0], shapePaths[i].o[j - 1], shapePaths[i].i[0], (shapeSegment.s - addedLength) / segmentLength, (shapeSegment.e - addedLength) / segmentLength, lengths[j - 1]);
		            this.addSegmentFromArray(segment, shapePath, segmentCount, newShape); // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);

		            newShape = false;
		            shapePath.c = false;
		          }
		        } else {
		          shapePath.c = false;
		        }

		        addedLength += currentLengthData.addedLength;
		        segmentCount += 1;
		      }

		      if (shapePath._length) {
		        shapePath.setXYAt(shapePath.v[initPos][0], shapePath.v[initPos][1], 'i', initPos);
		        shapePath.setXYAt(shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1], 'o', shapePath._length - 1);
		      }

		      if (addedLength > shapeSegment.e) {
		        break;
		      }

		      if (i < len - 1) {
		        shapePath = shapePool.newElement();
		        newShape = true;
		        shapes.push(shapePath);
		        segmentCount = 0;
		      }
		    }

		    return shapes;
		  };

		  function PuckerAndBloatModifier() {}

		  extendPrototype([ShapeModifier], PuckerAndBloatModifier);

		  PuckerAndBloatModifier.prototype.initModifierProperties = function (elem, data) {
		    this.getValue = this.processKeys;
		    this.amount = PropertyFactory.getProp(elem, data.a, 0, null, this);
		    this._isAnimated = !!this.amount.effectsSequence.length;
		  };

		  PuckerAndBloatModifier.prototype.processPath = function (path, amount) {
		    var percent = amount / 100;
		    var centerPoint = [0, 0];
		    var pathLength = path._length;
		    var i = 0;

		    for (i = 0; i < pathLength; i += 1) {
		      centerPoint[0] += path.v[i][0];
		      centerPoint[1] += path.v[i][1];
		    }

		    centerPoint[0] /= pathLength;
		    centerPoint[1] /= pathLength;
		    var clonedPath = shapePool.newElement();
		    clonedPath.c = path.c;
		    var vX;
		    var vY;
		    var oX;
		    var oY;
		    var iX;
		    var iY;

		    for (i = 0; i < pathLength; i += 1) {
		      vX = path.v[i][0] + (centerPoint[0] - path.v[i][0]) * percent;
		      vY = path.v[i][1] + (centerPoint[1] - path.v[i][1]) * percent;
		      oX = path.o[i][0] + (centerPoint[0] - path.o[i][0]) * -percent;
		      oY = path.o[i][1] + (centerPoint[1] - path.o[i][1]) * -percent;
		      iX = path.i[i][0] + (centerPoint[0] - path.i[i][0]) * -percent;
		      iY = path.i[i][1] + (centerPoint[1] - path.i[i][1]) * -percent;
		      clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, i);
		    }

		    return clonedPath;
		  };

		  PuckerAndBloatModifier.prototype.processShapes = function (_isFirstFrame) {
		    var shapePaths;
		    var i;
		    var len = this.shapes.length;
		    var j;
		    var jLen;
		    var amount = this.amount.v;

		    if (amount !== 0) {
		      var shapeData;
		      var localShapeCollection;

		      for (i = 0; i < len; i += 1) {
		        shapeData = this.shapes[i];
		        localShapeCollection = shapeData.localShapeCollection;

		        if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
		          localShapeCollection.releaseShapes();
		          shapeData.shape._mdf = true;
		          shapePaths = shapeData.shape.paths.shapes;
		          jLen = shapeData.shape.paths._length;

		          for (j = 0; j < jLen; j += 1) {
		            localShapeCollection.addShape(this.processPath(shapePaths[j], amount));
		          }
		        }

		        shapeData.shape.paths = shapeData.localShapeCollection;
		      }
		    }

		    if (!this.dynamicProperties.length) {
		      this._mdf = false;
		    }
		  };

		  var TransformPropertyFactory = function () {
		    var defaultVector = [0, 0];

		    function applyToMatrix(mat) {
		      var _mdf = this._mdf;
		      this.iterateDynamicProperties();
		      this._mdf = this._mdf || _mdf;

		      if (this.a) {
		        mat.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
		      }

		      if (this.s) {
		        mat.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
		      }

		      if (this.sk) {
		        mat.skewFromAxis(-this.sk.v, this.sa.v);
		      }

		      if (this.r) {
		        mat.rotate(-this.r.v);
		      } else {
		        mat.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
		      }

		      if (this.data.p.s) {
		        if (this.data.p.z) {
		          mat.translate(this.px.v, this.py.v, -this.pz.v);
		        } else {
		          mat.translate(this.px.v, this.py.v, 0);
		        }
		      } else {
		        mat.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
		      }
		    }

		    function processKeys(forceRender) {
		      if (this.elem.globalData.frameId === this.frameId) {
		        return;
		      }

		      if (this._isDirty) {
		        this.precalculateMatrix();
		        this._isDirty = false;
		      }

		      this.iterateDynamicProperties();

		      if (this._mdf || forceRender) {
		        var frameRate;
		        this.v.cloneFromProps(this.pre.props);

		        if (this.appliedTransformations < 1) {
		          this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
		        }

		        if (this.appliedTransformations < 2) {
		          this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
		        }

		        if (this.sk && this.appliedTransformations < 3) {
		          this.v.skewFromAxis(-this.sk.v, this.sa.v);
		        }

		        if (this.r && this.appliedTransformations < 4) {
		          this.v.rotate(-this.r.v);
		        } else if (!this.r && this.appliedTransformations < 4) {
		          this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
		        }

		        if (this.autoOriented) {
		          var v1;
		          var v2;
		          frameRate = this.elem.globalData.frameRate;

		          if (this.p && this.p.keyframes && this.p.getValueAtTime) {
		            if (this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t) {
		              v1 = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / frameRate, 0);
		              v2 = this.p.getValueAtTime(this.p.keyframes[0].t / frameRate, 0);
		            } else if (this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t) {
		              v1 = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / frameRate, 0);
		              v2 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / frameRate, 0);
		            } else {
		              v1 = this.p.pv;
		              v2 = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / frameRate, this.p.offsetTime);
		            }
		          } else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
		            v1 = [];
		            v2 = [];
		            var px = this.px;
		            var py = this.py;

		            if (px._caching.lastFrame + px.offsetTime <= px.keyframes[0].t) {
		              v1[0] = px.getValueAtTime((px.keyframes[0].t + 0.01) / frameRate, 0);
		              v1[1] = py.getValueAtTime((py.keyframes[0].t + 0.01) / frameRate, 0);
		              v2[0] = px.getValueAtTime(px.keyframes[0].t / frameRate, 0);
		              v2[1] = py.getValueAtTime(py.keyframes[0].t / frameRate, 0);
		            } else if (px._caching.lastFrame + px.offsetTime >= px.keyframes[px.keyframes.length - 1].t) {
		              v1[0] = px.getValueAtTime(px.keyframes[px.keyframes.length - 1].t / frameRate, 0);
		              v1[1] = py.getValueAtTime(py.keyframes[py.keyframes.length - 1].t / frameRate, 0);
		              v2[0] = px.getValueAtTime((px.keyframes[px.keyframes.length - 1].t - 0.01) / frameRate, 0);
		              v2[1] = py.getValueAtTime((py.keyframes[py.keyframes.length - 1].t - 0.01) / frameRate, 0);
		            } else {
		              v1 = [px.pv, py.pv];
		              v2[0] = px.getValueAtTime((px._caching.lastFrame + px.offsetTime - 0.01) / frameRate, px.offsetTime);
		              v2[1] = py.getValueAtTime((py._caching.lastFrame + py.offsetTime - 0.01) / frameRate, py.offsetTime);
		            }
		          } else {
		            v2 = defaultVector;
		            v1 = v2;
		          }

		          this.v.rotate(-Math.atan2(v1[1] - v2[1], v1[0] - v2[0]));
		        }

		        if (this.data.p && this.data.p.s) {
		          if (this.data.p.z) {
		            this.v.translate(this.px.v, this.py.v, -this.pz.v);
		          } else {
		            this.v.translate(this.px.v, this.py.v, 0);
		          }
		        } else {
		          this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
		        }
		      }

		      this.frameId = this.elem.globalData.frameId;
		    }

		    function precalculateMatrix() {
		      this.appliedTransformations = 0;
		      this.pre.reset();

		      if (!this.a.effectsSequence.length) {
		        this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
		        this.appliedTransformations = 1;
		      } else {
		        return;
		      }

		      if (!this.s.effectsSequence.length) {
		        this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
		        this.appliedTransformations = 2;
		      } else {
		        return;
		      }

		      if (this.sk) {
		        if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) {
		          this.pre.skewFromAxis(-this.sk.v, this.sa.v);
		          this.appliedTransformations = 3;
		        } else {
		          return;
		        }
		      }

		      if (this.r) {
		        if (!this.r.effectsSequence.length) {
		          this.pre.rotate(-this.r.v);
		          this.appliedTransformations = 4;
		        }
		      } else if (!this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length) {
		        this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
		        this.appliedTransformations = 4;
		      }
		    }

		    function autoOrient() {//
		      // var prevP = this.getValueAtTime();
		    }

		    function addDynamicProperty(prop) {
		      this._addDynamicProperty(prop);

		      this.elem.addDynamicProperty(prop);
		      this._isDirty = true;
		    }

		    function TransformProperty(elem, data, container) {
		      this.elem = elem;
		      this.frameId = -1;
		      this.propType = 'transform';
		      this.data = data;
		      this.v = new Matrix(); // Precalculated matrix with non animated properties

		      this.pre = new Matrix();
		      this.appliedTransformations = 0;
		      this.initDynamicPropertyContainer(container || elem);

		      if (data.p && data.p.s) {
		        this.px = PropertyFactory.getProp(elem, data.p.x, 0, 0, this);
		        this.py = PropertyFactory.getProp(elem, data.p.y, 0, 0, this);

		        if (data.p.z) {
		          this.pz = PropertyFactory.getProp(elem, data.p.z, 0, 0, this);
		        }
		      } else {
		        this.p = PropertyFactory.getProp(elem, data.p || {
		          k: [0, 0, 0]
		        }, 1, 0, this);
		      }

		      if (data.rx) {
		        this.rx = PropertyFactory.getProp(elem, data.rx, 0, degToRads, this);
		        this.ry = PropertyFactory.getProp(elem, data.ry, 0, degToRads, this);
		        this.rz = PropertyFactory.getProp(elem, data.rz, 0, degToRads, this);

		        if (data.or.k[0].ti) {
		          var i;
		          var len = data.or.k.length;

		          for (i = 0; i < len; i += 1) {
		            data.or.k[i].to = null;
		            data.or.k[i].ti = null;
		          }
		        }

		        this.or = PropertyFactory.getProp(elem, data.or, 1, degToRads, this); // sh Indicates it needs to be capped between -180 and 180

		        this.or.sh = true;
		      } else {
		        this.r = PropertyFactory.getProp(elem, data.r || {
		          k: 0
		        }, 0, degToRads, this);
		      }

		      if (data.sk) {
		        this.sk = PropertyFactory.getProp(elem, data.sk, 0, degToRads, this);
		        this.sa = PropertyFactory.getProp(elem, data.sa, 0, degToRads, this);
		      }

		      this.a = PropertyFactory.getProp(elem, data.a || {
		        k: [0, 0, 0]
		      }, 1, 0, this);
		      this.s = PropertyFactory.getProp(elem, data.s || {
		        k: [100, 100, 100]
		      }, 1, 0.01, this); // Opacity is not part of the transform properties, that's why it won't use this.dynamicProperties. That way transforms won't get updated if opacity changes.

		      if (data.o) {
		        this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, elem);
		      } else {
		        this.o = {
		          _mdf: false,
		          v: 1
		        };
		      }

		      this._isDirty = true;

		      if (!this.dynamicProperties.length) {
		        this.getValue(true);
		      }
		    }

		    TransformProperty.prototype = {
		      applyToMatrix: applyToMatrix,
		      getValue: processKeys,
		      precalculateMatrix: precalculateMatrix,
		      autoOrient: autoOrient
		    };
		    extendPrototype([DynamicPropertyContainer], TransformProperty);
		    TransformProperty.prototype.addDynamicProperty = addDynamicProperty;
		    TransformProperty.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;

		    function getTransformProperty(elem, data, container) {
		      return new TransformProperty(elem, data, container);
		    }

		    return {
		      getTransformProperty: getTransformProperty
		    };
		  }();

		  function RepeaterModifier() {}

		  extendPrototype([ShapeModifier], RepeaterModifier);

		  RepeaterModifier.prototype.initModifierProperties = function (elem, data) {
		    this.getValue = this.processKeys;
		    this.c = PropertyFactory.getProp(elem, data.c, 0, null, this);
		    this.o = PropertyFactory.getProp(elem, data.o, 0, null, this);
		    this.tr = TransformPropertyFactory.getTransformProperty(elem, data.tr, this);
		    this.so = PropertyFactory.getProp(elem, data.tr.so, 0, 0.01, this);
		    this.eo = PropertyFactory.getProp(elem, data.tr.eo, 0, 0.01, this);
		    this.data = data;

		    if (!this.dynamicProperties.length) {
		      this.getValue(true);
		    }

		    this._isAnimated = !!this.dynamicProperties.length;
		    this.pMatrix = new Matrix();
		    this.rMatrix = new Matrix();
		    this.sMatrix = new Matrix();
		    this.tMatrix = new Matrix();
		    this.matrix = new Matrix();
		  };

		  RepeaterModifier.prototype.applyTransforms = function (pMatrix, rMatrix, sMatrix, transform, perc, inv) {
		    var dir = inv ? -1 : 1;
		    var scaleX = transform.s.v[0] + (1 - transform.s.v[0]) * (1 - perc);
		    var scaleY = transform.s.v[1] + (1 - transform.s.v[1]) * (1 - perc);
		    pMatrix.translate(transform.p.v[0] * dir * perc, transform.p.v[1] * dir * perc, transform.p.v[2]);
		    rMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
		    rMatrix.rotate(-transform.r.v * dir * perc);
		    rMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
		    sMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
		    sMatrix.scale(inv ? 1 / scaleX : scaleX, inv ? 1 / scaleY : scaleY);
		    sMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
		  };

		  RepeaterModifier.prototype.init = function (elem, arr, pos, elemsData) {
		    this.elem = elem;
		    this.arr = arr;
		    this.pos = pos;
		    this.elemsData = elemsData;
		    this._currentCopies = 0;
		    this._elements = [];
		    this._groups = [];
		    this.frameId = -1;
		    this.initDynamicPropertyContainer(elem);
		    this.initModifierProperties(elem, arr[pos]);

		    while (pos > 0) {
		      pos -= 1; // this._elements.unshift(arr.splice(pos,1)[0]);

		      this._elements.unshift(arr[pos]);
		    }

		    if (this.dynamicProperties.length) {
		      this.k = true;
		    } else {
		      this.getValue(true);
		    }
		  };

		  RepeaterModifier.prototype.resetElements = function (elements) {
		    var i;
		    var len = elements.length;

		    for (i = 0; i < len; i += 1) {
		      elements[i]._processed = false;

		      if (elements[i].ty === 'gr') {
		        this.resetElements(elements[i].it);
		      }
		    }
		  };

		  RepeaterModifier.prototype.cloneElements = function (elements) {
		    var newElements = JSON.parse(JSON.stringify(elements));
		    this.resetElements(newElements);
		    return newElements;
		  };

		  RepeaterModifier.prototype.changeGroupRender = function (elements, renderFlag) {
		    var i;
		    var len = elements.length;

		    for (i = 0; i < len; i += 1) {
		      elements[i]._render = renderFlag;

		      if (elements[i].ty === 'gr') {
		        this.changeGroupRender(elements[i].it, renderFlag);
		      }
		    }
		  };

		  RepeaterModifier.prototype.processShapes = function (_isFirstFrame) {
		    var items;
		    var itemsTransform;
		    var i;
		    var dir;
		    var cont;
		    var hasReloaded = false;

		    if (this._mdf || _isFirstFrame) {
		      var copies = Math.ceil(this.c.v);

		      if (this._groups.length < copies) {
		        while (this._groups.length < copies) {
		          var group = {
		            it: this.cloneElements(this._elements),
		            ty: 'gr'
		          };
		          group.it.push({
		            a: {
		              a: 0,
		              ix: 1,
		              k: [0, 0]
		            },
		            nm: 'Transform',
		            o: {
		              a: 0,
		              ix: 7,
		              k: 100
		            },
		            p: {
		              a: 0,
		              ix: 2,
		              k: [0, 0]
		            },
		            r: {
		              a: 1,
		              ix: 6,
		              k: [{
		                s: 0,
		                e: 0,
		                t: 0
		              }, {
		                s: 0,
		                e: 0,
		                t: 1
		              }]
		            },
		            s: {
		              a: 0,
		              ix: 3,
		              k: [100, 100]
		            },
		            sa: {
		              a: 0,
		              ix: 5,
		              k: 0
		            },
		            sk: {
		              a: 0,
		              ix: 4,
		              k: 0
		            },
		            ty: 'tr'
		          });
		          this.arr.splice(0, 0, group);

		          this._groups.splice(0, 0, group);

		          this._currentCopies += 1;
		        }

		        this.elem.reloadShapes();
		        hasReloaded = true;
		      }

		      cont = 0;
		      var renderFlag;

		      for (i = 0; i <= this._groups.length - 1; i += 1) {
		        renderFlag = cont < copies;
		        this._groups[i]._render = renderFlag;
		        this.changeGroupRender(this._groups[i].it, renderFlag);

		        if (!renderFlag) {
		          var elems = this.elemsData[i].it;
		          var transformData = elems[elems.length - 1];

		          if (transformData.transform.op.v !== 0) {
		            transformData.transform.op._mdf = true;
		            transformData.transform.op.v = 0;
		          } else {
		            transformData.transform.op._mdf = false;
		          }
		        }

		        cont += 1;
		      }

		      this._currentCopies = copies; /// /

		      var offset = this.o.v;
		      var offsetModulo = offset % 1;
		      var roundOffset = offset > 0 ? Math.floor(offset) : Math.ceil(offset);
		      var pProps = this.pMatrix.props;
		      var rProps = this.rMatrix.props;
		      var sProps = this.sMatrix.props;
		      this.pMatrix.reset();
		      this.rMatrix.reset();
		      this.sMatrix.reset();
		      this.tMatrix.reset();
		      this.matrix.reset();
		      var iteration = 0;

		      if (offset > 0) {
		        while (iteration < roundOffset) {
		          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
		          iteration += 1;
		        }

		        if (offsetModulo) {
		          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, offsetModulo, false);
		          iteration += offsetModulo;
		        }
		      } else if (offset < 0) {
		        while (iteration > roundOffset) {
		          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true);
		          iteration -= 1;
		        }

		        if (offsetModulo) {
		          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -offsetModulo, true);
		          iteration -= offsetModulo;
		        }
		      }

		      i = this.data.m === 1 ? 0 : this._currentCopies - 1;
		      dir = this.data.m === 1 ? 1 : -1;
		      cont = this._currentCopies;
		      var j;
		      var jLen;

		      while (cont) {
		        items = this.elemsData[i].it;
		        itemsTransform = items[items.length - 1].transform.mProps.v.props;
		        jLen = itemsTransform.length;
		        items[items.length - 1].transform.mProps._mdf = true;
		        items[items.length - 1].transform.op._mdf = true;
		        items[items.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1));

		        if (iteration !== 0) {
		          if (i !== 0 && dir === 1 || i !== this._currentCopies - 1 && dir === -1) {
		            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
		          }

		          this.matrix.transform(rProps[0], rProps[1], rProps[2], rProps[3], rProps[4], rProps[5], rProps[6], rProps[7], rProps[8], rProps[9], rProps[10], rProps[11], rProps[12], rProps[13], rProps[14], rProps[15]);
		          this.matrix.transform(sProps[0], sProps[1], sProps[2], sProps[3], sProps[4], sProps[5], sProps[6], sProps[7], sProps[8], sProps[9], sProps[10], sProps[11], sProps[12], sProps[13], sProps[14], sProps[15]);
		          this.matrix.transform(pProps[0], pProps[1], pProps[2], pProps[3], pProps[4], pProps[5], pProps[6], pProps[7], pProps[8], pProps[9], pProps[10], pProps[11], pProps[12], pProps[13], pProps[14], pProps[15]);

		          for (j = 0; j < jLen; j += 1) {
		            itemsTransform[j] = this.matrix.props[j];
		          }

		          this.matrix.reset();
		        } else {
		          this.matrix.reset();

		          for (j = 0; j < jLen; j += 1) {
		            itemsTransform[j] = this.matrix.props[j];
		          }
		        }

		        iteration += 1;
		        cont -= 1;
		        i += dir;
		      }
		    } else {
		      cont = this._currentCopies;
		      i = 0;
		      dir = 1;

		      while (cont) {
		        items = this.elemsData[i].it;
		        itemsTransform = items[items.length - 1].transform.mProps.v.props;
		        items[items.length - 1].transform.mProps._mdf = false;
		        items[items.length - 1].transform.op._mdf = false;
		        cont -= 1;
		        i += dir;
		      }
		    }

		    return hasReloaded;
		  };

		  RepeaterModifier.prototype.addShape = function () {};

		  function RoundCornersModifier() {}

		  extendPrototype([ShapeModifier], RoundCornersModifier);

		  RoundCornersModifier.prototype.initModifierProperties = function (elem, data) {
		    this.getValue = this.processKeys;
		    this.rd = PropertyFactory.getProp(elem, data.r, 0, null, this);
		    this._isAnimated = !!this.rd.effectsSequence.length;
		  };

		  RoundCornersModifier.prototype.processPath = function (path, round) {
		    var clonedPath = shapePool.newElement();
		    clonedPath.c = path.c;
		    var i;
		    var len = path._length;
		    var currentV;
		    var currentI;
		    var currentO;
		    var closerV;
		    var distance;
		    var newPosPerc;
		    var index = 0;
		    var vX;
		    var vY;
		    var oX;
		    var oY;
		    var iX;
		    var iY;

		    for (i = 0; i < len; i += 1) {
		      currentV = path.v[i];
		      currentO = path.o[i];
		      currentI = path.i[i];

		      if (currentV[0] === currentO[0] && currentV[1] === currentO[1] && currentV[0] === currentI[0] && currentV[1] === currentI[1]) {
		        if ((i === 0 || i === len - 1) && !path.c) {
		          clonedPath.setTripleAt(currentV[0], currentV[1], currentO[0], currentO[1], currentI[0], currentI[1], index);
		          /* clonedPath.v[index] = currentV;
		                  clonedPath.o[index] = currentO;
		                  clonedPath.i[index] = currentI; */

		          index += 1;
		        } else {
		          if (i === 0) {
		            closerV = path.v[len - 1];
		          } else {
		            closerV = path.v[i - 1];
		          }

		          distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
		          newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
		          iX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
		          vX = iX;
		          iY = currentV[1] - (currentV[1] - closerV[1]) * newPosPerc;
		          vY = iY;
		          oX = vX - (vX - currentV[0]) * roundCorner;
		          oY = vY - (vY - currentV[1]) * roundCorner;
		          clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, index);
		          index += 1;

		          if (i === len - 1) {
		            closerV = path.v[0];
		          } else {
		            closerV = path.v[i + 1];
		          }

		          distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
		          newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
		          oX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
		          vX = oX;
		          oY = currentV[1] + (closerV[1] - currentV[1]) * newPosPerc;
		          vY = oY;
		          iX = vX - (vX - currentV[0]) * roundCorner;
		          iY = vY - (vY - currentV[1]) * roundCorner;
		          clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, index);
		          index += 1;
		        }
		      } else {
		        clonedPath.setTripleAt(path.v[i][0], path.v[i][1], path.o[i][0], path.o[i][1], path.i[i][0], path.i[i][1], index);
		        index += 1;
		      }
		    }

		    return clonedPath;
		  };

		  RoundCornersModifier.prototype.processShapes = function (_isFirstFrame) {
		    var shapePaths;
		    var i;
		    var len = this.shapes.length;
		    var j;
		    var jLen;
		    var rd = this.rd.v;

		    if (rd !== 0) {
		      var shapeData;
		      var localShapeCollection;

		      for (i = 0; i < len; i += 1) {
		        shapeData = this.shapes[i];
		        localShapeCollection = shapeData.localShapeCollection;

		        if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
		          localShapeCollection.releaseShapes();
		          shapeData.shape._mdf = true;
		          shapePaths = shapeData.shape.paths.shapes;
		          jLen = shapeData.shape.paths._length;

		          for (j = 0; j < jLen; j += 1) {
		            localShapeCollection.addShape(this.processPath(shapePaths[j], rd));
		          }
		        }

		        shapeData.shape.paths = shapeData.localShapeCollection;
		      }
		    }

		    if (!this.dynamicProperties.length) {
		      this._mdf = false;
		    }
		  };

		  function floatEqual(a, b) {
		    return Math.abs(a - b) * 100000 <= Math.min(Math.abs(a), Math.abs(b));
		  }

		  function floatZero(f) {
		    return Math.abs(f) <= 0.00001;
		  }

		  function lerp(p0, p1, amount) {
		    return p0 * (1 - amount) + p1 * amount;
		  }

		  function lerpPoint(p0, p1, amount) {
		    return [lerp(p0[0], p1[0], amount), lerp(p0[1], p1[1], amount)];
		  }

		  function quadRoots(a, b, c) {
		    // no root
		    if (a === 0) return [];
		    var s = b * b - 4 * a * c; // Complex roots

		    if (s < 0) return [];
		    var singleRoot = -b / (2 * a); // 1 root

		    if (s === 0) return [singleRoot];
		    var delta = Math.sqrt(s) / (2 * a); // 2 roots

		    return [singleRoot - delta, singleRoot + delta];
		  }

		  function polynomialCoefficients(p0, p1, p2, p3) {
		    return [-p0 + 3 * p1 - 3 * p2 + p3, 3 * p0 - 6 * p1 + 3 * p2, -3 * p0 + 3 * p1, p0];
		  }

		  function singlePoint(p) {
		    return new PolynomialBezier(p, p, p, p, false);
		  }

		  function PolynomialBezier(p0, p1, p2, p3, linearize) {
		    if (linearize && pointEqual(p0, p1)) {
		      p1 = lerpPoint(p0, p3, 1 / 3);
		    }

		    if (linearize && pointEqual(p2, p3)) {
		      p2 = lerpPoint(p0, p3, 2 / 3);
		    }

		    var coeffx = polynomialCoefficients(p0[0], p1[0], p2[0], p3[0]);
		    var coeffy = polynomialCoefficients(p0[1], p1[1], p2[1], p3[1]);
		    this.a = [coeffx[0], coeffy[0]];
		    this.b = [coeffx[1], coeffy[1]];
		    this.c = [coeffx[2], coeffy[2]];
		    this.d = [coeffx[3], coeffy[3]];
		    this.points = [p0, p1, p2, p3];
		  }

		  PolynomialBezier.prototype.point = function (t) {
		    return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
		  };

		  PolynomialBezier.prototype.derivative = function (t) {
		    return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]];
		  };

		  PolynomialBezier.prototype.tangentAngle = function (t) {
		    var p = this.derivative(t);
		    return Math.atan2(p[1], p[0]);
		  };

		  PolynomialBezier.prototype.normalAngle = function (t) {
		    var p = this.derivative(t);
		    return Math.atan2(p[0], p[1]);
		  };

		  PolynomialBezier.prototype.inflectionPoints = function () {
		    var denom = this.a[1] * this.b[0] - this.a[0] * this.b[1];
		    if (floatZero(denom)) return [];
		    var tcusp = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / denom;
		    var square = tcusp * tcusp - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / denom;
		    if (square < 0) return [];
		    var root = Math.sqrt(square);

		    if (floatZero(root)) {
		      if (root > 0 && root < 1) return [tcusp];
		      return [];
		    }

		    return [tcusp - root, tcusp + root].filter(function (r) {
		      return r > 0 && r < 1;
		    });
		  };

		  PolynomialBezier.prototype.split = function (t) {
		    if (t <= 0) return [singlePoint(this.points[0]), this];
		    if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
		    var p10 = lerpPoint(this.points[0], this.points[1], t);
		    var p11 = lerpPoint(this.points[1], this.points[2], t);
		    var p12 = lerpPoint(this.points[2], this.points[3], t);
		    var p20 = lerpPoint(p10, p11, t);
		    var p21 = lerpPoint(p11, p12, t);
		    var p3 = lerpPoint(p20, p21, t);
		    return [new PolynomialBezier(this.points[0], p10, p20, p3, true), new PolynomialBezier(p3, p21, p12, this.points[3], true)];
		  };

		  function extrema(bez, comp) {
		    var min = bez.points[0][comp];
		    var max = bez.points[bez.points.length - 1][comp];

		    if (min > max) {
		      var e = max;
		      max = min;
		      min = e;
		    } // Derivative roots to find min/max


		    var f = quadRoots(3 * bez.a[comp], 2 * bez.b[comp], bez.c[comp]);

		    for (var i = 0; i < f.length; i += 1) {
		      if (f[i] > 0 && f[i] < 1) {
		        var val = bez.point(f[i])[comp];
		        if (val < min) min = val;else if (val > max) max = val;
		      }
		    }

		    return {
		      min: min,
		      max: max
		    };
		  }

		  PolynomialBezier.prototype.bounds = function () {
		    return {
		      x: extrema(this, 0),
		      y: extrema(this, 1)
		    };
		  };

		  PolynomialBezier.prototype.boundingBox = function () {
		    var bounds = this.bounds();
		    return {
		      left: bounds.x.min,
		      right: bounds.x.max,
		      top: bounds.y.min,
		      bottom: bounds.y.max,
		      width: bounds.x.max - bounds.x.min,
		      height: bounds.y.max - bounds.y.min,
		      cx: (bounds.x.max + bounds.x.min) / 2,
		      cy: (bounds.y.max + bounds.y.min) / 2
		    };
		  };

		  function intersectData(bez, t1, t2) {
		    var box = bez.boundingBox();
		    return {
		      cx: box.cx,
		      cy: box.cy,
		      width: box.width,
		      height: box.height,
		      bez: bez,
		      t: (t1 + t2) / 2,
		      t1: t1,
		      t2: t2
		    };
		  }

		  function splitData(data) {
		    var split = data.bez.split(0.5);
		    return [intersectData(split[0], data.t1, data.t), intersectData(split[1], data.t, data.t2)];
		  }

		  function boxIntersect(b1, b2) {
		    return Math.abs(b1.cx - b2.cx) * 2 < b1.width + b2.width && Math.abs(b1.cy - b2.cy) * 2 < b1.height + b2.height;
		  }

		  function intersectsImpl(d1, d2, depth, tolerance, intersections, maxRecursion) {
		    if (!boxIntersect(d1, d2)) return;

		    if (depth >= maxRecursion || d1.width <= tolerance && d1.height <= tolerance && d2.width <= tolerance && d2.height <= tolerance) {
		      intersections.push([d1.t, d2.t]);
		      return;
		    }

		    var d1s = splitData(d1);
		    var d2s = splitData(d2);
		    intersectsImpl(d1s[0], d2s[0], depth + 1, tolerance, intersections, maxRecursion);
		    intersectsImpl(d1s[0], d2s[1], depth + 1, tolerance, intersections, maxRecursion);
		    intersectsImpl(d1s[1], d2s[0], depth + 1, tolerance, intersections, maxRecursion);
		    intersectsImpl(d1s[1], d2s[1], depth + 1, tolerance, intersections, maxRecursion);
		  }

		  PolynomialBezier.prototype.intersections = function (other, tolerance, maxRecursion) {
		    if (tolerance === undefined) tolerance = 2;
		    if (maxRecursion === undefined) maxRecursion = 7;
		    var intersections = [];
		    intersectsImpl(intersectData(this, 0, 1), intersectData(other, 0, 1), 0, tolerance, intersections, maxRecursion);
		    return intersections;
		  };

		  PolynomialBezier.shapeSegment = function (shapePath, index) {
		    var nextIndex = (index + 1) % shapePath.length();
		    return new PolynomialBezier(shapePath.v[index], shapePath.o[index], shapePath.i[nextIndex], shapePath.v[nextIndex], true);
		  };

		  PolynomialBezier.shapeSegmentInverted = function (shapePath, index) {
		    var nextIndex = (index + 1) % shapePath.length();
		    return new PolynomialBezier(shapePath.v[nextIndex], shapePath.i[nextIndex], shapePath.o[index], shapePath.v[index], true);
		  };

		  function crossProduct(a, b) {
		    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
		  }

		  function lineIntersection(start1, end1, start2, end2) {
		    var v1 = [start1[0], start1[1], 1];
		    var v2 = [end1[0], end1[1], 1];
		    var v3 = [start2[0], start2[1], 1];
		    var v4 = [end2[0], end2[1], 1];
		    var r = crossProduct(crossProduct(v1, v2), crossProduct(v3, v4));
		    if (floatZero(r[2])) return null;
		    return [r[0] / r[2], r[1] / r[2]];
		  }

		  function polarOffset(p, angle, length) {
		    return [p[0] + Math.cos(angle) * length, p[1] - Math.sin(angle) * length];
		  }

		  function pointDistance(p1, p2) {
		    return Math.hypot(p1[0] - p2[0], p1[1] - p2[1]);
		  }

		  function pointEqual(p1, p2) {
		    return floatEqual(p1[0], p2[0]) && floatEqual(p1[1], p2[1]);
		  }

		  function ZigZagModifier() {}

		  extendPrototype([ShapeModifier], ZigZagModifier);

		  ZigZagModifier.prototype.initModifierProperties = function (elem, data) {
		    this.getValue = this.processKeys;
		    this.amplitude = PropertyFactory.getProp(elem, data.s, 0, null, this);
		    this.frequency = PropertyFactory.getProp(elem, data.r, 0, null, this);
		    this.pointsType = PropertyFactory.getProp(elem, data.pt, 0, null, this);
		    this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
		  };

		  function setPoint(outputBezier, point, angle, direction, amplitude, outAmplitude, inAmplitude) {
		    var angO = angle - Math.PI / 2;
		    var angI = angle + Math.PI / 2;
		    var px = point[0] + Math.cos(angle) * direction * amplitude;
		    var py = point[1] - Math.sin(angle) * direction * amplitude;
		    outputBezier.setTripleAt(px, py, px + Math.cos(angO) * outAmplitude, py - Math.sin(angO) * outAmplitude, px + Math.cos(angI) * inAmplitude, py - Math.sin(angI) * inAmplitude, outputBezier.length());
		  }

		  function getPerpendicularVector(pt1, pt2) {
		    var vector = [pt2[0] - pt1[0], pt2[1] - pt1[1]];
		    var rot = -Math.PI * 0.5;
		    var rotatedVector = [Math.cos(rot) * vector[0] - Math.sin(rot) * vector[1], Math.sin(rot) * vector[0] + Math.cos(rot) * vector[1]];
		    return rotatedVector;
		  }

		  function getProjectingAngle(path, cur) {
		    var prevIndex = cur === 0 ? path.length() - 1 : cur - 1;
		    var nextIndex = (cur + 1) % path.length();
		    var prevPoint = path.v[prevIndex];
		    var nextPoint = path.v[nextIndex];
		    var pVector = getPerpendicularVector(prevPoint, nextPoint);
		    return Math.atan2(0, 1) - Math.atan2(pVector[1], pVector[0]);
		  }

		  function zigZagCorner(outputBezier, path, cur, amplitude, frequency, pointType, direction) {
		    var angle = getProjectingAngle(path, cur);
		    var point = path.v[cur % path._length];
		    var prevPoint = path.v[cur === 0 ? path._length - 1 : cur - 1];
		    var nextPoint = path.v[(cur + 1) % path._length];
		    var prevDist = pointType === 2 ? Math.sqrt(Math.pow(point[0] - prevPoint[0], 2) + Math.pow(point[1] - prevPoint[1], 2)) : 0;
		    var nextDist = pointType === 2 ? Math.sqrt(Math.pow(point[0] - nextPoint[0], 2) + Math.pow(point[1] - nextPoint[1], 2)) : 0;
		    setPoint(outputBezier, path.v[cur % path._length], angle, direction, amplitude, nextDist / ((frequency + 1) * 2), prevDist / ((frequency + 1) * 2));
		  }

		  function zigZagSegment(outputBezier, segment, amplitude, frequency, pointType, direction) {
		    for (var i = 0; i < frequency; i += 1) {
		      var t = (i + 1) / (frequency + 1);
		      var dist = pointType === 2 ? Math.sqrt(Math.pow(segment.points[3][0] - segment.points[0][0], 2) + Math.pow(segment.points[3][1] - segment.points[0][1], 2)) : 0;
		      var angle = segment.normalAngle(t);
		      var point = segment.point(t);
		      setPoint(outputBezier, point, angle, direction, amplitude, dist / ((frequency + 1) * 2), dist / ((frequency + 1) * 2));
		      direction = -direction;
		    }

		    return direction;
		  }

		  ZigZagModifier.prototype.processPath = function (path, amplitude, frequency, pointType) {
		    var count = path._length;
		    var clonedPath = shapePool.newElement();
		    clonedPath.c = path.c;

		    if (!path.c) {
		      count -= 1;
		    }

		    if (count === 0) return clonedPath;
		    var direction = -1;
		    var segment = PolynomialBezier.shapeSegment(path, 0);
		    zigZagCorner(clonedPath, path, 0, amplitude, frequency, pointType, direction);

		    for (var i = 0; i < count; i += 1) {
		      direction = zigZagSegment(clonedPath, segment, amplitude, frequency, pointType, -direction);

		      if (i === count - 1 && !path.c) {
		        segment = null;
		      } else {
		        segment = PolynomialBezier.shapeSegment(path, (i + 1) % count);
		      }

		      zigZagCorner(clonedPath, path, i + 1, amplitude, frequency, pointType, direction);
		    }

		    return clonedPath;
		  };

		  ZigZagModifier.prototype.processShapes = function (_isFirstFrame) {
		    var shapePaths;
		    var i;
		    var len = this.shapes.length;
		    var j;
		    var jLen;
		    var amplitude = this.amplitude.v;
		    var frequency = Math.max(0, Math.round(this.frequency.v));
		    var pointType = this.pointsType.v;

		    if (amplitude !== 0) {
		      var shapeData;
		      var localShapeCollection;

		      for (i = 0; i < len; i += 1) {
		        shapeData = this.shapes[i];
		        localShapeCollection = shapeData.localShapeCollection;

		        if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
		          localShapeCollection.releaseShapes();
		          shapeData.shape._mdf = true;
		          shapePaths = shapeData.shape.paths.shapes;
		          jLen = shapeData.shape.paths._length;

		          for (j = 0; j < jLen; j += 1) {
		            localShapeCollection.addShape(this.processPath(shapePaths[j], amplitude, frequency, pointType));
		          }
		        }

		        shapeData.shape.paths = shapeData.localShapeCollection;
		      }
		    }

		    if (!this.dynamicProperties.length) {
		      this._mdf = false;
		    }
		  };

		  function linearOffset(p1, p2, amount) {
		    var angle = Math.atan2(p2[0] - p1[0], p2[1] - p1[1]);
		    return [polarOffset(p1, angle, amount), polarOffset(p2, angle, amount)];
		  }

		  function offsetSegment(segment, amount) {
		    var p0;
		    var p1a;
		    var p1b;
		    var p2b;
		    var p2a;
		    var p3;
		    var e;
		    e = linearOffset(segment.points[0], segment.points[1], amount);
		    p0 = e[0];
		    p1a = e[1];
		    e = linearOffset(segment.points[1], segment.points[2], amount);
		    p1b = e[0];
		    p2b = e[1];
		    e = linearOffset(segment.points[2], segment.points[3], amount);
		    p2a = e[0];
		    p3 = e[1];
		    var p1 = lineIntersection(p0, p1a, p1b, p2b);
		    if (p1 === null) p1 = p1a;
		    var p2 = lineIntersection(p2a, p3, p1b, p2b);
		    if (p2 === null) p2 = p2a;
		    return new PolynomialBezier(p0, p1, p2, p3);
		  }

		  function joinLines(outputBezier, seg1, seg2, lineJoin, miterLimit) {
		    var p0 = seg1.points[3];
		    var p1 = seg2.points[0]; // Bevel

		    if (lineJoin === 3) return p0; // Connected, they don't need a joint

		    if (pointEqual(p0, p1)) return p0; // Round

		    if (lineJoin === 2) {
		      var angleOut = -seg1.tangentAngle(1);
		      var angleIn = -seg2.tangentAngle(0) + Math.PI;
		      var center = lineIntersection(p0, polarOffset(p0, angleOut + Math.PI / 2, 100), p1, polarOffset(p1, angleOut + Math.PI / 2, 100));
		      var radius = center ? pointDistance(center, p0) : pointDistance(p0, p1) / 2;
		      var tan = polarOffset(p0, angleOut, 2 * radius * roundCorner);
		      outputBezier.setXYAt(tan[0], tan[1], 'o', outputBezier.length() - 1);
		      tan = polarOffset(p1, angleIn, 2 * radius * roundCorner);
		      outputBezier.setTripleAt(p1[0], p1[1], p1[0], p1[1], tan[0], tan[1], outputBezier.length());
		      return p1;
		    } // Miter


		    var t0 = pointEqual(p0, seg1.points[2]) ? seg1.points[0] : seg1.points[2];
		    var t1 = pointEqual(p1, seg2.points[1]) ? seg2.points[3] : seg2.points[1];
		    var intersection = lineIntersection(t0, p0, p1, t1);

		    if (intersection && pointDistance(intersection, p0) < miterLimit) {
		      outputBezier.setTripleAt(intersection[0], intersection[1], intersection[0], intersection[1], intersection[0], intersection[1], outputBezier.length());
		      return intersection;
		    }

		    return p0;
		  }

		  function getIntersection(a, b) {
		    var intersect = a.intersections(b);
		    if (intersect.length && floatEqual(intersect[0][0], 1)) intersect.shift();
		    if (intersect.length) return intersect[0];
		    return null;
		  }

		  function pruneSegmentIntersection(a, b) {
		    var outa = a.slice();
		    var outb = b.slice();
		    var intersect = getIntersection(a[a.length - 1], b[0]);

		    if (intersect) {
		      outa[a.length - 1] = a[a.length - 1].split(intersect[0])[0];
		      outb[0] = b[0].split(intersect[1])[1];
		    }

		    if (a.length > 1 && b.length > 1) {
		      intersect = getIntersection(a[0], b[b.length - 1]);

		      if (intersect) {
		        return [[a[0].split(intersect[0])[0]], [b[b.length - 1].split(intersect[1])[1]]];
		      }
		    }

		    return [outa, outb];
		  }

		  function pruneIntersections(segments) {
		    var e;

		    for (var i = 1; i < segments.length; i += 1) {
		      e = pruneSegmentIntersection(segments[i - 1], segments[i]);
		      segments[i - 1] = e[0];
		      segments[i] = e[1];
		    }

		    if (segments.length > 1) {
		      e = pruneSegmentIntersection(segments[segments.length - 1], segments[0]);
		      segments[segments.length - 1] = e[0];
		      segments[0] = e[1];
		    }

		    return segments;
		  }

		  function offsetSegmentSplit(segment, amount) {
		    /*
		      We split each bezier segment into smaller pieces based
		      on inflection points, this ensures the control point
		      polygon is convex.
		        (A cubic bezier can have none, one, or two inflection points)
		    */
		    var flex = segment.inflectionPoints();
		    var left;
		    var right;
		    var split;
		    var mid;

		    if (flex.length === 0) {
		      return [offsetSegment(segment, amount)];
		    }

		    if (flex.length === 1 || floatEqual(flex[1], 1)) {
		      split = segment.split(flex[0]);
		      left = split[0];
		      right = split[1];
		      return [offsetSegment(left, amount), offsetSegment(right, amount)];
		    }

		    split = segment.split(flex[0]);
		    left = split[0];
		    var t = (flex[1] - flex[0]) / (1 - flex[0]);
		    split = split[1].split(t);
		    mid = split[0];
		    right = split[1];
		    return [offsetSegment(left, amount), offsetSegment(mid, amount), offsetSegment(right, amount)];
		  }

		  function OffsetPathModifier() {}

		  extendPrototype([ShapeModifier], OffsetPathModifier);

		  OffsetPathModifier.prototype.initModifierProperties = function (elem, data) {
		    this.getValue = this.processKeys;
		    this.amount = PropertyFactory.getProp(elem, data.a, 0, null, this);
		    this.miterLimit = PropertyFactory.getProp(elem, data.ml, 0, null, this);
		    this.lineJoin = data.lj;
		    this._isAnimated = this.amount.effectsSequence.length !== 0;
		  };

		  OffsetPathModifier.prototype.processPath = function (inputBezier, amount, lineJoin, miterLimit) {
		    var outputBezier = shapePool.newElement();
		    outputBezier.c = inputBezier.c;
		    var count = inputBezier.length();

		    if (!inputBezier.c) {
		      count -= 1;
		    }

		    var i;
		    var j;
		    var segment;
		    var multiSegments = [];

		    for (i = 0; i < count; i += 1) {
		      segment = PolynomialBezier.shapeSegment(inputBezier, i);
		      multiSegments.push(offsetSegmentSplit(segment, amount));
		    }

		    if (!inputBezier.c) {
		      for (i = count - 1; i >= 0; i -= 1) {
		        segment = PolynomialBezier.shapeSegmentInverted(inputBezier, i);
		        multiSegments.push(offsetSegmentSplit(segment, amount));
		      }
		    }

		    multiSegments = pruneIntersections(multiSegments); // Add bezier segments to the output and apply line joints

		    var lastPoint = null;
		    var lastSeg = null;

		    for (i = 0; i < multiSegments.length; i += 1) {
		      var multiSegment = multiSegments[i];
		      if (lastSeg) lastPoint = joinLines(outputBezier, lastSeg, multiSegment[0], lineJoin, miterLimit);
		      lastSeg = multiSegment[multiSegment.length - 1];

		      for (j = 0; j < multiSegment.length; j += 1) {
		        segment = multiSegment[j];

		        if (lastPoint && pointEqual(segment.points[0], lastPoint)) {
		          outputBezier.setXYAt(segment.points[1][0], segment.points[1][1], 'o', outputBezier.length() - 1);
		        } else {
		          outputBezier.setTripleAt(segment.points[0][0], segment.points[0][1], segment.points[1][0], segment.points[1][1], segment.points[0][0], segment.points[0][1], outputBezier.length());
		        }

		        outputBezier.setTripleAt(segment.points[3][0], segment.points[3][1], segment.points[3][0], segment.points[3][1], segment.points[2][0], segment.points[2][1], outputBezier.length());
		        lastPoint = segment.points[3];
		      }
		    }

		    if (multiSegments.length) joinLines(outputBezier, lastSeg, multiSegments[0][0], lineJoin, miterLimit);
		    return outputBezier;
		  };

		  OffsetPathModifier.prototype.processShapes = function (_isFirstFrame) {
		    var shapePaths;
		    var i;
		    var len = this.shapes.length;
		    var j;
		    var jLen;
		    var amount = this.amount.v;
		    var miterLimit = this.miterLimit.v;
		    var lineJoin = this.lineJoin;

		    if (amount !== 0) {
		      var shapeData;
		      var localShapeCollection;

		      for (i = 0; i < len; i += 1) {
		        shapeData = this.shapes[i];
		        localShapeCollection = shapeData.localShapeCollection;

		        if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
		          localShapeCollection.releaseShapes();
		          shapeData.shape._mdf = true;
		          shapePaths = shapeData.shape.paths.shapes;
		          jLen = shapeData.shape.paths._length;

		          for (j = 0; j < jLen; j += 1) {
		            localShapeCollection.addShape(this.processPath(shapePaths[j], amount, lineJoin, miterLimit));
		          }
		        }

		        shapeData.shape.paths = shapeData.localShapeCollection;
		      }
		    }

		    if (!this.dynamicProperties.length) {
		      this._mdf = false;
		    }
		  };

		  function getFontProperties(fontData) {
		    var styles = fontData.fStyle ? fontData.fStyle.split(' ') : [];
		    var fWeight = 'normal';
		    var fStyle = 'normal';
		    var len = styles.length;
		    var styleName;

		    for (var i = 0; i < len; i += 1) {
		      styleName = styles[i].toLowerCase();

		      switch (styleName) {
		        case 'italic':
		          fStyle = 'italic';
		          break;

		        case 'bold':
		          fWeight = '700';
		          break;

		        case 'black':
		          fWeight = '900';
		          break;

		        case 'medium':
		          fWeight = '500';
		          break;

		        case 'regular':
		        case 'normal':
		          fWeight = '400';
		          break;

		        case 'light':
		        case 'thin':
		          fWeight = '200';
		          break;
		      }
		    }

		    return {
		      style: fStyle,
		      weight: fontData.fWeight || fWeight
		    };
		  }

		  var FontManager = function () {
		    var maxWaitingTime = 5000;
		    var emptyChar = {
		      w: 0,
		      size: 0,
		      shapes: [],
		      data: {
		        shapes: []
		      }
		    };
		    var combinedCharacters = []; // Hindi characters

		    combinedCharacters = combinedCharacters.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
		    var BLACK_FLAG_CODE_POINT = 127988;
		    var CANCEL_TAG_CODE_POINT = 917631;
		    var A_TAG_CODE_POINT = 917601;
		    var Z_TAG_CODE_POINT = 917626;
		    var VARIATION_SELECTOR_16_CODE_POINT = 65039;
		    var ZERO_WIDTH_JOINER_CODE_POINT = 8205;
		    var REGIONAL_CHARACTER_A_CODE_POINT = 127462;
		    var REGIONAL_CHARACTER_Z_CODE_POINT = 127487;
		    var surrogateModifiers = ['d83cdffb', 'd83cdffc', 'd83cdffd', 'd83cdffe', 'd83cdfff'];

		    function trimFontOptions(font) {
		      var familyArray = font.split(',');
		      var i;
		      var len = familyArray.length;
		      var enabledFamilies = [];

		      for (i = 0; i < len; i += 1) {
		        if (familyArray[i] !== 'sans-serif' && familyArray[i] !== 'monospace') {
		          enabledFamilies.push(familyArray[i]);
		        }
		      }

		      return enabledFamilies.join(',');
		    }

		    function setUpNode(font, family) {
		      var parentNode = createTag('span'); // Node is invisible to screen readers.

		      parentNode.setAttribute('aria-hidden', true);
		      parentNode.style.fontFamily = family;
		      var node = createTag('span'); // Characters that vary significantly among different fonts

		      node.innerText = 'giItT1WQy@!-/#'; // Visible - so we can measure it - but not on the screen

		      parentNode.style.position = 'absolute';
		      parentNode.style.left = '-10000px';
		      parentNode.style.top = '-10000px'; // Large font size makes even subtle changes obvious

		      parentNode.style.fontSize = '300px'; // Reset any font properties

		      parentNode.style.fontVariant = 'normal';
		      parentNode.style.fontStyle = 'normal';
		      parentNode.style.fontWeight = 'normal';
		      parentNode.style.letterSpacing = '0';
		      parentNode.appendChild(node);
		      document.body.appendChild(parentNode); // Remember width with no applied web font

		      var width = node.offsetWidth;
		      node.style.fontFamily = trimFontOptions(font) + ', ' + family;
		      return {
		        node: node,
		        w: width,
		        parent: parentNode
		      };
		    }

		    function checkLoadedFonts() {
		      var i;
		      var len = this.fonts.length;
		      var node;
		      var w;
		      var loadedCount = len;

		      for (i = 0; i < len; i += 1) {
		        if (this.fonts[i].loaded) {
		          loadedCount -= 1;
		        } else if (this.fonts[i].fOrigin === 'n' || this.fonts[i].origin === 0) {
		          this.fonts[i].loaded = true;
		        } else {
		          node = this.fonts[i].monoCase.node;
		          w = this.fonts[i].monoCase.w;

		          if (node.offsetWidth !== w) {
		            loadedCount -= 1;
		            this.fonts[i].loaded = true;
		          } else {
		            node = this.fonts[i].sansCase.node;
		            w = this.fonts[i].sansCase.w;

		            if (node.offsetWidth !== w) {
		              loadedCount -= 1;
		              this.fonts[i].loaded = true;
		            }
		          }

		          if (this.fonts[i].loaded) {
		            this.fonts[i].sansCase.parent.parentNode.removeChild(this.fonts[i].sansCase.parent);
		            this.fonts[i].monoCase.parent.parentNode.removeChild(this.fonts[i].monoCase.parent);
		          }
		        }
		      }

		      if (loadedCount !== 0 && Date.now() - this.initTime < maxWaitingTime) {
		        setTimeout(this.checkLoadedFontsBinded, 20);
		      } else {
		        setTimeout(this.setIsLoadedBinded, 10);
		      }
		    }

		    function createHelper(fontData, def) {
		      var engine = document.body && def ? 'svg' : 'canvas';
		      var helper;
		      var fontProps = getFontProperties(fontData);

		      if (engine === 'svg') {
		        var tHelper = createNS('text');
		        tHelper.style.fontSize = '100px'; // tHelper.style.fontFamily = fontData.fFamily;

		        tHelper.setAttribute('font-family', fontData.fFamily);
		        tHelper.setAttribute('font-style', fontProps.style);
		        tHelper.setAttribute('font-weight', fontProps.weight);
		        tHelper.textContent = '1';

		        if (fontData.fClass) {
		          tHelper.style.fontFamily = 'inherit';
		          tHelper.setAttribute('class', fontData.fClass);
		        } else {
		          tHelper.style.fontFamily = fontData.fFamily;
		        }

		        def.appendChild(tHelper);
		        helper = tHelper;
		      } else {
		        var tCanvasHelper = new OffscreenCanvas(500, 500).getContext('2d');
		        tCanvasHelper.font = fontProps.style + ' ' + fontProps.weight + ' 100px ' + fontData.fFamily;
		        helper = tCanvasHelper;
		      }

		      function measure(text) {
		        if (engine === 'svg') {
		          helper.textContent = text;
		          return helper.getComputedTextLength();
		        }

		        return helper.measureText(text).width;
		      }

		      return {
		        measureText: measure
		      };
		    }

		    function addFonts(fontData, defs) {
		      if (!fontData) {
		        this.isLoaded = true;
		        return;
		      }

		      if (this.chars) {
		        this.isLoaded = true;
		        this.fonts = fontData.list;
		        return;
		      }

		      if (!document.body) {
		        this.isLoaded = true;
		        fontData.list.forEach(function (data) {
		          data.helper = createHelper(data);
		          data.cache = {};
		        });
		        this.fonts = fontData.list;
		        return;
		      }

		      var fontArr = fontData.list;
		      var i;
		      var len = fontArr.length;
		      var _pendingFonts = len;

		      for (i = 0; i < len; i += 1) {
		        var shouldLoadFont = true;
		        var loadedSelector;
		        var j;
		        fontArr[i].loaded = false;
		        fontArr[i].monoCase = setUpNode(fontArr[i].fFamily, 'monospace');
		        fontArr[i].sansCase = setUpNode(fontArr[i].fFamily, 'sans-serif');

		        if (!fontArr[i].fPath) {
		          fontArr[i].loaded = true;
		          _pendingFonts -= 1;
		        } else if (fontArr[i].fOrigin === 'p' || fontArr[i].origin === 3) {
		          loadedSelector = document.querySelectorAll('style[f-forigin="p"][f-family="' + fontArr[i].fFamily + '"], style[f-origin="3"][f-family="' + fontArr[i].fFamily + '"]');

		          if (loadedSelector.length > 0) {
		            shouldLoadFont = false;
		          }

		          if (shouldLoadFont) {
		            var s = createTag('style');
		            s.setAttribute('f-forigin', fontArr[i].fOrigin);
		            s.setAttribute('f-origin', fontArr[i].origin);
		            s.setAttribute('f-family', fontArr[i].fFamily);
		            s.type = 'text/css';
		            s.innerText = '@font-face {font-family: ' + fontArr[i].fFamily + "; font-style: normal; src: url('" + fontArr[i].fPath + "');}";
		            defs.appendChild(s);
		          }
		        } else if (fontArr[i].fOrigin === 'g' || fontArr[i].origin === 1) {
		          loadedSelector = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]');

		          for (j = 0; j < loadedSelector.length; j += 1) {
		            if (loadedSelector[j].href.indexOf(fontArr[i].fPath) !== -1) {
		              // Font is already loaded
		              shouldLoadFont = false;
		            }
		          }

		          if (shouldLoadFont) {
		            var l = createTag('link');
		            l.setAttribute('f-forigin', fontArr[i].fOrigin);
		            l.setAttribute('f-origin', fontArr[i].origin);
		            l.type = 'text/css';
		            l.rel = 'stylesheet';
		            l.href = fontArr[i].fPath;
		            document.body.appendChild(l);
		          }
		        } else if (fontArr[i].fOrigin === 't' || fontArr[i].origin === 2) {
		          loadedSelector = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]');

		          for (j = 0; j < loadedSelector.length; j += 1) {
		            if (fontArr[i].fPath === loadedSelector[j].src) {
		              // Font is already loaded
		              shouldLoadFont = false;
		            }
		          }

		          if (shouldLoadFont) {
		            var sc = createTag('link');
		            sc.setAttribute('f-forigin', fontArr[i].fOrigin);
		            sc.setAttribute('f-origin', fontArr[i].origin);
		            sc.setAttribute('rel', 'stylesheet');
		            sc.setAttribute('href', fontArr[i].fPath);
		            defs.appendChild(sc);
		          }
		        }

		        fontArr[i].helper = createHelper(fontArr[i], defs);
		        fontArr[i].cache = {};
		        this.fonts.push(fontArr[i]);
		      }

		      if (_pendingFonts === 0) {
		        this.isLoaded = true;
		      } else {
		        // On some cases even if the font is loaded, it won't load correctly when measuring text on canvas.
		        // Adding this timeout seems to fix it
		        setTimeout(this.checkLoadedFonts.bind(this), 100);
		      }
		    }

		    function addChars(chars) {
		      if (!chars) {
		        return;
		      }

		      if (!this.chars) {
		        this.chars = [];
		      }

		      var i;
		      var len = chars.length;
		      var j;
		      var jLen = this.chars.length;
		      var found;

		      for (i = 0; i < len; i += 1) {
		        j = 0;
		        found = false;

		        while (j < jLen) {
		          if (this.chars[j].style === chars[i].style && this.chars[j].fFamily === chars[i].fFamily && this.chars[j].ch === chars[i].ch) {
		            found = true;
		          }

		          j += 1;
		        }

		        if (!found) {
		          this.chars.push(chars[i]);
		          jLen += 1;
		        }
		      }
		    }

		    function getCharData(_char, style, font) {
		      var i = 0;
		      var len = this.chars.length;

		      while (i < len) {
		        if (this.chars[i].ch === _char && this.chars[i].style === style && this.chars[i].fFamily === font) {
		          return this.chars[i];
		        }

		        i += 1;
		      }

		      if ((typeof _char === 'string' && _char.charCodeAt(0) !== 13 || !_char) && console && console.warn // eslint-disable-line no-console
		      && !this._warned) {
		        this._warned = true;
		        console.warn('Missing character from exported characters list: ', _char, style, font); // eslint-disable-line no-console
		      }

		      return emptyChar;
		    }

		    function measureText(_char2, fontName, size) {
		      var fontData = this.getFontByName(fontName); // Using the char instead of char.charCodeAt(0)
		      // to avoid collisions between equal chars

		      var index = _char2;

		      if (!fontData.cache[index]) {
		        var tHelper = fontData.helper;

		        if (_char2 === ' ') {
		          var doubleSize = tHelper.measureText('|' + _char2 + '|');
		          var singleSize = tHelper.measureText('||');
		          fontData.cache[index] = (doubleSize - singleSize) / 100;
		        } else {
		          fontData.cache[index] = tHelper.measureText(_char2) / 100;
		        }
		      }

		      return fontData.cache[index] * size;
		    }

		    function getFontByName(name) {
		      var i = 0;
		      var len = this.fonts.length;

		      while (i < len) {
		        if (this.fonts[i].fName === name) {
		          return this.fonts[i];
		        }

		        i += 1;
		      }

		      return this.fonts[0];
		    }

		    function getCodePoint(string) {
		      var codePoint = 0;
		      var first = string.charCodeAt(0);

		      if (first >= 0xD800 && first <= 0xDBFF) {
		        var second = string.charCodeAt(1);

		        if (second >= 0xDC00 && second <= 0xDFFF) {
		          codePoint = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
		        }
		      }

		      return codePoint;
		    } // Skin tone modifiers


		    function isModifier(firstCharCode, secondCharCode) {
		      var sum = firstCharCode.toString(16) + secondCharCode.toString(16);
		      return surrogateModifiers.indexOf(sum) !== -1;
		    }

		    function isZeroWidthJoiner(charCode) {
		      return charCode === ZERO_WIDTH_JOINER_CODE_POINT;
		    } // This codepoint may change the appearance of the preceding character.
		    // If that is a symbol, dingbat or emoji, U+FE0F forces it to be rendered
		    // as a colorful image as compared to a monochrome text variant.


		    function isVariationSelector(charCode) {
		      return charCode === VARIATION_SELECTOR_16_CODE_POINT;
		    } // The regional indicator symbols are a set of 26 alphabetic Unicode
		    /// characters (A–Z) intended to be used to encode ISO 3166-1 alpha-2
		    // two-letter country codes in a way that allows optional special treatment.


		    function isRegionalCode(string) {
		      var codePoint = getCodePoint(string);

		      if (codePoint >= REGIONAL_CHARACTER_A_CODE_POINT && codePoint <= REGIONAL_CHARACTER_Z_CODE_POINT) {
		        return true;
		      }

		      return false;
		    } // Some Emoji implementations represent combinations of
		    // two “regional indicator” letters as a single flag symbol.


		    function isFlagEmoji(string) {
		      return isRegionalCode(string.substr(0, 2)) && isRegionalCode(string.substr(2, 2));
		    }

		    function isCombinedCharacter(_char3) {
		      return combinedCharacters.indexOf(_char3) !== -1;
		    } // Regional flags start with a BLACK_FLAG_CODE_POINT
		    // folowed by 5 chars in the TAG range
		    // and end with a CANCEL_TAG_CODE_POINT


		    function isRegionalFlag(text, index) {
		      var codePoint = getCodePoint(text.substr(index, 2));

		      if (codePoint !== BLACK_FLAG_CODE_POINT) {
		        return false;
		      }

		      var count = 0;
		      index += 2;

		      while (count < 5) {
		        codePoint = getCodePoint(text.substr(index, 2));

		        if (codePoint < A_TAG_CODE_POINT || codePoint > Z_TAG_CODE_POINT) {
		          return false;
		        }

		        count += 1;
		        index += 2;
		      }

		      return getCodePoint(text.substr(index, 2)) === CANCEL_TAG_CODE_POINT;
		    }

		    function setIsLoaded() {
		      this.isLoaded = true;
		    }

		    var Font = function Font() {
		      this.fonts = [];
		      this.chars = null;
		      this.typekitLoaded = 0;
		      this.isLoaded = false;
		      this._warned = false;
		      this.initTime = Date.now();
		      this.setIsLoadedBinded = this.setIsLoaded.bind(this);
		      this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
		    };

		    Font.isModifier = isModifier;
		    Font.isZeroWidthJoiner = isZeroWidthJoiner;
		    Font.isFlagEmoji = isFlagEmoji;
		    Font.isRegionalCode = isRegionalCode;
		    Font.isCombinedCharacter = isCombinedCharacter;
		    Font.isRegionalFlag = isRegionalFlag;
		    Font.isVariationSelector = isVariationSelector;
		    Font.BLACK_FLAG_CODE_POINT = BLACK_FLAG_CODE_POINT;
		    var fontPrototype = {
		      addChars: addChars,
		      addFonts: addFonts,
		      getCharData: getCharData,
		      getFontByName: getFontByName,
		      measureText: measureText,
		      checkLoadedFonts: checkLoadedFonts,
		      setIsLoaded: setIsLoaded
		    };
		    Font.prototype = fontPrototype;
		    return Font;
		  }();

		  function SlotManager(animationData) {
		    this.animationData = animationData;
		  }

		  SlotManager.prototype.getProp = function (data) {
		    if (this.animationData.slots && this.animationData.slots[data.sid]) {
		      return Object.assign(data, this.animationData.slots[data.sid].p);
		    }

		    return data;
		  };

		  function slotFactory(animationData) {
		    return new SlotManager(animationData);
		  }

		  function RenderableElement() {}

		  RenderableElement.prototype = {
		    initRenderable: function initRenderable() {
		      // layer's visibility related to inpoint and outpoint. Rename isVisible to isInRange
		      this.isInRange = false; // layer's display state

		      this.hidden = false; // If layer's transparency equals 0, it can be hidden

		      this.isTransparent = false; // list of animated components

		      this.renderableComponents = [];
		    },
		    addRenderableComponent: function addRenderableComponent(component) {
		      if (this.renderableComponents.indexOf(component) === -1) {
		        this.renderableComponents.push(component);
		      }
		    },
		    removeRenderableComponent: function removeRenderableComponent(component) {
		      if (this.renderableComponents.indexOf(component) !== -1) {
		        this.renderableComponents.splice(this.renderableComponents.indexOf(component), 1);
		      }
		    },
		    prepareRenderableFrame: function prepareRenderableFrame(num) {
		      this.checkLayerLimits(num);
		    },
		    checkTransparency: function checkTransparency() {
		      if (this.finalTransform.mProp.o.v <= 0) {
		        if (!this.isTransparent && this.globalData.renderConfig.hideOnTransparent) {
		          this.isTransparent = true;
		          this.hide();
		        }
		      } else if (this.isTransparent) {
		        this.isTransparent = false;
		        this.show();
		      }
		    },

		    /**
		       * @function
		       * Initializes frame related properties.
		       *
		       * @param {number} num
		       * current frame number in Layer's time
		       *
		       */
		    checkLayerLimits: function checkLayerLimits(num) {
		      if (this.data.ip - this.data.st <= num && this.data.op - this.data.st > num) {
		        if (this.isInRange !== true) {
		          this.globalData._mdf = true;
		          this._mdf = true;
		          this.isInRange = true;
		          this.show();
		        }
		      } else if (this.isInRange !== false) {
		        this.globalData._mdf = true;
		        this.isInRange = false;
		        this.hide();
		      }
		    },
		    renderRenderable: function renderRenderable() {
		      var i;
		      var len = this.renderableComponents.length;

		      for (i = 0; i < len; i += 1) {
		        this.renderableComponents[i].renderFrame(this._isFirstFrame);
		      }
		      /* this.maskManager.renderFrame(this.finalTransform.mat);
		          this.renderableEffectsManager.renderFrame(this._isFirstFrame); */

		    },
		    sourceRectAtTime: function sourceRectAtTime() {
		      return {
		        top: 0,
		        left: 0,
		        width: 100,
		        height: 100
		      };
		    },
		    getLayerSize: function getLayerSize() {
		      if (this.data.ty === 5) {
		        return {
		          w: this.data.textData.width,
		          h: this.data.textData.height
		        };
		      }

		      return {
		        w: this.data.width,
		        h: this.data.height
		      };
		    }
		  };

		  var getBlendMode = function () {
		    var blendModeEnums = {
		      0: 'source-over',
		      1: 'multiply',
		      2: 'screen',
		      3: 'overlay',
		      4: 'darken',
		      5: 'lighten',
		      6: 'color-dodge',
		      7: 'color-burn',
		      8: 'hard-light',
		      9: 'soft-light',
		      10: 'difference',
		      11: 'exclusion',
		      12: 'hue',
		      13: 'saturation',
		      14: 'color',
		      15: 'luminosity'
		    };
		    return function (mode) {
		      return blendModeEnums[mode] || '';
		    };
		  }();

		  function SliderEffect(data, elem, container) {
		    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
		  }

		  function AngleEffect(data, elem, container) {
		    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
		  }

		  function ColorEffect(data, elem, container) {
		    this.p = PropertyFactory.getProp(elem, data.v, 1, 0, container);
		  }

		  function PointEffect(data, elem, container) {
		    this.p = PropertyFactory.getProp(elem, data.v, 1, 0, container);
		  }

		  function LayerIndexEffect(data, elem, container) {
		    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
		  }

		  function MaskIndexEffect(data, elem, container) {
		    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
		  }

		  function CheckboxEffect(data, elem, container) {
		    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
		  }

		  function NoValueEffect() {
		    this.p = {};
		  }

		  function EffectsManager(data, element) {
		    var effects = data.ef || [];
		    this.effectElements = [];
		    var i;
		    var len = effects.length;
		    var effectItem;

		    for (i = 0; i < len; i += 1) {
		      effectItem = new GroupEffect(effects[i], element);
		      this.effectElements.push(effectItem);
		    }
		  }

		  function GroupEffect(data, element) {
		    this.init(data, element);
		  }

		  extendPrototype([DynamicPropertyContainer], GroupEffect);
		  GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties;

		  GroupEffect.prototype.init = function (data, element) {
		    this.data = data;
		    this.effectElements = [];
		    this.initDynamicPropertyContainer(element);
		    var i;
		    var len = this.data.ef.length;
		    var eff;
		    var effects = this.data.ef;

		    for (i = 0; i < len; i += 1) {
		      eff = null;

		      switch (effects[i].ty) {
		        case 0:
		          eff = new SliderEffect(effects[i], element, this);
		          break;

		        case 1:
		          eff = new AngleEffect(effects[i], element, this);
		          break;

		        case 2:
		          eff = new ColorEffect(effects[i], element, this);
		          break;

		        case 3:
		          eff = new PointEffect(effects[i], element, this);
		          break;

		        case 4:
		        case 7:
		          eff = new CheckboxEffect(effects[i], element, this);
		          break;

		        case 10:
		          eff = new LayerIndexEffect(effects[i], element, this);
		          break;

		        case 11:
		          eff = new MaskIndexEffect(effects[i], element, this);
		          break;

		        case 5:
		          eff = new EffectsManager(effects[i], element);
		          break;
		        // case 6:

		        default:
		          eff = new NoValueEffect(effects[i]);
		          break;
		      }

		      if (eff) {
		        this.effectElements.push(eff);
		      }
		    }
		  };

		  function BaseElement() {}

		  BaseElement.prototype = {
		    checkMasks: function checkMasks() {
		      if (!this.data.hasMask) {
		        return false;
		      }

		      var i = 0;
		      var len = this.data.masksProperties.length;

		      while (i < len) {
		        if (this.data.masksProperties[i].mode !== 'n' && this.data.masksProperties[i].cl !== false) {
		          return true;
		        }

		        i += 1;
		      }

		      return false;
		    },
		    initExpressions: function initExpressions() {
		      var expressionsInterfaces = getExpressionInterfaces();

		      if (!expressionsInterfaces) {
		        return;
		      }

		      var LayerExpressionInterface = expressionsInterfaces('layer');
		      var EffectsExpressionInterface = expressionsInterfaces('effects');
		      var ShapeExpressionInterface = expressionsInterfaces('shape');
		      var TextExpressionInterface = expressionsInterfaces('text');
		      var CompExpressionInterface = expressionsInterfaces('comp');
		      this.layerInterface = LayerExpressionInterface(this);

		      if (this.data.hasMask && this.maskManager) {
		        this.layerInterface.registerMaskInterface(this.maskManager);
		      }

		      var effectsInterface = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
		      this.layerInterface.registerEffectsInterface(effectsInterface);

		      if (this.data.ty === 0 || this.data.xt) {
		        this.compInterface = CompExpressionInterface(this);
		      } else if (this.data.ty === 4) {
		        this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface);
		        this.layerInterface.content = this.layerInterface.shapeInterface;
		      } else if (this.data.ty === 5) {
		        this.layerInterface.textInterface = TextExpressionInterface(this);
		        this.layerInterface.text = this.layerInterface.textInterface;
		      }
		    },
		    setBlendMode: function setBlendMode() {
		      var blendModeValue = getBlendMode(this.data.bm);
		      var elem = this.baseElement || this.layerElement;
		      elem.style['mix-blend-mode'] = blendModeValue;
		    },
		    initBaseData: function initBaseData(data, globalData, comp) {
		      this.globalData = globalData;
		      this.comp = comp;
		      this.data = data;
		      this.layerId = createElementID(); // Stretch factor for old animations missing this property.

		      if (!this.data.sr) {
		        this.data.sr = 1;
		      } // effects manager


		      this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
		    },
		    getType: function getType() {
		      return this.type;
		    },
		    sourceRectAtTime: function sourceRectAtTime() {}
		  };

		  /**
		   * @file
		   * Handles element's layer frame update.
		   * Checks layer in point and out point
		   *
		   */
		  function FrameElement() {}

		  FrameElement.prototype = {
		    /**
		       * @function
		       * Initializes frame related properties.
		       *
		       */
		    initFrame: function initFrame() {
		      // set to true when inpoint is rendered
		      this._isFirstFrame = false; // list of animated properties

		      this.dynamicProperties = []; // If layer has been modified in current tick this will be true

		      this._mdf = false;
		    },

		    /**
		       * @function
		       * Calculates all dynamic values
		       *
		       * @param {number} num
		       * current frame number in Layer's time
		       * @param {boolean} isVisible
		       * if layers is currently in range
		       *
		       */
		    prepareProperties: function prepareProperties(num, isVisible) {
		      var i;
		      var len = this.dynamicProperties.length;

		      for (i = 0; i < len; i += 1) {
		        if (isVisible || this._isParent && this.dynamicProperties[i].propType === 'transform') {
		          this.dynamicProperties[i].getValue();

		          if (this.dynamicProperties[i]._mdf) {
		            this.globalData._mdf = true;
		            this._mdf = true;
		          }
		        }
		      }
		    },
		    addDynamicProperty: function addDynamicProperty(prop) {
		      if (this.dynamicProperties.indexOf(prop) === -1) {
		        this.dynamicProperties.push(prop);
		      }
		    }
		  };

		  function FootageElement(data, globalData, comp) {
		    this.initFrame();
		    this.initRenderable();
		    this.assetData = globalData.getAssetData(data.refId);
		    this.footageData = globalData.imageLoader.getAsset(this.assetData);
		    this.initBaseData(data, globalData, comp);
		  }

		  FootageElement.prototype.prepareFrame = function () {};

		  extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement);

		  FootageElement.prototype.getBaseElement = function () {
		    return null;
		  };

		  FootageElement.prototype.renderFrame = function () {};

		  FootageElement.prototype.destroy = function () {};

		  FootageElement.prototype.initExpressions = function () {
		    var expressionsInterfaces = getExpressionInterfaces();

		    if (!expressionsInterfaces) {
		      return;
		    }

		    var FootageInterface = expressionsInterfaces('footage');
		    this.layerInterface = FootageInterface(this);
		  };

		  FootageElement.prototype.getFootageData = function () {
		    return this.footageData;
		  };

		  function AudioElement(data, globalData, comp) {
		    this.initFrame();
		    this.initRenderable();
		    this.assetData = globalData.getAssetData(data.refId);
		    this.initBaseData(data, globalData, comp);
		    this._isPlaying = false;
		    this._canPlay = false;
		    var assetPath = this.globalData.getAssetsPath(this.assetData);
		    this.audio = this.globalData.audioController.createAudio(assetPath);
		    this._currentTime = 0;
		    this.globalData.audioController.addAudio(this);
		    this._volumeMultiplier = 1;
		    this._volume = 1;
		    this._previousVolume = null;
		    this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : {
		      _placeholder: true
		    };
		    this.lv = PropertyFactory.getProp(this, data.au && data.au.lv ? data.au.lv : {
		      k: [100]
		    }, 1, 0.01, this);
		  }

		  AudioElement.prototype.prepareFrame = function (num) {
		    this.prepareRenderableFrame(num, true);
		    this.prepareProperties(num, true);

		    if (!this.tm._placeholder) {
		      var timeRemapped = this.tm.v;
		      this._currentTime = timeRemapped;
		    } else {
		      this._currentTime = num / this.data.sr;
		    }

		    this._volume = this.lv.v[0];
		    var totalVolume = this._volume * this._volumeMultiplier;

		    if (this._previousVolume !== totalVolume) {
		      this._previousVolume = totalVolume;
		      this.audio.volume(totalVolume);
		    }
		  };

		  extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement);

		  AudioElement.prototype.renderFrame = function () {
		    if (this.isInRange && this._canPlay) {
		      if (!this._isPlaying) {
		        this.audio.play();
		        this.audio.seek(this._currentTime / this.globalData.frameRate);
		        this._isPlaying = true;
		      } else if (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) {
		        this.audio.seek(this._currentTime / this.globalData.frameRate);
		      }
		    }
		  };

		  AudioElement.prototype.show = function () {// this.audio.play()
		  };

		  AudioElement.prototype.hide = function () {
		    this.audio.pause();
		    this._isPlaying = false;
		  };

		  AudioElement.prototype.pause = function () {
		    this.audio.pause();
		    this._isPlaying = false;
		    this._canPlay = false;
		  };

		  AudioElement.prototype.resume = function () {
		    this._canPlay = true;
		  };

		  AudioElement.prototype.setRate = function (rateValue) {
		    this.audio.rate(rateValue);
		  };

		  AudioElement.prototype.volume = function (volumeValue) {
		    this._volumeMultiplier = volumeValue;
		    this._previousVolume = volumeValue * this._volume;
		    this.audio.volume(this._previousVolume);
		  };

		  AudioElement.prototype.getBaseElement = function () {
		    return null;
		  };

		  AudioElement.prototype.destroy = function () {};

		  AudioElement.prototype.sourceRectAtTime = function () {};

		  AudioElement.prototype.initExpressions = function () {};

		  function BaseRenderer() {}

		  BaseRenderer.prototype.checkLayers = function (num) {
		    var i;
		    var len = this.layers.length;
		    var data;
		    this.completeLayers = true;

		    for (i = len - 1; i >= 0; i -= 1) {
		      if (!this.elements[i]) {
		        data = this.layers[i];

		        if (data.ip - data.st <= num - this.layers[i].st && data.op - data.st > num - this.layers[i].st) {
		          this.buildItem(i);
		        }
		      }

		      this.completeLayers = this.elements[i] ? this.completeLayers : false;
		    }

		    this.checkPendingElements();
		  };

		  BaseRenderer.prototype.createItem = function (layer) {
		    switch (layer.ty) {
		      case 2:
		        return this.createImage(layer);

		      case 0:
		        return this.createComp(layer);

		      case 1:
		        return this.createSolid(layer);

		      case 3:
		        return this.createNull(layer);

		      case 4:
		        return this.createShape(layer);

		      case 5:
		        return this.createText(layer);

		      case 6:
		        return this.createAudio(layer);

		      case 13:
		        return this.createCamera(layer);

		      case 15:
		        return this.createFootage(layer);

		      default:
		        return this.createNull(layer);
		    }
		  };

		  BaseRenderer.prototype.createCamera = function () {
		    throw new Error('You\'re using a 3d camera. Try the html renderer.');
		  };

		  BaseRenderer.prototype.createAudio = function (data) {
		    return new AudioElement(data, this.globalData, this);
		  };

		  BaseRenderer.prototype.createFootage = function (data) {
		    return new FootageElement(data, this.globalData, this);
		  };

		  BaseRenderer.prototype.buildAllItems = function () {
		    var i;
		    var len = this.layers.length;

		    for (i = 0; i < len; i += 1) {
		      this.buildItem(i);
		    }

		    this.checkPendingElements();
		  };

		  BaseRenderer.prototype.includeLayers = function (newLayers) {
		    this.completeLayers = false;
		    var i;
		    var len = newLayers.length;
		    var j;
		    var jLen = this.layers.length;

		    for (i = 0; i < len; i += 1) {
		      j = 0;

		      while (j < jLen) {
		        if (this.layers[j].id === newLayers[i].id) {
		          this.layers[j] = newLayers[i];
		          break;
		        }

		        j += 1;
		      }
		    }
		  };

		  BaseRenderer.prototype.setProjectInterface = function (pInterface) {
		    this.globalData.projectInterface = pInterface;
		  };

		  BaseRenderer.prototype.initItems = function () {
		    if (!this.globalData.progressiveLoad) {
		      this.buildAllItems();
		    }
		  };

		  BaseRenderer.prototype.buildElementParenting = function (element, parentName, hierarchy) {
		    var elements = this.elements;
		    var layers = this.layers;
		    var i = 0;
		    var len = layers.length;

		    while (i < len) {
		      if (layers[i].ind == parentName) {
		        // eslint-disable-line eqeqeq
		        if (!elements[i] || elements[i] === true) {
		          this.buildItem(i);
		          this.addPendingElement(element);
		        } else {
		          hierarchy.push(elements[i]);
		          elements[i].setAsParent();

		          if (layers[i].parent !== undefined) {
		            this.buildElementParenting(element, layers[i].parent, hierarchy);
		          } else {
		            element.setHierarchy(hierarchy);
		          }
		        }
		      }

		      i += 1;
		    }
		  };

		  BaseRenderer.prototype.addPendingElement = function (element) {
		    this.pendingElements.push(element);
		  };

		  BaseRenderer.prototype.searchExtraCompositions = function (assets) {
		    var i;
		    var len = assets.length;

		    for (i = 0; i < len; i += 1) {
		      if (assets[i].xt) {
		        var comp = this.createComp(assets[i]);
		        comp.initExpressions();
		        this.globalData.projectInterface.registerComposition(comp);
		      }
		    }
		  };

		  BaseRenderer.prototype.getElementById = function (ind) {
		    var i;
		    var len = this.elements.length;

		    for (i = 0; i < len; i += 1) {
		      if (this.elements[i].data.ind === ind) {
		        return this.elements[i];
		      }
		    }

		    return null;
		  };

		  BaseRenderer.prototype.getElementByPath = function (path) {
		    var pathValue = path.shift();
		    var element;

		    if (typeof pathValue === 'number') {
		      element = this.elements[pathValue];
		    } else {
		      var i;
		      var len = this.elements.length;

		      for (i = 0; i < len; i += 1) {
		        if (this.elements[i].data.nm === pathValue) {
		          element = this.elements[i];
		          break;
		        }
		      }
		    }

		    if (path.length === 0) {
		      return element;
		    }

		    return element.getElementByPath(path);
		  };

		  BaseRenderer.prototype.setupGlobalData = function (animData, fontsContainer) {
		    this.globalData.fontManager = new FontManager();
		    this.globalData.slotManager = slotFactory(animData);
		    this.globalData.fontManager.addChars(animData.chars);
		    this.globalData.fontManager.addFonts(animData.fonts, fontsContainer);
		    this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
		    this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
		    this.globalData.imageLoader = this.animationItem.imagePreloader;
		    this.globalData.audioController = this.animationItem.audioController;
		    this.globalData.frameId = 0;
		    this.globalData.frameRate = animData.fr;
		    this.globalData.nm = animData.nm;
		    this.globalData.compSize = {
		      w: animData.w,
		      h: animData.h
		    };
		  };

		  var effectTypes = {
		    TRANSFORM_EFFECT: 'transformEFfect'
		  };

		  function TransformElement() {}

		  TransformElement.prototype = {
		    initTransform: function initTransform() {
		      var mat = new Matrix();
		      this.finalTransform = {
		        mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
		          o: 0
		        },
		        _matMdf: false,
		        _localMatMdf: false,
		        _opMdf: false,
		        mat: mat,
		        localMat: mat,
		        localOpacity: 1
		      };

		      if (this.data.ao) {
		        this.finalTransform.mProp.autoOriented = true;
		      } // TODO: check TYPE 11: Guided elements


		      if (this.data.ty !== 11) ;
		    },
		    renderTransform: function renderTransform() {
		      this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame;
		      this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame;

		      if (this.hierarchy) {
		        var mat;
		        var finalMat = this.finalTransform.mat;
		        var i = 0;
		        var len = this.hierarchy.length; // Checking if any of the transformation matrices in the hierarchy chain has changed.

		        if (!this.finalTransform._matMdf) {
		          while (i < len) {
		            if (this.hierarchy[i].finalTransform.mProp._mdf) {
		              this.finalTransform._matMdf = true;
		              break;
		            }

		            i += 1;
		          }
		        }

		        if (this.finalTransform._matMdf) {
		          mat = this.finalTransform.mProp.v.props;
		          finalMat.cloneFromProps(mat);

		          for (i = 0; i < len; i += 1) {
		            finalMat.multiply(this.hierarchy[i].finalTransform.mProp.v);
		          }
		        }
		      }

		      if (this.finalTransform._matMdf) {
		        this.finalTransform._localMatMdf = this.finalTransform._matMdf;
		      }

		      if (this.finalTransform._opMdf) {
		        this.finalTransform.localOpacity = this.finalTransform.mProp.o.v;
		      }
		    },
		    renderLocalTransform: function renderLocalTransform() {
		      if (this.localTransforms) {
		        var i = 0;
		        var len = this.localTransforms.length;
		        this.finalTransform._localMatMdf = this.finalTransform._matMdf;

		        if (!this.finalTransform._localMatMdf || !this.finalTransform._opMdf) {
		          while (i < len) {
		            if (this.localTransforms[i]._mdf) {
		              this.finalTransform._localMatMdf = true;
		            }

		            if (this.localTransforms[i]._opMdf && !this.finalTransform._opMdf) {
		              this.finalTransform.localOpacity = this.finalTransform.mProp.o.v;
		              this.finalTransform._opMdf = true;
		            }

		            i += 1;
		          }
		        }

		        if (this.finalTransform._localMatMdf) {
		          var localMat = this.finalTransform.localMat;
		          this.localTransforms[0].matrix.clone(localMat);

		          for (i = 1; i < len; i += 1) {
		            var lmat = this.localTransforms[i].matrix;
		            localMat.multiply(lmat);
		          }

		          localMat.multiply(this.finalTransform.mat);
		        }

		        if (this.finalTransform._opMdf) {
		          var localOp = this.finalTransform.localOpacity;

		          for (i = 0; i < len; i += 1) {
		            localOp *= this.localTransforms[i].opacity * 0.01;
		          }

		          this.finalTransform.localOpacity = localOp;
		        }
		      }
		    },
		    searchEffectTransforms: function searchEffectTransforms() {
		      if (this.renderableEffectsManager) {
		        var transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);

		        if (transformEffects.length) {
		          this.localTransforms = [];
		          this.finalTransform.localMat = new Matrix();
		          var i = 0;
		          var len = transformEffects.length;

		          for (i = 0; i < len; i += 1) {
		            this.localTransforms.push(transformEffects[i]);
		          }
		        }
		      }
		    },
		    globalToLocal: function globalToLocal(pt) {
		      var transforms = [];
		      transforms.push(this.finalTransform);
		      var flag = true;
		      var comp = this.comp;

		      while (flag) {
		        if (comp.finalTransform) {
		          if (comp.data.hasMask) {
		            transforms.splice(0, 0, comp.finalTransform);
		          }

		          comp = comp.comp;
		        } else {
		          flag = false;
		        }
		      }

		      var i;
		      var len = transforms.length;
		      var ptNew;

		      for (i = 0; i < len; i += 1) {
		        ptNew = transforms[i].mat.applyToPointArray(0, 0, 0); // ptNew = transforms[i].mat.applyToPointArray(pt[0],pt[1],pt[2]);

		        pt = [pt[0] - ptNew[0], pt[1] - ptNew[1], 0];
		      }

		      return pt;
		    },
		    mHelper: new Matrix()
		  };

		  function MaskElement(data, element, globalData) {
		    this.data = data;
		    this.element = element;
		    this.globalData = globalData;
		    this.storedData = [];
		    this.masksProperties = this.data.masksProperties || [];
		    this.maskElement = null;
		    var defs = this.globalData.defs;
		    var i;
		    var len = this.masksProperties ? this.masksProperties.length : 0;
		    this.viewData = createSizedArray(len);
		    this.solidPath = '';
		    var path;
		    var properties = this.masksProperties;
		    var count = 0;
		    var currentMasks = [];
		    var j;
		    var jLen;
		    var layerId = createElementID();
		    var rect;
		    var expansor;
		    var feMorph;
		    var x;
		    var maskType = 'clipPath';
		    var maskRef = 'clip-path';

		    for (i = 0; i < len; i += 1) {
		      if (properties[i].mode !== 'a' && properties[i].mode !== 'n' || properties[i].inv || properties[i].o.k !== 100 || properties[i].o.x) {
		        maskType = 'mask';
		        maskRef = 'mask';
		      }

		      if ((properties[i].mode === 's' || properties[i].mode === 'i') && count === 0) {
		        rect = createNS('rect');
		        rect.setAttribute('fill', '#ffffff');
		        rect.setAttribute('width', this.element.comp.data.w || 0);
		        rect.setAttribute('height', this.element.comp.data.h || 0);
		        currentMasks.push(rect);
		      } else {
		        rect = null;
		      }

		      path = createNS('path');

		      if (properties[i].mode === 'n') {
		        // TODO move this to a factory or to a constructor
		        this.viewData[i] = {
		          op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
		          prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
		          elem: path,
		          lastPath: ''
		        };
		        defs.appendChild(path);
		      } else {
		        count += 1;
		        path.setAttribute('fill', properties[i].mode === 's' ? '#000000' : '#ffffff');
		        path.setAttribute('clip-rule', 'nonzero');
		        var filterID;

		        if (properties[i].x.k !== 0) {
		          maskType = 'mask';
		          maskRef = 'mask';
		          x = PropertyFactory.getProp(this.element, properties[i].x, 0, null, this.element);
		          filterID = createElementID();
		          expansor = createNS('filter');
		          expansor.setAttribute('id', filterID);
		          feMorph = createNS('feMorphology');
		          feMorph.setAttribute('operator', 'erode');
		          feMorph.setAttribute('in', 'SourceGraphic');
		          feMorph.setAttribute('radius', '0');
		          expansor.appendChild(feMorph);
		          defs.appendChild(expansor);
		          path.setAttribute('stroke', properties[i].mode === 's' ? '#000000' : '#ffffff');
		        } else {
		          feMorph = null;
		          x = null;
		        } // TODO move this to a factory or to a constructor


		        this.storedData[i] = {
		          elem: path,
		          x: x,
		          expan: feMorph,
		          lastPath: '',
		          lastOperator: '',
		          filterId: filterID,
		          lastRadius: 0
		        };

		        if (properties[i].mode === 'i') {
		          jLen = currentMasks.length;
		          var g = createNS('g');

		          for (j = 0; j < jLen; j += 1) {
		            g.appendChild(currentMasks[j]);
		          }

		          var mask = createNS('mask');
		          mask.setAttribute('mask-type', 'alpha');
		          mask.setAttribute('id', layerId + '_' + count);
		          mask.appendChild(path);
		          defs.appendChild(mask);
		          g.setAttribute('mask', 'url(' + getLocationHref() + '#' + layerId + '_' + count + ')');
		          currentMasks.length = 0;
		          currentMasks.push(g);
		        } else {
		          currentMasks.push(path);
		        }

		        if (properties[i].inv && !this.solidPath) {
		          this.solidPath = this.createLayerSolidPath();
		        } // TODO move this to a factory or to a constructor


		        this.viewData[i] = {
		          elem: path,
		          lastPath: '',
		          op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
		          prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
		          invRect: rect
		        };

		        if (!this.viewData[i].prop.k) {
		          this.drawPath(properties[i], this.viewData[i].prop.v, this.viewData[i]);
		        }
		      }
		    }

		    this.maskElement = createNS(maskType);
		    len = currentMasks.length;

		    for (i = 0; i < len; i += 1) {
		      this.maskElement.appendChild(currentMasks[i]);
		    }

		    if (count > 0) {
		      this.maskElement.setAttribute('id', layerId);
		      this.element.maskedElement.setAttribute(maskRef, 'url(' + getLocationHref() + '#' + layerId + ')');
		      defs.appendChild(this.maskElement);
		    }

		    if (this.viewData.length) {
		      this.element.addRenderableComponent(this);
		    }
		  }

		  MaskElement.prototype.getMaskProperty = function (pos) {
		    return this.viewData[pos].prop;
		  };

		  MaskElement.prototype.renderFrame = function (isFirstFrame) {
		    var finalMat = this.element.finalTransform.mat;
		    var i;
		    var len = this.masksProperties.length;

		    for (i = 0; i < len; i += 1) {
		      if (this.viewData[i].prop._mdf || isFirstFrame) {
		        this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]);
		      }

		      if (this.viewData[i].op._mdf || isFirstFrame) {
		        this.viewData[i].elem.setAttribute('fill-opacity', this.viewData[i].op.v);
		      }

		      if (this.masksProperties[i].mode !== 'n') {
		        if (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || isFirstFrame)) {
		          this.viewData[i].invRect.setAttribute('transform', finalMat.getInverseMatrix().to2dCSS());
		        }

		        if (this.storedData[i].x && (this.storedData[i].x._mdf || isFirstFrame)) {
		          var feMorph = this.storedData[i].expan;

		          if (this.storedData[i].x.v < 0) {
		            if (this.storedData[i].lastOperator !== 'erode') {
		              this.storedData[i].lastOperator = 'erode';
		              this.storedData[i].elem.setAttribute('filter', 'url(' + getLocationHref() + '#' + this.storedData[i].filterId + ')');
		            }

		            feMorph.setAttribute('radius', -this.storedData[i].x.v);
		          } else {
		            if (this.storedData[i].lastOperator !== 'dilate') {
		              this.storedData[i].lastOperator = 'dilate';
		              this.storedData[i].elem.setAttribute('filter', null);
		            }

		            this.storedData[i].elem.setAttribute('stroke-width', this.storedData[i].x.v * 2);
		          }
		        }
		      }
		    }
		  };

		  MaskElement.prototype.getMaskelement = function () {
		    return this.maskElement;
		  };

		  MaskElement.prototype.createLayerSolidPath = function () {
		    var path = 'M0,0 ';
		    path += ' h' + this.globalData.compSize.w;
		    path += ' v' + this.globalData.compSize.h;
		    path += ' h-' + this.globalData.compSize.w;
		    path += ' v-' + this.globalData.compSize.h + ' ';
		    return path;
		  };

		  MaskElement.prototype.drawPath = function (pathData, pathNodes, viewData) {
		    var pathString = ' M' + pathNodes.v[0][0] + ',' + pathNodes.v[0][1];
		    var i;
		    var len;
		    len = pathNodes._length;

		    for (i = 1; i < len; i += 1) {
		      // pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[i][0]+','+pathNodes.i[i][1] + " "+pathNodes.v[i][0]+','+pathNodes.v[i][1];
		      pathString += ' C' + pathNodes.o[i - 1][0] + ',' + pathNodes.o[i - 1][1] + ' ' + pathNodes.i[i][0] + ',' + pathNodes.i[i][1] + ' ' + pathNodes.v[i][0] + ',' + pathNodes.v[i][1];
		    } // pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[0][0]+','+pathNodes.i[0][1] + " "+pathNodes.v[0][0]+','+pathNodes.v[0][1];


		    if (pathNodes.c && len > 1) {
		      pathString += ' C' + pathNodes.o[i - 1][0] + ',' + pathNodes.o[i - 1][1] + ' ' + pathNodes.i[0][0] + ',' + pathNodes.i[0][1] + ' ' + pathNodes.v[0][0] + ',' + pathNodes.v[0][1];
		    } // pathNodes.__renderedString = pathString;


		    if (viewData.lastPath !== pathString) {
		      var pathShapeValue = '';

		      if (viewData.elem) {
		        if (pathNodes.c) {
		          pathShapeValue = pathData.inv ? this.solidPath + pathString : pathString;
		        }

		        viewData.elem.setAttribute('d', pathShapeValue);
		      }

		      viewData.lastPath = pathString;
		    }
		  };

		  MaskElement.prototype.destroy = function () {
		    this.element = null;
		    this.globalData = null;
		    this.maskElement = null;
		    this.data = null;
		    this.masksProperties = null;
		  };

		  var filtersFactory = function () {
		    var ob = {};
		    ob.createFilter = createFilter;
		    ob.createAlphaToLuminanceFilter = createAlphaToLuminanceFilter;

		    function createFilter(filId, skipCoordinates) {
		      var fil = createNS('filter');
		      fil.setAttribute('id', filId);

		      if (skipCoordinates !== true) {
		        fil.setAttribute('filterUnits', 'objectBoundingBox');
		        fil.setAttribute('x', '0%');
		        fil.setAttribute('y', '0%');
		        fil.setAttribute('width', '100%');
		        fil.setAttribute('height', '100%');
		      }

		      return fil;
		    }

		    function createAlphaToLuminanceFilter() {
		      var feColorMatrix = createNS('feColorMatrix');
		      feColorMatrix.setAttribute('type', 'matrix');
		      feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
		      feColorMatrix.setAttribute('values', '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1');
		      return feColorMatrix;
		    }

		    return ob;
		  }();

		  var featureSupport = function () {
		    var ob = {
		      maskType: true,
		      svgLumaHidden: true,
		      offscreenCanvas: typeof OffscreenCanvas !== 'undefined'
		    };

		    if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
		      ob.maskType = false;
		    }

		    if (/firefox/i.test(navigator.userAgent)) {
		      ob.svgLumaHidden = false;
		    }

		    return ob;
		  }();

		  var registeredEffects$1 = {};
		  var idPrefix = 'filter_result_';

		  function SVGEffects(elem) {
		    var i;
		    var source = 'SourceGraphic';
		    var len = elem.data.ef ? elem.data.ef.length : 0;
		    var filId = createElementID();
		    var fil = filtersFactory.createFilter(filId, true);
		    var count = 0;
		    this.filters = [];
		    var filterManager;

		    for (i = 0; i < len; i += 1) {
		      filterManager = null;
		      var type = elem.data.ef[i].ty;

		      if (registeredEffects$1[type]) {
		        var Effect = registeredEffects$1[type].effect;
		        filterManager = new Effect(fil, elem.effectsManager.effectElements[i], elem, idPrefix + count, source);
		        source = idPrefix + count;

		        if (registeredEffects$1[type].countsAsEffect) {
		          count += 1;
		        }
		      }

		      if (filterManager) {
		        this.filters.push(filterManager);
		      }
		    }

		    if (count) {
		      elem.globalData.defs.appendChild(fil);
		      elem.layerElement.setAttribute('filter', 'url(' + getLocationHref() + '#' + filId + ')');
		    }

		    if (this.filters.length) {
		      elem.addRenderableComponent(this);
		    }
		  }

		  SVGEffects.prototype.renderFrame = function (_isFirstFrame) {
		    var i;
		    var len = this.filters.length;

		    for (i = 0; i < len; i += 1) {
		      this.filters[i].renderFrame(_isFirstFrame);
		    }
		  };

		  SVGEffects.prototype.getEffects = function (type) {
		    var i;
		    var len = this.filters.length;
		    var effects = [];

		    for (i = 0; i < len; i += 1) {
		      if (this.filters[i].type === type) {
		        effects.push(this.filters[i]);
		      }
		    }

		    return effects;
		  };

		  function registerEffect$1(id, effect, countsAsEffect) {
		    registeredEffects$1[id] = {
		      effect: effect,
		      countsAsEffect: countsAsEffect
		    };
		  }

		  function SVGBaseElement() {}

		  SVGBaseElement.prototype = {
		    initRendererElement: function initRendererElement() {
		      this.layerElement = createNS('g');
		    },
		    createContainerElements: function createContainerElements() {
		      this.matteElement = createNS('g');
		      this.transformedElement = this.layerElement;
		      this.maskedElement = this.layerElement;
		      this._sizeChanged = false;
		      var layerElementParent = null; // If this layer acts as a mask for the following layer

		      if (this.data.td) {
		        this.matteMasks = {};
		        var gg = createNS('g');
		        gg.setAttribute('id', this.layerId);
		        gg.appendChild(this.layerElement);
		        layerElementParent = gg;
		        this.globalData.defs.appendChild(gg);
		      } else if (this.data.tt) {
		        this.matteElement.appendChild(this.layerElement);
		        layerElementParent = this.matteElement;
		        this.baseElement = this.matteElement;
		      } else {
		        this.baseElement = this.layerElement;
		      }

		      if (this.data.ln) {
		        this.layerElement.setAttribute('id', this.data.ln);
		      }

		      if (this.data.cl) {
		        this.layerElement.setAttribute('class', this.data.cl);
		      } // Clipping compositions to hide content that exceeds boundaries. If collapsed transformations is on, component should not be clipped


		      if (this.data.ty === 0 && !this.data.hd) {
		        var cp = createNS('clipPath');
		        var pt = createNS('path');
		        pt.setAttribute('d', 'M0,0 L' + this.data.w + ',0 L' + this.data.w + ',' + this.data.h + ' L0,' + this.data.h + 'z');
		        var clipId = createElementID();
		        cp.setAttribute('id', clipId);
		        cp.appendChild(pt);
		        this.globalData.defs.appendChild(cp);

		        if (this.checkMasks()) {
		          var cpGroup = createNS('g');
		          cpGroup.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + clipId + ')');
		          cpGroup.appendChild(this.layerElement);
		          this.transformedElement = cpGroup;

		          if (layerElementParent) {
		            layerElementParent.appendChild(this.transformedElement);
		          } else {
		            this.baseElement = this.transformedElement;
		          }
		        } else {
		          this.layerElement.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + clipId + ')');
		        }
		      }

		      if (this.data.bm !== 0) {
		        this.setBlendMode();
		      }
		    },
		    renderElement: function renderElement() {
		      if (this.finalTransform._localMatMdf) {
		        this.transformedElement.setAttribute('transform', this.finalTransform.localMat.to2dCSS());
		      }

		      if (this.finalTransform._opMdf) {
		        this.transformedElement.setAttribute('opacity', this.finalTransform.localOpacity);
		      }
		    },
		    destroyBaseElement: function destroyBaseElement() {
		      this.layerElement = null;
		      this.matteElement = null;
		      this.maskManager.destroy();
		    },
		    getBaseElement: function getBaseElement() {
		      if (this.data.hd) {
		        return null;
		      }

		      return this.baseElement;
		    },
		    createRenderableComponents: function createRenderableComponents() {
		      this.maskManager = new MaskElement(this.data, this, this.globalData);
		      this.renderableEffectsManager = new SVGEffects(this);
		      this.searchEffectTransforms();
		    },
		    getMatte: function getMatte(matteType) {
		      // This should not be a common case. But for backward compatibility, we'll create the matte object.
		      // It solves animations that have two consecutive layers marked as matte masks.
		      // Which is an undefined behavior in AE.
		      if (!this.matteMasks) {
		        this.matteMasks = {};
		      }

		      if (!this.matteMasks[matteType]) {
		        var id = this.layerId + '_' + matteType;
		        var filId;
		        var fil;
		        var useElement;
		        var gg;

		        if (matteType === 1 || matteType === 3) {
		          var masker = createNS('mask');
		          masker.setAttribute('id', id);
		          masker.setAttribute('mask-type', matteType === 3 ? 'luminance' : 'alpha');
		          useElement = createNS('use');
		          useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + this.layerId);
		          masker.appendChild(useElement);
		          this.globalData.defs.appendChild(masker);

		          if (!featureSupport.maskType && matteType === 1) {
		            masker.setAttribute('mask-type', 'luminance');
		            filId = createElementID();
		            fil = filtersFactory.createFilter(filId);
		            this.globalData.defs.appendChild(fil);
		            fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
		            gg = createNS('g');
		            gg.appendChild(useElement);
		            masker.appendChild(gg);
		            gg.setAttribute('filter', 'url(' + getLocationHref() + '#' + filId + ')');
		          }
		        } else if (matteType === 2) {
		          var maskGroup = createNS('mask');
		          maskGroup.setAttribute('id', id);
		          maskGroup.setAttribute('mask-type', 'alpha');
		          var maskGrouper = createNS('g');
		          maskGroup.appendChild(maskGrouper);
		          filId = createElementID();
		          fil = filtersFactory.createFilter(filId); /// /

		          var feCTr = createNS('feComponentTransfer');
		          feCTr.setAttribute('in', 'SourceGraphic');
		          fil.appendChild(feCTr);
		          var feFunc = createNS('feFuncA');
		          feFunc.setAttribute('type', 'table');
		          feFunc.setAttribute('tableValues', '1.0 0.0');
		          feCTr.appendChild(feFunc); /// /

		          this.globalData.defs.appendChild(fil);
		          var alphaRect = createNS('rect');
		          alphaRect.setAttribute('width', this.comp.data.w);
		          alphaRect.setAttribute('height', this.comp.data.h);
		          alphaRect.setAttribute('x', '0');
		          alphaRect.setAttribute('y', '0');
		          alphaRect.setAttribute('fill', '#ffffff');
		          alphaRect.setAttribute('opacity', '0');
		          maskGrouper.setAttribute('filter', 'url(' + getLocationHref() + '#' + filId + ')');
		          maskGrouper.appendChild(alphaRect);
		          useElement = createNS('use');
		          useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + this.layerId);
		          maskGrouper.appendChild(useElement);

		          if (!featureSupport.maskType) {
		            maskGroup.setAttribute('mask-type', 'luminance');
		            fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
		            gg = createNS('g');
		            maskGrouper.appendChild(alphaRect);
		            gg.appendChild(this.layerElement);
		            maskGrouper.appendChild(gg);
		          }

		          this.globalData.defs.appendChild(maskGroup);
		        }

		        this.matteMasks[matteType] = id;
		      }

		      return this.matteMasks[matteType];
		    },
		    setMatte: function setMatte(id) {
		      if (!this.matteElement) {
		        return;
		      }

		      this.matteElement.setAttribute('mask', 'url(' + getLocationHref() + '#' + id + ')');
		    }
		  };

		  /**
		   * @file
		   * Handles AE's layer parenting property.
		   *
		   */
		  function HierarchyElement() {}

		  HierarchyElement.prototype = {
		    /**
		       * @function
		       * Initializes hierarchy properties
		       *
		       */
		    initHierarchy: function initHierarchy() {
		      // element's parent list
		      this.hierarchy = []; // if element is parent of another layer _isParent will be true

		      this._isParent = false;
		      this.checkParenting();
		    },

		    /**
		       * @function
		       * Sets layer's hierarchy.
		       * @param {array} hierarch
		       * layer's parent list
		       *
		       */
		    setHierarchy: function setHierarchy(hierarchy) {
		      this.hierarchy = hierarchy;
		    },

		    /**
		       * @function
		       * Sets layer as parent.
		       *
		       */
		    setAsParent: function setAsParent() {
		      this._isParent = true;
		    },

		    /**
		       * @function
		       * Searches layer's parenting chain
		       *
		       */
		    checkParenting: function checkParenting() {
		      if (this.data.parent !== undefined) {
		        this.comp.buildElementParenting(this, this.data.parent, []);
		      }
		    }
		  };

		  function RenderableDOMElement() {}

		  (function () {
		    var _prototype = {
		      initElement: function initElement(data, globalData, comp) {
		        this.initFrame();
		        this.initBaseData(data, globalData, comp);
		        this.initTransform(data, globalData, comp);
		        this.initHierarchy();
		        this.initRenderable();
		        this.initRendererElement();
		        this.createContainerElements();
		        this.createRenderableComponents();
		        this.createContent();
		        this.hide();
		      },
		      hide: function hide() {
		        // console.log('HIDE', this);
		        if (!this.hidden && (!this.isInRange || this.isTransparent)) {
		          var elem = this.baseElement || this.layerElement;
		          elem.style.display = 'none';
		          this.hidden = true;
		        }
		      },
		      show: function show() {
		        // console.log('SHOW', this);
		        if (this.isInRange && !this.isTransparent) {
		          if (!this.data.hd) {
		            var elem = this.baseElement || this.layerElement;
		            elem.style.display = 'block';
		          }

		          this.hidden = false;
		          this._isFirstFrame = true;
		        }
		      },
		      renderFrame: function renderFrame() {
		        // If it is exported as hidden (data.hd === true) no need to render
		        // If it is not visible no need to render
		        if (this.data.hd || this.hidden) {
		          return;
		        }

		        this.renderTransform();
		        this.renderRenderable();
		        this.renderLocalTransform();
		        this.renderElement();
		        this.renderInnerContent();

		        if (this._isFirstFrame) {
		          this._isFirstFrame = false;
		        }
		      },
		      renderInnerContent: function renderInnerContent() {},
		      prepareFrame: function prepareFrame(num) {
		        this._mdf = false;
		        this.prepareRenderableFrame(num);
		        this.prepareProperties(num, this.isInRange);
		        this.checkTransparency();
		      },
		      destroy: function destroy() {
		        this.innerElem = null;
		        this.destroyBaseElement();
		      }
		    };
		    extendPrototype([RenderableElement, createProxyFunction(_prototype)], RenderableDOMElement);
		  })();

		  function IImageElement(data, globalData, comp) {
		    this.assetData = globalData.getAssetData(data.refId);

		    if (this.assetData && this.assetData.sid) {
		      this.assetData = globalData.slotManager.getProp(this.assetData);
		    }

		    this.initElement(data, globalData, comp);
		    this.sourceRect = {
		      top: 0,
		      left: 0,
		      width: this.assetData.w,
		      height: this.assetData.h
		    };
		  }

		  extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement);

		  IImageElement.prototype.createContent = function () {
		    var assetPath = this.globalData.getAssetsPath(this.assetData);
		    this.innerElem = createNS('image');
		    this.innerElem.setAttribute('width', this.assetData.w + 'px');
		    this.innerElem.setAttribute('height', this.assetData.h + 'px');
		    this.innerElem.setAttribute('preserveAspectRatio', this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio);
		    this.innerElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', assetPath);
		    this.layerElement.appendChild(this.innerElem);
		  };

		  IImageElement.prototype.sourceRectAtTime = function () {
		    return this.sourceRect;
		  };

		  function ProcessedElement(element, position) {
		    this.elem = element;
		    this.pos = position;
		  }

		  function IShapeElement() {}

		  IShapeElement.prototype = {
		    addShapeToModifiers: function addShapeToModifiers(data) {
		      var i;
		      var len = this.shapeModifiers.length;

		      for (i = 0; i < len; i += 1) {
		        this.shapeModifiers[i].addShape(data);
		      }
		    },
		    isShapeInAnimatedModifiers: function isShapeInAnimatedModifiers(data) {
		      var i = 0;
		      var len = this.shapeModifiers.length;

		      while (i < len) {
		        if (this.shapeModifiers[i].isAnimatedWithShape(data)) {
		          return true;
		        }
		      }

		      return false;
		    },
		    renderModifiers: function renderModifiers() {
		      if (!this.shapeModifiers.length) {
		        return;
		      }

		      var i;
		      var len = this.shapes.length;

		      for (i = 0; i < len; i += 1) {
		        this.shapes[i].sh.reset();
		      }

		      len = this.shapeModifiers.length;
		      var shouldBreakProcess;

		      for (i = len - 1; i >= 0; i -= 1) {
		        shouldBreakProcess = this.shapeModifiers[i].processShapes(this._isFirstFrame); // workaround to fix cases where a repeater resets the shape so the following processes get called twice
		        // TODO: find a better solution for this

		        if (shouldBreakProcess) {
		          break;
		        }
		      }
		    },
		    searchProcessedElement: function searchProcessedElement(elem) {
		      var elements = this.processedElements;
		      var i = 0;
		      var len = elements.length;

		      while (i < len) {
		        if (elements[i].elem === elem) {
		          return elements[i].pos;
		        }

		        i += 1;
		      }

		      return 0;
		    },
		    addProcessedElement: function addProcessedElement(elem, pos) {
		      var elements = this.processedElements;
		      var i = elements.length;

		      while (i) {
		        i -= 1;

		        if (elements[i].elem === elem) {
		          elements[i].pos = pos;
		          return;
		        }
		      }

		      elements.push(new ProcessedElement(elem, pos));
		    },
		    prepareFrame: function prepareFrame(num) {
		      this.prepareRenderableFrame(num);
		      this.prepareProperties(num, this.isInRange);
		    }
		  };

		  var lineCapEnum = {
		    1: 'butt',
		    2: 'round',
		    3: 'square'
		  };
		  var lineJoinEnum = {
		    1: 'miter',
		    2: 'round',
		    3: 'bevel'
		  };

		  function SVGShapeData(transformers, level, shape) {
		    this.caches = [];
		    this.styles = [];
		    this.transformers = transformers;
		    this.lStr = '';
		    this.sh = shape;
		    this.lvl = level; // TODO find if there are some cases where _isAnimated can be false.
		    // For now, since shapes add up with other shapes. They have to be calculated every time.
		    // One way of finding out is checking if all styles associated to this shape depend only of this shape

		    this._isAnimated = !!shape.k; // TODO: commenting this for now since all shapes are animated

		    var i = 0;
		    var len = transformers.length;

		    while (i < len) {
		      if (transformers[i].mProps.dynamicProperties.length) {
		        this._isAnimated = true;
		        break;
		      }

		      i += 1;
		    }
		  }

		  SVGShapeData.prototype.setAsAnimated = function () {
		    this._isAnimated = true;
		  };

		  function SVGStyleData(data, level) {
		    this.data = data;
		    this.type = data.ty;
		    this.d = '';
		    this.lvl = level;
		    this._mdf = false;
		    this.closed = data.hd === true;
		    this.pElem = createNS('path');
		    this.msElem = null;
		  }

		  SVGStyleData.prototype.reset = function () {
		    this.d = '';
		    this._mdf = false;
		  };

		  function DashProperty(elem, data, renderer, container) {
		    this.elem = elem;
		    this.frameId = -1;
		    this.dataProps = createSizedArray(data.length);
		    this.renderer = renderer;
		    this.k = false;
		    this.dashStr = '';
		    this.dashArray = createTypedArray('float32', data.length ? data.length - 1 : 0);
		    this.dashoffset = createTypedArray('float32', 1);
		    this.initDynamicPropertyContainer(container);
		    var i;
		    var len = data.length || 0;
		    var prop;

		    for (i = 0; i < len; i += 1) {
		      prop = PropertyFactory.getProp(elem, data[i].v, 0, 0, this);
		      this.k = prop.k || this.k;
		      this.dataProps[i] = {
		        n: data[i].n,
		        p: prop
		      };
		    }

		    if (!this.k) {
		      this.getValue(true);
		    }

		    this._isAnimated = this.k;
		  }

		  DashProperty.prototype.getValue = function (forceRender) {
		    if (this.elem.globalData.frameId === this.frameId && !forceRender) {
		      return;
		    }

		    this.frameId = this.elem.globalData.frameId;
		    this.iterateDynamicProperties();
		    this._mdf = this._mdf || forceRender;

		    if (this._mdf) {
		      var i = 0;
		      var len = this.dataProps.length;

		      if (this.renderer === 'svg') {
		        this.dashStr = '';
		      }

		      for (i = 0; i < len; i += 1) {
		        if (this.dataProps[i].n !== 'o') {
		          if (this.renderer === 'svg') {
		            this.dashStr += ' ' + this.dataProps[i].p.v;
		          } else {
		            this.dashArray[i] = this.dataProps[i].p.v;
		          }
		        } else {
		          this.dashoffset[0] = this.dataProps[i].p.v;
		        }
		      }
		    }
		  };

		  extendPrototype([DynamicPropertyContainer], DashProperty);

		  function SVGStrokeStyleData(elem, data, styleOb) {
		    this.initDynamicPropertyContainer(elem);
		    this.getValue = this.iterateDynamicProperties;
		    this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
		    this.w = PropertyFactory.getProp(elem, data.w, 0, null, this);
		    this.d = new DashProperty(elem, data.d || {}, 'svg', this);
		    this.c = PropertyFactory.getProp(elem, data.c, 1, 255, this);
		    this.style = styleOb;
		    this._isAnimated = !!this._isAnimated;
		  }

		  extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);

		  function SVGFillStyleData(elem, data, styleOb) {
		    this.initDynamicPropertyContainer(elem);
		    this.getValue = this.iterateDynamicProperties;
		    this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
		    this.c = PropertyFactory.getProp(elem, data.c, 1, 255, this);
		    this.style = styleOb;
		  }

		  extendPrototype([DynamicPropertyContainer], SVGFillStyleData);

		  function SVGNoStyleData(elem, data, styleOb) {
		    this.initDynamicPropertyContainer(elem);
		    this.getValue = this.iterateDynamicProperties;
		    this.style = styleOb;
		  }

		  extendPrototype([DynamicPropertyContainer], SVGNoStyleData);

		  function GradientProperty(elem, data, container) {
		    this.data = data;
		    this.c = createTypedArray('uint8c', data.p * 4);
		    var cLength = data.k.k[0].s ? data.k.k[0].s.length - data.p * 4 : data.k.k.length - data.p * 4;
		    this.o = createTypedArray('float32', cLength);
		    this._cmdf = false;
		    this._omdf = false;
		    this._collapsable = this.checkCollapsable();
		    this._hasOpacity = cLength;
		    this.initDynamicPropertyContainer(container);
		    this.prop = PropertyFactory.getProp(elem, data.k, 1, null, this);
		    this.k = this.prop.k;
		    this.getValue(true);
		  }

		  GradientProperty.prototype.comparePoints = function (values, points) {
		    var i = 0;
		    var len = this.o.length / 2;
		    var diff;

		    while (i < len) {
		      diff = Math.abs(values[i * 4] - values[points * 4 + i * 2]);

		      if (diff > 0.01) {
		        return false;
		      }

		      i += 1;
		    }

		    return true;
		  };

		  GradientProperty.prototype.checkCollapsable = function () {
		    if (this.o.length / 2 !== this.c.length / 4) {
		      return false;
		    }

		    if (this.data.k.k[0].s) {
		      var i = 0;
		      var len = this.data.k.k.length;

		      while (i < len) {
		        if (!this.comparePoints(this.data.k.k[i].s, this.data.p)) {
		          return false;
		        }

		        i += 1;
		      }
		    } else if (!this.comparePoints(this.data.k.k, this.data.p)) {
		      return false;
		    }

		    return true;
		  };

		  GradientProperty.prototype.getValue = function (forceRender) {
		    this.prop.getValue();
		    this._mdf = false;
		    this._cmdf = false;
		    this._omdf = false;

		    if (this.prop._mdf || forceRender) {
		      var i;
		      var len = this.data.p * 4;
		      var mult;
		      var val;

		      for (i = 0; i < len; i += 1) {
		        mult = i % 4 === 0 ? 100 : 255;
		        val = Math.round(this.prop.v[i] * mult);

		        if (this.c[i] !== val) {
		          this.c[i] = val;
		          this._cmdf = !forceRender;
		        }
		      }

		      if (this.o.length) {
		        len = this.prop.v.length;

		        for (i = this.data.p * 4; i < len; i += 1) {
		          mult = i % 2 === 0 ? 100 : 1;
		          val = i % 2 === 0 ? Math.round(this.prop.v[i] * 100) : this.prop.v[i];

		          if (this.o[i - this.data.p * 4] !== val) {
		            this.o[i - this.data.p * 4] = val;
		            this._omdf = !forceRender;
		          }
		        }
		      }

		      this._mdf = !forceRender;
		    }
		  };

		  extendPrototype([DynamicPropertyContainer], GradientProperty);

		  function SVGGradientFillStyleData(elem, data, styleOb) {
		    this.initDynamicPropertyContainer(elem);
		    this.getValue = this.iterateDynamicProperties;
		    this.initGradientData(elem, data, styleOb);
		  }

		  SVGGradientFillStyleData.prototype.initGradientData = function (elem, data, styleOb) {
		    this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
		    this.s = PropertyFactory.getProp(elem, data.s, 1, null, this);
		    this.e = PropertyFactory.getProp(elem, data.e, 1, null, this);
		    this.h = PropertyFactory.getProp(elem, data.h || {
		      k: 0
		    }, 0, 0.01, this);
		    this.a = PropertyFactory.getProp(elem, data.a || {
		      k: 0
		    }, 0, degToRads, this);
		    this.g = new GradientProperty(elem, data.g, this);
		    this.style = styleOb;
		    this.stops = [];
		    this.setGradientData(styleOb.pElem, data);
		    this.setGradientOpacity(data, styleOb);
		    this._isAnimated = !!this._isAnimated;
		  };

		  SVGGradientFillStyleData.prototype.setGradientData = function (pathElement, data) {
		    var gradientId = createElementID();
		    var gfill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
		    gfill.setAttribute('id', gradientId);
		    gfill.setAttribute('spreadMethod', 'pad');
		    gfill.setAttribute('gradientUnits', 'userSpaceOnUse');
		    var stops = [];
		    var stop;
		    var j;
		    var jLen;
		    jLen = data.g.p * 4;

		    for (j = 0; j < jLen; j += 4) {
		      stop = createNS('stop');
		      gfill.appendChild(stop);
		      stops.push(stop);
		    }

		    pathElement.setAttribute(data.ty === 'gf' ? 'fill' : 'stroke', 'url(' + getLocationHref() + '#' + gradientId + ')');
		    this.gf = gfill;
		    this.cst = stops;
		  };

		  SVGGradientFillStyleData.prototype.setGradientOpacity = function (data, styleOb) {
		    if (this.g._hasOpacity && !this.g._collapsable) {
		      var stop;
		      var j;
		      var jLen;
		      var mask = createNS('mask');
		      var maskElement = createNS('path');
		      mask.appendChild(maskElement);
		      var opacityId = createElementID();
		      var maskId = createElementID();
		      mask.setAttribute('id', maskId);
		      var opFill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
		      opFill.setAttribute('id', opacityId);
		      opFill.setAttribute('spreadMethod', 'pad');
		      opFill.setAttribute('gradientUnits', 'userSpaceOnUse');
		      jLen = data.g.k.k[0].s ? data.g.k.k[0].s.length : data.g.k.k.length;
		      var stops = this.stops;

		      for (j = data.g.p * 4; j < jLen; j += 2) {
		        stop = createNS('stop');
		        stop.setAttribute('stop-color', 'rgb(255,255,255)');
		        opFill.appendChild(stop);
		        stops.push(stop);
		      }

		      maskElement.setAttribute(data.ty === 'gf' ? 'fill' : 'stroke', 'url(' + getLocationHref() + '#' + opacityId + ')');

		      if (data.ty === 'gs') {
		        maskElement.setAttribute('stroke-linecap', lineCapEnum[data.lc || 2]);
		        maskElement.setAttribute('stroke-linejoin', lineJoinEnum[data.lj || 2]);

		        if (data.lj === 1) {
		          maskElement.setAttribute('stroke-miterlimit', data.ml);
		        }
		      }

		      this.of = opFill;
		      this.ms = mask;
		      this.ost = stops;
		      this.maskId = maskId;
		      styleOb.msElem = maskElement;
		    }
		  };

		  extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);

		  function SVGGradientStrokeStyleData(elem, data, styleOb) {
		    this.initDynamicPropertyContainer(elem);
		    this.getValue = this.iterateDynamicProperties;
		    this.w = PropertyFactory.getProp(elem, data.w, 0, null, this);
		    this.d = new DashProperty(elem, data.d || {}, 'svg', this);
		    this.initGradientData(elem, data, styleOb);
		    this._isAnimated = !!this._isAnimated;
		  }

		  extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);

		  function ShapeGroupData() {
		    this.it = [];
		    this.prevViewData = [];
		    this.gr = createNS('g');
		  }

		  function SVGTransformData(mProps, op, container) {
		    this.transform = {
		      mProps: mProps,
		      op: op,
		      container: container
		    };
		    this.elements = [];
		    this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
		  }

		  var buildShapeString = function buildShapeString(pathNodes, length, closed, mat) {
		    if (length === 0) {
		      return '';
		    }

		    var _o = pathNodes.o;
		    var _i = pathNodes.i;
		    var _v = pathNodes.v;
		    var i;
		    var shapeString = ' M' + mat.applyToPointStringified(_v[0][0], _v[0][1]);

		    for (i = 1; i < length; i += 1) {
		      shapeString += ' C' + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + ' ' + mat.applyToPointStringified(_i[i][0], _i[i][1]) + ' ' + mat.applyToPointStringified(_v[i][0], _v[i][1]);
		    }

		    if (closed && length) {
		      shapeString += ' C' + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + ' ' + mat.applyToPointStringified(_i[0][0], _i[0][1]) + ' ' + mat.applyToPointStringified(_v[0][0], _v[0][1]);
		      shapeString += 'z';
		    }

		    return shapeString;
		  };

		  var SVGElementsRenderer = function () {
		    var _identityMatrix = new Matrix();

		    var _matrixHelper = new Matrix();

		    var ob = {
		      createRenderFunction: createRenderFunction
		    };

		    function createRenderFunction(data) {
		      switch (data.ty) {
		        case 'fl':
		          return renderFill;

		        case 'gf':
		          return renderGradient;

		        case 'gs':
		          return renderGradientStroke;

		        case 'st':
		          return renderStroke;

		        case 'sh':
		        case 'el':
		        case 'rc':
		        case 'sr':
		          return renderPath;

		        case 'tr':
		          return renderContentTransform;

		        case 'no':
		          return renderNoop;

		        default:
		          return null;
		      }
		    }

		    function renderContentTransform(styleData, itemData, isFirstFrame) {
		      if (isFirstFrame || itemData.transform.op._mdf) {
		        itemData.transform.container.setAttribute('opacity', itemData.transform.op.v);
		      }

		      if (isFirstFrame || itemData.transform.mProps._mdf) {
		        itemData.transform.container.setAttribute('transform', itemData.transform.mProps.v.to2dCSS());
		      }
		    }

		    function renderNoop() {}

		    function renderPath(styleData, itemData, isFirstFrame) {
		      var j;
		      var jLen;
		      var pathStringTransformed;
		      var redraw;
		      var pathNodes;
		      var l;
		      var lLen = itemData.styles.length;
		      var lvl = itemData.lvl;
		      var paths;
		      var mat;
		      var iterations;
		      var k;

		      for (l = 0; l < lLen; l += 1) {
		        redraw = itemData.sh._mdf || isFirstFrame;

		        if (itemData.styles[l].lvl < lvl) {
		          mat = _matrixHelper.reset();
		          iterations = lvl - itemData.styles[l].lvl;
		          k = itemData.transformers.length - 1;

		          while (!redraw && iterations > 0) {
		            redraw = itemData.transformers[k].mProps._mdf || redraw;
		            iterations -= 1;
		            k -= 1;
		          }

		          if (redraw) {
		            iterations = lvl - itemData.styles[l].lvl;
		            k = itemData.transformers.length - 1;

		            while (iterations > 0) {
		              mat.multiply(itemData.transformers[k].mProps.v);
		              iterations -= 1;
		              k -= 1;
		            }
		          }
		        } else {
		          mat = _identityMatrix;
		        }

		        paths = itemData.sh.paths;
		        jLen = paths._length;

		        if (redraw) {
		          pathStringTransformed = '';

		          for (j = 0; j < jLen; j += 1) {
		            pathNodes = paths.shapes[j];

		            if (pathNodes && pathNodes._length) {
		              pathStringTransformed += buildShapeString(pathNodes, pathNodes._length, pathNodes.c, mat);
		            }
		          }

		          itemData.caches[l] = pathStringTransformed;
		        } else {
		          pathStringTransformed = itemData.caches[l];
		        }

		        itemData.styles[l].d += styleData.hd === true ? '' : pathStringTransformed;
		        itemData.styles[l]._mdf = redraw || itemData.styles[l]._mdf;
		      }
		    }

		    function renderFill(styleData, itemData, isFirstFrame) {
		      var styleElem = itemData.style;

		      if (itemData.c._mdf || isFirstFrame) {
		        styleElem.pElem.setAttribute('fill', 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')');
		      }

		      if (itemData.o._mdf || isFirstFrame) {
		        styleElem.pElem.setAttribute('fill-opacity', itemData.o.v);
		      }
		    }

		    function renderGradientStroke(styleData, itemData, isFirstFrame) {
		      renderGradient(styleData, itemData, isFirstFrame);
		      renderStroke(styleData, itemData, isFirstFrame);
		    }

		    function renderGradient(styleData, itemData, isFirstFrame) {
		      var gfill = itemData.gf;
		      var hasOpacity = itemData.g._hasOpacity;
		      var pt1 = itemData.s.v;
		      var pt2 = itemData.e.v;

		      if (itemData.o._mdf || isFirstFrame) {
		        var attr = styleData.ty === 'gf' ? 'fill-opacity' : 'stroke-opacity';
		        itemData.style.pElem.setAttribute(attr, itemData.o.v);
		      }

		      if (itemData.s._mdf || isFirstFrame) {
		        var attr1 = styleData.t === 1 ? 'x1' : 'cx';
		        var attr2 = attr1 === 'x1' ? 'y1' : 'cy';
		        gfill.setAttribute(attr1, pt1[0]);
		        gfill.setAttribute(attr2, pt1[1]);

		        if (hasOpacity && !itemData.g._collapsable) {
		          itemData.of.setAttribute(attr1, pt1[0]);
		          itemData.of.setAttribute(attr2, pt1[1]);
		        }
		      }

		      var stops;
		      var i;
		      var len;
		      var stop;

		      if (itemData.g._cmdf || isFirstFrame) {
		        stops = itemData.cst;
		        var cValues = itemData.g.c;
		        len = stops.length;

		        for (i = 0; i < len; i += 1) {
		          stop = stops[i];
		          stop.setAttribute('offset', cValues[i * 4] + '%');
		          stop.setAttribute('stop-color', 'rgb(' + cValues[i * 4 + 1] + ',' + cValues[i * 4 + 2] + ',' + cValues[i * 4 + 3] + ')');
		        }
		      }

		      if (hasOpacity && (itemData.g._omdf || isFirstFrame)) {
		        var oValues = itemData.g.o;

		        if (itemData.g._collapsable) {
		          stops = itemData.cst;
		        } else {
		          stops = itemData.ost;
		        }

		        len = stops.length;

		        for (i = 0; i < len; i += 1) {
		          stop = stops[i];

		          if (!itemData.g._collapsable) {
		            stop.setAttribute('offset', oValues[i * 2] + '%');
		          }

		          stop.setAttribute('stop-opacity', oValues[i * 2 + 1]);
		        }
		      }

		      if (styleData.t === 1) {
		        if (itemData.e._mdf || isFirstFrame) {
		          gfill.setAttribute('x2', pt2[0]);
		          gfill.setAttribute('y2', pt2[1]);

		          if (hasOpacity && !itemData.g._collapsable) {
		            itemData.of.setAttribute('x2', pt2[0]);
		            itemData.of.setAttribute('y2', pt2[1]);
		          }
		        }
		      } else {
		        var rad;

		        if (itemData.s._mdf || itemData.e._mdf || isFirstFrame) {
		          rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
		          gfill.setAttribute('r', rad);

		          if (hasOpacity && !itemData.g._collapsable) {
		            itemData.of.setAttribute('r', rad);
		          }
		        }

		        if (itemData.e._mdf || itemData.h._mdf || itemData.a._mdf || isFirstFrame) {
		          if (!rad) {
		            rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
		          }

		          var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);
		          var percent = itemData.h.v;

		          if (percent >= 1) {
		            percent = 0.99;
		          } else if (percent <= -1) {
		            percent = -0.99;
		          }

		          var dist = rad * percent;
		          var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
		          var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
		          gfill.setAttribute('fx', x);
		          gfill.setAttribute('fy', y);

		          if (hasOpacity && !itemData.g._collapsable) {
		            itemData.of.setAttribute('fx', x);
		            itemData.of.setAttribute('fy', y);
		          }
		        } // gfill.setAttribute('fy','200');

		      }
		    }

		    function renderStroke(styleData, itemData, isFirstFrame) {
		      var styleElem = itemData.style;
		      var d = itemData.d;

		      if (d && (d._mdf || isFirstFrame) && d.dashStr) {
		        styleElem.pElem.setAttribute('stroke-dasharray', d.dashStr);
		        styleElem.pElem.setAttribute('stroke-dashoffset', d.dashoffset[0]);
		      }

		      if (itemData.c && (itemData.c._mdf || isFirstFrame)) {
		        styleElem.pElem.setAttribute('stroke', 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')');
		      }

		      if (itemData.o._mdf || isFirstFrame) {
		        styleElem.pElem.setAttribute('stroke-opacity', itemData.o.v);
		      }

		      if (itemData.w._mdf || isFirstFrame) {
		        styleElem.pElem.setAttribute('stroke-width', itemData.w.v);

		        if (styleElem.msElem) {
		          styleElem.msElem.setAttribute('stroke-width', itemData.w.v);
		        }
		      }
		    }

		    return ob;
		  }();

		  function SVGShapeElement(data, globalData, comp) {
		    // List of drawable elements
		    this.shapes = []; // Full shape data

		    this.shapesData = data.shapes; // List of styles that will be applied to shapes

		    this.stylesList = []; // List of modifiers that will be applied to shapes

		    this.shapeModifiers = []; // List of items in shape tree

		    this.itemsData = []; // List of items in previous shape tree

		    this.processedElements = []; // List of animated components

		    this.animatedContents = [];
		    this.initElement(data, globalData, comp); // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
		    // List of elements that have been created

		    this.prevViewData = []; // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
		  }

		  extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement);

		  SVGShapeElement.prototype.initSecondaryElement = function () {};

		  SVGShapeElement.prototype.identityMatrix = new Matrix();

		  SVGShapeElement.prototype.buildExpressionInterface = function () {};

		  SVGShapeElement.prototype.createContent = function () {
		    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
		    this.filterUniqueShapes();
		  };
		  /*
		  This method searches for multiple shapes that affect a single element and one of them is animated
		  */


		  SVGShapeElement.prototype.filterUniqueShapes = function () {
		    var i;
		    var len = this.shapes.length;
		    var shape;
		    var j;
		    var jLen = this.stylesList.length;
		    var style;
		    var tempShapes = [];
		    var areAnimated = false;

		    for (j = 0; j < jLen; j += 1) {
		      style = this.stylesList[j];
		      areAnimated = false;
		      tempShapes.length = 0;

		      for (i = 0; i < len; i += 1) {
		        shape = this.shapes[i];

		        if (shape.styles.indexOf(style) !== -1) {
		          tempShapes.push(shape);
		          areAnimated = shape._isAnimated || areAnimated;
		        }
		      }

		      if (tempShapes.length > 1 && areAnimated) {
		        this.setShapesAsAnimated(tempShapes);
		      }
		    }
		  };

		  SVGShapeElement.prototype.setShapesAsAnimated = function (shapes) {
		    var i;
		    var len = shapes.length;

		    for (i = 0; i < len; i += 1) {
		      shapes[i].setAsAnimated();
		    }
		  };

		  SVGShapeElement.prototype.createStyleElement = function (data, level) {
		    // TODO: prevent drawing of hidden styles
		    var elementData;
		    var styleOb = new SVGStyleData(data, level);
		    var pathElement = styleOb.pElem;

		    if (data.ty === 'st') {
		      elementData = new SVGStrokeStyleData(this, data, styleOb);
		    } else if (data.ty === 'fl') {
		      elementData = new SVGFillStyleData(this, data, styleOb);
		    } else if (data.ty === 'gf' || data.ty === 'gs') {
		      var GradientConstructor = data.ty === 'gf' ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
		      elementData = new GradientConstructor(this, data, styleOb);
		      this.globalData.defs.appendChild(elementData.gf);

		      if (elementData.maskId) {
		        this.globalData.defs.appendChild(elementData.ms);
		        this.globalData.defs.appendChild(elementData.of);
		        pathElement.setAttribute('mask', 'url(' + getLocationHref() + '#' + elementData.maskId + ')');
		      }
		    } else if (data.ty === 'no') {
		      elementData = new SVGNoStyleData(this, data, styleOb);
		    }

		    if (data.ty === 'st' || data.ty === 'gs') {
		      pathElement.setAttribute('stroke-linecap', lineCapEnum[data.lc || 2]);
		      pathElement.setAttribute('stroke-linejoin', lineJoinEnum[data.lj || 2]);
		      pathElement.setAttribute('fill-opacity', '0');

		      if (data.lj === 1) {
		        pathElement.setAttribute('stroke-miterlimit', data.ml);
		      }
		    }

		    if (data.r === 2) {
		      pathElement.setAttribute('fill-rule', 'evenodd');
		    }

		    if (data.ln) {
		      pathElement.setAttribute('id', data.ln);
		    }

		    if (data.cl) {
		      pathElement.setAttribute('class', data.cl);
		    }

		    if (data.bm) {
		      pathElement.style['mix-blend-mode'] = getBlendMode(data.bm);
		    }

		    this.stylesList.push(styleOb);
		    this.addToAnimatedContents(data, elementData);
		    return elementData;
		  };

		  SVGShapeElement.prototype.createGroupElement = function (data) {
		    var elementData = new ShapeGroupData();

		    if (data.ln) {
		      elementData.gr.setAttribute('id', data.ln);
		    }

		    if (data.cl) {
		      elementData.gr.setAttribute('class', data.cl);
		    }

		    if (data.bm) {
		      elementData.gr.style['mix-blend-mode'] = getBlendMode(data.bm);
		    }

		    return elementData;
		  };

		  SVGShapeElement.prototype.createTransformElement = function (data, container) {
		    var transformProperty = TransformPropertyFactory.getTransformProperty(this, data, this);
		    var elementData = new SVGTransformData(transformProperty, transformProperty.o, container);
		    this.addToAnimatedContents(data, elementData);
		    return elementData;
		  };

		  SVGShapeElement.prototype.createShapeElement = function (data, ownTransformers, level) {
		    var ty = 4;

		    if (data.ty === 'rc') {
		      ty = 5;
		    } else if (data.ty === 'el') {
		      ty = 6;
		    } else if (data.ty === 'sr') {
		      ty = 7;
		    }

		    var shapeProperty = ShapePropertyFactory.getShapeProp(this, data, ty, this);
		    var elementData = new SVGShapeData(ownTransformers, level, shapeProperty);
		    this.shapes.push(elementData);
		    this.addShapeToModifiers(elementData);
		    this.addToAnimatedContents(data, elementData);
		    return elementData;
		  };

		  SVGShapeElement.prototype.addToAnimatedContents = function (data, element) {
		    var i = 0;
		    var len = this.animatedContents.length;

		    while (i < len) {
		      if (this.animatedContents[i].element === element) {
		        return;
		      }

		      i += 1;
		    }

		    this.animatedContents.push({
		      fn: SVGElementsRenderer.createRenderFunction(data),
		      element: element,
		      data: data
		    });
		  };

		  SVGShapeElement.prototype.setElementStyles = function (elementData) {
		    var arr = elementData.styles;
		    var j;
		    var jLen = this.stylesList.length;

		    for (j = 0; j < jLen; j += 1) {
		      if (!this.stylesList[j].closed) {
		        arr.push(this.stylesList[j]);
		      }
		    }
		  };

		  SVGShapeElement.prototype.reloadShapes = function () {
		    this._isFirstFrame = true;
		    var i;
		    var len = this.itemsData.length;

		    for (i = 0; i < len; i += 1) {
		      this.prevViewData[i] = this.itemsData[i];
		    }

		    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
		    this.filterUniqueShapes();
		    len = this.dynamicProperties.length;

		    for (i = 0; i < len; i += 1) {
		      this.dynamicProperties[i].getValue();
		    }

		    this.renderModifiers();
		  };

		  SVGShapeElement.prototype.searchShapes = function (arr, itemsData, prevViewData, container, level, transformers, render) {
		    var ownTransformers = [].concat(transformers);
		    var i;
		    var len = arr.length - 1;
		    var j;
		    var jLen;
		    var ownStyles = [];
		    var ownModifiers = [];
		    var currentTransform;
		    var modifier;
		    var processedPos;

		    for (i = len; i >= 0; i -= 1) {
		      processedPos = this.searchProcessedElement(arr[i]);

		      if (!processedPos) {
		        arr[i]._render = render;
		      } else {
		        itemsData[i] = prevViewData[processedPos - 1];
		      }

		      if (arr[i].ty === 'fl' || arr[i].ty === 'st' || arr[i].ty === 'gf' || arr[i].ty === 'gs' || arr[i].ty === 'no') {
		        if (!processedPos) {
		          itemsData[i] = this.createStyleElement(arr[i], level);
		        } else {
		          itemsData[i].style.closed = false;
		        }

		        if (arr[i]._render) {
		          if (itemsData[i].style.pElem.parentNode !== container) {
		            container.appendChild(itemsData[i].style.pElem);
		          }
		        }

		        ownStyles.push(itemsData[i].style);
		      } else if (arr[i].ty === 'gr') {
		        if (!processedPos) {
		          itemsData[i] = this.createGroupElement(arr[i]);
		        } else {
		          jLen = itemsData[i].it.length;

		          for (j = 0; j < jLen; j += 1) {
		            itemsData[i].prevViewData[j] = itemsData[i].it[j];
		          }
		        }

		        this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, itemsData[i].gr, level + 1, ownTransformers, render);

		        if (arr[i]._render) {
		          if (itemsData[i].gr.parentNode !== container) {
		            container.appendChild(itemsData[i].gr);
		          }
		        }
		      } else if (arr[i].ty === 'tr') {
		        if (!processedPos) {
		          itemsData[i] = this.createTransformElement(arr[i], container);
		        }

		        currentTransform = itemsData[i].transform;
		        ownTransformers.push(currentTransform);
		      } else if (arr[i].ty === 'sh' || arr[i].ty === 'rc' || arr[i].ty === 'el' || arr[i].ty === 'sr') {
		        if (!processedPos) {
		          itemsData[i] = this.createShapeElement(arr[i], ownTransformers, level);
		        }

		        this.setElementStyles(itemsData[i]);
		      } else if (arr[i].ty === 'tm' || arr[i].ty === 'rd' || arr[i].ty === 'ms' || arr[i].ty === 'pb' || arr[i].ty === 'zz' || arr[i].ty === 'op') {
		        if (!processedPos) {
		          modifier = ShapeModifiers.getModifier(arr[i].ty);
		          modifier.init(this, arr[i]);
		          itemsData[i] = modifier;
		          this.shapeModifiers.push(modifier);
		        } else {
		          modifier = itemsData[i];
		          modifier.closed = false;
		        }

		        ownModifiers.push(modifier);
		      } else if (arr[i].ty === 'rp') {
		        if (!processedPos) {
		          modifier = ShapeModifiers.getModifier(arr[i].ty);
		          itemsData[i] = modifier;
		          modifier.init(this, arr, i, itemsData);
		          this.shapeModifiers.push(modifier);
		          render = false;
		        } else {
		          modifier = itemsData[i];
		          modifier.closed = true;
		        }

		        ownModifiers.push(modifier);
		      }

		      this.addProcessedElement(arr[i], i + 1);
		    }

		    len = ownStyles.length;

		    for (i = 0; i < len; i += 1) {
		      ownStyles[i].closed = true;
		    }

		    len = ownModifiers.length;

		    for (i = 0; i < len; i += 1) {
		      ownModifiers[i].closed = true;
		    }
		  };

		  SVGShapeElement.prototype.renderInnerContent = function () {
		    this.renderModifiers();
		    var i;
		    var len = this.stylesList.length;

		    for (i = 0; i < len; i += 1) {
		      this.stylesList[i].reset();
		    }

		    this.renderShape();

		    for (i = 0; i < len; i += 1) {
		      if (this.stylesList[i]._mdf || this._isFirstFrame) {
		        if (this.stylesList[i].msElem) {
		          this.stylesList[i].msElem.setAttribute('d', this.stylesList[i].d); // Adding M0 0 fixes same mask bug on all browsers

		          this.stylesList[i].d = 'M0 0' + this.stylesList[i].d;
		        }

		        this.stylesList[i].pElem.setAttribute('d', this.stylesList[i].d || 'M0 0');
		      }
		    }
		  };

		  SVGShapeElement.prototype.renderShape = function () {
		    var i;
		    var len = this.animatedContents.length;
		    var animatedContent;

		    for (i = 0; i < len; i += 1) {
		      animatedContent = this.animatedContents[i];

		      if ((this._isFirstFrame || animatedContent.element._isAnimated) && animatedContent.data !== true) {
		        animatedContent.fn(animatedContent.data, animatedContent.element, this._isFirstFrame);
		      }
		    }
		  };

		  SVGShapeElement.prototype.destroy = function () {
		    this.destroyBaseElement();
		    this.shapesData = null;
		    this.itemsData = null;
		  };

		  function LetterProps(o, sw, sc, fc, m, p) {
		    this.o = o;
		    this.sw = sw;
		    this.sc = sc;
		    this.fc = fc;
		    this.m = m;
		    this.p = p;
		    this._mdf = {
		      o: true,
		      sw: !!sw,
		      sc: !!sc,
		      fc: !!fc,
		      m: true,
		      p: true
		    };
		  }

		  LetterProps.prototype.update = function (o, sw, sc, fc, m, p) {
		    this._mdf.o = false;
		    this._mdf.sw = false;
		    this._mdf.sc = false;
		    this._mdf.fc = false;
		    this._mdf.m = false;
		    this._mdf.p = false;
		    var updated = false;

		    if (this.o !== o) {
		      this.o = o;
		      this._mdf.o = true;
		      updated = true;
		    }

		    if (this.sw !== sw) {
		      this.sw = sw;
		      this._mdf.sw = true;
		      updated = true;
		    }

		    if (this.sc !== sc) {
		      this.sc = sc;
		      this._mdf.sc = true;
		      updated = true;
		    }

		    if (this.fc !== fc) {
		      this.fc = fc;
		      this._mdf.fc = true;
		      updated = true;
		    }

		    if (this.m !== m) {
		      this.m = m;
		      this._mdf.m = true;
		      updated = true;
		    }

		    if (p.length && (this.p[0] !== p[0] || this.p[1] !== p[1] || this.p[4] !== p[4] || this.p[5] !== p[5] || this.p[12] !== p[12] || this.p[13] !== p[13])) {
		      this.p = p;
		      this._mdf.p = true;
		      updated = true;
		    }

		    return updated;
		  };

		  function TextProperty(elem, data) {
		    this._frameId = initialDefaultFrame;
		    this.pv = '';
		    this.v = '';
		    this.kf = false;
		    this._isFirstFrame = true;
		    this._mdf = false;

		    if (data.d && data.d.sid) {
		      data.d = elem.globalData.slotManager.getProp(data.d);
		    }

		    this.data = data;
		    this.elem = elem;
		    this.comp = this.elem.comp;
		    this.keysIndex = 0;
		    this.canResize = false;
		    this.minimumFontSize = 1;
		    this.effectsSequence = [];
		    this.currentData = {
		      ascent: 0,
		      boxWidth: this.defaultBoxWidth,
		      f: '',
		      fStyle: '',
		      fWeight: '',
		      fc: '',
		      j: '',
		      justifyOffset: '',
		      l: [],
		      lh: 0,
		      lineWidths: [],
		      ls: '',
		      of: '',
		      s: '',
		      sc: '',
		      sw: 0,
		      t: 0,
		      tr: 0,
		      sz: 0,
		      ps: null,
		      fillColorAnim: false,
		      strokeColorAnim: false,
		      strokeWidthAnim: false,
		      yOffset: 0,
		      finalSize: 0,
		      finalText: [],
		      finalLineHeight: 0,
		      __complete: false
		    };
		    this.copyData(this.currentData, this.data.d.k[0].s);

		    if (!this.searchProperty()) {
		      this.completeTextData(this.currentData);
		    }
		  }

		  TextProperty.prototype.defaultBoxWidth = [0, 0];

		  TextProperty.prototype.copyData = function (obj, data) {
		    for (var s in data) {
		      if (Object.prototype.hasOwnProperty.call(data, s)) {
		        obj[s] = data[s];
		      }
		    }

		    return obj;
		  };

		  TextProperty.prototype.setCurrentData = function (data) {
		    if (!data.__complete) {
		      this.completeTextData(data);
		    }

		    this.currentData = data;
		    this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth;
		    this._mdf = true;
		  };

		  TextProperty.prototype.searchProperty = function () {
		    return this.searchKeyframes();
		  };

		  TextProperty.prototype.searchKeyframes = function () {
		    this.kf = this.data.d.k.length > 1;

		    if (this.kf) {
		      this.addEffect(this.getKeyframeValue.bind(this));
		    }

		    return this.kf;
		  };

		  TextProperty.prototype.addEffect = function (effectFunction) {
		    this.effectsSequence.push(effectFunction);
		    this.elem.addDynamicProperty(this);
		  };

		  TextProperty.prototype.getValue = function (_finalValue) {
		    if ((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !_finalValue) {
		      return;
		    }

		    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
		    var currentValue = this.currentData;
		    var currentIndex = this.keysIndex;

		    if (this.lock) {
		      this.setCurrentData(this.currentData);
		      return;
		    }

		    this.lock = true;
		    this._mdf = false;
		    var i;
		    var len = this.effectsSequence.length;
		    var finalValue = _finalValue || this.data.d.k[this.keysIndex].s;

		    for (i = 0; i < len; i += 1) {
		      // Checking if index changed to prevent creating a new object every time the expression updates.
		      if (currentIndex !== this.keysIndex) {
		        finalValue = this.effectsSequence[i](finalValue, finalValue.t);
		      } else {
		        finalValue = this.effectsSequence[i](this.currentData, finalValue.t);
		      }
		    }

		    if (currentValue !== finalValue) {
		      this.setCurrentData(finalValue);
		    }

		    this.v = this.currentData;
		    this.pv = this.v;
		    this.lock = false;
		    this.frameId = this.elem.globalData.frameId;
		  };

		  TextProperty.prototype.getKeyframeValue = function () {
		    var textKeys = this.data.d.k;
		    var frameNum = this.elem.comp.renderedFrame;
		    var i = 0;
		    var len = textKeys.length;

		    while (i <= len - 1) {
		      if (i === len - 1 || textKeys[i + 1].t > frameNum) {
		        break;
		      }

		      i += 1;
		    }

		    if (this.keysIndex !== i) {
		      this.keysIndex = i;
		    }

		    return this.data.d.k[this.keysIndex].s;
		  };

		  TextProperty.prototype.buildFinalText = function (text) {
		    var charactersArray = [];
		    var i = 0;
		    var len = text.length;
		    var charCode;
		    var secondCharCode;
		    var shouldCombine = false;
		    var shouldCombineNext = false;
		    var currentChars = '';

		    while (i < len) {
		      shouldCombine = shouldCombineNext;
		      shouldCombineNext = false;
		      charCode = text.charCodeAt(i);
		      currentChars = text.charAt(i);

		      if (FontManager.isCombinedCharacter(charCode)) {
		        shouldCombine = true; // It's a potential surrogate pair (this is the High surrogate)
		      } else if (charCode >= 0xD800 && charCode <= 0xDBFF) {
		        if (FontManager.isRegionalFlag(text, i)) {
		          currentChars = text.substr(i, 14);
		        } else {
		          secondCharCode = text.charCodeAt(i + 1); // It's a surrogate pair (this is the Low surrogate)

		          if (secondCharCode >= 0xDC00 && secondCharCode <= 0xDFFF) {
		            if (FontManager.isModifier(charCode, secondCharCode)) {
		              currentChars = text.substr(i, 2);
		              shouldCombine = true;
		            } else if (FontManager.isFlagEmoji(text.substr(i, 4))) {
		              currentChars = text.substr(i, 4);
		            } else {
		              currentChars = text.substr(i, 2);
		            }
		          }
		        }
		      } else if (charCode > 0xDBFF) {
		        secondCharCode = text.charCodeAt(i + 1);

		        if (FontManager.isVariationSelector(charCode)) {
		          shouldCombine = true;
		        }
		      } else if (FontManager.isZeroWidthJoiner(charCode)) {
		        shouldCombine = true;
		        shouldCombineNext = true;
		      }

		      if (shouldCombine) {
		        charactersArray[charactersArray.length - 1] += currentChars;
		        shouldCombine = false;
		      } else {
		        charactersArray.push(currentChars);
		      }

		      i += currentChars.length;
		    }

		    return charactersArray;
		  };

		  TextProperty.prototype.completeTextData = function (documentData) {
		    documentData.__complete = true;
		    var fontManager = this.elem.globalData.fontManager;
		    var data = this.data;
		    var letters = [];
		    var i;
		    var len;
		    var newLineFlag;
		    var index = 0;
		    var val;
		    var anchorGrouping = data.m.g;
		    var currentSize = 0;
		    var currentPos = 0;
		    var currentLine = 0;
		    var lineWidths = [];
		    var lineWidth = 0;
		    var maxLineWidth = 0;
		    var j;
		    var jLen;
		    var fontData = fontManager.getFontByName(documentData.f);
		    var charData;
		    var cLength = 0;
		    var fontProps = getFontProperties(fontData);
		    documentData.fWeight = fontProps.weight;
		    documentData.fStyle = fontProps.style;
		    documentData.finalSize = documentData.s;
		    documentData.finalText = this.buildFinalText(documentData.t);
		    len = documentData.finalText.length;
		    documentData.finalLineHeight = documentData.lh;
		    var trackingOffset = documentData.tr / 1000 * documentData.finalSize;
		    var charCode;

		    if (documentData.sz) {
		      var flag = true;
		      var boxWidth = documentData.sz[0];
		      var boxHeight = documentData.sz[1];
		      var currentHeight;
		      var finalText;

		      while (flag) {
		        finalText = this.buildFinalText(documentData.t);
		        currentHeight = 0;
		        lineWidth = 0;
		        len = finalText.length;
		        trackingOffset = documentData.tr / 1000 * documentData.finalSize;
		        var lastSpaceIndex = -1;

		        for (i = 0; i < len; i += 1) {
		          charCode = finalText[i].charCodeAt(0);
		          newLineFlag = false;

		          if (finalText[i] === ' ') {
		            lastSpaceIndex = i;
		          } else if (charCode === 13 || charCode === 3) {
		            lineWidth = 0;
		            newLineFlag = true;
		            currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
		          }

		          if (fontManager.chars) {
		            charData = fontManager.getCharData(finalText[i], fontData.fStyle, fontData.fFamily);
		            cLength = newLineFlag ? 0 : charData.w * documentData.finalSize / 100;
		          } else {
		            // tCanvasHelper.font = documentData.s + 'px '+ fontData.fFamily;
		            cLength = fontManager.measureText(finalText[i], documentData.f, documentData.finalSize);
		          }

		          if (lineWidth + cLength > boxWidth && finalText[i] !== ' ') {
		            if (lastSpaceIndex === -1) {
		              len += 1;
		            } else {
		              i = lastSpaceIndex;
		            }

		            currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
		            finalText.splice(i, lastSpaceIndex === i ? 1 : 0, '\r'); // finalText = finalText.substr(0,i) + "\r" + finalText.substr(i === lastSpaceIndex ? i + 1 : i);

		            lastSpaceIndex = -1;
		            lineWidth = 0;
		          } else {
		            lineWidth += cLength;
		            lineWidth += trackingOffset;
		          }
		        }

		        currentHeight += fontData.ascent * documentData.finalSize / 100;

		        if (this.canResize && documentData.finalSize > this.minimumFontSize && boxHeight < currentHeight) {
		          documentData.finalSize -= 1;
		          documentData.finalLineHeight = documentData.finalSize * documentData.lh / documentData.s;
		        } else {
		          documentData.finalText = finalText;
		          len = documentData.finalText.length;
		          flag = false;
		        }
		      }
		    }

		    lineWidth = -trackingOffset;
		    cLength = 0;
		    var uncollapsedSpaces = 0;
		    var currentChar;

		    for (i = 0; i < len; i += 1) {
		      newLineFlag = false;
		      currentChar = documentData.finalText[i];
		      charCode = currentChar.charCodeAt(0);

		      if (charCode === 13 || charCode === 3) {
		        uncollapsedSpaces = 0;
		        lineWidths.push(lineWidth);
		        maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
		        lineWidth = -2 * trackingOffset;
		        val = '';
		        newLineFlag = true;
		        currentLine += 1;
		      } else {
		        val = currentChar;
		      }

		      if (fontManager.chars) {
		        charData = fontManager.getCharData(currentChar, fontData.fStyle, fontManager.getFontByName(documentData.f).fFamily);
		        cLength = newLineFlag ? 0 : charData.w * documentData.finalSize / 100;
		      } else {
		        // var charWidth = fontManager.measureText(val, documentData.f, documentData.finalSize);
		        // tCanvasHelper.font = documentData.finalSize + 'px '+ fontManager.getFontByName(documentData.f).fFamily;
		        cLength = fontManager.measureText(val, documentData.f, documentData.finalSize);
		      } //


		      if (currentChar === ' ') {
		        uncollapsedSpaces += cLength + trackingOffset;
		      } else {
		        lineWidth += cLength + trackingOffset + uncollapsedSpaces;
		        uncollapsedSpaces = 0;
		      }

		      letters.push({
		        l: cLength,
		        an: cLength,
		        add: currentSize,
		        n: newLineFlag,
		        anIndexes: [],
		        val: val,
		        line: currentLine,
		        animatorJustifyOffset: 0
		      });

		      if (anchorGrouping == 2) {
		        // eslint-disable-line eqeqeq
		        currentSize += cLength;

		        if (val === '' || val === ' ' || i === len - 1) {
		          if (val === '' || val === ' ') {
		            currentSize -= cLength;
		          }

		          while (currentPos <= i) {
		            letters[currentPos].an = currentSize;
		            letters[currentPos].ind = index;
		            letters[currentPos].extra = cLength;
		            currentPos += 1;
		          }

		          index += 1;
		          currentSize = 0;
		        }
		      } else if (anchorGrouping == 3) {
		        // eslint-disable-line eqeqeq
		        currentSize += cLength;

		        if (val === '' || i === len - 1) {
		          if (val === '') {
		            currentSize -= cLength;
		          }

		          while (currentPos <= i) {
		            letters[currentPos].an = currentSize;
		            letters[currentPos].ind = index;
		            letters[currentPos].extra = cLength;
		            currentPos += 1;
		          }

		          currentSize = 0;
		          index += 1;
		        }
		      } else {
		        letters[index].ind = index;
		        letters[index].extra = 0;
		        index += 1;
		      }
		    }

		    documentData.l = letters;
		    maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
		    lineWidths.push(lineWidth);

		    if (documentData.sz) {
		      documentData.boxWidth = documentData.sz[0];
		      documentData.justifyOffset = 0;
		    } else {
		      documentData.boxWidth = maxLineWidth;

		      switch (documentData.j) {
		        case 1:
		          documentData.justifyOffset = -documentData.boxWidth;
		          break;

		        case 2:
		          documentData.justifyOffset = -documentData.boxWidth / 2;
		          break;

		        default:
		          documentData.justifyOffset = 0;
		      }
		    }

		    documentData.lineWidths = lineWidths;
		    var animators = data.a;
		    var animatorData;
		    var letterData;
		    jLen = animators.length;
		    var based;
		    var ind;
		    var indexes = [];

		    for (j = 0; j < jLen; j += 1) {
		      animatorData = animators[j];

		      if (animatorData.a.sc) {
		        documentData.strokeColorAnim = true;
		      }

		      if (animatorData.a.sw) {
		        documentData.strokeWidthAnim = true;
		      }

		      if (animatorData.a.fc || animatorData.a.fh || animatorData.a.fs || animatorData.a.fb) {
		        documentData.fillColorAnim = true;
		      }

		      ind = 0;
		      based = animatorData.s.b;

		      for (i = 0; i < len; i += 1) {
		        letterData = letters[i];
		        letterData.anIndexes[j] = ind;

		        if (based == 1 && letterData.val !== '' || based == 2 && letterData.val !== '' && letterData.val !== ' ' || based == 3 && (letterData.n || letterData.val == ' ' || i == len - 1) || based == 4 && (letterData.n || i == len - 1)) {
		          // eslint-disable-line eqeqeq
		          if (animatorData.s.rn === 1) {
		            indexes.push(ind);
		          }

		          ind += 1;
		        }
		      }

		      data.a[j].s.totalChars = ind;
		      var currentInd = -1;
		      var newInd;

		      if (animatorData.s.rn === 1) {
		        for (i = 0; i < len; i += 1) {
		          letterData = letters[i];

		          if (currentInd != letterData.anIndexes[j]) {
		            // eslint-disable-line eqeqeq
		            currentInd = letterData.anIndexes[j];
		            newInd = indexes.splice(Math.floor(Math.random() * indexes.length), 1)[0];
		          }

		          letterData.anIndexes[j] = newInd;
		        }
		      }
		    }

		    documentData.yOffset = documentData.finalLineHeight || documentData.finalSize * 1.2;
		    documentData.ls = documentData.ls || 0;
		    documentData.ascent = fontData.ascent * documentData.finalSize / 100;
		  };

		  TextProperty.prototype.updateDocumentData = function (newData, index) {
		    index = index === undefined ? this.keysIndex : index;
		    var dData = this.copyData({}, this.data.d.k[index].s);
		    dData = this.copyData(dData, newData);
		    this.data.d.k[index].s = dData;
		    this.recalculate(index);
		    this.setCurrentData(dData);
		    this.elem.addDynamicProperty(this);
		  };

		  TextProperty.prototype.recalculate = function (index) {
		    var dData = this.data.d.k[index].s;
		    dData.__complete = false;
		    this.keysIndex = 0;
		    this._isFirstFrame = true;
		    this.getValue(dData);
		  };

		  TextProperty.prototype.canResizeFont = function (_canResize) {
		    this.canResize = _canResize;
		    this.recalculate(this.keysIndex);
		    this.elem.addDynamicProperty(this);
		  };

		  TextProperty.prototype.setMinimumFontSize = function (_fontValue) {
		    this.minimumFontSize = Math.floor(_fontValue) || 1;
		    this.recalculate(this.keysIndex);
		    this.elem.addDynamicProperty(this);
		  };

		  var TextSelectorProp = function () {
		    var max = Math.max;
		    var min = Math.min;
		    var floor = Math.floor;

		    function TextSelectorPropFactory(elem, data) {
		      this._currentTextLength = -1;
		      this.k = false;
		      this.data = data;
		      this.elem = elem;
		      this.comp = elem.comp;
		      this.finalS = 0;
		      this.finalE = 0;
		      this.initDynamicPropertyContainer(elem);
		      this.s = PropertyFactory.getProp(elem, data.s || {
		        k: 0
		      }, 0, 0, this);

		      if ('e' in data) {
		        this.e = PropertyFactory.getProp(elem, data.e, 0, 0, this);
		      } else {
		        this.e = {
		          v: 100
		        };
		      }

		      this.o = PropertyFactory.getProp(elem, data.o || {
		        k: 0
		      }, 0, 0, this);
		      this.xe = PropertyFactory.getProp(elem, data.xe || {
		        k: 0
		      }, 0, 0, this);
		      this.ne = PropertyFactory.getProp(elem, data.ne || {
		        k: 0
		      }, 0, 0, this);
		      this.sm = PropertyFactory.getProp(elem, data.sm || {
		        k: 100
		      }, 0, 0, this);
		      this.a = PropertyFactory.getProp(elem, data.a, 0, 0.01, this);

		      if (!this.dynamicProperties.length) {
		        this.getValue();
		      }
		    }

		    TextSelectorPropFactory.prototype = {
		      getMult: function getMult(ind) {
		        if (this._currentTextLength !== this.elem.textProperty.currentData.l.length) {
		          this.getValue();
		        }

		        var x1 = 0;
		        var y1 = 0;
		        var x2 = 1;
		        var y2 = 1;

		        if (this.ne.v > 0) {
		          x1 = this.ne.v / 100.0;
		        } else {
		          y1 = -this.ne.v / 100.0;
		        }

		        if (this.xe.v > 0) {
		          x2 = 1.0 - this.xe.v / 100.0;
		        } else {
		          y2 = 1.0 + this.xe.v / 100.0;
		        }

		        var easer = BezierFactory.getBezierEasing(x1, y1, x2, y2).get;
		        var mult = 0;
		        var s = this.finalS;
		        var e = this.finalE;
		        var type = this.data.sh;

		        if (type === 2) {
		          if (e === s) {
		            mult = ind >= e ? 1 : 0;
		          } else {
		            mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
		          }

		          mult = easer(mult);
		        } else if (type === 3) {
		          if (e === s) {
		            mult = ind >= e ? 0 : 1;
		          } else {
		            mult = 1 - max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
		          }

		          mult = easer(mult);
		        } else if (type === 4) {
		          if (e === s) {
		            mult = 0;
		          } else {
		            mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));

		            if (mult < 0.5) {
		              mult *= 2;
		            } else {
		              mult = 1 - 2 * (mult - 0.5);
		            }
		          }

		          mult = easer(mult);
		        } else if (type === 5) {
		          if (e === s) {
		            mult = 0;
		          } else {
		            var tot = e - s;
		            /* ind += 0.5;
		                      mult = -4/(tot*tot)*(ind*ind)+(4/tot)*ind; */

		            ind = min(max(0, ind + 0.5 - s), e - s);
		            var x = -tot / 2 + ind;
		            var a = tot / 2;
		            mult = Math.sqrt(1 - x * x / (a * a));
		          }

		          mult = easer(mult);
		        } else if (type === 6) {
		          if (e === s) {
		            mult = 0;
		          } else {
		            ind = min(max(0, ind + 0.5 - s), e - s);
		            mult = (1 + Math.cos(Math.PI + Math.PI * 2 * ind / (e - s))) / 2; // eslint-disable-line
		          }

		          mult = easer(mult);
		        } else {
		          if (ind >= floor(s)) {
		            if (ind - s < 0) {
		              mult = max(0, min(min(e, 1) - (s - ind), 1));
		            } else {
		              mult = max(0, min(e - ind, 1));
		            }
		          }

		          mult = easer(mult);
		        } // Smoothness implementation.
		        // The smoothness represents a reduced range of the original [0; 1] range.
		        // if smoothness is 25%, the new range will be [0.375; 0.625]
		        // Steps are:
		        // - find the lower value of the new range (threshold)
		        // - if multiplier is smaller than that value, floor it to 0
		        // - if it is larger,
		        //     - subtract the threshold
		        //     - divide it by the smoothness (this will return the range to [0; 1])
		        // Note: If it doesn't work on some scenarios, consider applying it before the easer.


		        if (this.sm.v !== 100) {
		          var smoothness = this.sm.v * 0.01;

		          if (smoothness === 0) {
		            smoothness = 0.00000001;
		          }

		          var threshold = 0.5 - smoothness * 0.5;

		          if (mult < threshold) {
		            mult = 0;
		          } else {
		            mult = (mult - threshold) / smoothness;

		            if (mult > 1) {
		              mult = 1;
		            }
		          }
		        }

		        return mult * this.a.v;
		      },
		      getValue: function getValue(newCharsFlag) {
		        this.iterateDynamicProperties();
		        this._mdf = newCharsFlag || this._mdf;
		        this._currentTextLength = this.elem.textProperty.currentData.l.length || 0;

		        if (newCharsFlag && this.data.r === 2) {
		          this.e.v = this._currentTextLength;
		        }

		        var divisor = this.data.r === 2 ? 1 : 100 / this.data.totalChars;
		        var o = this.o.v / divisor;
		        var s = this.s.v / divisor + o;
		        var e = this.e.v / divisor + o;

		        if (s > e) {
		          var _s = s;
		          s = e;
		          e = _s;
		        }

		        this.finalS = s;
		        this.finalE = e;
		      }
		    };
		    extendPrototype([DynamicPropertyContainer], TextSelectorPropFactory);

		    function getTextSelectorProp(elem, data, arr) {
		      return new TextSelectorPropFactory(elem, data);
		    }

		    return {
		      getTextSelectorProp: getTextSelectorProp
		    };
		  }();

		  function TextAnimatorDataProperty(elem, animatorProps, container) {
		    var defaultData = {
		      propType: false
		    };
		    var getProp = PropertyFactory.getProp;
		    var textAnimatorAnimatables = animatorProps.a;
		    this.a = {
		      r: textAnimatorAnimatables.r ? getProp(elem, textAnimatorAnimatables.r, 0, degToRads, container) : defaultData,
		      rx: textAnimatorAnimatables.rx ? getProp(elem, textAnimatorAnimatables.rx, 0, degToRads, container) : defaultData,
		      ry: textAnimatorAnimatables.ry ? getProp(elem, textAnimatorAnimatables.ry, 0, degToRads, container) : defaultData,
		      sk: textAnimatorAnimatables.sk ? getProp(elem, textAnimatorAnimatables.sk, 0, degToRads, container) : defaultData,
		      sa: textAnimatorAnimatables.sa ? getProp(elem, textAnimatorAnimatables.sa, 0, degToRads, container) : defaultData,
		      s: textAnimatorAnimatables.s ? getProp(elem, textAnimatorAnimatables.s, 1, 0.01, container) : defaultData,
		      a: textAnimatorAnimatables.a ? getProp(elem, textAnimatorAnimatables.a, 1, 0, container) : defaultData,
		      o: textAnimatorAnimatables.o ? getProp(elem, textAnimatorAnimatables.o, 0, 0.01, container) : defaultData,
		      p: textAnimatorAnimatables.p ? getProp(elem, textAnimatorAnimatables.p, 1, 0, container) : defaultData,
		      sw: textAnimatorAnimatables.sw ? getProp(elem, textAnimatorAnimatables.sw, 0, 0, container) : defaultData,
		      sc: textAnimatorAnimatables.sc ? getProp(elem, textAnimatorAnimatables.sc, 1, 0, container) : defaultData,
		      fc: textAnimatorAnimatables.fc ? getProp(elem, textAnimatorAnimatables.fc, 1, 0, container) : defaultData,
		      fh: textAnimatorAnimatables.fh ? getProp(elem, textAnimatorAnimatables.fh, 0, 0, container) : defaultData,
		      fs: textAnimatorAnimatables.fs ? getProp(elem, textAnimatorAnimatables.fs, 0, 0.01, container) : defaultData,
		      fb: textAnimatorAnimatables.fb ? getProp(elem, textAnimatorAnimatables.fb, 0, 0.01, container) : defaultData,
		      t: textAnimatorAnimatables.t ? getProp(elem, textAnimatorAnimatables.t, 0, 0, container) : defaultData
		    };
		    this.s = TextSelectorProp.getTextSelectorProp(elem, animatorProps.s, container);
		    this.s.t = animatorProps.s.t;
		  }

		  function TextAnimatorProperty(textData, renderType, elem) {
		    this._isFirstFrame = true;
		    this._hasMaskedPath = false;
		    this._frameId = -1;
		    this._textData = textData;
		    this._renderType = renderType;
		    this._elem = elem;
		    this._animatorsData = createSizedArray(this._textData.a.length);
		    this._pathData = {};
		    this._moreOptions = {
		      alignment: {}
		    };
		    this.renderedLetters = [];
		    this.lettersChangedFlag = false;
		    this.initDynamicPropertyContainer(elem);
		  }

		  TextAnimatorProperty.prototype.searchProperties = function () {
		    var i;
		    var len = this._textData.a.length;
		    var animatorProps;
		    var getProp = PropertyFactory.getProp;

		    for (i = 0; i < len; i += 1) {
		      animatorProps = this._textData.a[i];
		      this._animatorsData[i] = new TextAnimatorDataProperty(this._elem, animatorProps, this);
		    }

		    if (this._textData.p && 'm' in this._textData.p) {
		      this._pathData = {
		        a: getProp(this._elem, this._textData.p.a, 0, 0, this),
		        f: getProp(this._elem, this._textData.p.f, 0, 0, this),
		        l: getProp(this._elem, this._textData.p.l, 0, 0, this),
		        r: getProp(this._elem, this._textData.p.r, 0, 0, this),
		        p: getProp(this._elem, this._textData.p.p, 0, 0, this),
		        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
		      };
		      this._hasMaskedPath = true;
		    } else {
		      this._hasMaskedPath = false;
		    }

		    this._moreOptions.alignment = getProp(this._elem, this._textData.m.a, 1, 0, this);
		  };

		  TextAnimatorProperty.prototype.getMeasures = function (documentData, lettersChangedFlag) {
		    this.lettersChangedFlag = lettersChangedFlag;

		    if (!this._mdf && !this._isFirstFrame && !lettersChangedFlag && (!this._hasMaskedPath || !this._pathData.m._mdf)) {
		      return;
		    }

		    this._isFirstFrame = false;
		    var alignment = this._moreOptions.alignment.v;
		    var animators = this._animatorsData;
		    var textData = this._textData;
		    var matrixHelper = this.mHelper;
		    var renderType = this._renderType;
		    var renderedLettersCount = this.renderedLetters.length;
		    var xPos;
		    var yPos;
		    var i;
		    var len;
		    var letters = documentData.l;
		    var pathInfo;
		    var currentLength;
		    var currentPoint;
		    var segmentLength;
		    var flag;
		    var pointInd;
		    var segmentInd;
		    var prevPoint;
		    var points;
		    var segments;
		    var partialLength;
		    var totalLength;
		    var perc;
		    var tanAngle;
		    var mask;

		    if (this._hasMaskedPath) {
		      mask = this._pathData.m;

		      if (!this._pathData.n || this._pathData._mdf) {
		        var paths = mask.v;

		        if (this._pathData.r.v) {
		          paths = paths.reverse();
		        } // TODO: release bezier data cached from previous pathInfo: this._pathData.pi


		        pathInfo = {
		          tLength: 0,
		          segments: []
		        };
		        len = paths._length - 1;
		        var bezierData;
		        totalLength = 0;

		        for (i = 0; i < len; i += 1) {
		          bezierData = bez.buildBezierData(paths.v[i], paths.v[i + 1], [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]], [paths.i[i + 1][0] - paths.v[i + 1][0], paths.i[i + 1][1] - paths.v[i + 1][1]]);
		          pathInfo.tLength += bezierData.segmentLength;
		          pathInfo.segments.push(bezierData);
		          totalLength += bezierData.segmentLength;
		        }

		        i = len;

		        if (mask.v.c) {
		          bezierData = bez.buildBezierData(paths.v[i], paths.v[0], [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]], [paths.i[0][0] - paths.v[0][0], paths.i[0][1] - paths.v[0][1]]);
		          pathInfo.tLength += bezierData.segmentLength;
		          pathInfo.segments.push(bezierData);
		          totalLength += bezierData.segmentLength;
		        }

		        this._pathData.pi = pathInfo;
		      }

		      pathInfo = this._pathData.pi;
		      currentLength = this._pathData.f.v;
		      segmentInd = 0;
		      pointInd = 1;
		      segmentLength = 0;
		      flag = true;
		      segments = pathInfo.segments;

		      if (currentLength < 0 && mask.v.c) {
		        if (pathInfo.tLength < Math.abs(currentLength)) {
		          currentLength = -Math.abs(currentLength) % pathInfo.tLength;
		        }

		        segmentInd = segments.length - 1;
		        points = segments[segmentInd].points;
		        pointInd = points.length - 1;

		        while (currentLength < 0) {
		          currentLength += points[pointInd].partialLength;
		          pointInd -= 1;

		          if (pointInd < 0) {
		            segmentInd -= 1;
		            points = segments[segmentInd].points;
		            pointInd = points.length - 1;
		          }
		        }
		      }

		      points = segments[segmentInd].points;
		      prevPoint = points[pointInd - 1];
		      currentPoint = points[pointInd];
		      partialLength = currentPoint.partialLength;
		    }

		    len = letters.length;
		    xPos = 0;
		    yPos = 0;
		    var yOff = documentData.finalSize * 1.2 * 0.714;
		    var firstLine = true;
		    var animatorProps;
		    var animatorSelector;
		    var j;
		    var jLen;
		    var letterValue;
		    jLen = animators.length;
		    var mult;
		    var ind = -1;
		    var offf;
		    var xPathPos;
		    var yPathPos;
		    var initPathPos = currentLength;
		    var initSegmentInd = segmentInd;
		    var initPointInd = pointInd;
		    var currentLine = -1;
		    var elemOpacity;
		    var sc;
		    var sw;
		    var fc;
		    var k;
		    var letterSw;
		    var letterSc;
		    var letterFc;
		    var letterM = '';
		    var letterP = this.defaultPropsArray;
		    var letterO; //

		    if (documentData.j === 2 || documentData.j === 1) {
		      var animatorJustifyOffset = 0;
		      var animatorFirstCharOffset = 0;
		      var justifyOffsetMult = documentData.j === 2 ? -0.5 : -1;
		      var lastIndex = 0;
		      var isNewLine = true;

		      for (i = 0; i < len; i += 1) {
		        if (letters[i].n) {
		          if (animatorJustifyOffset) {
		            animatorJustifyOffset += animatorFirstCharOffset;
		          }

		          while (lastIndex < i) {
		            letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
		            lastIndex += 1;
		          }

		          animatorJustifyOffset = 0;
		          isNewLine = true;
		        } else {
		          for (j = 0; j < jLen; j += 1) {
		            animatorProps = animators[j].a;

		            if (animatorProps.t.propType) {
		              if (isNewLine && documentData.j === 2) {
		                animatorFirstCharOffset += animatorProps.t.v * justifyOffsetMult;
		              }

		              animatorSelector = animators[j].s;
		              mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

		              if (mult.length) {
		                animatorJustifyOffset += animatorProps.t.v * mult[0] * justifyOffsetMult;
		              } else {
		                animatorJustifyOffset += animatorProps.t.v * mult * justifyOffsetMult;
		              }
		            }
		          }

		          isNewLine = false;
		        }
		      }

		      if (animatorJustifyOffset) {
		        animatorJustifyOffset += animatorFirstCharOffset;
		      }

		      while (lastIndex < i) {
		        letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
		        lastIndex += 1;
		      }
		    } //


		    for (i = 0; i < len; i += 1) {
		      matrixHelper.reset();
		      elemOpacity = 1;

		      if (letters[i].n) {
		        xPos = 0;
		        yPos += documentData.yOffset;
		        yPos += firstLine ? 1 : 0;
		        currentLength = initPathPos;
		        firstLine = false;

		        if (this._hasMaskedPath) {
		          segmentInd = initSegmentInd;
		          pointInd = initPointInd;
		          points = segments[segmentInd].points;
		          prevPoint = points[pointInd - 1];
		          currentPoint = points[pointInd];
		          partialLength = currentPoint.partialLength;
		          segmentLength = 0;
		        }

		        letterM = '';
		        letterFc = '';
		        letterSw = '';
		        letterO = '';
		        letterP = this.defaultPropsArray;
		      } else {
		        if (this._hasMaskedPath) {
		          if (currentLine !== letters[i].line) {
		            switch (documentData.j) {
		              case 1:
		                currentLength += totalLength - documentData.lineWidths[letters[i].line];
		                break;

		              case 2:
		                currentLength += (totalLength - documentData.lineWidths[letters[i].line]) / 2;
		                break;
		            }

		            currentLine = letters[i].line;
		          }

		          if (ind !== letters[i].ind) {
		            if (letters[ind]) {
		              currentLength += letters[ind].extra;
		            }

		            currentLength += letters[i].an / 2;
		            ind = letters[i].ind;
		          }

		          currentLength += alignment[0] * letters[i].an * 0.005;
		          var animatorOffset = 0;

		          for (j = 0; j < jLen; j += 1) {
		            animatorProps = animators[j].a;

		            if (animatorProps.p.propType) {
		              animatorSelector = animators[j].s;
		              mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

		              if (mult.length) {
		                animatorOffset += animatorProps.p.v[0] * mult[0];
		              } else {
		                animatorOffset += animatorProps.p.v[0] * mult;
		              }
		            }

		            if (animatorProps.a.propType) {
		              animatorSelector = animators[j].s;
		              mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

		              if (mult.length) {
		                animatorOffset += animatorProps.a.v[0] * mult[0];
		              } else {
		                animatorOffset += animatorProps.a.v[0] * mult;
		              }
		            }
		          }

		          flag = true; // Force alignment only works with a single line for now

		          if (this._pathData.a.v) {
		            currentLength = letters[0].an * 0.5 + (totalLength - this._pathData.f.v - letters[0].an * 0.5 - letters[letters.length - 1].an * 0.5) * ind / (len - 1);
		            currentLength += this._pathData.f.v;
		          }

		          while (flag) {
		            if (segmentLength + partialLength >= currentLength + animatorOffset || !points) {
		              perc = (currentLength + animatorOffset - segmentLength) / currentPoint.partialLength;
		              xPathPos = prevPoint.point[0] + (currentPoint.point[0] - prevPoint.point[0]) * perc;
		              yPathPos = prevPoint.point[1] + (currentPoint.point[1] - prevPoint.point[1]) * perc;
		              matrixHelper.translate(-alignment[0] * letters[i].an * 0.005, -(alignment[1] * yOff) * 0.01);
		              flag = false;
		            } else if (points) {
		              segmentLength += currentPoint.partialLength;
		              pointInd += 1;

		              if (pointInd >= points.length) {
		                pointInd = 0;
		                segmentInd += 1;

		                if (!segments[segmentInd]) {
		                  if (mask.v.c) {
		                    pointInd = 0;
		                    segmentInd = 0;
		                    points = segments[segmentInd].points;
		                  } else {
		                    segmentLength -= currentPoint.partialLength;
		                    points = null;
		                  }
		                } else {
		                  points = segments[segmentInd].points;
		                }
		              }

		              if (points) {
		                prevPoint = currentPoint;
		                currentPoint = points[pointInd];
		                partialLength = currentPoint.partialLength;
		              }
		            }
		          }

		          offf = letters[i].an / 2 - letters[i].add;
		          matrixHelper.translate(-offf, 0, 0);
		        } else {
		          offf = letters[i].an / 2 - letters[i].add;
		          matrixHelper.translate(-offf, 0, 0); // Grouping alignment

		          matrixHelper.translate(-alignment[0] * letters[i].an * 0.005, -alignment[1] * yOff * 0.01, 0);
		        }

		        for (j = 0; j < jLen; j += 1) {
		          animatorProps = animators[j].a;

		          if (animatorProps.t.propType) {
		            animatorSelector = animators[j].s;
		            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars); // This condition is to prevent applying tracking to first character in each line. Might be better to use a boolean "isNewLine"

		            if (xPos !== 0 || documentData.j !== 0) {
		              if (this._hasMaskedPath) {
		                if (mult.length) {
		                  currentLength += animatorProps.t.v * mult[0];
		                } else {
		                  currentLength += animatorProps.t.v * mult;
		                }
		              } else if (mult.length) {
		                xPos += animatorProps.t.v * mult[0];
		              } else {
		                xPos += animatorProps.t.v * mult;
		              }
		            }
		          }
		        }

		        if (documentData.strokeWidthAnim) {
		          sw = documentData.sw || 0;
		        }

		        if (documentData.strokeColorAnim) {
		          if (documentData.sc) {
		            sc = [documentData.sc[0], documentData.sc[1], documentData.sc[2]];
		          } else {
		            sc = [0, 0, 0];
		          }
		        }

		        if (documentData.fillColorAnim && documentData.fc) {
		          fc = [documentData.fc[0], documentData.fc[1], documentData.fc[2]];
		        }

		        for (j = 0; j < jLen; j += 1) {
		          animatorProps = animators[j].a;

		          if (animatorProps.a.propType) {
		            animatorSelector = animators[j].s;
		            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

		            if (mult.length) {
		              matrixHelper.translate(-animatorProps.a.v[0] * mult[0], -animatorProps.a.v[1] * mult[1], animatorProps.a.v[2] * mult[2]);
		            } else {
		              matrixHelper.translate(-animatorProps.a.v[0] * mult, -animatorProps.a.v[1] * mult, animatorProps.a.v[2] * mult);
		            }
		          }
		        }

		        for (j = 0; j < jLen; j += 1) {
		          animatorProps = animators[j].a;

		          if (animatorProps.s.propType) {
		            animatorSelector = animators[j].s;
		            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

		            if (mult.length) {
		              matrixHelper.scale(1 + (animatorProps.s.v[0] - 1) * mult[0], 1 + (animatorProps.s.v[1] - 1) * mult[1], 1);
		            } else {
		              matrixHelper.scale(1 + (animatorProps.s.v[0] - 1) * mult, 1 + (animatorProps.s.v[1] - 1) * mult, 1);
		            }
		          }
		        }

		        for (j = 0; j < jLen; j += 1) {
		          animatorProps = animators[j].a;
		          animatorSelector = animators[j].s;
		          mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

		          if (animatorProps.sk.propType) {
		            if (mult.length) {
		              matrixHelper.skewFromAxis(-animatorProps.sk.v * mult[0], animatorProps.sa.v * mult[1]);
		            } else {
		              matrixHelper.skewFromAxis(-animatorProps.sk.v * mult, animatorProps.sa.v * mult);
		            }
		          }

		          if (animatorProps.r.propType) {
		            if (mult.length) {
		              matrixHelper.rotateZ(-animatorProps.r.v * mult[2]);
		            } else {
		              matrixHelper.rotateZ(-animatorProps.r.v * mult);
		            }
		          }

		          if (animatorProps.ry.propType) {
		            if (mult.length) {
		              matrixHelper.rotateY(animatorProps.ry.v * mult[1]);
		            } else {
		              matrixHelper.rotateY(animatorProps.ry.v * mult);
		            }
		          }

		          if (animatorProps.rx.propType) {
		            if (mult.length) {
		              matrixHelper.rotateX(animatorProps.rx.v * mult[0]);
		            } else {
		              matrixHelper.rotateX(animatorProps.rx.v * mult);
		            }
		          }

		          if (animatorProps.o.propType) {
		            if (mult.length) {
		              elemOpacity += (animatorProps.o.v * mult[0] - elemOpacity) * mult[0];
		            } else {
		              elemOpacity += (animatorProps.o.v * mult - elemOpacity) * mult;
		            }
		          }

		          if (documentData.strokeWidthAnim && animatorProps.sw.propType) {
		            if (mult.length) {
		              sw += animatorProps.sw.v * mult[0];
		            } else {
		              sw += animatorProps.sw.v * mult;
		            }
		          }

		          if (documentData.strokeColorAnim && animatorProps.sc.propType) {
		            for (k = 0; k < 3; k += 1) {
		              if (mult.length) {
		                sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult[0];
		              } else {
		                sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult;
		              }
		            }
		          }

		          if (documentData.fillColorAnim && documentData.fc) {
		            if (animatorProps.fc.propType) {
		              for (k = 0; k < 3; k += 1) {
		                if (mult.length) {
		                  fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult[0];
		                } else {
		                  fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult;
		                }
		              }
		            }

		            if (animatorProps.fh.propType) {
		              if (mult.length) {
		                fc = addHueToRGB(fc, animatorProps.fh.v * mult[0]);
		              } else {
		                fc = addHueToRGB(fc, animatorProps.fh.v * mult);
		              }
		            }

		            if (animatorProps.fs.propType) {
		              if (mult.length) {
		                fc = addSaturationToRGB(fc, animatorProps.fs.v * mult[0]);
		              } else {
		                fc = addSaturationToRGB(fc, animatorProps.fs.v * mult);
		              }
		            }

		            if (animatorProps.fb.propType) {
		              if (mult.length) {
		                fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult[0]);
		              } else {
		                fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult);
		              }
		            }
		          }
		        }

		        for (j = 0; j < jLen; j += 1) {
		          animatorProps = animators[j].a;

		          if (animatorProps.p.propType) {
		            animatorSelector = animators[j].s;
		            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

		            if (this._hasMaskedPath) {
		              if (mult.length) {
		                matrixHelper.translate(0, animatorProps.p.v[1] * mult[0], -animatorProps.p.v[2] * mult[1]);
		              } else {
		                matrixHelper.translate(0, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
		              }
		            } else if (mult.length) {
		              matrixHelper.translate(animatorProps.p.v[0] * mult[0], animatorProps.p.v[1] * mult[1], -animatorProps.p.v[2] * mult[2]);
		            } else {
		              matrixHelper.translate(animatorProps.p.v[0] * mult, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
		            }
		          }
		        }

		        if (documentData.strokeWidthAnim) {
		          letterSw = sw < 0 ? 0 : sw;
		        }

		        if (documentData.strokeColorAnim) {
		          letterSc = 'rgb(' + Math.round(sc[0] * 255) + ',' + Math.round(sc[1] * 255) + ',' + Math.round(sc[2] * 255) + ')';
		        }

		        if (documentData.fillColorAnim && documentData.fc) {
		          letterFc = 'rgb(' + Math.round(fc[0] * 255) + ',' + Math.round(fc[1] * 255) + ',' + Math.round(fc[2] * 255) + ')';
		        }

		        if (this._hasMaskedPath) {
		          matrixHelper.translate(0, -documentData.ls);
		          matrixHelper.translate(0, alignment[1] * yOff * 0.01 + yPos, 0);

		          if (this._pathData.p.v) {
		            tanAngle = (currentPoint.point[1] - prevPoint.point[1]) / (currentPoint.point[0] - prevPoint.point[0]);
		            var rot = Math.atan(tanAngle) * 180 / Math.PI;

		            if (currentPoint.point[0] < prevPoint.point[0]) {
		              rot += 180;
		            }

		            matrixHelper.rotate(-rot * Math.PI / 180);
		          }

		          matrixHelper.translate(xPathPos, yPathPos, 0);
		          currentLength -= alignment[0] * letters[i].an * 0.005;

		          if (letters[i + 1] && ind !== letters[i + 1].ind) {
		            currentLength += letters[i].an / 2;
		            currentLength += documentData.tr * 0.001 * documentData.finalSize;
		          }
		        } else {
		          matrixHelper.translate(xPos, yPos, 0);

		          if (documentData.ps) {
		            // matrixHelper.translate(documentData.ps[0],documentData.ps[1],0);
		            matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0);
		          }

		          switch (documentData.j) {
		            case 1:
		              matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]), 0, 0);
		              break;

		            case 2:
		              matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]) / 2, 0, 0);
		              break;
		          }

		          matrixHelper.translate(0, -documentData.ls);
		          matrixHelper.translate(offf, 0, 0);
		          matrixHelper.translate(alignment[0] * letters[i].an * 0.005, alignment[1] * yOff * 0.01, 0);
		          xPos += letters[i].l + documentData.tr * 0.001 * documentData.finalSize;
		        }

		        if (renderType === 'html') {
		          letterM = matrixHelper.toCSS();
		        } else if (renderType === 'svg') {
		          letterM = matrixHelper.to2dCSS();
		        } else {
		          letterP = [matrixHelper.props[0], matrixHelper.props[1], matrixHelper.props[2], matrixHelper.props[3], matrixHelper.props[4], matrixHelper.props[5], matrixHelper.props[6], matrixHelper.props[7], matrixHelper.props[8], matrixHelper.props[9], matrixHelper.props[10], matrixHelper.props[11], matrixHelper.props[12], matrixHelper.props[13], matrixHelper.props[14], matrixHelper.props[15]];
		        }

		        letterO = elemOpacity;
		      }

		      if (renderedLettersCount <= i) {
		        letterValue = new LetterProps(letterO, letterSw, letterSc, letterFc, letterM, letterP);
		        this.renderedLetters.push(letterValue);
		        renderedLettersCount += 1;
		        this.lettersChangedFlag = true;
		      } else {
		        letterValue = this.renderedLetters[i];
		        this.lettersChangedFlag = letterValue.update(letterO, letterSw, letterSc, letterFc, letterM, letterP) || this.lettersChangedFlag;
		      }
		    }
		  };

		  TextAnimatorProperty.prototype.getValue = function () {
		    if (this._elem.globalData.frameId === this._frameId) {
		      return;
		    }

		    this._frameId = this._elem.globalData.frameId;
		    this.iterateDynamicProperties();
		  };

		  TextAnimatorProperty.prototype.mHelper = new Matrix();
		  TextAnimatorProperty.prototype.defaultPropsArray = [];
		  extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);

		  function ITextElement() {}

		  ITextElement.prototype.initElement = function (data, globalData, comp) {
		    this.lettersChangedFlag = true;
		    this.initFrame();
		    this.initBaseData(data, globalData, comp);
		    this.textProperty = new TextProperty(this, data.t, this.dynamicProperties);
		    this.textAnimator = new TextAnimatorProperty(data.t, this.renderType, this);
		    this.initTransform(data, globalData, comp);
		    this.initHierarchy();
		    this.initRenderable();
		    this.initRendererElement();
		    this.createContainerElements();
		    this.createRenderableComponents();
		    this.createContent();
		    this.hide();
		    this.textAnimator.searchProperties(this.dynamicProperties);
		  };

		  ITextElement.prototype.prepareFrame = function (num) {
		    this._mdf = false;
		    this.prepareRenderableFrame(num);
		    this.prepareProperties(num, this.isInRange);
		  };

		  ITextElement.prototype.createPathShape = function (matrixHelper, shapes) {
		    var j;
		    var jLen = shapes.length;
		    var pathNodes;
		    var shapeStr = '';

		    for (j = 0; j < jLen; j += 1) {
		      if (shapes[j].ty === 'sh') {
		        pathNodes = shapes[j].ks.k;
		        shapeStr += buildShapeString(pathNodes, pathNodes.i.length, true, matrixHelper);
		      }
		    }

		    return shapeStr;
		  };

		  ITextElement.prototype.updateDocumentData = function (newData, index) {
		    this.textProperty.updateDocumentData(newData, index);
		  };

		  ITextElement.prototype.canResizeFont = function (_canResize) {
		    this.textProperty.canResizeFont(_canResize);
		  };

		  ITextElement.prototype.setMinimumFontSize = function (_fontSize) {
		    this.textProperty.setMinimumFontSize(_fontSize);
		  };

		  ITextElement.prototype.applyTextPropertiesToMatrix = function (documentData, matrixHelper, lineNumber, xPos, yPos) {
		    if (documentData.ps) {
		      matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0);
		    }

		    matrixHelper.translate(0, -documentData.ls, 0);

		    switch (documentData.j) {
		      case 1:
		        matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]), 0, 0);
		        break;

		      case 2:
		        matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]) / 2, 0, 0);
		        break;
		    }

		    matrixHelper.translate(xPos, yPos, 0);
		  };

		  ITextElement.prototype.buildColor = function (colorData) {
		    return 'rgb(' + Math.round(colorData[0] * 255) + ',' + Math.round(colorData[1] * 255) + ',' + Math.round(colorData[2] * 255) + ')';
		  };

		  ITextElement.prototype.emptyProp = new LetterProps();

		  ITextElement.prototype.destroy = function () {};

		  ITextElement.prototype.validateText = function () {
		    if (this.textProperty._mdf || this.textProperty._isFirstFrame) {
		      this.buildNewText();
		      this.textProperty._isFirstFrame = false;
		      this.textProperty._mdf = false;
		    }
		  };

		  var emptyShapeData = {
		    shapes: []
		  };

		  function SVGTextLottieElement(data, globalData, comp) {
		    this.textSpans = [];
		    this.renderType = 'svg';
		    this.initElement(data, globalData, comp);
		  }

		  extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement);

		  SVGTextLottieElement.prototype.createContent = function () {
		    if (this.data.singleShape && !this.globalData.fontManager.chars) {
		      this.textContainer = createNS('text');
		    }
		  };

		  SVGTextLottieElement.prototype.buildTextContents = function (textArray) {
		    var i = 0;
		    var len = textArray.length;
		    var textContents = [];
		    var currentTextContent = '';

		    while (i < len) {
		      if (textArray[i] === String.fromCharCode(13) || textArray[i] === String.fromCharCode(3)) {
		        textContents.push(currentTextContent);
		        currentTextContent = '';
		      } else {
		        currentTextContent += textArray[i];
		      }

		      i += 1;
		    }

		    textContents.push(currentTextContent);
		    return textContents;
		  };

		  SVGTextLottieElement.prototype.buildShapeData = function (data, scale) {
		    // data should probably be cloned to apply scale separately to each instance of a text on different layers
		    // but since text internal content gets only rendered once and then it's never rerendered,
		    // it's probably safe not to clone data and reuse always the same instance even if the object is mutated.
		    // Avoiding cloning is preferred since cloning each character shape data is expensive
		    if (data.shapes && data.shapes.length) {
		      var shape = data.shapes[0];

		      if (shape.it) {
		        var shapeItem = shape.it[shape.it.length - 1];

		        if (shapeItem.s) {
		          shapeItem.s.k[0] = scale;
		          shapeItem.s.k[1] = scale;
		        }
		      }
		    }

		    return data;
		  };

		  SVGTextLottieElement.prototype.buildNewText = function () {
		    this.addDynamicProperty(this);
		    var i;
		    var len;
		    var documentData = this.textProperty.currentData;
		    this.renderedLetters = createSizedArray(documentData ? documentData.l.length : 0);

		    if (documentData.fc) {
		      this.layerElement.setAttribute('fill', this.buildColor(documentData.fc));
		    } else {
		      this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)');
		    }

		    if (documentData.sc) {
		      this.layerElement.setAttribute('stroke', this.buildColor(documentData.sc));
		      this.layerElement.setAttribute('stroke-width', documentData.sw);
		    }

		    this.layerElement.setAttribute('font-size', documentData.finalSize);
		    var fontData = this.globalData.fontManager.getFontByName(documentData.f);

		    if (fontData.fClass) {
		      this.layerElement.setAttribute('class', fontData.fClass);
		    } else {
		      this.layerElement.setAttribute('font-family', fontData.fFamily);
		      var fWeight = documentData.fWeight;
		      var fStyle = documentData.fStyle;
		      this.layerElement.setAttribute('font-style', fStyle);
		      this.layerElement.setAttribute('font-weight', fWeight);
		    }

		    this.layerElement.setAttribute('aria-label', documentData.t);
		    var letters = documentData.l || [];
		    var usesGlyphs = !!this.globalData.fontManager.chars;
		    len = letters.length;
		    var tSpan;
		    var matrixHelper = this.mHelper;
		    var shapeStr = '';
		    var singleShape = this.data.singleShape;
		    var xPos = 0;
		    var yPos = 0;
		    var firstLine = true;
		    var trackingOffset = documentData.tr * 0.001 * documentData.finalSize;

		    if (singleShape && !usesGlyphs && !documentData.sz) {
		      var tElement = this.textContainer;
		      var justify = 'start';

		      switch (documentData.j) {
		        case 1:
		          justify = 'end';
		          break;

		        case 2:
		          justify = 'middle';
		          break;

		        default:
		          justify = 'start';
		          break;
		      }

		      tElement.setAttribute('text-anchor', justify);
		      tElement.setAttribute('letter-spacing', trackingOffset);
		      var textContent = this.buildTextContents(documentData.finalText);
		      len = textContent.length;
		      yPos = documentData.ps ? documentData.ps[1] + documentData.ascent : 0;

		      for (i = 0; i < len; i += 1) {
		        tSpan = this.textSpans[i].span || createNS('tspan');
		        tSpan.textContent = textContent[i];
		        tSpan.setAttribute('x', 0);
		        tSpan.setAttribute('y', yPos);
		        tSpan.style.display = 'inherit';
		        tElement.appendChild(tSpan);

		        if (!this.textSpans[i]) {
		          this.textSpans[i] = {
		            span: null,
		            glyph: null
		          };
		        }

		        this.textSpans[i].span = tSpan;
		        yPos += documentData.finalLineHeight;
		      }

		      this.layerElement.appendChild(tElement);
		    } else {
		      var cachedSpansLength = this.textSpans.length;
		      var charData;

		      for (i = 0; i < len; i += 1) {
		        if (!this.textSpans[i]) {
		          this.textSpans[i] = {
		            span: null,
		            childSpan: null,
		            glyph: null
		          };
		        }

		        if (!usesGlyphs || !singleShape || i === 0) {
		          tSpan = cachedSpansLength > i ? this.textSpans[i].span : createNS(usesGlyphs ? 'g' : 'text');

		          if (cachedSpansLength <= i) {
		            tSpan.setAttribute('stroke-linecap', 'butt');
		            tSpan.setAttribute('stroke-linejoin', 'round');
		            tSpan.setAttribute('stroke-miterlimit', '4');
		            this.textSpans[i].span = tSpan;

		            if (usesGlyphs) {
		              var childSpan = createNS('g');
		              tSpan.appendChild(childSpan);
		              this.textSpans[i].childSpan = childSpan;
		            }

		            this.textSpans[i].span = tSpan;
		            this.layerElement.appendChild(tSpan);
		          }

		          tSpan.style.display = 'inherit';
		        }

		        matrixHelper.reset();

		        if (singleShape) {
		          if (letters[i].n) {
		            xPos = -trackingOffset;
		            yPos += documentData.yOffset;
		            yPos += firstLine ? 1 : 0;
		            firstLine = false;
		          }

		          this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
		          xPos += letters[i].l || 0; // xPos += letters[i].val === ' ' ? 0 : trackingOffset;

		          xPos += trackingOffset;
		        }

		        if (usesGlyphs) {
		          charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
		          var glyphElement; // t === 1 means the character has been replaced with an animated shaped

		          if (charData.t === 1) {
		            glyphElement = new SVGCompElement(charData.data, this.globalData, this);
		          } else {
		            var data = emptyShapeData;

		            if (charData.data && charData.data.shapes) {
		              data = this.buildShapeData(charData.data, documentData.finalSize);
		            }

		            glyphElement = new SVGShapeElement(data, this.globalData, this);
		          }

		          if (this.textSpans[i].glyph) {
		            var glyph = this.textSpans[i].glyph;
		            this.textSpans[i].childSpan.removeChild(glyph.layerElement);
		            glyph.destroy();
		          }

		          this.textSpans[i].glyph = glyphElement;
		          glyphElement._debug = true;
		          glyphElement.prepareFrame(0);
		          glyphElement.renderFrame();
		          this.textSpans[i].childSpan.appendChild(glyphElement.layerElement); // when using animated shapes, the layer will be scaled instead of replacing the internal scale
		          // this might have issues with strokes and might need a different solution

		          if (charData.t === 1) {
		            this.textSpans[i].childSpan.setAttribute('transform', 'scale(' + documentData.finalSize / 100 + ',' + documentData.finalSize / 100 + ')');
		          }
		        } else {
		          if (singleShape) {
		            tSpan.setAttribute('transform', 'translate(' + matrixHelper.props[12] + ',' + matrixHelper.props[13] + ')');
		          }

		          tSpan.textContent = letters[i].val;
		          tSpan.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');
		        } //

		      }

		      if (singleShape && tSpan) {
		        tSpan.setAttribute('d', shapeStr);
		      }
		    }

		    while (i < this.textSpans.length) {
		      this.textSpans[i].span.style.display = 'none';
		      i += 1;
		    }

		    this._sizeChanged = true;
		  };

		  SVGTextLottieElement.prototype.sourceRectAtTime = function () {
		    this.prepareFrame(this.comp.renderedFrame - this.data.st);
		    this.renderInnerContent();

		    if (this._sizeChanged) {
		      this._sizeChanged = false;
		      var textBox = this.layerElement.getBBox();
		      this.bbox = {
		        top: textBox.y,
		        left: textBox.x,
		        width: textBox.width,
		        height: textBox.height
		      };
		    }

		    return this.bbox;
		  };

		  SVGTextLottieElement.prototype.getValue = function () {
		    var i;
		    var len = this.textSpans.length;
		    var glyphElement;
		    this.renderedFrame = this.comp.renderedFrame;

		    for (i = 0; i < len; i += 1) {
		      glyphElement = this.textSpans[i].glyph;

		      if (glyphElement) {
		        glyphElement.prepareFrame(this.comp.renderedFrame - this.data.st);

		        if (glyphElement._mdf) {
		          this._mdf = true;
		        }
		      }
		    }
		  };

		  SVGTextLottieElement.prototype.renderInnerContent = function () {
		    this.validateText();

		    if (!this.data.singleShape || this._mdf) {
		      this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);

		      if (this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
		        this._sizeChanged = true;
		        var i;
		        var len;
		        var renderedLetters = this.textAnimator.renderedLetters;
		        var letters = this.textProperty.currentData.l;
		        len = letters.length;
		        var renderedLetter;
		        var textSpan;
		        var glyphElement;

		        for (i = 0; i < len; i += 1) {
		          if (!letters[i].n) {
		            renderedLetter = renderedLetters[i];
		            textSpan = this.textSpans[i].span;
		            glyphElement = this.textSpans[i].glyph;

		            if (glyphElement) {
		              glyphElement.renderFrame();
		            }

		            if (renderedLetter._mdf.m) {
		              textSpan.setAttribute('transform', renderedLetter.m);
		            }

		            if (renderedLetter._mdf.o) {
		              textSpan.setAttribute('opacity', renderedLetter.o);
		            }

		            if (renderedLetter._mdf.sw) {
		              textSpan.setAttribute('stroke-width', renderedLetter.sw);
		            }

		            if (renderedLetter._mdf.sc) {
		              textSpan.setAttribute('stroke', renderedLetter.sc);
		            }

		            if (renderedLetter._mdf.fc) {
		              textSpan.setAttribute('fill', renderedLetter.fc);
		            }
		          }
		        }
		      }
		    }
		  };

		  function ISolidElement(data, globalData, comp) {
		    this.initElement(data, globalData, comp);
		  }

		  extendPrototype([IImageElement], ISolidElement);

		  ISolidElement.prototype.createContent = function () {
		    var rect = createNS('rect'); /// /rect.style.width = this.data.sw;
		    /// /rect.style.height = this.data.sh;
		    /// /rect.style.fill = this.data.sc;

		    rect.setAttribute('width', this.data.sw);
		    rect.setAttribute('height', this.data.sh);
		    rect.setAttribute('fill', this.data.sc);
		    this.layerElement.appendChild(rect);
		  };

		  function NullElement(data, globalData, comp) {
		    this.initFrame();
		    this.initBaseData(data, globalData, comp);
		    this.initFrame();
		    this.initTransform(data, globalData, comp);
		    this.initHierarchy();
		  }

		  NullElement.prototype.prepareFrame = function (num) {
		    this.prepareProperties(num, true);
		  };

		  NullElement.prototype.renderFrame = function () {};

		  NullElement.prototype.getBaseElement = function () {
		    return null;
		  };

		  NullElement.prototype.destroy = function () {};

		  NullElement.prototype.sourceRectAtTime = function () {};

		  NullElement.prototype.hide = function () {};

		  extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);

		  function SVGRendererBase() {}

		  extendPrototype([BaseRenderer], SVGRendererBase);

		  SVGRendererBase.prototype.createNull = function (data) {
		    return new NullElement(data, this.globalData, this);
		  };

		  SVGRendererBase.prototype.createShape = function (data) {
		    return new SVGShapeElement(data, this.globalData, this);
		  };

		  SVGRendererBase.prototype.createText = function (data) {
		    return new SVGTextLottieElement(data, this.globalData, this);
		  };

		  SVGRendererBase.prototype.createImage = function (data) {
		    return new IImageElement(data, this.globalData, this);
		  };

		  SVGRendererBase.prototype.createSolid = function (data) {
		    return new ISolidElement(data, this.globalData, this);
		  };

		  SVGRendererBase.prototype.configAnimation = function (animData) {
		    this.svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
		    this.svgElement.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');

		    if (this.renderConfig.viewBoxSize) {
		      this.svgElement.setAttribute('viewBox', this.renderConfig.viewBoxSize);
		    } else {
		      this.svgElement.setAttribute('viewBox', '0 0 ' + animData.w + ' ' + animData.h);
		    }

		    if (!this.renderConfig.viewBoxOnly) {
		      this.svgElement.setAttribute('width', animData.w);
		      this.svgElement.setAttribute('height', animData.h);
		      this.svgElement.style.width = '100%';
		      this.svgElement.style.height = '100%';
		      this.svgElement.style.transform = 'translate3d(0,0,0)';
		      this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility;
		    }

		    if (this.renderConfig.width) {
		      this.svgElement.setAttribute('width', this.renderConfig.width);
		    }

		    if (this.renderConfig.height) {
		      this.svgElement.setAttribute('height', this.renderConfig.height);
		    }

		    if (this.renderConfig.className) {
		      this.svgElement.setAttribute('class', this.renderConfig.className);
		    }

		    if (this.renderConfig.id) {
		      this.svgElement.setAttribute('id', this.renderConfig.id);
		    }

		    if (this.renderConfig.focusable !== undefined) {
		      this.svgElement.setAttribute('focusable', this.renderConfig.focusable);
		    }

		    this.svgElement.setAttribute('preserveAspectRatio', this.renderConfig.preserveAspectRatio); // this.layerElement.style.transform = 'translate3d(0,0,0)';
		    // this.layerElement.style.transformOrigin = this.layerElement.style.mozTransformOrigin = this.layerElement.style.webkitTransformOrigin = this.layerElement.style['-webkit-transform'] = "0px 0px 0px";

		    this.animationItem.wrapper.appendChild(this.svgElement); // Mask animation

		    var defs = this.globalData.defs;
		    this.setupGlobalData(animData, defs);
		    this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
		    this.data = animData;
		    var maskElement = createNS('clipPath');
		    var rect = createNS('rect');
		    rect.setAttribute('width', animData.w);
		    rect.setAttribute('height', animData.h);
		    rect.setAttribute('x', 0);
		    rect.setAttribute('y', 0);
		    var maskId = createElementID();
		    maskElement.setAttribute('id', maskId);
		    maskElement.appendChild(rect);
		    this.layerElement.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + maskId + ')');
		    defs.appendChild(maskElement);
		    this.layers = animData.layers;
		    this.elements = createSizedArray(animData.layers.length);
		  };

		  SVGRendererBase.prototype.destroy = function () {
		    if (this.animationItem.wrapper) {
		      this.animationItem.wrapper.innerText = '';
		    }

		    this.layerElement = null;
		    this.globalData.defs = null;
		    var i;
		    var len = this.layers ? this.layers.length : 0;

		    for (i = 0; i < len; i += 1) {
		      if (this.elements[i] && this.elements[i].destroy) {
		        this.elements[i].destroy();
		      }
		    }

		    this.elements.length = 0;
		    this.destroyed = true;
		    this.animationItem = null;
		  };

		  SVGRendererBase.prototype.updateContainerSize = function () {};

		  SVGRendererBase.prototype.findIndexByInd = function (ind) {
		    var i = 0;
		    var len = this.layers.length;

		    for (i = 0; i < len; i += 1) {
		      if (this.layers[i].ind === ind) {
		        return i;
		      }
		    }

		    return -1;
		  };

		  SVGRendererBase.prototype.buildItem = function (pos) {
		    var elements = this.elements;

		    if (elements[pos] || this.layers[pos].ty === 99) {
		      return;
		    }

		    elements[pos] = true;
		    var element = this.createItem(this.layers[pos]);
		    elements[pos] = element;

		    if (getExpressionsPlugin()) {
		      if (this.layers[pos].ty === 0) {
		        this.globalData.projectInterface.registerComposition(element);
		      }

		      element.initExpressions();
		    }

		    this.appendElementInPos(element, pos);

		    if (this.layers[pos].tt) {
		      var elementIndex = 'tp' in this.layers[pos] ? this.findIndexByInd(this.layers[pos].tp) : pos - 1;

		      if (elementIndex === -1) {
		        return;
		      }

		      if (!this.elements[elementIndex] || this.elements[elementIndex] === true) {
		        this.buildItem(elementIndex);
		        this.addPendingElement(element);
		      } else {
		        var matteElement = elements[elementIndex];
		        var matteMask = matteElement.getMatte(this.layers[pos].tt);
		        element.setMatte(matteMask);
		      }
		    }
		  };

		  SVGRendererBase.prototype.checkPendingElements = function () {
		    while (this.pendingElements.length) {
		      var element = this.pendingElements.pop();
		      element.checkParenting();

		      if (element.data.tt) {
		        var i = 0;
		        var len = this.elements.length;

		        while (i < len) {
		          if (this.elements[i] === element) {
		            var elementIndex = 'tp' in element.data ? this.findIndexByInd(element.data.tp) : i - 1;
		            var matteElement = this.elements[elementIndex];
		            var matteMask = matteElement.getMatte(this.layers[i].tt);
		            element.setMatte(matteMask);
		            break;
		          }

		          i += 1;
		        }
		      }
		    }
		  };

		  SVGRendererBase.prototype.renderFrame = function (num) {
		    if (this.renderedFrame === num || this.destroyed) {
		      return;
		    }

		    if (num === null) {
		      num = this.renderedFrame;
		    } else {
		      this.renderedFrame = num;
		    } // console.log('-------');
		    // console.log('FRAME ',num);


		    this.globalData.frameNum = num;
		    this.globalData.frameId += 1;
		    this.globalData.projectInterface.currentFrame = num;
		    this.globalData._mdf = false;
		    var i;
		    var len = this.layers.length;

		    if (!this.completeLayers) {
		      this.checkLayers(num);
		    }

		    for (i = len - 1; i >= 0; i -= 1) {
		      if (this.completeLayers || this.elements[i]) {
		        this.elements[i].prepareFrame(num - this.layers[i].st);
		      }
		    }

		    if (this.globalData._mdf) {
		      for (i = 0; i < len; i += 1) {
		        if (this.completeLayers || this.elements[i]) {
		          this.elements[i].renderFrame();
		        }
		      }
		    }
		  };

		  SVGRendererBase.prototype.appendElementInPos = function (element, pos) {
		    var newElement = element.getBaseElement();

		    if (!newElement) {
		      return;
		    }

		    var i = 0;
		    var nextElement;

		    while (i < pos) {
		      if (this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement()) {
		        nextElement = this.elements[i].getBaseElement();
		      }

		      i += 1;
		    }

		    if (nextElement) {
		      this.layerElement.insertBefore(newElement, nextElement);
		    } else {
		      this.layerElement.appendChild(newElement);
		    }
		  };

		  SVGRendererBase.prototype.hide = function () {
		    this.layerElement.style.display = 'none';
		  };

		  SVGRendererBase.prototype.show = function () {
		    this.layerElement.style.display = 'block';
		  };

		  function ICompElement() {}

		  extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement);

		  ICompElement.prototype.initElement = function (data, globalData, comp) {
		    this.initFrame();
		    this.initBaseData(data, globalData, comp);
		    this.initTransform(data, globalData, comp);
		    this.initRenderable();
		    this.initHierarchy();
		    this.initRendererElement();
		    this.createContainerElements();
		    this.createRenderableComponents();

		    if (this.data.xt || !globalData.progressiveLoad) {
		      this.buildAllItems();
		    }

		    this.hide();
		  };
		  /* ICompElement.prototype.hide = function(){
		      if(!this.hidden){
		          this.hideElement();
		          var i,len = this.elements.length;
		          for( i = 0; i < len; i+=1 ){
		              if(this.elements[i]){
		                  this.elements[i].hide();
		              }
		          }
		      }
		  }; */


		  ICompElement.prototype.prepareFrame = function (num) {
		    this._mdf = false;
		    this.prepareRenderableFrame(num);
		    this.prepareProperties(num, this.isInRange);

		    if (!this.isInRange && !this.data.xt) {
		      return;
		    }

		    if (!this.tm._placeholder) {
		      var timeRemapped = this.tm.v;

		      if (timeRemapped === this.data.op) {
		        timeRemapped = this.data.op - 1;
		      }

		      this.renderedFrame = timeRemapped;
		    } else {
		      this.renderedFrame = num / this.data.sr;
		    }

		    var i;
		    var len = this.elements.length;

		    if (!this.completeLayers) {
		      this.checkLayers(this.renderedFrame);
		    } // This iteration needs to be backwards because of how expressions connect between each other


		    for (i = len - 1; i >= 0; i -= 1) {
		      if (this.completeLayers || this.elements[i]) {
		        this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st);

		        if (this.elements[i]._mdf) {
		          this._mdf = true;
		        }
		      }
		    }
		  };

		  ICompElement.prototype.renderInnerContent = function () {
		    var i;
		    var len = this.layers.length;

		    for (i = 0; i < len; i += 1) {
		      if (this.completeLayers || this.elements[i]) {
		        this.elements[i].renderFrame();
		      }
		    }
		  };

		  ICompElement.prototype.setElements = function (elems) {
		    this.elements = elems;
		  };

		  ICompElement.prototype.getElements = function () {
		    return this.elements;
		  };

		  ICompElement.prototype.destroyElements = function () {
		    var i;
		    var len = this.layers.length;

		    for (i = 0; i < len; i += 1) {
		      if (this.elements[i]) {
		        this.elements[i].destroy();
		      }
		    }
		  };

		  ICompElement.prototype.destroy = function () {
		    this.destroyElements();
		    this.destroyBaseElement();
		  };

		  function SVGCompElement(data, globalData, comp) {
		    this.layers = data.layers;
		    this.supports3d = true;
		    this.completeLayers = false;
		    this.pendingElements = [];
		    this.elements = this.layers ? createSizedArray(this.layers.length) : [];
		    this.initElement(data, globalData, comp);
		    this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : {
		      _placeholder: true
		    };
		  }

		  extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement);

		  SVGCompElement.prototype.createComp = function (data) {
		    return new SVGCompElement(data, this.globalData, this);
		  };

		  function SVGRenderer(animationItem, config) {
		    this.animationItem = animationItem;
		    this.layers = null;
		    this.renderedFrame = -1;
		    this.svgElement = createNS('svg');
		    var ariaLabel = '';

		    if (config && config.title) {
		      var titleElement = createNS('title');
		      var titleId = createElementID();
		      titleElement.setAttribute('id', titleId);
		      titleElement.textContent = config.title;
		      this.svgElement.appendChild(titleElement);
		      ariaLabel += titleId;
		    }

		    if (config && config.description) {
		      var descElement = createNS('desc');
		      var descId = createElementID();
		      descElement.setAttribute('id', descId);
		      descElement.textContent = config.description;
		      this.svgElement.appendChild(descElement);
		      ariaLabel += ' ' + descId;
		    }

		    if (ariaLabel) {
		      this.svgElement.setAttribute('aria-labelledby', ariaLabel);
		    }

		    var defs = createNS('defs');
		    this.svgElement.appendChild(defs);
		    var maskElement = createNS('g');
		    this.svgElement.appendChild(maskElement);
		    this.layerElement = maskElement;
		    this.renderConfig = {
		      preserveAspectRatio: config && config.preserveAspectRatio || 'xMidYMid meet',
		      imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || 'xMidYMid slice',
		      contentVisibility: config && config.contentVisibility || 'visible',
		      progressiveLoad: config && config.progressiveLoad || false,
		      hideOnTransparent: !(config && config.hideOnTransparent === false),
		      viewBoxOnly: config && config.viewBoxOnly || false,
		      viewBoxSize: config && config.viewBoxSize || false,
		      className: config && config.className || '',
		      id: config && config.id || '',
		      focusable: config && config.focusable,
		      filterSize: {
		        width: config && config.filterSize && config.filterSize.width || '100%',
		        height: config && config.filterSize && config.filterSize.height || '100%',
		        x: config && config.filterSize && config.filterSize.x || '0%',
		        y: config && config.filterSize && config.filterSize.y || '0%'
		      },
		      width: config && config.width,
		      height: config && config.height,
		      runExpressions: !config || config.runExpressions === undefined || config.runExpressions
		    };
		    this.globalData = {
		      _mdf: false,
		      frameNum: -1,
		      defs: defs,
		      renderConfig: this.renderConfig
		    };
		    this.elements = [];
		    this.pendingElements = [];
		    this.destroyed = false;
		    this.rendererType = 'svg';
		  }

		  extendPrototype([SVGRendererBase], SVGRenderer);

		  SVGRenderer.prototype.createComp = function (data) {
		    return new SVGCompElement(data, this.globalData, this);
		  };

		  function ShapeTransformManager() {
		    this.sequences = {};
		    this.sequenceList = [];
		    this.transform_key_count = 0;
		  }

		  ShapeTransformManager.prototype = {
		    addTransformSequence: function addTransformSequence(transforms) {
		      var i;
		      var len = transforms.length;
		      var key = '_';

		      for (i = 0; i < len; i += 1) {
		        key += transforms[i].transform.key + '_';
		      }

		      var sequence = this.sequences[key];

		      if (!sequence) {
		        sequence = {
		          transforms: [].concat(transforms),
		          finalTransform: new Matrix(),
		          _mdf: false
		        };
		        this.sequences[key] = sequence;
		        this.sequenceList.push(sequence);
		      }

		      return sequence;
		    },
		    processSequence: function processSequence(sequence, isFirstFrame) {
		      var i = 0;
		      var len = sequence.transforms.length;
		      var _mdf = isFirstFrame;

		      while (i < len && !isFirstFrame) {
		        if (sequence.transforms[i].transform.mProps._mdf) {
		          _mdf = true;
		          break;
		        }

		        i += 1;
		      }

		      if (_mdf) {
		        sequence.finalTransform.reset();

		        for (i = len - 1; i >= 0; i -= 1) {
		          sequence.finalTransform.multiply(sequence.transforms[i].transform.mProps.v);
		        }
		      }

		      sequence._mdf = _mdf;
		    },
		    processSequences: function processSequences(isFirstFrame) {
		      var i;
		      var len = this.sequenceList.length;

		      for (i = 0; i < len; i += 1) {
		        this.processSequence(this.sequenceList[i], isFirstFrame);
		      }
		    },
		    getNewKey: function getNewKey() {
		      this.transform_key_count += 1;
		      return '_' + this.transform_key_count;
		    }
		  };

		  var lumaLoader = function lumaLoader() {
		    var id = '__lottie_element_luma_buffer';
		    var lumaBuffer = null;
		    var lumaBufferCtx = null;
		    var svg = null; // This alternate solution has a slight delay before the filter is applied, resulting in a flicker on the first frame.
		    // Keeping this here for reference, and in the future, if offscreen canvas supports url filters, this can be used.
		    // For now, neither of them work for offscreen canvas, so canvas workers can't support the luma track matte mask.
		    // Naming it solution 2 to mark the extra comment lines.

		    /*
		    var svgString = [
		      '<svg xmlns="http://www.w3.org/2000/svg">',
		      '<filter id="' + id + '">',
		      '<feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="',
		      '0.3, 0.3, 0.3, 0, 0, ',
		      '0.3, 0.3, 0.3, 0, 0, ',
		      '0.3, 0.3, 0.3, 0, 0, ',
		      '0.3, 0.3, 0.3, 0, 0',
		      '"/>',
		      '</filter>',
		      '</svg>',
		    ].join('');
		    var blob = new Blob([svgString], { type: 'image/svg+xml' });
		    var url = URL.createObjectURL(blob);
		    */

		    function createLumaSvgFilter() {
		      var _svg = createNS('svg');

		      var fil = createNS('filter');
		      var matrix = createNS('feColorMatrix');
		      fil.setAttribute('id', id);
		      matrix.setAttribute('type', 'matrix');
		      matrix.setAttribute('color-interpolation-filters', 'sRGB');
		      matrix.setAttribute('values', '0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0');
		      fil.appendChild(matrix);

		      _svg.appendChild(fil);

		      _svg.setAttribute('id', id + '_svg');

		      if (featureSupport.svgLumaHidden) {
		        _svg.style.display = 'none';
		      }

		      return _svg;
		    }

		    function loadLuma() {
		      if (!lumaBuffer) {
		        svg = createLumaSvgFilter();
		        document.body.appendChild(svg);
		        lumaBuffer = createTag('canvas');
		        lumaBufferCtx = lumaBuffer.getContext('2d'); // lumaBufferCtx.filter = `url('${url}#__lottie_element_luma_buffer')`; // part of solution 2

		        lumaBufferCtx.filter = 'url(#' + id + ')';
		        lumaBufferCtx.fillStyle = 'rgba(0,0,0,0)';
		        lumaBufferCtx.fillRect(0, 0, 1, 1);
		      }
		    }

		    function getLuma(canvas) {
		      if (!lumaBuffer) {
		        loadLuma();
		      }

		      lumaBuffer.width = canvas.width;
		      lumaBuffer.height = canvas.height; // lumaBufferCtx.filter = `url('${url}#__lottie_element_luma_buffer')`; // part of solution 2

		      lumaBufferCtx.filter = 'url(#' + id + ')';
		      return lumaBuffer;
		    }

		    return {
		      load: loadLuma,
		      get: getLuma
		    };
		  };

		  function createCanvas(width, height) {
		    if (featureSupport.offscreenCanvas) {
		      return new OffscreenCanvas(width, height);
		    }

		    var canvas = createTag('canvas');
		    canvas.width = width;
		    canvas.height = height;
		    return canvas;
		  }

		  var assetLoader = function () {
		    return {
		      loadLumaCanvas: lumaLoader.load,
		      getLumaCanvas: lumaLoader.get,
		      createCanvas: createCanvas
		    };
		  }();

		  var registeredEffects = {};

		  function CVEffects(elem) {
		    var i;
		    var len = elem.data.ef ? elem.data.ef.length : 0;
		    this.filters = [];
		    var filterManager;

		    for (i = 0; i < len; i += 1) {
		      filterManager = null;
		      var type = elem.data.ef[i].ty;

		      if (registeredEffects[type]) {
		        var Effect = registeredEffects[type].effect;
		        filterManager = new Effect(elem.effectsManager.effectElements[i], elem);
		      }

		      if (filterManager) {
		        this.filters.push(filterManager);
		      }
		    }

		    if (this.filters.length) {
		      elem.addRenderableComponent(this);
		    }
		  }

		  CVEffects.prototype.renderFrame = function (_isFirstFrame) {
		    var i;
		    var len = this.filters.length;

		    for (i = 0; i < len; i += 1) {
		      this.filters[i].renderFrame(_isFirstFrame);
		    }
		  };

		  CVEffects.prototype.getEffects = function (type) {
		    var i;
		    var len = this.filters.length;
		    var effects = [];

		    for (i = 0; i < len; i += 1) {
		      if (this.filters[i].type === type) {
		        effects.push(this.filters[i]);
		      }
		    }

		    return effects;
		  };

		  function registerEffect(id, effect) {
		    registeredEffects[id] = {
		      effect: effect
		    };
		  }

		  function CVMaskElement(data, element) {
		    this.data = data;
		    this.element = element;
		    this.masksProperties = this.data.masksProperties || [];
		    this.viewData = createSizedArray(this.masksProperties.length);
		    var i;
		    var len = this.masksProperties.length;
		    var hasMasks = false;

		    for (i = 0; i < len; i += 1) {
		      if (this.masksProperties[i].mode !== 'n') {
		        hasMasks = true;
		      }

		      this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
		    }

		    this.hasMasks = hasMasks;

		    if (hasMasks) {
		      this.element.addRenderableComponent(this);
		    }
		  }

		  CVMaskElement.prototype.renderFrame = function () {
		    if (!this.hasMasks) {
		      return;
		    }

		    var transform = this.element.finalTransform.mat;
		    var ctx = this.element.canvasContext;
		    var i;
		    var len = this.masksProperties.length;
		    var pt;
		    var pts;
		    var data;
		    ctx.beginPath();

		    for (i = 0; i < len; i += 1) {
		      if (this.masksProperties[i].mode !== 'n') {
		        if (this.masksProperties[i].inv) {
		          ctx.moveTo(0, 0);
		          ctx.lineTo(this.element.globalData.compSize.w, 0);
		          ctx.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h);
		          ctx.lineTo(0, this.element.globalData.compSize.h);
		          ctx.lineTo(0, 0);
		        }

		        data = this.viewData[i].v;
		        pt = transform.applyToPointArray(data.v[0][0], data.v[0][1], 0);
		        ctx.moveTo(pt[0], pt[1]);
		        var j;
		        var jLen = data._length;

		        for (j = 1; j < jLen; j += 1) {
		          pts = transform.applyToTriplePoints(data.o[j - 1], data.i[j], data.v[j]);
		          ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
		        }

		        pts = transform.applyToTriplePoints(data.o[j - 1], data.i[0], data.v[0]);
		        ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
		      }
		    }

		    this.element.globalData.renderer.save(true);
		    ctx.clip();
		  };

		  CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty;

		  CVMaskElement.prototype.destroy = function () {
		    this.element = null;
		  };

		  function CVBaseElement() {}

		  var operationsMap = {
		    1: 'source-in',
		    2: 'source-out',
		    3: 'source-in',
		    4: 'source-out'
		  };
		  CVBaseElement.prototype = {
		    createElements: function createElements() {},
		    initRendererElement: function initRendererElement() {},
		    createContainerElements: function createContainerElements() {
		      // If the layer is masked we will use two buffers to store each different states of the drawing
		      // This solution is not ideal for several reason. But unfortunately, because of the recursive
		      // nature of the render tree, it's the only simple way to make sure one inner mask doesn't override an outer mask.
		      // TODO: try to reduce the size of these buffers to the size of the composition contaning the layer
		      // It might be challenging because the layer most likely is transformed in some way
		      if (this.data.tt >= 1) {
		        this.buffers = [];
		        var canvasContext = this.globalData.canvasContext;
		        var bufferCanvas = assetLoader.createCanvas(canvasContext.canvas.width, canvasContext.canvas.height);
		        this.buffers.push(bufferCanvas);
		        var bufferCanvas2 = assetLoader.createCanvas(canvasContext.canvas.width, canvasContext.canvas.height);
		        this.buffers.push(bufferCanvas2);

		        if (this.data.tt >= 3 && !document._isProxy) {
		          assetLoader.loadLumaCanvas();
		        }
		      }

		      this.canvasContext = this.globalData.canvasContext;
		      this.transformCanvas = this.globalData.transformCanvas;
		      this.renderableEffectsManager = new CVEffects(this);
		      this.searchEffectTransforms();
		    },
		    createContent: function createContent() {},
		    setBlendMode: function setBlendMode() {
		      var globalData = this.globalData;

		      if (globalData.blendMode !== this.data.bm) {
		        globalData.blendMode = this.data.bm;
		        var blendModeValue = getBlendMode(this.data.bm);
		        globalData.canvasContext.globalCompositeOperation = blendModeValue;
		      }
		    },
		    createRenderableComponents: function createRenderableComponents() {
		      this.maskManager = new CVMaskElement(this.data, this);
		      this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
		    },
		    hideElement: function hideElement() {
		      if (!this.hidden && (!this.isInRange || this.isTransparent)) {
		        this.hidden = true;
		      }
		    },
		    showElement: function showElement() {
		      if (this.isInRange && !this.isTransparent) {
		        this.hidden = false;
		        this._isFirstFrame = true;
		        this.maskManager._isFirstFrame = true;
		      }
		    },
		    clearCanvas: function clearCanvas(canvasContext) {
		      canvasContext.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
		    },
		    prepareLayer: function prepareLayer() {
		      if (this.data.tt >= 1) {
		        var buffer = this.buffers[0];
		        var bufferCtx = buffer.getContext('2d');
		        this.clearCanvas(bufferCtx); // on the first buffer we store the current state of the global drawing

		        bufferCtx.drawImage(this.canvasContext.canvas, 0, 0); // The next four lines are to clear the canvas
		        // TODO: Check if there is a way to clear the canvas without resetting the transform

		        this.currentTransform = this.canvasContext.getTransform();
		        this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
		        this.clearCanvas(this.canvasContext);
		        this.canvasContext.setTransform(this.currentTransform);
		      }
		    },
		    exitLayer: function exitLayer() {
		      if (this.data.tt >= 1) {
		        var buffer = this.buffers[1]; // On the second buffer we store the current state of the global drawing
		        // that only contains the content of this layer
		        // (if it is a composition, it also includes the nested layers)

		        var bufferCtx = buffer.getContext('2d');
		        this.clearCanvas(bufferCtx);
		        bufferCtx.drawImage(this.canvasContext.canvas, 0, 0); // We clear the canvas again

		        this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
		        this.clearCanvas(this.canvasContext);
		        this.canvasContext.setTransform(this.currentTransform); // We draw the mask

		        var mask = this.comp.getElementById('tp' in this.data ? this.data.tp : this.data.ind - 1);
		        mask.renderFrame(true); // We draw the second buffer (that contains the content of this layer)

		        this.canvasContext.setTransform(1, 0, 0, 1, 0, 0); // If the mask is a Luma matte, we need to do two extra painting operations
		        // the _isProxy check is to avoid drawing a fake canvas in workers that will throw an error

		        if (this.data.tt >= 3 && !document._isProxy) {
		          // We copy the painted mask to a buffer that has a color matrix filter applied to it
		          // that applies the rgb values to the alpha channel
		          var lumaBuffer = assetLoader.getLumaCanvas(this.canvasContext.canvas);
		          var lumaBufferCtx = lumaBuffer.getContext('2d');
		          lumaBufferCtx.drawImage(this.canvasContext.canvas, 0, 0);
		          this.clearCanvas(this.canvasContext); // we repaint the context with the mask applied to it

		          this.canvasContext.drawImage(lumaBuffer, 0, 0);
		        }

		        this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt];
		        this.canvasContext.drawImage(buffer, 0, 0); // We finally draw the first buffer (that contains the content of the global drawing)
		        // We use destination-over to draw the global drawing below the current layer

		        this.canvasContext.globalCompositeOperation = 'destination-over';
		        this.canvasContext.drawImage(this.buffers[0], 0, 0);
		        this.canvasContext.setTransform(this.currentTransform); // We reset the globalCompositeOperation to source-over, the standard type of operation

		        this.canvasContext.globalCompositeOperation = 'source-over';
		      }
		    },
		    renderFrame: function renderFrame(forceRender) {
		      if (this.hidden || this.data.hd) {
		        return;
		      }

		      if (this.data.td === 1 && !forceRender) {
		        return;
		      }

		      this.renderTransform();
		      this.renderRenderable();
		      this.renderLocalTransform();
		      this.setBlendMode();
		      var forceRealStack = this.data.ty === 0;
		      this.prepareLayer();
		      this.globalData.renderer.save(forceRealStack);
		      this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props);
		      this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity);
		      this.renderInnerContent();
		      this.globalData.renderer.restore(forceRealStack);
		      this.exitLayer();

		      if (this.maskManager.hasMasks) {
		        this.globalData.renderer.restore(true);
		      }

		      if (this._isFirstFrame) {
		        this._isFirstFrame = false;
		      }
		    },
		    destroy: function destroy() {
		      this.canvasContext = null;
		      this.data = null;
		      this.globalData = null;
		      this.maskManager.destroy();
		    },
		    mHelper: new Matrix()
		  };
		  CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement;
		  CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;

		  function CVShapeData(element, data, styles, transformsManager) {
		    this.styledShapes = [];
		    this.tr = [0, 0, 0, 0, 0, 0];
		    var ty = 4;

		    if (data.ty === 'rc') {
		      ty = 5;
		    } else if (data.ty === 'el') {
		      ty = 6;
		    } else if (data.ty === 'sr') {
		      ty = 7;
		    }

		    this.sh = ShapePropertyFactory.getShapeProp(element, data, ty, element);
		    var i;
		    var len = styles.length;
		    var styledShape;

		    for (i = 0; i < len; i += 1) {
		      if (!styles[i].closed) {
		        styledShape = {
		          transforms: transformsManager.addTransformSequence(styles[i].transforms),
		          trNodes: []
		        };
		        this.styledShapes.push(styledShape);
		        styles[i].elements.push(styledShape);
		      }
		    }
		  }

		  CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;

		  function CVShapeElement(data, globalData, comp) {
		    this.shapes = [];
		    this.shapesData = data.shapes;
		    this.stylesList = [];
		    this.itemsData = [];
		    this.prevViewData = [];
		    this.shapeModifiers = [];
		    this.processedElements = [];
		    this.transformsManager = new ShapeTransformManager();
		    this.initElement(data, globalData, comp);
		  }

		  extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement);
		  CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement;
		  CVShapeElement.prototype.transformHelper = {
		    opacity: 1,
		    _opMdf: false
		  };
		  CVShapeElement.prototype.dashResetter = [];

		  CVShapeElement.prototype.createContent = function () {
		    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
		  };

		  CVShapeElement.prototype.createStyleElement = function (data, transforms) {
		    var styleElem = {
		      data: data,
		      type: data.ty,
		      preTransforms: this.transformsManager.addTransformSequence(transforms),
		      transforms: [],
		      elements: [],
		      closed: data.hd === true
		    };
		    var elementData = {};

		    if (data.ty === 'fl' || data.ty === 'st') {
		      elementData.c = PropertyFactory.getProp(this, data.c, 1, 255, this);

		      if (!elementData.c.k) {
		        styleElem.co = 'rgb(' + bmFloor(elementData.c.v[0]) + ',' + bmFloor(elementData.c.v[1]) + ',' + bmFloor(elementData.c.v[2]) + ')';
		      }
		    } else if (data.ty === 'gf' || data.ty === 'gs') {
		      elementData.s = PropertyFactory.getProp(this, data.s, 1, null, this);
		      elementData.e = PropertyFactory.getProp(this, data.e, 1, null, this);
		      elementData.h = PropertyFactory.getProp(this, data.h || {
		        k: 0
		      }, 0, 0.01, this);
		      elementData.a = PropertyFactory.getProp(this, data.a || {
		        k: 0
		      }, 0, degToRads, this);
		      elementData.g = new GradientProperty(this, data.g, this);
		    }

		    elementData.o = PropertyFactory.getProp(this, data.o, 0, 0.01, this);

		    if (data.ty === 'st' || data.ty === 'gs') {
		      styleElem.lc = lineCapEnum[data.lc || 2];
		      styleElem.lj = lineJoinEnum[data.lj || 2];

		      if (data.lj == 1) {
		        // eslint-disable-line eqeqeq
		        styleElem.ml = data.ml;
		      }

		      elementData.w = PropertyFactory.getProp(this, data.w, 0, null, this);

		      if (!elementData.w.k) {
		        styleElem.wi = elementData.w.v;
		      }

		      if (data.d) {
		        var d = new DashProperty(this, data.d, 'canvas', this);
		        elementData.d = d;

		        if (!elementData.d.k) {
		          styleElem.da = elementData.d.dashArray;
		          styleElem["do"] = elementData.d.dashoffset[0];
		        }
		      }
		    } else {
		      styleElem.r = data.r === 2 ? 'evenodd' : 'nonzero';
		    }

		    this.stylesList.push(styleElem);
		    elementData.style = styleElem;
		    return elementData;
		  };

		  CVShapeElement.prototype.createGroupElement = function () {
		    var elementData = {
		      it: [],
		      prevViewData: []
		    };
		    return elementData;
		  };

		  CVShapeElement.prototype.createTransformElement = function (data) {
		    var elementData = {
		      transform: {
		        opacity: 1,
		        _opMdf: false,
		        key: this.transformsManager.getNewKey(),
		        op: PropertyFactory.getProp(this, data.o, 0, 0.01, this),
		        mProps: TransformPropertyFactory.getTransformProperty(this, data, this)
		      }
		    };
		    return elementData;
		  };

		  CVShapeElement.prototype.createShapeElement = function (data) {
		    var elementData = new CVShapeData(this, data, this.stylesList, this.transformsManager);
		    this.shapes.push(elementData);
		    this.addShapeToModifiers(elementData);
		    return elementData;
		  };

		  CVShapeElement.prototype.reloadShapes = function () {
		    this._isFirstFrame = true;
		    var i;
		    var len = this.itemsData.length;

		    for (i = 0; i < len; i += 1) {
		      this.prevViewData[i] = this.itemsData[i];
		    }

		    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
		    len = this.dynamicProperties.length;

		    for (i = 0; i < len; i += 1) {
		      this.dynamicProperties[i].getValue();
		    }

		    this.renderModifiers();
		    this.transformsManager.processSequences(this._isFirstFrame);
		  };

		  CVShapeElement.prototype.addTransformToStyleList = function (transform) {
		    var i;
		    var len = this.stylesList.length;

		    for (i = 0; i < len; i += 1) {
		      if (!this.stylesList[i].closed) {
		        this.stylesList[i].transforms.push(transform);
		      }
		    }
		  };

		  CVShapeElement.prototype.removeTransformFromStyleList = function () {
		    var i;
		    var len = this.stylesList.length;

		    for (i = 0; i < len; i += 1) {
		      if (!this.stylesList[i].closed) {
		        this.stylesList[i].transforms.pop();
		      }
		    }
		  };

		  CVShapeElement.prototype.closeStyles = function (styles) {
		    var i;
		    var len = styles.length;

		    for (i = 0; i < len; i += 1) {
		      styles[i].closed = true;
		    }
		  };

		  CVShapeElement.prototype.searchShapes = function (arr, itemsData, prevViewData, shouldRender, transforms) {
		    var i;
		    var len = arr.length - 1;
		    var j;
		    var jLen;
		    var ownStyles = [];
		    var ownModifiers = [];
		    var processedPos;
		    var modifier;
		    var currentTransform;
		    var ownTransforms = [].concat(transforms);

		    for (i = len; i >= 0; i -= 1) {
		      processedPos = this.searchProcessedElement(arr[i]);

		      if (!processedPos) {
		        arr[i]._shouldRender = shouldRender;
		      } else {
		        itemsData[i] = prevViewData[processedPos - 1];
		      }

		      if (arr[i].ty === 'fl' || arr[i].ty === 'st' || arr[i].ty === 'gf' || arr[i].ty === 'gs') {
		        if (!processedPos) {
		          itemsData[i] = this.createStyleElement(arr[i], ownTransforms);
		        } else {
		          itemsData[i].style.closed = false;
		        }

		        ownStyles.push(itemsData[i].style);
		      } else if (arr[i].ty === 'gr') {
		        if (!processedPos) {
		          itemsData[i] = this.createGroupElement(arr[i]);
		        } else {
		          jLen = itemsData[i].it.length;

		          for (j = 0; j < jLen; j += 1) {
		            itemsData[i].prevViewData[j] = itemsData[i].it[j];
		          }
		        }

		        this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, shouldRender, ownTransforms);
		      } else if (arr[i].ty === 'tr') {
		        if (!processedPos) {
		          currentTransform = this.createTransformElement(arr[i]);
		          itemsData[i] = currentTransform;
		        }

		        ownTransforms.push(itemsData[i]);
		        this.addTransformToStyleList(itemsData[i]);
		      } else if (arr[i].ty === 'sh' || arr[i].ty === 'rc' || arr[i].ty === 'el' || arr[i].ty === 'sr') {
		        if (!processedPos) {
		          itemsData[i] = this.createShapeElement(arr[i]);
		        }
		      } else if (arr[i].ty === 'tm' || arr[i].ty === 'rd' || arr[i].ty === 'pb' || arr[i].ty === 'zz' || arr[i].ty === 'op') {
		        if (!processedPos) {
		          modifier = ShapeModifiers.getModifier(arr[i].ty);
		          modifier.init(this, arr[i]);
		          itemsData[i] = modifier;
		          this.shapeModifiers.push(modifier);
		        } else {
		          modifier = itemsData[i];
		          modifier.closed = false;
		        }

		        ownModifiers.push(modifier);
		      } else if (arr[i].ty === 'rp') {
		        if (!processedPos) {
		          modifier = ShapeModifiers.getModifier(arr[i].ty);
		          itemsData[i] = modifier;
		          modifier.init(this, arr, i, itemsData);
		          this.shapeModifiers.push(modifier);
		          shouldRender = false;
		        } else {
		          modifier = itemsData[i];
		          modifier.closed = true;
		        }

		        ownModifiers.push(modifier);
		      }

		      this.addProcessedElement(arr[i], i + 1);
		    }

		    this.removeTransformFromStyleList();
		    this.closeStyles(ownStyles);
		    len = ownModifiers.length;

		    for (i = 0; i < len; i += 1) {
		      ownModifiers[i].closed = true;
		    }
		  };

		  CVShapeElement.prototype.renderInnerContent = function () {
		    this.transformHelper.opacity = 1;
		    this.transformHelper._opMdf = false;
		    this.renderModifiers();
		    this.transformsManager.processSequences(this._isFirstFrame);
		    this.renderShape(this.transformHelper, this.shapesData, this.itemsData, true);
		  };

		  CVShapeElement.prototype.renderShapeTransform = function (parentTransform, groupTransform) {
		    if (parentTransform._opMdf || groupTransform.op._mdf || this._isFirstFrame) {
		      groupTransform.opacity = parentTransform.opacity;
		      groupTransform.opacity *= groupTransform.op.v;
		      groupTransform._opMdf = true;
		    }
		  };

		  CVShapeElement.prototype.drawLayer = function () {
		    var i;
		    var len = this.stylesList.length;
		    var j;
		    var jLen;
		    var k;
		    var kLen;
		    var elems;
		    var nodes;
		    var renderer = this.globalData.renderer;
		    var ctx = this.globalData.canvasContext;
		    var type;
		    var currentStyle;

		    for (i = 0; i < len; i += 1) {
		      currentStyle = this.stylesList[i];
		      type = currentStyle.type; // Skipping style when
		      // Stroke width equals 0
		      // style should not be rendered (extra unused repeaters)
		      // current opacity equals 0
		      // global opacity equals 0

		      if (!((type === 'st' || type === 'gs') && currentStyle.wi === 0 || !currentStyle.data._shouldRender || currentStyle.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
		        renderer.save();
		        elems = currentStyle.elements;

		        if (type === 'st' || type === 'gs') {
		          renderer.ctxStrokeStyle(type === 'st' ? currentStyle.co : currentStyle.grd); // ctx.strokeStyle = type === 'st' ? currentStyle.co : currentStyle.grd;

		          renderer.ctxLineWidth(currentStyle.wi); // ctx.lineWidth = currentStyle.wi;

		          renderer.ctxLineCap(currentStyle.lc); // ctx.lineCap = currentStyle.lc;

		          renderer.ctxLineJoin(currentStyle.lj); // ctx.lineJoin = currentStyle.lj;

		          renderer.ctxMiterLimit(currentStyle.ml || 0); // ctx.miterLimit = currentStyle.ml || 0;
		        } else {
		          renderer.ctxFillStyle(type === 'fl' ? currentStyle.co : currentStyle.grd); // ctx.fillStyle = type === 'fl' ? currentStyle.co : currentStyle.grd;
		        }

		        renderer.ctxOpacity(currentStyle.coOp);

		        if (type !== 'st' && type !== 'gs') {
		          ctx.beginPath();
		        }

		        renderer.ctxTransform(currentStyle.preTransforms.finalTransform.props);
		        jLen = elems.length;

		        for (j = 0; j < jLen; j += 1) {
		          if (type === 'st' || type === 'gs') {
		            ctx.beginPath();

		            if (currentStyle.da) {
		              ctx.setLineDash(currentStyle.da);
		              ctx.lineDashOffset = currentStyle["do"];
		            }
		          }

		          nodes = elems[j].trNodes;
		          kLen = nodes.length;

		          for (k = 0; k < kLen; k += 1) {
		            if (nodes[k].t === 'm') {
		              ctx.moveTo(nodes[k].p[0], nodes[k].p[1]);
		            } else if (nodes[k].t === 'c') {
		              ctx.bezierCurveTo(nodes[k].pts[0], nodes[k].pts[1], nodes[k].pts[2], nodes[k].pts[3], nodes[k].pts[4], nodes[k].pts[5]);
		            } else {
		              ctx.closePath();
		            }
		          }

		          if (type === 'st' || type === 'gs') {
		            // ctx.stroke();
		            renderer.ctxStroke();

		            if (currentStyle.da) {
		              ctx.setLineDash(this.dashResetter);
		            }
		          }
		        }

		        if (type !== 'st' && type !== 'gs') {
		          // ctx.fill(currentStyle.r);
		          this.globalData.renderer.ctxFill(currentStyle.r);
		        }

		        renderer.restore();
		      }
		    }
		  };

		  CVShapeElement.prototype.renderShape = function (parentTransform, items, data, isMain) {
		    var i;
		    var len = items.length - 1;
		    var groupTransform;
		    groupTransform = parentTransform;

		    for (i = len; i >= 0; i -= 1) {
		      if (items[i].ty === 'tr') {
		        groupTransform = data[i].transform;
		        this.renderShapeTransform(parentTransform, groupTransform);
		      } else if (items[i].ty === 'sh' || items[i].ty === 'el' || items[i].ty === 'rc' || items[i].ty === 'sr') {
		        this.renderPath(items[i], data[i]);
		      } else if (items[i].ty === 'fl') {
		        this.renderFill(items[i], data[i], groupTransform);
		      } else if (items[i].ty === 'st') {
		        this.renderStroke(items[i], data[i], groupTransform);
		      } else if (items[i].ty === 'gf' || items[i].ty === 'gs') {
		        this.renderGradientFill(items[i], data[i], groupTransform);
		      } else if (items[i].ty === 'gr') {
		        this.renderShape(groupTransform, items[i].it, data[i].it);
		      } else if (items[i].ty === 'tm') ;
		    }

		    if (isMain) {
		      this.drawLayer();
		    }
		  };

		  CVShapeElement.prototype.renderStyledShape = function (styledShape, shape) {
		    if (this._isFirstFrame || shape._mdf || styledShape.transforms._mdf) {
		      var shapeNodes = styledShape.trNodes;
		      var paths = shape.paths;
		      var i;
		      var len;
		      var j;
		      var jLen = paths._length;
		      shapeNodes.length = 0;
		      var groupTransformMat = styledShape.transforms.finalTransform;

		      for (j = 0; j < jLen; j += 1) {
		        var pathNodes = paths.shapes[j];

		        if (pathNodes && pathNodes.v) {
		          len = pathNodes._length;

		          for (i = 1; i < len; i += 1) {
		            if (i === 1) {
		              shapeNodes.push({
		                t: 'm',
		                p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0)
		              });
		            }

		            shapeNodes.push({
		              t: 'c',
		              pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[i], pathNodes.v[i])
		            });
		          }

		          if (len === 1) {
		            shapeNodes.push({
		              t: 'm',
		              p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0)
		            });
		          }

		          if (pathNodes.c && len) {
		            shapeNodes.push({
		              t: 'c',
		              pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[0], pathNodes.v[0])
		            });
		            shapeNodes.push({
		              t: 'z'
		            });
		          }
		        }
		      }

		      styledShape.trNodes = shapeNodes;
		    }
		  };

		  CVShapeElement.prototype.renderPath = function (pathData, itemData) {
		    if (pathData.hd !== true && pathData._shouldRender) {
		      var i;
		      var len = itemData.styledShapes.length;

		      for (i = 0; i < len; i += 1) {
		        this.renderStyledShape(itemData.styledShapes[i], itemData.sh);
		      }
		    }
		  };

		  CVShapeElement.prototype.renderFill = function (styleData, itemData, groupTransform) {
		    var styleElem = itemData.style;

		    if (itemData.c._mdf || this._isFirstFrame) {
		      styleElem.co = 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')';
		    }

		    if (itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame) {
		      styleElem.coOp = itemData.o.v * groupTransform.opacity;
		    }
		  };

		  CVShapeElement.prototype.renderGradientFill = function (styleData, itemData, groupTransform) {
		    var styleElem = itemData.style;
		    var grd;

		    if (!styleElem.grd || itemData.g._mdf || itemData.s._mdf || itemData.e._mdf || styleData.t !== 1 && (itemData.h._mdf || itemData.a._mdf)) {
		      var ctx = this.globalData.canvasContext;
		      var pt1 = itemData.s.v;
		      var pt2 = itemData.e.v;

		      if (styleData.t === 1) {
		        grd = ctx.createLinearGradient(pt1[0], pt1[1], pt2[0], pt2[1]);
		      } else {
		        var rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
		        var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);
		        var percent = itemData.h.v;

		        if (percent >= 1) {
		          percent = 0.99;
		        } else if (percent <= -1) {
		          percent = -0.99;
		        }

		        var dist = rad * percent;
		        var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
		        var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
		        grd = ctx.createRadialGradient(x, y, 0, pt1[0], pt1[1], rad);
		      }

		      var i;
		      var len = styleData.g.p;
		      var cValues = itemData.g.c;
		      var opacity = 1;

		      for (i = 0; i < len; i += 1) {
		        if (itemData.g._hasOpacity && itemData.g._collapsable) {
		          opacity = itemData.g.o[i * 2 + 1];
		        }

		        grd.addColorStop(cValues[i * 4] / 100, 'rgba(' + cValues[i * 4 + 1] + ',' + cValues[i * 4 + 2] + ',' + cValues[i * 4 + 3] + ',' + opacity + ')');
		      }

		      styleElem.grd = grd;
		    }

		    styleElem.coOp = itemData.o.v * groupTransform.opacity;
		  };

		  CVShapeElement.prototype.renderStroke = function (styleData, itemData, groupTransform) {
		    var styleElem = itemData.style;
		    var d = itemData.d;

		    if (d && (d._mdf || this._isFirstFrame)) {
		      styleElem.da = d.dashArray;
		      styleElem["do"] = d.dashoffset[0];
		    }

		    if (itemData.c._mdf || this._isFirstFrame) {
		      styleElem.co = 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')';
		    }

		    if (itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame) {
		      styleElem.coOp = itemData.o.v * groupTransform.opacity;
		    }

		    if (itemData.w._mdf || this._isFirstFrame) {
		      styleElem.wi = itemData.w.v;
		    }
		  };

		  CVShapeElement.prototype.destroy = function () {
		    this.shapesData = null;
		    this.globalData = null;
		    this.canvasContext = null;
		    this.stylesList.length = 0;
		    this.itemsData.length = 0;
		  };

		  function CVTextElement(data, globalData, comp) {
		    this.textSpans = [];
		    this.yOffset = 0;
		    this.fillColorAnim = false;
		    this.strokeColorAnim = false;
		    this.strokeWidthAnim = false;
		    this.stroke = false;
		    this.fill = false;
		    this.justifyOffset = 0;
		    this.currentRender = null;
		    this.renderType = 'canvas';
		    this.values = {
		      fill: 'rgba(0,0,0,0)',
		      stroke: 'rgba(0,0,0,0)',
		      sWidth: 0,
		      fValue: ''
		    };
		    this.initElement(data, globalData, comp);
		  }

		  extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement);
		  CVTextElement.prototype.tHelper = createTag('canvas').getContext('2d');

		  CVTextElement.prototype.buildNewText = function () {
		    var documentData = this.textProperty.currentData;
		    this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);
		    var hasFill = false;

		    if (documentData.fc) {
		      hasFill = true;
		      this.values.fill = this.buildColor(documentData.fc);
		    } else {
		      this.values.fill = 'rgba(0,0,0,0)';
		    }

		    this.fill = hasFill;
		    var hasStroke = false;

		    if (documentData.sc) {
		      hasStroke = true;
		      this.values.stroke = this.buildColor(documentData.sc);
		      this.values.sWidth = documentData.sw;
		    }

		    var fontData = this.globalData.fontManager.getFontByName(documentData.f);
		    var i;
		    var len;
		    var letters = documentData.l;
		    var matrixHelper = this.mHelper;
		    this.stroke = hasStroke;
		    this.values.fValue = documentData.finalSize + 'px ' + this.globalData.fontManager.getFontByName(documentData.f).fFamily;
		    len = documentData.finalText.length; // this.tHelper.font = this.values.fValue;

		    var charData;
		    var shapeData;
		    var k;
		    var kLen;
		    var shapes;
		    var j;
		    var jLen;
		    var pathNodes;
		    var commands;
		    var pathArr;
		    var singleShape = this.data.singleShape;
		    var trackingOffset = documentData.tr * 0.001 * documentData.finalSize;
		    var xPos = 0;
		    var yPos = 0;
		    var firstLine = true;
		    var cnt = 0;

		    for (i = 0; i < len; i += 1) {
		      charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
		      shapeData = charData && charData.data || {};
		      matrixHelper.reset();

		      if (singleShape && letters[i].n) {
		        xPos = -trackingOffset;
		        yPos += documentData.yOffset;
		        yPos += firstLine ? 1 : 0;
		        firstLine = false;
		      }

		      shapes = shapeData.shapes ? shapeData.shapes[0].it : [];
		      jLen = shapes.length;
		      matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);

		      if (singleShape) {
		        this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
		      }

		      commands = createSizedArray(jLen - 1);
		      var commandsCounter = 0;

		      for (j = 0; j < jLen; j += 1) {
		        if (shapes[j].ty === 'sh') {
		          kLen = shapes[j].ks.k.i.length;
		          pathNodes = shapes[j].ks.k;
		          pathArr = [];

		          for (k = 1; k < kLen; k += 1) {
		            if (k === 1) {
		              pathArr.push(matrixHelper.applyToX(pathNodes.v[0][0], pathNodes.v[0][1], 0), matrixHelper.applyToY(pathNodes.v[0][0], pathNodes.v[0][1], 0));
		            }

		            pathArr.push(matrixHelper.applyToX(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToY(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToX(pathNodes.i[k][0], pathNodes.i[k][1], 0), matrixHelper.applyToY(pathNodes.i[k][0], pathNodes.i[k][1], 0), matrixHelper.applyToX(pathNodes.v[k][0], pathNodes.v[k][1], 0), matrixHelper.applyToY(pathNodes.v[k][0], pathNodes.v[k][1], 0));
		          }

		          pathArr.push(matrixHelper.applyToX(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToY(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToX(pathNodes.i[0][0], pathNodes.i[0][1], 0), matrixHelper.applyToY(pathNodes.i[0][0], pathNodes.i[0][1], 0), matrixHelper.applyToX(pathNodes.v[0][0], pathNodes.v[0][1], 0), matrixHelper.applyToY(pathNodes.v[0][0], pathNodes.v[0][1], 0));
		          commands[commandsCounter] = pathArr;
		          commandsCounter += 1;
		        }
		      }

		      if (singleShape) {
		        xPos += letters[i].l;
		        xPos += trackingOffset;
		      }

		      if (this.textSpans[cnt]) {
		        this.textSpans[cnt].elem = commands;
		      } else {
		        this.textSpans[cnt] = {
		          elem: commands
		        };
		      }

		      cnt += 1;
		    }
		  };

		  CVTextElement.prototype.renderInnerContent = function () {
		    this.validateText();
		    var ctx = this.canvasContext;
		    ctx.font = this.values.fValue;
		    this.globalData.renderer.ctxLineCap('butt'); // ctx.lineCap = 'butt';

		    this.globalData.renderer.ctxLineJoin('miter'); // ctx.lineJoin = 'miter';

		    this.globalData.renderer.ctxMiterLimit(4); // ctx.miterLimit = 4;

		    if (!this.data.singleShape) {
		      this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
		    }

		    var i;
		    var len;
		    var j;
		    var jLen;
		    var k;
		    var kLen;
		    var renderedLetters = this.textAnimator.renderedLetters;
		    var letters = this.textProperty.currentData.l;
		    len = letters.length;
		    var renderedLetter;
		    var lastFill = null;
		    var lastStroke = null;
		    var lastStrokeW = null;
		    var commands;
		    var pathArr;
		    var renderer = this.globalData.renderer;

		    for (i = 0; i < len; i += 1) {
		      if (!letters[i].n) {
		        renderedLetter = renderedLetters[i];

		        if (renderedLetter) {
		          renderer.save();
		          renderer.ctxTransform(renderedLetter.p);
		          renderer.ctxOpacity(renderedLetter.o);
		        }

		        if (this.fill) {
		          if (renderedLetter && renderedLetter.fc) {
		            if (lastFill !== renderedLetter.fc) {
		              renderer.ctxFillStyle(renderedLetter.fc);
		              lastFill = renderedLetter.fc; // ctx.fillStyle = renderedLetter.fc;
		            }
		          } else if (lastFill !== this.values.fill) {
		            lastFill = this.values.fill;
		            renderer.ctxFillStyle(this.values.fill); // ctx.fillStyle = this.values.fill;
		          }

		          commands = this.textSpans[i].elem;
		          jLen = commands.length;
		          this.globalData.canvasContext.beginPath();

		          for (j = 0; j < jLen; j += 1) {
		            pathArr = commands[j];
		            kLen = pathArr.length;
		            this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);

		            for (k = 2; k < kLen; k += 6) {
		              this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
		            }
		          }

		          this.globalData.canvasContext.closePath();
		          renderer.ctxFill(); // this.globalData.canvasContext.fill();
		          /// ctx.fillText(this.textSpans[i].val,0,0);
		        }

		        if (this.stroke) {
		          if (renderedLetter && renderedLetter.sw) {
		            if (lastStrokeW !== renderedLetter.sw) {
		              lastStrokeW = renderedLetter.sw;
		              renderer.ctxLineWidth(renderedLetter.sw); // ctx.lineWidth = renderedLetter.sw;
		            }
		          } else if (lastStrokeW !== this.values.sWidth) {
		            lastStrokeW = this.values.sWidth;
		            renderer.ctxLineWidth(this.values.sWidth); // ctx.lineWidth = this.values.sWidth;
		          }

		          if (renderedLetter && renderedLetter.sc) {
		            if (lastStroke !== renderedLetter.sc) {
		              lastStroke = renderedLetter.sc;
		              renderer.ctxStrokeStyle(renderedLetter.sc); // ctx.strokeStyle = renderedLetter.sc;
		            }
		          } else if (lastStroke !== this.values.stroke) {
		            lastStroke = this.values.stroke;
		            renderer.ctxStrokeStyle(this.values.stroke); // ctx.strokeStyle = this.values.stroke;
		          }

		          commands = this.textSpans[i].elem;
		          jLen = commands.length;
		          this.globalData.canvasContext.beginPath();

		          for (j = 0; j < jLen; j += 1) {
		            pathArr = commands[j];
		            kLen = pathArr.length;
		            this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);

		            for (k = 2; k < kLen; k += 6) {
		              this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
		            }
		          }

		          this.globalData.canvasContext.closePath();
		          renderer.ctxStroke(); // this.globalData.canvasContext.stroke();
		          /// ctx.strokeText(letters[i].val,0,0);
		        }

		        if (renderedLetter) {
		          this.globalData.renderer.restore();
		        }
		      }
		    }
		  };

		  function CVImageElement(data, globalData, comp) {
		    this.assetData = globalData.getAssetData(data.refId);
		    this.img = globalData.imageLoader.getAsset(this.assetData);
		    this.initElement(data, globalData, comp);
		  }

		  extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement);
		  CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement;
		  CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;

		  CVImageElement.prototype.createContent = function () {
		    if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
		      var canvas = createTag('canvas');
		      canvas.width = this.assetData.w;
		      canvas.height = this.assetData.h;
		      var ctx = canvas.getContext('2d');
		      var imgW = this.img.width;
		      var imgH = this.img.height;
		      var imgRel = imgW / imgH;
		      var canvasRel = this.assetData.w / this.assetData.h;
		      var widthCrop;
		      var heightCrop;
		      var par = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;

		      if (imgRel > canvasRel && par === 'xMidYMid slice' || imgRel < canvasRel && par !== 'xMidYMid slice') {
		        heightCrop = imgH;
		        widthCrop = heightCrop * canvasRel;
		      } else {
		        widthCrop = imgW;
		        heightCrop = widthCrop / canvasRel;
		      }

		      ctx.drawImage(this.img, (imgW - widthCrop) / 2, (imgH - heightCrop) / 2, widthCrop, heightCrop, 0, 0, this.assetData.w, this.assetData.h);
		      this.img = canvas;
		    }
		  };

		  CVImageElement.prototype.renderInnerContent = function () {
		    this.canvasContext.drawImage(this.img, 0, 0);
		  };

		  CVImageElement.prototype.destroy = function () {
		    this.img = null;
		  };

		  function CVSolidElement(data, globalData, comp) {
		    this.initElement(data, globalData, comp);
		  }

		  extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement);
		  CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement;
		  CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;

		  CVSolidElement.prototype.renderInnerContent = function () {
		    // var ctx = this.canvasContext;
		    this.globalData.renderer.ctxFillStyle(this.data.sc); // ctx.fillStyle = this.data.sc;

		    this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh); // ctx.fillRect(0, 0, this.data.sw, this.data.sh);
		    //
		  };

		  function CanvasRendererBase() {}

		  extendPrototype([BaseRenderer], CanvasRendererBase);

		  CanvasRendererBase.prototype.createShape = function (data) {
		    return new CVShapeElement(data, this.globalData, this);
		  };

		  CanvasRendererBase.prototype.createText = function (data) {
		    return new CVTextElement(data, this.globalData, this);
		  };

		  CanvasRendererBase.prototype.createImage = function (data) {
		    return new CVImageElement(data, this.globalData, this);
		  };

		  CanvasRendererBase.prototype.createSolid = function (data) {
		    return new CVSolidElement(data, this.globalData, this);
		  };

		  CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull;

		  CanvasRendererBase.prototype.ctxTransform = function (props) {
		    if (props[0] === 1 && props[1] === 0 && props[4] === 0 && props[5] === 1 && props[12] === 0 && props[13] === 0) {
		      return;
		    }

		    this.canvasContext.transform(props[0], props[1], props[4], props[5], props[12], props[13]);
		  };

		  CanvasRendererBase.prototype.ctxOpacity = function (op) {
		    this.canvasContext.globalAlpha *= op < 0 ? 0 : op;
		  };

		  CanvasRendererBase.prototype.ctxFillStyle = function (value) {
		    this.canvasContext.fillStyle = value;
		  };

		  CanvasRendererBase.prototype.ctxStrokeStyle = function (value) {
		    this.canvasContext.strokeStyle = value;
		  };

		  CanvasRendererBase.prototype.ctxLineWidth = function (value) {
		    this.canvasContext.lineWidth = value;
		  };

		  CanvasRendererBase.prototype.ctxLineCap = function (value) {
		    this.canvasContext.lineCap = value;
		  };

		  CanvasRendererBase.prototype.ctxLineJoin = function (value) {
		    this.canvasContext.lineJoin = value;
		  };

		  CanvasRendererBase.prototype.ctxMiterLimit = function (value) {
		    this.canvasContext.miterLimit = value;
		  };

		  CanvasRendererBase.prototype.ctxFill = function (rule) {
		    this.canvasContext.fill(rule);
		  };

		  CanvasRendererBase.prototype.ctxFillRect = function (x, y, w, h) {
		    this.canvasContext.fillRect(x, y, w, h);
		  };

		  CanvasRendererBase.prototype.ctxStroke = function () {
		    this.canvasContext.stroke();
		  };

		  CanvasRendererBase.prototype.reset = function () {
		    if (!this.renderConfig.clearCanvas) {
		      this.canvasContext.restore();
		      return;
		    }

		    this.contextData.reset();
		  };

		  CanvasRendererBase.prototype.save = function () {
		    this.canvasContext.save();
		  };

		  CanvasRendererBase.prototype.restore = function (actionFlag) {
		    if (!this.renderConfig.clearCanvas) {
		      this.canvasContext.restore();
		      return;
		    }

		    if (actionFlag) {
		      this.globalData.blendMode = 'source-over';
		    }

		    this.contextData.restore(actionFlag);
		  };

		  CanvasRendererBase.prototype.configAnimation = function (animData) {
		    if (this.animationItem.wrapper) {
		      this.animationItem.container = createTag('canvas');
		      var containerStyle = this.animationItem.container.style;
		      containerStyle.width = '100%';
		      containerStyle.height = '100%';
		      var origin = '0px 0px 0px';
		      containerStyle.transformOrigin = origin;
		      containerStyle.mozTransformOrigin = origin;
		      containerStyle.webkitTransformOrigin = origin;
		      containerStyle['-webkit-transform'] = origin;
		      containerStyle.contentVisibility = this.renderConfig.contentVisibility;
		      this.animationItem.wrapper.appendChild(this.animationItem.container);
		      this.canvasContext = this.animationItem.container.getContext('2d');

		      if (this.renderConfig.className) {
		        this.animationItem.container.setAttribute('class', this.renderConfig.className);
		      }

		      if (this.renderConfig.id) {
		        this.animationItem.container.setAttribute('id', this.renderConfig.id);
		      }
		    } else {
		      this.canvasContext = this.renderConfig.context;
		    }

		    this.contextData.setContext(this.canvasContext);
		    this.data = animData;
		    this.layers = animData.layers;
		    this.transformCanvas = {
		      w: animData.w,
		      h: animData.h,
		      sx: 0,
		      sy: 0,
		      tx: 0,
		      ty: 0
		    };
		    this.setupGlobalData(animData, document.body);
		    this.globalData.canvasContext = this.canvasContext;
		    this.globalData.renderer = this;
		    this.globalData.isDashed = false;
		    this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
		    this.globalData.transformCanvas = this.transformCanvas;
		    this.elements = createSizedArray(animData.layers.length);
		    this.updateContainerSize();
		  };

		  CanvasRendererBase.prototype.updateContainerSize = function (width, height) {
		    this.reset();
		    var elementWidth;
		    var elementHeight;

		    if (width) {
		      elementWidth = width;
		      elementHeight = height;
		      this.canvasContext.canvas.width = elementWidth;
		      this.canvasContext.canvas.height = elementHeight;
		    } else {
		      if (this.animationItem.wrapper && this.animationItem.container) {
		        elementWidth = this.animationItem.wrapper.offsetWidth;
		        elementHeight = this.animationItem.wrapper.offsetHeight;
		      } else {
		        elementWidth = this.canvasContext.canvas.width;
		        elementHeight = this.canvasContext.canvas.height;
		      }

		      this.canvasContext.canvas.width = elementWidth * this.renderConfig.dpr;
		      this.canvasContext.canvas.height = elementHeight * this.renderConfig.dpr;
		    }

		    var elementRel;
		    var animationRel;

		    if (this.renderConfig.preserveAspectRatio.indexOf('meet') !== -1 || this.renderConfig.preserveAspectRatio.indexOf('slice') !== -1) {
		      var par = this.renderConfig.preserveAspectRatio.split(' ');
		      var fillType = par[1] || 'meet';
		      var pos = par[0] || 'xMidYMid';
		      var xPos = pos.substr(0, 4);
		      var yPos = pos.substr(4);
		      elementRel = elementWidth / elementHeight;
		      animationRel = this.transformCanvas.w / this.transformCanvas.h;

		      if (animationRel > elementRel && fillType === 'meet' || animationRel < elementRel && fillType === 'slice') {
		        this.transformCanvas.sx = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
		        this.transformCanvas.sy = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
		      } else {
		        this.transformCanvas.sx = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
		        this.transformCanvas.sy = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
		      }

		      if (xPos === 'xMid' && (animationRel < elementRel && fillType === 'meet' || animationRel > elementRel && fillType === 'slice')) {
		        this.transformCanvas.tx = (elementWidth - this.transformCanvas.w * (elementHeight / this.transformCanvas.h)) / 2 * this.renderConfig.dpr;
		      } else if (xPos === 'xMax' && (animationRel < elementRel && fillType === 'meet' || animationRel > elementRel && fillType === 'slice')) {
		        this.transformCanvas.tx = (elementWidth - this.transformCanvas.w * (elementHeight / this.transformCanvas.h)) * this.renderConfig.dpr;
		      } else {
		        this.transformCanvas.tx = 0;
		      }

		      if (yPos === 'YMid' && (animationRel > elementRel && fillType === 'meet' || animationRel < elementRel && fillType === 'slice')) {
		        this.transformCanvas.ty = (elementHeight - this.transformCanvas.h * (elementWidth / this.transformCanvas.w)) / 2 * this.renderConfig.dpr;
		      } else if (yPos === 'YMax' && (animationRel > elementRel && fillType === 'meet' || animationRel < elementRel && fillType === 'slice')) {
		        this.transformCanvas.ty = (elementHeight - this.transformCanvas.h * (elementWidth / this.transformCanvas.w)) * this.renderConfig.dpr;
		      } else {
		        this.transformCanvas.ty = 0;
		      }
		    } else if (this.renderConfig.preserveAspectRatio === 'none') {
		      this.transformCanvas.sx = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
		      this.transformCanvas.sy = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
		      this.transformCanvas.tx = 0;
		      this.transformCanvas.ty = 0;
		    } else {
		      this.transformCanvas.sx = this.renderConfig.dpr;
		      this.transformCanvas.sy = this.renderConfig.dpr;
		      this.transformCanvas.tx = 0;
		      this.transformCanvas.ty = 0;
		    }

		    this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1];
		    /* var i, len = this.elements.length;
		      for(i=0;i<len;i+=1){
		          if(this.elements[i] && this.elements[i].data.ty === 0){
		              this.elements[i].resize(this.globalData.transformCanvas);
		          }
		      } */

		    this.ctxTransform(this.transformCanvas.props);
		    this.canvasContext.beginPath();
		    this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
		    this.canvasContext.closePath();
		    this.canvasContext.clip();
		    this.renderFrame(this.renderedFrame, true);
		  };

		  CanvasRendererBase.prototype.destroy = function () {
		    if (this.renderConfig.clearCanvas && this.animationItem.wrapper) {
		      this.animationItem.wrapper.innerText = '';
		    }

		    var i;
		    var len = this.layers ? this.layers.length : 0;

		    for (i = len - 1; i >= 0; i -= 1) {
		      if (this.elements[i] && this.elements[i].destroy) {
		        this.elements[i].destroy();
		      }
		    }

		    this.elements.length = 0;
		    this.globalData.canvasContext = null;
		    this.animationItem.container = null;
		    this.destroyed = true;
		  };

		  CanvasRendererBase.prototype.renderFrame = function (num, forceRender) {
		    if (this.renderedFrame === num && this.renderConfig.clearCanvas === true && !forceRender || this.destroyed || num === -1) {
		      return;
		    }

		    this.renderedFrame = num;
		    this.globalData.frameNum = num - this.animationItem._isFirstFrame;
		    this.globalData.frameId += 1;
		    this.globalData._mdf = !this.renderConfig.clearCanvas || forceRender;
		    this.globalData.projectInterface.currentFrame = num; // console.log('--------');
		    // console.log('NEW: ',num);

		    var i;
		    var len = this.layers.length;

		    if (!this.completeLayers) {
		      this.checkLayers(num);
		    }

		    for (i = len - 1; i >= 0; i -= 1) {
		      if (this.completeLayers || this.elements[i]) {
		        this.elements[i].prepareFrame(num - this.layers[i].st);
		      }
		    }

		    if (this.globalData._mdf) {
		      if (this.renderConfig.clearCanvas === true) {
		        this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
		      } else {
		        this.save();
		      }

		      for (i = len - 1; i >= 0; i -= 1) {
		        if (this.completeLayers || this.elements[i]) {
		          this.elements[i].renderFrame();
		        }
		      }

		      if (this.renderConfig.clearCanvas !== true) {
		        this.restore();
		      }
		    }
		  };

		  CanvasRendererBase.prototype.buildItem = function (pos) {
		    var elements = this.elements;

		    if (elements[pos] || this.layers[pos].ty === 99) {
		      return;
		    }

		    var element = this.createItem(this.layers[pos], this, this.globalData);
		    elements[pos] = element;
		    element.initExpressions();
		    /* if(this.layers[pos].ty === 0){
		          element.resize(this.globalData.transformCanvas);
		      } */
		  };

		  CanvasRendererBase.prototype.checkPendingElements = function () {
		    while (this.pendingElements.length) {
		      var element = this.pendingElements.pop();
		      element.checkParenting();
		    }
		  };

		  CanvasRendererBase.prototype.hide = function () {
		    this.animationItem.container.style.display = 'none';
		  };

		  CanvasRendererBase.prototype.show = function () {
		    this.animationItem.container.style.display = 'block';
		  };

		  function CanvasContext() {
		    this.opacity = -1;
		    this.transform = createTypedArray('float32', 16);
		    this.fillStyle = '';
		    this.strokeStyle = '';
		    this.lineWidth = '';
		    this.lineCap = '';
		    this.lineJoin = '';
		    this.miterLimit = '';
		    this.id = Math.random();
		  }

		  function CVContextData() {
		    this.stack = [];
		    this.cArrPos = 0;
		    this.cTr = new Matrix();
		    var i;
		    var len = 15;

		    for (i = 0; i < len; i += 1) {
		      var canvasContext = new CanvasContext();
		      this.stack[i] = canvasContext;
		    }

		    this._length = len;
		    this.nativeContext = null;
		    this.transformMat = new Matrix();
		    this.currentOpacity = 1; //

		    this.currentFillStyle = '';
		    this.appliedFillStyle = ''; //

		    this.currentStrokeStyle = '';
		    this.appliedStrokeStyle = ''; //

		    this.currentLineWidth = '';
		    this.appliedLineWidth = ''; //

		    this.currentLineCap = '';
		    this.appliedLineCap = ''; //

		    this.currentLineJoin = '';
		    this.appliedLineJoin = ''; //

		    this.appliedMiterLimit = '';
		    this.currentMiterLimit = '';
		  }

		  CVContextData.prototype.duplicate = function () {
		    var newLength = this._length * 2;
		    var i = 0;

		    for (i = this._length; i < newLength; i += 1) {
		      this.stack[i] = new CanvasContext();
		    }

		    this._length = newLength;
		  };

		  CVContextData.prototype.reset = function () {
		    this.cArrPos = 0;
		    this.cTr.reset();
		    this.stack[this.cArrPos].opacity = 1;
		  };

		  CVContextData.prototype.restore = function (forceRestore) {
		    this.cArrPos -= 1;
		    var currentContext = this.stack[this.cArrPos];
		    var transform = currentContext.transform;
		    var i;
		    var arr = this.cTr.props;

		    for (i = 0; i < 16; i += 1) {
		      arr[i] = transform[i];
		    }

		    if (forceRestore) {
		      this.nativeContext.restore();
		      var prevStack = this.stack[this.cArrPos + 1];
		      this.appliedFillStyle = prevStack.fillStyle;
		      this.appliedStrokeStyle = prevStack.strokeStyle;
		      this.appliedLineWidth = prevStack.lineWidth;
		      this.appliedLineCap = prevStack.lineCap;
		      this.appliedLineJoin = prevStack.lineJoin;
		      this.appliedMiterLimit = prevStack.miterLimit;
		    }

		    this.nativeContext.setTransform(transform[0], transform[1], transform[4], transform[5], transform[12], transform[13]);

		    if (forceRestore || currentContext.opacity !== -1 && this.currentOpacity !== currentContext.opacity) {
		      this.nativeContext.globalAlpha = currentContext.opacity;
		      this.currentOpacity = currentContext.opacity;
		    }

		    this.currentFillStyle = currentContext.fillStyle;
		    this.currentStrokeStyle = currentContext.strokeStyle;
		    this.currentLineWidth = currentContext.lineWidth;
		    this.currentLineCap = currentContext.lineCap;
		    this.currentLineJoin = currentContext.lineJoin;
		    this.currentMiterLimit = currentContext.miterLimit;
		  };

		  CVContextData.prototype.save = function (saveOnNativeFlag) {
		    if (saveOnNativeFlag) {
		      this.nativeContext.save();
		    }

		    var props = this.cTr.props;

		    if (this._length <= this.cArrPos) {
		      this.duplicate();
		    }

		    var currentStack = this.stack[this.cArrPos];
		    var i;

		    for (i = 0; i < 16; i += 1) {
		      currentStack.transform[i] = props[i];
		    }

		    this.cArrPos += 1;
		    var newStack = this.stack[this.cArrPos];
		    newStack.opacity = currentStack.opacity;
		    newStack.fillStyle = currentStack.fillStyle;
		    newStack.strokeStyle = currentStack.strokeStyle;
		    newStack.lineWidth = currentStack.lineWidth;
		    newStack.lineCap = currentStack.lineCap;
		    newStack.lineJoin = currentStack.lineJoin;
		    newStack.miterLimit = currentStack.miterLimit;
		  };

		  CVContextData.prototype.setOpacity = function (value) {
		    this.stack[this.cArrPos].opacity = value;
		  };

		  CVContextData.prototype.setContext = function (value) {
		    this.nativeContext = value;
		  };

		  CVContextData.prototype.fillStyle = function (value) {
		    if (this.stack[this.cArrPos].fillStyle !== value) {
		      this.currentFillStyle = value;
		      this.stack[this.cArrPos].fillStyle = value;
		    }
		  };

		  CVContextData.prototype.strokeStyle = function (value) {
		    if (this.stack[this.cArrPos].strokeStyle !== value) {
		      this.currentStrokeStyle = value;
		      this.stack[this.cArrPos].strokeStyle = value;
		    }
		  };

		  CVContextData.prototype.lineWidth = function (value) {
		    if (this.stack[this.cArrPos].lineWidth !== value) {
		      this.currentLineWidth = value;
		      this.stack[this.cArrPos].lineWidth = value;
		    }
		  };

		  CVContextData.prototype.lineCap = function (value) {
		    if (this.stack[this.cArrPos].lineCap !== value) {
		      this.currentLineCap = value;
		      this.stack[this.cArrPos].lineCap = value;
		    }
		  };

		  CVContextData.prototype.lineJoin = function (value) {
		    if (this.stack[this.cArrPos].lineJoin !== value) {
		      this.currentLineJoin = value;
		      this.stack[this.cArrPos].lineJoin = value;
		    }
		  };

		  CVContextData.prototype.miterLimit = function (value) {
		    if (this.stack[this.cArrPos].miterLimit !== value) {
		      this.currentMiterLimit = value;
		      this.stack[this.cArrPos].miterLimit = value;
		    }
		  };

		  CVContextData.prototype.transform = function (props) {
		    this.transformMat.cloneFromProps(props); // Taking the last transform value from the stored stack of transforms

		    var currentTransform = this.cTr; // Applying the last transform value after the new transform to respect the order of transformations

		    this.transformMat.multiply(currentTransform); // Storing the new transformed value in the stored transform

		    currentTransform.cloneFromProps(this.transformMat.props);
		    var trProps = currentTransform.props; // Applying the new transform to the canvas

		    this.nativeContext.setTransform(trProps[0], trProps[1], trProps[4], trProps[5], trProps[12], trProps[13]);
		  };

		  CVContextData.prototype.opacity = function (op) {
		    var currentOpacity = this.stack[this.cArrPos].opacity;
		    currentOpacity *= op < 0 ? 0 : op;

		    if (this.stack[this.cArrPos].opacity !== currentOpacity) {
		      if (this.currentOpacity !== op) {
		        this.nativeContext.globalAlpha = op;
		        this.currentOpacity = op;
		      }

		      this.stack[this.cArrPos].opacity = currentOpacity;
		    }
		  };

		  CVContextData.prototype.fill = function (rule) {
		    if (this.appliedFillStyle !== this.currentFillStyle) {
		      this.appliedFillStyle = this.currentFillStyle;
		      this.nativeContext.fillStyle = this.appliedFillStyle;
		    }

		    this.nativeContext.fill(rule);
		  };

		  CVContextData.prototype.fillRect = function (x, y, w, h) {
		    if (this.appliedFillStyle !== this.currentFillStyle) {
		      this.appliedFillStyle = this.currentFillStyle;
		      this.nativeContext.fillStyle = this.appliedFillStyle;
		    }

		    this.nativeContext.fillRect(x, y, w, h);
		  };

		  CVContextData.prototype.stroke = function () {
		    if (this.appliedStrokeStyle !== this.currentStrokeStyle) {
		      this.appliedStrokeStyle = this.currentStrokeStyle;
		      this.nativeContext.strokeStyle = this.appliedStrokeStyle;
		    }

		    if (this.appliedLineWidth !== this.currentLineWidth) {
		      this.appliedLineWidth = this.currentLineWidth;
		      this.nativeContext.lineWidth = this.appliedLineWidth;
		    }

		    if (this.appliedLineCap !== this.currentLineCap) {
		      this.appliedLineCap = this.currentLineCap;
		      this.nativeContext.lineCap = this.appliedLineCap;
		    }

		    if (this.appliedLineJoin !== this.currentLineJoin) {
		      this.appliedLineJoin = this.currentLineJoin;
		      this.nativeContext.lineJoin = this.appliedLineJoin;
		    }

		    if (this.appliedMiterLimit !== this.currentMiterLimit) {
		      this.appliedMiterLimit = this.currentMiterLimit;
		      this.nativeContext.miterLimit = this.appliedMiterLimit;
		    }

		    this.nativeContext.stroke();
		  };

		  function CVCompElement(data, globalData, comp) {
		    this.completeLayers = false;
		    this.layers = data.layers;
		    this.pendingElements = [];
		    this.elements = createSizedArray(this.layers.length);
		    this.initElement(data, globalData, comp);
		    this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : {
		      _placeholder: true
		    };
		  }

		  extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement);

		  CVCompElement.prototype.renderInnerContent = function () {
		    var ctx = this.canvasContext;
		    ctx.beginPath();
		    ctx.moveTo(0, 0);
		    ctx.lineTo(this.data.w, 0);
		    ctx.lineTo(this.data.w, this.data.h);
		    ctx.lineTo(0, this.data.h);
		    ctx.lineTo(0, 0);
		    ctx.clip();
		    var i;
		    var len = this.layers.length;

		    for (i = len - 1; i >= 0; i -= 1) {
		      if (this.completeLayers || this.elements[i]) {
		        this.elements[i].renderFrame();
		      }
		    }
		  };

		  CVCompElement.prototype.destroy = function () {
		    var i;
		    var len = this.layers.length;

		    for (i = len - 1; i >= 0; i -= 1) {
		      if (this.elements[i]) {
		        this.elements[i].destroy();
		      }
		    }

		    this.layers = null;
		    this.elements = null;
		  };

		  CVCompElement.prototype.createComp = function (data) {
		    return new CVCompElement(data, this.globalData, this);
		  };

		  function CanvasRenderer(animationItem, config) {
		    this.animationItem = animationItem;
		    this.renderConfig = {
		      clearCanvas: config && config.clearCanvas !== undefined ? config.clearCanvas : true,
		      context: config && config.context || null,
		      progressiveLoad: config && config.progressiveLoad || false,
		      preserveAspectRatio: config && config.preserveAspectRatio || 'xMidYMid meet',
		      imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || 'xMidYMid slice',
		      contentVisibility: config && config.contentVisibility || 'visible',
		      className: config && config.className || '',
		      id: config && config.id || '',
		      runExpressions: !config || config.runExpressions === undefined || config.runExpressions
		    };
		    this.renderConfig.dpr = config && config.dpr || 1;

		    if (this.animationItem.wrapper) {
		      this.renderConfig.dpr = config && config.dpr || window.devicePixelRatio || 1;
		    }

		    this.renderedFrame = -1;
		    this.globalData = {
		      frameNum: -1,
		      _mdf: false,
		      renderConfig: this.renderConfig,
		      currentGlobalAlpha: -1
		    };
		    this.contextData = new CVContextData();
		    this.elements = [];
		    this.pendingElements = [];
		    this.transformMat = new Matrix();
		    this.completeLayers = false;
		    this.rendererType = 'canvas';

		    if (this.renderConfig.clearCanvas) {
		      this.ctxTransform = this.contextData.transform.bind(this.contextData);
		      this.ctxOpacity = this.contextData.opacity.bind(this.contextData);
		      this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData);
		      this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData);
		      this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData);
		      this.ctxLineCap = this.contextData.lineCap.bind(this.contextData);
		      this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData);
		      this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData);
		      this.ctxFill = this.contextData.fill.bind(this.contextData);
		      this.ctxFillRect = this.contextData.fillRect.bind(this.contextData);
		      this.ctxStroke = this.contextData.stroke.bind(this.contextData);
		      this.save = this.contextData.save.bind(this.contextData);
		    }
		  }

		  extendPrototype([CanvasRendererBase], CanvasRenderer);

		  CanvasRenderer.prototype.createComp = function (data) {
		    return new CVCompElement(data, this.globalData, this);
		  };

		  function HBaseElement() {}

		  HBaseElement.prototype = {
		    checkBlendMode: function checkBlendMode() {},
		    initRendererElement: function initRendererElement() {
		      this.baseElement = createTag(this.data.tg || 'div');

		      if (this.data.hasMask) {
		        this.svgElement = createNS('svg');
		        this.layerElement = createNS('g');
		        this.maskedElement = this.layerElement;
		        this.svgElement.appendChild(this.layerElement);
		        this.baseElement.appendChild(this.svgElement);
		      } else {
		        this.layerElement = this.baseElement;
		      }

		      styleDiv(this.baseElement);
		    },
		    createContainerElements: function createContainerElements() {
		      this.renderableEffectsManager = new CVEffects(this);
		      this.transformedElement = this.baseElement;
		      this.maskedElement = this.layerElement;

		      if (this.data.ln) {
		        this.layerElement.setAttribute('id', this.data.ln);
		      }

		      if (this.data.cl) {
		        this.layerElement.setAttribute('class', this.data.cl);
		      }

		      if (this.data.bm !== 0) {
		        this.setBlendMode();
		      }
		    },
		    renderElement: function renderElement() {
		      var transformedElementStyle = this.transformedElement ? this.transformedElement.style : {};

		      if (this.finalTransform._matMdf) {
		        var matrixValue = this.finalTransform.mat.toCSS();
		        transformedElementStyle.transform = matrixValue;
		        transformedElementStyle.webkitTransform = matrixValue;
		      }

		      if (this.finalTransform._opMdf) {
		        transformedElementStyle.opacity = this.finalTransform.mProp.o.v;
		      }
		    },
		    renderFrame: function renderFrame() {
		      // If it is exported as hidden (data.hd === true) no need to render
		      // If it is not visible no need to render
		      if (this.data.hd || this.hidden) {
		        return;
		      }

		      this.renderTransform();
		      this.renderRenderable();
		      this.renderElement();
		      this.renderInnerContent();

		      if (this._isFirstFrame) {
		        this._isFirstFrame = false;
		      }
		    },
		    destroy: function destroy() {
		      this.layerElement = null;
		      this.transformedElement = null;

		      if (this.matteElement) {
		        this.matteElement = null;
		      }

		      if (this.maskManager) {
		        this.maskManager.destroy();
		        this.maskManager = null;
		      }
		    },
		    createRenderableComponents: function createRenderableComponents() {
		      this.maskManager = new MaskElement(this.data, this, this.globalData);
		    },
		    addEffects: function addEffects() {},
		    setMatte: function setMatte() {}
		  };
		  HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement;
		  HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy;
		  HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;

		  function HSolidElement(data, globalData, comp) {
		    this.initElement(data, globalData, comp);
		  }

		  extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement);

		  HSolidElement.prototype.createContent = function () {
		    var rect;

		    if (this.data.hasMask) {
		      rect = createNS('rect');
		      rect.setAttribute('width', this.data.sw);
		      rect.setAttribute('height', this.data.sh);
		      rect.setAttribute('fill', this.data.sc);
		      this.svgElement.setAttribute('width', this.data.sw);
		      this.svgElement.setAttribute('height', this.data.sh);
		    } else {
		      rect = createTag('div');
		      rect.style.width = this.data.sw + 'px';
		      rect.style.height = this.data.sh + 'px';
		      rect.style.backgroundColor = this.data.sc;
		    }

		    this.layerElement.appendChild(rect);
		  };

		  function HShapeElement(data, globalData, comp) {
		    // List of drawable elements
		    this.shapes = []; // Full shape data

		    this.shapesData = data.shapes; // List of styles that will be applied to shapes

		    this.stylesList = []; // List of modifiers that will be applied to shapes

		    this.shapeModifiers = []; // List of items in shape tree

		    this.itemsData = []; // List of items in previous shape tree

		    this.processedElements = []; // List of animated components

		    this.animatedContents = [];
		    this.shapesContainer = createNS('g');
		    this.initElement(data, globalData, comp); // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
		    // List of elements that have been created

		    this.prevViewData = [];
		    this.currentBBox = {
		      x: 999999,
		      y: -999999,
		      h: 0,
		      w: 0
		    };
		  }

		  extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement);
		  HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent;

		  HShapeElement.prototype.createContent = function () {
		    var cont;
		    this.baseElement.style.fontSize = 0;

		    if (this.data.hasMask) {
		      this.layerElement.appendChild(this.shapesContainer);
		      cont = this.svgElement;
		    } else {
		      cont = createNS('svg');
		      var size = this.comp.data ? this.comp.data : this.globalData.compSize;
		      cont.setAttribute('width', size.w);
		      cont.setAttribute('height', size.h);
		      cont.appendChild(this.shapesContainer);
		      this.layerElement.appendChild(cont);
		    }

		    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], true);
		    this.filterUniqueShapes();
		    this.shapeCont = cont;
		  };

		  HShapeElement.prototype.getTransformedPoint = function (transformers, point) {
		    var i;
		    var len = transformers.length;

		    for (i = 0; i < len; i += 1) {
		      point = transformers[i].mProps.v.applyToPointArray(point[0], point[1], 0);
		    }

		    return point;
		  };

		  HShapeElement.prototype.calculateShapeBoundingBox = function (item, boundingBox) {
		    var shape = item.sh.v;
		    var transformers = item.transformers;
		    var i;
		    var len = shape._length;
		    var vPoint;
		    var oPoint;
		    var nextIPoint;
		    var nextVPoint;

		    if (len <= 1) {
		      return;
		    }

		    for (i = 0; i < len - 1; i += 1) {
		      vPoint = this.getTransformedPoint(transformers, shape.v[i]);
		      oPoint = this.getTransformedPoint(transformers, shape.o[i]);
		      nextIPoint = this.getTransformedPoint(transformers, shape.i[i + 1]);
		      nextVPoint = this.getTransformedPoint(transformers, shape.v[i + 1]);
		      this.checkBounds(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox);
		    }

		    if (shape.c) {
		      vPoint = this.getTransformedPoint(transformers, shape.v[i]);
		      oPoint = this.getTransformedPoint(transformers, shape.o[i]);
		      nextIPoint = this.getTransformedPoint(transformers, shape.i[0]);
		      nextVPoint = this.getTransformedPoint(transformers, shape.v[0]);
		      this.checkBounds(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox);
		    }
		  };

		  HShapeElement.prototype.checkBounds = function (vPoint, oPoint, nextIPoint, nextVPoint, boundingBox) {
		    this.getBoundsOfCurve(vPoint, oPoint, nextIPoint, nextVPoint);
		    var bounds = this.shapeBoundingBox;
		    boundingBox.x = bmMin(bounds.left, boundingBox.x);
		    boundingBox.xMax = bmMax(bounds.right, boundingBox.xMax);
		    boundingBox.y = bmMin(bounds.top, boundingBox.y);
		    boundingBox.yMax = bmMax(bounds.bottom, boundingBox.yMax);
		  };

		  HShapeElement.prototype.shapeBoundingBox = {
		    left: 0,
		    right: 0,
		    top: 0,
		    bottom: 0
		  };
		  HShapeElement.prototype.tempBoundingBox = {
		    x: 0,
		    xMax: 0,
		    y: 0,
		    yMax: 0,
		    width: 0,
		    height: 0
		  };

		  HShapeElement.prototype.getBoundsOfCurve = function (p0, p1, p2, p3) {
		    var bounds = [[p0[0], p3[0]], [p0[1], p3[1]]];

		    for (var a, b, c, t, b2ac, t1, t2, i = 0; i < 2; ++i) {
		      // eslint-disable-line no-plusplus
		      b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
		      a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
		      c = 3 * p1[i] - 3 * p0[i];
		      b |= 0; // eslint-disable-line no-bitwise

		      a |= 0; // eslint-disable-line no-bitwise

		      c |= 0; // eslint-disable-line no-bitwise

		      if (a === 0 && b === 0) ; else if (a === 0) {
		        t = -c / b;

		        if (t > 0 && t < 1) {
		          bounds[i].push(this.calculateF(t, p0, p1, p2, p3, i));
		        }
		      } else {
		        b2ac = b * b - 4 * c * a;

		        if (b2ac >= 0) {
		          t1 = (-b + bmSqrt(b2ac)) / (2 * a);
		          if (t1 > 0 && t1 < 1) bounds[i].push(this.calculateF(t1, p0, p1, p2, p3, i));
		          t2 = (-b - bmSqrt(b2ac)) / (2 * a);
		          if (t2 > 0 && t2 < 1) bounds[i].push(this.calculateF(t2, p0, p1, p2, p3, i));
		        }
		      }
		    }

		    this.shapeBoundingBox.left = bmMin.apply(null, bounds[0]);
		    this.shapeBoundingBox.top = bmMin.apply(null, bounds[1]);
		    this.shapeBoundingBox.right = bmMax.apply(null, bounds[0]);
		    this.shapeBoundingBox.bottom = bmMax.apply(null, bounds[1]);
		  };

		  HShapeElement.prototype.calculateF = function (t, p0, p1, p2, p3, i) {
		    return bmPow(1 - t, 3) * p0[i] + 3 * bmPow(1 - t, 2) * t * p1[i] + 3 * (1 - t) * bmPow(t, 2) * p2[i] + bmPow(t, 3) * p3[i];
		  };

		  HShapeElement.prototype.calculateBoundingBox = function (itemsData, boundingBox) {
		    var i;
		    var len = itemsData.length;

		    for (i = 0; i < len; i += 1) {
		      if (itemsData[i] && itemsData[i].sh) {
		        this.calculateShapeBoundingBox(itemsData[i], boundingBox);
		      } else if (itemsData[i] && itemsData[i].it) {
		        this.calculateBoundingBox(itemsData[i].it, boundingBox);
		      } else if (itemsData[i] && itemsData[i].style && itemsData[i].w) {
		        this.expandStrokeBoundingBox(itemsData[i].w, boundingBox);
		      }
		    }
		  };

		  HShapeElement.prototype.expandStrokeBoundingBox = function (widthProperty, boundingBox) {
		    var width = 0;

		    if (widthProperty.keyframes) {
		      for (var i = 0; i < widthProperty.keyframes.length; i += 1) {
		        var kfw = widthProperty.keyframes[i].s;

		        if (kfw > width) {
		          width = kfw;
		        }
		      }

		      width *= widthProperty.mult;
		    } else {
		      width = widthProperty.v * widthProperty.mult;
		    }

		    boundingBox.x -= width;
		    boundingBox.xMax += width;
		    boundingBox.y -= width;
		    boundingBox.yMax += width;
		  };

		  HShapeElement.prototype.currentBoxContains = function (box) {
		    return this.currentBBox.x <= box.x && this.currentBBox.y <= box.y && this.currentBBox.width + this.currentBBox.x >= box.x + box.width && this.currentBBox.height + this.currentBBox.y >= box.y + box.height;
		  };

		  HShapeElement.prototype.renderInnerContent = function () {
		    this._renderShapeFrame();

		    if (!this.hidden && (this._isFirstFrame || this._mdf)) {
		      var tempBoundingBox = this.tempBoundingBox;
		      var max = 999999;
		      tempBoundingBox.x = max;
		      tempBoundingBox.xMax = -max;
		      tempBoundingBox.y = max;
		      tempBoundingBox.yMax = -max;
		      this.calculateBoundingBox(this.itemsData, tempBoundingBox);
		      tempBoundingBox.width = tempBoundingBox.xMax < tempBoundingBox.x ? 0 : tempBoundingBox.xMax - tempBoundingBox.x;
		      tempBoundingBox.height = tempBoundingBox.yMax < tempBoundingBox.y ? 0 : tempBoundingBox.yMax - tempBoundingBox.y; // var tempBoundingBox = this.shapeCont.getBBox();

		      if (this.currentBoxContains(tempBoundingBox)) {
		        return;
		      }

		      var changed = false;

		      if (this.currentBBox.w !== tempBoundingBox.width) {
		        this.currentBBox.w = tempBoundingBox.width;
		        this.shapeCont.setAttribute('width', tempBoundingBox.width);
		        changed = true;
		      }

		      if (this.currentBBox.h !== tempBoundingBox.height) {
		        this.currentBBox.h = tempBoundingBox.height;
		        this.shapeCont.setAttribute('height', tempBoundingBox.height);
		        changed = true;
		      }

		      if (changed || this.currentBBox.x !== tempBoundingBox.x || this.currentBBox.y !== tempBoundingBox.y) {
		        this.currentBBox.w = tempBoundingBox.width;
		        this.currentBBox.h = tempBoundingBox.height;
		        this.currentBBox.x = tempBoundingBox.x;
		        this.currentBBox.y = tempBoundingBox.y;
		        this.shapeCont.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h);
		        var shapeStyle = this.shapeCont.style;
		        var shapeTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
		        shapeStyle.transform = shapeTransform;
		        shapeStyle.webkitTransform = shapeTransform;
		      }
		    }
		  };

		  function HTextElement(data, globalData, comp) {
		    this.textSpans = [];
		    this.textPaths = [];
		    this.currentBBox = {
		      x: 999999,
		      y: -999999,
		      h: 0,
		      w: 0
		    };
		    this.renderType = 'svg';
		    this.isMasked = false;
		    this.initElement(data, globalData, comp);
		  }

		  extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement);

		  HTextElement.prototype.createContent = function () {
		    this.isMasked = this.checkMasks();

		    if (this.isMasked) {
		      this.renderType = 'svg';
		      this.compW = this.comp.data.w;
		      this.compH = this.comp.data.h;
		      this.svgElement.setAttribute('width', this.compW);
		      this.svgElement.setAttribute('height', this.compH);
		      var g = createNS('g');
		      this.maskedElement.appendChild(g);
		      this.innerElem = g;
		    } else {
		      this.renderType = 'html';
		      this.innerElem = this.layerElement;
		    }

		    this.checkParenting();
		  };

		  HTextElement.prototype.buildNewText = function () {
		    var documentData = this.textProperty.currentData;
		    this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);
		    var innerElemStyle = this.innerElem.style;
		    var textColor = documentData.fc ? this.buildColor(documentData.fc) : 'rgba(0,0,0,0)';
		    innerElemStyle.fill = textColor;
		    innerElemStyle.color = textColor;

		    if (documentData.sc) {
		      innerElemStyle.stroke = this.buildColor(documentData.sc);
		      innerElemStyle.strokeWidth = documentData.sw + 'px';
		    }

		    var fontData = this.globalData.fontManager.getFontByName(documentData.f);

		    if (!this.globalData.fontManager.chars) {
		      innerElemStyle.fontSize = documentData.finalSize + 'px';
		      innerElemStyle.lineHeight = documentData.finalSize + 'px';

		      if (fontData.fClass) {
		        this.innerElem.className = fontData.fClass;
		      } else {
		        innerElemStyle.fontFamily = fontData.fFamily;
		        var fWeight = documentData.fWeight;
		        var fStyle = documentData.fStyle;
		        innerElemStyle.fontStyle = fStyle;
		        innerElemStyle.fontWeight = fWeight;
		      }
		    }

		    var i;
		    var len;
		    var letters = documentData.l;
		    len = letters.length;
		    var tSpan;
		    var tParent;
		    var tCont;
		    var matrixHelper = this.mHelper;
		    var shapes;
		    var shapeStr = '';
		    var cnt = 0;

		    for (i = 0; i < len; i += 1) {
		      if (this.globalData.fontManager.chars) {
		        if (!this.textPaths[cnt]) {
		          tSpan = createNS('path');
		          tSpan.setAttribute('stroke-linecap', lineCapEnum[1]);
		          tSpan.setAttribute('stroke-linejoin', lineJoinEnum[2]);
		          tSpan.setAttribute('stroke-miterlimit', '4');
		        } else {
		          tSpan = this.textPaths[cnt];
		        }

		        if (!this.isMasked) {
		          if (this.textSpans[cnt]) {
		            tParent = this.textSpans[cnt];
		            tCont = tParent.children[0];
		          } else {
		            tParent = createTag('div');
		            tParent.style.lineHeight = 0;
		            tCont = createNS('svg');
		            tCont.appendChild(tSpan);
		            styleDiv(tParent);
		          }
		        }
		      } else if (!this.isMasked) {
		        if (this.textSpans[cnt]) {
		          tParent = this.textSpans[cnt];
		          tSpan = this.textPaths[cnt];
		        } else {
		          tParent = createTag('span');
		          styleDiv(tParent);
		          tSpan = createTag('span');
		          styleDiv(tSpan);
		          tParent.appendChild(tSpan);
		        }
		      } else {
		        tSpan = this.textPaths[cnt] ? this.textPaths[cnt] : createNS('text');
		      } // tSpan.setAttribute('visibility', 'hidden');


		      if (this.globalData.fontManager.chars) {
		        var charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
		        var shapeData;

		        if (charData) {
		          shapeData = charData.data;
		        } else {
		          shapeData = null;
		        }

		        matrixHelper.reset();

		        if (shapeData && shapeData.shapes && shapeData.shapes.length) {
		          shapes = shapeData.shapes[0].it;
		          matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
		          shapeStr = this.createPathShape(matrixHelper, shapes);
		          tSpan.setAttribute('d', shapeStr);
		        }

		        if (!this.isMasked) {
		          this.innerElem.appendChild(tParent);

		          if (shapeData && shapeData.shapes) {
		            // document.body.appendChild is needed to get exact measure of shape
		            document.body.appendChild(tCont);
		            var boundingBox = tCont.getBBox();
		            tCont.setAttribute('width', boundingBox.width + 2);
		            tCont.setAttribute('height', boundingBox.height + 2);
		            tCont.setAttribute('viewBox', boundingBox.x - 1 + ' ' + (boundingBox.y - 1) + ' ' + (boundingBox.width + 2) + ' ' + (boundingBox.height + 2));
		            var tContStyle = tCont.style;
		            var tContTranslation = 'translate(' + (boundingBox.x - 1) + 'px,' + (boundingBox.y - 1) + 'px)';
		            tContStyle.transform = tContTranslation;
		            tContStyle.webkitTransform = tContTranslation;
		            letters[i].yOffset = boundingBox.y - 1;
		          } else {
		            tCont.setAttribute('width', 1);
		            tCont.setAttribute('height', 1);
		          }

		          tParent.appendChild(tCont);
		        } else {
		          this.innerElem.appendChild(tSpan);
		        }
		      } else {
		        tSpan.textContent = letters[i].val;
		        tSpan.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');

		        if (!this.isMasked) {
		          this.innerElem.appendChild(tParent); //

		          var tStyle = tSpan.style;
		          var tSpanTranslation = 'translate3d(0,' + -documentData.finalSize / 1.2 + 'px,0)';
		          tStyle.transform = tSpanTranslation;
		          tStyle.webkitTransform = tSpanTranslation;
		        } else {
		          this.innerElem.appendChild(tSpan);
		        }
		      } //


		      if (!this.isMasked) {
		        this.textSpans[cnt] = tParent;
		      } else {
		        this.textSpans[cnt] = tSpan;
		      }

		      this.textSpans[cnt].style.display = 'block';
		      this.textPaths[cnt] = tSpan;
		      cnt += 1;
		    }

		    while (cnt < this.textSpans.length) {
		      this.textSpans[cnt].style.display = 'none';
		      cnt += 1;
		    }
		  };

		  HTextElement.prototype.renderInnerContent = function () {
		    this.validateText();
		    var svgStyle;

		    if (this.data.singleShape) {
		      if (!this._isFirstFrame && !this.lettersChangedFlag) {
		        return;
		      }

		      if (this.isMasked && this.finalTransform._matMdf) {
		        // Todo Benchmark if using this is better than getBBox
		        this.svgElement.setAttribute('viewBox', -this.finalTransform.mProp.p.v[0] + ' ' + -this.finalTransform.mProp.p.v[1] + ' ' + this.compW + ' ' + this.compH);
		        svgStyle = this.svgElement.style;
		        var translation = 'translate(' + -this.finalTransform.mProp.p.v[0] + 'px,' + -this.finalTransform.mProp.p.v[1] + 'px)';
		        svgStyle.transform = translation;
		        svgStyle.webkitTransform = translation;
		      }
		    }

		    this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);

		    if (!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag) {
		      return;
		    }

		    var i;
		    var len;
		    var count = 0;
		    var renderedLetters = this.textAnimator.renderedLetters;
		    var letters = this.textProperty.currentData.l;
		    len = letters.length;
		    var renderedLetter;
		    var textSpan;
		    var textPath;

		    for (i = 0; i < len; i += 1) {
		      if (letters[i].n) {
		        count += 1;
		      } else {
		        textSpan = this.textSpans[i];
		        textPath = this.textPaths[i];
		        renderedLetter = renderedLetters[count];
		        count += 1;

		        if (renderedLetter._mdf.m) {
		          if (!this.isMasked) {
		            textSpan.style.webkitTransform = renderedLetter.m;
		            textSpan.style.transform = renderedLetter.m;
		          } else {
		            textSpan.setAttribute('transform', renderedLetter.m);
		          }
		        } /// /textSpan.setAttribute('opacity',renderedLetter.o);


		        textSpan.style.opacity = renderedLetter.o;

		        if (renderedLetter.sw && renderedLetter._mdf.sw) {
		          textPath.setAttribute('stroke-width', renderedLetter.sw);
		        }

		        if (renderedLetter.sc && renderedLetter._mdf.sc) {
		          textPath.setAttribute('stroke', renderedLetter.sc);
		        }

		        if (renderedLetter.fc && renderedLetter._mdf.fc) {
		          textPath.setAttribute('fill', renderedLetter.fc);
		          textPath.style.color = renderedLetter.fc;
		        }
		      }
		    }

		    if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
		      var boundingBox = this.innerElem.getBBox();

		      if (this.currentBBox.w !== boundingBox.width) {
		        this.currentBBox.w = boundingBox.width;
		        this.svgElement.setAttribute('width', boundingBox.width);
		      }

		      if (this.currentBBox.h !== boundingBox.height) {
		        this.currentBBox.h = boundingBox.height;
		        this.svgElement.setAttribute('height', boundingBox.height);
		      }

		      var margin = 1;

		      if (this.currentBBox.w !== boundingBox.width + margin * 2 || this.currentBBox.h !== boundingBox.height + margin * 2 || this.currentBBox.x !== boundingBox.x - margin || this.currentBBox.y !== boundingBox.y - margin) {
		        this.currentBBox.w = boundingBox.width + margin * 2;
		        this.currentBBox.h = boundingBox.height + margin * 2;
		        this.currentBBox.x = boundingBox.x - margin;
		        this.currentBBox.y = boundingBox.y - margin;
		        this.svgElement.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h);
		        svgStyle = this.svgElement.style;
		        var svgTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
		        svgStyle.transform = svgTransform;
		        svgStyle.webkitTransform = svgTransform;
		      }
		    }
		  };

		  function HCameraElement(data, globalData, comp) {
		    this.initFrame();
		    this.initBaseData(data, globalData, comp);
		    this.initHierarchy();
		    var getProp = PropertyFactory.getProp;
		    this.pe = getProp(this, data.pe, 0, 0, this);

		    if (data.ks.p.s) {
		      this.px = getProp(this, data.ks.p.x, 1, 0, this);
		      this.py = getProp(this, data.ks.p.y, 1, 0, this);
		      this.pz = getProp(this, data.ks.p.z, 1, 0, this);
		    } else {
		      this.p = getProp(this, data.ks.p, 1, 0, this);
		    }

		    if (data.ks.a) {
		      this.a = getProp(this, data.ks.a, 1, 0, this);
		    }

		    if (data.ks.or.k.length && data.ks.or.k[0].to) {
		      var i;
		      var len = data.ks.or.k.length;

		      for (i = 0; i < len; i += 1) {
		        data.ks.or.k[i].to = null;
		        data.ks.or.k[i].ti = null;
		      }
		    }

		    this.or = getProp(this, data.ks.or, 1, degToRads, this);
		    this.or.sh = true;
		    this.rx = getProp(this, data.ks.rx, 0, degToRads, this);
		    this.ry = getProp(this, data.ks.ry, 0, degToRads, this);
		    this.rz = getProp(this, data.ks.rz, 0, degToRads, this);
		    this.mat = new Matrix();
		    this._prevMat = new Matrix();
		    this._isFirstFrame = true; // TODO: find a better way to make the HCamera element to be compatible with the LayerInterface and TransformInterface.

		    this.finalTransform = {
		      mProp: this
		    };
		  }

		  extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement);

		  HCameraElement.prototype.setup = function () {
		    var i;
		    var len = this.comp.threeDElements.length;
		    var comp;
		    var perspectiveStyle;
		    var containerStyle;

		    for (i = 0; i < len; i += 1) {
		      // [perspectiveElem,container]
		      comp = this.comp.threeDElements[i];

		      if (comp.type === '3d') {
		        perspectiveStyle = comp.perspectiveElem.style;
		        containerStyle = comp.container.style;
		        var perspective = this.pe.v + 'px';
		        var origin = '0px 0px 0px';
		        var matrix = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
		        perspectiveStyle.perspective = perspective;
		        perspectiveStyle.webkitPerspective = perspective;
		        containerStyle.transformOrigin = origin;
		        containerStyle.mozTransformOrigin = origin;
		        containerStyle.webkitTransformOrigin = origin;
		        perspectiveStyle.transform = matrix;
		        perspectiveStyle.webkitTransform = matrix;
		      }
		    }
		  };

		  HCameraElement.prototype.createElements = function () {};

		  HCameraElement.prototype.hide = function () {};

		  HCameraElement.prototype.renderFrame = function () {
		    var _mdf = this._isFirstFrame;
		    var i;
		    var len;

		    if (this.hierarchy) {
		      len = this.hierarchy.length;

		      for (i = 0; i < len; i += 1) {
		        _mdf = this.hierarchy[i].finalTransform.mProp._mdf || _mdf;
		      }
		    }

		    if (_mdf || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
		      this.mat.reset();

		      if (this.hierarchy) {
		        len = this.hierarchy.length - 1;

		        for (i = len; i >= 0; i -= 1) {
		          var mTransf = this.hierarchy[i].finalTransform.mProp;
		          this.mat.translate(-mTransf.p.v[0], -mTransf.p.v[1], mTransf.p.v[2]);
		          this.mat.rotateX(-mTransf.or.v[0]).rotateY(-mTransf.or.v[1]).rotateZ(mTransf.or.v[2]);
		          this.mat.rotateX(-mTransf.rx.v).rotateY(-mTransf.ry.v).rotateZ(mTransf.rz.v);
		          this.mat.scale(1 / mTransf.s.v[0], 1 / mTransf.s.v[1], 1 / mTransf.s.v[2]);
		          this.mat.translate(mTransf.a.v[0], mTransf.a.v[1], mTransf.a.v[2]);
		        }
		      }

		      if (this.p) {
		        this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]);
		      } else {
		        this.mat.translate(-this.px.v, -this.py.v, this.pz.v);
		      }

		      if (this.a) {
		        var diffVector;

		        if (this.p) {
		          diffVector = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]];
		        } else {
		          diffVector = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
		        }

		        var mag = Math.sqrt(Math.pow(diffVector[0], 2) + Math.pow(diffVector[1], 2) + Math.pow(diffVector[2], 2)); // var lookDir = getNormalizedPoint(getDiffVector(this.a.v,this.p.v));

		        var lookDir = [diffVector[0] / mag, diffVector[1] / mag, diffVector[2] / mag];
		        var lookLengthOnXZ = Math.sqrt(lookDir[2] * lookDir[2] + lookDir[0] * lookDir[0]);
		        var mRotationX = Math.atan2(lookDir[1], lookLengthOnXZ);
		        var mRotationY = Math.atan2(lookDir[0], -lookDir[2]);
		        this.mat.rotateY(mRotationY).rotateX(-mRotationX);
		      }

		      this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v);
		      this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]);
		      this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0);
		      this.mat.translate(0, 0, this.pe.v);
		      var hasMatrixChanged = !this._prevMat.equals(this.mat);

		      if ((hasMatrixChanged || this.pe._mdf) && this.comp.threeDElements) {
		        len = this.comp.threeDElements.length;
		        var comp;
		        var perspectiveStyle;
		        var containerStyle;

		        for (i = 0; i < len; i += 1) {
		          comp = this.comp.threeDElements[i];

		          if (comp.type === '3d') {
		            if (hasMatrixChanged) {
		              var matValue = this.mat.toCSS();
		              containerStyle = comp.container.style;
		              containerStyle.transform = matValue;
		              containerStyle.webkitTransform = matValue;
		            }

		            if (this.pe._mdf) {
		              perspectiveStyle = comp.perspectiveElem.style;
		              perspectiveStyle.perspective = this.pe.v + 'px';
		              perspectiveStyle.webkitPerspective = this.pe.v + 'px';
		            }
		          }
		        }

		        this.mat.clone(this._prevMat);
		      }
		    }

		    this._isFirstFrame = false;
		  };

		  HCameraElement.prototype.prepareFrame = function (num) {
		    this.prepareProperties(num, true);
		  };

		  HCameraElement.prototype.destroy = function () {};

		  HCameraElement.prototype.getBaseElement = function () {
		    return null;
		  };

		  function HImageElement(data, globalData, comp) {
		    this.assetData = globalData.getAssetData(data.refId);
		    this.initElement(data, globalData, comp);
		  }

		  extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement);

		  HImageElement.prototype.createContent = function () {
		    var assetPath = this.globalData.getAssetsPath(this.assetData);
		    var img = new Image();

		    if (this.data.hasMask) {
		      this.imageElem = createNS('image');
		      this.imageElem.setAttribute('width', this.assetData.w + 'px');
		      this.imageElem.setAttribute('height', this.assetData.h + 'px');
		      this.imageElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', assetPath);
		      this.layerElement.appendChild(this.imageElem);
		      this.baseElement.setAttribute('width', this.assetData.w);
		      this.baseElement.setAttribute('height', this.assetData.h);
		    } else {
		      this.layerElement.appendChild(img);
		    }

		    img.crossOrigin = 'anonymous';
		    img.src = assetPath;

		    if (this.data.ln) {
		      this.baseElement.setAttribute('id', this.data.ln);
		    }
		  };

		  function HybridRendererBase(animationItem, config) {
		    this.animationItem = animationItem;
		    this.layers = null;
		    this.renderedFrame = -1;
		    this.renderConfig = {
		      className: config && config.className || '',
		      imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || 'xMidYMid slice',
		      hideOnTransparent: !(config && config.hideOnTransparent === false),
		      filterSize: {
		        width: config && config.filterSize && config.filterSize.width || '400%',
		        height: config && config.filterSize && config.filterSize.height || '400%',
		        x: config && config.filterSize && config.filterSize.x || '-100%',
		        y: config && config.filterSize && config.filterSize.y || '-100%'
		      }
		    };
		    this.globalData = {
		      _mdf: false,
		      frameNum: -1,
		      renderConfig: this.renderConfig
		    };
		    this.pendingElements = [];
		    this.elements = [];
		    this.threeDElements = [];
		    this.destroyed = false;
		    this.camera = null;
		    this.supports3d = true;
		    this.rendererType = 'html';
		  }

		  extendPrototype([BaseRenderer], HybridRendererBase);
		  HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem;

		  HybridRendererBase.prototype.checkPendingElements = function () {
		    while (this.pendingElements.length) {
		      var element = this.pendingElements.pop();
		      element.checkParenting();
		    }
		  };

		  HybridRendererBase.prototype.appendElementInPos = function (element, pos) {
		    var newDOMElement = element.getBaseElement();

		    if (!newDOMElement) {
		      return;
		    }

		    var layer = this.layers[pos];

		    if (!layer.ddd || !this.supports3d) {
		      if (this.threeDElements) {
		        this.addTo3dContainer(newDOMElement, pos);
		      } else {
		        var i = 0;
		        var nextDOMElement;
		        var nextLayer;
		        var tmpDOMElement;

		        while (i < pos) {
		          if (this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement) {
		            nextLayer = this.elements[i];
		            tmpDOMElement = this.layers[i].ddd ? this.getThreeDContainerByPos(i) : nextLayer.getBaseElement();
		            nextDOMElement = tmpDOMElement || nextDOMElement;
		          }

		          i += 1;
		        }

		        if (nextDOMElement) {
		          if (!layer.ddd || !this.supports3d) {
		            this.layerElement.insertBefore(newDOMElement, nextDOMElement);
		          }
		        } else if (!layer.ddd || !this.supports3d) {
		          this.layerElement.appendChild(newDOMElement);
		        }
		      }
		    } else {
		      this.addTo3dContainer(newDOMElement, pos);
		    }
		  };

		  HybridRendererBase.prototype.createShape = function (data) {
		    if (!this.supports3d) {
		      return new SVGShapeElement(data, this.globalData, this);
		    }

		    return new HShapeElement(data, this.globalData, this);
		  };

		  HybridRendererBase.prototype.createText = function (data) {
		    if (!this.supports3d) {
		      return new SVGTextLottieElement(data, this.globalData, this);
		    }

		    return new HTextElement(data, this.globalData, this);
		  };

		  HybridRendererBase.prototype.createCamera = function (data) {
		    this.camera = new HCameraElement(data, this.globalData, this);
		    return this.camera;
		  };

		  HybridRendererBase.prototype.createImage = function (data) {
		    if (!this.supports3d) {
		      return new IImageElement(data, this.globalData, this);
		    }

		    return new HImageElement(data, this.globalData, this);
		  };

		  HybridRendererBase.prototype.createSolid = function (data) {
		    if (!this.supports3d) {
		      return new ISolidElement(data, this.globalData, this);
		    }

		    return new HSolidElement(data, this.globalData, this);
		  };

		  HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull;

		  HybridRendererBase.prototype.getThreeDContainerByPos = function (pos) {
		    var i = 0;
		    var len = this.threeDElements.length;

		    while (i < len) {
		      if (this.threeDElements[i].startPos <= pos && this.threeDElements[i].endPos >= pos) {
		        return this.threeDElements[i].perspectiveElem;
		      }

		      i += 1;
		    }

		    return null;
		  };

		  HybridRendererBase.prototype.createThreeDContainer = function (pos, type) {
		    var perspectiveElem = createTag('div');
		    var style;
		    var containerStyle;
		    styleDiv(perspectiveElem);
		    var container = createTag('div');
		    styleDiv(container);

		    if (type === '3d') {
		      style = perspectiveElem.style;
		      style.width = this.globalData.compSize.w + 'px';
		      style.height = this.globalData.compSize.h + 'px';
		      var center = '50% 50%';
		      style.webkitTransformOrigin = center;
		      style.mozTransformOrigin = center;
		      style.transformOrigin = center;
		      containerStyle = container.style;
		      var matrix = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
		      containerStyle.transform = matrix;
		      containerStyle.webkitTransform = matrix;
		    }

		    perspectiveElem.appendChild(container); // this.resizerElem.appendChild(perspectiveElem);

		    var threeDContainerData = {
		      container: container,
		      perspectiveElem: perspectiveElem,
		      startPos: pos,
		      endPos: pos,
		      type: type
		    };
		    this.threeDElements.push(threeDContainerData);
		    return threeDContainerData;
		  };

		  HybridRendererBase.prototype.build3dContainers = function () {
		    var i;
		    var len = this.layers.length;
		    var lastThreeDContainerData;
		    var currentContainer = '';

		    for (i = 0; i < len; i += 1) {
		      if (this.layers[i].ddd && this.layers[i].ty !== 3) {
		        if (currentContainer !== '3d') {
		          currentContainer = '3d';
		          lastThreeDContainerData = this.createThreeDContainer(i, '3d');
		        }

		        lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos, i);
		      } else {
		        if (currentContainer !== '2d') {
		          currentContainer = '2d';
		          lastThreeDContainerData = this.createThreeDContainer(i, '2d');
		        }

		        lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos, i);
		      }
		    }

		    len = this.threeDElements.length;

		    for (i = len - 1; i >= 0; i -= 1) {
		      this.resizerElem.appendChild(this.threeDElements[i].perspectiveElem);
		    }
		  };

		  HybridRendererBase.prototype.addTo3dContainer = function (elem, pos) {
		    var i = 0;
		    var len = this.threeDElements.length;

		    while (i < len) {
		      if (pos <= this.threeDElements[i].endPos) {
		        var j = this.threeDElements[i].startPos;
		        var nextElement;

		        while (j < pos) {
		          if (this.elements[j] && this.elements[j].getBaseElement) {
		            nextElement = this.elements[j].getBaseElement();
		          }

		          j += 1;
		        }

		        if (nextElement) {
		          this.threeDElements[i].container.insertBefore(elem, nextElement);
		        } else {
		          this.threeDElements[i].container.appendChild(elem);
		        }

		        break;
		      }

		      i += 1;
		    }
		  };

		  HybridRendererBase.prototype.configAnimation = function (animData) {
		    var resizerElem = createTag('div');
		    var wrapper = this.animationItem.wrapper;
		    var style = resizerElem.style;
		    style.width = animData.w + 'px';
		    style.height = animData.h + 'px';
		    this.resizerElem = resizerElem;
		    styleDiv(resizerElem);
		    style.transformStyle = 'flat';
		    style.mozTransformStyle = 'flat';
		    style.webkitTransformStyle = 'flat';

		    if (this.renderConfig.className) {
		      resizerElem.setAttribute('class', this.renderConfig.className);
		    }

		    wrapper.appendChild(resizerElem);
		    style.overflow = 'hidden';
		    var svg = createNS('svg');
		    svg.setAttribute('width', '1');
		    svg.setAttribute('height', '1');
		    styleDiv(svg);
		    this.resizerElem.appendChild(svg);
		    var defs = createNS('defs');
		    svg.appendChild(defs);
		    this.data = animData; // Mask animation

		    this.setupGlobalData(animData, svg);
		    this.globalData.defs = defs;
		    this.layers = animData.layers;
		    this.layerElement = this.resizerElem;
		    this.build3dContainers();
		    this.updateContainerSize();
		  };

		  HybridRendererBase.prototype.destroy = function () {
		    if (this.animationItem.wrapper) {
		      this.animationItem.wrapper.innerText = '';
		    }

		    this.animationItem.container = null;
		    this.globalData.defs = null;
		    var i;
		    var len = this.layers ? this.layers.length : 0;

		    for (i = 0; i < len; i += 1) {
		      if (this.elements[i] && this.elements[i].destroy) {
		        this.elements[i].destroy();
		      }
		    }

		    this.elements.length = 0;
		    this.destroyed = true;
		    this.animationItem = null;
		  };

		  HybridRendererBase.prototype.updateContainerSize = function () {
		    var elementWidth = this.animationItem.wrapper.offsetWidth;
		    var elementHeight = this.animationItem.wrapper.offsetHeight;
		    var elementRel = elementWidth / elementHeight;
		    var animationRel = this.globalData.compSize.w / this.globalData.compSize.h;
		    var sx;
		    var sy;
		    var tx;
		    var ty;

		    if (animationRel > elementRel) {
		      sx = elementWidth / this.globalData.compSize.w;
		      sy = elementWidth / this.globalData.compSize.w;
		      tx = 0;
		      ty = (elementHeight - this.globalData.compSize.h * (elementWidth / this.globalData.compSize.w)) / 2;
		    } else {
		      sx = elementHeight / this.globalData.compSize.h;
		      sy = elementHeight / this.globalData.compSize.h;
		      tx = (elementWidth - this.globalData.compSize.w * (elementHeight / this.globalData.compSize.h)) / 2;
		      ty = 0;
		    }

		    var style = this.resizerElem.style;
		    style.webkitTransform = 'matrix3d(' + sx + ',0,0,0,0,' + sy + ',0,0,0,0,1,0,' + tx + ',' + ty + ',0,1)';
		    style.transform = style.webkitTransform;
		  };

		  HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame;

		  HybridRendererBase.prototype.hide = function () {
		    this.resizerElem.style.display = 'none';
		  };

		  HybridRendererBase.prototype.show = function () {
		    this.resizerElem.style.display = 'block';
		  };

		  HybridRendererBase.prototype.initItems = function () {
		    this.buildAllItems();

		    if (this.camera) {
		      this.camera.setup();
		    } else {
		      var cWidth = this.globalData.compSize.w;
		      var cHeight = this.globalData.compSize.h;
		      var i;
		      var len = this.threeDElements.length;

		      for (i = 0; i < len; i += 1) {
		        var style = this.threeDElements[i].perspectiveElem.style;
		        style.webkitPerspective = Math.sqrt(Math.pow(cWidth, 2) + Math.pow(cHeight, 2)) + 'px';
		        style.perspective = style.webkitPerspective;
		      }
		    }
		  };

		  HybridRendererBase.prototype.searchExtraCompositions = function (assets) {
		    var i;
		    var len = assets.length;
		    var floatingContainer = createTag('div');

		    for (i = 0; i < len; i += 1) {
		      if (assets[i].xt) {
		        var comp = this.createComp(assets[i], floatingContainer, this.globalData.comp, null);
		        comp.initExpressions();
		        this.globalData.projectInterface.registerComposition(comp);
		      }
		    }
		  };

		  function HCompElement(data, globalData, comp) {
		    this.layers = data.layers;
		    this.supports3d = !data.hasMask;
		    this.completeLayers = false;
		    this.pendingElements = [];
		    this.elements = this.layers ? createSizedArray(this.layers.length) : [];
		    this.initElement(data, globalData, comp);
		    this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : {
		      _placeholder: true
		    };
		  }

		  extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement);
		  HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements;

		  HCompElement.prototype.createContainerElements = function () {
		    this._createBaseContainerElements(); // divElement.style.clip = 'rect(0px, '+this.data.w+'px, '+this.data.h+'px, 0px)';


		    if (this.data.hasMask) {
		      this.svgElement.setAttribute('width', this.data.w);
		      this.svgElement.setAttribute('height', this.data.h);
		      this.transformedElement = this.baseElement;
		    } else {
		      this.transformedElement = this.layerElement;
		    }
		  };

		  HCompElement.prototype.addTo3dContainer = function (elem, pos) {
		    var j = 0;
		    var nextElement;

		    while (j < pos) {
		      if (this.elements[j] && this.elements[j].getBaseElement) {
		        nextElement = this.elements[j].getBaseElement();
		      }

		      j += 1;
		    }

		    if (nextElement) {
		      this.layerElement.insertBefore(elem, nextElement);
		    } else {
		      this.layerElement.appendChild(elem);
		    }
		  };

		  HCompElement.prototype.createComp = function (data) {
		    if (!this.supports3d) {
		      return new SVGCompElement(data, this.globalData, this);
		    }

		    return new HCompElement(data, this.globalData, this);
		  };

		  function HybridRenderer(animationItem, config) {
		    this.animationItem = animationItem;
		    this.layers = null;
		    this.renderedFrame = -1;
		    this.renderConfig = {
		      className: config && config.className || '',
		      imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || 'xMidYMid slice',
		      hideOnTransparent: !(config && config.hideOnTransparent === false),
		      filterSize: {
		        width: config && config.filterSize && config.filterSize.width || '400%',
		        height: config && config.filterSize && config.filterSize.height || '400%',
		        x: config && config.filterSize && config.filterSize.x || '-100%',
		        y: config && config.filterSize && config.filterSize.y || '-100%'
		      },
		      runExpressions: !config || config.runExpressions === undefined || config.runExpressions
		    };
		    this.globalData = {
		      _mdf: false,
		      frameNum: -1,
		      renderConfig: this.renderConfig
		    };
		    this.pendingElements = [];
		    this.elements = [];
		    this.threeDElements = [];
		    this.destroyed = false;
		    this.camera = null;
		    this.supports3d = true;
		    this.rendererType = 'html';
		  }

		  extendPrototype([HybridRendererBase], HybridRenderer);

		  HybridRenderer.prototype.createComp = function (data) {
		    if (!this.supports3d) {
		      return new SVGCompElement(data, this.globalData, this);
		    }

		    return new HCompElement(data, this.globalData, this);
		  };

		  var CompExpressionInterface = function () {
		    return function (comp) {
		      function _thisLayerFunction(name) {
		        var i = 0;
		        var len = comp.layers.length;

		        while (i < len) {
		          if (comp.layers[i].nm === name || comp.layers[i].ind === name) {
		            return comp.elements[i].layerInterface;
		          }

		          i += 1;
		        }

		        return null; // return {active:false};
		      }

		      Object.defineProperty(_thisLayerFunction, '_name', {
		        value: comp.data.nm
		      });
		      _thisLayerFunction.layer = _thisLayerFunction;
		      _thisLayerFunction.pixelAspect = 1;
		      _thisLayerFunction.height = comp.data.h || comp.globalData.compSize.h;
		      _thisLayerFunction.width = comp.data.w || comp.globalData.compSize.w;
		      _thisLayerFunction.pixelAspect = 1;
		      _thisLayerFunction.frameDuration = 1 / comp.globalData.frameRate;
		      _thisLayerFunction.displayStartTime = 0;
		      _thisLayerFunction.numLayers = comp.layers.length;
		      return _thisLayerFunction;
		    };
		  }();

		  function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

		  /* eslint-disable */

		  /*
		   Copyright 2014 David Bau.

		   Permission is hereby granted, free of charge, to any person obtaining
		   a copy of this software and associated documentation files (the
		   "Software"), to deal in the Software without restriction, including
		   without limitation the rights to use, copy, modify, merge, publish,
		   distribute, sublicense, and/or sell copies of the Software, and to
		   permit persons to whom the Software is furnished to do so, subject to
		   the following conditions:

		   The above copyright notice and this permission notice shall be
		   included in all copies or substantial portions of the Software.

		   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
		   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		   MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
		   IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
		   CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
		   TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
		   SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

		   */
		  function seedRandom(pool, math) {
		    //
		    // The following constants are related to IEEE 754 limits.
		    //
		    var global = this,
		        width = 256,
		        // each RC4 output is 0 <= x < 256
		    chunks = 6,
		        // at least six RC4 outputs for each double
		    digits = 52,
		        // there are 52 significant digits in a double
		    rngname = 'random',
		        // rngname: name for Math.random and Math.seedrandom
		    startdenom = math.pow(width, chunks),
		        significance = math.pow(2, digits),
		        overflow = significance * 2,
		        mask = width - 1,
		        nodecrypto; // node.js crypto module, initialized at the bottom.
		    //
		    // seedrandom()
		    // This is the seedrandom function described above.
		    //

		    function seedrandom(seed, options, callback) {
		      var key = [];
		      options = options === true ? {
		        entropy: true
		      } : options || {}; // Flatten the seed string or build one from local entropy if needed.

		      var shortseed = mixkey(flatten(options.entropy ? [seed, tostring(pool)] : seed === null ? autoseed() : seed, 3), key); // Use the seed to initialize an ARC4 generator.

		      var arc4 = new ARC4(key); // This function returns a random double in [0, 1) that contains
		      // randomness in every bit of the mantissa of the IEEE 754 value.

		      var prng = function prng() {
		        var n = arc4.g(chunks),
		            // Start with a numerator n < 2 ^ 48
		        d = startdenom,
		            //   and denominator d = 2 ^ 48.
		        x = 0; //   and no 'extra last byte'.

		        while (n < significance) {
		          // Fill up all significant digits by
		          n = (n + x) * width; //   shifting numerator and

		          d *= width; //   denominator and generating a

		          x = arc4.g(1); //   new least-significant-byte.
		        }

		        while (n >= overflow) {
		          // To avoid rounding up, before adding
		          n /= 2; //   last byte, shift everything

		          d /= 2; //   right using integer math until

		          x >>>= 1; //   we have exactly the desired bits.
		        }

		        return (n + x) / d; // Form the number within [0, 1).
		      };

		      prng.int32 = function () {
		        return arc4.g(4) | 0;
		      };

		      prng.quick = function () {
		        return arc4.g(4) / 0x100000000;
		      };

		      prng["double"] = prng; // Mix the randomness into accumulated entropy.

		      mixkey(tostring(arc4.S), pool); // Calling convention: what to return as a function of prng, seed, is_math.

		      return (options.pass || callback || function (prng, seed, is_math_call, state) {
		        if (state) {
		          // Load the arc4 state from the given state if it has an S array.
		          if (state.S) {
		            copy(state, arc4);
		          } // Only provide the .state method if requested via options.state.


		          prng.state = function () {
		            return copy(arc4, {});
		          };
		        } // If called as a method of Math (Math.seedrandom()), mutate
		        // Math.random because that is how seedrandom.js has worked since v1.0.


		        if (is_math_call) {
		          math[rngname] = prng;
		          return seed;
		        } // Otherwise, it is a newer calling convention, so return the
		        // prng directly.
		        else return prng;
		      })(prng, shortseed, 'global' in options ? options.global : this == math, options.state);
		    }

		    math['seed' + rngname] = seedrandom; //
		    // ARC4
		    //
		    // An ARC4 implementation.  The constructor takes a key in the form of
		    // an array of at most (width) integers that should be 0 <= x < (width).
		    //
		    // The g(count) method returns a pseudorandom integer that concatenates
		    // the next (count) outputs from ARC4.  Its return value is a number x
		    // that is in the range 0 <= x < (width ^ count).
		    //

		    function ARC4(key) {
		      var t,
		          keylen = key.length,
		          me = this,
		          i = 0,
		          j = me.i = me.j = 0,
		          s = me.S = []; // The empty key [] is treated as [0].

		      if (!keylen) {
		        key = [keylen++];
		      } // Set up S using the standard key scheduling algorithm.


		      while (i < width) {
		        s[i] = i++;
		      }

		      for (i = 0; i < width; i++) {
		        s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
		        s[j] = t;
		      } // The "g" method returns the next (count) outputs as one number.


		      me.g = function (count) {
		        // Using instance members instead of closure state nearly doubles speed.
		        var t,
		            r = 0,
		            i = me.i,
		            j = me.j,
		            s = me.S;

		        while (count--) {
		          t = s[i = mask & i + 1];
		          r = r * width + s[mask & (s[i] = s[j = mask & j + t]) + (s[j] = t)];
		        }

		        me.i = i;
		        me.j = j;
		        return r; // For robust unpredictability, the function call below automatically
		        // discards an initial batch of values.  This is called RC4-drop[256].
		        // See http://google.com/search?q=rsa+fluhrer+response&btnI
		      };
		    } //
		    // copy()
		    // Copies internal state of ARC4 to or from a plain object.
		    //


		    function copy(f, t) {
		      t.i = f.i;
		      t.j = f.j;
		      t.S = f.S.slice();
		      return t;
		    } //
		    // flatten()
		    // Converts an object tree to nested arrays of strings.
		    //


		    function flatten(obj, depth) {
		      var result = [],
		          typ = _typeof$2(obj),
		          prop;

		      if (depth && typ == 'object') {
		        for (prop in obj) {
		          try {
		            result.push(flatten(obj[prop], depth - 1));
		          } catch (e) {}
		        }
		      }

		      return result.length ? result : typ == 'string' ? obj : obj + '\0';
		    } //
		    // mixkey()
		    // Mixes a string seed into a key that is an array of integers, and
		    // returns a shortened string seed that is equivalent to the result key.
		    //


		    function mixkey(seed, key) {
		      var stringseed = seed + '',
		          smear,
		          j = 0;

		      while (j < stringseed.length) {
		        key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
		      }

		      return tostring(key);
		    } //
		    // autoseed()
		    // Returns an object for autoseeding, using window.crypto and Node crypto
		    // module if available.
		    //


		    function autoseed() {
		      try {
		        if (nodecrypto) ;

		        var out = new Uint8Array(width);
		        (global.crypto || global.msCrypto).getRandomValues(out);
		        return tostring(out);
		      } catch (e) {
		        var browser = global.navigator,
		            plugins = browser && browser.plugins;
		        return [+new Date(), global, plugins, global.screen, tostring(pool)];
		      }
		    } //
		    // tostring()
		    // Converts an array of charcodes to a string
		    //


		    function tostring(a) {
		      return String.fromCharCode.apply(0, a);
		    } //
		    // When seedrandom.js is loaded, we immediately mix a few bits
		    // from the built-in RNG into the entropy pool.  Because we do
		    // not want to interfere with deterministic PRNG state later,
		    // seedrandom will not call math.random on its own again after
		    // initialization.
		    //


		    mixkey(math.random(), pool); //
		    // Nodejs and AMD support: export the implementation as a module using
		    // either convention.
		    //
		    // End anonymous scope, and pass initial values.
		  }

		  function initialize$2(BMMath) {
		    seedRandom([], BMMath);
		  }

		  var propTypes = {
		    SHAPE: 'shape'
		  };

		  function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

		  var ExpressionManager = function () {

		    var ob = {};
		    var Math = BMMath;
		    var window = null;
		    var document = null;
		    var XMLHttpRequest = null;
		    var fetch = null;
		    var frames = null;
		    var _lottieGlobal = {};
		    initialize$2(BMMath);

		    function resetFrame() {
		      _lottieGlobal = {};
		    }

		    function $bm_isInstanceOfArray(arr) {
		      return arr.constructor === Array || arr.constructor === Float32Array;
		    }

		    function isNumerable(tOfV, v) {
		      return tOfV === 'number' || v instanceof Number || tOfV === 'boolean' || tOfV === 'string';
		    }

		    function $bm_neg(a) {
		      var tOfA = _typeof$1(a);

		      if (tOfA === 'number' || a instanceof Number || tOfA === 'boolean') {
		        return -a;
		      }

		      if ($bm_isInstanceOfArray(a)) {
		        var i;
		        var lenA = a.length;
		        var retArr = [];

		        for (i = 0; i < lenA; i += 1) {
		          retArr[i] = -a[i];
		        }

		        return retArr;
		      }

		      if (a.propType) {
		        return a.v;
		      }

		      return -a;
		    }

		    var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, 'easeIn').get;
		    var easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, 'easeOut').get;
		    var easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, 'easeInOut').get;

		    function sum(a, b) {
		      var tOfA = _typeof$1(a);

		      var tOfB = _typeof$1(b);

		      if (isNumerable(tOfA, a) && isNumerable(tOfB, b) || tOfA === 'string' || tOfB === 'string') {
		        return a + b;
		      }

		      if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
		        a = a.slice(0);
		        a[0] += b;
		        return a;
		      }

		      if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
		        b = b.slice(0);
		        b[0] = a + b[0];
		        return b;
		      }

		      if ($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)) {
		        var i = 0;
		        var lenA = a.length;
		        var lenB = b.length;
		        var retArr = [];

		        while (i < lenA || i < lenB) {
		          if ((typeof a[i] === 'number' || a[i] instanceof Number) && (typeof b[i] === 'number' || b[i] instanceof Number)) {
		            retArr[i] = a[i] + b[i];
		          } else {
		            retArr[i] = b[i] === undefined ? a[i] : a[i] || b[i];
		          }

		          i += 1;
		        }

		        return retArr;
		      }

		      return 0;
		    }

		    var add = sum;

		    function sub(a, b) {
		      var tOfA = _typeof$1(a);

		      var tOfB = _typeof$1(b);

		      if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
		        if (tOfA === 'string') {
		          a = parseInt(a, 10);
		        }

		        if (tOfB === 'string') {
		          b = parseInt(b, 10);
		        }

		        return a - b;
		      }

		      if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
		        a = a.slice(0);
		        a[0] -= b;
		        return a;
		      }

		      if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
		        b = b.slice(0);
		        b[0] = a - b[0];
		        return b;
		      }

		      if ($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)) {
		        var i = 0;
		        var lenA = a.length;
		        var lenB = b.length;
		        var retArr = [];

		        while (i < lenA || i < lenB) {
		          if ((typeof a[i] === 'number' || a[i] instanceof Number) && (typeof b[i] === 'number' || b[i] instanceof Number)) {
		            retArr[i] = a[i] - b[i];
		          } else {
		            retArr[i] = b[i] === undefined ? a[i] : a[i] || b[i];
		          }

		          i += 1;
		        }

		        return retArr;
		      }

		      return 0;
		    }

		    function mul(a, b) {
		      var tOfA = _typeof$1(a);

		      var tOfB = _typeof$1(b);

		      var arr;

		      if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
		        return a * b;
		      }

		      var i;
		      var len;

		      if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
		        len = a.length;
		        arr = createTypedArray('float32', len);

		        for (i = 0; i < len; i += 1) {
		          arr[i] = a[i] * b;
		        }

		        return arr;
		      }

		      if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
		        len = b.length;
		        arr = createTypedArray('float32', len);

		        for (i = 0; i < len; i += 1) {
		          arr[i] = a * b[i];
		        }

		        return arr;
		      }

		      return 0;
		    }

		    function div(a, b) {
		      var tOfA = _typeof$1(a);

		      var tOfB = _typeof$1(b);

		      var arr;

		      if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
		        return a / b;
		      }

		      var i;
		      var len;

		      if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
		        len = a.length;
		        arr = createTypedArray('float32', len);

		        for (i = 0; i < len; i += 1) {
		          arr[i] = a[i] / b;
		        }

		        return arr;
		      }

		      if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
		        len = b.length;
		        arr = createTypedArray('float32', len);

		        for (i = 0; i < len; i += 1) {
		          arr[i] = a / b[i];
		        }

		        return arr;
		      }

		      return 0;
		    }

		    function mod(a, b) {
		      if (typeof a === 'string') {
		        a = parseInt(a, 10);
		      }

		      if (typeof b === 'string') {
		        b = parseInt(b, 10);
		      }

		      return a % b;
		    }

		    var $bm_sum = sum;
		    var $bm_sub = sub;
		    var $bm_mul = mul;
		    var $bm_div = div;
		    var $bm_mod = mod;

		    function clamp(num, min, max) {
		      if (min > max) {
		        var mm = max;
		        max = min;
		        min = mm;
		      }

		      return Math.min(Math.max(num, min), max);
		    }

		    function radiansToDegrees(val) {
		      return val / degToRads;
		    }

		    var radians_to_degrees = radiansToDegrees;

		    function degreesToRadians(val) {
		      return val * degToRads;
		    }

		    var degrees_to_radians = radiansToDegrees;
		    var helperLengthArray = [0, 0, 0, 0, 0, 0];

		    function length(arr1, arr2) {
		      if (typeof arr1 === 'number' || arr1 instanceof Number) {
		        arr2 = arr2 || 0;
		        return Math.abs(arr1 - arr2);
		      }

		      if (!arr2) {
		        arr2 = helperLengthArray;
		      }

		      var i;
		      var len = Math.min(arr1.length, arr2.length);
		      var addedLength = 0;

		      for (i = 0; i < len; i += 1) {
		        addedLength += Math.pow(arr2[i] - arr1[i], 2);
		      }

		      return Math.sqrt(addedLength);
		    }

		    function normalize(vec) {
		      return div(vec, length(vec));
		    }

		    function rgbToHsl(val) {
		      var r = val[0];
		      var g = val[1];
		      var b = val[2];
		      var max = Math.max(r, g, b);
		      var min = Math.min(r, g, b);
		      var h;
		      var s;
		      var l = (max + min) / 2;

		      if (max === min) {
		        h = 0; // achromatic

		        s = 0; // achromatic
		      } else {
		        var d = max - min;
		        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		        switch (max) {
		          case r:
		            h = (g - b) / d + (g < b ? 6 : 0);
		            break;

		          case g:
		            h = (b - r) / d + 2;
		            break;

		          case b:
		            h = (r - g) / d + 4;
		            break;
		        }

		        h /= 6;
		      }

		      return [h, s, l, val[3]];
		    }

		    function hue2rgb(p, q, t) {
		      if (t < 0) t += 1;
		      if (t > 1) t -= 1;
		      if (t < 1 / 6) return p + (q - p) * 6 * t;
		      if (t < 1 / 2) return q;
		      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
		      return p;
		    }

		    function hslToRgb(val) {
		      var h = val[0];
		      var s = val[1];
		      var l = val[2];
		      var r;
		      var g;
		      var b;

		      if (s === 0) {
		        r = l; // achromatic

		        b = l; // achromatic

		        g = l; // achromatic
		      } else {
		        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		        var p = 2 * l - q;
		        r = hue2rgb(p, q, h + 1 / 3);
		        g = hue2rgb(p, q, h);
		        b = hue2rgb(p, q, h - 1 / 3);
		      }

		      return [r, g, b, val[3]];
		    }

		    function linear(t, tMin, tMax, value1, value2) {
		      if (value1 === undefined || value2 === undefined) {
		        value1 = tMin;
		        value2 = tMax;
		        tMin = 0;
		        tMax = 1;
		      }

		      if (tMax < tMin) {
		        var _tMin = tMax;
		        tMax = tMin;
		        tMin = _tMin;
		      }

		      if (t <= tMin) {
		        return value1;
		      }

		      if (t >= tMax) {
		        return value2;
		      }

		      var perc = tMax === tMin ? 0 : (t - tMin) / (tMax - tMin);

		      if (!value1.length) {
		        return value1 + (value2 - value1) * perc;
		      }

		      var i;
		      var len = value1.length;
		      var arr = createTypedArray('float32', len);

		      for (i = 0; i < len; i += 1) {
		        arr[i] = value1[i] + (value2[i] - value1[i]) * perc;
		      }

		      return arr;
		    }

		    function random(min, max) {
		      if (max === undefined) {
		        if (min === undefined) {
		          min = 0;
		          max = 1;
		        } else {
		          max = min;
		          min = undefined;
		        }
		      }

		      if (max.length) {
		        var i;
		        var len = max.length;

		        if (!min) {
		          min = createTypedArray('float32', len);
		        }

		        var arr = createTypedArray('float32', len);
		        var rnd = BMMath.random();

		        for (i = 0; i < len; i += 1) {
		          arr[i] = min[i] + rnd * (max[i] - min[i]);
		        }

		        return arr;
		      }

		      if (min === undefined) {
		        min = 0;
		      }

		      var rndm = BMMath.random();
		      return min + rndm * (max - min);
		    }

		    function createPath(points, inTangents, outTangents, closed) {
		      var i;
		      var len = points.length;
		      var path = shapePool.newElement();
		      path.setPathData(!!closed, len);
		      var arrPlaceholder = [0, 0];
		      var inVertexPoint;
		      var outVertexPoint;

		      for (i = 0; i < len; i += 1) {
		        inVertexPoint = inTangents && inTangents[i] ? inTangents[i] : arrPlaceholder;
		        outVertexPoint = outTangents && outTangents[i] ? outTangents[i] : arrPlaceholder;
		        path.setTripleAt(points[i][0], points[i][1], outVertexPoint[0] + points[i][0], outVertexPoint[1] + points[i][1], inVertexPoint[0] + points[i][0], inVertexPoint[1] + points[i][1], i, true);
		      }

		      return path;
		    }

		    function initiateExpression(elem, data, property) {
		      // Bail out if we don't want expressions
		      function noOp(_value) {
		        return _value;
		      }

		      if (!elem.globalData.renderConfig.runExpressions) {
		        return noOp;
		      }

		      var val = data.x;
		      var needsVelocity = /velocity(?![\w\d])/.test(val);

		      var _needsRandom = val.indexOf('random') !== -1;

		      var elemType = elem.data.ty;
		      var transform;
		      var $bm_transform;
		      var content;
		      var effect;
		      var thisProperty = property;
		      thisProperty.valueAtTime = thisProperty.getValueAtTime;
		      Object.defineProperty(thisProperty, 'value', {
		        get: function get() {
		          return thisProperty.v;
		        }
		      });
		      elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
		      elem.comp.displayStartTime = 0;
		      var inPoint = elem.data.ip / elem.comp.globalData.frameRate;
		      var outPoint = elem.data.op / elem.comp.globalData.frameRate;
		      var width = elem.data.sw ? elem.data.sw : 0;
		      var height = elem.data.sh ? elem.data.sh : 0;
		      var name = elem.data.nm;
		      var loopIn;
		      var loop_in;
		      var loopOut;
		      var loop_out;
		      var smooth;
		      var toWorld;
		      var fromWorld;
		      var fromComp;
		      var toComp;
		      var fromCompToSurface;
		      var position;
		      var rotation;
		      var anchorPoint;
		      var scale;
		      var thisLayer;
		      var thisComp;
		      var mask;
		      var valueAtTime;
		      var velocityAtTime;
		      var scoped_bm_rt; // val = val.replace(/(\\?"|')((http)(s)?(:\/))?\/.*?(\\?"|')/g, "\"\""); // deter potential network calls

		      var expression_function = eval('[function _expression_function(){' + val + ';scoped_bm_rt=$bm_rt}]')[0]; // eslint-disable-line no-eval

		      var numKeys = property.kf ? data.k.length : 0;
		      var active = !this.data || this.data.hd !== true;

		      var wiggle = function wiggle(freq, amp) {
		        var iWiggle;
		        var j;
		        var lenWiggle = this.pv.length ? this.pv.length : 1;
		        var addedAmps = createTypedArray('float32', lenWiggle);
		        freq = 5;
		        var iterations = Math.floor(time * freq);
		        iWiggle = 0;
		        j = 0;

		        while (iWiggle < iterations) {
		          // var rnd = BMMath.random();
		          for (j = 0; j < lenWiggle; j += 1) {
		            addedAmps[j] += -amp + amp * 2 * BMMath.random(); // addedAmps[j] += -amp + amp*2*rnd;
		          }

		          iWiggle += 1;
		        } // var rnd2 = BMMath.random();


		        var periods = time * freq;
		        var perc = periods - Math.floor(periods);
		        var arr = createTypedArray('float32', lenWiggle);

		        if (lenWiggle > 1) {
		          for (j = 0; j < lenWiggle; j += 1) {
		            arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp * 2 * BMMath.random()) * perc; // arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp*2*rnd)*perc;
		            // arr[i] = this.pv[i] + addedAmp + amp1*perc + amp2*(1-perc);
		          }

		          return arr;
		        }

		        return this.pv + addedAmps[0] + (-amp + amp * 2 * BMMath.random()) * perc;
		      }.bind(this);

		      if (thisProperty.loopIn) {
		        loopIn = thisProperty.loopIn.bind(thisProperty);
		        loop_in = loopIn;
		      }

		      if (thisProperty.loopOut) {
		        loopOut = thisProperty.loopOut.bind(thisProperty);
		        loop_out = loopOut;
		      }

		      if (thisProperty.smooth) {
		        smooth = thisProperty.smooth.bind(thisProperty);
		      }

		      function loopInDuration(type, duration) {
		        return loopIn(type, duration, true);
		      }

		      function loopOutDuration(type, duration) {
		        return loopOut(type, duration, true);
		      }

		      if (this.getValueAtTime) {
		        valueAtTime = this.getValueAtTime.bind(this);
		      }

		      if (this.getVelocityAtTime) {
		        velocityAtTime = this.getVelocityAtTime.bind(this);
		      }

		      var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

		      function lookAt(elem1, elem2) {
		        var fVec = [elem2[0] - elem1[0], elem2[1] - elem1[1], elem2[2] - elem1[2]];
		        var pitch = Math.atan2(fVec[0], Math.sqrt(fVec[1] * fVec[1] + fVec[2] * fVec[2])) / degToRads;
		        var yaw = -Math.atan2(fVec[1], fVec[2]) / degToRads;
		        return [yaw, pitch, 0];
		      }

		      function easeOut(t, tMin, tMax, val1, val2) {
		        return applyEase(easeOutBez, t, tMin, tMax, val1, val2);
		      }

		      function easeIn(t, tMin, tMax, val1, val2) {
		        return applyEase(easeInBez, t, tMin, tMax, val1, val2);
		      }

		      function ease(t, tMin, tMax, val1, val2) {
		        return applyEase(easeInOutBez, t, tMin, tMax, val1, val2);
		      }

		      function applyEase(fn, t, tMin, tMax, val1, val2) {
		        if (val1 === undefined) {
		          val1 = tMin;
		          val2 = tMax;
		        } else {
		          t = (t - tMin) / (tMax - tMin);
		        }

		        if (t > 1) {
		          t = 1;
		        } else if (t < 0) {
		          t = 0;
		        }

		        var mult = fn(t);

		        if ($bm_isInstanceOfArray(val1)) {
		          var iKey;
		          var lenKey = val1.length;
		          var arr = createTypedArray('float32', lenKey);

		          for (iKey = 0; iKey < lenKey; iKey += 1) {
		            arr[iKey] = (val2[iKey] - val1[iKey]) * mult + val1[iKey];
		          }

		          return arr;
		        }

		        return (val2 - val1) * mult + val1;
		      }

		      function nearestKey(time) {
		        var iKey;
		        var lenKey = data.k.length;
		        var index;
		        var keyTime;

		        if (!data.k.length || typeof data.k[0] === 'number') {
		          index = 0;
		          keyTime = 0;
		        } else {
		          index = -1;
		          time *= elem.comp.globalData.frameRate;

		          if (time < data.k[0].t) {
		            index = 1;
		            keyTime = data.k[0].t;
		          } else {
		            for (iKey = 0; iKey < lenKey - 1; iKey += 1) {
		              if (time === data.k[iKey].t) {
		                index = iKey + 1;
		                keyTime = data.k[iKey].t;
		                break;
		              } else if (time > data.k[iKey].t && time < data.k[iKey + 1].t) {
		                if (time - data.k[iKey].t > data.k[iKey + 1].t - time) {
		                  index = iKey + 2;
		                  keyTime = data.k[iKey + 1].t;
		                } else {
		                  index = iKey + 1;
		                  keyTime = data.k[iKey].t;
		                }

		                break;
		              }
		            }

		            if (index === -1) {
		              index = iKey + 1;
		              keyTime = data.k[iKey].t;
		            }
		          }
		        }

		        var obKey = {};
		        obKey.index = index;
		        obKey.time = keyTime / elem.comp.globalData.frameRate;
		        return obKey;
		      }

		      function key(ind) {
		        var obKey;
		        var iKey;
		        var lenKey;

		        if (!data.k.length || typeof data.k[0] === 'number') {
		          throw new Error('The property has no keyframe at index ' + ind);
		        }

		        ind -= 1;
		        obKey = {
		          time: data.k[ind].t / elem.comp.globalData.frameRate,
		          value: []
		        };
		        var arr = Object.prototype.hasOwnProperty.call(data.k[ind], 's') ? data.k[ind].s : data.k[ind - 1].e;
		        lenKey = arr.length;

		        for (iKey = 0; iKey < lenKey; iKey += 1) {
		          obKey[iKey] = arr[iKey];
		          obKey.value[iKey] = arr[iKey];
		        }

		        return obKey;
		      }

		      function framesToTime(fr, fps) {
		        if (!fps) {
		          fps = elem.comp.globalData.frameRate;
		        }

		        return fr / fps;
		      }

		      function timeToFrames(t, fps) {
		        if (!t && t !== 0) {
		          t = time;
		        }

		        if (!fps) {
		          fps = elem.comp.globalData.frameRate;
		        }

		        return t * fps;
		      }

		      function seedRandom(seed) {
		        BMMath.seedrandom(randSeed + seed);
		      }

		      function sourceRectAtTime() {
		        return elem.sourceRectAtTime();
		      }

		      function substring(init, end) {
		        if (typeof value === 'string') {
		          if (end === undefined) {
		            return value.substring(init);
		          }

		          return value.substring(init, end);
		        }

		        return '';
		      }

		      function substr(init, end) {
		        if (typeof value === 'string') {
		          if (end === undefined) {
		            return value.substr(init);
		          }

		          return value.substr(init, end);
		        }

		        return '';
		      }

		      function posterizeTime(framesPerSecond) {
		        time = framesPerSecond === 0 ? 0 : Math.floor(time * framesPerSecond) / framesPerSecond;
		        value = valueAtTime(time);
		      }

		      var time;
		      var velocity;
		      var value;
		      var text;
		      var textIndex;
		      var textTotal;
		      var selectorValue;
		      var index = elem.data.ind;
		      var hasParent = !!(elem.hierarchy && elem.hierarchy.length);
		      var parent;
		      var randSeed = Math.floor(Math.random() * 1000000);
		      var globalData = elem.globalData;

		      function executeExpression(_value) {
		        // globalData.pushExpression();
		        value = _value;

		        if (this.frameExpressionId === elem.globalData.frameId && this.propType !== 'textSelector') {
		          return value;
		        }

		        if (this.propType === 'textSelector') {
		          textIndex = this.textIndex;
		          textTotal = this.textTotal;
		          selectorValue = this.selectorValue;
		        }

		        if (!thisLayer) {
		          text = elem.layerInterface.text;
		          thisLayer = elem.layerInterface;
		          thisComp = elem.comp.compInterface;
		          toWorld = thisLayer.toWorld.bind(thisLayer);
		          fromWorld = thisLayer.fromWorld.bind(thisLayer);
		          fromComp = thisLayer.fromComp.bind(thisLayer);
		          toComp = thisLayer.toComp.bind(thisLayer);
		          mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null;
		          fromCompToSurface = fromComp;
		        }

		        if (!transform) {
		          transform = elem.layerInterface('ADBE Transform Group');
		          $bm_transform = transform;

		          if (transform) {
		            anchorPoint = transform.anchorPoint;
		            /* position = transform.position;
		                      rotation = transform.rotation;
		                      scale = transform.scale; */
		          }
		        }

		        if (elemType === 4 && !content) {
		          content = thisLayer('ADBE Root Vectors Group');
		        }

		        if (!effect) {
		          effect = thisLayer(4);
		        }

		        hasParent = !!(elem.hierarchy && elem.hierarchy.length);

		        if (hasParent && !parent) {
		          parent = elem.hierarchy[0].layerInterface;
		        }

		        time = this.comp.renderedFrame / this.comp.globalData.frameRate;

		        if (_needsRandom) {
		          seedRandom(randSeed + time);
		        }

		        if (needsVelocity) {
		          velocity = velocityAtTime(time);
		        }

		        expression_function();
		        this.frameExpressionId = elem.globalData.frameId; // TODO: Check if it's possible to return on ShapeInterface the .v value
		        // Changed this to a ternary operation because Rollup failed compiling it correctly

		        scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt;
		        return scoped_bm_rt;
		      } // Bundlers will see these as dead code and unless we reference them


		      executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData];
		      return executeExpression;
		    }

		    ob.initiateExpression = initiateExpression;
		    ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal];
		    ob.resetFrame = resetFrame;
		    return ob;
		  }();

		  var Expressions = function () {
		    var ob = {};
		    ob.initExpressions = initExpressions;
		    ob.resetFrame = ExpressionManager.resetFrame;

		    function initExpressions(animation) {
		      var stackCount = 0;
		      var registers = [];

		      function pushExpression() {
		        stackCount += 1;
		      }

		      function popExpression() {
		        stackCount -= 1;

		        if (stackCount === 0) {
		          releaseInstances();
		        }
		      }

		      function registerExpressionProperty(expression) {
		        if (registers.indexOf(expression) === -1) {
		          registers.push(expression);
		        }
		      }

		      function releaseInstances() {
		        var i;
		        var len = registers.length;

		        for (i = 0; i < len; i += 1) {
		          registers[i].release();
		        }

		        registers.length = 0;
		      }

		      animation.renderer.compInterface = CompExpressionInterface(animation.renderer);
		      animation.renderer.globalData.projectInterface.registerComposition(animation.renderer);
		      animation.renderer.globalData.pushExpression = pushExpression;
		      animation.renderer.globalData.popExpression = popExpression;
		      animation.renderer.globalData.registerExpressionProperty = registerExpressionProperty;
		    }

		    return ob;
		  }();

		  var MaskManagerInterface = function () {
		    function MaskInterface(mask, data) {
		      this._mask = mask;
		      this._data = data;
		    }

		    Object.defineProperty(MaskInterface.prototype, 'maskPath', {
		      get: function get() {
		        if (this._mask.prop.k) {
		          this._mask.prop.getValue();
		        }

		        return this._mask.prop;
		      }
		    });
		    Object.defineProperty(MaskInterface.prototype, 'maskOpacity', {
		      get: function get() {
		        if (this._mask.op.k) {
		          this._mask.op.getValue();
		        }

		        return this._mask.op.v * 100;
		      }
		    });

		    var MaskManager = function MaskManager(maskManager) {
		      var _masksInterfaces = createSizedArray(maskManager.viewData.length);

		      var i;
		      var len = maskManager.viewData.length;

		      for (i = 0; i < len; i += 1) {
		        _masksInterfaces[i] = new MaskInterface(maskManager.viewData[i], maskManager.masksProperties[i]);
		      }

		      var maskFunction = function maskFunction(name) {
		        i = 0;

		        while (i < len) {
		          if (maskManager.masksProperties[i].nm === name) {
		            return _masksInterfaces[i];
		          }

		          i += 1;
		        }

		        return null;
		      };

		      return maskFunction;
		    };

		    return MaskManager;
		  }();

		  var ExpressionPropertyInterface = function () {
		    var defaultUnidimensionalValue = {
		      pv: 0,
		      v: 0,
		      mult: 1
		    };
		    var defaultMultidimensionalValue = {
		      pv: [0, 0, 0],
		      v: [0, 0, 0],
		      mult: 1
		    };

		    function completeProperty(expressionValue, property, type) {
		      Object.defineProperty(expressionValue, 'velocity', {
		        get: function get() {
		          return property.getVelocityAtTime(property.comp.currentFrame);
		        }
		      });
		      expressionValue.numKeys = property.keyframes ? property.keyframes.length : 0;

		      expressionValue.key = function (pos) {
		        if (!expressionValue.numKeys) {
		          return 0;
		        }

		        var value = '';

		        if ('s' in property.keyframes[pos - 1]) {
		          value = property.keyframes[pos - 1].s;
		        } else if ('e' in property.keyframes[pos - 2]) {
		          value = property.keyframes[pos - 2].e;
		        } else {
		          value = property.keyframes[pos - 2].s;
		        }

		        var valueProp = type === 'unidimensional' ? new Number(value) : Object.assign({}, value); // eslint-disable-line no-new-wrappers

		        valueProp.time = property.keyframes[pos - 1].t / property.elem.comp.globalData.frameRate;
		        valueProp.value = type === 'unidimensional' ? value[0] : value;
		        return valueProp;
		      };

		      expressionValue.valueAtTime = property.getValueAtTime;
		      expressionValue.speedAtTime = property.getSpeedAtTime;
		      expressionValue.velocityAtTime = property.getVelocityAtTime;
		      expressionValue.propertyGroup = property.propertyGroup;
		    }

		    function UnidimensionalPropertyInterface(property) {
		      if (!property || !('pv' in property)) {
		        property = defaultUnidimensionalValue;
		      }

		      var mult = 1 / property.mult;
		      var val = property.pv * mult;
		      var expressionValue = new Number(val); // eslint-disable-line no-new-wrappers

		      expressionValue.value = val;
		      completeProperty(expressionValue, property, 'unidimensional');
		      return function () {
		        if (property.k) {
		          property.getValue();
		        }

		        val = property.v * mult;

		        if (expressionValue.value !== val) {
		          expressionValue = new Number(val); // eslint-disable-line no-new-wrappers

		          expressionValue.value = val;
		          completeProperty(expressionValue, property, 'unidimensional');
		        }

		        return expressionValue;
		      };
		    }

		    function MultidimensionalPropertyInterface(property) {
		      if (!property || !('pv' in property)) {
		        property = defaultMultidimensionalValue;
		      }

		      var mult = 1 / property.mult;
		      var len = property.data && property.data.l || property.pv.length;
		      var expressionValue = createTypedArray('float32', len);
		      var arrValue = createTypedArray('float32', len);
		      expressionValue.value = arrValue;
		      completeProperty(expressionValue, property, 'multidimensional');
		      return function () {
		        if (property.k) {
		          property.getValue();
		        }

		        for (var i = 0; i < len; i += 1) {
		          arrValue[i] = property.v[i] * mult;
		          expressionValue[i] = arrValue[i];
		        }

		        return expressionValue;
		      };
		    } // TODO: try to avoid using this getter


		    function defaultGetter() {
		      return defaultUnidimensionalValue;
		    }

		    return function (property) {
		      if (!property) {
		        return defaultGetter;
		      }

		      if (property.propType === 'unidimensional') {
		        return UnidimensionalPropertyInterface(property);
		      }

		      return MultidimensionalPropertyInterface(property);
		    };
		  }();

		  var TransformExpressionInterface = function () {
		    return function (transform) {
		      function _thisFunction(name) {
		        switch (name) {
		          case 'scale':
		          case 'Scale':
		          case 'ADBE Scale':
		          case 6:
		            return _thisFunction.scale;

		          case 'rotation':
		          case 'Rotation':
		          case 'ADBE Rotation':
		          case 'ADBE Rotate Z':
		          case 10:
		            return _thisFunction.rotation;

		          case 'ADBE Rotate X':
		            return _thisFunction.xRotation;

		          case 'ADBE Rotate Y':
		            return _thisFunction.yRotation;

		          case 'position':
		          case 'Position':
		          case 'ADBE Position':
		          case 2:
		            return _thisFunction.position;

		          case 'ADBE Position_0':
		            return _thisFunction.xPosition;

		          case 'ADBE Position_1':
		            return _thisFunction.yPosition;

		          case 'ADBE Position_2':
		            return _thisFunction.zPosition;

		          case 'anchorPoint':
		          case 'AnchorPoint':
		          case 'Anchor Point':
		          case 'ADBE AnchorPoint':
		          case 1:
		            return _thisFunction.anchorPoint;

		          case 'opacity':
		          case 'Opacity':
		          case 11:
		            return _thisFunction.opacity;

		          default:
		            return null;
		        }
		      }

		      Object.defineProperty(_thisFunction, 'rotation', {
		        get: ExpressionPropertyInterface(transform.r || transform.rz)
		      });
		      Object.defineProperty(_thisFunction, 'zRotation', {
		        get: ExpressionPropertyInterface(transform.rz || transform.r)
		      });
		      Object.defineProperty(_thisFunction, 'xRotation', {
		        get: ExpressionPropertyInterface(transform.rx)
		      });
		      Object.defineProperty(_thisFunction, 'yRotation', {
		        get: ExpressionPropertyInterface(transform.ry)
		      });
		      Object.defineProperty(_thisFunction, 'scale', {
		        get: ExpressionPropertyInterface(transform.s)
		      });

		      var _px;

		      var _py;

		      var _pz;

		      var _transformFactory;

		      if (transform.p) {
		        _transformFactory = ExpressionPropertyInterface(transform.p);
		      } else {
		        _px = ExpressionPropertyInterface(transform.px);
		        _py = ExpressionPropertyInterface(transform.py);

		        if (transform.pz) {
		          _pz = ExpressionPropertyInterface(transform.pz);
		        }
		      }

		      Object.defineProperty(_thisFunction, 'position', {
		        get: function get() {
		          if (transform.p) {
		            return _transformFactory();
		          }

		          return [_px(), _py(), _pz ? _pz() : 0];
		        }
		      });
		      Object.defineProperty(_thisFunction, 'xPosition', {
		        get: ExpressionPropertyInterface(transform.px)
		      });
		      Object.defineProperty(_thisFunction, 'yPosition', {
		        get: ExpressionPropertyInterface(transform.py)
		      });
		      Object.defineProperty(_thisFunction, 'zPosition', {
		        get: ExpressionPropertyInterface(transform.pz)
		      });
		      Object.defineProperty(_thisFunction, 'anchorPoint', {
		        get: ExpressionPropertyInterface(transform.a)
		      });
		      Object.defineProperty(_thisFunction, 'opacity', {
		        get: ExpressionPropertyInterface(transform.o)
		      });
		      Object.defineProperty(_thisFunction, 'skew', {
		        get: ExpressionPropertyInterface(transform.sk)
		      });
		      Object.defineProperty(_thisFunction, 'skewAxis', {
		        get: ExpressionPropertyInterface(transform.sa)
		      });
		      Object.defineProperty(_thisFunction, 'orientation', {
		        get: ExpressionPropertyInterface(transform.or)
		      });
		      return _thisFunction;
		    };
		  }();

		  var LayerExpressionInterface = function () {
		    function getMatrix(time) {
		      var toWorldMat = new Matrix();

		      if (time !== undefined) {
		        var propMatrix = this._elem.finalTransform.mProp.getValueAtTime(time);

		        propMatrix.clone(toWorldMat);
		      } else {
		        var transformMat = this._elem.finalTransform.mProp;
		        transformMat.applyToMatrix(toWorldMat);
		      }

		      return toWorldMat;
		    }

		    function toWorldVec(arr, time) {
		      var toWorldMat = this.getMatrix(time);
		      toWorldMat.props[12] = 0;
		      toWorldMat.props[13] = 0;
		      toWorldMat.props[14] = 0;
		      return this.applyPoint(toWorldMat, arr);
		    }

		    function toWorld(arr, time) {
		      var toWorldMat = this.getMatrix(time);
		      return this.applyPoint(toWorldMat, arr);
		    }

		    function fromWorldVec(arr, time) {
		      var toWorldMat = this.getMatrix(time);
		      toWorldMat.props[12] = 0;
		      toWorldMat.props[13] = 0;
		      toWorldMat.props[14] = 0;
		      return this.invertPoint(toWorldMat, arr);
		    }

		    function fromWorld(arr, time) {
		      var toWorldMat = this.getMatrix(time);
		      return this.invertPoint(toWorldMat, arr);
		    }

		    function applyPoint(matrix, arr) {
		      if (this._elem.hierarchy && this._elem.hierarchy.length) {
		        var i;
		        var len = this._elem.hierarchy.length;

		        for (i = 0; i < len; i += 1) {
		          this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(matrix);
		        }
		      }

		      return matrix.applyToPointArray(arr[0], arr[1], arr[2] || 0);
		    }

		    function invertPoint(matrix, arr) {
		      if (this._elem.hierarchy && this._elem.hierarchy.length) {
		        var i;
		        var len = this._elem.hierarchy.length;

		        for (i = 0; i < len; i += 1) {
		          this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(matrix);
		        }
		      }

		      return matrix.inversePoint(arr);
		    }

		    function fromComp(arr) {
		      var toWorldMat = new Matrix();
		      toWorldMat.reset();

		      this._elem.finalTransform.mProp.applyToMatrix(toWorldMat);

		      if (this._elem.hierarchy && this._elem.hierarchy.length) {
		        var i;
		        var len = this._elem.hierarchy.length;

		        for (i = 0; i < len; i += 1) {
		          this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);
		        }

		        return toWorldMat.inversePoint(arr);
		      }

		      return toWorldMat.inversePoint(arr);
		    }

		    function sampleImage() {
		      return [1, 1, 1, 1];
		    }

		    return function (elem) {
		      var transformInterface;

		      function _registerMaskInterface(maskManager) {
		        _thisLayerFunction.mask = new MaskManagerInterface(maskManager, elem);
		      }

		      function _registerEffectsInterface(effects) {
		        _thisLayerFunction.effect = effects;
		      }

		      function _thisLayerFunction(name) {
		        switch (name) {
		          case 'ADBE Root Vectors Group':
		          case 'Contents':
		          case 2:
		            return _thisLayerFunction.shapeInterface;

		          case 1:
		          case 6:
		          case 'Transform':
		          case 'transform':
		          case 'ADBE Transform Group':
		            return transformInterface;

		          case 4:
		          case 'ADBE Effect Parade':
		          case 'effects':
		          case 'Effects':
		            return _thisLayerFunction.effect;

		          case 'ADBE Text Properties':
		            return _thisLayerFunction.textInterface;

		          default:
		            return null;
		        }
		      }

		      _thisLayerFunction.getMatrix = getMatrix;
		      _thisLayerFunction.invertPoint = invertPoint;
		      _thisLayerFunction.applyPoint = applyPoint;
		      _thisLayerFunction.toWorld = toWorld;
		      _thisLayerFunction.toWorldVec = toWorldVec;
		      _thisLayerFunction.fromWorld = fromWorld;
		      _thisLayerFunction.fromWorldVec = fromWorldVec;
		      _thisLayerFunction.toComp = toWorld;
		      _thisLayerFunction.fromComp = fromComp;
		      _thisLayerFunction.sampleImage = sampleImage;
		      _thisLayerFunction.sourceRectAtTime = elem.sourceRectAtTime.bind(elem);
		      _thisLayerFunction._elem = elem;
		      transformInterface = TransformExpressionInterface(elem.finalTransform.mProp);
		      var anchorPointDescriptor = getDescriptor(transformInterface, 'anchorPoint');
		      Object.defineProperties(_thisLayerFunction, {
		        hasParent: {
		          get: function get() {
		            return elem.hierarchy.length;
		          }
		        },
		        parent: {
		          get: function get() {
		            return elem.hierarchy[0].layerInterface;
		          }
		        },
		        rotation: getDescriptor(transformInterface, 'rotation'),
		        scale: getDescriptor(transformInterface, 'scale'),
		        position: getDescriptor(transformInterface, 'position'),
		        opacity: getDescriptor(transformInterface, 'opacity'),
		        anchorPoint: anchorPointDescriptor,
		        anchor_point: anchorPointDescriptor,
		        transform: {
		          get: function get() {
		            return transformInterface;
		          }
		        },
		        active: {
		          get: function get() {
		            return elem.isInRange;
		          }
		        }
		      });
		      _thisLayerFunction.startTime = elem.data.st;
		      _thisLayerFunction.index = elem.data.ind;
		      _thisLayerFunction.source = elem.data.refId;
		      _thisLayerFunction.height = elem.data.ty === 0 ? elem.data.h : 100;
		      _thisLayerFunction.width = elem.data.ty === 0 ? elem.data.w : 100;
		      _thisLayerFunction.inPoint = elem.data.ip / elem.comp.globalData.frameRate;
		      _thisLayerFunction.outPoint = elem.data.op / elem.comp.globalData.frameRate;
		      _thisLayerFunction._name = elem.data.nm;
		      _thisLayerFunction.registerMaskInterface = _registerMaskInterface;
		      _thisLayerFunction.registerEffectsInterface = _registerEffectsInterface;
		      return _thisLayerFunction;
		    };
		  }();

		  var propertyGroupFactory = function () {
		    return function (interfaceFunction, parentPropertyGroup) {
		      return function (val) {
		        val = val === undefined ? 1 : val;

		        if (val <= 0) {
		          return interfaceFunction;
		        }

		        return parentPropertyGroup(val - 1);
		      };
		    };
		  }();

		  var PropertyInterface = function () {
		    return function (propertyName, propertyGroup) {
		      var interfaceFunction = {
		        _name: propertyName
		      };

		      function _propertyGroup(val) {
		        val = val === undefined ? 1 : val;

		        if (val <= 0) {
		          return interfaceFunction;
		        }

		        return propertyGroup(val - 1);
		      }

		      return _propertyGroup;
		    };
		  }();

		  var EffectsExpressionInterface = function () {
		    var ob = {
		      createEffectsInterface: createEffectsInterface
		    };

		    function createEffectsInterface(elem, propertyGroup) {
		      if (elem.effectsManager) {
		        var effectElements = [];
		        var effectsData = elem.data.ef;
		        var i;
		        var len = elem.effectsManager.effectElements.length;

		        for (i = 0; i < len; i += 1) {
		          effectElements.push(createGroupInterface(effectsData[i], elem.effectsManager.effectElements[i], propertyGroup, elem));
		        }

		        var effects = elem.data.ef || [];

		        var groupInterface = function groupInterface(name) {
		          i = 0;
		          len = effects.length;

		          while (i < len) {
		            if (name === effects[i].nm || name === effects[i].mn || name === effects[i].ix) {
		              return effectElements[i];
		            }

		            i += 1;
		          }

		          return null;
		        };

		        Object.defineProperty(groupInterface, 'numProperties', {
		          get: function get() {
		            return effects.length;
		          }
		        });
		        return groupInterface;
		      }

		      return null;
		    }

		    function createGroupInterface(data, elements, propertyGroup, elem) {
		      function groupInterface(name) {
		        var effects = data.ef;
		        var i = 0;
		        var len = effects.length;

		        while (i < len) {
		          if (name === effects[i].nm || name === effects[i].mn || name === effects[i].ix) {
		            if (effects[i].ty === 5) {
		              return effectElements[i];
		            }

		            return effectElements[i]();
		          }

		          i += 1;
		        }

		        throw new Error();
		      }

		      var _propertyGroup = propertyGroupFactory(groupInterface, propertyGroup);

		      var effectElements = [];
		      var i;
		      var len = data.ef.length;

		      for (i = 0; i < len; i += 1) {
		        if (data.ef[i].ty === 5) {
		          effectElements.push(createGroupInterface(data.ef[i], elements.effectElements[i], elements.effectElements[i].propertyGroup, elem));
		        } else {
		          effectElements.push(createValueInterface(elements.effectElements[i], data.ef[i].ty, elem, _propertyGroup));
		        }
		      }

		      if (data.mn === 'ADBE Color Control') {
		        Object.defineProperty(groupInterface, 'color', {
		          get: function get() {
		            return effectElements[0]();
		          }
		        });
		      }

		      Object.defineProperties(groupInterface, {
		        numProperties: {
		          get: function get() {
		            return data.np;
		          }
		        },
		        _name: {
		          value: data.nm
		        },
		        propertyGroup: {
		          value: _propertyGroup
		        }
		      });
		      groupInterface.enabled = data.en !== 0;
		      groupInterface.active = groupInterface.enabled;
		      return groupInterface;
		    }

		    function createValueInterface(element, type, elem, propertyGroup) {
		      var expressionProperty = ExpressionPropertyInterface(element.p);

		      function interfaceFunction() {
		        if (type === 10) {
		          return elem.comp.compInterface(element.p.v);
		        }

		        return expressionProperty();
		      }

		      if (element.p.setGroupProperty) {
		        element.p.setGroupProperty(PropertyInterface('', propertyGroup));
		      }

		      return interfaceFunction;
		    }

		    return ob;
		  }();

		  var ShapePathInterface = function () {
		    return function pathInterfaceFactory(shape, view, propertyGroup) {
		      var prop = view.sh;

		      function interfaceFunction(val) {
		        if (val === 'Shape' || val === 'shape' || val === 'Path' || val === 'path' || val === 'ADBE Vector Shape' || val === 2) {
		          return interfaceFunction.path;
		        }

		        return null;
		      }

		      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

		      prop.setGroupProperty(PropertyInterface('Path', _propertyGroup));
		      Object.defineProperties(interfaceFunction, {
		        path: {
		          get: function get() {
		            if (prop.k) {
		              prop.getValue();
		            }

		            return prop;
		          }
		        },
		        shape: {
		          get: function get() {
		            if (prop.k) {
		              prop.getValue();
		            }

		            return prop;
		          }
		        },
		        _name: {
		          value: shape.nm
		        },
		        ix: {
		          value: shape.ix
		        },
		        propertyIndex: {
		          value: shape.ix
		        },
		        mn: {
		          value: shape.mn
		        },
		        propertyGroup: {
		          value: propertyGroup
		        }
		      });
		      return interfaceFunction;
		    };
		  }();

		  var ShapeExpressionInterface = function () {
		    function iterateElements(shapes, view, propertyGroup) {
		      var arr = [];
		      var i;
		      var len = shapes ? shapes.length : 0;

		      for (i = 0; i < len; i += 1) {
		        if (shapes[i].ty === 'gr') {
		          arr.push(groupInterfaceFactory(shapes[i], view[i], propertyGroup));
		        } else if (shapes[i].ty === 'fl') {
		          arr.push(fillInterfaceFactory(shapes[i], view[i], propertyGroup));
		        } else if (shapes[i].ty === 'st') {
		          arr.push(strokeInterfaceFactory(shapes[i], view[i], propertyGroup));
		        } else if (shapes[i].ty === 'tm') {
		          arr.push(trimInterfaceFactory(shapes[i], view[i], propertyGroup));
		        } else if (shapes[i].ty === 'tr') ; else if (shapes[i].ty === 'el') {
		          arr.push(ellipseInterfaceFactory(shapes[i], view[i], propertyGroup));
		        } else if (shapes[i].ty === 'sr') {
		          arr.push(starInterfaceFactory(shapes[i], view[i], propertyGroup));
		        } else if (shapes[i].ty === 'sh') {
		          arr.push(ShapePathInterface(shapes[i], view[i], propertyGroup));
		        } else if (shapes[i].ty === 'rc') {
		          arr.push(rectInterfaceFactory(shapes[i], view[i], propertyGroup));
		        } else if (shapes[i].ty === 'rd') {
		          arr.push(roundedInterfaceFactory(shapes[i], view[i], propertyGroup));
		        } else if (shapes[i].ty === 'rp') {
		          arr.push(repeaterInterfaceFactory(shapes[i], view[i], propertyGroup));
		        } else if (shapes[i].ty === 'gf') {
		          arr.push(gradientFillInterfaceFactory(shapes[i], view[i], propertyGroup));
		        } else {
		          arr.push(defaultInterfaceFactory(shapes[i], view[i]));
		        }
		      }

		      return arr;
		    }

		    function contentsInterfaceFactory(shape, view, propertyGroup) {
		      var interfaces;

		      var interfaceFunction = function _interfaceFunction(value) {
		        var i = 0;
		        var len = interfaces.length;

		        while (i < len) {
		          if (interfaces[i]._name === value || interfaces[i].mn === value || interfaces[i].propertyIndex === value || interfaces[i].ix === value || interfaces[i].ind === value) {
		            return interfaces[i];
		          }

		          i += 1;
		        }

		        if (typeof value === 'number') {
		          return interfaces[value - 1];
		        }

		        return null;
		      };

		      interfaceFunction.propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
		      interfaces = iterateElements(shape.it, view.it, interfaceFunction.propertyGroup);
		      interfaceFunction.numProperties = interfaces.length;
		      var transformInterface = transformInterfaceFactory(shape.it[shape.it.length - 1], view.it[view.it.length - 1], interfaceFunction.propertyGroup);
		      interfaceFunction.transform = transformInterface;
		      interfaceFunction.propertyIndex = shape.cix;
		      interfaceFunction._name = shape.nm;
		      return interfaceFunction;
		    }

		    function groupInterfaceFactory(shape, view, propertyGroup) {
		      var interfaceFunction = function _interfaceFunction(value) {
		        switch (value) {
		          case 'ADBE Vectors Group':
		          case 'Contents':
		          case 2:
		            return interfaceFunction.content;
		          // Not necessary for now. Keeping them here in case a new case appears
		          // case 'ADBE Vector Transform Group':
		          // case 3:

		          default:
		            return interfaceFunction.transform;
		        }
		      };

		      interfaceFunction.propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
		      var content = contentsInterfaceFactory(shape, view, interfaceFunction.propertyGroup);
		      var transformInterface = transformInterfaceFactory(shape.it[shape.it.length - 1], view.it[view.it.length - 1], interfaceFunction.propertyGroup);
		      interfaceFunction.content = content;
		      interfaceFunction.transform = transformInterface;
		      Object.defineProperty(interfaceFunction, '_name', {
		        get: function get() {
		          return shape.nm;
		        }
		      }); // interfaceFunction.content = interfaceFunction;

		      interfaceFunction.numProperties = shape.np;
		      interfaceFunction.propertyIndex = shape.ix;
		      interfaceFunction.nm = shape.nm;
		      interfaceFunction.mn = shape.mn;
		      return interfaceFunction;
		    }

		    function fillInterfaceFactory(shape, view, propertyGroup) {
		      function interfaceFunction(val) {
		        if (val === 'Color' || val === 'color') {
		          return interfaceFunction.color;
		        }

		        if (val === 'Opacity' || val === 'opacity') {
		          return interfaceFunction.opacity;
		        }

		        return null;
		      }

		      Object.defineProperties(interfaceFunction, {
		        color: {
		          get: ExpressionPropertyInterface(view.c)
		        },
		        opacity: {
		          get: ExpressionPropertyInterface(view.o)
		        },
		        _name: {
		          value: shape.nm
		        },
		        mn: {
		          value: shape.mn
		        }
		      });
		      view.c.setGroupProperty(PropertyInterface('Color', propertyGroup));
		      view.o.setGroupProperty(PropertyInterface('Opacity', propertyGroup));
		      return interfaceFunction;
		    }

		    function gradientFillInterfaceFactory(shape, view, propertyGroup) {
		      function interfaceFunction(val) {
		        if (val === 'Start Point' || val === 'start point') {
		          return interfaceFunction.startPoint;
		        }

		        if (val === 'End Point' || val === 'end point') {
		          return interfaceFunction.endPoint;
		        }

		        if (val === 'Opacity' || val === 'opacity') {
		          return interfaceFunction.opacity;
		        }

		        return null;
		      }

		      Object.defineProperties(interfaceFunction, {
		        startPoint: {
		          get: ExpressionPropertyInterface(view.s)
		        },
		        endPoint: {
		          get: ExpressionPropertyInterface(view.e)
		        },
		        opacity: {
		          get: ExpressionPropertyInterface(view.o)
		        },
		        type: {
		          get: function get() {
		            return 'a';
		          }
		        },
		        _name: {
		          value: shape.nm
		        },
		        mn: {
		          value: shape.mn
		        }
		      });
		      view.s.setGroupProperty(PropertyInterface('Start Point', propertyGroup));
		      view.e.setGroupProperty(PropertyInterface('End Point', propertyGroup));
		      view.o.setGroupProperty(PropertyInterface('Opacity', propertyGroup));
		      return interfaceFunction;
		    }

		    function defaultInterfaceFactory() {
		      function interfaceFunction() {
		        return null;
		      }

		      return interfaceFunction;
		    }

		    function strokeInterfaceFactory(shape, view, propertyGroup) {
		      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

		      var _dashPropertyGroup = propertyGroupFactory(dashOb, _propertyGroup);

		      function addPropertyToDashOb(i) {
		        Object.defineProperty(dashOb, shape.d[i].nm, {
		          get: ExpressionPropertyInterface(view.d.dataProps[i].p)
		        });
		      }

		      var i;
		      var len = shape.d ? shape.d.length : 0;
		      var dashOb = {};

		      for (i = 0; i < len; i += 1) {
		        addPropertyToDashOb(i);
		        view.d.dataProps[i].p.setGroupProperty(_dashPropertyGroup);
		      }

		      function interfaceFunction(val) {
		        if (val === 'Color' || val === 'color') {
		          return interfaceFunction.color;
		        }

		        if (val === 'Opacity' || val === 'opacity') {
		          return interfaceFunction.opacity;
		        }

		        if (val === 'Stroke Width' || val === 'stroke width') {
		          return interfaceFunction.strokeWidth;
		        }

		        return null;
		      }

		      Object.defineProperties(interfaceFunction, {
		        color: {
		          get: ExpressionPropertyInterface(view.c)
		        },
		        opacity: {
		          get: ExpressionPropertyInterface(view.o)
		        },
		        strokeWidth: {
		          get: ExpressionPropertyInterface(view.w)
		        },
		        dash: {
		          get: function get() {
		            return dashOb;
		          }
		        },
		        _name: {
		          value: shape.nm
		        },
		        mn: {
		          value: shape.mn
		        }
		      });
		      view.c.setGroupProperty(PropertyInterface('Color', _propertyGroup));
		      view.o.setGroupProperty(PropertyInterface('Opacity', _propertyGroup));
		      view.w.setGroupProperty(PropertyInterface('Stroke Width', _propertyGroup));
		      return interfaceFunction;
		    }

		    function trimInterfaceFactory(shape, view, propertyGroup) {
		      function interfaceFunction(val) {
		        if (val === shape.e.ix || val === 'End' || val === 'end') {
		          return interfaceFunction.end;
		        }

		        if (val === shape.s.ix) {
		          return interfaceFunction.start;
		        }

		        if (val === shape.o.ix) {
		          return interfaceFunction.offset;
		        }

		        return null;
		      }

		      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

		      interfaceFunction.propertyIndex = shape.ix;
		      view.s.setGroupProperty(PropertyInterface('Start', _propertyGroup));
		      view.e.setGroupProperty(PropertyInterface('End', _propertyGroup));
		      view.o.setGroupProperty(PropertyInterface('Offset', _propertyGroup));
		      interfaceFunction.propertyIndex = shape.ix;
		      interfaceFunction.propertyGroup = propertyGroup;
		      Object.defineProperties(interfaceFunction, {
		        start: {
		          get: ExpressionPropertyInterface(view.s)
		        },
		        end: {
		          get: ExpressionPropertyInterface(view.e)
		        },
		        offset: {
		          get: ExpressionPropertyInterface(view.o)
		        },
		        _name: {
		          value: shape.nm
		        }
		      });
		      interfaceFunction.mn = shape.mn;
		      return interfaceFunction;
		    }

		    function transformInterfaceFactory(shape, view, propertyGroup) {
		      function interfaceFunction(value) {
		        if (shape.a.ix === value || value === 'Anchor Point') {
		          return interfaceFunction.anchorPoint;
		        }

		        if (shape.o.ix === value || value === 'Opacity') {
		          return interfaceFunction.opacity;
		        }

		        if (shape.p.ix === value || value === 'Position') {
		          return interfaceFunction.position;
		        }

		        if (shape.r.ix === value || value === 'Rotation' || value === 'ADBE Vector Rotation') {
		          return interfaceFunction.rotation;
		        }

		        if (shape.s.ix === value || value === 'Scale') {
		          return interfaceFunction.scale;
		        }

		        if (shape.sk && shape.sk.ix === value || value === 'Skew') {
		          return interfaceFunction.skew;
		        }

		        if (shape.sa && shape.sa.ix === value || value === 'Skew Axis') {
		          return interfaceFunction.skewAxis;
		        }

		        return null;
		      }

		      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

		      view.transform.mProps.o.setGroupProperty(PropertyInterface('Opacity', _propertyGroup));
		      view.transform.mProps.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
		      view.transform.mProps.a.setGroupProperty(PropertyInterface('Anchor Point', _propertyGroup));
		      view.transform.mProps.s.setGroupProperty(PropertyInterface('Scale', _propertyGroup));
		      view.transform.mProps.r.setGroupProperty(PropertyInterface('Rotation', _propertyGroup));

		      if (view.transform.mProps.sk) {
		        view.transform.mProps.sk.setGroupProperty(PropertyInterface('Skew', _propertyGroup));
		        view.transform.mProps.sa.setGroupProperty(PropertyInterface('Skew Angle', _propertyGroup));
		      }

		      view.transform.op.setGroupProperty(PropertyInterface('Opacity', _propertyGroup));
		      Object.defineProperties(interfaceFunction, {
		        opacity: {
		          get: ExpressionPropertyInterface(view.transform.mProps.o)
		        },
		        position: {
		          get: ExpressionPropertyInterface(view.transform.mProps.p)
		        },
		        anchorPoint: {
		          get: ExpressionPropertyInterface(view.transform.mProps.a)
		        },
		        scale: {
		          get: ExpressionPropertyInterface(view.transform.mProps.s)
		        },
		        rotation: {
		          get: ExpressionPropertyInterface(view.transform.mProps.r)
		        },
		        skew: {
		          get: ExpressionPropertyInterface(view.transform.mProps.sk)
		        },
		        skewAxis: {
		          get: ExpressionPropertyInterface(view.transform.mProps.sa)
		        },
		        _name: {
		          value: shape.nm
		        }
		      });
		      interfaceFunction.ty = 'tr';
		      interfaceFunction.mn = shape.mn;
		      interfaceFunction.propertyGroup = propertyGroup;
		      return interfaceFunction;
		    }

		    function ellipseInterfaceFactory(shape, view, propertyGroup) {
		      function interfaceFunction(value) {
		        if (shape.p.ix === value) {
		          return interfaceFunction.position;
		        }

		        if (shape.s.ix === value) {
		          return interfaceFunction.size;
		        }

		        return null;
		      }

		      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

		      interfaceFunction.propertyIndex = shape.ix;
		      var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
		      prop.s.setGroupProperty(PropertyInterface('Size', _propertyGroup));
		      prop.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
		      Object.defineProperties(interfaceFunction, {
		        size: {
		          get: ExpressionPropertyInterface(prop.s)
		        },
		        position: {
		          get: ExpressionPropertyInterface(prop.p)
		        },
		        _name: {
		          value: shape.nm
		        }
		      });
		      interfaceFunction.mn = shape.mn;
		      return interfaceFunction;
		    }

		    function starInterfaceFactory(shape, view, propertyGroup) {
		      function interfaceFunction(value) {
		        if (shape.p.ix === value) {
		          return interfaceFunction.position;
		        }

		        if (shape.r.ix === value) {
		          return interfaceFunction.rotation;
		        }

		        if (shape.pt.ix === value) {
		          return interfaceFunction.points;
		        }

		        if (shape.or.ix === value || value === 'ADBE Vector Star Outer Radius') {
		          return interfaceFunction.outerRadius;
		        }

		        if (shape.os.ix === value) {
		          return interfaceFunction.outerRoundness;
		        }

		        if (shape.ir && (shape.ir.ix === value || value === 'ADBE Vector Star Inner Radius')) {
		          return interfaceFunction.innerRadius;
		        }

		        if (shape.is && shape.is.ix === value) {
		          return interfaceFunction.innerRoundness;
		        }

		        return null;
		      }

		      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

		      var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
		      interfaceFunction.propertyIndex = shape.ix;
		      prop.or.setGroupProperty(PropertyInterface('Outer Radius', _propertyGroup));
		      prop.os.setGroupProperty(PropertyInterface('Outer Roundness', _propertyGroup));
		      prop.pt.setGroupProperty(PropertyInterface('Points', _propertyGroup));
		      prop.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
		      prop.r.setGroupProperty(PropertyInterface('Rotation', _propertyGroup));

		      if (shape.ir) {
		        prop.ir.setGroupProperty(PropertyInterface('Inner Radius', _propertyGroup));
		        prop.is.setGroupProperty(PropertyInterface('Inner Roundness', _propertyGroup));
		      }

		      Object.defineProperties(interfaceFunction, {
		        position: {
		          get: ExpressionPropertyInterface(prop.p)
		        },
		        rotation: {
		          get: ExpressionPropertyInterface(prop.r)
		        },
		        points: {
		          get: ExpressionPropertyInterface(prop.pt)
		        },
		        outerRadius: {
		          get: ExpressionPropertyInterface(prop.or)
		        },
		        outerRoundness: {
		          get: ExpressionPropertyInterface(prop.os)
		        },
		        innerRadius: {
		          get: ExpressionPropertyInterface(prop.ir)
		        },
		        innerRoundness: {
		          get: ExpressionPropertyInterface(prop.is)
		        },
		        _name: {
		          value: shape.nm
		        }
		      });
		      interfaceFunction.mn = shape.mn;
		      return interfaceFunction;
		    }

		    function rectInterfaceFactory(shape, view, propertyGroup) {
		      function interfaceFunction(value) {
		        if (shape.p.ix === value) {
		          return interfaceFunction.position;
		        }

		        if (shape.r.ix === value) {
		          return interfaceFunction.roundness;
		        }

		        if (shape.s.ix === value || value === 'Size' || value === 'ADBE Vector Rect Size') {
		          return interfaceFunction.size;
		        }

		        return null;
		      }

		      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

		      var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
		      interfaceFunction.propertyIndex = shape.ix;
		      prop.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
		      prop.s.setGroupProperty(PropertyInterface('Size', _propertyGroup));
		      prop.r.setGroupProperty(PropertyInterface('Rotation', _propertyGroup));
		      Object.defineProperties(interfaceFunction, {
		        position: {
		          get: ExpressionPropertyInterface(prop.p)
		        },
		        roundness: {
		          get: ExpressionPropertyInterface(prop.r)
		        },
		        size: {
		          get: ExpressionPropertyInterface(prop.s)
		        },
		        _name: {
		          value: shape.nm
		        }
		      });
		      interfaceFunction.mn = shape.mn;
		      return interfaceFunction;
		    }

		    function roundedInterfaceFactory(shape, view, propertyGroup) {
		      function interfaceFunction(value) {
		        if (shape.r.ix === value || value === 'Round Corners 1') {
		          return interfaceFunction.radius;
		        }

		        return null;
		      }

		      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

		      var prop = view;
		      interfaceFunction.propertyIndex = shape.ix;
		      prop.rd.setGroupProperty(PropertyInterface('Radius', _propertyGroup));
		      Object.defineProperties(interfaceFunction, {
		        radius: {
		          get: ExpressionPropertyInterface(prop.rd)
		        },
		        _name: {
		          value: shape.nm
		        }
		      });
		      interfaceFunction.mn = shape.mn;
		      return interfaceFunction;
		    }

		    function repeaterInterfaceFactory(shape, view, propertyGroup) {
		      function interfaceFunction(value) {
		        if (shape.c.ix === value || value === 'Copies') {
		          return interfaceFunction.copies;
		        }

		        if (shape.o.ix === value || value === 'Offset') {
		          return interfaceFunction.offset;
		        }

		        return null;
		      }

		      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

		      var prop = view;
		      interfaceFunction.propertyIndex = shape.ix;
		      prop.c.setGroupProperty(PropertyInterface('Copies', _propertyGroup));
		      prop.o.setGroupProperty(PropertyInterface('Offset', _propertyGroup));
		      Object.defineProperties(interfaceFunction, {
		        copies: {
		          get: ExpressionPropertyInterface(prop.c)
		        },
		        offset: {
		          get: ExpressionPropertyInterface(prop.o)
		        },
		        _name: {
		          value: shape.nm
		        }
		      });
		      interfaceFunction.mn = shape.mn;
		      return interfaceFunction;
		    }

		    return function (shapes, view, propertyGroup) {
		      var interfaces;

		      function _interfaceFunction(value) {
		        if (typeof value === 'number') {
		          value = value === undefined ? 1 : value;

		          if (value === 0) {
		            return propertyGroup;
		          }

		          return interfaces[value - 1];
		        }

		        var i = 0;
		        var len = interfaces.length;

		        while (i < len) {
		          if (interfaces[i]._name === value) {
		            return interfaces[i];
		          }

		          i += 1;
		        }

		        return null;
		      }

		      function parentGroupWrapper() {
		        return propertyGroup;
		      }

		      _interfaceFunction.propertyGroup = propertyGroupFactory(_interfaceFunction, parentGroupWrapper);
		      interfaces = iterateElements(shapes, view, _interfaceFunction.propertyGroup);
		      _interfaceFunction.numProperties = interfaces.length;
		      _interfaceFunction._name = 'Contents';
		      return _interfaceFunction;
		    };
		  }();

		  var TextExpressionInterface = function () {
		    return function (elem) {
		      var _sourceText;

		      function _thisLayerFunction(name) {
		        switch (name) {
		          case 'ADBE Text Document':
		            return _thisLayerFunction.sourceText;

		          default:
		            return null;
		        }
		      }

		      Object.defineProperty(_thisLayerFunction, 'sourceText', {
		        get: function get() {
		          elem.textProperty.getValue();
		          var stringValue = elem.textProperty.currentData.t;

		          if (!_sourceText || stringValue !== _sourceText.value) {
		            _sourceText = new String(stringValue); // eslint-disable-line no-new-wrappers
		            // If stringValue is an empty string, eval returns undefined, so it has to be returned as a String primitive

		            _sourceText.value = stringValue || new String(stringValue); // eslint-disable-line no-new-wrappers

		            Object.defineProperty(_sourceText, 'style', {
		              get: function get() {
		                return {
		                  fillColor: elem.textProperty.currentData.fc
		                };
		              }
		            });
		          }

		          return _sourceText;
		        }
		      });
		      return _thisLayerFunction;
		    };
		  }();

		  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

		  var FootageInterface = function () {
		    var outlineInterfaceFactory = function outlineInterfaceFactory(elem) {
		      var currentPropertyName = '';
		      var currentProperty = elem.getFootageData();

		      function init() {
		        currentPropertyName = '';
		        currentProperty = elem.getFootageData();
		        return searchProperty;
		      }

		      function searchProperty(value) {
		        if (currentProperty[value]) {
		          currentPropertyName = value;
		          currentProperty = currentProperty[value];

		          if (_typeof(currentProperty) === 'object') {
		            return searchProperty;
		          }

		          return currentProperty;
		        }

		        var propertyNameIndex = value.indexOf(currentPropertyName);

		        if (propertyNameIndex !== -1) {
		          var index = parseInt(value.substr(propertyNameIndex + currentPropertyName.length), 10);
		          currentProperty = currentProperty[index];

		          if (_typeof(currentProperty) === 'object') {
		            return searchProperty;
		          }

		          return currentProperty;
		        }

		        return '';
		      }

		      return init;
		    };

		    var dataInterfaceFactory = function dataInterfaceFactory(elem) {
		      function interfaceFunction(value) {
		        if (value === 'Outline') {
		          return interfaceFunction.outlineInterface();
		        }

		        return null;
		      }

		      interfaceFunction._name = 'Outline';
		      interfaceFunction.outlineInterface = outlineInterfaceFactory(elem);
		      return interfaceFunction;
		    };

		    return function (elem) {
		      function _interfaceFunction(value) {
		        if (value === 'Data') {
		          return _interfaceFunction.dataInterface;
		        }

		        return null;
		      }

		      _interfaceFunction._name = 'Data';
		      _interfaceFunction.dataInterface = dataInterfaceFactory(elem);
		      return _interfaceFunction;
		    };
		  }();

		  var interfaces = {
		    layer: LayerExpressionInterface,
		    effects: EffectsExpressionInterface,
		    comp: CompExpressionInterface,
		    shape: ShapeExpressionInterface,
		    text: TextExpressionInterface,
		    footage: FootageInterface
		  };

		  function getInterface(type) {
		    return interfaces[type] || null;
		  }

		  var expressionHelpers = function () {
		    function searchExpressions(elem, data, prop) {
		      if (data.x) {
		        prop.k = true;
		        prop.x = true;
		        prop.initiateExpression = ExpressionManager.initiateExpression;
		        prop.effectsSequence.push(prop.initiateExpression(elem, data, prop).bind(prop));
		      }
		    }

		    function getValueAtTime(frameNum) {
		      frameNum *= this.elem.globalData.frameRate;
		      frameNum -= this.offsetTime;

		      if (frameNum !== this._cachingAtTime.lastFrame) {
		        this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < frameNum ? this._cachingAtTime.lastIndex : 0;
		        this._cachingAtTime.value = this.interpolateValue(frameNum, this._cachingAtTime);
		        this._cachingAtTime.lastFrame = frameNum;
		      }

		      return this._cachingAtTime.value;
		    }

		    function getSpeedAtTime(frameNum) {
		      var delta = -0.01;
		      var v1 = this.getValueAtTime(frameNum);
		      var v2 = this.getValueAtTime(frameNum + delta);
		      var speed = 0;

		      if (v1.length) {
		        var i;

		        for (i = 0; i < v1.length; i += 1) {
		          speed += Math.pow(v2[i] - v1[i], 2);
		        }

		        speed = Math.sqrt(speed) * 100;
		      } else {
		        speed = 0;
		      }

		      return speed;
		    }

		    function getVelocityAtTime(frameNum) {
		      if (this.vel !== undefined) {
		        return this.vel;
		      }

		      var delta = -0.001; // frameNum += this.elem.data.st;

		      var v1 = this.getValueAtTime(frameNum);
		      var v2 = this.getValueAtTime(frameNum + delta);
		      var velocity;

		      if (v1.length) {
		        velocity = createTypedArray('float32', v1.length);
		        var i;

		        for (i = 0; i < v1.length; i += 1) {
		          // removing frameRate
		          // if needed, don't add it here
		          // velocity[i] = this.elem.globalData.frameRate*((v2[i] - v1[i])/delta);
		          velocity[i] = (v2[i] - v1[i]) / delta;
		        }
		      } else {
		        velocity = (v2 - v1) / delta;
		      }

		      return velocity;
		    }

		    function getStaticValueAtTime() {
		      return this.pv;
		    }

		    function setGroupProperty(propertyGroup) {
		      this.propertyGroup = propertyGroup;
		    }

		    return {
		      searchExpressions: searchExpressions,
		      getSpeedAtTime: getSpeedAtTime,
		      getVelocityAtTime: getVelocityAtTime,
		      getValueAtTime: getValueAtTime,
		      getStaticValueAtTime: getStaticValueAtTime,
		      setGroupProperty: setGroupProperty
		    };
		  }();

		  function addPropertyDecorator() {
		    function loopOut(type, duration, durationFlag) {
		      if (!this.k || !this.keyframes) {
		        return this.pv;
		      }

		      type = type ? type.toLowerCase() : '';
		      var currentFrame = this.comp.renderedFrame;
		      var keyframes = this.keyframes;
		      var lastKeyFrame = keyframes[keyframes.length - 1].t;

		      if (currentFrame <= lastKeyFrame) {
		        return this.pv;
		      }

		      var cycleDuration;
		      var firstKeyFrame;

		      if (!durationFlag) {
		        if (!duration || duration > keyframes.length - 1) {
		          duration = keyframes.length - 1;
		        }

		        firstKeyFrame = keyframes[keyframes.length - 1 - duration].t;
		        cycleDuration = lastKeyFrame - firstKeyFrame;
		      } else {
		        if (!duration) {
		          cycleDuration = Math.max(0, lastKeyFrame - this.elem.data.ip);
		        } else {
		          cycleDuration = Math.abs(lastKeyFrame - this.elem.comp.globalData.frameRate * duration);
		        }

		        firstKeyFrame = lastKeyFrame - cycleDuration;
		      }

		      var i;
		      var len;
		      var ret;

		      if (type === 'pingpong') {
		        var iterations = Math.floor((currentFrame - firstKeyFrame) / cycleDuration);

		        if (iterations % 2 !== 0) {
		          return this.getValueAtTime((cycleDuration - (currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0); // eslint-disable-line
		        }
		      } else if (type === 'offset') {
		        var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
		        var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
		        var current = this.getValueAtTime(((currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0); // eslint-disable-line

		        var repeats = Math.floor((currentFrame - firstKeyFrame) / cycleDuration);

		        if (this.pv.length) {
		          ret = new Array(initV.length);
		          len = ret.length;

		          for (i = 0; i < len; i += 1) {
		            ret[i] = (endV[i] - initV[i]) * repeats + current[i];
		          }

		          return ret;
		        }

		        return (endV - initV) * repeats + current;
		      } else if (type === 'continue') {
		        var lastValue = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
		        var nextLastValue = this.getValueAtTime((lastKeyFrame - 0.001) / this.comp.globalData.frameRate, 0);

		        if (this.pv.length) {
		          ret = new Array(lastValue.length);
		          len = ret.length;

		          for (i = 0; i < len; i += 1) {
		            ret[i] = lastValue[i] + (lastValue[i] - nextLastValue[i]) * ((currentFrame - lastKeyFrame) / this.comp.globalData.frameRate) / 0.0005; // eslint-disable-line
		          }

		          return ret;
		        }

		        return lastValue + (lastValue - nextLastValue) * ((currentFrame - lastKeyFrame) / 0.001);
		      }

		      return this.getValueAtTime(((currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0); // eslint-disable-line
		    }

		    function loopIn(type, duration, durationFlag) {
		      if (!this.k) {
		        return this.pv;
		      }

		      type = type ? type.toLowerCase() : '';
		      var currentFrame = this.comp.renderedFrame;
		      var keyframes = this.keyframes;
		      var firstKeyFrame = keyframes[0].t;

		      if (currentFrame >= firstKeyFrame) {
		        return this.pv;
		      }

		      var cycleDuration;
		      var lastKeyFrame;

		      if (!durationFlag) {
		        if (!duration || duration > keyframes.length - 1) {
		          duration = keyframes.length - 1;
		        }

		        lastKeyFrame = keyframes[duration].t;
		        cycleDuration = lastKeyFrame - firstKeyFrame;
		      } else {
		        if (!duration) {
		          cycleDuration = Math.max(0, this.elem.data.op - firstKeyFrame);
		        } else {
		          cycleDuration = Math.abs(this.elem.comp.globalData.frameRate * duration);
		        }

		        lastKeyFrame = firstKeyFrame + cycleDuration;
		      }

		      var i;
		      var len;
		      var ret;

		      if (type === 'pingpong') {
		        var iterations = Math.floor((firstKeyFrame - currentFrame) / cycleDuration);

		        if (iterations % 2 === 0) {
		          return this.getValueAtTime(((firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0); // eslint-disable-line
		        }
		      } else if (type === 'offset') {
		        var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
		        var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
		        var current = this.getValueAtTime((cycleDuration - (firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0);
		        var repeats = Math.floor((firstKeyFrame - currentFrame) / cycleDuration) + 1;

		        if (this.pv.length) {
		          ret = new Array(initV.length);
		          len = ret.length;

		          for (i = 0; i < len; i += 1) {
		            ret[i] = current[i] - (endV[i] - initV[i]) * repeats;
		          }

		          return ret;
		        }

		        return current - (endV - initV) * repeats;
		      } else if (type === 'continue') {
		        var firstValue = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
		        var nextFirstValue = this.getValueAtTime((firstKeyFrame + 0.001) / this.comp.globalData.frameRate, 0);

		        if (this.pv.length) {
		          ret = new Array(firstValue.length);
		          len = ret.length;

		          for (i = 0; i < len; i += 1) {
		            ret[i] = firstValue[i] + (firstValue[i] - nextFirstValue[i]) * (firstKeyFrame - currentFrame) / 0.001;
		          }

		          return ret;
		        }

		        return firstValue + (firstValue - nextFirstValue) * (firstKeyFrame - currentFrame) / 0.001;
		      }

		      return this.getValueAtTime((cycleDuration - ((firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame)) / this.comp.globalData.frameRate, 0); // eslint-disable-line
		    }

		    function smooth(width, samples) {
		      if (!this.k) {
		        return this.pv;
		      }

		      width = (width || 0.4) * 0.5;
		      samples = Math.floor(samples || 5);

		      if (samples <= 1) {
		        return this.pv;
		      }

		      var currentTime = this.comp.renderedFrame / this.comp.globalData.frameRate;
		      var initFrame = currentTime - width;
		      var endFrame = currentTime + width;
		      var sampleFrequency = samples > 1 ? (endFrame - initFrame) / (samples - 1) : 1;
		      var i = 0;
		      var j = 0;
		      var value;

		      if (this.pv.length) {
		        value = createTypedArray('float32', this.pv.length);
		      } else {
		        value = 0;
		      }

		      var sampleValue;

		      while (i < samples) {
		        sampleValue = this.getValueAtTime(initFrame + i * sampleFrequency);

		        if (this.pv.length) {
		          for (j = 0; j < this.pv.length; j += 1) {
		            value[j] += sampleValue[j];
		          }
		        } else {
		          value += sampleValue;
		        }

		        i += 1;
		      }

		      if (this.pv.length) {
		        for (j = 0; j < this.pv.length; j += 1) {
		          value[j] /= samples;
		        }
		      } else {
		        value /= samples;
		      }

		      return value;
		    }

		    function getTransformValueAtTime(time) {
		      if (!this._transformCachingAtTime) {
		        this._transformCachingAtTime = {
		          v: new Matrix()
		        };
		      } /// /


		      var matrix = this._transformCachingAtTime.v;
		      matrix.cloneFromProps(this.pre.props);

		      if (this.appliedTransformations < 1) {
		        var anchor = this.a.getValueAtTime(time);
		        matrix.translate(-anchor[0] * this.a.mult, -anchor[1] * this.a.mult, anchor[2] * this.a.mult);
		      }

		      if (this.appliedTransformations < 2) {
		        var scale = this.s.getValueAtTime(time);
		        matrix.scale(scale[0] * this.s.mult, scale[1] * this.s.mult, scale[2] * this.s.mult);
		      }

		      if (this.sk && this.appliedTransformations < 3) {
		        var skew = this.sk.getValueAtTime(time);
		        var skewAxis = this.sa.getValueAtTime(time);
		        matrix.skewFromAxis(-skew * this.sk.mult, skewAxis * this.sa.mult);
		      }

		      if (this.r && this.appliedTransformations < 4) {
		        var rotation = this.r.getValueAtTime(time);
		        matrix.rotate(-rotation * this.r.mult);
		      } else if (!this.r && this.appliedTransformations < 4) {
		        var rotationZ = this.rz.getValueAtTime(time);
		        var rotationY = this.ry.getValueAtTime(time);
		        var rotationX = this.rx.getValueAtTime(time);
		        var orientation = this.or.getValueAtTime(time);
		        matrix.rotateZ(-rotationZ * this.rz.mult).rotateY(rotationY * this.ry.mult).rotateX(rotationX * this.rx.mult).rotateZ(-orientation[2] * this.or.mult).rotateY(orientation[1] * this.or.mult).rotateX(orientation[0] * this.or.mult);
		      }

		      if (this.data.p && this.data.p.s) {
		        var positionX = this.px.getValueAtTime(time);
		        var positionY = this.py.getValueAtTime(time);

		        if (this.data.p.z) {
		          var positionZ = this.pz.getValueAtTime(time);
		          matrix.translate(positionX * this.px.mult, positionY * this.py.mult, -positionZ * this.pz.mult);
		        } else {
		          matrix.translate(positionX * this.px.mult, positionY * this.py.mult, 0);
		        }
		      } else {
		        var position = this.p.getValueAtTime(time);
		        matrix.translate(position[0] * this.p.mult, position[1] * this.p.mult, -position[2] * this.p.mult);
		      }

		      return matrix; /// /
		    }

		    function getTransformStaticValueAtTime() {
		      return this.v.clone(new Matrix());
		    }

		    var getTransformProperty = TransformPropertyFactory.getTransformProperty;

		    TransformPropertyFactory.getTransformProperty = function (elem, data, container) {
		      var prop = getTransformProperty(elem, data, container);

		      if (prop.dynamicProperties.length) {
		        prop.getValueAtTime = getTransformValueAtTime.bind(prop);
		      } else {
		        prop.getValueAtTime = getTransformStaticValueAtTime.bind(prop);
		      }

		      prop.setGroupProperty = expressionHelpers.setGroupProperty;
		      return prop;
		    };

		    var propertyGetProp = PropertyFactory.getProp;

		    PropertyFactory.getProp = function (elem, data, type, mult, container) {
		      var prop = propertyGetProp(elem, data, type, mult, container); // prop.getVelocityAtTime = getVelocityAtTime;
		      // prop.loopOut = loopOut;
		      // prop.loopIn = loopIn;

		      if (prop.kf) {
		        prop.getValueAtTime = expressionHelpers.getValueAtTime.bind(prop);
		      } else {
		        prop.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(prop);
		      }

		      prop.setGroupProperty = expressionHelpers.setGroupProperty;
		      prop.loopOut = loopOut;
		      prop.loopIn = loopIn;
		      prop.smooth = smooth;
		      prop.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(prop);
		      prop.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(prop);
		      prop.numKeys = data.a === 1 ? data.k.length : 0;
		      prop.propertyIndex = data.ix;
		      var value = 0;

		      if (type !== 0) {
		        value = createTypedArray('float32', data.a === 1 ? data.k[0].s.length : data.k.length);
		      }

		      prop._cachingAtTime = {
		        lastFrame: initialDefaultFrame,
		        lastIndex: 0,
		        value: value
		      };
		      expressionHelpers.searchExpressions(elem, data, prop);

		      if (prop.k) {
		        container.addDynamicProperty(prop);
		      }

		      return prop;
		    };

		    function getShapeValueAtTime(frameNum) {
		      // For now this caching object is created only when needed instead of creating it when the shape is initialized.
		      if (!this._cachingAtTime) {
		        this._cachingAtTime = {
		          shapeValue: shapePool.clone(this.pv),
		          lastIndex: 0,
		          lastTime: initialDefaultFrame
		        };
		      }

		      frameNum *= this.elem.globalData.frameRate;
		      frameNum -= this.offsetTime;

		      if (frameNum !== this._cachingAtTime.lastTime) {
		        this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < frameNum ? this._caching.lastIndex : 0;
		        this._cachingAtTime.lastTime = frameNum;
		        this.interpolateShape(frameNum, this._cachingAtTime.shapeValue, this._cachingAtTime);
		      }

		      return this._cachingAtTime.shapeValue;
		    }

		    var ShapePropertyConstructorFunction = ShapePropertyFactory.getConstructorFunction();
		    var KeyframedShapePropertyConstructorFunction = ShapePropertyFactory.getKeyframedConstructorFunction();

		    function ShapeExpressions() {}

		    ShapeExpressions.prototype = {
		      vertices: function vertices(prop, time) {
		        if (this.k) {
		          this.getValue();
		        }

		        var shapePath = this.v;

		        if (time !== undefined) {
		          shapePath = this.getValueAtTime(time, 0);
		        }

		        var i;
		        var len = shapePath._length;
		        var vertices = shapePath[prop];
		        var points = shapePath.v;
		        var arr = createSizedArray(len);

		        for (i = 0; i < len; i += 1) {
		          if (prop === 'i' || prop === 'o') {
		            arr[i] = [vertices[i][0] - points[i][0], vertices[i][1] - points[i][1]];
		          } else {
		            arr[i] = [vertices[i][0], vertices[i][1]];
		          }
		        }

		        return arr;
		      },
		      points: function points(time) {
		        return this.vertices('v', time);
		      },
		      inTangents: function inTangents(time) {
		        return this.vertices('i', time);
		      },
		      outTangents: function outTangents(time) {
		        return this.vertices('o', time);
		      },
		      isClosed: function isClosed() {
		        return this.v.c;
		      },
		      pointOnPath: function pointOnPath(perc, time) {
		        var shapePath = this.v;

		        if (time !== undefined) {
		          shapePath = this.getValueAtTime(time, 0);
		        }

		        if (!this._segmentsLength) {
		          this._segmentsLength = bez.getSegmentsLength(shapePath);
		        }

		        var segmentsLength = this._segmentsLength;
		        var lengths = segmentsLength.lengths;
		        var lengthPos = segmentsLength.totalLength * perc;
		        var i = 0;
		        var len = lengths.length;
		        var accumulatedLength = 0;
		        var pt;

		        while (i < len) {
		          if (accumulatedLength + lengths[i].addedLength > lengthPos) {
		            var initIndex = i;
		            var endIndex = shapePath.c && i === len - 1 ? 0 : i + 1;
		            var segmentPerc = (lengthPos - accumulatedLength) / lengths[i].addedLength;
		            pt = bez.getPointInSegment(shapePath.v[initIndex], shapePath.v[endIndex], shapePath.o[initIndex], shapePath.i[endIndex], segmentPerc, lengths[i]);
		            break;
		          } else {
		            accumulatedLength += lengths[i].addedLength;
		          }

		          i += 1;
		        }

		        if (!pt) {
		          pt = shapePath.c ? [shapePath.v[0][0], shapePath.v[0][1]] : [shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1]];
		        }

		        return pt;
		      },
		      vectorOnPath: function vectorOnPath(perc, time, vectorType) {
		        // perc doesn't use triple equality because it can be a Number object as well as a primitive.
		        if (perc == 1) {
		          // eslint-disable-line eqeqeq
		          perc = this.v.c;
		        } else if (perc == 0) {
		          // eslint-disable-line eqeqeq
		          perc = 0.999;
		        }

		        var pt1 = this.pointOnPath(perc, time);
		        var pt2 = this.pointOnPath(perc + 0.001, time);
		        var xLength = pt2[0] - pt1[0];
		        var yLength = pt2[1] - pt1[1];
		        var magnitude = Math.sqrt(Math.pow(xLength, 2) + Math.pow(yLength, 2));

		        if (magnitude === 0) {
		          return [0, 0];
		        }

		        var unitVector = vectorType === 'tangent' ? [xLength / magnitude, yLength / magnitude] : [-yLength / magnitude, xLength / magnitude];
		        return unitVector;
		      },
		      tangentOnPath: function tangentOnPath(perc, time) {
		        return this.vectorOnPath(perc, time, 'tangent');
		      },
		      normalOnPath: function normalOnPath(perc, time) {
		        return this.vectorOnPath(perc, time, 'normal');
		      },
		      setGroupProperty: expressionHelpers.setGroupProperty,
		      getValueAtTime: expressionHelpers.getStaticValueAtTime
		    };
		    extendPrototype([ShapeExpressions], ShapePropertyConstructorFunction);
		    extendPrototype([ShapeExpressions], KeyframedShapePropertyConstructorFunction);
		    KeyframedShapePropertyConstructorFunction.prototype.getValueAtTime = getShapeValueAtTime;
		    KeyframedShapePropertyConstructorFunction.prototype.initiateExpression = ExpressionManager.initiateExpression;
		    var propertyGetShapeProp = ShapePropertyFactory.getShapeProp;

		    ShapePropertyFactory.getShapeProp = function (elem, data, type, arr, trims) {
		      var prop = propertyGetShapeProp(elem, data, type, arr, trims);
		      prop.propertyIndex = data.ix;
		      prop.lock = false;

		      if (type === 3) {
		        expressionHelpers.searchExpressions(elem, data.pt, prop);
		      } else if (type === 4) {
		        expressionHelpers.searchExpressions(elem, data.ks, prop);
		      }

		      if (prop.k) {
		        elem.addDynamicProperty(prop);
		      }

		      return prop;
		    };
		  }

		  function initialize$1() {
		    addPropertyDecorator();
		  }

		  function addDecorator() {
		    function searchExpressions() {
		      if (this.data.d.x) {
		        this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this);
		        this.addEffect(this.getExpressionValue.bind(this));
		        return true;
		      }

		      return null;
		    }

		    TextProperty.prototype.getExpressionValue = function (currentValue, text) {
		      var newValue = this.calculateExpression(text);

		      if (currentValue.t !== newValue) {
		        var newData = {};
		        this.copyData(newData, currentValue);
		        newData.t = newValue.toString();
		        newData.__complete = false;
		        return newData;
		      }

		      return currentValue;
		    };

		    TextProperty.prototype.searchProperty = function () {
		      var isKeyframed = this.searchKeyframes();
		      var hasExpressions = this.searchExpressions();
		      this.kf = isKeyframed || hasExpressions;
		      return this.kf;
		    };

		    TextProperty.prototype.searchExpressions = searchExpressions;
		  }

		  function initialize() {
		    addDecorator();
		  }

		  function SVGComposableEffect() {}

		  SVGComposableEffect.prototype = {
		    createMergeNode: function createMergeNode(resultId, ins) {
		      var feMerge = createNS('feMerge');
		      feMerge.setAttribute('result', resultId);
		      var feMergeNode;
		      var i;

		      for (i = 0; i < ins.length; i += 1) {
		        feMergeNode = createNS('feMergeNode');
		        feMergeNode.setAttribute('in', ins[i]);
		        feMerge.appendChild(feMergeNode);
		        feMerge.appendChild(feMergeNode);
		      }

		      return feMerge;
		    }
		  };

		  var linearFilterValue = '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0';

		  function SVGTintFilter(filter, filterManager, elem, id, source) {
		    this.filterManager = filterManager;
		    var feColorMatrix = createNS('feColorMatrix');
		    feColorMatrix.setAttribute('type', 'matrix');
		    feColorMatrix.setAttribute('color-interpolation-filters', 'linearRGB');
		    feColorMatrix.setAttribute('values', linearFilterValue + ' 1 0');
		    this.linearFilter = feColorMatrix;
		    feColorMatrix.setAttribute('result', id + '_tint_1');
		    filter.appendChild(feColorMatrix);
		    feColorMatrix = createNS('feColorMatrix');
		    feColorMatrix.setAttribute('type', 'matrix');
		    feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
		    feColorMatrix.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
		    feColorMatrix.setAttribute('result', id + '_tint_2');
		    filter.appendChild(feColorMatrix);
		    this.matrixFilter = feColorMatrix;
		    var feMerge = this.createMergeNode(id, [source, id + '_tint_1', id + '_tint_2']);
		    filter.appendChild(feMerge);
		  }

		  extendPrototype([SVGComposableEffect], SVGTintFilter);

		  SVGTintFilter.prototype.renderFrame = function (forceRender) {
		    if (forceRender || this.filterManager._mdf) {
		      var colorBlack = this.filterManager.effectElements[0].p.v;
		      var colorWhite = this.filterManager.effectElements[1].p.v;
		      var opacity = this.filterManager.effectElements[2].p.v / 100;
		      this.linearFilter.setAttribute('values', linearFilterValue + ' ' + opacity + ' 0');
		      this.matrixFilter.setAttribute('values', colorWhite[0] - colorBlack[0] + ' 0 0 0 ' + colorBlack[0] + ' ' + (colorWhite[1] - colorBlack[1]) + ' 0 0 0 ' + colorBlack[1] + ' ' + (colorWhite[2] - colorBlack[2]) + ' 0 0 0 ' + colorBlack[2] + ' 0 0 0 1 0');
		    }
		  };

		  function SVGFillFilter(filter, filterManager, elem, id) {
		    this.filterManager = filterManager;
		    var feColorMatrix = createNS('feColorMatrix');
		    feColorMatrix.setAttribute('type', 'matrix');
		    feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
		    feColorMatrix.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
		    feColorMatrix.setAttribute('result', id);
		    filter.appendChild(feColorMatrix);
		    this.matrixFilter = feColorMatrix;
		  }

		  SVGFillFilter.prototype.renderFrame = function (forceRender) {
		    if (forceRender || this.filterManager._mdf) {
		      var color = this.filterManager.effectElements[2].p.v;
		      var opacity = this.filterManager.effectElements[6].p.v;
		      this.matrixFilter.setAttribute('values', '0 0 0 0 ' + color[0] + ' 0 0 0 0 ' + color[1] + ' 0 0 0 0 ' + color[2] + ' 0 0 0 ' + opacity + ' 0');
		    }
		  };

		  function SVGStrokeEffect(fil, filterManager, elem) {
		    this.initialized = false;
		    this.filterManager = filterManager;
		    this.elem = elem;
		    this.paths = [];
		  }

		  SVGStrokeEffect.prototype.initialize = function () {
		    var elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
		    var path;
		    var groupPath;
		    var i;
		    var len;

		    if (this.filterManager.effectElements[1].p.v === 1) {
		      len = this.elem.maskManager.masksProperties.length;
		      i = 0;
		    } else {
		      i = this.filterManager.effectElements[0].p.v - 1;
		      len = i + 1;
		    }

		    groupPath = createNS('g');
		    groupPath.setAttribute('fill', 'none');
		    groupPath.setAttribute('stroke-linecap', 'round');
		    groupPath.setAttribute('stroke-dashoffset', 1);

		    for (i; i < len; i += 1) {
		      path = createNS('path');
		      groupPath.appendChild(path);
		      this.paths.push({
		        p: path,
		        m: i
		      });
		    }

		    if (this.filterManager.effectElements[10].p.v === 3) {
		      var mask = createNS('mask');
		      var id = createElementID();
		      mask.setAttribute('id', id);
		      mask.setAttribute('mask-type', 'alpha');
		      mask.appendChild(groupPath);
		      this.elem.globalData.defs.appendChild(mask);
		      var g = createNS('g');
		      g.setAttribute('mask', 'url(' + getLocationHref() + '#' + id + ')');

		      while (elemChildren[0]) {
		        g.appendChild(elemChildren[0]);
		      }

		      this.elem.layerElement.appendChild(g);
		      this.masker = mask;
		      groupPath.setAttribute('stroke', '#fff');
		    } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
		      if (this.filterManager.effectElements[10].p.v === 2) {
		        elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;

		        while (elemChildren.length) {
		          this.elem.layerElement.removeChild(elemChildren[0]);
		        }
		      }

		      this.elem.layerElement.appendChild(groupPath);
		      this.elem.layerElement.removeAttribute('mask');
		      groupPath.setAttribute('stroke', '#fff');
		    }

		    this.initialized = true;
		    this.pathMasker = groupPath;
		  };

		  SVGStrokeEffect.prototype.renderFrame = function (forceRender) {
		    if (!this.initialized) {
		      this.initialize();
		    }

		    var i;
		    var len = this.paths.length;
		    var mask;
		    var path;

		    for (i = 0; i < len; i += 1) {
		      if (this.paths[i].m !== -1) {
		        mask = this.elem.maskManager.viewData[this.paths[i].m];
		        path = this.paths[i].p;

		        if (forceRender || this.filterManager._mdf || mask.prop._mdf) {
		          path.setAttribute('d', mask.lastPath);
		        }

		        if (forceRender || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || mask.prop._mdf) {
		          var dasharrayValue;

		          if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
		            var s = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
		            var e = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
		            var l = path.getTotalLength();
		            dasharrayValue = '0 0 0 ' + l * s + ' ';
		            var lineLength = l * (e - s);
		            var segment = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
		            var units = Math.floor(lineLength / segment);
		            var j;

		            for (j = 0; j < units; j += 1) {
		              dasharrayValue += '1 ' + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01 + ' ';
		            }

		            dasharrayValue += '0 ' + l * 10 + ' 0 0';
		          } else {
		            dasharrayValue = '1 ' + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
		          }

		          path.setAttribute('stroke-dasharray', dasharrayValue);
		        }
		      }
		    }

		    if (forceRender || this.filterManager.effectElements[4].p._mdf) {
		      this.pathMasker.setAttribute('stroke-width', this.filterManager.effectElements[4].p.v * 2);
		    }

		    if (forceRender || this.filterManager.effectElements[6].p._mdf) {
		      this.pathMasker.setAttribute('opacity', this.filterManager.effectElements[6].p.v);
		    }

		    if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
		      if (forceRender || this.filterManager.effectElements[3].p._mdf) {
		        var color = this.filterManager.effectElements[3].p.v;
		        this.pathMasker.setAttribute('stroke', 'rgb(' + bmFloor(color[0] * 255) + ',' + bmFloor(color[1] * 255) + ',' + bmFloor(color[2] * 255) + ')');
		      }
		    }
		  };

		  function SVGTritoneFilter(filter, filterManager, elem, id) {
		    this.filterManager = filterManager;
		    var feColorMatrix = createNS('feColorMatrix');
		    feColorMatrix.setAttribute('type', 'matrix');
		    feColorMatrix.setAttribute('color-interpolation-filters', 'linearRGB');
		    feColorMatrix.setAttribute('values', '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');
		    filter.appendChild(feColorMatrix);
		    var feComponentTransfer = createNS('feComponentTransfer');
		    feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
		    feComponentTransfer.setAttribute('result', id);
		    this.matrixFilter = feComponentTransfer;
		    var feFuncR = createNS('feFuncR');
		    feFuncR.setAttribute('type', 'table');
		    feComponentTransfer.appendChild(feFuncR);
		    this.feFuncR = feFuncR;
		    var feFuncG = createNS('feFuncG');
		    feFuncG.setAttribute('type', 'table');
		    feComponentTransfer.appendChild(feFuncG);
		    this.feFuncG = feFuncG;
		    var feFuncB = createNS('feFuncB');
		    feFuncB.setAttribute('type', 'table');
		    feComponentTransfer.appendChild(feFuncB);
		    this.feFuncB = feFuncB;
		    filter.appendChild(feComponentTransfer);
		  }

		  SVGTritoneFilter.prototype.renderFrame = function (forceRender) {
		    if (forceRender || this.filterManager._mdf) {
		      var color1 = this.filterManager.effectElements[0].p.v;
		      var color2 = this.filterManager.effectElements[1].p.v;
		      var color3 = this.filterManager.effectElements[2].p.v;
		      var tableR = color3[0] + ' ' + color2[0] + ' ' + color1[0];
		      var tableG = color3[1] + ' ' + color2[1] + ' ' + color1[1];
		      var tableB = color3[2] + ' ' + color2[2] + ' ' + color1[2];
		      this.feFuncR.setAttribute('tableValues', tableR);
		      this.feFuncG.setAttribute('tableValues', tableG);
		      this.feFuncB.setAttribute('tableValues', tableB);
		    }
		  };

		  function SVGProLevelsFilter(filter, filterManager, elem, id) {
		    this.filterManager = filterManager;
		    var effectElements = this.filterManager.effectElements;
		    var feComponentTransfer = createNS('feComponentTransfer'); // Red

		    if (effectElements[10].p.k || effectElements[10].p.v !== 0 || effectElements[11].p.k || effectElements[11].p.v !== 1 || effectElements[12].p.k || effectElements[12].p.v !== 1 || effectElements[13].p.k || effectElements[13].p.v !== 0 || effectElements[14].p.k || effectElements[14].p.v !== 1) {
		      this.feFuncR = this.createFeFunc('feFuncR', feComponentTransfer);
		    } // Green


		    if (effectElements[17].p.k || effectElements[17].p.v !== 0 || effectElements[18].p.k || effectElements[18].p.v !== 1 || effectElements[19].p.k || effectElements[19].p.v !== 1 || effectElements[20].p.k || effectElements[20].p.v !== 0 || effectElements[21].p.k || effectElements[21].p.v !== 1) {
		      this.feFuncG = this.createFeFunc('feFuncG', feComponentTransfer);
		    } // Blue


		    if (effectElements[24].p.k || effectElements[24].p.v !== 0 || effectElements[25].p.k || effectElements[25].p.v !== 1 || effectElements[26].p.k || effectElements[26].p.v !== 1 || effectElements[27].p.k || effectElements[27].p.v !== 0 || effectElements[28].p.k || effectElements[28].p.v !== 1) {
		      this.feFuncB = this.createFeFunc('feFuncB', feComponentTransfer);
		    } // Alpha


		    if (effectElements[31].p.k || effectElements[31].p.v !== 0 || effectElements[32].p.k || effectElements[32].p.v !== 1 || effectElements[33].p.k || effectElements[33].p.v !== 1 || effectElements[34].p.k || effectElements[34].p.v !== 0 || effectElements[35].p.k || effectElements[35].p.v !== 1) {
		      this.feFuncA = this.createFeFunc('feFuncA', feComponentTransfer);
		    } // RGB


		    if (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) {
		      feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
		      filter.appendChild(feComponentTransfer);
		    }

		    if (effectElements[3].p.k || effectElements[3].p.v !== 0 || effectElements[4].p.k || effectElements[4].p.v !== 1 || effectElements[5].p.k || effectElements[5].p.v !== 1 || effectElements[6].p.k || effectElements[6].p.v !== 0 || effectElements[7].p.k || effectElements[7].p.v !== 1) {
		      feComponentTransfer = createNS('feComponentTransfer');
		      feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
		      feComponentTransfer.setAttribute('result', id);
		      filter.appendChild(feComponentTransfer);
		      this.feFuncRComposed = this.createFeFunc('feFuncR', feComponentTransfer);
		      this.feFuncGComposed = this.createFeFunc('feFuncG', feComponentTransfer);
		      this.feFuncBComposed = this.createFeFunc('feFuncB', feComponentTransfer);
		    }
		  }

		  SVGProLevelsFilter.prototype.createFeFunc = function (type, feComponentTransfer) {
		    var feFunc = createNS(type);
		    feFunc.setAttribute('type', 'table');
		    feComponentTransfer.appendChild(feFunc);
		    return feFunc;
		  };

		  SVGProLevelsFilter.prototype.getTableValue = function (inputBlack, inputWhite, gamma, outputBlack, outputWhite) {
		    var cnt = 0;
		    var segments = 256;
		    var perc;
		    var min = Math.min(inputBlack, inputWhite);
		    var max = Math.max(inputBlack, inputWhite);
		    var table = Array.call(null, {
		      length: segments
		    });
		    var colorValue;
		    var pos = 0;
		    var outputDelta = outputWhite - outputBlack;
		    var inputDelta = inputWhite - inputBlack;

		    while (cnt <= 256) {
		      perc = cnt / 256;

		      if (perc <= min) {
		        colorValue = inputDelta < 0 ? outputWhite : outputBlack;
		      } else if (perc >= max) {
		        colorValue = inputDelta < 0 ? outputBlack : outputWhite;
		      } else {
		        colorValue = outputBlack + outputDelta * Math.pow((perc - inputBlack) / inputDelta, 1 / gamma);
		      }

		      table[pos] = colorValue;
		      pos += 1;
		      cnt += 256 / (segments - 1);
		    }

		    return table.join(' ');
		  };

		  SVGProLevelsFilter.prototype.renderFrame = function (forceRender) {
		    if (forceRender || this.filterManager._mdf) {
		      var val;
		      var effectElements = this.filterManager.effectElements;

		      if (this.feFuncRComposed && (forceRender || effectElements[3].p._mdf || effectElements[4].p._mdf || effectElements[5].p._mdf || effectElements[6].p._mdf || effectElements[7].p._mdf)) {
		        val = this.getTableValue(effectElements[3].p.v, effectElements[4].p.v, effectElements[5].p.v, effectElements[6].p.v, effectElements[7].p.v);
		        this.feFuncRComposed.setAttribute('tableValues', val);
		        this.feFuncGComposed.setAttribute('tableValues', val);
		        this.feFuncBComposed.setAttribute('tableValues', val);
		      }

		      if (this.feFuncR && (forceRender || effectElements[10].p._mdf || effectElements[11].p._mdf || effectElements[12].p._mdf || effectElements[13].p._mdf || effectElements[14].p._mdf)) {
		        val = this.getTableValue(effectElements[10].p.v, effectElements[11].p.v, effectElements[12].p.v, effectElements[13].p.v, effectElements[14].p.v);
		        this.feFuncR.setAttribute('tableValues', val);
		      }

		      if (this.feFuncG && (forceRender || effectElements[17].p._mdf || effectElements[18].p._mdf || effectElements[19].p._mdf || effectElements[20].p._mdf || effectElements[21].p._mdf)) {
		        val = this.getTableValue(effectElements[17].p.v, effectElements[18].p.v, effectElements[19].p.v, effectElements[20].p.v, effectElements[21].p.v);
		        this.feFuncG.setAttribute('tableValues', val);
		      }

		      if (this.feFuncB && (forceRender || effectElements[24].p._mdf || effectElements[25].p._mdf || effectElements[26].p._mdf || effectElements[27].p._mdf || effectElements[28].p._mdf)) {
		        val = this.getTableValue(effectElements[24].p.v, effectElements[25].p.v, effectElements[26].p.v, effectElements[27].p.v, effectElements[28].p.v);
		        this.feFuncB.setAttribute('tableValues', val);
		      }

		      if (this.feFuncA && (forceRender || effectElements[31].p._mdf || effectElements[32].p._mdf || effectElements[33].p._mdf || effectElements[34].p._mdf || effectElements[35].p._mdf)) {
		        val = this.getTableValue(effectElements[31].p.v, effectElements[32].p.v, effectElements[33].p.v, effectElements[34].p.v, effectElements[35].p.v);
		        this.feFuncA.setAttribute('tableValues', val);
		      }
		    }
		  };

		  function SVGDropShadowEffect(filter, filterManager, elem, id, source) {
		    var globalFilterSize = filterManager.container.globalData.renderConfig.filterSize;
		    var filterSize = filterManager.data.fs || globalFilterSize;
		    filter.setAttribute('x', filterSize.x || globalFilterSize.x);
		    filter.setAttribute('y', filterSize.y || globalFilterSize.y);
		    filter.setAttribute('width', filterSize.width || globalFilterSize.width);
		    filter.setAttribute('height', filterSize.height || globalFilterSize.height);
		    this.filterManager = filterManager;
		    var feGaussianBlur = createNS('feGaussianBlur');
		    feGaussianBlur.setAttribute('in', 'SourceAlpha');
		    feGaussianBlur.setAttribute('result', id + '_drop_shadow_1');
		    feGaussianBlur.setAttribute('stdDeviation', '0');
		    this.feGaussianBlur = feGaussianBlur;
		    filter.appendChild(feGaussianBlur);
		    var feOffset = createNS('feOffset');
		    feOffset.setAttribute('dx', '25');
		    feOffset.setAttribute('dy', '0');
		    feOffset.setAttribute('in', id + '_drop_shadow_1');
		    feOffset.setAttribute('result', id + '_drop_shadow_2');
		    this.feOffset = feOffset;
		    filter.appendChild(feOffset);
		    var feFlood = createNS('feFlood');
		    feFlood.setAttribute('flood-color', '#00ff00');
		    feFlood.setAttribute('flood-opacity', '1');
		    feFlood.setAttribute('result', id + '_drop_shadow_3');
		    this.feFlood = feFlood;
		    filter.appendChild(feFlood);
		    var feComposite = createNS('feComposite');
		    feComposite.setAttribute('in', id + '_drop_shadow_3');
		    feComposite.setAttribute('in2', id + '_drop_shadow_2');
		    feComposite.setAttribute('operator', 'in');
		    feComposite.setAttribute('result', id + '_drop_shadow_4');
		    filter.appendChild(feComposite);
		    var feMerge = this.createMergeNode(id, [id + '_drop_shadow_4', source]);
		    filter.appendChild(feMerge); //
		  }

		  extendPrototype([SVGComposableEffect], SVGDropShadowEffect);

		  SVGDropShadowEffect.prototype.renderFrame = function (forceRender) {
		    if (forceRender || this.filterManager._mdf) {
		      if (forceRender || this.filterManager.effectElements[4].p._mdf) {
		        this.feGaussianBlur.setAttribute('stdDeviation', this.filterManager.effectElements[4].p.v / 4);
		      }

		      if (forceRender || this.filterManager.effectElements[0].p._mdf) {
		        var col = this.filterManager.effectElements[0].p.v;
		        this.feFlood.setAttribute('flood-color', rgbToHex(Math.round(col[0] * 255), Math.round(col[1] * 255), Math.round(col[2] * 255)));
		      }

		      if (forceRender || this.filterManager.effectElements[1].p._mdf) {
		        this.feFlood.setAttribute('flood-opacity', this.filterManager.effectElements[1].p.v / 255);
		      }

		      if (forceRender || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
		        var distance = this.filterManager.effectElements[3].p.v;
		        var angle = (this.filterManager.effectElements[2].p.v - 90) * degToRads;
		        var x = distance * Math.cos(angle);
		        var y = distance * Math.sin(angle);
		        this.feOffset.setAttribute('dx', x);
		        this.feOffset.setAttribute('dy', y);
		      }
		    }
		  };

		  var _svgMatteSymbols = [];

		  function SVGMatte3Effect(filterElem, filterManager, elem) {
		    this.initialized = false;
		    this.filterManager = filterManager;
		    this.filterElem = filterElem;
		    this.elem = elem;
		    elem.matteElement = createNS('g');
		    elem.matteElement.appendChild(elem.layerElement);
		    elem.matteElement.appendChild(elem.transformedElement);
		    elem.baseElement = elem.matteElement;
		  }

		  SVGMatte3Effect.prototype.findSymbol = function (mask) {
		    var i = 0;
		    var len = _svgMatteSymbols.length;

		    while (i < len) {
		      if (_svgMatteSymbols[i] === mask) {
		        return _svgMatteSymbols[i];
		      }

		      i += 1;
		    }

		    return null;
		  };

		  SVGMatte3Effect.prototype.replaceInParent = function (mask, symbolId) {
		    var parentNode = mask.layerElement.parentNode;

		    if (!parentNode) {
		      return;
		    }

		    var children = parentNode.children;
		    var i = 0;
		    var len = children.length;

		    while (i < len) {
		      if (children[i] === mask.layerElement) {
		        break;
		      }

		      i += 1;
		    }

		    var nextChild;

		    if (i <= len - 2) {
		      nextChild = children[i + 1];
		    }

		    var useElem = createNS('use');
		    useElem.setAttribute('href', '#' + symbolId);

		    if (nextChild) {
		      parentNode.insertBefore(useElem, nextChild);
		    } else {
		      parentNode.appendChild(useElem);
		    }
		  };

		  SVGMatte3Effect.prototype.setElementAsMask = function (elem, mask) {
		    if (!this.findSymbol(mask)) {
		      var symbolId = createElementID();
		      var masker = createNS('mask');
		      masker.setAttribute('id', mask.layerId);
		      masker.setAttribute('mask-type', 'alpha');

		      _svgMatteSymbols.push(mask);

		      var defs = elem.globalData.defs;
		      defs.appendChild(masker);
		      var symbol = createNS('symbol');
		      symbol.setAttribute('id', symbolId);
		      this.replaceInParent(mask, symbolId);
		      symbol.appendChild(mask.layerElement);
		      defs.appendChild(symbol);
		      var useElem = createNS('use');
		      useElem.setAttribute('href', '#' + symbolId);
		      masker.appendChild(useElem);
		      mask.data.hd = false;
		      mask.show();
		    }

		    elem.setMatte(mask.layerId);
		  };

		  SVGMatte3Effect.prototype.initialize = function () {
		    var ind = this.filterManager.effectElements[0].p.v;
		    var elements = this.elem.comp.elements;
		    var i = 0;
		    var len = elements.length;

		    while (i < len) {
		      if (elements[i] && elements[i].data.ind === ind) {
		        this.setElementAsMask(this.elem, elements[i]);
		      }

		      i += 1;
		    }

		    this.initialized = true;
		  };

		  SVGMatte3Effect.prototype.renderFrame = function () {
		    if (!this.initialized) {
		      this.initialize();
		    }
		  };

		  function SVGGaussianBlurEffect(filter, filterManager, elem, id) {
		    // Outset the filter region by 100% on all sides to accommodate blur expansion.
		    filter.setAttribute('x', '-100%');
		    filter.setAttribute('y', '-100%');
		    filter.setAttribute('width', '300%');
		    filter.setAttribute('height', '300%');
		    this.filterManager = filterManager;
		    var feGaussianBlur = createNS('feGaussianBlur');
		    feGaussianBlur.setAttribute('result', id);
		    filter.appendChild(feGaussianBlur);
		    this.feGaussianBlur = feGaussianBlur;
		  }

		  SVGGaussianBlurEffect.prototype.renderFrame = function (forceRender) {
		    if (forceRender || this.filterManager._mdf) {
		      // Empirical value, matching AE's blur appearance.
		      var kBlurrinessToSigma = 0.3;
		      var sigma = this.filterManager.effectElements[0].p.v * kBlurrinessToSigma; // Dimensions mapping:
		      //
		      //   1 -> horizontal & vertical
		      //   2 -> horizontal only
		      //   3 -> vertical only
		      //

		      var dimensions = this.filterManager.effectElements[1].p.v;
		      var sigmaX = dimensions == 3 ? 0 : sigma; // eslint-disable-line eqeqeq

		      var sigmaY = dimensions == 2 ? 0 : sigma; // eslint-disable-line eqeqeq

		      this.feGaussianBlur.setAttribute('stdDeviation', sigmaX + ' ' + sigmaY); // Repeat edges mapping:
		      //
		      //   0 -> off -> duplicate
		      //   1 -> on  -> wrap

		      var edgeMode = this.filterManager.effectElements[2].p.v == 1 ? 'wrap' : 'duplicate'; // eslint-disable-line eqeqeq

		      this.feGaussianBlur.setAttribute('edgeMode', edgeMode);
		    }
		  };

		  function TransformEffect() {}

		  TransformEffect.prototype.init = function (effectsManager) {
		    this.effectsManager = effectsManager;
		    this.type = effectTypes.TRANSFORM_EFFECT;
		    this.matrix = new Matrix();
		    this.opacity = -1;
		    this._mdf = false;
		    this._opMdf = false;
		  };

		  TransformEffect.prototype.renderFrame = function (forceFrame) {
		    this._opMdf = false;
		    this._mdf = false;

		    if (forceFrame || this.effectsManager._mdf) {
		      var effectElements = this.effectsManager.effectElements;
		      var anchor = effectElements[0].p.v;
		      var position = effectElements[1].p.v;
		      var isUniformScale = effectElements[2].p.v === 1;
		      var scaleHeight = effectElements[3].p.v;
		      var scaleWidth = isUniformScale ? scaleHeight : effectElements[4].p.v;
		      var skew = effectElements[5].p.v;
		      var skewAxis = effectElements[6].p.v;
		      var rotation = effectElements[7].p.v;
		      this.matrix.reset();
		      this.matrix.translate(-anchor[0], -anchor[1], anchor[2]);
		      this.matrix.scale(scaleWidth * 0.01, scaleHeight * 0.01, 1);
		      this.matrix.rotate(-rotation * degToRads);
		      this.matrix.skewFromAxis(-skew * degToRads, (skewAxis + 90) * degToRads);
		      this.matrix.translate(position[0], position[1], 0);
		      this._mdf = true;

		      if (this.opacity !== effectElements[8].p.v) {
		        this.opacity = effectElements[8].p.v;
		        this._opMdf = true;
		      }
		    }
		  };

		  function SVGTransformEffect(_, filterManager) {
		    this.init(filterManager);
		  }

		  extendPrototype([TransformEffect], SVGTransformEffect);

		  function CVTransformEffect(effectsManager) {
		    this.init(effectsManager);
		  }

		  extendPrototype([TransformEffect], CVTransformEffect);

		  registerRenderer('canvas', CanvasRenderer);
		  registerRenderer('html', HybridRenderer);
		  registerRenderer('svg', SVGRenderer); // Registering shape modifiers

		  ShapeModifiers.registerModifier('tm', TrimModifier);
		  ShapeModifiers.registerModifier('pb', PuckerAndBloatModifier);
		  ShapeModifiers.registerModifier('rp', RepeaterModifier);
		  ShapeModifiers.registerModifier('rd', RoundCornersModifier);
		  ShapeModifiers.registerModifier('zz', ZigZagModifier);
		  ShapeModifiers.registerModifier('op', OffsetPathModifier); // Registering expression plugin

		  setExpressionsPlugin(Expressions);
		  setExpressionInterfaces(getInterface);
		  initialize$1();
		  initialize(); // Registering svg effects

		  registerEffect$1(20, SVGTintFilter, true);
		  registerEffect$1(21, SVGFillFilter, true);
		  registerEffect$1(22, SVGStrokeEffect, false);
		  registerEffect$1(23, SVGTritoneFilter, true);
		  registerEffect$1(24, SVGProLevelsFilter, true);
		  registerEffect$1(25, SVGDropShadowEffect, true);
		  registerEffect$1(28, SVGMatte3Effect, false);
		  registerEffect$1(29, SVGGaussianBlurEffect, true);
		  registerEffect$1(35, SVGTransformEffect, false);
		  registerEffect(35, CVTransformEffect);

		  return lottie;

		})); 
	} (lottie, lottie.exports));

	var lottieExports = lottie.exports;
	var Lottie = /*@__PURE__*/getDefaultExportFromCjs(lottieExports);

	exports.PlayerState = void 0;
	(function(PlayerState) {
	    PlayerState["Completed"] = 'completed';
	    PlayerState["Destroyed"] = 'destroyed';
	    PlayerState["Error"] = 'error';
	    PlayerState["Frozen"] = 'frozen';
	    PlayerState["Loading"] = 'loading';
	    PlayerState["Paused"] = 'paused';
	    PlayerState["Playing"] = 'playing';
	    PlayerState["Stopped"] = 'stopped';
	})(exports.PlayerState || (exports.PlayerState = {}));
	exports.PlayMode = void 0;
	(function(PlayMode) {
	    PlayMode["Bounce"] = 'bounce';
	    PlayMode["Normal"] = 'normal';
	})(exports.PlayMode || (exports.PlayMode = {}));
	exports.PlayerEvents = void 0;
	(function(PlayerEvents) {
	    PlayerEvents["Complete"] = 'complete';
	    PlayerEvents["Destroyed"] = 'destroyed';
	    PlayerEvents["Error"] = 'error';
	    PlayerEvents["Frame"] = 'frame';
	    PlayerEvents["Freeze"] = 'freeze';
	    PlayerEvents["Load"] = 'load';
	    PlayerEvents["Loop"] = 'loop';
	    PlayerEvents["Pause"] = 'pause';
	    PlayerEvents["Play"] = 'play';
	    PlayerEvents["Ready"] = 'ready';
	    PlayerEvents["Rendered"] = 'rendered';
	    PlayerEvents["Stop"] = 'stop';
	})(exports.PlayerEvents || (exports.PlayerEvents = {}));

	// DEFLATE is a complex format; to read this code, you should probably check the RFC first:
	// https://tools.ietf.org/html/rfc1951
	// You may also wish to take a look at the guide I made about this program:
	// https://gist.github.com/101arrowz/253f31eb5abc3d9275ab943003ffecad
	// Some of the following code is similar to that of UZIP.js:
	// https://github.com/photopea/UZIP.js
	// However, the vast majority of the codebase has diverged from UZIP.js to increase performance and reduce bundle size.
	// Sometimes 0 will appear where -1 would be more appropriate. This is because using a uint
	// is better for memory in most engines (I *think*).
	var ch2 = {};
	var wk = (function (c, id, msg, transfer, cb) {
	    var w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([
	        c + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'
	    ], { type: 'text/javascript' }))));
	    w.onmessage = function (e) {
	        var d = e.data, ed = d.$e$;
	        if (ed) {
	            var err = new Error(ed[0]);
	            err['code'] = ed[1];
	            err.stack = ed[2];
	            cb(err, null);
	        }
	        else
	            cb(null, d);
	    };
	    w.postMessage(msg, transfer);
	    return w;
	});

	// aliases for shorter compressed code (most minifers don't do this)
	var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
	// fixed length extra bits
	var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, /* unused */ 0, 0, /* impossible */ 0]);
	// fixed distance extra bits
	// see fleb note
	var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, /* unused */ 0, 0]);
	// code length index map
	var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
	// get base, reverse index map from extra bits
	var freb = function (eb, start) {
	    var b = new u16(31);
	    for (var i = 0; i < 31; ++i) {
	        b[i] = start += 1 << eb[i - 1];
	    }
	    // numbers here are at max 18 bits
	    var r = new u32(b[30]);
	    for (var i = 1; i < 30; ++i) {
	        for (var j = b[i]; j < b[i + 1]; ++j) {
	            r[j] = ((j - b[i]) << 5) | i;
	        }
	    }
	    return [b, r];
	};
	var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
	// we can ignore the fact that the other numbers are wrong; they never happen anyway
	fl[28] = 258, revfl[258] = 28;
	var _b = freb(fdeb, 0), fd = _b[0];
	// map of value to reverse (assuming 16 bits)
	var rev = new u16(32768);
	for (var i$1 = 0; i$1 < 32768; ++i$1) {
	    // reverse table algorithm from SO
	    var x = ((i$1 & 0xAAAA) >>> 1) | ((i$1 & 0x5555) << 1);
	    x = ((x & 0xCCCC) >>> 2) | ((x & 0x3333) << 2);
	    x = ((x & 0xF0F0) >>> 4) | ((x & 0x0F0F) << 4);
	    rev[i$1] = (((x & 0xFF00) >>> 8) | ((x & 0x00FF) << 8)) >>> 1;
	}
	// create huffman tree from u8 "map": index -> code length for code index
	// mb (max bits) must be at most 15
	// TODO: optimize/split up?
	var hMap = (function (cd, mb, r) {
	    var s = cd.length;
	    // index
	    var i = 0;
	    // u16 "map": index -> # of codes with bit length = index
	    var l = new u16(mb);
	    // length of cd must be 288 (total # of codes)
	    for (; i < s; ++i) {
	        if (cd[i])
	            ++l[cd[i] - 1];
	    }
	    // u16 "map": index -> minimum code for bit length = index
	    var le = new u16(mb);
	    for (i = 0; i < mb; ++i) {
	        le[i] = (le[i - 1] + l[i - 1]) << 1;
	    }
	    var co;
	    if (r) {
	        // u16 "map": index -> number of actual bits, symbol for code
	        co = new u16(1 << mb);
	        // bits to remove for reverser
	        var rvb = 15 - mb;
	        for (i = 0; i < s; ++i) {
	            // ignore 0 lengths
	            if (cd[i]) {
	                // num encoding both symbol and bits read
	                var sv = (i << 4) | cd[i];
	                // free bits
	                var r_1 = mb - cd[i];
	                // start value
	                var v = le[cd[i] - 1]++ << r_1;
	                // m is end value
	                for (var m = v | ((1 << r_1) - 1); v <= m; ++v) {
	                    // every 16 bit value starting with the code yields the same result
	                    co[rev[v] >>> rvb] = sv;
	                }
	            }
	        }
	    }
	    else {
	        co = new u16(s);
	        for (i = 0; i < s; ++i) {
	            if (cd[i]) {
	                co[i] = rev[le[cd[i] - 1]++] >>> (15 - cd[i]);
	            }
	        }
	    }
	    return co;
	});
	// fixed length tree
	var flt = new u8(288);
	for (var i$1 = 0; i$1 < 144; ++i$1)
	    flt[i$1] = 8;
	for (var i$1 = 144; i$1 < 256; ++i$1)
	    flt[i$1] = 9;
	for (var i$1 = 256; i$1 < 280; ++i$1)
	    flt[i$1] = 7;
	for (var i$1 = 280; i$1 < 288; ++i$1)
	    flt[i$1] = 8;
	// fixed distance tree
	var fdt = new u8(32);
	for (var i$1 = 0; i$1 < 32; ++i$1)
	    fdt[i$1] = 5;
	// fixed length map
	var flrm = /*#__PURE__*/ hMap(flt, 9, 1);
	// fixed distance map
	var fdrm = /*#__PURE__*/ hMap(fdt, 5, 1);
	// find max of array
	var max = function (a) {
	    var m = a[0];
	    for (var i = 1; i < a.length; ++i) {
	        if (a[i] > m)
	            m = a[i];
	    }
	    return m;
	};
	// read d, starting at bit p and mask with m
	var bits = function (d, p, m) {
	    var o = (p / 8) | 0;
	    return ((d[o] | (d[o + 1] << 8)) >> (p & 7)) & m;
	};
	// read d, starting at bit p continuing for at least 16 bits
	var bits16 = function (d, p) {
	    var o = (p / 8) | 0;
	    return ((d[o] | (d[o + 1] << 8) | (d[o + 2] << 16)) >> (p & 7));
	};
	// get end of byte
	var shft = function (p) { return ((p + 7) / 8) | 0; };
	// typed array slice - allows garbage collector to free original reference,
	// while being more compatible than .slice
	var slc = function (v, s, e) {
	    if (s == null || s < 0)
	        s = 0;
	    if (e == null || e > v.length)
	        e = v.length;
	    // can't use .constructor in case user-supplied
	    var n = new (v.BYTES_PER_ELEMENT == 2 ? u16 : v.BYTES_PER_ELEMENT == 4 ? u32 : u8)(e - s);
	    n.set(v.subarray(s, e));
	    return n;
	};
	// error codes
	var ec = [
	    'unexpected EOF',
	    'invalid block type',
	    'invalid length/literal',
	    'invalid distance',
	    'stream finished',
	    'no stream handler',
	    ,
	    'no callback',
	    'invalid UTF-8 data',
	    'extra field too long',
	    'date not in range 1980-2099',
	    'filename too long',
	    'stream finishing',
	    'invalid zip data'
	    // determined by unknown compression method
	];
	var err = function (ind, msg, nt) {
	    var e = new Error(msg || ec[ind]);
	    e.code = ind;
	    if (Error.captureStackTrace)
	        Error.captureStackTrace(e, err);
	    if (!nt)
	        throw e;
	    return e;
	};
	// expands raw DEFLATE data
	var inflt = function (dat, buf, st) {
	    // source length
	    var sl = dat.length;
	    if (!sl || (st && st.f && !st.l))
	        return buf || new u8(0);
	    // have to estimate size
	    var noBuf = !buf || st;
	    // no state
	    var noSt = !st || st.i;
	    if (!st)
	        st = {};
	    // Assumes roughly 33% compression ratio average
	    if (!buf)
	        buf = new u8(sl * 3);
	    // ensure buffer can fit at least l elements
	    var cbuf = function (l) {
	        var bl = buf.length;
	        // need to increase size to fit
	        if (l > bl) {
	            // Double or set to necessary, whichever is greater
	            var nbuf = new u8(Math.max(bl * 2, l));
	            nbuf.set(buf);
	            buf = nbuf;
	        }
	    };
	    //  last chunk         bitpos           bytes
	    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
	    // total bits
	    var tbts = sl * 8;
	    do {
	        if (!lm) {
	            // BFINAL - this is only 1 when last chunk is next
	            final = bits(dat, pos, 1);
	            // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman
	            var type = bits(dat, pos + 1, 3);
	            pos += 3;
	            if (!type) {
	                // go to end of byte boundary
	                var s = shft(pos) + 4, l = dat[s - 4] | (dat[s - 3] << 8), t = s + l;
	                if (t > sl) {
	                    if (noSt)
	                        err(0);
	                    break;
	                }
	                // ensure size
	                if (noBuf)
	                    cbuf(bt + l);
	                // Copy over uncompressed data
	                buf.set(dat.subarray(s, t), bt);
	                // Get new bitpos, update byte count
	                st.b = bt += l, st.p = pos = t * 8, st.f = final;
	                continue;
	            }
	            else if (type == 1)
	                lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
	            else if (type == 2) {
	                //  literal                            lengths
	                var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
	                var tl = hLit + bits(dat, pos + 5, 31) + 1;
	                pos += 14;
	                // length+distance tree
	                var ldt = new u8(tl);
	                // code length tree
	                var clt = new u8(19);
	                for (var i = 0; i < hcLen; ++i) {
	                    // use index map to get real code
	                    clt[clim[i]] = bits(dat, pos + i * 3, 7);
	                }
	                pos += hcLen * 3;
	                // code lengths bits
	                var clb = max(clt), clbmsk = (1 << clb) - 1;
	                // code lengths map
	                var clm = hMap(clt, clb, 1);
	                for (var i = 0; i < tl;) {
	                    var r = clm[bits(dat, pos, clbmsk)];
	                    // bits read
	                    pos += r & 15;
	                    // symbol
	                    var s = r >>> 4;
	                    // code length to copy
	                    if (s < 16) {
	                        ldt[i++] = s;
	                    }
	                    else {
	                        //  copy   count
	                        var c = 0, n = 0;
	                        if (s == 16)
	                            n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
	                        else if (s == 17)
	                            n = 3 + bits(dat, pos, 7), pos += 3;
	                        else if (s == 18)
	                            n = 11 + bits(dat, pos, 127), pos += 7;
	                        while (n--)
	                            ldt[i++] = c;
	                    }
	                }
	                //    length tree                 distance tree
	                var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
	                // max length bits
	                lbt = max(lt);
	                // max dist bits
	                dbt = max(dt);
	                lm = hMap(lt, lbt, 1);
	                dm = hMap(dt, dbt, 1);
	            }
	            else
	                err(1);
	            if (pos > tbts) {
	                if (noSt)
	                    err(0);
	                break;
	            }
	        }
	        // Make sure the buffer can hold this + the largest possible addition
	        // Maximum chunk size (practically, theoretically infinite) is 2^17;
	        if (noBuf)
	            cbuf(bt + 131072);
	        var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
	        var lpos = pos;
	        for (;; lpos = pos) {
	            // bits read, code
	            var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
	            pos += c & 15;
	            if (pos > tbts) {
	                if (noSt)
	                    err(0);
	                break;
	            }
	            if (!c)
	                err(2);
	            if (sym < 256)
	                buf[bt++] = sym;
	            else if (sym == 256) {
	                lpos = pos, lm = null;
	                break;
	            }
	            else {
	                var add = sym - 254;
	                // no extra bits needed if less
	                if (sym > 264) {
	                    // index
	                    var i = sym - 257, b = fleb[i];
	                    add = bits(dat, pos, (1 << b) - 1) + fl[i];
	                    pos += b;
	                }
	                // dist
	                var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
	                if (!d)
	                    err(3);
	                pos += d & 15;
	                var dt = fd[dsym];
	                if (dsym > 3) {
	                    var b = fdeb[dsym];
	                    dt += bits16(dat, pos) & ((1 << b) - 1), pos += b;
	                }
	                if (pos > tbts) {
	                    if (noSt)
	                        err(0);
	                    break;
	                }
	                if (noBuf)
	                    cbuf(bt + 131072);
	                var end = bt + add;
	                for (; bt < end; bt += 4) {
	                    buf[bt] = buf[bt - dt];
	                    buf[bt + 1] = buf[bt + 1 - dt];
	                    buf[bt + 2] = buf[bt + 2 - dt];
	                    buf[bt + 3] = buf[bt + 3 - dt];
	                }
	                bt = end;
	            }
	        }
	        st.l = lm, st.p = lpos, st.b = bt, st.f = final;
	        if (lm)
	            final = 1, st.m = lbt, st.d = dm, st.n = dbt;
	    } while (!final);
	    return bt == buf.length ? buf : slc(buf, 0, bt);
	};
	// empty
	var et = /*#__PURE__*/ new u8(0);
	// Walmart object spread
	var mrg = function (a, b) {
	    var o = {};
	    for (var k in a)
	        o[k] = a[k];
	    for (var k in b)
	        o[k] = b[k];
	    return o;
	};
	// worker clone
	// This is possibly the craziest part of the entire codebase, despite how simple it may seem.
	// The only parameter to this function is a closure that returns an array of variables outside of the function scope.
	// We're going to try to figure out the variable names used in the closure as strings because that is crucial for workerization.
	// We will return an object mapping of true variable name to value (basically, the current scope as a JS object).
	// The reason we can't just use the original variable names is minifiers mangling the toplevel scope.
	// This took me three weeks to figure out how to do.
	var wcln = function (fn, fnStr, td) {
	    var dt = fn();
	    var st = fn.toString();
	    var ks = st.slice(st.indexOf('[') + 1, st.lastIndexOf(']')).replace(/\s+/g, '').split(',');
	    for (var i = 0; i < dt.length; ++i) {
	        var v = dt[i], k = ks[i];
	        if (typeof v == 'function') {
	            fnStr += ';' + k + '=';
	            var st_1 = v.toString();
	            if (v.prototype) {
	                // for global objects
	                if (st_1.indexOf('[native code]') != -1) {
	                    var spInd = st_1.indexOf(' ', 8) + 1;
	                    fnStr += st_1.slice(spInd, st_1.indexOf('(', spInd));
	                }
	                else {
	                    fnStr += st_1;
	                    for (var t in v.prototype)
	                        fnStr += ';' + k + '.prototype.' + t + '=' + v.prototype[t].toString();
	                }
	            }
	            else
	                fnStr += st_1;
	        }
	        else
	            td[k] = v;
	    }
	    return [fnStr, td];
	};
	var ch = [];
	// clone bufs
	var cbfs = function (v) {
	    var tl = [];
	    for (var k in v) {
	        if (v[k].buffer) {
	            tl.push((v[k] = new v[k].constructor(v[k])).buffer);
	        }
	    }
	    return tl;
	};
	// use a worker to execute code
	var wrkr = function (fns, init, id, cb) {
	    var _a;
	    if (!ch[id]) {
	        var fnStr = '', td_1 = {}, m = fns.length - 1;
	        for (var i = 0; i < m; ++i)
	            _a = wcln(fns[i], fnStr, td_1), fnStr = _a[0], td_1 = _a[1];
	        ch[id] = wcln(fns[m], fnStr, td_1);
	    }
	    var td = mrg({}, ch[id][1]);
	    return wk(ch[id][0] + ';onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=' + init.toString() + '}', id, td, cbfs(td), cb);
	};
	// base async inflate fn
	var bInflt = function () { return [u8, u16, u32, fleb, fdeb, clim, fl, fd, flrm, fdrm, rev, ec, hMap, max, bits, bits16, shft, slc, err, inflt, inflateSync, pbf, gu8]; };
	// post buf
	var pbf = function (msg) { return postMessage(msg, [msg.buffer]); };
	// get u8
	var gu8 = function (o) { return o && o.size && new u8(o.size); };
	// async helper
	var cbify = function (dat, opts, fns, init, id, cb) {
	    var w = wrkr(fns, init, id, function (err, dat) {
	        w.terminate();
	        cb(err, dat);
	    });
	    w.postMessage([dat, opts], opts.consume ? [dat.buffer] : []);
	    return function () { w.terminate(); };
	};
	// read 2 bytes
	var b2 = function (d, b) { return d[b] | (d[b + 1] << 8); };
	// read 4 bytes
	var b4 = function (d, b) { return (d[b] | (d[b + 1] << 8) | (d[b + 2] << 16) | (d[b + 3] << 24)) >>> 0; };
	var b8 = function (d, b) { return b4(d, b) + (b4(d, b + 4) * 4294967296); };
	function inflate(data, opts, cb) {
	    if (!cb)
	        cb = opts, opts = {};
	    if (typeof cb != 'function')
	        err(7);
	    return cbify(data, opts, [
	        bInflt
	    ], function (ev) { return pbf(inflateSync(ev.data[0], gu8(ev.data[1]))); }, 1, cb);
	}
	/**
	 * Expands DEFLATE data with no wrapper
	 * @param data The data to decompress
	 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
	 * @returns The decompressed version of the data
	 */
	function inflateSync(data, out) {
	    return inflt(data, out);
	}
	// text decoder
	var td = typeof TextDecoder != 'undefined' && /*#__PURE__*/ new TextDecoder();
	// text decoder stream
	var tds = 0;
	try {
	    td.decode(et, { stream: true });
	    tds = 1;
	}
	catch (e) { }
	// decode UTF8
	var dutf8 = function (d) {
	    for (var r = '', i = 0;;) {
	        var c = d[i++];
	        var eb = (c > 127) + (c > 223) + (c > 239);
	        if (i + eb > d.length)
	            return [r, slc(d, i - 1)];
	        if (!eb)
	            r += String.fromCharCode(c);
	        else if (eb == 3) {
	            c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | (d[i++] & 63)) - 65536,
	                r += String.fromCharCode(55296 | (c >> 10), 56320 | (c & 1023));
	        }
	        else if (eb & 1)
	            r += String.fromCharCode((c & 31) << 6 | (d[i++] & 63));
	        else
	            r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | (d[i++] & 63));
	    }
	};
	/**
	 * Converts a Uint8Array to a string
	 * @param dat The data to decode to string
	 * @param latin1 Whether or not to interpret the data as Latin-1. This should
	 *               not need to be true unless encoding to binary string.
	 * @returns The original UTF-8/Latin-1 string
	 */
	function strFromU8(dat, latin1) {
	    if (latin1) {
	        var r = '';
	        for (var i = 0; i < dat.length; i += 16384)
	            r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
	        return r;
	    }
	    else if (td)
	        return td.decode(dat);
	    else {
	        var _a = dutf8(dat), out = _a[0], ext = _a[1];
	        if (ext.length)
	            err(8);
	        return out;
	    }
	}
	// skip local zip header
	var slzh = function (d, b) { return b + 30 + b2(d, b + 26) + b2(d, b + 28); };
	// read zip header
	var zh = function (d, b, z) {
	    var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl, bs = b4(d, b + 20);
	    var _a = z && bs == 4294967295 ? z64e(d, es) : [bs, b4(d, b + 24), b4(d, b + 42)], sc = _a[0], su = _a[1], off = _a[2];
	    return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
	};
	// read zip64 extra field
	var z64e = function (d, b) {
	    for (; b2(d, b) != 1; b += 4 + b2(d, b + 2))
	        ;
	    return [b8(d, b + 12), b8(d, b + 4), b8(d, b + 20)];
	};
	var mt = typeof queueMicrotask == 'function' ? queueMicrotask : typeof setTimeout == 'function' ? setTimeout : function (fn) { fn(); };
	function unzip(data, opts, cb) {
	    if (!cb)
	        cb = opts, opts = {};
	    if (typeof cb != 'function')
	        err(7);
	    var term = [];
	    var tAll = function () {
	        for (var i = 0; i < term.length; ++i)
	            term[i]();
	    };
	    var files = {};
	    var cbd = function (a, b) {
	        mt(function () { cb(a, b); });
	    };
	    mt(function () { cbd = cb; });
	    var e = data.length - 22;
	    for (; b4(data, e) != 0x6054B50; --e) {
	        if (!e || data.length - e > 65558) {
	            cbd(err(13, 0, 1), null);
	            return tAll;
	        }
	    }
	    var lft = b2(data, e + 8);
	    if (lft) {
	        var c = lft;
	        var o = b4(data, e + 16);
	        var z = o == 4294967295 || c == 65535;
	        if (z) {
	            var ze = b4(data, e - 12);
	            z = b4(data, ze) == 0x6064B50;
	            if (z) {
	                c = lft = b4(data, ze + 32);
	                o = b4(data, ze + 48);
	            }
	        }
	        var fltr = opts && opts.filter;
	        var _loop_3 = function (i) {
	            var _a = zh(data, o, z), c_1 = _a[0], sc = _a[1], su = _a[2], fn = _a[3], no = _a[4], off = _a[5], b = slzh(data, off);
	            o = no;
	            var cbl = function (e, d) {
	                if (e) {
	                    tAll();
	                    cbd(e, null);
	                }
	                else {
	                    if (d)
	                        files[fn] = d;
	                    if (!--lft)
	                        cbd(null, files);
	                }
	            };
	            if (!fltr || fltr({
	                name: fn,
	                size: sc,
	                originalSize: su,
	                compression: c_1
	            })) {
	                if (!c_1)
	                    cbl(null, slc(data, b, b + sc));
	                else if (c_1 == 8) {
	                    var infl = data.subarray(b, b + sc);
	                    if (sc < 320000) {
	                        try {
	                            cbl(null, inflateSync(infl, new u8(su)));
	                        }
	                        catch (e) {
	                            cbl(e, null);
	                        }
	                    }
	                    else
	                        term.push(inflate(infl, { size: su }, cbl));
	                }
	                else
	                    cbl(err(14, 'unknown compression type ' + c_1, 1), null);
	            }
	            else
	                cbl(null, null);
	        };
	        for (var i = 0; i < c; ++i) {
	            _loop_3(i);
	        }
	    }
	    else
	        cbd(null, {});
	    return tAll;
	}

	var buffer = {};

	var base64Js = {};

	base64Js.byteLength = byteLength;
	base64Js.toByteArray = toByteArray;
	base64Js.fromByteArray = fromByteArray;

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i];
	  revLookup[code.charCodeAt(i)] = i;
	}

	// Support decoding URL-safe base64 strings, as Node.js does.
	// See: https://en.wikipedia.org/wiki/Base64#URL_applications
	revLookup['-'.charCodeAt(0)] = 62;
	revLookup['_'.charCodeAt(0)] = 63;

	function getLens (b64) {
	  var len = b64.length;

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // Trim off extra bytes after placeholder bytes are found
	  // See: https://github.com/beatgammit/base64-js/issues/42
	  var validLen = b64.indexOf('=');
	  if (validLen === -1) validLen = len;

	  var placeHoldersLen = validLen === len
	    ? 0
	    : 4 - (validLen % 4);

	  return [validLen, placeHoldersLen]
	}

	// base64 is 4/3 + up to two characters of the original data
	function byteLength (b64) {
	  var lens = getLens(b64);
	  var validLen = lens[0];
	  var placeHoldersLen = lens[1];
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}

	function _byteLength (b64, validLen, placeHoldersLen) {
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}

	function toByteArray (b64) {
	  var tmp;
	  var lens = getLens(b64);
	  var validLen = lens[0];
	  var placeHoldersLen = lens[1];

	  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));

	  var curByte = 0;

	  // if there are placeholders, only get up to the last complete 4 chars
	  var len = placeHoldersLen > 0
	    ? validLen - 4
	    : validLen;

	  var i;
	  for (i = 0; i < len; i += 4) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 18) |
	      (revLookup[b64.charCodeAt(i + 1)] << 12) |
	      (revLookup[b64.charCodeAt(i + 2)] << 6) |
	      revLookup[b64.charCodeAt(i + 3)];
	    arr[curByte++] = (tmp >> 16) & 0xFF;
	    arr[curByte++] = (tmp >> 8) & 0xFF;
	    arr[curByte++] = tmp & 0xFF;
	  }

	  if (placeHoldersLen === 2) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 2) |
	      (revLookup[b64.charCodeAt(i + 1)] >> 4);
	    arr[curByte++] = tmp & 0xFF;
	  }

	  if (placeHoldersLen === 1) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 10) |
	      (revLookup[b64.charCodeAt(i + 1)] << 4) |
	      (revLookup[b64.charCodeAt(i + 2)] >> 2);
	    arr[curByte++] = (tmp >> 8) & 0xFF;
	    arr[curByte++] = tmp & 0xFF;
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] +
	    lookup[num >> 12 & 0x3F] +
	    lookup[num >> 6 & 0x3F] +
	    lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp =
	      ((uint8[i] << 16) & 0xFF0000) +
	      ((uint8[i + 1] << 8) & 0xFF00) +
	      (uint8[i + 2] & 0xFF);
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    parts.push(
	      lookup[tmp >> 2] +
	      lookup[(tmp << 4) & 0x3F] +
	      '=='
	    );
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
	    parts.push(
	      lookup[tmp >> 10] +
	      lookup[(tmp >> 4) & 0x3F] +
	      lookup[(tmp << 2) & 0x3F] +
	      '='
	    );
	  }

	  return parts.join('')
	}

	var ieee754 = {};

	/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */

	ieee754.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = (nBytes * 8) - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? (nBytes - 1) : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	};

	ieee754.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = (nBytes * 8) - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
	  var i = isLE ? 0 : (nBytes - 1);
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = ((value * c) - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128;
	};

	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */

	(function (exports) {

		const base64 = base64Js;
		const ieee754$1 = ieee754;
		const customInspectSymbol =
		  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
		    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
		    : null;

		exports.Buffer = Buffer;
		exports.SlowBuffer = SlowBuffer;
		exports.INSPECT_MAX_BYTES = 50;

		const K_MAX_LENGTH = 0x7fffffff;
		exports.kMaxLength = K_MAX_LENGTH;

		/**
		 * If `Buffer.TYPED_ARRAY_SUPPORT`:
		 *   === true    Use Uint8Array implementation (fastest)
		 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
		 *               implementation (most compatible, even IE6)
		 *
		 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
		 * Opera 11.6+, iOS 4.2+.
		 *
		 * We report that the browser does not support typed arrays if the are not subclassable
		 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
		 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
		 * for __proto__ and has a buggy typed array implementation.
		 */
		Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

		if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
		    typeof console.error === 'function') {
		  console.error(
		    'This browser lacks typed array (Uint8Array) support which is required by ' +
		    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
		  );
		}

		function typedArraySupport () {
		  // Can typed array instances can be augmented?
		  try {
		    const arr = new Uint8Array(1);
		    const proto = { foo: function () { return 42 } };
		    Object.setPrototypeOf(proto, Uint8Array.prototype);
		    Object.setPrototypeOf(arr, proto);
		    return arr.foo() === 42
		  } catch (e) {
		    return false
		  }
		}

		Object.defineProperty(Buffer.prototype, 'parent', {
		  enumerable: true,
		  get: function () {
		    if (!Buffer.isBuffer(this)) return undefined
		    return this.buffer
		  }
		});

		Object.defineProperty(Buffer.prototype, 'offset', {
		  enumerable: true,
		  get: function () {
		    if (!Buffer.isBuffer(this)) return undefined
		    return this.byteOffset
		  }
		});

		function createBuffer (length) {
		  if (length > K_MAX_LENGTH) {
		    throw new RangeError('The value "' + length + '" is invalid for option "size"')
		  }
		  // Return an augmented `Uint8Array` instance
		  const buf = new Uint8Array(length);
		  Object.setPrototypeOf(buf, Buffer.prototype);
		  return buf
		}

		/**
		 * The Buffer constructor returns instances of `Uint8Array` that have their
		 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
		 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
		 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
		 * returns a single octet.
		 *
		 * The `Uint8Array` prototype remains unmodified.
		 */

		function Buffer (arg, encodingOrOffset, length) {
		  // Common case.
		  if (typeof arg === 'number') {
		    if (typeof encodingOrOffset === 'string') {
		      throw new TypeError(
		        'The "string" argument must be of type string. Received type number'
		      )
		    }
		    return allocUnsafe(arg)
		  }
		  return from(arg, encodingOrOffset, length)
		}

		Buffer.poolSize = 8192; // not used by this implementation

		function from (value, encodingOrOffset, length) {
		  if (typeof value === 'string') {
		    return fromString(value, encodingOrOffset)
		  }

		  if (ArrayBuffer.isView(value)) {
		    return fromArrayView(value)
		  }

		  if (value == null) {
		    throw new TypeError(
		      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
		      'or Array-like Object. Received type ' + (typeof value)
		    )
		  }

		  if (isInstance(value, ArrayBuffer) ||
		      (value && isInstance(value.buffer, ArrayBuffer))) {
		    return fromArrayBuffer(value, encodingOrOffset, length)
		  }

		  if (typeof SharedArrayBuffer !== 'undefined' &&
		      (isInstance(value, SharedArrayBuffer) ||
		      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
		    return fromArrayBuffer(value, encodingOrOffset, length)
		  }

		  if (typeof value === 'number') {
		    throw new TypeError(
		      'The "value" argument must not be of type number. Received type number'
		    )
		  }

		  const valueOf = value.valueOf && value.valueOf();
		  if (valueOf != null && valueOf !== value) {
		    return Buffer.from(valueOf, encodingOrOffset, length)
		  }

		  const b = fromObject(value);
		  if (b) return b

		  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
		      typeof value[Symbol.toPrimitive] === 'function') {
		    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
		  }

		  throw new TypeError(
		    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
		    'or Array-like Object. Received type ' + (typeof value)
		  )
		}

		/**
		 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
		 * if value is a number.
		 * Buffer.from(str[, encoding])
		 * Buffer.from(array)
		 * Buffer.from(buffer)
		 * Buffer.from(arrayBuffer[, byteOffset[, length]])
		 **/
		Buffer.from = function (value, encodingOrOffset, length) {
		  return from(value, encodingOrOffset, length)
		};

		// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
		// https://github.com/feross/buffer/pull/148
		Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
		Object.setPrototypeOf(Buffer, Uint8Array);

		function assertSize (size) {
		  if (typeof size !== 'number') {
		    throw new TypeError('"size" argument must be of type number')
		  } else if (size < 0) {
		    throw new RangeError('The value "' + size + '" is invalid for option "size"')
		  }
		}

		function alloc (size, fill, encoding) {
		  assertSize(size);
		  if (size <= 0) {
		    return createBuffer(size)
		  }
		  if (fill !== undefined) {
		    // Only pay attention to encoding if it's a string. This
		    // prevents accidentally sending in a number that would
		    // be interpreted as a start offset.
		    return typeof encoding === 'string'
		      ? createBuffer(size).fill(fill, encoding)
		      : createBuffer(size).fill(fill)
		  }
		  return createBuffer(size)
		}

		/**
		 * Creates a new filled Buffer instance.
		 * alloc(size[, fill[, encoding]])
		 **/
		Buffer.alloc = function (size, fill, encoding) {
		  return alloc(size, fill, encoding)
		};

		function allocUnsafe (size) {
		  assertSize(size);
		  return createBuffer(size < 0 ? 0 : checked(size) | 0)
		}

		/**
		 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
		 * */
		Buffer.allocUnsafe = function (size) {
		  return allocUnsafe(size)
		};
		/**
		 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
		 */
		Buffer.allocUnsafeSlow = function (size) {
		  return allocUnsafe(size)
		};

		function fromString (string, encoding) {
		  if (typeof encoding !== 'string' || encoding === '') {
		    encoding = 'utf8';
		  }

		  if (!Buffer.isEncoding(encoding)) {
		    throw new TypeError('Unknown encoding: ' + encoding)
		  }

		  const length = byteLength(string, encoding) | 0;
		  let buf = createBuffer(length);

		  const actual = buf.write(string, encoding);

		  if (actual !== length) {
		    // Writing a hex string, for example, that contains invalid characters will
		    // cause everything after the first invalid character to be ignored. (e.g.
		    // 'abxxcd' will be treated as 'ab')
		    buf = buf.slice(0, actual);
		  }

		  return buf
		}

		function fromArrayLike (array) {
		  const length = array.length < 0 ? 0 : checked(array.length) | 0;
		  const buf = createBuffer(length);
		  for (let i = 0; i < length; i += 1) {
		    buf[i] = array[i] & 255;
		  }
		  return buf
		}

		function fromArrayView (arrayView) {
		  if (isInstance(arrayView, Uint8Array)) {
		    const copy = new Uint8Array(arrayView);
		    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
		  }
		  return fromArrayLike(arrayView)
		}

		function fromArrayBuffer (array, byteOffset, length) {
		  if (byteOffset < 0 || array.byteLength < byteOffset) {
		    throw new RangeError('"offset" is outside of buffer bounds')
		  }

		  if (array.byteLength < byteOffset + (length || 0)) {
		    throw new RangeError('"length" is outside of buffer bounds')
		  }

		  let buf;
		  if (byteOffset === undefined && length === undefined) {
		    buf = new Uint8Array(array);
		  } else if (length === undefined) {
		    buf = new Uint8Array(array, byteOffset);
		  } else {
		    buf = new Uint8Array(array, byteOffset, length);
		  }

		  // Return an augmented `Uint8Array` instance
		  Object.setPrototypeOf(buf, Buffer.prototype);

		  return buf
		}

		function fromObject (obj) {
		  if (Buffer.isBuffer(obj)) {
		    const len = checked(obj.length) | 0;
		    const buf = createBuffer(len);

		    if (buf.length === 0) {
		      return buf
		    }

		    obj.copy(buf, 0, 0, len);
		    return buf
		  }

		  if (obj.length !== undefined) {
		    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
		      return createBuffer(0)
		    }
		    return fromArrayLike(obj)
		  }

		  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
		    return fromArrayLike(obj.data)
		  }
		}

		function checked (length) {
		  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
		  // length is NaN (which is otherwise coerced to zero.)
		  if (length >= K_MAX_LENGTH) {
		    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
		                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
		  }
		  return length | 0
		}

		function SlowBuffer (length) {
		  if (+length != length) { // eslint-disable-line eqeqeq
		    length = 0;
		  }
		  return Buffer.alloc(+length)
		}

		Buffer.isBuffer = function isBuffer (b) {
		  return b != null && b._isBuffer === true &&
		    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
		};

		Buffer.compare = function compare (a, b) {
		  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
		  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
		  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
		    throw new TypeError(
		      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
		    )
		  }

		  if (a === b) return 0

		  let x = a.length;
		  let y = b.length;

		  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
		    if (a[i] !== b[i]) {
		      x = a[i];
		      y = b[i];
		      break
		    }
		  }

		  if (x < y) return -1
		  if (y < x) return 1
		  return 0
		};

		Buffer.isEncoding = function isEncoding (encoding) {
		  switch (String(encoding).toLowerCase()) {
		    case 'hex':
		    case 'utf8':
		    case 'utf-8':
		    case 'ascii':
		    case 'latin1':
		    case 'binary':
		    case 'base64':
		    case 'ucs2':
		    case 'ucs-2':
		    case 'utf16le':
		    case 'utf-16le':
		      return true
		    default:
		      return false
		  }
		};

		Buffer.concat = function concat (list, length) {
		  if (!Array.isArray(list)) {
		    throw new TypeError('"list" argument must be an Array of Buffers')
		  }

		  if (list.length === 0) {
		    return Buffer.alloc(0)
		  }

		  let i;
		  if (length === undefined) {
		    length = 0;
		    for (i = 0; i < list.length; ++i) {
		      length += list[i].length;
		    }
		  }

		  const buffer = Buffer.allocUnsafe(length);
		  let pos = 0;
		  for (i = 0; i < list.length; ++i) {
		    let buf = list[i];
		    if (isInstance(buf, Uint8Array)) {
		      if (pos + buf.length > buffer.length) {
		        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
		        buf.copy(buffer, pos);
		      } else {
		        Uint8Array.prototype.set.call(
		          buffer,
		          buf,
		          pos
		        );
		      }
		    } else if (!Buffer.isBuffer(buf)) {
		      throw new TypeError('"list" argument must be an Array of Buffers')
		    } else {
		      buf.copy(buffer, pos);
		    }
		    pos += buf.length;
		  }
		  return buffer
		};

		function byteLength (string, encoding) {
		  if (Buffer.isBuffer(string)) {
		    return string.length
		  }
		  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
		    return string.byteLength
		  }
		  if (typeof string !== 'string') {
		    throw new TypeError(
		      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
		      'Received type ' + typeof string
		    )
		  }

		  const len = string.length;
		  const mustMatch = (arguments.length > 2 && arguments[2] === true);
		  if (!mustMatch && len === 0) return 0

		  // Use a for loop to avoid recursion
		  let loweredCase = false;
		  for (;;) {
		    switch (encoding) {
		      case 'ascii':
		      case 'latin1':
		      case 'binary':
		        return len
		      case 'utf8':
		      case 'utf-8':
		        return utf8ToBytes(string).length
		      case 'ucs2':
		      case 'ucs-2':
		      case 'utf16le':
		      case 'utf-16le':
		        return len * 2
		      case 'hex':
		        return len >>> 1
		      case 'base64':
		        return base64ToBytes(string).length
		      default:
		        if (loweredCase) {
		          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
		        }
		        encoding = ('' + encoding).toLowerCase();
		        loweredCase = true;
		    }
		  }
		}
		Buffer.byteLength = byteLength;

		function slowToString (encoding, start, end) {
		  let loweredCase = false;

		  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
		  // property of a typed array.

		  // This behaves neither like String nor Uint8Array in that we set start/end
		  // to their upper/lower bounds if the value passed is out of range.
		  // undefined is handled specially as per ECMA-262 6th Edition,
		  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
		  if (start === undefined || start < 0) {
		    start = 0;
		  }
		  // Return early if start > this.length. Done here to prevent potential uint32
		  // coercion fail below.
		  if (start > this.length) {
		    return ''
		  }

		  if (end === undefined || end > this.length) {
		    end = this.length;
		  }

		  if (end <= 0) {
		    return ''
		  }

		  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
		  end >>>= 0;
		  start >>>= 0;

		  if (end <= start) {
		    return ''
		  }

		  if (!encoding) encoding = 'utf8';

		  while (true) {
		    switch (encoding) {
		      case 'hex':
		        return hexSlice(this, start, end)

		      case 'utf8':
		      case 'utf-8':
		        return utf8Slice(this, start, end)

		      case 'ascii':
		        return asciiSlice(this, start, end)

		      case 'latin1':
		      case 'binary':
		        return latin1Slice(this, start, end)

		      case 'base64':
		        return base64Slice(this, start, end)

		      case 'ucs2':
		      case 'ucs-2':
		      case 'utf16le':
		      case 'utf-16le':
		        return utf16leSlice(this, start, end)

		      default:
		        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
		        encoding = (encoding + '').toLowerCase();
		        loweredCase = true;
		    }
		  }
		}

		// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
		// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
		// reliably in a browserify context because there could be multiple different
		// copies of the 'buffer' package in use. This method works even for Buffer
		// instances that were created from another copy of the `buffer` package.
		// See: https://github.com/feross/buffer/issues/154
		Buffer.prototype._isBuffer = true;

		function swap (b, n, m) {
		  const i = b[n];
		  b[n] = b[m];
		  b[m] = i;
		}

		Buffer.prototype.swap16 = function swap16 () {
		  const len = this.length;
		  if (len % 2 !== 0) {
		    throw new RangeError('Buffer size must be a multiple of 16-bits')
		  }
		  for (let i = 0; i < len; i += 2) {
		    swap(this, i, i + 1);
		  }
		  return this
		};

		Buffer.prototype.swap32 = function swap32 () {
		  const len = this.length;
		  if (len % 4 !== 0) {
		    throw new RangeError('Buffer size must be a multiple of 32-bits')
		  }
		  for (let i = 0; i < len; i += 4) {
		    swap(this, i, i + 3);
		    swap(this, i + 1, i + 2);
		  }
		  return this
		};

		Buffer.prototype.swap64 = function swap64 () {
		  const len = this.length;
		  if (len % 8 !== 0) {
		    throw new RangeError('Buffer size must be a multiple of 64-bits')
		  }
		  for (let i = 0; i < len; i += 8) {
		    swap(this, i, i + 7);
		    swap(this, i + 1, i + 6);
		    swap(this, i + 2, i + 5);
		    swap(this, i + 3, i + 4);
		  }
		  return this
		};

		Buffer.prototype.toString = function toString () {
		  const length = this.length;
		  if (length === 0) return ''
		  if (arguments.length === 0) return utf8Slice(this, 0, length)
		  return slowToString.apply(this, arguments)
		};

		Buffer.prototype.toLocaleString = Buffer.prototype.toString;

		Buffer.prototype.equals = function equals (b) {
		  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
		  if (this === b) return true
		  return Buffer.compare(this, b) === 0
		};

		Buffer.prototype.inspect = function inspect () {
		  let str = '';
		  const max = exports.INSPECT_MAX_BYTES;
		  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
		  if (this.length > max) str += ' ... ';
		  return '<Buffer ' + str + '>'
		};
		if (customInspectSymbol) {
		  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
		}

		Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
		  if (isInstance(target, Uint8Array)) {
		    target = Buffer.from(target, target.offset, target.byteLength);
		  }
		  if (!Buffer.isBuffer(target)) {
		    throw new TypeError(
		      'The "target" argument must be one of type Buffer or Uint8Array. ' +
		      'Received type ' + (typeof target)
		    )
		  }

		  if (start === undefined) {
		    start = 0;
		  }
		  if (end === undefined) {
		    end = target ? target.length : 0;
		  }
		  if (thisStart === undefined) {
		    thisStart = 0;
		  }
		  if (thisEnd === undefined) {
		    thisEnd = this.length;
		  }

		  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
		    throw new RangeError('out of range index')
		  }

		  if (thisStart >= thisEnd && start >= end) {
		    return 0
		  }
		  if (thisStart >= thisEnd) {
		    return -1
		  }
		  if (start >= end) {
		    return 1
		  }

		  start >>>= 0;
		  end >>>= 0;
		  thisStart >>>= 0;
		  thisEnd >>>= 0;

		  if (this === target) return 0

		  let x = thisEnd - thisStart;
		  let y = end - start;
		  const len = Math.min(x, y);

		  const thisCopy = this.slice(thisStart, thisEnd);
		  const targetCopy = target.slice(start, end);

		  for (let i = 0; i < len; ++i) {
		    if (thisCopy[i] !== targetCopy[i]) {
		      x = thisCopy[i];
		      y = targetCopy[i];
		      break
		    }
		  }

		  if (x < y) return -1
		  if (y < x) return 1
		  return 0
		};

		// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
		// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
		//
		// Arguments:
		// - buffer - a Buffer to search
		// - val - a string, Buffer, or number
		// - byteOffset - an index into `buffer`; will be clamped to an int32
		// - encoding - an optional encoding, relevant is val is a string
		// - dir - true for indexOf, false for lastIndexOf
		function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
		  // Empty buffer means no match
		  if (buffer.length === 0) return -1

		  // Normalize byteOffset
		  if (typeof byteOffset === 'string') {
		    encoding = byteOffset;
		    byteOffset = 0;
		  } else if (byteOffset > 0x7fffffff) {
		    byteOffset = 0x7fffffff;
		  } else if (byteOffset < -0x80000000) {
		    byteOffset = -0x80000000;
		  }
		  byteOffset = +byteOffset; // Coerce to Number.
		  if (numberIsNaN(byteOffset)) {
		    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
		    byteOffset = dir ? 0 : (buffer.length - 1);
		  }

		  // Normalize byteOffset: negative offsets start from the end of the buffer
		  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
		  if (byteOffset >= buffer.length) {
		    if (dir) return -1
		    else byteOffset = buffer.length - 1;
		  } else if (byteOffset < 0) {
		    if (dir) byteOffset = 0;
		    else return -1
		  }

		  // Normalize val
		  if (typeof val === 'string') {
		    val = Buffer.from(val, encoding);
		  }

		  // Finally, search either indexOf (if dir is true) or lastIndexOf
		  if (Buffer.isBuffer(val)) {
		    // Special case: looking for empty string/buffer always fails
		    if (val.length === 0) {
		      return -1
		    }
		    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
		  } else if (typeof val === 'number') {
		    val = val & 0xFF; // Search for a byte value [0-255]
		    if (typeof Uint8Array.prototype.indexOf === 'function') {
		      if (dir) {
		        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
		      } else {
		        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
		      }
		    }
		    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
		  }

		  throw new TypeError('val must be string, number or Buffer')
		}

		function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
		  let indexSize = 1;
		  let arrLength = arr.length;
		  let valLength = val.length;

		  if (encoding !== undefined) {
		    encoding = String(encoding).toLowerCase();
		    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
		        encoding === 'utf16le' || encoding === 'utf-16le') {
		      if (arr.length < 2 || val.length < 2) {
		        return -1
		      }
		      indexSize = 2;
		      arrLength /= 2;
		      valLength /= 2;
		      byteOffset /= 2;
		    }
		  }

		  function read (buf, i) {
		    if (indexSize === 1) {
		      return buf[i]
		    } else {
		      return buf.readUInt16BE(i * indexSize)
		    }
		  }

		  let i;
		  if (dir) {
		    let foundIndex = -1;
		    for (i = byteOffset; i < arrLength; i++) {
		      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
		        if (foundIndex === -1) foundIndex = i;
		        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
		      } else {
		        if (foundIndex !== -1) i -= i - foundIndex;
		        foundIndex = -1;
		      }
		    }
		  } else {
		    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
		    for (i = byteOffset; i >= 0; i--) {
		      let found = true;
		      for (let j = 0; j < valLength; j++) {
		        if (read(arr, i + j) !== read(val, j)) {
		          found = false;
		          break
		        }
		      }
		      if (found) return i
		    }
		  }

		  return -1
		}

		Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
		  return this.indexOf(val, byteOffset, encoding) !== -1
		};

		Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
		  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
		};

		Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
		  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
		};

		function hexWrite (buf, string, offset, length) {
		  offset = Number(offset) || 0;
		  const remaining = buf.length - offset;
		  if (!length) {
		    length = remaining;
		  } else {
		    length = Number(length);
		    if (length > remaining) {
		      length = remaining;
		    }
		  }

		  const strLen = string.length;

		  if (length > strLen / 2) {
		    length = strLen / 2;
		  }
		  let i;
		  for (i = 0; i < length; ++i) {
		    const parsed = parseInt(string.substr(i * 2, 2), 16);
		    if (numberIsNaN(parsed)) return i
		    buf[offset + i] = parsed;
		  }
		  return i
		}

		function utf8Write (buf, string, offset, length) {
		  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
		}

		function asciiWrite (buf, string, offset, length) {
		  return blitBuffer(asciiToBytes(string), buf, offset, length)
		}

		function base64Write (buf, string, offset, length) {
		  return blitBuffer(base64ToBytes(string), buf, offset, length)
		}

		function ucs2Write (buf, string, offset, length) {
		  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
		}

		Buffer.prototype.write = function write (string, offset, length, encoding) {
		  // Buffer#write(string)
		  if (offset === undefined) {
		    encoding = 'utf8';
		    length = this.length;
		    offset = 0;
		  // Buffer#write(string, encoding)
		  } else if (length === undefined && typeof offset === 'string') {
		    encoding = offset;
		    length = this.length;
		    offset = 0;
		  // Buffer#write(string, offset[, length][, encoding])
		  } else if (isFinite(offset)) {
		    offset = offset >>> 0;
		    if (isFinite(length)) {
		      length = length >>> 0;
		      if (encoding === undefined) encoding = 'utf8';
		    } else {
		      encoding = length;
		      length = undefined;
		    }
		  } else {
		    throw new Error(
		      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
		    )
		  }

		  const remaining = this.length - offset;
		  if (length === undefined || length > remaining) length = remaining;

		  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
		    throw new RangeError('Attempt to write outside buffer bounds')
		  }

		  if (!encoding) encoding = 'utf8';

		  let loweredCase = false;
		  for (;;) {
		    switch (encoding) {
		      case 'hex':
		        return hexWrite(this, string, offset, length)

		      case 'utf8':
		      case 'utf-8':
		        return utf8Write(this, string, offset, length)

		      case 'ascii':
		      case 'latin1':
		      case 'binary':
		        return asciiWrite(this, string, offset, length)

		      case 'base64':
		        // Warning: maxLength not taken into account in base64Write
		        return base64Write(this, string, offset, length)

		      case 'ucs2':
		      case 'ucs-2':
		      case 'utf16le':
		      case 'utf-16le':
		        return ucs2Write(this, string, offset, length)

		      default:
		        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
		        encoding = ('' + encoding).toLowerCase();
		        loweredCase = true;
		    }
		  }
		};

		Buffer.prototype.toJSON = function toJSON () {
		  return {
		    type: 'Buffer',
		    data: Array.prototype.slice.call(this._arr || this, 0)
		  }
		};

		function base64Slice (buf, start, end) {
		  if (start === 0 && end === buf.length) {
		    return base64.fromByteArray(buf)
		  } else {
		    return base64.fromByteArray(buf.slice(start, end))
		  }
		}

		function utf8Slice (buf, start, end) {
		  end = Math.min(buf.length, end);
		  const res = [];

		  let i = start;
		  while (i < end) {
		    const firstByte = buf[i];
		    let codePoint = null;
		    let bytesPerSequence = (firstByte > 0xEF)
		      ? 4
		      : (firstByte > 0xDF)
		          ? 3
		          : (firstByte > 0xBF)
		              ? 2
		              : 1;

		    if (i + bytesPerSequence <= end) {
		      let secondByte, thirdByte, fourthByte, tempCodePoint;

		      switch (bytesPerSequence) {
		        case 1:
		          if (firstByte < 0x80) {
		            codePoint = firstByte;
		          }
		          break
		        case 2:
		          secondByte = buf[i + 1];
		          if ((secondByte & 0xC0) === 0x80) {
		            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
		            if (tempCodePoint > 0x7F) {
		              codePoint = tempCodePoint;
		            }
		          }
		          break
		        case 3:
		          secondByte = buf[i + 1];
		          thirdByte = buf[i + 2];
		          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
		            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
		            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
		              codePoint = tempCodePoint;
		            }
		          }
		          break
		        case 4:
		          secondByte = buf[i + 1];
		          thirdByte = buf[i + 2];
		          fourthByte = buf[i + 3];
		          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
		            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
		            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
		              codePoint = tempCodePoint;
		            }
		          }
		      }
		    }

		    if (codePoint === null) {
		      // we did not generate a valid codePoint so insert a
		      // replacement char (U+FFFD) and advance only 1 byte
		      codePoint = 0xFFFD;
		      bytesPerSequence = 1;
		    } else if (codePoint > 0xFFFF) {
		      // encode to utf16 (surrogate pair dance)
		      codePoint -= 0x10000;
		      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
		      codePoint = 0xDC00 | codePoint & 0x3FF;
		    }

		    res.push(codePoint);
		    i += bytesPerSequence;
		  }

		  return decodeCodePointsArray(res)
		}

		// Based on http://stackoverflow.com/a/22747272/680742, the browser with
		// the lowest limit is Chrome, with 0x10000 args.
		// We go 1 magnitude less, for safety
		const MAX_ARGUMENTS_LENGTH = 0x1000;

		function decodeCodePointsArray (codePoints) {
		  const len = codePoints.length;
		  if (len <= MAX_ARGUMENTS_LENGTH) {
		    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
		  }

		  // Decode in chunks to avoid "call stack size exceeded".
		  let res = '';
		  let i = 0;
		  while (i < len) {
		    res += String.fromCharCode.apply(
		      String,
		      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
		    );
		  }
		  return res
		}

		function asciiSlice (buf, start, end) {
		  let ret = '';
		  end = Math.min(buf.length, end);

		  for (let i = start; i < end; ++i) {
		    ret += String.fromCharCode(buf[i] & 0x7F);
		  }
		  return ret
		}

		function latin1Slice (buf, start, end) {
		  let ret = '';
		  end = Math.min(buf.length, end);

		  for (let i = start; i < end; ++i) {
		    ret += String.fromCharCode(buf[i]);
		  }
		  return ret
		}

		function hexSlice (buf, start, end) {
		  const len = buf.length;

		  if (!start || start < 0) start = 0;
		  if (!end || end < 0 || end > len) end = len;

		  let out = '';
		  for (let i = start; i < end; ++i) {
		    out += hexSliceLookupTable[buf[i]];
		  }
		  return out
		}

		function utf16leSlice (buf, start, end) {
		  const bytes = buf.slice(start, end);
		  let res = '';
		  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
		  for (let i = 0; i < bytes.length - 1; i += 2) {
		    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256));
		  }
		  return res
		}

		Buffer.prototype.slice = function slice (start, end) {
		  const len = this.length;
		  start = ~~start;
		  end = end === undefined ? len : ~~end;

		  if (start < 0) {
		    start += len;
		    if (start < 0) start = 0;
		  } else if (start > len) {
		    start = len;
		  }

		  if (end < 0) {
		    end += len;
		    if (end < 0) end = 0;
		  } else if (end > len) {
		    end = len;
		  }

		  if (end < start) end = start;

		  const newBuf = this.subarray(start, end);
		  // Return an augmented `Uint8Array` instance
		  Object.setPrototypeOf(newBuf, Buffer.prototype);

		  return newBuf
		};

		/*
		 * Need to make sure that buffer isn't trying to write out of bounds.
		 */
		function checkOffset (offset, ext, length) {
		  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
		  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
		}

		Buffer.prototype.readUintLE =
		Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
		  offset = offset >>> 0;
		  byteLength = byteLength >>> 0;
		  if (!noAssert) checkOffset(offset, byteLength, this.length);

		  let val = this[offset];
		  let mul = 1;
		  let i = 0;
		  while (++i < byteLength && (mul *= 0x100)) {
		    val += this[offset + i] * mul;
		  }

		  return val
		};

		Buffer.prototype.readUintBE =
		Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
		  offset = offset >>> 0;
		  byteLength = byteLength >>> 0;
		  if (!noAssert) {
		    checkOffset(offset, byteLength, this.length);
		  }

		  let val = this[offset + --byteLength];
		  let mul = 1;
		  while (byteLength > 0 && (mul *= 0x100)) {
		    val += this[offset + --byteLength] * mul;
		  }

		  return val
		};

		Buffer.prototype.readUint8 =
		Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 1, this.length);
		  return this[offset]
		};

		Buffer.prototype.readUint16LE =
		Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 2, this.length);
		  return this[offset] | (this[offset + 1] << 8)
		};

		Buffer.prototype.readUint16BE =
		Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 2, this.length);
		  return (this[offset] << 8) | this[offset + 1]
		};

		Buffer.prototype.readUint32LE =
		Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 4, this.length);

		  return ((this[offset]) |
		      (this[offset + 1] << 8) |
		      (this[offset + 2] << 16)) +
		      (this[offset + 3] * 0x1000000)
		};

		Buffer.prototype.readUint32BE =
		Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 4, this.length);

		  return (this[offset] * 0x1000000) +
		    ((this[offset + 1] << 16) |
		    (this[offset + 2] << 8) |
		    this[offset + 3])
		};

		Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
		  offset = offset >>> 0;
		  validateNumber(offset, 'offset');
		  const first = this[offset];
		  const last = this[offset + 7];
		  if (first === undefined || last === undefined) {
		    boundsError(offset, this.length - 8);
		  }

		  const lo = first +
		    this[++offset] * 2 ** 8 +
		    this[++offset] * 2 ** 16 +
		    this[++offset] * 2 ** 24;

		  const hi = this[++offset] +
		    this[++offset] * 2 ** 8 +
		    this[++offset] * 2 ** 16 +
		    last * 2 ** 24;

		  return BigInt(lo) + (BigInt(hi) << BigInt(32))
		});

		Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
		  offset = offset >>> 0;
		  validateNumber(offset, 'offset');
		  const first = this[offset];
		  const last = this[offset + 7];
		  if (first === undefined || last === undefined) {
		    boundsError(offset, this.length - 8);
		  }

		  const hi = first * 2 ** 24 +
		    this[++offset] * 2 ** 16 +
		    this[++offset] * 2 ** 8 +
		    this[++offset];

		  const lo = this[++offset] * 2 ** 24 +
		    this[++offset] * 2 ** 16 +
		    this[++offset] * 2 ** 8 +
		    last;

		  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
		});

		Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
		  offset = offset >>> 0;
		  byteLength = byteLength >>> 0;
		  if (!noAssert) checkOffset(offset, byteLength, this.length);

		  let val = this[offset];
		  let mul = 1;
		  let i = 0;
		  while (++i < byteLength && (mul *= 0x100)) {
		    val += this[offset + i] * mul;
		  }
		  mul *= 0x80;

		  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

		  return val
		};

		Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
		  offset = offset >>> 0;
		  byteLength = byteLength >>> 0;
		  if (!noAssert) checkOffset(offset, byteLength, this.length);

		  let i = byteLength;
		  let mul = 1;
		  let val = this[offset + --i];
		  while (i > 0 && (mul *= 0x100)) {
		    val += this[offset + --i] * mul;
		  }
		  mul *= 0x80;

		  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

		  return val
		};

		Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 1, this.length);
		  if (!(this[offset] & 0x80)) return (this[offset])
		  return ((0xff - this[offset] + 1) * -1)
		};

		Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 2, this.length);
		  const val = this[offset] | (this[offset + 1] << 8);
		  return (val & 0x8000) ? val | 0xFFFF0000 : val
		};

		Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 2, this.length);
		  const val = this[offset + 1] | (this[offset] << 8);
		  return (val & 0x8000) ? val | 0xFFFF0000 : val
		};

		Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 4, this.length);

		  return (this[offset]) |
		    (this[offset + 1] << 8) |
		    (this[offset + 2] << 16) |
		    (this[offset + 3] << 24)
		};

		Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 4, this.length);

		  return (this[offset] << 24) |
		    (this[offset + 1] << 16) |
		    (this[offset + 2] << 8) |
		    (this[offset + 3])
		};

		Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
		  offset = offset >>> 0;
		  validateNumber(offset, 'offset');
		  const first = this[offset];
		  const last = this[offset + 7];
		  if (first === undefined || last === undefined) {
		    boundsError(offset, this.length - 8);
		  }

		  const val = this[offset + 4] +
		    this[offset + 5] * 2 ** 8 +
		    this[offset + 6] * 2 ** 16 +
		    (last << 24); // Overflow

		  return (BigInt(val) << BigInt(32)) +
		    BigInt(first +
		    this[++offset] * 2 ** 8 +
		    this[++offset] * 2 ** 16 +
		    this[++offset] * 2 ** 24)
		});

		Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
		  offset = offset >>> 0;
		  validateNumber(offset, 'offset');
		  const first = this[offset];
		  const last = this[offset + 7];
		  if (first === undefined || last === undefined) {
		    boundsError(offset, this.length - 8);
		  }

		  const val = (first << 24) + // Overflow
		    this[++offset] * 2 ** 16 +
		    this[++offset] * 2 ** 8 +
		    this[++offset];

		  return (BigInt(val) << BigInt(32)) +
		    BigInt(this[++offset] * 2 ** 24 +
		    this[++offset] * 2 ** 16 +
		    this[++offset] * 2 ** 8 +
		    last)
		});

		Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 4, this.length);
		  return ieee754$1.read(this, offset, true, 23, 4)
		};

		Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 4, this.length);
		  return ieee754$1.read(this, offset, false, 23, 4)
		};

		Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 8, this.length);
		  return ieee754$1.read(this, offset, true, 52, 8)
		};

		Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 8, this.length);
		  return ieee754$1.read(this, offset, false, 52, 8)
		};

		function checkInt (buf, value, offset, ext, max, min) {
		  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
		  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
		  if (offset + ext > buf.length) throw new RangeError('Index out of range')
		}

		Buffer.prototype.writeUintLE =
		Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  byteLength = byteLength >>> 0;
		  if (!noAssert) {
		    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
		    checkInt(this, value, offset, byteLength, maxBytes, 0);
		  }

		  let mul = 1;
		  let i = 0;
		  this[offset] = value & 0xFF;
		  while (++i < byteLength && (mul *= 0x100)) {
		    this[offset + i] = (value / mul) & 0xFF;
		  }

		  return offset + byteLength
		};

		Buffer.prototype.writeUintBE =
		Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  byteLength = byteLength >>> 0;
		  if (!noAssert) {
		    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
		    checkInt(this, value, offset, byteLength, maxBytes, 0);
		  }

		  let i = byteLength - 1;
		  let mul = 1;
		  this[offset + i] = value & 0xFF;
		  while (--i >= 0 && (mul *= 0x100)) {
		    this[offset + i] = (value / mul) & 0xFF;
		  }

		  return offset + byteLength
		};

		Buffer.prototype.writeUint8 =
		Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
		  this[offset] = (value & 0xff);
		  return offset + 1
		};

		Buffer.prototype.writeUint16LE =
		Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
		  this[offset] = (value & 0xff);
		  this[offset + 1] = (value >>> 8);
		  return offset + 2
		};

		Buffer.prototype.writeUint16BE =
		Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
		  this[offset] = (value >>> 8);
		  this[offset + 1] = (value & 0xff);
		  return offset + 2
		};

		Buffer.prototype.writeUint32LE =
		Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
		  this[offset + 3] = (value >>> 24);
		  this[offset + 2] = (value >>> 16);
		  this[offset + 1] = (value >>> 8);
		  this[offset] = (value & 0xff);
		  return offset + 4
		};

		Buffer.prototype.writeUint32BE =
		Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
		  this[offset] = (value >>> 24);
		  this[offset + 1] = (value >>> 16);
		  this[offset + 2] = (value >>> 8);
		  this[offset + 3] = (value & 0xff);
		  return offset + 4
		};

		function wrtBigUInt64LE (buf, value, offset, min, max) {
		  checkIntBI(value, min, max, buf, offset, 7);

		  let lo = Number(value & BigInt(0xffffffff));
		  buf[offset++] = lo;
		  lo = lo >> 8;
		  buf[offset++] = lo;
		  lo = lo >> 8;
		  buf[offset++] = lo;
		  lo = lo >> 8;
		  buf[offset++] = lo;
		  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
		  buf[offset++] = hi;
		  hi = hi >> 8;
		  buf[offset++] = hi;
		  hi = hi >> 8;
		  buf[offset++] = hi;
		  hi = hi >> 8;
		  buf[offset++] = hi;
		  return offset
		}

		function wrtBigUInt64BE (buf, value, offset, min, max) {
		  checkIntBI(value, min, max, buf, offset, 7);

		  let lo = Number(value & BigInt(0xffffffff));
		  buf[offset + 7] = lo;
		  lo = lo >> 8;
		  buf[offset + 6] = lo;
		  lo = lo >> 8;
		  buf[offset + 5] = lo;
		  lo = lo >> 8;
		  buf[offset + 4] = lo;
		  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
		  buf[offset + 3] = hi;
		  hi = hi >> 8;
		  buf[offset + 2] = hi;
		  hi = hi >> 8;
		  buf[offset + 1] = hi;
		  hi = hi >> 8;
		  buf[offset] = hi;
		  return offset + 8
		}

		Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
		  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
		});

		Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
		  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
		});

		Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) {
		    const limit = Math.pow(2, (8 * byteLength) - 1);

		    checkInt(this, value, offset, byteLength, limit - 1, -limit);
		  }

		  let i = 0;
		  let mul = 1;
		  let sub = 0;
		  this[offset] = value & 0xFF;
		  while (++i < byteLength && (mul *= 0x100)) {
		    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
		      sub = 1;
		    }
		    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
		  }

		  return offset + byteLength
		};

		Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) {
		    const limit = Math.pow(2, (8 * byteLength) - 1);

		    checkInt(this, value, offset, byteLength, limit - 1, -limit);
		  }

		  let i = byteLength - 1;
		  let mul = 1;
		  let sub = 0;
		  this[offset + i] = value & 0xFF;
		  while (--i >= 0 && (mul *= 0x100)) {
		    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
		      sub = 1;
		    }
		    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
		  }

		  return offset + byteLength
		};

		Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
		  if (value < 0) value = 0xff + value + 1;
		  this[offset] = (value & 0xff);
		  return offset + 1
		};

		Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
		  this[offset] = (value & 0xff);
		  this[offset + 1] = (value >>> 8);
		  return offset + 2
		};

		Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
		  this[offset] = (value >>> 8);
		  this[offset + 1] = (value & 0xff);
		  return offset + 2
		};

		Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
		  this[offset] = (value & 0xff);
		  this[offset + 1] = (value >>> 8);
		  this[offset + 2] = (value >>> 16);
		  this[offset + 3] = (value >>> 24);
		  return offset + 4
		};

		Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
		  if (value < 0) value = 0xffffffff + value + 1;
		  this[offset] = (value >>> 24);
		  this[offset + 1] = (value >>> 16);
		  this[offset + 2] = (value >>> 8);
		  this[offset + 3] = (value & 0xff);
		  return offset + 4
		};

		Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
		  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
		});

		Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
		  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
		});

		function checkIEEE754 (buf, value, offset, ext, max, min) {
		  if (offset + ext > buf.length) throw new RangeError('Index out of range')
		  if (offset < 0) throw new RangeError('Index out of range')
		}

		function writeFloat (buf, value, offset, littleEndian, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) {
		    checkIEEE754(buf, value, offset, 4);
		  }
		  ieee754$1.write(buf, value, offset, littleEndian, 23, 4);
		  return offset + 4
		}

		Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
		  return writeFloat(this, value, offset, true, noAssert)
		};

		Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
		  return writeFloat(this, value, offset, false, noAssert)
		};

		function writeDouble (buf, value, offset, littleEndian, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) {
		    checkIEEE754(buf, value, offset, 8);
		  }
		  ieee754$1.write(buf, value, offset, littleEndian, 52, 8);
		  return offset + 8
		}

		Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
		  return writeDouble(this, value, offset, true, noAssert)
		};

		Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
		  return writeDouble(this, value, offset, false, noAssert)
		};

		// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
		Buffer.prototype.copy = function copy (target, targetStart, start, end) {
		  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
		  if (!start) start = 0;
		  if (!end && end !== 0) end = this.length;
		  if (targetStart >= target.length) targetStart = target.length;
		  if (!targetStart) targetStart = 0;
		  if (end > 0 && end < start) end = start;

		  // Copy 0 bytes; we're done
		  if (end === start) return 0
		  if (target.length === 0 || this.length === 0) return 0

		  // Fatal error conditions
		  if (targetStart < 0) {
		    throw new RangeError('targetStart out of bounds')
		  }
		  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
		  if (end < 0) throw new RangeError('sourceEnd out of bounds')

		  // Are we oob?
		  if (end > this.length) end = this.length;
		  if (target.length - targetStart < end - start) {
		    end = target.length - targetStart + start;
		  }

		  const len = end - start;

		  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
		    // Use built-in when available, missing from IE11
		    this.copyWithin(targetStart, start, end);
		  } else {
		    Uint8Array.prototype.set.call(
		      target,
		      this.subarray(start, end),
		      targetStart
		    );
		  }

		  return len
		};

		// Usage:
		//    buffer.fill(number[, offset[, end]])
		//    buffer.fill(buffer[, offset[, end]])
		//    buffer.fill(string[, offset[, end]][, encoding])
		Buffer.prototype.fill = function fill (val, start, end, encoding) {
		  // Handle string cases:
		  if (typeof val === 'string') {
		    if (typeof start === 'string') {
		      encoding = start;
		      start = 0;
		      end = this.length;
		    } else if (typeof end === 'string') {
		      encoding = end;
		      end = this.length;
		    }
		    if (encoding !== undefined && typeof encoding !== 'string') {
		      throw new TypeError('encoding must be a string')
		    }
		    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
		      throw new TypeError('Unknown encoding: ' + encoding)
		    }
		    if (val.length === 1) {
		      const code = val.charCodeAt(0);
		      if ((encoding === 'utf8' && code < 128) ||
		          encoding === 'latin1') {
		        // Fast path: If `val` fits into a single byte, use that numeric value.
		        val = code;
		      }
		    }
		  } else if (typeof val === 'number') {
		    val = val & 255;
		  } else if (typeof val === 'boolean') {
		    val = Number(val);
		  }

		  // Invalid ranges are not set to a default, so can range check early.
		  if (start < 0 || this.length < start || this.length < end) {
		    throw new RangeError('Out of range index')
		  }

		  if (end <= start) {
		    return this
		  }

		  start = start >>> 0;
		  end = end === undefined ? this.length : end >>> 0;

		  if (!val) val = 0;

		  let i;
		  if (typeof val === 'number') {
		    for (i = start; i < end; ++i) {
		      this[i] = val;
		    }
		  } else {
		    const bytes = Buffer.isBuffer(val)
		      ? val
		      : Buffer.from(val, encoding);
		    const len = bytes.length;
		    if (len === 0) {
		      throw new TypeError('The value "' + val +
		        '" is invalid for argument "value"')
		    }
		    for (i = 0; i < end - start; ++i) {
		      this[i + start] = bytes[i % len];
		    }
		  }

		  return this
		};

		// CUSTOM ERRORS
		// =============

		// Simplified versions from Node, changed for Buffer-only usage
		const errors = {};
		function E (sym, getMessage, Base) {
		  errors[sym] = class NodeError extends Base {
		    constructor () {
		      super();

		      Object.defineProperty(this, 'message', {
		        value: getMessage.apply(this, arguments),
		        writable: true,
		        configurable: true
		      });

		      // Add the error code to the name to include it in the stack trace.
		      this.name = `${this.name} [${sym}]`;
		      // Access the stack to generate the error message including the error code
		      // from the name.
		      this.stack; // eslint-disable-line no-unused-expressions
		      // Reset the name to the actual name.
		      delete this.name;
		    }

		    get code () {
		      return sym
		    }

		    set code (value) {
		      Object.defineProperty(this, 'code', {
		        configurable: true,
		        enumerable: true,
		        value,
		        writable: true
		      });
		    }

		    toString () {
		      return `${this.name} [${sym}]: ${this.message}`
		    }
		  };
		}

		E('ERR_BUFFER_OUT_OF_BOUNDS',
		  function (name) {
		    if (name) {
		      return `${name} is outside of buffer bounds`
		    }

		    return 'Attempt to access memory outside buffer bounds'
		  }, RangeError);
		E('ERR_INVALID_ARG_TYPE',
		  function (name, actual) {
		    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
		  }, TypeError);
		E('ERR_OUT_OF_RANGE',
		  function (str, range, input) {
		    let msg = `The value of "${str}" is out of range.`;
		    let received = input;
		    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
		      received = addNumericalSeparator(String(input));
		    } else if (typeof input === 'bigint') {
		      received = String(input);
		      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
		        received = addNumericalSeparator(received);
		      }
		      received += 'n';
		    }
		    msg += ` It must be ${range}. Received ${received}`;
		    return msg
		  }, RangeError);

		function addNumericalSeparator (val) {
		  let res = '';
		  let i = val.length;
		  const start = val[0] === '-' ? 1 : 0;
		  for (; i >= start + 4; i -= 3) {
		    res = `_${val.slice(i - 3, i)}${res}`;
		  }
		  return `${val.slice(0, i)}${res}`
		}

		// CHECK FUNCTIONS
		// ===============

		function checkBounds (buf, offset, byteLength) {
		  validateNumber(offset, 'offset');
		  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
		    boundsError(offset, buf.length - (byteLength + 1));
		  }
		}

		function checkIntBI (value, min, max, buf, offset, byteLength) {
		  if (value > max || value < min) {
		    const n = typeof min === 'bigint' ? 'n' : '';
		    let range;
		    if (byteLength > 3) {
		      if (min === 0 || min === BigInt(0)) {
		        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
		      } else {
		        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
		                `${(byteLength + 1) * 8 - 1}${n}`;
		      }
		    } else {
		      range = `>= ${min}${n} and <= ${max}${n}`;
		    }
		    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
		  }
		  checkBounds(buf, offset, byteLength);
		}

		function validateNumber (value, name) {
		  if (typeof value !== 'number') {
		    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
		  }
		}

		function boundsError (value, length, type) {
		  if (Math.floor(value) !== value) {
		    validateNumber(value, type);
		    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
		  }

		  if (length < 0) {
		    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
		  }

		  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
		                                    `>= ${type ? 1 : 0} and <= ${length}`,
		                                    value)
		}

		// HELPER FUNCTIONS
		// ================

		const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

		function base64clean (str) {
		  // Node takes equal signs as end of the Base64 encoding
		  str = str.split('=')[0];
		  // Node strips out invalid characters like \n and \t from the string, base64-js does not
		  str = str.trim().replace(INVALID_BASE64_RE, '');
		  // Node converts strings with length < 2 to ''
		  if (str.length < 2) return ''
		  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
		  while (str.length % 4 !== 0) {
		    str = str + '=';
		  }
		  return str
		}

		function utf8ToBytes (string, units) {
		  units = units || Infinity;
		  let codePoint;
		  const length = string.length;
		  let leadSurrogate = null;
		  const bytes = [];

		  for (let i = 0; i < length; ++i) {
		    codePoint = string.charCodeAt(i);

		    // is surrogate component
		    if (codePoint > 0xD7FF && codePoint < 0xE000) {
		      // last char was a lead
		      if (!leadSurrogate) {
		        // no lead yet
		        if (codePoint > 0xDBFF) {
		          // unexpected trail
		          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
		          continue
		        } else if (i + 1 === length) {
		          // unpaired lead
		          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
		          continue
		        }

		        // valid lead
		        leadSurrogate = codePoint;

		        continue
		      }

		      // 2 leads in a row
		      if (codePoint < 0xDC00) {
		        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
		        leadSurrogate = codePoint;
		        continue
		      }

		      // valid surrogate pair
		      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
		    } else if (leadSurrogate) {
		      // valid bmp char, but last char was a lead
		      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
		    }

		    leadSurrogate = null;

		    // encode utf8
		    if (codePoint < 0x80) {
		      if ((units -= 1) < 0) break
		      bytes.push(codePoint);
		    } else if (codePoint < 0x800) {
		      if ((units -= 2) < 0) break
		      bytes.push(
		        codePoint >> 0x6 | 0xC0,
		        codePoint & 0x3F | 0x80
		      );
		    } else if (codePoint < 0x10000) {
		      if ((units -= 3) < 0) break
		      bytes.push(
		        codePoint >> 0xC | 0xE0,
		        codePoint >> 0x6 & 0x3F | 0x80,
		        codePoint & 0x3F | 0x80
		      );
		    } else if (codePoint < 0x110000) {
		      if ((units -= 4) < 0) break
		      bytes.push(
		        codePoint >> 0x12 | 0xF0,
		        codePoint >> 0xC & 0x3F | 0x80,
		        codePoint >> 0x6 & 0x3F | 0x80,
		        codePoint & 0x3F | 0x80
		      );
		    } else {
		      throw new Error('Invalid code point')
		    }
		  }

		  return bytes
		}

		function asciiToBytes (str) {
		  const byteArray = [];
		  for (let i = 0; i < str.length; ++i) {
		    // Node's code seems to be doing this and not & 0x7F..
		    byteArray.push(str.charCodeAt(i) & 0xFF);
		  }
		  return byteArray
		}

		function utf16leToBytes (str, units) {
		  let c, hi, lo;
		  const byteArray = [];
		  for (let i = 0; i < str.length; ++i) {
		    if ((units -= 2) < 0) break

		    c = str.charCodeAt(i);
		    hi = c >> 8;
		    lo = c % 256;
		    byteArray.push(lo);
		    byteArray.push(hi);
		  }

		  return byteArray
		}

		function base64ToBytes (str) {
		  return base64.toByteArray(base64clean(str))
		}

		function blitBuffer (src, dst, offset, length) {
		  let i;
		  for (i = 0; i < length; ++i) {
		    if ((i + offset >= dst.length) || (i >= src.length)) break
		    dst[i + offset] = src[i];
		  }
		  return i
		}

		// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
		// the `instanceof` check but they should be treated as of that type.
		// See: https://github.com/feross/buffer/issues/166
		function isInstance (obj, type) {
		  return obj instanceof type ||
		    (obj != null && obj.constructor != null && obj.constructor.name != null &&
		      obj.constructor.name === type.name)
		}
		function numberIsNaN (obj) {
		  // For IE11 support
		  return obj !== obj // eslint-disable-line no-self-compare
		}

		// Create lookup table for `toString('hex')`
		// See: https://github.com/feross/buffer/issues/219
		const hexSliceLookupTable = (function () {
		  const alphabet = '0123456789abcdef';
		  const table = new Array(256);
		  for (let i = 0; i < 16; ++i) {
		    const i16 = i * 16;
		    for (let j = 0; j < 16; ++j) {
		      table[i16 + j] = alphabet[i] + alphabet[j];
		    }
		  }
		  return table
		})();

		// Return not function with Error if BigInt not supported
		function defineBigIntMethod (fn) {
		  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
		}

		function BufferBigIntNotDefined () {
		  throw new Error('BigInt not supported')
		} 
	} (buffer));

	function asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, key, arg) {
	    try {
	        var info = gen[key](arg);
	        var value = info.value;
	    } catch (error) {
	        reject(error);
	        return;
	    }
	    if (info.done) {
	        resolve(value);
	    } else {
	        Promise.resolve(value).then(_next, _throw);
	    }
	}
	function _async_to_generator$1(fn) {
	    return function() {
	        var self = this, args = arguments;
	        return new Promise(function(resolve, reject) {
	            var gen = fn.apply(self, args);
	            function _next(value) {
	                asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "next", value);
	            }
	            function _throw(err) {
	                asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "throw", err);
	            }
	            _next(undefined);
	        });
	    };
	}
	function _ts_generator$1(thisArg, body) {
	    var f, y, t, g, _ = {
	        label: 0,
	        sent: function() {
	            if (t[0] & 1) throw t[1];
	            return t[1];
	        },
	        trys: [],
	        ops: []
	    };
	    return(g = {
	        next: verb(0),
	        "throw": verb(1),
	        "return": verb(2)
	    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
	        return this;
	    }), g);
	    function verb(n) {
	        return function(v) {
	            return step([
	                n,
	                v
	            ]);
	        };
	    }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while(_)try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [
	                op[0] & 2,
	                t.value
	            ];
	            switch(op[0]){
	                case 0:
	                case 1:
	                    t = op;
	                    break;
	                case 4:
	                    _.label++;
	                    return {
	                        value: op[1],
	                        done: false
	                    };
	                case 5:
	                    _.label++;
	                    y = op[1];
	                    op = [
	                        0
	                    ];
	                    continue;
	                case 7:
	                    op = _.ops.pop();
	                    _.trys.pop();
	                    continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
	                        _ = 0;
	                        continue;
	                    }
	                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
	                        _.label = op[1];
	                        break;
	                    }
	                    if (op[0] === 6 && _.label < t[1]) {
	                        _.label = t[1];
	                        t = op;
	                        break;
	                    }
	                    if (t && _.label < t[2]) {
	                        _.label = t[2];
	                        _.ops.push(op);
	                        break;
	                    }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop();
	                    continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) {
	            op = [
	                6,
	                e
	            ];
	            y = 0;
	        } finally{
	            f = t = 0;
	        }
	        if (op[0] & 5) throw op[1];
	        return {
	            value: op[0] ? op[1] : void 0,
	            done: true
	        };
	    }
	}
	var aspectRatio = function(objectFit) {
	    switch(objectFit){
	        case 'contain':
	        case 'scale-down':
	            return 'xMidYMid meet';
	        case 'cover':
	            return 'xMidYMid slice';
	        case 'fill':
	            return 'none';
	        case 'none':
	            return 'xMinYMin slice';
	        default:
	            return 'xMidYMid meet';
	    }
	}, fetchPath = function() {
	    var _ref = _async_to_generator$1(function(path) {
	        var _path_split_pop, ext, _unzipped, result, buffer$1, unzipped, manifestFile, manifest, _, id, lottieString, lottieJson;
	        return _ts_generator$1(this, function(_state) {
	            switch(_state.label){
	                case 0:
	                    ext = (_path_split_pop = path.split('.').pop()) === null || _path_split_pop === void 0 ? void 0 : _path_split_pop.toLowerCase();
	                    _state.label = 1;
	                case 1:
	                    _state.trys.push([
	                        1,
	                        8,
	                        ,
	                        9
	                    ]);
	                    return [
	                        4,
	                        fetch(path)
	                    ];
	                case 2:
	                    result = _state.sent();
	                    if (!(ext === 'json')) return [
	                        3,
	                        4
	                    ];
	                    return [
	                        4,
	                        result.json()
	                    ];
	                case 3:
	                    return [
	                        2,
	                        _state.sent()
	                    ];
	                case 4:
	                    _ = Uint8Array.bind;
	                    return [
	                        4,
	                        result.arrayBuffer()
	                    ];
	                case 5:
	                    buffer$1 = new (_.apply(Uint8Array, [
	                        void 0,
	                        _state.sent()
	                    ]));
	                    return [
	                        4,
	                        new Promise(function(resolve, reject) {
	                            unzip(buffer$1, function(err, file) {
	                                if (err) reject(err);
	                                resolve(file);
	                            });
	                        })
	                    ];
	                case 6:
	                    unzipped = _state.sent(), manifestFile = strFromU8(unzipped['manifest.json']), manifest = JSON.parse(manifestFile);
	                    if (!('animations' in manifest)) throw new Error('Manifest not found');
	                    if (!manifest.animations.length) throw new Error('No animations listed in the manifest');
	                    id = manifest.animations[0].id, lottieString = strFromU8((_unzipped = unzipped) === null || _unzipped === void 0 ? void 0 : _unzipped["animations/".concat(id, ".json")]);
	                    return [
	                        4,
	                        JSON.parse(lottieString)
	                    ];
	                case 7:
	                    lottieJson = _state.sent();
	                    if ('assets' in lottieJson) {
	                        Promise.all(lottieJson.assets.map(function(asset) {
	                            var _unzipped;
	                            var p = asset.p;
	                            if (!p || !((_unzipped = unzipped) === null || _unzipped === void 0 ? void 0 : _unzipped["images/".concat(p)])) return;
	                            return new Promise(function(resolveAsset) {
	                                var _Buffer_from, _unzipped;
	                                var ext = p.split('.').pop(), assetB64 = (_Buffer_from = buffer.Buffer.from((_unzipped = unzipped) === null || _unzipped === void 0 ? void 0 : _unzipped["images/".concat(p)])) === null || _Buffer_from === void 0 ? void 0 : _Buffer_from.toString('base64');
	                                switch(ext){
	                                    case 'svg':
	                                    case 'svg+xml':
	                                        asset.p = "data:image/svg+xml;base64,".concat(assetB64);
	                                        break;
	                                    case 'png':
	                                    case 'jpg':
	                                    case 'jpeg':
	                                    case 'gif':
	                                    case 'webp':
	                                        asset.p = "data:image/".concat(ext, ";base64,").concat(assetB64);
	                                        break;
	                                    default:
	                                        asset.p = "data:;base64,".concat(assetB64);
	                                }
	                                asset.e = 1;
	                                resolveAsset();
	                            });
	                        }));
	                    }
	                    return [
	                        2,
	                        lottieJson
	                    ];
	                case 8:
	                    _state.sent();
	                    throw new Error('Error loading Lottie file.');
	                case 9:
	                    return [
	                        2
	                    ];
	            }
	        });
	    });
	    return function fetchPath(path) {
	        return _ref.apply(this, arguments);
	    };
	}();

	function _tagged_template_literal$1(strings, raw) {
	    if (!raw) {
	        raw = strings.slice(0);
	    }
	    return Object.freeze(Object.defineProperties(strings, {
	        raw: {
	            value: Object.freeze(raw)
	        }
	    }));
	}
	function _templateObject$1() {
	    var data = _tagged_template_literal$1([
	        "*{box-sizing:border-box}:host{--lottie-player-toolbar-height:35px;--lottie-player-toolbar-background-color:#FFF;--lottie-player-toolbar-icon-color:#000;--lottie-player-toolbar-icon-hover-color:#000;--lottie-player-toolbar-icon-active-color:#4285f4;--lottie-player-seeker-track-color:rgba(0, 0, 0, 0.2);--lottie-player-seeker-thumb-color:#4285f4;--lottie-player-seeker-display:block;display:block;width:100%;height:100%}@media (prefers-color-scheme:dark){:host{--lottie-player-toolbar-background-color:#000;--lottie-player-toolbar-icon-color:#FFF;--lottie-player-toolbar-icon-hover-color:#FFF;--lottie-player-seeker-track-color:rgba(255, 255, 255, 0.6)}}.main{display:flex;flex-direction:column;height:100%;width:100%}.animation{width:100%;height:100%;display:flex}.animation.controls{height:calc(100% - 35px)}.toolbar{display:flex;align-items:center;justify-items:center;background:var(--lottie-player-toolbar-background-color);margin:0 5px;height:35px;padding:5px;border-radius:5px}.toolbar button{cursor:pointer;fill:var(--lottie-player-toolbar-icon-color);display:flex;background:0 0;border:0;padding:0;outline:0;height:100%}.toolbar button.active{fill:var(--lottie-player-toolbar-icon-active-color)}.toolbar button:focus{outline:0}.toolbar button svg>*{fill:inherit}.toolbar button.disabled svg{display:none}.seeker,.seeker::-webkit-slider-runnable-track,.seeker::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;outline:0}.seeker{-webkit-appearance:none;appearance:none;width:95%;background-color:var(--lottie-player-toolbar-background-color);display:var(--lottie-player-seeker-display);color:var(--lottie-player-seeker-thumb-color)}.seeker::-webkit-slider-runnable-track{width:100%;height:5px;cursor:pointer;background-color:var(--lottie-player-seeker-track-color);border-radius:3px}.seeker::-webkit-progress-value{background-color:var(--lottie-player-seeker-thumb-color)}.seeker::-webkit-slider-thumb{height:15px;width:15px;border-radius:50%;background-color:var(--lottie-player-seeker-thumb-color);cursor:pointer;-webkit-appearance:none;appearance:none;margin-top:-5px}.seeker:focus::-webkit-slider-runnable-track{background-color:var(--lottie-player-seeker-track-color)}.seeker::-moz-range-track{width:100%;height:5px;cursor:pointer;background-color:var(--lottie-player-seeker-track-color);border-radius:3px;border:0}.seeker::-moz-range-progress{background-color:var(--lottie-player-seeker-thumb-color);height:5px;border-radius:3px}.seeker::-moz-range-thumb{height:15px;width:15px;border-radius:50%;background-color:var(--lottie-player-seeker-thumb-color);border:0;cursor:pointer}.seeker::-ms-track{width:100%;height:5px;cursor:pointer;background:0 0;border-color:transparent;color:transparent}.seeker::-ms-fill-upper{background:var(--lottie-player-seeker-track-color);border-radius:3px}.seeker::-ms-fill-lower{background-color:var(--lottie-player-seeker-thumb-color);border-radius:3px}.seeker::-ms-thumb{border:0;height:15px;width:15px;border-radius:50%;background:var(--lottie-player-seeker-thumb-color);cursor:pointer}.seeker:focus::-ms-fill-lower{background:var(--lottie-player-seeker-track-color)}.seeker:focus::-ms-fill-upper{background:var(--lottie-player-seeker-track-color)}.error{display:flex;margin:auto;justify-content:center;height:100%;align-items:center}"
	    ]);
	    _templateObject$1 = function _templateObject() {
	        return data;
	    };
	    return data;
	}
	var styles = i$5(_templateObject$1());

	function _assert_this_initialized(self) {
	    if (self === void 0) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	    return self;
	}
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	    try {
	        var info = gen[key](arg);
	        var value = info.value;
	    } catch (error) {
	        reject(error);
	        return;
	    }
	    if (info.done) {
	        resolve(value);
	    } else {
	        Promise.resolve(value).then(_next, _throw);
	    }
	}
	function _async_to_generator(fn) {
	    return function() {
	        var self = this, args = arguments;
	        return new Promise(function(resolve, reject) {
	            var gen = fn.apply(self, args);
	            function _next(value) {
	                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	            }
	            function _throw(err) {
	                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	            }
	            _next(undefined);
	        });
	    };
	}
	function _class_call_check(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	function _defineProperties(target, props) {
	    for(var i = 0; i < props.length; i++){
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	    }
	}
	function _create_class(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	}
	function _define_property(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, {
	            value: value,
	            enumerable: true,
	            configurable: true,
	            writable: true
	        });
	    } else {
	        obj[key] = value;
	    }
	    return obj;
	}
	function _get(target, property, receiver) {
	    if (typeof Reflect !== "undefined" && Reflect.get) {
	        _get = Reflect.get;
	    } else {
	        _get = function get(target, property, receiver) {
	            var base = _super_prop_base(target, property);
	            if (!base) return;
	            var desc = Object.getOwnPropertyDescriptor(base, property);
	            if (desc.get) {
	                return desc.get.call(receiver || target);
	            }
	            return desc.value;
	        };
	    }
	    return _get(target, property, receiver || target);
	}
	function _get_prototype_of(o) {
	    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
	        return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _get_prototype_of(o);
	}
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function");
	    }
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	        constructor: {
	            value: subClass,
	            writable: true,
	            configurable: true
	        }
	    });
	    if (superClass) _set_prototype_of(subClass, superClass);
	}
	function _object_spread(target) {
	    for(var i = 1; i < arguments.length; i++){
	        var source = arguments[i] != null ? arguments[i] : {};
	        var ownKeys = Object.keys(source);
	        if (typeof Object.getOwnPropertySymbols === "function") {
	            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
	                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	            }));
	        }
	        ownKeys.forEach(function(key) {
	            _define_property(target, key, source[key]);
	        });
	    }
	    return target;
	}
	function ownKeys(object, enumerableOnly) {
	    var keys = Object.keys(object);
	    if (Object.getOwnPropertySymbols) {
	        var symbols = Object.getOwnPropertySymbols(object);
	        if (enumerableOnly) {
	            symbols = symbols.filter(function(sym) {
	                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	            });
	        }
	        keys.push.apply(keys, symbols);
	    }
	    return keys;
	}
	function _object_spread_props(target, source) {
	    source = source != null ? source : {};
	    if (Object.getOwnPropertyDescriptors) {
	        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	        ownKeys(Object(source)).forEach(function(key) {
	            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	        });
	    }
	    return target;
	}
	function _possible_constructor_return(self, call) {
	    if (call && (_type_of(call) === "object" || typeof call === "function")) {
	        return call;
	    }
	    return _assert_this_initialized(self);
	}
	function _set_prototype_of(o, p) {
	    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
	        o.__proto__ = p;
	        return o;
	    };
	    return _set_prototype_of(o, p);
	}
	function _super_prop_base(object, property) {
	    while(!Object.prototype.hasOwnProperty.call(object, property)){
	        object = _get_prototype_of(object);
	        if (object === null) break;
	    }
	    return object;
	}
	function _tagged_template_literal(strings, raw) {
	    if (!raw) {
	        raw = strings.slice(0);
	    }
	    return Object.freeze(Object.defineProperties(strings, {
	        raw: {
	            value: Object.freeze(raw)
	        }
	    }));
	}
	function _type_of(obj) {
	    "@swc/helpers - typeof";
	    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
	}
	function _is_native_reflect_construct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	        return true;
	    } catch (e) {
	        return false;
	    }
	}
	function _create_super(Derived) {
	    var hasNativeReflectConstruct = _is_native_reflect_construct();
	    return function _createSuperInternal() {
	        var Super = _get_prototype_of(Derived), result;
	        if (hasNativeReflectConstruct) {
	            var NewTarget = _get_prototype_of(this).constructor;
	            result = Reflect.construct(Super, arguments, NewTarget);
	        } else {
	            result = Super.apply(this, arguments);
	        }
	        return _possible_constructor_return(this, result);
	    };
	}
	function _ts_decorate(decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
	    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	}
	function _ts_generator(thisArg, body) {
	    var f, y, t, g, _ = {
	        label: 0,
	        sent: function() {
	            if (t[0] & 1) throw t[1];
	            return t[1];
	        },
	        trys: [],
	        ops: []
	    };
	    return g = {
	        next: verb(0),
	        "throw": verb(1),
	        "return": verb(2)
	    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
	        return this;
	    }), g;
	    function verb(n) {
	        return function(v) {
	            return step([
	                n,
	                v
	            ]);
	        };
	    }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while(_)try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [
	                op[0] & 2,
	                t.value
	            ];
	            switch(op[0]){
	                case 0:
	                case 1:
	                    t = op;
	                    break;
	                case 4:
	                    _.label++;
	                    return {
	                        value: op[1],
	                        done: false
	                    };
	                case 5:
	                    _.label++;
	                    y = op[1];
	                    op = [
	                        0
	                    ];
	                    continue;
	                case 7:
	                    op = _.ops.pop();
	                    _.trys.pop();
	                    continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
	                        _ = 0;
	                        continue;
	                    }
	                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
	                        _.label = op[1];
	                        break;
	                    }
	                    if (op[0] === 6 && _.label < t[1]) {
	                        _.label = t[1];
	                        t = op;
	                        break;
	                    }
	                    if (t && _.label < t[2]) {
	                        _.label = t[2];
	                        _.ops.push(op);
	                        break;
	                    }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop();
	                    continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) {
	            op = [
	                6,
	                e
	            ];
	            y = 0;
	        } finally{
	            f = t = 0;
	        }
	        if (op[0] & 5) throw op[1];
	        return {
	            value: op[0] ? op[1] : void 0,
	            done: true
	        };
	    }
	}
	function _ts_metadata(k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	}
	function _templateObject() {
	    var data = _tagged_template_literal([
	        '<svg width="24" height="24" aria-hidden="true" focusable="false"><path d="M14.016 5.016H18v13.969h-3.984V5.016zM6 18.984V5.015h3.984v13.969H6z"/></svg>'
	    ]);
	    _templateObject = function _templateObject() {
	        return data;
	    };
	    return data;
	}
	function _templateObject1() {
	    var data = _tagged_template_literal([
	        '<svg width="24" height="24" aria-hidden="true" focusable="false"><path d="M8.016 5.016L18.985 12 8.016 18.984V5.015z"/></svg>'
	    ]);
	    _templateObject1 = function _templateObject() {
	        return data;
	    };
	    return data;
	}
	function _templateObject2() {
	    var data = _tagged_template_literal([
	        '<div class="lottie-controls toolbar" aria-label="Lottie Animation Controls" class="toolbar"><button @click="',
	        '" class="',
	        '" style="align-items:center" tabindex="0" aria-label="Toggle Play/Pause">',
	        '</button> <button @click="',
	        '" class="',
	        '" style="align-items:center" tabindex="0" aria-label="Stop"><svg width="24" height="24" aria-hidden="true" focusable="false"><path d="M6 6h12v12H6V6z"/></svg></button> <input class="seeker" type="range" min="0" max="100" value="',
	        '" @input="',
	        '" @mousedown="',
	        '" @mouseup="',
	        '" aria-valuemin="0" aria-valuemax="100" role="slider" aria-valuenow="',
	        '" tabindex="0" aria-label="Slider for search"> <button @click="',
	        '" class="',
	        '" style="align-items:center" tabindex="0" aria-label="Toggle looping"><svg width="24" height="24" aria-hidden="true" focusable="false"><path d="M17.016 17.016v-4.031h1.969v6h-12v3l-3.984-3.984 3.984-3.984v3h10.031zM6.984 6.984v4.031H5.015v-6h12v-3l3.984 3.984-3.984 3.984v-3H6.984z"/></svg></button> <button @click="',
	        '" class="',
	        '" aria-label="Toggle boomerang" style="align-items:center" tabindex="0"><svg width="24" height="24" aria-hidden="true" focusable="false"><path d="m11.8 13.2-.3.3c-.5.5-1.1 1.1-1.7 1.5-.5.4-1 .6-1.5.8-.5.2-1.1.3-1.6.3s-1-.1-1.5-.3c-.6-.2-1-.5-1.4-1-.5-.6-.8-1.2-.9-1.9-.2-.9-.1-1.8.3-2.6.3-.7.8-1.2 1.3-1.6.3-.2.6-.4 1-.5.2-.2.5-.2.8-.3.3 0 .7-.1 1 0 .3 0 .6.1.9.2.9.3 1.7.9 2.4 1.5.4.4.8.7 1.1 1.1l.1.1.4-.4c.6-.6 1.2-1.2 1.9-1.6.5-.3 1-.6 1.5-.7.4-.1.7-.2 1-.2h.9c1 .1 1.9.5 2.6 1.4.4.5.7 1.1.8 1.8.2.9.1 1.7-.2 2.5-.4.9-1 1.5-1.8 2-.4.2-.7.4-1.1.4-.4.1-.8.1-1.2.1-.5 0-.9-.1-1.3-.3-.8-.3-1.5-.9-2.1-1.5-.4-.4-.8-.7-1.1-1.1h-.3zm-1.1-1.1c-.1-.1-.1-.1 0 0-.3-.3-.6-.6-.8-.9-.5-.5-1-.9-1.6-1.2-.4-.3-.8-.4-1.3-.4-.4 0-.8 0-1.1.2-.5.2-.9.6-1.1 1-.2.3-.3.7-.3 1.1 0 .3 0 .6.1.9.1.5.4.9.8 1.2.5.4 1.1.5 1.7.5.5 0 1-.2 1.5-.5.6-.4 1.1-.8 1.6-1.3.1-.3.3-.5.5-.6zM13 12c.5.5 1 1 1.5 1.4.5.5 1.1.9 1.9 1 .4.1.8 0 1.2-.1.3-.1.6-.3.9-.5.4-.4.7-.9.8-1.4.1-.5 0-.9-.1-1.4-.3-.8-.8-1.2-1.7-1.4-.4-.1-.8-.1-1.2 0-.5.1-1 .4-1.4.7-.5.4-1 .8-1.4 1.2-.2.2-.4.3-.5.5z"/></svg></button></div>'
	    ]);
	    _templateObject2 = function _templateObject() {
	        return data;
	    };
	    return data;
	}
	function _templateObject3() {
	    var data = _tagged_template_literal([
	        '<div class="error">⚠️</div>'
	    ]);
	    _templateObject3 = function _templateObject() {
	        return data;
	    };
	    return data;
	}
	function _templateObject4() {
	    var data = _tagged_template_literal([
	        '<div class="',
	        '" lang="',
	        '" role="img" aria-label="',
	        '"><div class="',
	        '" style="background:',
	        '">',
	        "</div>",
	        "</div>"
	    ]);
	    _templateObject4 = function _templateObject() {
	        return data;
	    };
	    return data;
	}
	exports.DotLottiePlayer = /*#__PURE__*/ function(LitElement) {
	    _inherits(DotLottiePlayer, LitElement);
	    var _super = _create_super(DotLottiePlayer);
	    function DotLottiePlayer() {
	        _class_call_check(this, DotLottiePlayer);
	        var _this;
	        _this = _super.apply(this, arguments);
	        /**
	   * Background color
	   */ _this.background = 'transparent';
	        /**
	   * Display controls
	   */ _this.controls = false;
	        /**
	   * Player state
	   */ _this.currentState = exports.PlayerState.Loading;
	        /**
	   * Direction of animation
	   */ _this.direction = 1;
	        /**
	   * Whether to play on mouseover
	   */ _this.hover = false;
	        /**
	   * Intermission
	   */ _this.intermission = 0;
	        /**
	   * Whether to loop
	   */ _this.loop = false;
	        /**
	   * Play mode
	   */ _this.mode = exports.PlayMode.Normal;
	        /**
	   * Resizing to container
	  */ _this.objectfit = 'contain';
	        /**
	   * Renderer to use (svg, canvas or html)
	   */ _this.renderer = 'svg';
	        /**
	   * Speed
	   */ _this.speed = 1;
	        /**
	   * Subframe
	   */ _this.subframe = false;
	        _this._lottie = null;
	        _this._counter = 0;
	        return _this;
	    }
	    _create_class(DotLottiePlayer, [
	        {
	            key: "load",
	            value: /**
	   * Initialize Lottie Web player
	   */ function load(src) {
	                var _this = this;
	                return _async_to_generator(function() {
	                    var _this_preserveAspectRatio, preserveAspectRatio, options, srcParsed, _tmp, err, _loopComplete;
	                    return _ts_generator(this, function(_state) {
	                        switch(_state.label){
	                            case 0:
	                                if (!_this.shadowRoot) {
	                                    return [
	                                        2
	                                    ];
	                                }
	                                preserveAspectRatio = (_this_preserveAspectRatio = _this.preserveAspectRatio) !== null && _this_preserveAspectRatio !== void 0 ? _this_preserveAspectRatio : _this.objectfit && aspectRatio(_this.objectfit), options = {
	                                    container: _this.container,
	                                    loop: !!_this.loop,
	                                    autoplay: !!_this.autoplay,
	                                    renderer: _this.renderer,
	                                    initialSegment: _this.segment,
	                                    rendererSettings: {
	                                        imagePreserveAspectRatio: preserveAspectRatio
	                                    }
	                                };
	                                switch(_this.renderer){
	                                    case 'svg':
	                                        options.rendererSettings = _object_spread_props(_object_spread({}, options.rendererSettings), {
	                                            hideOnTransparent: true,
	                                            preserveAspectRatio: preserveAspectRatio,
	                                            progressiveLoad: true
	                                        });
	                                        break;
	                                    case 'canvas':
	                                        options.rendererSettings = _object_spread_props(_object_spread({}, options.rendererSettings), {
	                                            clearCanvas: true,
	                                            preserveAspectRatio: preserveAspectRatio,
	                                            progressiveLoad: true
	                                        });
	                                        break;
	                                    case 'html':
	                                        options.rendererSettings = _object_spread_props(_object_spread({}, options.rendererSettings), {
	                                            hideOnTransparent: true
	                                        });
	                                }
	                                _state.label = 1;
	                            case 1:
	                                _state.trys.push([
	                                    1,
	                                    5,
	                                    ,
	                                    6
	                                ]);
	                                if (typeof src !== 'string' && typeof src !== 'object') {
	                                    throw new Error('No Lottie animation to load, or the file is corrupted.');
	                                }
	                                if (!(typeof src === 'string')) return [
	                                    3,
	                                    3
	                                ];
	                                return [
	                                    4,
	                                    fetchPath(src)
	                                ];
	                            case 2:
	                                _tmp = _state.sent();
	                                return [
	                                    3,
	                                    4
	                                ];
	                            case 3:
	                                _tmp = src;
	                                _state.label = 4;
	                            case 4:
	                                srcParsed = _tmp;
	                                if (!_this.isLottie(srcParsed)) throw new Error('dotLottie: Load method failed. Object is not a valid Lottie.');
	                                // Clear previous animation, if any
	                                if (_this._lottie) _this._lottie.destroy();
	                                // Initialize lottie player and load animation
	                                _this._lottie = Lottie.loadAnimation(_object_spread_props(_object_spread({}, options), {
	                                    animationData: srcParsed
	                                }));
	                                return [
	                                    3,
	                                    6
	                                ];
	                            case 5:
	                                err = _state.sent();
	                                console.error(err);
	                                _this.currentState = exports.PlayerState.Error;
	                                _this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Error));
	                                return [
	                                    2
	                                ];
	                            case 6:
	                                if (_this._lottie) {
	                                    // Calculate and save the current progress of the animation
	                                    _this._lottie.addEventListener('enterFrame', function() {
	                                        var _this__lottie = _this._lottie, currentFrame = _this__lottie.currentFrame, totalFrames = _this__lottie.totalFrames;
	                                        _this.seeker = currentFrame / totalFrames * 100;
	                                        _this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Frame, {
	                                            detail: {
	                                                frame: currentFrame,
	                                                seeker: _this.seeker
	                                            }
	                                        }));
	                                    });
	                                    // Handle animation play complete
	                                    _this._lottie.addEventListener('complete', function() {
	                                        _this.currentState = exports.PlayerState.Completed;
	                                        _this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Complete));
	                                    });
	                                    _loopComplete = function() {
	                                        var _this__lottie;
	                                        var _this__lottie1 = _this._lottie, firstFrame = _this__lottie1.firstFrame, totalFrames = _this__lottie1.totalFrames, playDirection = _this__lottie1.playDirection;
	                                        if (_this.count) {
	                                            _this.mode === exports.PlayMode.Bounce ? _this._counter += 1 : _this._counter += 0.5;
	                                            if (_this._counter >= _this.count) {
	                                                _this.setLooping(false);
	                                                _this.currentState = exports.PlayerState.Completed;
	                                                _this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Complete));
	                                                return;
	                                            }
	                                        }
	                                        _this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Loop));
	                                        if (_this.mode === exports.PlayMode.Bounce) {
	                                            var _this__lottie2, _this__lottie3;
	                                            (_this__lottie2 = _this._lottie) === null || _this__lottie2 === void 0 ? void 0 : _this__lottie2.goToAndStop(playDirection === -1 ? firstFrame : totalFrames * .99, true);
	                                            (_this__lottie3 = _this._lottie) === null || _this__lottie3 === void 0 ? void 0 : _this__lottie3.setDirection(playDirection * -1);
	                                            return setTimeout(function() {
	                                                var _this__lottie;
	                                                (_this__lottie = _this._lottie) === null || _this__lottie === void 0 ? void 0 : _this__lottie.play();
	                                            }, _this.intermission);
	                                        }
	                                        (_this__lottie = _this._lottie) === null || _this__lottie === void 0 ? void 0 : _this__lottie.goToAndStop(playDirection === -1 ? totalFrames * .99 : firstFrame, true);
	                                        return setTimeout(function() {
	                                            var _this__lottie;
	                                            (_this__lottie = _this._lottie) === null || _this__lottie === void 0 ? void 0 : _this__lottie.play();
	                                        }, _this.intermission);
	                                    };
	                                    _this._lottie.addEventListener('loopComplete', _loopComplete);
	                                    // Handle lottie-web ready event
	                                    _this._lottie.addEventListener('DOMLoaded', function() {
	                                        _this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Ready));
	                                    });
	                                    // Handle animation data load complete
	                                    _this._lottie.addEventListener('data_ready', function() {
	                                        _this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Load));
	                                    });
	                                    // Set error state when animation load fail event triggers
	                                    _this._lottie.addEventListener('data_failed', function() {
	                                        _this.currentState = exports.PlayerState.Error;
	                                        _this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Error));
	                                    });
	                                    if (_this.container) {
	                                        // Set handlers to auto play animation on hover if enabled
	                                        _this.container.addEventListener('mouseenter', function() {
	                                            if (_this.hover && _this.currentState !== exports.PlayerState.Playing) {
	                                                _this.play();
	                                            }
	                                        });
	                                        _this.container.addEventListener('mouseleave', function() {
	                                            if (_this.hover && _this.currentState === exports.PlayerState.Playing) {
	                                                _this.stop();
	                                            }
	                                        });
	                                    }
	                                    // Set initial playback speed and direction
	                                    _this.setSpeed(_this.speed);
	                                    _this.setDirection(_this.direction);
	                                    _this.setSubframe(!!_this.subframe);
	                                    // Start playing if autoplay is enabled
	                                    if (_this.autoplay) {
	                                        if (_this.direction === -1) _this.seek('99%');
	                                        _this.play();
	                                    }
	                                }
	                                return [
	                                    2
	                                ];
	                        }
	                    });
	                })();
	            }
	        },
	        {
	            key: "_onVisibilityChange",
	            value: /**
	   * Handle visibility change events
	   */ function _onVisibilityChange() {
	                if (document.hidden && this.currentState === exports.PlayerState.Playing) {
	                    this.freeze();
	                } else if (this.currentState === exports.PlayerState.Frozen) {
	                    this.play();
	                }
	            }
	        },
	        {
	            key: "_handleSeekChange",
	            value: /**
	   * Handles click and drag actions on the progress track
	   */ function _handleSeekChange(event) {
	                if (!event.target || !this._lottie || isNaN(Number(event.target.value))) return;
	                var frame = Number(event.target.value) / 100 * this._lottie.totalFrames;
	                this.seek(frame);
	            }
	        },
	        {
	            key: "isLottie",
	            value: function isLottie(json) {
	                var mandatory = [
	                    'v',
	                    'ip',
	                    'op',
	                    'layers',
	                    'fr',
	                    'w',
	                    'h'
	                ];
	                return mandatory.every(function(field) {
	                    return Object.prototype.hasOwnProperty.call(json, field);
	                });
	            }
	        },
	        {
	            key: "getLottie",
	            value: /**
	   * Returns the lottie-web instance used in the component
	   */ function getLottie() {
	                return this._lottie;
	            }
	        },
	        {
	            key: "play",
	            value: /**
	   * Play
	   */ function play() {
	                if (!this._lottie) return;
	                this.currentState = exports.PlayerState.Playing;
	                this._lottie.play();
	                this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Play));
	            }
	        },
	        {
	            key: "pause",
	            value: /**
	   * Pause
	   */ function pause() {
	                if (!this._lottie) return;
	                this.currentState = exports.PlayerState.Paused;
	                this._lottie.pause();
	                this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Pause));
	            }
	        },
	        {
	            key: "stop",
	            value: /**
	   * Stop
	   */ function stop() {
	                if (!this._lottie) return;
	                this.currentState = exports.PlayerState.Stopped;
	                this._counter = 0;
	                this._lottie.stop();
	                this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Stop));
	            }
	        },
	        {
	            key: "destroy",
	            value: /**
	   * Destroy animation and element
	   */ function destroy() {
	                if (!this._lottie) return;
	                this.currentState = exports.PlayerState.Destroyed;
	                this._lottie.destroy();
	                this._lottie = null;
	                this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Destroyed));
	                this.remove();
	            }
	        },
	        {
	            key: "seek",
	            value: /**
	   * Seek to a given frame
	   */ function seek(value) {
	                if (!this._lottie) return;
	                // Extract frame number from either number or percentage value
	                var matches = value.toString().match(/^([0-9]+)(%?)$/);
	                if (!matches) {
	                    return;
	                }
	                // Calculate and set the frame number
	                var frame = matches[2] === '%' ? this._lottie.totalFrames * Number(matches[1]) / 100 : matches[1];
	                // Set seeker to new frame number
	                this.seeker = Number(frame);
	                // Send lottie player to the new frame
	                if (this.currentState === exports.PlayerState.Playing) {
	                    this._lottie.goToAndPlay(frame, true);
	                } else {
	                    this._lottie.goToAndStop(frame, true);
	                    this._lottie.pause();
	                }
	            }
	        },
	        {
	            key: "snapshot",
	            value: /**
	   * Snapshot the current frame as SVG
	   *
	   * If 'download' is true, a download is triggered in the browser
	   */ function snapshot() {
	                var download = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
	                if (!this.shadowRoot) return;
	                // Get SVG element and serialize markup
	                var svgElement = this.shadowRoot.querySelector('.animation svg');
	                var data = svgElement instanceof Node ? new XMLSerializer().serializeToString(svgElement) : null;
	                if (!data) return;
	                // Trigger file download
	                if (download) {
	                    var element = document.createElement('a');
	                    element.href = 'data:image/svg+xmlcharset=utf-8,' + encodeURIComponent(data);
	                    element.download = 'download_' + this.seeker + '.svg';
	                    document.body.appendChild(element);
	                    element.click();
	                    document.body.removeChild(element);
	                }
	                return data;
	            }
	        },
	        {
	            key: "setSubframe",
	            value: function setSubframe(value) {
	                if (!this._lottie) return;
	                this.subframe = value;
	                this._lottie.setSubframe(value);
	            }
	        },
	        {
	            key: "freeze",
	            value: /**
	   * Freeze animation.
	   * This internal state pauses animation and is used to differentiate between
	   * user requested pauses and component instigated pauses.
	   */ function freeze() {
	                if (!this._lottie) return;
	                this.currentState = exports.PlayerState.Frozen;
	                this._lottie.pause();
	                this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Freeze));
	            }
	        },
	        {
	            key: "reload",
	            value: /**
	   * Reload animation
	   */ function reload() {
	                var _this = this;
	                return _async_to_generator(function() {
	                    return _ts_generator(this, function(_state) {
	                        switch(_state.label){
	                            case 0:
	                                if (!_this._lottie) return [
	                                    2
	                                ];
	                                _this._lottie.destroy();
	                                if (!_this.src) return [
	                                    3,
	                                    2
	                                ];
	                                return [
	                                    4,
	                                    _this.load(_this.src)
	                                ];
	                            case 1:
	                                _state.sent();
	                                _state.label = 2;
	                            case 2:
	                                return [
	                                    2
	                                ];
	                        }
	                    });
	                })();
	            }
	        },
	        {
	            key: "setSpeed",
	            value: /**
	   * Set animation play speed
	   * @param value Playback speed.
	   */ function setSpeed() {
	                var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
	                if (!this._lottie) return;
	                this.speed = value;
	                this._lottie.setSpeed(value);
	            }
	        },
	        {
	            key: "setDirection",
	            value: /**
	   * Animation play direction
	   * @param value AnimationDirection
	   */ function setDirection(value) {
	                if (!this._lottie) return;
	                this.direction = value;
	                this._lottie.setDirection(value);
	            }
	        },
	        {
	            key: "setLooping",
	            value: /**
	   * Set loop
	   */ function setLooping(value) {
	                if (this._lottie) {
	                    this.loop = value;
	                    this._lottie.setLoop(value);
	                }
	            }
	        },
	        {
	            key: "togglePlay",
	            value: /**
	   * Toggle playing state
	   */ function togglePlay() {
	                if (!this._lottie) return;
	                var _this__lottie = this._lottie, currentFrame = _this__lottie.currentFrame, playDirection = _this__lottie.playDirection, totalFrames = _this__lottie.totalFrames;
	                if (this.currentState === exports.PlayerState.Playing) return this.pause();
	                if (this.currentState === exports.PlayerState.Completed) {
	                    this.currentState = exports.PlayerState.Playing;
	                    if (this.mode === exports.PlayMode.Bounce) {
	                        this.setDirection(playDirection * -1);
	                        return this._lottie.goToAndPlay(currentFrame, true);
	                    }
	                    if (playDirection === -1) {
	                        return this._lottie.goToAndPlay(totalFrames, true);
	                    }
	                    return this._lottie.goToAndPlay(0, true);
	                }
	                return this.play();
	            }
	        },
	        {
	            key: "toggleLooping",
	            value: /**
	   * Toggle loop
	   */ function toggleLooping() {
	                this.setLooping(!this.loop);
	            }
	        },
	        {
	            key: "toggleBoomerang",
	            value: /**
	   * Toggle Boomerang
	   */ function toggleBoomerang() {
	                if (this.mode === exports.PlayMode.Normal) {
	                    this.mode = exports.PlayMode.Bounce;
	                } else {
	                    this.mode = exports.PlayMode.Normal;
	                }
	            }
	        },
	        {
	            key: "connectedCallback",
	            value: /**
	   * Initialize everything on component first render
	   */ function connectedCallback() {
	                _get(_get_prototype_of(DotLottiePlayer.prototype), "connectedCallback", this).call(this);
	                // Add listener for Visibility API's change event.
	                if (typeof document.hidden !== 'undefined') {
	                    document.addEventListener('visibilitychange', this._onVisibilityChange);
	                }
	            }
	        },
	        {
	            key: "firstUpdated",
	            value: function firstUpdated() {
	                var _this = this;
	                return _async_to_generator(function() {
	                    return _ts_generator(this, function(_state) {
	                        switch(_state.label){
	                            case 0:
	                                // Add intersection observer for detecting component being out-of-view.
	                                if ('IntersectionObserver' in window) {
	                                    _this._io = new IntersectionObserver(function(entries) {
	                                        if (entries[0].isIntersecting) {
	                                            if (!document.hidden && _this.currentState === exports.PlayerState.Frozen) {
	                                                _this.play();
	                                            }
	                                        } else if (_this.currentState === exports.PlayerState.Playing) {
	                                            _this.freeze();
	                                        }
	                                    });
	                                    _this._io.observe(_this.container);
	                                }
	                                if (!_this.src) return [
	                                    3,
	                                    2
	                                ];
	                                return [
	                                    4,
	                                    _this.load(_this.src)
	                                ];
	                            case 1:
	                                _state.sent();
	                                _state.label = 2;
	                            case 2:
	                                _this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Rendered));
	                                return [
	                                    2
	                                ];
	                        }
	                    });
	                })();
	            }
	        },
	        {
	            key: "disconnectedCallback",
	            value: /**
	   * Cleanup on component destroy
	   */ function disconnectedCallback() {
	                _get(_get_prototype_of(DotLottiePlayer.prototype), "disconnectedCallback", this).call(this);
	                // Remove intersection observer for detecting component being out-of-view
	                if (this._io) {
	                    this._io.disconnect();
	                    this._io = undefined;
	                }
	                // Destroy the animation instance
	                if (this._lottie) this._lottie.destroy();
	                // Remove the attached Visibility API's change event listener
	                document.removeEventListener('visibilitychange', this._onVisibilityChange);
	            }
	        },
	        {
	            key: "renderControls",
	            value: function renderControls() {
	                var _this = this;
	                var isPlaying = this.currentState === exports.PlayerState.Playing;
	                var isPaused = this.currentState === exports.PlayerState.Paused;
	                var isStopped = this.currentState === exports.PlayerState.Stopped;
	                var _this_seeker, _this_seeker1;
	                return x$1(_templateObject2(), this.togglePlay, isPlaying || isPaused ? 'active' : '', isPlaying ? x$1(_templateObject()) : x$1(_templateObject1()), this.stop, isStopped ? 'active' : '', (_this_seeker = this.seeker) !== null && _this_seeker !== void 0 ? _this_seeker : 0, this._handleSeekChange, function() {
	                    _this._prevState = _this.currentState;
	                    _this.freeze();
	                }, function() {
	                    _this._prevState === exports.PlayerState.Playing && _this.play();
	                }, (_this_seeker1 = this.seeker) !== null && _this_seeker1 !== void 0 ? _this_seeker1 : 0, this.toggleLooping, this.loop ? 'active' : '', this.toggleBoomerang, this.mode === exports.PlayMode.Bounce ? 'active' : '');
	            }
	        },
	        {
	            key: "render",
	            value: function render() {
	                var _document_documentElement, _document;
	                var className = this.controls ? 'main controls' : 'main', animationClass = this.controls ? 'animation controls' : 'animation';
	                var _this_description;
	                return x$1(_templateObject4(), "animation-container ".concat(className), this.description ? (_document = document) === null || _document === void 0 ? void 0 : (_document_documentElement = _document.documentElement) === null || _document_documentElement === void 0 ? void 0 : _document_documentElement.lang : 'en', (_this_description = this.description) !== null && _this_description !== void 0 ? _this_description : 'Lottie animation', animationClass, this.background, this.currentState === exports.PlayerState.Error ? x$1(_templateObject3()) : A, this.controls ? this.renderControls() : A);
	            }
	        }
	    ], [
	        {
	            key: "styles",
	            get: /**
	   * Return the styles for the component
	   */ function get() {
	                return styles;
	            }
	        }
	    ]);
	    return DotLottiePlayer;
	}(s);
	_ts_decorate([
	    n$1({
	        type: Boolean,
	        reflect: true
	    }),
	    _ts_metadata("design:type", typeof Autoplay === "undefined" ? Object : Autoplay)
	], exports.DotLottiePlayer.prototype, "autoplay", void 0);
	_ts_decorate([
	    n$1({
	        type: String
	    }),
	    _ts_metadata("design:type", String)
	], exports.DotLottiePlayer.prototype, "background", void 0);
	_ts_decorate([
	    n$1({
	        type: Boolean,
	        reflect: true
	    }),
	    _ts_metadata("design:type", typeof Controls === "undefined" ? Object : Controls)
	], exports.DotLottiePlayer.prototype, "controls", void 0);
	_ts_decorate([
	    n$1({
	        type: Number
	    }),
	    _ts_metadata("design:type", Number)
	], exports.DotLottiePlayer.prototype, "count", void 0);
	_ts_decorate([
	    n$1({
	        type: String
	    }),
	    _ts_metadata("design:type", typeof exports.PlayerState === "undefined" ? Object : exports.PlayerState)
	], exports.DotLottiePlayer.prototype, "currentState", void 0);
	_ts_decorate([
	    n$1({
	        type: String
	    }),
	    _ts_metadata("design:type", String)
	], exports.DotLottiePlayer.prototype, "description", void 0);
	_ts_decorate([
	    n$1({
	        type: Number
	    }),
	    _ts_metadata("design:type", typeof AnimationDirection === "undefined" ? Object : AnimationDirection)
	], exports.DotLottiePlayer.prototype, "direction", void 0);
	_ts_decorate([
	    n$1({
	        type: Boolean
	    })
	], exports.DotLottiePlayer.prototype, "hover", void 0);
	_ts_decorate([
	    n$1({
	        type: Number
	    })
	], exports.DotLottiePlayer.prototype, "intermission", void 0);
	_ts_decorate([
	    n$1({
	        type: Boolean,
	        reflect: true
	    }),
	    _ts_metadata("design:type", typeof Loop === "undefined" ? Object : Loop)
	], exports.DotLottiePlayer.prototype, "loop", void 0);
	_ts_decorate([
	    n$1({
	        type: String
	    }),
	    _ts_metadata("design:type", typeof exports.PlayMode === "undefined" ? Object : exports.PlayMode)
	], exports.DotLottiePlayer.prototype, "mode", void 0);
	_ts_decorate([
	    n$1({
	        type: String
	    }),
	    _ts_metadata("design:type", typeof ObjectFit === "undefined" ? Object : ObjectFit)
	], exports.DotLottiePlayer.prototype, "objectfit", void 0);
	_ts_decorate([
	    n$1({
	        type: String
	    }),
	    _ts_metadata("design:type", typeof PreserveAspectRatio === "undefined" ? Object : PreserveAspectRatio)
	], exports.DotLottiePlayer.prototype, "preserveAspectRatio", void 0);
	_ts_decorate([
	    n$1({
	        type: String
	    }),
	    _ts_metadata("design:type", typeof RendererType === "undefined" ? Object : RendererType)
	], exports.DotLottiePlayer.prototype, "renderer", void 0);
	_ts_decorate([
	    n$1({
	        type: Array
	    }),
	    _ts_metadata("design:type", Object)
	], exports.DotLottiePlayer.prototype, "segment", void 0);
	_ts_decorate([
	    n$1({
	        type: Number
	    }),
	    _ts_metadata("design:type", Number)
	], exports.DotLottiePlayer.prototype, "seeker", void 0);
	_ts_decorate([
	    n$1({
	        type: Number
	    }),
	    _ts_metadata("design:type", Number)
	], exports.DotLottiePlayer.prototype, "speed", void 0);
	_ts_decorate([
	    n$1({
	        type: String
	    }),
	    _ts_metadata("design:type", String)
	], exports.DotLottiePlayer.prototype, "src", void 0);
	_ts_decorate([
	    n$1({
	        type: Boolean
	    }),
	    _ts_metadata("design:type", typeof Subframe === "undefined" ? Object : Subframe)
	], exports.DotLottiePlayer.prototype, "subframe", void 0);
	_ts_decorate([
	    i$2('.animation'),
	    _ts_metadata("design:type", typeof HTMLElement === "undefined" ? Object : HTMLElement)
	], exports.DotLottiePlayer.prototype, "container", void 0);
	exports.DotLottiePlayer = _ts_decorate([
	    e$1('dotlottie-player')
	], exports.DotLottiePlayer);

})(this["@johanaarstein/dotlottie-player"] = this["@johanaarstein/dotlottie-player"] || {});
