import { Network, Shield, Terminal, Settings } from "lucide-react";

const skillCategories = [
    {
        title: "Networking",
        icon: Network,
        skills: ["VLANs", "Routing & Switching", "OSPF", "DHCP", "DNS", "NAT", "ACLs", "Cisco Packet Tracer"]
    },
    {
        title: "Cybersecurity",
        icon: Shield,
        skills: ["Wireshark", "Nmap", "Linux Security Basics", "Firewall Concepts", "SSH", "Network Monitoring"]
    },
    {
        title: "Automation & Programming",
        icon: Terminal,
        skills: ["Python", "Netmiko", "Bash", "Git & GitHub", "Basic Automation Scripting"]
    },
    {
        title: "Tools & Platforms",
        icon: Settings,
        skills: ["Linux", "Ubuntu", "VirtualBox", "VS Code", "GitHub"]
    }
];

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    Technical <span className="text-primary">Skills</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => {
                        const Icon = category.icon;
                        return (
                            <div key={idx} className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-all duration-300 group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-colors">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill) => (
                                        <span key={skill} className="px-4 py-2 text-sm font-medium border border-border rounded-lg bg-background text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};