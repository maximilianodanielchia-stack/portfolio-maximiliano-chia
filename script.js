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
const setMenuOpen=open=>{
 if(!nav||!menuBtn) return;
 nav.classList.toggle('open',open);
 menuBtn.setAttribute('aria-expanded',String(open));
 menuBtn.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
};
menuBtn?.addEventListener('click',()=>setMenuOpen(!nav?.classList.contains('open')));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenuOpen(false)));
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&nav?.classList.contains('open')){
   setMenuOpen(false);
   menuBtn?.focus();
 }
});
window.matchMedia('(min-width: 921px)').addEventListener?.('change',event=>{
 if(event.matches) setMenuOpen(false);
});
document.getElementById('year').textContent=new Date().getFullYear();

// Reuse local posters; third-party players only load after an explicit click.
document.querySelectorAll('.media-launch').forEach(button=>{
 button.addEventListener('click',()=>{
   const videoId=button.dataset.videoId;
   const frame=document.createElement('iframe');
   frame.title=button.dataset.mediaTitle;
   frame.src=videoId
     ?`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`
     :button.dataset.presentationSrc;
   frame.allow='autoplay; encrypted-media; picture-in-picture; web-share';
   frame.allowFullscreen=true;
   frame.referrerPolicy='strict-origin-when-cross-origin';
   frame.tabIndex=0;
   button.closest('.media-slot').classList.add('is-playing');
   button.replaceWith(frame);
   frame.focus({preventScroll:true});
 },{once:true});
 button.disabled=false;
});

const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const revealElements=()=>{
 document.querySelectorAll('.reveal-pending').forEach(el=>el.classList.remove('reveal-pending'));
};
if('IntersectionObserver' in window&&!reducedMotion.matches){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting){
     entry.target.classList.remove('reveal-pending');
     observer.unobserve(entry.target);
   }
 }),{threshold:.12});
 document.querySelectorAll('.reveal').forEach(el=>{
   el.classList.add('reveal-pending');
   observer.observe(el);
 });
 reducedMotion.addEventListener?.('change',event=>{
   if(event.matches){observer.disconnect();revealElements()}
 });
}
