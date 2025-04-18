
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import ZipCodeChecker from "@/components/ZipCodeChecker";
import { 
  Shirt, 
  Home, 
  ClipboardCheck, 
  SprayCan, 
  Building, 
  Brush, 
  Construction, 
  Droplets,
  Timer,
  ArrowRight
} from "lucide-react";

const ServicesPage = () => {
  return (
    <>
      {/* Header Section */}
      <div className="pt-24 bg-gradient-to-b from-sunflower-50 to-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Professional <span className="text-sunflower-500">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            We offer a comprehensive range of cleaning and laundry services 
            designed to meet your every need with quality and care.
          </p>
        </div>
      </div>

      {/* Laundry Services */}
      <Section 
        title="Laundry Services" 
        subtitle="Professional care for all your garments and fabrics"
        id="laundry"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Professional laundry service" 
              className="rounded-lg shadow-md object-cover w-full h-[300px]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">
              Premium Laundry Solutions
            </h3>
            <p className="text-gray-600 mb-6">
              Our laundry services combine state-of-the-art equipment with eco-friendly 
              detergents to ensure your clothes are treated with the utmost care. We offer 
              custom treatment for different fabrics and stains, ensuring perfect results every time.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-skyblue-100 text-skyblue-700 px-3 py-1 rounded-full text-sm">
                Eco-friendly
              </span>
              <span className="bg-skyblue-100 text-skyblue-700 px-3 py-1 rounded-full text-sm">
                Allergen-free options
              </span>
              <span className="bg-skyblue-100 text-skyblue-700 px-3 py-1 rounded-full text-sm">
                Stain removal
              </span>
              <span className="bg-skyblue-100 text-skyblue-700 px-3 py-1 rounded-full text-sm">
                Gentle care
              </span>
            </div>
            <Button asChild className="w-fit">
              <Link to="/booking" className="flex items-center gap-2">
                Book Laundry Service
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="Regular Washing"
            description="Full-service washing and folding for everyday clothes, bedding, and linens with eco-friendly detergents."
            icon={Shirt}
            className="bg-white"
          />
          <ServiceCard 
            title="Dry Cleaning"
            description="Professional dry cleaning for delicate fabrics, formal wear, and items that require special care."
            icon={Droplets}
            className="bg-white"
          />
          <ServiceCard 
            title="Ironing Services"
            description="Expert pressing and ironing to give your garments a crisp, wrinkle-free professional finish."
            icon={SprayCan}
            className="bg-white"
          />
          <ServiceCard 
            title="Pickup & Delivery"
            description="Convenient door-to-door service that saves you time and hassle. Schedule recurring pickups for added convenience."
            icon={Timer}
            className="bg-white"
          />
        </div>
      </Section>

      {/* Cleaning Services */}
      <Section 
        title="Cleaning Services" 
        subtitle="Comprehensive solutions for homes and offices"
        id="cleaning"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="order-2 md:order-1 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">
              Thorough Cleaning Solutions
            </h3>
            <p className="text-gray-600 mb-6">
              Our professional cleaning team delivers exceptional results for homes and businesses. 
              We use eco-friendly products and proven techniques to ensure a thorough clean that's 
              safe for your family, pets, and the environment.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-ecogreen-100 text-ecogreen-700 px-3 py-1 rounded-full text-sm">
                Green cleaning
              </span>
              <span className="bg-ecogreen-100 text-ecogreen-700 px-3 py-1 rounded-full text-sm">
                Customized plans
              </span>
              <span className="bg-ecogreen-100 text-ecogreen-700 px-3 py-1 rounded-full text-sm">
                Regular maintenance
              </span>
              <span className="bg-ecogreen-100 text-ecogreen-700 px-3 py-1 rounded-full text-sm">
                Trained specialists
              </span>
            </div>
            <Button asChild className="w-fit">
              <Link to="/booking" className="flex items-center gap-2">
                Book Cleaning Service
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Professional home cleaning" 
              className="rounded-lg shadow-md object-cover w-full h-[300px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="Home Cleaning"
            description="Comprehensive cleaning of living spaces, kitchens, bathrooms, and bedrooms tailored to your specific needs."
            icon={Home}
            className="bg-white"
          />
          <ServiceCard 
            title="Office Cleaning"
            description="Professional cleaning services for workspaces that ensure a clean, healthy environment for employees and clients."
            icon={Building}
            className="bg-white"
          />
          <ServiceCard 
            title="Deep Cleaning"
            description="Thorough, intensive cleaning that reaches the areas regular cleaning might miss, perfect for seasonal refreshes."
            icon={Brush}
            className="bg-white"
          />
          <ServiceCard 
            title="Post-Construction"
            description="Specialized cleaning to remove dust, debris, and residues after renovation or construction projects."
            icon={Construction}
            className="bg-white"
          />
        </div>
      </Section>

      {/* Specialty Services */}
      <Section 
        title="Specialty Services" 
        subtitle="Customized solutions for specific cleaning needs"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Carpet & Upholstery Cleaning</h3>
            <p className="text-gray-600 mb-4">
              Deep cleaning for carpets, rugs, and upholstered furniture to remove stains, 
              allergens, and odors, extending their lifespan.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <ClipboardCheck className="w-5 h-5 text-sunflower-500 mt-0.5" />
                <span className="text-gray-700">Hot water extraction</span>
              </li>
              <li className="flex items-start gap-2">
                <ClipboardCheck className="w-5 h-5 text-sunflower-500 mt-0.5" />
                <span className="text-gray-700">Stain and odor treatment</span>
              </li>
              <li className="flex items-start gap-2">
                <ClipboardCheck className="w-5 h-5 text-sunflower-500 mt-0.5" />
                <span className="text-gray-700">Fast drying process</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Window & Glass Cleaning</h3>
            <p className="text-gray-600 mb-4">
              Professional cleaning of windows, glass doors, and other glass surfaces for 
              a streak-free, crystal clear finish.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <ClipboardCheck className="w-5 h-5 text-sunflower-500 mt-0.5" />
                <span className="text-gray-700">Interior and exterior surfaces</span>
              </li>
              <li className="flex items-start gap-2">
                <ClipboardCheck className="w-5 h-5 text-sunflower-500 mt-0.5" />
                <span className="text-gray-700">Screen cleaning</span>
              </li>
              <li className="flex items-start gap-2">
                <ClipboardCheck className="w-5 h-5 text-sunflower-500 mt-0.5" />
                <span className="text-gray-700">Sill and track cleaning</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Move-In/Move-Out Cleaning</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive cleaning services when moving into a new home or 
              vacating your current residence.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <ClipboardCheck className="w-5 h-5 text-sunflower-500 mt-0.5" />
                <span className="text-gray-700">Cabinet and drawer cleaning</span>
              </li>
              <li className="flex items-start gap-2">
                <ClipboardCheck className="w-5 h-5 text-sunflower-500 mt-0.5" />
                <span className="text-gray-700">Appliance cleaning</span>
              </li>
              <li className="flex items-start gap-2">
                <ClipboardCheck className="w-5 h-5 text-sunflower-500 mt-0.5" />
                <span className="text-gray-700">Baseboards and door frames</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Service Plans */}
      <Section 
        title="Service Plans" 
        subtitle="Choose the plan that best fits your needs"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">One-Time Service</h3>
              <p className="text-gray-600 mb-6">
                Perfect for special occasions or when you need a thorough cleaning without commitment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-sunflower-500" />
                  <span>No long-term contract</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-sunflower-500" />
                  <span>Fully customizable service</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-sunflower-500" />
                  <span>Available on weekends</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-sunflower-200 transition-transform hover:-translate-y-1 hover:shadow-lg relative">
            <div className="absolute top-0 right-0 left-0 bg-sunflower-500 text-white text-center py-1 text-sm font-medium">
              Most Popular
            </div>
            <div className="p-6 pt-10">
              <h3 className="text-xl font-semibold mb-2">Bi-Weekly Service</h3>
              <p className="text-gray-600 mb-6">
                Regular cleaning every two weeks to maintain a consistently clean environment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-sunflower-500" />
                  <span>10% discount on regular rates</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-sunflower-500" />
                  <span>Same team each visit</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-sunflower-500" />
                  <span>Flexible scheduling options</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-sunflower-500" />
                  <span>Priority booking</span>
                </li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Weekly Service</h3>
              <p className="text-gray-600 mb-6">
                Ideal for busy professionals and families who want a consistently clean home.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-sunflower-500" />
                  <span>15% discount on regular rates</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-sunflower-500" />
                  <span>Same team each visit</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-sunflower-500" />
                  <span>Free deep cleaning once a quarter</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-sunflower-500" />
                  <span>Customizable cleaning checklist</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ZIP Code Checker */}
      <Section title="Service Areas" subtitle="Check if we're available in your neighborhood">
        <div className="max-w-2xl mx-auto">
          <ZipCodeChecker />
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions" subtitle="Answers to common questions about our services">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-3">How do I schedule a service?</h3>
            <p className="text-gray-600">
              You can book online through our website, call our customer service line, or use our mobile app. 
              We offer flexible scheduling to accommodate your needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-3">What if I need to reschedule?</h3>
            <p className="text-gray-600">
              We understand plans change. You can reschedule or cancel your appointment up to 24 hours 
              before your scheduled service without any fees.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-3">What cleaning products do you use?</h3>
            <p className="text-gray-600">
              We use environmentally friendly, non-toxic cleaning products that are safe for your family, 
              pets, and the environment while still providing exceptional cleaning results.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-3">Do I need to be home during the service?</h3>
            <p className="text-gray-600">
              No, you don't need to be home. Many of our customers provide a key or access instructions. 
              We maintain strict security protocols to ensure the safety of your home.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section fullWidth className="bg-sunflower-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to experience the Sunflower difference?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book your service today and join our family of satisfied customers.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-sunflower-600 hover:bg-gray-100">
            <Link to="/booking">Book Your Service</Link>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default ServicesPage;
