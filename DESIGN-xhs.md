---
# gstack: design-md-format=spec
name: 封箱 Taped Shut (杨美西转运 · 小红书图文卡)
description: 仓库打包台上的拼贴：满版仓库实拍铺底，标题印在品牌蓝封箱胶带上，结论与参数落在悬浮面单回执、骑缝单据或国际提单看板上。
colors:
  primary: "#0060C9"        # --tape · 胶带蓝 = 租户色。主载体是封箱胶带与回执色柱/主推高亮
  on-primary: "#FFFFFF"     # --tape-ink · 胶带上的字 · 5.98:1
  surface: "#FFFAF1"        # --paper · 面单纸，与 DESIGN.md 的 --paper 同值
  surface-soft: "#F4ECDE"   # --paper-soft · 提单参数次级底色
  surface-ground: "#B98E5E" # --kraft · 没有仓库照片时的兜底底色
  text: "#1A1D26"           # --ink · 面单正文 · 14.1:1
  text-muted: "#7C5922"     # --warm · 标签 / 待补位 · 6.05:1
  accent: "#D0433B"         # --marker · 记号红 = 航空红。4.44:1，仅 ≥24px 圈注与笔画
  pencil: "#BDB6A8"         # --pencil · 可选「正」字里还没走到的笔画，不承载文字
  edge-blue: "#2E5FA3"      # --edge-blue · 航空蓝，仅底边斜纹
  sticker: "#FFFFFF"        # 模切白边
  success: "#D0433B"        # 本系统没有交通灯语义色：打勾也是记号红
  warning: "#D0433B"
  error: "#D0433B"
typography:
  display:
    fontFamily: TsangerZhoukeZhengdabangshu
    fontWeight: 400
    fontSynthesis: none
    fontSize: 102px
    letterSpacing: 0.02em
  hand:
    fontFamily: qiantubifengshouxieti
    fontWeight: 400
    fontSynthesis: none
    fontSize: 44px
  body:
    fontFamily: Noto Sans SC
    fontWeight: 500
    fontSize: 32px
    lineHeight: 1.55
  label:
    fontFamily: Martian Mono
    fontWeight: 500
    fontSize: 21px
    letterSpacing: 0.12em
  mono:
    fontFamily: Martian Mono
    fontFeature: tnum
rounded:
  sm: 0px
  md: 0px
  lg: 0px
  full: 0px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  2xl: 64px
components:
  card:
    width: 1080px
    height: 1440px
    backgroundColor: "{colors.surface-ground}"
    rounded: "{rounded.sm}"
  tape:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rotate: -5.2deg
    tornEdge: 22px
  tape-print:
    fontFamily: "{typography.mono.fontFamily}"
    fontSize: 17px
    opacity: 0.68
  floating-slip:
    backgroundColor: "{colors.surface}"
    borderLeftWidth: 12px
    borderLeftColor: "{colors.primary}"
    rounded: "{rounded.sm}"
  label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
  sticker:
    outlineWidth: 16px
    outlineColor: "{colors.sticker}"
  tally-optional:
    strokeWidth: 17px
    onColor: "{colors.accent}"
    offColor: "{colors.pencil}"
    defaultEnabled: false
  pending:
    textColor: "{colors.text-muted}"
    borderColor: "{colors.text-muted}"
  airmail-edge:
    height: 12px
    stripeWidth: 22px
    angle: -45deg
---

# 封箱 · 杨美西转运小红书卡

适用范围：杨美西转运小红书号的 3:4 图文笔记卡组（封面 + 4–8 张内容页）。
公众号图片消息（小绿书 / 贴图号）不走这里，走根目录 `DESIGN.md` 的 Greenbook「算式」系统；
Editorial 与 Swiss 两个通用模式走 `references/style-system.md`。三套系统不混排。

## Overview

**Creative North Star:** 卡上每样东西都像在仓库打包现场亲手贴上去的实物拼贴——照片吃满现场，胶带抓眼球，单据给结论。

**Product context:** 杨美西转运（深圳云广度科技，蓝 V 企业号，原美西转运小程序团队），
国际快递与海运集运，小红书号主打**中国 → 海外**（美国洛杉矶、纽约、英国等），涵盖大件海运、家具家电及药品食品等敏感货线路。
路线按每篇选题写，不照抄 `references/brand-presets/meixipro.md` 的「美国西岸 → 中国大陆」
（那是公众号侧口径，两者的差异待业务方统一，见 Decisions Log）。
读者多半是已经在国内电商下了单、正在对比怎么寄最省钱省心的人，离成单最近。

**记住的那一件事：** 真人真仓亲手打包，规则透明不绕弯。

**Mode per surface:**
- Persuade（默认封面 `X01`）：在双列信息流里靠 `80%+` 满版真仓实拍 + 一条品牌蓝封箱胶带拦住手指，底部用端正悬浮回执卡给出核心判断。
- Operate（拆解与参数内页 `X02` / `X03` / `X04`、核对清单 `X05`）：按题型选结构——方案分流走骑缝对照（`X02`），计费公式与时效走国际提单看板（`X03`），箱面细节指认走实物圈注（`X04`），末页收藏走核对清单（`X05`）。
- Read：不单列。长解释放笔记正文，不上卡。
- Experience：不适用，静态图。

**Key characteristics:**
- **默认封面重现场感**：仓库实拍满版铺开，四周留气，底部悬浮端正的面单回执条，**严禁把封面一刀切成“上照片 + 下满宽死白底 SaaS 列表块”**。
- **胶带蓝是核心品牌抓手**：看到同一卷 `#0060C9` 锯齿蓝胶带 + `仓耳周珂正大榜书`，刷到第二篇就能认出这个号。
- **流式防呆排版**：正文与结论容器一律用 Flexbox / CSS Grid 流式承载；无论有没有 `person.png` 出镜人抠图、标题多一两个字，版面都不会塌陷或重叠。
- **「正」字计数降级为显式可选组件**：默认所有题型**均不出现「正」字**；只有用户**明确要求写“数坑帖 / N 个容易出错的点”**时才按需启用 `.tally`。
- **没有运营口径的数字一律是 `.pending` 虚线待补框**，宁可留待确认也不编造商业承诺。

## Colors

**Strategy:** Committed，承载者是实物：胶带蓝、面单暖纸、记号红三样东西各司其职，现场影调来自真实仓库照片。

**Light or dark:** 不设深色模式。使用场景是白天刷手机的小红书双列信息流；卡面元素（面单纸、胶带、贴纸）在任何仓库照片上都自带高对比实底。

- **胶带蓝 (`#0060C9`)** 是租户主色（`config/tenants/meixipro.json` 的 `brand.primaryColor`，禁用旧色 `#037EF3`）。主载体是封箱胶带，辅以悬浮回执左侧 `12px` 品牌色柱及首选方案高亮，不做整卡大面积蓝底。
- **记号红 (`#D0433B`)** 沿用 `$airmail-red`。对面单纸对比度 4.44:1，未过小字 AA，因此只用于 ≥24px 的圈注（`.ring`）、勾号、航空底边及显式启用的「正」字笔画。
- **面单暖纸 (`#FFFAF1`)** 与次级单据底 (`#F4ECDE`) 提供单据质感，避免纯白 `#FFFFFF` 的生硬电子表格感。
- **牛皮纸 (`#B98E5E`)** 是缺照片时的兜底，有真实仓库照片时优先用实拍。
- **航空斜纹 (`--edge-blue: #2E5FA3` + `--marker`)** 只在上下 `12px` 封边出现，航空蓝禁止进版心。

对比度实测（面单纸 `#FFFAF1` 为底，胶带字以 `#0060C9` 为底）：

| 组合 | 比值 | 用途 |
|---|---|---|
| `--ink` (`#1A1D26`) on paper | 14.1:1 | 面单正文、结论句、勾选框 |
| `--warm` (`#7C5922`) on paper | 6.05:1 | 航线标签、编号前缀、待补位 |
| white (`#FFFFFF`) on `--tape` | 5.98:1 | 胶带大标题、胶带边缘微印字（68% 透明作纹理） |
| `--marker` (`#D0433B`) on paper | 4.44:1 | **仅大图形/大字**：红圈、勾选勾号、≥36px 手写签 |

## Typography & 花体字防糊硬规则

四个面各管一件事，不交叉。两款花体字均在 `references/font-license-audit.md` 核验通过：
仓耳周珂正大榜书（#1，官方免费商用）、千图笔锋手写体（#33，官方公益字体全渠道商用），成品图无需署名。
默认走中文网字计划 CDN 分片加载，不随公开仓分发字体文件；在禁网/离线沙箱环境中，先跑 `node scripts/build-font-links.mjs fetch <task-dir>/fonts chill-bangshu qiantu-bifeng` 缓存到任务目录再渲染。

- **胶带主标题：仓耳周珂正大榜书（`TsangerZhoukeZhengdabangshu`）。每篇固定，不按选题换。**
  字号阶梯：封面 `96–102px`（≤7 字/行 × 2 行；8–9 字加 `data-len="long"` 自动缩至 `86px`），内页胶带 `72–90px`。
- **手写签注（仅纸面局部点缀）：千图笔锋手写体（`qiantubifengshouxieti`）。**
  只允许写在暖白纸签上（≥36px，≤8 字），**禁止加白色多向描边（旧 `.hand.halo` 已废弃）直接叠在杂乱纸箱照片上**。
- **正文与结论：Noto Sans SC 500 / 700 / 900**（回退链含 `"PingFang SC", "Hiragino Sans GB"`）。
- **编号 / 航线 / 硬指标数字：Martian Mono 400 / 500 / 700**（回退链含 `"SF Mono", "Menlo"`）。

### ★ 花体字防糊三条铁律（必守）

1. **严禁伪粗体（Faux-Bold Smearing）**：`仓耳周珂正大榜书` 与 `千图笔锋手写体` 只有 `400` 单一字重。一旦挂在 `<h1>` / `<h2>` / `<strong>` 上而未显式重置字重，浏览器会合成 `700` 伪粗体，把榜书笔画内部的飞白镂空全部糊死成白团。CSS 必须强制写死：
   ```css
   .tape-title, .hand {
     font-weight: 400 !important;
     font-synthesis: none;
     -webkit-font-smoothing: antialiased;
     text-rendering: geometricPrecision;
   }
   ```
   校验器 `validate-social-deck.mjs` 的 **R11** 会自动拦截任何 `computedWeight >= 600` 的花体字节点。
2. **胶带锯齿裁切与文字分层**：禁止在包含 `.tape-title` 文字的同一个 DOM 节点上同时挂 `transform: rotate(...)` 与 `clip-path: polygon(...)`——Chromium 会先把文字按 1x 位图光栅化再旋转插值，导致笔画边缘发虚。正确做法是**把蓝色背景与 `clip-path` 锯齿写在 `.tape::before` 伪元素上**，阴影用外层 `filter: drop-shadow(...)`，让 `.tape-title` 保持纯净矢量文本层。
3. **2× 超采样导出（Supersampling）**：Playwright 渲染含旋转胶带的卡片时，开启 `deviceScaleFactor: 2` 截图；需要严格交付 `1080×1440` 尺寸时再以 Lanczos 缩回 `1080×1440`（`sips -z 1440 1080`），旋转笔画边缘锐度显著优于 1x 直出。

## Layout & 五大标准配方（X01–X05）

**唯一板型 1080×1440（3:4）。** 侧边安全距 `52–64px`，底边保留 `12px` 航空斜纹。
封面必须在小红书双列信息流 `1/6` 缩放（`180pt` 宽）下依然一眼认出「真仓实拍 + 蓝胶带大字 + 底部干净回执」。

种子模板 `assets/template-xhs-card.html` 内置 5 套按题型分工的流式配方，可自由组合组合成 5–9 张完整笔记：

| 配方 | 角色与默认优先级 | 适用题型 | 结构说明 |
|---|---|---|---|
| **X01 真仓大片**<br>（**默认封面**） | 第 1 张首选默认 | 所有常规攻略、省钱选型、封箱实拍、晒单封面 | `100%` 满版仓库实拍铺底（底部仅极轻暗角托底，不糊整图）；左上品牌航线签；上 `1/5` 处 `-5.2°` 品牌蓝撕口胶带大标题；底部内缩 `52px` 端正悬浮一张左镶 `#0060C9` 色柱的面单回执卡（1 句总判断 + 3 栏横排要点）。若有 `person.png`，可加 `.with-person` 让回执卡缩窄并与右下模切人像搭档；无人像时自动横向舒展。 |
| **X02 骑缝封箱**<br>（零遮挡拆解页） | 内页主力 / 立式箱封面备选 | 立式大箱、打木架、护角实拍、方案分流（「能自提 / 满100kg / 小件」对照） | 上半 `676px` 仓库实拍**完全不放横穿大胶带**（100% 保护箱唛与货物主体）；`-2.4°` 品牌蓝胶带骑在照片与面单纸的接缝处；下半面单排 3 行「条件标签 → 行动指令」左色条对照块。 |
| **X03 国际提单**<br>（参数看板页） | 计费 / 时效 / 横评专版 | 怎么计费要多久、体积重公式、船期时效、空海运渠道横评 | `#FFFAF1` 航空提单满底 + 上下双航空边；双线提单抬头；微倾胶带标题；中段「左实拍证据窗 + 右侧 2 张 `Martian Mono` 硬指标大字卡（如 `L×W×H`、`100 KG`）」；底段 3 栏拿货方式横评格。彻底解决“干货参数塞不进小贴纸”。 |
| **X04 实物批注**<br>（细节圈认页） | 单点实拍指认内页 | 指认箱标尺寸、面单填写位置、禁限品包装细节、单步操作 | 上 `780px` 实物照片 + 双层白底红圈 `.ring` 精准圈出细节；左上短胶带写「重点 0N + 短标题」；下半带齿孔面单（`.label.perf`）流式排「看哪里 → 怎么做（勾选框 + 粗体动作）→ `.pending` 待确认口径」。 |
| **X05 核对清单**<br>（末页收藏卡） | 倒数第 1–2 张 | 寄出前核对清单、打包自查表、收藏引导页 | 牛皮纸或实拍底；顶部两端撕口蓝胶带写清单标题；中部微倾齿孔大面单排 4–5 条勾选清单（每条支持附带 `.pending` 口径位）；底部配收藏引导签与可选出镜人贴纸。 |

### 可选组件：「正」字计数（`.tally`，默认禁用）

- **触发门槛**：仅当用户在需求中**明确要求制作“数坑帖 / N 个容易出错的点 / 避坑计数”**时，才允许从 `assets/template-xhs-card.html` 末尾注释块取出 `.tally` 组件挂入右上角标签。
- **常规禁用**：省钱攻略、计费科普、时效说明、渠道对比、晒单实拍、常规清单帖一律**禁止出现「正」字**。

## Elevation & Shapes

- **圆角一律 0px**。胶带、面单、回执条、提单框全部是裁纸方角；唯一的不规则边来自胶带两端锯齿撕口、内页面单顶边齿孔（`.label.perf`）与人物贴纸的 `#die-cut` 模切白边。
- **阴影只用偏移实影**：胶带投影由外层 `filter: drop-shadow(0 12px 22px rgba(0,0,0,.26))` 承载（避免被 `clip-path` 裁掉），悬浮回执 `0 16px 36px rgba(0,0,0,.30)`，不用毛玻璃（`backdrop-filter: blur`）或发光特效。

## Do's and Don'ts

- **Do:** 默认封面优先用 `X01 真仓大片`，让真实仓库纸箱吃满 `80%+` 画面，用底部留边的 `.floating-slip` 收束结论。
- **Do:** 遇到公式、计费分界线、多渠道对比时，主动切 `X03 国际提单` 或 `X02 骑缝封箱`，不要把多行小字硬塞进旋转小标签。
- **Do:** 放置胶带与回执前先看照片主体（如箱面 `轻拿轻放` 标签、人物面部），通过 `object-position` 把关键箱唛让到胶带与底部回执之间的安全窗内。
- **Do:** 卡上任何未获运营确认的价格、时效、计泡数字一律放进 `.pending` 虚线框。
- **Don't（否决方向，严禁）：** **禁止把封面切成「上半照片 + 下半满宽贴边死白底 `01/02/03` 列表块」**——这种一刀切的 SaaS/PPT 列表风会彻底杀死小红书真仓拼贴感（`validate-social-deck.mjs` R12 会直接拦截）。
- **Don't：** **禁止在未获明确“数坑帖”指令时渲染「正」字（`.tally`）。**
- **Don't：** **禁止在照片上直接叠白色多向描边的手写红字（旧 `.hand.halo` 已废除）**，与纸箱原有印字打架且质感廉价。
- **Don't：** **禁止让 `.tape-title` 或 `.hand` 继承 `700` 粗体**——必须保持 `font-weight: 400; font-synthesis: none`，防止花体字糊成一团。
- **Don't：** 不要用蓝色渐变、货机、地球、集装箱剪影或 AI 生成的假仓库/假出镜人。

## Motion

- **Approach:** 默认静态高清 PNG（`1080×1440`，推荐 `deviceScaleFactor: 2` 超采样渲染后输出）。
- **Live Photo:** 若制作小红书 `5s` 实况卡（见 `references/live-photo-production.md`），可直接将 `X01` 或 `X02` 的照片槽替换为仓库真实封箱/拉胶带实拍视频流，首帧同样须通过不遮挡箱唛与零溢出检查。

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-09-24 | 建立小红书卡系统「封箱」，独立成 `DESIGN-xhs.md` | 与公众号 Greenbook「算式」区分；小红书靠真人真仓与品牌蓝封箱胶带建立系列识别 |
| 2026-09-24 | 胶带标题固定仓耳周珂正大榜书，批注用千图笔锋手写体 | 两款均为官方免费商用（`font-license-audit.md` #1 / #33），缩略图识别度高 |
| 2026-11-04 | 默认封面切换为 `X01 真仓大片`（满版实拍 + 胶带 + 底部端正悬浮回执）；否决“上图 + 下满宽平切白底列表”封面 | `/design-shotgun` 实排对比拍板：平切死白底列表像通用 PPT/SaaS 卡片，丧失现场感；满版真仓 + 留边悬浮回执兼顾小红书原生冲击力与高可读性 |
| 2026-11-04 | 扩展为 `X01`–`X05` 多题型流式配方（并入骑缝封箱 `X02` 与国际提单看板 `X03`） | 解决单一“数坑”模板无法承载计费公式、时效对比、立式箱唛等常驻题型，且全绝对定位在缺人像时易坍塌的问题 |
| 2026-11-04 | 「正」字计数（`.tally`）降级为显式可选组件，废除照片叠白描边手写红字（`.hand.halo`） | 避免所有选题千篇一律印「正」字及照片手写描边廉价杂乱；「正」字仅在用户明确要求写数坑帖时启用 |
| 2026-11-04 | 确立花体字防糊三铁律：`font-weight: 400; font-synthesis: none`、`.tape::before` 分离裁切、`deviceScaleFactor: 2` 超采样 | 根治 `<h1>` 默认粗体引发的伪粗体糊字，以及 Chromium 在 `clip-path` + `rotate` 同一层 1x 光栅化造成的边缘模糊 |
