import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Tv, Target, Lightbulb, Zap, Shield, Play, Gamepad2, Users, Volume2 } from "lucide-react";

const tvAppsData = {
  id: "android-tv-apps",
  iconName: "Tv",
  title: "Android TV Apps",
  description: "Create immersive smart TV applications that captivate audiences on the big screen. We develop Android TV apps optimized for living room experiences with intuitive navigation, 4K video support, and engaging user interfaces.",
  shortDescription: "Smart TV apps for the ultimate viewing experience",
  color: "bg-gradient-to-br from-green-50 to-green-100/50",
  iconColor: "text-green-600",
  gradientClass: "from-green-500 to-green-700",
  techStack: ["Kotlin", "Android TV SDK", "ExoPlayer", "Firebase", "Room Database", "Retrofit", "Dagger Hilt", "Jetpack Compose", "Coroutines", "Leanback Library", "Cast SDK"],
  features: [
    "TV-optimized UI/UX design",
    "Remote control navigation",
    "4K and HDR video support",
    "Offline content caching",
    "Multi-language support",
    "Parental controls",
    "Voice search integration",
    "Chromecast support",
    "Content recommendation engine",
    "Live streaming capabilities",
    "Interactive features",
    "Analytics and user tracking"
  ],
  pricing: "Starting from $7,500",
  timeline: "6-14 weeks",
  stats: {
    projects: "35+",
    rating: "4.9",
    clients: "28+"
  },
  detailedFeatures: [
    {
      iconName: "Play",
      title: "Premium Video Experience",
      description: "Support for 4K, HDR, and Dolby Atmos with adaptive streaming and advanced video player controls."
    },
    {
      iconName: "Gamepad2",
      title: "Remote-Optimized Navigation",
      description: "Intuitive D-pad navigation designed specifically for TV remote controls and gaming controllers."
    },
    {
      iconName: "Users",
      title: "Multi-User Profiles",
      description: "Family-friendly profile management with personalized recommendations and parental controls."
    },
    {
      iconName: "Volume2",
      title: "Voice & Smart Features",
      description: "Voice search integration, Google Assistant support, and smart home device connectivity."
    }
  ],
  process: [
    {
      step: 1,
      title: "TV UX Strategy",
      description: "Define the TV-specific user experience, content strategy, and remote control interaction patterns."
    },
    {
      step: 2,
      title: "Leanback Design",
      description: "Create TV-optimized interfaces using Google's Leanback design guidelines for optimal living room experience."
    },
    {
      step: 3,
      title: "Development & Testing",
      description: "Build the app with Android TV SDK, implement video streaming, and test on real TV devices."
    },
    {
      step: 4,
      title: "Store Submission",
      description: "Google Play Console submission, certification process, and launch on Android TV platform."
    }
  ],
  faqs: [
    {
      question: "What's the difference between Android TV and regular Android apps?",
      answer: "Android TV apps are specifically designed for large screens and remote control navigation, with different UI patterns and interaction models optimized for the living room experience."
    },
    {
      question: "Can you integrate live streaming and video content?",
      answer: "Yes, we specialize in video streaming integration using ExoPlayer, supporting various formats, DRM protection, and adaptive bitrate streaming."
    },
    {
      question: "Do Android TV apps work on all smart TV brands?",
      answer: "Android TV apps work on TVs that run the Android TV operating system, including brands like Sony, TCL, Hisense, and others with Android TV certification."
    },
    {
      question: "How long does Google Play Console approval take for TV apps?",
      answer: "Android TV apps typically take 3-7 days for review, but complex apps with video content may require additional review time."
    }
  ]
};

export default function AndroidTvAppsPage() {
  return <ServicePageTemplate serviceData={tvAppsData} />;
} 