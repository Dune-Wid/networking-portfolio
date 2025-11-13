import {Github} from "lucide-react";
import {ArrowRight} from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Global Museum Network Design (WCPA Project)",
        description: "Designed and deployed a scalable enterprise network for multiple international branches, ensuring secure connectivity, segmentation, and redundancy across locations.",
        image: "/projects/prj1.png",
        tags: ["Cisco Packet Tracer", "Wireshark"],
        skills: ["VLANs", "EIGRP", "BGP", "HSRP", "ACLs", "Redundancy"],
        githubUrl: "#",
    },

    {
        id: 2,
        title: "Small Office Network with VLANs and DHCP",
        description: "Built a small-office network for multiple departments, featuring automated IP management, segmented traffic, and secure internal communication.",
        image: "/projects/prj2.png",
        tags: ["Cisco Packet Tracer"],
        skills: ["VLANs", "DHCP", "ACLs", "Static Rounting", "Wireless"],
        githubUrl: "#",
    },

    {
        id: 3,
        title: "Network Traffic Monitoring and Analysis",
        description: "Analyzed live network traffic to identify communication patterns, latency, and security issues, using packet inspection for troubleshooting insights.",
        image: "/projects/prj3.png",
        tags: ["Wireshark", "VirtualBox"],
        skills: ["Packet Analysis", "Protocols", "Troubleshooting", "Security"],
        githubUrl: "#",
    }

    

]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">A collection of hands-on networking projects showcasing my skills in network design, configuration, and analysis using real-world scenarios and industry tools.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-3xl overflow-hidden shadow-xs card-hover">
                        
                        <div className="h-48 overflow-hidden rounded-xl">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.skills.map((skill) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full border-secondary/50 text-foreground/80 bg-secondary/10" key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 mt-2">{project.description}</p>

                        <div className="flex justify-center ">
                                <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="blank"><Github size={20}/></a>
                        </div>

                    </div>
            
                ))}

            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/Dune-Wid" target="blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">Check My GitHub <ArrowRight size={16}/></a>
            </div>

        </div>
    </section>
};