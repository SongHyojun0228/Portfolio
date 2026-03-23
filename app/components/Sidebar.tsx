"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, NotebookPen, FolderKanban } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

const NAV_ITEMS = [
    {
        name: "Home",
        href: "/",
        icon: Home
    },
    {
        name: "Projects",
        href: "/projects", // 기존의 /projects/ 에서 끝에 슬래시 정리
        icon: FolderKanban
    },
    {
        name: "Blog",
        href: "/blog", // 기존의 /blogs 에서 폴더명 /blog 와 일치시킴
        icon: NotebookPen
    }
]

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r border-accent bg-bg-second flex flex-col p-6 gap-8 sticky top-0 md:h-screen md:overflow-y-auto z-50">
            <div className="text-xl font-bold tracking-tight text-text">
                <Link href="/">송효준.dev</Link>
            </div>

            {/* 네비게이션 메뉴 */}
            <nav className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${isActive
                                    ? "bg-primary/20 text-primary font-bold" // 활성화 시 primary 컬러 활용
                                    : "text-text-secondary hover:bg-bg-second hover:text-text" // 비활성화 시 hover 효과
                                }`}
                        >
                            <item.icon size={20} />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* 푸터 부분 */}
            <div className="mt-auto flex items-center justify-between">
                <div className="text-xs text-text-secondary opacity-70">
                    © 2026 Song Hyojun
                </div>
                <ThemeToggle />
            </div>
        </aside>
    )
}
