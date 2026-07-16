# 管培生成长知识库私密网站 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将选定的内部汇报单文件版重建为模块化、内容独立、可通过私密链接访问的管培生成长知识库网站。

**Architecture:** 在 `08-Demo项目/个人知识库Sites` 初始化 Sites vinext 项目。页面采用一个客户端工作台外壳和多个专责视图组件，内容从独立 JSON 文件加载并在构建时通过统一模型验证；第一版没有数据库、在线编辑、自动同步、全站搜索或汇报摘要。

**Tech Stack:** Sites vinext starter、React 19、TypeScript、CSS、JSON、Node.js 内置测试框架、Cloudflare Worker 兼容构建、Sites 私密托管。

## Global Constraints

- 唯一内容来源：`08-Demo项目/个人知识库HTML/提交包/管培生成长知识库-内部汇报版.html`。
- 目标目录：`08-Demo项目/个人知识库Sites`；不得修改原知识库正文、现有 HTML Demo 或提交包。
- 内容表达采用事实记录型，重点说明“做了什么、学到什么”。
- 页面采用工作台式布局、现代黑橙视觉，电脑端优先。
- 首页第一屏优先展示当前轮岗阶段和最近成长记录。
- 保留六个栏目、栏目内筛选和详情抽屉。
- 不实现全站搜索、生成汇报摘要、网站内编辑、自动同步、在线数据库或公开发布。
- 网站必须私密发布，并返回供直属领导或带教直接访问的私密链接。
- 默认不执行浏览器自动点击、截图或多尺寸视觉测试。

## Planned File Structure

```text
08-Demo项目/个人知识库Sites/
├─ .openai/hosting.json                 # Sites 项目标识；不声明 D1/R2
├─ app/
│  ├─ components/
│  │  ├─ KnowledgeBaseApp.tsx          # 当前视图与详情抽屉的顶层状态
│  │  ├─ Sidebar.tsx                   # 六栏目导航
│  │  ├─ OverviewView.tsx              # 当前阶段、最近记录、统计、重点入口
│  │  ├─ TimelineView.tsx              # 轮岗时间线
│  │  ├─ ProjectsView.tsx              # 项目筛选与卡片
│  │  ├─ WorkflowView.tsx              # 沉淀链路
│  │  ├─ AbilitiesView.tsx             # 能力筛选与卡片
│  │  ├─ EvidenceView.tsx              # 证据筛选与列表
│  │  ├─ DetailDrawer.tsx              # 通用详情抽屉
│  │  └─ EmptyState.tsx                # 空栏目和空筛选结果
│  ├─ globals.css                      # 黑橙工作台样式与电脑端收缩规则
│  ├─ layout.tsx                       # 中文语言、标题和描述
│  └─ page.tsx                         # 加载已验证内容并渲染应用
├─ content/
│  ├─ current-stage.json               # 当前轮岗阶段
│  ├─ recent-updates.json              # 最近三段成长记录
│  ├─ stats.json                       # 当前单文件版统计
│  ├─ timeline.json                    # 六段轮岗时间线
│  ├─ projects.json                    # 六个项目案例
│  ├─ workflow.json                    # 五步沉淀链路
│  ├─ abilities.json                   # 六项能力
│  ├─ evidence.json                    # 证据条目
│  └─ index.ts                         # 静态导入并验证全部内容
├─ lib/
│  ├─ content-model.mjs                # 运行时字段验证
│  ├─ content-model.d.ts               # 内容类型契约
│  └─ filtering.mjs                    # 项目、能力、证据筛选纯函数
├─ scripts/
│  └─ extract-source-content.mjs       # 从唯一 HTML 来源生成 JSON
├─ tests/
│  ├─ content-model.test.mjs           # 内容完整性测试
│  ├─ filtering.test.mjs               # 筛选与空结果测试
│  └─ rendered-html.test.mjs           # 构建产物结构与禁用功能检查
├─ package.json
└─ package-lock.json
```

---

### Task 1: 初始化 Sites 项目并保留启动预览

**Files:**
- Create: `08-Demo项目/个人知识库Sites/**`（由 Sites 初始化器生成）
- Verify: `08-Demo项目/个人知识库Sites/app/page.tsx`
- Verify: `08-Demo项目/个人知识库Sites/app/layout.tsx`
- Verify: `08-Demo项目/个人知识库Sites/app/globals.css`
- Verify: `08-Demo项目/个人知识库Sites/.openai/hosting.json`

**Interfaces:**
- Consumes: 已确认设计说明 `docs/superpowers/specs/2026-07-16-personal-knowledge-base-site-design.md`。
- Produces: 可启动、可构建的 vinext 项目和持续运行的本地预览。

- [ ] **Step 1: 确认目标目录尚未存在或为空**

Run:

```powershell
Test-Path 'C:\Users\Lenovo\Documents\个人知识库\08-Demo项目\个人知识库Sites'
```

Expected: `False`。如果返回 `True`，先读取目录内容并停止，不覆盖已有文件。

- [ ] **Step 2: 使用 Sites 初始化器创建项目**

Run:

```powershell
& 'C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\usr\bin\sh.exe' `
  'C:/Users/Lenovo/.codex/plugins/cache/openai-bundled/sites/0.1.27/scripts/init-site.sh' `
  'C:/Users/Lenovo/Documents/个人知识库/08-Demo项目/个人知识库Sites'
```

Expected: 命令成功，目标目录包含 `package.json`、`package-lock.json`、`app/` 和 `.openai/hosting.json`。

- [ ] **Step 3: 启动并保留开发预览**

Run from `08-Demo项目/个人知识库Sites`:

```powershell
npm run dev
```

Expected: 开发服务输出一个健康的 `Local` URL。保持该进程运行，使用输出的完整 URL 调用 `open_in_codex` 一次，显示 starter 加载页。

- [ ] **Step 4: 验证初始化版本**

Run:

```powershell
npm test
```

Expected: starter 的构建和 `tests/rendered-html.test.mjs` 全部通过。

- [ ] **Step 5: 提交初始化版本**

Run:

```powershell
git add .
git commit -m "chore: initialize private knowledge base site"
```

Expected: 新站点仓库生成一个只包含 starter 的提交。

---

### Task 2: 建立独立内容层与严格字段验证

**Files:**
- Create: `08-Demo项目/个人知识库Sites/lib/content-model.mjs`
- Create: `08-Demo项目/个人知识库Sites/lib/content-model.d.ts`
- Create: `08-Demo项目/个人知识库Sites/scripts/extract-source-content.mjs`
- Create: `08-Demo项目/个人知识库Sites/content/current-stage.json`
- Create: `08-Demo项目/个人知识库Sites/content/recent-updates.json`
- Create: `08-Demo项目/个人知识库Sites/content/stats.json`
- Create: `08-Demo项目/个人知识库Sites/content/timeline.json`
- Create: `08-Demo项目/个人知识库Sites/content/projects.json`
- Create: `08-Demo项目/个人知识库Sites/content/workflow.json`
- Create: `08-Demo项目/个人知识库Sites/content/abilities.json`
- Create: `08-Demo项目/个人知识库Sites/content/evidence.json`
- Create: `08-Demo项目/个人知识库Sites/content/index.ts`
- Create: `08-Demo项目/个人知识库Sites/tests/content-model.test.mjs`
- Modify: `08-Demo项目/个人知识库Sites/package.json`

**Interfaces:**
- Consumes: 选定 HTML 中的 `data.stats`、`data.workflow`、`data.timeline`、`data.projectCases`、`data.abilities`、`data.evidence`。
- Produces: `validateKnowledgeBaseContent(input)` 和 `knowledgeBaseContent`；后续视图只通过这一对象读取内容。

- [ ] **Step 1: 写内容模型失败测试**

Create `tests/content-model.test.mjs`:

```js
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { validateKnowledgeBaseContent } from "../lib/content-model.mjs";

const readJson = async (name) =>
  JSON.parse(await readFile(new URL(`../content/${name}.json`, import.meta.url), "utf8"));

test("accepts the extracted knowledge-base content", async () => {
  const input = {
    currentStage: await readJson("current-stage"),
    recentUpdates: await readJson("recent-updates"),
    stats: await readJson("stats"),
    timeline: await readJson("timeline"),
    projects: await readJson("projects"),
    workflow: await readJson("workflow"),
    abilities: await readJson("abilities"),
    evidence: await readJson("evidence"),
  };
  const result = validateKnowledgeBaseContent(input);
  assert.equal(result.timeline.length, 6);
  assert.equal(result.projects.length, 6);
  assert.equal(result.recentUpdates.length, 3);
});

test("rejects a missing required field", () => {
  assert.throws(
    () => validateKnowledgeBaseContent({ currentStage: { period: "2026-07" } }),
    /currentStage\.stage/,
  );
});
```

- [ ] **Step 2: 运行测试并确认失败**

Run:

```powershell
node --test tests/content-model.test.mjs
```

Expected: FAIL，因为 `lib/content-model.mjs` 和内容 JSON 尚不存在。

- [ ] **Step 3: 实现统一验证器**

Create `lib/content-model.mjs`:

```js
const isRecord = (value) => value !== null && typeof value === "object" && !Array.isArray(value);

function requireRecord(value, path) {
  if (!isRecord(value)) throw new Error(`${path} must be an object`);
  return value;
}

function requireString(record, key, path) {
  const value = record[key];
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${path}.${key} must be a non-empty string`);
  }
}

function requireStringArray(record, key, path) {
  const value = record[key];
  if (!Array.isArray(value) || value.some((item) => typeof item !== "string" || item.trim() === "")) {
    throw new Error(`${path}.${key} must be an array of non-empty strings`);
  }
}

function requireArray(input, key, fields) {
  const value = input[key];
  if (!Array.isArray(value)) throw new Error(`${key} must be an array`);
  value.forEach((item, index) => {
    const record = requireRecord(item, `${key}[${index}]`);
    for (const field of fields) requireString(record, field, `${key}[${index}]`);
  });
}

export function validateKnowledgeBaseContent(input) {
  const root = requireRecord(input, "content");
  const stage = requireRecord(root.currentStage, "currentStage");
  for (const field of ["period", "stage", "focus", "thought", "status"]) {
    requireString(stage, field, "currentStage");
  }
  requireStringArray(stage, "outputs", "currentStage");
  requireStringArray(stage, "themes", "currentStage");

  requireArray(root, "recentUpdates", ["date", "stage", "action", "learning", "status"]);
  requireArray(root, "stats", ["label", "note"]);
  root.stats.forEach((item, index) => {
    if (!Number.isFinite(item.value)) throw new Error(`stats[${index}].value must be a number`);
  });
  requireArray(root, "workflow", ["title", "body"]);
  requireArray(root, "timeline", ["period", "stage", "focus", "thought"]);
  root.timeline.forEach((item, index) => {
    requireStringArray(item, "outputs", `timeline[${index}]`);
    requireStringArray(item, "themes", `timeline[${index}]`);
  });
  requireArray(root, "projects", ["title", "type", "theme", "problem", "coCreate", "growth", "reflection"]);
  requireArray(root, "abilities", ["name", "level", "strength", "evidence", "next"]);
  root.abilities.forEach((item, index) => requireStringArray(item, "tags", `abilities[${index}]`));
  requireArray(root, "evidence", ["id", "title", "proof", "limit", "status", "strength"]);

  return root;
}
```

Create `lib/content-model.d.ts` with the exact public contract:

```ts
export interface CurrentStage {
  period: string;
  stage: string;
  focus: string;
  outputs: string[];
  themes: string[];
  thought: string;
  status: string;
}

export interface TimelineItem {
  period: string;
  stage: string;
  focus: string;
  outputs: string[];
  themes: string[];
  thought: string;
}

export interface RecentUpdate {
  date: string;
  stage: string;
  action: string;
  learning: string;
  status: string;
}

export interface KnowledgeBaseContent {
  currentStage: CurrentStage;
  recentUpdates: RecentUpdate[];
  stats: Array<{ label: string; value: number; note: string }>;
  workflow: Array<{ title: string; body: string }>;
  timeline: TimelineItem[];
  projects: Array<{ title: string; type: string; theme: string; problem: string; coCreate: string; growth: string; reflection: string }>;
  abilities: Array<{ name: string; level: string; strength: string; evidence: string; next: string; tags: string[] }>;
  evidence: Array<{ id: string; title: string; proof: string; limit: string; status: string; strength: string }>;
}

export function validateKnowledgeBaseContent(input: unknown): KnowledgeBaseContent;
```

- [ ] **Step 4: 实现一次性内容提取脚本**

Create `scripts/extract-source-content.mjs`:

```js
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";

const [source, outDir] = process.argv.slice(2);
if (!source || !outDir) throw new Error("Usage: node scripts/extract-source-content.mjs <source-html> <out-dir>");

const html = await readFile(source, "utf8");
const match = html.match(/const data = (\{[\s\S]*?\n\});\s*\n\s*const state/);
if (!match) throw new Error("Could not locate the source data object");
const data = vm.runInNewContext(`(${match[1]})`, Object.create(null), { timeout: 1000 });

const currentMonth = "2026-07";
const currentStage = data.timeline.find((item) => item.period === currentMonth);
if (!currentStage) throw new Error(`Missing current timeline item: ${currentMonth}`);

const recentUpdates = data.timeline
  .filter((item) => item.period <= currentMonth)
  .sort((a, b) => b.period.localeCompare(a.period))
  .slice(0, 3)
  .map((item) => ({
    date: item.period,
    stage: item.stage,
    action: item.outputs.join("；"),
    learning: item.thought,
    status: item.period === currentMonth ? "进行中" : "已完成",
  }));

const files = {
  "current-stage": { ...currentStage, status: "进行中" },
  "recent-updates": recentUpdates,
  stats: data.stats,
  timeline: data.timeline,
  projects: data.projectCases,
  workflow: data.workflow,
  abilities: data.abilities,
  evidence: data.evidence,
};

await mkdir(outDir, { recursive: true });
for (const [name, value] of Object.entries(files)) {
  await writeFile(path.join(outDir, `${name}.json`), `${JSON.stringify(value, null, 2)}\n`, "utf8");
}
```

- [ ] **Step 5: 从唯一来源生成内容文件**

Run from `08-Demo项目/个人知识库Sites`:

```powershell
node scripts/extract-source-content.mjs `
  '..\个人知识库HTML\提交包\管培生成长知识库-内部汇报版.html' `
  'content'
```

Expected: `content/` 下生成八个 UTF-8 JSON 文件；`recent-updates.json` 只包含 2026-07、2026-06、2026-05 三条派生记录。

- [ ] **Step 6: 建立网站内容入口**

Create `content/index.ts`:

```ts
import currentStage from "./current-stage.json";
import recentUpdates from "./recent-updates.json";
import stats from "./stats.json";
import timeline from "./timeline.json";
import projects from "./projects.json";
import workflow from "./workflow.json";
import abilities from "./abilities.json";
import evidence from "./evidence.json";
import { validateKnowledgeBaseContent } from "@/lib/content-model.mjs";

export const knowledgeBaseContent = validateKnowledgeBaseContent({
  currentStage,
  recentUpdates,
  stats,
  timeline,
  projects,
  workflow,
  abilities,
  evidence,
});
```

Add `content:test` and include it in `test` in `package.json`:

```json
{
  "scripts": {
    "content:test": "node --test tests/content-model.test.mjs",
    "test": "npm run content:test && npm run build && node --test tests/rendered-html.test.mjs"
  }
}
```

- [ ] **Step 7: 运行内容测试并提交**

Run:

```powershell
npm run content:test
git add content lib scripts tests/content-model.test.mjs package.json package-lock.json
git commit -m "feat: add validated knowledge base content"
```

Expected: 内容测试通过并生成独立提交。

---

### Task 3: 实现工作台外壳、导航和首页

**Files:**
- Create: `08-Demo项目/个人知识库Sites/app/components/KnowledgeBaseApp.tsx`
- Create: `08-Demo项目/个人知识库Sites/app/components/Sidebar.tsx`
- Create: `08-Demo项目/个人知识库Sites/app/components/OverviewView.tsx`
- Modify: `08-Demo项目/个人知识库Sites/app/page.tsx`
- Modify: `08-Demo项目/个人知识库Sites/app/layout.tsx`
- Modify: `08-Demo项目/个人知识库Sites/app/globals.css`
- Modify: `08-Demo项目/个人知识库Sites/tests/rendered-html.test.mjs`
- Modify: `08-Demo项目/个人知识库Sites/package.json`
- Delete: `08-Demo项目/个人知识库Sites/app/_sites-preview/SkeletonPreview.tsx`
- Delete: `08-Demo项目/个人知识库Sites/app/_sites-preview/preview.css`

**Interfaces:**
- Consumes: `knowledgeBaseContent: KnowledgeBaseContent`。
- Produces: `KnowledgeBaseApp({ content })`、`ViewId` 和可切换的六栏目外壳；后续视图注册到该外壳。

- [ ] **Step 1: 将 starter 测试改为成品外壳失败测试**

Replace `tests/rendered-html.test.mjs` with:

```js
import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the private knowledge-base workbench", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>管培生成长知识库<\/title>/);
  assert.match(html, /当前轮岗阶段/);
  assert.match(html, /最近成长记录/);
  for (const label of ["总览", "轮岗时间线", "项目案例", "沉淀链路", "能力地图", "证据索引"]) {
    assert.match(html, new RegExp(label));
  }
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|全站搜索|生成汇报摘要/);
});
```

- [ ] **Step 2: 运行成品外壳测试并确认失败**

Run:

```powershell
npm test
```

Expected: FAIL，因为当前仍渲染 starter loading skeleton。

- [ ] **Step 3: 实现导航和首页组件**

Create `app/components/Sidebar.tsx`:

```tsx
export type ViewId = "overview" | "timeline" | "projects" | "workflow" | "abilities" | "evidence";

const items: Array<{ id: ViewId; label: string; index: string }> = [
  { id: "overview", label: "总览", index: "01" },
  { id: "timeline", label: "轮岗时间线", index: "02" },
  { id: "projects", label: "项目案例", index: "03" },
  { id: "workflow", label: "沉淀链路", index: "04" },
  { id: "abilities", label: "能力地图", index: "05" },
  { id: "evidence", label: "证据索引", index: "06" },
];

export function Sidebar({ active, onChange }: { active: ViewId; onChange: (view: ViewId) => void }) {
  return (
    <aside className="sidebar">
      <div className="brand"><span>GROWTH / 26</span><strong>成长知识库</strong></div>
      <nav aria-label="知识库栏目">
        {items.map((item) => (
          <button key={item.id} className={active === item.id ? "nav-item active" : "nav-item"} onClick={() => onChange(item.id)} aria-current={active === item.id ? "page" : undefined}>
            <span>{item.index}</span>{item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
```

Create `app/components/OverviewView.tsx`:

```tsx
import type { KnowledgeBaseContent } from "@/lib/content-model.mjs";

export function OverviewView({ content }: { content: KnowledgeBaseContent }) {
  const { currentStage, recentUpdates, stats, projects } = content;
  return (
    <section className="view-panel" aria-labelledby="overview-title">
      <header className="page-heading"><div><span className="eyebrow">OVERVIEW</span><h1 id="overview-title">成长总览</h1></div><span className="period-chip">{currentStage.period}</span></header>
      <div className="stage-card accent-card"><span className="section-label">当前轮岗阶段</span><h2>{currentStage.stage}</h2><p>{currentStage.focus}</p><div className="tag-row">{currentStage.themes.map((theme) => <span className="tag" key={theme}>{theme}</span>)}</div></div>
      <div className="section-heading"><h2>最近成长记录</h2><span>做了什么 · 学到什么</span></div>
      <div className="update-grid">{recentUpdates.map((item) => <article className="update-card" key={`${item.date}-${item.stage}`}><div className="card-kicker"><time>{item.date}</time><span>{item.status}</span></div><h3>{item.stage}</h3><dl><div><dt>做了什么</dt><dd>{item.action}</dd></div><div><dt>学到什么</dt><dd>{item.learning}</dd></div></dl></article>)}</div>
      <div className="stats-grid">{stats.map((item) => <article className="stat-card" key={item.label}><strong>{item.value}</strong><span>{item.label}</span><p>{item.note}</p></article>)}</div>
      <div className="section-heading"><h2>重点项目</h2><span>从当前内部汇报版提取</span></div>
      <div className="project-preview">{projects.slice(0, 3).map((item) => <article key={item.title}><span>{item.theme}</span><h3>{item.title}</h3><p>{item.growth}</p></article>)}</div>
    </section>
  );
}
```

Create `app/components/KnowledgeBaseApp.tsx` with the initial overview state and reserved branches:

```tsx
"use client";

import { useState } from "react";
import type { KnowledgeBaseContent } from "@/lib/content-model.mjs";
import { OverviewView } from "./OverviewView";
import { Sidebar, type ViewId } from "./Sidebar";

export function KnowledgeBaseApp({ content }: { content: KnowledgeBaseContent }) {
  const [view, setView] = useState<ViewId>("overview");
  return <div className="app-shell"><Sidebar active={view} onChange={setView} /><main className="main-content">{view === "overview" ? <OverviewView content={content} /> : <section className="view-panel"><h1>{view}</h1></section>}</main></div>;
}
```

- [ ] **Step 4: 替换页面与元数据，移除 starter**

Replace `app/page.tsx`:

```tsx
import { KnowledgeBaseApp } from "./components/KnowledgeBaseApp";
import { knowledgeBaseContent } from "@/content";

export default function Home() {
  return <KnowledgeBaseApp content={knowledgeBaseContent} />;
}
```

Replace `app/layout.tsx` metadata and language:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "管培生成长知识库",
  description: "用于日常查看轮岗记录、阶段学习与能力沉淀的私密知识库。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
```

Delete `app/_sites-preview/` and remove `react-loading-skeleton`:

```powershell
npm uninstall react-loading-skeleton
```

- [ ] **Step 5: 实现黑橙工作台基础样式**

Replace `app/globals.css` with CSS that defines these exact tokens and layout contracts:

```css
@import "tailwindcss";

:root { --ink:#17191d; --ink-soft:#252931; --paper:#f4f5f7; --card:#ffffff; --line:#e2e5e9; --accent:#f3a63a; --accent-soft:#fff1dd; --muted:#6f7680; }
* { box-sizing:border-box; }
html { background:var(--paper); }
body { margin:0; background:var(--paper); color:var(--ink); font-family:"Microsoft YaHei","PingFang SC",Arial,sans-serif; }
button,select { font:inherit; }
button { cursor:pointer; }
.app-shell { min-height:100vh; display:grid; grid-template-columns:248px minmax(0,1fr); }
.sidebar { position:sticky; top:0; height:100vh; padding:28px 20px; color:#fff; background:var(--ink); }
.brand { display:grid; gap:6px; padding:0 10px 28px; }
.brand span,.eyebrow { color:var(--accent); font-size:12px; font-weight:800; letter-spacing:.14em; }
.brand strong { font-size:20px; }
.sidebar nav { display:grid; gap:8px; }
.nav-item { width:100%; display:flex; gap:14px; align-items:center; border:0; border-radius:9px; padding:12px 14px; color:#c9cdd4; background:transparent; text-align:left; }
.nav-item span { color:#767d88; font-size:11px; }
.nav-item:hover,.nav-item.active { color:#fff; background:var(--ink-soft); }
.nav-item.active { box-shadow:inset 3px 0 0 var(--accent); }
.nav-item.active span { color:var(--accent); }
.main-content { min-width:0; padding:40px clamp(28px,5vw,72px) 64px; }
.view-panel { max-width:1320px; margin:0 auto; }
.page-heading,.section-heading,.card-kicker { display:flex; justify-content:space-between; gap:24px; align-items:center; }
.page-heading { margin-bottom:26px; }
.page-heading h1 { margin:4px 0 0; font-size:32px; }
.period-chip,.tag,.card-kicker span { border-radius:999px; padding:6px 10px; background:var(--accent-soft); color:#8d5610; font-size:12px; font-weight:700; }
.stage-card,.update-card,.stat-card,.project-preview article { background:var(--card); border:1px solid var(--line); border-radius:12px; }
.stage-card { padding:28px; }
.accent-card { border-left:5px solid var(--accent); }
.stage-card h2 { margin:8px 0; font-size:24px; }
.stage-card p,.stat-card p,.project-preview p,dd { color:var(--muted); line-height:1.75; }
.section-label { color:var(--muted); font-size:13px; }
.tag-row { display:flex; flex-wrap:wrap; gap:8px; margin-top:18px; }
.section-heading { margin:32px 0 14px; }
.section-heading h2 { margin:0; font-size:20px; }
.section-heading span { color:var(--muted); font-size:13px; }
.update-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:16px; }
.update-card { padding:20px; }
.update-card h3 { margin:14px 0; font-size:17px; }
.update-card dl { display:grid; gap:12px; margin:0; }
.update-card dl div { padding-top:12px; border-top:1px solid var(--line); }
dt { font-size:12px; font-weight:800; }
dd { margin:5px 0 0; font-size:14px; }
.stats-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:14px; margin-top:20px; }
.stat-card { padding:20px; border-top:3px solid var(--accent); }
.stat-card strong { display:block; font-size:28px; }
.stat-card span { font-weight:800; }
.stat-card p { margin:8px 0 0; font-size:12px; }
.project-preview { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:16px; }
.project-preview article { padding:20px; }
.project-preview article > span { color:#a16310; font-size:12px; font-weight:800; }
.project-preview h3 { margin:8px 0; }
@media (max-width:1000px) { .app-shell { grid-template-columns:88px minmax(0,1fr); } .brand strong,.nav-item:not(.active){ font-size:0; } .brand span { font-size:9px; } .nav-item { justify-content:center; } .nav-item span { font-size:11px; } .update-grid,.project-preview { grid-template-columns:1fr 1fr; } .stats-grid { grid-template-columns:1fr 1fr; } }
```

- [ ] **Step 6: 运行测试并提交**

Run:

```powershell
npm test
git add app content tests package.json package-lock.json
git commit -m "feat: build knowledge base workbench overview"
```

Expected: 内容测试、构建和成品外壳测试全部通过；starter 目录和依赖均已移除。

---

### Task 4: 实现六栏目视图和栏目内筛选

**Files:**
- Create: `08-Demo项目/个人知识库Sites/lib/filtering.mjs`
- Create: `08-Demo项目/个人知识库Sites/tests/filtering.test.mjs`
- Create: `08-Demo项目/个人知识库Sites/app/components/TimelineView.tsx`
- Create: `08-Demo项目/个人知识库Sites/app/components/ProjectsView.tsx`
- Create: `08-Demo项目/个人知识库Sites/app/components/WorkflowView.tsx`
- Create: `08-Demo项目/个人知识库Sites/app/components/AbilitiesView.tsx`
- Create: `08-Demo项目/个人知识库Sites/app/components/EvidenceView.tsx`
- Create: `08-Demo项目/个人知识库Sites/app/components/EmptyState.tsx`
- Modify: `08-Demo项目/个人知识库Sites/app/components/KnowledgeBaseApp.tsx`
- Modify: `08-Demo项目/个人知识库Sites/app/globals.css`
- Modify: `08-Demo项目/个人知识库Sites/tests/rendered-html.test.mjs`
- Modify: `08-Demo项目/个人知识库Sites/package.json`

**Interfaces:**
- Consumes: `KnowledgeBaseContent` 和当前 `ViewId`。
- Produces: `filterProjects(items, theme)`、`filterAbilities(items, level, strength)`、`filterEvidence(items, status, strength)`；六个栏目均可渲染，三个数据栏目可筛选。三个可点击视图把原始内容项传给顶层回调，详情映射留给 Task 5。

- [ ] **Step 1: 写筛选失败测试**

Create `tests/filtering.test.mjs`:

```js
import assert from "node:assert/strict";
import test from "node:test";
import { filterAbilities, filterEvidence, filterProjects } from "../lib/filtering.mjs";

test("filters projects by theme and returns an empty result", () => {
  const items = [{ theme: "成长" }, { theme: "共创" }];
  assert.deepEqual(filterProjects(items, "成长"), [{ theme: "成长" }]);
  assert.deepEqual(filterProjects(items, "不存在"), []);
});

test("filters abilities by level and strength", () => {
  const items = [{ level: "能独立完成", strength: "强" }, { level: "了解", strength: "中" }];
  assert.equal(filterAbilities(items, "能独立完成", "强").length, 1);
});

test("filters evidence by status and strength", () => {
  const items = [{ status: "仅可脱敏摘要", strength: "强" }, { status: "不得公开", strength: "中" }];
  assert.equal(filterEvidence(items, "不得公开", "中").length, 1);
});
```

- [ ] **Step 2: 运行测试并确认失败**

Run:

```powershell
node --test tests/filtering.test.mjs
```

Expected: FAIL，因为 `lib/filtering.mjs` 尚不存在。

- [ ] **Step 3: 实现纯筛选函数**

Create `lib/filtering.mjs`:

```js
const matches = (actual, selected) => selected === "全部" || actual === selected;

export const filterProjects = (items, theme = "全部") => items.filter((item) => matches(item.theme, theme));

export const filterAbilities = (items, level = "全部", strength = "全部") =>
  items.filter((item) => matches(item.level, level) && matches(item.strength, strength));

export const filterEvidence = (items, status = "全部", strength = "全部") =>
  items.filter((item) => matches(item.status, status) && matches(item.strength, strength));
```

Run:

```powershell
node --test tests/filtering.test.mjs
```

Expected: 3 tests PASS。

- [ ] **Step 4: 实现时间线和沉淀链路视图**

Create `TimelineView.tsx`:

```tsx
import type { KnowledgeBaseContent } from "@/lib/content-model.mjs";

export function TimelineView({ items }: { items: KnowledgeBaseContent["timeline"] }) {
  if (items.length === 0) return <p className="empty-state">暂无记录</p>;
  return <section className="view-panel"><header className="page-heading"><div><span className="eyebrow">TIMELINE</span><h1>轮岗时间线</h1></div></header><div className="timeline-list">{items.map((item) => <article className="timeline-item" key={item.period}><time>{item.period}</time><div><h2>{item.stage}</h2><p>{item.focus}</p><ul>{item.outputs.map((output) => <li key={output}>{output}</li>)}</ul><div className="tag-row">{item.themes.map((theme) => <span className="tag" key={theme}>{theme}</span>)}</div><blockquote>{item.thought}</blockquote></div></article>)}</div></section>;
}
```

Create `WorkflowView.tsx`:

```tsx
import type { KnowledgeBaseContent } from "@/lib/content-model.mjs";

export function WorkflowView({ items }: { items: KnowledgeBaseContent["workflow"] }) {
  if (items.length === 0) return <p className="empty-state">暂无记录</p>;
  return <section className="view-panel"><header className="page-heading"><div><span className="eyebrow">WORKFLOW</span><h1>个人成长链路</h1></div></header><div className="workflow-grid">{items.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{item.title}</h2><p>{item.body}</p></article>)}</div></section>;
}
```

- [ ] **Step 5: 实现项目、能力和证据筛选视图**

Create `EmptyState.tsx`:

```tsx
export function EmptyState({ message = "暂无记录" }: { message?: string }) {
  return <p className="empty-state">{message}</p>;
}
```

Create `ProjectsView.tsx`:

```tsx
"use client";
import { useMemo, useState } from "react";
import type { KnowledgeBaseContent } from "@/lib/content-model.mjs";
import { filterProjects } from "@/lib/filtering.mjs";
import { EmptyState } from "./EmptyState";

type Project = KnowledgeBaseContent["projects"][number];
export function ProjectsView({ items, onOpen }: { items: Project[]; onOpen: (item: Project) => void }) {
  const [theme, setTheme] = useState("全部");
  const options = useMemo(() => ["全部", ...new Set(items.map((item) => item.theme))], [items]);
  const filtered = filterProjects(items, theme);
  return <section className="view-panel"><header className="page-heading"><div><span className="eyebrow">PROJECTS</span><h1>项目案例</h1></div></header><div className="filter-bar"><label>主题<select value={theme} onChange={(event) => setTheme(event.target.value)}>{options.map((option) => <option key={option}>{option}</option>)}</select></label></div>{filtered.length === 0 ? <EmptyState message="没有符合当前筛选条件的内容。" /> : <div className="card-grid">{filtered.map((item) => <button className="data-card" type="button" key={item.title} onClick={() => onOpen(item)}><span>{item.theme}</span><h2>{item.title}</h2><p>{item.problem}</p></button>)}</div>}</section>;
}
```

Create `AbilitiesView.tsx`:

```tsx
"use client";
import { useMemo, useState } from "react";
import type { KnowledgeBaseContent } from "@/lib/content-model.mjs";
import { filterAbilities } from "@/lib/filtering.mjs";
import { EmptyState } from "./EmptyState";

type Ability = KnowledgeBaseContent["abilities"][number];
export function AbilitiesView({ items, onOpen }: { items: Ability[]; onOpen: (item: Ability) => void }) {
  const [level, setLevel] = useState("全部"); const [strength, setStrength] = useState("全部");
  const levels = useMemo(() => ["全部", ...new Set(items.map((item) => item.level))], [items]);
  const strengths = useMemo(() => ["全部", ...new Set(items.map((item) => item.strength))], [items]);
  const filtered = filterAbilities(items, level, strength);
  return <section className="view-panel"><header className="page-heading"><div><span className="eyebrow">ABILITIES</span><h1>能力地图</h1></div></header><div className="filter-bar"><label>当前程度<select value={level} onChange={(event) => setLevel(event.target.value)}>{levels.map((option) => <option key={option}>{option}</option>)}</select></label><label>证据强度<select value={strength} onChange={(event) => setStrength(event.target.value)}>{strengths.map((option) => <option key={option}>{option}</option>)}</select></label></div>{filtered.length === 0 ? <EmptyState message="没有符合当前筛选条件的内容。" /> : <div className="card-grid">{filtered.map((item) => <button className="data-card" type="button" key={item.name} onClick={() => onOpen(item)}><span>{item.strength}</span><h2>{item.name}</h2><p>{item.evidence}</p></button>)}</div>}</section>;
}
```

Create `EvidenceView.tsx`:

```tsx
"use client";
import { useMemo, useState } from "react";
import type { KnowledgeBaseContent } from "@/lib/content-model.mjs";
import { filterEvidence } from "@/lib/filtering.mjs";
import { EmptyState } from "./EmptyState";

type Evidence = KnowledgeBaseContent["evidence"][number];
export function EvidenceView({ items, onOpen }: { items: Evidence[]; onOpen: (item: Evidence) => void }) {
  const [status, setStatus] = useState("全部"); const [strength, setStrength] = useState("全部");
  const statuses = useMemo(() => ["全部", ...new Set(items.map((item) => item.status))], [items]);
  const strengths = useMemo(() => ["全部", ...new Set(items.map((item) => item.strength))], [items]);
  const filtered = filterEvidence(items, status, strength);
  return <section className="view-panel"><header className="page-heading"><div><span className="eyebrow">EVIDENCE</span><h1>证据索引</h1></div></header><div className="filter-bar"><label>状态<select value={status} onChange={(event) => setStatus(event.target.value)}>{statuses.map((option) => <option key={option}>{option}</option>)}</select></label><label>强度<select value={strength} onChange={(event) => setStrength(event.target.value)}>{strengths.map((option) => <option key={option}>{option}</option>)}</select></label></div>{filtered.length === 0 ? <EmptyState message="没有符合当前筛选条件的内容。" /> : <div className="evidence-list">{filtered.map((item) => <button type="button" key={item.id} onClick={() => onOpen(item)}><strong>{item.id}</strong><span>{item.title}</span><small>{item.status} · {item.strength}</small></button>)}</div>}</section>;
}
```

- [ ] **Step 6: 注册全部栏目并使 SSR 包含栏目内容**

Replace `KnowledgeBaseApp.tsx` so it renders all six panels and toggles `hidden` rather than conditionally omitting them:

```tsx
"use client";

import { useState } from "react";
import type { KnowledgeBaseContent } from "@/lib/content-model.mjs";
import { AbilitiesView } from "./AbilitiesView";
import { EvidenceView } from "./EvidenceView";
import { OverviewView } from "./OverviewView";
import { ProjectsView } from "./ProjectsView";
import { Sidebar, type ViewId } from "./Sidebar";
import { TimelineView } from "./TimelineView";
import { WorkflowView } from "./WorkflowView";

export function KnowledgeBaseApp({ content }: { content: KnowledgeBaseContent }) {
  const [view, setView] = useState<ViewId>("overview");
  return <div className="app-shell"><Sidebar active={view} onChange={setView} /><main className="main-content"><section hidden={view !== "overview"}><OverviewView content={content} /></section><section hidden={view !== "timeline"}><TimelineView items={content.timeline} /></section><section hidden={view !== "projects"}><ProjectsView items={content.projects} onOpen={() => undefined} /></section><section hidden={view !== "workflow"}><WorkflowView items={content.workflow} /></section><section hidden={view !== "abilities"}><AbilitiesView items={content.abilities} onOpen={() => undefined} /></section><section hidden={view !== "evidence"}><EvidenceView items={content.evidence} onOpen={() => undefined} /></section></main></div>;
}
```

Add to `tests/rendered-html.test.mjs`:

```js
for (const heading of ["个人成长链路", "项目案例", "能力地图", "证据索引"]) {
  assert.match(html, new RegExp(heading));
}
```

- [ ] **Step 7: 补齐栏目样式并运行测试**

Add the exact CSS below:

```css
[hidden] { display:none!important; }
.filter-bar { display:flex; flex-wrap:wrap; gap:12px; margin:0 0 20px; }
.filter-bar label { display:grid; gap:6px; color:var(--muted); font-size:12px; font-weight:700; }
.filter-bar select { min-width:160px; border:1px solid var(--line); border-radius:8px; padding:9px 34px 9px 11px; background:#fff; color:var(--ink); }
.filter-bar select:focus-visible,.data-card:focus-visible,.evidence-list button:focus-visible { outline:3px solid #f3a63a66; outline-offset:2px; }
.timeline-list { position:relative; display:grid; gap:18px; }
.timeline-list::before { content:""; position:absolute; left:72px; top:10px; bottom:10px; width:2px; background:var(--line); }
.timeline-item { position:relative; display:grid; grid-template-columns:56px minmax(0,1fr); gap:36px; }
.timeline-item time { color:#9a610f; font-size:12px; font-weight:800; }
.timeline-item > div { padding:22px; border:1px solid var(--line); border-radius:12px; background:#fff; }
.timeline-item > div::before { content:""; position:absolute; left:68px; top:20px; width:10px; height:10px; border-radius:50%; background:var(--accent); box-shadow:0 0 0 5px var(--accent-soft); }
.timeline-item h2 { margin:0 0 8px; font-size:19px; }
.timeline-item p,.timeline-item li,.timeline-item blockquote { color:var(--muted); line-height:1.7; }
.timeline-item blockquote { margin:16px 0 0; padding:12px 14px; border-left:3px solid var(--accent); background:var(--accent-soft); }
.workflow-grid,.card-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:16px; }
.workflow-grid article,.data-card { padding:22px; border:1px solid var(--line); border-radius:12px; background:#fff; }
.workflow-grid article > span,.data-card > span { color:#a16310; font-size:12px; font-weight:800; }
.workflow-grid h2,.data-card h2 { margin:10px 0; font-size:18px; }
.workflow-grid p,.data-card p { color:var(--muted); line-height:1.7; }
.data-card { width:100%; color:inherit; text-align:left; }
.data-card:hover,.evidence-list button:hover { border-color:#f3a63a; transform:translateY(-1px); }
.evidence-list { display:grid; gap:10px; }
.evidence-list button { display:grid; grid-template-columns:84px minmax(0,1fr) auto; gap:18px; align-items:center; width:100%; padding:16px 18px; border:1px solid var(--line); border-radius:10px; background:#fff; color:inherit; text-align:left; }
.evidence-list strong { color:#9a610f; }
.evidence-list small { color:var(--muted); }
.empty-state { padding:36px; border:1px dashed #c8cdd4; border-radius:12px; color:var(--muted); text-align:center; background:#fff; }
@media (max-width:1000px) { .workflow-grid,.card-grid { grid-template-columns:1fr 1fr; } }
```

Update `package.json` test script:

```json
"test": "node --test tests/content-model.test.mjs tests/filtering.test.mjs && npm run build && node --test tests/rendered-html.test.mjs"
```

Run:

```powershell
npm test
git add app lib tests package.json package-lock.json
git commit -m "feat: add knowledge base views and filters"
```

Expected: 5 unit tests、构建和渲染测试全部通过。

---

### Task 5: 实现详情抽屉、空状态和键盘关闭

**Files:**
- Create: `08-Demo项目/个人知识库Sites/app/components/DetailDrawer.tsx`
- Modify: `08-Demo项目/个人知识库Sites/app/components/KnowledgeBaseApp.tsx`
- Modify: `08-Demo项目/个人知识库Sites/app/globals.css`
- Modify: `08-Demo项目/个人知识库Sites/tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: `DetailItem = { kind: "项目" | "能力" | "证据"; title: string; fields: Array<{ label: string; value: string | string[] }> } | null`。
- Produces: `DetailDrawer({ item, onClose })`，支持关闭按钮、遮罩点击和 Escape 键。

- [ ] **Step 1: 添加详情抽屉失败测试**

Add to `tests/rendered-html.test.mjs`:

```js
assert.match(html, /aria-label="详情面板"/);
assert.match(html, /选择一个项目、能力或证据查看详情/);
```

Run:

```powershell
npm test
```

Expected: FAIL，因为详情抽屉尚未渲染。

- [ ] **Step 2: 实现通用详情类型和抽屉**

Create `DetailDrawer.tsx`:

```tsx
"use client";

import { useEffect } from "react";

export type DetailItem = { kind: "项目" | "能力" | "证据"; title: string; fields: Array<{ label: string; value: string | string[] }> };

export function DetailDrawer({ item, onClose }: { item: DetailItem | null; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape" && item) onClose(); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [item, onClose]);

  return (
    <aside className={item ? "detail-drawer open" : "detail-drawer"} aria-label="详情面板" aria-hidden={!item}>
      <button className="drawer-close" type="button" onClick={onClose} aria-label="关闭详情">×</button>
      {item ? <><span className="eyebrow">{item.kind}</span><h2>{item.title}</h2><dl>{item.fields.map((field) => <div key={field.label}><dt>{field.label}</dt><dd>{Array.isArray(field.value) ? field.value.join("、") : field.value}</dd></div>)}</dl></> : <p>选择一个项目、能力或证据查看详情</p>}
    </aside>
  );
}
```

- [ ] **Step 3: 将内容映射为 DetailItem 并接入应用**

Replace `KnowledgeBaseApp.tsx` with the final mapping and drawer integration:

```tsx
"use client";

import { useState } from "react";
import type { KnowledgeBaseContent } from "@/lib/content-model.mjs";
import { AbilitiesView } from "./AbilitiesView";
import { DetailDrawer, type DetailItem } from "./DetailDrawer";
import { EvidenceView } from "./EvidenceView";
import { OverviewView } from "./OverviewView";
import { ProjectsView } from "./ProjectsView";
import { Sidebar, type ViewId } from "./Sidebar";
import { TimelineView } from "./TimelineView";
import { WorkflowView } from "./WorkflowView";

export function KnowledgeBaseApp({ content }: { content: KnowledgeBaseContent }) {
  const [view, setView] = useState<ViewId>("overview");
  const [detail, setDetail] = useState<DetailItem | null>(null);
  const openProject = (item: KnowledgeBaseContent["projects"][number]) => setDetail({ kind:"项目", title:item.title, fields:[{label:"类型",value:item.type},{label:"问题",value:item.problem},{label:"参与",value:item.coCreate},{label:"成长",value:item.growth},{label:"思考",value:item.reflection}] });
  const openAbility = (item: KnowledgeBaseContent["abilities"][number]) => setDetail({ kind:"能力", title:item.name, fields:[{label:"当前程度",value:item.level},{label:"证据强度",value:item.strength},{label:"已有证据",value:item.evidence},{label:"下一步",value:item.next},{label:"标签",value:item.tags}] });
  const openEvidence = (item: KnowledgeBaseContent["evidence"][number]) => setDetail({ kind:"证据", title:`${item.id} · ${item.title}`, fields:[{label:"可证明内容",value:item.proof},{label:"限制",value:item.limit},{label:"状态",value:item.status},{label:"强度",value:item.strength}] });
  return <div className="app-shell"><Sidebar active={view} onChange={setView} /><main className="main-content"><section hidden={view !== "overview"}><OverviewView content={content} /></section><section hidden={view !== "timeline"}><TimelineView items={content.timeline} /></section><section hidden={view !== "projects"}><ProjectsView items={content.projects} onOpen={openProject} /></section><section hidden={view !== "workflow"}><WorkflowView items={content.workflow} /></section><section hidden={view !== "abilities"}><AbilitiesView items={content.abilities} onOpen={openAbility} /></section><section hidden={view !== "evidence"}><EvidenceView items={content.evidence} onOpen={openEvidence} /></section></main><DetailDrawer item={detail} onClose={() => setDetail(null)} /></div>;
}
```

- [ ] **Step 4: 实现抽屉与空状态样式**

Add CSS:

```css
.empty-state { padding:36px; border:1px dashed #c8cdd4; border-radius:12px; color:var(--muted); text-align:center; background:#fff; }
.detail-drawer { position:fixed; z-index:20; top:0; right:0; width:min(440px,90vw); height:100vh; padding:32px; overflow:auto; background:#fff; box-shadow:-20px 0 60px #17191d24; transform:translateX(105%); transition:transform .2s ease; }
.detail-drawer.open { transform:translateX(0); }
.drawer-close { float:right; width:36px; height:36px; border:1px solid var(--line); border-radius:8px; background:#fff; font-size:22px; }
.detail-drawer h2 { clear:both; margin:10px 0 24px; }
.detail-drawer dl { display:grid; gap:18px; }
.detail-drawer dl div { border-top:1px solid var(--line); padding-top:14px; }
@media (prefers-reduced-motion:reduce) { *,*::before,*::after { scroll-behavior:auto!important; transition-duration:.01ms!important; animation-duration:.01ms!important; } }
```

- [ ] **Step 5: 运行完整测试并提交**

Run:

```powershell
npm test
git add app tests
git commit -m "feat: add detail drawer and empty states"
```

Expected: 单元测试、构建和渲染测试全部通过。

---

### Task 6: 最终验证、私密发布与交付

**Files:**
- Modify: `08-Demo项目/个人知识库Sites/.openai/hosting.json`（由 Sites 写入 `project_id`）
- Verify: `08-Demo项目/个人知识库Sites/dist/server/index.js`
- Create temporary: `C:\Users\Lenovo\Documents\个人知识库\.tmp\personal-knowledge-base-site.zip`

**Interfaces:**
- Consumes: 所有已通过测试的站点源码和当前站点 Git HEAD。
- Produces: Sites 私密部署 URL，并在 Codex 内打开该 URL。

- [ ] **Step 1: 执行最终来源与禁用功能检查**

Run from `08-Demo项目/个人知识库Sites`:

```powershell
rg -n "全站搜索|生成汇报摘要|codex-preview|react-loading-skeleton|C:\\Users\\Lenovo" app content public
```

Expected: 无匹配。若匹配来自用户内容而不是功能或路径，逐项核对后再继续，不批量删除事实文本。

- [ ] **Step 2: 执行最终测试与构建**

Run while the retained development service remains alive:

```powershell
npm test
```

Expected: 内容测试、筛选测试、Cloudflare Worker 兼容构建和渲染测试全部通过；`dist/server/index.js` 存在。

- [ ] **Step 3: 确认工作区只包含本项目变更并提交**

Run:

```powershell
git status --short
git add .
git commit -m "chore: prepare private knowledge base deployment"
git rev-parse HEAD
```

Expected: 获得干净工作区和最终 `commit_sha`。如果没有新变更，跳过空提交并直接读取当前 HEAD。

- [ ] **Step 4: 创建 Sites 项目并保存项目标识**

Call Sites `create_site` once with the exact slug `guanpeisheng-growth-knowledge-base`。Persist only the returned `project_id` in `.openai/hosting.json`; keep `d1` and `r2` as `null`。Commit this exact metadata update, push the validated source with the returned short-lived write credential, and use the pushed branch-head SHA as `commit_sha`。

Expected: Sites project exists, source is pushed, credentials are not written into Git configuration or remote URLs。

- [ ] **Step 5: 打包并保存一个站点版本**

Run:

```powershell
New-Item -ItemType Directory -Force 'C:\Users\Lenovo\Documents\个人知识库\.tmp' | Out-Null
& 'C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\usr\bin\sh.exe' `
  'C:/Users/Lenovo/.codex/plugins/cache/openai-bundled/sites/0.1.27/scripts/package-site.sh' `
  'C:/Users/Lenovo/Documents/个人知识库/08-Demo项目/个人知识库Sites' `
  'C:/Users/Lenovo/Documents/个人知识库/.tmp/personal-knowledge-base-site.zip'
```

Expected: 包含 `dist/` 和 `.openai/hosting.json` 的部署包生成成功。Call Sites `save_site_version` once with this archive and the pushed `commit_sha`。

- [ ] **Step 6: 私密部署并等待成功**

Call `deploy_private_site_version`。Poll `get_deployment_status` directly until `status: "succeeded"` or a terminal failure。

Expected: 状态为 `succeeded` 并返回私密 `deployedUrl`。不得改用公开部署。

- [ ] **Step 7: 打开并交付私密网站**

Call `open_in_codex` once without `threadId`, using the exact `deployedUrl`。Stop the retained development service after hosting completes。

Expected: Codex 中打开私密网站；最终回复只提供私密 URL 和网站用途摘要，不暴露项目 ID、凭据、提交 SHA 或临时压缩包路径。

---

## Plan Self-Review Result

- Spec coverage: 目标、唯一来源、B＋C 架构、六栏目、首页优先级、黑橙视觉、电脑端、筛选、详情抽屉、禁用功能、错误处理、验证与私密发布均有对应任务。
- Placeholder scan: 未发现占位标记、未完成标记或未定义的后续步骤。
- Type consistency: `KnowledgeBaseContent`、`ViewId`、`DetailItem`、验证函数和筛选函数在首次使用前均有明确接口；后续任务沿用同名接口。
