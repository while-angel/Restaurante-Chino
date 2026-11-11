(function(){
var $=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
/* pestañas del menú */
var tabs=$('.tab'),panels=$('.panel');
tabs.forEach(function(t,i){t.addEventListener('click',function(){tabs.forEach(function(x,j){x.setAttribute('aria-selected',i===j);panels[j].classList.toggle('on',i===j);panels[j].hidden=i!==j})})});
/* contadores */
var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var el=e.target,end=+el.dataset.n,t0=performance.now();(function f(t){var p=Math.min((t-t0)/1400,1);el.textContent=Math.round(end*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)})}):null;
$('[data-n]').forEach(function(el){io?io.observe(el):el.textContent=el.dataset.n});
/* galería */
var lb=$('.lb')[0];
$('.g').forEach(function(g){g.addEventListener('click',function(){lb.querySelector('.big').style.background=g.style.getPropertyValue('--c');lb.querySelector('.big').textContent=g.querySelector('span').textContent;lb.querySelector('p').textContent=g.querySelector('em').textContent;lb.classList.add('on')})});
if(lb){lb.addEventListener('click',function(){lb.classList.remove('on')});document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')})}
/* reservaciones */
var f=document.getElementById('rsv');
if(f){var d=f.fecha;d.min=new Date().toISOString().slice(0,10);
f.addEventListener('submit',function(e){e.preventDefault();var er=document.getElementById('err'),tk=document.getElementById('ticket');
if(!f.nombre.value.trim()||!f.tel.value.trim()||!f.fecha.value){er.textContent='Completa nombre, teléfono y fecha.';tk.classList.remove('on');return}
er.textContent='';var fe=new Date(f.fecha.value+'T12:00').toLocaleDateString('es',{weekday:'long',day:'numeric',month:'long'});
tk.innerHTML='<h3>¡Reserva lista, '+f.nombre.value.replace(/</g,'&lt;')+'!</h3><p>'+f.personas.value+' · '+fe+' · '+f.hora.value+'</p><p>Te llamaremos al '+f.tel.value.replace(/</g,'&lt;')+' para confirmar.</p>';
tk.classList.add('on');tk.scrollIntoView({behavior:'smooth',block:'center'})})}
})();
