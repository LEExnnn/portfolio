"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // 追踪当前放大的视频项目 (储存项目对象以便获取 url 和 posterUrl)
  const [activeProject, setActiveProject] = useState<{ videoUrl?: string, posterUrl?: string } | null>(null);

  // 当弹窗打开时，静止背景滚动
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeProject]);

  return (
    <section id="projects" ref={sectionRef} className="py-28 bg-[#050505] text-white relative z-10 overflow-hidden">

      {/* 背景装饰光晕 */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* section 标题区 */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="mb-20 text-center"
        >
          {/* 小标签 */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.25em] text-indigo-400 uppercase bg-indigo-900/30 border border-indigo-500/20 rounded-full"
          >
            Core Projects
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6 tracking-tight">
            核心项目实战
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            每一次代码提交，都是对 AI 能力边界的重新定义。<br />
            这是我在 Agent 协同、自动化流转与底层架构攻坚中交出的硬核答卷。
          </p>
        </motion.div>

        {/* 项目卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -12, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group card-glow-border relative bg-gradient-to-b from-[#141414] to-[#0f0f0f] border border-white/8 rounded-3xl overflow-hidden hover:border-indigo-500/30 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15),0_0_0_1px_rgba(99,102,241,0.1)] transition-all duration-400"
            >
              {/* 视频/占位背景区 */}
              <div
                className={`w-full h-52 bg-[#0a0a0a] relative overflow-hidden ${project.videoUrl ? 'cursor-pointer' : ''}`}
                onClick={() => project.videoUrl && setActiveProject(project)}
              >
                {project.videoUrl ? (
                  <>
                    <video
                      src={project.videoUrl}
                      poster={project.posterUrl}
                      autoPlay loop muted playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 z-0"
                    />
                    {/* 悬停放大提示 */}
                    <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/20">
                      <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg text-xs font-semibold text-white/90 border border-white/20 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        点击放大演示
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/60 via-[#0a0a0a] to-purple-950/40">
                    {/* 占位动效网格 */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:30px_30px]" />
                    <motion.div
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                      className="absolute inset-0 flex flex-col items-center justify-center"
                    >
                      <span className="text-5xl mb-3 filter drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]">🎬</span>
                      <span className="text-[10px] tracking-[0.3em] text-indigo-400/60 uppercase font-mono">Awaiting Demo</span>
                    </motion.div>
                  </div>
                )}

                {/* 顶部徽章 */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full text-[11px] font-semibold text-white/80 border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.videoUrl ? "LIVE DEMO" : "PROJECT"}
                </div>

                {/* 底部渐变遮罩 */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#141414] to-transparent z-10" />
              </div>

              {/* 卡片内容 */}
              <div className="p-7">
                <h3 className="text-xl font-bold text-gray-100 group-hover:text-indigo-300 transition-colors duration-300 mb-1 leading-snug">
                  {project.name}
                </h3>
                <p className="text-[11px] text-indigo-500 font-bold tracking-[0.15em] mb-4 uppercase">
                  {project.role}
                </p>
                <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* 技术标签 */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08, color: "#a5b4fc" }}
                      className="px-2.5 py-1 text-[11px] bg-white/[0.04] border border-white/8 hover:border-indigo-500/40 text-gray-400 rounded-md font-mono cursor-default transition-colors duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* 亮点列表 */}
                <ul className="space-y-2.5 pt-5 border-t border-white/[0.06]">
                  {project.highlights.map((hw, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-start group/item hover:text-gray-300 transition-colors duration-200 cursor-default">
                      <motion.span
                        className="text-indigo-500 mr-2.5 mt-0.5 flex-shrink-0"
                        whileHover={{ x: 2 }}
                      >▹</motion.span>
                      <span className="leading-relaxed">{hw}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 底部扫光 */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* 顶部微光 */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 视频放大弹窗 (Modal) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setActiveProject(null)}
          >
            {/* 关闭按钮 */}
            <button
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-200 border border-white/10 z-50"
              onClick={(e) => {
                e.stopPropagation();
                setActiveProject(null);
              }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black"
              onClick={(e) => e.stopPropagation()} // 防止点击视频区域本身关闭弹窗
            >
              <video
                src={activeProject.videoUrl}
                poster={activeProject.posterUrl}
                autoPlay
                controls
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}