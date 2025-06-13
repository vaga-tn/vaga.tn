import Link from 'next/link';
import React from 'react'

function Footer() {

    const SOCIALS = [
        {
            name: 'GitHub',
            href: 'https://github.com/aymkh',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/aymkh',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
            )
        },
        {
            name: 'Twitter',
            href: 'https://x.com/__aymkh',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
            )
        }
    ];

    return (
        <footer className='py-12 text-white bg-black'>
            <div className="mx-auto max-w-7xl space-y-8">
                <div className="grid grid-cols-3">
                    {/* Company Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold mb-4">MAAK CORP</h3>
                        <div className="flex flex-col gap-2 text-sm text-gray-300">
                            <p>Avenue Yasser Arafet, Sahloul 1</p>
                            <p>Sousse 4054</p>
                            <p>Immeuble N17 au 6eme etage, bureau 2</p>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <div className="flex flex-col gap-2 text-sm text-gray-300">
                            <p>Email: contact@maak-corp.tn | vaga@maak-corp.tn | aymekh@maak-corp.tn</p>
                            <p>Téléphone: +216 93 864 380 | +216 95 593 387</p>
                            <p>Matricule: 1847208/C/A/M/000</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
                        <div className="flex space-x-4">
                            {SOCIALS.map((item, index: number) => (
                                <a
                                    key={index}
                                    target="_blank"
                                    href={item.href}
                                    className="text-gray-300 hover:text-white transition-colors"
                                    aria-label={item.name}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8">
                    <p className="text-center text-sm text-gray-400">
                        © {new Date().getFullYear()} <Link href={'https://maak-corp.tn'} className="hover:text-white transition-colors"><strong>MAAK CORP</strong></Link>, All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer