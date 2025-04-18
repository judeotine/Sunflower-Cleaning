import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
  fullWidth?: boolean;
  animate?: boolean;
}

const Section = ({
  id,
  className,
  children,
  title,
  subtitle,
  fullWidth = false,
  animate = true,
}: SectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element becomes visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it's been seen, no need to keep observing
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "py-16 md:py-24",
        fullWidth ? "w-full" : "",
        animate ? "fade-in-section" : "",
        isVisible ? "is-visible" : "",
        className
      )}
    >
      {fullWidth ? (
        // Full width container with inner content container
        <div className="w-full">
          {(title || subtitle) && (
            <div className="container mx-auto px-4 mb-12">
              {title && <h2 className="section-title">{title}</h2>}
              {subtitle && <p className="section-subtitle">{subtitle}</p>}
            </div>
          )}
          {children}
        </div>
      ) : (
        // Regular container with padding
        <div className="container mx-auto px-4">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
