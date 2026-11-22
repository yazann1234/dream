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
const SESSION_THEMES = {
  green:{name:"وطني",accent:"#13a56b",soft:"#e8fff3",dark:"#075c3b",decor:"🌴 💚 ⚔️"},
  love:{name:"حب",accent:"#e93b61",soft:"#fff0f3",dark:"#8f1634",decor:"💗 🌷 💗"},
  coffee:{name:"قهوة",accent:"#a86b3d",soft:"#fff4e9",dark:"#57341f",decor:"🤎 📚 ☕"},
  sky:{name:"سماء",accent:"#27a9df",soft:"#eaf8ff",dark:"#07527b",decor:"💙 🕊️ ☁️"},
  rose:{name:"ورد",accent:"#b33ce0",soft:"#fbecff",dark:"#68208a",decor:"💜 🦋 🌸"},
  night:{name:"ليلي",accent:"#4434bb",soft:"#efedff",dark:"#17145f",decor:"✨ ⭐ 🌙"}
};
const DEFAULT_SESSION_PLAN = {title:"جدول اليوم",count:5,minutes:90,breakMinutes:10,startTime:"23:50",focusTask:"مذاكرة الكيمياء",theme:"green",quote:"اللي يزرع اليوم تعب، يحصد بكرة فرح 🌱"};
const DEFAULT_STATE = {
  done:{}, custom:{}, notes:{}, theme:"light", activeView:"home", activeWeek:0,
  focusSessions:0, focusMinutes:0, focusWork:25, focusBreak:5, userName:"", focusTask:"",
  sessionPlan:{...DEFAULT_SESSION_PLAN}, sessionRun:{active:false,index:0,phase:"work",completed:0}, petHistory:[]
};
let state = loadState();
let scheduleQuery = "", scheduleSubject = "all";
const initialTimerMode = state.sessionRun?.active ? (state.sessionRun.phase||"work") : "work";
const initialTimerMinutes = state.sessionRun?.active
  ? (initialTimerMode==="break" ? (state.sessionPlan.breakMinutes||0) : (state.sessionPlan.minutes||90))
  : (state.focusWork||25);
let timer = {mode:initialTimerMode, duration:initialTimerMinutes*60, remaining:initialTimerMinutes*60, running:false, endAt:0, interval:null};
let toastTimer = null;

function loadState(){
  try{
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    return {
      ...DEFAULT_STATE, ...(saved || {}),
      done:(saved && saved.done)||{}, custom:(saved && saved.custom)||{}, notes:(saved && saved.notes)||{},
      sessionPlan:{...DEFAULT_SESSION_PLAN,...((saved && saved.sessionPlan)||{})},
      sessionRun:{...DEFAULT_STATE.sessionRun,...((saved && saved.sessionRun)||{})},
      petHistory:(saved && saved.petHistory)||[]
    };
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
    ${pageHead("مساحة إنجازك",state.userName?`أهلًا يا ${escapeHTML(state.userName)}`:"أهلًا بك في مسارك للفاينل","تابع تقدمك اليومي، وخلّ كل خطوة تقرّبك من هدفك.",`<button class="btn primary" data-view="schedule">افتح الجدول <span>←</span></button>`)}
    <section class="profile-strip">
      <form class="profile-form" data-name-form>
        <label for="studentName">وش تحب أناديك؟</label>
        <input id="studentName" name="userName" maxlength="24" value="${escapeHTML(state.userName||"")}" placeholder="اكتب اسمك هنا...">
        <button class="btn primary" type="submit">حفظ الاسم</button>
      </form>
      <span class="profile-note">رفيقك الدراسي بيناديك باسمك ويشجعك أثناء المذاكرة.</span>
    </section>
    <section class="hero">
      <div class="hero-copy">
        <div class="hero-kicker">خطة الاستعداد للفاينل · 22 نوفمبر — 19 ديسمبر 2026</div>
        <h2>${state.userName?`يا ${escapeHTML(state.userName)}، كل يوم تنجز فيه،`:"كل يوم تنجز فيه،"}<br>تقترب أكثر من هدفك.</h2>
        <p>جدولك كامل في مكان واحد. علّم على المهام بعد إنجازها، وتابع تقدمك بدون ما تضيع بين المواد.</p>
        <div class="hero-meta"><span class="hero-chip">📅 ${week.title}</span><span class="hero-chip">🎯 ${s.left} مهمة متبقية</span><span class="hero-chip">⚡ ${state.focusSessions} جلسة تركيز</span></div>
      </div>
      ${ring(s.pct)}
    </section>
    <section class="session-home-card">
      <div><span class="eyebrow">جلساتك القادمة</span><h3>${escapeHTML(state.sessionPlan.title||"جدول اليوم")}</h3><p>${state.sessionPlan.count} جلسات · ${formatFocusHours(state.sessionPlan.count*state.sessionPlan.minutes)}h تركيز · ${state.sessionPlan.breakMinutes} دقيقة بريك</p></div>
      <button class="btn primary" data-view="focus">إعداد جلسات اليوم ←</button>
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

function buildSessionItems(plan=state.sessionPlan){
  const count=Math.max(1,Math.min(16,Number(plan.count)||1));
  const minutes=Math.max(5,Math.min(240,Number(plan.minutes)||90));
  const breakMinutes=Math.max(0,Math.min(90,Number(plan.breakMinutes)||0));
  const [hh,mm]=String(plan.startTime||"23:50").split(":").map(Number);
  let cursor=((Number.isFinite(hh)?hh:23)*60+(Number.isFinite(mm)?mm:50));
  const items=[];
  for(let i=0;i<count;i++){
    const start=cursor,end=start+minutes;
    items.push({number:i+1,start,end,minutes,breakMinutes:i<count-1?breakMinutes:0,breakStart:end,breakEnd:end+breakMinutes});
    cursor=end+(i<count-1?breakMinutes:0);
  }
  return items;
}
function formatClock(totalMinutes){
  const n=((Math.floor(totalMinutes)%1440)+1440)%1440;
  const h=Math.floor(n/60),m=n%60,suffix=h>=12?"PM":"AM",h12=h%12||12;
  return `${String(h12).padStart(2,"0")}:${String(m).padStart(2,"0")} ${suffix}`;
}
function formatFocusHours(totalMinutes){
  const h=totalMinutes/60;
  return Number.isInteger(h)?String(h):h.toFixed(1);
}
function formatDuration(minutes){
  const h=Math.floor(minutes/60),m=minutes%60;
  if(h&&m)return `${h} ساعة و ${m} دقيقة`;
  if(h)return `${h} ${h===1?"ساعة":"ساعات"}`;
  return `${m} دقيقة`;
}
function renderSessionBuilder(){
  const p=state.sessionPlan||DEFAULT_SESSION_PLAN;
  const theme=SESSION_THEMES[p.theme]||SESSION_THEMES.green;
  const sessions=buildSessionItems(p);
  const totalFocus=sessions.reduce((sum,x)=>sum+x.minutes,0);
  const finish=sessions[sessions.length-1].end;
  const totalBreak=(sessions.length-1)*p.breakMinutes;
  const active=state.sessionRun?.active;
  const petTask=p.focusTask||state.focusTask||"مهمة التركيز";
  const taskOptions=[...new Map(allTasks().map(t=>[t.title,t])).values()].slice(0,80);
  return `
    <section class="session-builder panel" style="--session-accent:${theme.accent};--session-soft:${theme.soft};--session-dark:${theme.dark}">
      <div class="session-builder-head">
        <div><span class="eyebrow">صمّم وقتك بطريقتك</span><h2 class="panel-title">إعداد جدول الجلسات</h2><p class="panel-sub">حدد عدد الجلسات ومدتها والبريكات، وشاهد جدولك يتكوّن مباشرة بعد الحفظ.</p></div>
        <span class="session-builder-icon">◷</span>
      </div>
      <form class="session-form" data-session-form>
        <label class="session-field session-field-wide"><span>عنوان الجدول</span><input name="title" maxlength="42" value="${escapeHTML(p.title)}" placeholder="مثال: جدول اليوم"></label>
        <label class="session-field"><span>كم جلسة؟</span><input name="count" type="number" min="1" max="16" value="${p.count}" required></label>
        <label class="session-field"><span>مدة كل جلسة (دقيقة)</span><input name="minutes" type="number" min="5" max="240" step="5" value="${p.minutes}" required></label>
        <label class="session-field"><span>البريك بين الجلسات (دقيقة)</span><input name="breakMinutes" type="number" min="0" max="90" value="${p.breakMinutes}" required></label>
        <label class="session-field"><span>وقت البداية</span><input name="startTime" type="time" value="${escapeHTML(p.startTime)}" required></label>
        <label class="session-field session-field-wide"><span>مهمة التركيز</span><input name="focusTask" list="focusTaskSuggestions" maxlength="100" value="${escapeHTML(p.focusTask||"")}" placeholder="مثال: كيمياء Chapter 8 — حل التجميعات"><datalist id="focusTaskSuggestions">${taskOptions.map(t=>`<option value="${escapeHTML(t.title)}"></option>`).join("")}</datalist><small>اكتب مهمة جديدة أو اختر عنوانًا من جدول المذاكرة.</small></label>
        <label class="session-field session-field-wide"><span>عبارة نهاية الجدول</span><input name="quote" maxlength="110" value="${escapeHTML(p.quote||"")}" placeholder="عبارة تحفيزية تظهر في نهاية الجدول"></label>
        <div class="session-field session-field-wide"><span>اختر ثيم الجدول</span><div class="session-theme-grid">${Object.entries(SESSION_THEMES).map(([key,t])=>`<button type="button" class="session-theme-choice ${p.theme===key?"selected":""}" data-session-theme="${key}" style="--theme-accent:${t.accent};--theme-dark:${t.dark}"><b>${t.decor}</b><span>${t.name}</span></button>`).join("")}</div></div>
        <div class="session-form-footer"><div class="session-quick-summary"><b>${sessions.length} جلسات</b><span>${formatFocusHours(totalFocus)}h تركيز</span><span>${formatDuration(totalBreak)} بريكات</span><span>النهاية ${formatClock(finish)}</span></div><button class="btn primary" type="submit">تحديث الجدول <span>↻</span></button></div>
      </form>
      <div class="session-preview-wrap">
        <div class="session-preview-label"><span>معاينة</span><small>شكل الجدول الذي يمكنك نسخه ومشاركته</small></div>
        <div class="session-preview" style="--session-accent:${theme.accent};--session-soft:${theme.soft};--session-dark:${theme.dark}">
          <header class="session-preview-header">
            <div class="session-preview-kicker">𝐓𝐨𝐝𝐚𝐲’𝐬 𝐒𝐜𝐡𝐞𝐝𝐮𝐥𝐞 🇸🇦</div>
            <h3>${escapeHTML(p.title||"جدول اليوم")}</h3>
            <div class="session-total">💚 𝐓𝐨𝐭𝐚𝐥 𝐅𝐨𝐜𝐮𝐬 𝐓𝐢𝐦𝐞: ${formatFocusHours(totalFocus)}h <span>· ${sessions.length} جلسات</span></div>
            <div class="session-decor">${theme.decor}</div>
          </header>
          <div class="session-preview-body">
            <div class="session-task-banner"><span>🎯 مهمة التركيز</span><b>${escapeHTML(petTask)}</b></div>
            <div class="session-divider">〰️〰️〰️〰️〰️〰️</div>
            <div class="session-items">${sessions.map((item,i)=>`
              <article class="session-item ${active&&state.sessionRun.index===i?"current":""} ${state.sessionRun?.completed>i?"completed":""}">
                <div class="session-item-head"><strong>⊹ ࣪ ˖ 𝐒𝐞𝐬𝐬𝐢𝐨𝐧 ${item.number} ⊹ ࣪ ˖</strong><span>${formatClock(item.start)} – ${formatClock(item.end)}</span></div>
                <div class="session-item-duration">${item.minutes} min ${state.sessionRun?.completed>i?"· مكتملة":active&&state.sessionRun.index===i?"· الحالية":""}</div>
                ${item.breakMinutes?`<div class="session-break">💚 𝐁𝐫𝐞𝐚𝐤: ${item.breakMinutes} min</div>`:""}
              </article>`).join("")}</div>
            <div class="session-divider">〰️〰️〰️〰️〰️〰️</div>
            <blockquote class="session-quote">“${escapeHTML(p.quote||"ابدأ الآن، وستشكر نفسك لاحقًا.") }”</blockquote>
            <div class="session-finish">💚 𝐅𝐢𝐧𝐢𝐬𝐡: ${formatClock(finish)} 🇸🇦</div>
          </div>
        </div>
        <div class="session-actions">
          <button class="btn primary" data-action="start-session-plan">${active?"استكمال الجلسات":"ابدأ الجلسات بالترتيب"} ▶</button>
          <button class="btn" data-action="copy-session-plan">نسخ الجدول ⧉</button>
          <button class="btn soft" data-action="random-session-quote">عبارة عشوائية ✨</button>
          ${active?`<button class="btn danger" data-action="cancel-session-plan">إنهاء الخطة</button>`:""}
        </div>
        ${active?`<div class="session-live-status"><span class="live-dot"></span> ${state.sessionRun.phase==="work"?`أنت في الجلسة ${state.sessionRun.index+1} من ${p.count}`:"وقت البريك بين الجلسات"} · ${escapeHTML(petTask)}</div>`:""}
      </div>
    </section>`;
}
function renderFocus(){
  const pct=timer.duration?Math.max(0,Math.min(100,(1-timer.remaining/timer.duration)*100)):0;
  const circumference=2*Math.PI*112;
  const offset=circumference-(circumference*pct/100);
  const min=String(Math.floor(timer.remaining/60)).padStart(2,"0");
  const sec=String(timer.remaining%60).padStart(2,"0");
  const modeName=timer.mode==="work"?"وقت التركيز":"وقت الاستراحة";
  const scheduled=!!state.sessionRun?.active;
  const currentSession=state.sessionRun?.index||0;
  return `
    ${pageHead("مساحة التركيز","جلساتك ومؤقتك","خطط جلساتك بالتفصيل، ثم ابدأ المؤقت ودع الموقع ينقلك تلقائيًا بين التركيز والبريك.")}
    ${renderSessionBuilder()}
    <div class="focus-layout focus-layout-enhanced">
      <section class="panel focus-card">
        <div class="panel-head"><div><h3 class="panel-title">${scheduled?`الجلسة ${currentSession+1} من ${state.sessionPlan.count}`:"مؤقت التركيز"}</h3><p class="panel-sub">${scheduled?`المهمة: ${escapeHTML(state.sessionPlan.focusTask||"مهمة التركيز")}`:"جلسة حرة أو جلسة من جدولك"}</p></div><span class="focus-live-badge">${scheduled?"خطة نشطة":"جاهز"}</span></div>
        <div class="timer-modes"><button data-action="timer-mode" data-mode="work" class="${timer.mode==="work"?"active":""}" ${scheduled?"disabled":""}>تركيز</button><button data-action="timer-mode" data-mode="break" class="${timer.mode==="break"?"active":""}" ${scheduled?"disabled":""}>استراحة</button></div>
        <div class="timer-ring"><svg viewBox="0 0 240 240"><circle class="track" cx="120" cy="120" r="112"></circle><circle class="progress" id="timerProgress" cx="120" cy="120" r="112" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"></circle></svg><div class="timer-center"><div class="timer-time" id="timerValue">${min}:${sec}</div><div class="timer-caption" id="timerCaption">${modeName}</div></div></div>
        <div class="timer-controls">
          <button class="btn primary" id="timerToggle" data-action="timer-toggle">${timer.running?"إيقاف مؤقت":(scheduled?"استكمال الجلسة":"ابدأ التركيز")} ${timer.running?"Ⅱ":"▶"}</button>
          <button class="btn" data-action="timer-reset">↺ إعادة</button>
          ${timer.remaining===0&&!scheduled?`<button class="btn soft" data-action="timer-next">${timer.mode==="work"?"ابدأ الاستراحة":"ابدأ جلسة جديدة"}</button>`:""}
          ${scheduled?`<button class="btn danger" data-action="cancel-session-plan">إنهاء الخطة</button>`:""}
        </div>
        ${!scheduled?`<div class="timer-settings"><label>مدة التركيز بالدقائق<input id="workMinutes" type="number" min="5" max="180" value="${state.focusWork||25}" ${timer.running?"disabled":""}></label><label>مدة الاستراحة بالدقائق<input id="breakMinutes" type="number" min="1" max="60" value="${state.focusBreak||5}" ${timer.running?"disabled":""}></label></div>`:`<div class="session-timer-note">${timer.mode==="work"?`ركز على المهمة الحالية، وبعدها يبدأ البريك تلقائيًا.`:"خذ استراحتك، وستبدأ الجلسة التالية تلقائيًا."}</div>`}
      </section>
      <section class="panel">
        <div class="panel-head"><div><h3 class="panel-title">رفيقك نبيه 🦉</h3><p class="panel-sub">موجود معك خطوة بخطوة</p></div></div>
        <div class="focus-companion-card"><img src="assets/owl-studying.png" alt="نبيه البومة يذاكر"/><div><b>${state.userName?`شد حيلك يا ${escapeHTML(state.userName)}!`:"خلّنا نبدأ بهدوء"}</b><p>جلسة واحدة بتركيز حقيقي أفضل من ساعات طويلة مع التشتت. نبيه بيحتفل معك بكل إنجاز.</p></div></div>
        <div class="focus-tips">
          <div class="tip-row"><span class="tip-icon">①</span><div><b>حدد مهمة واحدة</b><p>اختر Chapter أو جزءًا محددًا بدل فتح عدة مواد معًا.</p></div></div>
          <div class="tip-row"><span class="tip-icon">②</span><div><b>أبعد المشتتات</b><p>ضع الجوال على الصامت وأغلق الصفحات غير الضرورية.</p></div></div>
          <div class="tip-row"><span class="tip-icon">③</span><div><b>اختبر نفسك</b><p>في نهاية الجلسة، حاول استرجاع أهم النقاط دون النظر للملخص.</p></div></div>
          <div class="tip-row"><span class="tip-icon">④</span><div><b>استرح بوعي</b><p>تحرك واشرب الماء، وحاول ألا تتحول الاستراحة إلى تصفح طويل.</p></div></div>
        </div>
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
  if(checked)setPetMood("happy",`أحسنت${state.userName?` يا ${state.userName}`:""}! كل مهمة تخلصها تقرّبك من هدفك ✨`);
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
  setPetMood("encouraging","مهمة جديدة! نقدر ننجزها سوا 💚");
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
function configureScheduledTimer(mode){
  timer.mode=mode;
  const mins=mode==="work"?Number(state.sessionPlan.minutes)||90:Number(state.sessionPlan.breakMinutes)||0;
  timer.duration=mins*60;
  timer.remaining=timer.duration;
}
function finishScheduledPhase(){
  const run=state.sessionRun,plan=state.sessionPlan;
  if(!run?.active)return false;
  if(run.phase==="work"){
    state.focusSessions+=1;
    state.focusMinutes+=Number(plan.minutes)||90;
    run.completed=(run.completed||0)+1;
    if(run.index>=plan.count-1){
      run.active=false;saveState();showToast(`خلصت كل جلساتك${state.userName?` يا ${state.userName}`:""}! فخورين فيك 💚`);setPetMood("celebrating","يا سلام! أنهيت جدول الجلسات كاملًا 🎉");render();return true;
    }
    if(Number(plan.breakMinutes)>0){
      run.phase="break";configureScheduledTimer("break");saveState();showToast("انتهت الجلسة! بدأ وقت البريك 🌿");setPetMood("happy","خذ بريك، تستاهل. اشرب موية وتحرك شوي.");startTimer();return true;
    }
    run.index+=1;run.phase="work";configureScheduledTimer("work");saveState();showToast("جلسة مكتملة! نبدأ اللي بعدها 💪");setPetMood("studying","يلا على الجلسة التالية، أنت قدها!");startTimer();return true;
  }
  run.index+=1;run.phase="work";configureScheduledTimer("work");saveState();showToast(`انتهى البريك. الجلسة ${run.index+1} تبدأ الآن 💚`);setPetMood("studying","رجعنا للتركيز! افتح مهمتك ونكمل.");startTimer();return true;
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
    if(finishScheduledPhase())return;
    if(timer.mode==="work"){
      state.focusSessions+=1;state.focusMinutes+=Math.round(timer.duration/60);saveState();
      showToast("أحسنت! انتهت جلسة التركيز، خذ استراحة قصيرة 🌿");setPetMood("happy","جلسة رائعة! خذ نفسًا عميقًا قبل أن تكمل.");
    }else {showToast("انتهت الاستراحة، جاهز لجلسة جديدة؟");setPetMood("encouraging","يلا نرجع، باقي لك الكثير من الإنجاز!");}
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

const PET_POSES={idle:"idle",happy:"happy",excited:"excited",sleepy:"sleepy",studying:"studying",celebrating:"celebrating",thinking:"thinking",encouraging:"encouraging",graduate:"graduate"};
let petMoodTimer=null,petBubbleTimer=null;
function setPetMood(mood="idle",message="",duration=4200){
  const image=document.getElementById("companionImage"),button=document.getElementById("companionButton"),bubble=document.getElementById("companionBubble");
  if(!image||!button||!bubble)return;
  const pose=PET_POSES[mood]?mood:"idle";
  image.src=`assets/owl-${pose}.png`;button.dataset.mood=pose;
  if(message){bubble.textContent=message;bubble.classList.add("visible");clearTimeout(petBubbleTimer);petBubbleTimer=setTimeout(()=>bubble.classList.remove("visible"),duration);}
  clearTimeout(petMoodTimer);
  if(pose!=="idle"&&pose!=="studying")petMoodTimer=setTimeout(()=>{image.src="assets/owl-idle.png";button.dataset.mood="idle";},duration);
}
function startSessionPlan(){
  if(timer.running){showToast("المؤقت يعمل بالفعل 💚");return;}
  if(!state.sessionRun?.active){state.sessionRun={active:true,index:0,phase:"work",completed:0};configureScheduledTimer("work");}
  else if(timer.remaining<=0){configureScheduledTimer(state.sessionRun.phase||"work");}
  state.activeView="focus";saveState();render();setPetMood("studying",`يلا ${state.userName?`يا ${state.userName}، `:""}نبدأ ${state.sessionRun.phase==="break"?"البريك":"جلسة التركيز"}. أنا معك!`);
  startTimer();
}
function cancelSessionPlan(){
  if(timer.running)pauseTimer();
  state.sessionRun={active:false,index:0,phase:"work",completed:0};
  saveState();render();showToast("تم إنهاء خطة الجلسات");setPetMood("encouraging","خذها خطوة خطوة، وتقدر تبدأ من جديد متى ما حبيت.");
}
function sessionPlanText(){
  const p=state.sessionPlan,items=buildSessionItems(p),theme=SESSION_THEMES[p.theme]||SESSION_THEMES.green;
  const total=items.reduce((a,x)=>a+x.minutes,0),finish=items[items.length-1].end;
  const lines=[`𝐓𝐨𝐝𝐚𝐲’𝐬 𝐒𝐜𝐡𝐞𝐝𝐮𝐥𝐞 🇸🇦`,p.title||"جدول اليوم",`💚 𝐓𝐨𝐭𝐚𝐥 𝐅𝐨𝐜𝐮𝐬 𝐓𝐢𝐦𝐞: ${formatFocusHours(total)}h`,`- ${theme.decor}`,"〰️〰️〰️〰️〰️〰️",`🎯 ${p.focusTask||"مهمة التركيز"}`,""];
  items.forEach((x,i)=>{
    lines.push(`⊹ ࣪ ˖ 𝐒𝐞𝐬𝐬𝐢𝐨𝐧 ${x.number} ⊹ ࣪ ˖ ${formatClock(x.start)} – ${formatClock(x.end)} (${x.minutes} min)`);
    if(x.breakMinutes)lines.push(`💚 𝐁𝐫𝐞𝐚𝐤: ${x.breakMinutes} min`);
    lines.push("");
  });
  lines.push("〰️〰️〰️〰️〰️〰️",`“${p.quote||"ابدأ الآن وستشكر نفسك لاحقًا."}”`,`💚𝐅𝐢𝐧𝐢𝐬𝐡: ${formatClock(finish)} 🇸🇦`);
  return lines.join("\n");
}
async function copySessionPlan(){
  const text=sessionPlanText();
  try{await navigator.clipboard.writeText(text);showToast("تم نسخ جدول الجلسات 📋");}
  catch(e){const area=document.createElement("textarea");area.value=text;document.body.appendChild(area);area.select();try{document.execCommand("copy");showToast("تم نسخ جدول الجلسات 📋");}catch(err){showToast("تعذر النسخ من المتصفح");}area.remove();}
}
const PET_QUOTES=["اللي يزرع اليوم تعب، يحصد بكرة فرح 🌱","كل جلسة تخلصها تقربك من حلمك 💚","لا تستعجل النتيجة، استمتع بتقدمك خطوة خطوة.","أنت أقوى من التسويف، ابدأ بعشر دقائق فقط.","بكرة بتفتخر إنك ما استسلمت اليوم."];
function companionReply(prompt){
  const name=state.userName?` يا ${escapeHTML(state.userName)}`:"";
  const text=String(prompt||"").toLowerCase();
  const today=findToday(),tasks=dayTasks(today),pending=tasks.filter(t=>!isDone(t.id));
  if(/اليوم|مهام|وش عندي/.test(text))return pending.length?`عندك اليوم ${pending.length} مهام${name}. أول مهمة: <b>${escapeHTML(pending[0].title)}</b>. نبدأ فيها سوا؟`:`ما شاء الله! خلصت مهام اليوم${name}. خذ لك بريك تستاهله 🏆`;
  if(/تقدم|انجز|إنجاز|مستوى|احص/.test(text)){const s=stats();return `أنجزت ${s.done} من ${s.total} مهمة، يعني ${s.pct}% من الخطة${name}. استمر، كل علامة صح لها قيمة!`}
  if(/جلس|بريك|تركيز|مؤقت/.test(text)){const p=state.sessionPlan;return `جدولك الحالي فيه ${p.count} جلسات، كل جلسة ${p.minutes} دقيقة، والبريك ${p.breakMinutes} دقيقة. إجمالي التركيز ${formatFocusHours(p.count*p.minutes)} ساعة. تقدر تعدله من صفحة جلسات التركيز.`}
  if(/تعب|طفش|متوتر|قلق|مالي خلق/.test(text))return `أفهمك${name} 🤍 لا تفكر في كل الجدول الآن. خذ نفس، اشرب موية، وابدأ بخمس دقائق فقط. أنا أشجعك!`;
  if(/حفز|شجع|تحفيز/.test(text))return `${PET_QUOTES[Math.floor(Math.random()*PET_QUOTES.length)]}${name} 💚`;
  if(/نوم|نعسان|سهر/.test(text))return `الراحة جزء من الخطة${name}. إذا أنت مرهق، خذ راحة مناسبة ثم ارجع بتركيز أفضل.`;
  return `أنا نبيه، رفيقك الدراسي 🦉 أقدر أقول لك مهام اليوم، أتابع إنجازك، وأساعدك ترتب جلساتك. جرب تسألني: «وش عندي اليوم؟» أو «كيف تقدمي؟»`;
}
function renderPetMessages(){
  const box=document.getElementById("companionMessages");if(!box)return;
  box.innerHTML=(state.petHistory||[]).slice(-30).map(m=>`<div class="pet-message ${m.me?"me":"bot"}">${escapeHTML(m.text)}</div>`).join("");box.scrollTop=box.scrollHeight;
}
function sendPetMessage(message){
  const text=String(message||"").trim();if(!text)return;
  state.petHistory=state.petHistory||[];state.petHistory.push({me:true,text});
  const reply=companionReply(text);state.petHistory.push({me:false,text:reply.replace(/<[^>]*>/g,"")});
  state.petHistory=state.petHistory.slice(-30);saveState();renderPetMessages();setPetMood("thinking","خلني أفكر...",1200);
  setTimeout(()=>{setPetMood("happy",reply.replace(/<[^>]*>/g,""));renderPetMessages();},450);
}
function openCompanion(){
  const chat=document.getElementById("companionChat");if(!chat)return;
  chat.classList.toggle("open");renderPetMessages();
  if(chat.classList.contains("open")){setPetMood("excited",`هلا${state.userName?` يا ${state.userName}`:""}! وش ننجز اليوم؟`);document.getElementById("companionInput")?.focus();}
}

document.addEventListener("click",e=>{
  const petPrompt=e.target.closest("[data-pet-prompt]");
  if(petPrompt){sendPetMessage(petPrompt.dataset.petPrompt);return;}
  const sessionTheme=e.target.closest("[data-session-theme]");
  if(sessionTheme){
    const form=document.querySelector("[data-session-form]");
    if(form){const fd=new FormData(form);state.sessionPlan={...state.sessionPlan,title:String(fd.get("title")||state.sessionPlan.title),count:Math.max(1,Math.min(16,Number(fd.get("count"))||state.sessionPlan.count)),minutes:Math.max(5,Math.min(240,Number(fd.get("minutes"))||state.sessionPlan.minutes)),breakMinutes:Math.max(0,Math.min(90,Number(fd.get("breakMinutes"))||0)),startTime:String(fd.get("startTime")||state.sessionPlan.startTime),focusTask:String(fd.get("focusTask")||""),quote:String(fd.get("quote")||"")};}
    state.sessionPlan.theme=sessionTheme.dataset.sessionTheme;saveState();render();return;
  }
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
  else if(a==="start-session-plan")startSessionPlan();
  else if(a==="cancel-session-plan")cancelSessionPlan();
  else if(a==="copy-session-plan")copySessionPlan();
  else if(a==="random-session-quote"){
    const form=document.querySelector("[data-session-form]");
    if(form){const fd=new FormData(form);state.sessionPlan={...state.sessionPlan,title:String(fd.get("title")||state.sessionPlan.title),count:Math.max(1,Math.min(16,Number(fd.get("count"))||state.sessionPlan.count)),minutes:Math.max(5,Math.min(240,Number(fd.get("minutes"))||state.sessionPlan.minutes)),breakMinutes:Math.max(0,Math.min(90,Number(fd.get("breakMinutes"))||0)),startTime:String(fd.get("startTime")||state.sessionPlan.startTime),focusTask:String(fd.get("focusTask")||""),quote:String(fd.get("quote")||"")};}
    state.sessionPlan.quote=PET_QUOTES[Math.floor(Math.random()*PET_QUOTES.length)];saveState();render();
  }
  else if(a==="companion-toggle")openCompanion();
  else if(a==="companion-close")document.getElementById("companionChat")?.classList.remove("open");
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
  const nameForm=e.target.closest("[data-name-form]");
  if(nameForm){
    e.preventDefault();const fd=new FormData(nameForm);state.userName=String(fd.get("userName")||"").trim().slice(0,24);saveState();render();
    showToast(state.userName?`تشرفنا يا ${state.userName} 💚`:"تم تحديث الاسم");setPetMood("happy",state.userName?`من اليوم بناديك ${state.userName}! 💚`:"أنا نبيه، جاهز أساعدك!");return;
  }
  const sessionForm=e.target.closest("[data-session-form]");
  if(sessionForm){
    e.preventDefault();const fd=new FormData(sessionForm);
    const count=Math.max(1,Math.min(16,Math.round(Number(fd.get("count"))||1)));
    const minutes=Math.max(5,Math.min(240,Math.round(Number(fd.get("minutes"))||90)));
    const breakMinutes=Math.max(0,Math.min(90,Math.round(Number(fd.get("breakMinutes"))||0)));
    const startTime=String(fd.get("startTime")||"23:50");
    if(state.sessionRun?.active)cancelSessionPlan();
    state.sessionPlan={...state.sessionPlan,title:String(fd.get("title")||"جدول اليوم").trim()||"جدول اليوم",count,minutes,breakMinutes,startTime,focusTask:String(fd.get("focusTask")||"").trim(),quote:String(fd.get("quote")||"").trim(),theme:state.sessionPlan.theme||"green"};
    state.focusTask=state.sessionPlan.focusTask;saveState();render();showToast("تم تحديث جدول جلساتك 💚");setPetMood("happy","جدولك صار جاهز! خلّنا نبدأ خطوة خطوة.");return;
  }
  const petForm=e.target.closest("[data-pet-form]");
  if(petForm){e.preventDefault();const input=document.getElementById("companionInput");sendPetMessage(input?.value||"");if(input)input.value="";return;}
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

document.getElementById("companionButton")?.addEventListener("click",openCompanion);

render();
setTimeout(()=>setPetMood("idle",state.userName?`هلا ${state.userName}! أنا نبيه، رفيقك الدراسي 🦉`:"أنا نبيه 🦉 اضغط علي وخلّنا نرتب مذاكرتك."),700);
