"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MovieCard } from "./MovieCard";

interface Movie {
  id: string;
  title: string;
  thumbnailUrl: string;
  trailerUrl: string;
  duration: string;
  genre: string[];
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export const MovieRow = ({ title, movies }: MovieRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      setShowLeft(scrollTo > 0);
    }
  };

  return (
    <div className="space-y-2 md:space-y-4 px-4 md:px-12 mt-8 group/row">
      <h2 className="text-lg md:text-2xl font-bold text-[#e5e5e5] transition-colors hover:text-white cursor-pointer inline-flex items-center gap-2 group/title">
        {title}
        <ChevronRight size={20} className="mt-1 opacity-0 group-hover/title:opacity-100 transition-opacity" />
      </h2>

      <div className="relative">
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-0 bottom-0 z-40 bg-black/40 hover:bg-black/60 w-12 hidden group-hover/row:flex items-center justify-center transition-all"
        >
          <ChevronLeft size={40} className="text-white" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth py-4"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-0 bottom-0 z-40 bg-black/40 hover:bg-black/60 w-12 hidden group-hover/row:flex items-center justify-center transition-all"
        >
          <ChevronRight size={40} className="text-white" />
        </button>
      </div>
    </div>
  );
};
