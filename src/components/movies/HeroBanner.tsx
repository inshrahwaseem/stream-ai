"use client";

import React from "react";
import { Play, Info, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
}

export const HeroBanner = ({ movie }: { movie: Movie }) => {
  return (
    <div className="relative h-[95vh] w-full">
      {/* Background Image / Placeholder Video */}
      <div className="absolute inset-0">
        <img
          src={movie.thumbnailUrl}
          alt={movie.title}
          className="w-full h-full object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-netflix-gradient" />
      </div>

      <div className="relative h-full flex flex-col justify-center px-4 md:px-12 pt-20 space-y-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            {movie.title}
          </h1>
          <p className="text-sm md:text-lg text-gray-200 line-clamp-3 md:line-clamp-none font-medium drop-shadow-md">
            {movie.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex items-center gap-3"
        >
          <Button variant="primary" size="lg" className="gap-3">
            <Play className="fill-current" /> Play
          </Button>
          <Button variant="secondary" size="lg" className="gap-3">
            <Info /> More Info
          </Button>
          <Button variant="outline" size="lg" className="p-3">
            <Plus />
          </Button>
        </motion.div>
      </div>

      {/* Floating AI Interaction Prompt */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-12 hidden lg:flex flex-col items-center gap-2"
      >
        <div className="p-4 glass rounded-full cursor-pointer hover:border-primary/50 transition-colors group">
          <Play className="text-primary group-hover:scale-110 transition-transform" fill="currentColor" size={32} />
        </div>
        <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">AI Active</p>
      </motion.div>
    </div>
  );
};
