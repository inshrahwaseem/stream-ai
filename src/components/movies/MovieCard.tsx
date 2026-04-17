"use client";

import React, { useState } from "react";
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Movie {
  id: string;
  title: string;
  thumbnailUrl: string;
  trailerUrl: string;
  duration: string;
  genre: string[];
}

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative h-[28vw] md:h-[12vw] min-w-[40vw] md:min-w-[20vw] cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.thumbnailUrl}
        alt={movie.title}
        className="h-full w-full object-cover rounded-md transition-all duration-300 group-hover:opacity-0"
      />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            animate={{ opacity: 1, scale: 1.1, y: -20 }}
            exit={{ opacity: 0, scale: 0.8, y: 0 }}
            className="absolute top-0 left-0 w-full h-[150%] z-20 bg-[#181818] rounded-md shadow-2xl overflow-hidden"
          >
            <div className="relative h-2/3 w-full bg-black">
              {/* Trailer Mock */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <Play className="text-white fill-current" size={32} />
              </div>
              <video 
                src={movie.trailerUrl} 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
              />
              <div className="absolute top-2 right-2 p-1 bg-black/50 rounded-full border border-white/20">
                <Play size={12} className="text-white" />
              </div>
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-center gap-2">
                <button className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors">
                  <Play size={20} className="fill-black text-black ml-0.5" />
                </button>
                <button className="p-2 border border-white/40 rounded-full hover:border-white transition-colors">
                  <Plus size={20} className="text-white" />
                </button>
                <button className="p-2 border border-white/40 rounded-full hover:border-white transition-colors ml-auto">
                  <ThumbsUp size={20} className="text-white" />
                </button>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-500 font-bold">98% Match</span>
                <span className="text-white font-medium">{movie.duration}</span>
                <span className="px-1.5 py-0.5 border border-white/40 text-[10px] uppercase font-bold text-gray-400">HD</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {movie.genre.map((g) => (
                  <span key={g} className="text-xs text-gray-300">{g}</span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
