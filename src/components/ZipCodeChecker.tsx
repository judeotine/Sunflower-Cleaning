
import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const ZipCodeChecker = () => {
  const [zipCode, setZipCode] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  // Mock data for available zip codes
  const availableZipCodes = ["10001", "10002", "10003", "20001", "20002", "30001"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!zipCode.trim()) {
      toast.error("Please enter a ZIP code");
      return;
    }
    
    setIsChecking(true);
    
    // Simulate API call
    setTimeout(() => {
      const available = availableZipCodes.includes(zipCode);
      setIsAvailable(available);
      setIsChecking(false);
      
      if (available) {
        toast.success("Great news! We service your area.");
      } else {
        toast.error("Sorry, we don't service your area yet.");
      }
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold mb-4">Check Service Availability</h3>
      <p className="text-gray-600 mb-4">
        Enter your ZIP code to see if our services are available in your area.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="Enter ZIP code"
          className="flex-grow"
          pattern="[0-9]*"
          maxLength={5}
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
                Sorry, we don't serve your area yet. Join our 
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

export default ZipCodeChecker;
