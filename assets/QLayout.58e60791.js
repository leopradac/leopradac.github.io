import{c as C,h as te,a as ne}from"./render.ae41ed0a.js";import{r as p,X as A,o as L,G as H,R as k,M as V,h as g,g as E,K as O,V as R,c as m,a as oe,Y as B,W as K,Z as ie,w as q,_ as x,b as le}from"./index.4b59db85.js";import{c as D,g as re}from"./dom.31413b0e.js";function se(){const e=p(!A.value);return e.value===!1&&L(()=>{e.value=!0}),e}const _=typeof ResizeObserver!="undefined",X=_===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Y=C({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let t=null,n,r={width:-1,height:-1};function s(c){c===!0||e.debounce===0||e.debounce==="0"?a():t===null&&(t=setTimeout(a,e.debounce))}function a(){if(t!==null&&(clearTimeout(t),t=null),n){const{offsetWidth:c,offsetHeight:l}=n;(c!==r.width||l!==r.height)&&(r={width:c,height:l},o("resize",r))}}const{proxy:u}=E();if(_===!0){let c;const l=v=>{n=u.$el.parentNode,n?(c=new ResizeObserver(s),c.observe(n),a()):v!==!0&&V(()=>{l(!0)})};return L(()=>{l()}),H(()=>{t!==null&&clearTimeout(t),c!==void 0&&(c.disconnect!==void 0?c.disconnect():n&&c.unobserve(n))}),k}else{let v=function(){t!==null&&(clearTimeout(t),t=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",s,O.passive),l=void 0)},h=function(){v(),n&&n.contentDocument&&(l=n.contentDocument.defaultView,l.addEventListener("resize",s,O.passive),a())};const c=se();let l;return L(()=>{V(()=>{n=u.$el,n&&h()})}),H(v),u.trigger=s,()=>{if(c.value===!0)return g("object",{style:X.style,tabindex:-1,type:"text/html",data:X.url,"aria-hidden":"true",onLoad:h})}}}});const ae=[null,document,document.body,document.scrollingElement,document.documentElement];function ce(e,o){let t=re(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return ae.includes(t)?window:t}function U(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function G(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function I(e,o,t=0){const n=arguments[3]===void 0?performance.now():arguments[3],r=U(e);if(t<=0){r!==o&&W(e,o);return}requestAnimationFrame(s=>{const a=s-n,u=r+(o-r)/Math.max(a,t)*a;W(e,u),u!==o&&I(e,o,t-a,s)})}function Z(e,o,t=0){const n=arguments[3]===void 0?performance.now():arguments[3],r=G(e);if(t<=0){r!==o&&Q(e,o);return}requestAnimationFrame(s=>{const a=s-n,u=r+(o-r)/Math.max(a,t)*a;Q(e,u),u!==o&&Z(e,o,t-a,s)})}function W(e,o){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o);return}e.scrollTop=o}function Q(e,o){if(e===window){window.scrollTo(o,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=o}function me(e,o,t){if(t){I(e,o,t);return}W(e,o)}function ge(e,o,t){if(t){Z(e,o,t);return}Q(e,o)}let T;function $(){if(T!==void 0)return T;const e=document.createElement("p"),o=document.createElement("div");D(e,{width:"100%",height:"200px"}),D(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let n=e.offsetWidth;return t===n&&(n=o.clientWidth),o.remove(),T=t-n,T}function we(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}var pe=C({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:t}}=E(),n=oe(K,R);if(n===R)return console.error("QPageContainer needs to be child of QLayout"),R;B(ie,!0);const r=m(()=>{const s={};return n.header.space===!0&&(s.paddingTop=`${n.header.size}px`),n.right.space===!0&&(s[`padding${t.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(s.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(s[`padding${t.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),s});return()=>g("div",{class:"q-page-container",style:r.value},te(o.default))}});const{passive:j}=O,ue=["both","horizontal","vertical"];var de=C({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ue.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,r,s;q(()=>e.scrollTarget,()=>{c(),u()});function a(){n!==null&&n();const h=Math.max(0,U(r)),b=G(r),f={top:h-t.position.top,left:b-t.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const S=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";t.position={top:h,left:b},t.directionChanged=t.direction!==S,t.delta=f,t.directionChanged===!0&&(t.direction=S,t.inflectionPoint=t.position),o("scroll",{...t})}function u(){r=ce(s,e.scrollTarget),r.addEventListener("scroll",l,j),l(!0)}function c(){r!==void 0&&(r.removeEventListener("scroll",l,j),r=void 0)}function l(h){if(h===!0||e.debounce===0||e.debounce==="0")a();else if(n===null){const[b,f]=e.debounce?[setTimeout(a,e.debounce),clearTimeout]:[requestAnimationFrame(a),cancelAnimationFrame];n=()=>{f(b),n=null}}}const{proxy:v}=E();return q(()=>v.$q.lang.rtl,a),L(()=>{s=v.$el.parentNode,u()}),H(()=>{n!==null&&n(),c()}),Object.assign(v,{trigger:l,getPosition:()=>t}),k}}),be=C({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:t}){const{proxy:{$q:n}}=E(),r=p(null),s=p(n.screen.height),a=p(e.container===!0?0:n.screen.width),u=p({position:0,direction:"down",inflectionPoint:0}),c=p(0),l=p(A.value===!0?0:$()),v=m(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),h=m(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),b=m(()=>l.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),f=m(()=>l.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function S(i){if(e.container===!0||document.qScrollPrevented!==!0){const d={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};u.value=d,e.onScroll!==void 0&&t("scroll",d)}}function J(i){const{height:d,width:w}=i;let y=!1;s.value!==d&&(y=!0,s.value=d,e.onScrollHeight!==void 0&&t("scrollHeight",d),M()),a.value!==w&&(y=!0,a.value=w),y===!0&&e.onResize!==void 0&&t("resize",i)}function ee({height:i}){c.value!==i&&(c.value=i,M())}function M(){if(e.container===!0){const i=s.value>c.value?$():0;l.value!==i&&(l.value=i)}}let z=null;const F={instances:{},view:m(()=>e.view),isContainer:m(()=>e.container),rootRef:r,height:s,containerHeight:c,scrollbarWidth:l,totalWidth:m(()=>a.value+l.value),rows:m(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:x({size:0,offset:0,space:!1}),right:x({size:300,offset:0,space:!1}),footer:x({size:0,offset:0,space:!1}),left:x({size:300,offset:0,space:!1}),scroll:u,animate(){z!==null?clearTimeout(z):document.body.classList.add("q-body--layout-animate"),z=setTimeout(()=>{z=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,d,w){F[i][d]=w}};if(B(K,F),$()>0){let w=function(){i=null,d.classList.remove("hide-scrollbar")},y=function(){if(i===null){if(d.scrollHeight>n.screen.height)return;d.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(w,300)},P=function(N){i!==null&&N==="remove"&&(clearTimeout(i),w()),window[`${N}EventListener`]("resize",y)},i=null;const d=document.body;q(()=>e.container!==!0?"add":"remove",P),e.container!==!0&&P("add"),le(()=>{P("remove")})}return()=>{const i=ne(o.default,[g(de,{onScroll:S}),g(Y,{onResize:J})]),d=g("div",{class:v.value,style:h.value,ref:e.container===!0?void 0:r,tabindex:-1},i);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:r},[g(Y,{onResize:ee}),g("div",{class:"absolute-full",style:b.value},[g("div",{class:"scroll",style:f.value},[d])])]):d}}});export{pe as Q,be as a,U as b,Y as c,de as d,ge as e,G as g,we as h,me as s};