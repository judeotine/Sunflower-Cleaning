
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, MessageSquare, X, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleAction = (action: string) => {
    if (action === "book") {
      navigate("/booking");
    } else if (action === "call") {
      window.location.href = "tel:+256700123456";
    } else if (action === "chat") {
      // In a real app, you would open the chat widget here
      navigate("/contact");
      console.log("Chat action triggered");
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      {/* Action buttons */}
      <div
        className={cn(
          "flex flex-col items-end space-y-3 mb-3 transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
        )}
      >
        <button
          onClick={() => handleAction("book")}
          className="flex items-center bg-skyblue-500 text-white rounded-full pl-4 pr-5 py-2 shadow-lg transform transition-all duration-200 hover:bg-skyblue-600"
        >
          <Calendar className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">Book Now</span>
        </button>
        
        <button
          onClick={() => handleAction("call")}
          className="flex items-center bg-ecogreen-500 text-white rounded-full pl-4 pr-5 py-2 shadow-lg transform transition-all duration-200 hover:bg-ecogreen-600"
        >
          <Phone className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">Call Us</span>
        </button>
        
        <button
          onClick={() => handleAction("chat")}
          className="flex items-center bg-sunflower-500 text-white rounded-full pl-4 pr-5 py-2 shadow-lg transform transition-all duration-200 hover:bg-sunflower-600"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">Live Chat</span>
        </button>
      </div>

      {/* Main floating button */}
      <button
        onClick={toggleOpen}
        className={cn(
          "bg-sunflower-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300",
          isOpen ? "bg-gray-700 rotate-45" : "bg-sunflower-500"
        )}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageSquare className="w-7 h-7" />
        )}
      </button>
    </div>
  );
};

export default FloatingActionButton;
