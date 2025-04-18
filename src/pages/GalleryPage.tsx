
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import Lightbox from "@/components/Lightbox";

// Mock gallery data
const galleryImages = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Living room before cleaning",
    category: "before-after",
    title: "Living Room Transformation",
    description: "Before and after a deep cleaning service",
    before: true
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Living room after cleaning",
    category: "before-after",
    title: "Living Room Transformation",
    description: "Fresh and sparkling after our cleaning service",
    before: false
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1520946708818-4966701c25e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Kitchen before cleaning",
    category: "before-after",
    title: "Kitchen Makeover",
    description: "Before our deep cleaning service",
    before: true
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Kitchen after cleaning",
    category: "before-after",
    title: "Kitchen Makeover",
    description: "Spotless surfaces after our cleaning service",
    before: false
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Laundry service",
    category: "laundry",
    title: "Professional Laundry",
    description: "Our state-of-the-art laundry facility",
    before: null
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Folded laundry",
    category: "laundry",
    title: "Perfectly Folded",
    description: "Expertly folded laundry ready for delivery",
    before: null
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1626806787461-102c1a7f1c62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Bathroom before cleaning",
    category: "before-after",
    title: "Bathroom Refresh",
    description: "Before our deep cleaning service",
    before: true
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Bathroom after cleaning",
    category: "before-after",
    title: "Bathroom Refresh",
    description: "Gleaming fixtures after our service",
    before: false
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Ironing service",
    category: "laundry",
    title: "Professional Ironing",
    description: "Crisp, wrinkle-free results every time",
    before: null
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Office cleaning",
    category: "commercial",
    title: "Office Cleaning",
    description: "Professional cleaning for workspaces",
    before: null
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Commercial cleaning",
    category: "commercial",
    title: "Commercial Services",
    description: "Keeping businesses spotless and professional",
    before: null
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Eco-friendly products",
    category: "products",
    title: "Eco-Friendly Products",
    description: "The safe, effective products we use",
    before: null
  },
];

const GalleryPage = () => {
  const [filter, setFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter images based on selected category
  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* Header Section */}
      <div className="pt-24 bg-gradient-to-b from-sunflower-50 to-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Work <span className="text-sunflower-500">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the difference our professional cleaning and laundry services make. Browse our before-and-after transformations.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <Section className="bg-white">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              filter === "all" 
                ? "bg-sunflower-500 text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Photos
          </button>
          <button
            onClick={() => setFilter("before-after")}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              filter === "before-after" 
                ? "bg-sunflower-500 text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Before & After
          </button>
          <button
            onClick={() => setFilter("laundry")}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              filter === "laundry" 
                ? "bg-sunflower-500 text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Laundry Services
          </button>
          <button
            onClick={() => setFilter("commercial")}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              filter === "commercial" 
                ? "bg-sunflower-500 text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Commercial Cleaning
          </button>
          <button
            onClick={() => setFilter("products")}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              filter === "products" 
                ? "bg-sunflower-500 text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Products
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md bg-white border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {image.before !== null && (
                  <div className={`absolute top-2 left-2 px-3 py-1 rounded-full text-xs font-medium ${
                    image.before 
                      ? "bg-red-500 text-white" 
                      : "bg-ecogreen-500 text-white"
                  }`}>
                    {image.before ? "Before" : "After"}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-1">{image.title}</h3>
                <p className="text-sm text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No images found for this category. Please try another filter.</p>
          </div>
        )}

        {/* Lightbox */}
        {lightboxOpen && (
          <Lightbox
            images={filteredImages.map(img => ({
              id: img.id,
              src: img.src,
              alt: img.alt
            }))}
            initialIndex={currentImageIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </Section>

      {/* Before & After Showcase */}
      <Section
        title="Before & After Transformations"
        subtitle="See the remarkable difference our services make"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Kitchen Deep Clean</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1520946708818-4966701c25e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Kitchen before cleaning" 
                  className="rounded-lg aspect-square object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                  Before
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Kitchen after cleaning" 
                  className="rounded-lg aspect-square object-cover"
                />
                <div className="absolute top-2 left-2 bg-ecogreen-500 text-white px-2 py-1 rounded-full text-xs">
                  After
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Our kitchen deep cleaning service tackles grease, grime, and stubborn stains, leaving your kitchen sparkling clean and sanitized.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Bathroom Refresh</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1626806787461-102c1a7f1c62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Bathroom before cleaning" 
                  className="rounded-lg aspect-square object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                  Before
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Bathroom after cleaning" 
                  className="rounded-lg aspect-square object-cover"
                />
                <div className="absolute top-2 left-2 bg-ecogreen-500 text-white px-2 py-1 rounded-full text-xs">
                  After
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Our bathroom cleaning service eliminates soap scum, water spots, and mildew, leaving your bathroom fresh, clean, and sanitized.
            </p>
          </div>
        </div>
      </Section>

      {/* Commercial Services */}
      <Section
        title="Commercial Cleaning Gallery"
        subtitle="Professional cleaning solutions for businesses of all sizes"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Office cleaning" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Office Spaces</h3>
              <p className="text-gray-600 mt-2">
                Clean, organized workspaces that boost productivity and create a positive impression for clients and employees.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Commercial cleaning" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Retail Spaces</h3>
              <p className="text-gray-600 mt-2">
                Immaculate retail environments that enhance the shopping experience and showcase your products in the best light.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Restaurant cleaning" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Restaurants</h3>
              <p className="text-gray-600 mt-2">
                Thorough cleaning and sanitization to maintain health standards and create a pleasant dining atmosphere.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section fullWidth className="bg-sunflower-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for your own transformation?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us show you the Sunflower difference with our professional cleaning and laundry services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-sunflower-600 hover:bg-gray-100">
              <Link to="/booking">Book a Service</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default GalleryPage;
