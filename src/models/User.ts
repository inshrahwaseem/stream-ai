import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  subscriptionStatus: {
    type: String,
    enum: ["free", "basic", "premium"],
    default: "free",
  },
  profiles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  }],
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", UserSchema);
