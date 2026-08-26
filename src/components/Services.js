import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services(){

    return (
        <SectionWrapper id="services"  paddingTop= "25px" paddingBottom="25px">
            <SectionHeading title="MY SERVICES"/>
            <div className="flex flex-col md:flex-row lg:flex-row gap-8 items-stretch">
                {services.map((service, index)=> (
                    <ServiceCard key={index} service={service}/>
                ))}

            </div>
        </SectionWrapper>
    )
}