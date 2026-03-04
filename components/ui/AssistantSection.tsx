"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "assistant" | "user";
  content: string;
}

// 打字机 hook - 用于AI回复的流式输出效果
function useTypingEffect(text: string, speed = 18) {
  const [displayed, setDisplayed] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setIsDone(false);
    if (!text) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, isDone };
}

// 独立的 AI 消息气泡（带打字机）
function AiMessage({ content, isLatest }: { content: string; isLatest: boolean }) {
  const { displayed, isDone } = useTypingEffect(isLatest ? content : "", 16);
  const text = isLatest ? displayed : content;

  return (
    <div className="bg-[#1c1c1c] text-gray-200 border border-[#2e2e2e] rounded-2xl rounded-tl-sm px-5 py-3 text-sm leading-relaxed max-w-[85%]">
      {text}
      {isLatest && !isDone && (
        <span className="inline-block w-0.5 h-3.5 bg-indigo-400 ml-0.5 cursor-blink align-middle" />
      )}
    </div>
  );
}

const AI_RESPONSES: Record<string, string> = {
  default: "很抱歉，当前网络尚未连接正式的后端大模型服务。但我知道李祥宁擅长将大模型算力与业务深度结合，您可以随时探索上方的实战项目演示视频以获得直观感受。",
  agent: "这就触及到核心了！李祥宁曾主导设计了 Voice-to-Code 智能研发中枢，基于 Multi-Agent 协作网络，甚至实现了 Zero-Touch 的探针自愈部署，子进程崩溃后主动驱动大模型修改代码，无需人工干预。",
  rag: "在 RAG 领域，他非常有战斗力。他主导过企业级知识库中台，通过自研分片算子和混合检索（Milvus + BGE-M3 + Rerank），将极其复杂的政企长文档召回准确率提升到了 95% 以上，且首字节延迟仅需 250ms。",
  fullstack: "李祥宁不仅懂底层 C/C++ 与 Linux 架构，更精通 Python (FastAPI/Flask) 后端开发与高并发调度。他的全栈开发能力让想法能在一周内极速落地成为生产可用的原型。",
  vibe: "Vibe Coding 是他的核心生产力范式——通过自然语言驱动 AI Agents 完成代码质检、自动部署、Bug 定位，极大压缩了传统软件工程的交付周期，已在多个实战项目中验证有效。",
};

function getAiResponse(q: string): string {
  const lower = q.toLowerCase();
  if (lower.includes("agent") || lower.includes("openclaw") || lower.includes("多智能体")) return AI_RESPONSES.agent;
  if (lower.includes("rag") || lower.includes("知识库") || lower.includes("检索")) return AI_RESPONSES.rag;
  if (lower.includes("全栈") || lower.includes("backend") || lower.includes("开发")) return AI_RESPONSES.fullstack;
  if (lower.includes("vibe") || lower.includes("coding") || lower.includes("工程")) return AI_RESPONSES.vibe;
  return AI_RESPONSES.default;
}

const SUGGESTED_QUESTIONS = [
  "你主导过的 RAG 落地项目有哪些？",
  "Vibe Coding 在实战中是如何发挥作用的？",
  "你在 Multi-Agent 架构上的核心优势是什么？"
];

export default function AssistantSection() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "您好！我是代表李祥宁的专属智能体 OMNI-WORKER。您可以向我询问关于他的工作经历、掌握的技术栈（如 Multi-Agent、RAG、Vibe Coding 等）或是关于某个具体项目的细节。",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [latestAiIndex, setLatestAiIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 记录是否用户已经进行了交互，防止初次加载自动滚动到底部
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (hasInteracted) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, hasInteracted]);

  const handleSend = (overrideQuery?: string) => {
    const userMsg = (overrideQuery || query).trim();
    if (!userMsg || loading) return;

    setHasInteracted(true);
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setQuery("");
    setLoading(true);

    setTimeout(() => {
      const aiContent = getAiResponse(userMsg);
      setMessages((prev) => {
        const next = [...prev, { role: "assistant" as const, content: aiContent }];
        setLatestAiIndex(next.length - 1);
        return next;
      });
      setLoading(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <section id="assistant" className="py-28 bg-[#0A0A0A] text-white overflow-hidden relative border-t border-white/[0.05]">
      {/* 背景光晕 */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/[0.07] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/[0.06] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">

        {/* 标题区 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.25em] text-purple-400 uppercase bg-purple-900/20 border border-purple-500/20 rounded-full"
          >
            AI Assistant
          </motion.span>

          <div className="flex items-center gap-4">
            <motion.div
              animate={{ boxShadow: ["0 0 0 0 rgba(99,102,241,0.4)", "0 0 0 12px rgba(99,102,241,0)", "0 0 0 0 rgba(99,102,241,0)"] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-sm shadow-lg flex-shrink-0"
            >
              AI
            </motion.div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
                与专属分身交流
              </h2>
              <p className="text-sm text-gray-600 mt-1">Powered by RAG · DeepSeek / Gemini</p>
            </div>
          </div>
        </motion.div>

        {/* 终端窗口 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[580px] bg-[#111111] border border-[#242424] rounded-2xl flex flex-col shadow-[0_0_80px_rgba(99,102,241,0.08)] relative overflow-hidden"
        >
          {/* 扫描线装饰 */}
          <motion.div
            animate={{ y: ["-5%", "105%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 8 }}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent z-20 pointer-events-none"
          />

          {/* macOS 标题栏 */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#242424] bg-[#161616] flex-shrink-0">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/40 border border-red-500/60 hover:bg-red-500 transition-colors cursor-default" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40 border border-yellow-500/60 hover:bg-yellow-500 transition-colors cursor-default" />
              <div className="w-3 h-3 rounded-full bg-green-500/40 border border-green-500/60 hover:bg-green-500 transition-colors cursor-default" />
            </div>
            <span className="ml-3 text-xs text-gray-600 tracking-widest font-mono">OMNI-WORKER.exe</span>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-emerald-600 font-mono">ONLINE</span>
            </div>
          </div>

          {/* 消息区 */}
          <div className="flex-1 px-6 py-5 overflow-y-auto space-y-5 scrollbar-thin scrollbar-thumb-gray-800">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" ? (
                    <AiMessage content={msg.content} isLatest={i === latestAiIndex && i > 0} />
                  ) : (
                    <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-2xl rounded-tr-sm px-5 py-3 text-sm leading-relaxed max-w-[80%] shadow-[0_4px_20px_rgba(99,102,241,0.3)]">
                      {msg.content}
                    </div>
                  )}
                </motion.div>
              ))}

              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex w-full justify-start"
                >
                  <div className="bg-[#1c1c1c] border border-[#2e2e2e] rounded-2xl rounded-tl-sm px-5 py-3.5 flex items-center gap-1.5">
                    <motion.span
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                      className="w-2 h-2 bg-indigo-500 rounded-full"
                    />
                    <motion.span
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: 0.15 }}
                      className="w-2 h-2 bg-indigo-500 rounded-full"
                    />
                    <motion.span
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
                      className="w-2 h-2 bg-indigo-500 rounded-full"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* 输入区 & 引导问题 */}
          <div className="px-5 py-4 bg-[#0e0e0e] border-t border-[#242424] flex-shrink-0">
            {/* 引导问题 */}
            <div className="flex flex-wrap gap-2 mb-3">
              {SUGGESTED_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  disabled={loading}
                  className="text-xs px-3 py-1.5 bg-[#1a1a1a] border border-[#333] hover:border-indigo-500/50 hover:bg-[#222] text-gray-300 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
                >
                  <span className="text-indigo-400">✨</span> {q}
                </button>
              ))}
            </div>

            <div className="relative flex items-center bg-[#181818] rounded-xl border border-[#2e2e2e] focus-within:border-indigo-500/50 focus-within:shadow-[0_0_20px_rgba(99,102,241,0.12)] transition-all duration-300 overflow-hidden">
              <span className="pl-4 text-gray-600 font-mono text-sm flex-shrink-0">{">"}</span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="问点什么... 例如：李祥宁在 RAG 上做过什么？"
                className="flex-1 bg-transparent px-4 py-4 text-sm text-gray-200 outline-none placeholder:text-gray-700 font-mono"
              />
              <motion.button
                onClick={() => handleSend()}
                disabled={!query.trim() || loading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mr-3 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-semibold rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_2px_12px_rgba(99,102,241,0.3)]"
              >
                发送
              </motion.button>
            </div>
            <p className="text-[10px] text-gray-700 mt-2 text-center font-mono">
              Try: &ldquo;Agent&rdquo; · &ldquo;RAG&rdquo; · &ldquo;全栈&rdquo; · &ldquo;Vibe Coding&rdquo;
            </p>
          </div>

          {/* 角落装饰 */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-tl-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}