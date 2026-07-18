# Personal Capability Context Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将《个人能力边界与建模能力说明》纳入 Codex 项目长期上下文，并建立“所有新增能力必须关联项目证据”的强制准入闭环。

**Architecture:** 根目录 `AGENTS.md` 只保存必须长期执行的短规则，并指向独立能力基线和治理规则；完整能力说明保存在 `04-能力证据`。治理规则、项目模板和导航入口共同约束能力线索如何进入证据索引、能力地图和对外资产。

**Tech Stack:** Markdown、Codex 根目录指令、PowerShell 校验、Git。

## Global Constraints

- 不要自己下判断，涉及到判断的内容全都问用户。
- 能力说明是阶段性能力基线，不是项目证据。
- 新增能力必须关联具体项目复盘和证据编号；证据不足时只能标记为“待验证”。
- 不重写简历、不修改 Demo、不批量重评 E-001 至 E-013。
- 不上传仅本地原始材料，不把团队成果全部归因于个人。
- 只修改本计划列出的文件；本次在隔离工作区执行，根目录当前未跟踪的 `08-Demo项目/个人知识库Sites/` 不会进入隔离工作区，也不得纳入本次提交。
- 所有文件编辑使用 `apply_patch`；Git 使用 `C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe`。
- 云端推送不包含在自动实施范围；本地提交完成后必须先询问用户是否推送。

---

## File Map

| 文件 | 责任 |
| --- | --- |
| `AGENTS.md` | Codex 在整个知识库中必须长期遵守的简短执行约束 |
| `04-能力证据/个人能力边界与建模能力说明.md` | 完整、可维护的人类可读阶段性能力基线 |
| `00-导航/知识库治理规则.md` | 能力线索、能力候选、证据和对外表述的正式准入规则 |
| `06-模板/项目案例模板.md` | 新项目沉淀时强制记录能力、证据和贡献边界 |
| `06-模板/工作复盘模板.md` | 日常复盘转为能力证据时的准入字段 |
| `README.md` | 根目录纯文本导航入口 |
| `04-能力证据/能力地图.md` | 能力基线入口和新增能力准入说明 |
| `docs/superpowers/specs/2026-07-15-personal-capability-context-design.md` | 将设计状态从“待用户复核”更新为“已确认” |

### Task 1: 建立 Codex 长期上下文和能力基线

**Files:**
- Create: `AGENTS.md`
- Create: `04-能力证据/个人能力边界与建模能力说明.md`
- Modify: `docs/superpowers/specs/2026-07-15-personal-capability-context-design.md`

**Interfaces:**
- Consumes: 用户附件 `C:\Users\Lenovo\.codex\attachments\e19caf7d-8747-4349-9d7f-972d25f87677\pasted-text.txt`
- Produces: 根目录执行规则，以及后续治理、能力地图和对外资产共同引用的能力基线文件

- [ ] **Step 1: 验证长期上下文文件当前不存在**

Run:

```powershell
Test-Path 'AGENTS.md'
Test-Path '04-能力证据\个人能力边界与建模能力说明.md'
```

Expected: 两行均为 `False`。如果任一文件已存在，停止并把文件内容交给用户判断，不覆盖。

- [ ] **Step 2: 创建根目录 `AGENTS.md`**

使用 `apply_patch` 写入以下完整内容：

```markdown
# 项目长期执行规则

## 用户决策边界

- 不要自己下判断，涉及到判断的内容全都问用户。
- 不根据材料自行提升能力等级、确定证据强度或决定是否进入简历、述职、面试材料、作品集和 Demo。

## 必读上下文

处理能力地图、简历、述职、面试材料、作品集或 Demo 前，先读取：

1. `00-导航/知识库治理规则.md`
2. `04-能力证据/个人能力边界与建模能力说明.md`
3. `04-能力证据/证据索引.md`
4. `04-能力证据/待补证据清单.md`

## 能力证据准入

- 所有新增能力必须指向具体项目或任务，并关联项目复盘和证据编号 `E-XXX`。
- 只有自我评价、学习感受或单次表现时，只能记录为能力线索；是否标记为“待验证”需要询问用户。
- 未建立项目复盘和证据编号前，不得写入正式能力地图，不得转化为确定性的对外能力表述。
- 不将团队成果全部归因于个人；不将“提供依据”改写为“独立落地”；不将“通过审核”改写为“已上线”。
- 不虚构收入、效率、增长、准确率、采纳或上线结果。
- 对外资产必须完成贡献边界确认和脱敏检查，原始内部材料继续保留在仅本地目录。
```

- [ ] **Step 3: 创建能力基线文件**

使用 `apply_patch` 创建 `04-能力证据/个人能力边界与建模能力说明.md`。文件开头必须是：

```markdown
# 姚远｜个人能力边界与建模能力说明

- 状态：进行中
- 更新日期：2026-07-16
- 保密级别：已脱敏
- 定位：阶段性能力基线
- 证据属性：本文件不是项目证据，正式能力认定以项目复盘和证据索引为准

## 使用边界

1. 本文件用于约束能力表述、明确当前边界和指导后续沉淀。
2. 新增能力必须关联具体项目复盘和证据编号 `E-XXX`。
3. 证据不足时不得自行认定能力或提升能力等级，必须询问用户。
4. 本文件与项目证据发生冲突时，不自行选择口径，必须列出冲突并询问用户。

---
```

随后从附件中复制从 `## 1. 文档目的` 开始的全部正文，保持文字、数字和项目边界不变；不重复附件原有的一级标题。

- [ ] **Step 4: 将设计状态更新为已确认**

在 `docs/superpowers/specs/2026-07-15-personal-capability-context-design.md` 中只修改：

```diff
-- 状态：待用户复核
+- 状态：已确认
+- 确认日期：2026-07-16
```

- [ ] **Step 5: 验证上下文和原文完整性**

Run:

```powershell
$source = Get-Content -Raw -Encoding UTF8 'C:\Users\Lenovo\.codex\attachments\e19caf7d-8747-4349-9d7f-972d25f87677\pasted-text.txt'
$sourceBody = $source.Substring($source.IndexOf('## 1. 文档目的')).Trim() -replace "`r`n?", "`n"
$target = Get-Content -Raw -Encoding UTF8 '04-能力证据\个人能力边界与建模能力说明.md'
$targetNormalized = $target -replace "`r`n?", "`n"
if (-not $targetNormalized.Contains($sourceBody)) { throw '能力说明原文未被完整保留' }
rg -n "不要自己下判断|所有新增能力必须|E-XXX|本文件不是项目证据" 'AGENTS.md' '04-能力证据\个人能力边界与建模能力说明.md'
```

Expected: 不抛出异常；`rg` 同时命中 `AGENTS.md` 和能力基线文件。

- [ ] **Step 6: 验证并提交 Task 1**

Run:

```powershell
$git = 'C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe'
& $git diff --check
& $git status --short
```

Expected: `git diff --check` 无输出；隔离工作区的状态只包含 Task 1 的三个文件，根目录原有 Sites 目录保持不变。

Commit:

```powershell
& $git add -- 'AGENTS.md' '04-能力证据/个人能力边界与建模能力说明.md' 'docs/superpowers/specs/2026-07-15-personal-capability-context-design.md'
& $git commit -m 'docs: add capability context rules'
```

### Task 2: 把证据准入规则写入治理层和模板

**Files:**
- Modify: `00-导航/知识库治理规则.md`
- Modify: `06-模板/项目案例模板.md`
- Modify: `06-模板/工作复盘模板.md`

**Interfaces:**
- Consumes: Task 1 的 `AGENTS.md` 与能力基线定义
- Produces: 后续所有项目复盘可执行的证据准入字段

- [ ] **Step 1: 验证治理规则尚未包含正式准入章节**

Run:

```powershell
rg -n "能力认定与证据准入|能力线索|能力候选|对外能力表述" '00-导航\知识库治理规则.md'
```

Expected: 无匹配，退出码为 `1`。如果已有匹配，停止并将现有内容交给用户判断是否合并。

- [ ] **Step 2: 更新治理规则版本与准入章节**

将版本从 `1.4` 更新为 `1.5`，生效日期保持原值；在现有“模板管理”之后插入：

```markdown
## 10. 能力认定与证据准入

能力表述按以下四个状态管理：

| 状态 | 最低要求 | 允许进入的位置 |
| --- | --- | --- |
| 能力线索 | 自我观察、学习感受或单次表现 | 收集箱、实践复盘 |
| 能力候选 | 至少关联一个具体项目和个人动作 | 能力基线、待补证据清单 |
| 已有能力证据 | 项目复盘 + E 编号 + 可说明的材料或反馈 | 能力地图 |
| 对外能力表述 | 已有能力证据 + 贡献边界确认 + 脱敏复核 | 简历、述职、面试材料、作品集和 Demo |

执行规则：

1. 新增能力必须关联具体项目复盘和证据编号；没有项目证据时不得写成确定能力。
2. 能力等级提升必须有新增项目证据、外部反馈、量化结果或跨项目复用记录，不能只依据措辞优化或个人主观判断。
3. 涉及证据强度、能力等级、是否进入能力地图或是否转为对外资产的判断，必须询问用户。
4. 证据不足时不得自行补充结果；是否标记为“待验证”也需要询问用户。
5. 能力基线用于约束表述和记录边界，本身不创建 E 编号，也不替代项目证据。
```

把原有第 10 至第 13 节顺延为第 11 至第 14 节，并在版本记录末尾增加：

```markdown
| 1.5 | 2026-07-16 | 新增能力认定与证据准入规则，明确新增能力必须关联项目复盘和 E 编号 |
```

- [ ] **Step 3: 更新项目案例模板**

在基础信息区增加：

```markdown
- 拟证明的能力：
- 证据编号：待建立 / E-XXX
- 验证状态：能力线索 / 能力候选 / 已有能力证据 / 对外能力表述
```

把 `## 关键材料` 改为以下完整结构：

```markdown
## 项目证据与材料位置

- 项目复盘：
- 原始材料：
- 外部反馈或量化结果：
- 仍缺证据：

## 能力证据准入

- [ ] 已明确个人贡献边界
- [ ] 已建立或关联 E 编号
- [ ] 已由用户确认证据强度和能力等级
- [ ] 已完成脱敏复核
- [ ] 已由用户确认是否允许进入对外资产
```

- [ ] **Step 4: 更新工作复盘模板**

在基础信息区增加：

```markdown
- 拟证明的能力：
- 证据编号：待建立 / E-XXX
- 验证状态：能力线索 / 能力候选 / 已有能力证据 / 对外能力表述
```

在 `## 结果与证据` 后增加：

```markdown
## 项目证据与材料位置

- 项目或任务复盘：
- 原始材料：
- 外部反馈或量化结果：
- 仍缺证据：

## 个人贡献边界

## 能力证据准入

- [ ] 已明确个人贡献边界
- [ ] 已建立或关联 E 编号
- [ ] 已由用户确认证据强度和能力等级
- [ ] 已完成脱敏复核
- [ ] 已由用户确认是否允许进入对外资产
```

- [ ] **Step 5: 验证治理和模板字段**

Run:

```powershell
rg -n "版本：1.5|能力认定与证据准入|必须询问用户|1.5 \| 2026-07-16" '00-导航\知识库治理规则.md'
rg -n "拟证明的能力|证据编号|验证状态|个人贡献边界|用户确认是否允许进入对外资产" '06-模板\项目案例模板.md' '06-模板\工作复盘模板.md'
```

Expected: 治理规则命中版本、章节、用户决策边界和版本记录；两个模板均命中五类准入字段。

- [ ] **Step 6: 验证并提交 Task 2**

Run:

```powershell
$git = 'C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe'
& $git diff --check
& $git status --short
```

Expected: 无空白错误；隔离工作区的新增变更只包含 Task 2 的三个文件，根目录原有 Sites 目录保持不变。

Commit:

```powershell
& $git add -- '00-导航/知识库治理规则.md' '06-模板/项目案例模板.md' '06-模板/工作复盘模板.md'
& $git commit -m 'docs: enforce capability evidence gate'
```

### Task 3: 增加入口并完成整体校验

**Files:**
- Modify: `README.md`
- Modify: `04-能力证据/能力地图.md`

**Interfaces:**
- Consumes: Task 1 的能力基线和 Task 2 的准入规则
- Produces: 人工入口、能力地图使用说明和完整验证结果

- [ ] **Step 1: 在根目录 README 增加纯文本入口**

在“证据缺口集中追踪”段落之后增加：

```markdown
个人能力边界与建模能力说明：`04-能力证据/个人能力边界与建模能力说明.md`。该文件是阶段性能力基线，不是项目证据；新增能力必须先关联项目复盘和证据编号。
```

- [ ] **Step 2: 在能力地图增加能力基线入口和准入说明**

在一级标题之后、能力等级说明之前增加：

```markdown
能力表述边界见[个人能力边界与建模能力说明](个人能力边界与建模能力说明.md)。该文件是阶段性能力基线，不替代项目证据。

新增能力进入本地图前，必须满足：

1. 关联具体项目或任务；
2. 已形成项目复盘；
3. 已建立或关联证据编号 `E-XXX`；
4. 已由用户确认证据强度和能力等级。
```

- [ ] **Step 3: 验证新增链接、规则和原文完整性**

Run:

```powershell
$source = Get-Content -Raw -Encoding UTF8 'C:\Users\Lenovo\.codex\attachments\e19caf7d-8747-4349-9d7f-972d25f87677\pasted-text.txt'
$sourceBody = $source.Substring($source.IndexOf('## 1. 文档目的')).Trim() -replace "`r`n?", "`n"
$target = Get-Content -Raw -Encoding UTF8 '04-能力证据\个人能力边界与建模能力说明.md'
$targetNormalized = $target -replace "`r`n?", "`n"
if (-not $targetNormalized.Contains($sourceBody)) { throw '能力说明原文未被完整保留' }
if (-not (Test-Path '04-能力证据\个人能力边界与建模能力说明.md')) { throw '能力基线不存在' }
rg -n "个人能力边界与建模能力说明|阶段性能力基线|E-XXX|用户确认" 'README.md' '04-能力证据\能力地图.md' 'AGENTS.md' '00-导航\知识库治理规则.md'
```

Expected: 不抛出异常；四个长期入口或规则文件均命中预期口径。

- [ ] **Step 4: 检查本次新增的 Markdown 相对链接**

Run:

```powershell
$files = @('04-能力证据\能力地图.md')
$failed = @()
foreach ($file in $files) {
  $content = Get-Content -Raw -Encoding UTF8 $file
  $matches = [regex]::Matches($content, '\[[^\]]+\]\((?!https?://|#)([^)]+)\)')
  foreach ($match in $matches) {
    $raw = $match.Groups[1].Value.Trim('<','>')
    $path = Join-Path (Split-Path $file) $raw
    if (-not (Test-Path $path)) { $failed += "$file -> $raw" }
  }
}
if ($failed.Count -gt 0) { $failed; throw '存在失效链接' }
```

Expected: 无输出、无异常。

- [ ] **Step 5: 检查敏感材料和提交范围**

Run:

```powershell
$git = 'C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe'
& $git diff --check
& $git status --short
& $git diff --name-only
```

Expected: `git diff --check` 无输出；本 Task 只修改 `README.md` 和 `04-能力证据/能力地图.md`；根目录原有 Sites 目录保持不变。

- [ ] **Step 6: 提交 Task 3**

```powershell
& $git add -- 'README.md' '04-能力证据/能力地图.md'
& $git commit -m 'docs: link capability evidence baseline'
```

- [ ] **Step 7: 运行最终验证并向用户报告，不自动推送**

Run:

```powershell
& $git diff --check HEAD~3..HEAD
& $git status --short --branch
& $git log -4 --oneline
```

Expected: 最近三个实施提交分别覆盖长期上下文、治理模板和导航入口；隔离工作区保持干净；根目录原有 Sites 目录保持不变；分支显示领先远端。随后列出验证结果，并询问用户是否把本地提交推送到 GitHub。
