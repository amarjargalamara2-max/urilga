const pages=[...document.querySelectorAll('.page')];
const bar=document.getElementById('progressBar');let chosenDay=null,chosenActivity=null;
function go(n){pages.forEach(p=>p.classList.remove('active'));document.getElementById('page'+n).classList.add('active');bar.style.width=(n/5*100)+'%';if(n===5)leaves();}
document.querySelectorAll('[data-next]').forEach(b=>b.onclick=()=>go(+b.dataset.next));

let tries=0;const no=document.getElementById('no'),note=document.getElementById('noNote');
const texts=['Жаахан бод доо 😌','Дахиад нэг оролдъё?','Энэ чинь хөөрхөн санаа шүү 👀','Сүүлчийн боломж ♡'];
no.onclick=()=>{if(tries>=4)return;tries++;note.textContent=texts[tries-1];let x=(Math.random()>.5?1:-1)*(15+Math.random()*55),y=(Math.random()>.5?1:-1)*(6+Math.random()*25);no.animate([{transform:'none'},{transform:`translate(${x}px,${y}px) rotate(6deg)`},{transform:`translate(${x*.5}px,${y*.4}px)`}],{duration:480});if(tries===4)setTimeout(()=>{no.textContent='Үгүй 🔒';no.disabled=true},450)};
document.getElementById('yes').onclick=()=>{burst('♡');setTimeout(()=>go(3),300)};

document.querySelectorAll('.dates button[data-day]').forEach(b=>b.onclick=()=>{document.querySelectorAll('.dates button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');chosenDay=b.dataset.day;document.getElementById('dayValue').textContent=chosenDay+' · '+b.textContent;document.getElementById('dayNext').disabled=false});
document.getElementById('dayNext').onclick=()=>go(4);

document.querySelectorAll('.activity').forEach(b=>b.onclick=()=>{document.querySelectorAll('.activity').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');chosenActivity={time:b.dataset.time,title:b.dataset.title};document.getElementById('activityValue').textContent=chosenActivity.title+' · '+chosenActivity.time;document.getElementById('finish').disabled=false});
document.getElementById('finish').onclick=()=>{document.getElementById('finalDay').textContent=chosenDay;document.getElementById('finalTime').textContent=chosenActivity.time;document.getElementById('finalActivity').textContent=chosenActivity.title;burst('✦');go(5)};

function burst(s){for(let i=0;i<16;i++){let e=document.createElement('span');e.textContent=s;Object.assign(e.style,{position:'fixed',zIndex:99,left:Math.random()*100+'%',top:55+Math.random()*15+'%',color:'#ffe7a6',fontSize:12+Math.random()*22+'px'});document.body.appendChild(e);e.animate([{transform:'scale(.3)',opacity:0},{transform:'translateY(-70px) scale(1.2)',opacity:1},{transform:'translateY(-250px) rotate(160deg)',opacity:0}],{duration:1400+Math.random()*700});setTimeout(()=>e.remove(),2200)}}
function leaves(){let box=document.getElementById('leaves');box.innerHTML='';for(let i=0;i<18;i++){let e=document.createElement('span');e.textContent=Math.random()>.35?'🍂':'✦';Object.assign(e.style,{position:'absolute',left:Math.random()*100+'%',top:'-30px',fontSize:12+Math.random()*15+'px',animation:`leafFall ${4+Math.random()*4}s linear ${Math.random()*3}s infinite`});box.appendChild(e)}}
const st=document.createElement('style');st.textContent='@keyframes leafFall{to{transform:translate(70px,105vh) rotate(320deg);opacity:0}}';document.head.appendChild(st);
