import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] selection:bg-indigo-500/30">
      {/* 嵌入首屏模块 */}
      <HeroSection />
      
      {/* TODO: 接下来的个人项目流、问答区会往下加... */}
      <div className="h-[50vh] flex items-center justify-center text-gray-700 bg-black">
        正在为您铺设项目橱窗轨道... 🚧
      </div>
    </main>
  );
}