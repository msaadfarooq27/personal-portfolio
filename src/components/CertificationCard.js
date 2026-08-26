'use client'

import { useState } from 'react';
import { reqPrefix } from "@/utils/cloudReq";
import ArrowIcon from "./ArrowIcon";

export default function CertificationCard({certification}){
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className= {`flex flex-col md:flex-row lg:flex-row gap-6 md:gap-10 lg:gap-10 items-center border-b-1`} style={{paddingBottom: "40px", borderColor:"var(--border)"}}>
            <div className="md:basis-1/6 lg:basis-1/6 md:h-auto lg:h-auto h-40 md:w-auto lg:w-auto w-40">
                <div className="flex items-center rounded-3xl overflow-hidden items-center h-full">
                    <img
                    src={reqPrefix + certification.image}
                    alt={certification.title}
                    className="w-full h-full object-contain"
                    loading='lazy'
                    decoding='async'
                    />
                </div>
            </div>

            <div className="w-full md:basis-5/6 lg:basis-5/6">
            <div className="flex flex-col gap-4 items-center lg:items-start md:items-start ">
                <div className="flex items-center gap-4">
                <h3 className="text-base md:text-2xl lg:text-2xl font-semibold" style={{ color: "var(--foreground)"}}>{certification.title}</h3>
                <a 
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open credential for ${certification.title}`} 
                    style={{marginTop: "6px"}}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <ArrowIcon isHovered={isHovered} />
                </a>
                </div>
                <p className= "text-sm md:text-lg lg:text-lg" style={{color: 'var(--accent)'}}>{certification.issuer}</p>
                  <div className="flex flex-wrap gap-3">
                       <p className= "text-sm md:text-xl lg:text-xl" style={{color: 'var(--gray-text)'}}>{`Issued: ${certification.date}`}</p>
                       <span className= "text-sm md:text-xl lg:text-xl" style={{color: 'var(--gray-text)'}}>-</span>
                       <p className= "text-sm md:text-xl lg:text-xl" style={{color: 'var(--gray-text)'}}>{certification.expiryDate ? `Expires: ${certification.expiryDate}` : 'Does not expire' }</p>
                </div>
            </div>
         
            </div>
        </div>
    )
}