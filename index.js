import{a as u,S as f,i}from"./assets/vendor-C2ySes1p.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="55210973-f163c09f944895a3800208151",p="https://pixabay.com/api/";async function m(s){const o=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await u.get(`${p}?${o}`)).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(e=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" />
          <div class="info">
            <p><b>Likes</b> ${e.likes}</p>
            <p><b>Views</b> ${e.views}</p>
            <p><b>Comments</b> ${e.comments}</p>
            <p><b>Downloads</b> ${e.downloads}</p>
          </div>
        </a>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){c.innerHTML=""}function b(){l.classList.add("is-visible")}function L(){l.classList.remove("is-visible")}const w=document.querySelector(".form");w.addEventListener("submit",v);async function v(s){s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(o===""){i.warning({title:"Caution",message:"Please enter a search term",position:"topRight"});return}g(),b();try{const e=await m(o);e.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(e.hits)}catch(e){i.error({title:"Error",message:"Something went wrong!",position:"topRight"}),console.error(e)}finally{L(),s.target.reset()}}
//# sourceMappingURL=index.js.map
