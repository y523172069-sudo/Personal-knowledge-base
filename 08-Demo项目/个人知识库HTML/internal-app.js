const data = {
  stats: [
    { label: "轮岗阶段", value: 6, note: "从业务接触到产品理解" },
    { label: "重点案例", value: 6, note: "共创、成长、思考三类沉淀" },
    { label: "学习主题", value: 9, note: "客户、需求、协作、AI、表达" },
    { label: "阶段心得", value: 5, note: "从被动接收到主动拆解" }
  ],
  workflow: [
    { title: "3月：进入组织语境", body: "从人力行政和会议部门开始，先理解公司如何识别人才、如何组织会议业务、如何服务客户触达。" },
    { title: "4月：靠近客户获取", body: "在销售轮岗中接触电话线索、海外开发信和客户回复，开始理解客户触达不是写话术，而是判断客户是否真的匹配。" },
    { title: "5月：理解客户维护", body: "在客户成功轮岗中学习不同区域客户维护方式，开始把销售前端、客户维护和会员价值感知连接起来。" },
    { title: "6月：形成产品视角", body: "在产品与设计轮岗中，通过调研、Jira 需求和 AI 产品分析，开始理解需求不是任务本身，而是业务问题的表达。" },
    { title: "持续沉淀：把经历变成方法", body: "每段轮岗后把经历整理成问题意识、共创过程、个人收获和可复用方法，而不是只记录做过什么。" }
  ],
  timeline: [
    {
      period: "2026-03",
      stage: "人力行政与会议部门轮岗",
      focus: "从组织与会议业务两个入口认识公司：一端是岗位与人才筛选，一端是会议产品如何连接客户、内容和服务。",
      outputs: ["参与销售岗位候选材料初筛，理解岗位画像与业务用人标准", "参与会议合同更新维护、线下沙龙、会议宣传 PPT 撰写", "完成会议课题，提出云课堂产品化构想"],
      themes: ["组织理解", "会议业务", "内容复用"],
      thought: "这一阶段最大的收获是意识到：如果没有清晰的任务边界和学习路径，个人很容易只是在执行零散任务。"
    },
    {
      period: "2026-04",
      stage: "销售部门轮岗",
      focus: "从国内销售和海外销售两个视角理解客户触达：前端动作看似是电话和邮件，本质是客户筛选、价值表达和意向判断。",
      outputs: ["国内销售：参与线索电话拨打，理解线索质量与客户需求表达", "海外销售：完成开发模板、发送开发信、跟进意向客户", "参与海外销售 AI 项目落地，观察 AI 如何进入业务流程"],
      themes: ["客户触达", "销售表达", "线索判断"],
      thought: "销售轮岗让我意识到，回复率不等于有效意向，客户沟通的关键不是发出信息，而是识别真正有价值的客户。"
    },
    {
      period: "2026-05",
      stage: "客户成功部门轮岗",
      focus: "学习不同区域的客户维护方式，理解客户成功不是单纯处理问题，而是持续维护客户信任和服务价值感知。",
      outputs: ["学习不同区域客户维护差异", "观察客户成功与销售、产品、风控之间的协作关系", "开始理解客户续费、服务体验和平台信任之间的关系"],
      themes: ["客户维护", "服务体验", "信任建设"],
      thought: "这一阶段帮助我把销售前端和客户后续维护连接起来：客户价值不是成交时结束，而是在持续服务中被反复确认。"
    },
    {
      period: "2026-06",
      stage: "产品与设计部门轮岗",
      focus: "从调研、需求撰写和 AI 产品分析中理解产品工作：产品经理的价值不是接任务，而是把模糊诉求转译成可理解、可讨论、可推进的问题。",
      outputs: ["独立完成小联盟资质认证调研", "参与会员产品升级需求调研和 AI 产品调研", "完成 3 项 Jira 需求撰写，学习风控工单流程", "形成“产品经理如何识别真需求”的课题思考"],
      themes: ["需求转译", "产品调研", "AI 提效"],
      thought: "这一阶段是目前成长感最强的阶段，因为任务边界更清晰，也更能看到自己如何从信息整理走向问题判断。"
    },
    {
      period: "2026-07",
      stage: "研发部门轮岗",
      focus: "下一阶段希望从研发视角理解产品需求如何被拆解、讨论和实现。",
      outputs: ["关注产品需求进入研发后的沟通方式", "学习研发如何理解需求边界、优先级和实现成本", "沉淀产品与研发协作中的表达方式"],
      themes: ["研发协作", "需求边界", "实现成本"],
      thought: "希望把前期产品轮岗中学到的需求表达，放到研发协作场景里继续理解。"
    },
    {
      period: "2026-08",
      stage: "金融产品与增值服务轮岗",
      focus: "下一阶段希望从商业化视角理解金融产品与增值服务如何支撑平台价值。",
      outputs: ["关注金融产品与会员体系、客户信任、成交效率之间的关系", "理解增值服务如何从客户需求变成可交付产品", "沉淀管培轮岗后的岗位选择判断"],
      themes: ["商业化产品", "增值服务", "岗位判断"],
      thought: "这一阶段更适合用来收束前期学习：判断自己更适合会议、产品还是业务支持相关方向。"
    }
  ],
  projectCases: [
    {
      title: "小联盟资质认证调研",
      type: "产品调研 / 规则设计",
      theme: "成长",
      problem: "客户优势认证材料门槛较高，审核分类和证明标准需要更清晰。",
      coCreate: "在产品轮岗任务中承接调研方向，通过课题方法论反推任务核心目的，并与带教同事同步调研框架。",
      growth: "第一次比较完整地从需求理解、资料调研、分类设计到结果交付独立走完一遍。",
      reflection: "这件事让我意识到，调研不是堆资料，而是找到能让客户更省心、让审核更清楚的结构。"
    },
    {
      title: "3 项 Jira 产品优化需求",
      type: "需求撰写 / 项目推进",
      theme: "共创",
      problem: "权益、评价入口和审批通知等小型需求需要转化为研发可理解任务。",
      coCreate: "在 Ada 指导下学习业务背景，把聊天记录、图片说明和流程信息整理成 Jira 需求。",
      growth: "理解到产品经理不是简单传话，而是要把范围、对象、规则和协作边界说清楚。",
      reflection: "小需求也能训练产品基本功：越是看似简单的数字、链接、通知，越需要把上下游影响讲明白。"
    },
    {
      title: "AI 风控官内部使用分析",
      type: "数据分析 / AI 产品调研",
      theme: "思考",
      problem: "内部 AI 工具有使用日志和反馈，但需要识别高价值场景和真实问题。",
      coCreate: "在产品调研任务中配合客成侧需求访谈，使用 AI 工具辅助完成定量整理和问题归类。",
      growth: "开始理解 AI 提效不是替代判断，而是帮助我更快完成整理、分类和初步归纳。",
      reflection: "AI 分析必须和人工校验结合，否则容易把表面高频问题误认为真实需求。"
    },
    {
      title: "会员产品升级需求定性调研",
      type: "用户研究 / B2B 产品",
      theme: "共创",
      problem: "会员权益升级中，哪些需求真正影响客户价值感知仍需判断。",
      coCreate: "通过销售访谈材料理解客户声音，再把分散反馈整理成需求差异和机会点。",
      growth: "学会从销售口径中分辨客户真正关心的是权益、信任、效率还是交易安全。",
      reflection: "商业化产品调研的难点，是把客户说的功能诉求还原成客户愿意为之付费的价值。"
    },
    {
      title: "商学院云课堂方案",
      type: "产品构想 / 会议资源复用",
      theme: "成长",
      problem: "会议和培训内容难以复用，会员价值感知和续费影响需要进一步拆成更小问题。",
      coCreate: "结合会议部门轮岗观察和课题要求，提出把会议资源与课程内容复用的产品构想。",
      growth: "这是早期让我有成就感的方案型任务，训练了我把业务问题转成产品框架的能力。",
      reflection: "后来复盘发现方案偏大，说明产品构想不仅要有方向，也要能被拆成更小的试点。"
    },
    {
      title: "海外销售开发信组合",
      type: "销售支持 / 客户沟通",
      theme: "思考",
      problem: "海外客户开发依赖人工邮件，需要包装客户价值并筛选有效意向。",
      coCreate: "独立完成多场景开发信，并通过主管审核后用于海外客户触达。",
      growth: "学习到 B2B 客户沟通需要同时表达平台价值、降低理解成本，并提出能引出回复的问题。",
      reflection: "发送和回复数据说明触达有效，但有效意向少，也提醒我后续要更重视客户筛选和线索质量。"
    }
  ],
  abilities: [
    {
      name: "需求发现与问题分析",
      level: "能独立完成",
      strength: "强",
      evidence: "小联盟调研、会员产品升级调研、真需求三层判断法。",
      next: "继续沉淀如何从业务诉求中识别真实问题。",
      tags: ["产品", "调研", "方法论"]
    },
    {
      name: "项目推进与任务闭环",
      level: "能独立完成",
      strength: "中强",
      evidence: "Jira 需求撰写、会议课题、小联盟调研。",
      next: "继续观察跨部门协作中如何同步目标、边界和进展。",
      tags: ["项目", "协作", "交付"]
    },
    {
      name: "数据分析与结构化表达",
      level: "能独立完成",
      strength: "中强",
      evidence: "AI 风控官会话量与反馈分析、会员产品访谈编码。",
      next: "补充统计口径和人工校验过程。",
      tags: ["数据", "AI", "分析"]
    },
    {
      name: "客户沟通与业务理解",
      level: "了解",
      strength: "中",
      evidence: "海外销售开发信、会议宣传材料、客户拜访学习。",
      next: "补充客户分层、转化原因和业务判断复盘。",
      tags: ["销售", "客户", "业务"]
    },
    {
      name: "汇报与方案表达",
      level: "能独立完成",
      strength: "中",
      evidence: "商学院云课堂课题、会议 PPT 宣传撰写、产品课题汇报文本。",
      next: "继续训练把大方案拆成小试点的表达能力。",
      tags: ["PPT", "汇报", "方案"]
    },
    {
      name: "AI 工具应用",
      level: "能独立完成",
      strength: "中强",
      evidence: "AI 辅助定量分析、访谈主题提炼、周报校对和流程学习。",
      next: "建立可复用提示词和质量校验记录。",
      tags: ["AI", "效率", "沉淀"]
    }
  ],
  evidence: [
    { id: "E-001", title: "小联盟资质认证调研表", proof: "独立完成调研和分类标准整理，交付调研表。", limit: "适合沉淀为产品调研与分类设计案例。", status: "仅可脱敏摘要", strength: "强" },
    { id: "E-002", title: "3 项 Jira 产品优化需求", proof: "FK-1451、FK-1484 已通过评审进入开发，FK-1490 在需求池。", limit: "适合沉淀为需求转译和协作边界学习案例。", status: "仅可脱敏摘要", strength: "中强" },
    { id: "E-003", title: "AI 风控官使用数据分析", proof: "对 759 条记录进行结构化分析，输出使用、问题和反馈结论。", limit: "内部数据敏感，只能展示脱敏口径。", status: "不得公开", strength: "中强" },
    { id: "E-004", title: "AI 使用反馈调研会议纪要", proof: "记录调研过程和客成侧需求。", limit: "涉及内部人员和产品细节，只能摘要。", status: "不得公开", strength: "中" },
    { id: "E-005", title: "商学院云课堂方案", proof: "独立提出新产品项目，课题排名第 2。", limit: "适合沉淀为方案表达和试点拆解学习案例。", status: "仅可脱敏摘要", strength: "中" },
    { id: "E-006", title: "轮岗任务表", proof: "覆盖入职以来多部门轮岗任务和学习记录。", limit: "部分记录是过程性材料，需要继续提炼。", status: "仅可脱敏摘要", strength: "中" },
    { id: "E-008", title: "会员产品升级需求定性调研", proof: "基于访谈 Case 做结构化编码和跨案例分析。", limit: "适合沉淀为从销售反馈理解客户价值的学习案例。", status: "仅可脱敏摘要", strength: "中强" },
    { id: "E-009", title: "真需求识别方法论", proof: "形成业务结果、核心目标、价值判断三层思考。", limit: "适合沉淀为产品思维学习框架。", status: "仅可脱敏摘要", strength: "中" },
    { id: "E-010", title: "会议部门 P1 材料归档", proof: "包含线上会议 SOP、峰会流程和会议资源复用思路。", limit: "暂不能证明独立负责完整会议项目。", status: "仅可脱敏摘要", strength: "中" },
    { id: "E-011", title: "海外销售开发信组合复盘", proof: "独立完成开发信并通过主管审核，发送 250 封、回复 150 封、有效意向 1 个。", limit: "适合沉淀为客户触达与线索质量思考。", status: "仅可脱敏改写", strength: "中" },
    { id: "E-012", title: "轮岗周报连续记录", proof: "覆盖 2026-03 至 2026-06 多部门轮岗周报记录。", limit: "含内部项目细节，需摘要使用。", status: "仅可脱敏摘要", strength: "中" }
  ]
};

const state = {
  view: "overview",
  search: "",
  weakEvidenceOnly: false
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const labelMap = {
  id: "编号",
  proof: "可证明内容",
  limit: "限制",
  status: "展示状态",
  strength: "证据强度",
  level: "当前等级",
  evidence: "关联证据",
  next: "下一步",
  tags: "标签",
  period: "时间",
  stage: "轮岗阶段",
  focus: "阶段重点",
  outputs: "阶段产出",
  themes: "学习主题",
  thought: "阶段思考",
  type: "案例类型",
  theme: "成长主题",
  problem: "问题背景",
  coCreate: "共创方式",
  growth: "成长收获",
  reflection: "个人思考",
  title: "标题"
};

function includesSearch(item) {
  if (!state.search) return true;
  return JSON.stringify(item).toLowerCase().includes(state.search.toLowerCase());
}

function strengthClass(strength) {
  if (["强", "中强"].includes(strength)) return "strong";
  if (strength === "中") return "medium";
  return "weak";
}

function renderStats() {
  $("#statsGrid").innerHTML = data.stats.map((item) => `
    <article class="stat-card">
      <strong>${item.value}</strong>
      <span>${item.label}</span>
      <p class="muted">${item.note}</p>
    </article>
  `).join("");
}

function renderOverview() {
  const focusIds = ["E-001", "E-002", "E-003", "E-005", "E-008", "E-011"];
  $("#focusCases").innerHTML = data.evidence
    .filter((item) => focusIds.includes(item.id))
    .filter(includesSearch)
    .map((item) => `
      <article class="case-item" data-detail='${encodeURIComponent(JSON.stringify({ type: "证据", ...item }))}'>
        <h4>${item.id} · ${item.title}</h4>
        <p class="muted">${item.proof}</p>
      </article>
    `).join("");

  $("#gapList").innerHTML = [
    "清晰的任务边界会显著影响学习效率；没有边界时，需要主动找人同步目标和进展。",
    "共创不是等别人分配明确工作，而是在不完整信息里主动整理问题、同步判断、推动讨论。",
    "产品思维的变化，是从“完成任务”转向“理解为什么做、影响谁、怎么表达清楚”。",
    "销售和客成轮岗让我意识到，客户价值感知不是一次成交，而是触达、服务和信任的连续过程。",
    "AI 工具真正有价值的地方，是帮助整理和提炼，但最终判断仍然需要人来完成。"
  ].map((gap) => `<li>${gap}</li>`).join("");
}

function renderWorkflow() {
  $("#workflowFlow").innerHTML = data.workflow.map((step, index) => `
    <article class="flow-step">
      <span>${index + 1}</span>
      <h4>${step.title}</h4>
      <p class="muted">${step.body}</p>
    </article>
  `).join("");
}

function renderTimeline() {
  $("#timelineTrack").innerHTML = data.timeline
    .filter(includesSearch)
    .map((item) => `
      <article class="timeline-item">
        <div class="timeline-date">${item.period}</div>
        <div class="timeline-card" data-detail='${encodeURIComponent(JSON.stringify({ type: "轮岗阶段", ...item }))}'>
          <h4>${item.stage}</h4>
          <p class="muted">${item.focus}</p>
          <div class="card-meta">
            ${item.themes.map((tag) => `<span class="pill">${tag}</span>`).join("")}
          </div>
          <ul>${item.outputs.map((output) => `<li>${output}</li>`).join("")}</ul>
          <p><strong>阶段思考：</strong>${item.thought}</p>
        </div>
      </article>
    `).join("");
}

function renderProjects() {
  const themeFilter = $("#projectRiskFilter")?.value || "all";
  const items = data.projectCases
    .filter(includesSearch)
    .filter((item) => themeFilter === "all" || item.theme === themeFilter);

  $("#projectBoard").innerHTML = items.map((item) => `
    <article class="project-card" data-detail='${encodeURIComponent(JSON.stringify({ type: "项目案例", ...item }))}'>
      <h4>${item.title}</h4>
      <div class="card-meta">
        <span class="pill">${item.type}</span>
        <span class="pill ${item.theme === "共创" ? "strong" : item.theme === "思考" ? "medium" : "weak"}">${item.theme}</span>
      </div>
      <p class="muted">${item.problem}</p>
      <div class="case-path">
        <span><strong>共创</strong><br>${item.coCreate}</span>
        <span><strong>成长</strong><br>${item.growth}</span>
        <span><strong>思考</strong><br>${item.reflection}</span>
      </div>
    </article>
  `).join("");
}

function renderAbilities() {
  const level = $("#abilityLevelFilter")?.value || "all";
  const strength = $("#strengthFilter")?.value || "all";
  const items = data.abilities
    .filter(includesSearch)
    .filter((item) => level === "all" || item.level.includes(level))
    .filter((item) => strength === "all" || item.strength.includes(strength));

  $("#abilityGrid").innerHTML = items.map((item) => `
    <article class="ability-card" data-detail='${encodeURIComponent(JSON.stringify({ type: "能力", ...item }))}'>
      <h4>${item.name}</h4>
      <div class="card-meta">
        <span class="pill">${item.level}</span>
        <span class="pill ${strengthClass(item.strength)}">证据：${item.strength}</span>
        ${item.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
      </div>
      <p class="muted">${item.evidence}</p>
      <p><strong>下一步：</strong>${item.next}</p>
    </article>
  `).join("");
}

function renderEvidence() {
  const status = $("#evidenceStatusFilter")?.value || "all";
  const items = data.evidence
    .filter(includesSearch)
    .filter((item) => status === "all" || item.status.includes(status))
    .filter((item) => !state.weakEvidenceOnly || ["中", "中弱"].includes(item.strength));

  $("#evidenceTable").innerHTML = items.map((item) => `
    <article class="table-row" data-detail='${encodeURIComponent(JSON.stringify({ type: "证据", ...item }))}'>
      <strong>${item.id}</strong>
      <div>
        <strong>${item.title}</strong>
        <div class="card-meta">
          <span class="pill ${strengthClass(item.strength)}">${item.strength}</span>
          <span class="pill">${item.status}</span>
        </div>
      </div>
      <p>${item.proof}</p>
      <p>${item.limit}</p>
    </article>
  `).join("");
}

function renderAll() {
  renderStats();
  renderOverview();
  renderTimeline();
  renderProjects();
  renderWorkflow();
  renderAbilities();
  renderEvidence();
  bindDetailCards();
}

function bindDetailCards() {
  $$("[data-detail]").forEach((card) => {
    card.addEventListener("click", () => {
      const item = JSON.parse(decodeURIComponent(card.dataset.detail));
      openDrawer(item);
    });
  });
}

function openDrawer(item) {
  $("#drawerType").textContent = item.type;
  $("#drawerTitle").textContent = item.name || item.title || item.id;
  const entries = Object.entries(item)
    .filter(([key]) => !["type", "name", "title"].includes(key))
    .map(([key, value]) => {
      const text = Array.isArray(value) ? value.join("、") : value;
      return `<div><dt>${labelMap[key] || key}</dt><dd>${text}</dd></div>`;
    }).join("");
  $("#drawerBody").innerHTML = `<dl>${entries}</dl>`;
}

function setView(view) {
  state.view = view;
  $$(".view").forEach((node) => node.classList.toggle("active", node.id === view));
  $$(".nav-item").forEach((node) => node.classList.toggle("active", node.dataset.view === view));
  const titles = {
    overview: "总览",
    timeline: "轮岗时间线",
    projects: "项目案例",
    workflow: "个人成长链路",
    abilities: "能力地图",
    evidence: "证据索引"
  };
  $("#viewTitle").textContent = titles[view];
}

function buildSummary() {
  const projects = data.projectCases
    .slice(0, 4)
    .map((item) => `- ${item.title}：${item.growth}`)
    .join("\n");

  const thoughts = [
    "任务边界清晰时，学习效率和产出质量都会更高。",
    "共创能力体现在把不完整信息整理成可讨论的问题。",
    "产品学习的关键是从功能诉求背后看到真实业务目标。",
    "AI 可以提高整理效率，但不能替代业务判断。"
  ].map((item) => `- ${item}`).join("\n");

  return `管培生成长知识库阶段摘要\n\n定位：把轮岗经历转化为个人学习心得、业务理解和成长沉淀。\n\n当前主线：3 月从人力行政与会议业务进入组织语境，4 月通过销售轮岗靠近客户触达，5 月从客户成功理解服务维护，6 月在产品与设计轮岗中形成需求转译和产品思维。\n\n当前重点案例：\n${projects}\n\n阶段性思考：\n${thoughts}`;
}

function bindEvents() {
  $$(".nav-item").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  $("#globalSearch").addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    renderAll();
  });

  ["projectRiskFilter", "abilityLevelFilter", "strengthFilter", "evidenceStatusFilter"].forEach((id) => {
    const node = $(`#${id}`);
    if (node) node.addEventListener("change", renderAll);
  });

  $("#showWeakEvidence").addEventListener("click", () => {
    state.weakEvidenceOnly = !state.weakEvidenceOnly;
    $("#showWeakEvidence").textContent = state.weakEvidenceOnly ? "查看全部材料" : "只看学习延伸";
    renderEvidence();
    bindDetailCards();
  });

  $("#drawerClose").addEventListener("click", () => {
    $("#drawerTitle").textContent = "选择一项查看详情";
    $("#drawerType").textContent = "详情";
    $("#drawerBody").innerHTML = `<p class="muted">点击能力卡片、证据或项目案例，可以在这里查看摘要、学习边界和个人思考。</p>`;
  });

  $("#exportSummary").addEventListener("click", () => {
    $("#summaryText").value = buildSummary();
    $("#summaryModal").classList.add("active");
    $("#summaryModal").setAttribute("aria-hidden", "false");
  });

  $("#summaryClose").addEventListener("click", closeSummary);
  $("#summaryModal").addEventListener("click", (event) => {
    if (event.target.id === "summaryModal") closeSummary();
  });
}

function closeSummary() {
  $("#summaryModal").classList.remove("active");
  $("#summaryModal").setAttribute("aria-hidden", "true");
}

renderAll();
bindEvents();
