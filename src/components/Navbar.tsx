'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VagaNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTrialClick = () => {
    console.log('Trial started');
    // Add your trial logic here
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">V</span>
            </div>
            <span className="text-2xl font-bold text-white">VAGA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Fonctionnalités
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Tarifs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleTrialClick}
            className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Essai Gratuit
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('features')}
                className="text-white hover:text-gray-300 transition-colors py-2 text-left"
              >
                Fonctionnalités
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-white hover:text-gray-300 transition-colors py-2 text-left"
              >
                Tarifs
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-gray-300 transition-colors py-2 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}