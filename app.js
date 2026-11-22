"use strict";

/* بيانات الجدول مأخوذة من ملف الـPDF المرفق، مع توضيح مواضع اختلاف التواريخ في المصدر. */
const SUBJECTS = {
  chem: {name:"كيمياء", color:"var(--chem)", className:"subject-chem", icon:"⚗️"},
  medical: {name:"مبادئ طبية", color:"var(--medical)", className:"subject-medical", icon:"🩺"},
  english: {name:"English", color:"var(--english)", className:"subject-english", icon:"🇬🇧"},
  skills: {name:"مهارات", color:"var(--skills)", className:"subject-skills", icon:"✦"}
};

const task = (id, subject, title, detail="", slot="") => ({id, subject, title, detail, slot});
const day = (id, iso, weekday, dateLabel, tasks, sourceDate="") => ({id, iso, weekday, dateLabel, tasks, sourceDate});

const WEEKS = [
  {
    id:"w4", title:"الأسبوع الرابع", range:"22 – 28 نوفمبر 2026",
    note:"التركيز على الكيمياء ومبادئ طبية والمهارات، مع متابعة الجزء الضعيف من الميد.",
    sharedTasks:[
      task("w4-night-1","medical","دراسة جزئية الميد للمادة الضعيف فيها","مهمة ليلية ممتدة خلال الأسبوع","الليل")
    ],
    days:[
      day("w4-sun","2026-11-22","الأحد","22 نوفمبر",[
        task("w4-sun-1","chem","Chapter 8","حل التجميعات","الصباح"),
        task("w4-sun-2","medical","Foundation of Medical","Chapter 9/8 + التجميعات","العصر")
      ]),
      day("w4-mon","2026-11-23","الاثنين","23 نوفمبر",[
        task("w4-mon-1","chem","Chapter 9","حل التجميعات","الصباح"),
        task("w4-mon-2","medical","Foundation of Medical","Chapter 10 + التجميعات","العصر")
      ]),
      day("w4-tue","2026-11-24","الثلاثاء","24 نوفمبر",[
        task("w4-tue-1","chem","Chapter 10","حل التجميعات","الصباح"),
        task("w4-tue-2","medical","Foundation of Medical","Chapter 11 + التجميعات","العصر")
      ]),
      day("w4-wed","2026-11-25","الأربعاء","25 نوفمبر",[
        task("w4-wed-1","chem","Chapter 11","حل التجميعات","الصباح"),
        task("w4-wed-2","skills","Chapter 5","مراجعة مبادئ طبية 9 / 10 / 11","العصر")
      ]),
      day("w4-thu","2026-11-26","الخميس","26 نوفمبر",[
        task("w4-thu-1","chem","Chapter 12","حل التجميعات","الصباح"),
        task("w4-thu-2","skills","Chapter 6","مراجعة مبادئ طبية 9 / 10 / 11","العصر")
      ]),
      day("w4-fri","2026-11-27","الجمعة","27 نوفمبر",[
        task("w4-fri-1","english","Chapter 12","","الصباح"),
        task("w4-fri-2","skills","Chapter 7","مراجعة مبادئ طبية 9 / 10 / 11","العصر")
      ]),
      day("w4-sat","2026-11-28","السبت","28 نوفمبر",[
        task("w4-sat-1","english","Chapter 12","","الصباح"),
        task("w4-sat-2","skills","Chapter 8","مراجعة مبادئ طبية 9 / 10 / 11","العصر")
      ])
    ]
  },
  {
    id:"w5", title:"الأسبوع الخامس", range:"29 نوفمبر – 5 ديسمبر 2026",
    note:"موعد كويز مادة مبادئ طبية: Chapters 9 / 10 / 11.",
    sharedTasks:[],
    days:[
      day("w5-sun","2026-11-29","الأحد","29 نوفمبر",[
        task("w5-sun-1","medical","مراجعة Quiz (2)","مبادئ طبية"),
        task("w5-sun-2","english","Chapter 13")
      ]),
      day("w5-mon","2026-11-30","الاثنين","30 نوفمبر",[
        task("w5-mon-1","chem","Revision organic chemistry","Chapters 6 / 7 / 8")
      ]),
      day("w5-tue","2026-12-01","الثلاثاء","1 ديسمبر",[
        task("w5-tue-1","english","Chapter 13"),
        task("w5-tue-2","medical","Chapter 12","Foundation of Medical")
      ],"في الملف: 31/11/2026"),
      day("w5-wed","2026-12-02","الأربعاء","2 ديسمبر",[
        task("w5-wed-1","chem","Revision organic chemistry","Chapters 9 / 10")
      ],"في الملف: 1/12/2026"),
      day("w5-thu","2026-12-03","الخميس","3 ديسمبر",[
        task("w5-thu-1","medical","Chapter 13","Foundation of Medical")
      ],"في الملف: 2/12/2026"),
      day("w5-fri","2026-12-04","الجمعة","4 ديسمبر",[
        task("w5-fri-1","chem","Revision organic chemistry","Chapters 11 / 12 + الميد من الملخصات"),
        task("w5-fri-2","english","مراجعة Chapters 12 + 13")
      ],"في الملف: 3/12/2026"),
      day("w5-sat","2026-12-05","السبت","5 ديسمبر",[
        task("w5-sat-1","medical","Chapter 14","Revision Chapters 1 / 2 / 3 / 4 — Foundation of Medical")
      ],"في الملف: 4/12/2026")
    ]
  },
  {
    id:"w6", title:"الأسبوع السادس", range:"6 – 12 ديسمبر 2026",
    note:"آخر أسبوع قبل الفاينل — تكثيف المراجعة والتجميعات.",
    sharedTasks:[],
    days:[
      day("w6-sun","2026-12-06","الأحد","6 ديسمبر",[
        task("w6-sun-1","medical","Revision Chapters 5 / 6 / 7","Foundation of Medical"),
        task("w6-sun-2","english","Chapter 14")
      ]),
      day("w6-mon","2026-12-07","الاثنين","7 ديسمبر",[
        task("w6-mon-1","chem","مراجعة كيمياء عضوية","التسمية والنظري من ملخص التسمية والنظري")
      ]),
      day("w6-tue","2026-12-08","الثلاثاء","8 ديسمبر",[
        task("w6-tue-1","medical","مراجعة","Foundation of Medical")
      ]),
      day("w6-wed","2026-12-09","الأربعاء","9 ديسمبر",[
        task("w6-wed-1","chem","مراجعة التفاعلات")
      ]),
      day("w6-thu","2026-12-10","الخميس","10 ديسمبر",[
        task("w6-thu-1","chem","مراجعة التفاعلات"),
        task("w6-thu-2","skills","مراجعة Chapters 5 / 6 / 7 / 8")
      ]),
      day("w6-fri","2026-12-11","الجمعة","11 ديسمبر",[
        task("w6-fri-1","chem","حل تجميعات الفاينل"),
        task("w6-fri-2","skills","Chapters 1 / 2 / 3 / 4")
      ]),
      day("w6-sat","2026-12-12","السبت","12 ديسمبر",[
        task("w6-sat-1","medical","مراجعة كامل المادة","Foundation of Medical")
      ])
    ]
  },
  {
    id:"w7", title:"الأسبوع السابع", range:"13 – 19 ديسمبر 2026",
    note:"الأسبوع الأخير قبل الفاينل — تثبيت المراجعة والاستعداد النهائي.",
    sharedTasks:[],
    days:[
      day("w7-sun","2026-12-13","الأحد","13 ديسمبر",[
        task("w7-sun-1","english","English")
      ],"في الملف: 12/12/2026"),
      day("w7-mon","2026-12-14","الاثنين","14 ديسمبر",[
        task("w7-mon-1","chem","مراجعة كامل المادة")
      ],"في الملف: 13/12/2026"),
      day("w7-tue","2026-12-15","الثلاثاء","15 ديسمبر",[
        task("w7-tue-1","english","English")
      ],"في الملف: 14/12/2026"),
      day("w7-wed","2026-12-16","الأربعاء","16 ديسمبر",[
        task("w7-wed-1","english","English")
      ],"في الملف: 15/12/2026"),
      day("w7-thu","2026-12-17","الخميس","17 ديسمبر",[
        task("w7-thu-1","english","English")
      ],"في الملف: 16/12/2026"),
      day("w7-fri","2026-12-18","الجمعة","18 ديسمبر",[
        task("w7-fri-1","english","English")
      ],"في الملف: 17/12/2026"),
      day("w7-sat","2026-12-19","السبت","19 ديسمبر",[
        task("w7-sat-1","english","English")
      ],"في الملف: 18/12/2026")
    ]
  }
];

const STORAGE_KEY = "masarak-final-plan-v2";
const DEFAULT_STATE = {done:{}, custom:{}, notes:{}, theme:"light", activeView:"home", activeWeek:0, focusSessions:0, focusMinutes:0, focusWork:25, focusBreak:5};
let state = loadState();
let scheduleQuery = "", scheduleSubject = "all";
let timer = {mode:"work", duration:(state.focusWork||25)*60, remaining:(state.focusWork||25)*60, running:false, endAt:0, interval:null};
let toastTimer = null;

function loadState(){
  try{
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    return {...DEFAULT_STATE, ...(saved || {}), done:(saved && saved.done)||{}, custom:(saved && saved.custom)||{}, notes:(saved && saved.notes)||{}};
  }catch(e){return {...DEFAULT_STATE};}
}
function saveState(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch(e){}}
function escapeHTML(value){
  return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function todayISO(){
  const d=new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function allDays(){return WEEKS.flatMap(w=>w.days);}
function allTasks(){
  const base = WEEKS.flatMap(w=>[
    ...(w.sharedTasks||[]),
    ...w.days.flatMap(d=>d.tasks)
  ]);
  const custom = Object.values(state.custom).flat();
  return [...base,...custom];
}
function dayTasks(d){return [...d.tasks,...(state.custom[d.id]||[])];}
function isDone(id){return !!state.done[id];}
function taskCounts(tasks){
  const done=tasks.filter(t=>isDone(t.id)).length;
  return {done,total:tasks.length,pct:tasks.length?Math.round(done/tasks.length*100):0};
}
function stats(){
  const tasks=allTasks();
  const done=tasks.filter(t=>isDone(t.id)).length;
  const bySubject={};
  Object.keys(SUBJECTS).forEach(k=>{
    const list=tasks.filter(t=>t.subject===k);
    bySubject[k]={done:list.filter(t=>isDone(t.id)).length,total:list.length,pct:list.length?Math.round(list.filter(t=>isDone(t.id)).length/list.length*100):0};
  });
  return {total:tasks.length,done,left:tasks.length-done,pct:tasks.length?Math.round(done/tasks.length*100):0,bySubject};
}
function findToday(){
  const iso=todayISO(), days=allDays();
  return days.find(d=>d.iso===iso) || days.find(d=>d.iso>iso) || days[days.length-1];
}
function showToast(message){
  const el=document.getElementById("toast");
  el.textContent=message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>el.classList.remove("show"),2600);
}
function setView(view){
  state.activeView=view;
  saveState();
  render();
  window.scrollTo({top:0,behavior:"smooth"});
}
function updateNav(){
  document.querySelectorAll("[data-view]").forEach(b=>b.classList.toggle("active",b.dataset.view===state.activeView));
}
function pageHead(kicker,title,desc,actions=""){
  return `<div class="page-head"><div><div class="eyebrow">${kicker}</div><h1 class="page-title">${title}</h1><p class="page-desc">${desc}</p></div><div class="head-actions">${actions}</div></div>`;
}
function ring(pct, size=156){
  const r=66,c=2*Math.PI*r,offset=c-(c*pct/100);
  return `<div class="hero-ring" style="width:${size}px;height:${size}px"><svg viewBox="0 0 156 156" aria-hidden="true"><circle class="track" cx="78" cy="78" r="${r}"></circle><circle class="value" cx="78" cy="78" r="${r}" stroke-dasharray="${c}" stroke-dashoffset="${offset}"></circle></svg><div class="ring-copy"><strong>${pct}%</strong><small>نسبة الإنجاز</small></div></div>`;
}
function statCard(icon,label,value,foot){
  return `<div class="stat-card"><div class="stat-top"><span class="stat-label">${label}</span><span class="stat-icon">${icon}</span></div><div class="stat-value">${value}</div><div class="stat-foot">${foot}</div></div>`;
}
function subjectPill(key){
  const s=SUBJECTS[key]||SUBJECTS.chem;
  return `<span class="subject-pill ${s.className}">${s.name}</span>`;
}
function taskRow(t, options={}){
  const done=isDone(t.id);
  const custom=!!options.custom;
  return `<div class="task-row ${done?"done":""}">
    <input class="task-check" type="checkbox" data-task-toggle="${escapeHTML(t.id)}" aria-label="إنجاز ${escapeHTML(t.title)}" ${done?"checked":""}>
    <div class="task-main">
      <div>${subjectPill(t.subject)}${t.slot?`<span class="slot">${escapeHTML(t.slot)}</span>`:""}</div>
      <div class="task-title">${escapeHTML(t.title)}</div>
      ${t.detail?`<div class="task-detail">${escapeHTML(t.detail)}</div>`:""}
    </div>
    ${custom?`<button class="icon-btn danger" style="height:30px;min-width:30px;padding:0" data-action="delete-task" data-task-id="${escapeHTML(t.id)}" data-day-id="${escapeHTML(options.dayId)}" title="حذف المهمة">×</button>`:""}
  </div>`;
}
function taskList(tasks, dayId=""){
  if(!tasks.length)return `<div class="empty-state">لا توجد مهام مطابقة في هذا اليوم.</div>`;
  return `<div class="task-list">${tasks.map(t=>taskRow(t,{custom:!!t.custom,dayId})).join("")}</div>`;
}
function progressBar(pct){return `<div class="progress-line"><i style="width:${pct}%"></i></div>`;}

function renderHome(){
  const s=stats(),today=findToday(),todayTasks=dayTasks(today),todayProgress=taskCounts(todayTasks);
  const weekIndex=Math.max(0,WEEKS.findIndex(w=>w.days.some(d=>d.id===today.id)));
  const week=WEEKS[weekIndex];
  const completedWeeks=WEEKS.map(w=>{
    const ts=[...(w.sharedTasks||[]),...w.days.flatMap(d=>dayTasks(d))];
    return {title:w.title,range:w.range,...taskCounts(ts)};
  });
  const nextTask=todayTasks.find(t=>!isDone(t.id));
  const todayNote=state.notes[today.id]||"";
  const motto=nextTask?`ابدأ بـ «${nextTask.title}»؛ لا تفكر في كل الجدول مرة واحدة.`:"أنهيت مهام هذا اليوم، أحسنت! خذ استراحة ثم راجع إن احتجت.";
  return `
    ${pageHead("مساحة إنجازك","أهلًا بك في مسارك للفاينل","تابع تقدمك اليومي، وخلّ كل خطوة تقرّبك من هدفك.",`<button class="btn primary" data-view="schedule">افتح الجدول <span>←</span></button>`)}
    <section class="hero">
      <div class="hero-copy">
        <div class="hero-kicker">خطة الاستعداد للفاينل · 22 نوفمبر — 19 ديسمبر 2026</div>
        <h2>كل يوم تنجز فيه،<br>تقترب أكثر من هدفك.</h2>
        <p>جدولك كامل في مكان واحد. علّم على المهام بعد إنجازها، وتابع تقدمك بدون ما تضيع بين المواد.</p>
        <div class="hero-meta"><span class="hero-chip">📅 ${week.title}</span><span class="hero-chip">🎯 ${s.left} مهمة متبقية</span><span class="hero-chip">⚡ ${state.focusSessions} جلسة تركيز</span></div>
      </div>
      ${ring(s.pct)}
    </section>
    <section class="stats-grid">
      ${statCard("✓","المهام المنجزة",s.done,`من أصل ${s.total} مهمة`)}
      ${statCard("◷","المهام المتبقية",s.left,"استمر خطوة بخطوة")}
      ${statCard("⚡","جلسات التركيز",state.focusSessions,`${state.focusMinutes} دقيقة تركيز`)}
      ${statCard("✦","نسبة الإنجاز",`${s.pct}%`,"تتحدث تلقائيًا مع كل علامة")}
    </section>
    <div class="content-grid">
      <section class="panel">
        <div class="panel-head"><div><h3 class="panel-title">خطة اليوم</h3><p class="panel-sub">${today.weekday} · ${today.dateLabel} 2026</p></div><button class="text-link" data-action="open-day" data-day-id="${today.id}">عرض في الجدول ←</button></div>
        <div class="day-focus">
          <div class="day-focus-head"><div><div class="day-name">${today.weekday}</div><div class="day-date">${today.dateLabel} 2026</div></div><b class="day-count">${todayProgress.done}/${todayProgress.total}</b></div>
          ${progressBar(todayProgress.pct)}
          <div style="margin-top:12px">${taskList(todayTasks,today.id)}</div>
        </div>
        <div class="quote-card"><p>✦ ${escapeHTML(motto)}</p><small>تذكير بسيط: الاستمرارية أهم من المثالية.</small></div>
      </section>
      <section class="panel">
        <div class="panel-head"><div><h3 class="panel-title">تقدم المواد</h3><p class="panel-sub">نسبة إنجاز كل مادة على حدة</p></div></div>
        <div class="subject-bars">${Object.entries(SUBJECTS).map(([key,sub])=>{
          const b=s.bySubject[key];
          return `<div><div class="subject-bar-head"><b>${sub.icon} ${sub.name}</b><span>${b.done}/${b.total} · ${b.pct}%</span></div><div class="subject-bar"><i style="width:${b.pct}%;background:${sub.color}"></i></div></div>`;
        }).join("")}</div>
        <div style="margin-top:20px;border-top:1px solid var(--line);padding-top:14px">
          <div class="panel-head"><div><h3 class="panel-title">ملاحظة اليوم</h3><p class="panel-sub">اكتب أهم شيء تحتاج تتذكره</p></div><span>📝</span></div>
          <textarea class="note-box" data-note="${today.id}" placeholder="اكتب ملاحظتك أو النقاط التي تحتاج مراجعتها...">${escapeHTML(todayNote)}</textarea>
        </div>
      </section>
    </div>
    <section class="panel" style="margin-top:15px">
      <div class="panel-head"><div><h3 class="panel-title">نظرة سريعة على الأسابيع</h3><p class="panel-sub">تقدمك في كل مرحلة من الخطة</p></div><button class="text-link" data-view="schedule">كل الجدول ←</button></div>
      <div class="week-stat-list">${completedWeeks.map(w=>`<div class="week-stat"><span>${w.title}</span>${progressBar(w.pct)}<b>${w.pct}%</b></div>`).join("")}</div>
    </section>
    <div class="footer-note">بيانات الجدول مأخوذة من ملفك المرفق · يتم حفظ تقدمك على هذا الجهاز تلقائيًا.</div>
  `;
}

function weekTabMarkup(){
  return `<div class="week-tabs">${WEEKS.map((w,i)=>`<button class="week-tab ${state.activeWeek===i?"active":""}" data-action="week" data-week="${i}"><b>${w.title}</b><small>${w.range}</small></button>`).join("")}</div>`;
}
function dayCard(d){
  const tasks=dayTasks(d),c=taskCounts(tasks),today=d.iso===todayISO();
  return `<article class="day-card ${today?"today":""}" id="day-${d.id}">
    <div class="day-card-head"><div><strong>${d.weekday}</strong><small>${d.dateLabel} 2026 ${today?" · اليوم":""}</small>${d.sourceDate?`<span class="source-note">${escapeHTML(d.sourceDate)}</span>`:""}</div><span class="day-count">${c.done}/${c.total} · ${c.pct}%</span></div>
    ${progressBar(c.pct)}
    <div style="margin-top:11px">${taskList(tasks,d.id)}</div>
    <div class="day-card-foot">
      <details class="note-details"><summary>📝 ملاحظة هذا اليوم</summary><textarea class="note-box" data-note="${d.id}" placeholder="اكتب ملاحظاتك لهذا اليوم...">${escapeHTML(state.notes[d.id]||"")}</textarea></details>
      <form class="add-task-form" data-add-task-form="${d.id}">
        <input class="field" name="title" required maxlength="90" placeholder="أضف مهمة جديدة...">
        <select class="field" name="subject" aria-label="المادة">
          <option value="chem">كيمياء</option><option value="medical">مبادئ طبية</option><option value="english">English</option><option value="skills">مهارات</option>
        </select>
        <button class="btn primary" type="submit" aria-label="إضافة">+</button>
      </form>
    </div>
  </article>`;
}
function getVisibleTasks(d){
  const all=dayTasks(d);
  const q=scheduleQuery.trim().toLowerCase();
  const sub=scheduleSubject;
  return all.filter(t=>{
    const matchSub=sub==="all"||t.subject===sub;
    const matchQ=!q||(t.title+" "+t.detail+" "+SUBJECTS[t.subject].name).toLowerCase().includes(q);
    return matchSub&&matchQ;
  });
}
function renderDayCards(){
  const w=WEEKS[state.activeWeek];
  return w.days.map(d=>dayCardFiltered(d)).join("");
}
function dayCardFiltered(d){
  const tasks=getVisibleTasks(d),all=dayTasks(d),c=taskCounts(all),today=d.iso===todayISO();
  return `<article class="day-card ${today?"today":""}" id="day-${d.id}">
    <div class="day-card-head"><div><strong>${d.weekday}</strong><small>${d.dateLabel} 2026 ${today?" · اليوم":""}</small>${d.sourceDate?`<span class="source-note">${escapeHTML(d.sourceDate)}</span>`:""}</div><span class="day-count">${c.done}/${c.total} · ${c.pct}%</span></div>
    ${progressBar(c.pct)}
    <div style="margin-top:11px">${taskList(tasks,d.id)}</div>
    <div class="day-card-foot">
      <details class="note-details"><summary>📝 ملاحظة هذا اليوم</summary><textarea class="note-box" data-note="${d.id}" placeholder="اكتب ملاحظاتك لهذا اليوم...">${escapeHTML(state.notes[d.id]||"")}</textarea></details>
      <form class="add-task-form" data-add-task-form="${d.id}">
        <input class="field" name="title" required maxlength="90" placeholder="أضف مهمة جديدة...">
        <select class="field" name="subject" aria-label="المادة"><option value="chem">كيمياء</option><option value="medical">مبادئ طبية</option><option value="english">English</option><option value="skills">مهارات</option></select>
        <button class="btn primary" type="submit" aria-label="إضافة">+</button>
      </form>
    </div>
  </article>`;
}
function renderSchedule(){
  const w=WEEKS[state.activeWeek];
  const shared=(w.sharedTasks||[]).map(t=>`<div class="shared-task"><input class="task-check" type="checkbox" data-task-toggle="${t.id}" ${isDone(t.id)?"checked":""}><div class="task-main"><div class="task-title">${escapeHTML(t.title)}</div><div class="task-detail">${escapeHTML(t.detail)} · ${escapeHTML(t.slot)}</div></div><span>${SUBJECTS[t.subject].icon}</span></div>`).join("");
  const warning=`<div class="warning-box"><strong>⚠️ ملاحظات تدقيق على ملف الجدول</strong><p>في صفحة الأسبوع 29 نوفمبر–5 ديسمبر ورد تاريخ 31/11، وهو غير موجود تقويميًا؛ لذلك رُتّبت الأيام بحسب تسلسل الأحد إلى السبت واعتمد 1–5 ديسمبر. وفي الصفحة الأخيرة العنوان 13–19 ديسمبر بينما خلايا التاريخ مطبوعة 12–18؛ اعتمد الموقع 13–19 حسب عنوان الأسبوع. كما أن الصفحتين الثالثة والرابعة تكرران تسمية «الأسبوع الخامس»، وعُرضتا هنا بالتسلسل كالأسبوع السادس والسابع. التواريخ الأصلية ظاهرة أسفل اليوم عند اختلافها.</p></div>`;
  return `
    ${pageHead("الخطة الكاملة","جدول المذاكرة","كل الأيام والمواد والمهام الموجودة في ملف الـPDF، مع إمكانية التأشير والإضافة والبحث.",`<button class="btn" data-action="print">⎙ طباعة الجدول</button><button class="btn primary" data-action="reset-progress">إعادة ضبط العلامات</button>`)}
    ${weekTabMarkup()}
    <div class="week-banner"><strong>${w.title} · ${w.range}</strong><p>${escapeHTML(w.note||"رتّب مهامك وأنجزها بالترتيب الذي يناسبك.")}</p></div>
    ${state.activeWeek===0?shared:""}
    ${warning}
    <div class="filters">
      <div class="search-box"><span>⌕</span><input id="scheduleSearch" type="search" value="${escapeHTML(scheduleQuery)}" placeholder="ابحث عن Chapter أو مادة أو مهمة..."></div>
      <select id="subjectFilter" class="filter-select"><option value="all" ${scheduleSubject==="all"?"selected":""}>كل المواد</option><option value="chem" ${scheduleSubject==="chem"?"selected":""}>كيمياء</option><option value="medical" ${scheduleSubject==="medical"?"selected":""}>مبادئ طبية</option><option value="english" ${scheduleSubject==="english"?"selected":""}>English</option><option value="skills" ${scheduleSubject==="skills"?"selected":""}>مهارات</option></select>
    </div>
    <div class="days-grid" id="daysContainer">${renderDayCards()}</div>
    <div class="footer-note">ضع علامة ✓ بعد كل مهمة. تقدمك وملاحظاتك تُحفظ تلقائيًا على جهازك.</div>
  `;
}

function renderFocus(){
  const pct=timer.duration?Math.max(0,Math.min(100,(1-timer.remaining/timer.duration)*100)):0;
  const circumference=2*Math.PI*112;
  const offset=circumference-(circumference*pct/100);
  const min=String(Math.floor(timer.remaining/60)).padStart(2,"0");
  const sec=String(timer.remaining%60).padStart(2,"0");
  const modeName=timer.mode==="work"?"وقت التركيز":"وقت الاستراحة";
  return `
    ${pageHead("مساحة التركيز","جلسة تركيز هادئة","استخدم المؤقت لتقسيم المذاكرة إلى جلسات قصيرة مع استراحات منتظمة.")}
    <div class="focus-layout">
      <section class="panel focus-card">
        <div class="timer-modes"><button data-action="timer-mode" data-mode="work" class="${timer.mode==="work"?"active":""}">تركيز</button><button data-action="timer-mode" data-mode="break" class="${timer.mode==="break"?"active":""}">استراحة</button></div>
        <div class="timer-ring"><svg viewBox="0 0 240 240"><circle class="track" cx="120" cy="120" r="112"></circle><circle class="progress" id="timerProgress" cx="120" cy="120" r="112" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"></circle></svg><div class="timer-center"><div class="timer-time" id="timerValue">${min}:${sec}</div><div class="timer-caption" id="timerCaption">${modeName}</div></div></div>
        <div class="timer-controls">
          <button class="btn primary" id="timerToggle" data-action="timer-toggle">${timer.running?"إيقاف مؤقت":"ابدأ التركيز"} ${timer.running?"Ⅱ":"▶"}</button>
          <button class="btn" data-action="timer-reset">↺ إعادة</button>
          ${timer.remaining===0?`<button class="btn soft" data-action="timer-next">${timer.mode==="work"?"ابدأ الاستراحة":"ابدأ جلسة جديدة"}</button>`:""}
        </div>
        <div class="timer-settings">
          <label>مدة التركيز بالدقائق<input id="workMinutes" type="number" min="5" max="180" value="${state.focusWork||25}" ${timer.running?"disabled":""}></label>
          <label>مدة الاستراحة بالدقائق<input id="breakMinutes" type="number" min="1" max="60" value="${state.focusBreak||5}" ${timer.running?"disabled":""}></label>
        </div>
      </section>
      <section class="panel">
        <div class="panel-head"><div><h3 class="panel-title">كيف تستفيد من الجلسة؟</h3><p class="panel-sub">نصائح بسيطة لجلسة أكثر فاعلية</p></div><span>🌿</span></div>
        <div class="focus-tips">
          <div class="tip-row"><span class="tip-icon">①</span><div><b>حدد مهمة واحدة</b><p>اختر Chapter أو جزءًا محددًا بدل فتح عدة مواد معًا.</p></div></div>
          <div class="tip-row"><span class="tip-icon">②</span><div><b>أبعد المشتتات</b><p>ضع الجوال على الصامت وأغلق الصفحات غير الضرورية.</p></div></div>
          <div class="tip-row"><span class="tip-icon">③</span><div><b>اختبر نفسك</b><p>في نهاية الجلسة، حاول استرجاع أهم النقاط دون النظر للملخص.</p></div></div>
          <div class="tip-row"><span class="tip-icon">④</span><div><b>استرح بوعي</b><p>تحرك واشرب الماء، وحاول ألا تتحول الاستراحة إلى تصفح طويل.</p></div></div>
        </div>
        <div class="quote-card"><p>«جلسة واحدة بتركيز حقيقي أفضل من ساعات طويلة مع التشتت.»</p><small>تذكير مسارك</small></div>
      </section>
    </div>
  `;
}

function renderStats(){
  const s=stats();
  return `
    ${pageHead("قراءة تقدمك","إحصائياتي","شاهد إنجازك الإجمالي وتوزيع المهام على المواد والأسابيع.",`<button class="btn" data-action="export">⇩ تصدير بياناتي</button>`)}
    <section class="stats-grid">
      ${statCard("✓","أنجزت",s.done,`من أصل ${s.total} مهمة`)}
      ${statCard("⌛","المتبقي",s.left,"مهام لم تُنجز بعد")}
      ${statCard("◉","التقدم الكلي",`${s.pct}%`,"نسبة إكمال الخطة")}
      ${statCard("⚡","جلسات التركيز",state.focusSessions,`${state.focusMinutes} دقيقة إجمالية`)}
    </section>
    <section class="panel" style="margin-bottom:15px">
      <div class="panel-head"><div><h3 class="panel-title">إنجازك حسب المادة</h3><p class="panel-sub">عدد المهام المنجزة من إجمالي مهام كل مادة</p></div></div>
      <div class="stats-subjects">${Object.entries(SUBJECTS).map(([key,sub])=>{
        const b=s.bySubject[key];
        return `<div class="subject-stat"><h4>${sub.icon} ${sub.name}</h4><strong>${b.pct}%</strong><small>${b.done} من ${b.total} مهام</small>${progressBar(b.pct)}</div>`;
      }).join("")}</div>
    </section>
    <section class="panel">
      <div class="panel-head"><div><h3 class="panel-title">التقدم الأسبوعي</h3><p class="panel-sub">كل أسبوع على حدة</p></div></div>
      <div class="week-stat-list">${WEEKS.map(w=>{
        const ts=[...(w.sharedTasks||[]),...w.days.flatMap(d=>dayTasks(d))],c=taskCounts(ts);
        return `<div class="week-stat"><span>${w.title}</span>${progressBar(c.pct)}<b>${c.done}/${c.total}</b></div>`;
      }).join("")}</div>
    </section>
    <section class="panel" style="margin-top:15px">
      <div class="panel-head"><div><h3 class="panel-title">أدوات إدارة بياناتك</h3><p class="panel-sub">احتفظ بنسخة من تقدمك أو انقله إلى جهاز آخر</p></div></div>
      <div class="head-actions"><button class="btn primary" data-action="export">تنزيل نسخة احتياطية</button><button class="btn" data-action="import">استعادة نسخة</button><button class="btn danger" data-action="reset-progress">مسح علامات الإنجاز</button></div>
    </section>
  `;
}

function render(){
  document.documentElement.dataset.theme=state.theme||"light";
  updateNav();
  const app=document.getElementById("app");
  if(state.activeView==="schedule")app.innerHTML=renderSchedule();
  else if(state.activeView==="focus")app.innerHTML=renderFocus();
  else if(state.activeView==="stats")app.innerHTML=renderStats();
  else app.innerHTML=renderHome();
  updateMiniTimer();
}
function updateMiniTimer(){
  const mini=document.getElementById("miniTimer");
  mini.classList.toggle("show",timer.running);
  if(timer.running){
    const left=Math.max(0,Math.ceil((timer.endAt-Date.now())/1000));
    document.getElementById("miniTimerText").textContent=String(Math.floor(left/60)).padStart(2,"0")+":"+String(left%60).padStart(2,"0");
  }
}
function renderDaysOnly(){
  const target=document.getElementById("daysContainer");
  if(target)target.innerHTML=renderDayCards();
}

function toggleTask(id,checked){
  state.done[id]=checked?1:0;
  if(!checked)delete state.done[id];
  saveState();
  render();
  showToast(checked?"تم تسجيل الإنجاز ✓":"تم إلغاء علامة الإنجاز");
}
function addCustomTask(dayId,title,subject){
  const d=allDays().find(x=>x.id===dayId);
  if(!d)return;
  const id="custom-"+Date.now()+"-"+Math.random().toString(36).slice(2,7);
  state.custom[dayId]=state.custom[dayId]||[];
  state.custom[dayId].push({id,subject,title,detail:"مهمة مضافة",custom:true});
  saveState();
  render();
  showToast("أُضيفت المهمة إلى يومك");
}
function deleteCustomTask(dayId,id){
  state.custom[dayId]=(state.custom[dayId]||[]).filter(t=>t.id!==id);
  delete state.done[id];
  saveState();
  render();
  showToast("تم حذف المهمة");
}
function exportBackup(){
  const payload={version:2,exportedAt:new Date().toISOString(),state};
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;a.download="masarak-final-backup.json";a.click();
  URL.revokeObjectURL(url);
  showToast("تم تنزيل النسخة الاحتياطية");
}
function importBackup(file){
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const data=JSON.parse(reader.result);
      if(!data||data.version!==2||!data.state)throw new Error("invalid");
      state={...DEFAULT_STATE,...data.state};
      saveState();render();showToast("تمت استعادة تقدمك بنجاح");
    }catch(e){showToast("ملف النسخة الاحتياطية غير صالح");}
  };
  reader.readAsText(file);
}
function setTheme(){
  state.theme=state.theme==="dark"?"light":"dark";
  saveState();render();
}
function timerDisplay(){
  const left=Math.max(0,timer.running?Math.ceil((timer.endAt-Date.now())/1000):timer.remaining);
  return String(Math.floor(left/60)).padStart(2,"0")+":"+String(left%60).padStart(2,"0");
}
function timerTick(){
  if(!timer.running)return;
  timer.remaining=Math.max(0,Math.ceil((timer.endAt-Date.now())/1000));
  const value=document.getElementById("timerValue");
  const caption=document.getElementById("timerCaption");
  const progress=document.getElementById("timerProgress");
  if(value)value.textContent=timerDisplay();
  if(caption)caption.textContent=timer.mode==="work"?"وقت التركيز":"وقت الاستراحة";
  if(progress){
    const c=2*Math.PI*112,p=timer.duration?Math.max(0,Math.min(100,(1-timer.remaining/timer.duration)*100)):0;
    progress.style.strokeDasharray=c;progress.style.strokeDashoffset=c-c*p/100;
  }
  updateMiniTimer();
  if(timer.remaining<=0){
    clearInterval(timer.interval);timer.interval=null;timer.running=false;
    if(timer.mode==="work"){
      state.focusSessions+=1;state.focusMinutes+=Math.round(timer.duration/60);saveState();
      showToast("أحسنت! انتهت جلسة التركيز، خذ استراحة قصيرة 🌿");
    }else showToast("انتهت الاستراحة، جاهز لجلسة جديدة؟");
    render();
  }
}
function startTimer(){
  if(timer.running)return;
  if(timer.remaining<=0)timer.remaining=timer.duration;
  timer.endAt=Date.now()+timer.remaining*1000;
  timer.running=true;
  timer.interval=setInterval(timerTick,250);
  render();
  showToast(timer.mode==="work"?"بدأت جلسة التركيز. بالتوفيق!":"بدأ وقت الاستراحة.");
}
function pauseTimer(){
  if(!timer.running)return;
  timer.remaining=Math.max(0,Math.ceil((timer.endAt-Date.now())/1000));
  timer.running=false;clearInterval(timer.interval);timer.interval=null;
  render();
  showToast("تم إيقاف المؤقت مؤقتًا");
}
function resetTimer(){
  timer.running=false;clearInterval(timer.interval);timer.interval=null;
  timer.remaining=timer.duration;render();
}
function setTimerMode(mode){
  if(timer.running)pauseTimer();
  timer.mode=mode;
  const mins=mode==="work"?(state.focusWork||25):(state.focusBreak||5);
  timer.duration=mins*60;timer.remaining=timer.duration;
  render();
}
function nextTimerMode(){
  const next=timer.mode==="work"?"break":"work";
  setTimerMode(next);
}
function updateTimerSettings(){
  if(timer.running)return;
  const work=document.getElementById("workMinutes"),br=document.getElementById("breakMinutes");
  if(work)state.focusWork=Math.max(5,Math.min(180,Number(work.value)||25));
  if(br)state.focusBreak=Math.max(1,Math.min(60,Number(br.value)||5));
  timer.duration=(timer.mode==="work"?state.focusWork:state.focusBreak)*60;
  timer.remaining=timer.duration;
  saveState();
  render();
}

document.addEventListener("click",e=>{
  const view=e.target.closest("[data-view]");
  if(view){setView(view.dataset.view);return;}
  const b=e.target.closest("[data-action]");
  if(!b)return;
  const a=b.dataset.action;
  if(a==="theme")setTheme();
  else if(a==="export")exportBackup();
  else if(a==="import")document.getElementById("importFile").click();
  else if(a==="print")window.print();
  else if(a==="week"){state.activeWeek=Number(b.dataset.week);saveState();render();}
  else if(a==="open-day"){
    const d=allDays().find(x=>x.id===b.dataset.dayId);
    if(d){state.activeWeek=WEEKS.findIndex(w=>w.days.some(x=>x.id===d.id));state.activeView="schedule";saveState();render();setTimeout(()=>document.getElementById("day-"+d.id)?.scrollIntoView({behavior:"smooth",block:"center"}),50);}
  }
  else if(a==="delete-task")deleteCustomTask(b.dataset.dayId,b.dataset.taskId);
  else if(a==="reset-progress"){
    if(confirm("هل تريد مسح جميع علامات الإنجاز؟ لن تُحذف ملاحظاتك أو مهامك المضافة.")){
      state.done={};saveState();render();showToast("تمت إعادة ضبط علامات الإنجاز");
    }
  }
  else if(a==="timer-toggle")timer.running?pauseTimer():startTimer();
  else if(a==="timer-reset")resetTimer();
  else if(a==="timer-mode")setTimerMode(b.dataset.mode);
  else if(a==="timer-next"){nextTimerMode();startTimer();}
});
document.addEventListener("change",e=>{
  if(e.target.matches("[data-task-toggle]"))toggleTask(e.target.dataset.taskToggle,e.target.checked);
  if(e.target.id==="subjectFilter"){scheduleSubject=e.target.value;renderDaysOnly();}
  if(e.target.id==="importFile"&&e.target.files&&e.target.files[0]){importBackup(e.target.files[0]);e.target.value="";}
  if(e.target.id==="workMinutes"||e.target.id==="breakMinutes")updateTimerSettings();
});
document.addEventListener("input",e=>{
  if(e.target.matches("[data-note]")){
    state.notes[e.target.dataset.note]=e.target.value;saveState();
  }
  if(e.target.id==="scheduleSearch"){scheduleQuery=e.target.value;renderDaysOnly();}
});
document.addEventListener("submit",e=>{
  const form=e.target.closest("[data-add-task-form]");
  if(!form)return;
  e.preventDefault();
  const fd=new FormData(form);
  const title=String(fd.get("title")||"").trim();
  const subject=String(fd.get("subject")||"chem");
  if(title)addCustomTask(form.dataset.addTaskForm,title,subject);
});
document.addEventListener("keydown",e=>{
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){
    e.preventDefault();setView("schedule");
    setTimeout(()=>document.getElementById("scheduleSearch")?.focus(),50);
  }
  if(e.key==="Escape"&&timer.running)pauseTimer();
});
window.addEventListener("beforeunload",saveState);

render();
