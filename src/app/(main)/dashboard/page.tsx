"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { BarChart3, Clock, Heart, TrendingUp, Award } from "lucide-react";

const ANALYTICS = [
  { label: "Total Watch Time", value: "128h", icon: Clock, color: "text-blue-400" },
  { label: "Movies Watched", value: "42", icon: BarChart3, color: "text-green-400" },
  { label: "Favorite Genre", value: "Sci-Fi", icon: Heart, color: "text-primary" },
  { label: "AI Match Score", value: "94%", icon: Award, color: "text-purple-400" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 px-4 md:px-12 max-w-7xl mx-auto space-y-12 pb-20">
        <header className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">ANALYTICS</h1>
          <p className="text-gray-400 text-lg">AI-powered insights based on your viewing habits.</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ANALYTICS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <stat.icon className={cn("mb-4 group-hover:scale-110 transition-transform", stat.color)} size={32} />
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-1">{stat.label}</p>
              <p className="text-3xl font-black text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-8 bg-white/5 border border-white/10 rounded-2xl space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <TrendingUp className="text-primary" /> Watching Trends
            </h2>
            <div className="h-64 flex items-end justify-between gap-2 pt-8">
              {[60, 40, 80, 50, 90, 70, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                  className="flex-1 bg-primary/40 hover:bg-primary transition-colors rounded-t-lg relative group"
                >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {Math.floor(h/10)}h
                    </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-widest">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl space-y-6">
            <h2 className="text-2xl font-bold">AI Mood Analysis</h2>
            <div className="space-y-6">
              {[
                { label: "Adventure", level: 85 },
                { label: "Mystery", level: 62 },
                { label: "Drama", level: 45 },
              ].map((mood, i) => (
                <div key={mood.label} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span>{mood.label}</span>
                    <span className="text-primary">{mood.level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${mood.level}%` }}
                      transition={{ delay: 1 + i * 0.2, duration: 0.8 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-xs text-primary font-bold">INSIGHT</p>
              <p className="text-sm text-gray-300">You seem to enjoy high-stakes narratives late at night. We've updated your home feed accordingly.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Helper for Tailwind check
import { cn } from "@/lib/utils";
