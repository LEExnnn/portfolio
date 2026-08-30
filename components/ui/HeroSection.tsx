"use client";

import { ArrowDownRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STARS = Array.from({ length: 48 }, (_, index) => ({
  id: index,
  x: (index * 137.508) % 100,
  y: (index * 97.321) % 100,
  size: (index % 3) + 1,
  delay: (index * 0.19) % 5,
  duration: 3 + (index % 4),
}));

const CAPABILITIES = ["产品设计", "Agent 系统", "真实部署"];

const PROOFS = [
  { value: "5+", label: "年核心研发" },
  { value: "3", label: "个旗舰案例", accessible: "3 个旗舰案例" },
  { value: "IDEA → LIVE", label: "从想法到上线" },
];

const PIPELINE = [
  { index: "01", label: "DEFINE", title: "定义产品" },
  { index: "02", label: "ORCHESTRATE", title: "编排智能体" },
  { index: "03", label: "SHIP", title: "交付上线" },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const visualY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.78], [1, 0]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#050507] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_82%_70%_at_50%_42%,black_5%,transparent_92%)]" />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.32, 0.48, 0.32] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-28 top-[18%] h-[420px] w-[420px] rounded-full bg-indigo-600/25 blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, 28, 0], y: [0, -18, 0], opacity: [0.18, 0.34, 0.18] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-24 top-[6%] h-[520px] w-[520px] rounded-full bg-sky-500/20 blur-[150px]"
        />

        {STARS.map((star) => (
          <motion.span
            key={star.id}
            animate={{ opacity: [0.16, 0.72, 0.16], scale: [1, 1.35, 1] }}
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

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-[43%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/10 lg:hidden"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-[43%] h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/10 lg:hidden"
        />
      </div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-[1280px] items-center gap-10 px-5 pb-16 pt-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-20 lg:pt-24"
      >
        <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-[10px] font-medium tracking-[0.13em] text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_50px_rgba(42,54,115,0.18)] backdrop-blur-xl sm:px-4 sm:text-xs"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
            <span className="truncate">AI原生产品构建者 · Agent系统架构与落地</span>
          </motion.div>

          <motion.h1
            data-testid="hero-title"
            aria-label="您好，我是有方"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="w-full text-center font-medium leading-[0.84] tracking-[-0.065em] lg:text-left"
          >
            <span className="mb-3 block text-[clamp(1rem,4vw,1.35rem)] font-normal tracking-[0.2em] text-slate-400">
              您好，我是
            </span>
            <span className="block text-[clamp(4.4rem,20vw,8.5rem)] text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-slate-500 lg:text-[clamp(6rem,9vw,8.5rem)]">有方</span>
          </motion.h1>

          <motion.p
            aria-label="用 AI、Agent 与全栈工程，把想法变成真正上线的产品。"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.22 }}
            className="mt-7 max-w-[680px] text-[clamp(1rem,4.2vw,1.28rem)] font-normal leading-[1.72] text-slate-400 lg:text-xl"
          >
            用 <span className="font-medium text-white">AI、Agent 与全栈工程</span>，
            把想法变成真正上线的产品。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32 }}
            className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start"
            aria-label="能力闭环：产品设计、Agent 系统、真实部署"
          >
            {CAPABILITIES.map((capability, index) => (
              <div key={capability} className="flex items-center gap-2">
                <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md">
                  {capability}
                </span>
                {index < CAPABILITIES.length - 1 && (
                  <span className="text-[10px] text-indigo-300/60">→</span>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42 }}
            className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("projects")}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-shadow hover:shadow-[0_0_36px_rgba(255,255,255,0.22)]"
            >
              查看真实项目
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("opensource")}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] px-6 py-3 text-sm font-medium text-slate-200 backdrop-blur-xl transition-colors hover:bg-white/[0.08]"
            >
              探索作品矩阵
            </motion.button>
          </motion.div>

          <motion.div
            data-testid="hero-proof-strip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.58 }}
            className="mt-9 grid w-full max-w-[620px] grid-cols-3 border-t border-white/[0.08] pt-5"
          >
            {PROOFS.map((proof, index) => (
              <div
                key={proof.label}
                aria-label={proof.accessible}
                className={`min-w-0 px-2 text-center lg:text-left ${index > 0 ? "border-l border-white/[0.08]" : ""}`}
              >
                <div className="truncate text-[clamp(0.82rem,3.4vw,1.08rem)] font-semibold tracking-tight text-slate-100">
                  {proof.value}
                </div>
                <div className="mt-1 truncate text-[10px] tracking-[0.08em] text-slate-500 sm:text-xs">
                  {proof.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          style={{ y: visualY }}
          initial={{ opacity: 0, scale: 0.94, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden h-[570px] w-full items-center justify-center lg:flex"
          aria-hidden="true"
        >
          <div className="relative h-[530px] w-full max-w-[500px] overflow-hidden rounded-[34px] border border-white/[0.09] bg-[#090a0f]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_40px_120px_rgba(25,36,90,0.34)] backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4">
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.85)]" />
                YOUFANG / BUILD SYSTEM
              </div>
              <span className="font-mono text-[9px] tracking-[0.16em] text-emerald-300/80">ONLINE</span>
            </div>

            <div className="relative mx-auto mt-4 h-[322px] w-[322px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-indigo-300/15"
              >
                <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-indigo-300 shadow-[0_0_18px_rgba(165,180,252,0.9)]" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[34px] rounded-full border border-sky-300/15"
              >
                <span className="absolute bottom-[22px] right-[12px] h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_16px_rgba(125,211,252,0.9)]" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.045, 1], opacity: [0.82, 1, 0.82] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-[72px] flex flex-col items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.22),rgba(87,102,203,0.22)_32%,rgba(9,10,15,0.88)_72%)] shadow-[0_0_85px_rgba(99,102,241,0.28),inset_0_0_35px_rgba(255,255,255,0.05)]"
              >
                <span className="font-mono text-[9px] tracking-[0.24em] text-indigo-200/60">FROM IDEA</span>
                <span className="my-2 text-3xl font-medium tracking-[-0.06em] text-white">TO LIVE</span>
                <span className="font-mono text-[9px] tracking-[0.24em] text-emerald-300/70">SHIPPED</span>
              </motion.div>

              <span className="absolute left-2 top-[88px] rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[9px] tracking-[0.12em] text-slate-300 backdrop-blur-xl">PRODUCT</span>
              <span className="absolute right-[-5px] top-[116px] rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[9px] tracking-[0.12em] text-slate-300 backdrop-blur-xl">AGENTS</span>
              <span className="absolute bottom-[26px] left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[9px] tracking-[0.12em] text-slate-300 backdrop-blur-xl">DEPLOY</span>
            </div>

            <div className="mx-5 grid grid-cols-3 gap-2 border-t border-white/[0.07] pt-4">
              {PIPELINE.map((step) => (
                <motion.div
                  key={step.index}
                  whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.06)" }}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3.5"
                >
                  <div className="flex items-center justify-between font-mono text-[8px] tracking-[0.12em] text-slate-600">
                    <span>{step.index}</span>
                    <span>{step.label}</span>
                  </div>
                  <div className="mt-3 text-sm font-medium text-slate-200">{step.title}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        onClick={() => scrollTo("projects")}
        className="absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] tracking-[0.28em] text-slate-600 transition-colors hover:text-slate-400 sm:flex lg:bottom-7"
      >
        EXPLORE WORK
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-indigo-400/80 to-transparent"
        />
      </motion.button>
    </section>
  );
}
