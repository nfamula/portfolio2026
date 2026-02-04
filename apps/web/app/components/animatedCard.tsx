'use client'
import dynamic from 'next/dynamic'
import LottieRobot from '../../public/lottie/lottie-robot.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function AnimatedCard() {
  return (
    <div className="w-64 h-64 bg-white rounded-xl shadow-lg p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300">
      <Lottie animationData={LottieRobot} loop />
    </div>
  );
}
