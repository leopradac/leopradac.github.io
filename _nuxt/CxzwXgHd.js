import{n as v,_ as h,o as c,c as A,a as s,t as f,B as y,v as _,q as b,w as o,b as t,d as r,D as C,y as w,s as T}from"./B2bJNEfO.js";import{_ as k}from"./B-WugN2K.js";import{_ as W}from"./DTPOqQbf.js";const D=v({props:{title:{type:String,default:""},subtitle:{type:String,default:""},titleBold:{type:Boolean,default:!1}}}),N={class:"sx-data-card-item"},E={class:"subtitle text-secondary"};function P(e,l,g,$,B,x){return c(),A("div",N,[s("div",E,f(e.subtitle),1),s("div",{class:y(["title",{"title-bold":e.titleBold}])},f(e.title),3)])}const L=h(D,[["render",P]]),V=v({components:{},props:{title:{type:String,default:""},titleBig:{type:Boolean,default:!1},subtitle:{type:String,default:void 0},buttonType:{type:String,default:void 0,validation:e=>["icon","label"].includes(e)},buttonIcon:{type:String,default:"mdi-close"},buttonLabel:{type:String,default:""},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["button-action"]}),I={key:0,class:"header-right close-container"};function Y(e,l,g,$,B,x){const i=_("v-col"),d=_("v-row"),n=_("v-progress-circular"),u=k,a=W;return c(),b(d,{"no-gutters":"",class:"px-4 py-2 sx-data-card"},{default:o(()=>[t(i,{cols:"12",class:"header-container d-flex justify-space-between align-center"},{default:o(()=>[t(d,{"no-gutters":"",class:"header-left"},{default:o(()=>[e.subtitle?(c(),b(i,{key:0,class:"card-subtitle v-col-12"},{default:o(()=>[r(f(e.subtitle),1)]),_:1})):C("",!0),t(i,{cols:"12",class:y(["card-title",{"title-big":e.titleBig}])},{default:o(()=>[r(f(e.title),1)]),_:1},8,["class"])]),_:1}),e.buttonType==="icon"?(c(),A("div",I,[e.loading?(c(),b(n,{key:0,size:"20",indeterminate:"",color:"primary"})):(c(),b(u,{key:1,class:y([e.disabled?"cursor-disabled":"cursor-pointer"]),color:e.disabled?"grey ":"red",icon:e.buttonIcon,onClick:l[0]||(l[0]=p=>e.$emit("button-action"))},null,8,["class","color","icon"]))])):e.buttonType==="label"?(c(),b(a,{key:1,variant:"text",color:"primary",class:"header-right edit-element font-weight-bold text-none pa-none",onClick:l[1]||(l[1]=p=>e.$emit("button-action"))},{default:o(()=>[r(f(e.buttonLabel),1)]),_:1})):C("",!0)]),_:1}),w(e.$slots,"default")]),_:3})}const z=h(V,[["render",Y]]),U=v({data(){return{layout:"demo",menu:!1}},methods:{buttonAction(){alert("Button works")}}}),O={style:{display:"flex","align-items":"start"},class:"pa-5 my-5"},j={class:"mx-1",style:{width:"350px"}},q={class:"text-left v-col-12",style:{display:"block"}},R=s("div",null,"wendy@gmail.com",-1),F=s("div",null,"(970) 577-4000",-1),G=s("div",null,"333 E Wonderview Ave",-1),H=s("div",null,"Estes Park, CO 80517",-1),J=s("div",{class:"header"}," Percentage of royalties ",-1),K=s("div",null,"100%",-1),M=s("div",{class:"header"}," Apply to all? ",-1),Q=s("div",null,"Yes",-1),X={class:"mx-1",style:{width:"350px"}},Z={class:"mx-1",style:{width:"350px"}},tt=s("div",{class:"header"}," Percentage of royalties ",-1),ot=s("div",null,"100%",-1),et=s("div",{class:"header"}," Apply to all? ",-1),st=s("div",null,"Yes",-1),lt=s("div",{class:"header"}," Percentage of royalties ",-1),nt=s("div",null,"100%",-1),at=s("div",{class:"header"}," Apply to all? ",-1),it=s("div",null,"Yes",-1),dt=s("div",{class:"header"}," Percentage of royalties ",-1),ct=s("div",null,"100%",-1),rt=s("div",{class:"header"}," Apply to all? ",-1),ut=s("div",null,"Yes",-1);function _t(e,l,g,$,B,x){const i=_("v-divider"),d=L,n=_("v-col"),u=_("v-row"),a=z,p=_("v-sheet"),S=T;return c(),b(S,{name:e.layout},{title:o(()=>[r(" Demo: Data Card component ")]),component:o(()=>[s("div",O,[s("div",j,[t(a,{title:"Wendy Torrance","title-big":"",subtitle:"Performer + Rights Owner","button-type":"label","button-label":"Edit",onButtonAction:l[0]||(l[0]=m=>e.buttonAction())},{default:o(()=>[s("div",q,[R,F,t(i,{class:"my-3"}),G,H,t(i,{class:"my-3"}),t(d,{title:"12/17/1987",subtitle:"Date of birth",class:"pb-2"}),t(d,{subtitle:"Country of residence",title:"United States",class:"pb-2"}),t(d,{subtitle:"Country of citizenship",title:"United States",class:"pb-2"}),t(d,{subtitle:"Country of birth",title:"United States",class:""}),t(i,{class:"my-3"}),t(d,{subtitle:"Band Name",title:"Nirvana","title-bold":""}),t(u,{class:"sublist pt-1"},{default:o(()=>[t(n,{cols:"6",class:"text-left"},{default:o(()=>[J,K]),_:1}),t(n,{cols:"6",class:"text-right"},{default:o(()=>[M,Q]),_:1})]),_:1})])]),_:1})]),s("div",X,[t(a,{class:"mb-2",title:"Wendy Torrance"}),t(a,{class:"mb-2",title:"Wendy Torrance","button-type":"icon",onButtonAction:l[1]||(l[1]=m=>e.buttonAction())}),t(a,{class:"mb-2",title:"Wendy Torrance","button-type":"icon","button-icon":"mdi-close-box",onButtonAction:l[2]||(l[2]=m=>e.buttonAction())}),t(a,{class:"mb-2",title:"Wendy Torrance","button-type":"label","button-label":"Edit",onButtonAction:l[3]||(l[3]=m=>e.buttonAction())}),t(a,{class:"mb-2",title:"Wendy Torrance","button-type":"label","button-label":"Close",onButtonAction:l[4]||(l[4]=m=>e.buttonAction())})]),s("div",Z,[t(a,{class:"mb-2",title:"Wendy Torrance"},{default:o(()=>[t(u,{class:"sublist pt-1"},{default:o(()=>[t(n,{cols:"6",class:"text-left"},{default:o(()=>[tt,ot]),_:1}),t(n,{cols:"6",class:"text-right"},{default:o(()=>[et,st]),_:1})]),_:1})]),_:1}),t(a,{class:"mb-2",title:"Wendy Torrance","button-type":"label","button-label":"Edit"},{default:o(()=>[t(u,{class:"sublist pt-1"},{default:o(()=>[t(n,{cols:"6",class:"text-left"},{default:o(()=>[lt,nt]),_:1}),t(n,{cols:"6",class:"text-right"},{default:o(()=>[at,it]),_:1})]),_:1})]),_:1}),t(a,{class:"mb-2",title:"Wendy Torrance","button-type":"icon"},{default:o(()=>[t(u,{class:"sublist pt-1"},{default:o(()=>[t(n,{cols:"6",class:"text-left"},{default:o(()=>[dt,ct]),_:1}),t(n,{cols:"6",class:"text-right"},{default:o(()=>[rt,ut]),_:1})]),_:1})]),_:1}),t(a,{class:"mb-2",title:"Loooooooooooooooooooooooooooooooooooooooooong, very long name",subtitle:"Loooooooooooooooooooooooooooooooooooooooooong, very long name"})])])]),props:o(()=>[t(u,{"no-gutters":""},{default:o(()=>[t(n,null,{default:o(()=>[t(p,{class:"ma-2 pa-2"},{default:o(()=>[r(" Name ")]),_:1})]),_:1}),t(n,null,{default:o(()=>[t(p,{class:"ma-2 pa-2"},{default:o(()=>[r(" Type ")]),_:1})]),_:1}),t(n,null,{default:o(()=>[t(p,{class:"ma-2 pa-2"},{default:o(()=>[r(" Default Value ")]),_:1})]),_:1}),t(n,null,{default:o(()=>[t(p,{class:"ma-2 pa-2"},{default:o(()=>[r(" Control ")]),_:1})]),_:1})]),_:1}),t(i)]),_:1},8,["name"])}const mt=h(U,[["render",_t]]);export{mt as default};