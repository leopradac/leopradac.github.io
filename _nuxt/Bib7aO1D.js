import{_ as v}from"./CDjNJkGj.js";import{n as V,_ as g,q as C,w as a,v as f,s as y,o as D,d as u,b as l}from"./B2bJNEfO.js";const U=V({components:{SxInput:v},data(){return{layout:"demo",error:!1,inputClearable:!1,inputDisabled:!1,inputCustomClass:"",inputLabel:"",inputHint:"",inputErrorMessage:"",inputDensity:"comfortable",inputPlaceholder:"",densityOptions:["compact","comfortable","default"],inputVariant:void 0,variantOptions:["filled","outlined","solo",void 0],inputColor:"primary",colorOptions:["primary","secondary","tertiary","brand-primary"],rulesExample:[]}}});function S(n,d,E,L,H,O){const c=v,e=f("v-sheet"),t=f("v-col"),r=f("v-row"),i=f("v-divider"),s=f("v-chip"),m=f("v-select"),_=f("v-checkbox"),p=f("v-text-field"),b=y;return D(),C(b,{name:n.layout},{title:a(()=>[u(" Demo: Input component ")]),component:a(()=>[l(c,{id:"demoinput",class:"sx-input-demo","aria-label":"demo input field",color:n.inputColor,variant:n.inputVariant,clearable:n.inputClearable,"custom-class":n.inputCustomClass,density:n.inputDensity,error:n.error,label:n.inputLabel,disabled:n.inputDisabled,hint:n.inputHint,placeholder:n.inputPlaceholder,"error-messages":n.inputErrorMessage},null,8,["color","variant","clearable","custom-class","density","error","label","disabled","hint","placeholder","error-messages"])]),props:a(()=>[l(r,{"no-gutters":""},{default:a(()=>[l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[u(" Name ")]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[u(" Type ")]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[u(" Default Value ")]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[u(" Control ")]),_:1})]),_:1})]),_:1}),l(i),l(r,{"no-gutters":"",align:"center"},{default:a(()=>[l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[u(" Variant ")]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" String ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" undefined ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(m,{modelValue:n.inputVariant,"onUpdate:modelValue":d[0]||(d[0]=o=>n.inputVariant=o),label:"Variant",items:n.variantOptions},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),l(i),l(r,{"no-gutters":"",align:"center"},{default:a(()=>[l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[u(" Color ")]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" String ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" undefined ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(m,{modelValue:n.inputColor,"onUpdate:modelValue":d[1]||(d[1]=o=>n.inputColor=o),label:"Color",items:n.colorOptions},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),l(i),l(r,{"no-gutters":"",align:"center"},{default:a(()=>[l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[u(" Clearable ")]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" Boolean ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" false ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(_,{modelValue:n.inputClearable,"onUpdate:modelValue":d[2]||(d[2]=o=>n.inputClearable=o),label:"Clearable"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(i),l(r,{"no-gutters":"",align:"center"},{default:a(()=>[l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[u(" Disabled ")]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" Boolean ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" false ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(_,{modelValue:n.inputDisabled,"onUpdate:modelValue":d[3]||(d[3]=o=>n.inputDisabled=o),label:"Disabled"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(i),l(r,{"no-gutters":"",align:"center"},{default:a(()=>[l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[u(" Error ")]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" Boolean ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" false ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(_,{modelValue:n.error,"onUpdate:modelValue":d[4]||(d[4]=o=>n.error=o),label:"Error"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(i),l(r,{"no-gutters":"",align:"center"},{default:a(()=>[l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[u(" Label ")]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" String ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" undefined ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(p,{modelValue:n.inputLabel,"onUpdate:modelValue":d[5]||(d[5]=o=>n.inputLabel=o),label:"Label"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(i),l(r,{"no-gutters":"",align:"center"},{default:a(()=>[l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[u(" Custom class ")]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" String ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" undefined ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(p,{modelValue:n.inputCustomClass,"onUpdate:modelValue":d[6]||(d[6]=o=>n.inputCustomClass=o),label:"Custom class"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(i),l(r,{"no-gutters":"",align:"center"},{default:a(()=>[l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[u(" Hint ")]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" String ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" undefined ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(p,{modelValue:n.inputHint,"onUpdate:modelValue":d[7]||(d[7]=o=>n.inputHint=o),label:"Hint"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(i),l(r,{"no-gutters":"",align:"center"},{default:a(()=>[l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[u(" Error message ")]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" String ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" undefined ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(p,{modelValue:n.inputErrorMessage,"onUpdate:modelValue":d[8]||(d[8]=o=>n.inputErrorMessage=o),label:"Error message"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(i),l(r,{"no-gutters":"",align:"center"},{default:a(()=>[l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[u(" Placeholder ")]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" String ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" undefined ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(p,{modelValue:n.inputPlaceholder,"onUpdate:modelValue":d[9]||(d[9]=o=>n.inputPlaceholder=o),label:"Placeholder"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(i),l(r,{"no-gutters":"",align:"center"},{default:a(()=>[l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[u(" Density ")]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" String ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(s,{variant:"elevated"},{default:a(()=>[u(" undefined ")]),_:1})]),_:1})]),_:1}),l(t,null,{default:a(()=>[l(e,{class:"ma-2 pa-2"},{default:a(()=>[l(m,{modelValue:n.inputDensity,"onUpdate:modelValue":d[10]||(d[10]=o=>n.inputDensity=o),label:"Density",items:n.densityOptions},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1})]),_:1},8,["name"])}const k=g(U,[["render",S]]);export{k as default};