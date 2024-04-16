import { useEffect, useState } from 'react'
import classes from './scrollUp.module.css'

export function ScrollUp() {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }

    }, [])

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className={classes.scrollUp}>
            <label htmlFor="torna su"></label>
            <button className={classes.torna_su} name="torna_su" onClick={scrollToTop}>Torna su</button>
        </div>
    )
}