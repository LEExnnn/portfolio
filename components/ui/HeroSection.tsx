"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// 生成随机星点数据（固定 seed 保证 SSR/CSR 一致）
const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  x: ((i * 137.508) % 100),
  y: ((i * 97.321) % 100),
  size: (i % 3) + 1,
  delay: (i * 0.17) % 5,
  duration: 3 + (i % 4),
}));

// 打字机 Hook
function useTypewriter(text: string, speed = 60, startDelay = 800) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);
  return { displayed, done };
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const tagline = "AI应用工程师 · Agent开发工程师";
  const { displayed: tagDisplayed } = useTypewriter(tagline, 50, 300);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] text-white"
    >
      {/* === 背景层 === */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">

        {/* 星点粒子层 */}
        {STARS.map((star) => (
          <motion.div
            key={star.id}
            animate={{
              y: [0, -16, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
          />
        ))}

        {/* 核心能量球 */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/25 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[80px] mix-blend-screen"
        />

        {/* 旋转星轨 */}
        <motion.div
          animate={{ rotateZ: 360, rotateX: 15 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute w-[900px] h-[900px] border border-white/[0.04] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{ rotateZ: -360, rotateY: 25 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[1200px] h-[1200px] border border-indigo-500/[0.07] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{ rotateZ: 180, rotateX: -20 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute w-[1500px] h-[1500px] border border-purple-500/[0.05] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        {/* 网格遮罩 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_center,black_10%,transparent_100%)]" />

        {/* 扫描线装饰 */}
        <motion.div
          animate={{ y: ["-10%", "110%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent pointer-events-none"
        />
      </motion.div>

      {/* === 内容层 === */}
      <motion.div style={{ y: contentY, opacity }} className="z-10 flex flex-col items-center drop-shadow-2xl px-4">

        {/* 角色标签（打字机） */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-5 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-indigo-300 uppercase bg-indigo-900/40 border border-indigo-400/30 rounded-full backdrop-blur-xl shadow-[0_0_30px_rgba(99,102,241,0.25)] cursor-default min-h-[32px] flex items-center"
        >
          {tagDisplayed}
          <span className="cursor-blink ml-0.5 text-indigo-400">|</span>
        </motion.div>

        {/* 主标题 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[108px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600 mb-6 text-center leading-[0.9]"
        >
          您好，<br className="md:hidden" />我是李祥宁
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-400 max-w-3xl text-center mb-14 font-light leading-relaxed"
        >
          探索前沿 Multi-Agent 架构，深耕{" "}
          <span className="font-semibold text-gray-200 relative">
            Vibe Coding
            <motion.span
              className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-indigo-500 to-purple-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            />
          </span>{" "}
          实践。
          <br />
          通过对话式 AI 与智能体网络，驱动并构建企业级数字化底座。
        </motion.p>

        {/* CTA 按钮 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5"
        >
          {/* 发光脉冲按钮 */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("projects")}
              className="relative px-8 py-4 font-bold text-white bg-[#0f0f0f] border border-white/10 hover:border-indigo-500/40 rounded-xl flex items-center gap-2 transition-all"
            >
              <span className="text-lg">▶</span>
              探索硬核实战
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(99,102,241,0.5)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("assistant")}
            className="px-8 py-4 font-bold text-white transition-all bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.3)] flex items-center gap-2"
          >
            <span className="text-lg">💬</span>
            唤醒专属 AI 助理
          </motion.button>
        </motion.div>

        {/* 统计数字条 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex gap-10 mt-16 border-t border-white/5 pt-8"
        >
          {[
            { value: "5+", label: "年研发经验" },
            { value: "10+", label: "AI 项目落地" },
            { value: "∞", label: "Vibe Coding 热情" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1 tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* 底部滚动指引 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("projects")}
      >
        <span className="text-[10px] text-gray-600 tracking-[0.3em] uppercase">Scroll To Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-14 bg-gradient-to-b from-indigo-500/80 to-transparent"
        />
      </motion.div>
    </section>
  );
}