'use client';

import React from 'react';
import Link from 'next/link';
import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white block mb-6">
              JOINTASK <span className="font-light text-slate-400 italic">INDEPENDENT</span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
              A premium executive search and talent specialization firm. We represent the top 1% of impact talent for high-growth companies across the United States and globally.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Firm</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Ethos</Link></li>
              <li><Link href="/process" className="hover:text-white transition-colors">Methodology</Link></li>
              <li><Link href="/success" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">Executive Search</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Confidential Hiring</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Market Intelligence</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Direct Inquiry</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-slate-500">
          <p>&copy; {new Date().getFullYear()} Jointask Independent. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Engagement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
