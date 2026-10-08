const views=[...document.querySelectorAll('.view')];let current=0,guest='',pickedDay='',pickedTime='';
const names={Saturday:'Бямба',Sunday:'Ням'};
function go(n){views[current].classList.remove('active');current=n;views[current].classList.add('active');document.getElementById('progress').textContent=`0${n+1} — 04`;window.scrollTo({top:0,behavior:'smooth'});}
function safe(s){return s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
document.getElementById('begin').onclick=()=>go(1);
document.getElementById('nameNext').onclick=()=>{const i=document.getElementById('guestName');if(!i.value.trim()){i.focus();i.placeholder='Нэрээ бичээрэй 😊';return;}guest=i.value.trim();document.getElementById('greeting').innerHTML=`За, ${safe(guest)}<br><em>хэзээ уулзах вэ?</em>`;go(2);};
document.querySelectorAll('.back').forEach(b=>b.onclick=()=>go(current-1));
document.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-day]').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');pickedDay=b.dataset.day;});
document.querySelectorAll('[data-time]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-time]').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');pickedTime=b.dataset.time;});
document.getElementById('review').onclick=()=>{if(!pickedDay||!pickedTime){alert('Өдөр болон цагаа хоёуланг нь сонгоорой ✿');return;}document.getElementById('finalName').textContent=guest;document.getElementById('finalDay').textContent=names[pickedDay];document.getElementById('finalTime').textContent=pickedTime;go(3);};
document.getElementById('edit').onclick=()=>go(2);
document.getElementById('finish').onclick=()=>{document.getElementById('note').textContent='Болзооны сонголт бэлэн боллоо ♡ (Одоогоор сервер рүү илгээгдэхгүй.)';document.getElementById('finish').innerHTML='Бэлэн боллоо ✓';};