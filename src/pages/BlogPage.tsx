
import { useState } from "react";
import { Search, ChevronRight, Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Section from "@/components/Section";
import BlogPost from "@/components/BlogPost";

const blogs = [
  {
  //   id: 1,
  //   title: "10 Eco-Friendly Cleaning Tips for a Greener Home",
  //   excerpt: "Discover how to make your cleaning routine more environmentally friendly with these simple tips and natural cleaning solutions.",
  //   content: "Full content here...",
  //   image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //   author: "Emma Green",
  //   date: "2023-04-12",
  //   category: "Cleaning Tips",
  //   tags: ["eco-friendly", "green cleaning", "natural products"]
  // },
  // {
  //   id: 2,
  //   title: "How to Remove Tough Laundry Stains: The Ultimate Guide",
  //   excerpt: "Learn professional techniques to tackle the most stubborn stains on your clothes, from wine to grease.",
  //   content: "Full content here...",
  //   image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //   author: "Michael Johnson",
  //   date: "2023-03-28",
  //   category: "Laundry Tips",
  //   tags: ["stain removal", "laundry hacks", "clothing care"]
  // },
  // {
  //   id: 3,
  //   title: "The Benefits of Professional Deep Cleaning for Allergen Control",
  //   excerpt: "Discover how regular deep cleaning can reduce allergens in your home and improve indoor air quality for your family.",
  //   content: "Full content here...",
  //   image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //   author: "Sarah Williams",
  //   date: "2023-02-15",
  //   category: "Health & Wellness",
  //   tags: ["allergies", "indoor air quality", "deep cleaning"]
  // },
  // {
  //   id: 4,
  //   title: "Organizing Your Laundry Room: Efficiency Meets Style",
  //   excerpt: "Transform your laundry room into an efficient and aesthetically pleasing space with these organization tips.",
  //   content: "Full content here...",
  //   image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //   author: "Alex Thompson",
  //   date: "2023-01-20",
  //   category: "Organization",
  //   tags: ["laundry room", "home organization", "storage solutions"]
  // },
  // {
  //   id: 5,
  //   title: "Understanding Different Fabric Types and How to Care for Them",
  //   excerpt: "A comprehensive guide to identifying different fabrics and the specific care requirements for each type.",
  //   content: "Full content here...",
  //   image: "https://images.unsplash.com/photo-1592375680268-78640a988bb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //   author: "Lisa Chen",
  //   date: "2022-12-05",
  //   category: "Laundry Tips",
  //   tags: ["fabric care", "clothing maintenance", "laundry guide"]
  // },
  // {
  //   id: 6,
  //   title: "5 Time-Saving Cleaning Routines for Busy Professionals",
  //   excerpt: "Efficient cleaning strategies that fit into your packed schedule without compromising on cleanliness.",
  //   content: "Full content here...",
  //   image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //   author: "James Wilson",
  //   date: "2022-11-18",
  //   category: "Cleaning Tips",
  //   tags: ["time management", "quick cleaning", "efficiency"]
  }
];

const categories = [
  "All Posts",
  "Cleaning Tips",
  "Laundry Tips",
  "Organization",
  "Health & Wellness"
];

const popularTags = [
  "eco-friendly",
  "stain removal",
  "laundry hacks",
  "time management",
  "fabric care",
  "green cleaning"
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Posts");
  
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = 
      activeCategory === "All Posts" || blog.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Header Section */}
      <div className="pt-24 bg-gradient-to-b from-sunflower-50 to-white">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cleaning & Laundry <span className="text-sunflower-500">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert tips, guides, and inspiration for a cleaner, fresher home
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
              {/* Search */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        className={`flex items-center w-full text-left py-1 px-2 rounded-md transition-colors ${
                          activeCategory === category
                            ? "bg-sunflower-100 text-sunflower-700"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => setActiveCategory(category)}
                      >
                        <ChevronRight 
                          className={`h-4 w-4 mr-2 transition-transform ${
                            activeCategory === category ? "text-sunflower-500 rotate-90" : ""
                          }`} 
                        />
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Popular Tags */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Badge 
                      key={tag}
                      variant="outline"
                      className="cursor-pointer hover:bg-sunflower-100 hover:text-sunflower-700 hover:border-sunflower-200 transition-colors"
                      onClick={() => setSearchTerm(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Subscribe */}
              <div className="bg-sunflower-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                <p className="text-sm text-gray-600 mb-4">Subscribe to our newsletter for the latest cleaning tips and special offers.</p>
                <div className="space-y-3">
                  <Input placeholder="Your email address" type="email" />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-10">
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or category filter.</p>
                <Button variant="outline" onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All Posts");
                }}>
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredBlogs.map((blog) => (
                  <BlogPost
                    key={blog.id}
                    id={blog.id}
                    title={blog.title}
                    excerpt={blog.excerpt}
                    image={blog.image}
                    author={blog.author}
                    date={blog.date}
                    category={blog.category}
                    tags={blog.tags}
                  />
                ))}
              </div>
            )}
            
            {/* Load More */}
            {filteredBlogs.length > 0 && (
              <div className="mt-10 text-center">
                <Button variant="outline" className="px-8">
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </div>
      </Section>
      
      {/* Newsletter Section */}
      <Section className="bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to receive cleaning tips, exclusive offers, and updates from our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BlogPage;
