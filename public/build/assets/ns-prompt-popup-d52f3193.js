import{c as P}from"./npm~@ckeditor~ckeditor5-vue_-be5de702.js";import{C}from"./npm~@ckeditor~ckeditor5-build-classic_-27365139.js";import{_ as x}from"./currency-ab26e44d.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{ak as y,ac as r,A as l,D as i,aj as _,z as p,c as w,F as v,ai as g,aE as S,I as V,y as j,aG as H}from"./npm~@vue~runtime-core_-ff0546fa.js";import{z as f,U as c}from"./npm~@vue~shared_-3ce114fe.js";import{p as z,e as k}from"./bootstrap-17bcf3f4.js";import{w as A,m as O}from"./npm~@vue~runtime-dom_-aa3a306b.js";const E={data:()=>({editor:C}),components:{ckeditor:P.component},mounted(){},methods:{__:x},computed:{hasError(){return this.field.errors!==void 0&&this.field.errors.length>0},disabledClass(){return this.field.disabled?"bg-gray-200 cursor-not-allowed":"bg-transparent"},inputClass(){return this.disabledClass+" "+this.leadClass},leadClass(){return this.leading?"p-8":"p-2"}},props:["placeholder","leading","type","field"]},B={class:"flex flex-col mb-2 flex-auto"},N=["for"],F={key:0,class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},I={class:"text-secondary sm:text-sm sm:leading-5"};function T(e,s,n,u,o,t){const a=y("ckeditor"),d=y("ns-field-description");return r(),l("div",B,[i("label",{for:n.field.name,class:f([t.hasError?"text-error-primary":"text-primary","block leading-5 font-medium"])},[_(e.$slots,"default")],10,N),i("div",{class:f([t.hasError?"has-error":"is-pristine","mt-1 relative rounded-md focus:shadow-sm mb-1"])},[n.leading?(r(),l("div",F,[i("span",I,c(n.leading),1)])):p("",!0),w(a,{class:"w-full",editor:e.editor,modelValue:n.field.value,"onUpdate:modelValue":s[0]||(s[0]=m=>n.field.value=m)},null,8,["editor","modelValue"])],2),w(d,{field:n.field},null,8,["field"])])}const us=b(E,[["render",T]]),D={props:["popup"],data(){return{title:"",message:""}},computed:{size(){return this.popup.params.size||"h-full w-full"}},mounted(){this.title=this.popup.params.title,this.message=this.popup.params.message,this.popupCloser()},methods:{__:x,popupResolver:z,popupCloser:k,emitAction(e){typeof this.popup.params.onAction=="function"&&this.popup.params.onAction(e),this.popup.close()}}},M={class:"flex items-center justify-center flex-col flex-auto p-4"},q={class:"text-xl md:text-3xl font-body text-center"},R={class:"py-4 text-sm md:text-base text-center"},U={class:"action-buttons flex border-t"},L=i("hr",{class:"border-r h-16"},null,-1);function K(e,s,n,u,o,t){return r(),l("div",{id:"confirm-popup",class:f([t.size,"flex flex-col shadow-lg w-5/7-screen md:w-4/7-screen lg:w-2/7-screen"])},[i("div",M,[i("h2",q,c(o.title),1),i("p",R,c(o.message),1)]),i("div",U,[i("button",{class:"flex-auto rounded-none w-1/2 h-16 flex items-center justify-center uppercase",onClick:s[0]||(s[0]=a=>t.emitAction(!0))},c(t.__("Yes")),1),L,i("button",{class:"flex-auto rounded-none w-1/2 h-16 flex items-center justify-center uppercase",onClick:s[1]||(s[1]=a=>t.emitAction(!1))},c(t.__("No")),1)])],2)}const G=b(D,[["render",K]]),cs=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"})),Y={name:"ns-select-popup",props:["popup"],data(){return{value:[],options:[],description:"",label:null,type:"select",field:{name:"search",placeholder:x("Search for options"),value:"",type:"text"}}},computed:{filtredOptions(){return this.options.filter(s=>{const n=new RegExp(this.field.value,"i");return this.field.value.length===0?!0:n.test(s.label)})}},mounted(){this.popupCloser(),this.value=this.popup.params.value||[],this.options=this.popup.params.options,this.label=this.popup.params.label,this.description=this.popup.params.description||"",this.type=this.popup.params.type||this.type},methods:{popupCloser:k,__:x,toggle(e){if(!this.value.includes(e.value))this.value.unshift(e.value);else{const s=this.value.indexOf(e.value);this.value.splice(s,1)}},isSelected(e){return this.value.includes(e.value)},close(){this.popup.params.reject(!1),this.popup.close()},quickSelect(){this.filtredOptions.length===1&&this.select(this.filtredOptions[0])},select(e=void 0){e!==void 0&&(this.value=[e.value]),this.popup.params.resolve(this.type==="select"?this.value[0]:this.value),this.close()}}},J={class:"shadow-xl ns-box w-6/7-screen md:w-4/7-screen lg:w-3/7-screen max-h-5/6-screen overflow-hidden flex flex-col"},Q={class:"p-2 flex justify-between border-b items-center ns-box-header"},W={class:"text-semibold text-primary"},X={class:"flex flex-col overflow-hidden"},Z={key:0,class:"p-2 text-center text-sm bg-info-primary"},ee={class:"m-2 border-dashed border-box-edge border-b"},se={class:"overflow-y-auto"},te={class:"ns-vertical-menu"},ie=["onClick"],ne=["onClick"],re={key:0},le=i("i",{class:"las la-check"},null,-1),ae=[le],oe={key:0,class:"flex justify-between p-2"},ue=i("div",null,null,-1);function ce(e,s,n,u,o,t){const a=y("ns-close-button"),d=y("ns-field"),m=y("ns-button");return r(),l("div",J,[i("div",Q,[i("span",W,c(o.label),1),i("div",null,[w(a,{onClick:s[0]||(s[0]=h=>t.close())})])]),i("div",X,[o.description.length>0?(r(),l("p",Z,c(o.description),1)):p("",!0),i("div",ee,[w(d,{onKeypress:s[1]||(s[1]=A(h=>t.quickSelect(),["enter"])),field:o.field},null,8,["field"])]),i("div",se,[i("ul",te,[o.type==="select"?(r(!0),l(v,{key:0},g(t.filtredOptions,h=>(r(),l("li",{onClick:$=>t.select(h),class:"p-2 border-b border-box-edge text-primary cursor-pointer",key:h.value},[i("span",null,c(h.label),1)],8,ie))),128)):p("",!0),o.type==="multiselect"?(r(!0),l(v,{key:1},g(t.filtredOptions,h=>(r(),l("li",{onClick:$=>t.toggle(h),class:f([t.isSelected(h)?"active":"","p-2 border-b text-primary cursor-pointer flex justify-between"]),key:h.value},[i("span",null,c(h.label),1),t.isSelected(h)?(r(),l("span",re,ae)):p("",!0)],10,ne))),128)):p("",!0)])])]),o.type==="multiselect"?(r(),l("div",oe,[ue,i("div",null,[w(m,{onClick:s[2]||(s[2]=h=>t.select()),type:"info"},{default:S(()=>[V(c(t.__("Select")),1)]),_:1})])])):p("",!0)])}const ds=b(Y,[["render",ce]]),de={data:()=>({}),name:"ns-switch",emits:["change","blur"],mounted(){},computed:{_options(){return this.field.options.map(e=>(e.selected=e.value===this.field.value,e))},hasError(){return this.field.errors!==void 0&&this.field.errors.length>0},disabledClass(){return this.field.disabled?"ns-disabled cursor-not-allowed":""},sizeClass(){return` w-1/${this._options.length<=4?this._options.length:4}`},inputClass(){return this.disabledClass+" "+this.leadClass},leadClass(){return this.leading?"pl-8":"px-4"}},methods:{__,setSelected(e){this.field.value=e.value,this._options.forEach(s=>s.selected=!1),e.selected=!0,this.$forceUpdate(),this.$emit("change",e.value)}},props:["placeholder","leading","type","field"]},pe={class:"mb-2 ns-switch"},he=["for"],fe=["disabled","onClick"],me={key:0,class:"text-xs ns-description"};function _e(e,s,n,u,o,t){return r(),l("div",pe,[i("label",{for:n.field.name,class:f([t.hasError?"has-error":"is-pristine","block leading-5 font-medium"])},[_(e.$slots,"default")],10,he),i("div",{class:f(["rounded-lg flex w-52 overflow-hidden shadow my-1",t.hasError?"has-error":""])},[(r(!0),l(v,null,g(t._options,(a,d)=>(r(),l("button",{disabled:a.disabled,key:d,onClick:m=>t.setSelected(a),class:f([a.selected?"selected "+t.sizeClass:"unselected "+t.inputClass+" "+t.sizeClass,"p-2 text-sm flex-no-wrap outline-none rounded-none"])},c(a.label),11,fe))),128))],2),!n.field.errors||n.field.errors.length===0?(r(),l("p",me,[_(e.$slots,"description")])):p("",!0),(r(!0),l(v,null,g(n.field.errors,(a,d)=>(r(),l("p",{key:d,class:"text-xs ns-error"},[a.identifier==="required"?_(e.$slots,a.identifier,{key:0},()=>[V(c(t.__("This field is required.")),1)]):p("",!0)]))),128))])}const ps=b(de,[["render",_e]]),ve={name:"ns-notice",props:["color"],computed:{actualColor(){return this.color||"info"}}},be={class:"font-bold"},ge={class:"my-2"},xe={class:"flex"};function ye(e,s,n,u,o,t){return r(),l("div",{class:f([t.actualColor,"p-4 border-l-4 text-primary ns-notice"]),role:"alert"},[i("h2",be,[_(e.$slots,"title")]),i("p",ge,[_(e.$slots,"description"),_(e.$slots,"default")]),i("div",xe,[_(e.$slots,"controls")])],2)}const hs=b(ve,[["render",ye]]),we={name:"ns-numpad",props:["value","currency","floating","limit"],data(){return{number:parseInt(1+new Array(parseInt(ns.currency.ns_currency_precision)).fill("").map(e=>0).join("")),screenValue:0,order:null,cursor:parseInt(ns.currency.ns_currency_precision),orderSubscription:null,allSelected:!0,keys:[...[7,8,9].map(e=>({identifier:e,value:e})),...[4,5,6].map(e=>({identifier:e,value:e})),...[1,2,3].map(e=>({identifier:e,value:e})),{identifier:"backspace",icon:"la-backspace"},{identifier:0,value:0},{identifier:"next",value:x("Enter")}]}},mounted(){this.floating&&this.value>0?this.screenValue=parseFloat(this.value/this.number):this.screenValue=this.value||0;const e=new Array(10).fill("").map((s,n)=>n);nsHotPress.create("numpad-keys").whenVisible([".is-popup"]).whenPressed(e,(s,n)=>{this.inputValue({value:n})}),nsHotPress.create("numpad-backspace").whenVisible([".is-popup"]).whenPressed("backspace",()=>this.inputValue({identifier:"backspace"})),nsHotPress.create("numpad-increase").whenVisible([".is-popup"]).whenPressed("+",()=>this.increaseBy({value:1})),nsHotPress.create("numpad-reduce").whenVisible([".is-popup"]).whenPressed("-",()=>this.increaseBy({value:-1})),nsHotPress.create("numpad-save").whenVisible([".is-popup"]).whenPressed("enter",()=>this.inputValue({identifier:"next"}))},watch:{value(){this.value.toString().length>0?this.floating?this.screenValue=Math.round(this.value*this.number).toString():this.screenValue=this.value:this.screenValue=""}},beforeDestroy(){nsHotPress.destroy("numpad-backspace"),nsHotPress.destroy("numpad-increase"),nsHotPress.destroy("numpad-reduce"),nsHotPress.destroy("numpad-save")},methods:{increaseBy(e){let s=parseInt(1+new Array(this.cursor).fill("").map(n=>0).join(""));this.screenValue=(parseFloat(e.value)*s+(parseFloat(this.screenValue)||0)).toString(),this.allSelected=!1},inputValue(e){let s=parseInt(1+new Array(this.cursor).fill("").map(u=>0).join(""));if(e.identifier==="next"){this.$emit("next",this.floating&&this.screenValue.length>0?parseFloat(this.screenValue/s):this.screenValue);return}else if(e.identifier==="backspace")this.allSelected?(this.screenValue="0",this.allSelected=!1):this.screenValue=this.screenValue.toString().substr(0,this.screenValue.length-1);else if(e.value.toString().match(/^\d+$/)){if(this.limit>0&&this.screenValue.length>=this.limit)return;this.allSelected?(this.screenValue=e.value.toString(),this.allSelected=!1):(this.screenValue+=""+e.value.toString(),this.mode==="percentage"&&(this.screenValue=this.screenValue>100?100:this.screenValue))}const n=this.floating&&this.screenValue.length>0&&this.screenValue!=="0"?parseFloat(this.screenValue/this.number):this.screenValue;this.$emit("changed",n)}}},$e={id:"numpad",class:"grid grid-flow-row divide-x divide-y border-r border-b border-input-edge grid-cols-3 grid-rows-3"},Ve=["onClick"],ke={key:0};function Pe(e,s,n,u,o,t){return r(),l("div",$e,[(r(!0),l(v,null,g(o.keys,(a,d)=>(r(),l("div",{onClick:m=>t.inputValue(a),key:d,class:f([d===0?"border-l border-t":"","select-none ns-numpad-key h-24 font-bold flex items-center justify-center cursor-pointer"])},[a.value!==void 0?(r(),l("span",ke,c(a.value),1)):p("",!0),a.icon?(r(),l("i",{key:1,class:f(["las",a.icon])},null,2)):p("",!0)],10,Ve))),128)),_(e.$slots,"numpad-footer")])}const fs=b(we,[["render",Pe]]),Ce={name:"ns-numpad-plus",props:["value","currency","limit"],data(){return{order:null,cursor:parseInt(ns.currency.ns_currency_precision),orderSubscription:null,allSelected:!0,keyRows:[[7,8,9].map(e=>({identifier:e,value:e})),[4,5,6].map(e=>({identifier:e,value:e})),[1,2,3].map(e=>({identifier:e,value:e})),[{identifier:".",value:"."},{identifier:0,value:0},{identifier:"backspace",icon:"la-backspace"}],[{identifier:"next",value:x("Enter")}]]}},mounted(){const e=new Array(10).fill("").map((s,n)=>n);nsHotPress.create("numpad-keys").whenVisible([".is-popup"]).whenPressed(e,(s,n)=>{this.inputValue({value:n})}),nsHotPress.create("numpad-backspace").whenVisible([".is-popup"]).whenPressed("backspace",()=>this.inputValue({identifier:"backspace"})),nsHotPress.create("numpad-increase").whenVisible([".is-popup"]).whenPressed("+",()=>this.increaseBy({value:1})),nsHotPress.create("numpad-dot").whenVisible([".is-popup"]).whenPressed(".",()=>this.inputValue({identifier:"."})),nsHotPress.create("numpad-reduce").whenVisible([".is-popup"]).whenPressed("-",()=>this.increaseBy({value:-1})),nsHotPress.create("numpad-save").whenVisible([".is-popup"]).whenPressed("enter",()=>this.inputValue({identifier:"next"}))},beforeDestroy(){nsHotPress.destroy("numpad-backspace"),nsHotPress.destroy("numpad-increase"),nsHotPress.destroy("numpad-reduce"),nsHotPress.destroy("numpad-save"),nsHotPress.destroy("numpad-dot")},methods:{increaseBy(e){this.$emit("changed",(parseFloat(e.value)+(parseFloat(this.value)||0)).toString()),this.allSelected=!1},inputValue(e){let s=this.value;if(e.identifier==="next"){this.$emit("next",this.value);return}else if(e.identifier==="backspace")this.allSelected?(s="0",this.allSelected=!1):s=this.value.toString().substr(0,this.value.length-1);else if(e.identifier===".")this.allSelected?(s="0.",this.allSelected=!1):s.toString().match(/^[0-9][1-9]*\.[0-9]*$/)===null&&(s+=".");else if(e.value.toString().match(/^\d+$/)){if(this.limit>0&&this.value.length>=this.limit)return;this.allSelected?(s=e.value.toString(),this.allSelected=!1):(s+=""+e.value.toString(),this.mode==="percentage"&&(s=this.value>100?100:this.value))}this.$emit("changed",s)}}},Se={id:"numpad-holder",class:"border-t border-numpad-edge"},je={id:"numpad",class:"grid grid-flow-row grid-cols-3 grid-rows-1 text-lg border-r border-numpad-edge"},He=["onClick"],ze={key:0};function Ae(e,s,n,u,o,t){return r(),l("div",Se,[(r(!0),l(v,null,g(o.keyRows,(a,d)=>(r(),l("div",{key:d},[i("div",je,[(r(!0),l(v,null,g(a,(m,h)=>(r(),l("div",{onClick:$=>t.inputValue(m),key:h,class:f([a.length===1?"col-span-3":"","select-none ns-numpad-key border-l border-b h-24 font-bold flex items-center justify-center cursor-pointer"])},[m.value!==void 0?(r(),l("span",ze,c(m.value),1)):p("",!0),m.icon?(r(),l("i",{key:1,class:f(["las",m.icon])},null,2)):p("",!0)],10,He))),128)),_(e.$slots,"numpad-footer")])]))),128))])}const ms=b(Ce,[["render",Ae]]),Oe={name:"ns-pos-loading-popup",props:["popup"]};function Ee(e,s,n,u,o,t){const a=y("ns-spinner");return r(),j(a)}const Be=b(Oe,[["render",Ee]]),_s=Object.freeze(Object.defineProperty({__proto__:null,default:Be},Symbol.toStringTag,{value:"Module"})),Ne={name:"ns-paginate",props:["pagination"],data:()=>({page:1,path:""}),mounted(){this.path=this.pagination.path},computed:{getPagination(){return this.pagination?this.pageNumbers(this.pagination.last_page,this.pagination.current_page):[]}},methods:{gotoPage(e){this.page=e,this.$emit("load",`${this.path}?page=${this.page}`)},pageNumbers(e,s){var n=[];s-3>1&&n.push(1,"...");for(let u=1;u<=e;u++)s+3>u&&s-3<u&&n.push(u);return s+3<e&&n.push("...",e),n.filter(u=>u>0||typeof u=="string")}}},Fe={id:"pagination",class:"flex -mx-1"},Ie=i("i",{class:"las la-angle-double-left"},null,-1),Te=[Ie],De=["onClick"],Me=i("i",{class:"las la-angle-double-right"},null,-1),qe=[Me];function Re(e,s,n,u,o,t){return r(),l("div",Fe,[n.pagination.current_page?(r(),l(v,{key:0},[i("a",{href:"javascript:void(0)",onClick:s[0]||(s[0]=a=>t.gotoPage(n.pagination.first_page)),class:"mx-1 flex items-center justify-center h-8 w-8 rounded-full ns-inset-button info shadow"},Te),(r(!0),l(v,null,g(t.getPagination,(a,d)=>(r(),l(v,null,[e.page!=="..."?(r(),l("a",{key:d,class:f([e.page==a?"active":"","mx-1 flex items-center justify-center h-8 w-8 rounded-full ns-inset-button info"]),onClick:m=>t.gotoPage(a),href:"javascript:void(0)"},c(a),11,De)):p("",!0),e.page==="..."?(r(),l("a",{key:d,href:"javascript:void(0)",class:"mx-1 flex items-center justify-center h-8 w-8 rounded-full ns-inset-button"},"...")):p("",!0)],64))),256)),i("a",{href:"javascript:void(0)",onClick:s[1]||(s[1]=a=>t.gotoPage(n.pagination.last_page)),class:"mx-1 flex items-center justify-center h-8 w-8 rounded-full ns-inset-button info shadow"},qe)],64)):p("",!0)])}const vs=b(Ne,[["render",Re]]),Ue={props:["popup"],data(){return{title:"",message:"",input:""}},computed:{size(){return this.popup.params.size||"h-full w-full"}},mounted(){this.input=this.popup.params.input||"",this.title=this.popup.params.title,this.message=this.popup.params.message},methods:{__:x,emitAction(e){this.popup.params.onAction(e&&this.input),this.popup.close()},reject(e){this.popup.params.reject!==void 0&&this.popup.params.reject(e),this.popup.close()}}},Le={class:"flex items-center justify-center flex-col flex-auto p-2"},Ke={class:"text-3xl font-body"},Ge={class:"w-full md:mx-auto md:w-2/3 py-4 text-center"},Ye={class:"p-2"},Je={class:"ns-input"},Qe={class:"flex border-t action-buttons"},We=i("hr",{class:"border-r"},null,-1);function Xe(e,s,n,u,o,t){return r(),l("div",{id:"prompt-popup",class:f([t.size,"w-5/7-screen md:w-3/7-screen flex flex-col shadow-lg"])},[i("div",Le,[i("h2",Ke,c(o.title),1),i("p",Ge,c(o.message),1)]),i("div",Ye,[i("div",Je,[H(i("textarea",{"onUpdate:modelValue":s[0]||(s[0]=a=>o.input=a),name:"",id:"",cols:"30",rows:"10",class:"w-full border-2 p-2"},null,512),[[O,o.input]])])]),i("div",Qe,[i("button",{class:"flex-auto w-1/2 h-16 flex items-center justify-center uppercase",onClick:s[1]||(s[1]=a=>t.emitAction(!0))},c(t.__("Ok")),1),We,i("button",{class:"flex-auto w-1/2 h-16 flex items-center justify-center uppercase",onClick:s[2]||(s[2]=a=>t.reject(!1))},c(t.__("Cancel")),1)])],2)}const Ze=b(Ue,[["render",Xe]]),bs=Object.freeze(Object.defineProperty({__proto__:null,default:Ze},Symbol.toStringTag,{value:"Module"}));export{fs as a,ds as b,Be as c,Ze as d,ps as e,us as f,hs as g,ms as h,vs as i,cs as j,_s as k,bs as l,G as n};
