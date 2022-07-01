import{_ as O,g as p,j as r,r as u,o as _,f as v,w as e,c as w,a as n,u as h,ab as $,T as k,d as b,b as c,a3 as z,aW as P,aX as U,M as S,G as T,F as C,ax as V,aY as R}from"../app.8cd34ddb.js";const q=["src"],B=p({__name:"avatar",setup(f){const l=r(""),d=(a,s)=>{l.value=URL.createObjectURL(s.raw)},i=a=>a.type!=="image/jpeg"?(k.error("Avatar picture must be JPG format!"),!1):a.size/1024/1024>2?(k.error("Avatar picture size can not exceed 2MB!"),!1):!0;return(a,s)=>{const o=u("el-icon"),t=u("el-upload");return _(),v(t,{class:"avatar-uploader",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","show-file-list":!1,"on-success":d,"before-upload":i},{default:e(()=>[l.value?(_(),w("img",{key:0,src:l.value,class:"avatar"},null,8,q)):(_(),v(o,{key:1,class:"avatar-uploader-icon"},{default:e(()=>[n(h($))]),_:1}))]),_:1})}}});var F=O(B,[["__scopeId","data-v-36fef47d"]]),me=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const I=b("Click to upload"),L=c("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500KB. ",-1),E=p({__name:"basic",setup(f){const l=r([{name:"element-plus-logo.svg",url:"https://element-plus.org/images/element-plus-logo.svg"},{name:"element-plus-logo2.svg",url:"https://element-plus.org/images/element-plus-logo.svg"}]),d=(o,t)=>{console.log(o,t)},i=o=>{console.log(o)},a=(o,t)=>{k.warning(`The limit is 3, you selected ${o.length} files this time, add up to ${o.length+t.length} totally`)},s=(o,t)=>z.confirm(`Cancel the transfert of ${o.name} ?`).then(()=>!0,()=>!1);return(o,t)=>{const m=u("el-button"),g=u("el-upload");return _(),v(g,{"file-list":l.value,"onUpdate:file-list":t[0]||(t[0]=j=>l.value=j),class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",multiple:"","on-preview":i,"on-remove":d,"before-remove":s,limit:3,"on-exceed":a},{tip:e(()=>[L]),default:e(()=>[n(m,{type:"primary"},{default:e(()=>[I]),_:1})]),_:1},8,["file-list"])}}});var ge=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));const A=["src"],N={class:"el-upload-list__item-actions"},D=["onClick"],G=["onClick"],J=["onClick"],K=["src"],W=p({__name:"custom-thumbnail",setup(f){const l=r(""),d=r(!1),i=r(!1),a=t=>{console.log(t)},s=t=>{l.value=t.url,d.value=!0},o=t=>{console.log(t)};return(t,m)=>{const g=u("el-icon"),j=u("el-upload"),x=u("el-dialog");return _(),w(C,null,[n(j,{action:"#","list-type":"picture-card","auto-upload":!1},{file:e(({file:y})=>[c("div",null,[c("img",{class:"el-upload-list__item-thumbnail",src:y.url,alt:""},null,8,A),c("span",N,[c("span",{class:"el-upload-list__item-preview",onClick:M=>s(y)},[n(g,null,{default:e(()=>[n(h(P))]),_:1})],8,D),i.value?S("",!0):(_(),w("span",{key:0,class:"el-upload-list__item-delete",onClick:M=>o(y)},[n(g,null,{default:e(()=>[n(h(U))]),_:1})],8,G)),i.value?S("",!0):(_(),w("span",{key:1,class:"el-upload-list__item-delete",onClick:M=>a(y)},[n(g,null,{default:e(()=>[n(h(T))]),_:1})],8,J))])])]),default:e(()=>[n(g,null,{default:e(()=>[n(h($))]),_:1})]),_:1}),n(x,{modelValue:d.value,"onUpdate:modelValue":m[0]||(m[0]=y=>d.value=y)},{default:e(()=>[c("img",{"w-full":"",src:l.value,alt:"Preview Image"},null,8,K)]),_:1},8,["modelValue"])],64)}}});var ve=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));const X=c("div",{class:"el-upload__text"},[b(" Drop file here or "),c("em",null,"click to upload")],-1),Y=c("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ",-1),H=p({__name:"drag-and-drop",setup(f){return(l,d)=>{const i=u("el-icon"),a=u("el-upload");return _(),v(a,{class:"upload-demo",drag:"",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",multiple:""},{tip:e(()=>[Y]),default:e(()=>[n(i,{class:"el-icon--upload"},{default:e(()=>[n(h(V))]),_:1}),X]),_:1})}}});var be=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));const Q=b("Click to upload"),Z=c("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ",-1),ee=p({__name:"file-list-with-thumbnail",setup(f){const l=r([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),d=(a,s)=>{console.log(a,s)},i=a=>{console.log(a)};return(a,s)=>{const o=u("el-button"),t=u("el-upload");return _(),v(t,{"file-list":l.value,"onUpdate:file-list":s[0]||(s[0]=m=>l.value=m),class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","on-preview":i,"on-remove":d,"list-type":"picture"},{tip:e(()=>[Z]),default:e(()=>[n(o,{type:"primary"},{default:e(()=>[Q]),_:1})]),_:1},8,["file-list"])}}});var he=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));const le=b("Click to upload"),te=c("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ",-1),oe=p({__name:"file-list",setup(f){const l=r([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),d=(i,a)=>{l.value=l.value.slice(-3)};return(i,a)=>{const s=u("el-button"),o=u("el-upload");return _(),v(o,{"file-list":l.value,"onUpdate:file-list":a[0]||(a[0]=t=>l.value=t),class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","on-change":d},{tip:e(()=>[te]),default:e(()=>[n(s,{type:"primary"},{default:e(()=>[le]),_:1})]),_:1},8,["file-list"])}}});var ye=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));const ae=b("select file"),ne=b(" upload to server "),se=c("div",{class:"el-upload__tip text-red"}," limit 1 file, new file will cover the old file ",-1),ue=p({__name:"limit-cover",setup(f){const l=r(),d=a=>{l.value.clearFiles();const s=a[0];s.uid=R(),l.value.handleStart(s)},i=()=>{l.value.submit()};return(a,s)=>{const o=u("el-button"),t=u("el-upload");return _(),v(t,{ref_key:"upload",ref:l,class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",limit:1,"on-exceed":d,"auto-upload":!1},{trigger:e(()=>[n(o,{type:"primary"},{default:e(()=>[ae]),_:1})]),tip:e(()=>[se]),default:e(()=>[n(o,{class:"ml-3",type:"success",onClick:i},{default:e(()=>[ne]),_:1})]),_:1},512)}}});var je=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"}));const de=b("select file"),ie=b(" upload to server "),ce=c("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ",-1),_e=p({__name:"manual",setup(f){const l=r(),d=()=>{l.value.submit()};return(i,a)=>{const s=u("el-button"),o=u("el-upload");return _(),v(o,{ref_key:"uploadRef",ref:l,class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","auto-upload":!1},{trigger:e(()=>[n(s,{type:"primary"},{default:e(()=>[de]),_:1})]),tip:e(()=>[ce]),default:e(()=>[n(s,{class:"ml-3",type:"success",onClick:d},{default:e(()=>[ie]),_:1})]),_:1},512)}}});var xe=Object.freeze(Object.defineProperty({__proto__:null,default:_e},Symbol.toStringTag,{value:"Module"}));const re=["src"],pe=p({__name:"photo-wall",setup(f){const l=r([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"plant-1.png",url:"/images/plant-1.png"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"plant-2.png",url:"/images/plant-2.png"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"figure-1.png",url:"/images/figure-1.png"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"figure-2.png",url:"/images/figure-2.png"}]),d=r(""),i=r(!1),a=(o,t)=>{console.log(o,t)},s=o=>{d.value=o.url,i.value=!0};return(o,t)=>{const m=u("el-icon"),g=u("el-upload"),j=u("el-dialog");return _(),w(C,null,[n(g,{"file-list":l.value,"onUpdate:file-list":t[0]||(t[0]=x=>l.value=x),action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","list-type":"picture-card","on-preview":s,"on-remove":a},{default:e(()=>[n(m,null,{default:e(()=>[n(h($))]),_:1})]),_:1},8,["file-list"]),n(j,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=x=>i.value=x)},{default:e(()=>[c("img",{"w-full":"",src:d.value,alt:"Preview Image"},null,8,re)]),_:1},8,["modelValue"])],64)}}});var we=Object.freeze(Object.defineProperty({__proto__:null,default:pe},Symbol.toStringTag,{value:"Module"}));export{me as _,ge as a,ve as b,be as c,he as d,ye as e,je as f,xe as g,we as h};