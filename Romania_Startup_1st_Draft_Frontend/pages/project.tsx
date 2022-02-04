import Gallery from "src/components/project-dash/Gallery";
import Sidebar from "src/components/project-dash/Project.Sidebar";
import ProjectLayout from "src/layout/ProjectLayout";

export default function Portfolio() {
    return (
        <ProjectLayout left={<Gallery />} right={<Sidebar />} />
    )
}


