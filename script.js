const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const projects={
 pristine:{title:'Pristine Luxury Camps',hero:'assets/img/pristine.webp',desc:'Experiencia vinculada con hotelería premium y turismo. Desarrollo de comunicación visual, moderación de redes y respuestas para consultas sobre destinos, alojamientos y experiencias.',gallery:['assets/img/pristine_web1.webp','assets/img/pristine_web2.webp','assets/img/pristine_web3.webp'],layout:'stacked',tags:['Hotelería','Community Management','Moderación','Atención al cliente']},
 posada:{title:'Posada Puerto Bemberg',hero:'assets/img/posada.webp',desc:'Contenido y comunicación para una propuesta hotelera situada en Misiones, con foco en naturaleza, experiencia, patrimonio y posicionamiento visual del destino.',gallery:['assets/img/posada.webp'],tags:['Turismo','Hospitalidad','Contenido visual']},
 emigrando:{title:'E-Migrando',hero:'assets/img/emigrando.webp',desc:'Participación en el lanzamiento y crecimiento inicial de una aplicación orientada a migrantes. Estrategia digital, piezas de comunicación y contenidos de presentación del producto.',gallery:['assets/img/emigrando4.webp','assets/img/emigrando5.webp','assets/img/emigrando6.webp','assets/img/emigrando1.webp','assets/img/emigrando2.webp','assets/img/emigrando3.webp'],layout:'stacked',tags:['Lanzamiento','Growth','Contenido','Producto digital']},
 folder:{title:'Folder IT',hero:'assets/img/folder.webp',desc:'Trabajo de community management, comunicación y publicidad para una empresa de desarrollo de software, traduciendo servicios técnicos a mensajes claros para redes.',gallery:['assets/img/folder.webp'],tags:['Tecnología','Community Management','Publicidad']},
 efe:{title:'Agencia EFE',hero:'assets/img/efe.webp',desc:'Producción y adaptación de contenidos para cuentas de distintos rubros dentro de un entorno de agencia. Aplicación de criterios visuales y tono de comunicación según cada marca.',gallery:['assets/img/efe.webp','assets/img/efe2.webp','assets/img/efe3.webp','assets/img/efe4.webp','assets/img/efe5.webp','assets/img/efe6.webp','assets/img/efe7.webp','assets/img/efe8.webp'],tags:['Agencia','Multimarca','Diseño de contenido']},
 luhod:{title:'Luhod LLC',hero:'assets/img/luhod.webp',desc:'Comunicación de servicios empresariales orientados a emprendedores y freelancers. Desarrollo de piezas informativas y contenidos educativos para redes sociales.',gallery:['assets/img/luhod2.webp','assets/img/luhod3.webp','assets/img/luhod4.webp'],layout:'stacked',tags:['Servicios','Contenido educativo','Redes sociales']}
};
const modal=document.getElementById('project-modal');
const content=document.getElementById('modal-content');
document.querySelectorAll('[data-project]').forEach(card=>card.addEventListener('click',()=>{
 const p=projects[card.dataset.project];
 content.innerHTML=`<img class="modal-hero" src="${p.hero}" alt="${p.title}"><div class="modal-body"><h2>${p.title}</h2><p>${p.desc}</p><ul class="tag-list">${p.tags.map(t=>`<li>${t}</li>`).join('')}</ul><div class="modal-gallery${p.layout==='stacked'?' stacked':''}">${p.gallery.map((g,i)=>`<img src="${g}" alt="Muestra ${i+1} de ${p.title}" loading="lazy">`).join('')}</div></div>`;
 modal.showModal();
}));
document.querySelector('.modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
