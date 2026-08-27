'use client'

import { useState } from 'react';
import { reqPrefix } from "@/utils/cloudReq";
import SkillTag from "./SkillTag";
import ArrowIcon from "./ArrowIcon";

export default function ProjectCard({project}){
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`flex flex-col md:flex-row lg:flex-row gap-6 md:gap-10 lg:gap-10 items-stretch`}>
            <div className="md:basis-2/5 lg:basis-2/5 w-full md:h-auto lg:h-auto md:w-auto lg:w-auto">
                <div className="flex rounded-3xl overflow-hidden bg-gray-100/6" style={{ width: "100%"}}>
                    <img
                    src={reqPrefix + project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                    loading='lazy'
                    decoding='async'
                    />
                </div>
            </div>

            <div className="w-full md:basis-3/5 lg:basis-3/5">
                <div className="flex flex-col gap-3 md:h-full lg:h-full">
                    <div className="flex items-center gap-4 flex-shrink-0">
                        <h3 className="text-base md:text-2xl lg:text-2xl font-semibold">{project.title}</h3>
                        <a aria-label={`Open ${project.title} Website`}
                            href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer' 
                            style={{marginTop: "6px"}}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <ArrowIcon isHovered={isHovered} />
                        </a>
                    </div>
                    <p className="text-sm md:text-lg lg:text-lg md:line-clamp-4 lg:line-clamp-4" style={{color: 'var(--gray-text)'}}>{project.description}</p>
                    <div className="flex flex-wrap gap-2 flex-shrink-0">
                        {project.techTags.map((skill, index) => (
                            <SkillTag key={index} skill={skill} fitContent/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}