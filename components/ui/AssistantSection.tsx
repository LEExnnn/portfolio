"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AssistantSection() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "您好！我是代表有方的专属智能体。您可以向我询问关于有方的工作经历、掌握的技术栈（如 Multi-Agent, RAG 等）或是关于某个具体项目的细节。"
    }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!query.trim() || loading) return;

    setMessages(prev => [...prev, { role: "user", content: query }]);
    setQuery("");
    setLoading(true);

    // 模拟真实的 AI Agent 拉取 RAG 数据流
    setTimeout(() => {
      let aiResponse = "很抱歉，当前网络尚未连接正式的后端大模型服务。但我知道有方擅长将大模型算力与业务深度结合，您可以随时探索上方的实战项目演示视频以获得直观感受。";
      
      const q = query.toLowerCase();
      if (q.includes("agent") || q.includes("openclaw")) {
        aiResponse = "这就触及到核心了！有方曾主导设计了 Voice-to-Code 智能研发中枢，基于 Multi-Agent 协作网络，甚至实现了 Zero-Touch 的探针自愈部署，无需人工干预。";
      } else if (q.includes("rag") || q.includes("知识库")) {
         aiResponse = "在 RAG 领域，有方非常有战斗力。他主导过企业级知识库中台，通过自研分片算子和混合检索（Milvus + BGE-M3 + Rerank），将极其复杂的政企长文档召回准确率提升到了 95% 以上，且首字节延迟仅需 250ms。";
      } else if (q.includes("全栈")) {
          aiResponse = "有方不仅懂底层 C/C++ 与 Linux 架构，更精通 Python (FastAPI/Flask) 后端开发与高并发调度。他的全栈开发能力让想法能在一周内极速落地成为生产可用的原型。";
      }

      setMessages(prev => [...prev, { role: "assistant", content: aiResponse }]);
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="py-24 bg-[#0A0A0A] text-white overflow-hidden relative border-t border-white/5">
      {/* 背景动态装饰 */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] mix-blend-screen pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center font-bold shadow-lg shadow-indigo-500/30">
                  AI
              </span>
             <div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
                    与专属分身交流
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Powered by RAG & DeepSeek/Gemini
                </p>
             </div>
          </div>
        </motion.div>

        {/* 极简风终端式聊天窗 */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="w-full h-[500px] bg-[#141414] border border-[#2A2A2A] rounded-2xl flex flex-col shadow-2xl relative overflow-hidden"
        >
           {/* macOS 式窗体控制钮 */}
           <div className="flex items-center gap-2 p-4 border-b border-[#2A2A2A] bg-[#1a1a1a]/50">
               <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
               <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
               <span className="ml-4 text-xs text-gray-500 tracking-wider">OMNI-WORKER.exe</span>
           </div>

           {/* 消息区 */}
           <div className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-gray-800">
              <AnimatePresence>
                {messages.map((msg, i) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={i}
                      className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                            msg.role === 'user' 
                                ? 'bg-indigo-600 text-white rounded-tr-sm' 
                                : 'bg-[#222] text-gray-200 border border-[#333] rounded-tl-sm'
                        }`}>
                           {msg.content}
                        </div>
                    </motion.div>
                ))}
                {loading && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex w-full justify-start">
                       <div className="bg-[#222] text-gray-200 border border-[#333] rounded-2xl rounded-tl-sm px-5 py-3 flex items-center gap-2">
                           <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" />
                           <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-75" />
                           <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-150" />
                       </div>
                    </motion.div>
                )}
              </AnimatePresence>
           </div>

           {/* 输入框区 */}
           <div className="p-4 bg-[#111] border-t border-[#2A2A2A]">
               <div className="relative flex items-center bg-[#1A1A1A] rounded-xl border border-[#333] overflow-hidden focus-within:border-indigo-500/50 transition-colors">
                 <input 
                    type="text" 
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                    placeholder="问点什么... 例如：有方在 RAG 上做过什么？" 
                    className="flex-1 bg-transparent px-5 py-4 text-sm text-gray-200 outline-none placeholder:text-gray-600"
                 />
                 <button 
                    onClick={handleSend}
                    className="mr-2 p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                 >
                    发送请求
                 </button>
               </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}