import { cn } from "@/lib/utils";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { AppProvider } from "./_components/provider";
import { rootMetadata, viewport } from "./_lib/metadata";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata = rootMetadata;
export { viewport };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full antialiased", inter.variable, bricolage.variable)}>
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
