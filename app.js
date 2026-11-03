const projects = [
  {id:'mountain',title:'山间一日 · 茶品牌视觉',category:'品牌全案',creator:'山外设计',kind:'studio',year:'2026',tag:'BRAND IDENTITY',art:'tea',description:'以「山间的一日」为线索，为新茶品牌构建一套平静而有温度的视觉语言。从品牌策略、标志与字体，到茶罐包装与零售物料，将自然的节奏带入日常。',scope:'品牌策略 / 视觉识别 / 包装系统'},
  {id:'objects',title:'Objects of Everyday',category:'空间物料',creator:'OFF TYPE',kind:'studio',year:'2026',tag:'ART DIRECTION',art:'photo',image:'interior',label:'Objects of\neveryday.',description:'一次关于日常器物的空间叙事。借助自然光、木材与克制的导视系统，重新组织人与物之间的关系，涵盖展陈、空间视觉与线下传播物料。',scope:'艺术指导 / 空间视觉 / 展陈物料'},
  {id:'between',title:'字里行间 · 艺术书展',category:'平面出版',creator:'林予',kind:'individual',year:'2026',tag:'EDITORIAL DESIGN',art:'poster',description:'为独立艺术书展设计的视觉系统。打破文字、线条与留白的既定关系，让阅读成为一场探索。系统延展至主视觉海报、场刊、票券与现场标识。',scope:'主视觉 / 海报 / 场刊与票券'},
  {id:'still',title:'STILL — 留一点空白',category:'数字体验',creator:'林予',kind:'individual',year:'2026',tag:'DIGITAL EXPERIENCE',art:'digital',description:'一个专注身心休息的数字产品概念。以柔和的色彩、清晰的信息层级和有呼吸感的界面，创造轻盈、自然的使用体验，包含品牌网站与移动端体验。',scope:'体验策略 / 网站设计 / 移动端界面'},
  {id:'inmotion',title:'In Motion · 形态之间',category:'动态影像',creator:'OFF TYPE',kind:'studio',year:'2026',tag:'MOTION & FILM',art:'motion',duration:'00:04',description:'以流动的形态探索秩序与变化。作品展示动态影像在品牌传播中的应用方式；下方播放器通过原创抽象动态短片演示播放、暂停与全屏体验。',scope:'动态概念 / 三维视觉 / 品牌影像'},
  {id:'field',title:'原野 FIELD · 生活方式品牌',category:'品牌全案',creator:'山外设计',kind:'studio',year:'2025',tag:'BRAND STRATEGY',art:'photo',image:'nature',label:'FIELD\nClose to nature.',description:'从原野获得灵感，为生活方式品牌建立鲜明且可延展的表达。连接品牌定位、自然影像、包装与线上内容，构建一致的品牌体验。',scope:'品牌定位 / 视觉系统 / 包装与传播'},
  {id:'type',title:'TYPE / 26 · 字体实验',category:'平面出版',creator:'林予',kind:'individual',year:'2026',tag:'TYPOGRAPHY',art:'type',description:'一组围绕文字节奏与几何结构的字体探索。将字母作为图像，让阅读与观看相互交织，最终呈现为系列海报和小型实验刊物。',scope:'字体实验 / 海报设计 / 印刷探索'},
  {id:'room',title:'栖所 · 空间视觉系统',category:'空间物料',creator:'OFF TYPE',kind:'studio',year:'2025',tag:'SPATIAL DESIGN',art:'photo',image:'architecture',label:'A place\nto pause.',description:'为城市中的安静居所构建空间视觉。通过材质、导视与印刷细节建立清晰又柔和的识别语言，覆盖门牌、空间标识、室内陈设与入住物料。',scope:'空间视觉 / 导视系统 / 线下物料'},
  {id:'blue',title:'蓝色时刻 · 摄影集',category:'平面出版',creator:'山外设计',kind:'studio',year:'2025',tag:'BOOK DESIGN',art:'book',description:'记录日常转瞬即逝的蓝色时刻。通过纸张、装帧与阅读节奏，塑造一本适合缓慢翻阅的摄影集。蓝色封面与克制的排版形成整体的视觉记忆。',scope:'编辑设计 / 书籍装帧 / 印刷制作'},
  {id:'good',title:'GOOD THINGS · 好事发生',category:'品牌全案',creator:'山外设计',kind:'studio',year:'2026',tag:'PACKAGING SYSTEM',art:'orange',description:'为日常零售品牌设计一套乐观的识别系统。用大胆的字形、明亮的橙色与简洁的图形，让品牌在包装、门店、社交媒体与电商场景中保持统一。',scope:'品牌识别 / 产品包装 / 零售物料'},
  {id:'archive',title:'Archive 01 · 在线艺术档案',category:'数字体验',creator:'林予',kind:'individual',year:'2025',tag:'WEB DESIGN',art:'archive',description:'为独立艺术家的作品打造数字档案。采用编辑式的信息编排与灵活的作品组织，服务于作品浏览、研究和持续积累。',scope:'信息架构 / 网站视觉 / 交互设计'},
  {id:'light',title:'光的叙事 · 品牌影像',category:'动态影像',creator:'OFF TYPE',kind:'studio',year:'2026',tag:'BRAND FILM',art:'photo',image:'light',label:'Tracing\nthe light.',duration:'00:04',description:'捕捉光线、空间与时间之间的关系，为品牌建立富有情绪的影像语言。下方提供原创抽象动态短片，演示品牌影片的播放体验。',scope:'影像策略 / 艺术指导 / 动态传播'}
];
const images = { interior:'assets/interior.svg', nature:'assets/nature.svg', architecture:'assets/architecture.svg', light:'assets/light.svg' };
const state = {filter:'全部',kind:'全部',creator:null};
const grid = document.querySelector('#projects');
const projectDialog = document.querySelector('#project-dialog');
const contactDialog = document.querySelector('#contact-dialog');
let previousFocus;
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function art(p, detail = false) {
 let inner = '';
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
}
function render() {
 const visible = projects.filter(p => (state.filter === '全部' || p.category === state.filter) && (state.kind === '全部' || p.kind === state.kind) && (!state.creator || p.creator === state.creator));
 grid.innerHTML = visible.map(p => `<button class="project-card" data-project="${p.id}" aria-label="查看${p.title}">${art(p)}<div class="card-info"><div class="card-title"><span>${p.title}</span><span>↗</span></div><div class="card-meta"><span>${p.creator}<i></i>${p.category}</span><span>${p.year}</span></div></div></button>`).join('');
 document.querySelector('#empty-state').hidden = visible.length > 0;
 document.querySelector('.count').textContent = ` / ${String(visible.length).padStart(2,'0')}`;
 document.querySelector('#result-count').textContent = state.creator ? `${state.creator} / ${visible.length} PROJECTS · 点击分类查看全部创作者` : `${visible.length} PROJECTS, ENDLESS POSSIBILITIES.`;
}
function openDialog(dialog) {
 previousFocus = document.activeElement;
 dialog.showModal();
 document.body.classList.add('dialog-open');
}
function openProject(id) {
 const p = projects.find(p => p.id === id);
 if (!p) return;
 document.querySelector('#project-detail').innerHTML = `<div class="detail-art">${art(p,true)}</div><div class="detail-content"><span class="eyebrow">${p.tag} / ${p.year}</span><h2>${p.title}</h2><div class="detail-meta"><span>${p.creator}</span><span>${p.kind === 'studio'?'设计工作室':'独立设计师'}</span><span>${p.category}</span></div><p>${p.description}</p><p>${p.scope}</p>${p.duration?'<video controls playsinline preload="none" aria-label="示例影片播放器" poster="assets/nature.svg"><source src="assets/motion.mp4" type="video/mp4">你的浏览器不支持视频播放。</video><p class="detail-note video-note" role="status">原创抽象动态演示 · 00:04 · 支持播放与全屏</p>':''}<div class="detail-bottom"><span>对这个方向感兴趣？</span><button data-detail-contact>聊聊类似项目 ↗</button></div><p class="detail-note">概念项目 · 创作者与项目均为展示用示例。所有插画、图形视觉与动态演示均由本网站构建。</p></div>`;
 openDialog(projectDialog);
 projectDialog.scrollTop = 0;
 const video = projectDialog.querySelector('video');
 if (video) video.addEventListener('error', () => { projectDialog.querySelector('.video-note').textContent = '示例视频暂时无法加载，请检查网络后重试。'; });
 projectDialog.querySelector('[data-detail-contact]').addEventListener('click', () => { projectDialog.close(); openContact(p.category); });
}
function openContact(type) {
 document.querySelector('#brief-form').hidden = false;
 document.querySelector('#brief-result').hidden = true;
 if (type) document.querySelector('[name="type"]').value = type;
 openDialog(contactDialog);
}
document.querySelector('.filters').addEventListener('click', event => {
 const button = event.target.closest('[data-filter]');
 if (!button) return;
 state.filter = button.dataset.filter;
 state.creator = null;
 document.querySelectorAll('[data-filter]').forEach(b => b.classList.toggle('active', b === button));
 render();
});
document.querySelector('#creator-filter').addEventListener('change', event => { state.kind = event.target.value; state.creator = null; render(); });
document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => {
 grid.classList.toggle('list', button.dataset.view === 'list');
 document.querySelectorAll('[data-view]').forEach(b => { b.classList.toggle('selected', b === button); b.setAttribute('aria-pressed', String(b === button)); });
}));
grid.addEventListener('click', event => { const card = event.target.closest('[data-project]'); if (card) openProject(card.dataset.project); });
document.querySelectorAll('[data-creator]').forEach(button => button.addEventListener('click', () => {
 state.creator = button.dataset.creator; state.filter = '全部'; state.kind = '全部';
 document.querySelector('#creator-filter').value = '全部';
 document.querySelectorAll('[data-filter]').forEach(b => b.classList.toggle('active', b.dataset.filter === '全部'));
 render(); document.querySelector('#work').scrollIntoView({behavior:'smooth'});
}));
document.querySelectorAll('[data-contact]').forEach(button => button.addEventListener('click', () => openContact()));
document.querySelectorAll('dialog').forEach(dialog => {
 dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
 dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
 dialog.addEventListener('close', () => {
  dialog.querySelectorAll('video').forEach(v => v.pause());
  if (!document.querySelector('dialog[open]')) document.body.classList.remove('dialog-open');
  if (previousFocus?.isConnected && !document.querySelector('dialog[open]')) previousFocus.focus();
 });
});
document.querySelector('#brief-form').addEventListener('submit', event => {
 event.preventDefault();
 const data = new FormData(event.target);
 document.querySelector('#brief-result pre').textContent = `FORM 合作简报\n\n称呼：${data.get('name').trim()}\n项目方向：${data.get('type')}\n\n项目想法：\n${data.get('idea').trim()}`;
 event.target.hidden = true; document.querySelector('#brief-result').hidden = false;
 document.querySelector('.copy-status').textContent = '';
 document.querySelector('#copy-brief').focus();
});
document.querySelector('#copy-brief').addEventListener('click', async () => {
 const text = document.querySelector('#brief-result pre').textContent;
 try { await navigator.clipboard.writeText(text); document.querySelector('.copy-status').textContent = '已复制，可以发送给合作伙伴。'; }
 catch { document.querySelector('.copy-status').textContent = '浏览器未开放剪贴板权限，请选中上方简报手动复制。'; }
});
const menu = document.querySelector('.menu-button');
menu.addEventListener('click', () => { const open = document.querySelector('.header nav').classList.toggle('open'); menu.setAttribute('aria-expanded',String(open)); menu.setAttribute('aria-label',open?'关闭导航':'打开导航'); });
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => { document.querySelector('.header nav').classList.remove('open'); menu.setAttribute('aria-expanded','false'); }));
const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) document.querySelectorAll('.nav-link').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id)); }); }, {rootMargin:'-10% 0px -65% 0px'});
['work','creators','about'].forEach(id => observer.observe(document.getElementById(id)));
render();
