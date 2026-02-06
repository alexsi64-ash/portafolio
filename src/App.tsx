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
      <div className="min-h-screen bg-[#0D0D0D] text-[#F2F2F2] selection:bg-[#F24130]/30 selection:text-[#F24130]">
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
