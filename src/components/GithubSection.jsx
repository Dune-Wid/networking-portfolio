import { Github, GitFork, Star, ArrowRight } from "lucide-react";

export const GithubSection = () => {
    return (
        <section className="py-24 px-6 relative">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6 border border-primary/20">
                            <Github className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Code & Documentation</h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            My GitHub repositories contain networking labs, cybersecurity experiments, and automation-focused learning projects with documentation and source code.
                        </p>
                        <a 
                            href="https://github.com/Dune-Wid" 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-bold transition-all hover:bg-foreground/90 text-sm"
                        >
                            View GitHub Profile <ArrowRight size={16} />
                        </a>
                    </div>
                    
                    <div className="flex-1 w-full space-y-4">
                        {/* Mock Repo Cards */}
                        {[
                            { name: "network-automation-scripts", desc: "Python tools for automated Cisco configuration.", lang: "Python" },
                            { name: "ccna-packet-tracer-labs", desc: "Simulations of enterprise network designs.", lang: "Cisco PT" }
                        ].map((repo, i) => (
                            <div key={i} className="p-5 rounded-xl border border-border/60 bg-card hover:border-primary/50 transition-colors shadow-sm">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-primary font-mono text-sm">{repo.name}</h4>
                                    <div className="flex gap-3 text-xs text-muted-foreground">
                                        <span className="flex items-center gap-1"><Star size={12}/> 0</span>
                                        <span className="flex items-center gap-1"><GitFork size={12}/> 0</span>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">{repo.desc}</p>
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                    <span className="text-xs font-medium text-foreground/70">{repo.lang}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};