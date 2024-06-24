import{n as d,_ as i,v as p,o as u,q as m,x as f,w as s,y as n,H as o,I as r,z as y}from"./B2bJNEfO.js";const $=d({props:{modelModifiers:{type:Object,default:()=>({})},clearable:{type:Boolean,default:!0},density:{type:String,default:"default",validator:e=>["compact","comfortable","default"].includes(e.toLowerCase())},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},hint:{type:String,required:!1,default:""},label:{type:String,required:!1,default:""},ariaLabel:{type:String,required:!1,default:""},placeholder:{type:String,default:""},persistentHint:{type:Boolean,default:!1},rules:{type:Array,required:!1,default:()=>[]},variant:{type:String,default:"filled"}},emits:["update:modelValue"],data:()=>({modelValue:""}),watch:{modelValue(e){const l=this.maskInput(e);this.modelValue=l,this.$emit("update:modelValue",l)}},methods:{change(e){this.$emit("update:modelValue",this.maskInput(e))},onKeydown(){},maskInput(e){return this.yearMask(e)},yearMask(e){if(this.modelModifiers.year){let l=e.replace(/\s/g,"");return l=l.replace(/[A-z]/g,""),l=l.replace(/[.,/|.¿?"#!<>$@'[\]\\+%^&*;:{}=\-_`~()]/g,""),l=l.replace(/[\u{0080}-\u{FFFF}]/gu,""),l=l.trim(),l=l.slice(-4),l}else return e}}});function v(e,l,k,b,h,g){const t=p("v-text-field");return u(),m(t,y({modelValue:e.modelValue,"onUpdate:modelValue":l[0]||(l[0]=a=>e.modelValue=a),density:e.density,disabled:e.disabled,hint:e.hint,label:e.label,placeholder:e.placeholder,variant:e.variant,clearable:e.clearable,rules:e.rules,class:`sx-input ${[e.variant&&`v-field-${e.variant}`]}`,"persistent-hint":e.persistentHint,error:e.error,"aria-label":e.ariaLabel},e.$attrs,{"onUpdate:modelValue":l[1]||(l[1]=a=>e.change(a)),onKeydown:e.onKeydown}),f({_:2},[e.$slots.append?{name:"append",fn:s(a=>[n(e.$slots,"append",o(r(a)))]),key:"0"}:void 0,e.$slots["append-inner"]?{name:"append-inner",fn:s(a=>[n(e.$slots,"append-inner",o(r(a)))]),key:"1"}:void 0,e.$slots.clear?{name:"clear",fn:s(()=>[n(e.$slots,"clear")]),key:"2"}:void 0,e.$slots.counter?{name:"counter",fn:s(a=>[n(e.$slots,"counter",o(r(a)))]),key:"3"}:void 0,e.$slots.default?{name:"default",fn:s(()=>[n(e.$slots,"default")]),key:"4"}:void 0,e.$slots.details?{name:"details",fn:s(a=>[n(e.$slots,"details",o(r(a)))]),key:"5"}:void 0,e.$slots.label?{name:"label",fn:s(a=>[n(e.$slots,"label",o(r(a)))]),key:"6"}:void 0,e.$slots.loader?{name:"loader",fn:s(a=>[n(e.$slots,"loader",o(r(a)))]),key:"7"}:void 0,e.$slots.message?{name:"message",fn:s(a=>[n(e.$slots,"message",o(r(a)))]),key:"8"}:void 0,e.$slots.prepend?{name:"prepend",fn:s(a=>[n(e.$slots,"prepend",o(r(a)))]),key:"9"}:void 0,e.$slots["prepend-inner"]?{name:"prepend-inner",fn:s(a=>[n(e.$slots,"prepend-inner",o(r(a)))]),key:"10"}:void 0]),1040,["modelValue","density","disabled","hint","label","placeholder","variant","clearable","rules","class","persistent-hint","error","aria-label","onKeydown"])}const w=i($,[["render",v]]);export{w as _};
