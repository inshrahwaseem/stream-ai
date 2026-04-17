"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface Profile {
  id: string;
  name: string;
  avatar: string;
}

interface ProfileContextType {
  currentProfile: Profile | null;
  selectProfile: (profile: Profile) => void;
  clearProfile: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const savedProfile = localStorage.getItem("streamai_profile");
    if (savedProfile) {
      setCurrentProfile(JSON.parse(savedProfile));
    }
  }, []);

  const selectProfile = (profile: Profile) => {
    localStorage.setItem("streamai_profile", JSON.stringify(profile));
    setCurrentProfile(profile);
  };

  const clearProfile = () => {
    localStorage.removeItem("streamai_profile");
    setCurrentProfile(null);
  };

  return (
    <ProfileContext.Provider value={{ currentProfile, selectProfile, clearProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
