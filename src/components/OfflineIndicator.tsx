import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Wifi, WifiOff } from "lucide-react";

export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    console.log('OfflineIndicator mounted, initial online status:', navigator.onLine);
    
    const handleOnline = () => {
      console.log('Online event triggered');
      setIsOnline(true);
    };
    const handleOffline = () => {
      console.log('Offline event triggered');
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <Badge 
      variant="destructive" 
      className="fixed top-4 left-4 z-50 gap-2 animate-pulse"
    >
      <WifiOff className="h-3 w-3" />
      Офлайн режим
    </Badge>
  );
};