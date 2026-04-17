import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  genre: [{ type: String }],
  videoUrl: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  trailerUrl: { type: String },
  aiSummary: { type: String },
  releaseYear: { type: Number },
  rating: { type: String },
  duration: { type: String },
  cast: [{ type: String }],
  moodTags: [{ type: String }], // For AI recommendations
  isTrending: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.Movie || mongoose.model("Movie", MovieSchema);
