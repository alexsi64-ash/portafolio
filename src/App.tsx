import { Experiencia } from "./components/Experiencia"
import { Footer } from "./components/Footer"
import { Habilidades } from "./components/Habilidades"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Proyectos } from "./components/Proyectos"
import { Reconocimientos } from "./components/Reconocimientos"
import { Toaster } from 'sonner';
import { SobreMi } from "./components/SobreMi"
import { Servicios } from "./components/Servicios"

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-200 antialiased selection:bg-blue-500/30 selection:text-blue-200">
        <Navbar />
        <main className="pt-16">
          <Toaster position="bottom-right" theme="dark" richColors />
          <Hero />
          <SobreMi />
          <Reconocimientos />
          <Habilidades />
          <Experiencia />
          <Proyectos />
          <Servicios />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
