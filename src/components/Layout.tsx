
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";
import FloatingActionButton from "./FloatingActionButton";
import NotificationBell from "./NotificationBell";
import LoyaltyTracker from "./LoyaltyTracker";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const [showToolbar, setShowToolbar] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Show toolbar after a delay when page is loaded
    const toolbarTimer = setTimeout(() => {
      if (!loading) {
        setShowToolbar(true);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(toolbarTimer);
    };
  }, [loading]);

  return (
    <div className="flex flex-col min-h-screen">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
          <FloatingActionButton />
          <NotificationBell />
          <LoyaltyTracker />
          
          {/* Notification Toolbar - appears after delay */}
          {showToolbar && (
            <div 
              className="fixed bottom-0 left-0 right-0 bg-sunflower-500 text-white py-3 px-4 z-30 transform transition-transform duration-500"
              style={{ 
                transform: showToolbar ? 'translateY(0)' : 'translateY(100%)'
              }}
            >
              <div className="container mx-auto flex items-center justify-between">
                <p className="text-sm">
                  🎉 First-time customers in Kampala receive 10% off! Use code <span className="font-bold">WELCOME10</span>
                </p>
                <button 
                  className="text-white hover:text-white/80"
                  onClick={() => setShowToolbar(false)}
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Layout;
