import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 mt-auto transition-colors relative z-10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-slate-800 dark:text-white">
              Ankush Kumar Jha — <span className="text-primary">DevOps Engineer</span>
            </span>
          </div>
          <div className="flex gap-3">
            <a href="https://github.com/ankushjha-aj" target="_blank" className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-primary hover:text-white transition-colors">
              <Github size={14} />
            </a>
            <a href="https://www.linkedin.com/in/jhaankush" target="_blank" className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-primary hover:text-white transition-colors">
              <Linkedin size={14} />
            </a>
            <a href="mailto:jhaankushcpp@gmail.com" className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-primary hover:text-white transition-colors">
              <Mail size={14} />
            </a>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
