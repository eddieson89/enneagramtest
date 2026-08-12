/* Supabase 연결 설정 */
const SUPABASE_URL = "https://lsftlsdwxsrfhkhcchpl.supabase.co";
const SUPABASE_KEY = "sb_publishable_0jXGNPAXgNCw2UhvR2mf9A_T7KJ3znH";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const TYPES = {
  1:{ name:"개혁가", alt:"원칙주의자", hex:"var(--t1)", raw:"#5C7D62", center:"gut",
      want:"옳고 온전한 상태", fear:"결함이 있는 존재",
      desc:"원칙과 기준을 중시하며 높은 완성도를 추구합니다.",
      strengths:["세부 사항을 놓치지 않음","명확한 기준과 프로세스 구축"],
      weaknesses:["완벽주의로 인한 속도 지연 가능성","스스로와 동료에 대한 엄격함"],
      assign:"품질 검수, 기준 수립, 최종 점검", quote:"기준이 명확해서 완성도가 높아졌어요.",
      say:["충분히 잘했다는 인정 표하기","기준을 사전에 명확히 제시하기"],
      dont:["모호하게 지시하기","공개적으로 실수를 지적하기"],
      signal:"세부 사항에 과도하게 집착하며 모든 것에 비판적으로 변합니다." },
  2:{ name:"조력가", alt:"헬퍼", hex:"var(--t2)", raw:"#B4636B", center:"heart",
      want:"가치 있게 여겨지는 것", fear:"사랑받지 못하는 존재",
      desc:"타인의 필요를 먼저 알아채고 관계를 매끄럽게 만듭니다.",
      strengths:["동료 지원 및 케어","팀 분위기 및 갈등 조율"],
      weaknesses:["자신의 필요를 쌓아둠","서운함이 쌓여 갑자기 터질 위험"],
      assign:"팀 내부 조율, 온보딩, 회의 진행", quote:"중간에서 챙겨준 덕분에 팀이 잘 돌아갔어요.",
      say:["구체적 행동을 짚어 고마움 표현하기","필요한 것을 먼저 물어봐주기"],
      dont:["도움을 당연하게 받아들이기","배려를 무시하는 언행"],
      signal:"참았던 서운함으로 인해 평소와 달리 강하게 공격적으로 변합니다." },
  3:{ name:"성취자", alt:"Achiever", hex:"var(--t3)", raw:"#B8862F", center:"heart",
      want:"유능하고 가치 있는 존재", fear:"무가치해지는 것",
      desc:"목표를 실행으로 빠르게 바꾸고 성과를 창출합니다.",
      strengths:["실행 계획으로의 빠른 전환","팀의 실행 속도 견인"],
      weaknesses:["결과 중심적 사고로 정서 생략","부족함을 감추려는 경향"],
      assign:"일정 관리, 실행 총괄, 마감 책임", quote:"이 일정을 성과로 만든 건 능력 덕분입니다.",
      say:["성과와 능력을 명확히 인정하기","목적과 이유를 함께 공유하기"],
      dont:["공개적으로 부족함 지적하기","성과를 뭉뚱그려 평가하기"],
      signal:"화를 내기보다 반응이 사라지고 무기력하게 속도가 떨어집니다." },
  4:{ name:"예술가", alt:"개인주의자", hex:"var(--t4)", raw:"#6E5A99", center:"heart",
      want:"고유한 정체성 인정", fear:"정체성이 없는 존재",
      desc:"남들과 다른 관점과 깊이 있는 통찰을 제공합니다.",
      strengths:["독창적 관점 및 정서적 문제 포착","컨셉 및 의미 전달 감각"],
      weaknesses:["비교의식으로 인한 감정 기복","반복 업무에 쉽게 소진"],
      assign:"컨셉 설계, 크리틱, 톤앤매너 결정", quote:"관점이 없었다면 이 핵심을 놓쳤을 거예요.",
      say:["고유한 기여점을 짚어주기","생각을 표현할 여유 제공하기"],
      dont:["감정 표현을 비효율로 취급하기","남들과 직접 비교하기"],
      signal:"소외감을 느끼고 침묵하며 자신만의 세계로 물러섭니다." },
  5:{ name:"탐구자", alt:"관찰자", hex:"var(--t5)", raw:"#3F6A8A", center:"head",
      want:"유능하고 자립적인 상태", fear:"압도당하거나 무능해지는 것",
      desc:"충분한 조사와 객관적 분석으로 판단을 뒷받침합니다.",
      strengths:["복잡한 문제의 논리적 구조화","깊이 있는 데이터 검증"],
      weaknesses:["준비 부족 시 발언 미룸","소통을 소홀히 할 위험"],
      assign:"리서치, 기술 검토, 분석", quote:"이 판단 근거 정리 덕분에 확신이 생겼습니다.",
      say:["데이터 전문성을 바탕으로 질문하기","혼자 생각할 시간 제공하기"],
      dont:["즉석에서 의견 발표 강요하기","잦은 알림으로 흐름 끊기"],
      signal:"공유를 끊고 혼자만의 공간으로 깊이 물러납니다." },
  6:{ name:"충실가", alt:"충성가", hex:"var(--t6)", raw:"#35766F", center:"head",
      want:"안전과 확실한 지지", fear:"방향과 지지를 잃는 것",
      desc:"위험 요소를 사전에 점검하고 책임감 있게 행동합니다.",
      strengths:["리스크 사전 파악","높은 책임감과 약속 이행"],
      weaknesses:["불확실한 상황에서의 불안감","최악의 시나리오 집착"],
      assign:"리스크 점검, 규정 검토, 안정적 운영", quote:"위험 요소를 미리 점검해주어 안심이 됩니다.",
      say:["결정의 배경 정보를 공유하기","지속적 지지 표현하기"],
      dont:["사전 설명 없이 계획 변경하기","불확실성을 방치하기"],
      signal:"불안이 높아져 최악의 상황만 언급하며 결정을 미룹니다." },
  7:{ name:"열정가", alt:"낙천가", hex:"var(--t7)", raw:"#C25E2A", center:"head",
      want:"만족과 자유로운 가능성", fear:"고통과 결핍에 갇히는 것",
      desc:"새로운 가능성에 끌리고 팀에 에너지를 제공합니다.",
      strengths:["다양한 아이디어 발산","팀의 분위기 전환"],
      weaknesses:["마무리가 약함","부정적 문제 회피 경향"],
      assign:"아이데이션, 킥오프, 분위기 전환", quote:"제시해준 아이디어 덕분에 새 길이 열렸습니다.",
      say:["아이디어에 즉각 반응해주기","실행 방법에 자율권 주기"],
      dont:["제안하자마자 현실성으로 누르기","미세하게 과정 통제하기"],
      signal:"밝은 모습이 사라지고 냉소적·깐깐하게 비판적으로 돌변합니다." },
  8:{ name:"도전자", alt:"지도자", hex:"var(--t8)", raw:"#9C3F38", center:"gut",
      want:"자기 상황을 직접 통제", fear:"통제당하거나 약해지는 것",
      desc:"직설적 소통과 강한 추진력으로 방향을 제시합니다.",
      strengths:["명확한 방향 제시","어려운 갈등 정면 돌파"],
      weaknesses:["타인의 감정/속도 배려 부족","통제권 상실 시 과도한 부딪힘"],
      assign:"협상, 어려운 의사결정, 위기 대응", quote:"주도적으로 방향을 잡아주어 든든합니다.",
      say:["직설적이고 명확하게 전달하기","주도권과 책임 부여하기"],
      dont:["돌려서 조종하려 하기","강제로 통제하려 들기"],
      signal:"통제권 확보를 위해 매우 강압적인 태도로 돌변합니다." },
  9:{ name:"평화주의자", alt:"중재자", hex:"var(--t9)", raw:"#5C8386", center:"gut",
      want:"마음의 평화와 조화", fear:"갈등과 단절",
      desc:"다양한 입장을 수용하며 안정적 협업 기반이 됩니다.",
      strengths:["다양한 의견 경청 및 수용","갈등 완화"],
      weaknesses:["우선순위 결정 및 결단 미룸","수동적 태도"],
      assign:"중재, 합의 도출, 팀 분위기 관리", quote:"균형을 맞춰주어서 고맙습니다.",
      say:["부담 없이 의견을 낼 환경 마련하기","선택지를 좁혀 질문하기"],
      dont:["결단을 세게 압박하기","의견을 무시하고 지나치기"],
      signal:"수동적 저항을 보이거나 문제 상황에 반응을 끊고 침묵합니다." }
};

const TOTAL_Q = 45;
const QUESTIONS = {
  1:["일을 할 때 \"제대로\" 하는 것이 무엇보다 중요하다고 느낀다.","실수나 허술한 결과물을 보면 그냥 넘어가기 어렵다.","규칙과 기준이 명확할 때 더 안정감을 느낀다.","스스로에게 엄격한 편이라 완벽히 끝내지 못한 일이 계속 마음에 걸린다.","옳고 그름에 대한 기준이 뚜렷해서 타협하기 어려울 때가 있다."],
  2:["동료가 어려움을 겪고 있으면 먼저 나서서 도와주고 싶다.","다른 사람에게 필요한 존재가 되는 것에서 보람을 느낀다.","내 필요보다 상대방의 필요를 먼저 챙기는 편이다.","사람들과의 관계가 좋으면 일도 잘 풀린다고 믿는다.","도움을 줬을 때 상대가 알아주지 않으면 서운함을 느낀다."],
  3:["성과와 결과로 나의 가치를 증명하고 싶다.","목표를 세우면 효율적으로 빠르게 달성하는 데 집중한다.","다른 사람들에게 유능하게 보이는 것이 신경 쓰인다.","바쁘게 여러 일을 동시에 처리하는 것에 익숙하다.","실패하거나 뒤처지는 모습을 보이는 것이 두렵다."],
  4:["남들과 다른 나만의 방식으로 일하고 싶다.","감정의 기복이 크고, 그 감정을 깊이 느끼는 편이다.","평범하고 틀에 박힌 것보다 특별하고 의미 있는 것을 추구한다.","나의 진짜 감정과 생각을 이해받고 싶은 욕구가 크다.","다른 사람과 비교하며 내가 부족하거나 남다르다고 느낄 때가 많다."],
  5:["결정을 내리기 전에 충분히 조사하고 이해하고 싶다.","사람들과 어울리기보다 혼자 생각할 시간이 필요하다.","내 생각과 감정을 남에게 잘 드러내지 않는 편이다.","전문성과 지식을 쌓는 데서 자신감을 얻는다.","에너지를 많이 써야 하는 상황(사교 모임 등)은 부담스럽다."],
  6:["어떤 결정을 하기 전에 위험 요소부터 점검하는 편이다.","믿을 수 있는 사람이나 팀에 소속되어 있을 때 안정감을 느낀다.","최악의 상황을 미리 대비하려는 생각이 자주 든다.","권위나 규칙을 신뢰하면서도 동시에 의심할 때가 있다.","불확실한 상황에서는 불안이나 긴장을 쉽게 느낀다."],
  7:["새롭고 재미있는 아이디어나 경험에 끌린다.","지루하거나 반복적인 일은 견디기 힘들다.","힘들거나 부정적인 감정은 빨리 떨쳐버리고 다른 데 집중하려 한다.","항상 다음에 할 재밌는 일을 생각하며 기대에 부풀어 있다.","한 가지에 얽매이기보다 여러 선택지를 열어두는 것을 좋아한다."],
  8:["상황을 주도하고 직접 컨트롤하는 것이 편하다.","약하거나 통제당하는 느낌을 받는 것이 싫다.","할 말은 직설적으로 하는 편이고, 눈치 보며 돌려 말하지 않는다.","내 사람이나 팀을 지키기 위해서라면 강하게 맞설 수 있다.","갈등이 생겨도 정면으로 부딪혀 해결하는 것을 선호한다."],
  9:["갈등 상황을 피하고 평화로운 분위기를 유지하고 싶다.","내 의견보다 다른 사람의 의견에 맞추는 경우가 많다.","여러 사람의 입장을 두루 이해하고 공감할 수 있다.","우선순위를 정하고 결단을 내리는 것이 어렵게 느껴질 때가 있다.","큰 스트레스가 없으면 웬만한 일은 그냥 넘어가는 편이다."]
};

let ME = { name:"", team:"" };
let answers = {};

function typeLabel(n){ const t=TYPES[n]; return t.alt? `${t.name}(${t.alt})` : t.name; }

function showView(id){
  ['start-view','survey-view','result-view','team-view','playbook-view'].forEach(v=>{
    document.getElementById(v).classList.toggle('hide', v!==id);
  });
  window.scrollTo({top:0, behavior:'smooth'});
}

function buildSurvey(){
  const sectionsEl = document.getElementById('sections');
  sectionsEl.innerHTML = '';
  Object.keys(QUESTIONS).forEach(t=>{
    const set = document.createElement('div');
    set.className = 'qset';
    set.innerHTML = `<div class="qset-type" style="color:${TYPES[t].hex}">SET ${t} / 9 &middot; ${typeLabel(t)}</div>`;
    QUESTIONS[t].forEach((qtext,i)=>{
      const qid = `${t}-${i}`;
      const q = document.createElement('div');
      q.className = 'q';
      q.innerHTML = `<div class="q-text">${qtext}</div>
        <div class="scale">${[1,2,3,4,5].map(v=>`
          <label><input type="radio" name="q-${qid}" value="${v}" data-qid="${qid}">
          <span>${v===1?'전혀아니다':v===5?'매우그렇다':v===3?'보통':''}</span></label>`).join('')}</div>`;
      set.appendChild(q);
    });
    sectionsEl.appendChild(set);
  });
  sectionsEl.querySelectorAll('input[type=radio]').forEach(inp=>inp.addEventListener('change', onAnswer));
}

function onAnswer(e){
  answers[e.target.dataset.qid] = parseInt(e.target.value);
  const count = Object.keys(answers).length;
  document.getElementById('progress-fill').style.width = (count/TOTAL_Q*100)+'%';
  document.getElementById('progress-text').textContent = `${count} / ${TOTAL_Q} 응답`;
  document.getElementById('submit-btn').disabled = count < TOTAL_Q;
}

function computeScores(){
  const scores = {};
  Object.keys(QUESTIONS).forEach(t=>{
    let sum=0; QUESTIONS[t].forEach((_,i)=> sum += (answers[`${t}-${i}`]||0));
    scores[t]=sum;
  });
  return scores;
}

async function saveResultToSupabase(scores){
  const ranked = Object.keys(scores).sort((a,b)=>scores[b]-scores[a]);
  const top = parseInt(ranked[0]);
  const second = parseInt(ranked[1]);

  await supabase.from('member_results').upsert([
    { team: ME.team, name: ME.name, top, second, scores }
  ], { onConflict: 'team,name' });

  return { top, second, ranked };
}

async function renderTeamView(){
  document.getElementById('team-code-label').textContent = '· ' + ME.team;
  const { data: members, error } = await supabase
    .from('member_results')
    .select('*')
    .eq('team', ME.team);

  if (error) {
    console.error("데이터 조회 실패:", error);
  }

  const listEl = document.getElementById('roster-list');
  const emptyEl = document.getElementById('roster-empty');
  listEl.innerHTML = '';
  
  if(!members || members.length === 0){
    emptyEl.classList.remove('hide');
    document.getElementById('generate-btn').disabled = true;
    return;
  }

  emptyEl.classList.add('hide');
  members.forEach(m=>{
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.innerHTML = `<b style="color:${TYPES[m.top].hex}">${m.top}</b> ${m.name} <span style="color:var(--ink-faint)">${typeLabel(m.top)}</span>`;
    listEl.appendChild(chip);
  });

  document.getElementById('generate-btn').disabled = members.length < 2;
  window._teamMembers = members;
}

function generatePlaybookData(members){
  const counts = {heart:[],head:[],gut:[]};
  members.forEach(m=> counts[TYPES[m.top].center].push(m.name));

  const findings = [];
  if(counts.heart.length >= members.length * 0.5){
    findings.push({title:"인정과 유대감이 업무 성과를 움직이는 팀", body:"팀의 다수가 가슴(감정) 중심입니다. 칭찬과 인정을 통한 동기부여가 높지만 지적에 상처받을 수 있습니다."});
  } else if(counts.head.length >= members.length * 0.5){
    findings.push({title:"분석과 확실성이 중요한 머리 중심의 팀", body:"논리와 확실한 정보가 구축될 때 빠르게 움직이는 팀입니다."});
  } else {
    findings.push({title:"추진력과 조화가 강점인 팀", body:"목표 달성을 향한 속도감과 조화로운 실행력을 갖춘 팀입니다."});
  }

  if(counts.gut.length === 0){
    findings.push({title:"결단할 인원의 부재", body:"장 중심이 없어 대립 상황에서 결론을 잘라내는 추진력이 부족할 수 있습니다."});
  }

  const rules = [
    {title:"칭찬은 공개적으로, 지적은 1:1로", body:"업무 피드백은 인격 지적으로 느껴지지 않도록 대면 1:1 공간에서 진행합니다."},
    {title:"안건마다 최종 결정자 지정하기", body:"논의가 길어질 때 최종 결론을 도출해 줄 사람을 회의 시작 전 정해둡니다."},
    {title:"완료 합격선 사전에 맞추기", body:"업무 시작 시 '어디까지 되면 완성인지' 한 문장으로 합의합니다."}
  ];

  const pairs = [];
  for(let i=0; i<members.length; i++){
    for(let j=i+1; j<members.length; j++){
      const m1 = members[i], m2 = members[j];
      pairs.push({
        a: m1.name, b: m2.name,
        tag: "good", label: "협업 시너지",
        desc: `${m1.name}(${m1.top}번)과 ${m2.name}(${m2.top}번)의 만남입니다. 역할 범위를 나누면 시너지가 발생합니다.`,
        rule: "시작 전 업무 범위를 명확히 하고 정기 공유 단계를 두세요."
      });
    }
  }

  return { title:`${ME.team} 팀 협업 플레이북`, members, findings, rules, pairs };
}

function renderPlaybook(pb){
  document.getElementById('pb-title').textContent = pb.title;
  document.getElementById('pb-roster').innerHTML = pb.members.map(m=>
    `<div class="chip"><b style="color:${TYPES[m.top].hex}">${m.top}</b> ${m.name}</div>`
  ).join('');

  document.getElementById('pb-findings').innerHTML = pb.findings.map((f,i)=>
    `<div class="finding"><h3>${i+1}. ${f.title}</h3><p>${f.body}</p></div>`).join('');

  document.getElementById('pb-people').innerHTML = pb.members.map(m=>{
    const p = TYPES[m.top];
    return `<article class="person">
      <div class="person-head"><div class="badge" style="background:${p.raw}">${m.top}</div><div><h3>${m.name} · ${typeLabel(m.top)}</h3></div></div>
      <div class="person-body">
        <div class="pane"><h4>강점</h4><ul>${p.strengths.map(s=>`<li>${s}</li>`).join('')}</ul></div>
        <div class="pane"><h4>이렇게 말해주세요</h4><p class="quote">"${p.quote}"</p></div>
      </div>
    </article>`;
  }).join('');

  document.getElementById('pb-pairs').innerHTML = pb.pairs.map(p=>
    `<div class="pair good"><span class="tag">${p.label}</span><h3>${p.a} × ${p.b}</h3><p>${p.desc}</p><p class="fix"><b>규칙</b> — ${p.rule}</p></div>`
  ).join('');

  document.getElementById('pb-rules').innerHTML = pb.rules.map(r=>
    `<div class="rule-item"><h3>${r.title}</h3><p>${r.body}</p></div>`
  ).join('');
}

/* Event Handlers */
document.getElementById('start-btn').addEventListener('click', ()=>{
  const name = document.getElementById('in-name').value.trim();
  const team = document.getElementById('in-team').value.trim();
  if(!name || !team){ alert('이름과 팀 코드를 입력하세요.'); return; }
  ME = { name, team };
  buildSurvey();
  showView('survey-view');
});

document.getElementById('goto-team-btn').addEventListener('click', async ()=>{
  const team = document.getElementById('in-team').value.trim();
  if(!team){ alert('팀 코드를 입력하세요.'); return; }
  ME = { name:'', team };
  await renderTeamView();
  showView('team-view');
});

document.getElementById('submit-btn').addEventListener('click', async ()=>{
  const scores = computeScores();
  const res = await saveResultToSupabase(scores);
  
  document.getElementById('result-hero').innerHTML = `
    <div class="num" style="color:${TYPES[res.top].hex}">${res.top}</div>
    <div class="name">${typeLabel(res.top)}</div>
    <p class="desc">${TYPES[res.top].desc}</p>`;
  showView('result-view');
});

document.getElementById('to-team-btn').addEventListener('click', async ()=>{
  await renderTeamView();
  showView('team-view');
});

document.getElementById('refresh-roster-btn').addEventListener('click', renderTeamView);

document.getElementById('generate-btn').addEventListener('click', ()=>{
  const pb = generatePlaybookData(window._teamMembers);
  renderPlaybook(pb);
  showView('playbook-view');
});

document.getElementById('back-to-team-btn').addEventListener('click', ()=>{
  showView('team-view');
});