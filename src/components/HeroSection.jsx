import { Download, Eye, Github } from "lucide-react";
import cvFile from "../assets/Duneth_Widanapathirana_Resume.pdf";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight opacity-0 animate-fade-in text-foreground leading-tight">
                        Networking, Cybersecurity & <br className="hidden md:block"/> 
                        <span className="text-primary">Infrastructure Automation</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-1 leading-relaxed">
                        IT Undergraduate focused on building secure network solutions, cybersecurity projects, and automation systems using Python, Linux, and Cisco technologies.
                    </p>
                    
                    <div className="pt-6 flex flex-col items-center opacity-0 animate-fade-in-delay-2">
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">Currently Learning</span>
                        <div className="flex flex-wrap justify-center gap-3">
                            {["CCNA Fundamentals", "Python Automation", "Linux Administration", "Network Security", "Wireshark Analysis"].map((tag) => (
                                <span key={tag} className="px-4 py-1.5 text-xs font-semibold border rounded-md border-primary/20 text-primary bg-primary/5 hover:bg-primary/10 transition-colors shadow-sm cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="pt-10 flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-delay-3">
                        <a href="#projects" className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_4px_14px_0_rgba(var(--color-primary),0.39)] hover:-translate-y-0.5 w-full sm:w-auto">
                            <Eye size={18} /> View Projects
                        </a>
                        <a href={cvFile} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl border border-border bg-card text-foreground font-semibold transition-all duration-300 hover:border-primary/50 hover:-translate-y-0.5 w-full sm:w-auto">
                            <Download size={18} /> Download Resume
                        </a>
                        <a href="https://github.com/Dune-Wid" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl border border-border bg-card text-foreground font-semibold transition-all duration-300 hover:border-foreground/50 hover:-translate-y-0.5 w-full sm:w-auto">
                            <Github size={18} /> GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};