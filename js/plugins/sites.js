const sitesjs={requestAPI:(a,o,i)=>{let n=5;function l(){return new Promise((t,e)=>{let r=0;let s=setTimeout(()=>{if(r===0){r=2;s=null;e("请求超时");if(n==0){i()}}},5e3);fetch(a).then(function(e){if(r!==2){clearTimeout(s);t(e);s=null;r=1}if(e.ok){return e.json()}throw new Error("Network response was not ok.")}).then(function(e){n=0;o(e)}).catch(function(e){if(n>0){n-=1;setTimeout(()=>{l()},5e3)}else{i()}})})}l()},layout:s=>{const a=$(s.el)[0];$(a).append('<div class="loading-wrap"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></g></svg></div>');sitesjs.requestAPI(s.api,function(e){$(a).find(".loading-wrap").remove();const t=e.content;t.forEach((e,t)=>{var r='<div class="site-card">';r+='<a class="card-link" target="_blank" rel="external nofollow noopener noreferrer" href="'+e.url+'">';r+='<img src="'+(e.screenshot||"https://screenshot-api.xaoxuu.com/api?url="+e.url+"&width=1280&height=720")+'" onerror="javascript:this.src=\''+s.screenshot+"';\"/>";r+='<div class="info">';r+='<img src="'+(e.avatar||s.avatar)+'" onerror="javascript:this.src=\''+s.avatar+"';\"/>";r+='<span class="title">'+e.title+"</span>";r+='<span class="desc">'+(e.description||e.url)+"</span>";r+="</div>";r+="</a>";r+="</div>";$(a).find(".group-body").append(r)})},function(){$(a).find(".loading-wrap svg").remove();$(a).find(".loading-wrap").append('<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3L21 20H3L12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10V14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"/></path></g><circle cx="12" cy="17" r="1" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.4s" values="0;1"/></circle></svg>');$(a).find(".loading-wrap").addClass("error")})}};$(function(){const e=document.getElementsByClassName("stellar-sites-api");for(var t=0;t<e.length;t++){const s=e[t];const a=s.getAttribute("api");if(a==null){continue}var r=new Object;r.class=s.getAttribute("class");r.el=s;r.api=a;r.avatar="https://fastly.jsdelivr.net/gh/cdn-x/placeholder@1.0.1/link/8f277b4ee0ecd.svg";r.screenshot="https://fastly.jsdelivr.net/gh/cdn-x/placeholder@1.0.1/cover/76b86c0226ffd.svg";sitesjs.layout(r)}});