import Image from "next/image"

export default function ContactInfo({src , alt, width, height, children, marginLeft}){
    return (
        <div className="flex flex-row gap-3 items-center w-full overflow-hidden">
            <Image
                 src={src}
                 alt={alt}
                 width={width}
                 height={height}
                 className="opacity-100 flex-shrink-0"
                 style={{ marginTop: "3px", marginLeft: marginLeft}}
            />
            <p className="text-sm md:text-base lg:text-base whitespace-normal break-words"
                style={{color: "var(--gray-text)", maxWidth: "100%"}}
            >{children}</p>
        </div>
                               
    )
}