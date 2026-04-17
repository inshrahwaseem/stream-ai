import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  preferences: {
    favoriteGenres: [{ type: String }],
    maturityLevel: { type: String, default: "all" },
  },
  myList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  }],
  watchHistory: [{
    movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
    progress: { type: Number, default: 0 },
    lastWatched: { type: Date, default: Date.now },
  }],
}, { timestamps: true });

export default mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);
