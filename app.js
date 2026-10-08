// Carousel dots + counter
document.querySelectorAll('.car').forEach(function(c){
  var t=c.querySelector('.track'),d=c.querySelectorAll('.dot'),n=c.querySelector('.cnt');
  t.addEventListener('scroll',function(){var i=Math.round(t.scrollLeft/t.clientWidth);
    d.forEach(function(x,j){x.classList.toggle('on',j==i)});n.textContent=(i+1)+'/'+d.length;});
});
// Filter chips "Kuliner Sekitar"
document.querySelectorAll('.kul').forEach(function(k){
  var chips=k.querySelectorAll('.fchip'),rows=k.querySelectorAll('.nb'),none=k.querySelector('.nores');
  chips.forEach(function(ch){ch.addEventListener('click',function(){
    var f=ch.getAttribute('data-f'),shown=0;
    chips.forEach(function(x){x.classList.toggle('on',x===ch)});
    rows.forEach(function(r){var ok=f==='all'||(' '+r.getAttribute('data-tags')+' ').indexOf(' '+f+' ')>=0;
      r.style.display=ok?'':'none';if(ok)shown++;});
    none.style.display=shown?'none':'block';
  });});
});
// Format ringkas: buka <details> otomatis bila link #anchor menunjuk ke isi yang tersembunyi
function openFor(h){if(!h||h.length<2)return;var t;try{t=document.querySelector(h)}catch(e){return}if(!t)return;
  var d=t.closest('details');if(d)d.open=true;var c=t.querySelector(':scope > details');if(c)c.open=true;}
window.addEventListener('hashchange',function(){openFor(location.hash)});openFor(location.hash);
document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(){openFor(a.getAttribute('href'))})});
