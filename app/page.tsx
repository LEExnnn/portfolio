import HeroSection from "@/components/ui/HeroSection";
import ProjectsSection from "@/components/ui/ProjectsSection";
import AssistantSection from "@/components/ui/AssistantSection";
import OpenSourceSection from "@/components/ui/OpenSourceSection";
import ToolsSection from "@/components/ui/ToolsSection";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] selection:bg-indigo-500/30">
      {/* 首屏：宇宙感入场 + 星点粒子 + 打字机 */}
      <HeroSection />

      {/* 项目橱窗：流光卡片 + 视频演示 */}
      <ProjectsSection />

      {/* 个人开源项目 */}
      <OpenSourceSection />

      {/* 实用小工具 */}
      <ToolsSection />

      {/* 互动 AI 助理：终端风格 */}
      <AssistantSection />

      {/* 页脚 & 联系方式 */}
      <footer className="py-16 text-center bg-[#030303] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-6 mb-12 flex flex-col items-center">
          <h3 className="text-xl font-bold text-white/90 mb-8">联系我</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
            {/* 电话 */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors">
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-xs text-gray-400 mb-1">PHONE</span>
              <span className="text-sm text-gray-200 font-mono tracking-wide">{personalInfo.contact.phone}</span>
            </div>

            {/* 邮箱 */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-xs text-gray-400 mb-1">EMAIL</span>
              <span className="text-sm text-gray-200 font-mono tracking-wide">{personalInfo.contact.email}</span>
            </div>

            {/* 微信 - 借用 MessageCircle 图标作为替代 */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-xs text-gray-400 mb-1">WECHAT</span>
              <span className="text-sm text-gray-200 font-mono tracking-wide">{personalInfo.contact.phone}</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.04]">
          <p className="text-sm font-light text-gray-600">
            Built with ❤️ Next.js · Framer Motion · OpenAI
          </p>
          <p className="mt-2 text-xs text-gray-700">
            © 2026 李祥宁 · 保留所有权利
          </p>
        </div>
      </footer>
    </main>
  );
}