System.register([],(function(e,t){"use strict";return{execute:function(){const{STORY_CHANGED:e}=__STORYBOOK_MODULE_CORE_EVENTS__,{addons:t}=__STORYBOOK_MODULE_PREVIEW_API__,{global:n}=__STORYBOOK_MODULE_GLOBAL__;var o="storybook/highlight",_="storybookHighlight",r=`${o}/add`,l=`${o}/reset`,{document:i}=n,s=t.getChannel(),d=()=>{let e=_,t=i.getElementById(e);t&&t.parentNode?.removeChild(t)};s.on(e,d),s.on(l,d),s.on(r,(e=>{let t=_;d();let n=Array.from(new Set(e.elements)),o=i.createElement("style");o.setAttribute("id",t),o.innerHTML=n.map((t=>`${t}{\n          ${((e="#FF4785",t="dashed")=>`\n  outline: 2px ${t} ${e};\n  outline-offset: 2px;\n  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);\n`)(e.color,e.style)}\n         }`)).join(" "),i.head.appendChild(o)}))}}}));