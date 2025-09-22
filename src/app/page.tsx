import Home from "@/pages/Home";

export default function HomePage() {
  return (
    <div className="font-sans grid min-h-screen pb-20 gap-16">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center bg-background">
        <Home/>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
