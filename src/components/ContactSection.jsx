import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { FaTelegramPlane } from 'react-icons/fa';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "This feature is not implemented yet.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
      <section id="contact" className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-10">
              <h3 className="text-2xl font-semibold text-center md:text-left">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <a
                      href="mailto:vengsrun2019kh@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vengsrun2019kh@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <a
                        href="tel:+85586252502"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +855 86 252 502
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground">Phnom Penh, Cambodia</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-medium mb-4 text-center md:text-left">Connect With Me</h4>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="https://www.linkedin.com/in/veng-srun/" target="_blank" className="hover:text-primary">
                    <Linkedin />
                  </a>
                  <a href="https://t.me/srunveng" target="_blank" className="hover:text-primary">
                    <FaTelegramPlane size={24}/>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <h3 className="text-2xl font-semibold text-center mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-start">
                    Your Name
                  </label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Pedro Machado..."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-start">
                    Your Email
                  </label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-start">
                    Your Message
                  </label>
                  <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Hello, I'd like to talk about..."
                      rows={5}
                  />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                        "w-full flex items-center justify-center gap-2 py-3 text-white font-medium rounded-xl bg-primary hover:bg-primary/90 transition"
                    )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};