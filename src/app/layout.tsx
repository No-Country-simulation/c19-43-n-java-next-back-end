import "@/app/globals.css"
import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <main className="flex flex-col items-center min-h-screen">
          <Navbar />  
          {children}
        </main> 
        </body>
    </html>
  );
}
