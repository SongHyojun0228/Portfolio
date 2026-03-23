"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-10 h-10" /> 
    }

    const currentTheme = theme === 'system' ? resolvedTheme : theme;

    return (
        <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full bg-background text-text-secondary hover:text-primary hover:bg-bg-second border border-text/10 shadow-sm transition-all focus:outline-none"
            aria-label="Toggle Dark Mode"
        >
            {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    )
}
