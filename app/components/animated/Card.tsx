"use client";

import Lottie from "lottie-react";
import LottieRobot from "../../../public/lottie/lottie-robot.json";

export default function AnimatedCard() {
  return (
    <div className="w-64 h-64 bg-white rounded-xl shadow-lg p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300">
      <Lottie animationData={LottieRobot} loop />
    </div>
  );
}
