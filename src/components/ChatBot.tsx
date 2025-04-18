
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, User } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Sunnie, your virtual assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = generateBotResponse(input);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const normalizedInput = userInput.toLowerCase();
    
    if (normalizedInput.includes("hello") || normalizedInput.includes("hi") || normalizedInput.includes("hey")) {
      return "Hello! How can I assist you with our cleaning or laundry services today?";
    }
    
    if (normalizedInput.includes("price") || normalizedInput.includes("cost") || normalizedInput.includes("rate")) {
      return "Our pricing depends on the specific service and the size of your space. For home cleaning, our rates start at UGX 50,000 for a standard clean. For laundry services, prices start at UGX 15,000 per load. Would you like a detailed quote?";
    }
    
    if (normalizedInput.includes("location") || normalizedInput.includes("areas") || normalizedInput.includes("where")) {
      return "We currently serve the Greater Kampala metropolitan area, including Kampala, Wakiso, Mukono, Entebbe, and nearby areas in Central Uganda. You can check specific availability using our location checker on the homepage.";
    }
    
    if (normalizedInput.includes("booking") || normalizedInput.includes("appointment") || normalizedInput.includes("schedule")) {
      return "You can book our services online through our booking page, or by calling us at +256 700 123 456. We're typically able to schedule service within 48 hours.";
    }
    
    if (normalizedInput.includes("cancel") || normalizedInput.includes("reschedule")) {
      return "You can reschedule or cancel your appointment by calling us at +256 700 123 456, at least 24 hours before your scheduled service.";
    }
    
    if (normalizedInput.includes("eco") || normalizedInput.includes("environment") || normalizedInput.includes("green")) {
      return "Yes, we use eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the planet. Sustainability is one of our core values.";
    }
    
    if (normalizedInput.includes("payment") || normalizedInput.includes("pay")) {
      return "We accept Mobile Money (MTN, Airtel), credit cards, and cash payments. Payment is processed after your service is completed.";
    }
    
    if (normalizedInput.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with?";
    }
    
    // Default response
    return "I'm not sure I understand your question. Could you please rephrase it? You can ask about our services, pricing, service areas, or booking process.";
  };

  return (
    <div className="mt-6 bg-white rounded-lg shadow-md border border-gray-200 max-w-2xl mx-auto overflow-hidden">
      <div className="bg-sunflower-500 text-white p-3 flex items-center">
        <Bot className="w-5 h-5 mr-2" />
        <span className="font-medium">Sunnie - Virtual Assistant</span>
      </div>
      
      <div className="h-80 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === "user"
                  ? "bg-sunflower-500 text-white"
                  : "bg-white text-gray-800 border border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {message.sender === "bot" ? (
                  <Bot className="w-4 h-4" />
                ) : (
                  <User className="w-4 h-4" />
                )}
                <span className="text-xs opacity-75">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow"
        />
        <Button type="submit" size="sm" className="bg-sunflower-500 hover:bg-sunflower-600">
          <Send className="w-4 h-4" />
        </Button>
      </form>
      
      <div className="p-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 text-center">
        This is a demo chatbot. For complex inquiries, please contact us directly.
      </div>
    </div>
  );
};

export default ChatBot;
