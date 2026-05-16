import { Github, FileText, Activity } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Automated Network Configuration Backup System",
        description: "Python-based automation tool that securely connects to network devices using SSH and automatically backs up running configurations with timestamped storage.",
        status: "Completed",
        statusColor: "text-green-500 bg-green-500/10 border-green-500/20",
        tech: ["Python", "Netmiko", "Cisco", "SSH", "Automation"],
        image: "/projects/prj1.png",
        githubUrl: "https://github.com/Dune-Wid/network-config-backup.git"
    },
    {
        id: 2,
        title: "Secure Office Network Design",
        description: "Designed and simulated a segmented office network with VLANs, ACLs, DHCP, DNS, and secure remote management practices.",
        status: "Lab Project",
        statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
        image: "/projects/prj2.png",
        githubUrl: "https://github.com/Dune-Wid/secure-office-network.git",
        tech: ["Cisco Packet Tracer", "VLANs", "Networking", "ACLs", "Security"]
    },
    {
        id: 3,
        title: "Network Vulnerability Scanner",
        description: "Python-based network scanning tool that identifies active hosts, open ports, and basic security risks within a simulated environment.",
        status: "Planned Project",
        statusColor: "text-blue-500 bg-blue-500/10 border-blue-500/20",
        image: "/projects/prj3.png",
        githubUrl: "https://github.com/Dune-Wid/network-vulnerability-scanner.git",
        tech: ["Python", "Nmap", "Linux", "Cybersecurity"]
    }
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-6 relative bg-secondary/5 border-y border-border/50">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 md:flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Technical <span className="text-primary">Projects</span></h2>
                        <div className="h-1 w-12 bg-primary rounded-full mb-4 md:mb-0"></div>
                    </div>
                    <p className="text-muted-foreground text-md font-medium">Hands-on implementations in infrastructure and security.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[440px]">
                            
                            {/* Technical Visual / Diagram */}
                            <div className="h-48 relative bg-secondary/20 flex flex-col items-center justify-center border-b border-border p-0 overflow-hidden">
                                <div className={`absolute top-4 right-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border flex items-center gap-1.5 z-10 bg-background/80 backdrop-blur-sm ${project.statusColor}`}>
                                   <div className={`w-1.5 h-1.5 rounded-full ${project.statusColor.split(' ')[0].replace('text-', 'bg-')}`}></div> 
                                   <span className={project.statusColor.split(' ')[0]}>{project.status}</span>
                                </div>
                                
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                ) : (
                                    <div className="flex flex-col items-center p-4">
                                        <Activity className="h-12 w-12 text-muted-foreground/30 mb-2 group-hover:scale-110 transition-transform duration-500" />
                                        <span className="text-xs font-mono text-muted-foreground/50">Technical Diagram Placeholder</span>
                                    </div>
                                )}
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tech) => (
                                        <span className="px-2.5 py-1 text-[11px] font-bold tracking-wide border rounded border-primary/20 text-primary bg-primary/5 uppercase" key={tech}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 pt-5 border-t border-border/50">
                                    <a href={project.githubUrl || "#"} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-bold bg-secondary/50 hover:bg-secondary py-2.5 rounded-lg transition-colors border border-border">
                                        <Github size={14} /> GitHub
                                    </a>
                                    <a href={`${project.githubUrl}#readme`} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-bold text-primary hover:bg-primary/10 py-2.5 rounded-lg transition-colors border border-primary/20">
                                        <FileText size={14} /> Case Study
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