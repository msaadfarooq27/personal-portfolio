'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NavBar(){

    const [activeSection, setActiveSection] = useState('home');
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isButtonHovered, setIsButtonHovered] = useState(false);  

    const menuItems = [
        {name: 'Home', href: '#home'},
        {name: 'About', href: '#about'},
        {name: 'Services', href: '#services'},
        {name: 'Projects', href: '#projects'},
        {name: 'Certifications', href: '#certifications'},
        {name: 'Experience', href: '#experience'},
        {name: 'Education', href: '#education',
        },
    ];

    useEffect(()=> {
        const handleScroll = () => {
            const sections = menuItems.map(item => item.href.slice(1));
            const middle = window.innerHeight / 2;
            let found = false;

            for(const section of sections){
                const element = document.getElementById(section);
                if(element){
                    const rect = element.getBoundingClientRect();
                    if(rect.top <= middle && rect.bottom >= middle){
                        setActiveSection(section);
                        found = true;
                        break;
                    }
                }
            }

            if(!found){
                setActiveSection('');
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => window.removeEventListener('scroll', handleScroll, { passive: true });
    }, []);

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md"
                    style={{ backgroundColor: 'rgba(18, 18, 18, 0.1)'}}>
            <div className="max-w-7xl mx-auto" 
                 style={{ 
                     paddingLeft: '40px',
                     paddingRight: '40px',
                     paddingTop: '10px',
                     paddingBottom: '10px'
                 }}>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.a href="#home" className="font-bold" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)' }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        whileHover={{ scale: 1.2, rotate: 1 }}
                        whileTap={{ scale: 0.95 }} 
                    >
                            <span>SAAD</span>
                        <motion.span 
                                        style={{ color: 'var(--accent)', display: 'inline-block' }}
                                         initial={{ y: -20, opacity: 0, scale: 0.8 }}
                                        animate={{ y: 0, opacity: 1, scale: 1 }}
                                        transition={{
                                        type: 'spring',
                                        stiffness: 250,
                                        damping: 7,
                                        delay: 0.2,
                                        }}
                                        >.</motion.span>
                    </motion.a>

                    {/* Desktop Menu - Hidden on Mobile */}
                    <div className="hidden lg:flex items-center flex-1 justify-center" 
                         style={{ gap: '3rem' }}>
                        {menuItems.map((item) => {
                            const sectionId = item.href.slice(1);
                            const isActive = activeSection === sectionId;
                            const isHovered = hoveredItem === item.name;

                            return (
                                <a aria-current = {isActive ? 'page': undefined}
                                   key={item.name}
                                   href={item.href}
                                   className="transition-colors"
                                   style={{ 
                                       color: (isActive || isHovered) ? 'var(--accent)' : 'var(--foreground)',
                                       fontSize: '1rem',
                                       textDecoration: 'none',
                                       fontWeight: (isActive || isHovered) ? '500' : "400",
                                       transform: (isActive || isHovered) ? 'scale(1.1)' : 'scale(1)',
                                       transition: 'all 0.1s ease-in',
                                       display: 'inline-block'
                                       
                                   }}
                                   onMouseEnter={() => setHoveredItem(item.name)}
                                   onMouseLeave={() => setHoveredItem(null)}>
                                    {item.name} 
                                </a> 
                            );       
                        })}
                    </div>

                    {/* Hire Me Button - Always Visible */}
                    <button 
                        className="rounded-full font-semibold transition-all"
                        style={{ 
                            backgroundColor: 'var(--accent)', 
                            color: isButtonHovered ? 'var(--background)' : 'var(--foreground)',
                            padding: '8px 30px',
                            fontSize: '1rem',
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: isButtonHovered ? '0 0 25px rgba(113, 197, 173, 0.6)' : 'none',
                            minWidth: '100px'
                        }}
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: "smooth"})}>
                        Hire Me
                    </button>
                </div>
            </div>
        </nav>
    )
}