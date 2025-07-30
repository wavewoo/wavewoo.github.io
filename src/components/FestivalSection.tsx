import { ReactNode } from "react";

interface FestivalSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  backgroundColor?: "white" | "muted";
}

const FestivalSection = ({ 
  id, 
  title, 
  children, 
  backgroundColor = "white" 
}: FestivalSectionProps) => {
  return (
    <section 
      id={id} 
      className={`py-20 ${backgroundColor === "muted" ? "bg-muted" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-festival-blue">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default FestivalSection;