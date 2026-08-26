
export default function ServiceCard({service}){

    return (
        <div className="flex flex-col border rounded-3xl text-center gap-3 basis-full md:basis-1/3 lg:basis-1/3 h-full"
             style={{borderColor: 'var(--accent)', padding: "25px 23px"
             }}>
            <div className="flex justify-center">
                <img
                 src={`/images/icons/${service.icon}.svg`}
                 alt={service.title}
                 className="w-16 h-16"
                 loading="lazy"
                 />
            </div>
            <h3 className="font-semibold text-base md:text-lg lg:text-lg"
                style={{color: 'var(--foreground)'}}>{service.title}</h3>
            <p className="text-xs md:text-sm lg:text-sm leading-relaxed"
               style={{ color: 'var(--gray-text)'}}>
               {service.description}
            </p>
        </div>
    )
}