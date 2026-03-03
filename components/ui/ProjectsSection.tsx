"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 mb-4 tracking-tight">
            探索核心项目
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            每一次代码提交，都是对 AI 能力边界的重新定义。
            这是我在 Agent 协同、自动化流转与底层架构攻坚中交出的答卷。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-colors"
            >
              {/* 模拟的视频/缩略图占位区 */}
              <div className="w-full h-48 bg-[#1a1a1a] relative overflow-hidden">
                 {/* 后续可以替换为真实的 <video> 标签 */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:scale-105 transition-transform duration-500">
                    <span className="text-4xl">🎬</span>
                 </div>
                 <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 backdrop-blur rounded text-xs text-white/70">
                    Video Demo
                 </div>
                 {/* 悬浮装饰光 */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-indigo-500/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-100">{project.name}</h3>
                </div>
                
                <p className="text-sm text-indigo-400 font-medium mb-3">{project.role}</p>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* 技术栈标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map(tech => (
                    <span key={tech} className="px-2 py-1 text-[11px] bg-white/5 border border-white/10 text-gray-300 rounded font-mono">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 text-[11px] bg-white/5 border border-white/10 text-gray-500 rounded font-mono">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <ul className="space-y-2 mt-4 pt-4 border-t border-white/10">
                    {project.highlights.slice(0, 2).map((hw, i) => (
                         <li key={i} className="text-xs text-gray-500 flex items-start">
                             <span className="text-indigo-500 mr-2">▹</span> <span className="line-clamp-2">{hw}</span>
                         </li>
                    ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}