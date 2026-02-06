import { Experiencia } from "./components/Experiencia"
import { Footer } from "./components/Footer"
import { Habilidades } from "./components/Habilidades"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Reconocimientos } from "./components/Reconocimientos"

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-200 antialiased selection:bg-blue-500/30 selection:text-blue-200">
        <Navbar />
        <main className="pt-16">
          <Hero />
          <Reconocimientos />
          <Habilidades />
          <Experiencia />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
