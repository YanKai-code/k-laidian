const projects = [
 {id:'mozilla',title:'Mozilla · 让开放被看见',category:'品牌视觉',categories:['品牌视觉','数字网页','营销传播'],type:'品牌全案',owner:'reference',creator:'Johnson Banks',year:'2017',tag:'BRAND IDENTITY / CASE STUDY',art:'mozilla',summary:'以开放的互联网精神为线索，研究一个技术品牌如何用清晰的视觉语言，表达它的立场。',scope:'品牌识别 / 视觉语言 / 跨媒介延展',note:'第三方公开案例研究 · 非本站商业项目'},
 {id:'mountain',title:'山间一日 · 茶品牌视觉',category:'包装设计',categories:['品牌视觉','包装设计','营销传播'],type:'品牌全案',owner:'studio',creator:'来点设计工作室',year:'2026',tag:'BRAND & PACKAGING',art:'tea',summary:'从山野的平静中提炼品牌语言，让一杯茶的温度，延续到每一次相遇。',scope:'品牌概念 / 视觉识别 / 包装系统',note:'概念占位 · 非真实商业案例'},
 {id:'still',title:'STILL · 留一点空白',category:'数字网页',categories:['数字网页','品牌视觉'],type:'专项设计',owner:'kai',creator:'Kai',year:'2026',tag:'DIGITAL EXPERIENCE',art:'digital',summary:'为安静留一个位置。用柔和的层次、轻盈的交互与清晰的信息，探索有呼吸感的数字体验。',scope:'体验概念 / 网站设计 / 界面语言',note:'概念占位 · 非真实商业案例'},
 {id:'between',title:'字里行间 · 艺术书展',category:'平面出版',categories:['平面出版','营销传播','空间导视'],type:'专项设计',owner:'kai',creator:'Kai',year:'2026',tag:'EDITORIAL & CAMPAIGN',art:'poster',summary:'让文字成为图像，让阅读成为探索。在秩序与意外之间，找到一场书展的视觉节奏。',scope:'主视觉 / 海报 / 场刊与票券',note:'概念占位 · 非真实商业案例'},
 {id:'room',title:'栖所 · 空间视觉系统',category:'空间导视',categories:['空间导视','品牌视觉'],type:'品牌全案',owner:'studio',creator:'来点设计工作室',year:'2026',tag:'SPATIAL IDENTITY',art:'photo',image:'architecture',label:'A place\nto pause.',summary:'以自然材质与克制的标识，让空间中的每一次停留，都成为品牌体验的一部分。',scope:'空间视觉 / 导视系统 / 线下物料',note:'概念占位 · 非真实商业案例'},
 {id:'inmotion',title:'In Motion · 形态之间',category:'动态影像',categories:['动态影像','插画三维'],type:'专项设计',owner:'kai',creator:'Kai',year:'2026',tag:'MOTION EXPLORATION',art:'motion',duration:'00:04',summary:'在连续变化中寻找秩序。以抽象的形态与节奏，探索品牌在时间中的另一种表达。',scope:'动态概念 / 图形实验 / 影像延展',note:'概念占位 · 原创动态演示'},
 {id:'field',title:'原野 FIELD · 自然的日常',category:'品牌视觉',categories:['品牌视觉','包装设计','插画三维'],type:'品牌全案',owner:'studio',creator:'来点设计工作室',year:'2026',tag:'LIFESTYLE BRANDING',art:'photo',image:'nature',label:'FIELD\nClose to nature.',summary:'以原野为灵感，把自然的色彩与节奏带回日常，让品牌成为一种生活态度。',scope:'品牌概念 / 视觉系统 / 插画延展',note:'概念占位 · 非真实商业案例'},
 {id:'blue',title:'蓝色时刻 · 摄影集',category:'平面出版',categories:['平面出版'],type:'专项设计',owner:'kai',creator:'Kai',year:'2026',tag:'BOOK & EDITORIAL',art:'book',summary:'为日常中转瞬即逝的蓝色时刻，设计一本值得慢慢翻阅的书。',scope:'编辑设计 / 书籍装帧 / 印刷探索',note:'概念占位 · 非真实商业案例'},
 {id:'good',title:'GOOD THINGS · 好事发生',category:'营销传播',categories:['营销传播','包装设计','品牌视觉'],type:'品牌全案',owner:'studio',creator:'来点设计工作室',year:'2026',tag:'VISUAL CAMPAIGN',art:'orange',summary:'用乐观的字形、明亮的色彩与直接的表达，创造一个会让人会心一笑的日常品牌。',scope:'品牌识别 / 产品包装 / 营销物料',note:'概念占位 · 非真实商业案例'}
];
const images = {interior:'assets/interior.svg',nature:'assets/nature.svg',architecture:'assets/architecture.svg',light:'assets/light.svg'};
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function art(p, detail = false) {
 let inner = '';
 if (p.art === 'mozilla') inner = '<div class="graphic mozilla-art"><span class="mozilla-top">THE INTERNET IS FOR EVERYONE.</span><strong>moz://a</strong><span class="mozilla-bottom">OPEN BY DESIGN. <i>↗</i></span></div>';
 if (p.art === 'tea') inner = '<div class="graphic matcha"><div class="tea-box"><strong>mountain<br>& a day.</strong><em>山间一日</em><small>TEA FROM THE MOUNTAINS</small></div><span class="tea-mark">一 日 一 茶</span></div>';
 if (p.art === 'poster') inner = '<div class="graphic poster"><div class="poster-inner"><small>INDEPENDENT ART BOOK FAIR 2026</small><strong>READ<br>BETWEEN<br>THE<br>LINES.</strong><span class="poster-line"></span><small>字 里 行 间 / 艺 术 书 展</small></div></div>';
 if (p.art === 'digital') inner = '<div class="graphic digital"><div class="screen"><div class="screen-nav"><b>still.</b><span>SPACE FOR YOURSELF ↗</span></div><strong>A little space.<br>A little stillness.</strong><div class="orb"></div></div></div>';
 if (p.art === 'motion') inner = '<div class="graphic motion"><div class="sphere"></div><span class="motion-label">in motion.</span></div>';
 if (p.art === 'type') inner = '<div class="graphic type-cover"><strong>TYPE<br>IS A<br>FEELING.</strong><small>EXPERIMENTS IN LETTERS — 026</small></div>';
 if (p.art === 'book') inner = '<div class="graphic book-cover"><div class="book"><small>A COLLECTION OF THE EVERYDAY</small><strong>The<br>blue<br>hour.</strong><small>蓝 色 时 刻 / VOL. 01</small></div></div>';
 if (p.art === 'orange') inner = '<div class="graphic orange-cover"><strong>GOOD<br>THINGS<br>AHEAD.</strong><small>好 事 正 在 发 生</small><span class="circle-logo"></span></div>';
 if (p.art === 'archive') inner = '<div class="graphic digital" style="background:#c9cbbd"><div class="screen" style="background:#eeece2"><div class="screen-nav"><b>ARCHIVE / 01</b><span>ART IN CONTEXT</span></div><strong style="font-size:31px">An ongoing<br>collection.</strong><div class="orb" style="border-radius:0;background:linear-gradient(40deg,#b64023,#ce925e,#3e4639)"></div></div></div>';
 if (p.art === 'photo') inner = `<img src="${images[p.image]}" alt="${escapeHTML(p.title)}的空间与视觉灵感" ${detail?'':'loading="lazy"'}><span class="photo-label">${escapeHTML(p.label).replace(/\n/g,'<br>')}</span>`;
 return `<div class="cover ${p.art === 'photo'?'photo-shade':''}">${inner}<span class="project-tag">${p.tag}</span>${p.duration?`<span class="play" aria-hidden="true">▶</span><span class="duration">${p.duration}</span>`:''}</div>`;
}const page = document.body.dataset.page;
const state = {owner:'全部',type:'全部',category:'全部'};
function projectCard(p) {
 return `<a class="project-card" href="${page==='home'?'#project-'+p.id:'case.html?id='+p.id}" ${page==='home'?'data-case-id="'+p.id+'"':''} aria-label="查看${p.title}">${art(p)}<div class="card-head"><h3>${p.title}</h3><span>↗</span></div><div class="card-meta"><span>${p.owner==='reference'?'第三方参考 / '+p.creator:p.creator+' / '+p.type}</span><span>${p.category}</span></div><span class="card-note">${p.note}</span></a>`;
}
function renderProjects() {
 const grid=document.querySelector('#project-grid'); if(!grid)return;
 const source=projects;
 const visible=source.filter(p=>(state.owner==='全部'||p.owner===state.owner)&&(state.type==='全部'||p.type===state.type)&&(state.category==='全部'||p.categories.includes(state.category)));
 grid.innerHTML=visible.map(projectCard).join('');
 const count=document.querySelector('#result-count');if(count)count.textContent=`${String(visible.length).padStart(2,'0')} 个项目 / PROJECTS`;
 const empty=document.querySelector('#empty-state');if(empty)empty.hidden=visible.length>0;
}
function resetFilters(){Object.assign(state,{owner:'全部',type:'全部',category:'全部'});document.querySelectorAll('[data-owner],[data-type],[data-category]').forEach(b=>{const active=Object.values(b.dataset).includes('全部');b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});renderProjects();}
document.querySelectorAll('[data-owner],[data-type],[data-category]').forEach(button=>button.addEventListener('click',()=>{
 const key=['owner','type','category'].find(k=>k in button.dataset);state[key]=button.dataset[key];
 document.querySelectorAll(`[data-${key}]`).forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});renderProjects();
}));
document.querySelectorAll('#reset-filters,[data-reset]').forEach(b=>b.addEventListener('click',resetFilters));
const track=document.querySelector('#reel-track');
if(track){
 const items=[projects[1],projects[4],projects[3],projects[2],projects[5],projects[6]];
 const set=items.map(p=>`<a class="reel-item" href="${page==='home'?'#project-'+p.id:'case.html?id='+p.id}" ${page==='home'?'data-case-id="'+p.id+'"':''} aria-label="查看${p.title}">${art(p)}<span>${p.title}<i>↗</i></span></a>`).join('');
 track.innerHTML=`<div class="reel-group">${set}</div><div class="reel-group" aria-hidden="true">${set.replaceAll('class="reel-item"','class="reel-item" tabindex="-1"')}</div>`;
 const toggle=document.querySelector('.reel-toggle');toggle.addEventListener('click',()=>{const paused=track.classList.toggle('paused');toggle.setAttribute('aria-pressed',String(paused));toggle.setAttribute('aria-label',paused?'继续作品滚动':'暂停作品滚动');toggle.innerHTML=paused?'继续 <span>▶</span>':'暂停 <span>Ⅱ</span>';});
}
function casePage(selectedId, container, embedded=false){
 const id=selectedId||new URLSearchParams(location.search).get('id')||'mozilla';
 const p=projects.find(p=>p.id===id);
 const root=container||document.querySelector('#case-content');
 if(!p){root.innerHTML='<section class="missing-case section-wrap"><span class="eyebrow">PROJECT NOT FOUND</span><h1>这个作品暂未收录。</h1><a class="pill-button" href="work.html">返回作品集 ↗</a></section>';document.title='作品未找到 — K—LAIDIAN';return;}
 const ref=p.owner==='reference';const next=projects[(projects.indexOf(p)+1)%projects.length];
 if(!embedded)document.title=p.title+' — K—LAIDIAN';
 root.innerHTML=`<section class="case-heading section-wrap"><a class="case-back" href="work.html">← 全部作品</a><div class="case-title"><div><span class="eyebrow">${p.tag}</span><h1>${p.title.split(' · ')[0]}<br><span class="serif">${p.title.split(' · ')[1]||'设计探索'}</span></h1></div><p>${p.summary}</p></div><div class="case-info"><div><span>项目归属 / AUTHOR</span><strong>${ref?'Johnson Banks（原设计）':p.creator}</strong></div><div><span>项目类型 / TYPE</span><strong>${p.type}${ref?' · 公开案例研究':''}</strong></div><div><span>设计类别 / DISCIPLINE</span><strong>${p.categories.join(' / ')}</strong></div><div><span>年份 / YEAR</span><strong>${p.year}</strong></div></div><aside class="case-notice">${ref?'第三方案例参考：Mozilla 品牌识别由 Johnson Banks 设计。本页为学习性解读，非 Kai 或来点设计工作室作品；视觉展示为本站制作的概念示意，不是原项目交付物。':p.note+'。本页面用于验证未来真实案例的展示结构，服务范围、场景及视觉均为演示。'}</aside></section><section class="case-cover">${art(p,true)}</section><section class="case-story section-wrap"><span class="eyebrow">01 / THE IDEA</span><div><h2>${ref?'开放，不只是一个态度。':'从一个清晰的想法开始。'}</h2><p>${ref?'Mozilla 的品牌识别将网络地址中熟悉的「://」融入名称，让互联网的语言成为品牌识别的一部分。本页以这一公开设计为切入点，研究品牌如何把理念转化为可以被看见的符号。':p.summary}</p><p>${ref?'我们关注的不是单一标志，而是一个核心想法如何串联文字、色彩、版式和不同的传播场景。以下是为本站案例页设计的视觉推演，不代表原项目的全部设计规范。':'先建立核心概念，再让字体、色彩、图形与材质形成统一语言。本案例页以概念内容演示完整的呈现流程，后续可替换为真实项目背景、设计过程和成果。'}</p></div></section><section class="case-visual-grid section-wrap">${ref?'<div class="identity-block"><span class="eyebrow">IDENTITY EXPLORATION / 视觉示意</span><strong>moz://a</strong><span>OPEN. CONNECTED. HUMAN.</span></div><div class="type-study"><span class="eyebrow">A LANGUAGE OF OPENNESS</span><strong>Open<br>to what’s<br>next<span>↗</span></strong><span>字体、语言与开放的想法。</span></div>':`<div class="case-art-tile">${art(p,true)}</div><div class="concept-quote"><span class="eyebrow">VISUAL DIRECTION / 概念视觉</span><h2>${p.summary.split('。')[0]}<span>。</span></h2><span>${p.scope}</span></div>`}</section><section class="case-story section-wrap"><span class="eyebrow">02 / THE SYSTEM</span><div><h2>让表达，成为一个系统。</h2><p>${ref?'以品牌名称中的协议符号为视觉锚点，在不同背景和尺度下探索识别的一致性。让主张保持清楚，让表达保持开放。下面的配色和版式为页面演示，不作为 Mozilla 官方规范。':'把一个想法延展到不同触点，在保持识别一致性的同时，为每一种媒介保留合适的表达空间。'}</p><div class="case-service-tags">${p.scope.split(' / ').map(s=>`<span>${s}</span>`).join('')}</div></div></section><section class="case-palette section-wrap"><div style="--swatch:#151922;--label:#fff"><span>01 / INK</span><strong>清晰的立场。</strong><span>#151922</span></div><div style="--swatch:${ref?'#94baff':'#b7c3d5'};--label:#151922"><span>02 / ENERGY</span><strong>开放的想法 ↗</strong><span>${ref?'#94BAFF':'#B7C3D5'}</span></div><div style="--swatch:#f1f0eb;--label:#151922"><span>03 / SPACE</span><strong>给表达留白。</strong><span>#F1F0EB</span></div></section><section class="case-story section-wrap"><span class="eyebrow">03 / IN THE WORLD</span><div><h2>从一个符号，到每一个触点。</h2><p>${ref?'以网站、海报与线下物料作为版式应用场景，示范案例页如何组合展示数字与实体设计。所有场景由本站重新构建，未使用原设计机构的项目图片。':'从屏幕上的一眼，到日常中的一次触碰。让不同形式的设计自然衔接，构成完整的品牌体验。'}</p></div></section><section class="application-stage section-wrap">${ref?'<div class="browser-mock"><div class="browser-bar"><i></i><i></i><i></i><span>品牌网站应用 / 自制示意</span></div><div class="browser-content"><span class="mini-moz">moz://a</span><span class="browser-caption">OPEN INTERNET. OPEN POSSIBILITIES.</span><h2>The internet.<br>For everyone.</h2><span class="browser-button">Explore what’s next ↗</span><div class="browser-orbit"></div></div></div><div class="poster-mock"><span>线下海报应用 / 自制示意</span><strong>More<br>open.<br>More<br>possible.</strong><span class="mini-moz">moz://a</span></div>':`<div class="application-image"><img src="assets/${p.image||'interior'}.svg" alt="${p.title}概念应用插画" loading="lazy"><span>应用场景 / 本站概念插画</span></div><div class="application-secondary">${art(p,true)}</div>`}</section>${p.duration?'<section class="case-film section-wrap"><span class="eyebrow">MOTION / 原创抽象动态演示</span><h2>让设计，流动起来。</h2><video controls playsinline preload="metadata" poster="assets/nature.svg" aria-label="四秒抽象动态演示"><source src="assets/motion.mp4" type="video/mp4">你的浏览器不支持视频。</video><p id="video-status" role="status">本站制作的 4 秒动态示例，用于展示视频播放功能。</p></section>':''}<section class="case-credits section-wrap"><span class="eyebrow">CREDITS / 项目说明</span><div><h3>${ref?'尊重创作，标明来源。':'每一份创意，都有它的来处。'}</h3><p>${ref?'原项目品牌：Mozilla<br>原设计机构：Johnson Banks<br>公开发布年份：2017<br>本站角色：案例内容结构、学习性解读与自制视觉示意<br>该案例不代表与 Mozilla 或 Johnson Banks 存在合作关系。':'项目状态：概念占位<br>展示归属：'+p.creator+'（布局演示）<br>视觉素材：本站生成的图形、插画或动态示例<br>正式发布个人及工作室作品前，将以真实项目资料替换。'}</p>${ref?'<a class="text-link" href="https://www.johnsonbanks.co.uk/work/mozilla" target="_blank" rel="noopener noreferrer">原设计机构案例入口 <span>↗</span></a><a class="source-secondary" href="https://blog.mozilla.org/opendesign/" target="_blank" rel="noopener noreferrer">Mozilla Open Design 官方博客 ↗</a><p class="source-note">外部来源入口尚未经当前环境联网核验；本页不声称还原原案例完整内容。</p>':''}</div></section><section class="next-case section-wrap"><div><span class="eyebrow">NEXT EXPLORATION / 下一个作品</span><h2>${next.title}</h2><a class="pill-button" href="case.html?id=${next.id}">继续探索 ↗</a></div><a class="next-preview" href="case.html?id=${next.id}" aria-label="查看${next.title}">${art(next)}</a></section><section class="case-contact section-wrap"><span>一个好想法，值得一起实现。</span><a href="mailto:1151669929@qq.com">来点合作 ↗</a></section>`;
 if(embedded){root.querySelectorAll('h1').forEach(h=>{const heading=document.createElement('h2');heading.className='case-inline-heading';heading.innerHTML=h.innerHTML;h.replaceWith(heading);});root.querySelectorAll('a[href="work.html"]').forEach(a=>a.setAttribute('href','#selected'));}
 const video=root.querySelector('video');if(video)video.addEventListener('error',()=>{root.querySelector('#video-status').textContent='视频暂时无法加载，请刷新后重试。';});
}
if(page==='case')casePage();else renderProjects();
const menu=document.querySelector('.menu-toggle');
if(menu)menu.addEventListener('click',()=>{const open=document.querySelector('.site-header nav').classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'关闭导航':'打开导航');});
document.querySelectorAll('.site-header nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('.site-header nav').classList.remove('open');menu?.setAttribute('aria-expanded','false');}));
const dialog=document.querySelector('#wechat-dialog');
if(dialog){let returnFocus;document.querySelector('[data-wechat]').addEventListener('click',event=>{returnFocus=event.currentTarget;dialog.showModal();document.body.classList.add('dialog-open');});dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');returnFocus?.focus();});}
document.querySelectorAll('.current-year').forEach(e=>e.textContent=new Date().getFullYear());
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');revealObserver.unobserve(e.target);}}),{threshold:.08});
document.querySelectorAll('.section-intro,.services-grid article,.about-copy,.case-story').forEach(e=>{e.classList.add('reveal');revealObserver.observe(e);});

// A living constellation: local Canvas rendering, no video or external effects library.
function initConstellation() {
 const canvas=document.getElementById('starfield');if(!canvas)return;
 const ctx=canvas.getContext('2d',{alpha:false});if(!ctx)return;
 const hero=document.querySelector('.cosmic-hero');
 const button=document.getElementById('motion-toggle');
 const editorial=hero.querySelector('.hero-editorial');
 const media=matchMedia('(prefers-reduced-motion: reduce)');
 let width=0,height=0,dpr=1,points=[],sky=[],frame=0,time=0,last=0;
 let lastMotionPreference=media.matches;
 let paused=false,inView=true,mouse={x:0,y:0},target={x:0,y:0};
 let seed=4819;
 const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 function build(){
  const rect=hero.getBoundingClientRect();width=rect.width;height=rect.height;
  dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
  seed=4819;points=[];sky=[];
  const mobile=width<=760;const total=mobile?1050:2200;
  // Sample the front, back and side surfaces of three extruded strokes.
  const strokes=[[-.34,-.5,-.34,.5,.15],[-.28,.03,.35,-.5,.125],[-.25,-.03,.4,.5,.14]];
  for(let i=0;i<total;i++){
   const s=strokes[i%3],u=random(),vx=s[2]-s[0],vy=s[3]-s[1],len=Math.hypot(vx,vy);
   const face=i%5,side=face===0,offset=side?(random()>.5?1:-1)*s[4]/2:(random()-.5)*s[4];
   const z=side?(random()-.5)*.34:(face===1?-.17:.17)+(random()-.5)*.015;
   points.push({x:s[0]+vx*u-vy/len*offset,y:s[1]+vy*u+vx/len*offset,z,face,phase:random()*Math.PI*2,speed:.5+random()*1.2,size:.38+random()**3*1.8,alpha:.28+random()*.7,bright:random()>.974});
  }
  for(let i=0;i<(mobile?130:240);i++)sky.push({x:random()*width,y:random()*height,z:random(),phase:random()*6.28,size:.3+random()*1.0});
  draw();
 }
 function star(x,y,r,alpha,bright){
  ctx.globalAlpha=alpha;
  if(bright){
   ctx.fillStyle='#dceaff';ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
   ctx.globalAlpha=alpha*.5;ctx.strokeStyle='#a7cdff';ctx.lineWidth=.55;
   ctx.beginPath();ctx.moveTo(x-r*5,y);ctx.lineTo(x+r*5,y);ctx.moveTo(x,y-r*5);ctx.lineTo(x,y+r*5);ctx.stroke();
  }else{ctx.fillStyle='#b8d1f4';ctx.fillRect(x,y,Math.max(.6,r),Math.max(.6,r));}
 }
 function draw(){
  if(!width)return;
  const mobile=width<=760;
  const frozen=media.matches;
  const t=frozen?0:time;
  const breathing=1+Math.sin(t*.65)*.018;
  const scale=Math.min(mobile?width*.83:width*.37,height*(mobile?.47:.72))*breathing;
  const cx=width*(mobile?.54:.705),cy=height*(mobile?.30:.46);
  ctx.globalAlpha=1;ctx.fillStyle='#06080c';ctx.fillRect(0,0,width,height);
  // Multiple slow, offset nebula volumes keep the black alive without a flat gradient.
  for(let layer=0;layer<3;layer++){
   const drift=t*(.045+layer*.012),nx=width*(.44+layer*.15)+Math.sin(drift+layer*2)*width*.09;
   const ny=height*(.25+layer*.18)+Math.cos(drift*.8+layer)*height*.12;
   ctx.save();ctx.translate(nx,ny);ctx.rotate(-.5+Math.sin(drift)*.15);ctx.scale(1.7,.65);
   const radius=Math.max(width,height)*(.27+layer*.025);
   const cloud=ctx.createRadialGradient(0,0,0,0,0,radius);
   cloud.addColorStop(0,layer===1?'#314d7630':'#24365225');cloud.addColorStop(.42,'#192c471c');cloud.addColorStop(1,'#06080c00');
   ctx.fillStyle=cloud;ctx.fillRect(-radius,-radius,radius*2,radius*2);ctx.restore();
  }
  for(const s of sky){
   const twinkle=.22+.32*(.5+.5*Math.sin(t*.4+s.phase));
   const speed=.25+s.z*.8;
   const sx=s.x+mouse.x*speed*14+Math.sin(t*.055+s.phase)*speed*9;
   const sy=s.y+mouse.y*speed*10+Math.cos(t*.04+s.phase)*speed*7;
   star(sx,sy,s.size*(.65+s.z*.55),twinkle,false);
  }
  const yaw=-.38+Math.sin(t*.16)*.13+mouse.x*.2;
  const pitch=.13+Math.cos(t*.13)*.035+mouse.y*.12;
  const roll=-.055+Math.sin(t*.09)*.025;
  function project(x,y,z){
   const rx=x*Math.cos(yaw)+z*Math.sin(yaw),rz=z*Math.cos(yaw)-x*Math.sin(yaw);
   const ry=y*Math.cos(pitch)-rz*Math.sin(pitch),depth=y*Math.sin(pitch)+rz*Math.cos(pitch);
   const perspective=1.9/(1.9-depth);
   return {x:cx+(rx*Math.cos(roll)-ry*Math.sin(roll))*scale*perspective+mouse.x*10,y:cy+(rx*Math.sin(roll)+ry*Math.cos(roll))*scale*perspective+mouse.y*7,depth,perspective};
  }
  // Faint connecting edges reveal the physical extrusion, never an opaque solid letter.
  const strokes=[[-.34,-.5,-.34,.5,.15],[-.28,.03,.35,-.5,.125],[-.25,-.03,.4,.5,.14]];
  ctx.strokeStyle='#9fbfe9';ctx.lineWidth=.5;
  for(const s of strokes){
   const vx=s[2]-s[0],vy=s[3]-s[1],len=Math.hypot(vx,vy),ox=-vy/len*s[4]/2,oy=vx/len*s[4]/2;
   const corners=[[s[0]+ox,s[1]+oy],[s[2]+ox,s[3]+oy],[s[2]-ox,s[3]-oy],[s[0]-ox,s[1]-oy]];
   for(let i=0;i<4;i++){
    const front=project(...corners[i],.17),back=project(...corners[i],-.17),next=project(...corners[(i+1)%4],.17);
    ctx.globalAlpha=.095;ctx.beginPath();ctx.moveTo(front.x,front.y);ctx.lineTo(back.x,back.y);ctx.stroke();
    ctx.globalAlpha=.045;ctx.beginPath();ctx.moveTo(front.x,front.y);ctx.lineTo(next.x,next.y);ctx.stroke();
   }
  }
  const entrance=media.matches?1:Math.min(1,.6+time/3);
  const projected=points.map(p=>{
   const ripple=Math.sin(p.y*11-t*1.4+p.phase*.25)*.002;
   return {p,q:project(p.x+ripple,p.y+Math.sin(t*.4+p.phase)*.0015,p.z)};
  }).sort((a,b)=>a.q.depth-b.q.depth);
  for(const {p,q} of projected){
   const wave=(Math.sin(t*p.speed+p.phase)+1)/2,pulse=.58+.42*wave;
   const streak=1+Math.exp(-(((p.y-Math.sin(t*.3)*.5)*8)**2))*.28;
   const surface=p.face===1?.42:p.face===0?.7:1;
   const alpha=Math.min(1,p.alpha*pulse*streak*entrance*surface*(.9+q.depth*.35));
   const x=q.x,y=q.y;
   if(p.bright){ctx.globalAlpha=alpha*.14;const glow=ctx.createRadialGradient(x,y,0,x,y,12);glow.addColorStop(0,'#c6dcff');glow.addColorStop(1,'#8db9ff00');ctx.fillStyle=glow;ctx.fillRect(x-12,y-12,24,24);}
   star(x,y,p.size*(mobile?.8:1)*q.perspective,alpha,p.bright);
  }
  // A tilted orbit gives the eye another depth cue around the letter.
  ctx.globalAlpha=.085;ctx.strokeStyle='#8eadd0';ctx.lineWidth=.6;ctx.beginPath();ctx.ellipse(cx,cy,scale*.7,scale*.25,-.55+Math.sin(t*.09)*.06,0,Math.PI*2);ctx.stroke();
  if(!frozen){const a=t*.055;star(cx+Math.cos(a)*scale*.7,cy+Math.sin(a)*scale*.25,1,.55,true);}
  ctx.globalAlpha=1;hero.classList.add('canvas-ready');
 }
 function animate(now){
  frame=0;
  if(paused||media.matches||!inView||document.hidden){last=0;return;}
  const dt=last?Math.min((now-last)/1000,.05):0;last=now;time+=dt;
  mouse.x+=(target.x-mouse.x)*.045;mouse.y+=(target.y-mouse.y)*.045;
  draw();frame=requestAnimationFrame(animate);
 }
 function sync(){
  if(frame)cancelAnimationFrame(frame);frame=0;last=0;
  button.setAttribute('aria-pressed',String(paused||media.matches));
  button.setAttribute('aria-label',media.matches?'已根据系统偏好减少动画':paused?'播放星光动画':'暂停星光动画');
  button.innerHTML=media.matches?'静态星空 <span>✧</span>':paused?'播放星光 <span>▶</span>':'暂停星光 <span>Ⅱ</span>';
  button.disabled=media.matches;
  draw();if(!paused&&!media.matches&&inView&&!document.hidden)frame=requestAnimationFrame(animate);
 }
 button.addEventListener('click',()=>{paused=!paused;sync();});
 hero.addEventListener('pointermove',e=>{if(e.pointerType==='touch'||media.matches)return;const r=hero.getBoundingClientRect();target.x=(e.clientX-r.left)/width*2-1;target.y=(e.clientY-r.top)/height*2-1;});
 hero.addEventListener('pointerleave',()=>{target={x:0,y:0};});
 let resizeTimer;
 window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{build();sync();},120);});
 document.addEventListener('visibilitychange',sync);media.addEventListener('change',()=>{editorial.style.transform='';editorial.style.opacity='';sync();});
 // Some embedded browsers update matchMedia without dispatching its change event.
 const preferenceCheck=setInterval(()=>{if(!document.hidden&&media.matches!==lastMotionPreference){lastMotionPreference=media.matches;editorial.style.transform='';editorial.style.opacity='';sync();}},500);
 window.addEventListener('pagehide',()=>clearInterval(preferenceCheck),{once:true});
 const visibility=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;sync();},{threshold:0});visibility.observe(hero);
 let scrollQueued=false;
 window.addEventListener('scroll',()=>{if(scrollQueued||media.matches)return;scrollQueued=true;requestAnimationFrame(()=>{const amount=Math.max(0,-hero.getBoundingClientRect().top)/height;editorial.style.transform=`translate3d(0,${Math.min(amount,1)*65}px,0)`;editorial.style.opacity=String(Math.max(.25,1-amount*.9));scrollQueued=false;});},{passive:true});
 build();sync();
}
initConstellation();

// Keep the entire home experience in one document, including case exploration.
if(page==='home'){
 const detail=document.querySelector('#project-detail');
 const content=document.querySelector('#inline-case-content');
 let lastProjectLink;
 function closeProject(){detail.querySelectorAll('video').forEach(v=>v.pause());detail.hidden=true;content.innerHTML='';document.querySelector('#selected').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});lastProjectLink?.focus({preventScroll:true});}
 function openProject(id,link){
  if(!projects.some(p=>p.id===id))return;
  content.querySelectorAll('video').forEach(v=>v.pause());
  lastProjectLink=link||lastProjectLink;casePage(id,content,true);detail.hidden=false;
  detail.querySelectorAll('.case-story').forEach(e=>{e.classList.add('reveal');revealObserver.observe(e);});
  detail.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  const heading=content.querySelector('.case-inline-heading');heading.tabIndex=-1;heading.focus({preventScroll:true});
 }
 document.addEventListener('click',event=>{
  const link=event.target.closest('a');if(!link)return;
  if(link.dataset.caseId){event.preventDefault();openProject(link.dataset.caseId,link);return;}
  if(link.closest('#inline-case-content')){
   if(link.getAttribute('href')==='#selected'){event.preventDefault();closeProject();return;}
   const url=new URL(link.href);if(url.pathname.endsWith('/case.html')){event.preventDefault();openProject(url.searchParams.get('id'));}
  }
 });
 document.querySelector('#close-project').addEventListener('click',closeProject);
 const activeNav=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)document.querySelectorAll('.site-header nav a').forEach(a=>{const active=a.getAttribute('href')==='#'+entry.target.id;a.classList.toggle('current',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});});},{rootMargin:'-15% 0px -65% 0px'});
 ['home','selected','about','contact'].forEach(id=>activeNav.observe(document.getElementById(id)));
}
