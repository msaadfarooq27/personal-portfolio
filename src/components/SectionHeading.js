export default function SectionHeading ({ title }) {
    return (
        <div className="flex flex-col items-center text-center" style={{ marginBottom: '40px'}}>
            <h2 className="font-bold text-2xl md:text-4xl lg:text-4xl">
                {title}
            </h2>
            <div className="h-1.5 w-16 md:w-20 lg:w-30 rounded-full" style={{backgroundColor: "var(--accent)", marginTop: '8px'}}></div>
        </div>
    )
};