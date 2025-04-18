
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const ServiceCard = ({ title, description, icon: Icon, className }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg p-6 shadow-md card-hover flex flex-col h-full border border-gray-100",
        className
      )}
    >
      <div className="bg-sunflower-100 text-sunflower-600 p-3 rounded-lg w-fit mb-5">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
