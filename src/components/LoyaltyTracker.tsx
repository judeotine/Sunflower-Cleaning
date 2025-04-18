
import { useEffect, useState } from "react";
import { Shield, Star, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

interface Reward {
  id: number;
  name: string;
  description: string;
  pointsRequired: number;
  isAvailable: boolean;
}

const LoyaltyTracker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(1);
  const [progress, setProgress] = useState(0);
  
  // Mock rewards
  const rewards: Reward[] = [
    {
      id: 1,
      name: "10% Off Next Service",
      description: "Get 10% off your next cleaning or laundry service",
      pointsRequired: 100,
      isAvailable: false
    },
    {
      id: 2,
      name: "Free Pickup & Delivery",
      description: "Free pickup and delivery for your next laundry order",
      pointsRequired: 250,
      isAvailable: false
    },
    {
      id: 3,
      name: "Premium Deep Clean",
      description: "Upgrade to a premium deep clean at regular price",
      pointsRequired: 500,
      isAvailable: false
    }
  ];
  
  // Simulate loading loyalty data
  useEffect(() => {
    // In a real app, this would come from an API
    const mockPoints = Math.floor(Math.random() * 450);
    setTimeout(() => {
      setPoints(mockPoints);
      updateLevelAndProgress(mockPoints);
    }, 1000);
  }, []);
  
  // Update level and progress based on points
  const updateLevelAndProgress = (currentPoints: number) => {
    if (currentPoints < 100) {
      setLevel(1);
      setProgress((currentPoints / 100) * 100);
    } else if (currentPoints < 250) {
      setLevel(2);
      setProgress(((currentPoints - 100) / 150) * 100);
    } else if (currentPoints < 500) {
      setLevel(3);
      setProgress(((currentPoints - 250) / 250) * 100);
    } else {
      setLevel(4);
      setProgress(100);
    }
    
    // Update reward availability
    rewards.forEach(reward => {
      reward.isAvailable = currentPoints >= reward.pointsRequired;
    });
  };
  
  const handleRedeemReward = (reward: Reward) => {
    if (points >= reward.pointsRequired) {
      toast.success(`Successfully redeemed: ${reward.name}`);
      
      // In a real app, you would call an API to redeem the reward
      // and update the points afterwards
      const newPoints = points - reward.pointsRequired;
      setPoints(newPoints);
      updateLevelAndProgress(newPoints);
      
      setIsOpen(false);
    } else {
      toast.error("Not enough points to redeem this reward");
    }
  };
  
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1 text-sm"
          onClick={() => setIsOpen(true)}
        >
          <Star className="w-4 h-4 text-sunflower-500" />
          <span className="font-medium">{points}</span>
          <span className="sr-only">Loyalty Points</span>
        </Button>
      </DrawerTrigger>
      
      <DrawerContent className="max-w-lg mx-auto">
        <DrawerHeader>
          <DrawerTitle className="text-center text-2xl">Sunflower Loyalty Program</DrawerTitle>
          <DrawerDescription className="text-center">
            Earn points with every service and redeem them for rewards
          </DrawerDescription>
        </DrawerHeader>
        
        <div className="px-4 py-2">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <Shield className="text-sunflower-500 w-5 h-5" />
              <span className="font-medium">Level {level}</span>
            </div>
            <div className="text-right">
              <span className="font-medium">{points} Points</span>
            </div>
          </div>
          
          <Progress value={progress} className="h-2 mb-6" />
          
          <h4 className="font-medium mb-3">Available Rewards</h4>
          
          <div className="space-y-4 mb-6">
            {rewards.map((reward) => (
              <div 
                key={reward.id} 
                className={`border rounded-lg p-4 ${
                  reward.isAvailable 
                    ? "border-sunflower-200 bg-sunflower-50" 
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-medium">{reward.name}</h5>
                    <p className="text-sm text-gray-600">{reward.description}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-medium mb-2">{reward.pointsRequired} Points</span>
                    <Button 
                      size="sm" 
                      variant={reward.isAvailable ? "default" : "outline"}
                      disabled={!reward.isAvailable}
                      onClick={() => handleRedeemReward(reward)}
                    >
                      {reward.isAvailable ? "Redeem" : "Locked"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <h4 className="font-medium mb-3">How to Earn Points</h4>
          <ul className="text-sm text-gray-600 space-y-2 mb-4">
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4 text-sunflower-500" />
              <span>50 points for each cleaning service</span>
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4 text-sunflower-500" />
              <span>30 points for each laundry service</span>
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4 text-sunflower-500" />
              <span>10 points for referring a friend</span>
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4 text-sunflower-500" />
              <span>5 points for leaving a review</span>
            </li>
          </ul>
        </div>
        
        <DrawerFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default LoyaltyTracker;
