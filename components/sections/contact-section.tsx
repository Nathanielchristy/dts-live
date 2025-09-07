"use client"

import type React from "react"

import { MapPin, Mail, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "@/components/ui/motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });
  const [emailError, setEmailError] = useState("");

  const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailError(emailRegex.test(value) ? "" : "Invalid email address");
    }
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('We\'re on it! 👨‍💻Our Customer service representative will contact you shortly.\n Thank you for your patience ✨ ');
      setFormData({ firstname: '',lastname: '', email: '', phone: '', message: '' });
    } else {
      setStatus('Failed to send message. Try again later or Call +971 📞 04 4599804');
    }
  };
  return (
    <section id="contact" ref={ref} className="w-full py-20 md:py-32 bg-secondary/5 relative overflow-hidden">
      {/* Decorative elements inspired by logo */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 0.05, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="absolute left-0 top-0 w-64 h-64 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2"
      />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 0.1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute right-20 bottom-20 w-0 h-0 border-l-[40px] border-l-transparent border-b-[69.3px] border-b-primary border-r-[40px] border-r-transparent"
      />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Work Together</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ready to transform your space? Get in touch with our team to discuss your project.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-8 lg:grid-cols-2">
          <motion.div
            className="flex flex-col gap-6 p-6 rounded-lg bg-background shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Triangle accent inspired by logo */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/5 rotate-45"></div>

            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="rounded-full bg-primary/10 p-2">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Location</h3>
                <p className="text-muted-foreground">
                  X4MH+RWX - Mina Jebel Ali, Jabal Ali Industrial First, Dubai - United Arab Emirates
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="rounded-full bg-primary/10 p-2">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-muted-foreground">project@datestech.com</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="rounded-full bg-primary/10 p-2">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p className="text-muted-foreground">+971 04 4599804</p>
              </div>
            </motion.div>

            <motion.div
              className="mt-6 h-40 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.7234567890123!2d55.0123456789!3d25.0123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe9746d585de04d4a!2sDates%20Technical%20Services%20LLC!5e0!3m2!1sen!2sus!4v1621436610749!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Map of Dates Technical Services LLC, Jabal Ali Industrial First, Dubai"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="rounded-lg border bg-card p-6 shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Triangle accent inspired by logo */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rotate-45"></div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                    placeholder="John"
                    required
                  />
                </motion.div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                    placeholder="Doe"
                    required
                  />
                </motion.div>
              </div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                  placeholder="john.doe@example.com"
                  required
                />
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.85 }}
              >
                <label
                  htmlFor="phone"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                  placeholder="+971 50 123 4567"
                  required
                />
</motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                  placeholder="Tell us about your project..."
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Button
                  type="submit"
                  className="w-full group bg-primary hover:bg-primary/90 transition-all duration-300"
                >
                  <span>Send Message</span>
                  <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                {status && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className={`mt-4 text-sm px-4 py-3 rounded-md border ${
      status.toLowerCase().includes("fail") || status.toLowerCase().includes("error")
        ? "bg-red-100 text-red-700 border-red-300"
        : "bg-green-100 text-green-700 border-green-300"
    }`}
  >
    {status}
  </motion.div>
)}
              </motion.div>
            </form>
                        {/* Contact Methods */}
            <motion.div
              className="mt-8 pt-6 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <h4 className="font-semibold mb-4 text-center">Prefer to contact us directly?</h4>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:bg-primary/10 border-primary/30 bg-transparent"
                >
                  <a href="mailto:datestechnical@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Us
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:bg-primary/10 border-primary/30 bg-transparent"
                >
                  <a href="tel:+97144599804">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
