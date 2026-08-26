import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";

export default function Projects(){

    return (
        <SectionWrapper id="projects" paddingBottom="25px" paddingTop="25px">
            <SectionHeading title="MY PROJECTS"/>
            <div className="flex flex-col gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </SectionWrapper>
    )
}