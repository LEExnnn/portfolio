import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");

test("hero is mobile-safe and presents the full product-building identity immediately", () => {
  const hero = read("components/ui/HeroSection.tsx");
  const css = read("app/globals.css");

  assert.doesNotMatch(hero, /\bh-screen\b/, "固定100vh会在移动端地址栏环境中造成裁切");
  assert.match(hero, /min-h-\[100svh\]/);
  assert.match(hero, /data-testid="hero-title"/);
  assert.match(hero, /您好，我是/);
  assert.match(hero, />有方</);
  assert.match(hero, /text-\[clamp\(/, "标题应使用流体字号避免390px横向溢出");
  assert.match(hero, /text-\[clamp\(4\.4rem,20vw,8\.5rem\)\]/, "移动端品牌字号应保持克制");
  assert.match(hero, /lg:text-\[clamp\(6rem,9vw,8\.5rem\)\]/, "桌面端品牌字号不能压过右侧系统视觉");

  assert.match(hero, /AI原生产品构建者 · Agent系统架构与落地/);
  assert.doesNotMatch(hero, /useTypewriter/, "首帧身份定位不应等待打字机动画");

  assert.match(hero, /产品设计/);
  assert.match(hero, /Agent 系统/);
  assert.match(hero, /真实部署/);
  assert.match(hero, /3 个旗舰案例/);
  assert.match(hero, /从想法到上线/);
  assert.match(hero, /scrollTo\("opensource"\)/, "作品矩阵CTA必须指向真实存在的opensource模块");

  assert.match(css, /font-family:\s*var\(--font-geist-sans\)/);
});
