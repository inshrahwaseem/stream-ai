"use client";

import React, { useEffect } from "react";
import { Mic, X, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useVoiceSearch } from "@/hooks/useVoiceSearch";

interface VoiceSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
}

export const VoiceSearchOverlay = ({ isOpen, onClose, onSearch }: VoiceSearchOverlayProps) => {
  const { isListening, transcript, error, startListening, resetTranscript } = useVoiceSearch();

  useEffect(() => {
    if (isOpen) {
      startListening();
    } else {
      resetTranscript();
    }
  }, [isOpen, startListening, resetTranscript]);

  useEffect(() => {
    if (transcript) {
      onSearch(transcript);
      setTimeout(onClose, 2000);
    }
  }, [transcript, onSearch, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4"
        >
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors"
          >
            <X size={40} />
          </button>

          <div className="relative mb-12">
            <motion.div
              animate={{ 
                scale: isListening ? [1, 1.2, 1] : 1,
                opacity: isListening ? [0.5, 0.8, 0.5] : 0.5
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-primary blur-3xl rounded-full"
            />
            <div className={cn(
              "relative bg-primary p-12 rounded-full shadow-[0_0_50px_rgba(229,9,20,0.5)] transition-all",
              isListening ? "scale-110" : "scale-100"
            )}>
              <Mic size={64} className="text-white" />
            </div>
          </div>

          <div className="text-center space-y-6 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              {isListening ? "Listening..." : "Processing..."}
            </h2>
            
            <div className="h-20 flex items-center justify-center">
              {transcript ? (
                <p className="text-2xl md:text-4xl text-gray-300 italic font-medium">"{transcript}"</p>
              ) : (
                <div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [10, 40, 10] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      className="w-2 bg-primary rounded-full"
                    />
                  ))}
                </div>
              )}
            </div>

            {error && (
              <p className="text-red-500 font-bold bg-red-500/10 px-6 py-2 rounded-full">
                {error}
              </p>
            )}

            <p className="text-gray-500 font-bold tracking-widest uppercase text-sm pt-8">
              Try saying "Action Movies", "Search for Inception", or "What's trending?"
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Helper for Tailwind check
import { cn } from "@/lib/utils";
