"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] text-white perspective-[1000px]">
      
      {/* ---------- 深度动态特效背景区 ---------- */}
      
      {/* 1. 核心能量球 (缓慢脉冲发光) */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[100px] mix-blend-screen pointer-events-none" 
      />

      {/* 2. 纵深星轨环网 (3D 旋转切割) */}
      <motion.div 
        animate={{ rotateZ: 360, rotateX: 20 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[inset_0_0_80px_rgba(255,255,255,0.02)]"
      />
      <motion.div 
        animate={{ rotateZ: -360, rotateY: 30 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute w-[1000px] h-[1000px] border border-indigo-500/10 rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* 3. 极简网格遮罩 (赛博深空感) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_70%_at_center,black_10%,transparent_100%)] pointer-events-none" />


      {/* ---------- 前端浮动内容区 ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 flex flex-col items-center drop-shadow-2xl"
      >
        <motion.span 
          whileHover={{ scale: 1.05 }}
          className="px-5 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-indigo-300 uppercase bg-indigo-900/40 border border-indigo-400/30 rounded-full backdrop-blur-xl shadow-[0_0_20px_rgba(99,102,241,0.2)] cursor-default"
        >
          AI 全栈研发 · 顶级 Agent 架构师
        </motion.span>
        
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-gray-600 mb-6 text-center leading-tight">
          您好，<br className="md:hidden"/>我是有方
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl text-center mb-12 font-light leading-relaxed mx-4 drop-shadow-md">
          打破传统工程排期壁垒，深耕 <span className="font-semibold text-gray-200">Vibe Coding</span> 实践。<br/>
          将自然语言指令转化为生产可用的企业级数字化底座。
        </p>

        {/* 交互按钮栏 */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 relative"
        >
          {/* 发光脉冲按钮 */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500 group-hover:duration-200" />
            <button className="relative px-8 py-4 font-bold text-white transition-all bg-[#0a0a0a] border border-white/10 hover:bg-[#111] rounded-xl flex items-center gap-2">
                <span className="text-lg">▶</span>
                探索硬核实战
            </button>
          </div>
          
          <button className="px-8 py-4 font-bold text-black transition-all bg-indigo-500 hover:bg-indigo-400 rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:scale-105 active:scale-95 flex items-center gap-2">
            <span className="text-lg">💬</span>
            唤醒专属 AI 助理
          </button>
        </motion.div>
      </motion.div>
      
      {/* 底部鼠标滚动指引动画 */}
       <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
            <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll To Explore</span>
            <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent"
            />
       </motion.div>
    </section>
  );
}