import{d as e,I as t,U as l,V as a,aB as n,o as i,e as o,f as u,L as s,M as v,y as d,z as c}from"../.pnpm/.pnpm.acc2b6ee.js";import{_ as r}from"../../assets/index.23e8f858.js";const f=e=>(d("data-v-6ea14b07"),e=e(),c(),e),h={class:"container"},p={id:"toolbar"},g={class:"tab"},m=f((()=>u("h1",null,"画板 🖌️",-1))),b=f((()=>u("label",{for:"stroke"},"画笔颜色",-1))),w=f((()=>u("label",{for:"lineWidth"},"画笔大小",-1))),k=r(e({__name:"index",setup(e){const d=t(0),c=t(null),r=t(0),f=t(0);let k;const x=t(!1),C=t(5),y=t("#000000");function _(){k.clearRect(0,0,c.value.width,c.value.height)}function P(e){x.value=!0,k.beginPath(),R(e)}function R(e){x.value&&(k.lineWidth=C.value,k.lineCap="round",k.lineTo(e.offsetX,e.offsetY),k.stroke(),d.value&&function(){const e=k.getImageData(0,0,c.value.width,c.value.height).data;let t=0;for(let l=0;l<e.length;l+=4)0===e[l+3]&&t++;t/(c.value.width*c.value.height)>.5&&_()}())}function W(){x.value=!1}function B(){d.value=0,_(),k.globalCompositeOperation="source-over"}return l((()=>{!function(){k=c.value.getContext("2d");const e=c.value.getBoundingClientRect();r.value=e.left,f.value=e.top,c.value.width=window.innerWidth-r.value,c.value.height=window.innerHeight-f.value}()})),a(y,(e=>{k.strokeStyle=e})),n((()=>{d.value&&(k.fillStyle="#ccc",k.fillRect(0,0,c.value.width,c.value.height),k.font="bold 100px Arial",k.textAlign="center",k.textBaseline="middle",k.fillStyle="#ffe1a8",k.fillText("刮一刮",c.value.width/2,c.value.height/2),k.globalCompositeOperation="destination-out")})),(e,t)=>(i(),o("div",h,[u("div",p,[u("div",g,[u("div",{class:"btn",onClick:B},"画板"),u("div",{class:"btn",onClick:t[0]||(t[0]=e=>d.value=1)},"刮刮乐")]),m,b,s(u("input",{name:"stroke",type:"color","onUpdate:modelValue":t[1]||(t[1]=e=>y.value=e)},null,512),[[v,y.value]]),w,s(u("input",{name:"lineWidth",type:"number","onUpdate:modelValue":t[2]||(t[2]=e=>C.value=e)},null,512),[[v,C.value]]),u("button",{onClick:_},"清除")]),u("div",null,[u("canvas",{ref_key:"canvasRef",ref:c,onPointerdown:P,onPointerup:W,onPointermove:R},null,544)])]))}}),[["__scopeId","data-v-6ea14b07"]]);export{k as default};
