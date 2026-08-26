import { certifications } from "@/data/certifications";
import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import CertificationCard from "./CertificationCard";

export default function Certifications(){

    return (
        <SectionWrapper id="certifications" paddingBottom="25px" paddingTop="25px">
            <SectionHeading title="COURSES & CERTIFICATIONS"/>
             <div className="flex flex-col gap-8">
                            {certifications.map((certificate) => (
                                <CertificationCard key={certificate.id} certification={certificate}/>
                            ))}
                        </div>
        </SectionWrapper>
    )
}