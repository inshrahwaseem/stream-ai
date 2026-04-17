"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, Play, Pause, RotateCcw, FastForward, Volume2, Maximize, Settings, Users, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function WatchPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isPartyOpen, setIsPartyOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space") togglePlay();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isPlaying]);

  return (
    <div 
      className="relative h-screen w-screen bg-black overflow-hidden group cursor-none"
      onMouseMove={handleMouseMove}
      style={{ cursor: showControls ? "default" : "none" }}
    >
      {/* Video Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
        <video 
          className="w-full h-full object-contain"
          src="#" // Actual video src here
          poster="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
        />
        {!isPlaying && (
          <button onClick={togglePlay} className="z-10 bg-white/10 backdrop-blur-md p-8 rounded-full hover:scale-110 transition-transform">
            <Play className="fill-white text-white" size={48} />
          </button>
        )}
      </div>

      {/* Top Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full p-8 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent z-50"
          >
            <button onClick={() => router.back()} className="text-white hover:scale-110 transition-transform flex items-center gap-2">
              <ArrowLeft size={32} />
              <span className="font-bold">Stranger Things</span>
            </button>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setIsPartyOpen(!isPartyOpen)}
                className={cn("p-2 rounded-full transition-colors", isPartyOpen ? "bg-primary text-white" : "hover:bg-white/10 text-gray-300")}
              >
                <Users size={24} />
              </button>
              <button className="hover:scale-110 transition-transform text-white">
                <Settings size={28} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side Chat / Party Sidebar */}
      <AnimatePresence>
        {isPartyOpen && (
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            className="absolute top-0 right-0 bottom-0 w-80 bg-black/90 backdrop-blur-2xl border-l border-white/10 z-[60] flex flex-col"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between font-bold">
              <span className="flex items-center gap-2"><MessageSquare size={20} /> Watch Party Chat</span>
              <button onClick={() => setIsPartyOpen(false)} className="text-gray-500 hover:text-white">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-primary">Alex</span>
                <p className="bg-white/5 rounded-lg p-3 text-sm">Guys, the AI just translated their emotion!</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-blue-400">Sarah</span>
                <p className="bg-white/5 rounded-lg p-3 text-sm">That scene was insane in 4K.</p>
              </div>
            </div>
            <div className="p-4 bg-white/5">
              <input 
                placeholder="Message the party..." 
                className="w-full bg-black/50 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-0 left-0 w-full p-8 space-y-4 bg-gradient-to-t from-black/80 to-transparent z-50"
          >
            {/* Progress Bar */}
            <div className="relative w-full h-1 bg-gray-600 rounded-full group/seek cursor-pointer overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 bg-primary w-[30%] transition-all" />
              <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover/seek:opacity-100 transition-opacity" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <button onClick={togglePlay} className="text-white hover:scale-110 transition-transform">
                  {isPlaying ? <Pause size={32} /> : <Play size={32} fill="white" />}
                </button>
                <button className="text-white hover:scale-110 transition-transform"><RotateCcw size={28} /></button>
                <button className="text-white hover:scale-110 transition-transform"><FastForward size={28} /></button>
                <div className="flex items-center gap-4 group/vol">
                  <Volume2 size={28} className="text-white" />
                  <div className="w-0 group-hover/vol:w-24 h-1 bg-gray-600 rounded-full overflow-hidden transition-all">
                    <div className="bg-white h-full w-2/3" />
                  </div>
                </div>
                <span className="text-white font-medium">15:20 / 48:00</span>
              </div>

              <div className="flex items-center gap-8">
                <button className="text-white hover:scale-110 transition-transform flex items-center gap-2">
                  <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded">Next Episode</span>
                  <FastForward size={24} />
                </button>
                <button className="text-white hover:scale-110 transition-transform"><Maximize size={28} /></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Helper for Tailwind check
import { cn } from "@/lib/utils";
