# Agent 工作约定

## 项目说明

这个目录是 `helen-social-card-skill` 的 Skill 本体（Guizang 风的衍生），用来给 Claude Code / Codex 等 Agent 提供"归藏风"社交图文生成能力。

它面向的产出包括：

- 小红书 / Rednote 3:4 图文组图。
- 微信公众号 21:9 头图 + 1:1 分享卡封面对。
- 文章封面、产品更新卡片、截图说明图、教程拆页等静态信息流视觉内容。

这个仓库的根目录应该保持为 Skill 可安装、可维护的结构。根目录主要放：

- `SKILL.md`
- `README.md` / `README.en.md`
- `references/`
- `assets/`
- `agents/`
- `validate-social-deck.mjs`
- `package.json` / `package-lock.json`
- 授权、产品说明、交接等项目级文档

不要把一次性的生成案例、渲染输出、临时素材、调试脚本或下载图片直接放在 Skill 根目录。

## 测试产物放置规则

所有测试生成的产物都放到：

```text
local-tests/
```

推荐按一次任务或一个测试案例建独立子目录：

```text
local-tests/<case-name>/
```

每个测试目录可以包含自己的 `index.html`、`render.cjs` / `render.mjs`、`assets/`、`output/`、`SOURCES.md` 等文件。例如：

```text
local-tests/social-card-example/
local-tests/social-card-example/index.html
local-tests/social-card-example/render.cjs
local-tests/social-card-example/assets/
local-tests/social-card-example/output/
```

原则：

- 试跑 HTML 放在 `local-tests/<case-name>/`。
- 渲染出来的 PNG/JPEG/WebP 放在 `local-tests/<case-name>/output/`。
- 下载或临时使用的图片、截图、素材放在 `local-tests/<case-name>/assets/`。
- 一次性调试脚本放在对应测试目录里；只有通用校验或 Skill 本体需要的脚本才放根目录。
- 如果要把某个测试案例升级为正式示例，先明确它属于项目文档、参考资料还是发布资产，再移动到合适位置；不要默认留在根目录。

`local-tests/` 已在 `.gitignore` 中忽略，适合承载这些本地测试和生成产物。保持这个边界，能避免 Skill 本体再次混入大量一次性文件。

## Design System

做任何视觉决策前，先读根目录 `DESIGN.md`。

它是**英博伦 Embolen** 的品牌设计真源：一套品牌系统、两个平台外壳。
品牌层（米纸 / 双色蓝墨 / 荧光笔 token、六个 OFL 字面、书脊 / 页脚 / 折角 / 荧光条四个装订装置）
由小红书与公众号两套平台应用共用；平台差异只在封面构图与导出验证（写在「平台应用」一节）。

- 小红书 3:4 图文卡：`assets/template-xhs-card.html`（封面 `C01` / `C02` + 内页 `P01`–`P08`）。
- 微信公众号图片消息 / 小绿书 / 贴图号：`assets/template-greenbook-card.html`（首图 `W01` + 内页 `P01`–`P08`）。
  平台规格、裁切数学与导出验证见 `references/greenbook-specs.md`。

两套模板的任何改动都必须与 `DESIGN.md` 一致。未经项目负责人明确同意，不要偏离；
在 QA 模式下，发现与 `DESIGN.md` 不符的实现要主动标出。

Editorial 与 Swiss 两个既有模式不受 `DESIGN.md` 约束，它们仍走 `references/style-system.md`
与 `references/components.md`。三类系统互不混用调色板与字体栈。

## 本仓协作规则的真源是 CLAUDE.md

改本仓之前读根目录 `CLAUDE.md`：分发拓扑、提交后必须推进 hermes 登记表 ref、
游离头指针风险、视觉改动的 DESIGN.md 约束，都在那里。
本文件只保留目录约定与历史记录，不重复维护同一套规则。
