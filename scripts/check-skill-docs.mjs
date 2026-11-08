#!/usr/bin/env node
import fs from "node:fs";

const checks = [];

function fileText(file) {
  return fs.readFileSync(file, "utf8");
}

function mustInclude(file, needle, label) {
  checks.push(() => {
    const ok = fileText(file).includes(needle);
    return {
      ok,
      label,
      detail: ok ? `${file} includes "${needle}"` : `${file} must include "${needle}"`,
    };
  });
}

function mustNotMatch(file, pattern, label) {
  checks.push(() => {
    const ok = !pattern.test(fileText(file));
    return {
      ok,
      label,
      detail: ok ? `${file} does not match ${pattern}` : `${file} must not match ${pattern}`,
    };
  });
}

mustInclude(
  "SKILL.md",
  "Generated work must live in a task folder, not in the skill root.",
  "root output guardrail in SKILL.md",
);
mustInclude(
  "SKILL.md",
  "local-tests/<slug>/",
  "default task folder in SKILL.md",
);
mustInclude(
  "SKILL.md",
  "Triple Live Photo",
  "triple Live Photo capability in SKILL.md",
);
mustInclude(
  "SKILL.md",
  "material-first Live Photo puzzle layouts",
  "material-first puzzle capability in SKILL.md",
);
mustInclude(
  "SKILL.md",
  "use the M16 Image-Led Cover / text-on-image rules",
  "single-video text uses M16 overlay rules",
);
mustInclude(
  "SKILL.md",
  "Do not invent extra kicker, meta, hairlines",
  "single-video text must not invent extra overlay copy",
);
mustInclude(
  "SKILL.md",
  "platform limits (`5s` Xiaohongshu, `3s` WeChat Official Account)",
  "platform publishing reminder in SKILL.md",
);
mustInclude(
  "SKILL.md",
  "Audience-facing copy must describe the user's actual scene",
  "audience-facing copy guardrail in SKILL.md",
);
mustInclude(
  "SKILL.md",
  "Do not add non-template ornaments just to satisfy an automated density warning",
  "non-template ornament guardrail in SKILL.md",
);
mustNotMatch(
  "SKILL.md",
  /Create a task folder in the current workspace/,
  "no root-level task-folder instruction in SKILL.md",
);

mustInclude(
  "references/production-workflow.md",
  "Create a task folder under `local-tests/` by default",
  "production workflow uses local-tests",
);
mustInclude(
  "references/production-workflow.md",
  "Do not create generated task folders or rendered assets in the skill root",
  "production workflow forbids skill-root outputs",
);

mustInclude(
  "references/live-photo-production.md",
  "## Live Photo Information Budget",
  "Live Photo information budget section",
);
mustInclude(
  "references/live-photo-production.md",
  "## Triple Live Photo Collage",
  "triple collage section",
);
mustInclude(
  "references/live-photo-production.md",
  "## Material-First Puzzle Layouts",
  "material-first puzzle section",
);
mustInclude(
  "references/live-photo-production.md",
  "Do not render single-video text as generic subtitles.",
  "single-video text is not subtitle-style",
);
mustInclude(
  "references/live-photo-production.md",
  "Do not invent extra kicker, meta, hairlines",
  "single-video overlay must not invent extra copy",
);
mustInclude(
  "references/live-photo-production.md",
  "Four-grid",
  "four-grid puzzle guidance",
);
mustInclude(
  "references/live-photo-production.md",
  "## Long Video Intake",
  "long video intake section",
);
mustInclude(
  "references/live-photo-production.md",
  "Web-sourced free videos are only for making our own demo/promo cases",
  "user-supplied video is the normal path",
);
mustInclude(
  "references/live-photo-production.md",
  "Audience-facing copy should name the real scene in the video.",
  "Live Photo visible-copy guardrail",
);

mustInclude(
  "references/category-cookbook.md",
  "## Live Photo Scene Library",
  "category scene library section",
);
mustInclude(
  "references/category-cookbook.md",
  "This is not a fixed template list.",
  "category library stays heuristic",
);

mustInclude(
  "PRODUCT.md",
  "## 10. Live Photo 复盘（2026-07-01）",
  "product doc records Live Photo retrospective",
);
mustInclude(
  "PRODUCT.md",
  "把内部制作要求写成观众可见文案",
  "product doc records visible-copy failure mode",
);
mustInclude(
  "HANDOFF.md",
  "### v0.15 · 2026-07-01",
  "handoff records Live Photo version history",
);
mustInclude(
  "HANDOFF.md",
  "不要把制作要求当成观众可见内容",
  "handoff records Live Photo execution pitfall",
);

mustInclude(
  "DESIGN.md",
  "翻到起毛边",
  "DESIGN.md defines the Embolen book-page design system",
);
mustInclude(
  "DESIGN.md",
  "#4793D0",
  "DESIGN.md records the whale-blue brand primary extracted from the logo",
);
mustInclude(
  "DESIGN.md",
  "Noto Serif SC",
  "DESIGN.md pins the Chinese serif display face",
);
mustInclude(
  "DESIGN.md",
  "Andika",
  "DESIGN.md pins the literacy Latin face for teaching English",
);
mustInclude(
  "DESIGN.md",
  "W01",
  "DESIGN.md defines the WeChat first-image recipe",
);
mustInclude(
  "DESIGN.md",
  "P05",
  "DESIGN.md defines the inner-page recipes",
);
mustInclude(
  "DESIGN.md",
  "y 490–950",
  "DESIGN.md records the WeChat 16:9 ∩ 2.35:1 safe band",
);
mustInclude(
  "SKILL.md",
  "英博伦 Embolen brand notes",
  "SKILL.md routes Embolen brand notes",
);
mustInclude(
  "SKILL.md",
  "`P01`–`P08`",
  "SKILL.md lists the inner-page recipes",
);
mustInclude(
  "SKILL.md",
  "book-page",
  "SKILL.md names the book-page seed template",
);
mustInclude(
  "HANDOFF.md",
  "### v0.16 · 2026-11-09",
  "handoff records the Embolen brand migration",
);
mustInclude(
  "references/greenbook-specs.md",
  "W01",
  "greenbook specs define the W01 first image",
);
mustInclude(
  "references/greenbook-specs.md",
  "2.35:1",
  "greenbook specs keep the 2.35:1 crop math",
);
mustInclude(
  "references/brand-presets/embolen.md",
  "#4793D0",
  "brand preset records the whale-blue primary",
);

for (const recipe of ["C01", "C02", "P01", "P02", "P03", "P04", "P05", "P06", "P07", "P08"]) {
  mustInclude(
    "assets/template-xhs-card.html",
    `data-recipe="${recipe}"`,
    `XHS seed template includes ${recipe}`,
  );
}
mustInclude(
  "assets/template-xhs-card.html",
  "font-synthesis: none",
  "XHS seed template prevents calligraphy faux-bold synthesis",
);

for (const recipe of ["W01", "P01", "P02", "P03", "P04", "P05", "P06", "P07", "P08"]) {
  mustInclude(
    "assets/template-greenbook-card.html",
    `data-recipe="${recipe}"`,
    `WeChat seed template includes ${recipe}`,
  );
}
mustInclude(
  "assets/template-greenbook-card.html",
  "data-guides",
  "WeChat seed template ships the crop-guide overlay",
);
mustInclude(
  "assets/template-greenbook-card.html",
  "font-synthesis:none",
  "WeChat seed template prevents calligraphy faux-bold synthesis",
);

checks.push(() => {
  const ok = !fs.existsSync("DESIGN-xhs.md");
  return {
    ok,
    label: "superseded DESIGN-xhs.md is removed",
    detail: ok
      ? "DESIGN-xhs.md is gone; the brand system lives in DESIGN.md"
      : "DESIGN-xhs.md must be removed (superseded by DESIGN.md)",
  };
});

for (const file of ["SKILL.md", "CLAUDE.md", "AGENT.md", "README.md", "README.en.md"]) {
  checks.push(() => {
    const hit = fileText(file).match(/美西|杨美西|Meixi|meixipro|封箱|waybill|集运/);
    return {
      ok: !hit,
      label: `${file} has no legacy brand/logistics copy`,
      detail: hit ? `${file} still contains "${hit[0]}"` : `${file} is free of legacy brand/logistics copy`,
    };
  });
}

for (const file of ["assets/template-xhs-card.html", "assets/template-greenbook-card.html"]) {
  checks.push(() => {
    const active = fileText(file).replace(/<!--[\s\S]*?-->/g, "");
    const hit = active.match(/美西|杨美西|Meixi|meixipro|封箱|面单|waybill|airmail|tally/i);
    return {
      ok: !hit,
      label: `${file} active markup has no legacy logistics components`,
      detail: hit
        ? `${file} still contains "${hit[0]}" outside comments`
        : `${file} active markup is free of legacy logistics components`,
    };
  });
}

let failed = 0;
for (const run of checks) {
  const result = run();
  const marker = result.ok ? "PASS" : "FAIL";
  console.log(`${marker} ${result.label}`);
  if (!result.ok) {
    failed += 1;
    console.log(`  ${result.detail}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} skill doc check(s) failed.`);
  process.exit(1);
}

console.log(`\n${checks.length} skill doc checks passed.`);
