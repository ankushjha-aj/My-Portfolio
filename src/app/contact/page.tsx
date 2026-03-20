"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Github, Linkedin, Phone, MessageSquare, CheckCircle, X } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = {
      first_name: (form.elements.namedItem("first_name") as HTMLInputElement)?.value,
      last_name: (form.elements.namedItem("last_name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      inquiry_type: (form.elements.namedItem("inquiry_type") as HTMLSelectElement)?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
    };
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {}
    setSending(false);
    setSubmitted(true);
    form.reset();
  };

  return (
    <div className="w-full relative z-10">
      {/* Header */}
      <div className="bg-slate-900 py-8 w-full border-b border-primary/20">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            Let's <span className="text-primary">Connect</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Looking for DevOps consulting, cloud architecture, or engineering roles? Send me a message.
          </p>
        </div>
      </div>

      <section className="py-10 bg-slate-50/80 dark:bg-slate-900/80">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-6 bg-white dark:bg-slate-800 rounded-custom shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden -mt-8 relative z-20">

            {/* Form */}
            <div className="lg:col-span-3 p-6 md:p-8">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                <MessageSquare className="text-primary" size={18} /> Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first_name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">First Name</label>
                    <input type="text" id="first_name" name="first_name" required
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-custom focus:outline-none focus:ring-2 focus:ring-primary text-sm text-slate-900 dark:text-white placeholder-slate-400"
                      placeholder="Jane" />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
                    <input type="text" id="last_name" name="last_name"
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-custom focus:outline-none focus:ring-2 focus:ring-primary text-sm text-slate-900 dark:text-white placeholder-slate-400"
                      placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email *</label>
                  <input type="email" id="email" name="email" required
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-custom focus:outline-none focus:ring-2 focus:ring-primary text-sm text-slate-900 dark:text-white placeholder-slate-400"
                    placeholder="jane@company.com" />
                </div>
                <div>
                  <label htmlFor="inquiry_type" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Inquiry Type</label>
                  <select id="inquiry_type" name="inquiry_type"
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-custom focus:outline-none focus:ring-2 focus:ring-primary text-sm text-slate-900 dark:text-white">
                    <option>Infrastructure Consulting</option>
                    <option>Full-time Role</option>
                    <option>Open Source Collaboration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Message *</label>
                  <textarea id="message" name="message" rows={4} required
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-custom focus:outline-none focus:ring-2 focus:ring-primary text-sm text-slate-900 dark:text-white resize-none placeholder-slate-400"
                    placeholder="Describe your requirements..." />
                </div>
                <button type="submit" disabled={sending}
                  className="w-full py-3 bg-primary text-white text-sm font-bold rounded-custom hover:bg-[#0ebebe] transition-colors shadow-lg shadow-primary/20 disabled:opacity-50">
                  {sending ? "Sending..." : "Submit Request"}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 bg-slate-900 text-white p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
                <div className="space-y-5">
                  <div className="flex gap-3 items-start">
                    <div className="w-10 h-10 bg-slate-800 rounded-custom flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-0.5">Email</h4>
                      <a href="mailto:jhaankushcpp@gmail.com" className="text-primary text-xs hover:underline font-mono">jhaankushcpp@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-10 h-10 bg-slate-800 rounded-custom flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-0.5">Phone</h4>
                      <a href="tel:+918178199774" className="text-primary text-xs hover:underline font-mono">+91 8178199774</a>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-10 h-10 bg-slate-800 rounded-custom flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-0.5">Location</h4>
                      <p className="text-slate-400 text-xs">Delhi, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Social</h4>
                <div className="flex gap-2">
                  <a href="https://www.linkedin.com/in/jhaankush" target="_blank" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-slate-400 hover:text-white"><Linkedin size={14}/></a>
                  <a href="https://github.com/ankushjha-aj" target="_blank" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-slate-400 hover:text-white"><Github size={14}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setSubmitted(false)}>
          <div className="bg-white dark:bg-slate-800 rounded-custom shadow-2xl p-8 max-w-sm mx-4 text-center animate-fadeInUp" onClick={(e) => e.stopPropagation()}>
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-emerald-500" size={28} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
              Thank you for reaching out. Your message has been saved and I'll get back to you shortly.
            </p>
            <button onClick={() => setSubmitted(false)}
              className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-custom hover:opacity-90 transition-opacity">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
