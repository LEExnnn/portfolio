"use client";

import { motion } from "framer-motion";
import { tools } from "@/lib/data";
import Image from "next/image";

export default function ToolsSection() {
    return (
        <section id="tools" className="py-28 bg-[#050505] text-white relative overflow-hidden border-t border-white/[0.04]">
            {/* 背景装饰 */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-amber-500/15 to-transparent pointer-events-none" />
            <div className="absolute top-40 left-20 w-[400px] h-[400px] bg-amber-900/8 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">

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
                        className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.25em] text-amber-400 uppercase bg-amber-900/20 border border-amber-500/20 rounded-full"
                    >
                        Useful Tools
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 mb-5 tracking-tight">
                        实用小工具
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto font-light leading-relaxed">
                        用来提升日常效率的实用工具，每一个都是真实需求驱动下的产物。
                    </p>
                </motion.div>

                {/* 工具列表 */}
                <div className="space-y-12">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={tool.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ delay: index * 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                            className={`group flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}
                        >
                            {/* 截图区 */}
                            <motion.div
                                whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 2 : -2 }}
                                transition={{ duration: 0.3 }}
                                className="w-full lg:w-3/5 relative flex-shrink-0"
                            >
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-amber-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_80px_rgba(245,158,11,0.1)] transition-all duration-500 bg-[#111]">
                                    {tool.screenshotUrl ? (
                                        <Image
                                            src={tool.screenshotUrl}
                                            alt={tool.name}
                                            width={800}
                                            height={500}
                                            className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    ) : (
                                        <div className="w-full aspect-video bg-gradient-to-br from-amber-950/40 via-[#111] to-orange-950/30 flex flex-col items-center justify-center">
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
                                            <motion.div
                                                animate={{ opacity: [0.4, 0.8, 0.4] }}
                                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                                className="flex flex-col items-center gap-3 relative"
                                            >
                                                <span className="text-5xl filter drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">{tool.emoji}</span>
                                                <span className="text-[11px] tracking-[0.3em] text-amber-500/50 uppercase font-mono">Screenshot Coming</span>
                                            </motion.div>
                                        </div>
                                    )}
                                    {/* 顶部光晕 */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </motion.div>

                            {/* 描述区 */}
                            <div className="w-full lg:w-2/5 space-y-5">
                                {/* 编号 */}
                                <div className="text-6xl font-black text-white/[0.04] font-mono leading-none select-none">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-2xl">{tool.emoji}</span>
                                        <h3 className="text-2xl font-bold text-gray-100 group-hover:text-amber-300 transition-colors duration-300">
                                            {tool.name}
                                        </h3>
                                    </div>
                                    <p className="text-gray-500 leading-relaxed mb-5 text-sm">
                                        {tool.description}
                                    </p>
                                </div>

                                {/* 功能点列表 */}
                                <ul className="space-y-2.5">
                                    {tool.features.map((feature, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + i * 0.05, duration: 0.4 }}
                                            className="flex items-start gap-3 text-sm text-gray-500 hover:text-gray-300 transition-colors cursor-default"
                                        >
                                            <span className="text-amber-500 mt-0.5 flex-shrink-0">▹</span>
                                            <span>{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* 技术标签 */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {tool.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-[11px] bg-amber-500/5 border border-amber-500/15 text-amber-500/60 rounded-md font-mono hover:border-amber-500/30 hover:text-amber-400 transition-all cursor-default"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                {tool.url && (
                                    <motion.a
                                        href={tool.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 4 }}
                                        className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 font-medium pt-2 transition-colors"
                                    >
                                        查看工具 →
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
