import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import React from "react";
import {ThemeProvider} from "@/components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Api Model Platform</title>
      </head>
      <body
          className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
          )}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            storageKey="theme"
        >
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
