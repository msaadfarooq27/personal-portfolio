import { experience } from "@/data/experience";
import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import TimelineItem from "./TimelineItem";

export default function Experience(){
    let isLast;
    return (
        <SectionWrapper id="experience" paddingBottom="25px" paddingTop="25px" >
            <SectionHeading  title="WORK EXPERIENCE"/>
            {experience.map((item, index) => {
                isLast = index === experience.length -1;
                return <TimelineItem key={item.id} item={item} isLast={isLast}/>
})}
        </SectionWrapper>
    )
}