import{b as _,R as Q}from"./QBtn.7d84db0f.js";import{c as b,d as I,e as h,b as x,Q as w}from"./QItem.bbe6a482.js";import{Q as B}from"./QHeader.b616a3e2.js";import{Q as C,a as V}from"./QScrollArea.08b667e5.js";import{u as D,Q as A,a as L,b as P,c as g,d as S,e as q}from"./itemsStore.b3af3743.js";import{Q as F}from"./QPage.93be95e4.js";import{a as M,Q as N}from"./QLayout.58e60791.js";import{a3 as j,r as m,c as z,k as i,l as f,m as e,d as t,x as y,y as H,F as K,a2 as U,v as n,p as d,q as c,a4 as E,I as R}from"./index.4b59db85.js";import"./render.ae41ed0a.js";import"./dom.31413b0e.js";import"./use-form.750d9780.js";const l=D(),T=m(!0),k=m(!1),G=m(null),u=m(null),J=z(()=>l.itemList.reduce((s,a)=>s+a.price,0));function O(){return l.userData.id}function W(){return l.userData.email}function X(){return l.userData.name}const Y=()=>{if(u.value){const s={price:u.value,owner:{id:O(),email:W(),name:X()}};l.itemList.push(s),u.value=null}},Z=s=>{console.log(s),console.log("okkkkk")},$=()=>{k.value=!0},ee={setup(){return{store:l,fabBtns:T,drawer:k,priceInput:G,itemPrice:u,totalBill:J,addItem:Y,showAddedItems:$,onMouseDown:Z}}},te={key:0,class:"q-pa-lg"},oe={class:"row justify-center text-center col-xs-12 col-sm-6 col-md-4"},ae={class:"col-12 row q-px-lg"},re={class:"row content-center sp-main-container col-12"},se={class:"row content-end col-12"},ne={class:"row col-xs-9 col-sm-12"},le={class:"col-12"};function ie(s,a,de,o,ce,ue){return i(),f(M,{view:"hHh Lpr fFf",container:"",style:{height:"100dvh"},class:"shadow-2 rounded-borders"},{default:e(()=>[t(B,{class:"bg-transparent"},{default:e(()=>[t(b,{class:"row justify-end"},{default:e(()=>[t(_,{to:"/",dense:"",round:"",color:"primary",size:"sm",icon:"arrow_back"})]),_:1})]),_:1}),t(h,{onHide:a[0]||(a[0]=r=>o.fabBtns=!0),side:"right",modelValue:o.drawer,"onUpdate:modelValue":a[1]||(a[1]=r=>o.drawer=r),width:200,breakpoint:500,overlay:"",elevated:"",class:U(s.$q.dark.isActive?"bg-grey-9":"bg-grey-3")},{default:e(()=>[t(C,{class:"fit"},{default:e(()=>[o.store.itemsCount==0?(i(),y("div",te," No items added ")):(i(),f(I,{key:1},{default:e(()=>[(i(!0),y(K,null,H(o.store.itemList,(r,v)=>R((i(),f(x,{key:v,clickable:""},{default:e(()=>[t(w,{avatar:""},{default:e(()=>[t(V,{size:"sm",color:"primary","text-color":"white"},{default:e(()=>{var p;return[d(c((p=r.owner.name)==null?void 0:p[0]),1)]}),_:2},1024)]),_:2},1024),t(w,null,{default:e(()=>[d(c(r.price),1)]),_:2},1024)]),_:2},1024)),[[Q]])),128))]),_:1}))]),_:1})]),_:1},8,["modelValue","class"]),t(N,null,{default:e(()=>[t(F,{onClick:a[3]||(a[3]=r=>o.drawer=!1),padding:"",class:"row justify-center text-center"},{default:e(()=>[n("div",oe,[n("section",ae,[n("div",re,[t(A,{class:"col-12 totalContainer q-pa-md"},{default:e(()=>[d("$"+c(o.totalBill),1)]),_:1})])]),n("section",se,[n("div",ne,[n("div",le,[t(L,{type:"text",inputmode:"numeric",pattern:"[0-9]*",class:"priceInput",standout:"",autofocus:"",rounded:"","aria-placeholder":0,placeholder:0,clearable:"",modelValue:o.itemPrice,"onUpdate:modelValue":a[2]||(a[2]=r=>o.itemPrice=r),modelModifiers:{number:!0},"input-class":"text-right",ref:"priceInput",onKeydown:E(o.addItem,["enter"])},null,8,["modelValue","onKeydown"])]),t(_,{onMousedown:o.onMouseDown,class:"col-12 q-mt-sm addButton",dense:"",onClick:o.addItem},{default:e(()=>[d("Add Product")]),_:1},8,["onMousedown","onClick"])])])])]),_:1})]),_:1}),t(q,{position:"bottom-right",offset:[18,18]},{default:e(()=>[t(P,{modelValue:o.fabBtns,"onUpdate:modelValue":a[4]||(a[4]=r=>o.fabBtns=r),icon:"add",direction:"up",color:"green"},{default:e(()=>[t(g,{color:"primary",icon:"group"}),t(g,{color:"primary",icon:"receipt_long",onClick:o.showAddedItems},{default:e(()=>[t(S,{color:"red",floating:""},{default:e(()=>[d(c(o.store.itemsCount),1)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1})]),_:1})}var Ie=j(ee,[["render",ie]]);export{Ie as default};
