import { useCallback } from 'react'

export const useSmoothScroll = () => {
    const scrollTo = useCallback((id) => {
        const el = document.getElementById(id)
        if (el) {
            if (window.lenis) {
                window.lenis.scrollTo(el)
            } else {
                el.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [])

    return scrollTo
}
