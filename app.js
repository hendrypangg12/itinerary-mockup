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
