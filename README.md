# StreamAI: The Future of AI-Powered Streaming

StreamAI is a high-performance, Netflix-tier streaming platform integrated with advanced AI features. Built with Next.js 14, TypeScript, and Framer Motion, it offers a premium cinematic experience with real-time AI interactions.

![StreamAI Showcase](https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop)

## 🚀 Key Features

### 🧠 Advanced AI Features
- **Voice Search & Control**: Navigate the entire platform using browser-native Web Speech API.
- **Emotion-Based Recommendations**: Real-time mood analysis for personalized content suggestions.
- **Dynamic UI Themes**: Interface colors automatically adapt to the content you're viewing.
- **AI Match Prediction**: Intelligent heuristic engine predicting your next favorite movie.

### 🎬 Premium Streaming Experience
- **Cinematic Video Player**: Custom-built controls with trailer hover previews.
- **Watch Party**: Real-time synchronized viewing with integrated live chat.
- **Multi-Profile System**: Separate history and preferences for every member of the household.
- **Personalized Analytics**: Track your viewing trends and favorite genres.

### 🎨 Visual Excellence
- **Netflix-Inspired UI**: A dark, sleek, and premium aesthetic.
- **Glassmorphism Design**: Modern translucent elements for a futuristic feel.
- **Smooth Animations**: High-performance transitions powered by Framer Motion.
- **Skeleton Shimmer**: Seamless loading states for a fast-feeling experience.

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript, Tailwind CSS, Framer Motion.
- **Backend**: Next.js API Routes, MongoDB (Mongoose), JWT Auth.
- **AI Integration**: Web Speech API, face-api.js (client-side ML).
- **Icons**: Lucide React.
- **Styling**: Vanilla CSS + Tailwind Utility Classes.

## 📦 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB Instance (Atlas or Local)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/stream-ai.git
   cd stream-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deployment

StreamAI is ready for one-click deployment to **Vercel** or **Render**.
- Ensure all environment variables are configured in your deployment settings.
- The platform uses Edge-ready components where possible for maximum global performance.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Built with ❤️ by the StreamAI Team.
