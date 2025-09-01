import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
      <div className="absolute inset-0 bg-gradient-to-br from-logo-pink/5 via-logo-purple/3 to-logo-blue/5 pointer-events-none"></div>
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
} 