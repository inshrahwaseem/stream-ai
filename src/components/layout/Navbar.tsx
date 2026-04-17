"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Bell, User, Menu, Mic } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { useProfile } from "@/context/ProfileContext";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAuth();
  const { currentProfile } = useProfile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-12 py-4 flex items-center justify-between",
        isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-gradient-to-b from-black/80 to-transparent"
      )}
    >
      <div className="flex items-center gap-8">
        <Link href="/home" className="text-primary font-black text-3xl tracking-tighter">
          STREAMAI
        </Link>
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-200">
          <Link href="/home" className="hover:text-white transition-colors">Home</Link>
          <Link href="/series" className="hover:text-white transition-colors">Series</Link>
          <Link href="/movies" className="hover:text-white transition-colors">Movies</Link>
          <Link href="/new" className="hover:text-white transition-colors">New & Popular</Link>
          <Link href="/mylist" className="hover:text-white transition-colors">My List</Link>
        </div>
      </div>

      <div className="flex items-center gap-6 text-gray-200">
        <button className="hover:text-white transition-colors">
          <Search size={20} />
        </button>
        <button className="hover:text-primary transition-colors flex items-center gap-1 group">
          <Mic size={20} className="group-active:scale-90 transition-transform" />
          <span className="text-xs font-bold hidden md:inline">Voice</span>
        </button>
        <button className="hover:text-white transition-colors">
          <Bell size={20} />
        </button>
        
        {currentProfile && (
          <div className="flex items-center gap-2 group cursor-pointer relative">
            <img 
              src={currentProfile.avatar} 
              alt={currentProfile.name}
              className="w-8 h-8 rounded object-cover border border-white/10"
            />
            <div className="hidden group-hover:block absolute top-full right-0 mt-2 w-48 bg-black/95 border border-white/10 rounded-md py-2 shadow-2xl animate-fade-in">
              <Link href="/profiles" className="block px-4 py-2 hover:bg-white/10 text-sm">Switch Profiles</Link>
              <Link href="/dashboard" className="block px-4 py-2 hover:bg-white/10 text-sm">Account Dashboard</Link>
              <div className="h-[1px] bg-white/10 my-1" />
              <button onClick={() => {}} className="w-full text-left px-4 py-2 hover:bg-white/10 text-sm">Sign Out</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
