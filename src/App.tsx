import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <>
      <div className="antialiased text-slate-900">
        <Navbar />
        <main className="pt-16">
          <Hero />
        </main>
      </div>
    </>
  )
}

export default App
