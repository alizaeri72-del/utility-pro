const views=[...document.querySelectorAll('.view')];
function show(id){views.forEach(v=>v.classList.toggle('active',v.id===id));document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',b.dataset.view===id));}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.view)));
document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.open)));
const equipment=[['P-101','پمپ انتقال پساب روغنی','نمونه'],['TK-101','مخزن متعادل‌سازی','نمونه'],['OS-101','سامپ اکسیداسیون','نمونه'],['BL-201','بلوئر هوادهی','نمونه'],['CL-201','کلاریفایر ثانویه','نمونه'],['RAS-201','پمپ برگشت لجن','نمونه']];
const list=document.getElementById('equipment-list'),search=document.getElementById('search');
function render(q=''){list.innerHTML='';equipment.filter(x=>x.join(' ').toLowerCase().includes(q.toLowerCase())).forEach(x=>{const d=document.createElement('article');d.className='card';d.innerHTML='<strong>'+x[0]+'</strong><br>'+x[1]+' <small>('+x[2]+')</small>';list.appendChild(d)});}
render();search.addEventListener('input',e=>render(e.target.value));
const note=document.getElementById('note'),saved=document.getElementById('saved');
note.value=localStorage.getItem('utility-pro-note')||'';
document.getElementById('save-note').addEventListener('click',()=>{localStorage.setItem('utility-pro-note',note.value);saved.textContent='یادداشت روی همین دستگاه ذخیره شد.';});
if('serviceWorker' in navigator && location.protocol.startsWith('http'))navigator.serviceWorker.register('./sw.js').catch(()=>{});
