import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const targetDate = new Date("2026-07-17T09:00:00").getTime();

const calculateTimeLeft = (): TimeLeft | null => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const pad = (value: number) => String(value).padStart(2, "0");

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <Card className="flex-1 min-w-[70px] bg-festival-blue text-primary-foreground border-festival-blue/30 shadow-hero">
    <div className="p-4 text-center">
      <div className="text-3xl md:text-5xl font-bold text-festival-yellow tabular-nums leading-none">
        {pad(value)}
      </div>
      <div className="text-xs md:text-sm uppercase tracking-wider text-primary-foreground/80 mt-2">
        {label}
      </div>
    </div>
  </Card>
);

export const FestivalCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-center py-8">
        <div className="text-3xl md:text-4xl font-bold text-festival-yellow mb-2">
          Фестиваль уже розпочався!
        </div>
        <p className="text-lg text-primary-foreground/80">
          Зустрічаймося на Республіці Вейву 2026
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        <CountdownUnit value={timeLeft.days} label="Днів" />
        <CountdownUnit value={timeLeft.hours} label="Годин" />
        <CountdownUnit value={timeLeft.minutes} label="Хвилин" />
        <CountdownUnit value={timeLeft.seconds} label="Секунд" />
      </div>
      <p className="text-center text-sm md:text-base text-primary-foreground/70 mt-4">
        До початку фестивалю 2026 року
      </p>
    </div>
  );
};

export default FestivalCountdown;
