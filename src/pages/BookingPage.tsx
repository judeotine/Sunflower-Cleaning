
import Section from "@/components/Section";
import BookingSteps from "@/components/BookingSteps";

const BookingPage = () => {
  return (
    <>
      {/* Header Section */}
      <div className="pt-24 bg-gradient-to-b from-sunflower-50 to-white">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your <span className="text-sunflower-500">Service</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule your cleaning or laundry service in just a few easy steps.
          </p>
        </div>
      </div>

      {/* Booking Form Section */}
      <Section className="bg-white">
        <BookingSteps />
      </Section>

      {/* Information Section */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Satisfaction Guarantee</h3>
            <p className="text-gray-600">
              If you're not completely satisfied with our service, we'll come back and make it right at no additional cost.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Flexible Scheduling</h3>
            <p className="text-gray-600">
              Choose a time that works for you, with options available 7 days a week. Easily reschedule if your plans change.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Professional Staff</h3>
            <p className="text-gray-600">
              Our thoroughly vetted, trained, and insured cleaning professionals will treat your home with respect and care.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BookingPage;
