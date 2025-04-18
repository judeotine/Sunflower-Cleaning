
import { useState, useEffect } from "react";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  className?: string;
  isAnimated?: boolean;
}

const BlogPost = ({
  id,
  title,
  excerpt,
  image,
  author,
  date,
  category,
  tags,
  className,
  isAnimated = true
}: BlogPostProps) => {
  const [isVisible, setIsVisible] = useState(!isAnimated);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isAnimated) {
      // Add a delay based on the id to create a staggered animation effect
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, id * 150);

      return () => clearTimeout(timer);
    }
  }, [id, isAnimated]);

  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 card-hover",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <Badge className="absolute top-3 left-3 bg-sunflower-500">{category}</Badge>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{title}</h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {author}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {formattedDate}
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3} more
            </Badge>
          )}
        </div>
        
        <Button variant="ghost" className="text-sunflower-600 hover:text-sunflower-700 hover:bg-sunflower-50 p-0 h-auto">
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default BlogPost;
