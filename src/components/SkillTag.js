'use client';

export default function SkillTag({skill, isExtra, fitContent = false}){
    return (
        <div className="rounded-full font-normal text-xs md:text-base lg:text-base inline-flex items-center justify-center skill-tag"
             style={{ border: '1px solid var(--accent)' , padding:'6px 18px', width: fitContent? "auto" : '100%', maxWidth: fitContent? "fit-content" : "130px", height: '38px', color: isExtra ? 'var(--accent)': 'var(--foreground)',
                      backgroundColor: 'transparent', transition: 'all 0.3s ease'}}>
            {skill}

            <style jsx>
               {`
                @keyframes skill-tag {
                 0%, 100% {
                             box-shadow: 0 0 0 rgba(113, 197, 173, 0);
                 }
                    50% {
                            box-shadow: 0 0 25px rgba(113, 197, 173, 0.7);
                 }
                }

                .skill-tag:hover {
                animation: skill-tag 1.5s infinite;
                font-weight: bold;
                }

               `} 
            </style>
        </div>
    )
}