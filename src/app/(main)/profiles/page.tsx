"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Plus, Edit2 } from "lucide-react";
import { motion } from "framer-motion";
import { useProfile } from "@/context/ProfileContext";

const PROFILES = [
  { id: "1", name: "Alex (AI Optimist)", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
  { id: "2", name: "Sarah (Cinephile)", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
  { id: "3", name: "Kids", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kids" },
];

export default function ProfilesPage() {
  const router = useRouter();
  const { selectProfile } = useProfile();

  const handleSelect = (profile: any) => {
    selectProfile(profile);
    router.push("/home");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-12"
      >
        <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight">Who's watching?</h1>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {PROFILES.map((profile, i) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => handleSelect(profile)}
              className="group cursor-pointer flex flex-col items-center gap-4"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-md overflow-hidden border-4 border-transparent group-hover:border-white/80 transition-all duration-300">
                <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-gray-400 group-hover:text-white transition-colors text-lg md:text-xl font-medium">
                {profile.name}
              </span>
            </motion.div>
          ))}

          <div className="group cursor-pointer flex flex-col items-center gap-4">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-md flex items-center justify-center bg-transparent border-4 border-transparent group-hover:bg-white/10 transition-all duration-300">
              <Plus className="text-gray-400 group-hover:text-white" size={64} />
            </div>
            <span className="text-gray-400 group-hover:text-white transition-colors text-lg md:text-xl font-medium">
              Add Profile
            </span>
          </div>
        </div>

        <button className="px-8 py-2 border border-secondary text-secondary hover:text-white hover:border-white transition-colors uppercase tracking-[0.2em] text-sm">
          Manage Profiles
        </button>
      </motion.div>
    </div>
  );
}
