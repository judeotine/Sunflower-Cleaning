
import { useEffect, useState } from "react";
import { Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        // Slow down as we approach 100% for a nice effect
        const increment = Math.max(1, 10 - Math.floor(prev / 10));
        const newValue = Math.min(100, prev + increment);
        
        return newValue;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-sunflower-50 to-white flex flex-col items-center justify-center z-50">
      <div className="relative mb-6">
        <Sun className="w-20 h-20 text-sunflower-500 animate-spin-slow" />
        <div className={cn(
          "absolute inset-0 bg-white bg-opacity-75 rounded-full animate-pulse-soft",
          progress >= 60 && "opacity-0 transition-opacity duration-1000"
        )} />
      </div>
      
      <h2 className="mt-1 text-2xl font-heading font-semibold text-sunflower-600 animate-pulse-soft">
        Sunflower Cleaning & Laundry
      </h2>
      
      <p className="mt-2 text-gray-600">Brightening your world...</p>
      
      <div className="w-64 h-2 bg-gray-200 rounded-full mt-6 overflow-hidden">
        <div 
          className="h-full bg-sunflower-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <p className="mt-2 text-sm text-gray-500">{progress}%</p>
    </div>
  );
};

export default LoadingScreen;
