// ** 공통 레이아웃 설계 **
import Sidebar from "./components/Sidebar"
import { ThemeProvider } from "./components/ThemeProvider"
import "./globals.css"

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}