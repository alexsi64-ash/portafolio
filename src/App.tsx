import { Educacion } from "./components/Educacion"
import { Experiencia } from "./components/Experiencia"
import { Footer } from "./components/Footer"
import { Habilidades } from "./components/Habilidades"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Reconocimientos } from "./components/Reconocimientos"

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <Hero />
          <Experiencia />
          <Reconocimientos />
          <Habilidades />
          <Educacion />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
