import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ProfileProvider } from "@/context/ProfileContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StreamAI | Future of Streaming",
  description: "Experience the next generation of streaming with AI-powered recommendations, voice control, and immersive social experiences.",
  keywords: ["streaming", "AI", "movies", "watch party", "emotion detection"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ProfileProvider>
            {children}
          </ProfileProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
