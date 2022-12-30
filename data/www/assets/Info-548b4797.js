import{a as M}from"./axios-c0bebe37.js";import{_ as A,r as g,o as k,c as K,a as l,w as d,F as R,b as s,t as _,p as C,d as D}from"./index-a1346198.js";const L=M.create({baseURL:"http://lilygo.local",timeout:1e3}),N={data(){return{data:null}},mounted(){L.get("/api/v1/status").then(r=>this.data=r.data).catch(function(r){console.log(r)})}},e=r=>(C("data-v-074d560d"),r=r(),D(),r),T=e(()=>s("div",{class:"card-header"},[s("span",null,"System")],-1)),U={class:"text item flex"},V=e(()=>s("div",{class:"grid5"},"Model",-1)),q={class:"grid5 text-right"},z={class:"text item flex"},E=e(()=>s("div",{class:"grid5"},"Architecture",-1)),P={class:"grid5 text-right"},j={class:"text item flex"},G=e(()=>s("div",{class:"grid5"},"Firmware version",-1)),H={class:"grid5 text-right"},J={class:"text item flex"},O=e(()=>s("div",{class:"grid5"},"SDK version",-1)),Q={class:"grid5 text-right"},W=e(()=>s("div",{class:"card-header"},[s("span",null,"Memory")],-1)),X={class:"text item flex"},Y=e(()=>s("div",{class:"grid5"},"Total Availabl",-1)),Z={class:"grid5 text-right"},$={class:"text item flex"},ss=e(()=>s("div",{class:"grid5"},"Free",-1)),ts={class:"grid5 text-right"},es=e(()=>s("div",{class:"card-header"},[s("span",null,"File System ")],-1)),ds={class:"text item flex"},os=e(()=>s("div",{class:"grid5"},"Total Availabl",-1)),is={class:"grid5 text-right"},as={class:"text item flex"},cs=e(()=>s("div",{class:"grid5"},"Used",-1)),_s={class:"grid5 text-right"},ls={class:"text item flex"},rs=e(()=>s("div",{class:"grid5"},"Free",-1)),ns={class:"grid5 text-right"},hs=e(()=>s("div",{class:"card-header"},[s("span",null,"LoRa")],-1)),vs={class:"text item flex"},xs=e(()=>s("div",{class:"grid5"},"Band",-1)),gs={class:"grid5 text-right"},fs={class:"text item flex"},ms=e(()=>s("div",{class:"grid5"},"Radio",-1)),ps={class:"grid5 text-right"};function us(r,ys,Fs,bs,t,Bs){const v=g("el-card"),x=g("el-col"),f=g("el-row");return k(),K(R,null,[l(f,{gutter:20},{default:d(()=>[l(x,{span:6},{default:d(()=>[l(v,{class:"box-card"},{header:d(()=>[T]),default:d(()=>{var o,i,a,c,n,h,m,p,u,y,F,b,B,w,I,S;return[s("div",U,[V,s("div",q,_((i=(o=t.data)==null?void 0:o.sys)==null?void 0:i.model),1)]),s("div",z,[E,s("div",P,_(((c=(a=t.data)==null?void 0:a.sys)==null?void 0:c.arch.mfr)+" "+((h=(n=t.data)==null?void 0:n.sys)==null?void 0:h.arch.model)+" rev "+((p=(m=t.data)==null?void 0:m.sys)==null?void 0:p.arch.revision)+" "+((y=(u=t.data)==null?void 0:u.sys)==null?void 0:y.arch.cpu)+" @ "+((b=(F=t.data)==null?void 0:F.sys)==null?void 0:b.arch.freq)+"Mhz"),1)]),s("div",j,[G,s("div",H,_((w=(B=t.data)==null?void 0:B.sys)==null?void 0:w.fw),1)]),s("div",J,[O,s("div",Q,_((S=(I=t.data)==null?void 0:I.sys)==null?void 0:S.sdk),1)])]}),_:1})]),_:1}),l(x,{span:6},{default:d(()=>[l(v,{class:"box-card"},{header:d(()=>[W]),default:d(()=>{var o,i,a,c;return[s("div",X,[Y,s("div",Z,_((((i=(o=t.data)==null?void 0:o.mem)==null?void 0:i.total)/1024).toFixed(2)+" KB"),1)]),s("div",$,[ss,s("div",ts,_((((c=(a=t.data)==null?void 0:a.mem)==null?void 0:c.free)/1024).toFixed(2)+" KB"),1)])]}),_:1})]),_:1}),l(x,{span:6},{default:d(()=>[l(v,{class:"box-card"},{header:d(()=>[es]),default:d(()=>{var o,i,a,c,n,h;return[s("div",ds,[os,s("div",is,_((((i=(o=t.data)==null?void 0:o.fs)==null?void 0:i.total)/1024/1024).toFixed(2)+" MB"),1)]),s("div",as,[cs,s("div",_s,_((((c=(a=t.data)==null?void 0:a.fs)==null?void 0:c.used)/1024/1024).toFixed(2)+" MB"),1)]),s("div",ls,[rs,s("div",ns,_((((h=(n=t.data)==null?void 0:n.fs)==null?void 0:h.free)/1024/1024).toFixed(2)+" MB"),1)])]}),_:1})]),_:1})]),_:1}),l(f,{gutter:20},{default:d(()=>[l(x,{span:6},{default:d(()=>[l(v,{class:"box-card"},{header:d(()=>[hs]),default:d(()=>{var o,i,a,c;return[s("div",vs,[xs,s("div",gs,_((i=(o=t.data)==null?void 0:o.lora)==null?void 0:i.band),1)]),s("div",fs,[ms,s("div",ps,_((c=(a=t.data)==null?void 0:a.lora)==null?void 0:c.radio),1)])]}),_:1})]),_:1})]),_:1})],64)}const Ss=A(N,[["render",us],["__scopeId","data-v-074d560d"]]);export{Ss as default};
