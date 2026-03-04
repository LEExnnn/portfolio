"use client";

import { motion } from "framer-motion";
import { openSourceProjects } from "@/lib/data";

export default function OpenSourceSection() {
    return (
        <section id="opensource" className="py-28 bg-[#070707] text-white relative overflow-hidden border-t border-white/[0.04]">
            {/* 背景装饰 */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-40 right-10 w-[350px] h-[350px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

                {/* 标题 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.25em] text-emerald-400 uppercase bg-emerald-900/20 border border-emerald-500/20 rounded-full"
                    >
                        Open Source
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-5 tracking-tight">
                        个人开源项目
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto font-light leading-relaxed">
                        开源是最好的名片。这些是我在业余时间构建并回馈给社区的工具与框架。
                    </p>
                </motion.div>

                {/* 开源项目卡片网格 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {openSourceProjects.map((proj, index) => (
                        <motion.a
                            key={proj.id}
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="group relative block bg-gradient-to-b from-[#111] to-[#0d0d0d] border border-white/[0.07] rounded-2xl p-7 hover:border-emerald-500/30 hover:shadow-[0_16px_50px_rgba(16,185,129,0.1)] transition-all duration-300 card-glow-border overflow-hidden cursor-pointer"
                        >
                            {/* 顶部图标行 */}
                            <div className="flex items-start justify-between mb-5">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 flex items-center justify-center text-xl">
                                    {proj.emoji}
                                </div>

                                {/* GitHub 图标 */}
                                <motion.div
                                    whileHover={{ scale: 1.15, rotate: -5 }}
                                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-300"
                                >
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-400 group-hover:fill-emerald-400 transition-colors">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </motion.div>
                            </div>

                            {/* 项目名 */}
                            <h3 className="text-lg font-bold text-gray-100 group-hover:text-emerald-300 transition-colors duration-300 mb-2">
                                {proj.name}
                            </h3>

                            {/* 描述 */}
                            <p className="text-sm text-gray-500 leading-relaxed mb-5 group-hover:text-gray-400 transition-colors">
                                {proj.description}
                            </p>

                            {/* 技术标签 */}
                            <div className="flex flex-wrap gap-1.5">
                                {proj.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 text-[11px] bg-white/[0.04] border border-white/8 text-gray-500 rounded-md font-mono group-hover:border-emerald-500/20 group-hover:text-emerald-500/70 transition-all duration-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* 底部星标数 */}
                            {proj.stars && (
                                <div className="absolute top-4 right-14 flex items-center gap-1 text-[11px] text-yellow-500/60 font-mono">
                                    <span>★</span>
                                    <span>{proj.stars}</span>
                                </div>
                            )}

                            {/* 悬浮底部指示 */}
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
