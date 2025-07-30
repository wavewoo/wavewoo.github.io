import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MinistryCardProps {
  title: string;
  description: string;
  icon: string;
}

const MinistryCard = ({ title, description, icon }: MinistryCardProps) => {
  return (
    <Card className="bg-white border-2 border-festival-blue/10 hover:border-festival-yellow hover:shadow-lg transition-all duration-300 transform hover:scale-105">
      <CardHeader className="text-center pb-4">
        <div className="text-4xl mb-4">{icon}</div>
        <CardTitle className="text-xl font-bold text-festival-blue">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-center leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default MinistryCard;