export default function ArrowIcon({ isHovered, isOpen, direction = "right"}){

    let transformValue =  "none";

    if(direction === "updown"){
        transformValue = `rotate(${isOpen ? -90 : 90}deg)`;
    } else if (direction === "right"){
        transformValue = "none";
    }

    return (
        <svg 
            className="w-5 h-5 md:w-6 md:h-6 lg:h-6 lg:w-6"
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{
                transition: 'all 0.3s ease'
            }}
        >
            {/* Background circle */}
            <circle 
                cx="20" 
                cy="20" 
                r="19" 
                style={{
                    fill: isHovered ? 'var(--accent)' : 'rgba(113, 197, 173, 0.1)',
                    transition: 'all 0.3s ease'
                }}
            />
            
            {/* Arrow icon */}
            <path 
                d="M16 12L24 20L16 28" 
                style={{
                    stroke: isHovered ? 'var(--foreground)' : 'var(--accent)',
                    strokeWidth: '3',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    fill: 'none',
                    transition: 'all 0.3s ease',
                    transform: transformValue,
                    transformOrigin: '20px 20px',
                }}
            />
        </svg>
    )
}