
import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { notificationService } from "../utils/notificationService";
import { toast } from "sonner";

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  type: "booking" | "promo" | "system";
}

const NotificationBell = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Check if the user is already subscribed to notifications
    if ('Notification' in window) {
      setIsSubscribed(Notification.permission === 'granted');
    }
    
    // Load mock notifications
    const mockNotifications: Notification[] = [
      {
        id: "1",
        title: "Booking Confirmed",
        message: "Your cleaning service has been scheduled for tomorrow at 10:00 AM.",
        timestamp: new Date(Date.now() - 3600000), // 1 hour ago
        isRead: false,
        type: "booking"
      },
      {
        id: "2",
        title: "Special Offer",
        message: "Get 15% off your next laundry service. Use code CLEAN15.",
        timestamp: new Date(Date.now() - 86400000), // 1 day ago
        isRead: false,
        type: "promo"
      },
      {
        id: "3",
        title: "Service Completed",
        message: "Your laundry service has been completed. Your clothes are ready for pickup.",
        timestamp: new Date(Date.now() - 172800000), // 2 days ago
        isRead: true,
        type: "system"
      }
    ];
    
    setNotifications(mockNotifications);
    setUnreadCount(mockNotifications.filter(n => !n.isRead).length);
  }, []);

  const handleSubscribe = async () => {
    const permissionGranted = await notificationService.requestPermission();
    if (permissionGranted) {
      const subscribed = await notificationService.subscribeToPushNotifications();
      setIsSubscribed(subscribed);
      
      if (subscribed) {
        toast.success("You've subscribed to notifications");
        // Send a test notification
        setTimeout(() => {
          notificationService.sendNotification("Welcome to Sunflower", {
            body: "You'll now receive updates about your services.",
            icon: "/icons/icon-192x192.png"
          });
        }, 2000);
      } else {
        toast.error("Failed to subscribe to notifications");
      }
    } else {
      toast.error("Notification permission was denied");
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification => 
      notification.id === id 
        ? { ...notification, isRead: true } 
        : notification
    ));
    
    // Update unread count
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      isRead: true
    })));
    setUnreadCount(0);
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "booking":
        return "📅";
      case "promo":
        return "🎁";
      case "system":
        return "⚙️";
      default:
        return "📢";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 px-1.5 py-0.5 min-w-[1rem] h-4 flex items-center justify-center bg-red-500"
              variant="destructive"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[300px] z-50 bg-white">
        <DropdownMenuLabel className="flex justify-between items-center">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs h-6 px-2"
              onClick={markAllAsRead}
            >
              Mark all as read
            </Button>
          )}
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-sm text-gray-500">
            No notifications yet
          </div>
        ) : (
          notifications.map(notification => (
            <DropdownMenuItem 
              key={notification.id}
              className={`p-3 cursor-pointer ${notification.isRead ? "" : "bg-blue-50"}`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="flex gap-3">
                <div className="text-lg">{getNotificationIcon(notification.type)}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className={`text-sm font-medium ${notification.isRead ? "" : "text-blue-700"}`}>
                      {notification.title}
                    </p>
                    <span className="text-xs text-gray-500">
                      {new Date(notification.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                </div>
              </div>
            </DropdownMenuItem>
          ))
        )}
        
        <DropdownMenuSeparator />
        
        <div className="p-3">
          {!isSubscribed ? (
            <Button 
              className="w-full text-sm" 
              size="sm"
              onClick={handleSubscribe}
            >
              Enable Push Notifications
            </Button>
          ) : (
            <p className="text-xs text-center text-gray-500">
              You're subscribed to push notifications
            </p>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationBell;
