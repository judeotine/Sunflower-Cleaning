import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";
import Section from "@/components/Section";
import TestimonialCard from "@/components/TestimonialCard";
import { cn } from "@/lib/utils";
import contactImage from "../assets/contact.png";

const testimonials = [
  {
    id: 1,
    name: "Sarah ",
    role: "Regular Customer",
    content:
      "Sunflower Cleaning has transformed my home! Their attention to detail is incredible and I love their eco-friendly approach. My house has never looked better.",
    rating: 5,
    image: contactImage,
    featured: true,
    service: "Home Cleaning",
  },
  {
    id: 2,
    name: "Michael",
    role: "Office Manager",
    content:
      "We've been using Sunflower for our office cleaning needs for over a year. Consistently excellent results and very professional staff. Highly recommended for business cleaning.",
    rating: 5,
    image: contactImage,
    featured: true,
    service: "Office Cleaning",
  },
  {
    id: 3,
    name: "Jennifer",
    role: "Homeowner",
    content:
      "Their laundry service is a life-saver! My clothes come back perfectly clean and neatly folded every time. The pickup and delivery option makes it so convenient.",
    rating: 4,
    image: contactImage,
    featured: false,
    service: "Laundry Service",
  },
  {
    id: 4,
    name: "Robert",
    role: "Busy Professional",
    content:
      "I was skeptical about hiring a cleaning service, but Sunflower exceeded my expectations. Their team is punctual, thorough and respectful of my space. Worth every penny!",
    rating: 5,
    image: contactImage,
    featured: false,
    service: "Deep Cleaning",
  },
  {
    id: 5,
    name: "Lisa Namatovu",
    role: "New Parent",
    content:
      "As new parents, finding time to clean is nearly impossible. Sunflower has been a lifesaver! Their team is trustworthy and they use products that are safe around our baby.",
    rating: 5,
    image: contactImage,
    featured: false,
    service: "Home Cleaning",
  },
  {
    id: 6,
    name: "David",
    role: "Real Estate Agent",
    content:
      "I use Sunflower for move-out cleanings for my clients. They consistently deliver outstanding results that help properties show better and sell faster. Extremely reliable service.",
    rating: 5,
    image: contactImage,
    featured: false,
    service: "Move-Out Cleaning",
  },
  {
    id: 7,
    name: "Patricia",
    role: "Retired Teacher",
    content:
      "I've tried several cleaning services over the years and Sunflower is by far the best. Their attention to detail is remarkable and the team is always friendly and professional.",
    rating: 5,
    image: contactImage,
    featured: false,
    service: "Home Cleaning",
  },
  {
    id: 8,
    name: "James",
    role: "Small Business Owner",
    content:
      "My dry cleaning always comes back looking brand new. Their stain removal skills are impressive and they've saved several of my favorite items that I thought were ruined.",
    rating: 5,
    image: contactImage,
    featured: false,
    service: "Dry Cleaning",
  },
  {
    id: 9,
    name: "Otim Oscar",
    role: "Student",
    content: "The recurring cleaning service has made such a difference.",
    rating: 4,
    image: contactImage,
    featured: false,
    service: "Bi-Weekly Cleaning",
  },
];

const TestimonialsPage = () => {
  const [filter, setFilter] = useState("all");
  const [filteredTestimonials, setFilteredTestimonials] =
    useState(testimonials);

  useEffect(() => {
    if (filter === "all") {
      setFilteredTestimonials(testimonials);
    } else {
      setFilteredTestimonials(
        testimonials.filter((testimonial) =>
          testimonial.service.toLowerCase().includes(filter.toLowerCase()),
        ),
      );
    }
  }, [filter]);

  return (
    <>
      {/* Header Section */}
      <div className="pt-24 bg-gradient-to-b from-sunflower-50 to-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Customer{" "}
            <span className="text-sunflower-500">Testimonials</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Don't just take our word for it - hear what our satisfied customers
            have to say about our services.
          </p>
        </div>
      </div>

      {/* Featured Testimonials */}
      <Section className="bg-white">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-10">
            Featured Reviews
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials
              .filter((testimonial) => testimonial.featured)
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gradient-to-br from-sunflower-50 to-sunflower-100 p-8 rounded-xl shadow-md relative"
                >
                  <Quote className="absolute top-6 right-6 text-sunflower-300 w-12 h-12 opacity-50" />
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white shadow-sm">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? "text-sunflower-500 fill-sunflower-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "{testimonial.content}"
                  </p>
                  <p className="text-sm text-sunflower-600">
                    Service: {testimonial.service}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </Section>

      {/* Filter and All Testimonials */}
      <Section className="bg-gray-50">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            All Customer Reviews
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setFilter("all")}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
                filter === "all"
                  ? "bg-sunflower-500 text-white"
                  : "bg-white text-gray-600 hover:bg-sunflower-100",
              )}
            >
              All Reviews
            </button>
            <button
              onClick={() => setFilter("home")}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
                filter === "home"
                  ? "bg-sunflower-500 text-white"
                  : "bg-white text-gray-600 hover:bg-sunflower-100",
              )}
            >
              Home Cleaning
            </button>
            <button
              onClick={() => setFilter("office")}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
                filter === "office"
                  ? "bg-sunflower-500 text-white"
                  : "bg-white text-gray-600 hover:bg-sunflower-100",
              )}
            >
              Office Cleaning
            </button>
            <button
              onClick={() => setFilter("laundry")}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
                filter === "laundry"
                  ? "bg-sunflower-500 text-white"
                  : "bg-white text-gray-600 hover:bg-sunflower-100",
              )}
            >
              Laundry Services
            </button>
            <button
              onClick={() => setFilter("deep")}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
                filter === "deep"
                  ? "bg-sunflower-500 text-white"
                  : "bg-white text-gray-600 hover:bg-sunflower-100",
              )}
            >
              Deep Cleaning
            </button>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No reviews found for this filter. Please try another category.
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* Customer Satisfaction Stats */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Customers Love Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality, reliability, and exceptional service has
            earned us outstanding ratings from our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-sunflower-50 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-sunflower-500 mb-2">
              98%
            </div>
            <p className="text-gray-700">Customer Satisfaction</p>
          </div>
          <div className="bg-sunflower-50 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-sunflower-500 mb-2">
              4.9
            </div>
            <p className="text-gray-700">Average Rating</p>
          </div>
          <div className="bg-sunflower-50 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-sunflower-500 mb-2">
              87%
            </div>
            <p className="text-gray-700">Recurring Customers</p>
          </div>
          <div className="bg-sunflower-50 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-sunflower-500 mb-2">
              2000+
            </div>
            <p className="text-gray-700">Happy Customers</p>
          </div>
        </div>
      </Section>

      {/* Leave a Review Section */}
      <Section className="bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Share Your Experience</h2>
          <p className="text-lg text-gray-600 mb-8">
            Are you a satisfied customer? We'd love to hear about your
            experience with Sunflower Cleaning & Laundry Services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-sunflower-500 hover:bg-sunflower-600"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Leave a Review
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section fullWidth className="bg-sunflower-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to experience our 5-star service?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community of satisfied customers and see the Sunflower
            difference for yourself.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-sunflower-600 hover:bg-gray-100"
          >
            <Link to="/booking">Book Your Service</Link>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default TestimonialsPage;
