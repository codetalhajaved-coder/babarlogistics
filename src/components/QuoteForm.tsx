import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { MessageCircle, Mail, Send, Check, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().max(100).optional(),
  phone: z.string().min(10, "Please enter a valid phone number").max(20),
  email: z.string().email("Please enter a valid email").max(255),
  preferredContact: z.string(),
  weight: z.string().optional(),
  length: z.string().optional(),
  width: z.string().optional(),
  height: z.string().optional(),
  quantity: z.string().optional(),
  description: z.string().max(500).optional(),
  value: z.string().optional(),
  pickupAddress: z.string().min(5, "Please enter pickup address").max(300),
  deliveryAddress: z.string().min(5, "Please enter delivery address").max(300),
  pickupDate: z.string().optional(),
  pickupTime: z.string().optional(),
  serviceType: z.string(),
  instructions: z.string().max(500).optional(),
  promoCode: z.string().max(20).optional(),
});

type FormData = z.infer<typeof formSchema>;

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      preferredContact: "whatsapp",
      serviceType: "standard",
    },
  });

  const generateMessage = (data: FormData) => {
    return `
📦 NEW DELIVERY QUOTE REQUEST

👤 Customer Details:
• Name: ${data.name}
• Company: ${data.company || "N/A"}
• Phone: ${data.phone}
• Email: ${data.email}
• Preferred Contact: ${data.preferredContact}

📐 Shipment Details:
• Weight: ${data.weight || "N/A"} kg
• Dimensions: ${data.length || "-"} × ${data.width || "-"} × ${data.height || "-"} m
• Quantity: ${data.quantity || "1"}
• Description: ${data.description || "N/A"}
• Declared Value: ${data.value || "N/A"} SAR

📍 Addresses:
• Pickup: ${data.pickupAddress}
• Delivery: ${data.deliveryAddress}
• Pickup Date: ${data.pickupDate || "ASAP"}
• Pickup Time: ${data.pickupTime || "Flexible"}

🚚 Service: ${data.serviceType}

📝 Special Instructions:
${data.instructions || "None"}

🎟️ Promo Code: ${data.promoCode || "None"}
    `.trim();
  };

  const handleWhatsApp = () => {
    const data = getValues();
    const message = encodeURIComponent(generateMessage(data));
    window.open(`https://wa.me/966539662194?text=${message}`, "_blank");
    toast({
      title: "Opening WhatsApp",
      description: "Your quote request will be sent via WhatsApp.",
    });
  };

  const handleEmail = () => {
    const data = getValues();
    const subject = encodeURIComponent(`Delivery Quote Request - ${data.name}`);
    const body = encodeURIComponent(generateMessage(data));
    window.location.href = `mailto:info@babarlogistics.com?subject=${subject}&body=${body}`;
    toast({
      title: "Opening Email",
      description: "Your quote request will be sent via email.",
    });
  };

  const handleTelegram = () => {
    const data = getValues();
    const message = encodeURIComponent(generateMessage(data));
    window.open(`https://t.me/share/url?url=&text=${message}`, "_blank");
    toast({
      title: "Opening Telegram",
      description: "Share your quote request via Telegram.",
    });
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate submission - in production, this would go to a backend
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you shortly with a detailed quote.",
    });
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-2xl shadow-card p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Quote Request Sent!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for your request. Our team will contact you within 30 minutes with a detailed quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://wa.me/966539662194" target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" className="w-full sm:w-auto gap-2">
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </a>
          <Button variant="outline" onClick={() => setSubmitted(false)}>
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-card rounded-2xl shadow-card p-6 md:p-8 space-y-6">
      {/* Customer Details */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">1</span>
          Customer Details
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" {...register("name")} className="mt-1" placeholder="Your name" />
            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="company">Company (Optional)</Label>
            <Input id="company" {...register("company")} className="mt-1" placeholder="Company name" />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" {...register("phone")} className="mt-1" placeholder="+966 5XX XXX XXXX" />
            {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" {...register("email")} className="mt-1" placeholder="you@example.com" />
            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="sm:col-span-2">
            <Label>Preferred Contact Method</Label>
            <Select defaultValue="whatsapp" onValueChange={(v) => setValue("preferredContact", v)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="whatsapp">WhatsApp</SelectItem>
                <SelectItem value="phone">Phone Call</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="telegram">Telegram</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Shipment Details */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">2</span>
          Shipment Details
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input id="weight" type="number" {...register("weight")} className="mt-1" placeholder="0" />
          </div>
          <div>
            <Label htmlFor="length">Length (m)</Label>
            <Input id="length" type="number" step="0.01" {...register("length")} className="mt-1" placeholder="0" />
          </div>
          <div>
            <Label htmlFor="width">Width (m)</Label>
            <Input id="width" type="number" step="0.01" {...register("width")} className="mt-1" placeholder="0" />
          </div>
          <div>
            <Label htmlFor="height">Height (m)</Label>
            <Input id="height" type="number" step="0.01" {...register("height")} className="mt-1" placeholder="0" />
          </div>
          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <Input id="quantity" type="number" {...register("quantity")} className="mt-1" placeholder="1" />
          </div>
          <div>
            <Label htmlFor="value">Declared Value (SAR)</Label>
            <Input id="value" type="number" {...register("value")} className="mt-1" placeholder="For insurance" />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="description">Item Description</Label>
            <Input id="description" {...register("description")} className="mt-1" placeholder="Documents, parcels, etc." />
          </div>
        </div>
      </div>

      {/* Addresses */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">3</span>
          Pickup & Delivery
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <Label htmlFor="pickupAddress">Pickup Address *</Label>
            <Textarea id="pickupAddress" {...register("pickupAddress")} className="mt-1" placeholder="Full pickup address in Riyadh" />
            {errors.pickupAddress && <p className="text-destructive text-sm mt-1">{errors.pickupAddress.message}</p>}
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="deliveryAddress">Delivery Address *</Label>
            <Textarea id="deliveryAddress" {...register("deliveryAddress")} className="mt-1" placeholder="Full delivery address" />
            {errors.deliveryAddress && <p className="text-destructive text-sm mt-1">{errors.deliveryAddress.message}</p>}
          </div>
          <div>
            <Label htmlFor="pickupDate">Preferred Pickup Date</Label>
            <Input id="pickupDate" type="date" {...register("pickupDate")} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="pickupTime">Preferred Pickup Time</Label>
            <Input id="pickupTime" type="time" {...register("pickupTime")} className="mt-1" />
          </div>
          <div className="sm:col-span-2">
            <Label>Service Type</Label>
            <Select defaultValue="standard" onValueChange={(v) => setValue("serviceType", v)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard (1-2 days)</SelectItem>
                <SelectItem value="express">Express (Same day)</SelectItem>
                <SelectItem value="urgent">Urgent (Within hours)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Additional */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">4</span>
          Additional Information
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <Label htmlFor="instructions">Special Instructions</Label>
            <Textarea id="instructions" {...register("instructions")} className="mt-1" placeholder="Any special handling requirements..." />
          </div>
          <div>
            <Label htmlFor="promoCode">Promo Code</Label>
            <Input id="promoCode" {...register("promoCode")} className="mt-1" placeholder="Enter code" />
          </div>
        </div>
      </div>

      {/* Submit Options */}
      <div className="border-t border-border pt-6">
        <p className="text-sm text-muted-foreground mb-4 text-center">Choose how to send your quote request:</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Button type="button" variant="whatsapp" className="gap-2" onClick={handleWhatsApp}>
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
          <Button type="button" variant="email" className="gap-2" onClick={handleEmail}>
            <Mail className="h-4 w-4" />
            Email
          </Button>
          <Button type="button" variant="telegram" className="gap-2" onClick={handleTelegram}>
            <Send className="h-4 w-4" />
            Telegram
          </Button>
          <Button type="submit" variant="hero" className="gap-2" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Check className="h-4 w-4" />
                Submit
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default QuoteForm;
