import { TelanganaMap } from "@/components/TelanganaMap";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-8 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Telangana Districts Map
          </h1>
          <p className="text-muted-foreground text-lg">
            Interactive map showcasing all 33 districts of Telangana state. Hover over districts to explore details.
          </p>
        </div>
      </header>

      <main className="py-8">
        <TelanganaMap />
      </main>

      <footer className="py-6 px-6 border-t border-border mt-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>Interactive Telangana Map © 2025 • Data includes population, area, and famous landmarks</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
