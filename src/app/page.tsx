import Home from "@/pages/Home";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="font-sans grid min-h-screen mt-16">
      <main className="flex flex-col row-start-2 items-center justify-center bg-background">
        <Home />
      </main>
      <footer className="row-start-3 ">
        <Footer />
      </footer>
    </div>
  );
}
