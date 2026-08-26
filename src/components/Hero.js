'use client'

import { personalInfo } from '@/data/personal';
import { reqPrefix } from '@/utils/cloudReq';
import { useEffect, useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isHireMeHovered, setIsHireMeHovered] = useState(false);
  const [isTypingComplete, setISTypingComplete] = useState(false);
  const [typedText, setTypedText] = useState('');

  const fulltext = `Hi, I am ${personalInfo.name}.`;
  
  const isAvailable = personalInfo.availability.toLowerCase().includes('available') && 
                      !personalInfo.availability.toLowerCase().includes('unavailable');

  useEffect(()=> {
    let currentIndex =  0;
    let typingInterval;
    let pauseTimeout;

    const startTyping = () => {
      setTypedText('');
      setISTypingComplete(false);
      currentIndex = 0;

      typingInterval = setInterval(( )=> {
        if(currentIndex < fulltext.length){
          setTypedText(fulltext.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setISTypingComplete(true);

          pauseTimeout = setTimeout(()=> {
          startTyping();
        }, 5000)
        }
      }, 100)
    };

      startTyping();
      return () => {
        clearInterval(typingInterval);
        clearTimeout(pauseTimeout);
      }
  }, [fulltext])

  return (
    <SectionWrapper id="home" paddingTop="10px" paddingBottom="0px">
        <div className="grid md:grid-cols-5" style={{ gap: '30px' }}>
          {/* Left Content - 60% */}
          <div className="md:col-span-3 lg:col-span-3 ">
            {/* Name */}
            <p style={{ 
              color: 'var(--gray-text)',
              fontSize: '0.95rem',
              marginBottom: '20px',
              marginTop: '20px'
            }}>
              {/* Hi, I am <span>{personalInfo.name}</span> */}
              {typedText}
              {!isTypingComplete && <span className='typing-cursor'>|</span>}
            </p>
            
            {/* Title */}
            <h1 className="font-bold text-3xl lg:text-6xl" style={{ 
            //   fontSize: 'clamp(2.5rem, 5vw, 3.50rem)',
              lineHeight: '1.4',
              marginBottom: '20px'
            }}>
              {personalInfo.titleOne}<span style={{ color: 'var(--accent)' }}>{" " + personalInfo.titleSec}</span>
            </h1>
            
            {/* Tagline */}
            <p className='text-base md:text-lg lg:text-lg' style={{ 
              color: 'var(--gray-text)',
              lineHeight: '1.4',
              marginBottom: '50px'
            }}>
              {personalInfo.tagline}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap" style={{ gap: '16px', marginBottom: '28px' }}>
              {/* Hire Me Button */}
              <button 
                className="rounded-full font-semibold transition-all"
                style={{ 
                  backgroundColor: 'var(--accent)', 
                  color: isHireMeHovered ? 'var(--background)' : 'var(--foreground)',
                  boxShadow: isHireMeHovered ? '0 0 25px rgba(113, 197, 173, 0.6)' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '6px 30px',
                  fontSize: '1rem',
                  minWidth: '130px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={() => setIsHireMeHovered(true)}
                onMouseLeave={() => setIsHireMeHovered(false)}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Hire Me
              </button>
              
              {/* Download CV Button */}
              <a 
                href={`${reqPrefix}${personalInfo.resume}`}
                download
                className="rounded-full font-semibold cv-button"
                style={{ 
                  backgroundColor: 'transparent',
                  color: 'var(--accent)',
                  border: '1.5px solid var(--accent)',
                  textDecoration: 'none',
                  padding: '6px 18px',
                  fontSize: '1rem',
                  minWidth: '130px',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                Download CV
              </a>
            </div>

            {/* Availability Status */}
            <div className="flex items-center" style={{ gap: '15px' }}>
              <span 
                className="rounded-full dot-blink"
                style={{ 
                  width: '10px',
                  height: '10px',
                  backgroundColor: isAvailable ? 'var(--accent)' : '#ef4444',
                  transition: 'all 0.2s ease'
                }}>
              </span>
              <span style={{ 
                color: 'var(--gray-text)',
                fontSize: '1.05rem'
              }}>
                {personalInfo.availability}
              </span>
            </div>
          </div>

          {/* Right Image - 40% - CHANGED: justify-end instead of justify-center */}
          <div className="md:flex items-center justify-end md:col-span-2">
            <motion.div className="w-full" style={{ marginTop: '-30px'}}
                        initial={{ opacity: 0, x: 150 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          type: 'tween',
                          duration: 1.5,
                          delay: 0.3,
                        }}>
              <img 
                src={`${reqPrefix}v1761845295/hero-image_dfqezs.png`}
                alt={personalInfo.name}
                className="w-full h-auto hero-image"
                style={{ 
                  maxHeight: '600px',
                  objectFit: 'contain',
                  transform: 'scale(0.9)',
                }}
                loading='lazy'
                decoding='async'
              />
            </motion.div>
          </div>
        </div>

      <style jsx>{`
        /* Download CV button blinking border */
        @keyframes borderBlink {
          0%, 100% {
            box-shadow: 0 0 0 rgba(113, 197, 173, 0);
          }
          50% {
            box-shadow: 0 0 25px rgba(113, 197, 173, 0.7);
          }
        }

        .cv-button:hover {
          animation: borderBlink 1.5s infinite;
        }

        /* Availability dot blinking - ADDED */
        @keyframes dotBlink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        .dot-blink {
          animation: dotBlink 1.5s infinite;
        }

        .hero-image {
          mask-image: 
          linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 70%),
          linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 5%, rgba(0,0,0,1) 30%);
         -webkit-mask-image: 
          linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 70%),
          linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 5%, rgba(0,0,0,1) 30%);
          mask-composite: intersect;
          -webkit-mask-composite: source-in;
        }

        #home {
        scroll-margin-top: 100px;
        }

        .typing-cursor {
        animation: blink 0.7s infinite;
        margin-left: 2px;
        }

        @keyframes blink {
        0%, 50% {
          opacity: 1;
          }
        51%, 100% {
        opacity: 0;
        }
        }
        
      `}</style>
    </SectionWrapper>
  );
}