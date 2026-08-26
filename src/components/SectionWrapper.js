'use client'
export default function SectionWrapper({id, children, paddingTop, paddingBottom}) {

    return (
        <section id={id}>
            <div className="max-w-7xl mx-auto w-full" style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: paddingTop, paddingBottom: paddingBottom}}>
                {children}
            </div>

        <style jsx >
        {`
            #${id} {
                scroll-margin-top: 60px;
            }
        `}
         </style>
        </section>
    )
}