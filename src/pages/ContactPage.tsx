
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Section from "@/components/Section";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import ChatBot from "@/components/ChatBot";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Your message has been sent! We'll get back to you soon.");
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      
      // Reset success state after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      {/* Header Section */}
      <div className="pt-24 bg-gradient-to-b from-sunflower-50 to-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-sunflower-500">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or want to schedule a service? Reach out to our friendly team.
          </p>
        </div>
      </div>

      {/* Contact Information & Form */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              We're here to help with any questions you may have about our services. 
              Reach out to us through any of the following contact methods, and we'll 
              get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-sunflower-100 text-sunflower-600 p-3 rounded-full mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Our Location</h3>
                  <p className="text-gray-600 mt-1">
                    123 Kampala Road<br />
                    Kampala, Uganda
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sunflower-100 text-sunflower-600 p-3 rounded-full mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600 mt-1">
                    <a href="tel:+256700123456" className="hover:text-sunflower-500 transition-colors">
                      +256 700 123 456
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sunflower-100 text-sunflower-600 p-3 rounded-full mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600 mt-1">
                    <a href="mailto:hello@sunflowercleaning.ug" className="hover:text-sunflower-500 transition-colors">
                      hello@sunflowercleaning.ug
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sunflower-100 text-sunflower-600 p-3 rounded-full mr-4">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p className="text-gray-600 mt-1">
                    Monday - Friday: 8:00 AM - 7:00 PM<br />
                    Saturday: 9:00 AM - 5:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map - Updated for Uganda */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-md h-[300px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127635.66249851615!2d32.5348689!3d0.32371270000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f8c4119f7%3A0x859738cc427d639d!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1650123456789!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                title="Sunflower Cleaning & Laundry location"
              ></iframe>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-sunflower-500 text-white p-3 rounded-full animate-pulse">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 bg-ecogreen-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-ecogreen-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  Your message has been sent successfully. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      placeholder="+256 700 123 456"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Service Inquiry"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[150px]"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  We'll never share your information with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section
        title="Frequently Asked Questions"
        subtitle="Quick answers to common questions"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-3">What areas do you service?</h3>
            <p className="text-gray-600">
              We currently serve the Greater Kampala metropolitan area, including Kampala, Wakiso, Mukono, Entebbe, and nearby areas 
              in Central Uganda. You can check if your address is within our service area using our location checker.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-3">How quickly can you schedule a service?</h3>
            <p className="text-gray-600">
              For regular cleaning services, we can typically schedule within 48 hours. For same-day emergency services, 
              please call our office directly to check availability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-3">What forms of payment do you accept?</h3>
            <p className="text-gray-600">
              We accept Mobile Money (MTN, Airtel), credit cards, and cash payments.
              Payment is processed securely after your service is completed.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-3">Are your services insured?</h3>
            <p className="text-gray-600">
              Yes, we are fully insured and bonded. All our team members undergo thorough background checks 
              and training before joining Sunflower Cleaning & Laundry.
            </p>
          </div>
        </div>
      </Section>

      {/* Live Chat Section */}
      <Section>
        <div className="bg-gradient-to-r from-sunflower-50 to-skyblue-50 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our customer support team is available for live chat during business hours.
            Get instant answers to your questions!
          </p>
          <Button 
            size="lg" 
            className="bg-sunflower-500 hover:bg-sunflower-600"
            onClick={() => setShowChat(!showChat)}
          >
            {showChat ? "Close Chat" : "Start Live Chat"}
          </Button>
          
          {showChat && <ChatBot />}
        </div>
      </Section>

      {/* Career Section */}
      <Section className="bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-gray-600 mb-6">
            Interested in becoming part of the Sunflower family? We're always looking for talented, 
            passionate individuals to join our growing team.
          </p>
          <Button asChild variant="outline">
            <a href="/careers">View Career Opportunities</a>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
