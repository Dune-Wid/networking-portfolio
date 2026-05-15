import { Network, ShieldCheck, Terminal, Server, Activity } from "lucide-react";

export const AboutSection = () => {
    const focusAreas = [
        { name: "Network Infrastructure", icon: Network },
        { name: "Cybersecurity Fundamentals", icon: ShieldCheck },
        { name: "Python Automation", icon: Terminal },
        { name: "Linux Systems", icon: Server },
        { name: "Network Monitoring", icon: Activity }
    ];

    return (
        <section id="about" className="py-24 px-6 relative bg-secondary/5 border-y border-border/50">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-2">About <span className="text-primary">Me</span></h2>
                    <div className="h-1 w-12 bg-primary rounded-full"></div>
                </div>

                <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-medium">
                    <p>
                        I am an IT undergraduate passionate about networking, cybersecurity, and infrastructure automation. My interests include network design, Linux systems, security fundamentals, and automating repetitive infrastructure tasks using Python.
                    </p>
                    <p>
                        I enjoy building hands-on projects that combine networking concepts with security practices and automation workflows. Currently, I am strengthening my knowledge in Cisco networking, Linux environments, and cybersecurity fundamentals while developing practical technical projects.
                    </p>
                </div>

                <div className="mt-16 pt-10 border-t border-border">
                    <h3 className="text-sm font-mono uppercase tracking-[0.15em] text-muted-foreground mb-6">Focus Areas</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {focusAreas.map((area, idx) => {
                            const Icon = area.icon;
                            return (
                                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-colors shadow-sm">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <span className="font-semibold text-sm">{area.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};