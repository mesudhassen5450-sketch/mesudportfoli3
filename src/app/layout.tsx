import './globals.css'
import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import ThemeProvider from '@/components/ThemeProvider'
import { AudioProvider } from '@/context/AudioContext'
import { LanguageProvider } from '@/context/LanguageContext'
import AudioPlayer from '@/components/AudioPlayer'
import { siteConfig } from '@/config/content'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: '/mesudimage2.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <AudioProvider>
              <div className="relative h-screen">
                <div className="relative z-10 flex flex-col h-full">
                  {children}
                </div>
              </div>
              <AudioPlayer />
            </AudioProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 