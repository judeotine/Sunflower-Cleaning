import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import LocationChecker from "@/components/LocationChecker";
import SunflowerScene from "@/components/SunflowerScene";
import { Shirt, Home, CalendarClock, CheckCircle, Leaf, RotateCcw } from "lucide-react";

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-gradient-to-b from-sunflower-50 to-white pt-20"
      >
        {/* ThreeJS Background */}
        <SunflowerScene className="opacity-30" />
        
        <div className="container mx-auto px-4 py-16 md:py-24 z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Brightening your world, 
                <span className="text-sunflower-500 block">one clean at a time</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Professional eco-friendly cleaning and laundry services for homes and offices in Central Uganda. 
                Experience the Sunflower difference with our premium care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="flex-1">
                  <Link to="/booking" className="flex items-center justify-center gap-2">
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <Link to="/services">
                    Our Services
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-sunflower-500" />
                  <span>Eco-friendly products</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-sunflower-500" />
                  <span>Trained professionals</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-sunflower-500" />
                  <span>100% satisfaction</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-10">
              <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Check Service Availability</h3>
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-sunflower-500" />
                    <span className="text-gray-700">Enter your location to get started</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    type="text" 
                    placeholder="Your location (e.g., Kampala)" 
                    className="flex-grow"
                  />
                  <Button className="whitespace-nowrap">
                    Check Availability
                  </Button>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-sm text-gray-500">
                  <Sparkles className="w-4 h-4 text-sunflower-500 mr-2" />
                  <span>New customers receive 10% off their first service!</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
            <button 
              onClick={scrollToFeatures}
              className="text-gray-500 hover:text-sunflower-500 transition-colors"
              aria-label="Scroll to features"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Section 
        id="features" 
        title="Why Choose Sunflower Cleaning" 
        subtitle="We combine eco-friendly practices with professional expertise to deliver exceptional cleaning and laundry services."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Eco-Friendly Products"
            description="We use only environmentally friendly, non-toxic cleaning products that are safe for your family, pets, and the planet."
            icon={Leaf}
          />
          <ServiceCard
            title="Professional Staff"
            description="Our team consists of trained, background-checked professionals who take pride in their attention to detail."
            icon={CheckCircle}
          />
          <ServiceCard
            title="Consistent Quality"
            description="We follow a systematic approach to ensure consistent, high-quality results with every service we provide."
            icon={Sparkles}
          />
        </div>
      </Section>

      {/* Services Section */}
      <Section 
        title="Our Services" 
        subtitle="Comprehensive cleaning and laundry solutions tailored to your needs"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="bg-skyblue-500 text-white p-6">
              <Shirt className="w-8 h-8 mb-4" />
              <h3 className="text-2xl font-semibold">Laundry Services</h3>
              <p className="mt-2 text-skyblue-50">
                Professional care for all your garments
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-skyblue-500" />
                  <span>Regular Washing & Folding</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-skyblue-500" />
                  <span>Dry Cleaning Services</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-skyblue-500" />
                  <span>Ironing & Pressing</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-skyblue-500" />
                  <span>Pickup & Delivery Options</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild variant="outline">
                  <Link to="/services" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="bg-ecogreen-500 text-white p-6">
              <Home className="w-8 h-8 mb-4" />
              <h3 className="text-2xl font-semibold">Cleaning Services</h3>
              <p className="mt-2 text-ecogreen-50">
                Thorough cleaning solutions for every space
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-ecogreen-500" />
                  <span>Home Cleaning</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-ecogreen-500" />
                  <span>Office Cleaning</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-ecogreen-500" />
                  <span>Deep Cleaning Services</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-ecogreen-500" />
                  <span>Post-Construction Cleanup</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild variant="outline">
                  <Link to="/services" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section 
        title="How It Works" 
        subtitle="Fast and easy booking process in just a few steps"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-sunflower-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarClock className="w-8 h-8 text-sunflower-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Book a Service</h3>
            <p className="text-gray-600">
              Schedule online or call us to book your preferred service, date, and time.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-sunflower-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-sunflower-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. We Perform the Service</h3>
            <p className="text-gray-600">
              Our professional team arrives on time and delivers exceptional results.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-sunflower-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <RotateCcw className="w-8 h-8 text-sunflower-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Regular Maintenance</h3>
            <p className="text-gray-600">
              Set up recurring services for ongoing cleanliness and convenience.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/booking">Book Your Service Today</Link>
          </Button>
        </div>
      </Section>

      {/* Testimonials Preview */}
      <Section 
        title="What Our Customers Say" 
        subtitle="Don't just take our word for it - hear from our satisfied customers"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard
            name="Sarah"
            role="Regular Customer"
            content="Sunflower Cleaning has transformed my home! Their attention to detail is incredible, and I love their eco-friendly approach."
            rating={5}
            image="public/contact.png"
          />
          <TestimonialCard
            name="Michael"
            role="Office Manager"
            content="We've been using Sunflower for our office cleaning needs for over a year. Consistently excellent results and very professional staff."
            rating={5}
            image="public/contact.png"
          />
          <TestimonialCard
            name="Jennifer"
            role="Homeowner"
            content="Their laundry service is a life-saver! My clothes come back perfectly clean and neatly folded every time. Highly recommend!"
            rating={4}
            image="public/contact.png"
          />
        </div>
        
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link to="/testimonials" className="flex items-center gap-2">
              Read More Testimonials
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Location Checker */}
      <Section title="Service Areas" subtitle="Check if we're available in your neighborhood in Central Uganda">
        <div className="max-w-2xl mx-auto">
          <LocationChecker />
        </div>
      </Section>

      {/* CTA Section */}
      <Section fullWidth className="bg-sunflower-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to experience the Sunflower difference?</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Join our satisfied customers and enjoy a cleaner, fresher home or workplace today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-sunflower-600 hover:bg-gray-100">
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
