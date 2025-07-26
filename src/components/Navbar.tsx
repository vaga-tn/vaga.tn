'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function VagaNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-black py-2 px-4">
      <div className="flex justify-between items-center ">
        <div className='flex items-center space-x-8'>
          <Link href="/" className="flex items-center space-x-1">
            <Image src={'/logo.png'} alt='logo' width={16} height={16} className='invert'></Image>
            <span className="text-2xl font-bold text-black">VAGA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => scrollToSection('features')}
              className="text-black hover:text-gray-600 transition-colors text-sm"
            >
              Fonctionnalités
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-black hover:text-gray-600 transition-colors text-sm"
            >
              Tarifs
            </button>
            <Link
              href="/contact"
              className="text-black hover:text-gray-600 transition-colors text-sm"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="https://cloud.vaga.tn"
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors font-medium"
        >
          se connecter
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black p-2"
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
              className="text-black hover:text-gray-600 transition-colors py-2 text-left"
            >
              Fonctionnalités
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-black hover:text-gray-600 transition-colors py-2 text-left"
            >
              Tarifs
            </button>
            <Link
              href="/contact"
              className="text-black hover:text-gray-600 transition-colors py-2 text-left"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}