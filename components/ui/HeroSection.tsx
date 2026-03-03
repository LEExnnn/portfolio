"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] text-white">
      {/* 炫酷的动态背景光晕 */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      {/* 主标题入场动画 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center"
      >
        <span className="px-4 py-2 mb-6 text-sm font-medium tracking-widest text-indigo-400 uppercase bg-indigo-900/30 border border-indigo-500/30 rounded-full">
          AI 独立探索者 / 顶级产品架构师
        </span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 mb-6 text-center">
          您好，我是有方
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl text-center mb-10 font-light leading-relaxed">
          深耕 AI 应用落地与 Vibe Coding 实践。用极致的代码与直觉，打造探索人工智能边界的硬核产品。
        </p>

        {/* 交互按钮栏 */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex gap-6"
        >
          <button className="px-8 py-4 font-bold text-white transition-all bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl backdrop-blur-md">
            ▶ 探索核心项目
          </button>
          <button className="px-8 py-4 font-bold text-black transition-all bg-indigo-400 hover:bg-indigo-300 rounded-xl shadow-[0_0_40px_rgba(129,140,248,0.4)]">
            💬 唤醒专属 AI 助理
          </button>
        </motion.div>
      </motion.div>
      
    </section>
  );
}