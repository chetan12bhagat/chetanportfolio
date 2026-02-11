import { useState, useEffect } from 'react'

export const useSectionObserver = (sectionIds, options = { threshold: 0.5 }) => {
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, options)

        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [sectionIds, options])

    return activeSection
}
