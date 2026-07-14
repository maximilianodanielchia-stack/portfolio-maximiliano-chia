const themeToggle=document.querySelector('.theme-toggle');
const themeIcon=themeToggle?.querySelector('.theme-icon');
const themeLabel=themeToggle?.querySelector('.theme-label');
const themeColorMeta=document.querySelector('meta[name="theme-color"]');

const applyTheme=(theme,save=false)=>{
 document.documentElement.dataset.theme=theme;
 const dark=theme==='dark';
 if(themeIcon) themeIcon.textContent=dark?'☀':'☾';
 if(themeLabel) themeLabel.textContent=dark?'Claro':'Oscuro';
 if(themeToggle){
   themeToggle.setAttribute('aria-label',dark?'Cambiar a modo claro':'Cambiar a modo oscuro');
   themeToggle.setAttribute('aria-pressed',String(dark));
 }
 if(themeColorMeta) themeColorMeta.setAttribute('content',dark?'#08111f':'#071221');
 if(save){
   try{localStorage.setItem('portfolio-theme',theme)}catch(error){}
 }
};

applyTheme(document.documentElement.dataset.theme||'light');

themeToggle?.addEventListener('click',()=>{
 const nextTheme=document.documentElement.dataset.theme==='dark'?'light':'dark';
 applyTheme(nextTheme,true);
});

const systemTheme=window.matchMedia('(prefers-color-scheme: dark)');
systemTheme.addEventListener?.('change',event=>{
 try{
   if(!localStorage.getItem('portfolio-theme')){
     applyTheme(event.matches?'dark':'light');
   }
 }catch(error){}
});

const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const projects={
 pristine:{title:'Pristine Luxury Camps',hero:'assets/img/pristine-v2.webp',desc:'Experiencia vinculada con hotelería premium y turismo. Desarrollo de comunicación visual, moderación de redes y respuestas para consultas sobre destinos, alojamientos y experiencias.',gallery:['assets/img/pristine_web1.webp','assets/img/pristine_web2.webp','assets/img/pristine_web3.webp'],layout:'stacked',tags:['Hotelería','Community Management','Moderación','Atención al cliente'],videos:[{id:'sIeMTL31240',title:'Video 1'},{id:'3RlLkznVKjA',title:'Video 2'},{id:'J01pXIVPnMQ',title:'Video 3'}]},
 posada:{title:'Posada Puerto Bemberg',hero:'assets/img/posada.webp',desc:'Contenido y comunicación para una propuesta hotelera situada en Misiones, con foco en naturaleza, experiencia, patrimonio y posicionamiento visual del destino.',gallery:[],tags:['Turismo','Hospitalidad','Contenido visual'],videos:[{id:'43joZtI0Dy8',title:'Video 1'},{id:'qDix97CDZak',title:'Video 2'},{id:'n1VdZZLolmw',title:'Video 3'}]},
 emigrando:{title:'E-Migrando',hero:'assets/img/emigrando.webp',desc:'Participación en el lanzamiento y crecimiento inicial de una aplicación orientada a migrantes. Estrategia digital, piezas de comunicación y contenidos de presentación del producto.',gallery:['assets/img/emigrando4.webp','assets/img/emigrando5.webp','assets/img/emigrando6.webp','assets/img/emigrando1.webp','assets/img/emigrando2.webp','assets/img/emigrando3.webp'],layout:'stacked',tags:['Lanzamiento','Growth','Contenido','Producto digital']},
 folder:{title:'Folder IT',hero:'assets/img/folder.webp',desc:'Trabajo de community management, comunicación y publicidad para una empresa de desarrollo de software, traduciendo servicios técnicos a mensajes claros para redes.',gallery:[],tags:['Tecnología','Community Management','Publicidad'],presentation:'https://docs.google.com/presentation/d/e/2PACX-1vQ6xBtOMoYt0KiD5thIm5m1aUYcquSWsiYYrKKNNWI91GrnFNZcDKXksDOR2qOJxg/pubembed?start=false&loop=false&delayms=3000'},
 efe:{title:'Agencia EFE',hero:'assets/img/efe.webp',desc:'Producción y adaptación de contenidos para cuentas de distintos rubros dentro de un entorno de agencia. Aplicación de criterios visuales y tono de comunicación según cada marca.',gallery:['assets/img/efe2.webp','assets/img/efe3.webp','assets/img/efe4.webp','assets/img/efe5.webp','assets/img/efe6.webp','assets/img/efe7.webp','assets/img/efe8.webp'],tags:['Agencia','Multimarca','Diseño de contenido']},
 luhod:{title:'Luhod LLC',hero:'assets/img/luhod.webp',desc:'Comunicación de servicios empresariales orientados a emprendedores y freelancers. Desarrollo de piezas informativas y contenidos educativos para redes sociales.',gallery:['assets/img/luhod2.webp','assets/img/luhod3.webp','assets/img/luhod4.webp'],layout:'stacked',tags:['Servicios','Contenido educativo','Redes sociales']}
};
const modal=document.getElementById('project-modal');
const content=document.getElementById('modal-content');
document.querySelectorAll('[data-project]').forEach(card=>card.addEventListener('click',()=>{
 const p=projects[card.dataset.project];
 const presentationBlock=p.presentation?`<div class="presentation-block"><button class="presentation-btn" type="button">Ver presentación completa</button><p class="presentation-note">La presentación se carga únicamente cuando la abrís.</p><div class="presentation-shell" hidden></div></div>`:'';
 const videoBlock=p.videos?.length?`<section class="video-showcase"><div class="video-section-head"><div><span>CONTENIDO AUDIOVISUAL</span><h3>Videos verticales</h3></div><p>Seleccioná una pieza para reproducirla.</p></div><div class="video-strip">${p.videos.map((v,i)=>`<article class="video-item"><button class="video-poster" type="button" data-video-id="${v.id}" aria-label="Reproducir ${v.title} de ${p.title}"><img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="Vista previa de ${v.title} de ${p.title}" loading="lazy"><span class="video-shade"></span><span class="video-play" aria-hidden="true">▶</span><span class="video-label">${v.title}</span></button></article>`).join('')}</div></section>`:'';
 const galleryBlock=p.gallery?.length?`<div class="modal-gallery${p.layout==='stacked'?' stacked':''}">${p.gallery.map((g,i)=>`<img src="${g}" alt="Muestra ${i+1} de ${p.title}" loading="lazy">`).join('')}</div>`:'';
 content.innerHTML=`<img class="modal-hero" src="${p.hero}" alt="${p.title}"><div class="modal-body"><h2>${p.title}</h2><p>${p.desc}</p><ul class="tag-list">${p.tags.map(t=>`<li>${t}</li>`).join('')}</ul>${galleryBlock}${presentationBlock}${videoBlock}</div>`;
 modal.showModal();
 const presentationBtn=content.querySelector('.presentation-btn');
 presentationBtn?.addEventListener('click',()=>{
   const shell=content.querySelector('.presentation-shell');
   if(!shell) return;
   if(!shell.querySelector('iframe')){
     shell.innerHTML=`<iframe src="${p.presentation}" title="Presentación completa de ${p.title}" loading="lazy" allowfullscreen="true"></iframe>`;
   }
   shell.hidden=false;
   presentationBtn.textContent='Presentación abierta';
   presentationBtn.disabled=true;
   shell.scrollIntoView({behavior:'smooth',block:'start'});
 });
 content.querySelectorAll('.video-poster').forEach(button=>button.addEventListener('click',()=>{
   const videoId=button.dataset.videoId;
   const player=document.createElement('div');
   player.className='video-player';
   player.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1" title="Video de ${p.title}" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`;
   button.replaceWith(player);
 }));
}));
const closeProjectModal=()=>{
 content.querySelectorAll('iframe').forEach(iframe=>iframe.src='about:blank');
 modal.close();
};
document.querySelector('.modal-close').addEventListener('click',closeProjectModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeProjectModal()});
