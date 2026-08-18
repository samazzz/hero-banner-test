import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#f7f8f7]">
      <Header />
      <main className="flex-1">
        <HeroBanner />
      </main>
    </div>
  );
}
