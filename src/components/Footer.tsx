import { Terminal, Globe, Code, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <Terminal size={24} className="text-primary" />
          <span className="font-bold">Portfolio &copy; {new Date().getFullYear()}</span>
        </div>
        
        <div className="footer-socials">
          <a href="#" className="social-link" aria-label="Website">
            <Globe size={24} />
          </a>
          <a href="https://github.com/ankushjha-aj" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <Code size={24} />
          </a>
          <a href="mailto:jhaankushcpp@gmail.com" className="social-link" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
        
        <p className="footer-moto">Designed with focus on quality and performance.</p>
      </div>
    </footer>
  );
}
