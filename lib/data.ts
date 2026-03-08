/**
 * 个人简历数据源 - 用于驱动酷炫前端组件
 * 提取自有方的 HTML 原始简历
 */

export const personalInfo = {
  name: "李祥宁",
  title: "AI应用工程师 / Agent开发工程师",
  tagline: "AI 独立探索者 / 顶级产品架构师",
  summary: "具备 5 年以上的核心系统研发经验，前国企技术骨干。拥有从底层 C/C++ 高性能计算到上层复杂 AI 应用 (Agent/RAG) 的全栈架构落地能力。擅长将大模型算力与企业业务深度结合，致力于通过 Vibe Coding 理念构建坚实可靠的企业级数字化底座。",
  contact: {
    phone: "18111222534",
    email: "396902267@qq.com",
    bg: "中共党员",
    birth: "1994.04"
  },
  education: [
    { school: "成都信息工程大学", degree: "硕士 | 计算机技术（网络空间安全方向）", date: "2018.09 - 2021.06" },
    { school: "四川大学锦城学院", degree: "本科 | 电子信息工程", date: "2013.09 - 2017.06" }
  ]
};

export const skills = [
  {
    category: "AI 工程化能力",
    items: ["RAG全链路调优", "分片与混合检索", "Milvus", "BGE-M3", "Rerank", "LangChain", "Agent工作流编排", "Prompt工程"]
  },
  {
    category: "后端全栈",
    items: ["Python", "FastAPI / Flask", "Node.js", "Celery + Redis", "WebSocket", "Docker"]
  },
  {
    category: "前端与其它",
    items: ["Vue / React", "Uni-app", "SQLite离线架构", "C/C++", "Linux底座", "高并发处理"]
  }
];

export const projects = [
  {
    id: "omni-worker",
    name: "Voice-to-Code 智能研发中枢 (OpenClaw)",
    role: "核心架构师 / 全栈研发负责人",
    techStack: ["Node.js", "OpenClaw", "Multi-Agent", "WhatsApp API", "STT", "SSE"],
    description: "基于垂直角色的 Multi-Agent 协作网络，致力于通过 Vibe Coding 架构理念，打造驱动自动化代码生成与构建企业级数字化底座的新型范式。",
    highlights: [
      "打通 STT -> WhatsApp -> OpenClaw -> LLM 端到端数据流的极速产出体验。",
      "Zero-Touch 探针自愈部署：子进程崩溃主动捕获日志并驱动大模型修改代码，零人工干预上线。",
      "重构底层通信网关，突破 LLM 超时限制，解决跨节点通信黑洞。"
    ],
    // 💡 将视频文件放入 public/ 文件夹，命名为 omni-worker.mp4，然后将下方改为 "/omni-worker.mp4"
    videoUrl: "/omni-worker.mp4",
    posterUrl: "/posters/omni-worker.jpg"
  },
  {
    id: "ai-eda-agent",
    name: "基于大模型的 FPGA 验证智能体平台",
    role: "核心开发 / 全栈落地",
    techStack: ["Python", "Flask", "Celery", "SocketIO", "ModelSim"],
    description: "面向芯片验证的 AI Agent，解析源码生成 Verilog Testbench 并跨进程调度仿真。",
    highlights: [
      "动态挂载 AST 与结构化上下文注入，极大提升硬件代码生成的工业可用性。",
      "Flask + Celery 分布式任务队列，利用 WebSocket 实现毫秒级进度推送。",
      "跨界调度 ModelSim，实现软硬跨界调用与波形分析闭环。"
    ],
    // 💡 将视频文件命名为 ai-eda-agent.mp4 放入 public/ 后，改为 "/ai-eda-agent.mp4"
    videoUrl: "/ai-eda-agent.mp4",
    posterUrl: "/posters/ai-eda-agent.jpg"
  },
  {
    id: "erp-system",
    name: "企业级综合业务协同与供应链管理平台",
    role: "全栈研发",
    techStack: ["Qwen-VL", "DeepSeek-V3", "AST解析渲染"],
    description: "内部综合数字化基座，利用 AI 解决传统流转审批及供应链管理痛点。",
    highlights: [
      "集成 Qwen-VL 实现异构发票扫描件的高精度解析与智能纠错。",
      "自研底层 AST 渲染器，将散列前端数据秒级渲染为标准化 Word/Excel。",
      "依托 DeepSeek 构建专业硬件参数 RAG，实现精准检索与参数溯源对比。"
    ],
    // 💡 将视频文件命名为 erp-system.mp4 放入 public/ 后，改为 "/erp-system.mp4"
    videoUrl: "/erp-system.mp4",
    posterUrl: "/posters/erp-system.jpg"
  }
];

// =============================================
// 开源项目数据 - 请根据您的实际情况填写
// =============================================
export const openSourceProjects = [
  {
    id: "content-dist-engine",
    name: "内容分发引擎 (Content Dist Engine)",
    description: "一个高效的内容分发引擎，支持自动化和多渠道的内容矩阵管理与发布。",
    emoji: "🚀",
    tags: ["TypeScript", "Node.js", "Automation", "Content Toolkit"],
    githubUrl: "https://github.com/LEExnnn/content-dist-engine",
    stars: ""
  },
  {
    id: "ai-architect-dojo",
    name: "AI 应用与 Agent 开发面试真经",
    description: "一本“长在网页里”的沉浸式 AI 架构面试通关指南。提炼 31 万字大模型研发硬核底层技术点，提供零干扰阅读、高频知识闪卡及 AI 面试官模拟对练，助您高效构建核心战斗力。",
    emoji: "📘",
    tags: ["Next.js", "TailwindCSS", "Framer Motion", "AI/LLM", "Architecture"],
    githubUrl: "https://github.com/LEExnnn/ai-architect-dojo",
    stars: ""
  },
  {
    id: "cv-system",
    name: "智能人才简历系统 (CV System)",
    description: "集成了 AI 辅助解析能力的综合性简历与人才档案管理平台，提供结构化的数据录入与呈现。",
    emoji: "📄",
    tags: ["AI", "Resume Parsing", "Full Stack", "System Architecture"],
    githubUrl: "https://github.com/LEExnnn/cv_system",
    stars: ""
  }
];

// =============================================
// 实用工具数据 - 截图放入 public/tools/ 目录
// =============================================
export const tools = [
  {
    id: "tool-tomato-garden",
    name: "番茄花园 (Tomato Garden)",
    description: "一款高颜值的桌面端沉浸式番茄钟应用。它通过清新的视觉设计和不打扰的悬浮小窗，帮助用户在繁杂的工作或学习中快速进入心流状态，同时利用轻量化的打卡数据记录带来持续的正向反馈。",
    emoji: "🧾",
    features: [
      "极简悬浮挂件：一键化身桌面常驻的悬浮小番茄，不占用屏幕空间，无缝融入任何工作流",
      "游戏化正反馈：自动记录每个项目的专注次数与总时长，通过积累时长提升“叶子等级”",
      "沉浸视觉体验：清新的奶油红绿配色，配合丝滑的呼吸光晕动效与每日金句轮播，营造绝佳专注氛围",
      "安全轻量：纯本地应用，无需联网和登录，数据安全保存在本地，即开即用"
    ],
    tags: ["React", "Electron", "Tailwind CSS", "桌面应用"],
    // 截图放入 public/tools/ 目录，例如 public/tools/tool-invoice.png
    screenshotUrl: "/tools/tomato-garden.png",  // 填写后改为 "/tools/tool-invoice.png"
    url: ""  // 可选：工具访问链接
  },
  {
    id: "gemini-history-saver",
    name: "Gemini 历史对话备份助手",
    description: "一款专为 Gemini 网页端打造的 Chrome 浏览器插件。彻底解决单页应用（SPA）长对话无法一次性完整复制的痛点。通过自动化滚屏突破懒加载限制，将超长上下文一键导出为排版清晰的 Markdown 文件，非常适合知识沉淀、长线项目复盘以及跨 AI 平台的上下文交接。",
    emoji: "💾",
    features: [
      "突破懒加载限制：智能模拟人工逆向滚屏，自动加载并抓取被隐藏的历史对话。",
      "智能 DOM 净化：精准锁定对话容器，剥离无关的网页元素，提取最纯粹的对话文本。",
      "无缝 Markdown 导出：自动按对话角色进行格式排版，一键生成带有时间戳的本地 `.md` 文件。"
    ],
    tags: ["Chrome Extension", "JavaScript", "DOM 解析", "效率工具"],
    // 截图放入 public/tools/ 目录，例如 public/tools/gemini-saver.png
    screenshotUrl: "/tools/gemini-saver.png",
    url: ""  // 可选：如果未来你把它开源到 GitHub，可以填入你的仓库链接
  }
];