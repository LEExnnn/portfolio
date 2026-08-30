import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");

test("public identity is consistently branded as 有方", () => {
  const layout = read("app/layout.tsx");
  assert.match(layout, /有方 · AI原生产品与Agent系统构建者/);

  const hero = read("components/ui/HeroSection.tsx");
  assert.match(hero, /您好，我是有方/);
  assert.match(hero, /AI原生产品构建者 · Agent系统架构与落地/);
  assert.match(hero, /用 AI、Agent 与全栈工程，把想法变成真正上线的产品/);

  const data = read("lib/data.ts");
  assert.match(data, /name: "有方"/);
  assert.match(data, /title: "AI原生产品与Agent系统构建者"/);

  const page = read("app/page.tsx");
  assert.match(page, /© 2026 有方/);
  assert.doesNotMatch(page, /Built with[^\n]*OpenAI/, "页脚不能宣称未接入的OpenAI能力");
});

test("preset assistant does not imply an online model integration", () => {
  const assistant = read("components/ui/AssistantSection.tsx");
  assert.match(assistant, /当前未接入在线大模型/);
  assert.match(assistant, /PRESET-KNOWLEDGE\.demo/);
  assert.match(assistant, />PRESET</);
  assert.doesNotMatch(assistant, /Powered by RAG|DeepSeek \/ Gemini|>ONLINE</);
  assert.doesNotMatch(assistant, /95%|250ms/, "无当前证据的精确性能指标不能出现在预设回答中");
});
