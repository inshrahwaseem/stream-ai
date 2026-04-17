"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroBanner } from "@/components/movies/HeroBanner";
import { MovieRow } from "@/components/movies/MovieRow";
import { VoiceSearchOverlay } from "@/components/ai/VoiceSearchOverlay";
import { motion } from "framer-motion";

const MOCK_HERO = {
  id: "1",
  title: "Stranger Things",
  description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
  thumbnailUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
};

const MOCK_MOVIES = [
  {
    id: "m1",
    title: "Interstellar",
    thumbnailUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop",
    trailerUrl: "#",
    duration: "2h 49m",
    genre: ["Sci-Fi", "Adventure", "Drama"],
  },
  {
    id: "m2",
    title: "The Witcher",
    thumbnailUrl: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2069&auto=format&fit=crop",
    trailerUrl: "#",
    duration: "1h 0m",
    genre: ["Fantasy", "Action"],
  },
  {
    id: "m3",
    title: "Cyberpunk: Edgerunners",
    thumbnailUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop",
    trailerUrl: "#",
    duration: "25m",
    genre: ["Anime", "Sci-Fi"],
  },
  {
    id: "m4",
    title: "Dark",
    thumbnailUrl: "https://images.unsplash.com/photo-1505775561242-727b7fba20f0?q=80&w=2070&auto=format&fit=crop",
    trailerUrl: "#",
    duration: "1h 0m",
    genre: ["Thriller", "Mystery"],
  },
  {
    id: "m5",
    title: "Blade Runner 2049",
    thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
    trailerUrl: "#",
    duration: "2h 44m",
    genre: ["Sci-Fi", "Dystopian"],
  },
];

export default function HomePage() {
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-background pb-20">
      <Navbar />
      
      <HeroBanner movie={MOCK_HERO} />

      <div className="-mt-32 relative z-10 space-y-8">
        <MovieRow title="Trending Now" movies={MOCK_MOVIES} />
        <MovieRow title="AI Recommended for You" movies={[...MOCK_MOVIES].reverse()} />
        <MovieRow title="New Releases" movies={MOCK_MOVIES.slice(1, 4)} />
        <MovieRow title="Continue Watching" movies={MOCK_MOVIES.slice(0, 2)} />
      </div>

      <VoiceSearchOverlay 
        isOpen={isVoiceOpen} 
        onClose={() => setIsVoiceOpen(false)}
        onSearch={(query) => console.log("Searching for:", query)}
      />

      {/* Trigger for Voice Search (for demo) */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => setIsVoiceOpen(true)}
          className="bg-primary p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <div className="w-0 group-hover:w-24 overflow-hidden transition-all duration-300 font-bold text-sm whitespace-nowrap">
            Ask StreamAI
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </motion.div>
        </button>
      </div>
    </main>
  );
}
