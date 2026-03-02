import { Navbar, Hero, About, Team, JoinUs, Footer } from "./components/LandingPage";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}
