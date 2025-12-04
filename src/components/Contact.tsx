import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Twitter,
  Download,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Github, href: "https://github.com/janzeerathnan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/janzeerathnan", label: "LinkedIn" },
  { icon: Mail, href: "mailto:adnanrao2002@gmail.com", label: "Email" }
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "c16d8ea3-b20b-473d-9681-8ada85900a71");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      // Send to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      setIsSubmitting(false);

      if (data.success) {
        setIsSuccess(true);

        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });

        // Reset form after animation
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      } else {
        throw new Error(data.message || "Form submission failed");
      }
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or email directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-muted/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-muted/20 rounded-full blur-3xl"
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div ref={ref}>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass rounded-3xl p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex flex-col items-center justify-center py-12 relative"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.5 }}
                        className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4"
                      >
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground text-center">
                        Thanks for reaching out. I'll get back to you soon.
                      </p>
                      
                      {/* Confetti particles */}
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{
                            opacity: 1,
                            scale: 0,
                            x: 0,
                            y: 0,
                          }}
                          animate={{
                            opacity: 0,
                            scale: 1,
                            x: (Math.random() - 0.5) * 200,
                            y: (Math.random() - 0.5) * 200,
                          }}
                          transition={{ duration: 1, delay: i * 0.05 }}
                          className="absolute w-2 h-2 rounded-full bg-primary"
                        />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Name field */}
                      <div className="relative">
                        <motion.label
                          animate={{
                            y: focusedField === "name" || formData.name ? -24 : 0,
                            scale: focusedField === "name" || formData.name ? 0.85 : 1,
                            color:
                              focusedField === "name"
                                ? "hsl(199 89% 48%)"
                                : "hsl(215 20% 65%)",
                          }}
                          className="absolute left-4 top-3 text-sm pointer-events-none origin-left"
                        >
                          Your Name
                        </motion.label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="h-12 bg-muted/50 border-border/50 rounded-xl focus:border-primary focus:ring-primary"
                        />
                      </div>

                      {/* Email field */}
                      <div className="relative">
                        <motion.label
                          animate={{
                            y: focusedField === "email" || formData.email ? -24 : 0,
                            scale: focusedField === "email" || formData.email ? 0.85 : 1,
                            color:
                              focusedField === "email"
                                ? "hsl(199 89% 48%)"
                                : "hsl(215 20% 65%)",
                          }}
                          className="absolute left-4 top-3 text-sm pointer-events-none origin-left"
                        >
                          Your Email
                        </motion.label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="h-12 bg-muted/50 border-border/50 rounded-xl focus:border-primary focus:ring-primary"
                        />
                      </div>

                      {/* Message field */}
                      <div className="relative">
                        <motion.label
                          animate={{
                            y: focusedField === "message" || formData.message ? -24 : 0,
                            scale:
                              focusedField === "message" || formData.message ? 0.85 : 1,
                            color:
                              focusedField === "message"
                                ? "hsl(199 89% 48%)"
                                : "hsl(215 20% 65%)",
                          }}
                          className="absolute left-4 top-3 text-sm pointer-events-none origin-left"
                        >
                          Your Message
                        </motion.label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows={5}
                          className="bg-muted/50 border-border/50 rounded-xl focus:border-primary focus:ring-primary resize-none"
                        />
                      </div>

                      {/* Submit button */}
                      <Button
                        type="submit"
                        variant="neon"
                        size="lg"
                        className="w-full rounded-xl"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles className="w-5 h-5" />
                          </motion.div>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                    Let's work together
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your visions. Feel free to
                    reach out through the form or connect with me on social media.
                  </p>
                </div>

                {/* Social links */}
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                    Connect with me
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          whileHover={{ y: -4 }}
                          className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                          aria-label={social.label}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* Download CV */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                ><a href="../public/Athnan_Janzeer_Resume..pdf">
                
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-xl group"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download CV
                  </Button>
                  </a>
                </motion.div>

                {/* Availability status */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                  />
                  <span className="text-muted-foreground">
                    Currently available for freelance projects
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;