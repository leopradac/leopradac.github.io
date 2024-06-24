import{_ as y}from"./B-WugN2K.js";import{n as S,E as $,_ as C,v as p,o as v,c as b,a as i,b as l,w as t,y as h,D as k,T as I,t as c,B as T,q as D,s as N,d as n}from"./B2bJNEfO.js";import{_ as U}from"./9ksUEmcp.js";import{_ as B}from"./CDjNJkGj.js";const O=S({name:"SxFileInput",components:{VProgressCircular:$,SxIcon:y},props:{status:{type:String,default:"empty",validator(e){return["empty","uploaded","error"].includes(e)}},acceptedTypes:{type:Array,default:[]},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},title:{type:String,default:"Drag and drop to upload"},or:{type:String,default:"or"},selectAFile:{type:String,default:"Select a file"},acceptableLabel:{type:String,default:"Acceptable files"},maxSelectedFiles:{type:Number,default:void 0}},emits:["file-selected","error"],data(){return{draggingOver:!1}},computed:{classes(){return[this.statusClass,this.draggingClass]},statusClass(){switch(this.status){case"uploaded":return"top-box-uploaded";case"error":return"top-box-error";default:return"top-box-empty"}},draggingClass(){return this.draggingOver?"top-box-dragover":""},filesParsed(){return this.acceptedTypes.join(", ").toUpperCase()},acceptedTypesComposed(){const e=[...this.acceptedTypes],a=e.findIndex(m=>m.toLowerCase().includes("jpg"))>=0,f=e.findIndex(m=>m.toLowerCase().includes("jpeg"))>=0;return a&&!f&&e.push("jpeg"),e},acceptedTypesCommaSeparated(){return this.acceptedTypesComposed.map(a=>a.startsWith(".")?a:`.${a}`).join(", ").toLowerCase()}},mounted(){this.preventWindowDrop();const e=this.$refs.topBox;e&&(e.addEventListener("dragenter",this.dragenter,!1),e.addEventListener("dragleave",this.dragleave,!1),e.addEventListener("dragover",this.dragover,!1),e.addEventListener("drop",this.drop,!1))},methods:{preventWindowDrop(){window.addEventListener("dragover",this.preventWindowEvent,!1),window.addEventListener("drop",this.preventWindowEvent,!1)},preventWindowEvent(e){e.preventDefault()},onChange(e){const a=e.target;a.files&&a.files.length>0&&this.handleFiles(a.files)},selectFile(){const e=document.querySelector("#fileElem");e&&e.click()},resetFileInput(){const e=document.querySelector("#fileElem");e&&(e.value="")},dragenter(e){e.stopImmediatePropagation(),e.preventDefault()},dragleave(e){this.draggingOver=!1,e.stopImmediatePropagation(),e.preventDefault()},dragover(e){this.draggingOver=!0,e.stopImmediatePropagation(),e.preventDefault()},drop(e){this.draggingOver=!1,e.stopImmediatePropagation(),e.preventDefault();const a=e.dataTransfer||null;if(a){const f=a.files;this.handleFiles(f)}},validateFileExt(e){return this.acceptedTypesComposed.some(a=>e.toLowerCase().includes(a.toLowerCase()))},unallowedSelections(e){return e.filter(a=>!this.validateFileExt(a.type))},validateExtensions(e){return this.unallowedSelections(e).length===0},validateListOfFiles(e){const a=Array.from(e);return this.maxSelectedFiles&&a.length>this.maxSelectedFiles?{error:!0,errorCode:"SX_ERROR_MAX_FILES",extra:{maxAllowed:this.maxSelectedFiles,selectedCount:a.length}}:this.validateExtensions(a)?{error:!1,errorCode:null,extra:{}}:{error:!0,errorCode:"SX_ERROR_TYPE_UNALLOWED",extra:{unallowed:this.unallowedSelections}}},handleFiles(e){const a=this.validateListOfFiles(e);a.error?this.$emit("error",a):this.$emit("file-selected",e),this.resetFileInput()}}}),j={class:"sx-uploader-container"},W={key:0,class:"loadingCover d-flex justify-center align-center"},R={key:1,class:"disabledCover"},M={class:"left-side pr-2"},q={class:"right-side"},J={class:"fl"},X={class:"text-body-2 sl"},x={class:"box-bottom"},z={class:"text-body-2"},G=["accept"];function Y(e,a,f,m,F,V){const _=p("v-progress-circular"),d=y;return v(),b("div",j,[i("div",{ref:"topBox",class:T(["top-box d-flex justify-center align-center",e.classes])},[l(I,{name:"fade"},{default:t(()=>[e.loading?(v(),b("div",W,[h(e.$slots,"loading",{},()=>[l(_,{class:"progess",size:70,width:7,color:"primary",indeterminate:""})],!0)])):e.disabled?(v(),b("div",R)):k("",!0)]),_:3}),i("div",M,[l(d,{icon:"mdi-tray-arrow-up"})]),i("div",q,[h(e.$slots,"body",{},()=>[i("div",J,c(e.title),1),i("div",X,c(e.or),1),i("div",{class:"font-weight-bold text-primary tl",onClick:a[0]||(a[0]=(...s)=>e.selectFile&&e.selectFile(...s))},c(e.selectAFile),1)],!0)])],2),i("div",x,[h(e.$slots,"box-bottom",{},()=>[i("div",z,c(e.acceptableLabel)+": "+c(e.filesParsed),1)],!0)]),i("input",{id:"fileElem",type:"file",multiple:"",accept:e.acceptedTypesCommaSeparated,style:{display:"none"},onChange:a[1]||(a[1]=(...s)=>e.onChange&&e.onChange(...s))},null,40,G)])}const H=C(O,[["render",Y],["__scopeId","data-v-b4005bcf"]]),K=S({data(){return{layout:"demo",filesAcceptedProp:["Jpg","Gif","PNG","tiff"],statusProp:"empty",fileNameProp:void 0,titleProp:void 0,orProp:void 0,selectAFileProp:void 0,acceptableLabelProp:void 0,loadingProp:!1,disabledProp:!1,snackbar:!1,barMessage:""}},methods:{updateFilesAcceped(e){this.filesAcceptedProp=e.split(", ")},doSomething(e){this.loadingProp=!0,setTimeout(()=>{this.statusProp="uploaded",this.fileNameProp=e.name,this.loadingProp=!1},2e3)},onError(e){this.statusProp="error",this.barMessage=e.errorCode,this.snackbar=!0}}}),Q={class:"pa-5 my-5 text-center d-flex align-center align-content-center flex-wrap"},Z={class:"px-5 v-col-12"},ee={class:"px-5 v-col-12 d-flex justify-center"};function le(e,a,f,m,F,V){const _=H,d=p("v-divider"),s=p("v-sheet"),o=p("v-col"),u=p("v-row"),P=U,g=B,E=p("v-select"),w=p("v-btn"),L=p("v-snackbar"),A=N;return v(),D(A,{name:e.layout},{title:t(()=>[n(" Demo: UploadFile component ")]),component:t(()=>[i("div",Q,[i("div",Z,[l(_,{status:e.statusProp,"accepted-types":e.filesAcceptedProp,"file-name":e.fileNameProp,title:e.titleProp,or:e.orProp,"select-a-file":e.selectAFileProp,"acceptable-label":e.acceptableLabelProp,loading:e.loadingProp,disabled:e.disabledProp,onFileSelected:e.doSomething,onError:e.onError},null,8,["status","accepted-types","file-name","title","or","select-a-file","acceptable-label","loading","disabled","onFileSelected","onError"])]),l(d,{class:"my-4"}),i("div",ee,[l(_,{class:"width-restricted",status:e.statusProp,"accepted-types":e.filesAcceptedProp,"file-name":e.fileNameProp,title:e.titleProp,or:e.orProp,"select-a-file":e.selectAFileProp,"acceptable-label":e.acceptableLabelProp,loading:e.loadingProp,disabled:e.disabledProp,onFileSelected:e.doSomething,onError:e.onError},null,8,["status","accepted-types","file-name","title","or","select-a-file","acceptable-label","loading","disabled","onFileSelected","onError"])])])]),props:t(()=>[l(u,{"no-gutters":""},{default:t(()=>[l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" Name ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" Type ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" Default Value ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" Control ")]),_:1})]),_:1})]),_:1}),l(d),l(u,{"no-gutters":""},{default:t(()=>[l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" loading ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" Boolean ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" false ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(P,{modelValue:e.loadingProp,"onUpdate:modelValue":a[0]||(a[0]=r=>e.loadingProp=r)},null,8,["modelValue"])]),_:1})]),_:1}),l(d),l(u,{"no-gutters":""},{default:t(()=>[l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" disabled ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" Boolean ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" false ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(P,{modelValue:e.disabledProp,"onUpdate:modelValue":a[1]||(a[1]=r=>e.disabledProp=r)},null,8,["modelValue"])]),_:1})]),_:1}),l(d),l(u,{"no-gutters":""},{default:t(()=>[l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" filesAccepted ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" Array<String> ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" [] ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(g,{"model-value":e.filesAcceptedProp.join(", "),"onUpdate:modelValue":e.updateFilesAcceped},null,8,["model-value","onUpdate:modelValue"])]),_:1})]),_:1}),l(d),l(u,{"no-gutters":""},{default:t(()=>[l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" Status ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" String ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" empty ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(E,{modelValue:e.statusProp,"onUpdate:modelValue":a[2]||(a[2]=r=>e.statusProp=r),label:"Status",items:["empty","uploaded","error"]},null,8,["modelValue"])]),_:1})]),_:1}),l(d),l(u,{"no-gutters":""},{default:t(()=>[l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" title ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" String ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" Drag and drop to upload ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(g,{modelValue:e.titleProp,"onUpdate:modelValue":a[3]||(a[3]=r=>e.titleProp=r)},null,8,["modelValue"])]),_:1})]),_:1}),l(d),l(u,{"no-gutters":""},{default:t(()=>[l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" or ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" String ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" or ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(g,{modelValue:e.orProp,"onUpdate:modelValue":a[4]||(a[4]=r=>e.orProp=r)},null,8,["modelValue"])]),_:1})]),_:1}),l(d),l(u,{"no-gutters":""},{default:t(()=>[l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" selectAFile ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" String ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" select A File ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(g,{modelValue:e.selectAFileProp,"onUpdate:modelValue":a[5]||(a[5]=r=>e.selectAFileProp=r)},null,8,["modelValue"])]),_:1})]),_:1}),l(d),l(u,{"no-gutters":""},{default:t(()=>[l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" acceptableLabel ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" String ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"ma-2 pa-2"},{default:t(()=>[n(" Acceptable files ")]),_:1})]),_:1}),l(o,null,{default:t(()=>[l(g,{modelValue:e.acceptableLabelProp,"onUpdate:modelValue":a[6]||(a[6]=r=>e.acceptableLabelProp=r)},null,8,["modelValue"])]),_:1})]),_:1}),l(d),l(L,{modelValue:e.snackbar,"onUpdate:modelValue":a[8]||(a[8]=r=>e.snackbar=r),color:"error",timeout:4e3},{actions:t(()=>[l(w,{color:"white",variant:"text",onClick:a[7]||(a[7]=r=>e.snackbar=!1)},{default:t(()=>[n(" Close ")]),_:1})]),default:t(()=>[n(c(e.barMessage)+" ",1)]),_:1},8,["modelValue"])]),_:1},8,["name"])}const ne=C(K,[["render",le]]);export{ne as default};
