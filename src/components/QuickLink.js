'use client'
export default function QuickLink({href, children}){

    return (
         <a href={href}
            className="text-sm md:text-base lg:text-base quick-item transition-colors duration-300 hover:[color:var(--foreground)]"
            style={{ color: "var(--gray-text)" }}
            >
            {children}
         </a>
    )
}