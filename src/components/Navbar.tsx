'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function VagaNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isEnterprisePage = pathname === '/enterprise';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const getNavItems = () => {
    if (isEnterprisePage) {
      return [
        { label: 'Fonctionnalités', action: () => scrollToSection('features') },
        { label: 'Témoignages', action: () => scrollToSection('testimonials') },
        { label: 'Comparaison', action: () => scrollToSection('comparison') },
        { label: 'Contact', href: '#contact', action: () => scrollToSection('contact') }
      ];
    } else {
      return [
        { label: 'Fonctionnalités', action: () => scrollToSection('features') },
        { label: 'Tarifs', action: () => scrollToSection('pricing') },
        { label: 'Contact', href: '/contact' }
      ];
    }
  };

  const navItems = getNavItems();

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-black/10 py-2 px-4">
      <div className="flex justify-between items-center ">
        <div className='flex items-center space-x-8'>
          <Link href="/" className="flex items-center space-x-1">
            <Image src={'/logo.png'} alt='logo' width={16} height={16} className='invert'></Image>
            <span className="text-2xl font-bold text-black">VAGA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item, index) => (
              item.href ? (
                <Link
                  key={index}
                  href={item.href}
                  className="text-black hover:text-gray-600 transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={item.action}
                  className="text-black hover:text-gray-600 transition-colors text-sm"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {/* Enterprise Link for main page */}
          {!isEnterprisePage && (
            <Link
              href="/enterprise"
              className="bg-white text-black lg:px-6 lg:py-2 p-2 lg:text-base text-sm hover:bg-black hover:text-white transition-colors font-medium border border-black"
            >
              Enterprise
            </Link>
          )}

          {/* Back to main page for enterprise page */}
          {isEnterprisePage && (
            <Link
              href="/"
              className="bg-white text-black lg:px-6 lg:py-2 p-2 lg:text-base text-sm hover:bg-black hover:text-white transition-colors font-medium border border-black"
            >
              Cloud
            </Link>
          )}

          {/* CTA Button */}
          <Link
            href="https://cloud.vaga.tn"
            className="bg-black text-white lg:px-6 lg:py-2 p-2 lg:text-base text-sm hover:bg-gray-800 transition-colors font-medium border border-black"
          >
            Commencer Gratuitement
          </Link>
        </div>

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
            {navItems.map((item, index) => (
              item.href ? (
                <Link
                  key={index}
                  href={item.href}
                  className="text-black hover:text-gray-600 transition-colors py-2 text-left"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={item.action}
                  className="text-black hover:text-gray-600 transition-colors py-2 text-left"
                >
                  {item.label}
                </button>
              )
            ))}

            {/* Enterprise Link for main page */}
            {!isEnterprisePage && (
              <Link
                href="/enterprise"
                className="text-black hover:text-gray-600 transition-colors py-2 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enterprise
              </Link>
            )}

            {/* Back to main page for enterprise page */}
            {isEnterprisePage && (
              <Link
                href="/"
                className="text-black hover:text-gray-600 transition-colors py-2 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}