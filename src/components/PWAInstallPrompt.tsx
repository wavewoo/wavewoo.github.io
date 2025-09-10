import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, X, Smartphone } from "lucide-react";
import { usePWA } from "@/hooks/usePWA";
import { toast } from "sonner";

export const PWAInstallPrompt = () => {
  const { isInstallable, isInstalled, installApp } = usePWA();
  const [isDismissed, setIsDismissed] = useState(false);

  if (!isInstallable || isInstalled || isDismissed) {
    return null;
  }

  const handleInstall = async () => {
    const success = await installApp();
    if (success) {
      toast.success("Додаток успішно встановлено!");
    } else {
      toast.error("Не вдалося встановити додаток");
    }
  };

  return (
    <Card className="fixed bottom-4 right-4 z-50 w-80 bg-card border-border shadow-lg animate-in slide-in-from-bottom-5">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-primary" />
            <CardTitle className="text-sm">Встановити додаток</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0"
            onClick={() => setIsDismissed(true)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <CardDescription className="text-xs">
          Встановіть сайт Республіки Вейву як додаток для швидкого доступу
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button 
          onClick={handleInstall} 
          className="w-full gap-2"
          size="sm"
        >
          <Download className="h-4 w-4" />
          Встановити
        </Button>
      </CardContent>
    </Card>
  );
};