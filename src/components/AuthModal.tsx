import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Lock, AlertCircle, CheckCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface AuthModalProps {
  children: React.ReactNode;
  onSuccess: () => void;
}

const AuthModal = ({ children, onSuccess }: AuthModalProps) => {
  const [surname, setSurname] = useState("");
  const [passport, setPassport] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn(surname, passport);
      
      if (result.success) {
        setIsLoading(false);
        setIsOpen(false);
        setSurname("");
        setPassport("");
        onSuccess();
      } else {
        setIsLoading(false);
        setError(result.error || "Неправильні дані або паспорт недійсний.");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Помилка входу в систему");
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset form when closing
      setSurname("");
      setPassport("");
      setError("");
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl text-festival-blue">
            <Lock className="w-6 h-6" />
            Доступ обмежено
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-6">
          <div className="bg-festival-yellow/10 p-4 rounded-lg mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-festival-blue mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">
                  Доступ до цієї сторінки відкритий лише громадянам Республіки. 
                  Введіть ваше прізвище, як у паспорті (всі великі букви) та серію і номер паспорту (без пробілу, всі великі букви).
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="surname" className="text-festival-blue font-medium">
                Прізвище
              </Label>
              <Input
                id="surname"
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder="Введіть ваше прізвище"
                required
                className="mt-1"
                disabled={isLoading}
              />
            </div>

            <div>
              <Label htmlFor="passport" className="text-festival-blue font-medium">
                Серія та номер паспорту
              </Label>
              <Input
                id="passport"
                type="text"
                value={passport}
                onChange={(e) => setPassport(e.target.value)}
                placeholder="Введіть серію та номер паспорту"
                required
                className="mt-1"
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                variant="hero"
                disabled={isLoading || !surname.trim() || !passport.trim()}
                className="flex-1"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Перевірка...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Увійти
                  </>
                )}
              </Button>
              
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={isLoading}
              >
                Скасувати
              </Button>
            </div>
          </form>

          <div className="mt-6 p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              Доступ надається лише громадянам Республіки з дійсним паспортом.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;