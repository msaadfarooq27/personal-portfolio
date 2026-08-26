'use client'
import { personalInfo } from "@/data/personal";
import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import SkillTag from "./SkillTag";
import { useEffect, useState } from "react";
import ArrowIcon from "./ArrowIcon";

export default function About(){
    const [showAll, setShowAll] = useState(false);
    const [skillsPerRow, setSkillsPerRow] = useState(9);
    const [visibleSkills, setVisibleSkills] = useState([]);
    const [isHovered, setIsHovered] =  useState(false);

    useEffect((effect)=> {
        const calculateSkillsPerRow = () => {
            const width = window.innerWidth;

            if(width < 640) return 3;
            if(width < 768) return 4;
            if(width < 1024) return 6;
            return 9;
        };

        const updateLayout = () => {
            const perRow = calculateSkillsPerRow();
            setSkillsPerRow(perRow);
            
            const initialVisible = perRow * 3;
            setVisibleSkills(
                showAll 
                    ? personalInfo.topSkills 
                    : personalInfo.topSkills.slice(0, initialVisible)
            );
        };

        updateLayout();
        window.addEventListener('resize', updateLayout);
        return () => window.removeEventListener('resize', updateLayout)
    }, [showAll]);

    const toggleShowAll = () => {
        setShowAll(!showAll)
    };
    const needsShowMore = personalInfo.topSkills.length > (skillsPerRow * 3);

    return (
        <SectionWrapper id="about" paddingTop= "25px" paddingBottom="25px">
            <SectionHeading title={'ABOUT ME'}/>
            <div>
                <h3 className="font-semibold text-base md:text-lg lg:text-lg" style={{ marginBottom: '20px', color: 'var(--foreground)', lineHeight: "1.5"}}>
                    {personalInfo.bio.impression}
                </h3>

                <div style={{ marginBottom: '24px'}}>
                    {personalInfo.bio.paragraphs.map((paragraph, index) => (
                       <p key={index} className="text-base md:text-lg lg:text-lg leading-relaxed" 
                          style={{ color: 'var(--gray-text)', lineHeight: '1.4', marginBottom: index < personalInfo.bio.paragraphs.length - 1 ? '20px' : '0'}}>
                          {paragraph}
                       </p> 
                    ))}
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2 md:gap-4 lg:gap-4" style={{ justifyItems: "center", alignItems: "center"}}>
                     {visibleSkills.map((skill, index) => (
                        <SkillTag key={index} skill={skill}/>
                     ))}
                </div>
               {needsShowMore && (
    <div className="flex justify-center" style={{ marginTop: '20px' }}>
        <button
            onClick={toggleShowAll}
            className="flex items-center gap-3 font-semibold text-sm md:text-base lg:text-lg"
            style={{
                color: 'var(--gray-text)',
                border: 'none',
                cursor: 'pointer',
            }}
            onMouseEnter={ ()=> setIsHovered(true) }
            onMouseLeave={ ()=> setIsHovered(false) }
        >
            <span style={{ marginTop: '-3px'}}>{showAll ? 'Show Less' : 'Show More'}</span>
            <ArrowIcon isHovered={isHovered} isOpen={showAll} direction="updown"/>
        </button>
    </div>
            )}
            </div>
           
        </SectionWrapper>
    )
}