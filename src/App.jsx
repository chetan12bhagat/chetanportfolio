import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import MobileProjects from './components/sections/MobileProjects'
import Achievements from './components/sections/Achievements'
import CV from './components/sections/CV'
import Contact from './components/sections/Contact'
import { motion, useScroll, useSpring } from 'framer-motion'
import Sidebar from './components/layout/Sidebar'

import { useSectionObserver } from './hooks/useSectionObserver'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const activeSection = useSectionObserver(['projects', 'mobile-projects', 'achievements', 'cv', 'experience', 'contact'])
  const scrollTo = useSmoothScroll()

  useEffect(() => {
    // Lenis Smooth Scroll
    const lenis = new Lenis()
    window.lenis = lenis
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-background relative min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[110] origin-left"
        style={{ scaleX }}
      />

      <Sidebar activeSection={activeSection} onNavigate={scrollTo} />


      {/* Main Content */}
      <div className="lg:ml-64 relative z-10 px-6 md:px-20 py-24 lg:py-32">
        <Hero />
        <Projects />
        <MobileProjects />
        <Achievements />
        <CV />
        <Experience />
        <Contact />
      </div>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-500 text-sm font-mono">
        <p>Designed & Built by <span className="text-slate-900 font-bold">Chetan Bhagat</span></p>
        <div className="mt-4 flex justify-center gap-6">
          <p>© 2025 All Rights Reserved</p>
        </div>
      </footer>

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showTopBtn ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 z-[100] p-4 bg-slate-900 text-white rounded-full shadow-lg hover:bg-slate-800 transition-all hidden md:flex"
      >
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L256 161.5V464c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V161.5L53.9 289.1c-9.3 9.7-24.8 9.9-34.3.4z"></path></svg>
      </motion.button>
    </main>
  )
}

export default App
