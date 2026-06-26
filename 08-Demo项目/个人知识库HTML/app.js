const data = {
  stats: [
    { label: "重点案例", value: 7, note: "产品、会议、销售、AI" },
    { label: "证据条目", value: 12, note: "E-001 至 E-012" },
    { label: "简历候选", value: 10, note: "含背景与补充素材" },
    { label: "Demo 选题", value: 6, note: "1 个首选方向" }
  ],
  workflow: [
    { title: "日常输入", body: "任务表、周报、截图、会议纪要、开发信、PPT。" },
    { title: "收集箱", body: "先保存事实，不急于润色，不强行写简历。" },
    { title: "实践复盘", body: "补齐背景、目标、行动、结果、限制和下一步。" },
    { title: "能力证据", body: "映射到能力地图，标注证据强度和保密边界。" },
    { title: "求职资产", body: "转化为简历素材、面试案例、述职主线和 Demo。" }
  ],
  timeline: [
    {
      period: "2026-03",
      stage: "入职与人力行政轮岗",
      focus: "建立组织和招聘基础认知",
      outputs: ["简历筛选与招聘沟通学习", "管培生轮岗全景开始形成"],
      evidence: ["E-006", "E-012"],
      risk: "偏基础经历，不单独作为主成果"
    },
    {
      period: "2026-04",
      stage: "会议部门轮岗",
      focus: "理解会议业务、内容复用和会员增值",
      outputs: ["会议部门 P1 材料复盘", "商学院云课堂方案", "线上会议 SOP 和峰会流程"],
      evidence: ["E-005", "E-010", "E-012"],
      risk: "需要补评分、评委反馈和线下执行证据"
    },
    {
      period: "2026-05",
      stage: "销售部门轮岗",
      focus: "理解客户触达、销售话术和海外开发",
      outputs: ["海外销售开发信组合", "250 封发送、150 封回复、1 个有效意向"],
      evidence: ["E-011", "E-012"],
      risk: "有效意向少，适合做复盘，不包装成销售业绩"
    },
    {
      period: "2026-06",
      stage: "产品 / 产品设计轮岗",
      focus: "形成需求分析、产品调研和项目推进证据",
      outputs: ["小联盟资质认证调研", "会员产品升级需求调研", "AI 风控官使用分析", "3 项 Jira 产品优化需求", "真需求识别方法论"],
      evidence: ["E-001", "E-002", "E-003", "E-004", "E-008", "E-009", "E-012"],
      risk: "核心缺口是上线、采纳、验收和反馈"
    },
    {
      period: "2026-07",
      stage: "研发部门轮岗",
      focus: "待补：理解开发协作、需求评审、测试验收和交付边界",
      outputs: ["待上传任务表、周报、评审截图、开发协作记录"],
      evidence: ["待补"],
      risk: "这是补齐产品落地闭环的关键阶段"
    },
    {
      period: "2026-08",
      stage: "金融产品与增值服务轮岗",
      focus: "待补：理解商业化产品、金融增值服务和定岗申请材料",
      outputs: ["待上传产品材料、项目截图、反馈和述职要求"],
      evidence: ["待补"],
      risk: "需要服务最终简历和 Demo 成品化"
    }
  ],
  abilities: [
    {
      name: "需求发现与问题分析",
      level: "能独立完成",
      strength: "强",
      evidence: "小联盟调研、会员产品升级调研、真需求三层判断法。",
      next: "补充方案采纳、评审或上线结果。",
      tags: ["产品", "调研", "方法论"],
      related: ["E-001", "E-008", "E-009"]
    },
    {
      name: "数据分析",
      level: "能独立完成",
      strength: "中强",
      evidence: "使用 AI 辅助完成内部工具使用记录整理、分类和分析。",
      next: "记录分类口径、人工校验和结论应用结果。",
      tags: ["AI 产品", "数据", "分析"],
      related: ["E-003", "E-004"]
    },
    {
      name: "方案范围控制",
      level: "了解",
      strength: "中强",
      evidence: "云课堂方案被反馈范围偏大；产品轮岗课题收敛为真需求识别。",
      next: "用真实需求评审或上线复盘验证方法是否有效。",
      tags: ["复盘", "产品方案"],
      related: ["E-005", "E-009"]
    },
    {
      name: "项目推进",
      level: "了解",
      strength: "中",
      evidence: "小联盟调研独立推进；2 项 Jira 需求通过评审进入开发。",
      next: "跟进验收、上线和业务结果。",
      tags: ["推进", "协作"],
      related: ["E-001", "E-002"]
    },
    {
      name: "业务理解",
      level: "了解",
      strength: "中",
      evidence: "覆盖会议、销售、客成、产品；梳理会议 SOP、峰会流程和云课堂方案。",
      next: "补充业务指标和完整上下游链路。",
      tags: ["B2B", "会议", "销售"],
      related: ["E-006", "E-010"]
    },
    {
      name: "沟通协作",
      level: "了解",
      strength: "中",
      evidence: "调研中与业务负责人迭代，协助整理访谈纪要，连接销售反馈和产品机会。",
      next: "明确关键提问、个人角色和业务方反馈。",
      tags: ["访谈", "跨部门"],
      related: ["E-004", "E-008"]
    },
    {
      name: "汇报表达",
      level: "了解",
      strength: "中弱",
      evidence: "云课堂课题排名第 2，有 PPT 和方案过程稿。",
      next: "补充分数、参评人数和评委评价。",
      tags: ["PPT", "述职"],
      related: ["E-005", "E-010"]
    },
    {
      name: "销售与客户洞察",
      level: "了解",
      strength: "中",
      evidence: "开发信本人完成并通过主管审核，发送 250 封、回复 150 封、有效意向 1 个。",
      next: "补充发送记录、客户类型分布和有效意向无后续结果复盘。",
      tags: ["销售", "客户沟通"],
      related: ["E-011"]
    },
    {
      name: "工具与 AI 应用",
      level: "了解",
      strength: "中弱",
      evidence: "使用 Jira 撰写需求，使用 Codex 做数据分析和知识库整理。",
      next: "记录提示过程、人工校验和实际效果。",
      tags: ["Jira", "Codex", "AI"],
      related: ["E-002", "E-003"]
    },
    {
      name: "学习与复盘",
      level: "了解",
      strength: "中强",
      evidence: "多部门快速轮岗，持续沉淀方法、案例和证据边界。",
      next: "用研发、金融产品轮岗继续验证方法。",
      tags: ["成长", "复盘"],
      related: ["E-006", "E-009"]
    }
  ],
  evidence: [
    { id: "E-001", title: "小联盟资质认证调研", proof: "独立调研、分类重构、材料门槛判断、完整交付。", limit: "最终上线与业务指标未知。", status: "仅可脱敏摘要", strength: "强" },
    { id: "E-002", title: "产品轮岗连续记录与需求状态", proof: "3 项需求撰写；2 项 P0 已通过评审并进入开发，1 项 P1 在需求池。", limit: "截图不直接证明作者身份，需与任务日志结合。", status: "仅可脱敏摘要", strength: "中" },
    { id: "E-003", title: "AI 风控官使用数据分析", proof: "使用 AI 辅助完成 759 条记录整理、分类和分析。", limit: "原始数据高度敏感，需使用合成或区间数据。", status: "不得公开", strength: "中强" },
    { id: "E-004", title: "AI 使用反馈会议纪要", proof: "个人负责现场记录和纪要整理。", limit: "其他调研工作由带教负责。", status: "不得公开", strength: "中" },
    { id: "E-005", title: "续费复购率课题——商学院云课堂", proof: "个人完成问题、方案和效果设计；课题排名第 2。", limit: "方案未落地，缺少评分表和参评人数。", status: "仅可脱敏摘要", strength: "中" },
    { id: "E-006", title: "管培生轮岗范围与学习连续性", proof: "覆盖人力、会议、销售、客成和产品等业务环节。", limit: "大部分为本人日志，不单独证明能力。", status: "背景使用", strength: "中" },
    { id: "E-007", title: "职业偏好与定岗定位", proof: "产品和会议方向意愿较强，客成方向不匹配。", limit: "自我陈述，不是能力证明。", status: "内部决策", strength: "弱" },
    { id: "E-008", title: "会员产品升级需求调研", proof: "销售访谈编码、跨案例分析、产品机会优先级。", limit: "暂不能证明方案上线或业务指标改善。", status: "仅可脱敏摘要", strength: "强" },
    { id: "E-009", title: "产品经理如何识别真需求课题", proof: "需求池分析、三层判断法、描述模板和目标量化模板。", limit: "尚未证明模板被团队采纳。", status: "仅可脱敏摘要", strength: "中强" },
    { id: "E-010", title: "会议部门 P1 材料归档与复盘", proof: "线上会议 SOP、峰会流程、云课堂方案和会议资源复用思路。", limit: "暂不能证明独立负责完整会议项目或方案落地。", status: "仅可脱敏摘要", strength: "中" },
    { id: "E-011", title: "海外销售开发信组合复盘", proof: "本人独立完成开发信并通过主管审核；发送 250 封、回复 150 封、有效意向 1 个。", limit: "发送量和审核仍缺截图；无后续转化。", status: "仅可脱敏改写", strength: "中" },
    { id: "E-012", title: "轮岗周报连续记录", proof: "2026-03 至 2026-06 覆盖人事、会议、销售、客成、产品的连续周报记录。", limit: "含内部邮件、人员和项目细节；原始邮件附件未全部单独保存。", status: "仅可脱敏摘要", strength: "中" }
  ],
  resume: [
    { title: "跨部门管培生轮岗", period: "2026-03 至今", action: "轮岗人力、会议、销售、客成和产品，持续记录任务、问题与方法。", result: "形成从获客、成交、客户维护到产品迭代的业务全景。", maturity: "背景", evidence: "E-006" },
    { title: "轮岗周报连续记录与成长主线", period: "2026-03 至 2026-06", action: "连续整理 14 条周报记录，并按任务、学习、问题和复盘拆解。", result: "可支撑述职时间线和成长主线，不单独包装为业务成果。", maturity: "补充", evidence: "E-012" },
    { title: "小联盟资质认证调研", period: "2026-06", action: "独立完成行业调研，重构业务分类和审核材料标准。", result: "覆盖 7 个一级类别、35 个二级类别；空运方案获认可，是否上线待确认。", maturity: "可用于简历", evidence: "E-001" },
    { title: "会员产品升级需求定性调研", period: "2026-06", action: "基于 3 个销售访谈 Case 做结构化编码和跨案例分析。", result: "输出客户需求差异、核心洞察和产品机会优先级。", maturity: "候选", evidence: "E-008" },
    { title: "AI 风控官内部使用分析", period: "2026-06", action: "整理并分类使用记录，分析用户、部门、问题和反馈。", result: "核对口径为 759 条记录、96 名用户、24 条反馈。", maturity: "可用于简历", evidence: "E-003 / E-004" },
    { title: "3 项 Jira 产品优化需求", period: "2026-06", action: "学习业务流程并完成小型需求撰写。", result: "2 项 P0 通过评审进入开发，1 项 P1 在需求池。", maturity: "可用于简历", evidence: "E-002" },
    { title: "产品经理如何识别真需求课题", period: "2026-06", action: "提炼真需求三层判断法、需求阶段标记和字段模板。", result: "形成方法论和汇报文本初版。", maturity: "补充", evidence: "E-009" },
    { title: "会议部门 P1 材料与云课堂方案", period: "2026-04", action: "梳理线上会议 SOP、峰会流程和商学院云课堂方案。", result: "形成会议资源复用和会员增值复盘。", maturity: "补充", evidence: "E-010 / E-005" },
    { title: "续费复购率课题——商学院云课堂", period: "2026-04", action: "独立完成问题分析、方案设计和效果指标。", result: "同批课题排名第 2，方案未落地。", maturity: "补充", evidence: "E-005" },
    { title: "海外销售开发信组合", period: "2026-05", action: "独立完成多场景英文开发信并通过主管审核。", result: "发送 250 封，回复 150 封，有效意向 1 个，后续无结果。", maturity: "不作为主成果", evidence: "E-011" }
  ],
  demos: [
    { title: "管培生成长证据库", priority: "首选", users: "管培生、实习生、校招生", solution: "轮岗时间线、项目案例、能力地图、证据强度、简历素材与述职导出。", source: "当前知识库中的脱敏个人数据" },
    { title: "真需求与最小试点工作台", priority: "优先候选", users: "产品经理、业务负责人", solution: "目标用户、问题证据、优先级、最小范围、指标、负责人和复盘。", source: "小联盟和云课堂案例抽象方法" },
    { title: "企业服务能力认证工作台", priority: "候选", users: "B2B 平台运营、审核人员", solution: "业务类型选择、材料完整度检查、审核标准和证明材料建议。", source: "公开规则 + 合成案例" },
    { title: "AI 产品使用与反馈分析看板", priority: "候选", users: "AI 产品经理、内部运营", solution: "用户分层、场景分类、反馈覆盖、问题趋势和访谈名单。", source: "合成数据 + 分析框架" },
    { title: "课程试点运营台", priority: "候选", users: "会员运营、内容运营、会议项目团队", solution: "选题、报名、到课、回放、反馈、问题解决率和继续/停止决策。", source: "云课堂方案、Connect+ SOP、峰会流程脱敏抽象" },
    { title: "海外销售线索跟进台", priority: "低优先级", users: "海外销售、会议销售、销售支持", solution: "开发信模板、客户标签、资格筛选问题、回复状态、跟进动作和转化漏斗。", source: "开发信脱敏改写 + 合成客户数据" }
  ]
};

const state = {
  view: "overview",
  search: "",
  weakEvidenceOnly: false
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function includesSearch(item) {
  if (!state.search) return true;
  const blob = JSON.stringify(item).toLowerCase();
  return blob.includes(state.search.toLowerCase());
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
  const focusIds = ["E-001", "E-008", "E-003", "E-002", "E-009", "E-010", "E-011", "E-012"];
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
    "小联盟、会员产品升级和 Jira 需求仍需上线 / 采纳结果。",
    "云课堂课题缺少评分、参评人数和评委评价。",
    "海外销售开发信缺少发送记录、主管审核截图和客户类型分布。",
    "AI 数据分析需补充分类口径、提示过程和人工校验说明。",
    "会议部门材料需补线下沙龙、客户宣传 PPT 和合同维护脱敏说明。"
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
            ${item.evidence.map((tag) => `<span class="pill">${tag}</span>`).join("")}
          </div>
          <ul>
            ${item.outputs.map((output) => `<li>${output}</li>`).join("")}
          </ul>
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
    .filter((item) => !state.weakEvidenceOnly || ["中", "中弱", "弱"].includes(item.strength));

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

function renderResume() {
  const maturity = $("#resumeMaturityFilter")?.value || "all";
  const items = data.resume
    .filter(includesSearch)
    .filter((item) => maturity === "all" || item.maturity.includes(maturity));

  $("#resumeCards").innerHTML = items.map((item) => `
    <article class="resume-card" data-detail='${encodeURIComponent(JSON.stringify({ type: "简历素材", ...item }))}'>
      <h4>${item.title}</h4>
      <div class="card-meta">
        <span class="pill">${item.period}</span>
        <span class="pill">${item.evidence}</span>
        <span class="pill ${item.maturity.includes("可用于") ? "strong" : item.maturity.includes("不作为") ? "weak" : "medium"}">${item.maturity}</span>
      </div>
      <p class="muted">${item.action}</p>
      <p><strong>结果：</strong>${item.result}</p>
    </article>
  `).join("");
}

function renderDemo() {
  const priority = $("#demoPriorityFilter")?.value || "all";
  const items = data.demos
    .filter(includesSearch)
    .filter((item) => priority === "all" || item.priority.includes(priority));

  $("#demoCards").innerHTML = items.map((item) => `
    <article class="demo-card" data-detail='${encodeURIComponent(JSON.stringify({ type: "Demo 选题", ...item }))}'>
      <h4>${item.title}</h4>
      <div class="card-meta">
        <span class="pill ${item.priority === "首选" ? "strong" : item.priority === "低优先级" ? "weak" : "medium"}">${item.priority}</span>
        <span class="pill">${item.users}</span>
      </div>
      <p class="muted">${item.solution}</p>
      <p><strong>数据来源：</strong>${item.source}</p>
    </article>
  `).join("");
}

function renderAll() {
  renderStats();
  renderOverview();
  renderTimeline();
  renderWorkflow();
  renderAbilities();
  renderEvidence();
  renderResume();
  renderDemo();
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

const labelMap = {
  id: "编号",
  proof: "可证明内容",
  limit: "限制",
  status: "对外状态",
  strength: "证据强度",
  level: "当前等级",
  evidence: "已有证据 / 关联证据",
  next: "下一步",
  tags: "标签",
  related: "关联证据",
  period: "时间",
  action: "关键行动",
  result: "结果",
  maturity: "成熟度",
  users: "目标用户",
  solution: "Demo 方案",
  source: "数据来源",
  priority: "优先级",
  period: "时间",
  stage: "轮岗阶段",
  focus: "阶段重点",
  outputs: "阶段产出",
  risk: "证据缺口 / 风险"
};

function setView(view) {
  state.view = view;
  $$(".view").forEach((node) => node.classList.toggle("active", node.id === view));
  $$(".nav-item").forEach((node) => node.classList.toggle("active", node.dataset.view === view));
  const titles = {
    overview: "总览",
    timeline: "轮岗时间线",
    workflow: "沉淀链路",
    abilities: "能力地图",
    evidence: "证据索引",
    resume: "简历素材",
    demo: "Demo 选题"
  };
  $("#viewTitle").textContent = titles[view];
}

function buildSummary() {
  const topResume = data.resume
    .filter((item) => item.maturity.includes("可用于简历") || item.maturity.includes("候选"))
    .slice(0, 4)
    .map((item) => `- ${item.title}：${item.action}；${item.result}`)
    .join("\n");

  const gaps = [
    "上线 / 采纳结果仍需跟进",
    "主管审核、评分、发送记录等外部证据需截图补齐",
    "对外 Demo 必须使用脱敏摘要或合成数据"
  ].map((item) => `- ${item}`).join("\n");

  return `管培生成长知识库摘要\n\n定位：把轮岗经历转化为能力证据、简历素材和作品集 Demo。\n\n成长主线：3-4 月建立业务理解，5-6 月形成销售、产品和数据分析证据，7-8 月重点补齐研发协作、金融产品和定岗材料。\n\n当前可用素材：\n${topResume}\n\n首选 Demo：管培生成长证据库。\n\n主要证据缺口：\n${gaps}`;
}

function bindEvents() {
  $$(".nav-item").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  $("#globalSearch").addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    renderAll();
  });

  ["abilityLevelFilter", "strengthFilter", "evidenceStatusFilter", "resumeMaturityFilter", "demoPriorityFilter"].forEach((id) => {
    const node = $(`#${id}`);
    if (node) node.addEventListener("change", renderAll);
  });

  $("#showWeakEvidence").addEventListener("click", () => {
    state.weakEvidenceOnly = !state.weakEvidenceOnly;
    $("#showWeakEvidence").textContent = state.weakEvidenceOnly ? "查看全部证据" : "只看待补强";
    renderEvidence();
    bindDetailCards();
  });

  $("#drawerClose").addEventListener("click", () => {
    $("#drawerTitle").textContent = "选择一项查看详情";
    $("#drawerType").textContent = "详情";
    $("#drawerBody").innerHTML = `<p class="muted">点击能力卡片、证据或 Demo，可以在这里查看摘要、限制和下一步。</p>`;
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
