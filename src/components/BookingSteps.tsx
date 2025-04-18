import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2, CreditCard, Phone } from "lucide-react";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { notificationService } from "@/utils/notificationService";

type BookingStep = "service" | "details" | "schedule" | "payment" | "confirm";

const BookingSteps = () => {
  const [step, setStep] = useState<BookingStep>("service");
  const [serviceType, setServiceType] = useState<"cleaning" | "laundry" | "">("");
  const [serviceSpecific, setServiceSpecific] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"mtn" | "airtel" | "">("");
  const [momoNumber, setMomoNumber] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<"pending" | "successful" | "failed">("pending");

  const nextStep = () => {
    if (step === "service") {
      if (!serviceType || !serviceSpecific) {
        toast.error("Please select a service type and service");
        return;
      }
      setStep("details");
    } else if (step === "details") {
      if (!name || !email || !phone || !address || !location) {
        toast.error("Please fill in all required fields");
        return;
      }
      if (!email.includes("@")) {
        toast.error("Please enter a valid email address");
        return;
      }
      
      // Check if location is in central Uganda
      const centralUgandaLocations = [
        "kampala", "wakiso", "mukono", "entebbe", "jinja", 
        "mityana", "mpigi", "kayunga", "buikwe", "luwero"
      ];
      
      const normalizedLocation = location.toLowerCase().trim();
      const isServiceableArea = centralUgandaLocations.some(loc => 
        normalizedLocation.includes(loc) || loc.includes(normalizedLocation)
      );
      
      if (!isServiceableArea) {
        toast.error("Sorry, we currently only service Central Uganda locations. Please enter a location within our service area.");
        return;
      }
      
      setStep("schedule");
    } else if (step === "schedule") {
      if (!date || !time) {
        toast.error("Please select a date and time");
        return;
      }
      setStep("payment");
    } else if (step === "payment") {
      if (!paymentMethod) {
        toast.error("Please select a payment method");
        return;
      }
      if (!momoNumber) {
        toast.error("Please enter your mobile money number");
        return;
      }
      // Validate Uganda phone number format
      const phoneRegex = /^(07[0-8]\d{7}|0753\d{6}|256(77|78|75|70|71|72|73)\d{7})$/;
      if (!phoneRegex.test(momoNumber.replace(/\s/g, ''))) {
        toast.error("Please enter a valid Ugandan phone number");
        return;
      }
      
      // Simulate payment processing
      toast.info("Processing payment...");
      
      // Simulate payment response (random success/failure for demo)
      setTimeout(() => {
        const isSuccessful = Math.random() > 0.2; // 80% success rate for demo
        
        if (isSuccessful) {
          setPaymentStatus("successful");
          toast.success(`Payment successful via ${paymentMethod === "mtn" ? "MTN MoMo" : "Airtel Money"}`);
          
          // Send notification after successful payment
          notificationService.sendNotification("Payment Successful", {
            body: `Your payment for ${serviceSpecific} service has been received.`,
            icon: "/icons/icon-192x192.png"
          });
        } else {
          setPaymentStatus("failed");
          toast.error(`Payment failed. Please try again or contact support.`);
        }
        
        setStep("confirm");
      }, 2000);
    } else if (step === "confirm") {
      // Submit the form
      setShowConfirmation(true);
      
      // Send booking confirmation notification
      notificationService.sendNotification("Booking Confirmed", {
        body: `Your ${serviceSpecific} service is scheduled for ${date ? format(date, "PPP") : ""} at ${time}.`,
        icon: "/icons/icon-192x192.png"
      });
    }
  };

  const prevStep = () => {
    if (step === "details") setStep("service");
    else if (step === "schedule") setStep("details");
    else if (step === "payment") setStep("schedule");
    else if (step === "confirm") setStep("payment");
  };

  const cleaningOptions = [
    "Home Cleaning",
    "Office Cleaning",
    "Deep Cleaning",
    "Post-Construction"
  ];

  const laundryOptions = [
    "Regular Washing",
    "Dry Cleaning",
    "Ironing",
    "Pickup & Delivery"
  ];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM"
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      {!showConfirmation ? (
        <>
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between">
              {["service", "details", "schedule", "payment", "confirm"].map((s, i) => (
                <div
                  key={s}
                  className="flex flex-col items-center relative"
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors",
                      s === step
                        ? "bg-sunflower-500 text-white"
                        : ["service", "details", "schedule", "payment", "confirm"].indexOf(step) >= i
                        ? "bg-ecogreen-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    )}
                  >
                    {i + 1}
                  </div>
                  <span
                    className={cn(
                      "text-sm text-center",
                      s === step
                        ? "text-sunflower-500 font-medium"
                        : ["service", "details", "schedule", "payment", "confirm"].indexOf(step) >= i
                        ? "text-ecogreen-500"
                        : "text-gray-500"
                    )}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </span>
                  {i < 4 && (
                    <div
                      className={cn(
                        "absolute top-5 left-[calc(100%_-_10px)] w-[calc(100%_-_20px)] h-[2px]",
                        ["service", "details", "schedule", "payment", "confirm"].indexOf(step) > i
                          ? "bg-ecogreen-500"
                          : "bg-gray-200"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Service Selection */}
          {step === "service" && (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Select Service Type</h3>
                <RadioGroup
                  value={serviceType}
                  onValueChange={(value) => setServiceType(value as "cleaning" | "laundry")}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className={cn(
                    "flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all",
                    serviceType === "cleaning" ? "border-sunflower-500 bg-sunflower-50" : "border-gray-200"
                  )}>
                    <RadioGroupItem value="cleaning" id="cleaning" />
                    <Label htmlFor="cleaning" className="flex-1 cursor-pointer">
                      <span className="font-medium">Cleaning Services</span>
                      <p className="text-sm text-gray-500">
                        Home, office, and specialized cleaning services
                      </p>
                    </Label>
                  </div>
                  <div className={cn(
                    "flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all",
                    serviceType === "laundry" ? "border-sunflower-500 bg-sunflower-50" : "border-gray-200"
                  )}>
                    <RadioGroupItem value="laundry" id="laundry" />
                    <Label htmlFor="laundry" className="flex-1 cursor-pointer">
                      <span className="font-medium">Laundry Services</span>
                      <p className="text-sm text-gray-500">
                        Washing, dry cleaning, and ironing services
                      </p>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {serviceType && (
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Select Service</h3>
                  <RadioGroup
                    value={serviceSpecific}
                    onValueChange={setServiceSpecific}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {(serviceType === "cleaning" ? cleaningOptions : laundryOptions).map((option) => (
                      <div
                        key={option}
                        className={cn(
                          "flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all",
                          serviceSpecific === option ? "border-sunflower-500 bg-sunflower-50" : "border-gray-200"
                        )}
                      >
                        <RadioGroupItem value={option} id={option.replace(/\s+/g, '-').toLowerCase()} />
                        <Label
                          htmlFor={option.replace(/\s+/g, '-').toLowerCase()}
                          className="flex-1 cursor-pointer"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              <div className="pt-4">
                <Button onClick={nextStep} className="w-full">
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Customer Details */}
          {step === "details" && (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Your Details</h3>
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
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+256 700 123 456"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location (District/Area)</Label>
                    <Input
                      id="location"
                      placeholder="e.g., Kampala, Wakiso, Mukono"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Detailed Address</Label>
                    <Input
                      id="address"
                      placeholder="Street name, building, landmark, etc."
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button variant="outline" onClick={prevStep} className="flex-1">
                  Back
                </Button>
                <Button onClick={nextStep} className="flex-1">
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Schedule */}
          {step === "schedule" && (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Choose Date & Time</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Service Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => date < new Date() || date.getDay() === 0} // Disable past dates and Sundays
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Service Time</Label>
                    <RadioGroup
                      value={time}
                      onValueChange={setTime}
                      className="grid grid-cols-3 gap-2"
                    >
                      {timeSlots.map((slot) => (
                        <div key={slot} className="flex items-center space-x-1">
                          <RadioGroupItem value={slot} id={slot.replace(/\s+|:/g, '')} />
                          <Label
                            htmlFor={slot.replace(/\s+|:/g, '')}
                            className="text-sm cursor-pointer"
                          >
                            {slot}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Special Instructions (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Any specific instructions or requirements..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button variant="outline" onClick={prevStep} className="flex-1">
                  Back
                </Button>
                <Button onClick={nextStep} className="flex-1">
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
          {step === "payment" && (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Payment Information</h3>
                <div className="py-2 px-4 bg-gray-50 rounded-md">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> This is a demo payment system. No actual charges will be made.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Select Payment Method</h4>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={(value) => setPaymentMethod(value as "mtn" | "airtel")}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className={cn(
                      "flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all",
                      paymentMethod === "mtn" ? "border-yellow-500 bg-yellow-50" : "border-gray-200"
                    )}>
                      <RadioGroupItem value="mtn" id="mtn" />
                      <Label htmlFor="mtn" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 flex items-center justify-center bg-yellow-500 text-white rounded-full">
                            <Phone className="w-4 h-4" />
                          </div>
                          <span className="font-medium">MTN Mobile Money</span>
                        </div>
                      </Label>
                    </div>
                    <div className={cn(
                      "flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all",
                      paymentMethod === "airtel" ? "border-red-500 bg-red-50" : "border-gray-200"
                    )}>
                      <RadioGroupItem value="airtel" id="airtel" />
                      <Label htmlFor="airtel" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full">
                            <Phone className="w-4 h-4" />
                          </div>
                          <span className="font-medium">Airtel Money</span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {paymentMethod && (
                  <div className="space-y-2">
                    <Label htmlFor="momoNumber">
                      {paymentMethod === "mtn" ? "MTN MoMo Number" : "Airtel Money Number"}
                    </Label>
                    <Input
                      id="momoNumber"
                      placeholder="07xx xxx xxx"
                      value={momoNumber}
                      onChange={(e) => setMomoNumber(e.target.value)}
                      className={cn(
                        paymentMethod === "mtn" ? "border-yellow-500 focus-visible:ring-yellow-500" : 
                        paymentMethod === "airtel" ? "border-red-500 focus-visible:ring-red-500" : ""
                      )}
                    />
                    <p className="text-sm text-gray-500">
                      Enter the number registered with your {paymentMethod === "mtn" ? "MTN MoMo" : "Airtel Money"} account
                    </p>
                  </div>
                )}

                <div className="bg-gray-50 p-4 rounded-lg space-y-2 mt-4">
                  <h4 className="font-medium">Payment Summary</h4>
                  <div className="flex justify-between items-center">
                    <span>{serviceSpecific}</span>
                    <span>UGX {serviceType === "cleaning" ? "75,000" : "45,000"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Service Fee</span>
                    <span>UGX 5,000</span>
                  </div>
                  <div className="border-t pt-2 mt-2 flex justify-between items-center font-medium">
                    <span>Total</span>
                    <span>UGX {serviceType === "cleaning" ? "80,000" : "50,000"}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button variant="outline" onClick={prevStep} className="flex-1">
                  Back
                </Button>
                <Button onClick={nextStep} className="flex-1">
                  Pay Now
                </Button>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {step === "confirm" && (
            <div className="space-y-6">
              {paymentStatus === "successful" ? (
                <Alert className="border-green-500 bg-green-50">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <AlertTitle>Payment Successful</AlertTitle>
                  <AlertDescription>
                    Your payment has been processed successfully via {paymentMethod === "mtn" ? "MTN MoMo" : "Airtel Money"}.
                  </AlertDescription>
                </Alert>
              ) : paymentStatus === "failed" ? (
                <Alert className="border-red-500 bg-red-50">
                  <CreditCard className="h-4 w-4 text-red-500" />
                  <AlertTitle>Payment Failed</AlertTitle>
                  <AlertDescription>
                    Your payment could not be processed. You can try again or pay upon service delivery.
                  </AlertDescription>
                </Alert>
              ) : null}

              <div className="border rounded-lg p-6 space-y-6">
                <h3 className="text-xl font-medium border-b pb-2">Booking Summary</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Service Type</p>
                      <p className="font-medium">{serviceSpecific}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Customer Name</p>
                      <p className="font-medium">{name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Contact Information</p>
                      <p className="font-medium">{email}</p>
                      <p className="font-medium">{phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Service Location</p>
                      <p className="font-medium">{location}</p>
                      <p className="font-medium">{address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date & Time</p>
                      <p className="font-medium">
                        {date ? format(date, "PPP") : ""} at {time}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Payment Method</p>
                      <p className="font-medium">
                        {paymentMethod === "mtn" ? "MTN Mobile Money" : "Airtel Money"}
                      </p>
                      <p className="text-sm text-gray-500">
                        Status: <span className={paymentStatus === "successful" ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                          {paymentStatus === "successful" ? "Paid" : "Payment Failed"}
                        </span>
                      </p>
                    </div>
                    {notes && (
                      <div className="md:col-span-2">
                        <p className="text-sm text-gray-500">Special Instructions</p>
                        <p className="font-medium">{notes}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-6">
                <p className="text-sm text-gray-600">
                  By confirming this booking, you agree to our 
                  <a href="/terms" className="text-sunflower-600 hover:underline mx-1">
                    Terms of Service
                  </a>
                  and
                  <a href="/privacy" className="text-sunflower-600 hover:underline mx-1">
                    Privacy Policy
                  </a>.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <Button variant="outline" onClick={prevStep} className="flex-1">
                  Back
                </Button>
                <Button onClick={nextStep} className="flex-1">
                  Confirm Booking
                </Button>
              </div>
            </div>
          )}
        </>
      ) : (
        // Confirmation Success Screen
        <div className="text-center py-10 px-4 space-y-6 bg-white rounded-lg shadow-md border border-gray-100">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-ecogreen-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-ecogreen-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Thank you for booking with Sunflower Cleaning & Laundry Services. 
            We'll be at {location}, {address} on {date ? format(date, "PPP") : ""} at {time}.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg max-w-md mx-auto">
            <p className="text-sm font-medium">Confirmation Details:</p>
            <p className="text-sm text-gray-600">
              Service: {serviceSpecific}<br />
              Payment: <span className={paymentStatus === "successful" ? "text-green-600" : "text-red-600"}>
                {paymentStatus === "successful" ? "Paid via " : "Payment pending - "}
                {paymentMethod === "mtn" ? "MTN MoMo" : "Airtel Money"}
              </span><br />
              Booking Reference: SF{Math.floor(100000 + Math.random() * 900000)}
            </p>
          </div>
          <p className="text-sm text-gray-500">
            A confirmation email has been sent to {email}
          </p>
          <div className="pt-4">
            <Button asChild>
              <a href="/">Back to Homepage</a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSteps;
