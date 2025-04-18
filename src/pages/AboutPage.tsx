
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import { Leaf, Heart, Users, Award, Clock, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const ValueCard = ({ 
  icon: Icon, 
  title, 
  description,
  className
}: { 
  icon: any; 
  title: string; 
  description: string;
  className?: string;
}) => (
  <div className={cn("bg-white p-6 rounded-lg shadow-sm border border-gray-100", className)}>
    <div className="bg-sunflower-100 text-sunflower-600 p-3 rounded-full w-fit mb-4">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TeamMember = ({ 
  name, 
  role, 
  bio, 
  image 
}: { 
  name: string; 
  role: string; 
  bio: string; 
  image: string;
}) => (
  <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
    <div className="aspect-square overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sunflower-600 mb-3">{role}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <>
      {/* Header Section */}
      <div className="pt-24 bg-gradient-to-b from-sunflower-50 to-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-sunflower-500">Sunflower</span> Cleaning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            We're on a mission to brighten your world through eco-friendly cleaning and laundry services.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Sunflower Cleaning & Laundry Services was founded in 2015 with a simple vision: 
              to provide premium cleaning services that are both effective and environmentally 
              responsible.
            </p>
            <p className="text-gray-600 mb-4">
              Our founder, Emma Sullivan, was frustrated with the harsh chemicals used by traditional 
              cleaning services and the environmental impact of conventional laundry practices. She 
              decided to create a company that would prioritize both cleanliness and sustainability.
            </p>
            <p className="text-gray-600 mb-8">
              What started as a small local operation has grown into a trusted service provider, 
              with a team of dedicated professionals committed to brightening homes and offices 
              throughout the region. Our success is built on our commitment to quality, environmental 
              responsibility, and exceptional customer service.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-sunflower-500" />
                <span>Founded in 2015</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-sunflower-500" />
                <span>80+ Team Members</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-sunflower-500" />
                <span>Award-winning service</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Sunflower Cleaning team" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section 
        title="Our Values" 
        subtitle="The principles that guide everything we do"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ValueCard 
            icon={Leaf}
            title="Environmental Responsibility"
            description="We use only eco-friendly, biodegradable cleaning products that are safe for your family, pets, and the planet."
          />
          <ValueCard 
            icon={Heart}
            title="Customer-First Approach"
            description="Your satisfaction is our top priority. We listen to your needs and tailor our services to exceed your expectations."
          />
          <ValueCard 
            icon={ShieldCheck}
            title="Professionalism & Trust"
            description="Our background-checked, trained professionals deliver consistent, high-quality service you can count on."
          />
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-sunflower-500 rounded-lg p-8 text-white relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-sunflower-400 rounded-full opacity-50"></div>
            <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-sunflower-400 rounded-full opacity-50"></div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Our Mission</h3>
            <p className="relative z-10 mb-6">
              To provide exceptional cleaning and laundry services that enhance the well-being of our 
              customers while minimizing environmental impact through sustainable practices.
            </p>
            <div className="w-20 h-1 bg-white rounded-full"></div>
          </div>
          <div className="bg-skyblue-500 rounded-lg p-8 text-white relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-skyblue-400 rounded-full opacity-50"></div>
            <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-skyblue-400 rounded-full opacity-50"></div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Our Vision</h3>
            <p className="relative z-10 mb-6">
              To be the leading provider of eco-friendly cleaning and laundry services, setting the 
              industry standard for quality, sustainability, and customer satisfaction.
            </p>
            <div className="w-20 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </Section>

      {/* Our Team */}
      <Section 
        title="Meet Our Team" 
        subtitle="The dedicated professionals behind our exceptional service"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TeamMember 
            name="Emma Sullivan"
            role="Founder & CEO"
            bio="With a background in environmental science, Emma created Sunflower to combine her passion for sustainability with premium cleaning services."
            image="https://randomuser.me/api/portraits/women/23.jpg"
          />
          <TeamMember 
            name="Michael Chen"
            role="Operations Director"
            bio="Michael ensures our day-to-day operations run smoothly and efficiently, while maintaining our high standards of service."
            image="https://randomuser.me/api/portraits/men/54.jpg"
          />
          <TeamMember 
            name="Sophia Rodriguez"
            role="Training Manager"
            bio="Sophia develops our rigorous training programs, ensuring every team member delivers consistent, exceptional service."
            image="https://randomuser.me/api/portraits/women/65.jpg"
          />
          <TeamMember 
            name="David Washington"
            role="Customer Experience Manager"
            bio="David is dedicated to ensuring every customer receives a personalized, outstanding experience with every service."
            image="https://randomuser.me/api/portraits/men/22.jpg"
          />
        </div>
      </Section>

      {/* Our Eco-Friendly Commitment */}
      <Section title="Our Eco-Friendly Commitment" subtitle="How we're making a difference for the planet">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <img 
              src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Eco-friendly cleaning products" 
              className="rounded-lg shadow-md h-full object-cover"
            />
          </div>
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">
              Sustainable Practices at Every Step
            </h3>
            <p className="text-gray-600 mb-6">
              At Sunflower, sustainability isn't just a buzzword—it's integrated into everything we do. 
              From our biodegradable cleaning products to our energy-efficient equipment and waste reduction 
              initiatives, we're committed to minimizing our environmental footprint.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-ecogreen-50 p-4 rounded-lg">
                <h4 className="font-semibold text-ecogreen-700 mb-2">Eco-Friendly Products</h4>
                <p className="text-gray-600">
                  We use plant-based, biodegradable cleaning solutions that are effective without 
                  harsh chemicals.
                </p>
              </div>
              <div className="bg-ecogreen-50 p-4 rounded-lg">
                <h4 className="font-semibold text-ecogreen-700 mb-2">Water Conservation</h4>
                <p className="text-gray-600">
                  Our laundry services use high-efficiency machines that minimize water usage while 
                  maximizing cleaning power.
                </p>
              </div>
              <div className="bg-ecogreen-50 p-4 rounded-lg">
                <h4 className="font-semibold text-ecogreen-700 mb-2">Reduced Carbon Footprint</h4>
                <p className="text-gray-600">
                  We optimize service routes to minimize driving distances and reduce our carbon emissions.
                </p>
              </div>
              <div className="bg-ecogreen-50 p-4 rounded-lg">
                <h4 className="font-semibold text-ecogreen-700 mb-2">Waste Reduction</h4>
                <p className="text-gray-600">
                  We use microfiber cloths instead of paper products and offer refillable product options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're proud to be recognized for our commitment to excellence and sustainability.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-[200px] text-center">
            <img 
              src="https://placehold.co/120x120/eee/aaa?text=Green+Clean" 
              alt="Green Clean Certified" 
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Green Clean Certified</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-[200px] text-center">
            <img 
              src="https://placehold.co/120x120/eee/aaa?text=Eco+Star" 
              alt="Eco Star Rating" 
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">5 Star Eco Rating</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-[200px] text-center">
            <img 
              src="https://placehold.co/120x120/eee/aaa?text=Sustainable" 
              alt="Sustainable Business Network" 
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Sustainable Business Network</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-[200px] text-center">
            <img 
              src="https://placehold.co/120x120/eee/aaa?text=Quality" 
              alt="Quality Service Guarantee" 
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Quality Service Guarantee</h3>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section fullWidth className="bg-sunflower-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Sunflower Family</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience our exceptional, eco-friendly services for yourself. Book your first cleaning today!
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

export default AboutPage;
