
import { useEffect, useRef } from 'react';
import { initSunflowerScene } from '../utils/threejsUtils';

interface SunflowerSceneProps {
  className?: string;
}

const SunflowerScene = ({ className = '' }: SunflowerSceneProps) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sceneRef.current) return;
    
    // Initialize the Three.js scene
    const cleanup = initSunflowerScene(sceneRef.current);
    
    // Cleanup on component unmount
    return cleanup;
  }, []);
  
  return (
    <div 
      ref={sceneRef} 
      className={`absolute inset-0 z-0 ${className}`}
      aria-hidden="true"
    />
  );
};

export default SunflowerScene;
