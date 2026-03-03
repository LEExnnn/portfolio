import HeroSection from "@/components/ui/HeroSection";
import ProjectsSection from "@/components/ui/ProjectsSection";
import AssistantSection from "@/components/ui/AssistantSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] selection:bg-indigo-500/30">
      {/* 嵌入首屏模块：宇宙感入场与介绍 */}
      <HeroSection />
      
      {/* 嵌入项目橱窗：卡片悬浮与视差 */}
      <ProjectsSection />

      {/* 嵌入互动大模型区：终端式专属 AI */}
      <AssistantSection />

      {/* 页脚装饰 */}
      <footer className="py-8 text-center text-sm font-light text-gray-500 bg-[#050505] border-t border-white/5">
        <p>Built with ❤️ Next.js, Framer Motion & OpenAI</p>
        <p className="mt-2 text-xs opacity-50">© 2026 李祥宁 保留所有权利。</p>
      </footer>
    </main>
  );
}