import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import FloatingRobot from './components/3d/FloatingRobot'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import MobileProjects from './components/sections/MobileProjects'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'
import { FaArrowUp } from 'react-icons/fa'
import { motion, useScroll, useSpring } from 'framer-motion'

const Navbar = () => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[1001] px-6 md:px-20 py-8 flex justify-between items-center backdrop-blur-sm bg-white/70 border-b border-slate-100">
      {!imageError ? (
        <img
          src="/images/logo.png"
          alt="Chetan Bhagat"
          className="w-11 h-11 rounded-full object-cover cursor-pointer border-2 border-slate-800 hover:border-accent transition-all duration-300 hover:scale-105 shadow-md"
          onClick={() => {
            const el = document.getElementById('home');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onError={() => setImageError(true)}
        />
      ) : (
        <div
          className="w-11 h-11 rounded-full bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center cursor-pointer border-2 border-slate-800 hover:border-accent transition-all duration-300 hover:scale-105 shadow-md"
          onClick={() => {
            const el = document.getElementById('home');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-white font-bold text-sm">CB</span>
        </div>
      )}
      <div className="flex gap-8 text-sm font-mono text-slate-500">
        <a href="#about" className="hover:text-accent transition-colors hidden md:block">01. About</a>
        <a href="#skills" className="hover:text-accent transition-colors hidden md:block">02. Skills</a>
        <a href="#projects" className="hover:text-accent transition-colors hidden md:block">03. Projects</a>
        <a href="#mobile-apps" className="hover:text-accent transition-colors hidden md:block">04. Apps</a>
        <a href="#contact" className="hover:text-accent transition-colors">05. Contact</a>
      </div>
    </nav>
  )
}

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

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

      <Navbar />

      {/* 3D Navigation Guide */}
      <FloatingRobot />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <MobileProjects />
        <Achievements />
        <Contact />
      </div>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-500 text-sm font-mono">
        <p>Designed & Built by <span className="text-slate-900 font-bold">Chetan Bhagat</span></p>
        <div className="mt-4 flex justify-center gap-6">
          <p>© 2025 All Rights Reserved</p>
        </div>
      </footer>

      {/* Global Social Floating Icons - Visual Priority above Robot */}
      <div className="fixed right-16 bottom-16 flex flex-col gap-4 z-[1002] hidden md:flex">
        <a
          href="https://www.instagram.com/ch_etan012/?utm_source=ig_web_button_share_sheet"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-xl bg-white shadow-md hover:shadow-lg transition animate-float flex items-center justify-center cursor-pointer pointer-events-auto"
        >
          <img
            src="/icons/instagram.png"
            alt="Instagram"
            className="w-full h-full object-contain rounded-xl p-2"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/chetansb22/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-xl bg-white shadow-md hover:shadow-lg transition animate-float animate-float-delay flex items-center justify-center cursor-pointer pointer-events-auto"
        >
          <img
            src="/icons/linkedin.png"
            alt="LinkedIn"
            className="w-full h-full object-contain rounded-xl p-2"
          />
        </a>
        <a
          href="https://github.com/chetan12bhagat"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-xl bg-white shadow-md hover:shadow-lg transition animate-float flex items-center justify-center cursor-pointer pointer-events-auto"
        >
          <img
            src="/icons/github.png"
            alt="GitHub"
            className="w-full h-full object-contain rounded-xl p-2"
          />
        </a>
      </div>

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showTopBtn ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 z-[100] p-4 bg-slate-900 text-white rounded-full shadow-lg hover:bg-slate-800 transition-all hidden md:flex"
      >
        <FaArrowUp />
      </motion.button>
    </main>
  )
}

export default App
