var R=Object.freeze,P=Object.defineProperty;var C=(r,e)=>R(P(r,"raw",{value:R(e||r.slice())}));import{d as j}from"./index-D-tao7Fd.js";const{useEffect:B,useMemo:A}=__STORYBOOK_MODULE_PREVIEW_API__,{global:X}=__STORYBOOK_MODULE_GLOBAL__,{logger:N}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var g="backgrounds",D={light:{name:"light",value:"#F8F8F8"},dark:{name:"dark",value:"#333"}},{document:$,window:G}=X,F=()=>{var r;return!!((r=G==null?void 0:G.matchMedia("(prefers-reduced-motion: reduce)"))!=null&&r.matches)},M=r=>{(Array.isArray(r)?r:[r]).forEach(W)},W=r=>{var t;let e=$.getElementById(r);e&&((t=e.parentElement)==null||t.removeChild(e))},Y=(r,e)=>{let t=$.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let d=$.createElement("style");d.setAttribute("id",r),d.innerHTML=e,$.head.appendChild(d)}},H=(r,e,t)=>{var a;let d=$.getElementById(r);if(d)d.innerHTML!==e&&(d.innerHTML=e);else{let o=$.createElement("style");o.setAttribute("id",r),o.innerHTML=e;let i="addon-backgrounds-grid".concat(t?"-docs-".concat(t):""),n=$.getElementById(i);n?(a=n.parentElement)==null||a.insertBefore(o,n):$.head.appendChild(o)}},q={cellSize:100,cellAmount:10,opacity:.8},I="addon-backgrounds",z="addon-backgrounds-grid",J=F()?"":"transition: background-color 0.3s;",Q=(r,e)=>{let{globals:t,parameters:d,viewMode:a,id:o}=e,{options:i=D,disable:n,grid:s=q}=d[g]||{},c=t[g]||{},u=c.value,l=u?i[u]:void 0,b=(l==null?void 0:l.value)||"transparent",f=c.grid||!1,y=!!l&&!n,k=a==="docs"?"#anchor--".concat(o," .docs-story"):".sb-show-main",x=a==="docs"?"#anchor--".concat(o," .docs-story"):".sb-show-main",m=d.layout===void 0||d.layout==="padded",_=a==="docs"?20:m?16:0,{cellAmount:v,cellSize:p,opacity:S,offsetX:E=_,offsetY:h=_}=s,O=a==="docs"?"".concat(I,"-docs-").concat(o):"".concat(I,"-color"),w=a==="docs"?o:null;B(()=>{let L="\n    ".concat(k," {\n      background: ").concat(b," !important;\n      ").concat(J,"\n      }");if(!y){M(O);return}H(O,L,w)},[k,O,w,y,b]);let T=a==="docs"?"".concat(z,"-docs-").concat(o):"".concat(z);return B(()=>{if(!f){M(T);return}let L=["".concat(p*v,"px ").concat(p*v,"px"),"".concat(p*v,"px ").concat(p*v,"px"),"".concat(p,"px ").concat(p,"px"),"".concat(p,"px ").concat(p,"px")].join(", "),K="\n        ".concat(x," {\n          background-size: ").concat(L," !important;\n          background-position: ").concat(E,"px ").concat(h,"px, ").concat(E,"px ").concat(h,"px, ").concat(E,"px ").concat(h,"px, ").concat(E,"px ").concat(h,"px !important;\n          background-blend-mode: difference !important;\n          background-image: linear-gradient(rgba(130, 130, 130, ").concat(S,") 1px, transparent 1px),\n           linear-gradient(90deg, rgba(130, 130, 130, ").concat(S,") 1px, transparent 1px),\n           linear-gradient(rgba(130, 130, 130, ").concat(S/2,") 1px, transparent 1px),\n           linear-gradient(90deg, rgba(130, 130, 130, ").concat(S/2,") 1px, transparent 1px) !important;\n        }\n      ");Y(T,K)},[v,p,x,T,f,E,h,S]),r()},U,Z=(r,e=[],t)=>{if(r==="transparent")return"transparent";if(e.find(a=>a.value===r)||r)return r;let d=e.find(a=>a.name===t);if(d)return d.value;if(t){let a=e.map(o=>o.name).join(", ");N.warn(j(U||(U=C(['\n        Backgrounds Addon: could not find the default color "','".\n        These are the available colors for your story based on your configuration:\n        ',".\n      "])),t,a))}return"transparent"},V=(r,e)=>{var u;let{globals:t,parameters:d}=e,a=(u=t[g])==null?void 0:u.value,o=d[g],i=A(()=>o.disable?"transparent":Z(a,o.values,o.default),[o,a]),n=A(()=>i&&i!=="transparent",[i]),s=e.viewMode==="docs"?"#anchor--".concat(e.id," .docs-story"):".sb-show-main",c=A(()=>"\n      ".concat(s," {\n        background: ").concat(i," !important;\n        ").concat(F()?"":"transition: background-color 0.3s;","\n      }\n    "),[i,s]);return B(()=>{let l=e.viewMode==="docs"?"addon-backgrounds-docs-".concat(e.id):"addon-backgrounds-color";if(!n){M(l);return}H(l,c,e.viewMode==="docs"?e.id:null)},[n,c,e]),r()},ee=(r,e)=>{var y,k,x;let{globals:t,parameters:d}=e,a=d[g].grid,o=((y=t[g])==null?void 0:y.grid)===!0&&a.disable!==!0,{cellAmount:i,cellSize:n,opacity:s}=a,c=e.viewMode==="docs",u=d.layout===void 0||d.layout==="padded"?16:0,l=(k=a.offsetX)!=null?k:c?20:u,b=(x=a.offsetY)!=null?x:c?20:u,f=A(()=>{let m=e.viewMode==="docs"?"#anchor--".concat(e.id," .docs-story"):".sb-show-main",_=["".concat(n*i,"px ").concat(n*i,"px"),"".concat(n*i,"px ").concat(n*i,"px"),"".concat(n,"px ").concat(n,"px"),"".concat(n,"px ").concat(n,"px")].join(", ");return"\n      ".concat(m," {\n        background-size: ").concat(_," !important;\n        background-position: ").concat(l,"px ").concat(b,"px, ").concat(l,"px ").concat(b,"px, ").concat(l,"px ").concat(b,"px, ").concat(l,"px ").concat(b,"px !important;\n        background-blend-mode: difference !important;\n        background-image: linear-gradient(rgba(130, 130, 130, ").concat(s,") 1px, transparent 1px),\n         linear-gradient(90deg, rgba(130, 130, 130, ").concat(s,") 1px, transparent 1px),\n         linear-gradient(rgba(130, 130, 130, ").concat(s/2,") 1px, transparent 1px),\n         linear-gradient(90deg, rgba(130, 130, 130, ").concat(s/2,") 1px, transparent 1px) !important;\n      }\n    ")},[n]);return B(()=>{let m=e.viewMode==="docs"?"addon-backgrounds-grid-docs-".concat(e.id):"addon-backgrounds-grid";if(!o){M(m);return}Y(m,f)},[o,f,e]),r()},oe=FEATURES!=null&&FEATURES.backgroundsStoryGlobals?[Q]:[ee,V],te={[g]:{grid:{cellSize:20,opacity:.5,cellAmount:5},disable:!1,...!(FEATURES!=null&&FEATURES.backgroundsStoryGlobals)&&{values:Object.values(D)}}},re={[g]:{value:void 0,grid:!1}},ne=FEATURES!=null&&FEATURES.backgroundsStoryGlobals?re:{[g]:null};export{oe as decorators,ne as initialGlobals,te as parameters};