import { personalInfo } from "@/data/personal";
import Image from "next/image";
import ContactInfo from "./ContactInfo";
import QuickLink from "./QuickLink";

export default function Footer(){

    return (
            <footer id="#footer" className="w-full"  style={{backgroundColor: 'var(--footer)'}}>
                
            <div className="max-w-7xl mx-auto flex flex-col" style={{ 
                        paddingTop: "60px",
                        paddingBottom: "20px",
                        paddingLeft: "40px",
                        paddingRight: "40px"
                }}>
                
                <div className="flex flex-col md:flex-row lg:flex-row gap-16 justify-between" style={{paddingBottom: "30px"}}>
                
                    <div className="flex flex-col gap-6 md:basis-1/2 lg:basis-1/2">

                       <a href="#home" className="font-bold" style={{ fontSize: '1.8rem' }}>
                        SAAD<span style={{color:'var(--accent)'}}>.</span>
                        </a>

                        <p className="text-xs md:text-base lg:text-base leading-relaxed"
                         style={{ color: 'var(--gray-text)', maxWidth: '520px'}}>
                           {personalInfo.summary}
                        </p>

                        <div className="flex flex-row flex-wrap items-center gap-3">
                        {personalInfo.social.map((soc, index) => {
                            return (
                                <a
                                    key={index}
                                    href={soc.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={soc.name}
                                    className="transition transform hover:scale-110"
                                >
                                    <Image
                                        src={soc.icon}
                                        alt={soc.name}
                                        width={30}
                                        height={30}
                                        className="opacity-100"
                                    />
                                </a>
                            )
                        })}
                        </div>
                    </div>

                    <div className="grid grid-col-1 grid-cols-2  md:gap-10 lg:gap-10 basis-full md:basis-1/2 lg:basis-1/2">

                        <div className="flex flex-col gap-6 basis-1/3 md:basis-1/2 lg:basis-3/5">
                        <h3 className="font-semibold text-base md:text-lg lg:text-lg whitespace-nowrap" style={{color: 'var(--accent)'}}>Quick Links</h3>
                        <div className="flex flex-col gap-3">
                            <QuickLink href="#home">Home</QuickLink>
                            <QuickLink href="#about">About</QuickLink>
                            <QuickLink href="#services">Services</QuickLink>
                            <QuickLink href="#projects">Projects</QuickLink>
                            <QuickLink href="#experience">Experience</QuickLink>
                        </div>
                    </div>

                      <div  className="flex flex-col gap-6 basis-2/3 md:basis-1/2 lg:basis-2/5 min-w-0">
                                <h3 className="font-semibold text-base md:text-lg lg:text-lg" style={{color: 'var(--accent)'}}>Contact</h3>
                            <div className="flex flex-col gap-4 w-full">
                                    <ContactInfo 
                                        src={personalInfo.phone.icon}
                                        alt={personalInfo.phone.name}
                                        width={20}
                                        height={20}
                                    >{personalInfo.phone.number}</ContactInfo>
                                    <ContactInfo 
                                        src={personalInfo.email.icon}
                                        alt={personalInfo.email.name}
                                        width={20}
                                        height={20}
                                    >{personalInfo.email.id}</ContactInfo>
                                    <ContactInfo 
                                        src={personalInfo.location.icon}
                                        alt={personalInfo.location.name}
                                        width={14}
                                        height={14}
                                        marginLeft={'3px'}
                                    >{personalInfo.location.area}</ContactInfo>
                           </div>
                    </div>
                    </div>
                </div>
                <div
                    className="text-center text-xs md:text-sm border-t"
                    style={{
                     borderColor: "var(--border)",
                        paddingTop: "20px",
                        marginTop: "20px",
                        color: "var(--gray-text)",
                          }}
                            >
                        © {new Date().getFullYear()} Muhammad Saad Farooq. All rights reserved.
                     </div>
                </div>
            </footer>
    )
}