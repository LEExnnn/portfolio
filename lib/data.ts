/**
 * 个人简历数据源 - 用于驱动酷炫前端组件
 * 提取自有方的 HTML 原始简历
 */

export const personalInfo = {
  name: "李祥宁 (有方)",
  title: "AI 应用架构师 / Agent 架构师",
  tagline: "AI 独立探索者 / 顶级产品架构师",
  summary: "具备 5 年以上的核心系统研发经验，前国企技术骨干。拥有从底层 C/C++ 高性能计算到上层复杂 AI 应用 (Agent/RAG) 的全栈架构落地能力。擅长将大模型算力与企业实际业务深度结合，致力于打造健壮的 AI 自动化产品与 Vibe Coding 实践。",
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
    description: "基于垂直角色的 Multi-Agent 协作网络，语音驱动型 AI 研发员工，打破传统软件工程排期壁垒。",
    highlights: [
      "打通 STT -> WhatsApp -> OpenClaw -> LLM 端到端数据流的极速产出体验。",
      "Zero-Touch 探针自愈部署：子进程崩溃主动捕获日志并驱动大模型修改代码，零人工干预上线。",
      "重构底层通信网关，突破 LLM 超时限制，解决跨节点通信黑洞。"
    ],
    // 💡 注意这里：如果您有视频，只需将其放入 public 文件夹（如 public/omni-worker.mp4）并填写路径
    videoUrl: "" 
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
    videoUrl: ""
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
    videoUrl: ""
  }
];