'use client'
export default function TimelineItem({item, isLast}){
    return (
        <>
        <div className="flex flex-row gap-6 md:gap-10 relative">

            <div className="flex flex-col items-center relative">
                <div className="w-4 h-4 rounded-full"
                     style={{ backgroundColor: 'var(--accent)'}}>
                </div>
                <div className= "w-1 h-full"
                     style={{ backgroundColor: 'var(--accent)'}}>
                </div>
            </div>

            <div className=" timeline-content flex flex-col gap-4 border-b-1 w-full" style={{ marginTop:"-7px", borderColor:"var(--border)", marginBottom: isLast ? "0px" : "40px", paddingBottom: "40px"}}>
                <p className="text-sm md:text-xl lg:text-xl" style={{color: 'var(--accent)'}}>
                    {item.period}
                </p>

                <h3 className="text-base md:text-2xl lg:text-2xl font-semibold">
                    {item.title || item.degree}
                </h3>

                <p className="text-sm md:text-lg lg:text-lg" style={{color: 'var(--gray-text)'}}>
                    {item.company || item.institution}
                </p>

                <p className="text-xs md:text-sm lg:text-sm leading-relaxed" style={{color: 'var(--gray-text)'}}>
                    {item.description}
                </p>
            </div>
        </div>
        <style jsx >
            {`
                @media (max-width: 768px) {
                    .timeline-content {
                        padding-top: 4px !important;
                    }
                }
        `}
        </style>
        </>
    )
}