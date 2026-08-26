import { education } from "@/data/education";
import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import TimelineItem from "./TimelineItem";

export default function Education(){
 let isLast;
    return (
        <SectionWrapper id="education" paddingBottom="25px" paddingTop="25px" >
        <SectionHeading title="EDUCATION"/>
        {education.map((item, index) => {
             isLast = index === education.length -1;
            return <TimelineItem key={item.id} item={item} isLast={isLast}/>
})}
        </SectionWrapper>
    )
}