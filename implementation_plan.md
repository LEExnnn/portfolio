# Portfolio 网站全面升级计划

本次升级涵盖4大需求：跨平台运行保障、视频上传指引、视觉动效大幅升级、两个全新页面模块。

---

## 需求 1：Windows 兼容性保障

**问题**：项目在 Ubuntu 开发，Windows 下可能遇到脚本/路径问题。

### [MODIFY] [package.json](file:///f:/1/portfolio/package.json)

- `next dev` 在 Windows PowerShell 下运行正常，无需修改。
- 若遇到端口冲突，可在 `package.json` 的 `dev` 脚本加上 `-- -p 3001` 指定端口。

**运行步骤（Windows PowerShell）**：

```powershell
cd f:\1\portfolio
npm install
npm run dev
```

> [!NOTE]
> Next.js 16 / React 19 本身跨平台，无特殊兼容问题。npm install 时若有 lockfile 冲突，使用 `npm install --legacy-peer-deps`。

---

## 需求 2：视频文件放置指引

三个项目视频请放入 `public/` 文件夹，命名如下：

| 项目 | 文件名 | 说明 |
|------|--------|------|
| Voice-to-Code 智能研发中枢 | `omni-worker.mp4` | OpenClaw 项目演示 |
| FPGA 验证智能体平台 | `ai-eda-agent.mp4` | FPGA Agent 演示 |
| 企业级综合业务协同平台 | `erp-system.mp4` | ERP 系统演示 |

### [MODIFY] [data.ts](file:///f:/1/portfolio/lib/data.ts)

上传视频后，将 `videoUrl` 字段由 `""` 更新为对应路径（如 `"/omni-worker.mp4"`）。

---

## 需求 3：视觉与动效大升级

> [!IMPORTANT]
> 这是本次改动量最大的部分，涉及3个现有组件 + 全局 CSS。

### 升级方向

| 区域 | 升级内容 |
|------|----------|
| **全局** | 平滑滚动、自定义滚动条、全局字体强化 |
| **HeroSection** | 新增动态粒子/星点背景（CSS 实现无需三方库）、标题文字逐字打字机动效、按钮绑定锚点滚动 |
| **ProjectsSection** | 卡片增加发光边框动态流动特效、section 标题增加分层视差进场、整体增加悬浮深度阴影 |
| **AssistantSection** | AI 回复增加逐字打字机流式输出效果、终端窗口增加扫描线装饰、输入框增加聚焦光晕 |

#### [MODIFY] [globals.css](file:///f:/1/portfolio/app/globals.css)
- 添加平滑滚动 `scroll-behavior: smooth`
- 自定义细滚动条样式

#### [MODIFY] [layout.tsx](file:///f:/1/portfolio/app/layout.tsx)
- 更新 `title` 为 `"有方 · AI 全栈研发"`
- 更新 `description` 为个人简介

#### [MODIFY] [HeroSection.tsx](file:///f:/1/portfolio/components/ui/HeroSection.tsx)
- 增加浮动星点粒子（CSS + Framer Motion `useAnimate`）
- 标题"我是有方"逐字出现动效
- `探索硬核实战` 按钮 → 锚点滚动至 ProjectsSection (`#projects`)
- `唤醒专属 AI 助理` 按钮 → 锚点滚动至 AssistantSection (`#assistant`)

#### [MODIFY] [ProjectsSection.tsx](file:///f:/1/portfolio/components/ui/ProjectsSection.tsx)
- 卡片边框添加流光渐变动画
- 增加 `whileHover` 发光阴影强化
- 标题增加 `blur-in` 进场特效

#### [MODIFY] [AssistantSection.tsx](file:///f:/1/portfolio/components/ui/AssistantSection.tsx)
- AI 回复改为逐字打字机输出（`setInterval` + 字符逐步 append）
- 终端标题栏增加彩色像素扫描线
- 输入框聚焦时光晕颜色过渡动画

---

## 需求 4：新增两个页面模块

### [NEW] [OpenSourceSection.tsx](file:///f:/1/portfolio/components/ui/OpenSourceSection.tsx)

**个人开源项目**展示区：
- 卡片式布局，每个项目包含：项目名、简短描述、技术标签、GitHub 链接按钮
- 悬停时卡片上浮 + GitHub 图标发光
- 数据从 `lib/data.ts` 的 `openSourceProjects` 数组驱动

### [NEW] [ToolsSection.tsx](file:///f:/1/portfolio/components/ui/ToolsSection.tsx)

**实用小工具**展示区：
- 双栏布局：左侧截图（支持 Next.js `<Image>` 组件），右侧描述+功能点列表
- 截图图片放入 `public/tools/` 目录
- 数据从 `lib/data.ts` 的 `tools` 数组驱动

### [MODIFY] [data.ts](file:///f:/1/portfolio/lib/data.ts)
- 新增 `openSourceProjects` 数组（需用户提供具体项目信息）
- 新增 `tools` 数组（需用户提供具体工具信息）

### [MODIFY] [page.tsx](file:///f:/1/portfolio/app/page.tsx)
- 在 `ProjectsSection` 和 `AssistantSection` 之间插入 `OpenSourceSection` 和 `ToolsSection`

---

## 需求确认

> [!IMPORTANT]
> 开始执行前，需要您提供以下信息：

1. **开源项目**：您有哪些开源项目需要展示？（项目名、简介、GitHub 链接）
2. **实用小工具**：有哪些工具需要展示？（工具名、描述、截图是否已有）
3. **视觉风格偏好**：现有风格是 Indigo/深空系，新模块是否保持一致，还是希望有差异化配色？

---

## 验证计划

### 本地运行验证
```powershell
cd f:\1\portfolio
npm install
npm run dev
# 打开 http://localhost:3000 验证所有模块
```

### 功能验证清单
- [ ] 页面正常启动无控制台报错
- [ ] HeroSection 动效正常，按钮点击可锚点跳转
- [ ] ProjectsSection 卡片 hover 流光正常
- [ ] AssistantSection AI 回复有打字机效果
- [ ] 新模块 OpenSourceSection 渲染正常
- [ ] 新模块 ToolsSection 渲染正常，截图加载正常
