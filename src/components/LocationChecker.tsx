
import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const LocationChecker = () => {
  const [location, setLocation] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  // Mock data for available locations in Central Uganda
  const availableLocations = [
    "kampala", "wakiso", "mukono", "entebbe", "jinja", 
    "mityana", "mpigi", "kayunga", "buikwe", "luwero"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!location.trim()) {
      toast.error("Please enter your location");
      return;
    }
    
    setIsChecking(true);
    
    // Simulate API call
    setTimeout(() => {
      const normalizedLocation = location.toLowerCase().trim();
      const available = availableLocations.some(loc => 
        normalizedLocation.includes(loc) || loc.includes(normalizedLocation)
      );
      
      setIsAvailable(available);
      setIsChecking(false);
      
      if (available) {
        toast.success("Great news! We service your area in Central Uganda.");
      } else {
        toast.error("Sorry, we don't service your area yet. We currently serve Central Uganda only.");
      }
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold mb-4">Check Service Availability</h3>
      <p className="text-gray-600 mb-4">
        Enter your location to see if our services are available in your area in Central Uganda.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your location (e.g., Kampala, Wakiso)"
          className="flex-grow"
        />
        <Button type="submit" disabled={isChecking} className="whitespace-nowrap">
          {isChecking ? "Checking..." : "Check Availability"}
        </Button>
      </form>
      
      {isAvailable !== null && !isChecking && (
        <div className={`mt-4 p-3 rounded-md flex items-center ${
          isAvailable 
            ? "bg-ecogreen-50 text-ecogreen-800" 
            : "bg-red-50 text-red-800"
        }`}>
          {isAvailable ? (
            <>
              <Check className="w-5 h-5 mr-2 text-ecogreen-600" />
              <span>
                Great news! We provide service in your area. 
                <a href="/booking" className="underline ml-1 font-medium">
                  Book now
                </a>
              </span>
            </>
          ) : (
            <>
              <X className="w-5 h-5 mr-2 text-red-600" />
              <span>
                Sorry, we don't serve your area yet. We currently operate in Central Uganda only. Join our 
                <a href="#" className="underline ml-1 mr-1 font-medium">
                  waiting list
                </a>
                to be notified when we expand.
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationChecker;
