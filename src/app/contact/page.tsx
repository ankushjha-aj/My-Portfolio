"use client";

import { Mail, MapPin, Share2, Code, Users2, FileText, SendHorizontal, Phone } from 'lucide-react';
import './contact.css';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Intended for future API integration (e.g. Resend, EmailJS)
    alert("Message recorded. I'll get back to you shortly!");
  };

  return (
    <div className="contact-container section-padding">
      <div className="contact-grid">
        
        {/* Info Column */}
        <div className="contact-info animate-slide-up">
          <div className="contact-header">
            <h1 className="contact-title">Let's talk <br/><span className="text-primary">systems</span>.</h1>
            <p className="contact-desc">
              Whether you're looking for cloud architecture design, CI/CD automation, or full-time DevOps engineering support, I'm ready to collaborate.
            </p>
          </div>
          
          <div className="contact-methods">
            <div className="method-item group">
               <div className="method-icon-wrapper">
                 <Mail size={24} />
               </div>
               <div>
                 <p className="method-label">Email</p>
                 <a href="mailto:jhaankushcpp@gmail.com" className="method-value">
                   jhaankushcpp@gmail.com
                 </a>
               </div>
            </div>

            <div className="method-item group">
               <div className="method-icon-wrapper">
                 <Phone size={24} />
               </div>
               <div>
                 <p className="method-label">Phone</p>
                 <a href="tel:+918178199774" className="method-value">
                   +91 8178199774
                 </a>
               </div>
            </div>
            
            <div className="method-item group">
               <div className="method-icon-wrapper">
                 <MapPin size={24} />
               </div>
               <div>
                 <p className="method-label">Location</p>
                 <p className="method-value text-[var(--text-color)]">Delhi, India</p>
               </div>
            </div>
          </div>
          
          <div className="social-section">
            <p className="social-label">Connect Directly</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/jhaankush" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn">
                <Share2 size={24} />
              </a>
              <a href="https://github.com/ankushjha-aj" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="GitHub">
                <Code size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-wrapper animate-slide-up delay-100">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group flex-col md:flex-row gap-4">
               <div className="w-full">
                 <label className="form-label">Full Name</label>
                 <input type="text" className="form-input w-full" placeholder="John Doe" required />
               </div>
               <div className="w-full">
                 <label className="form-label">Email Address</label>
                 <input type="email" className="form-input w-full" placeholder="john@company.com" required />
               </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Inquiry Type</label>
              <select className="form-input form-select w-full">
                <option>Cloud Infrastructure Review</option>
                <option>CI/CD Pipeline Setup</option>
                <option>Full-time Role Opportunity</option>
                <option>General Networking</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Message Details</label>
              <textarea 
                className="form-input form-textarea w-full" 
                rows={5} 
                placeholder="Briefly describe your requirements or the role you are hiring for..." 
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary w-full mt-2 justify-center py-4">
              <span>Send Secure Message</span>
              <SendHorizontal size={20} className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
