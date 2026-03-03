"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-[#050505] text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mb-6 tracking-tight drop-shadow-lg">
            核心项目实战
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            每一次代码提交，都是对 AI 能力边界的重新定义。<br/>
            这是我在 Agent 协同、自动化流转与底层架构攻坚中交出的硬核答卷。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative bg-[#111] border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] transition-all duration-300"
            >
              {/* 动态视频/占位背景区 */}
              <div className="w-full h-56 bg-[#0a0a0a] relative overflow-hidden group-hover:after:absolute group-hover:after:inset-0 group-hover:after:bg-black/20 group-hover:after:z-10 transition-all duration-500">
                 {project.videoUrl ? (
                    <video
                        src={project.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-0"
                    />
                 ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/50 to-transparent">
                        <span className="text-5xl mb-2 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">🎬</span>
                        <span className="text-xs tracking-widest text-indigo-200">AWAITING VIDEO DEMO</span>
                    </div>
                 )}
                 <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-white/90 border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {project.videoUrl ? "LIVE DEMO" : "PROJECT"}
                 </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-100 group-hover:text-indigo-400 transition-colors duration-300">{project.name}</h3>
                </div>
                
                <p className="text-sm text-indigo-500 font-semibold tracking-wide mb-4 uppercase">{project.role}</p>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed relative z-10">
                  {project.description}
                </p>

                {/* 技术栈动态标签 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <motion.span 
                      key={tech} 
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(99,102,241,0.2)" }}
                      className="px-3 py-1 text-xs bg-white/5 border border-white/10 hover:border-indigo-500/50 text-gray-300 rounded-md font-mono transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <ul className="space-y-3 mt-4 pt-6 border-t border-white/10 relative">
                    {project.highlights.map((hw, i) => (
                         <li key={i} className="text-sm text-gray-400 flex items-start group/item hover:text-gray-200 transition-colors">
                             <span className="text-indigo-500 mr-3 opacity-70 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all mt-0.5">▹</span> 
                             <span className="leading-relaxed">{hw}</span>
                         </li>
                    ))}
                </ul>
              </div>

              {/* 卡片底部的极光扫光扫尾特效 */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}