"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, validate via API. For demo, we mock.
    login("mock_token", { id: "1", email, name: email.split("@")[0] });
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=2066&auto=format&fit=crop"
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-lg p-8 md:p-16 bg-black/75 backdrop-blur-xl rounded-lg border border-white/10"
      >
        <h1 className="text-primary text-4xl font-black mb-8 tracking-tighter">STREAMAI</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-bold text-white mb-8">Sign In</h2>
          
          <Input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit" className="w-full py-4 text-lg">
            Sign In
          </Button>

          <div className="flex items-center justify-between text-gray-400 text-sm">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 accent-primary" />
              <span className="group-hover:text-white transition-colors">Remember me</span>
            </label>
            <Link href="#" className="hover:underline">Need help?</Link>
          </div>
        </form>

        <div className="mt-12 space-y-4">
          <p className="text-gray-500">
            New to StreamAI?{" "}
            <Link href="/signup" className="text-white hover:underline font-bold">Sign up now.</Link>
          </p>
          <p className="text-[13px] text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
            <Link href="#" className="text-blue-500 hover:underline">Learn more.</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
