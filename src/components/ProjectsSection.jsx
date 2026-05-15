import { Github, Code2 } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Automated Network Configuration Backup System",
        description: "Python-based automation tool that connects to network devices using SSH and automatically backs up running configurations.",
        image: "/projects/prj1.png",
        tech: ["Python", "Netmiko", "Cisco", "SSH"],
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Secure Small Office Network Design",
        description: "Designed and simulated a segmented office network with VLANs, ACLs, DHCP, DNS, and secure remote management.",
        image: "/projects/prj2.png",
        tech: ["Cisco Packet Tracer", "Networking", "VLANs"],
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Network Vulnerability Scanner",
        description: "Python script that scans devices, detects open ports, and generates basic vulnerability reports.",
        image: "/projects/prj3.png",
        tech: ["Python", "Nmap", "Linux"],
        githubUrl: "#"
    }
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative bg-secondary/5">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Showcasing hands-on implementations in network infrastructure, security analysis, and Python automation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group flex flex-col bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300">
                            
                            <div className="h-52 overflow-hidden relative bg-muted/30 flex items-center justify-center border-b border-border">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} 
                                />
                                <div className="absolute inset-0 hidden items-center justify-center text-muted-foreground">
                                    <Code2 size={48} opacity={0.2} />
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tech) => (
                                        <span className="px-3 py-1 text-xs font-semibold border rounded-md border-primary/20 text-primary bg-primary/5" key={tech}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-5 border-t border-border">
                                    <a href={project.githubUrl} className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                                        <Github size={18} /> View Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};