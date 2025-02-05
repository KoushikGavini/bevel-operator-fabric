"use strict";(self.webpackChunkwebsite_docs=self.webpackChunkwebsite_docs||[]).push([[3457,3283],{3283:(e,t,n)=>{n.r(t),n.d(t,{formatElapsedTime:()=>s,getDocumentIndexId:()=>i,getDocumentProperties:()=>r.JN,getInnerType:()=>h,getVectorSize:()=>p,isArrayType:()=>d,isGeoPointType:()=>u,isVectorType:()=>f,validateSchema:()=>c});var o=n(7025),r=n(5846);async function s(e){return{raw:Number(e),formatted:await(0,r.j7)(e)}}async function i(e){if(e.id){if("string"!=typeof e.id)throw(0,o.$)("DOCUMENT_ID_MUST_BE_STRING",typeof e.id);return e.id}return await(0,r.NF)()}async function c(e,t){for(const[n,r]of Object.entries(t)){const t=e[n];if(void 0!==t&&(("geopoint"!==r||"object"!=typeof t||"number"!=typeof t.lon||"number"!=typeof t.lat)&&("enum"!==r||"string"!=typeof t&&"number"!=typeof t)))if("enum[]"===r&&Array.isArray(t)){const e=t.length;for(let o=0;o<e;o++)if("string"!=typeof t[o]&&"number"!=typeof t[o])return n+"."+o}else if(f(r)){const e=p(r);if(!Array.isArray(t)||t.length!==e)throw(0,o.$)("INVALID_INPUT_VECTOR",n,e,t.length)}else if(d(r)){if(!Array.isArray(t))return n;const e=h(r),o=t.length;for(let r=0;r<o;r++)if(typeof t[r]!==e)return n+"."+r}else if("object"!=typeof r){if(typeof t!==r)return n}else{if(!t||"object"!=typeof t)return n;const e=await c(t,r);if(e)return n+"."+e}}}const a={string:!1,number:!1,boolean:!1,enum:!1,geopoint:!1,"string[]":!0,"number[]":!0,"boolean[]":!0,"enum[]":!0},l={"string[]":"string","number[]":"number","boolean[]":"boolean","enum[]":"enum"};function u(e){return"geopoint"===e}function f(e){return"string"==typeof e&&/^vector\[\d+\]$/.test(e)}function d(e){return"string"==typeof e&&a[e]}function h(e){return l[e]}function p(e){const t=Number(e.slice(7,-1));switch(!0){case isNaN(t):throw(0,o.$)("INVALID_VECTOR_VALUE",e);case t<=0:throw(0,o.$)("INVALID_VECTOR_SIZE",e);default:return t}}},8654:(e,t,n)=>{function o(e,t,n){if(e===t)return 0;const o=e;e.length>t.length&&(e=t,t=o);let r=e.length,s=t.length,i=0;for(;i<r&&e.charCodeAt(i)===t.charCodeAt(i);)i++;if(i===r)return 0;for(;r>0&&e.charCodeAt(~-r)===t.charCodeAt(~-s);)r--,s--;if(!r)return s>n?-1:s;if(r-=i,s-=i,r<=n&&s<=n)return r>s?r:s;const c=s-r;if(n>s)n=s;else if(c>n)return-1;let a=0;const l=[],u=[];for(;a<n;)u[a]=t.charCodeAt(i+a),l[a]=++a;for(;a<s;)u[a]=t.charCodeAt(i+a),l[a++]=n+1;const f=n-c,d=n<s;let h=0,p=n,g=0,m=0,y=0,b=0,v=0;for(a=0;a<r;a++){for(m=a,g=a+1,b=e.charCodeAt(i+a),h+=a>f?1:0,p+=p<s?1:0,v=h;v<p;v++)y=g,g=m,m=l[v],b!==u[v]&&(m<g&&(g=m),y<g&&(g=y),g++),l[v]=g;if(d&&l[a+c]>n)return-1}return g<=n?g:-1}async function r(e,t,n){const r=o(e,t,n);return{distance:r,isBounded:r>=0}}function s(e,t,n){const r=o(e,t,n);return{distance:r,isBounded:r>=0}}n.d(t,{Gd:()=>s,X1:()=>r})},2550:(e,t,n)=>{n.d(t,{e:()=>w,J:()=>b});var o=n(7025);const r=192,s=383,i=[65,65,65,65,65,65,65,67,69,69,69,69,73,73,73,73,69,78,79,79,79,79,79,null,79,85,85,85,85,89,80,115,97,97,97,97,97,97,97,99,101,101,101,101,105,105,105,105,101,110,111,111,111,111,111,null,111,117,117,117,117,121,112,121,65,97,65,97,65,97,67,99,67,99,67,99,67,99,68,100,68,100,69,101,69,101,69,101,69,101,69,101,71,103,71,103,71,103,71,103,72,104,72,104,73,105,73,105,73,105,73,105,73,105,73,105,74,106,75,107,107,76,108,76,108,76,108,76,108,76,108,78,110,78,110,78,110,110,78,110,79,111,79,111,79,111,79,111,82,114,82,114,82,114,83,115,83,115,83,115,83,115,84,116,84,116,84,116,85,117,85,117,85,117,85,117,85,117,85,117,87,119,89,121,89,90,122,90,122,90,122,115];var c=n(6504);const a={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},l={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},u="[aeiouy]",f="[^aeiou][^aeiouy]*",d=u+"[aeiou]*",h="^("+f+")?"+d+f,p="^("+f+")?"+d+f+"("+d+")?$",g="^("+f+")?"+d+f+d+f,m="^("+f+")?"+u;function y(e){let t,n,o,r,s,i;if(e.length<3)return e;const c=e.substring(0,1);if("y"==c&&(e=c.toUpperCase()+e.substring(1)),o=/^(.+?)(ss|i)es$/,r=/^(.+?)([^s])s$/,o.test(e)?e=e.replace(o,"$1$2"):r.test(e)&&(e=e.replace(r,"$1$2")),o=/^(.+?)eed$/,r=/^(.+?)(ed|ing)$/,o.test(e)){const t=o.exec(e);o=new RegExp(h),o.test(t[1])&&(o=/.$/,e=e.replace(o,""))}else if(r.test(e)){t=r.exec(e)[1],r=new RegExp(m),r.test(t)&&(e=t,r=/(at|bl|iz)$/,s=new RegExp("([^aeiouylsz])\\1$"),i=new RegExp("^"+f+u+"[^aeiouwxy]$"),r.test(e)?e+="e":s.test(e)?(o=/.$/,e=e.replace(o,"")):i.test(e)&&(e+="e"))}if(o=/^(.+?)y$/,o.test(e)){const n=o.exec(e);t=null==n?void 0:n[1],o=new RegExp(m),t&&o.test(t)&&(e=t+"i")}if(o=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,o.test(e)){const r=o.exec(e);t=null==r?void 0:r[1],n=null==r?void 0:r[2],o=new RegExp(h),t&&o.test(t)&&(e=t+a[n])}if(o=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,o.test(e)){const r=o.exec(e);t=null==r?void 0:r[1],n=null==r?void 0:r[2],o=new RegExp(h),t&&o.test(t)&&(e=t+l[n])}if(o=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,r=/^(.+?)(s|t)(ion)$/,o.test(e)){const n=o.exec(e);t=null==n?void 0:n[1],o=new RegExp(g),t&&o.test(t)&&(e=t)}else if(r.test(e)){const n=r.exec(e);t=(null==n?void 0:n[1])??""+(null==n?void 0:n[2])??"",r=new RegExp(g),r.test(t)&&(e=t)}if(o=/^(.+?)e$/,o.test(e)){const n=o.exec(e);t=null==n?void 0:n[1],o=new RegExp(g),r=new RegExp(p),s=new RegExp("^"+f+u+"[^aeiouwxy]$"),t&&(o.test(t)||r.test(t)&&!s.test(t))&&(e=t)}return o=/ll$/,r=new RegExp(g),o.test(e)&&r.test(e)&&(o=/.$/,e=e.replace(o,"")),"y"==c&&(e=c.toLowerCase()+e.substring(1)),e}function b(e,t){var n;const o=`${this.language}:${e}:${t}`;return this.normalizationCache.has(o)?this.normalizationCache.get(o):(null===(n=this.stopWords)||void 0===n?void 0:n.includes(t))?(this.normalizationCache.set(o,""),""):(this.stemmer&&!this.stemmerSkipProperties.has(e)&&(t=this.stemmer(t)),t=function(e){const t=[];for(let o=0;o<e.length;o++)t[o]=(n=e.charCodeAt(o))<r||n>s?n:i[n-r]||n;var n;return String.fromCharCode(...t)}(t),this.normalizationCache.set(o,t),t)}function v(e,t,n){if(t&&t!==this.language)throw(0,o.$)("LANGUAGE_NOT_SUPPORTED",t);if("string"!=typeof e)return[e];let r;if(n&&this.tokenizeSkipProperties.has(n))r=[this.normalizeToken.bind(this,n??"")(e)];else{const t=c.DO[this.language];r=e.toLowerCase().split(t).map(this.normalizeToken.bind(this,n??"")).filter(Boolean)}const s=function(e){for(;""===e[e.length-1];)e.pop();for(;""===e[0];)e.shift();return e}(r);return this.allowDuplicates?s:Array.from(new Set(s))}async function w(e={}){if(e.language){if(!c.Fc.includes(e.language))throw(0,o.$)("LANGUAGE_NOT_SUPPORTED",e.language)}else e.language="english";let t,n;if(e.stemming||e.stemmer&&!("stemming"in e))if(e.stemmer){if("function"!=typeof e.stemmer)throw(0,o.$)("INVALID_STEMMER_FUNCTION_TYPE");t=e.stemmer}else{if("english"!==e.language)throw(0,o.$)("MISSING_STEMMER",e.language);t=y}if(!1!==e.stopWords){if(n=[],Array.isArray(e.stopWords))n=e.stopWords;else if("function"==typeof e.stopWords)n=await e.stopWords(n);else if(e.stopWords)throw(0,o.$)("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY");if(!Array.isArray(n))throw(0,o.$)("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY");for(const e of n)if("string"!=typeof e)throw(0,o.$)("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY")}const r={tokenize:v,language:e.language,stemmer:t,stemmerSkipProperties:new Set(e.stemmerSkipProperties?[e.stemmerSkipProperties].flat():[]),tokenizeSkipProperties:new Set(e.tokenizeSkipProperties?[e.tokenizeSkipProperties].flat():[]),stopWords:n,allowDuplicates:Boolean(e.allowDuplicates),normalizeToken:b,normalizationCache:new Map};return r.tokenize=v.bind(r),r.normalizeToken=b,r}},3457:(e,t,n)=>{n.r(t),n.d(t,{create:()=>_e});var o=n(3283),r=n(5846),s=n(7348);async function i(e,t){return{sharedInternalDocumentStore:t,docs:{},count:0}}async function c(e,t){const n=(0,s.Kj)(e.sharedInternalDocumentStore,t);return e.docs[n]}async function a(e,t){const n=t.length,o=Array.from({length:n});for(let r=0;r<n;r++){const n=(0,s.Kj)(e.sharedInternalDocumentStore,t[r]);o[r]=e.docs[n]}return o}async function l(e){return e.docs}async function u(e,t,n){const o=(0,s.Kj)(e.sharedInternalDocumentStore,t);return void 0===e.docs[o]&&(e.docs[o]=n,e.count++,!0)}async function f(e,t){const n=(0,s.Kj)(e.sharedInternalDocumentStore,t);return void 0!==e.docs[n]&&(delete e.docs[n],e.count--,!0)}async function d(e){return e.count}async function h(e,t){const n=t;return{docs:n.docs,count:n.count,sharedInternalDocumentStore:e}}async function p(e){return{docs:e.docs,count:e.count}}var g=n(7025);const m=["beforeInsert","afterInsert","beforeRemove","afterRemove","beforeUpdate","afterUpdate","beforeSearch","afterSearch","beforeInsertMultiple","afterInsertMultiple","beforeRemoveMultiple","afterRemoveMultiple","beforeUpdateMultiple","afterUpdateMultiple","beforeLoad","afterLoad","afterCreate"];async function y(e,t){var n;const o=[],r=null===(n=e.plugins)||void 0===n?void 0:n.length;if(!r)return o;for(let i=0;i<r;i++)try{const n=await e.plugins[i];"function"==typeof n[t]&&o.push(n[t])}catch(s){throw console.error("Caught error in getAllPluginsByHook:",s),(0,g.$)("PLUGIN_CRASHED")}return o}var b=n(5341);function v(e){const t=e.r;return e.r=t.l,t.l=e,e.h=Math.max(S(e.l),S(e.r))+1,t.h=Math.max(S(t.l),S(t.r))+1,t}function w(e){const t=e.l;return e.l=t.r,t.r=e,e.h=Math.max(S(e.l),S(e.r))+1,t.h=Math.max(S(t.l),S(t.r))+1,t}function I(e,t,n){const o=[];return function e(s){null!==s&&(t<s.k&&e(s.l),s.k>=t&&s.k<=n&&(0,r.h)(o,s.v),n>s.k&&e(s.r))}(e.root),o}function T(e,t,n=!1){const o=[];if(null===e)return o;const s=[e.root];for(;s.length>0;){const e=s.pop();e&&(n&&e.k>=t&&(0,r.h)(o,e.v),!n&&e.k>t&&(0,r.h)(o,e.v),s.push(e.r),s.push(e.l))}return o}function k(e,t,n=!1){const o=[];if(null===e)return o;const s=[e.root];for(;s.length>0;){const e=s.pop();e&&(n&&e.k<=t&&(0,r.h)(o,e.v),!n&&e.k<t&&(0,r.h)(o,e.v),s.push(e.r),s.push(e.l))}return o}function D(e,t){for(;null!==e;)if(t<e.k)e=e.l;else{if(!(t>e.k))return e;e=e.r}return null}function S(e){return null!==e?e.h:-1}function A(e,t){const n=D(e.root,t);return null===n?null:n.v}function P(e,t){const n=Object.keys(t);if(1!==n.length)throw new Error("Invalid operation");const o=n[0];switch(o){case"eq":{const n=t[o];return e.numberToDocumentId.get(n)??[]}case"in":{const n=t[o],s=[];for(const t of n){const n=e.numberToDocumentId.get(t);null!=n&&(0,r.h)(s,n)}return s}case"nin":{const n=t[o],s=[],i=e.numberToDocumentId.keys();for(const t of i){if(n.includes(t))continue;const o=e.numberToDocumentId.get(t);null!=o&&(0,r.h)(s,o)}return s}}throw new Error("Invalid operation")}function O(e,t){const n=Object.keys(t);if(1!==n.length)throw new Error("Invalid operation");const o=n[0];if("containsAll"===o){const n=t[o].map((t=>e.numberToDocumentId.get(t)??[]));return(0,r.y$)(n)}throw new Error("Invalid operation")}var x=n(8654);class M{constructor(e,t,n){this.k=e,this.s=t,this.e=n}c={};d=[];w="";toJSON(){return{w:this.w,s:this.s,c:this.c,d:this.d,e:this.e}}}function R(e,t){e.w=t.w+e.s}function _(e,t){e.d.push(t)}function E(e,t){const n=e.d.indexOf(t);return-1!==n&&(e.d.splice(n,1),!0)}function $(e,t,n,o,s){if(e.e){const{w:i,d:c}=e;if(o&&i!==n)return{};if(null==(0,r.g5)(t,i))if(s){Math.abs(n.length-i.length)<=s&&(0,x.Gd)(n,i,s).isBounded&&(t[i]=[])}else t[i]=[];if(null!=(0,r.g5)(t,i)&&c.length>0){const e=new Set(t[i]),n=c.length;for(let t=0;t<n;t++)e.add(c[t]);t[i]=Array.from(e)}}for(const r of Object.keys(e.c))$(e.c[r],t,n,o,s);return t}function N(e,t){let n="";const o=Math.min(e.length,t.length);for(let r=0;r<o;r++){if(e[r]!==t[r])return n;n+=e[r]}return n}function C(e=!1,t="",n=""){return new M(n,t,e)}function L(e,t,n){const o=t.length;for(let r=0;r<o;r++){const o=t[r],s=t.substring(r),i=e.c[o];if(!i){const t=C(!0,s,o);return _(t,n),e.c[o]=t,void R(t,e)}{const c=i.s,a=c.length,l=N(c,s),u=l.length;if(c===s)return _(i,n),void(i.e=!0);const f=c[u];if(u<a&&u===s.length){const t=C(!0,s,o);t.c[f]=i;const r=t.c[f];return r.s=c.substring(u),r.k=f,e.c[o]=t,R(t,e),R(r,t),void _(t,n)}if(u<a&&u<s.length){const a=C(!1,l,o);a.c[f]=i,e.c[o]=a;const d=a.c[f];d.s=c.substring(u),d.k=f;const h=s[u],p=C(!0,t.substring(r+u),h);return _(p,n),a.c[h]=p,R(a,e),R(p,a),void R(d,a)}r+=a-1,e=i}}}function j(e,t,n,o,s,i){if(!(o<0))if(e.w.startsWith(t))$(e,i,t,!1,0);else{if(e.e){const{w:n,d:o}=e;if(n&&((0,x.Gd)(t,n,s).isBounded&&(i[n]=[]),null!=(0,r.g5)(i,n)&&o.length>0)){const e=new Set(i[n]),t=o.length;for(let n=0;n<t;n++)e.add(o[n]);i[n]=Array.from(e)}}if(!(n>=t.length)){t[n]in e.c&&j(e.c[t[n]],t,n+1,o,s,i),j(e,t,n+1,o-1,s,i);for(const r in e.c)j(e.c[r],t,n,o-1,s,i);for(const r in e.c)r!==t[n]&&j(e.c[r],t,n+1,o-1,s,i)}}}function z(e,{term:t,exact:n,tolerance:o}){if(o&&!n){const n={};return j(e,t,0,(o=o||0)||0,o,n),n}{const r=t.length;for(let n=0;n<r;n++){const r=t[n];if(!(r in e.c))return{};{const s=e.c[r],i=s.s,c=t.substring(n),a=N(i,c).length;if(a!==i.length&&a!==c.length){if(o)break;return{}}n+=s.s.length-1,e=s}}const s={};return $(e,s,t,n,o),s}}function W(e,t,n,o=!0){if(!t)return!0;const r=t.length;for(let s=0;s<r;s++){const r=t[s];if(!(r in e.c))return!1;{const i=e.c[r];s+=i.s.length-1,e=i,o&&e.w!==t||E(e,n)}}return!0}const U=2,F=6371e3;function B(e,t,n,o=!0,r="asc",s=!1){const i=s?G:q,c=[{node:e,depth:0}],a=[];for(;c.length>0;){const{node:e,depth:r}=c.pop();if(null===e)continue;const s=i(t,e.point);(o?s<=n:s>n)&&a.push({point:e.point,docIDs:e.docIDs??[]}),null!=e.left&&c.push({node:e.left,depth:r+1}),null!=e.right&&c.push({node:e.right,depth:r+1})}return r&&a.sort(((e,n)=>{const o=i(t,e.point),s=i(t,n.point);return"asc"===r.toLowerCase()?o-s:s-o})),a}function V(e,t,n=!0,o=null,r=!1){const s=[{node:e,depth:0}],i=[];for(;s.length>0;){const e=s.pop();if(null==e||null==e.node)continue;const{node:o,depth:r}=e,c=r+1;null!=o.left&&s.push({node:o.left,depth:c}),null!=o.right&&s.push({node:o.right,depth:c});const a=K(t,o.point);a&&n?i.push({point:o.point,docIDs:o.docIDs??[]}):a||n||i.push({point:o.point,docIDs:o.docIDs??[]})}const c=function(e){let t=0,n=0,o=0;const r=e.length;for(let i=0,c=r-1;i<r;c=i++){const r=e[i].lon,s=e[i].lat,a=e[c].lon,l=e[c].lat,u=r*l-a*s;t+=u,n+=(r+a)*u,o+=(s+l)*u}t/=2;const s=6*t;return n/=s,o/=s,{lon:n,lat:o}}(t);if(o){const e=r?G:q;i.sort(((t,n)=>{const r=e(c,t.point),s=e(c,n.point);return"asc"===o.toLowerCase()?r-s:s-r}))}return i}function K(e,t){let n=!1;const o=t.lon,r=t.lat,s=e.length;for(let i=0,c=s-1;i<s;c=i++){const t=e[i].lon,s=e[i].lat,a=e[c].lon,l=e[c].lat;s>r!=l>r&&o<(a-t)*(r-s)/(l-s)+t&&(n=!n)}return n}function q(e,t){const n=Math.PI/180,o=e.lat*n,r=t.lat*n,s=(t.lat-e.lat)*n,i=(t.lon-e.lon)*n,c=Math.sin(s/2)*Math.sin(s/2)+Math.cos(o)*Math.cos(r)*Math.sin(i/2)*Math.sin(i/2),a=2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c));return F*a}function G(e,t){const n=6378137,o=1/298.257223563,r=(1-o)*n,s=Math.PI/180,i=e.lat*s,c=t.lat*s,a=(t.lon-e.lon)*s,l=Math.atan((1-o)*Math.tan(i)),u=Math.atan((1-o)*Math.tan(c)),f=Math.sin(l),d=Math.cos(l),h=Math.sin(u),p=Math.cos(u);let g,m,y,b,v,w,I=a,T=1e3;do{const e=Math.sin(I),t=Math.cos(I);b=Math.sqrt(p*e*(p*e)+(d*h-f*p*t)*(d*h-f*p*t)),v=f*h+d*p*t,w=Math.atan2(b,v),m=d*p*e/b,y=1-m*m;const n=v-2*f*h/y,r=o/16*y*(4+o*(4-3*y));g=I,I=a+(1-r)*o*m*(w+r*b*(n+r*v*(2*n*n-1)))}while(Math.abs(I-g)>1e-12&&--T>0);const k=y*(n*n-r*r)/(r*r),D=k/1024*(256+k*(k*(74-47*k)-128));return r*(1+k/16384*(4096+k*(k*(320-175*k)-768)))*(w-D*b*(v-2*f*h/y+D/4*(v*(2*b*b-1)-D/6*w*(4*b*b-3)*(4*w*w-3))))}var Y=n(8475),H=n(6768);async function J(e,t,n,o,r){const i=(0,s.Kj)(e.sharedInternalDocumentStore,n);e.avgFieldLength[t]=((e.avgFieldLength[t]??0)*(r-1)+o.length)/r,e.fieldLengths[t][i]=o.length,e.frequencies[t][i]={}}async function Z(e,t,n,o,r){let i=0;for(const s of o)s===r&&i++;const c=(0,s.Kj)(e.sharedInternalDocumentStore,n),a=i/o.length;e.frequencies[t][c][r]=a,r in e.tokenOccurrences[t]||(e.tokenOccurrences[t][r]=0),e.tokenOccurrences[t][r]=(e.tokenOccurrences[t][r]??0)+1}async function Q(e,t,n,o){const r=(0,s.Kj)(e.sharedInternalDocumentStore,n);e.avgFieldLength[t]=(e.avgFieldLength[t]*o-e.fieldLengths[t][r])/(o-1),e.fieldLengths[t][r]=void 0,e.frequencies[t][r]=void 0}async function X(e,t,n){e.tokenOccurrences[t][n]--}async function ee(e,t,n,o,r){const i=Array.from(r),c=t.avgFieldLength[n],a=t.fieldLengths[n],l=t.tokenOccurrences[n],u=t.frequencies[n],f="number"==typeof l[o]?l[o]??0:0,d=[],h=i.length;for(let g=0;g<h;g++){var p;const n=(0,s.Kj)(t.sharedInternalDocumentStore,i[g]),r=(null==u||null===(p=u[n])||void 0===p?void 0:p[o])??0,l=(0,Y.B)(r,f,e.docsCount,a[n],c,e.params.relevance);d.push([n,l])}return d}async function te(e,t,n,r,s=""){r||(r={sharedInternalDocumentStore:t,indexes:{},vectorIndexes:{},searchableProperties:[],searchablePropertiesWithTypes:{},frequencies:{},tokenOccurrences:{},avgFieldLength:{},fieldLengths:{}});for(const[a,l]of Object.entries(n)){const n=`${s}${s?".":""}${a}`;if("object"!=typeof l||Array.isArray(l))if((0,o.isVectorType)(l))r.searchableProperties.push(n),r.searchablePropertiesWithTypes[n]=l,r.vectorIndexes[n]={size:(0,o.getVectorSize)(l),vectors:{}};else{const e=/\[/.test(l);switch(l){case"boolean":case"boolean[]":r.indexes[n]={type:"Bool",node:{true:[],false:[]},isArray:e};break;case"number":case"number[]":r.indexes[n]={type:"AVL",node:(i=0,c=[],{root:{k:i,v:c,l:null,r:null,h:0}}),isArray:e};break;case"string":case"string[]":r.indexes[n]={type:"Radix",node:C(),isArray:e},r.avgFieldLength[n]=0,r.frequencies[n]={},r.tokenOccurrences[n]={},r.fieldLengths[n]={};break;case"enum":case"enum[]":r.indexes[n]={type:"Flat",node:{numberToDocumentId:new Map},isArray:e};break;case"geopoint":r.indexes[n]={type:"BKD",node:{root:null},isArray:e};break;default:throw(0,g.$)("INVALID_SCHEMA_TYPE",Array.isArray(l)?"array":l,n)}r.searchableProperties.push(n),r.searchablePropertiesWithTypes[n]=l}else te(e,t,l,r,n)}var i,c;return r}function ne(e,t,n,o,r,i,c){return async a=>{const l=(0,s.Kj)(t.sharedInternalDocumentStore,o),{type:u,node:f}=t.indexes[n];switch(u){case"Bool":f[a?"true":"false"].push(l);break;case"AVL":h=a,p=[l],(d=f).root=function e(t,n,o){if(null===t)return{k:n,v:o,l:null,r:null,h:0};if(n<t.k)t.l=e(t.l,n,o);else{if(!(n>t.k)){for(const e of o)t.v.push(e);return t}t.r=e(t.r,n,o)}t.h=1+Math.max(S(t.l),S(t.r));const r=S(t.l)-S(t.r);return r>1&&n<t.l.k?w(t):r<-1&&n>t.r.k?v(t):r>1&&n>t.l.k?(t.l=v(t.l),w(t)):r<-1&&n<t.r.k?(t.r=w(t.r),v(t)):t}(d.root,h,p);break;case"Radix":{const o=await i.tokenize(a,r,n);await e.insertDocumentScoreParameters(t,n,l,o,c);for(const r of o)await e.insertTokenScoreParameters(t,n,l,o,r),L(f,r,l);break}case"Flat":!function(e,t,n){e.numberToDocumentId.has(t)?e.numberToDocumentId.get(t).push(n):e.numberToDocumentId.set(t,[n])}(f,a,l);break;case"BKD":!function(e,t,n){const o={point:t,docIDs:n};if(null==e.root)return void(e.root=o);let r=e.root,s=0;for(;null!==r;){if(r.point.lon===t.lon&&r.point.lat===t.lat){const e=r.docIDs??[];return void(r.docIDs=Array.from(new Set([...e,...n||[]])))}if(0==s%U)if(t.lon<r.point.lon){if(null==r.left)return void(r.left=o);r=r.left}else{if(null==r.right)return void(r.right=o);r=r.right}else if(t.lat<r.point.lat){if(null==r.left)return void(r.left=o);r=r.left}else{if(null==r.right)return void(r.right=o);r=r.right}s++}}(f,a,[l])}var d,h,p}}async function oe(e,t,n,r,s,i,c,a,l){if((0,o.isVectorType)(i))return function(e,t,n,o){n instanceof Float32Array||(n=new Float32Array(n));const r=e.vectorIndexes[t].size,s=(0,H.V)(n,r);e.vectorIndexes[t].vectors[o]=[s,n]}(t,n,s,r);const u=ne(e,t,n,r,c,a,l);if(!(0,o.isArrayType)(i))return u(s);const f=s,d=f.length;for(let o=0;o<d;o++)await u(f[o])}async function re(e,t,n,r,i,c,a,l,u){const f=(0,s.Kj)(t.sharedInternalDocumentStore,r);if((0,o.isVectorType)(c))return delete t.vectorIndexes[n].vectors[r],!0;const{type:d,node:h}=t.indexes[n];switch(d){case"AVL":return function(e,t,n){const o=D(e.root,n);o&&(1!==o.v.length?o.v.splice(o.v.indexOf(t),1):function(e,t){if(null===e||null===e.root)return;let n=e.root,o=null;for(;null!=n&&n.k!==t;)o=n,n=t<n.k?n.l:n.r;null!==n&&(()=>{if(null===n.l&&null===n.r)null===o?e.root=null:o.l===n?o.l=null:o.r=null;else if(null!=n.l&&null!=n.r){let e=n.r,t=n;for(;null!=e.l;)t=e,e=e.l;n.k=e.k,t===n?t.r=e.r:t.l=e.r}else{const t=null!=n.l?n.l:n.r;null===o?e.root=t:o.l===n?o.l=t:o.r=t}})()}(e,n))}(h,f,i),!0;case"Bool":{const e=h[i?"true":"false"].indexOf(f);return h[i?"true":"false"].splice(e,1),!0}case"Radix":{const o=await l.tokenize(i,a,n);await e.removeDocumentScoreParameters(t,n,r,u);for(const r of o)await e.removeTokenScoreParameters(t,n,r),W(h,r,f);return!0}case"Flat":return function(e,t,n){var o,r;null==e||e.numberToDocumentId.set(n,(null===(o=null==e?void 0:e.numberToDocumentId.get(n))||void 0===o?void 0:o.filter((e=>e!==t)))??[]),0===(null===(r=null==e?void 0:e.numberToDocumentId.get(n))||void 0===r?void 0:r.length)&&(null==e||e.numberToDocumentId.delete(n))}(h,f,i),!0;case"BKD":return function(e,t,n){let o=e.root,r=0,s=null,i=null;for(;null!==o;){if((null==o?void 0:o.point.lon)===t.lon&&o.point.lat===t.lat){var c;const t=null===(c=o.docIDs)||void 0===c?void 0:c.indexOf(n);var a;if(void 0!==t&&t>-1)return null===(a=o.docIDs)||void 0===a||a.splice(t,1),void(null!=o.docIDs&&0!==o.docIDs.length||(null!=s?"left"===i?s.left=null!==o.left?o.left:o.right:"right"===i&&(s.right=null!==o.right?o.right:o.left):e.root=null!==o.left?o.left:o.right))}s=o,0==r%U?t.lon<o.point.lon?(o=null==o?void 0:o.left,i="left"):(o=null==o?void 0:o.right,i="right"):t.lat<o.point.lat?(o=null==o?void 0:o.left,i="left"):(o=null==o?void 0:o.right,i="right"),r++}}(h,i,f),!1}}async function se(e,t,n,r,s,i,c,a,l){if(!(0,o.isArrayType)(i))return re(e,t,n,r,s,i,c,a,l);const u=(0,o.getInnerType)(i),f=s,d=f.length;for(let o=0;o<d;o++)await re(e,t,n,r,f[o],u,c,a,l);return!0}async function ie(e,t,n,o){if(!(n in t.tokenOccurrences))return[];const{node:s,type:i}=t.indexes[n];if("Radix"!==i)throw(0,g.$)("WRONG_SEARCH_PROPERTY_TYPE",n);const{exact:c,tolerance:a}=e.params,l=z(s,{term:o,exact:c,tolerance:a}),u=new Set;for(const f in l){if((0,r.g5)(l,f))for(const e of l[f])u.add(e)}return e.index.calculateResultScores(e,t,n,o,Array.from(u))}async function ce(e,t,n){const o=Object.keys(n),s=o.reduce(((e,t)=>({[t]:[],...e})),{});for(const i of o){const o=n[i];if(void 0===t.indexes[i])throw(0,g.$)("UNKNOWN_FILTER_PROPERTY",i);const{node:c,type:a,isArray:l}=t.indexes[i];if("Bool"===a){const e=c[o.toString()];(0,r.h)(s[i],e);continue}if("BKD"===a){let e;if("radius"in o)e="radius";else{if(!("polygon"in o))throw new Error(`Invalid operation ${o}`);e="polygon"}if("radius"===e){const{value:t,coordinates:n,unit:a="m",inside:l=!0,highPrecision:u=!1}=o[e],f=(0,r.O6)(t,a),d=B(c.root,n,f,l,void 0,u);(0,r.h)(s[i],d.flatMap((({docIDs:e})=>e)))}else{const{coordinates:t,inside:n=!0,highPrecision:a=!1}=o[e],l=V(c.root,t,n,void 0,a);(0,r.h)(s[i],l.flatMap((({docIDs:e})=>e)))}continue}if("Radix"===a&&("string"==typeof o||Array.isArray(o))){for(const t of[o].flat()){const n=await e.tokenizer.tokenize(t,e.language,i);for(const e of n){const t=z(c,{term:e,exact:!0});(0,r.h)(s[i],Object.values(t).flat())}}continue}const u=Object.keys(o);if(u.length>1)throw(0,g.$)("INVALID_FILTER_OPERATION",u.length);if("Flat"!==a){if("AVL"===a){const e=u[0],t=o[e];let n=[];switch(e){case"gt":n=T(c,t,!1);break;case"gte":n=T(c,t,!0);break;case"lt":n=k(c,t,!1);break;case"lte":n=k(c,t,!0);break;case"eq":n=A(c,t)??[];break;case"between":{const[e,o]=t;n=I(c,e,o);break}}(0,r.h)(s[i],n)}}else{const e=l?O:P;(0,r.h)(s[i],e(c,o))}}return(0,r.y$)(Object.values(s))}async function ae(e){return e.searchableProperties}async function le(e){return e.searchablePropertiesWithTypes}function ue(e){const t=C(e.e,e.s,e.k);t.d=e.d,t.w=e.w;for(const n of Object.keys(e.c))t.c[n]=ue(e.c[n]);return t}function fe(e){return{numberToDocumentId:new Map(e)}}function de(e){return Array.from(e.numberToDocumentId.entries())}async function he(e,t){const{indexes:n,vectorIndexes:o,searchableProperties:r,searchablePropertiesWithTypes:s,frequencies:i,tokenOccurrences:c,avgFieldLength:a,fieldLengths:l}=t,u={},f={};for(const d of Object.keys(n)){const{node:e,type:t,isArray:o}=n[d];switch(t){case"Radix":u[d]={type:"Radix",node:ue(e),isArray:o};break;case"Flat":u[d]={type:"Flat",node:fe(e),isArray:o};break;default:u[d]=n[d]}}for(const d of Object.keys(o)){const e=o[d].vectors;for(const t in e)e[t]=[e[t][0],new Float32Array(e[t][1])];f[d]={size:o[d].size,vectors:e}}return{sharedInternalDocumentStore:e,indexes:u,vectorIndexes:f,searchableProperties:r,searchablePropertiesWithTypes:s,frequencies:i,tokenOccurrences:c,avgFieldLength:a,fieldLengths:l}}async function pe(e){const{indexes:t,vectorIndexes:n,searchableProperties:o,searchablePropertiesWithTypes:r,frequencies:s,tokenOccurrences:i,avgFieldLength:c,fieldLengths:a}=e,l={};for(const f of Object.keys(n)){const e=n[f].vectors;for(const t in e)e[t]=[e[t][0],Array.from(e[t][1])];l[f]={size:n[f].size,vectors:e}}const u={};for(const f of Object.keys(t)){const{type:e,node:n,isArray:o}=t[f];"Flat"===e?u[f]={type:"Flat",node:de(n),isArray:o}:u[f]=t[f]}return{indexes:u,vectorIndexes:l,searchableProperties:o,searchablePropertiesWithTypes:r,frequencies:s,tokenOccurrences:i,avgFieldLength:c,fieldLengths:a}}var ge=n(6504);function me(e,t,n,s,i){const c={language:e.tokenizer.language,sharedInternalDocumentStore:t,enabled:!0,isSorted:!0,sortableProperties:[],sortablePropertiesWithTypes:{},sorts:{}};for(const[a,l]of Object.entries(n)){const n=`${i}${i?".":""}${a}`;if(!s.includes(n))if("object"!=typeof l||Array.isArray(l)){if(!(0,o.isVectorType)(l))switch(l){case"boolean":case"number":case"string":c.sortableProperties.push(n),c.sortablePropertiesWithTypes[n]=l,c.sorts[n]={docs:new Map,orderedDocsToRemove:new Map,orderedDocs:[],type:l};break;case"geopoint":case"enum":case"enum[]":case"boolean[]":case"number[]":case"string[]":continue;default:throw(0,g.$)("INVALID_SORT_SCHEMA_TYPE",Array.isArray(l)?"array":l,n)}}else{const o=me(e,t,l,s,n);(0,r.h)(c.sortableProperties,o.sortableProperties),c.sorts={...c.sorts,...o.sorts},c.sortablePropertiesWithTypes={...c.sortablePropertiesWithTypes,...o.sortablePropertiesWithTypes}}}return c}async function ye(e,t,n,o){return!1!==(null==o?void 0:o.enabled)?me(e,t,n,(o||{}).unsortableProperties||[],""):{disabled:!0}}async function be(e,t,n,o){if(!e.enabled)return;e.isSorted=!1;const r=(0,s.Kj)(e.sharedInternalDocumentStore,n),i=e.sorts[t];i.orderedDocsToRemove.has(r)&&De(e,t),i.docs.set(r,i.orderedDocs.length),i.orderedDocs.push([r,o])}function ve(e){if(e.isSorted||!e.enabled)return;const t=Object.keys(e.sorts);for(const n of t)ke(e,n);e.isSorted=!0}function we(e,t,n){return t[1].localeCompare(n[1],(0,ge.JK)(e))}function Ie(e,t){return e[1]-t[1]}function Te(e,t){return t[1]?-1:1}function ke(e,t){const n=e.sorts[t];let o;switch(n.type){case"string":o=we.bind(null,e.language);break;case"number":o=Ie.bind(null);break;case"boolean":o=Te.bind(null)}n.orderedDocs.sort(o);const r=n.orderedDocs.length;for(let s=0;s<r;s++){const e=n.orderedDocs[s][0];n.docs.set(e,s)}}function De(e,t){const n=e.sorts[t];n.orderedDocsToRemove.size&&(n.orderedDocs=n.orderedDocs.filter((e=>!n.orderedDocsToRemove.has(e[0]))),n.orderedDocsToRemove.clear())}async function Se(e,t,n){if(!e.enabled)return;const o=e.sorts[t],r=(0,s.Kj)(e.sharedInternalDocumentStore,n);o.docs.get(r)&&(o.docs.delete(r),o.orderedDocsToRemove.set(r,!0))}async function Ae(e,t,n){if(!e.enabled)throw(0,g.$)("SORT_DISABLED");const o=n.property,r="DESC"===n.order,i=e.sorts[o];if(!i)throw(0,g.$)("UNABLE_TO_SORT_ON_UNKNOWN_FIELD",o,e.sortableProperties.join(", "));return De(e,o),ve(e),t.sort(((t,n)=>{const o=i.docs.get((0,s.Kj)(e.sharedInternalDocumentStore,t[0])),c=i.docs.get((0,s.Kj)(e.sharedInternalDocumentStore,n[0])),a=void 0!==o,l=void 0!==c;return a||l?a?l?r?c-o:o-c:-1:1:0})),t}async function Pe(e){return e.enabled?e.sortableProperties:[]}async function Oe(e){return e.enabled?e.sortablePropertiesWithTypes:{}}async function xe(e,t){const n=t;if(!n.enabled)return{enabled:!1};const o=Object.keys(n.sorts).reduce(((e,t)=>{const{docs:o,orderedDocs:r,type:s}=n.sorts[t];return e[t]={docs:new Map(Object.entries(o).map((([e,t])=>[+e,t]))),orderedDocsToRemove:new Map,orderedDocs:r,type:s},e}),{});return{sharedInternalDocumentStore:e,language:n.language,sortableProperties:n.sortableProperties,sortablePropertiesWithTypes:n.sortablePropertiesWithTypes,sorts:o,enabled:!0,isSorted:n.isSorted}}async function Me(e){if(!e.enabled)return{enabled:!1};!function(e){const t=Object.keys(e.sorts);for(const n of t)De(e,n)}(e),ve(e);const t=Object.keys(e.sorts).reduce(((t,n)=>{const{docs:o,orderedDocs:r,type:s}=e.sorts[n];return t[n]={docs:Object.fromEntries(o.entries()),orderedDocs:r,type:s},t}),{});return{language:e.language,sortableProperties:e.sortableProperties,sortablePropertiesWithTypes:e.sortablePropertiesWithTypes,sorts:t,enabled:e.enabled,isSorted:e.isSorted}}var Re=n(2550);async function _e({schema:e,sort:t,language:n,components:v,id:w,plugins:I}){v||(v={}),w||(w=await(0,r.NF)());let T=v.tokenizer,k=v.index,D=v.documentsStore,S=v.sorter;if(T)if(T.tokenize){T=T}else T=await(0,Re.e)(T);else T=await(0,Re.e)({language:n??"english"});if(v.tokenizer&&n)throw(0,g.$)("NO_LANGUAGE_WITH_CUSTOM_TOKENIZER");const A=(0,s.JA)();k||=await async function(){return{create:te,insert:oe,remove:se,insertDocumentScoreParameters:J,insertTokenScoreParameters:Z,removeDocumentScoreParameters:Q,removeTokenScoreParameters:X,calculateResultScores:ee,search:ie,searchByWhereClause:ce,getSearchableProperties:ae,getSearchablePropertiesWithTypes:le,load:he,save:pe}}(),S||=await async function(){return{create:ye,insert:be,remove:Se,save:Me,load:xe,sortBy:Ae,getSortableProperties:Pe,getSortablePropertiesWithTypes:Oe}}(),D||=await async function(){return{create:i,get:c,getMultiple:a,getAll:l,store:u,remove:f,count:d,load:h,save:p}}(),function(e){const t={formatElapsedTime:o.formatElapsedTime,getDocumentIndexId:o.getDocumentIndexId,getDocumentProperties:r.JN,validateSchema:o.validateSchema};for(const n of b.mj){const o=n;if(e[o]){if("function"!=typeof e[o])throw(0,g.$)("COMPONENT_MUST_BE_FUNCTION",o)}else e[o]=t[o]}for(const n of Object.keys(e))if(!b.To.includes(n)&&!b.mj.includes(n))throw(0,g.$)("UNSUPPORTED_COMPONENT",n)}(v);const{getDocumentProperties:P,getDocumentIndexId:O,validateSchema:x,formatElapsedTime:M}=v,R={data:{},caches:{},schema:e,tokenizer:T,index:k,sorter:S,documentsStore:D,internalDocumentIDStore:A,getDocumentProperties:P,getDocumentIndexId:O,validateSchema:x,beforeInsert:[],afterInsert:[],beforeRemove:[],afterRemove:[],beforeUpdate:[],afterUpdate:[],beforeSearch:[],afterSearch:[],beforeInsertMultiple:[],afterInsertMultiple:[],beforeRemoveMultiple:[],afterRemoveMultiple:[],afterUpdateMultiple:[],beforeUpdateMultiple:[],afterCreate:[],formatElapsedTime:M,id:w,plugins:I,version:"2.0.22"};R.data={index:await R.index.create(R,A,e),docs:await R.documentsStore.create(R,A),sorting:await R.sorter.create(R,A,e,t)};for(const o of m)R[o]=(R[o]??[]).concat(await y(R,o));const _=R.afterCreate;return _&&await(0,b.WQ)(_,R),R}}}]);